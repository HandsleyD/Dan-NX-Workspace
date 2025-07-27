import {
  ChangeDetectionStrategy,
  Component,
  signal,
  inject,
  OnInit,
} from '@angular/core';
import {
  RouterOutlet,
  Router,
  NavigationEnd,
  ActivationEnd,
} from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { filter } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  imports: [RouterOutlet, NavigationComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  protected readonly title = signal('DB pensions for dummies');

  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly viewportScroller = inject(ViewportScroller);

  ngOnInit(): void {
    // Only run scroll behavior in the browser
    if (isPlatformBrowser(this.platformId)) {
      // Listen to multiple router events for more comprehensive coverage
      this.router.events
        .pipe(
          filter(
            (event) =>
              event instanceof NavigationEnd || event instanceof ActivationEnd
          )
        )
        .subscribe((event) => {
          if (event instanceof NavigationEnd) {
            // Check if the URL has a fragment (anchor)
            if (!event.urlAfterRedirects.includes('#')) {
              // Multiple attempts with different timing to ensure scroll works
              this.scrollToTop();

              // Also scroll after a short delay to ensure DOM is ready
              setTimeout(() => this.scrollToTop(), 50);
            }
          }
        });
    }
  }

  private scrollToTop(): void {
    // Use multiple methods to ensure scrolling works
    this.viewportScroller.scrollToPosition([0, 0]);

    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;

      // Also try scrolling any potential scroll containers
      const scrollContainers = document.querySelectorAll(
        '.mat-sidenav-content, .cdk-scrollable'
      );
      scrollContainers.forEach((container) => {
        if (container.scrollTop !== undefined) {
          container.scrollTop = 0;
        }
      });
    }
  }
}
