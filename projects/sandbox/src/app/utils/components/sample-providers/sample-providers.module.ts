import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleProvidersComponent } from './sample-providers.component';
import { materialModules } from './material';
import { ReactiveFormsModule } from '@angular/forms';
import { SamplePageModule } from '@common-ui';
import { SampleProvidersRoutingModule } from './sample-providers-routing.module';

@NgModule({
  declarations: [SampleProvidersComponent],
  imports: [CommonModule, ReactiveFormsModule, SamplePageModule, ...materialModules, SampleProvidersRoutingModule],
})
export class SampleProvidersModule {}
