// customer-upi.component.ts

import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpiService } from '../../../core/services/upi.service';
import { NotificationService } from '../../../core/services/notification.service';

type UpiTab  = 'pay' | 'ids' | 'history';
type PayStep = 'form' | 'confirm' | 'pin' | 'success';
type PinAction = 'set' | 'change' | 'none';

@Component({
  selector:    'app-customer-upi',
  standalone:  true,
  imports:     [CommonModule, FormsModule],
  templateUrl: './customer-upi.component.html',
  styleUrl:    './customer-upi.component.css',
})
export class CustomerUpiComponent implements OnInit {

  @Input() accounts: any[] = [];

  activeTab = signal<UpiTab>('pay');

  // ── Global ──
  loading   = signal(false);
  error     = signal('');
  success   = signal('');

  // ── UPI IDs ──
  upiIds         = signal<any[]>([]);
  upiIdsLoading  = signal(false);

  // ── Create UPI ID form ──
  showCreateForm = signal(false);
  createPrefix   = '';
  createAccount  = '';
  createError    = signal('');
  createLoading  = signal(false);

  // ── PAY ──
  payStep      = signal<PayStep>('form');
  senderVpa    = '';
  receiverQuery= '';          // can be VPA or phone
  payAmount    = '';
  payNote      = '';
  upiPin       = '';
  payLoading   = signal(false);
  payError     = signal('');
  lastPayment  = signal<any>(null);

  // VPA / Phone lookup
  lookupLoading = signal(false);
  lookupResult  = signal<any>(null);
  lookupError   = signal('');
  private lookupDebounce: any;

  // ── PIN Management ──
  pinAction      = signal<PinAction>('none');
  pinUpi         = signal<any>(null);
  pinOtp         = '';
  pinOtpSent     = signal(false);
  pinOtpLoading  = signal(false);
  newPin         = '';
  confirmPin     = '';
  currentPin     = '';
  showPin        = signal(false);
  pinLoading     = signal(false);
  pinError       = signal('');
  pinSuccess     = signal('');
  pinResendCool  = signal(0);
  private pinTimer: any;

  // ── Limits ──
  showLimitsModal = signal(false);
  limitsUpi       = signal<any>(null);
  newDailyLimit   = '';
  newPerTxnLimit  = '';
  limitsLoading   = signal(false);

  // ── History ──
  historyVpa     = signal('');
  history        = signal<any[]>([]);
  historyLoading = signal(false);
  histPage       = signal(0);
  histTotalPages = signal(0);
  histTotalItems = signal(0);

  constructor(
    private upiService: UpiService,
    private notificationService: NotificationService,
  ) {}

  ngOnInit(): void {
    if (this.accounts.length > 0) {
      this.createAccount = this.accounts[0].accountNumber;
    }
    this.loadUpiIds();
  }

  // ─────────────────────────────────────────────
  //  LOAD UPI IDs
  // ─────────────────────────────────────────────

  loadUpiIds(): void {
    this.upiIdsLoading.set(true);
    this.upiService.getAllMyUpiIds().subscribe({
      next: (res: any) => {
        this.upiIdsLoading.set(false);
        if (res.success) {
          this.upiIds.set(res.data || []);
          // Auto-select first active VPA with PIN set as sender
          const withPin = (res.data || []).find(
            (u: any) => u.status === 'ACTIVE' && u.pinSet
          );
          if (withPin && !this.senderVpa) {
            this.senderVpa = withPin.vpa;
          }
          // Auto-select for history
          const first = (res.data || []).find(
            (u: any) => u.status === 'ACTIVE'
          );
          if (first && !this.historyVpa()) {
            this.historyVpa.set(first.vpa);
          }
        }
      },
      error: () => this.upiIdsLoading.set(false),
    });
  }

  get activeUpiIds(): any[] {
    return this.upiIds().filter(u => u.status === 'ACTIVE');
  }

  get activeUpiIdsWithPin(): any[] {
    return this.upiIds().filter(u => u.status === 'ACTIVE' && u.pinSet);
  }

