import { Observable } from 'rxjs';
import { FeatureService } from '../interfaces/feature.service';
import { Item } from '../interfaces/item';

export abstract class FeatureServiceBase<T extends Item> implements FeatureService<T> {
  constructor() {}

  abstract fetchData(): Observable<T[]>;
  abstract delete(item: Partial<T>): Observable<void>;
  abstract edit(item: Partial<T>): Observable<void>;
  abstract create(item: Partial<T>): Observable<void>;
}
