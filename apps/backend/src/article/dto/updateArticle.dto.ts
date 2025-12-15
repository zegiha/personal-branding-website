import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsArray,
  IsUrl,
  IsNumber,
  IsObject,
} from 'class-validator';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateArticleDto {
  @ApiProperty({
    description: '수정할 글 제목',
    example: '업데이트된 퍼스널 브랜딩 전략',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: '최신 Notion 블록 데이터',
    type: () => [Object],
  })
  @IsArray()
  @IsNotEmpty()
  block: BlockObjectResponse[];

  @ApiProperty({
    description: '블록 간 계층 구조 정보',
    type: () => Object,
  })
  @IsObject()
  @IsNotEmpty()
  childMap: Record<string, Array<string>>;

  @ApiProperty({
    description: '글 요약 설명',
    example: '새로운 인사이트 정리',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: '대표 이미지 URL',
    example: 'https://example.com/new-cover.png',
  })
  @IsUrl()
  @IsNotEmpty()
  cover_image_url: string;

  @ApiProperty({
    description: '예상 읽기 시간(분)',
    example: 8,
  })
  @IsNumber()
  @IsNotEmpty()
  read_time: number;

  @ApiPropertyOptional({
    description: '태그 목록',
    type: [String],
  })
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  tags?: string[];

  @ApiPropertyOptional({
    description: '연동된 액션(CTA) ID',
  })
  @IsString()
  @IsOptional()
  action_id?: string;

  @ApiPropertyOptional({
    description: '연결된 서브프로젝트 ID',
  })
  @IsString()
  @IsOptional()
  subproject_id?: string;

  @ApiPropertyOptional({
    description: '연결할 시리즈 ID 목록',
    type: [String],
  })
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  series_ids?: string[];
}
