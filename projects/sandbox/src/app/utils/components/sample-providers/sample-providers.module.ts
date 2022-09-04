import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleProvidersComponent } from './sample-providers/sample-providers.component';
import { materialModules } from '../material';
import { ReactiveFormsModule } from '@angular/forms';
import { ReadmeModule } from '@common-ui';

@NgModule({
  declarations: [SampleProvidersComponent],
  imports: [CommonModule, ReactiveFormsModule, ReadmeModule, ...materialModules],
})
export class SampleProvidersModule {}
