import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureTableComponent } from '../../shared/feature-table/feature-table.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureTableComponent,
    children: [
      {
        path: ':id/edit',
        loadComponent: () =>
          import('./containers/edit-slideout/edit-slideout.component').then(
            (c) => c.EditSlideoutComponent
          ),
      },
      {
        path: 'create',
        loadComponent: () =>
          import('./containers/create-slideout/create-slideout.component').then(
            (c) => c.CreateSlideoutComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumsRoutingModule {}
