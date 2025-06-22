import { Component, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-introduction',
  imports: [
    CommonModule,
    MatIconModule,
    MatTreeModule,
    RouterModule,
    RouterOutlet,
  ],
  template: `
    <nav>
      <a routerLink="/home">Home</a>
    </nav>
    <router-outlet />
  `,
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class IntroductionComponent {}
