import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { materialModules } from './material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AccountComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AccountRoutingModule, ...materialModules],
})
export class AccountModule {}
