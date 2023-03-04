import { SampleFeatureToggleComponent } from './sample-feature-toggle.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureToggleGuard } from '@sorapiss-soft-portfolio/utils';
import { FeatureToggleKey } from './enums/feature-toggle-keys';

const routes: Routes = [
  {
    path: '',
    component: SampleFeatureToggleComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'feature1',
      },
      {
        path: 'feature1',
        loadChildren: () =>
          import('./sample-page/sample-page.module').then(
            (m) => m.SamplePageModule
          ),
        data: {
          content: 'Feature 1 Content',
          featureFlag: FeatureToggleKey.Feature1,
        },
        canActivate: [FeatureToggleGuard],
        canLoad: [FeatureToggleGuard],
      },
      {
        path: 'feature2',
        loadChildren: () =>
          import('./sample-page/sample-page.module').then(
            (m) => m.SamplePageModule
          ),
        data: {
          content: 'Feature 2 Content',
          featureFlag: FeatureToggleKey.Feature2,
        },
        canActivate: [FeatureToggleGuard],
        canLoad: [FeatureToggleGuard],
      },
      {
        path: 'feature3',
        loadChildren: () =>
          import('./sample-page/sample-page.module').then(
            (m) => m.SamplePageModule
          ),
        data: {
          content: 'Feature 3 Content',
          featureFlag: FeatureToggleKey.Feature3,
        },
        canActivate: [FeatureToggleGuard],
        canLoad: [FeatureToggleGuard],
      },
      {
        path: 'feature4',
        loadChildren: () =>
          import('./sample-page/sample-page.module').then(
            (m) => m.SamplePageModule
          ),
        data: {
          content: 'Feature 4 Content',
          featureFlag: FeatureToggleKey.Feature4,
        },
        canActivate: [FeatureToggleGuard],
        canLoad: [FeatureToggleGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SampleFeatureToggleRoutingModule {}
