import { Component, OnInit } from '@angular/core';
import { logParametersAndReturnValue, memo } from '@ng-utils';

@Component({
  selector: 'app-sample-functions',
  templateUrl: './sample-functions.component.html',
  styleUrls: ['./sample-functions.component.scss'],
})
export class SampleFunctionsComponent implements OnInit {
  readmeImport = import('./readme.md');
  /*Working sample */
  count1 = 0;
  plusOne = memo((count: number) => {
    console.log('plusOne is called: ', count);
    return count + 1;
  });

  /*Not working sample */
  count2 = 0;
  isOdd = memo((count: number) => {
    console.log(`isOdd called: `, count);
    return count % 2 === 0;
  });

  ngOnInit(): void {
    this.pow(2, 5);
  }

  @logParametersAndReturnValue
  pow(a: number, b: number): number {
    return Math.pow(a, b);
  }
}
