import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  signal,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

type TabKey = ['pension-basics', 'advanced-topics', 'calculators'][number];

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    RouterLink,
    RouterOutlet,
  ],
})
export class NavigationComponent {
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly router = inject(Router);

  readonly isHandset = signal(false);

  tabRoutes = ['/home', '/advanced-topics', '/calculators'];

  constructor() {
    effect(() => {
      this.breakpointObserver
        .observe(Breakpoints.Handset)
        .subscribe((result) => {
          this.isHandset.set(result.matches);
        });
    });
  }

  onTabChange(index: number) {
    this.router.navigate([this.tabRoutes[index]]);
  }

  tabKeyFromRoute(): TabKey {
    const url = this.router.url;
    if (url.startsWith('/home')) return 'pension-basics';
    if (url.startsWith('/introduction')) return 'advanced-topics';
    if (url.startsWith('/calculators')) return 'calculators';
    return 'pension-basics'; // default
  }
}
