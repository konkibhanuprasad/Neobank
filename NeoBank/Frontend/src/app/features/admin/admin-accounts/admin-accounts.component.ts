import {
  Component, Input, OnInit, OnChanges, OnDestroy,
  SimpleChanges, signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { AccountService } from '../../../core/services/account.service';
import { TransactionService } from '../../../core/services/transation.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector:    'app-admin-account',
  standalone:  true,
  imports:     [CommonModule, FormsModule],
  templateUrl: './admin-accounts.component.html',
  styleUrl:    './admin-accounts.component.css',
})
export class AdminAccountComponent implements OnInit, OnChanges, OnDestroy {

  @Input() activeSubSection = 'accounts-all';

  accounts      = signal<any[]>([]);
  loading       = signal(false);
  error         = signal('');
  success       = signal('');
  searchQuery   = '';
  page          = signal(0);
  totalPages    = signal(0);
  totalElements = signal(0);
  pageSize      = 10;

  // Deposit / Withdraw / Status Modal
  selectedAccount = signal<any>(null);
  modalMode       = signal<'none' | 'deposit' | 'withdraw' | 'status'>('none');
  actionLoading   = signal(false);
  txnAmount       = '';
  txnDescription  = '';
  newStatus       = '';
  statusReason    = '';

  private searchSubject = new Subject<string>();
  private destroy$      = new Subject<void>();

  constructor(
    private accountService: AccountService,
    private transactionService: TransactionService,
    private popup: NotificationService,
  ) {}

