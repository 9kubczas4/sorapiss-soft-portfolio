import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplePageModule } from '@common-ui';
import { materialModules } from './material';
import { EnhanceMaterialComponent } from './enhance-material.component';
import { EnhanceMaterialRoutingModule } from './enhance-material-routing.module';

@NgModule({
  declarations: [EnhanceMaterialComponent],
  imports: [CommonModule, EnhanceMaterialRoutingModule, SamplePageModule, ...materialModules],
})
export class EnhanceMaterialModule {}
