import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstFeatureRoutingModule } from './first-feature-routing.module';
import { FirstFeatureComponent } from './first-feature.component';

@NgModule({
  declarations: [FirstFeatureComponent],
  imports: [CommonModule, FirstFeatureRoutingModule],
})
export class FirstFeatureModule {}
