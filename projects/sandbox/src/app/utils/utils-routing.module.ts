import { UtilsComponent } from './utils.component';
import { SampleProvidersComponent } from './components/sample-providers/sample-providers/sample-providers.component';
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilsRoutingModule {}
