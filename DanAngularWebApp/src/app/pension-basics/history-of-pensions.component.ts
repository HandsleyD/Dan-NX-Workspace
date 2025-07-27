import {
  ChangeDetectionStrategy,
  Component,
  signal,
  computed,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables);

interface HistoricalDataPoint {
  year: number;
  members: number;
  change: 'up' | 'down' | 'stable';
  trend: 'growth' | 'decline' | 'stable';
  context: string;
}

interface KeyMilestone {
  year: number;
  title: string;
  description: string;
  members: number;
  trend: 'up' | 'down' | 'stable';
  type: 'growth' | 'transition' | 'decline';
}

@Component({
  selector: 'app-history-of-pensions',
  imports: [MatButtonModule, MatIconModule, RouterLink, BaseChartDirective],
  templateUrl: './history-of-pensions.component.html',
  styleUrl: './history-of-pensions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryOfPensionsComponent {
  // Chart Configuration
  protected readonly chartType = 'line' as const;

  protected readonly chartData = computed(() => {
    const historicalData = this.historicalData();

    return {
      labels: historicalData.map((d) => d.year.toString()),
      datasets: [
        {
          label: 'DB Pension Members (millions)',
          data: historicalData.map((d) => d.members),
          borderColor: '#667eea',
          backgroundColor: 'rgba(102, 126, 234, 0.1)',
          borderWidth: 3,
          pointRadius: 6,
          pointHoverRadius: 8,
          pointBackgroundColor: (context: { dataIndex: number }) => {
            const year = parseInt(
              historicalData[context.dataIndex]?.year.toString() || '0'
            );
            return this.getEraColor(year);
          },
          pointBorderColor: '#667eea',
          pointBorderWidth: 2,
          tension: 0.1,
          fill: true,
        },
      ],
    };
  });

  protected readonly chartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'UK DB Pension Scheme Active Membership (1936–2025)',
        font: {
          size: 16,
          weight: 'bold',
        },
        color: '#333',
      },
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'white',
        titleColor: '#333',
        bodyColor: '#666',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          title: (context) => {
            const dataIndex = context[0].dataIndex;
            const dataPoint = this.historicalData()[dataIndex];
            return `${dataPoint.year}: ${dataPoint.members}M members`;
          },
          label: (context) => {
            const dataIndex = context.dataIndex;
            const dataPoint = this.historicalData()[dataIndex];
            return this.shortenContext(dataPoint.context);
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Year',
          color: '#666',
          font: {
            size: 14,
          },
        },
        grid: {
          color: '#f0f0f0',
        },
        ticks: {
          color: '#666',
          font: {
            size: 12,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Total Active Members (millions)',
          color: '#666',
          font: {
            size: 14,
          },
        },
        grid: {
          color: '#f0f0f0',
        },
        ticks: {
          color: '#666',
          font: {
            size: 12,
          },
          callback: function (value) {
            return value + 'M';
          },
        },
        beginAtZero: true,
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
  };

  private createTooltip(dataPoint: HistoricalDataPoint): string {
    const eraColor = this.getEraColor(dataPoint.year);
    return `
      <div style="
        background: white; 
        padding: 12px 16px; 
        border-radius: 8px; 
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        border-left: 4px solid ${eraColor};
        max-width: 280px;
        font-family: 'Roboto', sans-serif;
      ">
        <div style="
          font-weight: 600; 
          color: #333; 
          margin-bottom: 8px;
          font-size: 14px;
        ">
          ${dataPoint.year}: ${dataPoint.members}M members
        </div>
        <div style="
          color: #666; 
          line-height: 1.4;
          font-size: 13px;
        ">
          ${this.shortenContext(dataPoint.context)}
        </div>
      </div>
    `;
  }

  private getEraColor(year: number): string {
    if (year <= 1967) return '#10b981'; // Growth era - green
    if (year <= 2000) return '#f59e0b'; // Transition era - amber
    return '#ef4444'; // Decline era - red
  }

  private shortenContext(context: string): string {
    // Ensure context is roughly one sentence
    if (context.length <= 60) return context;

    const sentences = context.split(/[.!?]+/);
    if (sentences.length > 1 && sentences[0].length <= 80) {
      return sentences[0].trim() + '.';
    }

    // If single long sentence, truncate intelligently
    if (context.length > 80) {
      const truncated = context.substring(0, 75);
      const lastSpace = truncated.lastIndexOf(' ');
      return truncated.substring(0, lastSpace) + '...';
    }

    return context;
  }
  protected readonly keyMilestones = signal<KeyMilestone[]>([
    {
      year: 1936,
      title: 'Early Foundations',
      description: 'DB pensions limited to public sector and large employers',
      members: 2.6,
      trend: 'stable',
      type: 'growth',
    },
    {
      year: 1967,
      title: 'Peak Popularity',
      description: 'High point of DB popularity with widespread adoption',
      members: 12.2,
      trend: 'up',
      type: 'growth',
    },
    {
      year: 1975,
      title: 'SERPS Introduction',
      description: 'State Earnings-Related Pension Scheme bolsters DB coverage',
      members: 11.5,
      trend: 'up',
      type: 'transition',
    },
    {
      year: 2005,
      title: 'Rapid Decline Begins',
      description:
        'FRS17 accounting changes and market downturns accelerate closures',
      members: 4.0,
      trend: 'down',
      type: 'decline',
    },
    {
      year: 2012,
      title: 'Auto-Enrolment Era',
      description: 'DC schemes become the new standard for workplace pensions',
      members: 1.8,
      trend: 'down',
      type: 'decline',
    },
    {
      year: 2025,
      title: 'Legacy Only',
      description: 'DB accrual almost extinct, existing schemes in run-off',
      members: 0.64,
      trend: 'down',
      type: 'decline',
    },
  ]);

  protected readonly historicalData = signal<HistoricalDataPoint[]>([
    {
      year: 1936,
      members: 2.6,
      change: 'stable',
      trend: 'stable',
      context: 'DB pensions limited to public sector and large employers',
    },
    {
      year: 1940,
      members: 3.2,
      change: 'up',
      trend: 'growth',
      context: 'Wartime workforce expansion and early post-war reforms',
    },
    {
      year: 1945,
      members: 4.5,
      change: 'up',
      trend: 'growth',
      context: 'Post-war optimism; rise in occupational benefits',
    },
    {
      year: 1950,
      members: 5.5,
      change: 'up',
      trend: 'growth',
      context: 'Economic recovery supports pension growth',
    },
    {
      year: 1954,
      members: 6.2,
      change: 'up',
      trend: 'growth',
      context: 'Early boom in DB schemes',
    },
    {
      year: 1955,
      members: 7.0,
      change: 'up',
      trend: 'growth',
      context: 'Manufacturing-led expansion',
    },
    {
      year: 1960,
      members: 9.5,
      change: 'up',
      trend: 'growth',
      context: 'Peak industrial DB coverage',
    },
    {
      year: 1963,
      members: 11.1,
      change: 'up',
      trend: 'growth',
      context: 'Rapid growth across sectors',
    },
    {
      year: 1967,
      members: 12.2,
      change: 'up',
      trend: 'growth',
      context: 'High point of DB popularity',
    },
    {
      year: 1971,
      members: 11.1,
      change: 'down',
      trend: 'decline',
      context: 'Economic uncertainty and inflation',
    },
    {
      year: 1975,
      members: 11.5,
      change: 'up',
      trend: 'growth',
      context: 'Introduction of SERPS bolsters DB coverage',
    },
    {
      year: 1980,
      members: 11.5,
      change: 'stable',
      trend: 'stable',
      context: 'DB still dominant but costs rising',
    },
    {
      year: 1985,
      members: 11.0,
      change: 'down',
      trend: 'decline',
      context: 'Early concerns about sustainability',
    },
    {
      year: 1990,
      members: 10.5,
      change: 'down',
      trend: 'decline',
      context: 'Growth in DC alternatives; regulation pressures mount',
    },
    {
      year: 1995,
      members: 9.8,
      change: 'down',
      trend: 'decline',
      context: 'Pensions Act improves security but raises costs',
    },
    {
      year: 2000,
      members: 10.1,
      change: 'up',
      trend: 'growth',
      context: 'Slight rise due to tech sector and continued legacy DB schemes',
    },
    {
      year: 2005,
      members: 4.0,
      change: 'down',
      trend: 'decline',
      context:
        'FRS17 accounting changes, market downturns, and closures accelerate',
    },
    {
      year: 2006,
      members: 3.6,
      change: 'down',
      trend: 'decline',
      context: 'Beginning of auto-enrolment planning',
    },
    {
      year: 2010,
      members: 2.4,
      change: 'down',
      trend: 'decline',
      context: 'Continued scheme closures and accrual freezes',
    },
    {
      year: 2015,
      members: 1.6,
      change: 'down',
      trend: 'decline',
      context: 'DC auto-enrolment becomes standard; new DB entrants rare',
    },
    {
      year: 2020,
      members: 0.9,
      change: 'down',
      trend: 'decline',
      context: 'Legacy-only DB participation',
    },
    {
      year: 2024,
      members: 0.661,
      change: 'down',
      trend: 'decline',
      context: 'Schemes mature; DB accrual almost extinct',
    },
    {
      year: 2025,
      members: 0.64,
      change: 'down',
      trend: 'decline',
      context: 'Projected minimal change; stable decline',
    },
  ]);

  protected getRowClass(trend: string): string {
    return `trend-${trend}`;
  }

  protected scrollToChart(): void {
    const chartElement = document.getElementById('interactive-chart');
    if (chartElement) {
      chartElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
