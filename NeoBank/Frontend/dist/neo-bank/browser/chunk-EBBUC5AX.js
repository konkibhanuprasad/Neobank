import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-ZLSKUM3U.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  environment
} from "./chunk-D2A5YED7.js";
import {
  Component,
  HttpClient,
  HttpParams,
  Injectable,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QR452MNT.js";

// src/app/core/services/user-analytics-api.service.ts
var UserAnalyticsApiService = class _UserAnalyticsApiService {
  constructor(http) {
    this.http = http;
    this.baseUrl = `${environment.apiUrl}/api/analytics`;
  }
  getSpendingAnalytics(userId, months) {
    const params = new HttpParams().set("months", months);
    return this.http.get(`${this.baseUrl}/spending/${userId}`, { params });
  }
  getWealthAnalytics(userId) {
    return this.http.get(`${this.baseUrl}/wealth/${userId}`);
  }
  static {
    this.\u0275fac = function UserAnalyticsApiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserAnalyticsApiService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserAnalyticsApiService, factory: _UserAnalyticsApiService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAnalyticsApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/core/services/token.service.ts
var TokenService = class _TokenService {
  constructor() {
    this.TOKEN_KEY = "neobank_token";
    this.USER_ID_KEY = "neobank_user_id";
    this.ROLE_KEY = "neobank_role";
  }
  // ✅ Token methods
  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  setToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  // ✅ User ID methods
  getUserId() {
    const userId = localStorage.getItem(this.USER_ID_KEY);
    return userId ? Number(userId) : null;
  }
  setUserId(userId) {
    localStorage.setItem(this.USER_ID_KEY, String(userId));
  }
  // ✅ Role methods
  getRole() {
    return localStorage.getItem(this.ROLE_KEY);
  }
  setRole(role) {
    localStorage.setItem(this.ROLE_KEY, role);
  }
  // ✅ Clear all
  clear() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_ID_KEY);
    localStorage.removeItem(this.ROLE_KEY);
  }
  static {
    this.\u0275fac = function TokenService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TokenService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TokenService, factory: _TokenService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TokenService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/customer/customer-analytics/customer-analytics.ts
function CustomerAnalytics_app_skeleton_loader_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-loader", 7);
  }
  if (rf & 2) {
    \u0275\u0275property("rows", 8);
  }
}
function CustomerAnalytics_ng_container_16_table_36_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const loan_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(loan_r1.loanId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(5, 4, loan_r1.outstandingPrincipal, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(loan_r1.monthsRemaining);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(loan_r1.projectedPayoffDate);
  }
}
function CustomerAnalytics_ng_container_16_table_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 22)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Loan ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Outstanding Principal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Months Remaining");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Projected Payoff Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275template(12, CustomerAnalytics_ng_container_16_table_36_tr_12_Template, 10, 7, "tr", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r1.loanForecasts);
  }
}
function CustomerAnalytics_ng_container_16_p_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1, " No active loan payoff forecast available. ");
    \u0275\u0275elementEnd();
  }
}
function CustomerAnalytics_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 8)(2, "div", 9)(3, "span");
    \u0275\u0275text(4, "Total Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 10)(9, "span");
    \u0275\u0275text(10, "Outstanding Principal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 11)(15, "span");
    \u0275\u0275text(16, "Net Worth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 12)(21, "app-chart-card", 13)(22, "div", 14);
    \u0275\u0275element(23, "canvas", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "app-chart-card", 16)(25, "div", 14);
    \u0275\u0275element(26, "canvas", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "app-chart-card", 17)(28, "div", 14);
    \u0275\u0275element(29, "canvas", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "app-chart-card", 18)(31, "div", 14);
    \u0275\u0275element(32, "canvas", 15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 19)(34, "h2");
    \u0275\u0275text(35, "Loan Payoff Forecast");
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, CustomerAnalytics_ng_container_16_table_36_Template, 13, 1, "table", 20)(37, CustomerAnalytics_ng_container_16_p_37_Template, 2, 0, "p", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(7, 17, ctx_r1.totalBalance, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(13, 20, ctx_r1.outstandingPrincipal, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(19, 23, ctx_r1.netWorth, "1.2-2"));
    \u0275\u0275advance(5);
    \u0275\u0275property("data", ctx_r1.spendingDoughnutData)("options", ctx_r1.chartOptions)("type", "doughnut");
    \u0275\u0275advance(3);
    \u0275\u0275property("data", ctx_r1.budgetBarData)("options", ctx_r1.chartOptions)("type", "bar");
    \u0275\u0275advance(3);
    \u0275\u0275property("data", ctx_r1.netWorthAreaData)("options", ctx_r1.chartOptions)("type", "line");
    \u0275\u0275advance(3);
    \u0275\u0275property("data", ctx_r1.rewardLineData)("options", ctx_r1.chartOptions)("type", "line");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.loanForecasts.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loanForecasts.length === 0);
  }
}
var CustomerAnalytics = class _CustomerAnalytics {
  constructor(userAnalyticsApi, tokenService) {
    this.userAnalyticsApi = userAnalyticsApi;
    this.tokenService = tokenService;
    this.loading = false;
    this.months = 6;
    this.netWorth = 0;
    this.totalBalance = 0;
    this.outstandingPrincipal = 0;
    this.spendingDoughnutData = {
      labels: [],
      datasets: [
        {
          data: []
        }
      ]
    };
    this.budgetBarData = {
      labels: [],
      datasets: [
        {
          data: [],
          label: "Spending"
        }
      ]
    };
    this.netWorthAreaData = {
      labels: [],
      datasets: [
        {
          data: [],
          label: "Net Worth",
          fill: true,
          tension: 0.4
        },
        {
          data: [],
          label: "Total Balance",
          tension: 0.4
        },
        {
          data: [],
          label: "Outstanding Principal",
          tension: 0.4
        }
      ]
    };
    this.rewardLineData = {
      labels: [],
      datasets: [
        {
          data: [],
          label: "Reward Points",
          tension: 0.4
        }
      ]
    };
    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false
    };
    this.loanForecasts = [];
  }
  ngOnInit() {
    this.loadAnalytics();
  }
  onMonthsChange() {
    this.loadAnalytics();
  }
  loadAnalytics() {
    const userId = this.tokenService.getUserId();
    if (userId === null || userId === void 0 || isNaN(userId)) {
      console.error("User ID not found. please login again.");
      this.loading = false;
      return;
    }
    this.loading = true;
    this.userAnalyticsApi.getSpendingAnalytics(userId, this.months).subscribe({
      next: (response) => {
        this.bindSpendingAnalytics(response);
        this.loadWealthAnalytics(userId);
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  loadWealthAnalytics(userId) {
    this.userAnalyticsApi.getWealthAnalytics(userId).subscribe({
      next: (response) => {
        this.bindWealthAnalytics(response);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  bindSpendingAnalytics(response) {
    const categoryMap = /* @__PURE__ */ new Map();
    response.categorySpending.forEach((item) => {
      categoryMap.set(item.category, (categoryMap.get(item.category) || 0) + Number(item.amount));
    });
    this.spendingDoughnutData = {
      labels: Array.from(categoryMap.keys()),
      datasets: [
        {
          data: Array.from(categoryMap.values())
        }
      ]
    };
    this.budgetBarData = {
      labels: response.categorySpending.map((item) => `${item.month} - ${item.category}`),
      datasets: [
        {
          data: response.categorySpending.map((item) => Number(item.amount)),
          label: "Spending"
        }
      ]
    };
  }
  bindWealthAnalytics(response) {
    const timeline = response.netWorthTimeline || [];
    if (timeline.length > 0) {
      const latest = timeline[timeline.length - 1];
      this.netWorth = latest.netWorth || 0;
      this.totalBalance = latest.totalBalance || 0;
      this.outstandingPrincipal = latest.outstandingPrincipal || 0;
    }
    this.netWorthAreaData = {
      labels: timeline.map((item) => item.month),
      datasets: [
        {
          data: timeline.map((item) => item.netWorth),
          label: "Net Worth",
          fill: true,
          tension: 0.4
        },
        {
          data: timeline.map((item) => item.totalBalance),
          label: "Total Balance",
          tension: 0.4
        },
        {
          data: timeline.map((item) => item.outstandingPrincipal),
          label: "Outstanding Principal",
          tension: 0.4
        }
      ]
    };
    this.rewardLineData = {
      labels: response.rewardAccrualHistory.map((item) => item.month),
      datasets: [
        {
          data: response.rewardAccrualHistory.map((item) => item.points),
          label: "Reward Points",
          tension: 0.4
        }
      ]
    };
    this.loanForecasts = response.loanPayoffForecast || [];
  }
  static {
    this.\u0275fac = function CustomerAnalytics_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomerAnalytics)(\u0275\u0275directiveInject(UserAnalyticsApiService), \u0275\u0275directiveInject(TokenService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerAnalytics, selectors: [["app-customer-analytics"]], decls: 17, vars: 5, consts: [[1, "user-analytics-page"], [1, "page-header"], ["appearance", "outline"], [3, "ngModelChange", "selectionChange", "ngModel"], [3, "value"], [3, "rows", 4, "ngIf"], [4, "ngIf"], [3, "rows"], [1, "summary-grid"], [1, "summary-card"], [1, "summary-card", "warning"], [1, "summary-card", "success"], [1, "chart-grid"], ["title", "Spending Distribution"], [1, "chart-container"], ["baseChart", "", 3, "data", "options", "type"], ["title", "Month-wise Spending"], ["title", "Net Worth Progression"], ["title", "Reward Point History"], [1, "forecast-section"], ["class", "forecast-table", 4, "ngIf"], ["class", "empty-text", 4, "ngIf"], [1, "forecast-table"], [4, "ngFor", "ngForOf"], [1, "empty-text"]], template: function CustomerAnalytics_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "My Analytics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Track spending, rewards, net worth and loan payoff forecast.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "mat-form-field", 2)(8, "mat-label");
        \u0275\u0275text(9, "Months");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "mat-select", 3);
        \u0275\u0275twoWayListener("ngModelChange", function CustomerAnalytics_Template_mat_select_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.months, $event) || (ctx.months = $event);
          return $event;
        });
        \u0275\u0275listener("selectionChange", function CustomerAnalytics_Template_mat_select_selectionChange_10_listener() {
          return ctx.onMonthsChange();
        });
        \u0275\u0275elementStart(11, "mat-option", 4);
        \u0275\u0275text(12, "6 Months");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-option", 4);
        \u0275\u0275text(14, "12 Months");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(15, CustomerAnalytics_app_skeleton_loader_15_Template, 1, 1, "app-skeleton-loader", 5)(16, CustomerAnalytics_ng_container_16_Template, 38, 26, "ng-container", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.months);
        \u0275\u0275advance();
        \u0275\u0275property("value", 6);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 12);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [MatFormFieldModule, MatFormField, MatLabel, MatSelectModule, MatSelect, MatOption, FormsModule, NgControlStatus, NgModel], styles: ["\n.user-analytics-page[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: #f7f9fc;\n  justify-content: space-between;\n  min-height: 100vh;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  color: #111827;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  color: #6b7280;\n}\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n  margin-bottom: 24px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 20px;\n  border-radius: 16px;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);\n}\n.summary-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #6b7280;\n  margin-bottom: 8px;\n}\n.summary-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #111827;\n}\n.summary-card.success[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.summary-card.warning[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.chart-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n.chart-container[_ngcontent-%COMP%] {\n  height: 280px;\n}\n.forecast-section[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 18px;\n  padding: 20px;\n  margin-top: 24px;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);\n}\n.forecast-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.forecast-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.forecast-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.forecast-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-bottom: 1px solid #e5e7eb;\n  text-align: left;\n}\n.empty-text[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .summary-grid[_ngcontent-%COMP%], \n   .chart-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=customer-analytics.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerAnalytics, [{
    type: Component,
    args: [{ selector: "app-customer-analytics", imports: [
      MatFormFieldModule,
      MatSelectModule,
      FormsModule
    ], template: `<div class="user-analytics-page">\r
\r
  <!-- \u2705 Header -->\r
  <div class="page-header">\r
    <div>\r
      <h1>My Analytics</h1>\r
      <p>Track spending, rewards, net worth and loan payoff forecast.</p>\r
    </div>\r
\r
    <mat-form-field appearance="outline">\r
      <mat-label>Months</mat-label>\r
      <mat-select\r
        [(ngModel)]="months"\r
        (selectionChange)="onMonthsChange()">\r
\r
        <mat-option [value]="6">6 Months</mat-option>\r
        <mat-option [value]="12">12 Months</mat-option>\r
\r
      </mat-select>\r
    </mat-form-field>\r
  </div>\r
\r
  <!-- \u2705 Loader -->\r
  <app-skeleton-loader *ngIf="loading" [rows]="8"></app-skeleton-loader>\r
\r
  <!-- \u2705 Content -->\r
  <ng-container *ngIf="!loading">\r
\r
    <!-- Summary -->\r
    <div class="summary-grid">\r
      <div class="summary-card">\r
        <span>Total Balance</span>\r
        <strong>\u20B9{{ totalBalance | number:'1.2-2' }}</strong>\r
      </div>\r
\r
      <div class="summary-card warning">\r
        <span>Outstanding Principal</span>\r
        <strong>\u20B9{{ outstandingPrincipal | number:'1.2-2' }}</strong>\r
      </div>\r
\r
      <div class="summary-card success">\r
        <span>Net Worth</span>\r
        <strong>\u20B9{{ netWorth | number:'1.2-2' }}</strong>\r
      </div>\r
    </div>\r
\r
    <!-- Charts -->\r
    <div class="chart-grid">\r
\r
      <app-chart-card title="Spending Distribution">\r
        <div class="chart-container">\r
          <canvas\r
            baseChart\r
            [data]="spendingDoughnutData"\r
            [options]="chartOptions"\r
            [type]="'doughnut'">\r
          </canvas>\r
        </div>\r
      </app-chart-card>\r
\r
      <app-chart-card title="Month-wise Spending">\r
        <div class="chart-container">\r
          <canvas\r
            baseChart\r
            [data]="budgetBarData"\r
            [options]="chartOptions"\r
            [type]="'bar'">\r
          </canvas>\r
        </div>\r
      </app-chart-card>\r
\r
      <app-chart-card title="Net Worth Progression">\r
        <div class="chart-container">\r
          <canvas\r
            baseChart\r
            [data]="netWorthAreaData"\r
            [options]="chartOptions"\r
            [type]="'line'">\r
          </canvas>\r
        </div>\r
      </app-chart-card>\r
\r
      <app-chart-card title="Reward Point History">\r
        <div class="chart-container">\r
          <canvas\r
            baseChart\r
            [data]="rewardLineData"\r
            [options]="chartOptions"\r
            [type]="'line'">\r
          </canvas>\r
        </div>\r
      </app-chart-card>\r
\r
    </div>\r
\r
    <!-- Forecast -->\r
    <div class="forecast-section">\r
      <h2>Loan Payoff Forecast</h2>\r
\r
      <table class="forecast-table" *ngIf="loanForecasts.length > 0">\r
        <thead>\r
          <tr>\r
            <th>Loan ID</th>\r
            <th>Outstanding Principal</th>\r
            <th>Months Remaining</th>\r
            <th>Projected Payoff Date</th>\r
          </tr>\r
        </thead>\r
\r
        <tbody>\r
          <tr *ngFor="let loan of loanForecasts">\r
            <td>{{ loan.loanId }}</td>\r
            <td>\u20B9{{ loan.outstandingPrincipal | number:'1.2-2' }}</td>\r
            <td>{{ loan.monthsRemaining }}</td>\r
            <td>{{ loan.projectedPayoffDate }}</td>\r
          </tr>\r
        </tbody>\r
      </table>\r
\r
      <p class="empty-text" *ngIf="loanForecasts.length === 0">\r
        No active loan payoff forecast available.\r
      </p>\r
    </div>\r
\r
  </ng-container>\r
\r
</div>`, styles: ["/* src/app/features/customer/customer-analytics/customer-analytics.css */\n.user-analytics-page {\n  padding: 24px;\n  background: #f7f9fc;\n  justify-content: space-between;\n  min-height: 100vh;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header h1 {\n  margin: 0;\n  font-size: 28px;\n  color: #111827;\n}\n.page-header p {\n  margin-top: 6px;\n  color: #6b7280;\n}\n.summary-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n  margin-bottom: 24px;\n}\n.summary-card {\n  background: #ffffff;\n  padding: 20px;\n  border-radius: 16px;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);\n}\n.summary-card span {\n  display: block;\n  color: #6b7280;\n  margin-bottom: 8px;\n}\n.summary-card strong {\n  font-size: 24px;\n  color: #111827;\n}\n.summary-card.success strong {\n  color: #059669;\n}\n.summary-card.warning strong {\n  color: #d97706;\n}\n.chart-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n.chart-container {\n  height: 280px;\n}\n.forecast-section {\n  background: #ffffff;\n  border-radius: 18px;\n  padding: 20px;\n  margin-top: 24px;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);\n}\n.forecast-section h2 {\n  margin-bottom: 16px;\n}\n.forecast-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.forecast-table th,\n.forecast-table td {\n  padding: 12px;\n  border-bottom: 1px solid #e5e7eb;\n  text-align: left;\n}\n.empty-text {\n  color: #6b7280;\n}\n@media (max-width: 768px) {\n  .page-header {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .summary-grid,\n  .chart-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.page-header {\n  display: flex;\n}\n/*# sourceMappingURL=customer-analytics.css.map */\n"] }]
  }], () => [{ type: UserAnalyticsApiService }, { type: TokenService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerAnalytics, { className: "CustomerAnalytics", filePath: "app/features/customer/customer-analytics/customer-analytics.ts", lineNumber: 21 });
})();
export {
  CustomerAnalytics
};
//# sourceMappingURL=chunk-EBBUC5AX.js.map
