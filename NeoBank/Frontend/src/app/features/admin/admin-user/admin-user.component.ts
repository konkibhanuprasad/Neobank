import {
  Component, Input, OnInit, OnChanges, OnDestroy,
  SimpleChanges, signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { UserService } from '../../../core/services/user.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector:    'app-admin-user',
  standalone:  true,
  imports:     [CommonModule, FormsModule],
  templateUrl: './admin-user.component.html',
  styleUrl:    './admin-user.component.css',
})
export class AdminUserComponent implements OnInit, OnChanges, OnDestroy {

  @Input() activeSubSection = 'users-all';

  users         = signal<any[]>([]);
  loading       = signal(false);
  error         = signal('');
  success       = signal('');
  searchQuery   = '';
  page          = signal(0);
  totalPages    = signal(0);
  totalElements = signal(0);  // total in DB matching current filter
  pageSize      = 10;

  // Modal
  selectedUser  = signal<any>(null);
  showModal     = signal(false);
  actionLoading = signal(false);
  newStatus     = '';
  statusReason  = '';

  private searchSubject = new Subject<string>();
  private destroy$      = new Subject<void>();

  constructor(
    private userService: UserService,
    private popup: NotificationService,
  ) {}

  ngOnInit(): void {
    this.loadUsers();

    this.searchSubject.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.page.set(0);
      this.loadUsers();
    });
  }

  ngOnChanges(c: SimpleChanges): void {
    if (c['activeSubSection'] && !c['activeSubSection'].firstChange) {
      this.page.set(0);
      this.searchQuery = '';
      this.loadUsers();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearchChange(value: string): void {
    this.searchQuery = value;
    this.searchSubject.next(value);
  }

  get statusFilter(): string | undefined {
    const m: Record<string, string> = {
      'users-active': 'ACTIVE',
      'users-locked': 'LOCKED',
    };
    return m[this.activeSubSection];
  }

  get sectionTitle(): string {
    const m: Record<string, string> = {
      'users-all':    'All Users',
      'users-active': 'Active Users',
      'users-locked': 'Locked Users',
    };
    return m[this.activeSubSection] ?? 'Users';
  }

  loadUsers(): void {
    this.loading.set(true);
    this.error.set('');
    this.userService.getAllUsers(
      this.statusFilter,
      this.page(),
      this.pageSize,
      this.searchQuery.trim() || undefined
    ).subscribe({
      next: (res: any) => {
        this.loading.set(false);
        if (res.success && res.data) {
          this.users.set(res.data.content);
          this.totalPages.set((res.data?.page?.totalPages ?? res.data?.totalPages ?? 0));
          this.totalElements.set((res.data?.page?.totalElements ?? res.data?.totalElements ?? 0));
        }
      },
      error: (err: any) => {
        this.loading.set(false);
        this.popup.show(err.error?.message || 'Failed to load users.', 'danger');
      },
    });
  }

  // Total elements = from server (all pages matching filter+search)
  // Showing = records on the current page only
  get showingCount(): number {
    return this.users().length;
  }

  goToPage(p: number): void {
    if (p < 0 || p >= this.totalPages()) return;
    this.page.set(p);
    this.loadUsers();
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages() }, (_, i) => i);
  }

  openModal(user: any): void {
    this.selectedUser.set(user);
    this.newStatus    = user.status;
    this.statusReason = '';
    this.showModal.set(true);
  }

  closeModal(): void {
    this.showModal.set(false);
    this.selectedUser.set(null);
    this.error.set('');
  }

  updateUserStatus(): void {
    if (!this.selectedUser()) return;
    this.actionLoading.set(true);
    this.error.set('');

    this.userService.updateUserStatus({
      userId: this.selectedUser().id,
      status: this.newStatus,
      reason: this.statusReason,
    }).subscribe({
      next: (res: any) => {
        this.actionLoading.set(false);
        if (res.success) {
          const msg = `User ${this.selectedUser().username} status updated to ${this.newStatus}`;
          this.success.set(msg);
          this.popup.show(msg, 'success');
          this.closeModal();
          this.loadUsers();
          setTimeout(() => this.success.set(''), 4000);
        } else {
          this.error.set(res.message || 'Update failed.');
          this.popup.show(res.message || 'Update failed.', 'danger');
        }
      },
      error: (err: any) => {
        this.actionLoading.set(false);
        const msg = err.error?.message || 'Update failed.';
        this.error.set(msg);
        this.popup.show(msg, 'danger');
      },
    });
  }

  unlockUser(user: any): void {
    this.userService.updateUserStatus({
      userId: user.id, status: 'ACTIVE', reason: 'Unlocked by admin',
    }).subscribe({
      next: (res: any) => {
        if (res.success) {
          const msg = `${user.username} unlocked.`;
          this.success.set(msg);
          this.popup.show(msg, 'success');
          this.loadUsers();
          setTimeout(() => this.success.set(''), 3000);
        } else {
          this.popup.show(res.message || 'Failed to unlock user.', 'danger');
        }
      },
      error: (err: any) => {
        this.popup.show(err.error?.message || 'Failed to unlock user.', 'danger');
      },
    });
  }

  getRoleBadgeClass(role: string): string {
    const m: Record<string, string> = {
      CUSTOMER: 'role-customer', ADMIN: 'role-admin',
      SUPER_ADMIN: 'role-super', MANAGER: 'role-manager',
    };
    return m[role] ?? 'role-customer';
  }

  getStatusClass(status: string): string {
    const m: Record<string, string> = {
      ACTIVE: 'st-active', INACTIVE: 'st-inactive',
      LOCKED: 'st-locked', SUSPENDED: 'st-suspended',
    };
    return m[status] ?? 'st-inactive';
  }
}