import { Route } from '@angular/router';
import { AppRoutesEnum } from './core/enums/routes';
import { LoginComponent } from './pages/auth/login/login.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: AppRoutesEnum.DASHBOARD,
    pathMatch: 'full',
  },
  {
    path: AppRoutesEnum.LOGIN,
    canLoad: [LoginComponent],
    loadComponent: () =>
      import('./pages/auth/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: AppRoutesEnum.DASHBOARD,
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
];
