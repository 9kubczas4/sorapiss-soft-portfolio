import { AbstractMultiStepFormComponent } from './abstract-multi-step-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AbstractMultiStepFormComponent,
    children: [
      {
        path: 'contact',
        loadChildren: () => import('./contact-details/contact-details.module').then(m => m.ContactDetailsModule),
      },
      { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbstractMultiStepFormRoutingModule {}
