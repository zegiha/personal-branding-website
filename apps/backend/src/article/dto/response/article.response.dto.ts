import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { ArticleSummaryResponseDto } from './articleSummary.response.dto';

export class ArticleResponseDto extends ArticleSummaryResponseDto {
  @ApiProperty({
    description: 'HTML 혹은 Markdown 형태의 본문',
  })
  @Expose()
  content: string;

  @ApiProperty({
    description: '좋아요 수',
    example: 10,
  })
  @Expose()
  like_count: number;

  @ApiProperty({
    description: '공유 수',
    example: 5,
  })
  @Expose()
  share_count: number;

  @ApiProperty({
    description: '작성 일시',
    example: '2024-02-15T09:00:00.000Z',
  })
  @Expose()
  created_at: Date;

  @ApiProperty({
    description: '연결된 액션(CTA) ID',
    example: 'action_123',
  })
  @Expose()
  action_id: string;

  constructor(partial: Partial<ArticleResponseDto>) {
    super(partial);
  }
}
