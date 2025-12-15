import { IsString, IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddArticleToSeriesDto {
  @ApiProperty({
    description: '추가할 아티클 ID',
    example: '9a3b2f1c-3c2a-4eaf-a9ef-11fa1d4dbd0b',
  })
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  article_id: string;
}