  ngOnInit(): void {
    this.loadAccounts();

    this.searchSubject.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.page.set(0);
      this.loadAccounts();
    });
  }

  ngOnChanges(c: SimpleChanges): void {
    if (c['activeSubSection'] && !c['activeSubSection'].firstChange) {
      this.page.set(0);
      this.searchQuery = '';
      this.loadAccounts();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearchChange(value: string): void {
    this.searchQuery = value;
    this.searchSubject.next(value);
  }

  get statusFilter(): string | undefined {
    const m: Record<string, string> = {
      'accounts-active': 'ACTIVE',
      'accounts-frozen': 'FROZEN',
    };
    return m[this.activeSubSection];
  }

  get sectionTitle(): string {
    const m: Record<string, string> = {
      'accounts-all':    'All Accounts',
      'accounts-active': 'Active Accounts',
      'accounts-frozen': 'Frozen Accounts',
    };
    return m[this.activeSubSection] ?? 'Accounts';
  }

  loadAccounts(): void {
    this.loading.set(true);
    this.error.set('');
    this.accountService.getAllAccounts(
      this.statusFilter,
      this.page(),
      this.pageSize,
      this.searchQuery.trim() || undefined
    ).subscribe({
      next: (res: any) => {
        this.loading.set(false);
        if (res.success && res.data) {
          this.accounts.set(res.data.content);
          this.totalPages.set((res.data?.page?.totalPages ?? res.data?.totalPages ?? 0));
          this.totalElements.set((res.data?.page?.totalElements ?? res.data?.totalElements ?? 0));
        }
      },
      error: (err: any) => {
        this.loading.set(false);
        this.popup.show(err.error?.message || 'Failed to load accounts.', 'danger');
      },
    });
  }

  goToPage(p: number): void {
    if (p < 0 || p >= this.totalPages()) return;
    this.page.set(p);
    this.loadAccounts();
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages() }, (_, i) => i);
  }

  get showingCount(): number {
  return this.accounts().length;
}

  openDeposit(acc: any):  void { this.selectedAccount.set(acc); this.txnAmount = ''; this.txnDescription = ''; this.modalMode.set('deposit'); }
  openWithdraw(acc: any): void { this.selectedAccount.set(acc); this.txnAmount = ''; this.txnDescription = ''; this.modalMode.set('withdraw'); }
  openStatus(acc: any):   void { this.selectedAccount.set(acc); this.newStatus = acc.status; this.statusReason = ''; this.modalMode.set('status'); }
  closeModal():           void { this.modalMode.set('none'); this.selectedAccount.set(null); this.error.set(''); }

  submitDeposit(): void {
    if (!this.txnAmount || parseFloat(this.txnAmount) <= 0) {
      this.error.set('Enter valid amount.');
      this.popup.show('Please enter a valid deposit amount.', 'warning');
      return;
    }
    this.actionLoading.set(true);
    this.transactionService.adminDeposit({
      accountNumber: this.selectedAccount().accountNumber,
      amount:        this.txnAmount,
      description:   this.txnDescription || 'Admin Deposit',
    }).subscribe({
      next: (res: any) => {
        this.actionLoading.set(false);
        if (res.success) {
          const msg = `Deposited ₹${this.txnAmount} to ${this.selectedAccount().accountNumber}`;
          this.success.set('✅ ' + msg);
          this.popup.show(msg, 'success');
          this.closeModal(); this.loadAccounts();
          setTimeout(() => this.success.set(''), 4000);
        } else {
          this.error.set(res.message);
          this.popup.show(res.message, 'danger');
        }
      },
      error: (err: any) => {
        this.actionLoading.set(false);
        const msg = err.error?.message || 'Deposit failed.';
        this.error.set(msg);
        this.popup.show(msg, 'danger');
      },
    });
  }

  submitWithdraw(): void {
    if (!this.txnAmount || parseFloat(this.txnAmount) <= 0) {
      this.error.set('Enter valid amount.');
      this.popup.show('Please enter a valid withdrawal amount.', 'warning');
      return;
    }
    this.actionLoading.set(true);
    this.transactionService.adminWithdraw({
      accountNumber: this.selectedAccount().accountNumber,
      amount:        this.txnAmount,
      description:   this.txnDescription || 'Admin Withdrawal',
    }).subscribe({
      next: (res: any) => {
        this.actionLoading.set(false);
        if (res.success) {
          const msg = `Withdrew ₹${this.txnAmount} from ${this.selectedAccount().accountNumber}`;
          this.success.set('✅ ' + msg);
          this.popup.show(msg, 'success');
          this.closeModal(); this.loadAccounts();
          setTimeout(() => this.success.set(''), 4000);
        } else {
          this.error.set(res.message);
          this.popup.show(res.message, 'danger');
        }
      },
      error: (err: any) => {
        this.actionLoading.set(false);
        const msg = err.error?.message || 'Withdrawal failed.';
        this.error.set(msg);
        this.popup.show(msg, 'danger');
      },
    });
  }

  submitStatusUpdate(): void {
    this.actionLoading.set(true);
    this.accountService.updateAccountStatus({
      accountNumber: this.selectedAccount().accountNumber,
      status:        this.newStatus,
      reason:        this.statusReason,
    }).subscribe({
      next: (res: any) => {
        this.actionLoading.set(false);
        if (res.success) {
          const msg = `Account ${this.selectedAccount().accountNumber} → ${this.newStatus}`;
          this.success.set(msg);
          this.popup.show(msg, 'success');
          this.closeModal(); this.loadAccounts();
          setTimeout(() => this.success.set(''), 4000);
        } else {
          this.error.set(res.message);
          this.popup.show(res.message, 'danger');
        }
      },
      error: (err: any) => {
        this.actionLoading.set(false);
        const msg = err.error?.message || 'Status update failed.';
        this.error.set(msg);
        this.popup.show(msg, 'danger');
      },
    });
  }

  getStatusClass(s: string): string {
    const m: Record<string, string> = {
      ACTIVE: 'st-active', FROZEN: 'st-frozen',
      INACTIVE: 'st-inactive', CLOSED: 'st-closed', DORMANT: 'st-dormant',
    };
    return m[s] ?? 'st-inactive';
  }

  formatAmount(v: string): string {
    return '₹' + parseFloat(v || '0').toLocaleString('en-IN', { minimumFractionDigits: 2 });
  }
}