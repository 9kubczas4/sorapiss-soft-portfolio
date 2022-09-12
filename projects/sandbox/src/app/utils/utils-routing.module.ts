import { LayoutComponent } from './../shared/components/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'providers',
      },
      {
        path: 'providers',
        loadChildren: () =>
          import('./components/sample-providers/sample-providers.module').then(m => m.SampleProvidersModule),
      },
      {
        path: 'feature-toggle',
        loadChildren: () =>
          import('./components/sample-feature-toggle/sample-feature-toggle.module').then(
            m => m.SampleFeatureToggleModule,
          ),
      },
    ],
    data: {
      pages: [
        { label: 'Providers', url: 'providers', icon: '360' },
        { label: 'Feature Toggle', url: 'feature-toggle', icon: 'check_box' },
      ],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilsRoutingModule {}
