import {
  Component, Input, Output, EventEmitter,
  OnInit, OnChanges, OnDestroy, SimpleChanges, signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import {
  ApplicationService,
  ApplicationListItem,
  ApplicationDetail,
  ApproveRequest,
} from '../../../core/services/application.service';
import { NotificationService } from '../../../core/services/notification.service';

type ModalMode = 'none' | 'detail' | 'approve' | 'reject';

@Component({
  selector:    'app-admin-application',
  standalone:  true,
  imports:     [CommonModule, FormsModule],
  templateUrl: './admin-application.component.html',
  styleUrl:    './admin-application.component.css',
})
export class AdminApplicationComponent implements OnInit, OnChanges, OnDestroy {
  readonly Math = Math;

  @Input() activeSubSection = 'applications-all';
  @Output() pendingCountChange = new EventEmitter<number>();

  applications  = signal<ApplicationListItem[]>([]);
  loading       = signal(false);
  error         = signal('');
  success       = signal('');

  currentPage   = signal(0);
  totalPages    = signal(0);
  totalElements = signal(0);
  pageSize      = 10;

  searchQuery   = '';

  modalMode     = signal<ModalMode>('none');
  selectedApp   = signal<ApplicationDetail | null>(null);
  detailLoading = signal(false);

  approveLoading  = signal(false);
  rejectionReason = '';
  branchName      = 'Main Branch';
  branchCode      = '001';
  ifscCode        = 'NEOB0000001';

  activeDocTab = signal<string>('aadhaar');

  private searchSubject = new Subject<string>();
  private destroy$      = new Subject<void>();

  constructor(
    private applicationService: ApplicationService,
    private popup: NotificationService,
  ) {}

  ngOnInit(): void {
    this.loadApplications();

    this.searchSubject.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.currentPage.set(0);
      this.loadApplications();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['activeSubSection'] && !changes['activeSubSection'].firstChange) {
      this.currentPage.set(0);
      this.searchQuery = '';
      this.loadApplications();
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
    const map: Record<string, string> = {
      'applications-pending':  'SUBMITTED',
      'applications-approved': 'APPROVED',
      'applications-rejected': 'REJECTED',
    };
    return map[this.activeSubSection];
  }

  get sectionTitle(): string {
    const map: Record<string, string> = {
      'applications-all':      'All Applications',
      'applications-pending':  'Pending Review',
      'applications-approved': 'Approved',
      'applications-rejected': 'Rejected',
    };
    return map[this.activeSubSection] ?? 'Applications';
  }

  get sectionSubtitle(): string {
    const map: Record<string, string> = {
      'applications-all':      'View and manage all bank account applications',
      'applications-pending':  'Applications awaiting review and approval',
      'applications-approved': 'Successfully approved applications',
      'applications-rejected': 'Applications that were rejected',
    };
    return map[this.activeSubSection] ?? '';
  }

  loadApplications(): void {
    this.loading.set(true);
    this.error.set('');

    this.applicationService.getAllApplications(
      this.statusFilter,
      this.currentPage(),
      this.pageSize,
      this.searchQuery.trim() || undefined   // ← pass search
    ).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.success && res.data) {
          this.applications.set(res.data.content);
          this.totalPages.set((res.data?.page?.totalPages ?? 0));
          this.totalElements.set((res.data?.page?.totalElements ?? 0));

          if (this.activeSubSection === 'applications-pending') {
            this.pendingCountChange.emit((res.data?.page?.totalElements ?? 0));
          }
        } else {
          this.error.set(res.message || 'Failed to load applications.');
          this.popup.show(res.message || 'Failed to load applications.', 'danger');
        }
      },
      error: (err) => {
        this.loading.set(false);
        const msg = err.error?.message || 'Failed to load. Please try again.';
        this.error.set(msg);
        this.popup.show(msg, 'danger');
      },
    });
  }

  goToPage(page: number): void {
    if (page < 0 || page >= this.totalPages()) return;
    this.currentPage.set(page);
    this.loadApplications();
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages() }, (_, i) => i);
  }

  // ── removed filteredApplications getter — server handles it now ──

  viewApplication(applicationId: string): void {
    this.detailLoading.set(true);
    this.modalMode.set('detail');
    this.selectedApp.set(null);
    this.activeDocTab.set('aadhaar');

    this.applicationService.getApplicationDetail(applicationId).subscribe({
      next: (res) => {
        this.detailLoading.set(false);
        if (res.success && res.data) {
          this.selectedApp.set(res.data);
        } else {
          const msg = res.message || 'Failed to load details.';
          this.error.set(msg);
          this.popup.show(msg, 'danger');
          this.modalMode.set('none');
        }
      },
      error: (err) => {
        this.detailLoading.set(false);
        const msg = err.error?.message || 'Failed to load details.';
        this.error.set(msg);
        this.popup.show(msg, 'danger');
        this.modalMode.set('none');
      },
    });
  }

  openApproveModal(): void { this.modalMode.set('approve'); }

  confirmApprove(): void {
    if (!this.selectedApp()) return;
    this.approveLoading.set(true);
    this.error.set('');

    const req: ApproveRequest = {
      applicationId: this.selectedApp()!.applicationId,
      action:        'APPROVE',
      branchName:    this.branchName,
      branchCode:    this.branchCode,
      ifscCode:      this.ifscCode,
    };

    this.applicationService.approveApplication(req).subscribe({
      next: (res) => {
        this.approveLoading.set(false);
        if (res.success) {
          const msg = `✅ Application approved! Account: ${res.data?.accountNumber}`;
          this.success.set(msg);
          this.popup.show(`Application approved! Account: ${res.data?.accountNumber}`, 'success');
          this.closeModal();
          this.loadApplications();
          setTimeout(() => this.success.set(''), 5000);
        } else {
          this.error.set(res.message || 'Approval failed.');
          this.popup.show(res.message || 'Approval failed.', 'danger');
          this.modalMode.set('detail');
        }
      },
      error: (err) => {
        this.approveLoading.set(false);
        const msg = err.error?.message || 'Approval failed.';
        this.error.set(msg);
        this.popup.show(msg, 'danger');
        this.modalMode.set('detail');
      },
    });
  }

  openRejectModal(): void { this.rejectionReason = ''; this.modalMode.set('reject'); }

  confirmReject(): void {
    if (!this.rejectionReason.trim()) {
      this.error.set('Please provide a rejection reason.');
      this.popup.show('Please provide a rejection reason.', 'warning');
      return;
    }
    if (!this.selectedApp()) return;
    this.approveLoading.set(true);
    this.error.set('');

    const req: ApproveRequest = {
      applicationId:   this.selectedApp()!.applicationId,
      action:          'REJECT',
      rejectionReason: this.rejectionReason.trim(),
    };

    this.applicationService.approveApplication(req).subscribe({
      next: (res) => {
        this.approveLoading.set(false);
        if (res.success) {
          this.success.set('❌ Application rejected successfully.');
          this.popup.show('Application rejected successfully.', 'info');
          this.closeModal();
          this.loadApplications();
          setTimeout(() => this.success.set(''), 4000);
        } else {
          this.error.set(res.message || 'Rejection failed.');
          this.popup.show(res.message || 'Rejection failed.', 'danger');
          this.modalMode.set('reject');
        }
      },
      error: (err) => {
        this.approveLoading.set(false);
        const msg = err.error?.message || 'Rejection failed.';
        this.error.set(msg);
        this.popup.show(msg, 'danger');
      },
    });
  }

  closeModal():   void { this.modalMode.set('none'); this.selectedApp.set(null); this.error.set(''); }
  backToDetail(): void { this.modalMode.set('detail'); this.error.set(''); }

  getDocumentUrl(base64: string | null, type: string | null): string {
    if (!base64 || !type) return '';
    return `data:${type};base64,${base64}`;
  }

  isPdf(type: string | null): boolean { return type === 'application/pdf'; }

  docTabs = [
    { id: 'aadhaar',  label: 'Aadhaar'      },
    { id: 'pan',      label: 'PAN Card'      },
    { id: 'photo',    label: 'Photo'         },
    { id: 'sign',     label: 'Signature'     },
    { id: 'address',  label: 'Address Proof' },
    { id: 'passport', label: 'Passport'      },
    { id: 'voter',    label: 'Voter ID'      },
  ];

  getDocForTab(tab: string): { base64: string | null; type: string | null; label: string } {
    const app = this.selectedApp();
    if (!app) return { base64: null, type: null, label: '' };
    const map: Record<string, { base64: string | null; type: string | null; label: string }> = {
      aadhaar:  { base64: app.aadhaarCardFileBase64,      type: app.aadhaarCardFileType,      label: 'Aadhaar Card'   },
      pan:      { base64: app.panCardFileBase64,          type: app.panCardFileType,          label: 'PAN Card'       },
      photo:    { base64: app.profilePhotoBase64,         type: app.profilePhotoType,         label: 'Profile Photo'  },
      sign:     { base64: app.signatureImageBase64,       type: app.signatureImageType,       label: 'Signature'      },
      address:  { base64: app.addressProofDocumentBase64, type: app.addressProofDocumentType, label: 'Address Proof'  },
      passport: { base64: app.passportFileBase64 ?? null, type: app.passportFileType ?? null, label: 'Passport'       },
      voter:    { base64: app.voterIdFileBase64 ?? null,  type: app.voterIdFileType ?? null,  label: 'Voter ID'       },
    };
    return map[tab] ?? { base64: null, type: null, label: '' };
  }

  statusClass(status: string): string {
    const map: Record<string, string> = {
      SUBMITTED: 'badge-blue', APPROVED: 'badge-green',
      REJECTED: 'badge-red',   PENDING: 'badge-yellow',
    };
    return map[status] ?? 'badge-gray';
  }

  statusIcon(status: string): string {
    const map: Record<string, string> = {
      SUBMITTED: '📋', APPROVED: '✅', REJECTED: '❌', PENDING: '⏳',
    };
    return map[status] ?? '📄';
  }

  canApprove(): boolean { return this.selectedApp()?.status === 'SUBMITTED'; }
  canReject():  boolean { return this.selectedApp()?.status === 'SUBMITTED'; }
}