  // ─────────────────────────────────────────────
  //  TAB SWITCHING
  // ─────────────────────────────────────────────

  switchTab(tab: UpiTab): void {
    this.activeTab.set(tab);
    this.error.set('');
    this.success.set('');
    if (tab === 'history' && this.historyVpa() && !this.history().length) {
      this.loadHistory();
    }
  }

  // ─────────────────────────────────────────────
  //  CREATE UPI ID — no phone required
  // ─────────────────────────────────────────────

  createUpiId(): void {
    this.createError.set('');

    const prefix = this.createPrefix.trim().toLowerCase();
    if (!prefix || prefix.length < 3) {
      this.createError.set('Prefix must be at least 3 characters.'); return;
    }
    if (!this.createAccount) {
      this.createError.set('Please select an account.'); return;
    }

    this.createLoading.set(true);

    this.upiService.createUpiId({
      accountNumber: this.createAccount,
      vpaPrefix:     prefix,
    }).subscribe({
      next: (res: any) => {
        this.createLoading.set(false);
        if (res.success) {
          const vpa = res.data.vpa;
          const primary = res.data.isPrimary ? ' (set as primary)' : '';
          const msg = `UPI ID created: ${vpa}${primary}`;
          this.success.set('✅ ' + msg);
          this.notificationService.show(msg, 'success');
          this.showCreateForm.set(false);
          this.createPrefix  = '';
          this.createAccount = this.accounts[0]?.accountNumber || '';
          this.loadUpiIds();
          setTimeout(() => this.success.set(''), 4000);
        } else {
          const msg = res.message || 'Failed.';
          this.createError.set(msg);
          this.notificationService.show(msg, 'danger');
        }
      },
      error: (err: any) => {
        this.createLoading.set(false);
        const msg = err.error?.message || 'Failed to create UPI ID.';
        this.createError.set(msg);
        this.notificationService.show(msg, 'danger');
      },
    });
  }

  // ─────────────────────────────────────────────
  //  VPA / PHONE LOOKUP (debounced 700ms)
  // ─────────────────────────────────────────────

  onReceiverChange(): void {
    clearTimeout(this.lookupDebounce);
    this.lookupResult.set(null);
    this.lookupError.set('');

    const q = this.receiverQuery.trim();
    if (!q) return;

    // Need at least a @ for VPA or 10 digits for phone
    const isPhone = /^[6-9]\d{9}$/.test(q);
    const isVpa   = q.includes('@') && q.length > 4;

    if (!isPhone && !isVpa) return;

    this.lookupDebounce = setTimeout(() => {
      this.lookupLoading.set(true);
      this.upiService.lookupVpa(q).subscribe({
        next: (res: any) => {
          this.lookupLoading.set(false);
          if (res.success) {
            this.lookupResult.set(res.data);
            if (!res.data.valid) {
              this.lookupError.set(
                res.data.message || 'UPI ID / mobile not found.'
              );
            }
          }
        },
        error: () => {
          this.lookupLoading.set(false);
          this.lookupError.set('Could not verify. Please try again.');
        },
      });
    }, 700);
  }

  // ─────────────────────────────────────────────
  //  PAY FLOW — Form → Confirm → PIN → Success
  // ─────────────────────────────────────────────

  goToConfirm(): void {
    this.payError.set('');

    if (!this.senderVpa) {
      this.payError.set('Select your UPI ID.'); return;
    }

    const selectedUpi = this.activeUpiIds.find(
      u => u.vpa === this.senderVpa
    );
    if (!selectedUpi?.pinSet) {
      this.payError.set('Please set your UPI PIN first to send payments.'); return;
    }

    if (!this.receiverQuery.trim()) {
      this.payError.set('Enter receiver UPI ID or mobile number.'); return;
    }

    if (!this.lookupResult() || !this.lookupResult().valid) {
      this.payError.set('Receiver not verified. Please check the UPI ID or mobile number.'); return;
    }

    // Cannot pay yourself
    if (this.lookupResult().resolvedVpa === this.senderVpa) {
      this.payError.set('Cannot pay to your own UPI ID.'); return;
    }

    if (!this.payAmount || parseFloat(this.payAmount) <= 0) {
      this.payError.set('Enter a valid amount.'); return;
    }

    if (parseFloat(this.payAmount) > 100000) {
      this.payError.set('Maximum ₹1,00,000 per UPI transaction.'); return;
    }

    this.upiPin = '';
    this.payStep.set('confirm');
  }

