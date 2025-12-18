import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AccessStrategy extends PassportStrategy(Strategy, 'access') {
  constructor(
    private readonly configService: ConfigService,
    private readonly prismaService: PrismaService,
  ) {
    const secret = configService.get<string>('ACCESS_TOKEN_SECRET');
    if (!secret) {
      throw new Error(
        'ACCESS_TOKEN_SECRET must be defined in environment variables',
      );
    }
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req) => {
          const cookies = (req as { cookies?: { accessToken?: string } })
            .cookies;
          return cookies?.accessToken || null;
        },
      ]),
      secretOrKey: secret,
    });
  }
  async validate(payload: { sub: string }) {
    const user = await this.prismaService.user.findUnique({
      where: { id: payload.sub },
    });
    if (!user) throw new UnauthorizedException('user not found');
    return user;
  }
}
