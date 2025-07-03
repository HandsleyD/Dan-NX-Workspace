import { Routes } from '@angular/router';
// This file defines the routes for the Angular application.
import { HomeComponent } from './home.component';
import { PensionBasicsComponent } from './pensionBasics.component';
import { AdvancedTopicsComponent } from './advanced-topics.component';

export const appRoutes: Routes = [
  {
    path: '',
    title: 'pension-basics',
    component: PensionBasicsComponent,
  },
  {
    path: 'pension-basics',
    title: 'pension-basics',
    component: PensionBasicsComponent,
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
    component: AdvancedTopicsComponent,
  },
  {
    path: 'calculators',
    title: 'calculators',
    component: HomeComponent, // You can create a proper CalculatorsComponent later
  },
];
