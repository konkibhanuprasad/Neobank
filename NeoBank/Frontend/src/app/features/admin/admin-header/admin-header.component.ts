import { Component, Input, Output, EventEmitter, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector:    'app-admin-header',
  standalone:  true,
  imports:     [CommonModule],
  templateUrl: './admin-header.component.html',
  styleUrl:    './admin-header.component.css',
})
export class AdminHeaderComponent {

  themeService = inject(ThemeService);

  // ✅ computed signal — always in sync with ThemeService
  isDark = computed(() => this.themeService.darkMode());

  @Input() username  = '';
  @Input() fullName  = '';
  @Input() role      = '';
  @Input() pageTitle = 'Dashboard';

  // ✅ removed isDarkMode @Input and cycleThemeEvt @Output
  @Output() toggleSidebarEvt = new EventEmitter<void>();
  @Output() logoutEvt        = new EventEmitter<void>();

  getUserInitials(): string {
    if (this.fullName) return this.fullName.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
    return this.username.substring(0, 2).toUpperCase();
  }

  toggleTheme(): void {
    this.themeService.toggle(); // ✅ updates signal → ThemeService effect applies .dark to <html>
  }
}