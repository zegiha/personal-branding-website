import { Expose } from 'class-transformer';
import { HeroOpenType } from 'generated/prisma/client';

export class HeroEntity {
  @Expose()
  id: string;

  @Expose()
  title: string;

  @Expose()
  description: string;

  @Expose()
  image_url: string;

  @Expose()
  open_type: HeroOpenType;

  @Expose()
  url: string;

  @Expose()
  button_text: string;

  @Expose()
  icon_key: string;

  constructor(partial: Partial<HeroEntity>) {
    Object.assign(this, partial);
  }
}
