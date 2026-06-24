import {
  NotificationService
} from "./chunk-65BWTZ27.js";
import {
  Router,
  RouterOutlet,
  provideRouter
} from "./chunk-5EBQK35F.js";
import {
  provideCharts,
  withDefaultRegisterables
} from "./chunk-GHC4JVNF.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  NgClass,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  bootstrapApplication,
  catchError,
  inject,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  setClassMetadata,
  signal,
  throwError,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QR452MNT.js";

// src/app/core/guards/auth.guard.ts
var getUser = () => {
  try {
    const json = localStorage.getItem("user");
    return json ? JSON.parse(json) : null;
  } catch (error) {
    return null;
  }
};
var isTokenExpired = (user) => {
  if (!user?.tokenExpiresAt)
    return true;
  const expiry = new Date(user.tokenExpiresAt);
  return expiry <= /* @__PURE__ */ new Date();
};
var handleExpiredSession = (router) => {
  alert("\u26A0\uFE0F Your session has expired. Please log in again.");
  localStorage.removeItem("user");
  router.navigate(["/login"]);
  return false;
};
var authGuard = () => {
  const router = inject(Router);
  const user = getUser();
  if (!user?.userId) {
    router.navigate(["/login"]);
    return false;
  }
  if (isTokenExpired(user)) {
    return handleExpiredSession(router);
  }
  return true;
};
var adminGuard = () => {
  const router = inject(Router);
  const user = getUser();
  if (!user?.userId) {
    router.navigate(["/login"]);
    return false;
  }
  if (isTokenExpired(user)) {
    return handleExpiredSession(router);
  }
  if (!["ADMIN", "SUPER_ADMIN"].includes(user.role)) {
    router.navigate(["/dashboard"]);
    return false;
  }
  return true;
};
var customerGuard = () => {
  const router = inject(Router);
  const user = getUser();
  if (!user?.userId) {
    router.navigate(["/login"]);
    return false;
  }
  if (isTokenExpired(user)) {
    return handleExpiredSession(router);
  }
  if (user.role !== "CUSTOMER") {
    router.navigate(["/admin"]);
    return false;
  }
  return true;
};
var guestGuard = () => {
  const router = inject(Router);
  const user = getUser();
  if (!user?.userId)
    return true;
  if (["ADMIN", "SUPER_ADMIN"].includes(user.role)) {
    router.navigate(["/admin"]);
  } else if (user.role === "MANAGER") {
    router.navigate(["/manager"]);
  } else {
    router.navigate(["/dashboard"]);
  }
  return false;
};

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-7JT32PNW.js").then((m) => m.Landing)
  },
  {
    path: "login",
    loadComponent: () => import("./chunk-GM5EIKSC.js").then((m) => m.LoginComponent),
    canActivate: [guestGuard]
  },
  {
    path: "register",
    loadComponent: () => import("./chunk-54BTNHNR.js").then((m) => m.RegisterComponent),
    // loadComponent: () => import('./features/auth/register-multi/register-multi.component').then(m => m.RegisterMultiComponent),
    canActivate: [guestGuard]
  },
  {
    path: "register-openaccount",
    loadComponent: () => import("./chunk-W7XOD7TV.js").then((m) => m.RegisterMultiComponent),
    canActivate: [guestGuard]
  },
  {
    path: "admin",
    loadComponent: () => import("./chunk-WZOJQW2D.js").then((m) => m.AdminLayoutComponent),
    canActivate: [authGuard, adminGuard],
    children: []
  },
  {
    path: "dashboard",
    loadComponent: () => import("./chunk-3WRK23YU.js").then((m) => m.CustomerLayoutComponent),
    canActivate: [authGuard, customerGuard]
  },
  {
    path: "analytics",
    loadComponent: () => import("./chunk-EBBUC5AX.js").then((m) => m.CustomerAnalytics),
    canActivate: [authGuard, customerGuard]
  },
  {
    path: "admin/analytics",
    loadComponent: () => import("./chunk-Z7IP33VZ.js").then((m) => m.AdminAnalytics),
    canActivate: [authGuard, adminGuard]
  },
  {
    path: "admin/system-logs",
    loadComponent: () => import("./chunk-MYMIYEN6.js").then((m) => m.SystemLogs),
    canActivate: [authGuard, adminGuard]
  },
  {
    path: "**",
    redirectTo: ""
  }
];

