import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamplePageComponent } from './sample-page.component';
import { ReadmeModule } from '../readme';

@NgModule({
  declarations: [SamplePageComponent],
  imports: [CommonModule, ReadmeModule],
  exports: [SamplePageComponent],
})
export class SamplePageModule {}
