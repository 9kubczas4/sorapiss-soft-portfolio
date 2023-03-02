import { SamplePageComponent } from '@sorapiss-soft-portfolio/common-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleFunctionsRoutingModule } from './sample-functions-routing.module';
import { SampleFunctionsComponent } from './sample-functions.component';
import { MatButtonModule } from '@angular/material/button';

export const materialModules = [MatButtonModule];


@NgModule({
  declarations: [SampleFunctionsComponent],
  imports: [
    // vendor
    CommonModule,

    // routing
    SampleFunctionsRoutingModule,

    // material
    ...materialModules,

    // common
    SamplePageComponent
  ],
})
export class SampleFunctionsModule {}
