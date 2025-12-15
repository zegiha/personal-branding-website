import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class NotionPageResponseDto {
  @ApiProperty({
    description: 'Notion 페이지 ID',
  })
  @Expose()
  id: string;

  @ApiProperty({
    description: '페이지 제목',
  })
  @Expose()
  title: string;

  @ApiProperty({
    description: '연결된 태그 목록',
    type: [String],
  })
  @Expose()
  tag: string[];

  @ApiProperty({
    description: '원본 Notion ID',
  })
  @Expose()
  notionId: string;

  constructor(partial: Partial<NotionPageResponseDto>) {
    Object.assign(this, partial);
  }
}
