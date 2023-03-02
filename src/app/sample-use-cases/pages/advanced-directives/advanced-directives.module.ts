import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedDirectivesRoutingModule } from './advanced-directives-routing.module';
import { AdvancedDirectivesComponent } from './advanced-directives.component';
import { SamplePageComponent } from '@sorapiss-soft-portfolio/common-ui';
import { directives } from './directives';
import { MatTableModule } from '@angular/material/table';

export const materialModules = [MatTableModule];


@NgModule({
  declarations: [AdvancedDirectivesComponent, ...directives],
  imports: [
    // vendor
    CommonModule,

    // routing
    AdvancedDirectivesRoutingModule,

    // common
    SamplePageComponent,

    // material
    ...materialModules],
})
export class AdvancedDirectivesModule {}
