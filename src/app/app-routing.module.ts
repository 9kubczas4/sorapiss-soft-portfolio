import { MainLayoutComponent } from './core/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'utils',
      },
      {
        path: 'ui',
        loadChildren: () =>
          import('./sample-ui/sample-ui.module').then((m) => m.SampleUiModule),
      },
      {
        path: 'use-cases',
        loadChildren: () =>
          import('./sample-use-cases/sample-use-cases.module').then(
            (m) => m.SampleUseCasesModule
          ),
      },
      {
        path: 'utils',
        loadChildren: () =>
          import('./sample-utils/sample-utils.module').then(
            (m) => m.SampleUtilsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
