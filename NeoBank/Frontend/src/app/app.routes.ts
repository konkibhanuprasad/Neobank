//------------------------- app.routes.ts -----------------------------//
import { Routes } from '@angular/router';
import { authGuard, adminGuard, customerGuard, guestGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/landing/landing').then(m => m.Landing)
  },

  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent),
    canActivate: [guestGuard]
  },
  {
    path: 'register',
    loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent),
    // loadComponent: () => import('./features/auth/register-multi/register-multi.component').then(m => m.RegisterMultiComponent),
    canActivate: [guestGuard]
  },
  {
    path: 'register-openaccount',
    loadComponent: () => import('./features/auth/register-multi/register-multi.component').then(m => m.RegisterMultiComponent),
    canActivate: [guestGuard]
  },
  {
    path: 'admin',
    loadComponent: () => import('./features/admin/admin-layout/admin-layout.component').then(m => m.AdminLayoutComponent),
    canActivate: [authGuard, adminGuard],
    children: []
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/customer/customer-layout/customer-layout.component').then(m => m.CustomerLayoutComponent),
    canActivate: [authGuard, customerGuard]
  },

  {
    path: 'analytics',
    loadComponent: () => import('./features/customer/customer-analytics/customer-analytics').then(m => m.CustomerAnalytics),
    canActivate: [authGuard, customerGuard]
  },
  {
    path: 'admin/analytics',
    loadComponent: () => import('./features/admin/admin-analytics/admin-analytics').then(m => m.AdminAnalytics),
    canActivate: [authGuard, adminGuard]
  },
  {
    path: 'admin/system-logs',
    loadComponent: () => import('./features/system-logs/system-logs').then(m => m.SystemLogs),
    canActivate: [authGuard, adminGuard]
  },
  {
    path: '**',
    redirectTo: ''
  },

];