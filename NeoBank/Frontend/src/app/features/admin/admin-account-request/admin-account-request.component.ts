import {
  Component, OnInit, OnDestroy, signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { AccountService } from '../../../core/services/account.service';
import { NotificationService } from '../../../core/services/notification.service';

type ModalMode = 'none' | 'detail' | 'approve' | 'reject';

@Component({
  selector:    'app-admin-account-request',
  standalone:  true,
  imports:     [CommonModule, FormsModule],
  templateUrl: './admin-account-request.component.html',
  styleUrl:    './admin-account-request.component.css',
})
export class AdminAccountRequestComponent implements OnInit, OnDestroy {

  requests      = signal<any[]>([]);
  loading       = signal(false);
  error         = signal('');
  success       = signal('');
  searchQuery   = '';
  page          = signal(0);
  totalPages    = signal(0);
  totalElements = signal(0);
  pageSize      = 10;
  statusFilter  = 'all';

  modalMode     = signal<ModalMode>('none');
  selected      = signal<any>(null);
  detailLoading = signal(false);
  actionLoading = signal(false);

  branchName      = 'Main Branch';
  branchCode      = '001';
  ifscCode        = 'NEOB0000001';
  rejectionReason = '';

  private searchSubject = new Subject<string>();
  private destroy$      = new Subject<void>();

  constructor(
    private accountService: AccountService,
    private popup: NotificationService,
  ) {}

  ngOnInit(): void {
    this.loadRequests();

    this.searchSubject.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.page.set(0);
      this.loadRequests();
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

  loadRequests(): void {
    this.loading.set(true);
    this.error.set('');
    const status = this.statusFilter === 'all' ? undefined : this.statusFilter.toUpperCase();
    this.accountService.getAllAccountRequests(
      status,
      this.page(),
      this.pageSize,
      this.searchQuery.trim() || undefined   // ← pass search
    ).subscribe({
      next: (res: any) => {
        this.loading.set(false);
        if (res.success && res.data) {
          this.requests.set(res.data.content);
          this.totalPages.set((res.data?.page?.totalPages ?? res.data?.totalPages ?? 0));
          this.totalElements.set((res.data?.page?.totalElements ?? res.data?.totalElements ?? 0));
        }
      },
      error: (err: any) => {
        this.loading.set(false);
        this.popup.show(err.error?.message || 'Failed to load requests.', 'danger');
      },
    });
  }

  onFilterChange(): void { this.page.set(0); this.loadRequests(); }

  // ── removed filteredRequests getter — server handles filtering now ──

  goToPage(p: number): void {
    if (p < 0 || p >= this.totalPages()) return;
    this.page.set(p);
    this.loadRequests();
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages() }, (_, i) => i);
  }

  get showingCount(): number {
  return this.requests().length;
}
  

  viewDetail(req: any): void {
    this.detailLoading.set(true);
    this.modalMode.set('detail');
    this.selected.set(null);

    this.accountService.getAccountRequestDetail(req.requestId).subscribe({
      next: (res: any) => {
        this.detailLoading.set(false);
        if (res.success) {
          this.selected.set(res.data);
        } else {
          this.error.set(res.message);
          this.popup.show(res.message, 'danger');
          this.modalMode.set('none');
        }
      },
      error: (err: any) => {
        this.detailLoading.set(false);
        const msg = err.error?.message || 'Failed to load detail.';
        this.error.set(msg);
        this.popup.show(msg, 'danger');
        this.modalMode.set('none');
      },
    });
  }

  openApprove(): void { this.modalMode.set('approve'); this.error.set(''); }

  confirmApprove(): void {
    this.actionLoading.set(true);
    this.error.set('');

    this.accountService.approveAccountRequest({
      requestId:  this.selected().requestId,
      action:     'APPROVE',
      branchName: this.branchName,
      branchCode: this.branchCode,
      ifscCode:   this.ifscCode,
    }).subscribe({
      next: (res: any) => {
        this.actionLoading.set(false);
        if (res.success) {
          const msg = '✅ Account created: ' + res.data?.createdAccountNumber;
          this.success.set(msg);
          this.popup.show(msg, 'success');
          this.closeModal();
          this.loadRequests();
          setTimeout(() => this.success.set(''), 5000);
        } else {
          this.error.set(res.message);
          this.popup.show(res.message, 'danger');
          this.modalMode.set('detail');
        }
      },
      error: (err: any) => {
        this.actionLoading.set(false);
        const msg = err.error?.message || 'Approval failed.';
        this.error.set(msg);
        this.popup.show(msg, 'danger');
        this.modalMode.set('detail');
      },
    });
  }

  openReject(): void { this.rejectionReason = ''; this.modalMode.set('reject'); this.error.set(''); }

  confirmReject(): void {
    if (!this.rejectionReason.trim()) {
      this.error.set('Rejection reason required.');
      this.popup.show('Please provide a rejection reason.', 'warning');
      return;
    }
    this.actionLoading.set(true);

    this.accountService.rejectAccountRequest({
      requestId:       this.selected().requestId,
      action:          'REJECT',
      rejectionReason: this.rejectionReason.trim(),
    }).subscribe({
      next: (res: any) => {
        this.actionLoading.set(false);
        if (res.success) {
          this.success.set('Request rejected.');
          this.popup.show('Account request rejected successfully.', 'info');
          this.closeModal();
          this.loadRequests();
          setTimeout(() => this.success.set(''), 4000);
        } else {
          this.error.set(res.message);
          this.popup.show(res.message, 'danger');
        }
      },
      error: (err: any) => {
        this.actionLoading.set(false);
        const msg = err.error?.message || 'Rejection failed.';
        this.error.set(msg);
        this.popup.show(msg, 'danger');
      },
    });
  }

  closeModal():   void { this.modalMode.set('none'); this.selected.set(null); this.error.set(''); }
  backToDetail(): void { this.modalMode.set('detail'); this.error.set(''); }

  getStatusClass(s: string): string {
    const m: Record<string, string> = {
      PENDING: 'st-pend', APPROVED: 'st-ok', REJECTED: 'st-err',
    };
    return m[s] ?? 'st-pend';
  }
}