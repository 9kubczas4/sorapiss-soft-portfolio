import { Injectable, OnDestroy } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { User } from '../interfaces/ui/user';
import { FeatureServiceBase } from './feature-service.base';

@Injectable()
export class UsersService extends FeatureServiceBase<User> implements OnDestroy {
  constructor() {
    super();
  }

  // https://jsonplaceholder.typicode.com/users
  fetch(): Observable<User[]> {
    this.isLoading$.next(true);
    console.log('fetch data - 1');
    return of([]);
  }

  delete(itemsIds: number[]): Observable<void> {
    alert(`Delete ${JSON.stringify(itemsIds)}`);
    return of();
  }

  edit(item: Partial<User>): Observable<void> {
    throw new Error('Method not implemented.');
  }

  create(item: Partial<User>): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
