import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { finalize } from 'rxjs';
import { BaseChartDirective } from 'ng2-charts';
import { FinancialInsights, TrendEntry } from '../../../../core/model/all';
import { ChartConfiguration } from 'chart.js';
import { InsightsService } from '../../../../core/services/Insight.service';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-customer-insights',
  imports: [
    CommonModule,
    BaseChartDirective
  ],
  templateUrl: './customer-insights.html',
  styleUrl: './customer-insights.css',
})
export class CustomerInsights implements OnInit {

  ngOnChanges(): void {
    this.applyChartTheme();
  }
  @Input() isDarkMode = false;

  loading = true;
  insights?: FinancialInsights;
  errorMessage = '';

  chartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        label: 'Income',
        data: [],
        borderColor: '#00c896',
        backgroundColor: 'rgba(0, 200, 150, 0.12)',
        pointBackgroundColor: '#00c896',
        pointBorderColor: '#00c896',
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 3,
        tension: 0.45,
        fill: false
      },
      {
        label: 'Expense',
        data: [],
        borderColor: '#ff3b3b',
        backgroundColor: 'rgba(255, 59, 59, 0.12)',
        pointBackgroundColor: '#ff3b3b',
        pointBorderColor: '#ff3b3b',
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        tension: 0.35,
        fill: false
      }
    ]
  };

  chartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#dbeafe',
          usePointStyle: true,
          pointStyle: 'circle',
          boxWidth: 8,
          boxHeight: 8
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(148, 163, 184, 0.18)'
        },
        ticks: {
          color: '#cbd5e1',
          font: {
            size: 11,
            weight: 'bold'
          }
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(148, 163, 184, 0.18)'
        },
        ticks: {
          color: '#cbd5e1',
          font: {
            size: 11,
            weight: 'bold'
          }
        }
      }
    }
  };

  constructor(
    private insightsService: InsightsService,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadInsights();
    this.applyChartTheme();
  }

  loadInsights(): void {
    const userId = this.authService.getLoggedInUserId();

    if (!userId) {
      this.errorMessage = 'Invalid user. Please login again.';
      this.loading = false;
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.insightsService.getInsights(userId)
      .pipe(
        finalize(() => {
          this.loading = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe({
        next: (data: FinancialInsights) => {
          // ✅ FIX: Mock the total income to 45000 on the frontend only, as requested
          data.totalIncome = 45000;
          data.savings = data.totalIncome - data.totalExpense;

          this.insights = data;

          // ✅ FIX: Force 12-month display (Jan-Dec) for the current year
          const currentYear = new Date().getFullYear();
          const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

          const fullYearLabels: string[] = [];
          const incomeData: number[] = [];
          const expenseData: number[] = [];
          // Fake data curve for presentation (ups and downs / waves)
          const mockIncome = [12000, 18000, 14000, 22000, 19000, 28000, 24000, 32000, 29000, 38000, 34000, 45000];
          const mockExpense = [8000, 12000, 9000, 15000, 11000, 18000, 15000, 21000, 19000, 26000, 24000, 32000];

          for (let monthIndex = 1; monthIndex <= 12; monthIndex++) {
            fullYearLabels.push(`${monthNames[monthIndex - 1]} ${currentYear}`);

            // Always use the wave data for income so it shows a beautiful visible wave as requested!
            incomeData.push(mockIncome[monthIndex - 1]);

            // Find if we have backend data for this specific month and year
            const existingEntry = (data.trendSummary || []).find((item: any) =>
              item.year === currentYear && item.month === monthIndex
            );

            // Use DB data for expense if it exists, otherwise fill with the mock expense wave
            expenseData.push((existingEntry && existingEntry.expense > 0) ? existingEntry.expense : mockExpense[monthIndex - 1]);
          }

          this.chartData = {
            labels: fullYearLabels,
            datasets: [
              {
                label: 'Income',
                data: incomeData,
                borderColor: '#00c896',
                backgroundColor: 'rgba(0, 200, 150, 0.25)', // Increased opacity for a nicer wave fill
                pointBackgroundColor: '#00c896',
                pointBorderColor: '#00c896',
                pointRadius: 4,
                pointHoverRadius: 6,
                borderWidth: 3,
                tension: 0.5, // High tension for smooth waves
                fill: true    // ✅ FIX: Fill the area under the curve to emphasize the wave!
              },
              {
                label: 'Expense',
                data: expenseData,
                borderColor: '#ff3b3b',
                backgroundColor: 'rgba(255, 59, 59, 0.12)',
                pointBackgroundColor: '#ff3b3b',
                pointBorderColor: '#ff3b3b',
                pointRadius: 4,
                pointHoverRadius: 6,
                borderWidth: 2,
                tension: 0.35,
                fill: false
              }
            ]
          };

          // ✅ FIX: Mock data for remaining charts directly on frontend
          const mockMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

          this.spendingChartData = {
            labels: ['Food & Dining', 'Transportation', 'Housing & Utilities', 'Shopping & Entertainment'],
            datasets: [
              {
                data: [15000, 4500, 12000, 8500],
                backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
                borderColor: '#ffffff',
                borderWidth: 2
              }
            ]
          };

          this.budgetChartData = {
            labels: ['Food', 'Transport', 'Utilities', 'Shopping'],
            datasets: [
              {
                label: 'Budget',
                data: [12000, 5000, 12000, 6000],
                backgroundColor: '#3b82f6'
              },
              {
                label: 'Actual',
                data: [15000, 4500, 12000, 8500],
                backgroundColor: '#f59e0b'
              }
            ]
          };

          this.netWorthChartData = {
            labels: mockMonths,
            datasets: [
              {
                label: 'Net Worth',
                data: [120000, 125000, 123000, 131000, 138000, 145000, 152000, 158000, 165000, 172000, 180000, 195000],
                borderColor: '#8b5cf6',
                backgroundColor: 'rgba(139, 92, 246, 0.15)',
                pointBackgroundColor: '#8b5cf6',
                pointBorderColor: '#8b5cf6',
                borderWidth: 3,
                tension: 0.4,
                fill: true
              }
            ]
          };

          this.rewardChartData = {
            labels: mockMonths,
            datasets: [
              {
                label: 'Reward Points',
                data: [250, 500, 850, 1200, 1650, 2100, 2600, 3100, 3600, 4200, 4800, 5500],
                backgroundColor: '#f59e0b'
              }
            ]
          };

          this.loanPayoffChartData = {
            labels: mockMonths,
            datasets: [
              {
                label: 'Remaining Principal',
                data: [85000, 82000, 79000, 75500, 72000, 68000, 64000, 59500, 55000, 50000, 45000, 39000],
                borderColor: '#ef4444',
                backgroundColor: 'rgba(239, 68, 68, 0.15)',
                pointBackgroundColor: '#ef4444',
                pointBorderColor: '#ef4444',
                borderWidth: 3,
                tension: 0.4,
                fill: true
              }
            ]
          };

          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Failed to load insights', error);
          this.errorMessage = error.error?.message || 'Failed to load insights.';
        }
      });
  }

  spendingChartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
        borderColor: '#ffffff',
        borderWidth: 2
      }
    ]
  };

  spendingChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#334155',
          usePointStyle: true
        }
      }
    },
    cutout: '55%'
  };

  budgetChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      {
        label: 'Budget',
        data: [],
        backgroundColor: '#3b82f6'
      },
      {
        label: 'Actual',
        data: [],
        backgroundColor: '#f59e0b'
      }
    ]
  };

  budgetChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#334155',
          usePointStyle: true
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#475569',
          font: {
            size: 11,
            weight: 'bold'
          }
        },
        grid: {
          color: 'rgba(148, 163, 184, 0.25)'
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#475569',
          font: {
            size: 11,
            weight: 'bold'
          }
        },
        grid: {
          color: 'rgba(148, 163, 184, 0.25)'
        }
      }
    }
  };

  netWorthChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        label: 'Net Worth',
        data: [],
        borderColor: '#8b5cf6',
        backgroundColor: 'rgba(139, 92, 246, 0.15)',
        pointBackgroundColor: '#8b5cf6',
        pointBorderColor: '#8b5cf6',
        borderWidth: 3,
        tension: 0.4,
        fill: false
      }
    ]
  };

  netWorthChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#334155',
          usePointStyle: true
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#475569',
          font: {
            size: 11,
            weight: 'bold'
          }
        },
        grid: {
          color: 'rgba(148, 163, 184, 0.25)'
        }
      },
      y: {
        ticks: {
          color: '#475569',
          font: {
            size: 11,
            weight: 'bold'
          }
        },
        grid: {
          color: 'rgba(148, 163, 184, 0.25)'
        }
      }
    }
  };

  rewardChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      {
        label: 'Reward Points',
        data: [],
        backgroundColor: '#f59e0b'
      }
    ]
  };

  rewardChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#334155',
          usePointStyle: true
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#475569',
          font: {
            size: 11,
            weight: 'bold'
          }
        },
        grid: {
          color: 'rgba(148, 163, 184, 0.25)'
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#475569',
          font: {
            size: 11,
            weight: 'bold'
          }
        },
        grid: {
          color: 'rgba(148, 163, 184, 0.25)'
        }
      }
    }
  };

  loanPayoffChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        label: 'Remaining Principal',
        data: [],
        borderColor: '#ef4444',
        backgroundColor: 'rgba(239, 68, 68, 0.15)',
        pointBackgroundColor: '#ef4444',
        pointBorderColor: '#ef4444',
        borderWidth: 3,
        tension: 0.4,
        fill: false
      }
    ]
  };

  loanPayoffChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#334155',
          usePointStyle: true
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#475569',
          font: {
            size: 11,
            weight: 'bold'
          }
        },
        grid: {
          color: 'rgba(148, 163, 184, 0.25)'
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#475569',
          font: {
            size: 11,
            weight: 'bold'
          }
        },
        grid: {
          color: 'rgba(148, 163, 184, 0.25)'
        }
      }
    }
  };

  private applyChartTheme(): void {
    const textColor = this.isDarkMode ? '#dbeafe' : '#475569';
    const gridColor = this.isDarkMode
      ? 'rgba(148, 163, 184, 0.18)'
      : 'rgba(148, 163, 184, 0.25)';

    this.chartOptions = {
      ...this.chartOptions,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: textColor,
            usePointStyle: true,
            pointStyle: 'circle',
            boxWidth: 8,
            boxHeight: 8
          }
        }
      },
      scales: {
        x: {
          grid: {
            color: gridColor
          },
          ticks: {
            color: textColor,
            font: {
              size: 11,
              weight: 'bold'
            }
          }
        },
        y: {
          beginAtZero: true,
          grid: {
            color: gridColor
          },
          ticks: {
            color: textColor,
            font: {
              size: 11,
              weight: 'bold'
            }
          }
        }
      }
    };

    this.cdr.detectChanges();
  }

}