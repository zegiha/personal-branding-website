import { Expose } from 'class-transformer';
import { ArticleSummaryEntity } from './articleSummary.entity';

export class ArticleEntity extends ArticleSummaryEntity {
  @Expose()
  content: string;
  @Expose()
  like_count: number;
  @Expose()
  share_count: number;
  @Expose()
  created_at: Date;
  @Expose()
  action_id: string;

  constructor(partial: Partial<ArticleEntity>) {
    super(partial);
  }
}
