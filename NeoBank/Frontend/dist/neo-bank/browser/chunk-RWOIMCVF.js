import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-ZLSKUM3U.js";
import {
  BaseChartDirective
} from "./chunk-GHC4JVNF.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  environment
} from "./chunk-D2A5YED7.js";
import {
  CommonModule,
  Component,
  DatePipe,
  HttpClient,
  HttpParams,
  Injectable,
  Input,
  NgForOf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QR452MNT.js";

// src/app/features/skeleton-loader/skeleton-loader.ts
var _c0 = () => [];
function SkeletonLoaderComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
}
var SkeletonLoaderComponent = class _SkeletonLoaderComponent {
  constructor() {
    this.rows = 4;
  }
  static {
    this.\u0275fac = function SkeletonLoaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SkeletonLoaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkeletonLoaderComponent, selectors: [["app-skeleton-loader"]], inputs: { rows: "rows" }, decls: 2, vars: 2, consts: [[1, "skeleton-wrapper"], ["class", "skeleton-line", 4, "ngFor", "ngForOf"], [1, "skeleton-line"]], template: function SkeletonLoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, SkeletonLoaderComponent_div_1_Template, 1, 0, "div", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0).constructor(ctx.rows));
      }
    }, dependencies: [CommonModule, NgForOf], styles: ["\n.skeleton-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.skeleton-line[_ngcontent-%COMP%] {\n  height: 22px;\n  margin-bottom: 14px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      #eeeeee 25%,\n      #dddddd 50%,\n      #eeeeee 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.2s infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n/*# sourceMappingURL=skeleton-loader.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkeletonLoaderComponent, [{
    type: Component,
    args: [{ selector: "app-skeleton-loader", imports: [CommonModule], template: '<div class="skeleton-wrapper">\r\n  <div\r\n    class="skeleton-line"\r\n    *ngFor="let item of [].constructor(rows)">\r\n  </div>\r\n</div>', styles: ["/* src/app/features/skeleton-loader/skeleton-loader.css */\n.skeleton-wrapper {\n  width: 100%;\n}\n.skeleton-line {\n  height: 22px;\n  margin-bottom: 14px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      #eeeeee 25%,\n      #dddddd 50%,\n      #eeeeee 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.2s infinite;\n}\n@keyframes shimmer {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n/*# sourceMappingURL=skeleton-loader.css.map */\n"] }]
  }], null, { rows: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkeletonLoaderComponent, { className: "SkeletonLoaderComponent", filePath: "app/features/skeleton-loader/skeleton-loader.ts", lineNumber: 10 });
})();

// src/app/features/charts/chart-card/chart-card.ts
var _c02 = ["*"];
var ChartCard = class _ChartCard {
  constructor() {
    this.title = "";
  }
  static {
    this.\u0275fac = function ChartCard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChartCard)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChartCard, selectors: [["app-chart-card"]], inputs: { title: "title" }, ngContentSelectors: _c02, decls: 4, vars: 1, consts: [[1, "chart-card"]], template: function ChartCard_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275domElementStart(2, "h3");
        \u0275\u0275text(3);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.title);
      }
    }, styles: ["\n.chart-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 18px;\n  padding: 20px;\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);\n  min-height: 320px;\n}\n.chart-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  font-size: 18px;\n  font-weight: 600;\n  color: #1f2937;\n}\n/*# sourceMappingURL=chart-card.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartCard, [{
    type: Component,
    args: [{ selector: "app-chart-card", template: '<div class="chart-card">\r\n    <ng-content></ng-content>\r\n\r\n    <h3>{{ title }}</h3>\r\n</div>', styles: ["/* src/app/features/charts/chart-card/chart-card.css */\n.chart-card {\n  background: #ffffff;\n  border-radius: 18px;\n  padding: 20px;\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);\n  min-height: 320px;\n}\n.chart-card h3 {\n  margin-bottom: 16px;\n  font-size: 18px;\n  font-weight: 600;\n  color: #1f2937;\n}\n/*# sourceMappingURL=chart-card.css.map */\n"] }]
  }], null, { title: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChartCard, { className: "ChartCard", filePath: "app/features/charts/chart-card/chart-card.ts", lineNumber: 8 });
})();

