import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entry } from 'src/types/entry.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Answer } from 'src/types/answer.entity';
@Injectable()
export class EntriesService {
  constructor(
    @InjectRepository(Entry)
    private entryRepository: Repository<Entry>,
    @InjectRepository(Answer)
    private answerRepository: Repository<Answer>,
  ) {}
  async findAll(): Promise<Entry[]> {
    return await this.entryRepository.find({relations : ['SubEntries']});
  }

  async create(contact: Entry): Promise<Entry> {
    let result = await this.entryRepository.save(contact);
    contact.Answers.forEach(element => {
      element.Entry = result;
      if(!element.Answer){
        element.Answer = "";
      }
      this.answerRepository.save(element);
    });
    return result;
  }

  async update(contact: Entry): Promise<UpdateResult> {
    return await this.entryRepository.update(contact.ID, contact);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.entryRepository.delete(id);
  }
}