  goToPin(): void {
    this.upiPin = '';
    this.payError.set('');
    this.payStep.set('pin');
  }

  submitPay(): void {
    if (!this.upiPin || this.upiPin.length < 4) {
      this.payError.set('Enter 4 or 6 digit UPI PIN.'); return;
    }

    this.payLoading.set(true);
    this.payError.set('');

    this.upiService.upiPay({
      senderVpa:   this.senderVpa,
      receiverVpa: this.receiverQuery.trim(), // send what user typed — backend resolves
      amount:      this.payAmount,
      upiPin:      this.upiPin,
      description: this.payNote,
    }).subscribe({
      next: (res: any) => {
        this.payLoading.set(false);
        if (res.success) {
          this.lastPayment.set(res.data);
          this.payStep.set('success');
          this.notificationService.show('Payment successful!', 'success');
          // Reload UPI IDs to update lastUsedAt
          this.loadUpiIds();
        } else {
          const msg = res.message || 'Payment failed.';
          this.payError.set(msg);
          this.notificationService.show(msg, 'danger');
          this.upiPin = '';
        }
      },
      error: (err: any) => {
        this.payLoading.set(false);
        const code = err.error?.errorCode || '';
        const msg  = err.error?.message   || 'Payment failed.';

        this.payError.set(msg);
        this.notificationService.show(msg, 'danger');
        this.upiPin = '';

        // Stay on pin screen for PIN errors
        if (['WRONG_PIN', 'PIN_LOCKED', 'INSUFFICIENT_BALANCE',
             'LIMIT_EXCEEDED', 'DAILY_LIMIT_EXCEEDED'].includes(code)) {
          this.payStep.set('pin');
        } else {
          this.payStep.set('form');
        }
      },
    });
  }

  startNewPay(): void {
    this.payStep.set('form');
    this.receiverQuery = '';
    this.payAmount     = '';
    this.payNote       = '';
    this.upiPin        = '';
    this.lookupResult.set(null);
    this.lookupError.set('');
    this.payError.set('');
    this.lastPayment.set(null);
  }

  // Numpad helpers
  numpadPress(n: string | number): void {
    if (n === '⌫') {
      this.upiPin = this.upiPin.slice(0, -1);
    } else if (this.upiPin.length < 6) {
      this.upiPin += String(n);
    }
  }

  // ─────────────────────────────────────────────
  //  PIN MANAGEMENT
  // ─────────────────────────────────────────────

  openSetPin(upi: any): void {
    this.pinAction.set('set');
    this.pinUpi.set(upi);
    this.pinOtp      = '';
    this.newPin      = '';
    this.confirmPin  = '';
    this.pinOtpSent.set(false);
    this.pinError.set('');
    this.pinSuccess.set('');
    this.pinResendCool.set(0);
  }

  openChangePin(upi: any): void {
    this.pinAction.set('change');
    this.pinUpi.set(upi);
    this.currentPin  = '';
    this.newPin      = '';
    this.confirmPin  = '';
    this.pinError.set('');
    this.pinSuccess.set('');
  }

  closePinModal(): void {
    this.pinAction.set('none');
    this.pinUpi.set(null);
    clearInterval(this.pinTimer);
  }

