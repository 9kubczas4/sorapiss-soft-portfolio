import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactDetailsRoutingModule } from './contact-details-routing.module';
import { ContactDetailsComponent } from './contact-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

export const materialModules = [MatButtonModule, MatInputModule];

@NgModule({
  declarations: [ContactDetailsComponent],
  imports: [
    // vendor
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // routing
    ContactDetailsRoutingModule,

    // material
    ...materialModules
  ],
})
export class ContactDetailsModule {}
