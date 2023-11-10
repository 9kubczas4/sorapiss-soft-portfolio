import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'value',
})
export class ValuePipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform(value: any): string {
    if (value === null) {
      return 'null';
    }
    if (value === undefined) {
      return 'undefined';
    }
    if (value === '') {
      return '{{ empty string }}';
    }
    return JSON.stringify(value);
  }
}
