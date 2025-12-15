import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ArticleCountResponseDto {
  @ApiProperty({
    description: '글 ID',
    example: '2b99c1ad-a3fa-4714-83bd-26eff1a0ff19',
  })
  @Expose()
  id: string;

  @ApiProperty({
    description: '조회 수',
    example: 321,
  })
  @Expose()
  view_count: number;

  @ApiProperty({
    description: '공유 수',
    example: 42,
  })
  @Expose()
  share_count: number;

  @ApiProperty({
    description: '좋아요 수',
    example: 55,
  })
  @Expose()
  like_count: number;

  constructor(partial: Partial<ArticleCountResponseDto>) {
    Object.assign(this, partial);
  }
}
