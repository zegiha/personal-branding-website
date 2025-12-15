import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { FileModule } from 'src/file/file.module';

@Module({
  imports: [FileModule],
  controllers: [ArticleController],
  providers: [ArticleService]
})
export class ArticleModule {}