  sendPinOtp(): void {
    if (!this.pinUpi()) return;
    if (this.pinResendCool() > 0) {
      this.pinError.set(
        `Please wait ${this.pinResendCool()}s before resending.`
      );
      return;
    }

    this.pinOtpLoading.set(true);
    this.pinError.set('');
    this.pinSuccess.set('');

    this.upiService.sendUpiPinOtp(this.pinUpi().vpa).subscribe({
      next: (res: any) => {
        this.pinOtpLoading.set(false);
        if (res.success) {
          this.pinOtpSent.set(true);
          this.pinOtp = '';    // clear old OTP input
          this.pinSuccess.set('OTP sent to your registered email.');
          this.notificationService.show('OTP sent to your registered email.', 'info');
          setTimeout(() => this.pinSuccess.set(''), 4000);
          this.startPinTimer();
        } else {
          const msg = res.message || 'Failed to send OTP.';
          this.pinError.set(msg);
          this.notificationService.show(msg, 'danger');
        }
      },
      error: (err: any) => {
        this.pinOtpLoading.set(false);
        const code = err.error?.errorCode || '';
        if (code === 'OTP_RATE_LIMITED') {
          const msg = 'Too many OTP requests. Please wait 1 hour.';
          this.pinError.set(msg);
          this.notificationService.show(msg, 'warning');
        } else if (code === 'OTP_COOLDOWN') {
          const msg = err.error?.message || 'Please wait before resending.';
          this.pinError.set(msg);
          this.notificationService.show(msg, 'warning');
        } else {
          const msg = err.error?.message || 'Failed to send OTP.';
          this.pinError.set(msg);
          this.notificationService.show(msg, 'danger');
        }
      },
    });
  }

  private startPinTimer(): void {
    this.pinResendCool.set(60);
    clearInterval(this.pinTimer);
    this.pinTimer = setInterval(() => {
      this.pinResendCool.update(v => {
        if (v <= 1) { clearInterval(this.pinTimer); return 0; }
        return v - 1;
      });
    }, 1000);
  }

  setPin(): void {
    this.pinError.set('');

    if (!this.pinOtpSent()) {
      this.pinError.set('Please send OTP first.'); return;
    }
    if (!this.pinOtp || this.pinOtp.length !== 6) {
      this.pinError.set('Enter the 6-digit OTP from email.'); return;
    }
    if (!this.validatePinInput()) return;

    this.pinLoading.set(true);

    this.upiService.setUpiPin({
      vpa:        this.pinUpi().vpa,
      otp:        this.pinOtp,
      newPin:     this.newPin,
      confirmPin: this.confirmPin,
    }).subscribe({
      next: (res: any) => {
        this.pinLoading.set(false);
        if (res.success) {
          this.pinSuccess.set('✅ UPI PIN set successfully!');
          this.notificationService.show('UPI PIN set successfully!', 'success');
          this.loadUpiIds();
          setTimeout(() => { this.closePinModal(); }, 1500);
        } else {
          const msg = res.message || 'Failed.';
          this.pinError.set(msg);
          this.notificationService.show(msg, 'danger');
        }
      },
      error: (err: any) => {
        this.pinLoading.set(false);
        const code = err.error?.errorCode || '';
        const msg  = err.error?.message   || 'Failed to set PIN.';

        if (code === 'OTP_NOT_FOUND' || code === 'OTP_EXPIRED') {
          this.pinOtpSent.set(false);
          this.pinOtp = '';
          this.pinError.set('OTP expired. Please request a new OTP.');
          this.notificationService.show('OTP expired. Please request a new OTP.', 'warning');
        } else if (code === 'OTP_INVALID') {
          this.pinOtp = '';
          this.pinError.set(msg);
          this.notificationService.show(msg, 'danger');
        } else if (code === 'OTP_MAX_ATTEMPTS') {
          this.pinOtpSent.set(false);
          this.pinOtp = '';
          this.pinError.set('Too many wrong attempts. Request a new OTP.');
          this.notificationService.show('Too many wrong attempts. Request a new OTP.', 'warning');
        } else {
          this.pinError.set(msg);
          this.notificationService.show(msg, 'danger');
        }
      },
    });
  }

