import {
  MatFormFieldModule,
  MatSelectModule
} from "./chunk-ZLSKUM3U.js";
import {
  BaseChartDirective
} from "./chunk-GHC4JVNF.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  environment,
  ɵNgSelectMultipleOption
} from "./chunk-D2A5YED7.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  DecimalPipe,
  HttpClient,
  HttpParams,
  Injectable,
  finalize,
  forkJoin,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QR452MNT.js";

// src/app/core/services/admin-analytics-api.service.ts
var AdminAnalyticsApiService = class _AdminAnalyticsApiService {
  constructor(http) {
    this.http = http;
    this.baseUrl = `${environment.apiUrl}/admin/analytics`;
  }
  // ✅ Transaction Analytics
  getTransactionAnalytics(timeframe) {
    const params = new HttpParams().set("timeframe", timeframe);
    return this.http.get(`${this.baseUrl}/transactions`, { params });
  }
  // ✅ Loan Analytics
  getLoanAnalytics(timeframe) {
    const params = new HttpParams().set("timeframe", timeframe);
    return this.http.get(`${this.baseUrl}/loans`, { params });
  }
  static {
    this.\u0275fac = function AdminAnalyticsApiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminAnalyticsApiService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminAnalyticsApiService, factory: _AdminAnalyticsApiService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminAnalyticsApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/admin/admin-analytics/admin-analytics.ts
function AdminAnalytics_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading analytics...");
    \u0275\u0275elementEnd()();
  }
}
function AdminAnalytics_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label");
    \u0275\u0275text(2, "Select Timeframe:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 5);
    \u0275\u0275twoWayListener("ngModelChange", function AdminAnalytics_Conditional_7_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedTimeframe, $event) || (ctx_r1.selectedTimeframe = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function AdminAnalytics_Conditional_7_Template_select_change_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTimeframeChange());
    });
    \u0275\u0275elementStart(4, "option", 6);
    \u0275\u0275text(5, "Last 7 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 7);
    \u0275\u0275text(7, "Last 30 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 8);
    \u0275\u0275text(9, "Year to Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 9)(11, "div", 10)(12, "div", 11);
    \u0275\u0275text(13, "\u{1F4B0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 12)(15, "span", 13);
    \u0275\u0275text(16, "Total Inflow");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "strong", 14);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 10)(21, "div", 11);
    \u0275\u0275text(22, "\u{1F4E4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 12)(24, "span", 13);
    \u0275\u0275text(25, "Total Outflow");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "strong", 14);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 10)(30, "div", 11);
    \u0275\u0275text(31, "\u{1F3AF}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 12)(33, "span", 13);
    \u0275\u0275text(34, "Avg Ticket Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "strong", 14);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 10)(39, "div", 11);
    \u0275\u0275text(40, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 12)(42, "span", 13);
    \u0275\u0275text(43, "NPA Ratio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "strong", 14);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div", 15)(47, "div", 16)(48, "h3");
    \u0275\u0275text(49, "Transaction Flow (Inflow vs Outflow)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 17);
    \u0275\u0275element(51, "canvas", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 16)(53, "h3");
    \u0275\u0275text(54, "Loan Distribution by Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 17);
    \u0275\u0275element(56, "canvas", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 16)(58, "h3");
    \u0275\u0275text(59, "Loan Distribution by Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 17);
    \u0275\u0275element(61, "canvas", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedTimeframe);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind1(19, 11, ctx_r1.totalInflow));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind1(28, 13, ctx_r1.totalOutflow));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind1(37, 15, ctx_r1.averageTicketSize));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", (ctx_r1.npaRatio * 100).toFixed(2), "%");
    \u0275\u0275advance(6);
    \u0275\u0275property("data", ctx_r1.transactionLineChartData)("options", ctx_r1.transactionLineChartOptions);
    \u0275\u0275advance(5);
    \u0275\u0275property("data", ctx_r1.loanBarChartData)("options", ctx_r1.loanBarChartOptions);
    \u0275\u0275advance(5);
    \u0275\u0275property("data", ctx_r1.productBarChartData)("options", ctx_r1.productBarChartOptions);
  }
}
var AdminAnalytics = class _AdminAnalytics {
  constructor(adminAnalyticsApi, cd) {
    this.adminAnalyticsApi = adminAnalyticsApi;
    this.cd = cd;
    this.loading = false;
    this.selectedTimeframe = "7d";
    this.totalInflow = 0;
    this.totalOutflow = 0;
    this.averageTicketSize = 0;
    this.totalLoans = 0;
    this.npaCount = 0;
    this.npaRatio = 0;
    this.transactionLineChartData = {
      labels: [],
      datasets: [
        {
          data: [],
          label: "Inflow",
          tension: 0.4,
          borderColor: "#00c896",
          backgroundColor: "rgba(0, 200, 150, 0.1)",
          borderWidth: 2
        },
        {
          data: [],
          label: "Outflow",
          tension: 0.4,
          borderColor: "#ff3b3b",
          backgroundColor: "rgba(255, 59, 59, 0.1)",
          borderWidth: 2
        }
      ]
    };
    this.transactionLineChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: {
            usePointStyle: true,
            padding: 15
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };
    this.loanBarChartData = {
      labels: [],
      datasets: [
        {
          data: [],
          label: "Loans by Status",
          backgroundColor: "#3b82f6",
          borderColor: "#1e40af",
          borderWidth: 1
        }
      ]
    };
    this.loanBarChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: {
            usePointStyle: true,
            padding: 15
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };
    this.productBarChartData = {
      labels: [],
      datasets: [
        {
          data: [],
          label: "Loans by Product",
          backgroundColor: "#10b981",
          borderColor: "#059669",
          borderWidth: 1
        }
      ]
    };
    this.productBarChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: {
            usePointStyle: true,
            padding: 15
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };
  }
  ngOnInit() {
    this.loadAnalytics();
  }
  onTimeframeChange() {
    this.loadAnalytics();
  }
  // ✅ FIXED METHOD
  loadAnalytics() {
    this.loading = true;
    forkJoin({
      transaction: this.adminAnalyticsApi.getTransactionAnalytics(this.selectedTimeframe),
      loan: this.adminAnalyticsApi.getLoanAnalytics(this.selectedTimeframe)
    }).pipe(finalize(() => {
      this.loading = false;
      this.cd.detectChanges();
    })).subscribe({
      next: ({ transaction, loan }) => {
        this.bindTransactionAnalytics(transaction);
        this.bindLoanAnalytics(loan);
      },
      error: () => {
      }
    });
  }
  // -----------------------------
  // Bind Data Methods
  // -----------------------------
  bindTransactionAnalytics(response) {
    this.totalInflow = response.totalInflow || 0;
    this.totalOutflow = response.totalOutflow || 0;
    this.averageTicketSize = response.averageTicketSize || 0;
    const labels = response.dailyVolumes?.map((item) => item.date) || [];
    const inflowData = response.dailyVolumes?.map((item) => item.inflow) || [];
    const outflowData = response.dailyVolumes?.map((item) => item.outflow) || [];
    this.transactionLineChartData = {
      labels,
      datasets: [
        {
          data: inflowData,
          label: "Inflow",
          tension: 0.4,
          borderColor: "#00c896",
          backgroundColor: "rgba(0, 200, 150, 0.1)",
          borderWidth: 2
        },
        {
          data: outflowData,
          label: "Outflow",
          tension: 0.4,
          borderColor: "#ff3b3b",
          backgroundColor: "rgba(255, 59, 59, 0.1)",
          borderWidth: 2
        }
      ]
    };
  }
  bindLoanAnalytics(response) {
    this.totalLoans = response.totalLoans || 0;
    this.npaCount = response.npaCount || 0;
    this.npaRatio = response.npaRatio || 0;
    const statusLabels = Object.keys(response.loanDistributionByStatus || {});
    const statusValues = Object.values(response.loanDistributionByStatus || {});
    this.loanBarChartData = {
      labels: statusLabels,
      datasets: [
        {
          data: statusValues,
          label: "Loans by Status",
          backgroundColor: "#3b82f6",
          borderColor: "#1e40af",
          borderWidth: 1
        }
      ]
    };
    const productLabels = Object.keys(response.loanDistributionByProduct || {});
    const productValues = Object.values(response.loanDistributionByProduct || {});
    this.productBarChartData = {
      labels: productLabels,
      datasets: [
        {
          data: productValues,
          label: "Loans by Product",
          backgroundColor: "#10b981",
          borderColor: "#059669",
          borderWidth: 1
        }
      ]
    };
  }
  static {
    this.\u0275fac = function AdminAnalytics_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminAnalytics)(\u0275\u0275directiveInject(AdminAnalyticsApiService), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminAnalytics, selectors: [["app-admin-analytics"]], decls: 8, vars: 2, consts: [[1, "analytics-container"], [1, "analytics-header"], [1, "loading-container"], [1, "spinner"], [1, "timeframe-selector"], [3, "ngModelChange", "change", "ngModel"], ["value", "7d"], ["value", "30d"], ["value", "ytd"], [1, "cards-grid"], [1, "metric-card"], [1, "card-icon"], [1, "card-content"], [1, "card-label"], [1, "card-value"], [1, "charts-grid"], [1, "chart-card"], [1, "chart-wrapper"], ["baseChart", "", "type", "line", 3, "data", "options"], ["baseChart", "", "type", "bar", 3, "data", "options"]], template: function AdminAnalytics_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Admin Analytics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "System transaction and loan performance metrics");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(6, AdminAnalytics_Conditional_6_Template, 4, 0, "div", 2);
        \u0275\u0275conditionalCreate(7, AdminAnalytics_Conditional_7_Template, 62, 17);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.loading ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading ? 7 : -1);
      }
    }, dependencies: [
      FormsModule,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      SelectControlValueAccessor,
      NgControlStatus,
      NgModel,
      MatFormFieldModule,
      MatSelectModule,
      CommonModule,
      BaseChartDirective,
      DecimalPipe
    ], styles: ["\n.analytics-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 100%;\n}\n.analytics-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.analytics-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 8px 0;\n}\n.analytics-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin: 0;\n  font-size: 14px;\n}\n.dark[_ngcontent-%COMP%]   .analytics-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #f3f4f6;\n}\n.dark[_ngcontent-%COMP%]   .analytics-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #d1d5db;\n}\n.timeframe-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 24px;\n  padding: 16px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n}\n.dark[_ngcontent-%COMP%]   .timeframe-selector[_ngcontent-%COMP%] {\n  background: #1f2937;\n  border-color: #374151;\n}\n.timeframe-selector[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #374151;\n}\n.dark[_ngcontent-%COMP%]   .timeframe-selector[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #d1d5db;\n}\n.timeframe-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: #ffffff;\n  color: #1f2937;\n  cursor: pointer;\n  font-size: 14px;\n}\n.dark[_ngcontent-%COMP%]   .timeframe-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: #374151;\n  border-color: #4b5563;\n  color: #f3f4f6;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  gap: 20px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e5e7eb;\n  border-top-color: #3b82f6;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.dark[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  border-color: #374151;\n  border-top-color: #60a5fa;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 14px;\n}\n.dark[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #d1d5db;\n}\n.cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 32px;\n}\n.metric-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.dark[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%] {\n  background: #1f2937;\n  border-color: #374151;\n}\n.card-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  min-width: 40px;\n}\n.card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.card-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.dark[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {\n  color: #d1d5db;\n}\n.card-value[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.dark[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  color: #f3f4f6;\n}\n.charts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  gap: 20px;\n}\n.chart-card[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.dark[_ngcontent-%COMP%]   .chart-card[_ngcontent-%COMP%] {\n  background: #1f2937;\n  border-color: #374151;\n}\n.chart-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n  color: #1f2937;\n}\n.dark[_ngcontent-%COMP%]   .chart-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #f3f4f6;\n}\n.chart-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  height: 300px;\n  margin-top: 12px;\n}\n@media (max-width: 768px) {\n  .analytics-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .analytics-header[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .analytics-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .timeframe-selector[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .cards-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .charts-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .chart-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .chart-wrapper[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n}\n.dark[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n}\n.dark[_ngcontent-%COMP%]   .chart-card[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n}\n/*# sourceMappingURL=admin-analytics.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminAnalytics, [{
    type: Component,
    args: [{ selector: "app-admin-analytics", standalone: true, imports: [
      FormsModule,
      MatFormFieldModule,
      MatSelectModule,
      CommonModule,
      BaseChartDirective
      // ✅ FIX: Added BaseChartDirective to imports
    ], template: '<div class="analytics-container">\r\n\r\n  <div class="analytics-header">\r\n    <h1>Admin Analytics</h1>\r\n    <p>System transaction and loan performance metrics</p>\r\n  </div>\r\n\r\n  <!-- Loading State -->\r\n  @if (loading) {\r\n    <div class="loading-container">\r\n      <div class="spinner"></div>\r\n      <p>Loading analytics...</p>\r\n    </div>\r\n  }\r\n\r\n  <!-- Analytics Content -->\r\n  @if (!loading) {\r\n\r\n    <!-- Timeframe Selector -->\r\n    <div class="timeframe-selector">\r\n      <label>Select Timeframe:</label>\r\n      <select [(ngModel)]="selectedTimeframe" (change)="onTimeframeChange()">\r\n        <option value="7d">Last 7 Days</option>\r\n        <option value="30d">Last 30 Days</option>\r\n        <option value="ytd">Year to Date</option>\r\n      </select>\r\n    </div>\r\n\r\n    <!-- Summary Cards -->\r\n    <div class="cards-grid">\r\n\r\n      <div class="metric-card">\r\n        <div class="card-icon">\u{1F4B0}</div>\r\n        <div class="card-content">\r\n          <span class="card-label">Total Inflow</span>\r\n          <strong class="card-value">\u20B9{{ totalInflow | number }}</strong>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="metric-card">\r\n        <div class="card-icon">\u{1F4E4}</div>\r\n        <div class="card-content">\r\n          <span class="card-label">Total Outflow</span>\r\n          <strong class="card-value">\u20B9{{ totalOutflow | number }}</strong>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="metric-card">\r\n        <div class="card-icon">\u{1F3AF}</div>\r\n        <div class="card-content">\r\n          <span class="card-label">Avg Ticket Size</span>\r\n          <strong class="card-value">\u20B9{{ averageTicketSize | number }}</strong>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="metric-card">\r\n        <div class="card-icon">\u26A0\uFE0F</div>\r\n        <div class="card-content">\r\n          <span class="card-label">NPA Ratio</span>\r\n          <strong class="card-value">{{ (npaRatio * 100).toFixed(2) }}%</strong>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <!-- Charts Grid -->\r\n    <div class="charts-grid">\r\n\r\n      <!-- Transaction Flow Chart -->\r\n      <div class="chart-card">\r\n        <h3>Transaction Flow (Inflow vs Outflow)</h3>\r\n        <div class="chart-wrapper">\r\n          <canvas\r\n            baseChart\r\n            [data]="transactionLineChartData"\r\n            [options]="transactionLineChartOptions"\r\n            type="line">\r\n          </canvas>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Loan Status Distribution -->\r\n      <div class="chart-card">\r\n        <h3>Loan Distribution by Status</h3>\r\n        <div class="chart-wrapper">\r\n          <canvas\r\n            baseChart\r\n            [data]="loanBarChartData"\r\n            [options]="loanBarChartOptions"\r\n            type="bar">\r\n          </canvas>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Loan Product Distribution -->\r\n      <div class="chart-card">\r\n        <h3>Loan Distribution by Product</h3>\r\n        <div class="chart-wrapper">\r\n          <canvas\r\n            baseChart\r\n            [data]="productBarChartData"\r\n            [options]="productBarChartOptions"\r\n            type="bar">\r\n          </canvas>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  }\r\n\r\n</div>', styles: ["/* src/app/features/admin/admin-analytics/admin-analytics.css */\n.analytics-container {\n  padding: 24px;\n  max-width: 100%;\n}\n.analytics-header {\n  margin-bottom: 32px;\n}\n.analytics-header h1 {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 8px 0;\n}\n.analytics-header p {\n  color: #6b7280;\n  margin: 0;\n  font-size: 14px;\n}\n.dark .analytics-header h1 {\n  color: #f3f4f6;\n}\n.dark .analytics-header p {\n  color: #d1d5db;\n}\n.timeframe-selector {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 24px;\n  padding: 16px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n}\n.dark .timeframe-selector {\n  background: #1f2937;\n  border-color: #374151;\n}\n.timeframe-selector label {\n  font-weight: 500;\n  color: #374151;\n}\n.dark .timeframe-selector label {\n  color: #d1d5db;\n}\n.timeframe-selector select {\n  padding: 8px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: #ffffff;\n  color: #1f2937;\n  cursor: pointer;\n  font-size: 14px;\n}\n.dark .timeframe-selector select {\n  background: #374151;\n  border-color: #4b5563;\n  color: #f3f4f6;\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  gap: 20px;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e5e7eb;\n  border-top-color: #3b82f6;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n.dark .spinner {\n  border-color: #374151;\n  border-top-color: #60a5fa;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.loading-container p {\n  color: #6b7280;\n  font-size: 14px;\n}\n.dark .loading-container p {\n  color: #d1d5db;\n}\n.cards-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 32px;\n}\n.metric-card {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.dark .metric-card {\n  background: #1f2937;\n  border-color: #374151;\n}\n.card-icon {\n  font-size: 32px;\n  min-width: 40px;\n}\n.card-content {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.card-label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.dark .card-label {\n  color: #d1d5db;\n}\n.card-value {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.dark .card-value {\n  color: #f3f4f6;\n}\n.charts-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  gap: 20px;\n}\n.chart-card {\n  padding: 24px;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.dark .chart-card {\n  background: #1f2937;\n  border-color: #374151;\n}\n.chart-card h3 {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n  color: #1f2937;\n}\n.dark .chart-card h3 {\n  color: #f3f4f6;\n}\n.chart-wrapper {\n  position: relative;\n  height: 300px;\n  margin-top: 12px;\n}\n@media (max-width: 768px) {\n  .analytics-container {\n    padding: 16px;\n  }\n  .analytics-header {\n    margin-bottom: 20px;\n  }\n  .analytics-header h1 {\n    font-size: 22px;\n  }\n  .timeframe-selector {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .cards-grid {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .charts-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .chart-card {\n    padding: 16px;\n  }\n  .chart-wrapper {\n    height: 250px;\n  }\n}\n.dark .metric-card {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n}\n.dark .chart-card {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n}\n/*# sourceMappingURL=admin-analytics.css.map */\n"] }]
  }], () => [{ type: AdminAnalyticsApiService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminAnalytics, { className: "AdminAnalytics", filePath: "app/features/admin/admin-analytics/admin-analytics.ts", lineNumber: 30 });
})();

export {
  AdminAnalytics
};
//# sourceMappingURL=chunk-N2THOIVS.js.map
