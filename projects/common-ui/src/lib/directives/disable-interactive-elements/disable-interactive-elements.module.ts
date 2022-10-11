import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisableInteractiveElementsDirective } from './disable-interactive-elements.directive';

@NgModule({
  declarations: [DisableInteractiveElementsDirective],
  imports: [CommonModule],
  exports: [DisableInteractiveElementsDirective],
})
export class DisableInteractiveElementsModule {}