  changePin(): void {
    this.pinError.set('');
    if (!this.currentPin) { this.pinError.set('Enter current PIN.'); return; }
    if (!this.validatePinInput()) return;

    this.pinLoading.set(true);

    this.upiService.changeUpiPin({
      vpa:        this.pinUpi().vpa,
      currentPin: this.currentPin,
      newPin:     this.newPin,
      confirmPin: this.confirmPin,
    }).subscribe({
      next: (res: any) => {
        this.pinLoading.set(false);
        if (res.success) {
          this.pinSuccess.set('✅ UPI PIN changed!');
          this.notificationService.show('UPI PIN changed successfully!', 'success');
          setTimeout(() => this.closePinModal(), 1500);
        } else {
          const msg = res.message || 'Failed.';
          this.pinError.set(msg);
          this.notificationService.show(msg, 'danger');
        }
      },
      error: (err: any) => {
        this.pinLoading.set(false);
        this.currentPin = '';
        const msg = err.error?.message || 'Failed to change PIN.';
        this.pinError.set(msg);
        this.notificationService.show(msg, 'danger');
      },
    });
  }

  private validatePinInput(): boolean {
    if (!this.newPin) {
      this.pinError.set('Enter new PIN.'); return false;
    }
    if (!/^\d{4}$/.test(this.newPin) && !/^\d{6}$/.test(this.newPin)) {
      this.pinError.set('PIN must be exactly 4 or 6 digits.'); return false;
    }
    if (this.newPin !== this.confirmPin) {
      this.pinError.set('PINs do not match.'); return false;
    }
    return true;
  }

  // ─────────────────────────────────────────────
  //  UPI ID MANAGEMENT
  // ─────────────────────────────────────────────

  setPrimary(vpa: string): void {
    this.upiService.setPrimaryUpi(vpa).subscribe({
      next: (res: any) => {
        if (res.success) {
          const msg = 'Primary UPI ID updated to ' + vpa;
          this.success.set('✅ ' + msg);
          this.notificationService.show(msg, 'success');
          this.loadUpiIds();
          setTimeout(() => this.success.set(''), 3000);
        }
      },
      error: (err: any) => {
        const msg = err.error?.message || 'Failed.';
        this.error.set(msg);
        this.notificationService.show(msg, 'danger');
      },
    });
  }

  blockUpi(vpa: string): void {
    if (!confirm(`Block UPI ID: ${vpa}?\nYou will not be able to receive payments.`)) return;
    this.upiService.blockUpiId(vpa).subscribe({
      next: (res: any) => {
        if (res.success) {
          this.success.set('UPI ID blocked.');
          this.notificationService.show('UPI ID blocked.', 'warning');
          this.loadUpiIds();
        }
      },
      error: (err: any) => {
        const msg = err.error?.message || 'Failed.';
        this.error.set(msg);
        this.notificationService.show(msg, 'danger');
      },
    });
  }

  deleteUpi(vpa: string): void {
    if (!confirm(`Delete UPI ID: ${vpa}?\nThis cannot be undone.`)) return;
    this.upiService.deleteUpiId(vpa).subscribe({
      next: (res: any) => {
        if (res.success) {
          this.success.set('UPI ID deleted.');
          this.notificationService.show('UPI ID deleted.', 'info');
          this.loadUpiIds();
        }
      },
      error: (err: any) => {
        const msg = err.error?.message || 'Failed.';
        this.error.set(msg);
        this.notificationService.show(msg, 'danger');
      },
    });
  }

  // ─────────────────────────────────────────────
  //  LIMITS MODAL
  // ─────────────────────────────────────────────

  openLimits(upi: any): void {
    this.limitsUpi.set(upi);
    this.newDailyLimit  = String(upi.dailyLimit);
    this.newPerTxnLimit = String(upi.perTxnLimit);
    this.showLimitsModal.set(true);
  }

  // saveLimits(): void {
  //   if (!this.limitsUpi()) return;
  //   this.limitsLoading.set(true);

  //   this.upiService.updateUpiLimits(
  //     this.limitsUpi().vpa,
  //     parseInt(this.newDailyLimit)  || 100000,
  //     parseInt(this.newPerTxnLimit) || 100000

