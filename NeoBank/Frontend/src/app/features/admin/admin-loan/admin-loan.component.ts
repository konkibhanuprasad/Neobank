// admin-loan.component.ts

import { Component, Output, EventEmitter, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoanService } from '../../../core/services/loan.service';
import { NotificationService } from '../../../core/services/notification.service';
import { TreasuryService } from '../../../core/services/treasury.service';

type AdminLoanTab = 'all' | 'pending' | 'approved' | 'rejected';
type ModalMode = 'none' | 'detail' | 'approve' | 'reject' | 'foreclosure';

@Component({
  selector:    'app-admin-loan',
  standalone:  true,
  imports:     [CommonModule, FormsModule],
  templateUrl: './admin-loan.component.html',
  styleUrl:    './admin-loan.component.css',
})
export class AdminLoanComponent implements OnInit {

  @Output() pendingCount = new EventEmitter<number>();

  tabs: AdminLoanTab[] = ['all', 'pending', 'approved', 'rejected'];

  activeTab   = signal<AdminLoanTab>('all');
  loans       = signal<any[]>([]);
  loading     = signal(false);

  // Pagination
  page        = signal(0);
  totalPages  = signal(0);
  totalElements = signal(0);
  readonly pageSize = 15;
  treasuries    = signal<any[]>([]);
  selectedTrId :any;

  // Search
  searchQuery = '';

  // Modal
  modalMode        = signal<ModalMode>('none');
  selectedLoan     = signal<any>(null);
  emiSchedule      = signal<any[]>([]);
  scheduleLoading  = signal(false);
  modalLoading     = signal(false);

  // Approve form
  approveRate = '';

  // Reject form
  rejectReason = '';

  // Error signals
  approveError = signal('');
  rejectError  = signal('');

  constructor(
    private loanService: LoanService,
    private treasuryService: TreasuryService, 
    private popup: NotificationService,
  ) {}

  ngOnInit(): void { this.loadLoans(); }

  // ─────────────────────────────────────────────
  //  LOAD
  // ─────────────────────────────────────────────

  loadLoans(): void {
    this.loading.set(true);
    const status = this.activeTab() === 'all' ? '' : this.activeTab().toUpperCase();

    this.loanService.getAllLoans(status, this.page(), this.pageSize).subscribe({
      next: (res: any) => {
        this.loading.set(false);
        if (res.success && res.data) {
          this.loans.set(res.data.content || []);
          this.totalPages.set(res.data.totalPages || 0);
          this.totalElements.set(res.data.totalElements || 0);
          // Emit pending count to sidebar
          if (this.activeTab() === 'pending') {
            this.pendingCount.emit(this.totalElements());
          }
        }
      },
      error: () => {
        this.loading.set(false);
        this.popup.danger('Failed to load loans.');
      },
    });
  }

  switchTab(tab: AdminLoanTab): void {
    this.activeTab.set(tab);
    this.page.set(0);
    this.loans.set([]);
    this.loadLoans();
  }

  goToPage(p: number): void {
    if (p < 0 || p >= this.totalPages()) return;
    this.page.set(p);
    this.loadLoans();
  }

  get filteredLoans(): any[] {
    const q = this.searchQuery.toLowerCase();
    if (!q) return this.loans();
    return this.loans().filter(l =>
      l.loanId?.toLowerCase().includes(q) ||
      l.user?.fullName?.toLowerCase().includes(q) ||
      l.user?.email?.toLowerCase().includes(q) ||
      l.loanType?.toLowerCase().includes(q)
    );
  }

  // ─────────────────────────────────────────────
  //  MODALS
  // ─────────────────────────────────────────────

  openDetail(loan: any): void {
    this.selectedLoan.set(loan);
    this.modalMode.set('detail');
    // Load detail with docs + EMI schedule
    this.loanService.getLoanDetail(loan.loanId).subscribe({
      next: (res: any) => {
        if (res.success) this.selectedLoan.set(res.data);
      },
      error: () => this.popup.danger('Failed to load loan detail.'),
    });
    this.loadEmiSchedule(loan.loanId);
  }

