import { Routes } from '@angular/router';
// This file defines the routes for the Angular application.
import { HomeComponent } from './home.component';
import { IntroductionComponent } from './introduction.component';

export const appRoutes: Routes = [
  {
    path: '',
    title: 'Home Page',
    component: HomeComponent,
  },
  {
    path: 'pension-basics',
    title: 'pension-basics',
    component: pensionBasicsComponent,
    children: [
      {
        path: 'what-is-a-pension',
        title: 'What is a Pension?',
        component: HomeComponent,
      },
      {
        path: 'history-of-pensions',
        title: 'History of Pensions',
        component: HomeComponent,
      },
    ],
  },
  {
    path: 'advanced-topics',
    title: 'advanced-topics',
    component: advancedTopicsComponent,
  },
];
