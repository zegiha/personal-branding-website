import { Controller, Get, Post, Body, Query, Param, Patch, Delete } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiExtraModels,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/createArticle.dto';
import { UpdateArticleDto } from './dto/updateArticle.dto';
import { GetArticlesDto } from './dto/getArticles.dto';
import { ArticleIdParamDto } from './dto/articleIdParam.dto';
import { ArticleTitleParamDto } from './dto/articleTitleParam.dto';
import { ArticleResponseDto } from './dto/response/article.response.dto';
import { ArticleSummaryResponseDto } from './dto/response/articleSummary.response.dto';
import { ArticleCountResponseDto } from './dto/response/articleCount.response.dto';
import { DeleteArticleResponseDto } from './dto/response/deleteArticle.response.dto';
import { PaginationEntity } from 'src/common/entity/pagination.entity';

@ApiTags('아티클')
@ApiExtraModels(
  PaginationEntity,
  ArticleSummaryResponseDto,
  ArticleResponseDto,
  ArticleCountResponseDto,
  DeleteArticleResponseDto,
)
@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @ApiOperation({
    summary: '아티클 목록 조회',
    description: '태그와 정렬 조건을 기반으로 페이지네이션된 아티클 목록을 반환합니다.',
  })
  @ApiOkResponse({
    description: '페이지네이션된 아티클 목록',
    schema: {
      allOf: [
        { $ref: getSchemaPath(PaginationEntity) },
        {
          properties: {
            data: {
              type: 'array',
              items: { $ref: getSchemaPath(ArticleSummaryResponseDto) },
            },
          },
        },
      ],
    },
  })
  @Get()
  async getArticles(@Query() dto: GetArticlesDto): Promise<PaginationEntity<ArticleSummaryResponseDto>> {
    return this.articleService.getArticles(dto);
  }

  @ApiOperation({
    summary: '아티클 생성',
    description: '새로운 아티클을 생성하고 생성된 전체 데이터를 반환합니다.',
  })
  @ApiCreatedResponse({
    description: '생성된 아티클 정보',
    type: ArticleResponseDto,
  })
  @Post()
  async createArticle(@Body() dto: CreateArticleDto): Promise<ArticleResponseDto> {
    return this.articleService.createArticle(dto);
  }

  @ApiOperation({
    summary: '제목으로 아티클 검색',
    description: '검색어가 포함된 제목을 가진 아티클을 찾습니다.',
  })
  @ApiParam({
    name: 'title',
    description: '검색할 아티클 제목',
  })
  @ApiOkResponse({
    description: '검색된 아티클 요약 목록',
    type: ArticleSummaryResponseDto,
    isArray: true,
  })
  @Get('search/:title')
  async searchByTitle(@Param() params: ArticleTitleParamDto): Promise<ArticleSummaryResponseDto[]> {
    return this.articleService.searchByTitle(params.title);
  }

  @ApiOperation({
    summary: '제목으로 아티클 상세 조회',
    description: '정확한 제목으로 아티클을 조회합니다.',
  })
  @ApiParam({
    name: 'title',
    description: '조회할 아티클 제목',
  })
  @ApiOkResponse({
    description: '아티클 상세 정보',
    type: ArticleResponseDto,
  })
  @Get(':title')
  async getArticleByTitle(@Param() params: ArticleTitleParamDto): Promise<ArticleResponseDto> {
    return this.articleService.getArticleByTitle(params.title);
  }

  @ApiOperation({
    summary: '아티클 수정',
    description: 'ID에 해당하는 아티클을 수정합니다.',
  })
  @ApiParam({
    name: 'id',
    description: '수정할 아티클 ID',
  })
  @ApiOkResponse({
    description: '수정된 아티클 정보',
    type: ArticleResponseDto,
  })
  @Patch(':id')
  async updateArticle(
    @Param() params: ArticleIdParamDto,
    @Body() dto: UpdateArticleDto,
  ): Promise<ArticleResponseDto> {
    return this.articleService.updateArticle(params.id, dto);
  }

  @ApiOperation({
    summary: '아티클 삭제',
    description: 'ID에 해당하는 아티클을 삭제합니다.',
  })
  @ApiParam({
    name: 'id',
    description: '삭제할 아티클 ID',
  })
  @ApiOkResponse({
    description: '삭제 처리 결과',
    type: DeleteArticleResponseDto,
  })
  @Delete(':id')
  async deleteArticle(@Param() params: ArticleIdParamDto): Promise<DeleteArticleResponseDto> {
    return this.articleService.deleteArticle(params.id);
  }

  @ApiOperation({
    summary: '조회 수 증가',
    description: '특정 아티클의 조회 수를 1 증가시킵니다.',
  })
  @ApiParam({
    name: 'id',
    description: '대상 아티클 ID',
  })
  @ApiOkResponse({
    description: '증가 후 집계 정보',
    type: ArticleCountResponseDto,
  })
  @Post(':id/view')
  async addView(@Param() params: ArticleIdParamDto): Promise<ArticleCountResponseDto> {
    return this.articleService.addView(params.id);
  }

  @ApiOperation({
    summary: '공유 수 증가',
    description: '특정 아티클의 공유 수를 1 증가시킵니다.',
  })
  @ApiParam({
    name: 'id',
    description: '대상 아티클 ID',
  })
  @ApiOkResponse({
    description: '증가 후 집계 정보',
    type: ArticleCountResponseDto,
  })
  @Post(':id/share')
  async addShare(@Param() params: ArticleIdParamDto): Promise<ArticleCountResponseDto> {
    return this.articleService.addShare(params.id);
  }

  @ApiOperation({
    summary: '좋아요 수 증가',
    description: '특정 아티클의 좋아요 수를 1 증가시킵니다.',
  })
  @ApiParam({
    name: 'id',
    description: '대상 아티클 ID',
  })
  @ApiOkResponse({
    description: '증가 후 집계 정보',
    type: ArticleCountResponseDto,
  })
  @Post(':id/like')
  async addLike(@Param() params: ArticleIdParamDto): Promise<ArticleCountResponseDto> {
    return this.articleService.addLike(params.id);
  }
}
