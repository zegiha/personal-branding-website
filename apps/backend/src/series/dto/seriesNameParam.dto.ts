import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SeriesNameParamDto {
  @ApiProperty({
    description: '시리즈 이름',
    example: '퍼스널 브랜딩',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
