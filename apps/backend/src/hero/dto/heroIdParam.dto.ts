import { IsString, IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class HeroIdParamDto {
  @ApiProperty({
    description: '히어로 ID (UUID)',
    example: 'f5c0fa2d-9c41-4da6-90b6-7220b82d61ec',
  })
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
