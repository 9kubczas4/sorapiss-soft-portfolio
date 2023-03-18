import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedDirectivesRoutingModule } from './advanced-directives-routing.module';
import { AdvancedDirectivesComponent } from './advanced-directives.component';
import { SamplePageComponent } from '@sorapiss-soft-portfolio/common-ui';
import { directives } from './directives';
import { MatButtonModule } from '@angular/material/button';

export const materialModules = [MatButtonModule];

@NgModule({
  declarations: [AdvancedDirectivesComponent],
  imports: [
    // vendor
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // routing
    AdvancedDirectivesRoutingModule,

    // directives
    ...directives,

    // common
    SamplePageComponent,

    // material
    ...materialModules,
  ],
})
export class AdvancedDirectivesModule {}
