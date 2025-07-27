import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { filter } from 'rxjs/operators';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterOutlet } from '@angular/router';

type TabKey = 'pension-basics' | 'advanced-topics' | 'calculators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
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

  protected readonly isHandset = signal(false);
  protected readonly currentUrl = signal(this.router.url);

  // Tab routes for the main navigation
  private readonly tabRoutes = [
    '/pension-basics',
    '/advanced-topics',
    '/calculators',
  ] as const;

  // Computed property to determine the current tab key from route
  protected readonly currentTabKey = computed((): TabKey => {
    const url = this.currentUrl();
    if (url.startsWith('/pension-basics')) return 'pension-basics';
    if (url.startsWith('/advanced-topics')) return 'advanced-topics';
    if (url.startsWith('/calculators')) return 'calculators';
    return 'pension-basics'; // default fallback
  });

  // Computed property to determine which sidenav to show
  protected readonly sidenavToShow = computed(() => this.currentTabKey());

  // Computed property to determine the selected tab index
  protected readonly selectedTabIndex = computed(() => {
    const tabKey = this.currentTabKey();
    switch (tabKey) {
      case 'pension-basics':
        return 0;
      case 'advanced-topics':
        return 1;
      case 'calculators':
        return 2;
      default:
        return 0;
    }
  });

  constructor() {
    // Handle responsive layout changes
    effect(() => {
      this.breakpointObserver
        .observe(Breakpoints.Handset)
        .subscribe((result) => {
          this.isHandset.set(result.matches);
        });
    });

    // Listen to route changes to update current URL
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event) => {
        this.currentUrl.set(event.url);
      });
  }

  protected onTabChange(index: number): void {
    this.router.navigate([this.tabRoutes[index]]);
  }
}
