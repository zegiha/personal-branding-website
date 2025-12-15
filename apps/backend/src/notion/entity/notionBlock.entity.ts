import { Expose, Type } from 'class-transformer';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export class NotionBlockEntity {
  @Expose()
  @Type(() => Object)
  block: BlockObjectResponse[];

  @Expose()
  childMap: Record<string, Array<string>>;

  constructor(partial: Partial<NotionBlockEntity>) {
    Object.assign(this, partial);
  }
}

