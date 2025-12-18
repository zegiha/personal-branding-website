import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthRequestDto } from './dto/authRequest.dto';
import { AuthResponseDto } from './dto/authResponse.dto';
import { RefreshGuard } from './guard/refresh.guard';
import { AccessGuard } from './guard/access.guard';

@ApiTags('인증')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  @Post('login')
  @ApiOperation({
    summary: '로그인',
    description:
      '이메일과 비밀번호로 로그인하여 Access Token과 Refresh Token을 발급받습니다. 토큰은 쿠키에 자동 저장됩니다.',
  })
  @ApiBody({ type: AuthRequestDto })
  @ApiResponse({
    status: 200,
    description: '로그인 성공',
    type: AuthResponseDto,
  })
  @ApiResponse({
    status: 401,
    description:
      '인증 실패 - 사용자를 찾을 수 없거나 비밀번호가 일치하지 않습니다.',
  })
  @ApiResponse({
    status: 500,
    description: '서버 내부 오류',
  })
  async login(@Body() authRequestDto: AuthRequestDto, @Res() res: Response) {
    const { accessToken, refreshToken } =
      await this.authService.login(authRequestDto);

    const isProduction =
      this.configService.get<string>('NODE_ENV') === 'production';
    const cookieOptions = {
      httpOnly: true,
      secure: isProduction,
      sameSite: (isProduction ? 'none' : 'lax') as 'none' | 'lax',
      maxAge: 24 * 60 * 60 * 1000,
      ...(isProduction && { domain: '.zegiha.work' }),
    };

    res.cookie('accessToken', accessToken, cookieOptions);
    res.cookie('refreshToken', refreshToken, {
      ...cookieOptions,
      maxAge: 7 * 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({
      accessToken,
      refreshToken,
    });
  }

  @UseGuards(RefreshGuard)
  @Get('refresh')
  @ApiOperation({
    summary: 'Access Token 갱신',
    description:
      'Refresh Token을 사용하여 새로운 Access Token을 발급받습니다. Refresh Token은 쿠키에서 자동으로 읽습니다.',
  })
  @ApiResponse({
    status: 200,
    description: 'Access Token 갱신 성공',
    schema: {
      type: 'object',
      properties: {
        accessToken: {
          type: 'string',
          example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Refresh Token이 유효하지 않거나 만료되었습니다.',
  })
  async refresh(@Req() req: Request, @Res() res: Response) {
    const refreshToken = (req.cookies as { refreshToken: string }).refreshToken;
    const accessToken = await this.authService.refresh(refreshToken);

    const isProduction =
      this.configService.get<string>('NODE_ENV') === 'production';
    const cookieOptions = {
      httpOnly: true,
      secure: isProduction,
      sameSite: (isProduction ? 'none' : 'lax') as 'none' | 'lax',
      maxAge: 24 * 60 * 60 * 1000,
      ...(isProduction && { domain: '.zegiha.work' }),
    };

    res.cookie('accessToken', accessToken, cookieOptions);
    return res.json({ accessToken });
  }

  @UseGuards(AccessGuard)
  @Get('me')
  me() {
    return { message: 'hello' };
  }
}
