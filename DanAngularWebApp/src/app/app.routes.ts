import { Routes } from '@angular/router';
// This file defines the routes for the Angular application.
import { PensionBasicsComponent } from './pension-basics/pensionBasics.component';
import { AdvancedTopicsComponent } from './advanced-topics/advanced-topics.component';
import { HistoryOfPensionsComponent } from './pension-basics/history-of-pensions.component';
import { CalculatorsComponent } from './calculators/calculators.component';
import { WhatIsADbPensionComponent } from './pension-basics/what-is-a-db-pension.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/pension-basics',
    pathMatch: 'full',
  },
  {
    path: 'pension-basics',
    title: 'Pension Basics',
    component: PensionBasicsComponent,
  },
  {
    path: 'pension-basics/what-is-a-DB-pension',
    title: 'What is a DB Pension?',
    component: WhatIsADbPensionComponent,
  },
  {
    path: 'pension-basics/history-of-pensions',
    title: 'History of Pensions',
    component: HistoryOfPensionsComponent,
  },
  {
    path: 'pension-basics/how-db-pensions-work',
    title: 'How DB Pensions Work',
    component: PensionBasicsComponent, // Replace with actual component
  },
  {
    path: 'advanced-topics',
    title: 'Advanced Topics',
    component: AdvancedTopicsComponent,
  },
  {
    path: 'advanced-topics/topic-1',
    title: 'Advanced Topic 1',
    component: AdvancedTopicsComponent, // Replace with actual component
  },
  {
    path: 'advanced-topics/topic-2',
    title: 'Advanced Topic 2',
    component: AdvancedTopicsComponent, // Replace with actual component
  },
  {
    path: 'advanced-topics/topic-3',
    title: 'Advanced Topic 3',
    component: AdvancedTopicsComponent, // Replace with actual component
  },

  
  {
    path: 'calculators',
    title: 'Calculators',
    component: CalculatorsComponent, // Create a proper CalculatorsComponent
  },
  {
    path: 'calculators/pension-calculator',
    title: 'Pension Calculator',
    component: CalculatorsComponent, // Replace with actual component
  },
  {
    path: 'calculators/retirement-calculator',
    title: 'Retirement Calculator',
    component: CalculatorsComponent, // Replace with actual component
  },
];
