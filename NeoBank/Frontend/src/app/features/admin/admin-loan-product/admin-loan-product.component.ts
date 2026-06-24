// admin-loan-product.component.ts

import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoanService } from '../../../core/services/loan.service';
import { NotificationService } from '../../../core/services/notification.service';

type Modal = 'none' | 'create' | 'edit';

@Component({
  selector:   'app-admin-loan-product',
  standalone: true,
  imports:    [CommonModule, FormsModule],
  templateUrl: './admin-loan-product.component.html',
  styleUrl:    './admin-loan-product.component.css',
})
export class AdminLoanProductComponent implements OnInit {

  // ── Layout alerts ──
  error   = signal('');
  success = signal('');

  products      = signal<any[]>([]);
  loading       = signal(false);
  modal         = signal<Modal>('none');
  selectedProd  = signal<any>(null);
  modalLoading  = signal(false);
  formError     = signal('');

  // ── Form fields ──
  f = {
    productName:          '',
    description:          '',
    loanType:             'PERSONAL',
    minAmount:            '',
    maxAmount:            '',
    annualInterestRate:   '',
    allowedTenures:       '',
    incomeProofRequired:  true,
    addressProofRequired: false,
    propertyDocRequired:  false,
    vehicleDocRequired:   false,
    bankStatementRequired:false,
    isActive:             true,
  };

  readonly loanTypes = [
    { value: 'HOME',      label: '🏠 Home' },
    { value: 'PERSONAL',  label: '💼 Personal' },
    { value: 'VEHICLE',   label: '🚗 Vehicle' },
    { value: 'EDUCATION', label: '🎓 Education' },
  ];

  readonly tenurePresets = [
    { label: 'Short (1–2 yr)',   value: '12,24' },
    { label: 'Medium (1–5 yr)',  value: '12,24,36,48,60' },
    { label: 'Long (Home)',      value: '60,84,120,180,240,300,360' },
    { label: 'Vehicle',          value: '12,24,36,48,60,72,84' },
    { label: 'Education',        value: '12,24,36,60,84,120,180' },
  ];

  constructor(
    private loanService: LoanService,
    private ns:          NotificationService,
  ) {}

  ngOnInit(): void { this.loadProducts(); }

  loadProducts(): void {
    this.loading.set(true);
    this.loanService.getAllProducts().subscribe({
      next: (res: any) => {
        this.loading.set(false);
        if (res.success) this.products.set(res.data || []);
      },
      error: () => {
        this.loading.set(false);
        this.ns.danger('Failed to load products.');
      },
    });
  }

  // ── Open Create ──
  openCreate(): void {
    this.f = {
      productName: '', description: '',
      loanType: 'PERSONAL',
      minAmount: '', maxAmount: '',
      annualInterestRate: '',
      allowedTenures: '12,24,36,48,60',
      incomeProofRequired: true,
      addressProofRequired: false,
      propertyDocRequired: false,
      vehicleDocRequired: false,
      bankStatementRequired: false,
      isActive: true,
    };
    this.formError.set('');
    this.modal.set('create');
  }

  // ── Open Edit ──
  openEdit(prod: any): void {
    this.selectedProd.set(prod);
    this.f = {
      productName:           prod.productName,
      description:           prod.description || '',
      loanType:              prod.loanType,
      minAmount:             prod.minAmount,
      maxAmount:             prod.maxAmount,
      annualInterestRate:    prod.annualInterestRate,
      allowedTenures:        prod.allowedTenures,
      incomeProofRequired:   prod.incomeProofRequired,
      addressProofRequired:  prod.addressProofRequired,
      propertyDocRequired:   prod.propertyDocRequired,
      vehicleDocRequired:    prod.vehicleDocRequired,
      bankStatementRequired: prod.bankStatementRequired,
      isActive:              prod.isActive,
    };
    this.formError.set('');
    this.modal.set('edit');
  }

