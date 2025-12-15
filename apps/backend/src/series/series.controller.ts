import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiExtraModels,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
import { SeriesService } from './series.service';
import { CreateSeriesDto } from './dto/createSeries.dto';
import { GetSeriesDto } from './dto/getSeries.dto';
import { AddArticleToSeriesDto } from './dto/addArticleToSeries.dto';
import { AddSeriesToSeriesDto } from './dto/addSeriesToSeries.dto';
import { SeriesIdParamDto } from './dto/seriesIdParam.dto';
import { SeriesNameParamDto } from './dto/seriesNameParam.dto';
import { ArticleTitleParamForSeriesDto } from './dto/articleTitleParamForSeries.dto';
import { SeriesResponseDto } from './dto/response/series.response.dto';
import { PaginationEntity } from 'src/common/entity/pagination.entity';

@ApiTags('시리즈')
@ApiExtraModels(PaginationEntity, SeriesResponseDto)
@Controller('series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}

  @ApiOperation({
    summary: '시리즈 목록 조회',
    description:
      '토픽 및 정렬 조건을 바탕으로 시리즈 목록을 페이지네이션하여 제공합니다.',
  })
  @ApiOkResponse({
    description: '시리즈 목록',
    schema: {
      allOf: [
        { $ref: getSchemaPath(PaginationEntity) },
        {
          properties: {
            data: {
              type: 'array',
              items: { $ref: getSchemaPath(SeriesResponseDto) },
            },
          },
        },
      ],
    },
  })
  @Get()
  async getSeries(
    @Query() dto: GetSeriesDto,
  ): Promise<PaginationEntity<SeriesResponseDto>> {
    return this.seriesService.getSeries(dto);
  }

  @ApiOperation({
    summary: '시리즈 생성',
    description: '새로운 시리즈를 생성합니다.',
  })
  @ApiCreatedResponse({
    description: '생성된 시리즈 정보',
    type: SeriesResponseDto,
  })
  @Post()
  async createSeries(@Body() dto: CreateSeriesDto): Promise<SeriesResponseDto> {
    return this.seriesService.createSeries(dto);
  }

  @ApiOperation({
    summary: '이름으로 시리즈 조회',
    description: '시리즈 이름을 통해 상세 정보를 가져옵니다.',
  })
  @ApiParam({
    name: 'name',
    description: '조회할 시리즈 이름',
  })
  @ApiOkResponse({
    description: '시리즈 상세 정보',
    type: SeriesResponseDto,
  })
  @Get('by-name/:name')
  async getSeriesByName(
    @Param() params: SeriesNameParamDto,
  ): Promise<SeriesResponseDto> {
    return this.seriesService.getSeriesByName(params.name);
  }

  @ApiOperation({
    summary: '아티클 제목으로 시리즈 검색',
    description: '특정 아티클이 포함된 시리즈 목록을 조회합니다.',
  })
  @ApiParam({
    name: 'title',
    description: '아티클 제목',
  })
  @ApiOkResponse({
    description: '조건에 맞는 시리즈 목록',
    type: SeriesResponseDto,
    isArray: true,
  })
  @Get('by-article-title/:title')
  async getSeriesByArticleTitle(
    @Param() params: ArticleTitleParamForSeriesDto,
  ): Promise<SeriesResponseDto[]> {
    return this.seriesService.getSeriesByArticleTitle(params.title);
  }

  @ApiOperation({
    summary: '시리즈에 아티클 추가',
    description: '시리즈 ID 기준으로 아티클을 연결합니다.',
  })
  @ApiParam({
    name: 'id',
    description: '시리즈 ID',
  })
  @ApiOkResponse({
    description: '수정된 시리즈 정보',
    type: SeriesResponseDto,
  })
  @Patch(':id/article')
  async addArticle(
    @Param() params: SeriesIdParamDto,
    @Body() dto: AddArticleToSeriesDto,
  ): Promise<SeriesResponseDto> {
    return this.seriesService.addArticle(params.id, dto);
  }

  @ApiOperation({
    summary: '시리즈에 하위 시리즈 추가',
    description: '시리즈 ID 기준으로 다른 시리즈를 하위로 연결합니다.',
  })
  @ApiParam({
    name: 'id',
    description: '상위 시리즈 ID',
  })
  @ApiOkResponse({
    description: '수정된 시리즈 정보',
    type: SeriesResponseDto,
  })
  @Patch(':id/series')
  async addSeries(
    @Param() params: SeriesIdParamDto,
    @Body() dto: AddSeriesToSeriesDto,
  ): Promise<SeriesResponseDto> {
    return this.seriesService.addSeries(params.id, dto);
  }

  @ApiOperation({
    summary: '시리즈에서 아티클 제거',
    description: '시리즈에 포함된 특정 아티클을 분리합니다.',
  })
  @ApiParam({
    name: 'id',
    description: '시리즈 ID',
  })
  @ApiParam({
    name: 'articleId',
    description: '제거할 아티클 ID',
  })
  @ApiOkResponse({
    description: '수정된 시리즈 정보',
    type: SeriesResponseDto,
  })
  @Delete(':id/article/:articleId')
  async removeArticleById(
    @Param('id') id: string,
    @Param('articleId') articleId: string,
  ): Promise<SeriesResponseDto> {
    return this.seriesService.removeArticleById(id, articleId);
  }

  @ApiOperation({
    summary: '시리즈에서 하위 시리즈 제거',
    description: '하위로 연결된 시리즈를 제거합니다.',
  })
  @ApiParam({
    name: 'id',
    description: '상위 시리즈 ID',
  })
  @ApiParam({
    name: 'seriesId',
    description: '제거할 하위 시리즈 ID',
  })
  @ApiOkResponse({
    description: '수정된 시리즈 정보',
    type: SeriesResponseDto,
  })
  @Delete(':id/series/:seriesId')
  async removeSeriesById(
    @Param('id') id: string,
    @Param('seriesId') seriesId: string,
  ): Promise<SeriesResponseDto> {
    return this.seriesService.removeSeriesById(id, seriesId);
  }
}
