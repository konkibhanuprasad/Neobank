// customer-card.component.ts

import {
  Component, Input, OnInit, signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardService } from '../../../core/services/card.service';
import { NotificationService } from '../../../core/services/notification.service';

type CardTab = 'cards' | 'transfer' | 'history';
type TransferStep = 'form' | 'otp' | 'success';
type Modal =
  'none' | 'request' | 'block' | 'limits' |
  'pin' | 'reveal' | 'replace';

@Component({
  selector:    'app-customer-card',
  standalone:  true,
  imports:     [CommonModule, FormsModule],
  templateUrl: './customer-card.component.html',
  styleUrl:    './customer-card.component.css',
})
export class CustomerCardComponent implements OnInit {

  @Input() accounts: any[] = [];
  @Input() isDark = false;

  // ── Layout-style alerts ──
  error   = signal('');
  success = signal('');

  activeTab    = signal<CardTab>('cards');
  modal        = signal<Modal>('none');
  selectedCard = signal<any>(null);

  // ── Cards ──
  cards        = signal<any[]>([]);
  cardsLoading = signal(false);

  // ── Request Card ──
  requestAccount = '';
  requestNetwork = 'RUPAY';
  requestReason  = '';
  requestLoading = signal(false);
  requestError   = signal('');
  readonly networks = ['RUPAY', 'VISA', 'MASTERCARD'];

  // ── Reveal Card Details ──
  revealOtpSent    = signal(false);
  revealOtpLoading = signal(false);
  revealOtp        = '';
  revealLoading    = signal(false);
  revealedDetails  = signal<any>(null);
  revealError      = signal('');
  revealCooldown   = signal(0);
  private revealTimer: any;

  // ── Change PIN ──
  pinOtpSent    = signal(false);
  pinOtpLoading = signal(false);
  pinOtp        = '';
  newPin        = '';
  confirmPin    = '';
  showPin       = signal(false);
  pinLoading    = signal(false);
  pinError      = signal('');
  pinCooldown   = signal(0);
  private pinTimer: any;

  // ── Block ──
  blockReason  = '';
  blockLoading = signal(false);

  // ── Limits ──
  limitsOnline  = '';
  limitsAtm     = '';
  limitsDaily   = '';
  limitsLoading = signal(false);
  limitsError   = signal('');

  // ── Replacement ──
  replaceReason  = '';
  replaceLoading = signal(false);
  replaceError   = signal('');
  readonly replacementReasons = [
    'Card damaged', 'Card lost', 'Card stolen',
    'Card demagnetised', 'Chip not working', 'Other',
  ];

  // ── Card Transfer (Bank Transfer via Card) ──
  transferStep = signal<TransferStep>('form');

  // Sender card details
  senderCardNum  = '';
  senderName     = '';
  senderExpiry   = '';
  senderCvv      = '';
  showCvv        = signal(false);

  // Receiver bank details
  receiverAccNo  = '';
  receiverIfsc   = '';
  receiverName   = '';

  // Transfer
  transferAmount  = '';
  transferDesc    = '';
  transferOtp     = '';
  transferOtpSent = signal(false);
  transferOtpLoad = signal(false);
  transferLoading = signal(false);
  lastTransfer    = signal<any>(null);
  transferOtpCool = signal(0);
  private transferTimer: any;

  // ── History ──
  historyCardId  = signal<number | null>(null);
  history        = signal<any[]>([]);
  historyLoading = signal(false);
  histPage       = signal(0);
  histTotalPages = signal(0);

  constructor(
    private cardService: CardService,
    private ns:          NotificationService,
  ) {}

  ngOnInit(): void {
    if (this.accounts.length > 0) {
      this.requestAccount = this.accounts[0].accountNumber;
    }
    this.loadCards();
  }

  // ─────────────────────────────────────────────
  //  LOAD
  // ─────────────────────────────────────────────

