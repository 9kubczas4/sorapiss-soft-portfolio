import { UserService } from './../services/user.service';
import { Directive, Self, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { User } from '../interfaces/user';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[users]',
})
export class UsersDirective {
  constructor(@Self() private readonly table: MatTable<User>, private readonly userService: UserService) {}
}
