import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadComponent: () => import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent) },
      { path: 'applications', loadComponent: () => import('./pages/application-list-page/application-list-page.component').then((m) => m.ApplicationListPageComponent) },
      { path: 'applications/new', loadComponent: () => import('./pages/application-form-page/application-form-page.component').then((m) => m.ApplicationFormPageComponent) },
      { path: 'applications/:id/edit', loadComponent: () => import('./pages/application-form-page/application-form-page.component').then((m) => m.ApplicationFormPageComponent) },
      { path: 'applications/:id', loadComponent: () => import('./pages/application-detail-page/application-detail-page.component').then((m) => m.ApplicationDetailPageComponent) },
    ],
  },
  { path: '**', redirectTo: '' },
];
