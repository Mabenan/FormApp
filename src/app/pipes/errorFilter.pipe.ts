import { Pipe, PipeTransform } from '@angular/core';
import { FieldError } from '../types/FieldError';
@Pipe({name: 'errorFilter'})
export class ErrorFilterPipe implements PipeTransform {
  transform(fieldErrors: FieldError[], id?: string): FieldError {
    return fieldErrors.find(fieldError => fieldError.ID === id);
  }
}
