import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pure: false
})

export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, anotherPara: string) {
    if (filterString == '' || value.length < 0) {
      return value;
    }
    const resultArray = [];
    for (let item of value) {
      if (item[anotherPara] == filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
