import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateformat'
})
export class DateformatPipe implements PipeTransform {

  constructor(private _datepipe: DatePipe) {}

  transform(value: string): any {
    return this._datepipe.transform(value, 'yyyy-MM-dd');
  }

}
