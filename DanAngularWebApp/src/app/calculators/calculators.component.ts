import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-calculators',
  imports: [],
  templateUrl: './calculators.component.html',
  styleUrl: './calculators.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorsComponent {}
