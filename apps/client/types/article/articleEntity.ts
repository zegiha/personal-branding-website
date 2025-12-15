export type ArticleEntity = {
  id: string;
  title: string;
  description: string;
  coverImageUrl: string;
  readTime: number;
  viewCount: number;
  likeCount: number;
  shareCount: number;
  createdAt: string;
  updatedAt: string;
  tags: Array<string>;
  content: string
}

export const ArticleEntityConst: ArticleEntity = {
  id: '',
  title: '',
  description: '',
  coverImageUrl: '',
  readTime: 0,
  viewCount: 0,
  likeCount: 0,
  shareCount: 0,
  createdAt: '',
  updatedAt: '',
  tags: [] as Array<string>,
  content: ''
}
