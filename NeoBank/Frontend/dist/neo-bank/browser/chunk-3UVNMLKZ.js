import {
  Injectable,
  effect,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-QR452MNT.js";

// src/app/core/services/theme.service.ts
var ThemeService = class _ThemeService {
  constructor() {
    this.STORAGE_KEY = "theme";
    this.themeMode = signal("light", ...ngDevMode ? [{ debugName: "themeMode" }] : (
      /* istanbul ignore next */
      []
    ));
    this.darkMode = signal(false, ...ngDevMode ? [{ debugName: "darkMode" }] : (
      /* istanbul ignore next */
      []
    ));
    const savedTheme = localStorage.getItem(this.STORAGE_KEY);
    if (savedTheme === "dark" || savedTheme === "light") {
      this.themeMode.set(savedTheme);
    } else {
      this.themeMode.set("light");
    }
    const applyTheme = () => {
      const mode = this.themeMode();
      const isDark = mode === "dark";
      this.darkMode.set(isDark);
      document.documentElement.classList.toggle("dark", isDark);
      localStorage.setItem(this.STORAGE_KEY, mode);
    };
    applyTheme();
    effect(() => {
      applyTheme();
    });
  }
  toggle() {
    const mode = this.themeMode();
    this.themeMode.set(mode === "dark" ? "light" : "dark");
  }
  cycle() {
    const mode = this.themeMode();
    const next = mode === "light" ? "dark" : "light";
    this.themeMode.set(next);
  }
  isDark() {
    return this.darkMode();
  }
  static {
    this.\u0275fac = function ThemeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThemeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  ThemeService
};
//# sourceMappingURL=chunk-3UVNMLKZ.js.map
