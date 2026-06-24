// customer-profile.component.ts

import {
  Component, Input, Output, EventEmitter,
  OnInit, OnChanges, SimpleChanges, signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileService, UpdateProfilePayload } from '../../../core/services/profile.service';
import { AuthService } from '../../../core/services/auth.service';
import { NotificationService } from '../../../core/services/notification.service';

type ProfileTab = 'view' | 'edit' | 'photo' | 'email' | 'password';

@Component({
  selector:    'app-customer-profile',
  standalone:  true,
  imports:     [CommonModule, FormsModule],
  templateUrl: './customer-profile.component.html',
  styleUrl:    './customer-profile.component.css',
})
export class CustomerProfileComponent implements OnInit, OnChanges {

  @Input()  activeSubSection = 'profile-details';
  @Input()  user: any         = null;
  @Output() profileUpdated   = new EventEmitter<any>();

  profile     = signal<any>(null);
  loading     = signal(false);
  activeTab   = signal<ProfileTab>('view');

  // ── Edit Form ──
  editForm = {
    fullName: '', phone: '', dateOfBirth: '',
    gender: '', addressLine: '', city: '', state: '', pincode: '',
  };
  editLoading = signal(false);
  editError   = signal('');

  // ── Photo ──
  selectedPhoto  : File | null = null;
  photoPreview     = signal<string | null>(null);
  photoLoading     = signal(false);
  photoError       = signal('');

  // ── Email ──
  newEmail             = '';
  emailOtp             = '';
  emailOtpSent         = signal(false);
  emailOtpLoading      = signal(false);
  emailVerifyLoading   = signal(false);
  emailError           = signal('');
  emailSuccess         = signal('');
  emailCooldown        = signal(0);
  private emailTimer: number | undefined;

  // ── Password ──
  currentPassword = '';
  newPassword     = '';
  confirmPassword = '';
  showCurrent     = signal(false);
  showNew         = signal(false);
  showConfirm     = signal(false);
  pwLoading       = signal(false);
  pwError         = signal('');
  pwSuccess       = signal('');

  readonly indianStates = [
    'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh',
    'Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka',
    'Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya',
    'Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim',
    'Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand',
    'West Bengal','Delhi','Jammu & Kashmir','Ladakh',
  ];

  readonly maxDob = new Date(
    new Date().setFullYear(new Date().getFullYear() - 18)
  ).toISOString().split('T')[0];

  constructor(
    private profileService: ProfileService,
    private authService:    AuthService,
    private ns:             NotificationService,
  ) {}

  ngOnInit(): void { this.loadProfile(); }

  ngOnChanges(c: SimpleChanges): void {
    if (this.activeSubSection === 'profile-password') {
      this.activeTab.set('password');
    } else {
      this.activeTab.set('view');
    }
  }

  // ─────────────────────────────────────────────
  //  LOAD PROFILE
  // ─────────────────────────────────────────────

  loadProfile(): void {
    this.loading.set(true);
    this.profileService.getMyProfile().subscribe({
      next: (res: any) => {
        this.loading.set(false);
        if (res.success) {
          this.profile.set(res.data);
          this.prefillEditForm(res.data);
        }
      },
      error: () => {
        this.loading.set(false);
        this.ns.danger('Failed to load profile.');
      },
    });
  }

  private prefillEditForm(data: any): void {
    this.editForm = {
      fullName:    data.fullName    || '',
      phone:       data.phone       || '',
      dateOfBirth: data.dateOfBirth
        ? this.toInputDate(data.dateOfBirth) : '',
      gender:      data.gender      || '',
      addressLine: data.addressLine || '',
      city:        data.city        || '',
      state:       data.state       || '',
      pincode:     data.pincode     || '',
    };
    if (data.profilePhotoBase64) {
      this.photoPreview.set(
        `data:${data.profilePhotoType};base64,${data.profilePhotoBase64}`
      );
    }
  }

  // ─────────────────────────────────────────────
  //  UPDATE PROFILE — SKIP IF SAME
  // ─────────────────────────────────────────────

