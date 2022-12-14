import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondFeatureRoutingModule } from './second-feature-routing.module';
import { SecondFeatureComponent } from './second-feature.component';

@NgModule({
  declarations: [SecondFeatureComponent],
  imports: [CommonModule, SecondFeatureRoutingModule],
})
export class SecondFeatureModule {}
