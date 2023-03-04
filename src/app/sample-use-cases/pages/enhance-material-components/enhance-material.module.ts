import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplePageComponent } from '@sorapiss-soft-portfolio/common-ui';
import { EnhanceMaterialComponent } from './enhance-material.component';
import { EnhanceMaterialRoutingModule } from './enhance-material-routing.module';
import { GithubIssuesService } from './services/github-issues.service';
import { directives } from './directives';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

export const materialModules = [
  MatButtonModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatTableModule,
];

@NgModule({
  declarations: [EnhanceMaterialComponent],
  imports: [
    // vendor
    CommonModule,
    HttpClientModule,

    // routing
    EnhanceMaterialRoutingModule,

    // common
    SamplePageComponent,

    ...materialModules,
    ...directives,
  ],
  providers: [GithubIssuesService],
})
export class EnhanceMaterialModule {}
