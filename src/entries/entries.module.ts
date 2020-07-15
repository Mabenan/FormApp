import { Module } from '@nestjs/common';
import { EntriesController } from './entries/entries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entry } from 'src/types/entry.entity';
import { EntriesService } from './entries/entries.service';
import { Answer } from 'src/types/answer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Entry]),TypeOrmModule.forFeature([Answer])],
  providers: [EntriesService],
  controllers: [EntriesController],
})
export class EntriesModule {}
