import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, of, tap } from 'rxjs';
import { ApiPost } from '../interfaces/api/api-post';
import { Post } from '../interfaces/ui/post';
import { FeatureServiceBase } from './feature-service.base';

// https://jsonplaceholder.typicode.com/posts
@Injectable()
export class PostsService extends FeatureServiceBase<Post> {
  constructor(private readonly httpClient: HttpClient) {
    super();
  }

  fetch(): Observable<Post[]> {
    this.isLoading$.next(true);
    console.log('fetch data - 3');
    return this.httpClient
      .get<ApiPost[]>(`https://jsonplaceholder.typicode.com/albums`)
      .pipe(map(albums => albums as Post[]));
  }

  delete(itemsIds: number[]): Observable<void> {
    alert(`Delete ${JSON.stringify(itemsIds)}`);
    return of();
  }

  edit(item: Partial<Post>): Observable<void> {
    throw new Error('Method not implemented.');
  }

  create(item: Partial<Post>): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
