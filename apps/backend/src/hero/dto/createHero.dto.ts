import { IsString, IsNotEmpty, IsUrl, IsEnum } from 'class-validator';
import { HeroOpenType } from 'generated/prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHeroDto {
  @ApiProperty({
    description: '히어로 영역 제목',
    example: '포트폴리오 구독 서비스',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: '히어로 영역 설명',
    example: '콘텐츠 실험과 결과를 주간 뉴스레터로 공유합니다.',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: '배경 이미지 URL',
    example: 'https://example.com/hero.png',
  })
  @IsUrl()
  @IsNotEmpty()
  image_url: string;

  @ApiProperty({
    description: '링크 오픈 방식',
    enum: HeroOpenType,
    example: HeroOpenType.LINK,
  })
  @IsEnum(HeroOpenType)
  @IsNotEmpty()
  open_type: HeroOpenType;

  @ApiProperty({
    description: '버튼 클릭 시 이동할 URL',
    example: 'https://example.com/newsletter',
  })
  @IsUrl()
  @IsNotEmpty()
  url: string;

  @ApiProperty({
    description: '버튼에 표기될 텍스트',
    example: '지금 구독하기',
  })
  @IsString()
  @IsNotEmpty()
  button_text: string;

  @ApiProperty({
    description: '아이콘 키 혹은 파일명',
    example: 'arrow-up-right',
  })
  @IsString()
  @IsNotEmpty()
  icon_key: string;
}
