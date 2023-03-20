import { Injectable } from '@angular/core';

@Injectable()
export class ProcessDataService {
  dataSource = [1, 2, 3, 4, 5, 6, 7, 8];

  processItems(input: number[], calledBy: string): number[] {
    console.log(`Called by: ${calledBy}`);
    return input.filter((item) => item % 2 === 0);
  }
}
