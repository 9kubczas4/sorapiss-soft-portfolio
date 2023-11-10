import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { ApiPost } from '../../interfaces/api/api-post';
import { Post } from '../../interfaces/ui/post';
import { FeatureServiceBase } from '../../services/feature-service.base';

@Injectable()
export class PostsService extends FeatureServiceBase<Post> {
  constructor(private readonly httpClient: HttpClient) {
    super();
  }

  fetchItems(): Observable<Post[]> {
    this.isLoading$.next(true);
    console.log('fetch data - 3');
    return this.httpClient
      .get<ApiPost[]>(`https://jsonplaceholder.typicode.com/albums`)
      .pipe(map((albums) => albums as Post[]));
  }

  deleteItems(itemsIds: number[]): Observable<void> {
    alert(`Delete ${JSON.stringify(itemsIds)}`);
    return of();
  }

  editItem(item: Partial<Post>): Observable<void> {
    alert(`Edit ${JSON.stringify(item)}`);
    return of();
  }

  createItem(item: Partial<Post>): Observable<void> {
    alert(`Create ${JSON.stringify(item)}`);
    return of();
  }
}
