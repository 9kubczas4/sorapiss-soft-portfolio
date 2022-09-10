import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'utils',
      },
      {
        path: 'ui',
        loadChildren: () => import('./ui/ui.module').then(m => m.UiModule),
      },
      {
        path: 'use-cases',
        loadChildren: () => import('./use-cases/use-cases.module').then(m => m.UseCasesModule),
      },
      {
        path: 'utils',
        loadChildren: () => import('./utils/utils.module').then(m => m.UtilsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
