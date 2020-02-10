import { Module } from '@nestjs/common';
import { FieldsController } from './fields/fields.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Field } from 'src/types/field.entity';
import { FieldsService } from './fields/fields.service';
import { Answer } from 'src/types/answer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Field]),TypeOrmModule.forFeature([Answer])],
  providers: [FieldsService],
  controllers: [FieldsController],
})
export class FieldsModule {}
