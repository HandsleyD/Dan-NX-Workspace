import {
  ChangeDetectionStrategy,
  Component,
  computed,
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
import { Router, RouterLink, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

type TabKey = 'pension-basics' | 'advanced-topics' | 'calculators';

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
  readonly currentUrl = signal(this.router.url);

  // Tab routes for the main navigation
  readonly tabRoutes = ['/pension-basics', '/advanced-topics', '/calculators'];

  // Computed property to determine which sidenav to show
  readonly sidenavToShow = computed(() => {
    const url = this.currentUrl();
    if (url.startsWith('/pension-basics')) return 'pension-basics';
    if (url.startsWith('/advanced-topics')) return 'advanced-topics';
    if (url.startsWith('/calculators')) return 'calculators';
    return 'pension-basics'; // default
  });

  constructor() {
    effect(() => {
      this.breakpointObserver
        .observe(Breakpoints.Handset)
        .subscribe((result) => {
          this.isHandset.set(result.matches);
        });
    });

    // Listen to route changes to update current URL
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl.set(event.url);
      });
  }

  onTabChange(index: number) {
    this.router.navigate([this.tabRoutes[index]]);
  }

  tabKeyFromRoute(): TabKey {
    const url = this.currentUrl();
    if (url.startsWith('/pension-basics')) return 'pension-basics';
    if (url.startsWith('/advanced-topics')) return 'advanced-topics';
    if (url.startsWith('/calculators')) return 'calculators';
    return 'pension-basics'; // default
  }
}
