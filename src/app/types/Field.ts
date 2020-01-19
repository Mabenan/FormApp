import { SubField } from './SubField';

export interface Field {
  Title: string;
  Type: string;
  ID: string;
  Instructions: string;
  IsRequired: string;
  ClassNames: string;
  DefaultVal: string;
  Page: string;
  SubFields: SubField[];
}

