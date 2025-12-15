import {
  Injectable,
  Inject,
  InternalServerErrorException,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import {
  Client,
  DatabaseObjectResponse,
  DataSourceObjectResponse,
  MultiSelectPropertyItemObjectResponse,
  PageObjectResponse,
  APIErrorCode,
  isNotionClientError,
  ListBlockChildrenResponse,
} from '@notionhq/client';
import {
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { plainToInstance } from 'class-transformer';
import { NOTION_CLIENT } from './notion.const';
import { NotionDatabaseResponseDto } from './dto/response/notionDatabase.response.dto';
import { NotionPageResponseDto } from './dto/response/notionPage.response.dto';
import { NotionBlockResponseDto } from './dto/response/notionBlock.response.dto';

@Injectable()
export class NotionService {
  constructor(@Inject(NOTION_CLIENT) private readonly notion: Client) {}

  // Partial 블록 타입 가드
  private isPartialBlock(
    block: BlockObjectResponse | PartialBlockObjectResponse,
  ): block is PartialBlockObjectResponse {
    return block.object === 'block' && !('type' in block);
  }

  async getPageById(id: string): Promise<PageObjectResponse> {
    try {
      // 입력 검증
      if (!id || typeof id !== 'string') {
        throw new BadRequestException('Invalid page ID format');
      }

      const res = await this.notion.pages.retrieve({
        page_id: id,
      });

      // 응답 타입 검증
      if (!('parent' in res)) {
        throw new InternalServerErrorException(
          'Response is not a valid page object',
        );
      }

      return res;
    } catch (error) {
      // Notion API 에러 처리
      if (isNotionClientError(error)) {
        switch (error.code) {
          case APIErrorCode.ObjectNotFound:
            throw new NotFoundException(`Page not found: ${id}`);
          case APIErrorCode.Unauthorized:
            throw new BadRequestException('Unauthorized access to page');
          case APIErrorCode.RateLimited:
            throw new InternalServerErrorException(
              'Rate limit exceeded, please try again later',
            );
          case APIErrorCode.ValidationError:
            throw new BadRequestException(`Invalid request: ${error.message}`);
          default:
            console.error('Notion API error in getPageById:', error);
            throw new InternalServerErrorException(
              `Notion API error: ${error.code}`,
            );
        }
      }

      // NestJS 예외 재전파
      if (
        error instanceof BadRequestException ||
        error instanceof NotFoundException ||
        error instanceof InternalServerErrorException
      ) {
        throw error;
      }

      // 일반 에러
      console.error('Unexpected error in getPageById:', error);
      throw new InternalServerErrorException('Failed to retrieve page');
    }
  }

  async getDatabaseById(id: string): Promise<DatabaseObjectResponse> {
    try {
      // 입력 검증
      if (!id || typeof id !== 'string') {
        throw new BadRequestException('Invalid database ID format');
      }

      const res = await this.notion.databases.retrieve({
        database_id: id,
      });

      // 응답 타입 검증
      if (!('parent' in res)) {
        throw new InternalServerErrorException(
          'Response is not a valid database object',
        );
      }

      return res;
    } catch (error) {
      // Notion API 에러 처리
      if (isNotionClientError(error)) {
        switch (error.code) {
          case APIErrorCode.ObjectNotFound:
            throw new NotFoundException(`Database not found: ${id}`);
          case APIErrorCode.Unauthorized:
            throw new BadRequestException('Unauthorized access to database');
          case APIErrorCode.RateLimited:
            throw new InternalServerErrorException(
              'Rate limit exceeded, please try again later',
            );
          case APIErrorCode.ValidationError:
            throw new BadRequestException(`Invalid request: ${error.message}`);
          default:
            console.error('Notion API error in getDatabaseById:', error);
            throw new InternalServerErrorException(
              `Notion API error: ${error.code}`,
            );
        }
      }

      // NestJS 예외 재전파
      if (
        error instanceof BadRequestException ||
        error instanceof NotFoundException ||
        error instanceof InternalServerErrorException
      ) {
        throw error;
      }

      // 일반 에러
      console.error('Unexpected error in getDatabaseById:', error);
      throw new InternalServerErrorException('Failed to retrieve database');
    }
  }

  async getPathUntilRoot(
    idCheck: Set<string>,
    parentId: string,
    parentType: 'page' | 'database',
  ): Promise<string> {
    try {
      // 순환 참조 체크
      if (idCheck.has(parentId)) {
        throw new BadRequestException(
          `Circular reference detected in hierarchy: ${parentId}`,
        );
      }
      idCheck.add(parentId);

      if (parentType === 'page') {
        const page = await this.getPageById(parentId);
        if (
          page.parent.type !== 'page_id' &&
          page.parent.type !== 'database_id' &&
          page.parent.type !== 'data_source_id'
        ) {
          return '';
        }
        const nextTitle = await this.getPathUntilRoot(
          idCheck,
          page.parent.type === 'page_id'
            ? page.parent.page_id
            : page.parent.database_id,
          page.parent.type === 'page_id' ? 'page' : 'database',
        );

        const titleProps = Object.entries(page.properties)
          .map(([key, value]) => (value.type === 'title' ? value.title : null))
          .filter((v) => v !== null);

        if (titleProps.length !== 1) {
          throw new BadRequestException(
            `Page has ${titleProps.length} title properties, expected exactly 1`,
          );
        }

        return `${nextTitle}/${titleProps[0].map((v) => v.plain_text).join('')}`;
      } else {
        const database = await this.getDatabaseById(parentId);

        if (
          database.parent.type !== 'page_id' &&
          database.parent.type !== 'database_id'
        ) {
          if (database.parent.type !== 'workspace') {
            throw new InternalServerErrorException(
              'Database parent is neither page, database, nor workspace',
            );
          }
          return '';
        }

        const nextPath = await this.getPathUntilRoot(
          idCheck,
          database.parent.type === 'page_id'
            ? database.parent.page_id
            : database.parent.database_id,
          database.parent.type === 'page_id' ? 'page' : 'database',
        );

        return `${nextPath}/${database.title.map((v) => v.plain_text).join('')}`;
      }
    } catch (error) {
      // NestJS 예외 재전파 (재귀 호출에서 던진 예외 포함)
      if (
        error instanceof BadRequestException ||
        error instanceof NotFoundException ||
        error instanceof InternalServerErrorException
      ) {
        throw error;
      }

      // 일반 에러
      console.error('Unexpected error in getPathUntilRoot:', error);
      throw new InternalServerErrorException('Failed to build path hierarchy');
    }
  }

  async getDatabase(): Promise<NotionDatabaseResponseDto[]> {
    try {
      const res = await this.notion.search({
        filter: {
          property: 'object',
          value: 'data_source',
        },
      });

      // 응답 타입 검증
      if (!Array.isArray(res.results)) {
        throw new InternalServerErrorException(
          'Invalid response format from Notion API',
        );
      }

      const typeSafeDatasource = res.results as DataSourceObjectResponse[];

      const paths = await Promise.all(
        typeSafeDatasource.map((res) =>
          this.getPathUntilRoot(new Set(), res.parent.database_id, 'database'),
        ),
      );

      const databases = typeSafeDatasource.map((res, i) => ({
        id: res.id,
        name: res.title.map((v) => v.plain_text).join(''),
        path: paths[i] ?? '',
      }));

      return plainToInstance(NotionDatabaseResponseDto, databases, {
        excludeExtraneousValues: true,
      });
    } catch (error) {
      // Notion API 에러 처리
      if (isNotionClientError(error)) {
        switch (error.code) {
          case APIErrorCode.Unauthorized:
            throw new BadRequestException(
              'Unauthorized access to Notion workspace',
            );
          case APIErrorCode.RateLimited:
            throw new InternalServerErrorException(
              'Rate limit exceeded, please try again later',
            );
          default:
            console.error('Notion API error in getDatabase:', error);
            throw new InternalServerErrorException(
              `Notion API error: ${error.code}`,
            );
        }
      }

      // NestJS 예외 재전파
      if (
        error instanceof BadRequestException ||
        error instanceof NotFoundException ||
        error instanceof InternalServerErrorException
      ) {
        throw error;
      }

      // 일반 에러
      console.error('Unexpected error in getDatabase:', error);
      throw new InternalServerErrorException('Failed to retrieve databases');
    }
  }

  async getPage(
    id: string,
    pathPrefix: string,
  ): Promise<NotionPageResponseDto[]> {
    try {
      // 입력 검증
      if (!id || typeof id !== 'string') {
        throw new BadRequestException('Invalid data source ID format');
      }
      if (!pathPrefix || typeof pathPrefix !== 'string') {
        throw new BadRequestException('Invalid path prefix format');
      }

      const res = (await this.notion.dataSources
        .query({
          data_source_id: id,
          filter: {
            and: [
              {
                property: 'Status',
                status: {
                  equals: 'Published',
                },
              },
            ],
          },
        })
        .then((res) => res.results)
        .then((res) =>
          res.filter(
            (res) =>
              res.object === 'page' &&
              'properties' in res &&
              'Title' in res.properties &&
              res.properties.Title.type === 'title' &&
              'Tag' in res.properties &&
              res.properties.Tag.type === 'multi_select' &&
              'Id' in res.properties &&
              res.properties.Id.type === 'unique_id',
          ),
        )) as PageObjectResponse[];

      const pages = res.map((res) => ({
        id: res.id,
        title: (res.properties.Title as any).title
          .map((v) => v.plain_text)
          .join(''),
        tag: (res.properties.Tag as any).multi_select.map((v) => v.name),
        notionId: `${pathPrefix}.${(res.properties.Id as any).unique_id.number}`,
      }));

      return plainToInstance(NotionPageResponseDto, pages, {
        excludeExtraneousValues: true,
      });
    } catch (error) {
      // Notion API 에러 처리
      if (isNotionClientError(error)) {
        switch (error.code) {
          case APIErrorCode.ObjectNotFound:
            throw new NotFoundException(`Data source not found: ${id}`);
          case APIErrorCode.Unauthorized:
            throw new BadRequestException('Unauthorized access to data source');
          case APIErrorCode.RateLimited:
            throw new InternalServerErrorException(
              'Rate limit exceeded, please try again later',
            );
          case APIErrorCode.ValidationError:
            throw new BadRequestException(`Invalid request: ${error.message}`);
          default:
            console.error('Notion API error in getPage:', error);
            throw new InternalServerErrorException(
              `Notion API error: ${error.code}`,
            );
        }
      }

      // NestJS 예외 재전파
      if (
        error instanceof BadRequestException ||
        error instanceof NotFoundException ||
        error instanceof InternalServerErrorException
      ) {
        throw error;
      }

      // 일반 에러
      console.error('Unexpected error in getPage:', error);
      throw new InternalServerErrorException('Failed to retrieve pages');
    }
  }

  // 페이지네이션을 처리하여 모든 자식 블록을 가져오는 헬퍼 메서드
  private async getAllChildren(
    blockId: string,
  ): Promise<ListBlockChildrenResponse['results']> {
    try {
      const allResults: ListBlockChildrenResponse['results'] = [];
      let cursor: string | undefined = undefined;

      do {
        const response = await this.notion.blocks.children.list({
          block_id: blockId,
          start_cursor: cursor,
        });
        allResults.push(...response.results);
        cursor = response.has_more
          ? (response.next_cursor ?? undefined)
          : undefined;
      } while (cursor);

      // Partial 블록 검증 (깨졌거나 미지원 블록)
      const partialBlocks = allResults.filter((block) =>
        this.isPartialBlock(block),
      );
      if (partialBlocks.length > 0) {
        const partialBlockIds = partialBlocks.map((b) => b.id).join(', ');
        throw new BadRequestException(
          `Partial or unsupported blocks detected (${partialBlocks.length} blocks): ${partialBlockIds}`,
        );
      }

      return allResults;
    } catch (error) {
      // Notion API 에러 처리
      if (isNotionClientError(error)) {
        switch (error.code) {
          case APIErrorCode.ObjectNotFound:
            throw new NotFoundException(`Block not found: ${blockId}`);
          case APIErrorCode.Unauthorized:
            throw new BadRequestException('Unauthorized access to block');
          case APIErrorCode.RateLimited:
            throw new InternalServerErrorException(
              'Rate limit exceeded, please try again later',
            );
          case APIErrorCode.ValidationError:
            throw new BadRequestException(`Invalid request: ${error.message}`);
          default:
            console.error('Notion API error in getAllChildren:', error);
            throw new InternalServerErrorException(
              `Notion API error: ${error.code}`,
            );
        }
      }

      // NestJS 예외 재전파
      if (
        error instanceof BadRequestException ||
        error instanceof NotFoundException ||
        error instanceof InternalServerErrorException
      ) {
        throw error;
      }

      // 일반 에러
      console.error('Unexpected error in getAllChildren:', error);
      throw new InternalServerErrorException(
        'Failed to retrieve block children',
      );
    }
  }

  async getBlockById(id: string): Promise<NotionBlockResponseDto> {
    try {
      // 입력 검증
      if (!id || typeof id !== 'string') {
        throw new BadRequestException('Invalid block ID format');
      }

      const firstBlocks = await this.getAllChildren(id);

      const childMap: Record<string, Array<string>> = {};
      const block = [...firstBlocks] as BlockObjectResponse[];
      const visited = new Set<string>();

      await this.setChildMap(childMap, block, firstBlocks, visited);

      return plainToInstance(
        NotionBlockResponseDto,
        {
          block,
          childMap,
        },
        { excludeExtraneousValues: true },
      );
    } catch (error) {
      // Notion API 에러 처리
      if (isNotionClientError(error)) {
        switch (error.code) {
          case APIErrorCode.ObjectNotFound:
            throw new NotFoundException(`Block not found: ${id}`);
          case APIErrorCode.Unauthorized:
            throw new BadRequestException('Unauthorized access to block');
          case APIErrorCode.RateLimited:
            throw new InternalServerErrorException(
              'Rate limit exceeded, please try again later',
            );
          case APIErrorCode.ValidationError:
            throw new BadRequestException(`Invalid request: ${error.message}`);
          default:
            console.error('Notion API error in getBlockById:', error);
            throw new InternalServerErrorException(
              `Notion API error: ${error.code}`,
            );
        }
      }

      // NestJS 예외 재전파
      if (
        error instanceof BadRequestException ||
        error instanceof NotFoundException ||
        error instanceof InternalServerErrorException
      ) {
        throw error;
      }

      // 일반 에러
      console.error('Unexpected error in getBlockById:', error);
      throw new InternalServerErrorException('Failed to retrieve blocks');
    }
  }

  private async setChildMap(
    childMap: Record<string, Array<string>>,
    accBlock: ListBlockChildrenResponse['results'],
    blocks: ListBlockChildrenResponse['results'],
    visited: Set<string>,
  ) {
    for (const child of blocks) {
      // 순환 참조 체크
      if (visited.has(child.id)) {
        console.warn(`Circular reference detected: ${child.id}`);
        continue;
      }

      if ('has_children' in child && child.has_children) {
        visited.add(child.id);

        // 페이지네이션을 처리하여 모든 자식 가져오기
        const children = await this.getAllChildren(child.id);

        childMap[child.id] = children.map((v) => v.id);
        accBlock.push(...children);

        // 재귀 호출
        await this.setChildMap(childMap, accBlock, children, visited);
      }
    }
  }
}