  loadCards(): void {
    this.cardsLoading.set(true);
    this.cardService.getMyCards().subscribe({
      next: (res: any) => {
        this.cardsLoading.set(false);
        if (res.success) this.cards.set(res.data || []);
      },
      error: () => {
        this.cardsLoading.set(false);
        this.ns.danger('Failed to load cards.');
      },
    });
  }

  // ─────────────────────────────────────────────
  //  REQUEST CARD
  // ─────────────────────────────────────────────

  openRequest(): void {
    this.requestAccount = this.accounts[0]?.accountNumber || '';
    this.requestNetwork = 'RUPAY';
    this.requestReason  = '';
    this.requestError.set('');
    this.modal.set('request');
  }

  submitRequest(): void {
    this.requestError.set('');
    if (!this.requestAccount) {
      this.requestError.set('Select an account.'); return;
    }
    this.requestLoading.set(true);

    this.cardService.requestCard({
      accountNumber: this.requestAccount,
      network:       this.requestNetwork,
      requestReason: this.requestReason || 'New card request',
    }).subscribe({
      next: (res: any) => {
        this.requestLoading.set(false);
        if (res.success) {
          this.modal.set('none');
          this.loadCards();
          this.ns.success('Card request submitted! Admin will review within 1-2 business days.');
          this.success.set('Card request submitted. You will receive an email once approved.');
          setTimeout(() => this.success.set(''), 6000);
        } else {
          this.requestError.set(res.message || 'Failed.');
        }
      },
      error: (err: any) => {
        this.requestLoading.set(false);
        this.requestError.set(err.error?.message || 'Failed to submit request.');
      },
    });
  }

  // ─────────────────────────────────────────────
  //  REVEAL CARD DETAILS
  // ─────────────────────────────────────────────

  openReveal(card: any): void {
    this.selectedCard.set(card);
    this.revealOtpSent.set(false);
    this.revealOtp       = '';
    this.revealedDetails.set(null);
    this.revealError.set('');
    this.modal.set('reveal');
  }

  sendRevealOtp(): void {
    if (this.revealCooldown() > 0) {
      this.ns.warning(`Wait ${this.revealCooldown()}s.`); return;
    }
    this.revealOtpLoading.set(true);
    this.revealError.set('');

    this.cardService.sendRevealOtp(this.selectedCard().id).subscribe({
      next: (res: any) => {
        this.revealOtpLoading.set(false);
        if (res.success) {
          this.revealOtpSent.set(true);
          this.revealOtp = '';
          this.startRevealTimer();
          this.ns.info('OTP sent to registered email.');
        } else {
          this.revealError.set(res.message || 'Failed.');
        }
      },
      error: (err: any) => {
        this.revealOtpLoading.set(false);
        this.revealError.set(err.error?.message || 'Failed to send OTP.');
      },
    });
  }

  private startRevealTimer(): void {
    this.revealCooldown.set(60);
    clearInterval(this.revealTimer);
    this.revealTimer = setInterval(() => {
      this.revealCooldown.update(v => {
        if (v <= 1) { clearInterval(this.revealTimer); return 0; }
        return v - 1;
      });
    }, 1000);
  }

  revealDetails(): void {
    this.revealError.set('');
    if (!this.revealOtp || this.revealOtp.length !== 6) {
      this.revealError.set('Enter 6-digit OTP.'); return;
    }
    this.revealLoading.set(true);

    this.cardService.revealCardDetails({
      cardId: String(this.selectedCard().id),
      otp:    this.revealOtp,
    }).subscribe({
      next: (res: any) => {
        this.revealLoading.set(false);
        if (res.success) {
          this.revealedDetails.set(res.data);
          this.ns.success('Card details revealed. Full details sent to your email.');
        } else {
          this.revealError.set(res.message || 'Failed.');
        }
      },
      error: (err: any) => {
        this.revealLoading.set(false);
        const code = err.error?.errorCode || '';
        if (code === 'OTP_INVALID') {
          this.revealOtp = '';
          this.revealError.set(err.error?.message || 'Wrong OTP.');
        } else if (code === 'OTP_EXPIRED' || code === 'OTP_NOT_FOUND') {
          this.revealOtpSent.set(false);
          this.revealOtp = '';
          this.revealError.set('OTP expired. Request new OTP.');
        } else {
          this.revealError.set(err.error?.message || 'Failed.');
        }
      },
    });
  }

