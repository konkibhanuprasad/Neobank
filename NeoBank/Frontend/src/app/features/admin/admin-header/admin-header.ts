import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="admin-header">
      <div class="header-left">
        <button (click)="onToggleSidebar()" class="toggle-btn">
          ☰ Menu
        </button>
        <h1>{{ pageTitle }}</h1>
      </div>
      <div class="header-right">
        <div class="user-info">
          <span class="username">{{ username }}</span>
          <span class="role">{{ role }}</span>
        </div>
        <button (click)="onLogout()" class="logout-btn">Logout</button>
      </div>
    </header>
  `,
  styles: [`
    .admin-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 30px;
      background: white;
      border-bottom: 1px solid #ddd;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .header-left {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    .toggle-btn {
      padding: 8px 15px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.9em;
    }
    .toggle-btn:hover {
      background: #0056b3;
    }
    .header-left h1 {
      margin: 0;
      font-size: 1.5em;
      color: #333;
    }
    .header-right {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    .user-info {
      display: flex;
      flex-direction: column;
      text-align: right;
    }
    .username {
      font-weight: bold;
      color: #333;
    }
    .role {
      font-size: 0.9em;
      color: #666;
    }
    .logout-btn {
      padding: 8px 15px;
      background: #dc3545;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .logout-btn:hover {
      background: #c82333;
    }
  `]
})
export class AdminHeaderComponent {
  @Input() username = '';
  @Input() fullName = '';
  @Input() role = '';
  @Input() pageTitle = 'Admin Dashboard';

  @Output() toggleSidebarEvt = new EventEmitter<void>();
  @Output() logoutEvt = new EventEmitter<void>();

  onToggleSidebar(): void {
    this.toggleSidebarEvt.emit();
  }

  onLogout(): void {
    this.logoutEvt.emit();
  }
}
