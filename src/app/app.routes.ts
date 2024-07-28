import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home-page/home-page.component').then(c => HomePageComponent),
  },
  {
    path: 'product-detail/:id',
    loadComponent: () => import('./pages/product-detail-page/product-detail-page.component').then(c => ProductDetailPageComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login-page/login-page.component').then(c => LoginPageComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found-page/not-found-page.component').then(c => NotFoundPageComponent)
  }
];
