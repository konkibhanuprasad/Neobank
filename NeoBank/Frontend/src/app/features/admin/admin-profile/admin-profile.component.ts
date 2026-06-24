// admin-profile.component.ts — complete replacement

import {
  Component, Input, OnChanges, SimpleChanges, signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApplicationService } from '../../../core/services/application.service';
import { AuthService } from '../../../core/services/auth.service';

// Admin profile reuses same logic as customer
// Just import CustomerProfileComponent directly

import { CustomerProfileComponent } from '../../customer/customer-profile/customer-profile.component';

@Component({
  selector:    'app-admin-profile',
  standalone:  true,
  imports:     [CommonModule, FormsModule, CustomerProfileComponent],
  template: `
    <app-customer-profile
      [activeSubSection]="activeSubSection"
      [user]="user"
      (profileUpdated)="profileUpdated()"
    ></app-customer-profile>
  `,
})
export class AdminProfileComponent implements OnChanges {

  @Input() activeSubSection = 'admin-profile-details';
  @Input() user: unknown    = null;

  ngOnChanges(c: SimpleChanges): void {}

  profileUpdated(): void {
    // Reload user from localStorage if needed
    try {
      const stored = JSON.parse(localStorage.getItem('user') || '{}');
      this.user = stored;
    } catch (error: unknown) {
      // Silently fail if localStorage parsing fails
    }
  }
}