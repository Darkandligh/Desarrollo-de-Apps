import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab4',
        loadComponent: () =>
          import('../tab4/tab4.page').then((m) => m.Tab4Page),
      },
      {
        path: 'calculadora',
        loadComponent: () =>
          import('../calculadora/calculadora.page').then((m) => m.CalculadoraPage),
      },
      {
        path: '',
        redirectTo: '/tabs/tab4',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab4',
    pathMatch: 'full',
  },
];
