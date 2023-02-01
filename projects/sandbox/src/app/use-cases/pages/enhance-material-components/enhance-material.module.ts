import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplePageModule } from '@common-ui';
import { materialModules } from './material';
import { EnhanceMaterialComponent } from './enhance-material.component';
import { EnhanceMaterialRoutingModule } from './enhance-material-routing.module';
import { GithubIssuesService } from './services/github-issues.service';
import { directives } from './directives';

@NgModule({
  declarations: [EnhanceMaterialComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    EnhanceMaterialRoutingModule,
    SamplePageModule,
    ...materialModules,
    ...directives,
  ],
  providers: [GithubIssuesService],
})
export class EnhanceMaterialModule {}
