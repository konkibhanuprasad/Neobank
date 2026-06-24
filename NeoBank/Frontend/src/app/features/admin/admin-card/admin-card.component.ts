// admin-card.component.ts

import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardService } from '../../../core/services/card.service';
import { NotificationService } from '../../../core/services/notification.service';

type Filter = 'ALL' | 'PENDING' | 'BLOCKED';
type ModalMode = 'none' | 'detail' | 'reject' | 'block';

@Component({
  selector:    'app-admin-card',
  standalone:  true,
  imports:     [CommonModule, FormsModule],
  templateUrl: './admin-card.component.html',
  styleUrl:    './admin-card.component.css',
})
export class AdminCardComponent implements OnInit {

  // ── Layout alerts ──
  error   = signal('');
  success = signal('');

  cards       = signal<any[]>([]);
  loading     = signal(false);
  filter      = signal<Filter>('ALL');
  page        = signal(0);
  totalPages  = signal(0);
  totalElements = signal(0);

  searchQuery = '';

  modal        = signal<ModalMode>('none');
  selectedCard = signal<any>(null);
  modalLoading = signal(false);

  rejectReason  = '';
  blockReason   = '';
  rejectError   = signal('');

  constructor(
    private cardService: CardService,
    private ns:          NotificationService,
  ) {}

  ngOnInit(): void { this.loadCards(); }

  loadCards(): void {
    this.loading.set(true);
    this.cardService.getAllCards(
      this.filter(), this.page(), 15
    ).subscribe({
      next: (res: any) => {
        this.loading.set(false);
        if (res.success && res.data) {
          this.cards.set(res.data.content || []);
          this.totalPages.set((res.data?.page?.totalPages ?? res.data?.totalPages ?? 0));
          this.totalElements.set((res.data?.page?.totalElements ?? res.data?.totalElements ?? 0));
        }
      },
      error: () => {
        this.loading.set(false);
        this.ns.danger('Failed to load cards.');
      },
    });
  }

  switchFilter(f: Filter): void {
    this.filter.set(f);
    this.page.set(0);
    this.loadCards();
  }

  goToPage(p: number): void {
    if (p < 0 || p >= this.totalPages()) return;
    this.page.set(p);
    this.loadCards();
  }

  get filteredCards(): any[] {
    const q = this.searchQuery.toLowerCase();
    if (!q) return this.cards();
    return this.cards().filter(c =>
      c.maskedCardNumber?.toLowerCase().includes(q) ||
      c.customerFullName?.toLowerCase().includes(q) ||
      c.customerEmail?.toLowerCase().includes(q) ||
      c.accountNumber?.includes(q)
    );
  }

  openDetail(card: any): void {
    this.selectedCard.set(card);
    this.rejectReason = ''; this.blockReason = '';
    this.rejectError.set('');
    this.modal.set('detail');
  }

  // ── APPROVE ──
  approve(card: any): void {
    if (!confirm(`Approve card request for ${card.customerFullName}?`)) return;
    this.modalLoading.set(true);

    this.cardService.approveCard(card.id).subscribe({
      next: (res: any) => {
        this.modalLoading.set(false);
        if (res.success) {
          this.modal.set('none');
          this.loadCards();
          this.ns.success(`Card approved for ${card.customerFullName}!`);
          this.success.set(`Card ****${card.last4} approved. Customer notified via email.`);
          setTimeout(() => this.success.set(''), 5000);
        }
      },
      error: (err: any) => {
        this.modalLoading.set(false);
        this.ns.danger(err.error?.message || 'Approval failed.');
      },
    });
  }

  // ── REJECT ──
  openReject(): void {
    this.rejectReason = '';
    this.rejectError.set('');
    this.modal.set('reject');
  }

  confirmReject(): void {
    this.rejectError.set('');
    if (!this.rejectReason.trim()) {
      this.rejectError.set('Rejection reason is required.'); return;
    }
    this.modalLoading.set(true);

    this.cardService.rejectCard(
      this.selectedCard().id, this.rejectReason.trim()
    ).subscribe({
      next: (res: any) => {
        this.modalLoading.set(false);
        if (res.success) {
          this.modal.set('none');
          this.loadCards();
          this.ns.success('Card request rejected. Customer notified.');
          this.error.set('');
        }
      },
      error: (err: any) => {
        this.modalLoading.set(false);
        this.rejectError.set(err.error?.message || 'Failed.');
      },
    });
  }

  // ── ADMIN BLOCK / UNBLOCK ──
  openAdminBlock(): void {
    this.blockReason = '';
    this.modal.set('block');
  }

  confirmAdminBlock(): void {
    this.modalLoading.set(true);
    this.cardService.adminBlockCard(
      this.selectedCard().id, this.blockReason || undefined
    ).subscribe({
      next: (res: any) => {
        this.modalLoading.set(false);
        if (res.success) {
          this.modal.set('none');
          this.loadCards();
          this.ns.success('Card blocked by admin.');
        }
      },
      error: (err: any) => {
        this.modalLoading.set(false);
        this.ns.danger(err.error?.message || 'Failed.');
      },
    });
  }

  adminUnblock(card: any): void {
    if (!confirm(`Unblock card ****${card.last4}?`)) return;
    this.cardService.adminUnblockCard(card.id).subscribe({
      next: (res: any) => {
        if (res.success) {
          this.loadCards();
          this.ns.success('Card unblocked.');
        }
      },
      error: (err: any) => this.ns.danger(err.error?.message || 'Failed.'),
    });
  }

  // ── Helpers ──
  getStatusClass(status: string): string {
    const m: Record<string, string> = {
      ACTIVE:'acs-active', BLOCKED:'acs-blocked',
      PENDING_APPROVAL:'acs-pending', CANCELLED:'acs-cancelled',
      EXPIRED:'acs-expired', REPLACEMENT_PENDING:'acs-replace',
    };
    return m[status] ?? 'acs-pending';
  }

  getReqClass(rs: string): string {
    return { PENDING:'rq-pending', APPROVED:'rq-approved', REJECTED:'rq-rejected' }[rs] ?? 'rq-pending';
  }

  get pageNumbers(): number[] {
    const total = this.totalPages(), cur = this.page();
    const set = new Set<number>();
    for (let i = 0; i < total; i++) {
      if (i === 0 || i === total-1 || Math.abs(i-cur) <= 1) set.add(i);
    }
    return [...set].sort((a,b) => a-b);
  }

  formatAmount(v: string | number): string {
    if (!v) return '₹0.00';
    return '₹' + parseFloat(String(v))
      .toLocaleString('en-IN', { minimumFractionDigits: 2 });
  }
}