// src/app/core/interceptors/jwt.interceptor.ts
var PUBLIC_ENDPOINTS = [
  "/api/auth/login",
  "/api/auth/register",
  "/api/auth/captcha",
  "/api/auth/check-username",
  "/api/auth/send-registration-otp",
  "/api/auth/forgot-username",
  "/api/auth/forgot-password",
  "/api/auth/reset-password",
  "/api/application/send-otp",
  "/api/application/submit",
  "/api/application/status"
  // '/api/upi/lookup',
];
var jwtInterceptor = (req, next) => {
  const router = inject(Router);
  const token = localStorage.getItem("token");
  const isPublic = PUBLIC_ENDPOINTS.some((ep) => req.url.includes(ep));
  if (token && !isPublic) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  return next(req).pipe(catchError((err) => {
    if (err.status === 401) {
      alert("Session expired. Please log in again.");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      router.navigate(["/login"]);
    }
    return throwError(() => err);
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([jwtInterceptor])),
    provideCharts(withDefaultRegisterables())
  ]
};

// src/app/features/notification/notification.component.ts
function NotificationComponent_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function NotificationComponent_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u26A0");
    \u0275\u0275elementEnd();
  }
}
function NotificationComponent_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2715");
    \u0275\u0275elementEnd();
  }
}
function NotificationComponent_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2139");
    \u0275\u0275elementEnd();
  }
}
function NotificationComponent_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r2.title);
  }
}
function NotificationComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "span", 4);
    \u0275\u0275elementContainerStart(3, 5);
    \u0275\u0275template(4, NotificationComponent_div_1_span_4_Template, 2, 0, "span", 6)(5, NotificationComponent_div_1_span_5_Template, 2, 0, "span", 6)(6, NotificationComponent_div_1_span_6_Template, 2, 0, "span", 6)(7, NotificationComponent_div_1_span_7_Template, 2, 0, "span", 7);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 8);
    \u0275\u0275template(9, NotificationComponent_div_1_span_9_Template, 2, 1, "span", 9);
    \u0275\u0275elementStart(10, "span", 10);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 11);
    \u0275\u0275listener("click", function NotificationComponent_div_1_Template_button_click_12_listener() {
      const n_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.remove(n_r2.id));
    });
    \u0275\u0275text(13, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 12);
    \u0275\u0275element(15, "div", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const n_r2 = ctx.$implicit;
    \u0275\u0275classProp("removing", n_r2.removing);
    \u0275\u0275property("ngClass", n_r2.type);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngSwitch", n_r2.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "warning");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "danger");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", n_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r2.message);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("--duration", (n_r2.duration ?? 4e3) + "ms");
  }
}
var NotificationComponent = class _NotificationComponent {
  constructor(notificationService) {
    this.notificationService = notificationService;
    this.notifications$ = this.notificationService.notifications$;
  }
  trackById(_, n) {
    return n.id;
  }
  remove(id) {
    this.notificationService.remove(id);
  }
  static {
    this.\u0275fac = function NotificationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotificationComponent)(\u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationComponent, selectors: [["app-notification"]], decls: 3, vars: 4, consts: [[1, "notification-container"], ["class", "toast", "role", "alert", "aria-live", "assertive", 3, "ngClass", "removing", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "alert", "aria-live", "assertive", 1, "toast", 3, "ngClass"], [1, "toast-body"], ["aria-hidden", "true", 1, "toast-icon"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "toast-text"], ["class", "toast-title", 4, "ngIf"], [1, "toast-message"], ["aria-label", "Dismiss notification", 1, "close-btn", 3, "click"], ["aria-hidden", "true", 1, "toast-progress-track"], [1, "toast-progress"], [1, "toast-title"]], template: function NotificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, NotificationComponent_div_1_Template, 16, 11, "div", 1);
        \u0275\u0275pipe(2, "async");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 2, ctx.notifications$))("ngForTrackBy", ctx.trackById);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, AsyncPipe], styles: ["\n[_nghost-%COMP%] {\n  --toast-radius: 10px;\n  --toast-min-w: 300px;\n  --toast-max-w: 380px;\n  --toast-padding: 14px 16px 0 16px;\n  --bar-height: 3px;\n  --bar-radius: 0 0 var(--toast-radius) var(--toast-radius);\n}\n.notification-container[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 24px;\n  z-index: 9999;\n  display: flex;\n  gap: 10px;\n  pointer-events: none;\n}\n.notification-container[_ngcontent-%COMP%] {\n  top: 20px;\n  flex-direction: column;\n}\n.toast[_ngcontent-%COMP%] {\n  pointer-events: all;\n  min-width: var(--toast-min-w);\n  max-width: var(--toast-max-w);\n  border-radius: var(--toast-radius);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  background: var(--toast-bg);\n  border: 1px solid var(--toast-border);\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.06);\n  animation: _ngcontent-%COMP%_toastIn 0.32s cubic-bezier(0.22, 1, 0.36, 1) both;\n}\n.toast.removing[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_toastOut 0.24s cubic-bezier(0.55, 0, 1, 0.45) forwards;\n}\n.toast-body[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: var(--toast-padding);\n  padding-bottom: 12px;\n}\n.toast-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  margin-top: 1px;\n  background: var(--icon-bg);\n  color: var(--icon-color);\n}\n.toast-text[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.toast-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  color: var(--toast-title);\n  line-height: 1.35;\n}\n.toast-message[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 400;\n  color: var(--toast-msg);\n  line-height: 1.5;\n}\n.close-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  align-self: flex-start;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 2px 4px;\n  border-radius: 4px;\n  color: var(--toast-msg);\n  font-size: 15px;\n  line-height: 1;\n  opacity: 0.55;\n  transition: opacity 0.15s, background 0.15s;\n  margin-top: -1px;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  background: var(--toast-border);\n}\n.toast-progress-track[_ngcontent-%COMP%] {\n  height: var(--bar-height);\n  background: var(--bar-track);\n}\n.toast-progress[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background: var(--bar-fill);\n  border-radius: var(--bar-radius);\n  transform-origin: left center;\n  animation: _ngcontent-%COMP%_progressShrink var(--duration, 4000ms) linear forwards;\n}\n@keyframes _ngcontent-%COMP%_toastIn {\n  from {\n    transform: translateX(110%) scale(0.96);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0) scale(1);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_toastOut {\n  from {\n    transform: translateX(0) scale(1);\n    opacity: 1;\n    max-height: 120px;\n    margin-bottom: 0;\n  }\n  to {\n    transform: translateX(110%) scale(0.94);\n    opacity: 0;\n    max-height: 0;\n    margin-bottom: -10px;\n  }\n}\n@keyframes _ngcontent-%COMP%_progressShrink {\n  from {\n    transform: scaleX(1);\n  }\n  to {\n    transform: scaleX(0);\n  }\n}\n.toast.success[_ngcontent-%COMP%] {\n  --toast-bg: #f0fdf4;\n  --toast-border: #bbf7d0;\n  --toast-title: #14532d;\n  --toast-msg: #166534;\n  --icon-bg: #dcfce7;\n  --icon-color: #16a34a;\n  --bar-track: #bbf7d0;\n  --bar-fill: #16a34a;\n}\n.toast.warning[_ngcontent-%COMP%] {\n  --toast-bg: #fffbeb;\n  --toast-border: #fde68a;\n  --toast-title: #78350f;\n  --toast-msg: #92400e;\n  --icon-bg: #fef3c7;\n  --icon-color: #d97706;\n  --bar-track: #fde68a;\n  --bar-fill: #d97706;\n}\n.toast.danger[_ngcontent-%COMP%] {\n  --toast-bg: #fff1f2;\n  --toast-border: #fecdd3;\n  --toast-title: #881337;\n  --toast-msg: #9f1239;\n  --icon-bg: #ffe4e6;\n  --icon-color: #e11d48;\n  --bar-track: #fecdd3;\n  --bar-fill: #e11d48;\n}\n.toast.info[_ngcontent-%COMP%] {\n  --toast-bg: #eff6ff;\n  --toast-border: #bfdbfe;\n  --toast-title: #1e3a8a;\n  --toast-msg: #1d4ed8;\n  --icon-bg: #dbeafe;\n  --icon-color: #2563eb;\n  --bar-track: #bfdbfe;\n  --bar-fill: #2563eb;\n}\n.dark[_nghost-%COMP%]   .toast.success[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .toast.success[_ngcontent-%COMP%], \n.dark[_ngcontent-%COMP%]   .toast.success[_ngcontent-%COMP%] {\n  --toast-bg: #052e16;\n  --toast-border: #14532d;\n  --toast-title: #bbf7d0;\n  --toast-msg: #86efac;\n  --icon-bg: #14532d;\n  --icon-color: #4ade80;\n  --bar-track: #14532d;\n  --bar-fill: #4ade80;\n}\n.dark[_nghost-%COMP%]   .toast.warning[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .toast.warning[_ngcontent-%COMP%], \n.dark[_ngcontent-%COMP%]   .toast.warning[_ngcontent-%COMP%] {\n  --toast-bg: #1c1003;\n  --toast-border: #78350f;\n  --toast-title: #fde68a;\n  --toast-msg: #fcd34d;\n  --icon-bg: #78350f;\n  --icon-color: #fbbf24;\n  --bar-track: #78350f;\n  --bar-fill: #fbbf24;\n}\n.dark[_nghost-%COMP%]   .toast.danger[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .toast.danger[_ngcontent-%COMP%], \n.dark[_ngcontent-%COMP%]   .toast.danger[_ngcontent-%COMP%] {\n  --toast-bg: #1c0508;\n  --toast-border: #881337;\n  --toast-title: #fecdd3;\n  --toast-msg: #fda4af;\n  --icon-bg: #881337;\n  --icon-color: #fb7185;\n  --bar-track: #881337;\n  --bar-fill: #fb7185;\n}\n.dark[_nghost-%COMP%]   .toast.info[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .toast.info[_ngcontent-%COMP%], \n.dark[_ngcontent-%COMP%]   .toast.info[_ngcontent-%COMP%] {\n  --toast-bg: #03122b;\n  --toast-border: #1e3a8a;\n  --toast-title: #bfdbfe;\n  --toast-msg: #93c5fd;\n  --icon-bg: #1e3a8a;\n  --icon-color: #60a5fa;\n  --bar-track: #1e3a8a;\n  --bar-fill: #60a5fa;\n}\n/*# sourceMappingURL=notification.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationComponent, [{
    type: Component,
    args: [{ selector: "app-notification", standalone: true, imports: [CommonModule], template: `<!-- notification.component.html -->
<div class="notification-container">
  <div
    *ngFor="let n of notifications$ | async; trackBy: trackById"
    class="toast"
    [ngClass]="n.type"
    [class.removing]="n.removing"
    role="alert"
    aria-live="assertive"
  >
    <!-- Body -->
    <div class="toast-body">
      <!-- Icon -->
      <span class="toast-icon" aria-hidden="true">
        <ng-container [ngSwitch]="n.type">
          <span *ngSwitchCase="'success'">\u2713</span>
          <span *ngSwitchCase="'warning'">\u26A0</span>
          <span *ngSwitchCase="'danger'">\u2715</span>
          <span *ngSwitchDefault>\u2139</span>
        </ng-container>
      </span>

      <!-- Text -->
      <div class="toast-text">
        <span class="toast-title" *ngIf="n.title">{{ n.title }}</span>
        <span class="toast-message">{{ n.message }}</span>
      </div>

      <!-- Close -->
      <button
        class="close-btn"
        (click)="remove(n.id)"
        aria-label="Dismiss notification"
      >\u2715</button>
    </div>

    <!-- Expiry progress bar -->
    <div class="toast-progress-track" aria-hidden="true">
      <div
        class="toast-progress"
        [style.--duration]="(n.duration ?? 4000) + 'ms'"
      ></div>
    </div>
  </div>
</div>`, styles: ["/* src/app/features/notification/notification.component.css */\n:host {\n  --toast-radius: 10px;\n  --toast-min-w: 300px;\n  --toast-max-w: 380px;\n  --toast-padding: 14px 16px 0 16px;\n  --bar-height: 3px;\n  --bar-radius: 0 0 var(--toast-radius) var(--toast-radius);\n}\n.notification-container {\n  position: fixed;\n  right: 24px;\n  z-index: 9999;\n  display: flex;\n  gap: 10px;\n  pointer-events: none;\n}\n.notification-container {\n  top: 20px;\n  flex-direction: column;\n}\n.toast {\n  pointer-events: all;\n  min-width: var(--toast-min-w);\n  max-width: var(--toast-max-w);\n  border-radius: var(--toast-radius);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  background: var(--toast-bg);\n  border: 1px solid var(--toast-border);\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.06);\n  animation: toastIn 0.32s cubic-bezier(0.22, 1, 0.36, 1) both;\n}\n.toast.removing {\n  animation: toastOut 0.24s cubic-bezier(0.55, 0, 1, 0.45) forwards;\n}\n.toast-body {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: var(--toast-padding);\n  padding-bottom: 12px;\n}\n.toast-icon {\n  flex-shrink: 0;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  margin-top: 1px;\n  background: var(--icon-bg);\n  color: var(--icon-color);\n}\n.toast-text {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.toast-title {\n  font-size: 13px;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  color: var(--toast-title);\n  line-height: 1.35;\n}\n.toast-message {\n  font-size: 13px;\n  font-weight: 400;\n  color: var(--toast-msg);\n  line-height: 1.5;\n}\n.close-btn {\n  flex-shrink: 0;\n  align-self: flex-start;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 2px 4px;\n  border-radius: 4px;\n  color: var(--toast-msg);\n  font-size: 15px;\n  line-height: 1;\n  opacity: 0.55;\n  transition: opacity 0.15s, background 0.15s;\n  margin-top: -1px;\n}\n.close-btn:hover {\n  opacity: 1;\n  background: var(--toast-border);\n}\n.toast-progress-track {\n  height: var(--bar-height);\n  background: var(--bar-track);\n}\n.toast-progress {\n  height: 100%;\n  width: 100%;\n  background: var(--bar-fill);\n  border-radius: var(--bar-radius);\n  transform-origin: left center;\n  animation: progressShrink var(--duration, 4000ms) linear forwards;\n}\n@keyframes toastIn {\n  from {\n    transform: translateX(110%) scale(0.96);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0) scale(1);\n    opacity: 1;\n  }\n}\n@keyframes toastOut {\n  from {\n    transform: translateX(0) scale(1);\n    opacity: 1;\n    max-height: 120px;\n    margin-bottom: 0;\n  }\n  to {\n    transform: translateX(110%) scale(0.94);\n    opacity: 0;\n    max-height: 0;\n    margin-bottom: -10px;\n  }\n}\n@keyframes progressShrink {\n  from {\n    transform: scaleX(1);\n  }\n  to {\n    transform: scaleX(0);\n  }\n}\n.toast.success {\n  --toast-bg: #f0fdf4;\n  --toast-border: #bbf7d0;\n  --toast-title: #14532d;\n  --toast-msg: #166534;\n  --icon-bg: #dcfce7;\n  --icon-color: #16a34a;\n  --bar-track: #bbf7d0;\n  --bar-fill: #16a34a;\n}\n.toast.warning {\n  --toast-bg: #fffbeb;\n  --toast-border: #fde68a;\n  --toast-title: #78350f;\n  --toast-msg: #92400e;\n  --icon-bg: #fef3c7;\n  --icon-color: #d97706;\n  --bar-track: #fde68a;\n  --bar-fill: #d97706;\n}\n.toast.danger {\n  --toast-bg: #fff1f2;\n  --toast-border: #fecdd3;\n  --toast-title: #881337;\n  --toast-msg: #9f1239;\n  --icon-bg: #ffe4e6;\n  --icon-color: #e11d48;\n  --bar-track: #fecdd3;\n  --bar-fill: #e11d48;\n}\n.toast.info {\n  --toast-bg: #eff6ff;\n  --toast-border: #bfdbfe;\n  --toast-title: #1e3a8a;\n  --toast-msg: #1d4ed8;\n  --icon-bg: #dbeafe;\n  --icon-color: #2563eb;\n  --bar-track: #bfdbfe;\n  --bar-fill: #2563eb;\n}\n:host-context(.dark) .toast.success,\n.dark .toast.success {\n  --toast-bg: #052e16;\n  --toast-border: #14532d;\n  --toast-title: #bbf7d0;\n  --toast-msg: #86efac;\n  --icon-bg: #14532d;\n  --icon-color: #4ade80;\n  --bar-track: #14532d;\n  --bar-fill: #4ade80;\n}\n:host-context(.dark) .toast.warning,\n.dark .toast.warning {\n  --toast-bg: #1c1003;\n  --toast-border: #78350f;\n  --toast-title: #fde68a;\n  --toast-msg: #fcd34d;\n  --icon-bg: #78350f;\n  --icon-color: #fbbf24;\n  --bar-track: #78350f;\n  --bar-fill: #fbbf24;\n}\n:host-context(.dark) .toast.danger,\n.dark .toast.danger {\n  --toast-bg: #1c0508;\n  --toast-border: #881337;\n  --toast-title: #fecdd3;\n  --toast-msg: #fda4af;\n  --icon-bg: #881337;\n  --icon-color: #fb7185;\n  --bar-track: #881337;\n  --bar-fill: #fb7185;\n}\n:host-context(.dark) .toast.info,\n.dark .toast.info {\n  --toast-bg: #03122b;\n  --toast-border: #1e3a8a;\n  --toast-title: #bfdbfe;\n  --toast-msg: #93c5fd;\n  --icon-bg: #1e3a8a;\n  --icon-color: #60a5fa;\n  --bar-track: #1e3a8a;\n  --bar-fill: #60a5fa;\n}\n/*# sourceMappingURL=notification.component.css.map */\n"] }]
  }], () => [{ type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationComponent, { className: "NotificationComponent", filePath: "app/features/notification/notification.component.ts", lineNumber: 13 });
})();

