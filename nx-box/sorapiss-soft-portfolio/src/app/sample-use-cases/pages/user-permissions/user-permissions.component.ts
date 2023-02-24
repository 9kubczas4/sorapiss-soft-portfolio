import { Component, OnInit } from '@angular/core';
import { UserRole } from './interfaces/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'ssp-user-permissions',
  templateUrl: './user-permissions.component.html',
  styleUrls: ['./user-permissions.component.scss'],
})
export class UserPermissionsComponent implements OnInit {
  readmeImport = import('raw-loader!./readme.md');

  isUserReadonly = true;

  constructor(readonly userService: UserService) {}

  ngOnInit(): void {
    this.setCurrentUser();
  }

  userRoleChanged(): void {
    this.isUserReadonly = !this.isUserReadonly;
    this.setCurrentUser();
  }

  private setCurrentUser(): void {
    this.userService.setCurrentUser({
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      role: this.isUserReadonly ? UserRole.Viewer : UserRole.Editor,
    });
  }
}
