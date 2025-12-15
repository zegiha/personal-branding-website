import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteHeroResponseDto {
  @ApiProperty({
    description: '삭제 성공 여부',
    example: true,
  })
  @Expose()
  success: boolean;

  @ApiProperty({
    description: '처리 메시지',
    example: '히어로가 삭제되었습니다.',
  })
  @Expose()
  message: string;
}
