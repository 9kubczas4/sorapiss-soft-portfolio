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
      {
        path: 'type-guards',
        loadChildren: () =>
          import('./components/sample-type-guards/sample-type-guards.module').then(m => m.SampleTypeGuardsModule),
      },
      {
        path: 'rxjs',
        loadChildren: () =>
          import('./components/sample-rxjs-operators/sample-rxjs-operators.module').then(
            m => m.SampleRxjsOperatorsModule,
          ),
      },
    ],
    data: {
      pages: [
        { label: 'Providers', url: 'providers', icon: '360' },
        { label: 'Feature Toggle', url: 'feature-toggle', icon: 'check_box' },
        { label: 'Type Guards', url: 'type-guards', icon: 'block' },
        { label: 'RxJs', url: 'rxjs', icon: 'cached' },
      ],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilsRoutingModule {}
