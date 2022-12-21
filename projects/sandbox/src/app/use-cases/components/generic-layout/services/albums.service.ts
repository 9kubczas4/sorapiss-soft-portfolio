import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { ApiAlbum } from '../interfaces/api/api-album';
import { Album } from '../interfaces/ui/album';
import { FeatureServiceBase } from './feature-service.base';

@Injectable()
export class AlbumsService extends FeatureServiceBase<Album> {
  constructor(private readonly httpClient: HttpClient) {
    super();
  }

  fetch(): Observable<Album[]> {
    console.log('fetch data - 2');
    return this.httpClient
      .get<ApiAlbum[]>(`https://jsonplaceholder.typicode.com/albums`)
      .pipe(map(albums => albums as Album[]));
  }

  delete(itemsIds: number[]): Observable<void> {
    alert(`Delete ${JSON.stringify(itemsIds)}`);
    return of();
  }

  edit(item: Partial<Album>): Observable<void> {
    throw new Error('Method not implemented.');
  }

  create(item: Partial<Album>): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