  // ─────────────────────────────────────────────
  //  CHANGE PIN
  // ─────────────────────────────────────────────

  openPin(card: any): void {
    this.selectedCard.set(card);
    this.pinOtpSent.set(false);
    this.pinOtp = ''; this.newPin = ''; this.confirmPin = '';
    this.pinError.set('');
    this.modal.set('pin');
  }

  closePinModal(): void {
    this.modal.set('none');
    clearInterval(this.pinTimer);
    this.pinCooldown.set(0);
  }

  sendPinOtp(): void {
    if (this.pinCooldown() > 0) {
      this.pinError.set(`Wait ${this.pinCooldown()}s.`); return;
    }
    this.pinOtpLoading.set(true);
    this.pinError.set('');

    this.cardService.sendPinOtp(this.selectedCard().id).subscribe({
      next: (res: any) => {
        this.pinOtpLoading.set(false);
        if (res.success) {
          this.pinOtpSent.set(true);
          this.pinOtp = '';
          this.startPinTimer();
          this.ns.info('OTP sent to registered email.');
        } else {
          this.pinError.set(res.message || 'Failed.');
        }
      },
      error: (err: any) => {
        this.pinOtpLoading.set(false);
        this.pinError.set(err.error?.message || 'Failed to send OTP.');
      },
    });
  }

  private startPinTimer(): void {
    this.pinCooldown.set(60);
    clearInterval(this.pinTimer);
    this.pinTimer = setInterval(() => {
      this.pinCooldown.update(v => {
        if (v <= 1) { clearInterval(this.pinTimer); return 0; }
        return v - 1;
      });
    }, 1000);
  }

  changePin(): void {
    this.pinError.set('');
    if (!this.pinOtpSent()) {
      this.pinError.set('Send OTP first.'); return;
    }
    if (!this.pinOtp || this.pinOtp.length !== 6) {
      this.pinError.set('Enter 6-digit OTP.'); return;
    }
    if (!this.newPin || !/^\d{4}$/.test(this.newPin)) {
      this.pinError.set('PIN must be exactly 4 digits.'); return;
    }
    if (this.newPin !== this.confirmPin) {
      this.pinError.set('PINs do not match.'); return;
    }

    this.pinLoading.set(true);

    this.cardService.changePin({
      cardId:     String(this.selectedCard().id),
      otp:        this.pinOtp,
      newPin:     this.newPin,
      confirmPin: this.confirmPin,
    }).subscribe({
      next: (res: any) => {
        this.pinLoading.set(false);
        if (res.success) {
          this.closePinModal();
          this.loadCards();
          this.ns.success('✅ Card PIN changed successfully!');
          this.success.set('Card PIN updated. Use the new PIN for all card transactions.');
          setTimeout(() => this.success.set(''), 5000);
        } else {
          this.pinError.set(res.message || 'Failed.');
        }
      },
      error: (err: any) => {
        this.pinLoading.set(false);
        const code = err.error?.errorCode || '';
        if (code === 'OTP_INVALID') {
          this.pinOtp = '';
          this.pinError.set(err.error?.message || 'Wrong OTP.');
        } else if (code === 'OTP_EXPIRED' || code === 'OTP_NOT_FOUND') {
          this.pinOtpSent.set(false);
          this.pinOtp = '';
          this.pinError.set('OTP expired. Request new OTP.');
        } else {
          this.pinError.set(err.error?.message || 'Failed.');
        }
      },
    });
  }

  // ─────────────────────────────────────────────
  //  BLOCK / UNBLOCK
  // ─────────────────────────────────────────────

