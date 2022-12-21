import { Third } from './../interfaces/third';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { FeatureServiceBase } from './feature-service.base';

@Injectable()
export class ThirdService extends FeatureServiceBase<Third> {
  constructor() {
    super();
  }

  fetchData(): Observable<Third[]> {
    console.log('fetch data - 3');
    return of([
      { id: 3, third: 'Cat' },
      { id: 4, third: 'Dog' },
    ]).pipe(tap(items => this.selectionService.setFormGroupItems(items)));
  }

  delete(itemsIds: number[]): Observable<void> {
    alert(`Delete ${JSON.stringify(itemsIds)}`);
    return of();
  }

  edit(item: Partial<Third>): Observable<void> {
    throw new Error('Method not implemented.');
  }

  create(item: Partial<Third>): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
