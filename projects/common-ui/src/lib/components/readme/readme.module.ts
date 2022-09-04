import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadmeComponent } from './readme.component';

import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [ReadmeComponent],
  imports: [CommonModule, MarkdownModule.forRoot()],
  exports: [ReadmeComponent],
})
export class ReadmeModule {}
