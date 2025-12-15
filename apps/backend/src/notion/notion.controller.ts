import { Controller, Get, Param } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { NotionService } from './notion.service';
import { NotionDatabaseResponseDto } from './dto/response/notionDatabase.response.dto';
import { NotionPageResponseDto } from './dto/response/notionPage.response.dto';
import { NotionBlockResponseDto } from './dto/response/notionBlock.response.dto';

@ApiTags('노션')
@Controller('notion')
export class NotionController {
  constructor(private readonly notionService: NotionService) {}

  @ApiOperation({
    summary: 'Notion 데이터베이스 목록 조회',
    description: '연결된 모든 Notion 데이터베이스 정보를 조회합니다.',
  })
  @ApiOkResponse({
    description: '데이터베이스 목록',
    type: NotionDatabaseResponseDto,
    isArray: true,
  })
  @Get('database')
  async getDatabase(): Promise<NotionDatabaseResponseDto[]> {
    return this.notionService.getDatabase();
  }

  @ApiOperation({
    summary: 'Notion 페이지 조회',
    description: '경로와 페이지 ID를 이용해 상세 페이지 정보를 조회합니다.',
  })
  @ApiParam({
    name: 'path',
    description: '데이터베이스 경로',
  })
  @ApiParam({
    name: 'id',
    description: 'Notion 페이지 ID',
  })
  @ApiOkResponse({
    description: '페이지 상세 정보',
    type: NotionPageResponseDto,
    isArray: true,
  })
  @Get('page/:path/:id')
  async getPage(
    @Param('path') path: string,
    @Param('id') id: string,
  ): Promise<NotionPageResponseDto[]> {
    return this.notionService.getPage(id, path);
  }

  @ApiOperation({
    summary: 'Notion 블록 조회',
    description: '블록 ID 기준으로 하위 블록까지 포함한 정보를 조회합니다.',
  })
  @ApiParam({
    name: 'id',
    description: '블록 ID',
  })
  @ApiOkResponse({
    description: '블록 정보',
    type: NotionBlockResponseDto,
  })
  @Get('block/:id')
  async getBlockById(@Param('id') id: string): Promise<NotionBlockResponseDto> {
    return this.notionService.getBlockById(id);
  }
}