  loadEmiSchedule(loanId: string): void {
    this.scheduleLoading.set(true);
    this.loanService.getEmiSchedule(loanId).subscribe({
      next: (res: any) => {
        this.scheduleLoading.set(false);
        if (res.success) this.emiSchedule.set(res.data || []);
      },
      error: () => this.scheduleLoading.set(false),
    });
  }

  // openApprove(): void {
  //   this.approveRate  = '';
  //   this.approveError.set('');
  //   this.modalMode.set('approve');
  // }

  openApprove(): void {
  this.approveRate  = '';
  this.approveError.set('');
  this.selectedTrId = 0;
  this.modalMode.set('approve');

  // Load active treasuries
  this.treasuryService.getActive().subscribe({
    next: (res: any) => {
      if (res.success) {
        this.treasuries.set(res.data || []);
        // Auto-select first treasury
        if (res.data?.length > 0) {
          this.selectedTrId = res.data[0].id;
        }
      }
    },
    error: () => this.popup.danger('Failed to load treasuries.'),
  });
}

  openReject(): void {
    this.rejectReason = '';
    this.rejectError.set('');
    this.modalMode.set('reject');
  }

  closeModal(): void {
    this.modalMode.set('none');
    this.selectedLoan.set(null);
    this.emiSchedule.set([]);
  }

  // ─────────────────────────────────────────────
  //  APPROVE
  // ─────────────────────────────────────────────

  // confirmApprove(): void {
  //   this.approveError.set('');
  //   if (!this.approveRate || parseFloat(this.approveRate) <= 0) {
  //     this.approveError.set('Enter a valid interest rate.'); return;
  //   }
  //   if (parseFloat(this.approveRate) > 50) {
  //     this.approveError.set('Interest rate cannot exceed 50%.'); return;
  //   }

  //   this.modalLoading.set(true);

  //   this.loanService.approveLoan(
  //     this.selectedLoan().loanId,
  //     this.approveRate
  //   ).subscribe({
  //     next: (res: any) => {
  //       this.modalLoading.set(false);
  //       if (res.success) {
  //         this.popup.success(`Loan ${this.selectedLoan().loanId} approved!`);
  //         this.closeModal();
  //         this.loadLoans();
  //       } else {
  //         this.approveError.set(res.message || 'Failed.');
  //       }
  //     },
  //     error: (err: any) => {
  //       this.modalLoading.set(false);
  //       this.approveError.set(err.error?.message || 'Approval failed.');
  //     },
  //   });
  // }

  // Update confirmApprove():
confirmApprove(): void {
  this.approveError.set('');

  if (!this.approveRate || parseFloat(this.approveRate) <= 0) {
    this.approveError.set('Enter a valid interest rate.'); return;
  }
  if (!this.selectedTrId) {
    this.approveError.set('Select a treasury for disbursement.'); return;
  }

  this.modalLoading.set(true);

  this.loanService.approveLoan(
    this.selectedLoan().loanId,
    this.approveRate,
    this.selectedTrId        // ← pass treasury id
  ).subscribe({
    next: (res: any) => {
      this.modalLoading.set(false);
      if (res.success) {
        this.popup.success(`Loan ${this.selectedLoan().loanId} approved! ₹${res.data.principalAmount} disbursed from treasury.`);
        this.closeModal();
        this.loadLoans();
      } else {
        this.approveError.set(res.message || 'Failed.');
      }
    },
    error: (err: any) => {
      this.modalLoading.set(false);
      const code = err.error?.errorCode || '';
      if (code === 'TREASURY_INSUFFICIENT_FUNDS') {
        this.approveError.set(err.error?.message || 'Treasury has insufficient funds.');
      } else if (code === 'TREASURY_NOT_ACTIVE') {
        this.approveError.set('Selected treasury is not active.');
      } else {
        this.approveError.set(err.error?.message || 'Approval failed.');
      }
    },
  });
}


  // ─────────────────────────────────────────────
  //  REJECT
  // ─────────────────────────────────────────────

  confirmReject(): void {
    this.rejectError.set('');
    if (!this.rejectReason.trim()) {
      this.rejectError.set('Rejection reason is required.'); return;
    }

    this.modalLoading.set(true);

    this.loanService.rejectLoan(
      this.selectedLoan().loanId,
      this.rejectReason.trim()
    ).subscribe({
      next: (res: any) => {
        this.modalLoading.set(false);
        if (res.success) {
          this.popup.success(`Loan ${this.selectedLoan().loanId} rejected.`);
          this.closeModal();
          this.loadLoans();
        } else {
          this.rejectError.set(res.message || 'Failed.');
        }
      },
      error: (err: any) => {
        this.modalLoading.set(false);
        this.rejectError.set(err.error?.message || 'Rejection failed.');
      },
    });
  }

  // ─────────────────────────────────────────────
  //  FORECLOSURE APPROVE
  // ─────────────────────────────────────────────

  approveForeclosure(): void {
    if (!confirm(
      `Approve foreclosure for ${this.selectedLoan().loanId}?\n` +
      `Amount: ₹${this.formatAmount(this.selectedLoan().foreclosureAmount)}\n` +
      `This will close the loan immediately.`
    )) return;

    this.modalLoading.set(true);
    this.loanService.approveForeclosure(this.selectedLoan().loanId).subscribe({
      next: (res: any) => {
        this.modalLoading.set(false);
        if (res.success) {
          this.popup.success('Foreclosure approved. Loan closed.');
          this.closeModal();
          this.loadLoans();
        }
      },
      error: (err: any) => {
        this.modalLoading.set(false);
        this.popup.danger(err.error?.message || 'Foreclosure approval failed.');
      },
    });
  }

  // ─────────────────────────────────────────────
  //  HELPERS
  // ─────────────────────────────────────────────

  getStatusClass(status: string): string {
    const m: Record<string, string> = {
      PENDING:'st-pending', APPROVED:'st-approved',
      REJECTED:'st-rejected', CLOSED:'st-closed',
      FORECLOSED:'st-closed', OVERDUE:'st-overdue',
    };
    return m[status] ?? 'st-pending';
  }

  getEmiStatusClass(s: string): string {
    const m: Record<string, string> = {
      PENDING:'emi-pending', PAID:'emi-paid', OVERDUE:'emi-overdue', WAIVED:'emi-waived',
    };
    return m[s] ?? 'emi-pending';
  }

  getLoanTypeIcon(type: string): string {
    return { HOME:'🏠', PERSONAL:'💼', VEHICLE:'🚗', EDUCATION:'🎓' }[type] ?? '🏦';
  }

  get pageNumbers(): number[] {
    const total = this.totalPages(), cur = this.page();
    const set = new Set<number>();
    for (let i = 0; i < total; i++) {
      if (i === 0 || i === total - 1 || Math.abs(i - cur) <= 1) set.add(i);
    }
    return [...set].sort((a, b) => a - b);
  }

  // formatAmount(v: string | number): string {
  //   if (!v) return '₹0.00';
  //   return '₹' + parseFloat(String(v))
  //     .toLocaleString('en-IN', { minimumFractionDigits: 2 });
  // }

  formatAmount(v: string | number): string {
  if (!v) return '₹0.00';
  return '₹' + parseFloat(String(v)).toLocaleString('en-IN', { minimumFractionDigits: 2 });
}

  // Add to admin-loan.component.ts

openDoc(base64: string, type: string): void {
  const mime    = type || 'application/pdf';
  const binary  = atob(base64);
  const bytes   = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  const blob    = new Blob([bytes], { type: mime });
  const url     = URL.createObjectURL(blob);
  window.open(url, '_blank');
}

// In admin-loan.component.ts
parseFloat(value: string | number): number {
  return parseFloat(String(value));
}
}