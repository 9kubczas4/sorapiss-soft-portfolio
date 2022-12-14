import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureTabHeaderComponent } from './feature-tab-header.component';

@NgModule({
  declarations: [FeatureTabHeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [FeatureTabHeaderComponent],
})
export class FeatureTabHeaderModule {}
