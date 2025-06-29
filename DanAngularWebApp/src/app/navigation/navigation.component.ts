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
import { RouterLink, RouterOutlet } from '@angular/router';

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

  readonly isHandset = signal(false);
  selectedTab = signal(0); // 0 = Pension Basics, 1 = Advanced Topics, 2 = Calculators

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
    this.selectedTab.set(index);
  }
}