  openBlock(card: any): void {
    this.selectedCard.set(card);
    this.blockReason = '';
    this.modal.set('block');
  }

  confirmBlock(): void {
    this.blockLoading.set(true);
    this.cardService.blockCard(
      this.selectedCard().id, this.blockReason || undefined
    ).subscribe({
      next: (res: any) => {
        this.blockLoading.set(false);
        if (res.success) {
          this.modal.set('none');
          this.loadCards();
          this.ns.success('Card blocked.');
          this.success.set('Card **** ' + this.selectedCard().last4 + ' blocked.');
          setTimeout(() => this.success.set(''), 4000);
        }
      },
      error: (err: any) => {
        this.blockLoading.set(false);
        this.ns.danger(err.error?.message || 'Failed.');
      },
    });
  }

  unblockCard(card: any): void {
    if (!confirm(`Unblock card ****${card.last4}?`)) return;
    this.cardService.unblockCard(card.id).subscribe({
      next: (res: any) => {
        if (res.success) {
          this.loadCards();
          this.ns.success('Card unblocked and active.');
          this.success.set('Card **** ' + card.last4 + ' is now active.');
          setTimeout(() => this.success.set(''), 4000);
        }
      },
      error: (err: any) =>
        this.ns.danger(err.error?.message || 'Failed.'),
    });
  }

  // ─────────────────────────────────────────────
  //  LIMITS
  // ─────────────────────────────────────────────

  openLimits(card: any): void {
    this.selectedCard.set(card);
    this.limitsOnline = card.onlineLimit;
    this.limitsAtm    = card.atmLimit;
    this.limitsDaily  = card.dailyLimit;
    this.limitsError.set('');
    this.modal.set('limits');
  }

  saveLimits(): void {
    this.limitsError.set('');
    this.limitsLoading.set(true);
    this.cardService.updateLimits(this.selectedCard().id, {
      onlineLimit: this.limitsOnline,
      atmLimit:    this.limitsAtm,
      dailyLimit:  this.limitsDaily,
    }).subscribe({
      next: (res: any) => {
        this.limitsLoading.set(false);
        if (res.success) {
          this.modal.set('none');
          this.loadCards();
          this.ns.success('Card limits updated!');
        } else {
          this.limitsError.set(res.message || 'Failed.');
        }
      },
      error: (err: any) => {
        this.limitsLoading.set(false);
        this.limitsError.set(err.error?.message || 'Failed.');
      },
    });
  }

  // ─────────────────────────────────────────────
  //  REPLACEMENT
  // ─────────────────────────────────────────────

  openReplace(card: any): void {
    this.selectedCard.set(card);
    this.replaceReason = '';
    this.replaceError.set('');
    this.modal.set('replace');
  }

  confirmReplace(): void {
    this.replaceError.set('');
    if (!this.replaceReason) {
      this.replaceError.set('Select a reason.'); return;
    }
    this.replaceLoading.set(true);
    this.cardService.requestReplacement({
      cardId: String(this.selectedCard().id),
      reason: this.replaceReason,
    }).subscribe({
      next: (res: any) => {
        this.replaceLoading.set(false);
        if (res.success) {
          this.modal.set('none');
          this.loadCards();
          this.ns.success('Replacement requested. Admin will review and issue new card.');
          this.success.set('Replacement card request submitted. Old card marked for replacement.');
          setTimeout(() => this.success.set(''), 6000);
        } else {
          this.replaceError.set(res.message || 'Failed.');
        }
      },
      error: (err: any) => {
        this.replaceLoading.set(false);
        this.replaceError.set(err.error?.message || 'Failed.');
      },
    });
  }

  // ─────────────────────────────────────────────
  //  CARD → BANK TRANSFER
  // ─────────────────────────────────────────────

