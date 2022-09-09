import { UtilsComponent } from './utils.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UtilsComponent,
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
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilsRoutingModule {}