// src/app/core/services/system-log-api.service.ts
var SystemLogApiService = class _SystemLogApiService {
  constructor(http) {
    this.http = http;
    this.baseUrl = `${environment.apiUrl}/api/admin/system-logs`;
  }
  getSystemLogs(page = 0, size = 20, status) {
    let params = new HttpParams().set("page", page.toString()).set("size", size.toString());
    if (status !== void 0) {
      params = params.set("status", status.toString());
    }
    return this.http.get(this.baseUrl, { params });
  }
  static {
    this.\u0275fac = function SystemLogApiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SystemLogApiService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SystemLogApiService, factory: _SystemLogApiService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemLogApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/system-logs/system-logs.ts
var _forTrack0 = ($index, $item) => $item.id;
function SystemLogs_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-loader", 5);
  }
  if (rf & 2) {
    \u0275\u0275property("rows", 8);
  }
}
function SystemLogs_Conditional_24_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275text(2, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No logs found for the selected filter.");
    \u0275\u0275elementEnd()();
  }
}
function SystemLogs_Conditional_24_Conditional_25_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 25);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const log_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 14, log_r2.eventTimestamp, "dd/MM/yy HH:mm:ss"));
    \u0275\u0275advance(2);
    \u0275\u0275property("title", log_r2.endpoint);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r2.endpoint);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("method-badge method-", log_r2.httpMethod == null ? null : log_r2.httpMethod.toLowerCase()));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r2.httpMethod);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("status-badge " + ctx_r2.getStatusClass(log_r2.responseStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", log_r2.responseStatus, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", log_r2.executionTimeMs, " ms");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r2.actingUserId || "-");
    \u0275\u0275advance();
    \u0275\u0275property("title", log_r2.errorMessage || "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r2.errorMessage || "-");
  }
}
function SystemLogs_Conditional_24_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "table", 20)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Timestamp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Endpoint");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Execution Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "User ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Error");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, SystemLogs_Conditional_24_Conditional_25_For_19_Template, 18, 17, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 21)(21, "button", 22);
    \u0275\u0275listener("click", function SystemLogs_Conditional_24_Conditional_25_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.prevPage());
    });
    \u0275\u0275text(22, "\u2039 Prev");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 23);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 22);
    \u0275\u0275listener("click", function SystemLogs_Conditional_24_Conditional_25_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.nextPage());
    });
    \u0275\u0275text(26, "Next \u203A");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r2.logs);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.page === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r2.page + 1, " of ", ctx_r2.totalPages || 1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.page >= ctx_r2.totalPages - 1);
  }
}
function SystemLogs_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9);
    \u0275\u0275text(5, "Total Logs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 10)(7, "div", 8);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 9);
    \u0275\u0275text(10, "Success");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 11)(12, "div", 8);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 9);
    \u0275\u0275text(15, "Errors");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 12)(17, "app-chart-card", 13)(18, "div", 14);
    \u0275\u0275element(19, "canvas", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "app-chart-card", 16)(21, "div", 14);
    \u0275\u0275element(22, "canvas", 15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 17);
    \u0275\u0275conditionalCreate(24, SystemLogs_Conditional_24_Conditional_24_Template, 5, 0, "div", 18)(25, SystemLogs_Conditional_24_Conditional_25_Template, 27, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.totalElements);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.successCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.errorCount);
    \u0275\u0275advance(6);
    \u0275\u0275property("data", ctx_r2.errorRateData)("options", ctx_r2.chartOptions)("type", "doughnut");
    \u0275\u0275advance(3);
    \u0275\u0275property("data", ctx_r2.responseTimeData)("options", ctx_r2.chartOptions)("type", "line");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.logs.length === 0 ? 24 : 25);
  }
}
var SystemLogs = class _SystemLogs {
  constructor(systemLogApi) {
    this.systemLogApi = systemLogApi;
    this.loading = false;
    this.logs = [];
    this.page = 0;
    this.size = 20;
    this.totalElements = 0;
    this.displayedColumns = [
      "eventTimestamp",
      "endpoint",
      "httpMethod",
      "responseStatus",
      "executionTimeMs",
      "actingUserId",
      "errorMessage"
    ];
    this.errorRateData = {
      labels: ["Success", "Error"],
      datasets: [
        {
          data: [0, 0],
          backgroundColor: ["#22c55e", "#ef4444"]
        }
      ]
    };
    this.responseTimeData = {
      labels: [],
      datasets: [
        {
          data: [],
          label: "Response Time (ms)",
          tension: 0.4,
          borderColor: "#6366f1",
          backgroundColor: "rgba(99,102,241,0.1)",
          fill: true
        }
      ]
    };
    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false
    };
  }
  ngOnInit() {
    this.loadLogs();
  }
  // Load logs
  loadLogs() {
    this.loading = true;
    this.systemLogApi.getSystemLogs(this.page, this.size, this.selectedStatus).subscribe({
      next: (response) => {
        this.logs = response.content;
        this.totalElements = response.totalElements;
        this.bindCharts();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  // Filter change
  onStatusChange() {
    this.page = 0;
    this.loadLogs();
  }
  // Bind chart data
  bindCharts() {
    const successCount = this.logs.filter((log) => log.responseStatus < 400).length;
    const errorCount = this.logs.filter((log) => log.responseStatus >= 400).length;
    this.errorRateData = {
      labels: ["Success", "Error"],
      datasets: [
        {
          data: [successCount, errorCount],
          backgroundColor: ["#22c55e", "#ef4444"]
        }
      ]
    };
    this.responseTimeData = {
      labels: this.logs.map((log) => new Date(log.eventTimestamp).toLocaleTimeString()),
      datasets: [
        {
          data: this.logs.map((log) => log.executionTimeMs),
          label: "Response Time (ms)",
          tension: 0.4,
          borderColor: "#6366f1",
          backgroundColor: "rgba(99,102,241,0.1)",
          fill: true
        }
      ]
    };
  }
  // Status CSS class
  getStatusClass(status) {
    if (status >= 500)
      return "status-server-error";
    if (status >= 400)
      return "status-client-error";
    return "status-success";
  }
  get successCount() {
    return this.logs.filter((l) => l.responseStatus < 400).length;
  }
  get errorCount() {
    return this.logs.filter((l) => l.responseStatus >= 400).length;
  }
  // Pagination
  get totalPages() {
    return Math.ceil(this.totalElements / this.size);
  }
  prevPage() {
    if (this.page > 0) {
      this.page--;
      this.loadLogs();
    }
  }
  nextPage() {
    if (this.page < this.totalPages - 1) {
      this.page++;
      this.loadLogs();
    }
  }
  static {
    this.\u0275fac = function SystemLogs_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SystemLogs)(\u0275\u0275directiveInject(SystemLogApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemLogs, selectors: [["app-system-logs"]], decls: 25, vars: 9, consts: [[1, "system-logs-page"], [1, "page-header"], ["appearance", "outline"], [3, "ngModelChange", "selectionChange", "ngModel"], [3, "value"], [3, "rows"], [1, "stats-row"], [1, "stat-card"], [1, "stat-value"], [1, "stat-label"], [1, "stat-card", "success"], [1, "stat-card", "error"], [1, "chart-grid"], ["title", "Success vs Error Rate"], [1, "chart-container"], ["baseChart", "", 3, "data", "options", "type"], ["title", "Response Time Trend"], [1, "table-card"], [1, "empty-state"], [1, "empty-icon"], [1, "logs-table"], [1, "pagination"], [1, "pg-btn", 3, "click", "disabled"], [1, "pg-info"], [1, "endpoint-cell", 3, "title"], [1, "error-cell", 3, "title"]], template: function SystemLogs_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "System Audit Logs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Monitor API execution time, errors, and activity across all endpoints.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "mat-form-field", 2)(8, "mat-label");
        \u0275\u0275text(9, "Status Filter");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "mat-select", 3);
        \u0275\u0275twoWayListener("ngModelChange", function SystemLogs_Template_mat_select_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
          return $event;
        });
        \u0275\u0275listener("selectionChange", function SystemLogs_Template_mat_select_selectionChange_10_listener() {
          return ctx.onStatusChange();
        });
        \u0275\u0275elementStart(11, "mat-option", 4);
        \u0275\u0275text(12, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-option", 4);
        \u0275\u0275text(14, "200 OK");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "mat-option", 4);
        \u0275\u0275text(16, "400 Bad Request");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "mat-option", 4);
        \u0275\u0275text(18, "401 Unauthorized");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "mat-option", 4);
        \u0275\u0275text(20, "403 Forbidden");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "mat-option", 4);
        \u0275\u0275text(22, "500 Server Error");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(23, SystemLogs_Conditional_23_Template, 1, 1, "app-skeleton-loader", 5);
        \u0275\u0275conditionalCreate(24, SystemLogs_Conditional_24_Template, 26, 10);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatus);
        \u0275\u0275advance();
        \u0275\u0275property("value", void 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 200);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 400);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 401);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 403);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 500);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading ? 24 : -1);
      }
    }, dependencies: [
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatSelectModule,
      MatSelect,
      MatOption,
      FormsModule,
      NgControlStatus,
      NgModel,
      CommonModule,
      BaseChartDirective,
      SkeletonLoaderComponent,
      ChartCard,
      DatePipe
    ], styles: ["\n.system-logs-page[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: #f7f9fc;\n  min-height: 100vh;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  color: #111827;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #6b7280;\n}\n.chart-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n.chart-container[_ngcontent-%COMP%] {\n  height: 260px;\n}\n.table-card[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  background: #ffffff;\n  border-radius: 18px;\n  padding: 20px;\n  overflow-x: auto;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);\n}\n.logs-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.logs-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.logs-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-bottom: 1px solid #e5e7eb;\n  text-align: left;\n  font-size: 14px;\n}\n.status-success[_ngcontent-%COMP%] {\n  color: #059669;\n  font-weight: 700;\n}\n.status-client-error[_ngcontent-%COMP%] {\n  color: #d97706;\n  font-weight: 700;\n}\n.status-server-error[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-weight: 700;\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .chart-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=system-logs.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemLogs, [{
    type: Component,
    args: [{ selector: "app-system-logs", standalone: true, imports: [
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      CommonModule,
      BaseChartDirective,
      SkeletonLoaderComponent,
      ChartCard
    ], template: `<div class="system-logs-page">

  <!-- Header -->
  <div class="page-header">
    <div>
      <h1>System Audit Logs</h1>
      <p>Monitor API execution time, errors, and activity across all endpoints.</p>
    </div>

    <mat-form-field appearance="outline">
      <mat-label>Status Filter</mat-label>
      <mat-select
        [(ngModel)]="selectedStatus"
        (selectionChange)="onStatusChange()">

        <mat-option [value]="undefined">All</mat-option>
        <mat-option [value]="200">200 OK</mat-option>
        <mat-option [value]="400">400 Bad Request</mat-option>
        <mat-option [value]="401">401 Unauthorized</mat-option>
        <mat-option [value]="403">403 Forbidden</mat-option>
        <mat-option [value]="500">500 Server Error</mat-option>

      </mat-select>
    </mat-form-field>
  </div>

  <!-- Loader -->
  @if (loading) {
    <app-skeleton-loader [rows]="8"></app-skeleton-loader>
  }

  <!-- Content -->
  @if (!loading) {

    <!-- Stats summary -->
    <div class="stats-row">
      <div class="stat-card">
        <div class="stat-value">{{ totalElements }}</div>
        <div class="stat-label">Total Logs</div>
      </div>
      <div class="stat-card success">
        <div class="stat-value">{{ successCount }}</div>
        <div class="stat-label">Success</div>
      </div>
      <div class="stat-card error">
        <div class="stat-value">{{ errorCount }}</div>
        <div class="stat-label">Errors</div>
      </div>
    </div>

    <!-- Charts -->
    <div class="chart-grid">
      <app-chart-card title="Success vs Error Rate">
        <div class="chart-container">
          <canvas
            baseChart
            [data]="errorRateData"
            [options]="chartOptions"
            [type]="'doughnut'">
          </canvas>
        </div>
      </app-chart-card>

      <app-chart-card title="Response Time Trend">
        <div class="chart-container">
          <canvas
            baseChart
            [data]="responseTimeData"
            [options]="chartOptions"
            [type]="'line'">
          </canvas>
        </div>
      </app-chart-card>
    </div>

    <!-- Table -->
    <div class="table-card">
      @if (logs.length === 0) {
        <div class="empty-state">
          <div class="empty-icon">\u{1F4CB}</div>
          <p>No logs found for the selected filter.</p>
        </div>
      } @else {
        <table class="logs-table">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Endpoint</th>
              <th>Method</th>
              <th>Status</th>
              <th>Execution Time</th>
              <th>User ID</th>
              <th>Error</th>
            </tr>
          </thead>

          <tbody>
            @for (log of logs; track log.id) {
              <tr>
                <td>{{ log.eventTimestamp | date:'dd/MM/yy HH:mm:ss' }}</td>
                <td class="endpoint-cell" [title]="log.endpoint">{{ log.endpoint }}</td>
                <td><span class="method-badge method-{{ log.httpMethod?.toLowerCase() }}">{{ log.httpMethod }}</span></td>
                <td>
                  <span [class]="'status-badge ' + getStatusClass(log.responseStatus)">
                    {{ log.responseStatus }}
                  </span>
                </td>
                <td>{{ log.executionTimeMs }} ms</td>
                <td>{{ log.actingUserId || '-' }}</td>
                <td class="error-cell" [title]="log.errorMessage || ''">{{ log.errorMessage || '-' }}</td>
              </tr>
            }
          </tbody>
        </table>

        <!-- Pagination -->
        <div class="pagination">
          <button class="pg-btn" (click)="prevPage()" [disabled]="page === 0">\u2039 Prev</button>
          <span class="pg-info">Page {{ page + 1 }} of {{ totalPages || 1 }}</span>
          <button class="pg-btn" (click)="nextPage()" [disabled]="page >= totalPages - 1">Next \u203A</button>
        </div>
      }
    </div>

  }

</div>`, styles: ["/* src/app/features/system-logs/system-logs.css */\n.system-logs-page {\n  padding: 24px;\n  background: #f7f9fc;\n  min-height: 100vh;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header h1 {\n  margin: 0;\n  font-size: 28px;\n  color: #111827;\n}\n.page-header p {\n  margin: 4px 0 0;\n  color: #6b7280;\n}\n.chart-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n.chart-container {\n  height: 260px;\n}\n.table-card {\n  margin-top: 24px;\n  background: #ffffff;\n  border-radius: 18px;\n  padding: 20px;\n  overflow-x: auto;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);\n}\n.logs-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.logs-table th,\n.logs-table td {\n  padding: 12px;\n  border-bottom: 1px solid #e5e7eb;\n  text-align: left;\n  font-size: 14px;\n}\n.status-success {\n  color: #059669;\n  font-weight: 700;\n}\n.status-client-error {\n  color: #d97706;\n  font-weight: 700;\n}\n.status-server-error {\n  color: #dc2626;\n  font-weight: 700;\n}\n@media (max-width: 768px) {\n  .page-header {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .chart-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=system-logs.css.map */\n"] }]
  }], () => [{ type: SystemLogApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemLogs, { className: "SystemLogs", filePath: "app/features/system-logs/system-logs.ts", lineNumber: 30 });
})();

export {
  SystemLogs
};
//# sourceMappingURL=chunk-RWOIMCVF.js.map
