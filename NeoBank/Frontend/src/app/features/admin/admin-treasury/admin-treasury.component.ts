// admin-treasury.component.ts

import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreasuryService } from '../../../core/services/treasury.service';
import { NotificationService } from '../../../core/services/notification.service';

type ModalMode = 'none' | 'create' | 'topup' | 'detail';

@Component({
  selector:    'app-admin-treasury',
  standalone:  true,
  imports:     [CommonModule, FormsModule],
  templateUrl: './admin-treasury.component.html',
  styleUrl:    './admin-treasury.component.css',
})
export class AdminTreasuryComponent implements OnInit {

  treasuries   = signal<any[]>([]);
  loading      = signal(false);
  modalMode    = signal<ModalMode>('none');
  selectedT    = signal<any>(null);
  modalLoading = signal(false);

  // Create form
  createName    = '';
  createDesc    = '';
  createBalance = '';
  createError   = signal('');

  // Top-up form
  topUpAmount = '';
  topUpDesc   = '';
  topUpError  = signal('');

  constructor(
    private treasuryService: TreasuryService,
    private ns: NotificationService,
  ) {}

  ngOnInit(): void { this.loadTreasuries(); }

  loadTreasuries(): void {
    this.loading.set(true);
    this.treasuryService.getAll().subscribe({
      next: (res: any) => {
        this.loading.set(false);
        if (res.success) this.treasuries.set(res.data || []);
      },
      error: () => {
        this.loading.set(false);
        this.ns.danger('Failed to load treasuries.');
      },
    });
  }

  // ── OPEN MODALS ──
  openCreate(): void {
    this.createName = ''; this.createDesc = ''; this.createBalance = '';
    this.createError.set('');
    this.modalMode.set('create');
  }

  openTopUp(t: any): void {
    this.selectedT.set(t);
    this.topUpAmount = ''; this.topUpDesc = '';
    this.topUpError.set('');
    this.modalMode.set('topup');
  }

  openDetail(t: any): void {
    this.selectedT.set(t);
    this.modalMode.set('detail');
  }

  closeModal(): void {
    this.modalMode.set('none');
    this.selectedT.set(null);
  }

  // ── CREATE ──
  createTreasury(): void {
    this.createError.set('');
    if (!this.createName.trim()) {
      this.createError.set('Treasury name is required.'); return;
    }
    if (this.createBalance &&
        parseFloat(this.createBalance) < 0) {
      this.createError.set('Balance cannot be negative.'); return;
    }

    this.modalLoading.set(true);
    this.treasuryService.create({
      name:           this.createName.trim(),
      description:    this.createDesc.trim(),
      initialBalance: this.createBalance || '0',
    }).subscribe({
      next: (res: any) => {
        this.modalLoading.set(false);
        if (res.success) {
          this.ns.success(`Treasury "${this.createName}" created!`);
          this.closeModal();
          this.loadTreasuries();
        } else {
          this.createError.set(res.message || 'Failed.');
        }
      },
      error: (err: any) => {
        this.modalLoading.set(false);
        this.createError.set(err.error?.message || 'Failed to create treasury.');
      },
    });
  }

  // ── TOP UP ──
  confirmTopUp(): void {
    this.topUpError.set('');
    if (!this.topUpAmount || parseFloat(this.topUpAmount) <= 0) {
      this.topUpError.set('Enter a valid amount.'); return;
    }

    this.modalLoading.set(true);
    this.treasuryService.topUp(this.selectedT().id, {
      amount:      this.topUpAmount,
      description: this.topUpDesc,
    }).subscribe({
      next: (res: any) => {
        this.modalLoading.set(false);
        if (res.success) {
          this.ns.success(`₹${this.formatAmount(this.topUpAmount)} added to ${this.selectedT().name}`);
          this.closeModal();
          this.loadTreasuries();
        } else {
          this.topUpError.set(res.message || 'Failed.');
        }
      },
      error: (err: any) => {
        this.modalLoading.set(false);
        this.topUpError.set(err.error?.message || 'Top-up failed.');
      },
    });
  }

  // ── STATUS ──
  updateStatus(t: any, status: string): void {
    if (!confirm(`Set ${t.name} status to ${status}?`)) return;
    this.treasuryService.updateStatus(t.id, status).subscribe({
      next: (res: any) => {
        if (res.success) {
          this.ns.success(`${t.name} → ${status}`);
          this.loadTreasuries();
        }
      },
      error: (err: any) => this.ns.danger(err.error?.message || 'Failed.'),
    });
  }

  // ── HELPERS ──
  getStatusClass(s: string): string {
    return { ACTIVE:'st-active', INACTIVE:'st-inactive', FROZEN:'st-frozen' }[s] ?? '';
  }

  formatAmount(v: string | number): string {
    if (!v) return '₹0.00';
    return '₹' + parseFloat(String(v))
      .toLocaleString('en-IN', { minimumFractionDigits: 2 });
  }

  totalBalance(): number {
    return this.treasuries()
      .filter(t => t.status === 'ACTIVE')
      .reduce((s, t) => s + parseFloat(t.balance || '0'), 0);
  }

  totalDisbursed(): number {
    return this.treasuries()
      .reduce((s, t) => s + parseFloat(t.totalDisbursed || '0'), 0);
  }

  totalInterest(): number {
    return this.treasuries()
      .reduce((s, t) => s + parseFloat(t.totalInterestEarned || '0'), 0);
  }

  // In admin-loan.component.ts
parseFloat(value: string | number): number {
  return parseFloat(String(value));
}
}