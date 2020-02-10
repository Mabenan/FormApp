import { Pipe, PipeTransform } from '@angular/core';
import { Field } from '../../../../server/src/types/field.entity';

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
        return items.filter(item => item.ID !== -1 && item.Type !== '');
    }
}
