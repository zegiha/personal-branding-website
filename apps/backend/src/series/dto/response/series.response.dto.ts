import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class SeriesResponseDto {
  @ApiProperty({
    description: '시리즈 ID',
    example: '5e3a778b-2ada-4a6d-b98f-8d872f4b36a1',
  })
  @Expose()
  id: string;

  @ApiProperty({
    description: '시리즈 이름',
  })
  @Expose()
  name: string;

  @ApiProperty({
    description: '시리즈 설명',
  })
  @Expose()
  description: string;

  @ApiProperty({
    description: '대표 이미지 URL',
  })
  @Expose()
  image_url: string;

  @ApiProperty({
    description: '상위 시리즈 ID',
    nullable: true,
  })
  @Expose()
  parent_series_id: string;

  @ApiProperty({
    description: '포함된 아티클 ID 목록',
    type: [String],
  })
  @Expose()
  article_ids: string[];

  @ApiProperty({
    description: '연결된 서브프로젝트 ID',
    nullable: true,
  })
  @Expose()
  subproject_id: string;

  @ApiProperty({
    description: '포함된 하위 시리즈 ID 목록',
    type: [String],
  })
  @Expose()
  nest_series_ids: string[];

  constructor(partial: Partial<SeriesResponseDto>) {
    Object.assign(this, partial);
  }
}
