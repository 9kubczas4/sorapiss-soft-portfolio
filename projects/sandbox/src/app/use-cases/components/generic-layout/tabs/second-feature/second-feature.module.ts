import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondFeatureRoutingModule } from './second-feature-routing.module';

@NgModule({
  imports: [CommonModule, SecondFeatureRoutingModule],
})
export class SecondFeatureModule {}
