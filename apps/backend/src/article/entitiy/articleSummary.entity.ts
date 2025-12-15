import { Expose } from 'class-transformer';

export class ArticleSummaryEntity {
  @Expose()
  id: string;
  @Expose()
  title: string;
  @Expose()
  description: string;
  @Expose()
  cover_image_url: string;
  @Expose()
  tags?: string[];
  @Expose()
  read_time: number;
  @Expose()
  view_count: number;
  @Expose()
  updated_at: Date;

  constructor(partial: Partial<ArticleSummaryEntity>) {
    Object.assign(this, partial);
  }
}
