import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside class="sidebar" [class.collapsed]="sidebarCollapsed">
      <div class="sidebar-header">
        <h2>{{ username }}</h2>
        <p class="role">{{ role }}</p>
      </div>
      <nav class="sidebar-nav">
        <ul>
          <li><a (click)="selectSection('dashboard')">Dashboard</a></li>
          <li><a (click)="selectSection('applications')">Applications</a></li>
          <li><a (click)="selectSection('users')">Users</a></li>
          <li><a (click)="selectSection('accounts')">Accounts</a></li>
          <li><a (click)="selectSection('transactions')">Transactions</a></li>
          <li><a (click)="selectSection('loans')">Loans</a></li>
          <li><a (click)="selectSection('cards')">Cards</a></li>
          <li><a (click)="selectSection('treasury')">Treasury</a></li>
          <li><a (click)="selectSection('system-logs')">System Logs</a></li>
          <li><a (click)="selectSection('management-admins')">Admin Management</a></li>
          <li><a (click)="selectSection('management-settings')">Settings</a></li>
        </ul>
      </nav>
      <div class="sidebar-footer">
        <p>Pending: {{ pendingCount }}</p>
        <button (click)="onLogout()">Logout</button>
      </div>
    </aside>
  `,
  styles: [`
    .sidebar {
      width: 250px;
      background: #f5f5f5;
      border-right: 1px solid #ddd;
      overflow-y: auto;
    }
    .sidebar-header {
      padding: 20px;
      border-bottom: 1px solid #ddd;
    }
    .role {
      font-size: 0.9em;
      color: #666;
      margin: 5px 0 0 0;
    }
    .sidebar-nav ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .sidebar-nav li a {
      display: block;
      padding: 12px 20px;
      cursor: pointer;
      border-left: 3px solid transparent;
      transition: all 0.3s;
    }
    .sidebar-nav li a:hover {
      background: #e0e0e0;
      border-left-color: #007bff;
    }
    .sidebar-footer {
      padding: 20px;
      border-top: 1px solid #ddd;
    }
    .sidebar-footer button {
      width: 100%;
      padding: 10px;
      background: #dc3545;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class AdminSidebarComponent {
  @Input() sidebarOpen = true;
  @Input() sidebarCollapsed = false;
  @Input() currentSection = '';
  @Input() username = '';
  @Input() fullName = '';
  @Input() role = '';
  @Input() pendingCount = 0;

  @Output() sectionSelected = new EventEmitter<string>();
  @Output() closeSidebarEvt = new EventEmitter<void>();
  @Output() sidebarCollapsedEvt = new EventEmitter<void>();
  @Output() logoutEvt = new EventEmitter<void>();

  selectSection(section: string): void {
    this.sectionSelected.emit(section);
  }

  onLogout(): void {
    this.logoutEvt.emit();
  }
}
