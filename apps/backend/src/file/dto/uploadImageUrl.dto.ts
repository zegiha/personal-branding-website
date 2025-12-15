import { IsArray, IsNotEmpty, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UploadImageUrlDto {
  @ApiProperty({
    description: '이미지 URL 배열',
    type: [String],
    example: ['https://example.com/image1.png'],
  })
  @IsArray()
  @IsNotEmpty()
  @IsUrl({}, { each: true })
  urls: string[];
}
