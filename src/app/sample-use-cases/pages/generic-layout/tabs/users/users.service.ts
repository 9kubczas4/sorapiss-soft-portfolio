import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { ApiUser } from '../../interfaces/api/api-user';
import { User } from '../../interfaces/ui/user';
import { FeatureServiceBase } from '../../services/feature-service.base';

@Injectable()
export class UsersService
  extends FeatureServiceBase<User>
  implements OnDestroy
{
  constructor(private readonly httpClient: HttpClient) {
    super();
  }

  fetchItems(): Observable<User[]> {
    console.log('fetch data - 1');
    return this.httpClient
      .get<ApiUser[]>(`https://jsonplaceholder.typicode.com/users`)
      .pipe(
        map((users) =>
          users.map((user) => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone,
            website: user.website,
            city: user.address.city,
            company: user.company.name,
          }))
        )
      );
  }

  deleteItems(itemsIds: number[]): Observable<void> {
    alert(`Delete ${JSON.stringify(itemsIds)}`);
    return of();
  }

  editItem(item: Partial<User>): Observable<void> {
    alert(`Edit ${JSON.stringify(item)}`);
    return of();
  }

  createItem(item: Partial<User>): Observable<void> {
    alert(`Create ${JSON.stringify(item)}`);
    return of();
  }
}
