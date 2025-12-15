import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ArticleSummaryResponseDto {
  @ApiProperty({
    description: '글 ID',
    example: 'c2a0d041-0c96-4b0f-8ec4-65e33b33195b',
  })
  @Expose()
  id: string;

  @ApiProperty({
    description: '글 제목',
    example: '콘텐츠 실험기',
  })
  @Expose()
  title: string;

  @ApiProperty({
    description: '짧은 설명',
    example: '6개월간의 브랜딩 실험을 공유합니다.',
  })
  @Expose()
  description: string;

  @ApiProperty({
    description: '대표 이미지 URL',
    example: 'https://example.com/cover.png',
  })
  @Expose()
  cover_image_url: string;

  @ApiProperty({
    description: '태그 목록',
    example: ['브랜딩', '디자인'],
    type: [String],
  })
  @Expose()
  tags?: string[];

  @ApiProperty({
    description: '예상 읽기 시간(분)',
    example: 6,
  })
  @Expose()
  read_time: number;

  @ApiProperty({
    description: '조회 수',
    example: 312,
  })
  @Expose()
  view_count: number;

  @ApiProperty({
    description: '마지막 업데이트 일시',
    example: '2024-03-02T12:00:00.000Z',
  })
  @Expose()
  updated_at: Date;

  constructor(partial: Partial<ArticleSummaryResponseDto>) {
    Object.assign(this, partial);
  }
}