  saveProfile(): void {
    this.editError.set('');
    const current = this.profile();
    const payload: UpdateProfilePayload = {};

    if (this.editForm.fullName.trim() &&
        this.editForm.fullName.trim() !== (current?.fullName || '')) {
      payload.fullName = this.editForm.fullName.trim();
    }

    if (this.editForm.phone &&
        this.editForm.phone !== (current?.phone || '')) {
      if (!/^[6-9]\d{9}$/.test(this.editForm.phone)) {
        this.editError.set('Enter valid 10-digit mobile number.');
        this.ns.danger('Enter valid 10-digit mobile number.');
        return;
      }
      payload.phone = this.editForm.phone;
    }

    if (this.editForm.dateOfBirth &&
        this.toDisplayDate(this.editForm.dateOfBirth) !== (current?.dateOfBirth || '')) {
      payload.dateOfBirth = this.editForm.dateOfBirth;
    }

    if (this.editForm.gender &&
        this.editForm.gender !== (current?.gender || '')) {
      payload.gender = this.editForm.gender;
    }

    if (this.editForm.addressLine.trim() !== (current?.addressLine || '')) {
      payload.addressLine = this.editForm.addressLine.trim();
    }

    if (this.editForm.city.trim() !== (current?.city || '')) {
      payload.city = this.editForm.city.trim();
    }

    if (this.editForm.state !== (current?.state || '')) {
      payload.state = this.editForm.state;
    }

    if (this.editForm.pincode &&
        this.editForm.pincode !== (current?.pincode || '')) {
      if (!/^\d{6}$/.test(this.editForm.pincode)) {
        this.editError.set('Pincode must be 6 digits.');
        this.ns.danger('Pincode must be 6 digits.');
        return;
      }
      payload.pincode = this.editForm.pincode;
    }

    if (Object.keys(payload).length === 0) {
      this.ns.info('No changes detected. Profile is already up to date.');
      this.activeTab.set('view');
      return;
    }

    this.editLoading.set(true);

    this.profileService.updateProfile(payload).subscribe({
      next: (res: unknown) => {
        this.editLoading.set(false);
        const resData = res as any;
        if (resData.success) {
          this.profile.set(resData.data);
          this.prefillEditForm(resData.data);
          this.editError.set('');
          this.activeTab.set('view');
          this.updateLocalStorage(resData.data);
          this.profileUpdated.emit(resData.data);
          const changed = Object.keys(payload).join(', ');
          this.ns.success(`Profile updated: ${this.humanizeKeys(changed)}`);
        } else {
          this.editError.set(resData.message || 'Update failed.');
          this.ns.danger(resData.message || 'Update failed.');
        }
      },
      error: (err: unknown) => {
        this.editLoading.set(false);
        const errData = err as any;
        const code = errData.error?.errorCode || '';
        if (code === 'PHONE_EXISTS') {
          const msg = 'This mobile number is already registered to another account.';
          this.editError.set(msg);
          this.ns.danger(msg);
        } else {
          const msg = errData.error?.message || 'Update failed.';
          this.editError.set(msg);
          this.ns.danger(msg);
        }
      },
    });
  }

  // ─────────────────────────────────────────────
  //  PROFILE PHOTO
  // ─────────────────────────────────────────────

  onPhotoSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.[0]) return;
    const file = input.files[0];

    if (!['image/jpeg','image/png'].includes(file.type)) {
      this.photoError.set('Only JPG or PNG images are allowed.');
      this.ns.danger('Only JPG or PNG images are allowed.');
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      this.photoError.set('Photo must be under 2MB.');
      this.ns.danger('Photo must be under 2MB.');
      return;
    }

    this.photoError.set('');
    this.selectedPhoto = file;
    const reader = new FileReader();
    reader.onload = e => this.photoPreview.set(e.target?.result as string);
    reader.readAsDataURL(file);
  }

  uploadPhoto(): void {
    if (!this.selectedPhoto) {
      this.photoError.set('Please select a photo first.');
      this.ns.warning('Please select a photo first.');
      return;
    }
    this.photoLoading.set(true);
    this.photoError.set('');

    this.profileService.uploadPhoto(this.selectedPhoto).subscribe({
      next: (res: unknown) => {
        this.photoLoading.set(false);
        const resData = res as any;
        if (resData.success) {
          this.profile.set(resData.data);
          this.selectedPhoto = null;
          this.photoError.set('');
          this.activeTab.set('view');
          this.profileUpdated.emit(resData.data);
          this.ns.success('Profile photo updated!');
        } else {
          this.photoError.set(resData.message || 'Upload failed.');
          this.ns.danger(resData.message || 'Upload failed.');
        }
      },
      error: (err: unknown) => {
        this.photoLoading.set(false);
        const errData = err as any;
        const msg = errData.error?.message || 'Upload failed.';
        this.photoError.set(msg);
        this.ns.danger(msg);
      },
    });
  }

  removePhoto(): void {
    if (!confirm('Remove profile photo?')) return;
    this.profileService.removePhoto().subscribe({
      next: (res: unknown) => {
        const resData = res as any;
        if (resData.success) {
          this.profile.set(resData.data);
          this.photoPreview.set(null);
          this.photoError.set('');
          this.profileUpdated.emit(resData.data);
          this.ns.success('Profile photo removed.');
        }
      },
      error: (error: unknown) => {
        const msg = 'Failed to remove photo.';
        this.photoError.set(msg);
        this.ns.danger(msg);
      },
    });
  }

  cancelPhoto(): void {
    this.selectedPhoto = null;
    this.photoError.set('');
    const p = this.profile();
    this.photoPreview.set(p?.profilePhotoBase64
      ? `data:${p.profilePhotoType};base64,${p.profilePhotoBase64}`
      : null
    );
    this.activeTab.set('view');
  }

  // ─────────────────────────────────────────────
  //  EMAIL CHANGE
  // ─────────────────────────────────────────────

  sendEmailOtp(): void {
    this.emailError.set('');
    this.emailSuccess.set('');

    if (!this.newEmail.trim()) {
      this.emailError.set('Enter new email address.');
      this.ns.warning('Enter new email address.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.newEmail.trim())) {
      this.emailError.set('Invalid email format.');
      this.ns.danger('Invalid email format.');
      return;
    }
    if (this.newEmail.trim().toLowerCase() ===
        this.profile()?.email?.toLowerCase()) {
      this.emailError.set('New email is the same as current email. No change needed.');
      this.ns.info('New email is the same as current email. No change needed.');
      return;
    }

    this.emailOtpLoading.set(true);

    this.profileService.sendEmailChangeOtp(this.newEmail.trim()).subscribe({
      next: (res: unknown) => {
        this.emailOtpLoading.set(false);
        const resData = res as any;
        if (resData.success) {
          this.emailOtpSent.set(true);
          this.emailOtp = '';
          this.emailSuccess.set(`OTP sent to ${this.newEmail}`);
          this.startEmailTimer();
          this.ns.success(`OTP sent to ${this.newEmail}`);
        } else {
          this.emailError.set(resData.message || 'Failed to send OTP.');
          this.ns.danger(resData.message || 'Failed to send OTP.');
        }
      },
      error: (err: unknown) => {
        this.emailOtpLoading.set(false);
        const errData = err as any;
        const code = errData.error?.errorCode || '';
        if (code === 'EMAIL_EXISTS') {
          const msg = 'This email is already registered to another account.';
          this.emailError.set(msg);
          this.ns.danger(msg);
        } else if (code === 'OTP_COOLDOWN') {
          const msg = errData.error?.message || 'Please wait before resending.';
          this.emailError.set(msg);
          this.ns.warning(msg);
        } else {
          const msg = errData.error?.message || 'Failed to send OTP.';
          this.emailError.set(msg);
          this.ns.danger(msg);
        }
      },
    });
  }

  private startEmailTimer(): void {
    this.emailCooldown.set(60);
    if (this.emailTimer) window.clearInterval(this.emailTimer);
    this.emailTimer = window.setInterval(() => {
      this.emailCooldown.update(v => {
        if (v <= 1) {
          if (this.emailTimer) window.clearInterval(this.emailTimer);
          return 0;
        }
        return v - 1;
      });
    }, 1000);
  }

  updateEmail(): void {
    this.emailError.set('');
    this.emailSuccess.set('');

    if (!this.emailOtp || this.emailOtp.length !== 6) {
      this.emailError.set('Enter the 6-digit OTP.');
      this.ns.warning('Enter the 6-digit OTP.');
      return;
    }

    this.emailVerifyLoading.set(true);

    this.profileService.updateEmail({
      newEmail: this.newEmail.trim(),
      otp:      this.emailOtp,
    }).subscribe({
      next: (res: unknown) => {
        this.emailVerifyLoading.set(false);
        const resData = res as any;
        if (resData.success) {
          this.profile.set(resData.data);
          this.updateLocalStorage(resData.data);
          this.profileUpdated.emit(resData.data);
          const updated = this.newEmail;
          this.newEmail      = '';
          this.emailOtp      = '';
          this.emailError.set('');
          this.emailSuccess.set('');
          this.emailOtpSent.set(false);
          this.activeTab.set('view');
          clearInterval(this.emailTimer);
          this.ns.success(`Email updated to ${updated}`);
        } else {
          this.emailError.set(resData.message || 'Failed.');
          this.ns.danger(resData.message || 'Failed.');
        }
      },
      error: (err: unknown) => {
        this.emailVerifyLoading.set(false);
        const errData = err as any;
        const code = errData.error?.errorCode || '';
        if (code === 'OTP_INVALID') {
          this.emailOtp = '';
          const msg = errData.error?.message || 'Invalid OTP.';
          this.emailError.set(msg);
          this.ns.danger(msg);
        } else if (code === 'OTP_EXPIRED' || code === 'OTP_NOT_FOUND') {
          this.emailOtpSent.set(false);
          this.emailOtp = '';
          const msg = 'OTP expired. Please request a new OTP.';
          this.emailError.set(msg);
          this.ns.warning(msg);
        } else if (code === 'OTP_MAX_ATTEMPTS') {
          this.emailOtpSent.set(false);
          this.emailOtp = '';
          const msg = 'Too many wrong attempts. Request a new OTP.';
          this.emailError.set(msg);
          this.ns.danger(msg);
        } else {
          const msg = errData.error?.message || 'Failed.';
          this.emailError.set(msg);
          this.ns.danger(msg);
        }
      },
    });
  }

  // ─────────────────────────────────────────────
  //  CHANGE PASSWORD
  // ─────────────────────────────────────────────

  changePassword(): void {
    this.pwError.set('');
    this.pwSuccess.set('');

    if (!this.currentPassword) {
      this.pwError.set('Current password is required.'); return;
    }
    if (!this.newPassword || this.newPassword.length < 6) {
      this.pwError.set('New password must be at least 6 characters.'); return;
    }
    if (this.newPassword !== this.confirmPassword) {
      this.pwError.set('Passwords do not match.'); return;
    }
    if (this.currentPassword === this.newPassword) {
      this.pwError.set('New password must be different from current password.'); return;
    }

    this.pwLoading.set(true);

    this.authService.changePassword({
      currentPassword: this.currentPassword,
      newPassword:     this.newPassword,
      confirmPassword: this.confirmPassword,
    }).subscribe({
      next: (res: unknown) => {
        this.pwLoading.set(false);
        const resData = res as any;
        if (resData.success) {
          this.currentPassword = '';
          this.newPassword     = '';
          this.confirmPassword = '';
          this.pwSuccess.set('Password changed successfully!');
          this.ns.success('Password changed successfully!');
        } else {
          this.pwError.set(resData.message || 'Failed.');
          this.ns.danger(resData.message || 'Failed.');
        }
      },
      error: (err: unknown) => {
        this.pwLoading.set(false);
        const errData = err as any;
        const msg = errData.error?.message || 'Failed to change password.';
        this.pwError.set(msg);
        this.ns.danger(msg);
      },
    });
  }

  // ─────────────────────────────────────────────
  //  HELPERS
  // ─────────────────────────────────────────────

  switchTab(tab: ProfileTab): void {
    this.editError.set('');
    this.photoError.set('');
    this.emailError.set('');
    this.emailSuccess.set('');
    this.pwError.set('');
    this.pwSuccess.set('');
    this.activeTab.set(tab);
  }

  getInitials(): string {
    const name = this.profile()?.fullName || this.profile()?.username || '';
    return name.split(' ')
               .map((w: string) => w[0])
               .join('')
               .substring(0, 2)
               .toUpperCase();
  }

  getPasswordStrength(p: string): { w: number; cls: string; label: string } {
    if (!p) return { w: 0, cls: '', label: '' };
    let s = 0;
    if (p.length >= 6)           s++;
    if (p.length >= 10)          s++;
    if (/[A-Z]/.test(p))         s++;
    if (/[0-9]/.test(p))         s++;
    if (/[^a-zA-Z0-9]/.test(p)) s++;
    if (s <= 1) return { w: 20,  cls: 'str-weak',   label: 'Weak'   };
    if (s <= 2) return { w: 50,  cls: 'str-fair',   label: 'Fair'   };
    if (s <= 3) return { w: 75,  cls: 'str-good',   label: 'Good'   };
    return             { w: 100, cls: 'str-strong', label: 'Strong' };
  }

  private updateLocalStorage(data: unknown): void {
    try {
      const u = JSON.parse(localStorage.getItem('user') || '{}');
      const userData = u as any;
      userData.fullName = (data as any).fullName;
      userData.email    = (data as any).email;
      userData.phone    = (data as any).phone;
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error: unknown) {
      // Silently fail if localStorage update fails
    }
  }

  private toInputDate(display: string): string {
    try {
      const months: Record<string, string> = {
        Jan:'01',Feb:'02',Mar:'03',Apr:'04',May:'05',Jun:'06',
        Jul:'07',Aug:'08',Sep:'09',Oct:'10',Nov:'11',Dec:'12'
      };
      const [d, m, y] = display.split(' ');
      return `${y}-${months[m]}-${d.padStart(2,'0')}`;
    } catch (error: unknown) { return ''; }
  }

  private toDisplayDate(input: string): string {
    try {
      const months = ['Jan','Feb','Mar','Apr','May','Jun',
                      'Jul','Aug','Sep','Oct','Nov','Dec'];
      const [y, m, d] = input.split('-');
      return `${d} ${months[parseInt(m)-1]} ${y}`;
    } catch (error: unknown) { return ''; }
  }

  private humanizeKeys(keys: string): string {
    const map: Record<string, string> = {
      fullName:    'Full Name',
      phone:       'Phone',
      dateOfBirth: 'Date of Birth',
      gender:      'Gender',
      addressLine: 'Address',
      city:        'City',
      state:       'State',
      pincode:     'Pincode',
    };
    return keys.split(', ')
               .map(k => map[k.trim()] || k)
               .join(', ');
  }
}