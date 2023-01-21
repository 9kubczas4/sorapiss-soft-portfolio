import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateSlideoutRoutingModule } from './create-slideout-routing.module';
import { CreateSlideoutComponent } from './create-slideout.component';

@NgModule({
  declarations: [CreateSlideoutComponent],
  imports: [CommonModule, CreateSlideoutRoutingModule],
})
export class CreateSlideoutModule {}
