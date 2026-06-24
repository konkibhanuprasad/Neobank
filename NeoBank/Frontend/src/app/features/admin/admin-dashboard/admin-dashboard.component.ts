// admin-dashboard.component.ts

import { Component, Input, Output, EventEmitter, OnInit, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationService } from '../../../core/services/application.service';
import { AdminService } from '../../../core/services/admin.service';
import { AdminDashboardService } from '../../../core/services/admin-dashboard.service';
import { AdminDashboard } from '../../../core/model/all';
@Component({
  selector:    'app-admin-dashboard',
  standalone:  true,
  imports:     [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl:    './admin-dashboard.component.css',
})
export class AdminDashboardComponent implements OnInit, OnDestroy {

  @Output() navigateTo = new EventEmitter<string>();

  stats        = signal<any>(null);
  statsLoading = signal(false);
  refreshTimer?: any;
  loading = true;
  dashboard?: AdminDashboard;
  constructor(private applicationService: ApplicationService,private adminService:AdminService, 
    private adminDashboardService: AdminDashboardService
  ) {}

  ngOnInit(): void { this.loadStats(), this.loadDashboard();
    this.refreshTimer = setInterval(() => {
      this.loadDashboard();
    }, 60000);
  }

  loadStats(): void {
    this.statsLoading.set(true);
    this.adminService.getAdminStats().subscribe({
      next: (res: any) => {
        this.statsLoading.set(false);
        if (res.success) this.stats.set(res.data);
      },
      error: () => this.statsLoading.set(false),
    });
  }

  formatAmount(v: string): string {
    return '₹' + parseFloat(v || '0')
      .toLocaleString('en-IN', { minimumFractionDigits: 2 });
  }

  loadDashboard(): void{
    this.adminDashboardService.getDashboard().subscribe({
      next: data => {
        this.dashboard = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer);
    }
  }

  goTo(section : string): void{
    this.navigateTo.emit(section);
  }

}