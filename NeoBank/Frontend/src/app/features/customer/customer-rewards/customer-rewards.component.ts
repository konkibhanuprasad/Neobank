// customer-rewards.component.ts

import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RewordBudgetBillServise } from '../../../core/services/reword-budget-billservice';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector:    'app-customer-rewards',
  standalone:  true,
  imports:     [CommonModule],
  templateUrl: './customer-rewards.component.html',
  styleUrl:    './customer-rewards.component.css',
})
export class CustomerRewardsComponent implements OnInit {

  balance        = signal<any>(null);
  history        = signal<any[]>([]);
  balanceLoading = signal(false);
  historyLoading = signal(false);
  error          = signal('');
  page           = signal(0);
  hasMore        = signal(true);
  readonly pageSize = 20;

  // How many points = ₹1 (display info)
  readonly pointsPerRupee = 100;

  constructor(
    private rewordBudgetBillServise: RewordBudgetBillServise,
    private notificationService: NotificationService,
  ) {}

  ngOnInit(): void {
    this.loadBalance();
    this.loadHistory();
  }

  loadBalance(): void {
    this.balanceLoading.set(true);
    this.rewordBudgetBillServise.getMyRewards().subscribe({
      next: (res: any) => {
        this.balanceLoading.set(false);
        if (res.success) this.balance.set(res.data);
      },
      error: (err: any) => {
        this.balanceLoading.set(false);
        const msg = err.error?.message || 'Failed to load reward balance.';
        this.error.set(msg);
        this.notificationService.show(msg, 'danger');
      },
    });
  }

  loadHistory(): void {
    this.historyLoading.set(true);
    this.rewordBudgetBillServise.getRewardHistory(this.page(), this.pageSize).subscribe({
      next: (res: any) => {
        this.historyLoading.set(false);
        if (res.success && res.data) {
          if (this.page() === 0) {
            this.history.set(res.data);
          } else {
            this.history.update(h => [...h, ...res.data]);
          }
          this.hasMore.set(res.data.length === this.pageSize);
        }
      },
      error: (err: any) => {
        this.historyLoading.set(false);
        const msg = err.error?.message || 'Failed to load reward history.';
        this.error.set(msg);
        this.notificationService.show(msg, 'danger');
      },
    });
  }

  loadMore(): void {
    this.page.update(p => p + 1);
    this.loadHistory();
  }

  get cashValue(): string {
    const pts = this.balance()?.pointsBalance || 0;
    return '₹' + (pts / this.pointsPerRupee)
      .toLocaleString('en-IN', { minimumFractionDigits: 2 });
  }

  getActionIcon(type: string): string {
    return type === 'EARNED' ? '⬆️' : '⬇️';
  }

  getActionClass(type: string): string {
    return type === 'EARNED' ? 'hist-earned' : 'hist-spent';
  }
}