import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(list: any[], searchFied?: any, keyword?: any): any[] {
    if (!searchFied || !keyword) {
      return list;
    }
    return list.filter(item => {
      const fiedValue = item[searchFied];
      return fiedValue.indexOf(keyword) >= 0;
    });
  }

}