  // ── Create ──
  createProduct(): void {
    this.formError.set('');
    if (!this.f.productName.trim()) {
      this.formError.set('Product name is required.'); return;
    }
    if (!this.f.minAmount || !this.f.maxAmount) {
      this.formError.set('Min and max amounts are required.'); return;
    }
    if (!this.f.annualInterestRate) {
      this.formError.set('Interest rate is required.'); return;
    }
    if (!this.f.allowedTenures.trim()) {
      this.formError.set('Allowed tenures are required.'); return;
    }

    this.modalLoading.set(true);
    this.loanService.createProduct({
      productName:          this.f.productName.trim(),
      description:          this.f.description,
      loanType:             this.f.loanType,
      minAmount:            this.f.minAmount,
      maxAmount:            this.f.maxAmount,
      annualInterestRate:   this.f.annualInterestRate,
      allowedTenures:       this.f.allowedTenures.trim(),
      incomeProofRequired:  this.f.incomeProofRequired,
      addressProofRequired: this.f.addressProofRequired,
      propertyDocRequired:  this.f.propertyDocRequired,
      vehicleDocRequired:   this.f.vehicleDocRequired,
      bankStatementRequired:this.f.bankStatementRequired,
    }).subscribe({
      next: (res: any) => {
        this.modalLoading.set(false);
        if (res.success) {
          this.modal.set('none');
          this.loadProducts();
          this.ns.success(`Product "${this.f.productName}" created!`);
          this.success.set('Loan product created successfully.');
          setTimeout(() => this.success.set(''), 4000);
        } else {
          this.formError.set(res.message || 'Failed.');
        }
      },
      error: (err: any) => {
        this.modalLoading.set(false);
        this.formError.set(err.error?.message || 'Failed to create product.');
      },
    });
  }

  // ── Update ──
  updateProduct(): void {
    this.formError.set('');
    this.modalLoading.set(true);

    this.loanService.updateProduct(this.selectedProd().id, {
      productName:          this.f.productName,
      description:          this.f.description,
      minAmount:            this.f.minAmount,
      maxAmount:            this.f.maxAmount,
      annualInterestRate:   this.f.annualInterestRate,
      allowedTenures:       this.f.allowedTenures,
      incomeProofRequired:  this.f.incomeProofRequired,
      addressProofRequired: this.f.addressProofRequired,
      propertyDocRequired:  this.f.propertyDocRequired,
      vehicleDocRequired:   this.f.vehicleDocRequired,
      bankStatementRequired:this.f.bankStatementRequired,
      isActive:             this.f.isActive,
    }).subscribe({
      next: (res: any) => {
        this.modalLoading.set(false);
        if (res.success) {
          this.modal.set('none');
          this.loadProducts();
          this.ns.success('Product updated!');
        } else {
          this.formError.set(res.message || 'Failed.');
        }
      },
      error: (err: any) => {
        this.modalLoading.set(false);
        this.formError.set(err.error?.message || 'Update failed.');
      },
    });
  }

  // ── Toggle active ──
  toggleActive(prod: any): void {
    this.loanService.updateProduct(prod.id,
      { isActive: !prod.isActive }
    ).subscribe({
      next: (res: any) => {
        if (res.success) {
          this.loadProducts();
          this.ns.success(
            `${prod.productName} ${!prod.isActive ? 'activated' : 'deactivated'}.`
          );
        }
      },
      error: () => this.ns.danger('Failed to update status.'),
    });
  }

  // ── Helpers ──
  formatAmount(v: string | number): string {
    if (!v) return '₹0';
    return '₹' + parseFloat(String(v))
      .toLocaleString('en-IN', { minimumFractionDigits: 0 });
  }

  getTenureCount(tenures: string): number {
    return tenures?.split(',').length ?? 0;
  }

  getLoanTypeIcon(type: string): string {
    return { HOME:'🏠', PERSONAL:'💼',
             VEHICLE:'🚗', EDUCATION:'🎓' }[type] ?? '🏦';
  }
}