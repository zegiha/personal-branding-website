import { IsString, IsNotEmpty, IsOptional, IsUrl, IsArray } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateSeriesDto {
  @ApiProperty({
    description: '시리즈 이름',
    example: 'UX 리서치 시리즈',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: '시리즈 설명',
    example: 'UX 리서치 전 과정을 정리한 시리즈',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: '대표 이미지 URL',
    example: 'https://example.com/series.png',
  })
  @IsUrl()
  @IsNotEmpty()
  image_url: string;

  @ApiPropertyOptional({
    description: '상위 시리즈 ID',
  })
  @IsString()
  @IsOptional()
  parent_series_id?: string;

  @ApiPropertyOptional({
    description: '포함할 아티클 ID 목록',
    type: [String],
  })
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  article_ids?: string[];

  @ApiPropertyOptional({
    description: '포함할 하위 시리즈 ID 목록',
    type: [String],
  })
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  nest_series_ids?: string[];

  @ApiPropertyOptional({
    description: '연결할 서브프로젝트 ID',
  })
  @IsString()
  @IsOptional()
  subproject_id?: string;

  @ApiPropertyOptional({
    description: '토픽 태그 목록',
    type: [String],
  })
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  topics?: string[];
}
