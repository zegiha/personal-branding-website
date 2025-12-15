import { Expose } from 'class-transformer';
import { HeroOpenType } from 'generated/prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class HeroResponseDto {
  @ApiProperty({
    description: '히어로 ID',
    example: '8a6b4058-5c00-4f33-8d16-f0ad6880c126',
  })
  @Expose()
  id: string;

  @ApiProperty({
    description: '히어로 제목',
  })
  @Expose()
  title: string;

  @ApiProperty({
    description: '히어로 설명',
  })
  @Expose()
  description: string;

  @ApiProperty({
    description: '이미지 URL',
  })
  @Expose()
  image_url: string;

  @ApiProperty({
    description: '링크 오픈 방식',
    enum: HeroOpenType,
  })
  @Expose()
  open_type: HeroOpenType;

  @ApiProperty({
    description: '버튼 클릭 시 이동 URL',
  })
  @Expose()
  url: string;

  @ApiProperty({
    description: '버튼에 표기될 텍스트',
  })
  @Expose()
  button_text: string;

  @ApiProperty({
    description: '아이콘 키',
  })
  @Expose()
  icon_key: string;
}
