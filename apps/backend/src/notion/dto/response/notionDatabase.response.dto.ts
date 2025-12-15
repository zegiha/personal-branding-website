import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class NotionDatabaseResponseDto {
  @ApiProperty({
    description: 'Notion 데이터베이스 ID',
  })
  @Expose()
  id: string;

  @ApiProperty({
    description: '데이터베이스 이름',
  })
  @Expose()
  name: string;

  @ApiProperty({
    description: '접근 경로 혹은 슬러그',
  })
  @Expose()
  path: string;

  constructor(partial: Partial<NotionDatabaseResponseDto>) {
    Object.assign(this, partial);
  }
}
