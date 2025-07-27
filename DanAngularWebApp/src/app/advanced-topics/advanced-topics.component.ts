import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-advanced-topics',
  imports: [MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './advanced-topics.component.html',
  styleUrl: './advanced-topics.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvancedTopicsComponent {
  protected readonly selectedTopic = signal<string | null>(null);

  protected readonly topics = signal([
    {
      id: 'investment-strategies',
      title: 'Investment Strategies',
      description:
        'Advanced portfolio management and asset allocation strategies for pension funds.',
      icon: 'trending_up',
    },
    {
      id: 'regulatory-framework',
      title: 'Regulatory Framework',
      description:
        'Understanding ERISA, PBGC, and other regulatory requirements.',
      icon: 'gavel',
    },
    {
      id: 'actuarial-science',
      title: 'Actuarial Science',
      description:
        'Mathematical foundations of pension calculations and risk assessment.',
      icon: 'calculate',
    },
  ]);

  protected selectTopic(topicId: string): void {
    this.selectedTopic.set(topicId);
  }

  protected onTopicKeyup(event: KeyboardEvent, topicId: string): void {
    // Handle Enter and Space key for accessibility
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.selectTopic(topicId);
    }
  }
}
