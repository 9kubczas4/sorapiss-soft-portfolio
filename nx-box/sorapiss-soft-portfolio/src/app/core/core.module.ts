import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './main-layout/main-layout.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';

export const materialModules = [MatButtonModule, MatIconModule, MatSidenavModule];

import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    // vendor
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,

    // material
    ...materialModules,

    // 3rd party
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class CoreModule { }
