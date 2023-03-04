import { Observable, map, Subject, startWith } from 'rxjs';
import { Injectable } from '@angular/core';
import { User, UserRole } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly #currentUser$ = new Subject<User>();
  readonly isViewer$ = this.#currentUser$.pipe(
    map((user) => user.role === UserRole.Viewer),
    startWith(true)
  );

  getCurrentUser = (): Observable<User> => this.#currentUser$.asObservable();

  setCurrentUser = (user: User): void => {
    this.#currentUser$.next(user);
  };
}
