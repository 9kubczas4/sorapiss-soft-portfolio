import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

export const materialModules = [MatButtonModule, MatInputModule];

@NgModule({
  declarations: [AccountComponent],
  imports: [
    // vendor
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // routing
    AccountRoutingModule,

    // material
    ...materialModules
  ],
})
export class AccountModule {}
