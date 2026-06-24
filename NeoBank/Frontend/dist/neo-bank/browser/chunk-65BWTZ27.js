import {
  BehaviorSubject,
  Injectable,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-QR452MNT.js";

// src/app/core/services/notification.service.ts
var NotificationService = class _NotificationService {
  constructor() {
    this.notifications = [];
    this.subject = new BehaviorSubject([]);
    this.notifications$ = this.subject.asObservable();
    this.id = 0;
  }
  show(message, type = "info", title, duration = 4e3) {
    const notification = {
      id: ++this.id,
      message,
      type,
      title,
      duration,
      removing: false
    };
    this.notifications.unshift(notification);
    this.subject.next([...this.notifications]);
    setTimeout(() => this.remove(notification.id), duration);
  }
  remove(id) {
    this.notifications = this.notifications.map((n) => n.id === id ? __spreadProps(__spreadValues({}, n), { removing: true }) : n);
    this.subject.next([...this.notifications]);
    setTimeout(() => {
      this.notifications = this.notifications.filter((n) => n.id !== id);
      this.subject.next([...this.notifications]);
    }, 240);
  }
  success(message, title, duration) {
    this.show(message, "success", title, duration);
  }
  warning(message, title, duration) {
    this.show(message, "warning", title, duration);
  }
  danger(message, title, duration) {
    this.show(message, "danger", title, duration);
  }
  info(message, title, duration) {
    this.show(message, "info", title, duration);
  }
  static {
    this.\u0275fac = function NotificationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotificationService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  NotificationService
};
//# sourceMappingURL=chunk-65BWTZ27.js.map
