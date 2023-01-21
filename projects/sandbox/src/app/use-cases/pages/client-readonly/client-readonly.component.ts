import { Component, OnInit } from '@angular/core';
import { UserRole } from './interfaces/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-client-readonly',
  templateUrl: './client-readonly.component.html',
  styleUrls: ['./client-readonly.component.scss'],
})
export class ClientReadonlyComponent implements OnInit {
  readmeImport = import('./readme.md');

  isClientReadonly = true;

  constructor(readonly userService: UserService) {}

  ngOnInit(): void {
    this.setCurrentUser();
  }

  userRoleChanged(): void {
    this.isClientReadonly = !this.isClientReadonly;
    this.setCurrentUser();
  }

  private setCurrentUser(): void {
    this.userService.setCurrentUser({
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      role: this.isClientReadonly ? UserRole.ClientReadonly : UserRole.User,
    });
  }
}
