// customer-layout.component.ts

import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';
import { CustomerSidebarComponent } from '../customer-sidebar/customer-sidebar.component';
import { CustomerHeaderComponent } from '../customer-header/customer-header.component';
import { CustomerProfileComponent } from '../customer-profile/customer-profile.component';
import { CustomerAccountComponent } from '../customer-accounts/customer-account.component';
import { CustomerTransactionComponent } from '../customer-transaction/customer-transaction.component';
import { ApplicationService } from '../../../core/services/application.service';
import { AccountService } from '../../../core/services/account.service';

// ── Uncomment as you build:
import { CustomerApplyAccountComponent } from '../customer-apply-account/customer-apply-account.component';
import { CustomerApplicationStatusComponent } from '../customer-application-status/customer-application-status.component';


import { CustomerOpenAccountComponent } from '../customer-open-account/customer-open-account.component';
import { CustomerUpiComponent } from '../customer-upi/customer-upi.component';


import { CustomerBudgetComponent }  from '../customer-budget/customer-budget.component';
import { CustomerBillsComponent }   from '../customer-bills/customer-bills.component';
import { CustomerRewardsComponent } from '../customer-rewards/customer-rewards.component';

import { CustomerLoanComponent } from '../customer-loan/customer-loan.component';
import { CustomerCardComponent } from '../customer-card/customer-card.component';
import { CustomerInsights } from '../customer-insights/customer-insights/customer-insights';

interface StoredUser {
  userId:        number;
  username:      string;
  email:         string;
  fullName:      string | null;
  accountNumber: string | null;
  role:          string;
  token:         string;
}

@Component({
  selector:    'app-customer-layout',
  standalone:  true,
  imports: [
    CommonModule,
    CustomerSidebarComponent,
    CustomerHeaderComponent,
    CustomerProfileComponent,
    CustomerAccountComponent,
    CustomerTransactionComponent,
    CustomerApplyAccountComponent,
    CustomerApplicationStatusComponent,
    CustomerOpenAccountComponent,
    CustomerUpiComponent,
    CustomerInsights,


// Add to imports array:
CustomerBudgetComponent,
CustomerBillsComponent,
CustomerRewardsComponent,

CustomerLoanComponent,
CustomerCardComponent
  ],
  templateUrl: './customer-layout.component.html',
  styleUrl:    './customer-layout.component.css',
})
export class CustomerLayoutComponent implements OnInit {


  // ── User ──
  user = signal<StoredUser | null>(null);

  // ── Accounts ──
  accounts        = signal<any[]>([]);
  hasAccount      = signal(false);
  accountsLoading = signal(false);

  // ── UI ──
  sidebarOpen      = signal(false);
  sidebarCollapsed = signal(false);
  isDarkMode       = signal(false);
  currentSection   = signal('overview');
  error            = signal('');
  success          = signal('');
  isMobile         = signal(window.innerWidth < 1024);


  constructor(
    private themeService:       ThemeService,
    private router:             Router,
    private applicationService: ApplicationService,
    private accountService :    AccountService
  ) {}

  ngOnInit(): void {
    this.loadUser();
    this.isDarkMode.set(this.themeService.isDark());
    this.loadAccounts();

    if (window.innerWidth >= 1024) this.sidebarOpen.set(true);

    window.addEventListener('resize', () => {
      this.isMobile.set(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) this.sidebarOpen.set(true);
    });
  }

  loadUser(): void {
    try {
      const json = localStorage.getItem('user');
      if (json) this.user.set(JSON.parse(json));
    } catch (error: unknown) {}
  }

  // ── Load Accounts ──
  loadAccounts(): void {
    this.accountsLoading.set(true);
    this.accountService.getMyAccounts().subscribe({
      next: (res: any) => {
        this.accountsLoading.set(false);
        if (res.success && res.data) {
          this.accounts.set(res.data);
          this.hasAccount.set(res.data.length > 0);
          // If no account, default to no-account screen
          if (res.data.length === 0) {
            this.currentSection.set('no-account');
          }
        }
      },
      error: (error: unknown) => {
        this.accountsLoading.set(false);
        this.hasAccount.set(false);
      },
    });
  }

  // ── Sidebar ──
  toggleSidebar(): void {
    if (this.isMobile()) this.sidebarOpen.update(v => !v);
    else this.sidebarCollapsed.update(v => !v);
  }

  toggleSidebarOpenCollapsed(): void {
    if (this.sidebarCollapsed()) {
      this.sidebarCollapsed.set(false);
    }
  }

  closeSidebar(): void { this.sidebarOpen.set(false); }

  // ── Navigation ──
  onSectionSelected(sectionId: string): void {
    this.currentSection.set(sectionId);
    this.error.set('');
    this.success.set('');
  }

  onApplicationSubmitted(): void {
    this.success.set('Application submitted! We will review it within 2–3 business days.');
    this.currentSection.set('application-status');
  }

  // ── Theme ──
  cycleTheme(): void {
    this.themeService.cycle();
    this.isDarkMode.set(this.themeService.isDark());
  }

  // ── Profile shortcut ──
  goToProfile(): void { this.currentSection.set('profile-details'); }

  // ── Page Title ──
  getPageTitle(): string {
    const map: Record<string, string> = {
      'overview':              'Overview',
      'no-account':            'Get Started',
      'apply-account':         'Open Account',
      'application-status':    'Application Status',
      'accounts-summary':      'Account Summary',
      'accounts-savings':      'Savings Account',
      'accounts-statements':   'Statements',
      'transfer-upi':          'UPI Payment',
      'transfer-neft':         'NEFT / RTGS',
      'transfer-self':         'Self Transfer',
      'transactions':          'Transactions',
      'cards':                 'Cards',
      'loans':                 'Loan Management',
      'services-cheque':       'Cheque Book',
      'services-nominee':      'Nominee',
      'services-kyc':          'Update KYC',
      'profile-details':       'My Profile',
      'profile-password':      'Change Password',
      'open-account': 'Open Another Account',

      'upi':          'UPI Payments',
      'account-requests': 'Account Requests',

      'budget':  'Budget Planner',
      'bills':   'Bill Manager',
      'rewards': 'Reward Points',
    };
    return map[this.currentSection()] ?? 'Overview';
  }

  isDashboardSection(): boolean{
    return this.currentSection() === 'dashboard';
  }

  isInsightsSection(): boolean{
    return this.currentSection() === 'insights';
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    this.router.navigate(['/login']);
  }

  isDark():boolean{
    return this.themeService.isDark();
  }
}