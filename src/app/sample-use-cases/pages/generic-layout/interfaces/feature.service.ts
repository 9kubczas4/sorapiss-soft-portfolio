import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item';

export const FEATURE_SERVICE = new InjectionToken<FeatureService<Item>>(
  'FEATURE_SERVICE'
);

export interface FeatureService<T extends Item> {
  fetch(): Observable<void>;
  delete(itemsIds: number[]): Observable<void>;
  edit(item: Partial<T>): Observable<void>;
  create(item: Partial<T>): Observable<void>;

  dataSource(): Observable<T[] | null>;
  isLoading(): Observable<boolean>;
  isDeleting(): Observable<boolean>;
}
