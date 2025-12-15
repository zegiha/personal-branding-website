import { IsString, IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ArticleIdParamDto {
  @ApiProperty({
    description: '글 ID (UUID)',
    example: '7a2db2b7-4b6a-4a61-bf41-3e5a94f8cb7e',
  })
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
