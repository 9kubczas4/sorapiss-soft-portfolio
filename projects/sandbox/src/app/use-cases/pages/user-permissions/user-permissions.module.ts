import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPermissionsRoutingModule } from './user-permissions-routing.module';
import { UserPermissionsComponent } from './user-permissions.component';
import { SamplePageModule } from '@common-ui';
import { directives } from './directives';
import { materialModules } from './material';

@NgModule({
  declarations: [UserPermissionsComponent],
  imports: [CommonModule, UserPermissionsRoutingModule, SamplePageModule, ...materialModules, ...directives],
})
export class UserPermissionsModule {}
