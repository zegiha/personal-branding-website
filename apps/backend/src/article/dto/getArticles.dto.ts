import { IsString, IsOptional, IsIn } from 'class-validator';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetArticlesDto extends PaginationDto {
  @ApiPropertyOptional({
    description: '필터링할 태그',
    example: '디자인',
  })
  @IsString()
  @IsOptional()
  tag?: string;

  @ApiPropertyOptional({
    description: '정렬 기준 (popularity: 인기순, latest: 최신순)',
    enum: ['popularity', 'latest'],
    example: 'latest',
  })
  @IsString()
  @IsOptional()
  @IsIn(['popularity', 'latest'])
  sort?: 'popularity' | 'latest';
}
