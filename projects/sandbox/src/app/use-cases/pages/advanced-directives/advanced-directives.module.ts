import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedDirectivesRoutingModule } from './advanced-directives-routing.module';
import { AdvancedDirectivesComponent } from './advanced-directives.component';
import { SamplePageModule } from '@common-ui';
import { directives } from './directives';
import { materialModules } from './material';

@NgModule({
  declarations: [AdvancedDirectivesComponent, ...directives],
  imports: [CommonModule, AdvancedDirectivesRoutingModule, SamplePageModule, ...materialModules],
})
export class AdvancedDirectivesModule {}
