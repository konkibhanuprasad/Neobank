import {
  Component, OnInit, OnDestroy, signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { TransactionService } from '../../../core/services/transation.service';

@Component({
  selector:    'app-admin-transaction',
  standalone:  true,
  imports:     [CommonModule, FormsModule],
  templateUrl: './admin-transactions.component.html',
  styleUrl:    './admin-transactions.component.css',
})
export class AdminTransactionComponent implements OnInit, OnDestroy {

  transactions  = signal<any[]>([]);
  loading       = signal(false);
  error         = signal('');
  searchQuery   = '';
  page          = signal(0);
  totalPages    = signal(0);
  totalElements = signal(0);
  pageSize      = 15;

  private searchSubject = new Subject<string>();
  private destroy$      = new Subject<void>();

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.loadTransactions();

    this.searchSubject.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.page.set(0);
      this.loadTransactions();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearchChange(value: string): void {
    this.searchQuery = value;
    this.searchSubject.next(value);
  }

  loadTransactions(): void {
    this.loading.set(true);
    this.transactionService.getAllAdminTransactions(
      this.page(),
      this.pageSize,
      this.searchQuery.trim() || undefined
    ).subscribe({
      next: (res: any) => {
        this.loading.set(false);
        if (res.success && res.data) {
          this.transactions.set(res.data.content);
          this.totalPages.set((res.data?.page?.totalPages ?? res.data?.totalPages ?? 0));
          this.totalElements.set((res.data?.page?.totalElements ?? res.data?.totalElements ?? 0));
        }
      },
      error: () => this.loading.set(false),
    });
  }

  get showingCount(): number {
    return this.transactions().length;
  }

  goToPage(p: number): void {
    if (p < 0 || p >= this.totalPages()) return;
    this.page.set(p);
    this.loadTransactions();
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages() }, (_, i) => i);
  }

  txnIcon(type: string): string {
    const m: Record<string, string> = {
      DEPOSIT: '⬇️', WITHDRAWAL: '⬆️', TRANSFER: '🔄',
      UPI: '📱', NEFT: '🏦', RTGS: '🏦',
    };
    return m[type] ?? '💸';
  }

  getStatusClass(s: string): string {
    const m: Record<string, string> = {
      SUCCESS: 'st-ok', PENDING: 'st-pend', FAILED: 'st-fail', REVERSED: 'st-rev',
    };
    return m[s] ?? 'st-pend';
  }

  formatAmount(v: string): string {
    return '₹' + parseFloat(v || '0').toLocaleString('en-IN', { minimumFractionDigits: 2 });
  }
}