import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'context-menu',
      },
      {
        path: 'context-menu',
        loadChildren: () =>
          import(`./pages/sample-context-menu/sample-context-menu.module`).then(
            (c) => c.SampleContextMenuModule
          ),
      },
      {
        path: 'disabled-interactive-elements',
        loadChildren: () =>
          import(
            `./pages/sample-disable-interactive-elements-directive/sample-disable-interactive-elements-directive.module`
          ).then((m) => m.SampleDisableInteractiveElementsDirectiveModule),
      },
      {
        path: 'slideout',
        loadChildren: () =>
          import(`./pages/sample-slideout/sample-slideout.module`).then(
            (m) => m.SampleSlideoutModule
          ),
      },
    ],
    data: {
      pages: [
        { label: 'Context Menu', url: 'ui/context-menu', icon: 'menu' },
        {
          label: 'Disable Interactive Elements',
          url: 'ui/disabled-interactive-elements',
          icon: 'block',
        },
        { label: 'Slideout', url: 'ui/slideout', icon: 'flip' },
      ],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SampleUiRoutingModule {}
