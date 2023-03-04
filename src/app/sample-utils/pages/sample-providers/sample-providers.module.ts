import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleProvidersComponent } from './sample-providers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SamplePageComponent } from '@sorapiss-soft-portfolio/common-ui';
import { SampleProvidersRoutingModule } from './sample-providers-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export const materialModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  declarations: [SampleProvidersComponent],
  imports: [
    // vendor
    CommonModule,
    ReactiveFormsModule,

    // routing
    SampleProvidersRoutingModule,

    // material
    ...materialModules,

    // common
    SamplePageComponent,
  ],
})
export class SampleProvidersModule {}
