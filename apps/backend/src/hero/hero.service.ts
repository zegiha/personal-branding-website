import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHeroDto } from './dto/createHero.dto';
import { GetHeroesDto } from './dto/getHeroes.dto';
import { HeroResponseDto } from './dto/response/hero.response.dto';
import { DeleteHeroResponseDto } from './dto/response/deleteHero.response.dto';
import { PaginationEntity } from 'src/common/entity/pagination.entity';
import { plainToInstance } from 'class-transformer';
import { Prisma } from 'generated/prisma/client';

@Injectable()
export class HeroService {
  constructor(private readonly prisma: PrismaService) {}

  async createHero(dto: CreateHeroDto): Promise<HeroResponseDto> {
    try {
      const hero = await this.prisma.hero.create({
        data: {
          title: dto.title,
          description: dto.description,
          image_url: dto.image_url,
          open_type: dto.open_type,
          url: dto.url,
          button_text: dto.button_text,
          icon_key: dto.icon_key,
        },
      });

      return plainToInstance(HeroResponseDto, hero, {
        excludeExtraneousValues: true,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2002':
            throw new BadRequestException('Duplicate hero entry detected');
          case 'P2003':
            throw new NotFoundException('Related entity not found');
          default:
            throw new InternalServerErrorException(
              `Database error: ${error.code}`,
            );
        }
      }

      console.error('Unexpected error in createHero:', error);
      throw new InternalServerErrorException('Failed to create hero');
    }
  }

  async getHeroes({
    limit = 10,
    page = 1,
  }: GetHeroesDto): Promise<PaginationEntity<HeroResponseDto>> {
    try {
      const [heroes, count] = await Promise.all([
        this.prisma.hero.findMany({
          skip: (page - 1) * limit,
          take: limit,
        }),
        this.prisma.hero.count(),
      ]);

      return plainToInstance(
        PaginationEntity<HeroResponseDto>,
        {
          totalPage: Math.ceil(count / limit),
          totalData: count,
          data: heroes.map((hero) =>
            plainToInstance(HeroResponseDto, hero, {
              excludeExtraneousValues: true,
            }),
          ),
        },
        { excludeExtraneousValues: true },
      );
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new InternalServerErrorException(`Database error: ${error.code}`);
      }

      console.error('Unexpected error in getHeroes:', error);
      throw new InternalServerErrorException('Failed to get heroes');
    }
  }

  async getHeroById(id: string): Promise<HeroResponseDto> {
    try {
      const hero = await this.prisma.hero.findUnique({
        where: { id },
      });

      if (!hero) {
        throw new NotFoundException(`Hero not found: ${id}`);
      }

      return plainToInstance(HeroResponseDto, hero, {
        excludeExtraneousValues: true,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2025':
            throw new NotFoundException('Hero not found');
          default:
            throw new InternalServerErrorException(
              `Database error: ${error.code}`,
            );
        }
      }

      if (error instanceof NotFoundException) {
        throw error;
      }

      console.error('Unexpected error in getHeroById:', error);
      throw new InternalServerErrorException('Failed to get hero');
    }
  }

  async deleteHero(id: string): Promise<DeleteHeroResponseDto> {
    try {
      await this.prisma.hero.delete({
        where: { id },
      });

      return plainToInstance(
        DeleteHeroResponseDto,
        {
          success: true,
          message: 'Hero deleted successfully',
        },
        { excludeExtraneousValues: true },
      );
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2025':
            throw new NotFoundException(`Hero not found: ${id}`);
          default:
            throw new InternalServerErrorException(
              `Database error: ${error.code}`,
            );
        }
      }

      console.error('Unexpected error in deleteHero:', error);
      throw new InternalServerErrorException('Failed to delete hero');
    }
  }
}
