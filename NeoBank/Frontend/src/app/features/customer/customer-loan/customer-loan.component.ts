FormsModule// src/app/features/customer/customer-loan/
//   customer-loan.component.ts

import {
  Component, Input, OnInit,
  OnDestroy, signal
} from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { LoanService }   from '../../../core/services/loan.service';
import {
  NotificationService
} from '../../../core/services/notification.service';

type Tab   = 'dashboard' | 'apply' | 'schedule' | 'history';
type Step  = 'product' | 'details' | 'docs' | 'review' | 'success';

@Component({
  selector:    'app-customer-loan',
  standalone:  true,
  imports:     [CommonModule, FormsModule],
  templateUrl: './customer-loan.component.html',
  styleUrl:    './customer-loan.component.css',
})
export class CustomerLoanComponent
    implements OnInit, OnDestroy {

  @Input() accounts: any[] = [];
  @Input() isDark = false;

  // ── Inline alerts ──
  error   = signal('');
  success = signal('');

  // ── Tab ──
  tab = signal<Tab>('dashboard');

  // ── Loans ──
  loans        = signal<any[]>([]);
  loansLoading = signal(false);

  // ── Apply Wizard ──
  step            = signal<Step>('product');
  products        = signal<any[]>([]);
  productsLoading = signal(false);
  selectedProduct = signal<any>(null);

  applyForm = {
    accountNumber:   '',
    principalAmount: '',
    tenureMonths:    12,
    purpose:         '',
  };

  // Documents
  incomeProof:   File | null = null;
  addressProof:  File | null = null;
  propertyDoc:   File | null = null;
  vehicleDoc:    File | null = null;
  bankStatement: File | null = null;

  applyLoading = signal(false);
  appliedLoan  = signal<any>(null);

  // ── EMI Calc ──
  calcPrincipal = '';
  calcRate      = '';
  calcTenure    = 12;
  calcResult    = signal<any>(null);
  calcLoading   = signal(false);

  // ── Schedule ──
  selectedLoan    = signal<any>(null);
  emiSchedule     = signal<any[]>([]);
  scheduleLoading = signal(false);

  // ── History ──
  historyFilter = 'ALL';

  // ── EMI Pay ──
  payingEmiId = signal<number | null>(null);

  // ── Foreclosure confirm ──
  showFcConfirm   = signal(false);
  fcLoan          = signal<any>(null);
  fcLoading       = signal(false);

  private calcTimeout: any;

  constructor(
    private loanService: LoanService,
    private popup:          NotificationService,
  ) {}

  ngOnInit(): void {
    if (this.accounts.length > 0) {
      this.applyForm.accountNumber =
          this.accounts[0].accountNumber;
    }
    this.loadLoans();
    this.loadProducts();
  }

  ngOnDestroy(): void {
    clearTimeout(this.calcTimeout);
  }

  // ══════════════════════════════════════════
  //  LOANS
  // ══════════════════════════════════════════

  loadLoans(): void {
    this.loansLoading.set(true);
    this.loanService.getMyLoans().subscribe({
      next: (res: any) => {
        this.loansLoading.set(false);
        if (res.success) this.loans.set(res.data ?? []);
      },
      error: () => {
        this.loansLoading.set(false);
        this.popup.danger('Failed to load loans.');
      },
    });
  }

  get activeLoans(): any[] {
    return this.loans().filter(l =>
      ['APPROVED','OVERDUE'].includes(l.status));
  }

  get totalOutstanding(): number {
    return this.activeLoans.reduce(
      (s, l) => s + parseFloat(l.outstandingBalance ?? '0'), 0);
  }

  get statCards() {
    return [
      {
        icon: '🏦', label: 'Total Loans',
        val: this.loans().length.toString(),
      },
      {
        icon: '✅', label: 'Active Loans',
        val: this.activeLoans.length.toString(),
      },
      {
        icon: '💰', label: 'Outstanding',
        val: this.fmt(this.totalOutstanding.toString()),
      },
      {
        icon: '⚠️', label: 'Overdue',
        val: this.loans().filter(
          l => l.status === 'OVERDUE').length.toString(),
      },
    ];
  }

  // ══════════════════════════════════════════
  //  PRODUCTS
  // ══════════════════════════════════════════

  loadProducts(): void {
    this.productsLoading.set(true);
    this.loanService.getActiveProducts().subscribe({
      next: (res: any) => {
        this.productsLoading.set(false);
        if (res.success) this.products.set(res.data ?? []);
      },
      error: () => {
        this.productsLoading.set(false);
      },
    });
  }

  selectProduct(p: any): void {
    this.selectedProduct.set(p);
    this.calcRate = p.annualInterestRate;
    const tenures = this.allowedTenures;
    if (!tenures.includes(this.applyForm.tenureMonths)) {
      this.applyForm.tenureMonths = tenures[0] ?? 12;
    }
    this.step.set('details');
    this.autoCalc();
  }

  get allowedTenures(): number[] {
    const p = this.selectedProduct();
    if (!p?.allowedTenures) return [12,24,36,60];
    return p.allowedTenures
      .split(',')
      .map((t: string) => parseInt(t.trim()))
      .filter((t: number) => !isNaN(t));
  }

  // ══════════════════════════════════════════
  //  EMI CALCULATOR
  // ══════════════════════════════════════════

  autoCalc(): void {
    clearTimeout(this.calcTimeout);
    this.calcTimeout = setTimeout(() => {
      this.runCalc();
    }, 400);
  }

  runCalc(): void {
    const principal = this.calcPrincipal ||
                      this.applyForm.principalAmount;
    const rate      = this.calcRate;
    const tenure    = this.calcTenure ||
                      this.applyForm.tenureMonths;

    if (!principal || !rate || !tenure) return;

    this.calcLoading.set(true);
    this.loanService.calculateEmi({
      principal:    principal,
      annualRate:   rate,
      tenureMonths: tenure,
    }).subscribe({
      next: (res: any) => {
        this.calcLoading.set(false);
        if (res.success) this.calcResult.set(res.data);
      },
      error: (err: any) => {
        this.calcLoading.set(false);
        const msg = err.error?.message ?? '';
        if (msg) {this.error.set(msg);this.popup.danger(msg)};
      },
    });
  }

  syncCalc(): void {
    this.calcPrincipal = this.applyForm.principalAmount;
    this.calcTenure    = this.applyForm.tenureMonths;
    const p = this.selectedProduct();
    if (p) this.calcRate = p.annualInterestRate;
    this.autoCalc();
  }

  principalPct(): number {
    const r = this.calcResult();
    if (!r) return 0;
    const p = parseFloat(r.principal);
    const t = parseFloat(r.totalPayable);
    return t > 0 ? Math.round((p / t) * 100) : 0;
  }

  interestPct(): number {
    return 100 - this.principalPct();
  }

  // ══════════════════════════════════════════
  //  APPLY WIZARD
  // ══════════════════════════════════════════

  goToDetails(): void {
    if (!this.selectedProduct()) {
      this.error.set('Please select a loan product first.');
      this.popup.warning( 'Please select a loan product first.');
      return;
    }
    this.error.set('');
    this.step.set('details');
  }

  goToDocs(): void {
    this.error.set('');
    const p = this.selectedProduct();
    const a = parseFloat(this.applyForm.principalAmount);

    if (!this.applyForm.principalAmount || isNaN(a) || a <= 0) {
      this.error.set('Enter a valid loan amount.'); 
      this.popup.warning( 'Enter a valid loan amount.'); 
      return;
    }
    if (p) {
      const min = parseFloat(p.minAmount);
      const max = parseFloat(p.maxAmount);
      if (a < min || a > max) {
        this.error.set(
          `Amount must be between ${this.fmt(p.minAmount)}` +
          ` and ${this.fmt(p.maxAmount)} for this product.`
        );
        this.popup.warning(
           `Amount must be between ${this.fmt(p.minAmount)}` +
          ` and ${this.fmt(p.maxAmount)} for this product.`
        );
        return;
      }
    }
    if (!this.applyForm.tenureMonths) {
      this.error.set('Select a tenure.');
      this.popup.warning('Select a tenure.');
      return;
    }
    if (!this.applyForm.accountNumber) {
      this.error.set('Select an account for EMI deduction.'); 
      this.popup.warning('Select an account for EMI deduction.');
      return;
    }
    this.syncCalc();
    this.step.set('docs');
  }

  goToReview(): void {
    this.error.set('');
    const p = this.selectedProduct();
    const need = (flag: boolean | undefined,
                  def: boolean) => flag ?? def;

    if (need(p?.incomeProofRequired, true) && !this.incomeProof) {
      this.error.set('Income proof is required.'); return;
    }
    if (need(p?.propertyDocRequired, false) && !this.propertyDoc) {
      this.error.set('Property document is required.'); return;
    }
    if (need(p?.vehicleDocRequired, false) && !this.vehicleDoc) {
      this.error.set('Vehicle document is required.'); return;
    }
    this.step.set('review');
  }

  onFileSelect(event: Event, field: string): void {
    const input = event.target as HTMLInputElement;
    const file  = input.files?.[0];
    if (!file) return;

    const allowed = [
      'application/pdf','image/jpeg','image/png'
    ];
    if (!allowed.includes(file.type)) {
      this.error.set('Only PDF, JPG or PNG allowed.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      this.error.set('File must be under 5MB.'); return;
    }
    (this as any)[field] = file;
    this.error.set('');
    this.popup.info(`${file.name} selected.`);
  }

  submitApplication(): void {
    this.error.set('');
    this.applyLoading.set(true);

    const p       = this.selectedProduct();
    const payload: any = {
      accountNumber:   this.applyForm.accountNumber,
      principalAmount: this.applyForm.principalAmount,
      tenureMonths:    this.applyForm.tenureMonths,
      purpose:         this.applyForm.purpose,
    };
    if (p)    payload.productId  = p.id;
    else      payload.loanType   = 'PERSONAL';

    const fd = new FormData();
    fd.append('data', new Blob(
      [JSON.stringify(payload)],
      { type: 'application/json' }
    ));
    if (this.incomeProof)
      fd.append('incomeProof',   this.incomeProof);
    if (this.addressProof)
      fd.append('addressProof',  this.addressProof);
    if (this.propertyDoc)
      fd.append('propertyDoc',   this.propertyDoc);
    if (this.vehicleDoc)
      fd.append('vehicleDoc',    this.vehicleDoc);
    if (this.bankStatement)
      fd.append('bankStatement', this.bankStatement);

    this.loanService.applyLoan(fd).subscribe({
      next: (res: any) => {
        this.applyLoading.set(false);
        if (res.success) {
          this.appliedLoan.set(res.data);
          this.step.set('success');
          this.loadLoans();
          this.popup.success('Loan application submitted!');
        } else {
          this.error.set(res.message ?? 'Failed.');
        }
      },
      error: (err: any) => {
        this.applyLoading.set(false);
        const code = err.error?.errorCode ?? '';
        if (code === 'PENDING_LOAN') {
          this.error.set(
            'You already have a loan under review.');
        } else if (code === 'AMOUNT_OUT_OF_RANGE') {
          this.error.set(err.error?.message ??
            'Amount out of range for this product.');
          this.step.set('details');
        } else if (code === 'TENURE_NOT_ALLOWED') {
          this.error.set(err.error?.message ??
            'Tenure not allowed for this product.');
          this.step.set('details');
        } else {
          this.error.set(
            err.error?.message ?? 'Application failed.');
        }
      },
    });
  }

  resetApply(): void {
    this.selectedProduct.set(null);
    this.applyForm = {
      accountNumber:
        this.accounts[0]?.accountNumber ?? '',
      principalAmount: '',
      tenureMonths:    12,
      purpose:         '',
    };
    this.incomeProof   = null;
    this.addressProof  = null;
    this.propertyDoc   = null;
    this.vehicleDoc    = null;
    this.bankStatement = null;
    this.calcResult.set(null);
    this.calcRate      = '';
    this.calcPrincipal = '';
    this.appliedLoan.set(null);
    this.error.set('');
    this.success.set('');
    this.step.set('product');
  }

  get requiredDocs(): {
    key: string; label: string;
    required: boolean; file: File | null;
  }[] {
    const p = this.selectedProduct();
    const docs = [
      {
        key: 'incomeProof',
        label: 'Income Proof (Salary slip / ITR)',
        required: p?.incomeProofRequired ?? true,
        file: this.incomeProof,
      },
      {
        key: 'addressProof',
        label: 'Address Proof (Aadhaar / Utility bill)',
        required: p?.addressProofRequired ?? false,
        file: this.addressProof,
      },
      {
        key: 'bankStatement',
        label: 'Bank Statement (Last 6 months)',
        required: p?.bankStatementRequired ?? false,
        file: this.bankStatement,
      },
    ];
    if (p?.propertyDocRequired) {
      docs.push({
        key: 'propertyDoc',
        label: 'Property Documents',
        required: true,
        file: this.propertyDoc,
      });
    }
    if (p?.vehicleDocRequired) {
      docs.push({
        key: 'vehicleDoc',
        label: 'Vehicle Quotation / RC Book',
        required: true,
        file: this.vehicleDoc,
      });
    }
    return docs;
  }

  // ══════════════════════════════════════════
  //  EMI SCHEDULE
  // ══════════════════════════════════════════

  viewSchedule(loan: any): void {
    this.selectedLoan.set(loan);
    this.tab.set('schedule');
    this.emiSchedule.set([]);
    this.scheduleLoading.set(true);
    this.loanService.getEmiSchedule(loan.loanId).subscribe({
      next: (res: any) => {
        this.scheduleLoading.set(false);
        if (res.success)
          this.emiSchedule.set(res.data ?? []);
      },
      error: () => {
        this.scheduleLoading.set(false);
        this.popup.danger('Failed to load EMI schedule.');
      },
    });
  }

  payEmi(loan: any, emi: any): void {
    if (!confirm(
      `Pay EMI #${emi.emiNumber}?\n` +
      `Amount: ${this.fmt(emi.emiAmount)}\n\n` +
      `This will deduct from account ` +
      `${loan.accountNumber}.`
    )) return;

    this.payingEmiId.set(emi.id);
    this.loanService.manualPayEmi(
        loan.loanId, emi.id).subscribe({
      next: (res: any) => {
        this.payingEmiId.set(null);
        if (res.success) {
          this.popup.success(
            `EMI #${emi.emiNumber} paid!`);
          this.viewSchedule(this.selectedLoan());
          this.loadLoans();
          this.success.set(
            `EMI #${emi.emiNumber} paid successfully.`);
          setTimeout(() => this.success.set(''), 4000);
        }
      },
      error: (err: any) => {
        this.payingEmiId.set(null);
        this.error.set(
          err.error?.message ?? 'Payment failed.');
        this.popup.danger( err.error?.message ?? 'Payment failed.');
      },
    });
  }

  // ══════════════════════════════════════════
  //  FORECLOSURE
  // ══════════════════════════════════════════

  openForeclosure(loan: any): void {
    this.fcLoan.set(loan);
    this.showFcConfirm.set(true);
    this.error.set('');
  }

  confirmForeclosure(): void {
    this.fcLoading.set(true);
    this.loanService
        .requestForeclosure(this.fcLoan().loanId)
        .subscribe({
      next: (res: any) => {
        this.fcLoading.set(false);
        this.showFcConfirm.set(false);
        if (res.success) {
          this.loadLoans();
          this.popup.success(
            'Foreclosure request submitted. ' +
            'Admin will review shortly.');
          this.success.set(
            'Foreclosure request submitted.');
          setTimeout(() => this.success.set(''), 5000);
        }
      },
      error: (err: any) => {
        this.fcLoading.set(false);
        const code = err.error?.errorCode ?? '';
        if (code === 'ALREADY_REQUESTED') {
          this.popup.warning(
            'Foreclosure already requested.');
        } else {
          this.error.set(
            err.error?.message ?? 'Failed.');
          this.popup.danger( err.error?.message ?? 'Failed.');
        }
        this.showFcConfirm.set(false);
      },
    });
  }

  // ══════════════════════════════════════════
  //  HELPERS
  // ══════════════════════════════════════════

  switchTab(t: Tab): void {
    this.tab.set(t);
    this.error.set('');
    this.success.set('');
  }

  // isStepDone(s: Step): boolean {
  //   const order: Step[] = [
  //     'product','details','docs','review','success'
  //   ];
  //   return order.indexOf(s) <
  //          order.indexOf(this.step());
  // }

  isStepDone(k: string): boolean {

  const order: Step[] = [
    'product',
    'details',
    'docs',
    'review',
    'success'
  ];

  return order.indexOf(k as Step) <
         order.indexOf(this.step());

}

  getProductIcon(type: string): string {
    const m: Record<string, string> = {
      HOME:'🏠', PERSONAL:'💼',
      VEHICLE:'🚗', EDUCATION:'🎓',
    };
    return m[type] ?? '🏦';
  }

  getProductColor(type: string): string {
    const m: Record<string, string> = {
      HOME:'#6366f1', PERSONAL:'#0d7377',
      VEHICLE:'#f59e0b', EDUCATION:'#ec4899',
    };
    return m[type] ?? '#6366f1';
  }

  getStatusClass(s: string): string {
    const m: Record<string, string> = {
      PENDING:'st-pending', APPROVED:'st-approved',
      REJECTED:'st-rejected', CLOSED:'st-closed',
      FORECLOSED:'st-closed', OVERDUE:'st-overdue',
    };
    return m[s] ?? 'st-pending';
  }

  getEmiClass(s: string): string {
    const m: Record<string, string> = {
      PENDING:'emi-pending', PAID:'emi-paid',
      OVERDUE:'emi-overdue', WAIVED:'emi-waived',
    };
    return m[s] ?? 'emi-pending';
  }

  progressPct(loan: any): number {
    if (!loan.emisPaid || !loan.totalEmis) return 0;
    return Math.min(
      Math.round((loan.emisPaid / loan.totalEmis) * 100),
      100);
  }

  fmt(v: string | number | null | undefined): string {
    if (v == null || v === '') return '₹0.00';
    const n = parseFloat(String(v));
    if (isNaN(n)) return '₹0.00';
    return '₹' + n.toLocaleString('en-IN',
      { minimumFractionDigits: 2 });
  }

  get filteredHistory(): any[] {
    if (this.historyFilter === 'ALL') return this.loans();
    return this.loans().filter(
      l => l.status === this.historyFilter);
  }

  parseFloat(v: string): number {
  return parseFloat(v || '0');
}
}