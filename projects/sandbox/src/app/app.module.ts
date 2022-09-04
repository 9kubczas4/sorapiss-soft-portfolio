import { NgUtilsModule } from '@ng-utils';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { materialModules } from './material';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, NgUtilsModule, ...materialModules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
