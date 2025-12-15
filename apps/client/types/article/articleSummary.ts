import { ArticleEntity } from "./articleEntity";

export type ArticleSummary = Pick<ArticleEntity,
  | 'id'
  | 'title'
  | 'description'
  | 'coverImageUrl'
  | 'readTime'
  | 'viewCount'
  | 'updatedAt'
> 