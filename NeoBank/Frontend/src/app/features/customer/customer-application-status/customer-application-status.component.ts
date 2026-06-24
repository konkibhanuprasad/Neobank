// customer-application-status.component.ts

import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApplicationService } from '../../../core/services/application.service';
import { NotificationService } from '../../../core/services/notification.service';
type StatusStep = 'input' | 'otp' | 'result';

@Component({
  selector:    'app-customer-application-status',
  standalone:  true,
  imports:     [CommonModule, FormsModule],
  templateUrl: './customer-application-status.component.html',
  styleUrl:    './customer-application-status.component.css',
})
export class CustomerApplicationStatusComponent implements OnInit {

  @Input() user: any = null;

  statusStep = signal<StatusStep>('input');
  loading    = signal(false);
  error      = signal('');
  success    = signal('');

  searchQuery = '';
  statusOtp   = '';
  result      = signal<unknown>(null);

  resendCooldown = signal(0);
  private timer: number | undefined;

  constructor(private applicationService: ApplicationService,private notificationService:NotificationService) {}

  ngOnInit(): void {
    // Pre-fill email from logged-in user
    if (this.user?.email) {
      this.searchQuery = this.user.email;
    }
  }

  // ── Step 1: Send OTP ──
  sendOtp(): void {
    if (!this.searchQuery.trim()) {
      this.error.set('Please enter Application ID or registered Email.'); return;
    }
    this.loading.set(true);
    this.error.set('');

    this.applicationService.sendStatusOtp(this.searchQuery.trim()).subscribe({
      next: (res: unknown) => {
        this.loading.set(false);
        const resData = res as any;
        if (resData.success) {
          this.statusStep.set('otp');
          this.success.set('OTP sent to your registered email.');
          this.startTimer();
        } else {
          this.error.set(resData.message || 'Failed to send OTP.');
        }
      },
      error: (err: unknown) => {
        this.loading.set(false);
        const errData = err as any;
        this.error.set(errData.error?.message || 'Failed to send OTP. Please try again.');
        this.notificationService.show(errData.error?.message || 'Failed to send OTP. Please try again.','danger');
      },
    });
  }

  // ── Step 2: Verify OTP ──
  verifyOtp(): void {
    if (!this.statusOtp || this.statusOtp.length !== 6) {
      this.error.set('Enter valid 6-digit OTP.'); return;
    }
    this.loading.set(true);
    this.error.set('');

    this.applicationService.verifyStatusOtp(this.searchQuery.trim(), this.statusOtp).subscribe({
      next: (res: unknown) => {
        this.loading.set(false);
        const resData = res as any;
        if (resData.success && resData.data) {
          this.result.set(resData.data);
          this.statusStep.set('result');
          clearInterval(this.timer);
        } else {
          this.error.set(resData.message || 'Verification failed.');
          this.notificationService.show(resData.message || 'Verification failed.','danger');
        }
      },
      error: (err: unknown) => {
        this.loading.set(false);
        const errData = err as any;
        const code = errData.error?.errorCode || '';
        if (code.includes('OTP')) {
          this.error.set(errData.error?.message || 'Invalid OTP.');
        } else {
          this.error.set(errData.error?.message || 'Verification failed.');
        }
      },
    });
  }

  resendOtp(): void {
    if (this.resendCooldown() > 0) return;
    this.statusOtp = '';
    this.error.set('');
    this.sendOtp();
  }

  goBackToInput(): void {
    this.statusStep.set('input');
    this.error.set('');
    this.success.set('');
    this.statusOtp = '';
  }

  private startTimer(): void {
    this.resendCooldown.set(60);
    clearInterval(this.timer);
    this.timer = window.setInterval(() => {
      this.resendCooldown.update(v => {
        if (v <= 1) { clearInterval(this.timer); return 0; }
        return v - 1;
      });
    }, 1000);
  }

  getStatusClass(status: string): string {
    const m: Record<string, string> = {
      PENDING: 'st-pending', SUBMITTED: 'st-blue',
      APPROVED: 'st-green',  REJECTED: 'st-red',
    };
    return m[status] ?? 'st-pending';
  }

  getStatusIcon(status: string): string {
    const m: Record<string, string> = {
      PENDING: '🕐', SUBMITTED: '📋', APPROVED: '✅', REJECTED: '❌',
    };
    return m[status] ?? '📋';
  }

  getStatusMessage(status: string): string {
    const m: Record<string, string> = {
      PENDING:   'OTP not verified. Application incomplete.',
      SUBMITTED: 'Under review — expected 2–3 business days.',
      APPROVED:  'Congratulations! Your account has been activated.',
      REJECTED:  'Application was not approved. You may apply again.',
    };
    return m[status] ?? '';
  }
}