import { Pipe, PipeTransform } from '@angular/core';
import { Exhibition } from './exhibition.model';

@Pipe({
  name: 'exhibitionFilter',
})
export class ExhibitionFilterPipe implements PipeTransform {
  transform(exhibitions: Exhibition[], searchTerm: string): Exhibition[] {
    if (!exhibitions || !searchTerm) {
      return exhibitions;
    }

    return exhibitions.filter(
      (exhibition) =>
        exhibition.category.toLowerCase().indexOf(searchTerm.toLowerCase()) !==
        -1
    );
  }
}
