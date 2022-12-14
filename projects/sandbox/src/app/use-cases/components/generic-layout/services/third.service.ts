import { Third } from './../interfaces/third';
import { Injectable } from '@angular/core';
import { FeatureService } from '../interfaces/feature.service';
import { Observable, of } from 'rxjs';

@Injectable()
export class ThirdService implements FeatureService<Third> {
  constructor() {}
  fetchData(): Observable<Third> {
    console.log('fetch data - 3');
    return of({ third: '1' });
  }
  delete(item: Partial<Third>): Observable<void> {
    throw new Error('Method not implemented.');
  }
  edit(item: Partial<Third>): Observable<void> {
    throw new Error('Method not implemented.');
  }
  create(item: Partial<Third>): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
