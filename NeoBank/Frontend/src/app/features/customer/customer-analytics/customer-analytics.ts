import { Component, OnInit } from '@angular/core';
import { SpendingAnalyticsResponse, WealthAnalyticsResponse } from '../../../core/model/all';
import { UserAnalyticsApiService } from '../../../core/services/user-analytics-api.service';
import { TokenService } from '../../../core/services/token.service';
import { ChartConfiguration } from 'chart.js';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-analytics',
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ],
  templateUrl: './customer-analytics.html',
  styleUrl: './customer-analytics.css',
})
export class CustomerAnalytics implements OnInit {

  loading = false;
  months = 6;

  netWorth = 0;
  totalBalance = 0;
  outstandingPrincipal = 0;

  spendingDoughnutData: ChartConfiguration<'doughnut'>['data'] = {
    labels: [],
    datasets: [
      {
        data: []
      }
    ]
  };

  budgetBarData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Spending'
      }
    ]
  };

  netWorthAreaData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Net Worth',
        fill: true,
        tension: 0.4
      },
      {
        data: [],
        label: 'Total Balance',
        tension: 0.4
      },
      {
        data: [],
        label: 'Outstanding Principal',
        tension: 0.4
      }
    ]
  };

  rewardLineData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Reward Points',
        tension: 0.4
      }
    ]
  };

  chartOptions: ChartConfiguration<any>['options'] = {
    responsive: true,
    maintainAspectRatio: false
  };

  loanForecasts: any[] = [];

  constructor(
    private userAnalyticsApi: UserAnalyticsApiService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.loadAnalytics();
  }

  onMonthsChange(): void {
    this.loadAnalytics();
  }

  loadAnalytics(): void {
    const userId = this.tokenService.getUserId();
    if (userId === null || userId === undefined || isNaN(userId)) {
      console.error("User ID not found. please login again.");
      this.loading = false;
      return;
    }
    this.loading = true;

    this.userAnalyticsApi.getSpendingAnalytics(userId, this.months)
      .subscribe({
        next: (response) => {
          this.bindSpendingAnalytics(response);
          this.loadWealthAnalytics(userId);
        },
        error: () => {
          this.loading = false;
        }
      });
  }

  private loadWealthAnalytics(userId: number): void {
    this.userAnalyticsApi.getWealthAnalytics(userId)
      .subscribe({
        next: (response) => {
          this.bindWealthAnalytics(response);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
  }

  private bindSpendingAnalytics(response: SpendingAnalyticsResponse): void {
    const categoryMap = new Map<string, number>();

    response.categorySpending.forEach(item => {
      categoryMap.set(
        item.category,
        (categoryMap.get(item.category) || 0) + Number(item.amount)
      );
    });

    this.spendingDoughnutData = {
      labels: Array.from(categoryMap.keys()),
      datasets: [
        {
          data: Array.from(categoryMap.values())
        }
      ]
    };

    this.budgetBarData = {
      labels: response.categorySpending.map(item => `${item.month} - ${item.category}`),
      datasets: [
        {
          data: response.categorySpending.map(item => Number(item.amount)),
          label: 'Spending'
        }
      ]
    };
  }

  private bindWealthAnalytics(response: WealthAnalyticsResponse): void {
    const timeline = response.netWorthTimeline || [];

    if (timeline.length > 0) {
      const latest = timeline[timeline.length - 1];

      this.netWorth = latest.netWorth || 0;
      this.totalBalance = latest.totalBalance || 0;
      this.outstandingPrincipal = latest.outstandingPrincipal || 0;
    }

    this.netWorthAreaData = {
      labels: timeline.map(item => item.month),
      datasets: [
        {
          data: timeline.map(item => item.netWorth),
          label: 'Net Worth',
          fill: true,
          tension: 0.4
        },
        {
          data: timeline.map(item => item.totalBalance),
          label: 'Total Balance',
          tension: 0.4
        },
        {
          data: timeline.map(item => item.outstandingPrincipal),
          label: 'Outstanding Principal',
          tension: 0.4
        }
      ]
    };

    this.rewardLineData = {
      labels: response.rewardAccrualHistory.map(item => item.month),
      datasets: [
        {
          data: response.rewardAccrualHistory.map(item => item.points),
          label: 'Reward Points',
          tension: 0.4
        }
      ]
    };

    this.loanForecasts = response.loanPayoffForecast || [];
  }

}
