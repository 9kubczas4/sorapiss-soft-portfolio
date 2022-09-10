import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsRoutingModule } from './utils-routing.module';
import { UtilsComponent } from './utils.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UtilsComponent],
  imports: [CommonModule, SharedModule, UtilsRoutingModule],
})
export class UtilsModule {}
