import { Expose } from "class-transformer";

export class SeriesEntity {
  @Expose()
  id: string;
  @Expose()
  name: string;
  @Expose()
  description: string;
  @Expose()
  image_url: string;
  @Expose()
  parent_series_id: string;
  @Expose()
  article_ids: string[];
  @Expose()
  subproject_id: string;
  @Expose()
  nest_series_ids: string[];

  constructor(partial: Partial<SeriesEntity>) {
    Object.assign(this, partial);
  }
}