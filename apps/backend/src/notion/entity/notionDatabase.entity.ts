import { Expose } from 'class-transformer';

export class NotionDatabaseEntity {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  path: string;

  constructor(partial: Partial<NotionDatabaseEntity>) {
    Object.assign(this, partial);
  }
}
