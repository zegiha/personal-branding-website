import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSeriesDto } from './dto/createSeries.dto';
import { GetSeriesDto } from './dto/getSeries.dto';
import { AddArticleToSeriesDto } from './dto/addArticleToSeries.dto';
import { AddSeriesToSeriesDto } from './dto/addSeriesToSeries.dto';
import { Prisma } from 'generated/prisma/client';
import { SeriesResponseDto } from './dto/response/series.response.dto';
import { PaginationEntity } from 'src/common/entity/pagination.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class SeriesService {
  constructor(private readonly prisma: PrismaService) {}

  async createSeries(dto: CreateSeriesDto): Promise<SeriesResponseDto> {
    try {
      // Topic upsert - topic이 없으면 생성
      if (dto.topics && dto.topics.length > 0) {
        await Promise.all(
          dto.topics.map((topicName) =>
            this.prisma.seriesTopic.upsert({
              where: { name: topicName },
              update: {},
              create: { name: topicName },
            }),
          ),
        );
      }

      const series = await this.prisma.series.create({
        data: {
          name: dto.name,
          description: dto.description,
          image_url: dto.image_url,
          subproject: dto.subproject_id
            ? { connect: { id: dto.subproject_id } }
            : {},
          parent_series: dto.parent_series_id
            ? { connect: { id: dto.parent_series_id } }
            : {},
          topic: dto.topics
            ? {
                connect: dto.topics.map((name) => ({ name })),
              }
            : {},
          articles: {
            create: dto.article_ids?.map((article_id) => ({
              article: { connect: { id: article_id } },
            })),
          },
        },
        include: {
          articles: true,
          nest_series: true,
          parent_series: true,
          subproject: true,
          topic: true,
        },
      });

      // nest_series는 별도로 업데이트 (자기 참조 관계)
      if (dto.nest_series_ids && dto.nest_series_ids.length > 0) {
        await this.prisma.series.update({
          where: { id: series.id },
          data: {
            nest_series: {
              connect: dto.nest_series_ids.map((id) => ({ id })),
            },
          },
        });
      }

      return plainToInstance(
        SeriesResponseDto,
        {
          ...series,
          subproject_id: series.subproject?.id,
          article_ids: series.articles.map((article) => article.article_id),
          nest_series_ids: series.nest_series.map(
            (nest_series) => nest_series.id,
          ),
          parent_series_id: series.parent_series?.id,
        },
        { excludeExtraneousValues: true },
      );
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2002':
            throw new BadRequestException('Duplicate entry detected');
          case 'P2003':
            throw new NotFoundException('Related entity not found');
          case 'P2025':
            throw new NotFoundException('Record not found');
          default: {
            console.error('Unexpected error in createSeries:', error);
            throw new InternalServerErrorException(
              `Database error: ${error.code}`,
            );
          }
        }
      }

      console.error('Unexpected error in createSeries:', error);
      throw new InternalServerErrorException('Failed to create series');
    }
  }

  async addArticle(
    seriesId: string,
    dto: AddArticleToSeriesDto,
  ): Promise<SeriesResponseDto> {
    try {
      // 시리즈와 아티클 존재 여부 확인
      const [series, article] = await Promise.all([
        this.prisma.series.findUnique({ where: { id: seriesId } }),
        this.prisma.article.findUnique({ where: { id: dto.article_id } }),
      ]);

      if (!series) {
        throw new NotFoundException(`Series not found: ${seriesId}`);
      }
      if (!article) {
        throw new NotFoundException(`Article not found: ${dto.article_id}`);
      }

      // ArticleOnSeries 레코드 생성
      await this.prisma.articleOnSeries.create({
        data: {
          article_id: dto.article_id,
          series_id: seriesId,
        },
      });

      // 업데이트된 시리즈 조회
      const updatedSeries = await this.prisma.series.findUnique({
        where: { id: seriesId },
        include: {
          articles: true,
          nest_series: true,
          parent_series: true,
          subproject: true,
          topic: true,
        },
      });

      if (!updatedSeries) {
        throw new NotFoundException(`Series not found: ${seriesId}`);
      }

      return plainToInstance(
        SeriesResponseDto,
        {
          ...updatedSeries,
          subproject_id: updatedSeries.subproject?.id,
          article_ids: updatedSeries.articles.map(
            (article) => article.article_id,
          ),
          nest_series_ids: updatedSeries.nest_series.map(
            (nest_series) => nest_series.id,
          ),
          parent_series_id: updatedSeries.parent_series?.id,
        },
        { excludeExtraneousValues: true },
      );
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2002':
            throw new BadRequestException(
              'Article already exists in this series',
            );
          case 'P2003':
            throw new NotFoundException('Related entity not found');
          case 'P2025':
            throw new NotFoundException('Record not found');
          default:
            throw new InternalServerErrorException(
              `Database error: ${error.code}`,
            );
        }
      }

      if (
        error instanceof NotFoundException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }

      console.error('Unexpected error in addArticle:', error);
      throw new InternalServerErrorException('Failed to add article to series');
    }
  }

  async addSeries(
    seriesId: string,
    dto: AddSeriesToSeriesDto,
  ): Promise<SeriesResponseDto> {
    try {
      // 시리즈 존재 여부 확인
      const [parentSeries, childSeries] = await Promise.all([
        this.prisma.series.findUnique({ where: { id: seriesId } }),
        this.prisma.series.findUnique({ where: { id: dto.series_id } }),
      ]);

      if (!parentSeries) {
        throw new NotFoundException(`Parent series not found: ${seriesId}`);
      }
      if (!childSeries) {
        throw new NotFoundException(`Child series not found: ${dto.series_id}`);
      }

      // 순환 참조 체크 (간단한 버전 - 직접적인 순환만 체크)
      if (seriesId === dto.series_id) {
        throw new BadRequestException('Cannot add series to itself');
      }
      if (childSeries.parent_series_id === seriesId) {
        throw new BadRequestException(
          'This series is already a child of the parent series',
        );
      }

      // 하위 시리즈 연결
      await this.prisma.series.update({
        where: { id: dto.series_id },
        data: {
          parent_series: {
            connect: { id: seriesId },
          },
        },
      });

      // 업데이트된 시리즈 조회
      const updatedSeries = await this.prisma.series.findUnique({
        where: { id: seriesId },
        include: {
          articles: true,
          nest_series: true,
          parent_series: true,
          subproject: true,
          topic: true,
        },
      });

      if (!updatedSeries) {
        throw new NotFoundException(`Series not found: ${seriesId}`);
      }

      return plainToInstance(
        SeriesResponseDto,
        {
          ...updatedSeries,
          subproject_id: updatedSeries.subproject?.id,
          article_ids: updatedSeries.articles.map(
            (article) => article.article_id,
          ),
          nest_series_ids: updatedSeries.nest_series.map(
            (nest_series) => nest_series.id,
          ),
          parent_series_id: updatedSeries.parent_series?.id,
        },
        { excludeExtraneousValues: true },
      );
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2002':
            throw new BadRequestException('Duplicate series relationship');
          case 'P2003':
            throw new NotFoundException('Related entity not found');
          case 'P2025':
            throw new NotFoundException('Record not found');
          default:
            throw new InternalServerErrorException(
              `Database error: ${error.code}`,
            );
        }
      }

      if (
        error instanceof NotFoundException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }

      console.error('Unexpected error in addSeries:', error);
      throw new InternalServerErrorException('Failed to add series to series');
    }
  }

  async removeArticleById(
    seriesId: string,
    articleId: string,
  ): Promise<SeriesResponseDto> {
    try {
      // ArticleOnSeries 레코드 삭제
      await this.prisma.articleOnSeries.delete({
        where: {
          article_id_series_id: {
            article_id: articleId,
            series_id: seriesId,
          },
        },
      });

      // 업데이트된 시리즈 조회
      const updatedSeries = await this.prisma.series.findUnique({
        where: { id: seriesId },
        include: {
          articles: true,
          nest_series: true,
          parent_series: true,
          subproject: true,
          topic: true,
        },
      });

      if (!updatedSeries) {
        throw new NotFoundException(`Series not found: ${seriesId}`);
      }

      return plainToInstance(
        SeriesResponseDto,
        {
          ...updatedSeries,
          subproject_id: updatedSeries.subproject?.id,
          article_ids: updatedSeries.articles.map(
            (article) => article.article_id,
          ),
          nest_series_ids: updatedSeries.nest_series.map(
            (nest_series) => nest_series.id,
          ),
          parent_series_id: updatedSeries.parent_series?.id,
        },
        { excludeExtraneousValues: true },
      );
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2025':
            throw new NotFoundException('Article not found in this series');
          default:
            throw new InternalServerErrorException(
              `Database error: ${error.code}`,
            );
        }
      }

      if (error instanceof NotFoundException) {
        throw error;
      }

      console.error('Unexpected error in removeArticleById:', error);
      throw new InternalServerErrorException(
        'Failed to remove article from series',
      );
    }
  }

  async removeSeriesById(
    seriesId: string,
    childSeriesId: string,
  ): Promise<SeriesResponseDto> {
    try {
      // 하위 시리즈의 parent_series_id를 null로 설정
      await this.prisma.series.update({
        where: { id: childSeriesId },
        data: {
          parent_series: {
            disconnect: true,
          },
        },
      });

      // 업데이트된 시리즈 조회
      const updatedSeries = await this.prisma.series.findUnique({
        where: { id: seriesId },
        include: {
          articles: true,
          nest_series: true,
          parent_series: true,
          subproject: true,
          topic: true,
        },
      });

      if (!updatedSeries) {
        throw new NotFoundException(`Series not found: ${seriesId}`);
      }

      return plainToInstance(
        SeriesResponseDto,
        {
          ...updatedSeries,
          subproject_id: updatedSeries.subproject?.id,
          article_ids: updatedSeries.articles.map(
            (article) => article.article_id,
          ),
          nest_series_ids: updatedSeries.nest_series.map(
            (nest_series) => nest_series.id,
          ),
          parent_series_id: updatedSeries.parent_series?.id,
        },
        { excludeExtraneousValues: true },
      );
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2025':
            throw new NotFoundException('Child series not found');
          default:
            throw new InternalServerErrorException(
              `Database error: ${error.code}`,
            );
        }
      }

      if (error instanceof NotFoundException) {
        throw error;
      }

      console.error('Unexpected error in removeSeriesById:', error);
      throw new InternalServerErrorException(
        'Failed to remove series from series',
      );
    }
  }

  // 재귀적으로 하위 시리즈의 모든 아티클 점수 합산
  private async calculateSeriesPopularity(seriesId: string): Promise<number> {
    const series = await this.prisma.series.findUnique({
      where: { id: seriesId },
      include: {
        articles: {
          include: {
            article: true,
          },
        },
        nest_series: true,
      },
    });

    if (!series) return 0;

    // 자기 자신의 아티클 점수 합산
    let score = series.articles.reduce((sum, { article }) => {
      return (
        sum +
        article.like_count * 4 +
        article.share_count * 4 +
        article.view_count * 2
      );
    }, 0);

    // 재귀적으로 하위 시리즈의 점수 합산
    for (const childSeries of series.nest_series) {
      score += await this.calculateSeriesPopularity(childSeries.id);
    }

    return score;
  }

  async getSeries({
    limit = 10,
    page = 1,
    topic,
    sort = 'latest',
  }: GetSeriesDto): Promise<PaginationEntity<SeriesResponseDto>> {
    try {
      // Build where clause for topic filtering
      const where: Prisma.SeriesWhereInput = topic
        ? {
            topic: {
              some: {
                name: topic,
              },
            },
          }
        : {};

      if (sort === 'popularity') {
        // Popularity 정렬: 모든 시리즈를 가져와서 인메모리 정렬
        const allSeries = await this.prisma.series.findMany({
          where,
          include: {
            articles: {
              include: {
                article: true,
              },
            },
            nest_series: true,
            parent_series: true,
            subproject: true,
            topic: true,
          },
        });

        // 각 시리즈의 popularity 점수 계산
        const seriesWithScores = await Promise.all(
          allSeries.map(async (series) => ({
            series,
            popularityScore: await this.calculateSeriesPopularity(series.id),
          })),
        );

        // Popularity 점수로 정렬
        const sortedSeries = seriesWithScores.sort(
          (a, b) => b.popularityScore - a.popularityScore,
        );

        // 페이지네이션 적용
        const paginatedSeries = sortedSeries.slice(
          (page - 1) * limit,
          page * limit,
        );
        const count = sortedSeries.length;

        return plainToInstance(
          PaginationEntity<SeriesResponseDto>,
          {
            totalPage: Math.ceil(count / limit),
            totalData: count,
            data: paginatedSeries.map(({ series }) =>
              plainToInstance(
                SeriesResponseDto,
                {
                  ...series,
                  subproject_id: series.subproject?.id,
                  article_ids: series.articles.map(
                    (article) => article.article_id,
                  ),
                  nest_series_ids: series.nest_series.map(
                    (nest_series) => nest_series.id,
                  ),
                  parent_series_id: series.parent_series?.id,
                },
                { excludeExtraneousValues: true },
              ),
            ),
          },
          { excludeExtraneousValues: true },
        );
      } else {
        // Latest 정렬: 가장 최근 아티클의 created_at 기준
        const allSeries = await this.prisma.series.findMany({
          where,
          include: {
            articles: {
              include: {
                article: true,
              },
            },
            nest_series: true,
            parent_series: true,
            subproject: true,
            topic: true,
          },
        });

        // 각 시리즈의 가장 최근 아티클 created_at 찾기
        const seriesWithLatestDate = allSeries.map((series) => {
          const latestArticle = series.articles
            .map(({ article }) => article)
            .sort((a, b) => b.created_at.getTime() - a.created_at.getTime())[0];

          return {
            series,
            latestDate: latestArticle?.created_at || new Date(0), // 아티클이 없으면 가장 오래된 날짜
          };
        });

        // Latest 날짜로 정렬
        const sortedSeries = seriesWithLatestDate.sort(
          (a, b) => b.latestDate.getTime() - a.latestDate.getTime(),
        );

        // 페이지네이션 적용
        const paginatedSeries = sortedSeries.slice(
          (page - 1) * limit,
          page * limit,
        );
        const count = sortedSeries.length;

        return plainToInstance(
          PaginationEntity<SeriesResponseDto>,
          {
            totalPage: Math.ceil(count / limit),
            totalData: count,
            data: paginatedSeries.map(({ series }) =>
              plainToInstance(
                SeriesResponseDto,
                {
                  ...series,
                  subproject_id: series.subproject?.id,
                  article_ids: series.articles.map(
                    (article) => article.article_id,
                  ),
                  nest_series_ids: series.nest_series.map(
                    (nest_series) => nest_series.id,
                  ),
                  parent_series_id: series.parent_series?.id,
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
            throw new NotFoundException('Related entity not found');
          case 'P2025':
            throw new NotFoundException('Record not found');
          default:
            throw new InternalServerErrorException(
              `Database error: ${error.code}`,
            );
        }
      }

      console.error('Unexpected error in getSeries:', error);
      throw new InternalServerErrorException('Failed to get series');
    }
  }

  async getSeriesByName(name: string): Promise<SeriesResponseDto> {
    try {
      const series = await this.prisma.series.findUnique({
        where: { name },
        include: {
          articles: true,
          nest_series: true,
          parent_series: true,
          subproject: true,
          topic: true,
        },
      });

      if (!series) {
        throw new NotFoundException(`Series not found: ${name}`);
      }

      return plainToInstance(
        SeriesResponseDto,
        {
          ...series,
          subproject_id: series.subproject?.id,
          article_ids: series.articles.map((article) => article.article_id),
          nest_series_ids: series.nest_series.map(
            (nest_series) => nest_series.id,
          ),
          parent_series_id: series.parent_series?.id,
        },
        { excludeExtraneousValues: true },
      );
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2025':
            throw new NotFoundException('Series not found');
          default:
            throw new InternalServerErrorException(
              `Database error: ${error.code}`,
            );
        }
      }

      if (error instanceof NotFoundException) {
        throw error;
      }

      console.error('Unexpected error in getSeriesByName:', error);
      throw new InternalServerErrorException('Failed to get series by name');
    }
  }

  async getSeriesByArticleTitle(title: string): Promise<SeriesResponseDto[]> {
    try {
      // 아티클 제목으로 아티클 조회
      const article = await this.prisma.article.findUnique({
        where: { title },
        include: {
          series: {
            include: {
              series: {
                include: {
                  articles: true,
                  nest_series: true,
                  parent_series: true,
                  subproject: true,
                  topic: true,
                },
              },
            },
          },
        },
      });

      if (!article) {
        throw new NotFoundException(`Article not found: ${title}`);
      }

      // 해당 아티클을 직접 가진 시리즈만 반환
      const seriesList = article.series.map(({ series }) => series);

      return seriesList.map((series) =>
        plainToInstance(
          SeriesResponseDto,
          {
            ...series,
            subproject_id: series.subproject?.id,
            article_ids: series.articles.map((article) => article.article_id),
            nest_series_ids: series.nest_series.map(
              (nest_series) => nest_series.id,
            ),
            parent_series_id: series.parent_series?.id,
          },
          { excludeExtraneousValues: true },
        ),
      );
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2025':
            throw new NotFoundException('Article not found');
          default:
            throw new InternalServerErrorException(
              `Database error: ${error.code}`,
            );
        }
      }

      if (error instanceof NotFoundException) {
        throw error;
      }

      console.error('Unexpected error in getSeriesByArticleTitle:', error);
      throw new InternalServerErrorException(
        'Failed to get series by article title',
      );
    }
  }
}
