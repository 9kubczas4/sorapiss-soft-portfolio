import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FeatureService } from '../interfaces/feature.service';
import { Second } from '../interfaces/second';

@Injectable()
export class SecondService implements FeatureService<Second> {
  constructor() {}
  fetchData(): Observable<Second[]> {
    console.log('fetch data - 2');
    return of([{ id: 2, second: '2' }]);
  }
  delete(item: Partial<Second>): Observable<void> {
    throw new Error('Method not implemented.');
  }
  edit(item: Partial<Second>): Observable<void> {
    throw new Error('Method not implemented.');
  }
  create(item: Partial<Second>): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
