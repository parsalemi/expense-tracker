import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./components/dashboard/dashboard').then(c => c.Dashboard),
  },
  {
    path: 'my-list',
    loadComponent: () => import('./components/list/list').then(c => c.List),
  },
  {
    path: 'add-new',
    loadComponent: () => import('./components/add-form/add-form').then(c => c.AddForm),
  },
  {
    path: 'settings',
    loadComponent: () => import('./components/settings/settings').then(c => c.Settings),
  },
  {
    path: 'register',
    loadComponent: () => import('./components/register/register').then(c => c.Register),
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login').then(c => c.Login),
  },
  {
    path: '**',
    loadComponent: () => import('./components/not-found/not-found').then(c => c.NotFound),
  }
];
