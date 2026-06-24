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

// src/app/core/services/application.service.ts
var ApplicationService = class _ApplicationService {
  constructor(http) {
    this.http = http;
    this.base = environment.apiUrl;
  }
  get authHeaders() {
    const token = localStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}` } : void 0;
  }
  // ─────────────────────────────────────────────
  //  PUBLIC — Submit application (guest)
  // ─────────────────────────────────────────────
  sendOtp(email) {
    return this.http.post(`${this.base}/application/send-otp`, { email });
  }
  submitApplication(formData) {
    return this.http.post(`${this.base}/application/submit`, formData);
  }
  // ─────────────────────────────────────────────
  //  PUBLIC — Application status check
  // ─────────────────────────────────────────────
  sendStatusOtp(query) {
    return this.http.post(`${this.base}/application/status/send-otp`, { query });
  }
  verifyStatusOtp(query, otp) {
    return this.http.post(`${this.base}/application/status/verify`, { query, otp });
  }
  // ─────────────────────────────────────────────
  //  AUTHENTICATED — Submit application
  // ─────────────────────────────────────────────
  submitApplicationAuthenticated(formData) {
    const headers = this.authHeaders;
    if (headers) {
      return this.http.post(`${this.base}/application/submit-auth`, formData, { headers });
    }
    return this.http.post(`${this.base}/application/submit-auth`, formData);
  }
  // ─────────────────────────────────────────────
  //  ADMIN — Application management
  // ─────────────────────────────────────────────
  // getAllApplications(status?: string, page = 0, size = 10): Observable<PageResponse<ApplicationListItem>> {
  //   let params: any = { page, size };
  //   if (status) params['status'] = status;
  //   return this.http.get<PageResponse<ApplicationListItem>>(
  //     `${this.base}/application/all`,
  //     { params }
  //   );
  // }
  getAllApplications(status, page = 0, size = 10, search) {
    const params = { page, size };
    if (status)
      params["status"] = status;
    if (search)
      params["search"] = search;
    return this.http.get(`${this.base}/application/all`, { params });
  }
  getApplicationDetail(applicationId) {
    return this.http.get(`${this.base}/application/${applicationId}`);
  }
  approveApplication(req) {
    return this.http.post(`${this.base}/application/approve`, req);
  }
  static {
    this.\u0275fac = function ApplicationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ApplicationService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApplicationService, factory: _ApplicationService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplicationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ApplicationService
};
//# sourceMappingURL=chunk-AO72TSPP.js.map
