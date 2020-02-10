import { Controller, Get } from '@nestjs/common';
import { Field } from '../../types/field.entity';
import { FieldsService } from './fields.service';
import { Post, Put, Delete, Body, Param } from '@nestjs/common';
import * as async from 'async';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Answer } from 'src/types/answer.entity';
@Controller('api/fields')
export class FieldsController {
  constructor(
    private fieldsService: FieldsService,
    @InjectRepository(Answer)
    private answerRepository: Repository<Answer>,
  ) {}
  @Get()
  index(): Promise<Field[]> {
    return this.fieldsService.findAll();
  }
  @Get('filtered')
  indexFiltered(): Promise<Field[]> {
    return new Promise<Field[]>((res, rej) => {
      this.fieldsService.findAll().then((fields: Field[]) => {
        async.filter(
          fields,
          (field: Field, callback) => {
            if (!field.onlyOnce) {
              callback(null, true);
            } else {
              this.answerRepository
                .find({ where: [{ FieldID: field.ID, Answer: true }] })
                .then(answers => {
                  if (answers.length > 0) {
                    callback(null, false);
                  } else {
                    async.filter(
                      field.SubFields,
                      (subField: Field, callback2) => {
                        this.answerRepository
                          .find({
                            where: [{ FieldID: subField.ID, Answer: true }],
                          })
                          .then(answers2 => {
                            if (answers2.length > 0) {
                              callback2(null, false);
                            } else {
                              callback2(null, true);
                            }
                          });
                      },
                      (err2, subFields) => {
                        field.SubFields = subFields;
                        if(field.SubFields.length === 0
                          && field.Type === 'checkbox'){
                          callback(null, false);
                        }else{
                          callback(null, true);
                        }
                      },
                    );
                  }
                });
            }
          },
          (err, filterdFields) => {
            res(filterdFields);
          },
        );
      });
    });
  }

  @Post('create')
  async create(@Body() fieldData: Field): Promise<any> {
    return this.fieldsService.create(fieldData);
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() fieldData: Field): Promise<any> {
    fieldData.ID = Number(id);
    console.log('Update #' + fieldData.ID);
    return this.fieldsService.update(fieldData);
  }
  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.fieldsService.delete(id);
  }
}
