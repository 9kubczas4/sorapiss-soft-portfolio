import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleProvidersComponent } from './sample-providers.component';
import { materialModules } from '../material';
import { ReactiveFormsModule } from '@angular/forms';
import { SamplePageModule } from '@common-ui';

@NgModule({
  declarations: [SampleProvidersComponent],
  imports: [CommonModule, ReactiveFormsModule, SamplePageModule, ...materialModules],
})
export class SampleProvidersModule {}
