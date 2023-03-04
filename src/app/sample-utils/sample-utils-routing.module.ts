import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'providers',
      },
      {
        path: 'providers',
        loadChildren: () =>
          import('./pages/sample-providers/sample-providers.module').then(
            (m) => m.SampleProvidersModule
          ),
      },
      {
        path: 'feature-toggle',
        loadChildren: () =>
          import(
            './pages/sample-feature-toggle/sample-feature-toggle.module'
          ).then((m) => m.SampleFeatureToggleModule),
      },
      {
        path: 'type-guards',
        loadChildren: () =>
          import('./pages/sample-type-guards/sample-type-guards.module').then(
            (m) => m.SampleTypeGuardsModule
          ),
      },
      {
        path: 'rxjs',
        loadChildren: () =>
          import(
            './pages/sample-rxjs-operators/sample-rxjs-operators.module'
          ).then((m) => m.SampleRxjsOperatorsModule),
      },
      {
        path: 'functions',
        loadChildren: () =>
          import('./pages/sample-functions/sample-functions.module').then(
            (m) => m.SampleFunctionsModule
          ),
      },
    ],
    data: {
      pages: [
        { label: 'Providers', url: 'utils/providers', icon: '360' },
        {
          label: 'Feature Toggle',
          url: 'utils/feature-toggle',
          icon: 'check_box',
        },
        { label: 'Type Guards', url: 'utils/type-guards', icon: 'block' },
        { label: 'RxJs', url: 'utils/rxjs', icon: 'cached' },
        { label: 'Functions', url: 'utils/functions', icon: 'functions' },
      ],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SampleUtilsRoutingModule {}
