import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pension-basics',
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './pensionBasics.component.html',
  styleUrl: './pensionBasics.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PensionBasicsComponent {}
