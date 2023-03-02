import { FormStrategyComponent } from './form-strategy.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FormStrategyComponent,
    children: [
      {
        path: 'contact',
        loadChildren: () => import('./contact-details/contact-details.module').then(m => m.ContactDetailsModule),
      },
      {
        path: 'contact/:id',
        loadChildren: () => import('./contact-details/contact-details.module').then(m => m.ContactDetailsModule),
      },
      {
        path: 'contact/:id/preview',
        loadChildren: () => import('./contact-details/contact-details.module').then(m => m.ContactDetailsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormStrategyRoutingModule {}
