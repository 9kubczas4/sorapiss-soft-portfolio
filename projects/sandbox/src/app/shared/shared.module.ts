import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { materialModules } from './material';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, RouterModule, ...materialModules],
  exports: [LayoutComponent],
})
export class SharedModule {}
