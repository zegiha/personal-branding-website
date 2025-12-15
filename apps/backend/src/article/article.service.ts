import {
  Injectable,
  BadRequestException,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArticleDto } from './dto/createArticle.dto';
import { UpdateArticleDto } from './dto/updateArticle.dto';
import { GetArticlesDto } from './dto/getArticles.dto';
import { ArticleResponseDto } from './dto/response/article.response.dto';
import { ArticleSummaryResponseDto } from './dto/response/articleSummary.response.dto';
import { ArticleCountResponseDto } from './dto/response/articleCount.response.dto';
import { DeleteArticleResponseDto } from './dto/response/deleteArticle.response.dto';
import { plainToInstance } from 'class-transformer';
import { PaginationEntity } from 'src/common/entity/pagination.entity';
import { parseNotionBlockWithChildMap } from 'notion-article-kit/server';
import { FileService } from 'src/file/file.service';
import {
  extractNotionImageUrls,
  replaceImageUrls,
} from './helpers/image-url.helper';

@Injectable()
export class ArticleService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly fileService: FileService,
  ) {}

  async getArticles({
    limit = 10,
    page = 1,
    tag,
    sort = 'latest',
  }: GetArticlesDto): Promise<PaginationEntity<ArticleSummaryResponseDto>> {
    try {
      // Build where clause for tag filtering
      const where: Prisma.ArticleWhereInput = tag
        ? {
            tags: {
              some: {
                tag: {
                  content: tag,
                },
              },
            },
          }
        : {};

      // Build orderBy clause for sorting
      let orderBy: Prisma.ArticleOrderByWithRelationInput[] | undefined;

      if (sort === 'popularity') {
        // For popularity sorting, we'll fetch all matching articles and sort in memory
        // because Prisma doesn't support computed fields in orderBy
        const allArticles = await this.prisma.article.findMany({
          where,
          include: {
            tags: {
              include: {
                tag: true,
              },
            },
          },
        });

        // Calculate popularity score and sort
        const sortedArticles = allArticles
          .map((article) => ({
            ...article,
            popularityScore:
              article.like_count * 4 +
              article.share_count * 4 +
              article.view_count * 2,
          }))
          .sort((a, b) => b.popularityScore - a.popularityScore);

        // Apply pagination manually
        const paginatedArticles = sortedArticles.slice(
          (page - 1) * limit,
          page * limit,
        );
        const count = sortedArticles.length;

        return plainToInstance(
          PaginationEntity<ArticleSummaryResponseDto>,
          {
            totalPage: Math.ceil(count / limit),
            totalData: count,
            currentPage: page,
            data: paginatedArticles.map((article) =>
              plainToInstance(
                ArticleSummaryResponseDto,
                {
                  ...article,
                  tags: article.tags.map((t) => t.tag.content),
                  content: JSON.stringify(article.content),
                },
                { excludeExtraneousValues: true },
              ),
            ),
          },
          { excludeExtraneousValues: true },
        );
      } else {
        // Latest sorting (default)
        orderBy = [{ created_at: 'desc' }];

        const [articles, count] = await Promise.all([
          this.prisma.article.findMany({
            where,
            skip: (page - 1) * limit,
            take: limit,
            orderBy,
            include: {
              tags: {
                include: {
                  tag: true,
                },
              },
            },
          }),
          this.prisma.article.count({ where }),
        ]);

        return plainToInstance(
          PaginationEntity<ArticleSummaryResponseDto>,
          {
            totalPage: Math.ceil(count / limit),
            totalData: count,
            currentPage: page,
            data: articles.map((article) =>
              plainToInstance(
                ArticleSummaryResponseDto,
                {
                  ...article,
                  tags: article.tags.map((t) => t.tag.content),
                  content: JSON.stringify(article.content),
                },
                { excludeExtraneousValues: true },
              ),
            ),
          },
          { excludeExtraneousValues: true },
        );
      }
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2002':
            throw new BadRequestException('Duplicate entry detected');
          case 'P2003':
            throw new NotFoundException(
              `Foreign key constraint failed: ${error.meta?.field_name || 'Related entity not found'}`,
            );
          case 'P2025':
            throw new NotFoundException('Record not found');
          default:
            throw new InternalServerErrorException(
              `Database error: ${error.code}`,
            );
        }
      }

      console.error('Unexpected error in getArticles:', error);
      throw new InternalServerErrorException('Failed to get articles');
    }
  }

  async createArticle(dto: CreateArticleDto): Promise<ArticleResponseDto> {
    try {
      // Notion block 파싱
      let parsedContent;
      try {
        parsedContent = parseNotionBlockWithChildMap(dto.block, dto.childMap);
      } catch (error) {
        console.error('Failed to parse Notion block:', error);
        throw new BadRequestException(
          'Invalid Notion block format or structure',
        );
      }

      // Notion file 타입 이미지 URL 추출 및 R2 업로드
      const notionImageUrls = extractNotionImageUrls(parsedContent);
      if (notionImageUrls.length > 0) {
        try {
          const uploadedImages = await this.fileService.uploadImageUrl({
            urls: notionImageUrls,
          });
          parsedContent = replaceImageUrls(
            parsedContent,
            uploadedImages,
            notionImageUrls,
          );
        } catch (error) {
          console.error('Failed to upload Notion images to R2:', error);
          throw new InternalServerErrorException(
            'Failed to process article images',
          );
        }
      }

      // Tag들을 먼저 찾거나 생성
      const tagRecords = dto.tags
        ? await Promise.all(
            dto.tags.map((tagContent) =>
              this.prisma.tag.upsert({
                where: { content: tagContent },
                update: {},
                create: { content: tagContent },
              }),
            ),
          )
        : [];

      // Article 생성하면서 ArticleTag로 연결
      const article = await this.prisma.article.create({
        data: {
          title: dto.title,
          content: parsedContent,
          cover_image_url: dto.cover_image_url,
          action_id: dto.action_id,
          subproject_id: dto.subproject_id,
          read_time: dto.read_time,
          description: dto.description,
          tags: {
            create: tagRecords.map((tag) => ({
              tag: {
                connect: { id: tag.id },
              },
            })),
          },
          series: {
            create: dto.series_ids?.map((seriesId) => ({
              series: {
                connect: { id: seriesId },
              },
            })),
          },
        },
        include: {
          tags: {
            include: {
              tag: true,
            },
          },
          series: {
            include: {
              series: true,
            },
          },
        },
      });

      return plainToInstance(
        ArticleResponseDto,
        {
          ...article,
          tags: article.tags.map((t) => t.tag.content),
          content: JSON.stringify(article.content),
        },
        { excludeExtraneousValues: true },
      );
    } catch (error) {
      // Prisma 에러 처리
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2002':
            throw new BadRequestException('Duplicate entry detected');
          case 'P2003':
            throw new NotFoundException(
              `Foreign key constraint failed: ${error.meta?.field_name || 'Related entity not found'}`,
            );
          case 'P2025':
            throw new NotFoundException('Record not found');
          default: {
            console.error('Unexpected error in createArticle:', error);
            throw new InternalServerErrorException(
              `Database error: ${error.code}`,
            );
          }
        }
      }

      // 이미 NestJS 예외인 경우 그대로 던지기
      if (
        error instanceof BadRequestException ||
        error instanceof NotFoundException
      ) {
        throw error;
      }

      // 예상치 못한 에러
      console.error('Unexpected error in createArticle:', error);
      throw new InternalServerErrorException('Failed to create article');
    }
  }

  async addView(id: string): Promise<ArticleCountResponseDto> {
    try {
      const article = await this.prisma.article.findUnique({
        where: { id },
      });
      if (!article) {
        throw new NotFoundException('Article not found');
      }

      const updatedArticle = await this.prisma.article.update({
        where: { id },
        data: { view_count: article.view_count + 1 },
      });

      return plainToInstance(
        ArticleCountResponseDto,
        {
          id: updatedArticle.id,
          view_count: updatedArticle.view_count,
          share_count: updatedArticle.share_count,
          like_count: updatedArticle.like_count,
        },
        { excludeExtraneousValues: true },
      );
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2002':
            throw new BadRequestException('Duplicate entry detected');
          case 'P2003':
            throw new NotFoundException(
              `Foreign key constraint failed: ${error.meta?.field_name || 'Related entity not found'}`,
            );
          case 'P2025':
            throw new NotFoundException('Record not found');
          default:
            throw new InternalServerErrorException(
              `Database error: ${error.code}`,
            );
        }
      }

      if (error instanceof NotFoundException) {
        throw error;
      }

      console.error('Unexpected error in addView:', error);
      throw new InternalServerErrorException('Failed to add view');
    }
  }

  async addShare(id: string): Promise<ArticleCountResponseDto> {
    try {
      const article = await this.prisma.article.findUnique({
        where: { id },
      });
      if (!article) {
        throw new NotFoundException('Article not found');
      }

      const updatedArticle = await this.prisma.article.update({
        where: { id },
        data: { share_count: article.share_count + 1 },
      });

      return plainToInstance(
        ArticleCountResponseDto,
        {
          id: updatedArticle.id,
          view_count: updatedArticle.view_count,
          share_count: updatedArticle.share_count,
          like_count: updatedArticle.like_count,
        },
        { excludeExtraneousValues: true },
      );
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2002':
            throw new BadRequestException('Duplicate entry detected');
          case 'P2003':
            throw new NotFoundException(
              `Foreign key constraint failed: ${error.meta?.field_name || 'Related entity not found'}`,
            );
          case 'P2025':
            throw new NotFoundException('Record not found');
          default:
            throw new InternalServerErrorException(
              `Database error: ${error.code}`,
            );
        }
      }

      if (error instanceof NotFoundException) {
        throw error;
      }

      console.error('Unexpected error in addShare:', error);
      throw new InternalServerErrorException('Failed to add share');
    }
  }

  async addLike(id: string): Promise<ArticleCountResponseDto> {
    try {
      const article = await this.prisma.article.findUnique({
        where: { id },
      });
      if (!article) {
        throw new NotFoundException('Article not found');
      }

      const updatedArticle = await this.prisma.article.update({
        where: { id },
        data: { like_count: article.like_count + 1 },
      });

      return plainToInstance(
        ArticleCountResponseDto,
        {
          id: updatedArticle.id,
          view_count: updatedArticle.view_count,
          share_count: updatedArticle.share_count,
          like_count: updatedArticle.like_count,
        },
        { excludeExtraneousValues: true },
      );
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2002':
            throw new BadRequestException('Duplicate entry detected');
          case 'P2003':
            throw new NotFoundException(
              `Foreign key constraint failed: ${error.meta?.field_name || 'Related entity not found'}`,
            );
          case 'P2025':
            throw new NotFoundException('Record not found');
          default:
            throw new InternalServerErrorException(
              `Database error: ${error.code}`,
            );
        }
      }

      if (error instanceof NotFoundException) {
        throw error;
      }

      console.error('Unexpected error in addLike:', error);
      throw new InternalServerErrorException('Failed to add like');
    }
  }

  async getArticleByTitle(title: string): Promise<ArticleResponseDto> {
    try {
      const article = await this.prisma.article.findUnique({
        where: { title },
        include: {
          tags: {
            include: {
              tag: true,
            },
          },
        },
      });
      if (!article) {
        throw new NotFoundException('Article not found');
      }

      return plainToInstance(
        ArticleResponseDto,
        {
          ...article,
          tags: article.tags.map((t) => t.tag.content),
          content: JSON.stringify(article.content),
        },
        { excludeExtraneousValues: true },
      );
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2002':
            throw new BadRequestException('Duplicate entry detected');
          case 'P2003':
            throw new NotFoundException(
              `Foreign key constraint failed: ${error.meta?.field_name || 'Related entity not found'}`,
            );
          case 'P2025':
            throw new NotFoundException('Record not found');
          default:
            throw new InternalServerErrorException(
              `Database error: ${error.code}`,
            );
        }
      }

      if (error instanceof NotFoundException) {
        throw error;
      }

      console.error('Unexpected error in getArticleByTitle:', error);
      throw new InternalServerErrorException('Failed to get article by title');
    }
  }

  async updateArticle(
    id: string,
    dto: UpdateArticleDto,
  ): Promise<ArticleResponseDto> {
    try {
      const article = await this.prisma.article.findUnique({
        where: { id },
      });
      if (!article) {
        throw new NotFoundException('Article not found');
      }

      let parsedContent;
      try {
        parsedContent = parseNotionBlockWithChildMap(dto.block, dto.childMap);
      } catch (error) {
        console.error('Failed to parse Notion block:', error);
        throw new BadRequestException(
          'Invalid Notion block format or structure',
        );
      }

      // Notion file 타입 이미지 URL 추출 및 R2 업로드
      const notionImageUrls = extractNotionImageUrls(parsedContent);
      if (notionImageUrls.length > 0) {
        try {
          const uploadedImages = await this.fileService.uploadImageUrl({
            urls: notionImageUrls,
          });
          parsedContent = replaceImageUrls(
            parsedContent,
            uploadedImages,
            notionImageUrls,
          );
        } catch (error) {
          console.error('Failed to upload Notion images to R2:', error);
          throw new InternalServerErrorException(
            'Failed to process article images',
          );
        }
      }

      // Tag들을 먼저 찾거나 생성
      const tagRecords = dto.tags
        ? await Promise.all(
            dto.tags.map((tagContent) =>
              this.prisma.tag.upsert({
                where: { content: tagContent },
                update: {},
                create: { content: tagContent },
              }),
            ),
          )
        : [];

      // 기존 태그 관계 삭제
      await this.prisma.articleTag.deleteMany({
        where: { article_id: id },
      });

      // Article 업데이트 및 새 태그 연결
      const updatedArticle = await this.prisma.article.update({
        where: { id },
        data: {
          title: dto.title,
          content: parsedContent,
          cover_image_url: dto.cover_image_url,
          action_id: dto.action_id,
          subproject_id: dto.subproject_id,
          read_time: dto.read_time,
          description: dto.description,
          tags: {
            create: tagRecords.map((tag) => ({
              tag: {
                connect: { id: tag.id },
              },
            })),
          },
        },
        include: {
          tags: {
            include: {
              tag: true,
            },
          },
        },
      });

      return plainToInstance(
        ArticleResponseDto,
        {
          ...updatedArticle,
          tags: updatedArticle.tags.map((t) => t.tag.content),
          content: JSON.stringify(updatedArticle.content),
        },
        { excludeExtraneousValues: true },
      );
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2002':
            throw new BadRequestException('Duplicate entry detected');
          case 'P2003':
            throw new NotFoundException(
              `Foreign key constraint failed: ${error.meta?.field_name || 'Related entity not found'}`,
            );
          case 'P2025':
            throw new NotFoundException('Record not found');
          default:
            throw new InternalServerErrorException(
              `Database error: ${error.code}`,
            );
        }
      }

      if (
        error instanceof BadRequestException ||
        error instanceof NotFoundException
      ) {
        throw error;
      }

      console.error('Unexpected error in updateArticle:', error);
      throw new InternalServerErrorException('Failed to update article');
    }
  }

  async searchByTitle(title: string): Promise<ArticleSummaryResponseDto[]> {
    try {
      const articles = await this.prisma.article.findMany({
        where: {
          title: { contains: title },
        },
        include: {
          tags: {
            include: {
              tag: true,
            },
          },
        },
      });

      return articles.map((article) =>
        plainToInstance(
          ArticleSummaryResponseDto,
          {
            ...article,
            tags: article.tags.map((t) => t.tag.content),
            content: JSON.stringify(article.content),
          },
          { excludeExtraneousValues: true },
        ),
      );
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2002':
            throw new BadRequestException('Duplicate entry detected');
          case 'P2003':
            throw new NotFoundException(
              `Foreign key constraint failed: ${error.meta?.field_name || 'Related entity not found'}`,
            );
          case 'P2025':
            throw new NotFoundException('Record not found');
          default:
            throw new InternalServerErrorException(
              `Database error: ${error.code}`,
            );
        }
      }

      console.error('Unexpected error in searchByTitle:', error);
      throw new InternalServerErrorException(
        'Failed to search articles by title',
      );
    }
  }

  async deleteArticle(id: string): Promise<DeleteArticleResponseDto> {
    try {
      const article = await this.prisma.article.findUnique({
        where: { id },
      });
      if (!article) {
        throw new NotFoundException('Article not found');
      }

      // Delete related records in a transaction to ensure atomicity
      await this.prisma.$transaction([
        // Clean up ArticleTag relations (critical for MVP - articles with tags)
        this.prisma.articleTag.deleteMany({
          where: { article_id: id },
        }),
        // Clean up ArticleOnSeries relations (prevents future issues)
        this.prisma.articleOnSeries.deleteMany({
          where: { article_id: id },
        }),
        // Finally delete the article
        this.prisma.article.delete({ where: { id } }),
      ]);

      return plainToInstance(
        DeleteArticleResponseDto,
        {
          success: true,
          message: `Article '${article.title}' deleted successfully`,
        },
        { excludeExtraneousValues: true },
      );
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2002':
            throw new BadRequestException('Duplicate entry detected');
          case 'P2003':
            throw new NotFoundException(
              `Foreign key constraint failed: ${error.meta?.field_name || 'Related entity not found'}`,
            );
          case 'P2025':
            throw new NotFoundException('Record not found');
          default:
            throw new InternalServerErrorException(
              `Database error: ${error.code}`,
            );
        }
      }

      if (error instanceof NotFoundException) {
        throw error;
      }

      console.error('Unexpected error in deleteArticle:', error);
      throw new InternalServerErrorException('Failed to delete article');
    }
  }
}