  sendTransferOtp(): void {
    this.error.set('');
    const cleaned = this.senderCardNum.replace(/\s/g, '');
    if (cleaned.length !== 16) {
      this.error.set('Enter valid 16-digit card number.'); return;
    }
    if (!this.senderName.trim()) {
      this.error.set('Enter cardholder name.'); return;
    }
    if (!this.senderExpiry.match(/^\d{2}\/\d{2}$/)) {
      this.error.set('Enter expiry in MM/YY format.'); return;
    }
    if (!this.senderCvv.match(/^\d{3}$/)) {
      this.error.set('Enter 3-digit CVV.'); return;
    }
    if (this.transferOtpCool() > 0) {
      this.ns.warning(`Wait ${this.transferOtpCool()}s.`); return;
    }

    this.transferOtpLoad.set(true);

    this.cardService.sendTransferOtp(cleaned).subscribe({
      next: (res: any) => {
        this.transferOtpLoad.set(false);
        if (res.success) {
          this.transferOtpSent.set(true);
          this.transferOtp = '';
          this.startTransferTimer();
          this.ns.info('OTP sent to registered email.');
        } else {
          this.error.set(res.message || 'Failed.');
        }
      },
      error: (err: any) => {
        this.transferOtpLoad.set(false);
        this.error.set(err.error?.message || 'Failed to send OTP.');
      },
    });
  }

  private startTransferTimer(): void {
    this.transferOtpCool.set(60);
    clearInterval(this.transferTimer);
    this.transferTimer = setInterval(() => {
      this.transferOtpCool.update(v => {
        if (v <= 1) { clearInterval(this.transferTimer); return 0; }
        return v - 1;
      });
    }, 1000);
  }

  submitTransfer(): void {
    this.error.set('');

    // Validate all fields
    const cleaned = this.senderCardNum.replace(/\s/g, '');
    if (!this.receiverAccNo.trim()) { this.error.set('Enter receiver account number.'); return; }
    if (!this.receiverIfsc.trim())  { this.error.set('Enter IFSC code.'); return; }
    if (!this.receiverName.trim())  { this.error.set('Enter receiver name.'); return; }
    if (!this.transferAmount || parseFloat(this.transferAmount) <= 0) {
      this.error.set('Enter valid amount.'); return;
    }
    if (!this.transferOtpSent()) { this.error.set('Send OTP first.'); return; }
    if (!this.transferOtp || this.transferOtp.length !== 6) {
      this.error.set('Enter 6-digit OTP.'); return;
    }

    this.transferLoading.set(true);

    this.cardService.cardBankTransfer({
      senderCardNumber:      cleaned,
      senderCardholderName:  this.senderName.trim(),
      senderExpiry:          this.senderExpiry.trim(),
      senderCvv:             this.senderCvv.trim(),
      receiverAccountNumber: this.receiverAccNo.trim(),
      receiverIfsc:          this.receiverIfsc.trim().toUpperCase(),
      receiverName:          this.receiverName.trim(),
      amount:                this.transferAmount,
      otp:                   this.transferOtp,
      description:           this.transferDesc,
    }).subscribe({
      next: (res: any) => {
        this.transferLoading.set(false);
        if (res.success) {
          this.lastTransfer.set(res.data);
          this.transferStep.set('success');
          this.ns.success('✅ Transfer successful!');
        } else {
          this.error.set(res.message || 'Transfer failed.');
        }
      },
      error: (err: any) => {
        this.transferLoading.set(false);
        const code = err.error?.errorCode || '';
        const msg  = err.error?.message   || 'Transfer failed.';
        this.error.set(msg);

        // Reset OTP if expired
        if (code === 'OTP_INVALID' || code === 'OTP_EXPIRED') {
          this.transferOtp = '';
          this.transferOtpSent.set(false);
        }
        // Clear CVV on wrong attempt
        if (code === 'CVV_MISMATCH') { this.senderCvv = ''; }
      },
    });
  }

