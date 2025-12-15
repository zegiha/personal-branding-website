import { Expose } from 'class-transformer';

export class NotionPageEntity {
  @Expose()
  id: string;

  @Expose()
  title: string;

  @Expose()
  tag: string[];

  @Expose()
  notionId: string;

  constructor(partial: Partial<NotionPageEntity>) {
    Object.assign(this, partial);
  }
}
