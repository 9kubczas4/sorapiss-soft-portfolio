import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientReadonlyRoutingModule } from './client-readonly-routing.module';
import { ClientReadonlyComponent } from './client-readonly.component';
import { SamplePageModule } from '@common-ui';
import { directives } from './directives';
import { materialModules } from './material';

@NgModule({
  declarations: [ClientReadonlyComponent, ...directives],
  imports: [CommonModule, ClientReadonlyRoutingModule, SamplePageModule, ...materialModules],
})
export class ClientReadonlyModule {}
