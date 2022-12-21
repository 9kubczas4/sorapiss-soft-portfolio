import { Injectable, OnDestroy } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { First } from '../interfaces/first';
import { FeatureServiceBase } from './feature-service.base';

@Injectable()
export class FirstService extends FeatureServiceBase<First> implements OnDestroy {
  constructor() {
    super();
  }

  fetchData(): Observable<First[]> {
    this.isLoading$.next(true);
    console.log('fetch data - 1');
    return of([
      { id: 1, first: 'Lorem ipsum dolor' },
      { id: 2, first: 'Lorem ipsum dolor emet' },
      { id: 3, first: 'Litwo ojczyzno moja' },
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

  edit(item: Partial<First>): Observable<void> {
    throw new Error('Method not implemented.');
  }

  create(item: Partial<First>): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
