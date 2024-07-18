import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login-page/login-page.component').then(c => LoginPageComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home-page/home-page.component').then(c => HomePageComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found-page/not-found-page.component').then(c => NotFoundPageComponent)
  }
];
