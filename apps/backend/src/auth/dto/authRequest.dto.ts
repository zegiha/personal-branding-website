import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthRequestDto {
  @ApiProperty({
    description: '이메일',
    example: 'example@example.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: '비밀번호',
    example: 'password',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
