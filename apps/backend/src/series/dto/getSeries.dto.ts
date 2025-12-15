import { IsString, IsOptional, IsIn } from 'class-validator';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetSeriesDto extends PaginationDto {
  @ApiPropertyOptional({
    description: '필터링할 토픽',
    example: 'UX',
  })
  @IsString()
  @IsOptional()
  topic?: string;

  @ApiPropertyOptional({
    description: '정렬 기준 (popularity: 인기순, latest: 최신순)',
    enum: ['popularity', 'latest'],
    example: 'popularity',
  })
  @IsString()
  @IsOptional()
  @IsIn(['popularity', 'latest'])
  sort?: 'popularity' | 'latest';
}
