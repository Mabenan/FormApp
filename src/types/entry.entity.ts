import {Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { Answer } from './answer.entity';

@Entity()
export class Entry {
  @PrimaryGeneratedColumn()
  ID: number;
  
  
  @OneToMany(type => Answer, answer => answer.Entry)
  Answers: Answer[];
}

