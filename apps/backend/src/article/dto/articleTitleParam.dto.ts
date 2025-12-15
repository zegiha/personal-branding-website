import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ArticleTitleParamDto {
  @ApiProperty({
    description: '글 제목',
    example: '퍼스널 브랜딩 전략',
  })
  @IsString()
  @IsNotEmpty()
  title: string;
}
