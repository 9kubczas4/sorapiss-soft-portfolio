import { Component, OnInit } from '@angular/core';
import { isArray, isNil, isNull, isString, KeyValuePair } from '@sorapiss-soft-portfolio/utils';
import { TypeGuardResult } from './sample-type-guards.interface';

@Component({
  selector: 'ssp-sample-type-guards',
  templateUrl: './sample-type-guards.component.html',
  styleUrls: ['./sample-type-guards.component.scss'],
})
export class SampleTypeGuardsComponent implements OnInit {
  readmeImport = import('raw-loader!./readme.md');

  dataSource: TypeGuardResult[] = [];

  #values: any[] = [[1, 2, 3], 1, { count: 2 }, null, undefined, '', 'string'];

  #functions: Array<KeyValuePair<string, (input: any) => boolean>> = [
    {
      key: 'isArray',
      value: (input: any) => isArray(input),
    },
    {
      key: 'isNil',
      value: (input: any) => isNil(input),
    },
    {
      key: 'isNull',
      value: (input: any) => isNull(input),
    },
    {
      key: 'isString',
      value: (input: any) => isString(input),
    },
  ];

  ngOnInit(): void {
    this.#functions.forEach(fn => {
      const item: TypeGuardResult = {
        functionName: fn.key,
        results: this.#values.map(value => ({
          key: value,
          value: fn.value(value),
        })),
      };
      this.dataSource = [...this.dataSource, item];
    });
  }
}
