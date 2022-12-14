import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirdFeatureRoutingModule } from './third-feature-routing.module';
import { ThirdFeatureComponent } from './third-feature.component';

@NgModule({
  declarations: [ThirdFeatureComponent],
  imports: [CommonModule, ThirdFeatureRoutingModule],
})
export class ThirdFeatureModule {}
