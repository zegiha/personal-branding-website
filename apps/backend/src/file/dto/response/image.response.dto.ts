import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ImageResponseDto {
  @ApiProperty({
    description: '저장된 이미지 URL',
    example: 'https://cdn.example.com/image.png',
  })
  @Expose()
  url: string;

  @ApiProperty({
    description: '이미지 가로 길이(px)',
    example: 1200,
  })
  @Expose()
  width: number;

  @ApiProperty({
    description: '이미지 세로 길이(px)',
    example: 630,
  })
  @Expose()
  height: number;

  constructor(partial: Partial<ImageResponseDto>) {
    Object.assign(this, partial);
  }
}
