import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-what-is-a-db-pension',
  imports: [MatButtonModule, MatIconModule, MatExpansionModule, RouterLink],
  templateUrl: './what-is-a-db-pension.component.html',
  styleUrl: './what-is-a-db-pension.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatIsADbPensionComponent {}
