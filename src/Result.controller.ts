import { Controller, Get, Res, Header } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Entry } from './types/entry.entity';
import { Repository } from 'typeorm';
import { Answer } from './types/answer.entity';
import { Field } from './types/field.entity';
import * as csvWriterBase from 'csv-writer';
@Controller('api/results.csv')
export class ResultController {
  constructor(
    @InjectRepository(Entry)
    private entryRepository: Repository<Entry>,
    @InjectRepository(Field)
    private fieldRepository: Repository<Field>,
  ) {}

  @Get()
  @Header('Content-Type', 'application/csv')
  returnResultCSV() {
    const csvHeader = [];
    return new Promise<string>((res, rej) => {
      this.fieldRepository
        .find({ relations: ['SubFields'] })
        .then((fields: Field[]) => {
          fields.forEach(field => {
            csvHeader.push({
              id: 'Field' + field.ID,
              title: field.Title,
            });
          });
          const csvWriter = csvWriterBase.createObjectCsvStringifier({
            header: csvHeader,
            fieldDelimiter: ';'
          });
          this.entryRepository.find({relations: [ 'Answers']}).then((entries: Entry[]) => {
            const records = [];
            entries.forEach(entry => {
                let answer = {};
                entry.Answers.forEach(element => {
                    answer['Field'+element.FieldID] = element.Answer;
                });
                records.push(answer);
            });

            res(csvWriter.getHeaderString() + csvWriter.stringifyRecords(records));
          });
        });
    });
  }
}
