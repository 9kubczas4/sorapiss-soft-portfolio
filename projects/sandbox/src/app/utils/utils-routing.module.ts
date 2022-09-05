import { FeatureToggleComponent } from './components/feature-toggle/feature-toggle.component';
import { UtilsComponent } from './utils.component';
import { SampleProvidersComponent } from './components/sample-providers/sample-providers.component';
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
        component: SampleProvidersComponent,
      },
      {
        path: 'feature-toggle',
        component: FeatureToggleComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilsRoutingModule {}
