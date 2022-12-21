import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { Second } from '../interfaces/second';
import { FeatureServiceBase } from './feature-service.base';

@Injectable()
export class SecondService extends FeatureServiceBase<Second> {
  constructor() {
    super();
  }

  fetchData(): Observable<Second[]> {
    this.isLoading$.next(true);
    console.log('fetch data - 2');
    return of([
      { id: 2, second: 'Warszawa' },
      { id: 3, second: 'Poznan' },
      { id: 4, second: 'Wroclaw' },
      { id: 5, second: 'Gdansk' },
      { id: 6, second: 'Krakow' },
      { id: 7, second: 'Sochaczew' },
    ]).pipe(
      delay(2000),
      tap(items => this.selectionService.setFormGroupItems(items)),
      tap(items => this.dataSource$.next(items)),
      tap(_ => this.isLoading$.next(false)),
    );
  }

  delete(itemsIds: number[]): Observable<void> {
    alert(`Delete ${JSON.stringify(itemsIds)}`);
    return of();
  }

  edit(item: Partial<Second>): Observable<void> {
    throw new Error('Method not implemented.');
  }

  create(item: Partial<Second>): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
