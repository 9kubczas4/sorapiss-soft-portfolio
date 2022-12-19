import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item';

export const FEATURE_SERVICE = new InjectionToken('FEATURE_SERVICE');

export interface FeatureService<T extends Item> {
  fetchData(): Observable<T[]>;
  delete(item: Partial<T>): Observable<void>;
  edit(item: Partial<T>): Observable<void>;
  create(item: Partial<T>): Observable<void>;
}
