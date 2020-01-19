import { Pipe, PipeTransform } from '@angular/core';
import { Field } from '../types/Field';

@Pipe({
    name: 'entryIDFilter',
    pure: false
})
export class EntryIDFilter implements PipeTransform {
    transform(items: Field[]): Field[] {
        if (!items) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => item.ID.indexOf('Field') !== -1);
    }
}
