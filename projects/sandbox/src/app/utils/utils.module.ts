import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsRoutingModule } from './utils-routing.module';
import { UtilsComponent } from './utils.component';
import { SharedModule } from '../shared/shared.module';
import { SampleProvidersModule } from './components/sample-providers/sample-providers.module';

@NgModule({
  declarations: [UtilsComponent],
  imports: [CommonModule, SampleProvidersModule, SharedModule, UtilsRoutingModule],
})
export class UtilsModule {}
