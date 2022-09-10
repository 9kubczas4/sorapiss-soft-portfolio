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
        redirectTo: 'abstract-multi-step-form',
      },
      {
        path: 'abstract-multi-step-form',
        loadChildren: () =>
          import('./components/abstract-multi-step-form/abstract-multi-step-form.module').then(
            m => m.AbstractMultiStepFormModule,
          ),
      },
    ],
    data: {
      pages: [{ label: 'Abstract Multi Step Form', url: 'abstract-multi-step-form', icon: 'library_books' }],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UseCasesRoutingModule {}
