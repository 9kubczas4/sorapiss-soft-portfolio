import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FeatureService } from '../interfaces/feature.service';
import { First } from '../interfaces/first';

@Injectable()
export class FirstService implements FeatureService<First> {
  constructor() {}
  fetchData(): Observable<First[]> {
    console.log('fetch data - 1');
    return of([{ id: 1, first: '1' }]);
  }
  delete(item: Partial<First>): Observable<void> {
    throw new Error('Method not implemented.');
  }
  edit(item: Partial<First>): Observable<void> {
    throw new Error('Method not implemented.');
  }
  create(item: Partial<First>): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
