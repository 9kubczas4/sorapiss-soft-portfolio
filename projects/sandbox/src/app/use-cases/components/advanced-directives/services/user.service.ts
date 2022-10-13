import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users$: Observable<User[]> = of([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      role: 'admin',
    },
    {
      id: 2,
      firstName: 'Andrew',
      lastName: 'Golota',
      role: 'user',
    },
    {
      id: 3,
      firstName: 'Mike',
      lastName: 'Tyson',
      role: 'user',
    },
    {
      id: 4,
      firstName: 'Evander',
      lastName: 'Holyfield',
      role: 'admin',
    },
    {
      id: 5,
      firstName: 'Anthony',
      lastName: 'Joshua',
      role: 'user',
    },
  ]);
}
