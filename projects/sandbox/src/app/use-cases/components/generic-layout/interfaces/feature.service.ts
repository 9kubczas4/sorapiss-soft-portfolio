import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const FEATURE_SERVICE = new InjectionToken('FEATURE_SERVICE');

export interface FeatureService<T> {
  fetchData(): Observable<T>;
  delete(item: Partial<T>): Observable<void>;
  edit(item: Partial<T>): Observable<void>;
  create(item: Partial<T>): Observable<void>;
}
