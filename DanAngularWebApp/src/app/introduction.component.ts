import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-introduction',
  imports: [RouterLink, RouterOutlet, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./introduction.component.scss'],
  template: `
    <nav>
      <a mat-stroked-button routerLink="/home">Home</a>
      adadadadadadadadadadadadadadadadadaadadadadadadadadadadadadadadadadadaadadad
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class IntroductionComponent {}
