import { IsString, IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SeriesIdParamDto {
  @ApiProperty({
    description: '시리즈 ID (UUID)',
    example: '8c4e479c-60f7-494b-bab9-0e0a3bf3ce61',
  })
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
