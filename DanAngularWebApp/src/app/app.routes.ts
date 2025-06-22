import { Routes } from '@angular/router';
// This file defines the routes for the Angular application.
import { HomeComponent } from './home.component';
import { IntroductionComponent } from './introduction.component';

export const appRoutes: Routes = [
  {
    path: 'home',
    title: 'Home Page',
    component: HomeComponent,
  },
  {
    path: 'introduction',
    title: 'Introduction Page',
    component: IntroductionComponent,
  },
];
