import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Field } from './types/field.entity';
import { FieldsModule } from './fields/fields.module';
import { EntriesModule } from './entries/entries.module';
import { ResultController } from './Result.controller';
import { Entry } from './types/entry.entity';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client/dist'),
    }),
    FieldsModule,
    EntriesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      database: 'mediaserver',
      username: 'mediaserver',
      password: '35xWaH5kUDA1t1xF',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
   }),
   TypeOrmModule.forFeature([Entry]),TypeOrmModule.forFeature([Field])
  ],
  controllers: [AppController, ResultController],
  providers: [AppService],
})
export class AppModule {}
