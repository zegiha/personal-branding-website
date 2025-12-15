import { IsString, IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddSeriesToSeriesDto {
  @ApiProperty({
    description: '추가할 하위 시리즈 ID',
    example: '0a6b7c41-9de2-44c9-9173-cfb88fe13de4',
  })
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  series_id: string;
}
