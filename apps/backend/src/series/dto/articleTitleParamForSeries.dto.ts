import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ArticleTitleParamForSeriesDto {
  @ApiProperty({
    description: '아티클 제목',
    example: '디자인 스프린트 후기',
  })
  @IsString()
  @IsNotEmpty()
  title: string;
}
