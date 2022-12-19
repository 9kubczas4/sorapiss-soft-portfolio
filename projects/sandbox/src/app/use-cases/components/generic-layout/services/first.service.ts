import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { First } from '../interfaces/first';
import { FeatureServiceBase } from './feature-service.base';
import { SelectionService } from './selection.service';

@Injectable()
export class FirstService extends FeatureServiceBase<First> {
  constructor(private readonly selectionService: SelectionService) {
    super();
  }

  fetchData(): Observable<First[]> {
    console.log('fetch data - 1');
    return of([
      { id: 1, first: 'Lorem ipsum dolor' },
      { id: 2, first: 'Lorem ipsum dolor emet' },
      { id: 3, first: 'Litwo ojczyzno moja' },
    ]).pipe(tap(items => this.selectionService.setFormGroupItems(items)));
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
