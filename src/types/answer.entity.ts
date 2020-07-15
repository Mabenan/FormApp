import { ManyToOne, Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Field } from "./field.entity";
import { Entry } from "./entry.entity";

@Entity()
export class Answer {

  @PrimaryGeneratedColumn()
  ID: string;
  @Column()
  FieldID: number;
  @Column()
  Answer: string;

  @ManyToOne(type=> Entry, entry => entry.Answers)
  Entry: Entry;
}
