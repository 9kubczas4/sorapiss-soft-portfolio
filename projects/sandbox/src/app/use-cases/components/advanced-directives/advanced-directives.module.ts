import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedDirectivesRoutingModule } from './advanced-directives-routing.module';
import { AdvancedDirectivesComponent } from './advanced-directives.component';
import { SamplePageModule } from '@common-ui';

@NgModule({
  declarations: [AdvancedDirectivesComponent],
  imports: [CommonModule, AdvancedDirectivesRoutingModule, SamplePageModule],
})
export class AdvancedDirectivesModule {}