  //   ).subscribe({
  //     next: (res: any) => {
  //       this.limitsLoading.set(false);
  //       if (res.success) {
  //         this.success.set('✅ Limits updated.');
  //         this.notificationService.show('UPI limits updated.', 'success');
  //         this.showLimitsModal.set(false);
  //         this.loadUpiIds();
  //         setTimeout(() => this.success.set(''), 3000);
  //       }
  //     },
  //     error: (err: any) => {
  //       this.limitsLoading.set(false);
  //       const msg = err.error?.message || 'Failed.';
  //       this.error.set(msg);
  //       this.notificationService.show(msg, 'danger');
  //     },
  //   });
  // }

  // ─────────────────────────────────────────────
  //  HISTORY
  // ─────────────────────────────────────────────

  saveLimits(): void {
  if (!this.limitsUpi()) return;

  const daily = Number(this.newDailyLimit);
  const perTxn = Number(this.newPerTxnLimit);

  // 🔴 Validation rules
  if (!daily || daily < 1 || daily > 100000) {
    this.notificationService.show('Daily limit must be between ₹1 and ₹1,00,000', 'danger');
    return;
  }

  if (!perTxn || perTxn < 1 || perTxn > 100000) {
    this.notificationService.show('Per transaction limit must be between ₹1 and ₹1,00,000', 'danger');
    return;
  }

  // Optional but important rule
  if (perTxn > daily) {
    this.notificationService.show('Per transaction limit cannot exceed daily limit', 'danger');
    return;
  }

  // ✅ Proceed if valid
  this.limitsLoading.set(true);

  this.upiService.updateUpiLimits(
    this.limitsUpi().vpa,
    daily,
    perTxn
  ).subscribe({
    next: (res: any) => {
      this.limitsLoading.set(false);
      if (res.success) {
        this.success.set('✅ Limits updated.');
        this.notificationService.show('UPI limits updated.', 'success');
        this.showLimitsModal.set(false);
        this.loadUpiIds();
        setTimeout(() => this.success.set(''), 3000);
      }
    },
    error: (err: any) => {
      this.limitsLoading.set(false);
      const msg = err.error?.message || 'Failed.';
      this.error.set(msg);
      this.notificationService.show(msg, 'danger');
    },
  });
}


  loadHistory(): void {
    if (!this.historyVpa()) return;
    this.historyLoading.set(true);

    this.upiService
      .getUpiTransactions(this.historyVpa(), this.histPage(), 15)
      .subscribe({
        next: (res: any) => {
          this.historyLoading.set(false);
          if (res.success && res.data) {
            this.history.set(res.data.content);
            this.histTotalPages.set(res.data.totalPages);
            this.histTotalItems.set(res.data.totalElements);
          }
        },
        error: () => this.historyLoading.set(false),
      });
  }

  selectHistoryVpa(vpa: string): void {
    this.historyVpa.set(vpa);
    this.histPage.set(0);
    this.history.set([]);
    this.loadHistory();
  }

  histGoToPage(p: number): void {
    if (p < 0 || p >= this.histTotalPages()) return;
    this.histPage.set(p);
    this.loadHistory();
  }

  get histPageNumbers(): number[] {
    return Array.from({ length: this.histTotalPages() }, (_, i) => i);
  }

  // ─────────────────────────────────────────────
  //  HELPERS
  // ─────────────────────────────────────────────

  formatAmount(v: string | number): string {
    return '₹' + parseFloat(String(v || 0))
      .toLocaleString('en-IN', { minimumFractionDigits: 2 });
  }

  getPinStrength(pin: string): { width: number; cls: string; label: string } {
    if (!pin) return { width: 0, cls: '', label: '' };
    if (pin.length === 4) return { width: 50,  cls: 'str-fair',   label: 'Fair (4-digit)' };
    if (pin.length === 6) return { width: 100, cls: 'str-strong', label: 'Strong (6-digit)' };
    return { width: 20, cls: 'str-weak', label: 'Too short' };
  }

  get numpadKeys(): (number | string)[] {
    return [1,2,3,4,5,6,7,8,9,'','0','⌫'];
  }
}