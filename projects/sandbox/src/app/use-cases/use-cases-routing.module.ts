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
        redirectTo: 'abstract-multi-step-form/contact',
      },
      {
        path: 'abstract-multi-step-form',
        loadChildren: () =>
          import('./components/abstract-multi-step-form/abstract-multi-step-form.module').then(
            m => m.AbstractMultiStepFormModule,
          ),
      },
      {
        path: 'component-factory-directive',
        loadChildren: () =>
          import('./components/component-factory-directive/component-factory-directive.module').then(
            m => m.ComponentFactoryDirectiveModule,
          ),
      },
    ],
    data: {
      pages: [
        { label: 'Abstract Multi Step Form', url: 'abstract-multi-step-form/contact', icon: 'library_books' },
        { label: 'Component Factory Directive', url: 'component-factory-directive', icon: 'settings_applications' },
      ],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UseCasesRoutingModule {}
