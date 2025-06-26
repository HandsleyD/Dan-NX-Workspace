import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-introduction',
  imports: [RouterLink, RouterOutlet, MatButtonModule],
  template: `
    <nav>
      <a mat-stroked-button routerLink="/home">Home</a>
    </nav>
    <router-outlet />
  `,
})
export class IntroductionComponent {}
