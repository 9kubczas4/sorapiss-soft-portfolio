import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditSlideoutRoutingModule } from './edit-slideout-routing.module';
import { EditSlideoutComponent } from './edit-slideout.component';

@NgModule({
  declarations: [EditSlideoutComponent],
  imports: [CommonModule, EditSlideoutRoutingModule],
})
export class EditSlideoutModule {}
