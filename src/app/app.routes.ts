import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

export const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent,
    title: 'Heroes'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard'
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent,
    title: 'Hero Detail'
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];
