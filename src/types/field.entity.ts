import {Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from 'typeorm';

@Entity()
export class Field {
  @PrimaryGeneratedColumn()
  ID: number;
  @Column()
  Title: string;
  @Column()
  Type: string;
  
  @Column()
  IsRequired: boolean;
  @Column()
  onlyOnce: boolean;
  
  
  @OneToMany(type => Field, subField => subField.Field,{
    cascade: true
 })
  SubFields: Field[];
  @ManyToOne(type => Field, field => field.SubFields)
  Field: Field;
} 

