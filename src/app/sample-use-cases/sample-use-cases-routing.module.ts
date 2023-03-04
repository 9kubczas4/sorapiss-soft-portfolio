import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'abstract-multi-step-form/contact',
      },
      {
        path: 'abstract-multi-step-form',
        loadChildren: () =>
          import(
            './pages/abstract-multi-step-form/abstract-multi-step-form.module'
          ).then((m) => m.AbstractMultiStepFormModule),
      },
      {
        path: 'advanced-dependency-injection',
        loadChildren: () =>
          import(
            './pages/advanced-dependency-injection/advanced-dependency-injection.module'
          ).then((m) => m.AdvancedDependencyInjectionModule),
      },
      {
        path: 'advanced-directives',
        loadChildren: () =>
          import('./pages/advanced-directives/advanced-directives.module').then(
            (m) => m.AdvancedDirectivesModule
          ),
      },
      {
        path: 'component-factory-directive',
        loadChildren: () =>
          import(
            './pages/component-factory-directive/component-factory-directive.module'
          ).then((m) => m.ComponentFactoryDirectiveModule),
      },
      {
        path: 'enhance-material',
        loadChildren: () =>
          import(
            './pages/enhance-material-components/enhance-material.module'
          ).then((m) => m.EnhanceMaterialModule),
      },
      {
        path: 'user-permissions',
        loadChildren: () =>
          import('./pages/user-permissions/user-permissions.module').then(
            (m) => m.UserPermissionsModule
          ),
      },
      {
        path: 'generic-layout',
        loadChildren: () =>
          import('./pages/generic-layout/generic-layout.module').then(
            (m) => m.GenericLayoutModule
          ),
      },
    ],
    data: {
      pages: [
        {
          label: 'Abstract Multi Step Form',
          url: 'use-cases/abstract-multi-step-form/contact',
          icon: 'library_books',
        },
        {
          label: 'Advanced Dependency Injection',
          url: 'use-cases/advanced-dependency-injection',
          icon: 'jump_to_element',
        },
        {
          label: 'Advanced Directives',
          url: 'use-cases/advanced-directives',
          icon: 'switch_access_shortcut_add',
        },
        {
          label: 'Component Factory Directive',
          url: 'use-cases/component-factory-directive',
          icon: 'settings_applications',
        },
        {
          label: 'Enhance Material Components',
          url: 'use-cases/enhance-material',
          icon: 'switch_access_shortcut_add',
        },
        {
          label: 'Generic Layout',
          url: 'use-cases/generic-layout',
          icon: 'view_column',
        },
        {
          label: 'User Permissions',
          url: 'use-cases/user-permissions',
          icon: 'person_outline',
        },
      ],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SampleUseCasesRoutingModule {}
