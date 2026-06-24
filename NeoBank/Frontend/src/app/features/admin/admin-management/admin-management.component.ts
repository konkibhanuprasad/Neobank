import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-admin-management',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCardModule
  ],
  templateUrl: './admin-management.component.html',
  styleUrl: './admin-management.component.css'
})
export class AdminManagementComponent implements OnInit {

  @Input() activeSubSection: 'admins' | 'settings' = 'admins';

  // ═══════════════════════════════════════════════════════
  // ADMINS TAB DATA
  // ═══════════════════════════════════════════════════════

  admins = [
    {
      id: 1,
      name: 'John Admin',
      email: 'john@neobank.com',
      role: 'Super Admin',
      status: 'Active',
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      name: 'Jane Manager',
      email: 'jane@neobank.com',
      role: 'Admin Manager',
      status: 'Active',
      createdAt: '2024-02-20'
    },
    {
      id: 3,
      name: 'Bob Operator',
      email: 'bob@neobank.com',
      role: 'Operator',
      status: 'Active',
      createdAt: '2024-03-10'
    }
  ];

  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'status', 'createdAt', 'actions'];

  // ═══════════════════════════════════════════════════════
  // SETTINGS TAB DATA
  // ═══════════════════════════════════════════════════════

  settings = {
    // General Settings
    bankName: 'NeoBank',
    bankCode: 'NB001',
    registrationEmail: 'admin@neobank.com',

    // Security Settings
    enableTwoFactor: true,
    sessionTimeout: 30,
    passwordExpiry: 90,
    maxLoginAttempts: 5,

    // Features
    enableLoans: true,
    enableCards: true,
    enableRewards: true,
    enableBudgeting: true,

    // Limits
    maxDailyTransaction: 500000,
    maxMonthlyTransaction: 5000000,
    minAccountBalance: 1000,

    // Email Notifications
    notifyOnTransaction: true,
    notifyOnLoanApproval: true,
    notifyOnSecurityAlert: true,
    notifyOnSystemError: true
  };

  showAddAdminForm = false;
  newAdmin = {
    name: '',
    email: '',
    role: 'Operator',
    password: ''
  };

  adminRoles = ['Super Admin', 'Admin Manager', 'Operator', 'Support'];

  constructor() { }

  ngOnInit(): void {
    // Load settings and admins from API
    this.loadSettings();
    this.loadAdmins();
  }

  // ═══════════════════════════════════════════════════════
  // ADMIN MANAGEMENT METHODS
  // ═══════════════════════════════════════════════════════

  loadAdmins(): void {
    // TODO: Replace with API call
    // this.adminService.getAllAdmins().subscribe(...);
  }

  openAddAdminForm(): void {
    this.showAddAdminForm = true;
    this.newAdmin = {
      name: '',
      email: '',
      role: 'Operator',
      password: ''
    };
  }

  closeAddAdminForm(): void {
    this.showAddAdminForm = false;
  }

  addAdmin(): void {
    if (!this.newAdmin.name || !this.newAdmin.email || !this.newAdmin.password) {
      alert('Please fill all required fields');
      return;
    }

    // TODO: Call API to add admin
    // this.adminService.addAdmin(this.newAdmin).subscribe({
    //   next: () => {
    //     this.admins.push({...});
    //     this.showAddAdminForm = false;
    //   }
    // });

    console.log('Adding admin:', this.newAdmin);
    alert('Admin added successfully!');
    this.showAddAdminForm = false;
  }

  editAdmin(admin: any): void {
    // TODO: Implement edit functionality
    console.log('Editing admin:', admin);
    alert('Edit functionality - coming soon!');
  }

  deleteAdmin(adminId: number): void {
    if (confirm('Are you sure you want to delete this admin?')) {
      // TODO: Call API to delete admin
      // this.adminService.deleteAdmin(adminId).subscribe({
      //   next: () => {
      //     this.admins = this.admins.filter(a => a.id !== adminId);
      //   }
      // });

      this.admins = this.admins.filter(a => a.id !== adminId);
      alert('Admin deleted successfully!');
    }
  }

  resetAdminPassword(adminId: number): void {
    const newPassword = prompt('Enter new password:');
    if (newPassword) {
      // TODO: Call API to reset password
      // this.adminService.resetPassword(adminId, newPassword).subscribe(...);
      alert('Password reset successfully!');
    }
  }

  // ═══════════════════════════════════════════════════════
  // SETTINGS MANAGEMENT METHODS
  // ═══════════════════════════════════════════════════════

  loadSettings(): void {
    // TODO: Replace with API call
    // this.settingsService.getSettings().subscribe(data => {
    //   this.settings = data;
    // });
  }

  saveSettings(): void {
    // TODO: Call API to save settings
    // this.settingsService.updateSettings(this.settings).subscribe({
    //   next: () => {
    //     alert('Settings saved successfully!');
    //   },
    //   error: () => {
    //     alert('Failed to save settings');
    //   }
    // });

    console.log('Saving settings:', this.settings);
    alert('Settings saved successfully!');
  }

  resetSettings(): void {
    if (confirm('Are you sure you want to reset to default settings?')) {
      // TODO: Call API to reset settings
      // this.settingsService.resetToDefaults().subscribe({
      //   next: (data) => {
      //     this.settings = data;
      //     alert('Settings reset to defaults!');
      //   }
      // });

      alert('Settings reset to defaults!');
      this.loadSettings();
    }
  }
}