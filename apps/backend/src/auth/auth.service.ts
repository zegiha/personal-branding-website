import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from '../prisma/prisma.service';
import { AuthRequestDto } from './dto/authRequest.dto';
import { AuthResponseDto } from './dto/authResponse.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  async login({ email, password }: AuthRequestDto) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        throw new UnauthorizedException('User not found');
      }
      if (user.password !== password) {
        throw new UnauthorizedException('Passwords do not match');
      }

      const refreshToken = this.jwt.sign(
        { sub: user.id },
        {
          secret: this.config.get<string>('REFRESH_TOKEN_SECRET'),
          expiresIn: '7w',
        },
      );
      const accessToken = await this.refresh(refreshToken);

      return plainToInstance(AuthResponseDto, {
        refreshToken,
        accessToken,
      });
    } catch (e) {
      if (e instanceof UnauthorizedException) throw e;
      console.error('[AUTH] failed to login', e);
      throw new InternalServerErrorException('Failed to login');
    }
  }

  async refresh(refreshToken: string) {
    const payload = this.jwt.verify(refreshToken, {
      secret: this.config.get<string>('REFRESH_TOKEN_SECRET'),
    }) as unknown;

    if (
      !(
        payload &&
        typeof payload === 'object' &&
        'sub' in payload &&
        typeof payload.sub === 'string'
      )
    ) {
      throw new UnauthorizedException({ message: 'Invalid refresh token' });
    }
    const targetUser = await this.prisma.user.findUnique({
      where: { id: payload.sub },
    });

    if (!targetUser)
      throw new UnauthorizedException({ message: 'Invalid refresh token.' });

    return this.jwt.sign(
      { sub: targetUser.id },
      {
        secret: this.config.get<string>('ACCESS_TOKEN_SECRET'),
        expiresIn: '1d',
      },
    );
  }
}
