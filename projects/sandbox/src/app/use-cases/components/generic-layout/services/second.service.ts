import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Second } from '../interfaces/second';
import { FeatureServiceBase } from './feature-service.base';
import { SelectionService } from './selection.service';

@Injectable()
export class SecondService extends FeatureServiceBase<Second> {
  constructor(private readonly selectionService: SelectionService) {
    super();
  }

  fetchData(): Observable<Second[]> {
    console.log('fetch data - 2');
    return of([
      { id: 2, second: 'Warszawa' },
      { id: 3, second: 'Poznan' },
      { id: 4, second: 'Wroclaw' },
      { id: 5, second: 'Gdansk' },
      { id: 6, second: 'Krakow' },
      { id: 7, second: 'Sochaczew' },
    ]).pipe(tap(items => this.selectionService.setFormGroupItems(items)));
  }
  delete(item: Partial<Second>): Observable<void> {
    alert(`Delete ${item.id}`);
    return of();
  }
  edit(item: Partial<Second>): Observable<void> {
    throw new Error('Method not implemented.');
  }
  create(item: Partial<Second>): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
