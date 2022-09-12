import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactDetailsRoutingModule } from './contact-details-routing.module';
import { ContactDetailsComponent } from './contact-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { materialModules } from './material';

@NgModule({
  declarations: [ContactDetailsComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ContactDetailsRoutingModule, ...materialModules],
})
export class ContactDetailsModule {}
