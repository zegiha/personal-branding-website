import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AuthResponseDto {
  @ApiProperty({
    description: 'RefreshToken',
    example: '123456',
  })
  @Expose()
  refreshToken: string;

  @ApiProperty({
    description: 'AccessToken',
    example: '123456',
  })
  @Expose()
  accessToken: string;
}
