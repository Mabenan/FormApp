import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Field } from 'src/types/field.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
@Injectable()
export class FieldsService {
  constructor(
    @InjectRepository(Field)
    private fieldRepository: Repository<Field>,
  ) {}
  async findAll(): Promise<Field[]> {
    return await this.fieldRepository.find({relations : ['SubFields']});
  }

  async create(contact: Field): Promise<Field> {
    return await this.fieldRepository.save(contact);
  }

  async update(contact: Field): Promise<UpdateResult> {
    return await this.fieldRepository.update(contact.ID, contact);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.fieldRepository.delete(id);
  }
}
