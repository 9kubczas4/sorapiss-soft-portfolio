import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'disabled-interactive-elements',
      },
      {
        path: 'disabled-interactive-elements',
        loadChildren: () =>
          import(
            `./components/sample-disable-interactive-elements-directive/sample-disable-interactive-elements-directive.module`
          ).then(m => m.SampleDisableInteractiveElementsDirectiveModule),
      },
    ],
    data: {
      pages: [{ label: 'Disable Interactive Elements', url: 'disabled-interactive-elements', icon: 'block' }],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiRoutingModule {}