  resetTransfer(): void {
    this.transferStep.set('form');
    this.senderCardNum = ''; this.senderName = '';
    this.senderExpiry  = ''; this.senderCvv  = '';
    this.receiverAccNo = ''; this.receiverIfsc = '';
    this.receiverName  = ''; this.transferAmount = '';
    this.transferDesc  = ''; this.transferOtp = '';
    this.transferOtpSent.set(false);
    this.lastTransfer.set(null);
    this.error.set('');
    clearInterval(this.transferTimer);
    this.transferOtpCool.set(0);
  }

  // ─────────────────────────────────────────────
  //  HISTORY
  // ─────────────────────────────────────────────

  loadHistory(): void {
    if (!this.historyCardId()) return;
    this.historyLoading.set(true);
    this.cardService.getCardTransactions(
      this.historyCardId()!, this.histPage(), 15
    ).subscribe({
      next: (res: any) => {
        this.historyLoading.set(false);
        if (res.success && res.data) {
          this.history.set(res.data.content || []);
          this.histTotalPages.set(res.data.totalPages || 0);
        }
      },
      error: () => this.historyLoading.set(false),
    });
  }

  selectHistoryCard(cardId: number): void {
    this.historyCardId.set(cardId);
    this.histPage.set(0);
    this.history.set([]);
    this.loadHistory();
  }

  histGoToPage(p: number): void {
    if (p < 0 || p >= this.histTotalPages()) return;
    this.histPage.set(p);
    this.loadHistory();
  }

  // ─────────────────────────────────────────────
  //  HELPERS
  // ─────────────────────────────────────────────

  switchTab(tab: CardTab): void {
    this.activeTab.set(tab);
    this.error.set(''); this.success.set('');
    if (tab === 'history' && this.cards().length > 0 &&
        !this.historyCardId()) {
      this.selectHistoryCard(this.cards()[0].id);
    }
  }

  closeModal(): void {
    this.modal.set('none');
    this.revealedDetails.set(null);
    clearInterval(this.revealTimer);
    clearInterval(this.pinTimer);
  }

  getStatusClass(status: string): string {
    const m: Record<string, string> = {
      ACTIVE: 'cs-active', BLOCKED: 'cs-blocked',
      EXPIRED: 'cs-expired', CANCELLED: 'cs-cancelled',
      REPLACEMENT_PENDING: 'cs-replace',
      PENDING_APPROVAL: 'cs-pending',
    };
    return m[status] ?? 'cs-pending';
  }

  getReqStatusClass(rs: string): string {
    const m: Record<string, string> = {
      PENDING: 'rq-pending', APPROVED: 'rq-approved', REJECTED: 'rq-rejected',
    };
    return m[rs] ?? 'rq-pending';
  }

  getNetworkColor(net: string): string {
    return { VISA:'#1a1f71', MASTERCARD:'#eb001b', RUPAY:'#097939' }[net] ?? '#6366f1';
  }

  getTxnIcon(type: string): string {
    const m: Record<string, string> = {
      ONLINE_PURCHASE:'🛒', ATM_WITHDRAWAL:'🏧',
      POS:'💳', CARD_TRANSFER:'↔️',
      CARD_BANK_TRANSFER:'🏦', REFUND:'↩️',
    };
    return m[type] ?? '💳';
  }

  formatCardInput(event: Event): void {
    const el = event.target as HTMLInputElement;
    let v = el.value.replace(/\D/g,'').substring(0,16);
    v = v.replace(/(.{4})/g, '$1 ').trim();
    el.value = v;
    this.senderCardNum = el.value;
  }

  formatExpiryInput(event: Event): void {
    const el = event.target as HTMLInputElement;
    let v = el.value.replace(/\D/g,'').substring(0,4);
    if (v.length >= 2) v = v.substring(0,2) + '/' + v.substring(2);
    el.value = v;
    this.senderExpiry = el.value;
  }

  formatAmount(v: string | number): string {
    if (!v) return '₹0.00';
    return '₹' + parseFloat(String(v))
      .toLocaleString('en-IN', { minimumFractionDigits: 2 });
  }

  get approvedCards(): any[] {
    return this.cards().filter(c => c.requestStatus === 'APPROVED');
  }
}