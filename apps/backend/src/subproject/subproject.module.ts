import { Module } from '@nestjs/common';
import { SubprojectController } from './subproject.controller';
import { SubprojectService } from './subproject.service';

@Module({
  controllers: [SubprojectController],
  providers: [SubprojectService]
})
export class SubprojectModule {}
