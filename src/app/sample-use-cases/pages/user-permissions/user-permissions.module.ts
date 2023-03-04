import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPermissionsRoutingModule } from './user-permissions-routing.module';
import { UserPermissionsComponent } from './user-permissions.component';
import { directives } from './directives';
import { SamplePageComponent } from '@sorapiss-soft-portfolio/common-ui';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

export const materialModules = [
  MatButtonModule,
  MatListModule,
  MatSelectModule,
  MatSlideToggleModule,
];

@NgModule({
  declarations: [UserPermissionsComponent],
  imports: [
    // vendor
    CommonModule,

    // routing
    UserPermissionsRoutingModule,

    // common
    SamplePageComponent,

    // material
    ...materialModules,

    // feature
    ...directives,
  ],
})
export class UserPermissionsModule {}
