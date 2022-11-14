import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent } from './overlay.component';
import { OverlayService } from './overlay.service';

@NgModule({
  declarations: [OverlayComponent],
  providers: [OverlayService],
  imports: [CommonModule],
  exports: [OverlayComponent],
})
export class OverlayModule {}
