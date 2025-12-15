import { Controller, Get, Post, Delete, Body, Query, Param } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiExtraModels,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
import { HeroService } from './hero.service';
import { CreateHeroDto } from './dto/createHero.dto';
import { GetHeroesDto } from './dto/getHeroes.dto';
import { HeroIdParamDto } from './dto/heroIdParam.dto';
import { HeroResponseDto } from './dto/response/hero.response.dto';
import { DeleteHeroResponseDto } from './dto/response/deleteHero.response.dto';
import { PaginationEntity } from 'src/common/entity/pagination.entity';

@ApiTags('히어로')
@ApiExtraModels(PaginationEntity, HeroResponseDto, DeleteHeroResponseDto)
@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @ApiOperation({
    summary: '히어로 목록 조회',
    description: '히어로 배너를 페이지네이션 형태로 조회합니다.',
  })
  @ApiOkResponse({
    description: '히어로 목록',
    schema: {
      allOf: [
        { $ref: getSchemaPath(PaginationEntity) },
        {
          properties: {
            data: {
              type: 'array',
              items: { $ref: getSchemaPath(HeroResponseDto) },
            },
          },
        },
      ],
    },
  })
  @Get()
  async getHeroes(@Query() dto: GetHeroesDto): Promise<PaginationEntity<HeroResponseDto>> {
    return this.heroService.getHeroes(dto);
  }

  @ApiOperation({
    summary: '히어로 생성',
    description: '새로운 히어로 배너를 생성합니다.',
  })
  @ApiCreatedResponse({
    description: '생성된 히어로 정보',
    type: HeroResponseDto,
  })
  @Post()
  async createHero(@Body() dto: CreateHeroDto): Promise<HeroResponseDto> {
    return this.heroService.createHero(dto);
  }

  @ApiOperation({
    summary: '히어로 상세 조회',
    description: 'ID에 해당하는 히어로 상세 정보를 가져옵니다.',
  })
  @ApiParam({
    name: 'id',
    description: '히어로 ID',
  })
  @ApiOkResponse({
    description: '히어로 상세 정보',
    type: HeroResponseDto,
  })
  @Get(':id')
  async getHeroById(@Param() params: HeroIdParamDto): Promise<HeroResponseDto> {
    return this.heroService.getHeroById(params.id);
  }

  @ApiOperation({
    summary: '히어로 삭제',
    description: 'ID에 해당하는 히어로를 삭제합니다.',
  })
  @ApiParam({
    name: 'id',
    description: '삭제할 히어로 ID',
  })
  @ApiOkResponse({
    description: '삭제 결과',
    type: DeleteHeroResponseDto,
  })
  @Delete(':id')
  async deleteHero(@Param() params: HeroIdParamDto): Promise<DeleteHeroResponseDto> {
    return this.heroService.deleteHero(params.id);
  }
}