// src/app/app.ts
var App = class _App {
  constructor() {
    this.title = signal("neobank_frontend_v_1", ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function App_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _App)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 2, vars: 0, template: function App_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-notification")(1, "router-outlet");
      }
    }, dependencies: [
      RouterOutlet,
      NotificationComponent
      // ,DevMailPopupComponent
    ], styles: [`
[_ngcontent-%COMP%]:root {
  --primary: #6366f1;
  --primary-dark: #4f46e5;
  --primary-light: #a5b4fc;
  --secondary: #10b981;
  --secondary-dark: #059669;
  --danger: #ef4444;
  --warning: #f59e0b;
  --info: #3b82f6;
  --dark: #1f2937;
  --gray: #6b7280;
  --gray-light: #9ca3af;
  --light: #f9fafb;
  --white: #ffffff;
  --background: #f3f4f6;
  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  --card-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --border-radius: 12px;
  --border-radius-sm: 8px;
  --transition: all 0.3s ease;
}
*[_ngcontent-%COMP%] {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body[_ngcontent-%COMP%] {
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    sans-serif;
  background-color: var(--background);
  color: var(--dark);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
.container[_ngcontent-%COMP%] {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
h1[_ngcontent-%COMP%], 
h2[_ngcontent-%COMP%], 
h3[_ngcontent-%COMP%], 
h4[_ngcontent-%COMP%], 
h5[_ngcontent-%COMP%], 
h6[_ngcontent-%COMP%] {
  font-weight: 600;
  line-height: 1.3;
}
h1[_ngcontent-%COMP%] {
  font-size: 2.5rem;
}
h2[_ngcontent-%COMP%] {
  font-size: 2rem;
}
h3[_ngcontent-%COMP%] {
  font-size: 1.5rem;
}
h4[_ngcontent-%COMP%] {
  font-size: 1.25rem;
}
.btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;
  gap: 8px;
}
.btn[_ngcontent-%COMP%]:hover {
  transform: translateY(-1px);
}
.btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}
.btn-primary[_ngcontent-%COMP%] {
  background: var(--primary);
  color: var(--white);
}
.btn-primary[_ngcontent-%COMP%]:hover {
  background: var(--primary-dark);
}
.btn-secondary[_ngcontent-%COMP%] {
  background: var(--secondary);
  color: var(--white);
}
.btn-secondary[_ngcontent-%COMP%]:hover {
  background: var(--secondary-dark);
}
.btn-outline[_ngcontent-%COMP%] {
  background: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
}
.btn-outline[_ngcontent-%COMP%]:hover {
  background: var(--primary);
  color: var(--white);
}
.btn-danger[_ngcontent-%COMP%] {
  background: var(--danger);
  color: var(--white);
}
.btn-sm[_ngcontent-%COMP%] {
  padding: 8px 16px;
  font-size: 0.875rem;
}
.btn-lg[_ngcontent-%COMP%] {
  padding: 16px 32px;
  font-size: 1.125rem;
}
.form-group[_ngcontent-%COMP%] {
  margin-bottom: 20px;
}
.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--dark);
}
.form-control[_ngcontent-%COMP%] {
  width: 100%;
  padding: 12px 16px;
  font-size: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: var(--border-radius-sm);
  transition: var(--transition);
  background: var(--white);
}
.form-control[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}
.form-control[_ngcontent-%COMP%]::placeholder {
  color: var(--gray-light);
}
.form-control.error[_ngcontent-%COMP%] {
  border-color: var(--danger);
}
select.form-control[_ngcontent-%COMP%] {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E");
  background-position: right 12px center;
  background-repeat: no-repeat;
  background-size: 20px;
  padding-right: 40px;
}
.alert[_ngcontent-%COMP%] {
  padding: 16px;
  border-radius: var(--border-radius-sm);
  margin-bottom: 20px;
}
.alert-success[_ngcontent-%COMP%] {
  background: #d1fae5;
  color: #065f46;
  border: 1px solid #34d399;
}
.alert-error[_ngcontent-%COMP%] {
  background: #fee2e2;
  color: #991b1b;
  border: 1px solid #f87171;
}
.alert-warning[_ngcontent-%COMP%] {
  background: #fef3c7;
  color: #92400e;
  border: 1px solid #fbbf24;
}
.alert-info[_ngcontent-%COMP%] {
  background: #dbeafe;
  color: #1e40af;
  border: 1px solid #60a5fa;
}
.card[_ngcontent-%COMP%] {
  background: var(--white);
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  padding: 24px;
}
.card-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e5e7eb;
}
.card-title[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  font-weight: 600;
}
.table[_ngcontent-%COMP%] {
  width: 100%;
  background: var(--white);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--card-shadow);
}
.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], 
.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 16px;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
}
.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  background: #f9fafb;
  font-weight: 600;
  color: var(--dark);
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {
  background: #f9fafb;
}
.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {
  border-bottom: none;
}
.text-success[_ngcontent-%COMP%] {
  color: var(--secondary);
}
.text-danger[_ngcontent-%COMP%] {
  color: var(--danger);
}
.text-warning[_ngcontent-%COMP%] {
  color: var(--warning);
}
.text-info[_ngcontent-%COMP%] {
  color: var(--info);
}
.text-muted[_ngcontent-%COMP%] {
  color: var(--gray);
}
.text-center[_ngcontent-%COMP%] {
  text-align: center;
}
.text-right[_ngcontent-%COMP%] {
  text-align: right;
}
.flex[_ngcontent-%COMP%] {
  display: flex;
}
.flex-col[_ngcontent-%COMP%] {
  flex-direction: column;
}
.items-center[_ngcontent-%COMP%] {
  align-items: center;
}
.justify-center[_ngcontent-%COMP%] {
  justify-content: center;
}
.justify-between[_ngcontent-%COMP%] {
  justify-content: space-between;
}
.gap-2[_ngcontent-%COMP%] {
  gap: 8px;
}
.gap-4[_ngcontent-%COMP%] {
  gap: 16px;
}
.gap-6[_ngcontent-%COMP%] {
  gap: 24px;
}
.mt-2[_ngcontent-%COMP%] {
  margin-top: 8px;
}
.mt-4[_ngcontent-%COMP%] {
  margin-top: 16px;
}
.mt-6[_ngcontent-%COMP%] {
  margin-top: 24px;
}
.mb-2[_ngcontent-%COMP%] {
  margin-bottom: 8px;
}
.mb-4[_ngcontent-%COMP%] {
  margin-bottom: 16px;
}
.mb-6[_ngcontent-%COMP%] {
  margin-bottom: 24px;
}
.p-4[_ngcontent-%COMP%] {
  padding: 16px;
}
.p-6[_ngcontent-%COMP%] {
  padding: 24px;
}
.w-full[_ngcontent-%COMP%] {
  width: 100%;
}
.hidden[_ngcontent-%COMP%] {
  display: none;
}
.visually-hidden[_ngcontent-%COMP%] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
a[_ngcontent-%COMP%] {
  color: var(--primary);
  text-decoration: none;
  transition: var(--transition);
}
a[_ngcontent-%COMP%]:hover {
  color: var(--primary-dark);
}
.loading-spinner[_ngcontent-%COMP%] {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: var(--white);
  animation: _ngcontent-%COMP%_spin 1s ease-in-out infinite;
}
@keyframes _ngcontent-%COMP%_spin {
  to {
    transform: rotate(360deg);
  }
}
.badge[_ngcontent-%COMP%] {
  display: inline-block;
  padding: 4px 12px;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.badge-success[_ngcontent-%COMP%] {
  background: #d1fae5;
  color: #065f46;
}
.badge-warning[_ngcontent-%COMP%] {
  background: #fef3c7;
  color: #92400e;
}
.badge-danger[_ngcontent-%COMP%] {
  background: #fee2e2;
  color: #991b1b;
}
.badge-info[_ngcontent-%COMP%] {
  background: #dbeafe;
  color: #1e40af;
}
@media (max-width: 768px) {
  h1[_ngcontent-%COMP%] {
    font-size: 2rem;
  }
  h2[_ngcontent-%COMP%] {
    font-size: 1.5rem;
  }
  .container[_ngcontent-%COMP%] {
    padding: 0 16px;
  }
  .btn[_ngcontent-%COMP%] {
    padding: 10px 20px;
  }
  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], 
   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
    padding: 12px;
  }
}
[_ngcontent-%COMP%]:root.dark {
  --primary: #818cf8;
  --primary-dark: #6366f1;
  --primary-light: #c7d2fe;
  --secondary: #34d399;
  --secondary-dark: #10b981;
  --danger: #f87171;
  --warning: #fbbf24;
  --info: #60a5fa;
  --dark: #f9fafb;
  --gray: #9ca3af;
  --gray-light: #6b7280;
  --light: #111827;
  --white: #1f2937;
  --background: #0f172a;
  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2);
  --card-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2);
}
[_ngcontent-%COMP%]:root.dark   body[_ngcontent-%COMP%] {
  background-color: var(--background);
  color: var(--dark);
}
[_ngcontent-%COMP%]:root.dark   .card[_ngcontent-%COMP%], 
[_ngcontent-%COMP%]:root.dark   .header[_ngcontent-%COMP%], 
[_ngcontent-%COMP%]:root.dark   .sidebar[_ngcontent-%COMP%], 
[_ngcontent-%COMP%]:root.dark   .table[_ngcontent-%COMP%], 
[_ngcontent-%COMP%]:root.dark   .form-card[_ngcontent-%COMP%], 
[_ngcontent-%COMP%]:root.dark   .kyc-form[_ngcontent-%COMP%], 
[_ngcontent-%COMP%]:root.dark   .modal[_ngcontent-%COMP%] {
  background-color: var(--white);
  border-color: #374151;
}
[_ngcontent-%COMP%]:root.dark   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  background-color: #1f2937;
  border-color: #374151;
}
[_ngcontent-%COMP%]:root.dark   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], 
[_ngcontent-%COMP%]:root.dark   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  border-color: #374151;
  color: #d1d5db;
}
[_ngcontent-%COMP%]:root.dark   .form-control[_ngcontent-%COMP%] {
  background-color: #1f2937;
  border-color: #374151;
  color: #f9fafb;
}
[_ngcontent-%COMP%]:root.dark   .form-control[_ngcontent-%COMP%]:focus {
  border-color: var(--primary);
}
[_ngcontent-%COMP%]:root.dark   .form-control[_ngcontent-%COMP%]::placeholder {
  color: #6b7280;
}
[_ngcontent-%COMP%]:root.dark   .text-muted[_ngcontent-%COMP%] {
  color: #9ca3af;
}
[_ngcontent-%COMP%]:root.dark   .btn-outline[_ngcontent-%COMP%] {
  border-color: var(--primary);
  color: var(--primary);
}
[_ngcontent-%COMP%]:root.dark   .btn-outline[_ngcontent-%COMP%]:hover {
  background-color: var(--primary);
  color: white;
}
[_ngcontent-%COMP%]:root.dark   .alert-warning[_ngcontent-%COMP%] {
  background-color: #451a03;
  color: #fbbf24;
  border-color: #78350f;
}
[_ngcontent-%COMP%]:root.dark   .alert-info[_ngcontent-%COMP%] {
  background-color: #1e3a5f;
  color: #60a5fa;
  border-color: #1e40af;
}
[_ngcontent-%COMP%]:root.dark   .nav-item[_ngcontent-%COMP%]:hover {
  background-color: #1f2937;
}
[_ngcontent-%COMP%]:root.dark   .empty-state[_ngcontent-%COMP%], 
[_ngcontent-%COMP%]:root.dark   .empty-card[_ngcontent-%COMP%] {
  background-color: var(--white);
  border-color: #374151;
}
[_ngcontent-%COMP%]:root.dark   .stat-card[_ngcontent-%COMP%] {
  background-color: var(--white);
}
[_ngcontent-%COMP%]:root.dark   input[_ngcontent-%COMP%], 
[_ngcontent-%COMP%]:root.dark   select[_ngcontent-%COMP%] {
  background-color: #1f2937;
  border-color: #374151;
  color: #f9fafb;
}
/*# sourceMappingURL=app.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [
      RouterOutlet,
      NotificationComponent
      // ,DevMailPopupComponent
    ], template: "<!-- //-------------------------          app.html          -----------------------------// -->\n\n\n\n<app-notification></app-notification>\n <!-- <app-dev-mail-popup></app-dev-mail-popup> -->\n<router-outlet> </router-outlet>\n  \n", styles: [`/* src/app/app.css */
:root {
  --primary: #6366f1;
  --primary-dark: #4f46e5;
  --primary-light: #a5b4fc;
  --secondary: #10b981;
  --secondary-dark: #059669;
  --danger: #ef4444;
  --warning: #f59e0b;
  --info: #3b82f6;
  --dark: #1f2937;
  --gray: #6b7280;
  --gray-light: #9ca3af;
  --light: #f9fafb;
  --white: #ffffff;
  --background: #f3f4f6;
  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  --card-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --border-radius: 12px;
  --border-radius-sm: 8px;
  --transition: all 0.3s ease;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    sans-serif;
  background-color: var(--background);
  color: var(--dark);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
  line-height: 1.3;
}
h1 {
  font-size: 2.5rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.5rem;
}
h4 {
  font-size: 1.25rem;
}
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;
  gap: 8px;
}
.btn:hover {
  transform: translateY(-1px);
}
.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}
.btn-primary {
  background: var(--primary);
  color: var(--white);
}
.btn-primary:hover {
  background: var(--primary-dark);
}
.btn-secondary {
  background: var(--secondary);
  color: var(--white);
}
.btn-secondary:hover {
  background: var(--secondary-dark);
}
.btn-outline {
  background: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
}
.btn-outline:hover {
  background: var(--primary);
  color: var(--white);
}
.btn-danger {
  background: var(--danger);
  color: var(--white);
}
.btn-sm {
  padding: 8px 16px;
  font-size: 0.875rem;
}
.btn-lg {
  padding: 16px 32px;
  font-size: 1.125rem;
}
.form-group {
  margin-bottom: 20px;
}
.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--dark);
}
.form-control {
  width: 100%;
  padding: 12px 16px;
  font-size: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: var(--border-radius-sm);
  transition: var(--transition);
  background: var(--white);
}
.form-control:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}
.form-control::placeholder {
  color: var(--gray-light);
}
.form-control.error {
  border-color: var(--danger);
}
select.form-control {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E");
  background-position: right 12px center;
  background-repeat: no-repeat;
  background-size: 20px;
  padding-right: 40px;
}
.alert {
  padding: 16px;
  border-radius: var(--border-radius-sm);
  margin-bottom: 20px;
}
.alert-success {
  background: #d1fae5;
  color: #065f46;
  border: 1px solid #34d399;
}
.alert-error {
  background: #fee2e2;
  color: #991b1b;
  border: 1px solid #f87171;
}
.alert-warning {
  background: #fef3c7;
  color: #92400e;
  border: 1px solid #fbbf24;
}
.alert-info {
  background: #dbeafe;
  color: #1e40af;
  border: 1px solid #60a5fa;
}
.card {
  background: var(--white);
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  padding: 24px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e5e7eb;
}
.card-title {
  font-size: 1.25rem;
  font-weight: 600;
}
.table {
  width: 100%;
  background: var(--white);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--card-shadow);
}
.table th,
.table td {
  padding: 16px;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
}
.table th {
  background: #f9fafb;
  font-weight: 600;
  color: var(--dark);
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.table tbody tr:hover {
  background: #f9fafb;
}
.table tbody tr:last-child td {
  border-bottom: none;
}
.text-success {
  color: var(--secondary);
}
.text-danger {
  color: var(--danger);
}
.text-warning {
  color: var(--warning);
}
.text-info {
  color: var(--info);
}
.text-muted {
  color: var(--gray);
}
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}
.flex {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-2 {
  gap: 8px;
}
.gap-4 {
  gap: 16px;
}
.gap-6 {
  gap: 24px;
}
.mt-2 {
  margin-top: 8px;
}
.mt-4 {
  margin-top: 16px;
}
.mt-6 {
  margin-top: 24px;
}
.mb-2 {
  margin-bottom: 8px;
}
.mb-4 {
  margin-bottom: 16px;
}
.mb-6 {
  margin-bottom: 24px;
}
.p-4 {
  padding: 16px;
}
.p-6 {
  padding: 24px;
}
.w-full {
  width: 100%;
}
.hidden {
  display: none;
}
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
a {
  color: var(--primary);
  text-decoration: none;
  transition: var(--transition);
}
a:hover {
  color: var(--primary-dark);
}
.loading-spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: var(--white);
  animation: spin 1s ease-in-out infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.badge {
  display: inline-block;
  padding: 4px 12px;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.badge-success {
  background: #d1fae5;
  color: #065f46;
}
.badge-warning {
  background: #fef3c7;
  color: #92400e;
}
.badge-danger {
  background: #fee2e2;
  color: #991b1b;
}
.badge-info {
  background: #dbeafe;
  color: #1e40af;
}
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  .container {
    padding: 0 16px;
  }
  .btn {
    padding: 10px 20px;
  }
  .table th,
  .table td {
    padding: 12px;
  }
}
:root.dark {
  --primary: #818cf8;
  --primary-dark: #6366f1;
  --primary-light: #c7d2fe;
  --secondary: #34d399;
  --secondary-dark: #10b981;
  --danger: #f87171;
  --warning: #fbbf24;
  --info: #60a5fa;
  --dark: #f9fafb;
  --gray: #9ca3af;
  --gray-light: #6b7280;
  --light: #111827;
  --white: #1f2937;
  --background: #0f172a;
  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2);
  --card-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2);
}
:root.dark body {
  background-color: var(--background);
  color: var(--dark);
}
:root.dark .card,
:root.dark .header,
:root.dark .sidebar,
:root.dark .table,
:root.dark .form-card,
:root.dark .kyc-form,
:root.dark .modal {
  background-color: var(--white);
  border-color: #374151;
}
:root.dark .table th {
  background-color: #1f2937;
  border-color: #374151;
}
:root.dark .table td,
:root.dark .form-group label {
  border-color: #374151;
  color: #d1d5db;
}
:root.dark .form-control {
  background-color: #1f2937;
  border-color: #374151;
  color: #f9fafb;
}
:root.dark .form-control:focus {
  border-color: var(--primary);
}
:root.dark .form-control::placeholder {
  color: #6b7280;
}
:root.dark .text-muted {
  color: #9ca3af;
}
:root.dark .btn-outline {
  border-color: var(--primary);
  color: var(--primary);
}
:root.dark .btn-outline:hover {
  background-color: var(--primary);
  color: white;
}
:root.dark .alert-warning {
  background-color: #451a03;
  color: #fbbf24;
  border-color: #78350f;
}
:root.dark .alert-info {
  background-color: #1e3a5f;
  color: #60a5fa;
  border-color: #1e40af;
}
:root.dark .nav-item:hover {
  background-color: #1f2937;
}
:root.dark .empty-state,
:root.dark .empty-card {
  background-color: var(--white);
  border-color: #374151;
}
:root.dark .stat-card {
  background-color: var(--white);
}
:root.dark input,
:root.dark select {
  background-color: #1f2937;
  border-color: #374151;
  color: #f9fafb;
}
/*# sourceMappingURL=app.css.map */
`] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "app/app.ts", lineNumber: 15 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
