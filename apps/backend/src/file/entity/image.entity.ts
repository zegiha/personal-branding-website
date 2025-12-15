import { Expose } from "class-transformer";

export class ImageEntity {
  @Expose()
  url: string;
  @Expose()
  width: number;
  @Expose()
  height: number;

  constructor(partial: Partial<ImageEntity>) {
    Object.assign(this, partial);
  }
}