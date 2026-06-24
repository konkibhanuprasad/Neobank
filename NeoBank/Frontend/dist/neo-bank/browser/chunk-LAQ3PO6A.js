import {
  environment
} from "./chunk-D2A5YED7.js";
import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-QR452MNT.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  constructor(http) {
    this.http = http;
    this.base = `${environment.apiUrl}/auth`;
    this.tokenKey = "token";
  }
  // ── Captcha ──
  getCaptcha() {
    return this.http.get(`${this.base}/captcha`);
  }
  // ── Username check ──
  checkUsername(username) {
    return this.http.get(`${this.base}/check-username`, { params: { username } });
  }
  // ── Send registration OTP ──
  sendRegistrationOtp(payload) {
    return this.http.post(`${this.base}/send-registration-otp`, payload);
  }
  // ── Register ──
  register(payload) {
    return this.http.post(`${this.base}/register`, payload);
  }
  // ── Login ──
  login(payload) {
    return this.http.post(`${this.base}/login`, payload);
  }
  // ── Resend OTP ──
  resendOtp(email, purpose) {
    return this.http.post(`${this.base}/resend-otp`, { email, purpose });
  }
  // ── Forgot Username ──
  forgotUsername(payload) {
    return this.http.post(`${this.base}/forgot-username`, payload);
  }
  verifyForgotUsernameOtp(payload) {
    return this.http.post(`${this.base}/forgot-username/verify`, payload);
  }
  // ── Forgot Password ──
  forgotPassword(payload) {
    return this.http.post(`${this.base}/forgot-password`, payload);
  }
  resetPassword(payload) {
    return this.http.post(`${this.base}/reset-password`, payload);
  }
  changePassword(payload) {
    return this.http.post(
      `${this.base}/change-password`,
      payload
      // ,
      // { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    );
  }
  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
  getLoggedInUserId() {
    const userJson = localStorage.getItem("user");
    if (!userJson) {
      console.error("User not found in localStorage");
      return 0;
    }
    try {
      const user = JSON.parse(userJson);
      const userId = Number(user.userId);
      if (Number.isNaN(userId) || userId <= 0) {
        console.error("Invalid userId found:", user);
        return 0;
      }
      return userId;
    } catch (error) {
      console.error("Error parsing user from localStorage:", error);
      return 0;
    }
  }
  hasRole(role) {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    const payload = this.decodeToken(token);
    const roles = payload.roles || payload.authorities || payload.role;
    if (!roles) {
      return false;
    }
    if (Array.isArray(roles)) {
      return roles.includes(role) || roles.includes(`ROLE_${role}`);
    }
    return roles === role || roles === `ROLE_${role}`;
  }
  decodeToken(token) {
    try {
      const payload = token.split(".")[1];
      const decodePayload = atob(payload);
      return JSON.parse(decodePayload);
    } catch (error) {
      throw new Error("Invalid JWT token");
    }
  }
  logout() {
    localStorage.removeItem(this.tokenKey);
  }
  static {
    this.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-LAQ3PO6A.js.map
