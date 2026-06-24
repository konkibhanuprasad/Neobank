import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { AdminApplicationComponent } from '../admin-application/admin-application.component';
import { AdminUserComponent } from '../admin-user/admin-user.component';
import { AdminAccountComponent } from '../admin-accounts/admin-accounts.component';
import { AdminTransactionComponent } from '../admin-transactions/admin-transactions.component';
import { AdminProfileComponent } from '../admin-profile/admin-profile.component';
import { AdminAccountRequestComponent } from '../admin-account-request/admin-account-request.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { NotificationService } from '../../../core/services/notification.service';
import { ProfileService } from '../../../core/services/profile.service';
import { AdminLoanComponent } from '../admin-loan/admin-loan.component';
import { AdminTreasuryComponent } from '../admin-treasury/admin-treasury.component';
import { AdminCardComponent } from '../admin-card/admin-card.component';
import { AdminLoanProductComponent } from '../admin-loan-product/admin-loan-product.component';
import { AdminAnalytics } from '../admin-analytics/admin-analytics';
import { SystemLogs } from '../../system-logs/system-logs';
import { AdminManagementComponent } from '../admin-management/admin-management.component'; // ✅ FIX: Added import

interface StoredUser {
  userId:   number;
  username: string;
  email:    string;
  fullName: string | null;
  role:     string;
  token:    string;
}

@Component({
  selector:    'app-admin-layout',
  standalone:  true,
  imports: [
    CommonModule,
    AdminSidebarComponent,
    AdminHeaderComponent,
    AdminAccountRequestComponent,
    AdminApplicationComponent,
    AdminUserComponent,
    AdminAccountComponent,
    AdminTransactionComponent,
    AdminProfileComponent,
    AdminDashboardComponent,
    AdminLoanComponent,
    AdminLoanProductComponent,
    AdminTreasuryComponent,
    AdminCardComponent,
    AdminAnalytics,
    SystemLogs,
    AdminManagementComponent // ✅ FIX: Added to imports
  ],
  templateUrl: './admin-layout.component.html',
  styleUrl:    './admin-layout.component.css',
})
export class AdminLayoutComponent implements OnInit {

  adminUser        = signal<StoredUser | null>(null);
  sidebarOpen      = signal(true);
  sidebarCollapsed = signal(false);
  currentSection   = signal('dashboard');
  error            = signal('');
  success          = signal('');
  pendingCount     = signal(0);
  isMobile         = signal(window.innerWidth < 1024);
  dashboardStats   = signal<unknown>(null);
  statsLoading     = signal(false);

  // ✅ computed from ThemeService signal — reactive, no manual sync needed
  isDarkMode = computed(() => this.themeService.darkMode());

  // Add to admin-layout.component.ts class:
  loanSubTab: 'applications' | 'products' = 'applications';

  constructor(
    private themeService: ThemeService,
    private router: Router,
    private popup: NotificationService,
    private profileService: ProfileService,
  ) {}

  ngOnInit(): void {
    this.loadUser();
    if (window.innerWidth >= 1024) this.sidebarOpen.set(true);
    window.addEventListener('resize', () => {
      this.isMobile.set(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) this.sidebarOpen.set(true);
    });
  }

  private loadUser(): void {
    try {
      const json = localStorage.getItem('user');
      if (json) this.adminUser.set(JSON.parse(json));
    } catch (error: unknown) {
      // Silently fail if localStorage parsing fails
    }
  }

  toggleSidebar(): void {
    if (this.isMobile()) this.sidebarOpen.update(v => !v);
    else this.sidebarCollapsed.update(v => !v);
  }

  toggleSidebarOpenCollapsed(): void {
    if (this.sidebarCollapsed()) this.sidebarCollapsed.update(v => !v);
  }

  closeSidebar(): void { this.sidebarOpen.set(false); }

  onSectionSelected(sectionId: string): void {
    this.currentSection.set(sectionId);
    this.error.set('');
    this.success.set('');
  }

  // ✅ kept for sidebar usage if needed, but header no longer needs it
  cycleTheme(): void {
    this.themeService.cycle();
  }

  getPageTitle(): string {
    const map: Record<string, string> = {
      'dashboard':              'Dashboard',
      'applications-all':      'All Applications',
      'applications-pending':  'Pending Review',
      'applications-approved': 'Approved Applications',
      'applications-rejected': 'Rejected Applications',
      'users-all':             'All Users',
      'users-active':          'Active Users',
      'users-locked':          'Locked Users',
      'accounts-all':          'All Accounts',
      'accounts-active':       'Active Accounts',
      'accounts-frozen':       'Frozen Accounts',
      'transactions':          'Transactions',
      'analytics':             'Analytics',
      'management-admins':     'Manage Admins',
      'management-settings':   'Settings',
      'account-requests':      'Open Account Requests',

      'treasury':              'Treasury Management',
      'cards':                 'Card Management',
      'system-logs':           'System Audit Logs',
    };
    return map[this.currentSection()] ?? 'Dashboard';
  }

  isApplicationSection():    boolean { return this.currentSection().startsWith('applications'); }
  isUsersSection():          boolean { return this.currentSection().startsWith('users'); }
  isAccountsSection():       boolean { return this.currentSection().startsWith('accounts'); }
  isTransactionSection():    boolean { return this.currentSection() === 'transactions'; }
  isProfileSection():        boolean { return this.currentSection().startsWith('admin-profile'); }
  isAccountRequestSection(): boolean { return this.currentSection().startsWith('account-requests'); }
  isSystemLogsSection():     boolean { return this.currentSection() === 'system-logs'; }
  
  // ✅ FIX: Added management section detection methods
  isManagementAdminsSection(): boolean { return this.currentSection() === 'management-admins'; }
  isManagementSettingsSection(): boolean { return this.currentSection() === 'management-settings'; }

  logout(): void {
    this.popup.show('Logout Successful!');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  onProfileUpdated(): void {
    this.profileService.getMyProfile().subscribe({
      next: (res: unknown) => {
        const resData = res as any;
        if (resData.success) {
          const currentUser = this.adminUser();
          if (!currentUser) return;
          const updated: StoredUser = {
            ...currentUser,
            fullName: resData.data.fullName ?? currentUser.fullName,
            email:    resData.data.email    ?? currentUser.email,
          };
          localStorage.setItem('user', JSON.stringify(updated));
          this.adminUser.set(updated);
        }
      },
      error: (err: unknown) => console.error('Failed to refresh profile', err),
    });
  }
}