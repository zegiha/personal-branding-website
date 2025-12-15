import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteArticleResponseDto {
  @ApiProperty({
    description: '삭제 성공 여부',
    example: true,
  })
  @Expose()
  success: boolean;

  @ApiProperty({
    description: '처리 결과 메시지',
    example: '삭제가 완료되었습니다.',
  })
  @Expose()
  message: string;

  constructor(partial: Partial<DeleteArticleResponseDto>) {
    Object.assign(this, partial);
  }
}
