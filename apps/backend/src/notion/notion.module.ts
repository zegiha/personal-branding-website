import { Module } from '@nestjs/common';
import { NotionController } from './notion.controller';
import { NotionService } from './notion.service';
import { NOTION_CLIENT } from './notion.const';
import { Client } from '@notionhq/client';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [NotionController],
  providers: [
    {
      provide: NOTION_CLIENT,
      useFactory: (config: ConfigService) => {
        return new Client({
          auth: config.get<string>('NOTION_API_TOKEN') ?? '',
        });
      },
      inject: [ConfigService]
    },
    NotionService
  ],
  exports: [NotionService]
})
export class NotionModule {}
