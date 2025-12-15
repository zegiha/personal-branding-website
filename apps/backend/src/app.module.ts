import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { SeriesModule } from './series/series.module';
import { SubprojectModule } from './subproject/subproject.module';
import { PlaygroundModule } from './playground/playground.module';
import { PrismaModule } from './prisma/prisma.module';
import { NotionModule } from './notion/notion.module';
import { FileModule } from './file/file.module';
import { R2Module } from './r2/r2.module';
import { ConfigModule } from '@nestjs/config';
import { HeroModule } from './hero/hero.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    ArticleModule,
    SeriesModule,
    SubprojectModule,
    PlaygroundModule,
    NotionModule,
    FileModule,
    R2Module,
    HeroModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
