import {
  AuthService
} from "./chunk-LAQ3PO6A.js";
import {
  NotificationService
} from "./chunk-65BWTZ27.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  environment,
  ɵNgSelectMultipleOption
} from "./chunk-D2A5YED7.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  HttpClient,
  Injectable,
  Input,
  Output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QR452MNT.js";

// src/app/core/services/account.service.ts
var AccountService = class _AccountService {
  constructor(http) {
    this.http = http;
    this.base = environment.apiUrl;
  }
  get authHeaders() {
    return { Authorization: `Bearer ${localStorage.getItem("token")}` };
  }
  // ─────────────────────────────────────────────
  //  CUSTOMER
  // ─────────────────────────────────────────────
  getMyAccounts() {
    return this.http.get(`${this.base}/account/my`, { headers: this.authHeaders });
  }
  // ─────────────────────────────────────────────
  //  ACCOUNT REQUESTS
  // ─────────────────────────────────────────────
  submitAccountRequest(payload) {
    return this.http.post(`${this.base}/account-request/submit`, payload, { headers: this.authHeaders });
  }
  getMyAccountRequests(page = 0, size = 10) {
    return this.http.get(`${this.base}/account-request/my`, { params: { page, size }, headers: this.authHeaders });
  }
  // ─────────────────────────────────────────────
  //  ADMIN
  // ─────────────────────────────────────────────
  // getAllAccounts(status?: string, page = 0, size = 10): Observable<any> {
  //   let params: any = { page, size };
  //   if (status) params['status'] = status;
  //   return this.http.get(
  //     `${this.base}/account/admin/all`,
  //     { params, headers: this.authHeaders }
  //   );
  // }
  getAllAccounts(status, page = 0, size = 10, search) {
    let params = { page, size };
    if (status)
      params["status"] = status;
    if (search)
      params["search"] = search;
    return this.http.get(`${this.base}/account/admin/all`, { params, headers: this.authHeaders });
  }
  updateAccountStatus(payload) {
    return this.http.put(`${this.base}/account/admin/status`, payload, { headers: this.authHeaders });
  }
  // getAllAccountRequests(status?: string, page = 0, size = 10): Observable<any> {
  //   let params: any = { page, size };
  //   if (status) params['status'] = status;
  //   return this.http.get(
  //     `${this.base}/account-request/admin/all`,
  //     { params, headers: this.authHeaders }
  //   );
  // }
  getAllAccountRequests(status, page = 0, size = 10, search) {
    let params = { page, size };
    if (status)
      params["status"] = status;
    if (search)
      params["search"] = search;
    return this.http.get(`${this.base}/account-request/admin/all`, { params, headers: this.authHeaders });
  }
  getAccountRequestDetail(requestId) {
    return this.http.get(`${this.base}/account-request/admin/${requestId}`, { headers: this.authHeaders });
  }
  approveAccountRequest(payload) {
    return this.http.post(`${this.base}/account-request/admin/approve`, payload, { headers: this.authHeaders });
  }
  rejectAccountRequest(payload) {
    return this.http.post(`${this.base}/account-request/admin/reject`, payload, { headers: this.authHeaders });
  }
  static {
    this.\u0275fac = function AccountService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AccountService, factory: _AccountService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/core/services/profile.service.ts
var ProfileService = class _ProfileService {
  constructor(http) {
    this.http = http;
    this.base = `${environment.apiUrl}/profile`;
  }
  getMyProfile() {
    return this.http.get(this.base);
  }
  updateProfile(payload) {
    return this.http.put(this.base, payload);
  }
  uploadPhoto(file) {
    const form = new FormData();
    form.append("photo", file, file.name);
    return this.http.post(`${this.base}/photo`, form);
  }
  removePhoto() {
    return this.http.delete(`${this.base}/photo`);
  }
  sendEmailChangeOtp(newEmail) {
    return this.http.post(`${this.base}/email/send-otp`, null, { params: { newEmail } });
  }
  updateEmail(payload) {
    return this.http.put(`${this.base}/email`, payload);
  }
  static {
    this.\u0275fac = function ProfileService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProfileService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProfileService, factory: _ProfileService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/customer/customer-profile/customer-profile.component.ts
function CustomerProfileComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading profile...");
    \u0275\u0275elementEnd()();
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.photoPreview(), \u0275\u0275sanitizeUrl);
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getInitials());
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_34_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 28)(2, "span");
    \u0275\u0275text(3, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 26)(7, "span");
    \u0275\u0275text(8, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 26)(12, "span");
    \u0275\u0275text(13, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 26)(17, "span");
    \u0275\u0275text(18, "Pincode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.profile().addressLine || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.profile().city || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.profile().state || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.profile().pincode || "\u2014");
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_34_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "p");
    \u0275\u0275text(2, "No address added yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 29);
    \u0275\u0275listener("click", function CustomerProfileComponent_Conditional_1_Conditional_34_Conditional_49_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.switchTab("edit"));
    });
    \u0275\u0275text(4, "+ Add Address");
    \u0275\u0275elementEnd()();
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 23)(2, "div", 24);
    \u0275\u0275text(3, "\u{1F464} Personal Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25)(5, "div", 26)(6, "span");
    \u0275\u0275text(7, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 26)(11, "span");
    \u0275\u0275text(12, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 26)(16, "span");
    \u0275\u0275text(17, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 26)(21, "span");
    \u0275\u0275text(22, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "strong");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 26)(26, "span");
    \u0275\u0275text(27, "Date of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "strong");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 26)(31, "span");
    \u0275\u0275text(32, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "strong");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 26)(36, "span");
    \u0275\u0275text(37, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "strong");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 26)(41, "span");
    \u0275\u0275text(42, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "strong");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(45, "div", 23)(46, "div", 24);
    \u0275\u0275text(47, "\u{1F3E0} Address Information");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(48, CustomerProfileComponent_Conditional_1_Conditional_34_Conditional_48_Template, 21, 4, "div", 25)(49, CustomerProfileComponent_Conditional_1_Conditional_34_Conditional_49_Template, 5, 0, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 23)(51, "div", 24);
    \u0275\u0275text(52, "\u2699 Account Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 25)(54, "div", 26)(55, "span");
    \u0275\u0275text(56, "Member Since");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "strong");
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 26)(60, "span");
    \u0275\u0275text(61, "Last Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "strong");
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.profile().username);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.profile().fullName || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.profile().email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.profile().phone || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.profile().dateOfBirth || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.profile().gender || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.profile().role);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.profile().status);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.profile().addressLine || ctx_r1.profile().city ? 48 : 49);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.profile().createdAt);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.profile().updatedAt || "\u2014");
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_35_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.editError());
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_35_For_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const st_r5 = ctx.$implicit;
    \u0275\u0275property("value", st_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(st_r5);
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_35_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 51);
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 30);
    \u0275\u0275text(2, "Edit Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CustomerProfileComponent_Conditional_1_Conditional_35_Conditional_3_Template, 2, 1, "div", 31);
    \u0275\u0275elementStart(4, "div", 32)(5, "h4");
    \u0275\u0275text(6, "Personal Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 33)(8, "div", 34)(9, "label");
    \u0275\u0275text(10, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerProfileComponent_Conditional_1_Conditional_35_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.fullName, $event) || (ctx_r1.editForm.fullName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 34)(13, "label");
    \u0275\u0275text(14, "Phone Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerProfileComponent_Conditional_1_Conditional_35_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.phone, $event) || (ctx_r1.editForm.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 33)(17, "div", 34)(18, "label");
    \u0275\u0275text(19, "Date of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerProfileComponent_Conditional_1_Conditional_35_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.dateOfBirth, $event) || (ctx_r1.editForm.dateOfBirth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 34)(22, "label");
    \u0275\u0275text(23, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "select", 38);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerProfileComponent_Conditional_1_Conditional_35_Template_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.gender, $event) || (ctx_r1.editForm.gender = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(25, "option", 39);
    \u0275\u0275text(26, "Select...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 40);
    \u0275\u0275text(28, "Male");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 41);
    \u0275\u0275text(30, "Female");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 42);
    \u0275\u0275text(32, "Other");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(33, "div", 32)(34, "h4");
    \u0275\u0275text(35, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 34)(37, "label");
    \u0275\u0275text(38, "Address Line");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerProfileComponent_Conditional_1_Conditional_35_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.addressLine, $event) || (ctx_r1.editForm.addressLine = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 44)(41, "div", 34)(42, "label");
    \u0275\u0275text(43, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerProfileComponent_Conditional_1_Conditional_35_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.city, $event) || (ctx_r1.editForm.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 34)(46, "label");
    \u0275\u0275text(47, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "select", 38);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerProfileComponent_Conditional_1_Conditional_35_Template_select_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.state, $event) || (ctx_r1.editForm.state = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(49, "option", 39);
    \u0275\u0275text(50, "Select state...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(51, CustomerProfileComponent_Conditional_1_Conditional_35_For_52_Template, 2, 2, "option", 46, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 34)(54, "label");
    \u0275\u0275text(55, "Pincode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerProfileComponent_Conditional_1_Conditional_35_Template_input_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.pincode, $event) || (ctx_r1.editForm.pincode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(57, "div", 48)(58, "button", 49);
    \u0275\u0275listener("click", function CustomerProfileComponent_Conditional_1_Conditional_35_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.switchTab("view"));
    });
    \u0275\u0275text(59, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "button", 50);
    \u0275\u0275listener("click", function CustomerProfileComponent_Conditional_1_Conditional_35_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveProfile());
    });
    \u0275\u0275conditionalCreate(61, CustomerProfileComponent_Conditional_1_Conditional_35_Conditional_61_Template, 1, 0, "span", 51);
    \u0275\u0275text(62, " Save Changes ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.editError() ? 3 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.fullName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.phone);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.dateOfBirth);
    \u0275\u0275property("max", ctx_r1.maxDob);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.gender);
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.addressLine);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.city);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.state);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.indianStates);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.pincode);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.editLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.editLoading() ? 61 : -1);
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_36_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.photoError());
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_36_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 53);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.photoPreview(), \u0275\u0275sanitizeUrl);
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_36_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No photo");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getInitials());
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_36_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function CustomerProfileComponent_Conditional_1_Conditional_36_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removePhoto());
    });
    \u0275\u0275text(1, "\u{1F5D1} Remove Photo");
    \u0275\u0275elementEnd();
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_36_Conditional_20_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 51);
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_36_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function CustomerProfileComponent_Conditional_1_Conditional_36_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.uploadPhoto());
    });
    \u0275\u0275conditionalCreate(1, CustomerProfileComponent_Conditional_1_Conditional_36_Conditional_20_Conditional_1_Template, 1, 0, "span", 51);
    \u0275\u0275text(2, " Upload Photo ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.photoLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.photoLoading() ? 1 : -1);
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 30);
    \u0275\u0275text(2, "Profile Photo");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CustomerProfileComponent_Conditional_1_Conditional_36_Conditional_3_Template, 2, 1, "div", 31);
    \u0275\u0275elementStart(4, "div", 52);
    \u0275\u0275conditionalCreate(5, CustomerProfileComponent_Conditional_1_Conditional_36_Conditional_5_Template, 1, 1, "img", 53)(6, CustomerProfileComponent_Conditional_1_Conditional_36_Conditional_6_Template, 5, 1, "div", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 55)(8, "label", 56)(9, "span", 57);
    \u0275\u0275text(10, "\u{1F4F7}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 58);
    \u0275\u0275text(12, "Click to select photo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 59);
    \u0275\u0275text(14, "JPG or PNG \xB7 Max 2MB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 60);
    \u0275\u0275listener("change", function CustomerProfileComponent_Conditional_1_Conditional_36_Template_input_change_15_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPhotoSelect($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 61)(17, "button", 49);
    \u0275\u0275listener("click", function CustomerProfileComponent_Conditional_1_Conditional_36_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelPhoto());
    });
    \u0275\u0275text(18, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, CustomerProfileComponent_Conditional_1_Conditional_36_Conditional_19_Template, 2, 0, "button", 62);
    \u0275\u0275conditionalCreate(20, CustomerProfileComponent_Conditional_1_Conditional_36_Conditional_20_Template, 3, 2, "button", 63);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.photoError() ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.photoPreview() ? 5 : 6);
    \u0275\u0275advance(14);
    \u0275\u0275conditional(ctx_r1.profile().profilePhotoBase64 ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedPhoto ? 20 : -1);
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_37_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.emailError());
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_37_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.emailSuccess());
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_37_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 51);
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_37_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function CustomerProfileComponent_Conditional_1_Conditional_37_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.sendEmailOtp());
    });
    \u0275\u0275conditionalCreate(1, CustomerProfileComponent_Conditional_1_Conditional_37_Conditional_13_Conditional_1_Template, 1, 0, "span", 51);
    \u0275\u0275text(2, " Send OTP to New Email \u2192 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.emailOtpLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.emailOtpLoading() ? 1 : -1);
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_37_Conditional_14_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Resend in ", ctx_r1.emailCooldown(), "s");
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_37_Conditional_14_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 74);
    \u0275\u0275listener("click", function CustomerProfileComponent_Conditional_1_Conditional_37_Conditional_14_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.sendEmailOtp());
    });
    \u0275\u0275text(1, " Resend OTP ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r1.emailOtpLoading());
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_37_Conditional_14_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 51);
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_37_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerProfileComponent_Conditional_1_Conditional_37_Conditional_14_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.emailOtp, $event) || (ctx_r1.emailOtp = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 70);
    \u0275\u0275conditionalCreate(5, CustomerProfileComponent_Conditional_1_Conditional_37_Conditional_14_Conditional_5_Template, 2, 1, "span", 71)(6, CustomerProfileComponent_Conditional_1_Conditional_37_Conditional_14_Conditional_6_Template, 2, 1, "button", 72);
    \u0275\u0275elementStart(7, "button", 73);
    \u0275\u0275listener("click", function CustomerProfileComponent_Conditional_1_Conditional_37_Conditional_14_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.emailOtpSent.set(false);
      return \u0275\u0275resetView(ctx_r1.emailOtp = "");
    });
    \u0275\u0275text(8, " Change email ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 48)(10, "button", 49);
    \u0275\u0275listener("click", function CustomerProfileComponent_Conditional_1_Conditional_37_Conditional_14_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.switchTab("view"));
    });
    \u0275\u0275text(11, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 50);
    \u0275\u0275listener("click", function CustomerProfileComponent_Conditional_1_Conditional_37_Conditional_14_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateEmail());
    });
    \u0275\u0275conditionalCreate(13, CustomerProfileComponent_Conditional_1_Conditional_37_Conditional_14_Conditional_13_Template, 1, 0, "span", 51);
    \u0275\u0275text(14, " Verify & Update Email ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("OTP (sent to ", ctx_r1.newEmail, ")");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.emailOtp);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.emailCooldown() > 0 ? 5 : 6);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r1.emailVerifyLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.emailVerifyLoading() ? 13 : -1);
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 30);
    \u0275\u0275text(2, "Change Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 66);
    \u0275\u0275text(4, "Current email: ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, CustomerProfileComponent_Conditional_1_Conditional_37_Conditional_7_Template, 2, 1, "div", 31);
    \u0275\u0275conditionalCreate(8, CustomerProfileComponent_Conditional_1_Conditional_37_Conditional_8_Template, 2, 1, "div", 67);
    \u0275\u0275elementStart(9, "div", 34)(10, "label");
    \u0275\u0275text(11, "New Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerProfileComponent_Conditional_1_Conditional_37_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newEmail, $event) || (ctx_r1.newEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, CustomerProfileComponent_Conditional_1_Conditional_37_Conditional_13_Template, 3, 2, "button", 63)(14, CustomerProfileComponent_Conditional_1_Conditional_37_Conditional_14_Template, 15, 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.profile().email);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.emailError() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.emailSuccess() ? 8 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newEmail);
    \u0275\u0275property("disabled", ctx_r1.emailOtpSent());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.emailOtpSent() ? 13 : 14);
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_38_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.pwError());
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_38_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.pwSuccess());
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_38_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 82);
    \u0275\u0275element(2, "div", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 84);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getPasswordStrength(ctx_r1.newPassword).cls);
    \u0275\u0275styleProp("width", ctx_r1.getPasswordStrength(ctx_r1.newPassword).w, "%");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getPasswordStrength(ctx_r1.newPassword).cls);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getPasswordStrength(ctx_r1.newPassword).label, " ");
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_38_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81);
    \u0275\u0275text(1, "\u2713 Passwords match");
    \u0275\u0275elementEnd();
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_38_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 51);
  }
}
function CustomerProfileComponent_Conditional_1_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 30);
    \u0275\u0275text(2, "Change Password");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CustomerProfileComponent_Conditional_1_Conditional_38_Conditional_3_Template, 2, 1, "div", 31);
    \u0275\u0275conditionalCreate(4, CustomerProfileComponent_Conditional_1_Conditional_38_Conditional_4_Template, 2, 1, "div", 67);
    \u0275\u0275elementStart(5, "div", 34)(6, "label");
    \u0275\u0275text(7, "Current Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 75)(9, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerProfileComponent_Conditional_1_Conditional_38_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.currentPassword, $event) || (ctx_r1.currentPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 77);
    \u0275\u0275listener("click", function CustomerProfileComponent_Conditional_1_Conditional_38_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showCurrent.update((v) => !v));
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 34)(13, "label");
    \u0275\u0275text(14, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 75)(16, "input", 78);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerProfileComponent_Conditional_1_Conditional_38_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newPassword, $event) || (ctx_r1.newPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 77);
    \u0275\u0275listener("click", function CustomerProfileComponent_Conditional_1_Conditional_38_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showNew.update((v) => !v));
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(19, CustomerProfileComponent_Conditional_1_Conditional_38_Conditional_19_Template, 5, 7, "div", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 34)(21, "label");
    \u0275\u0275text(22, "Confirm New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 75)(24, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerProfileComponent_Conditional_1_Conditional_38_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.confirmPassword, $event) || (ctx_r1.confirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 77);
    \u0275\u0275listener("click", function CustomerProfileComponent_Conditional_1_Conditional_38_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showConfirm.update((v) => !v));
    });
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(27, CustomerProfileComponent_Conditional_1_Conditional_38_Conditional_27_Template, 2, 0, "span", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 48)(29, "button", 49);
    \u0275\u0275listener("click", function CustomerProfileComponent_Conditional_1_Conditional_38_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.switchTab("view"));
    });
    \u0275\u0275text(30, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 50);
    \u0275\u0275listener("click", function CustomerProfileComponent_Conditional_1_Conditional_38_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changePassword());
    });
    \u0275\u0275conditionalCreate(32, CustomerProfileComponent_Conditional_1_Conditional_38_Conditional_32_Template, 1, 0, "span", 51);
    \u0275\u0275text(33, " \u{1F512} Change Password ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.pwError() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pwSuccess() ? 4 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("type", ctx_r1.showCurrent() ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.currentPassword);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.showCurrent() ? "Hide" : "Show", " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("type", ctx_r1.showNew() ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPassword);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.showNew() ? "Hide" : "Show", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.newPassword.length > 0 ? 19 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-ok", ctx_r1.confirmPassword && ctx_r1.newPassword === ctx_r1.confirmPassword);
    \u0275\u0275property("type", ctx_r1.showConfirm() ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.confirmPassword);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.showConfirm() ? "Hide" : "Show", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.confirmPassword && ctx_r1.newPassword === ctx_r1.confirmPassword ? 27 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.pwLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pwLoading() ? 32 : -1);
  }
}
function CustomerProfileComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275conditionalCreate(2, CustomerProfileComponent_Conditional_1_Conditional_2_Template, 1, 1, "img", 4)(3, CustomerProfileComponent_Conditional_1_Conditional_3_Template, 2, 1, "div", 5);
    \u0275\u0275elementStart(4, "button", 6);
    \u0275\u0275listener("click", function CustomerProfileComponent_Conditional_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("photo"));
    });
    \u0275\u0275text(5, "\u270F");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 7)(7, "h2", 8);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 10)(12, "span", 11);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 12);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 13)(17, "button", 14);
    \u0275\u0275listener("click", function CustomerProfileComponent_Conditional_1_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("edit"));
    });
    \u0275\u0275text(18, "\u270F Edit Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 15);
    \u0275\u0275listener("click", function CustomerProfileComponent_Conditional_1_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("email"));
    });
    \u0275\u0275text(20, "\u{1F4E7} Change Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 16);
    \u0275\u0275listener("click", function CustomerProfileComponent_Conditional_1_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("password"));
    });
    \u0275\u0275text(22, "\u{1F512} Change Password");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 17)(24, "button", 18);
    \u0275\u0275listener("click", function CustomerProfileComponent_Conditional_1_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("view"));
    });
    \u0275\u0275text(25, "\u{1F464} Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 18);
    \u0275\u0275listener("click", function CustomerProfileComponent_Conditional_1_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("edit"));
    });
    \u0275\u0275text(27, "\u270F Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 18);
    \u0275\u0275listener("click", function CustomerProfileComponent_Conditional_1_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("photo"));
    });
    \u0275\u0275text(29, "\u{1F5BC} Photo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 18);
    \u0275\u0275listener("click", function CustomerProfileComponent_Conditional_1_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("email"));
    });
    \u0275\u0275text(31, "\u{1F4E7} Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 18);
    \u0275\u0275listener("click", function CustomerProfileComponent_Conditional_1_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("password"));
    });
    \u0275\u0275text(33, "\u{1F512} Password");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(34, CustomerProfileComponent_Conditional_1_Conditional_34_Template, 64, 11, "div", 19);
    \u0275\u0275conditionalCreate(35, CustomerProfileComponent_Conditional_1_Conditional_35_Template, 63, 12, "div", 20);
    \u0275\u0275conditionalCreate(36, CustomerProfileComponent_Conditional_1_Conditional_36_Template, 21, 4, "div", 21);
    \u0275\u0275conditionalCreate(37, CustomerProfileComponent_Conditional_1_Conditional_37_Template, 15, 6, "div", 20);
    \u0275\u0275conditionalCreate(38, CustomerProfileComponent_Conditional_1_Conditional_38_Template, 34, 17, "div", 22);
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.photoPreview() ? 2 : 3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.profile().fullName || ctx_r1.profile().username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.profile().email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.profile().role);
    \u0275\u0275advance();
    \u0275\u0275classMap("sb-" + ((tmp_5_0 = ctx_r1.profile().status) == null ? null : tmp_5_0.toLowerCase()));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.profile().status, " ");
    \u0275\u0275advance(9);
    \u0275\u0275classProp("ptab-active", ctx_r1.activeTab() === "view");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ptab-active", ctx_r1.activeTab() === "edit");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ptab-active", ctx_r1.activeTab() === "photo");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ptab-active", ctx_r1.activeTab() === "email");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ptab-active", ctx_r1.activeTab() === "password");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.activeTab() === "view" ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab() === "edit" ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab() === "photo" ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab() === "email" ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab() === "password" ? 38 : -1);
  }
}
var CustomerProfileComponent = class _CustomerProfileComponent {
  constructor(profileService, authService, ns) {
    this.profileService = profileService;
    this.authService = authService;
    this.ns = ns;
    this.activeSubSection = "profile-details";
    this.user = null;
    this.profileUpdated = new EventEmitter();
    this.profile = signal(null, ...ngDevMode ? [{ debugName: "profile" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.activeTab = signal("view", ...ngDevMode ? [{ debugName: "activeTab" }] : (
      /* istanbul ignore next */
      []
    ));
    this.editForm = {
      fullName: "",
      phone: "",
      dateOfBirth: "",
      gender: "",
      addressLine: "",
      city: "",
      state: "",
      pincode: ""
    };
    this.editLoading = signal(false, ...ngDevMode ? [{ debugName: "editLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.editError = signal("", ...ngDevMode ? [{ debugName: "editError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedPhoto = null;
    this.photoPreview = signal(null, ...ngDevMode ? [{ debugName: "photoPreview" }] : (
      /* istanbul ignore next */
      []
    ));
    this.photoLoading = signal(false, ...ngDevMode ? [{ debugName: "photoLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.photoError = signal("", ...ngDevMode ? [{ debugName: "photoError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.newEmail = "";
    this.emailOtp = "";
    this.emailOtpSent = signal(false, ...ngDevMode ? [{ debugName: "emailOtpSent" }] : (
      /* istanbul ignore next */
      []
    ));
    this.emailOtpLoading = signal(false, ...ngDevMode ? [{ debugName: "emailOtpLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.emailVerifyLoading = signal(false, ...ngDevMode ? [{ debugName: "emailVerifyLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.emailError = signal("", ...ngDevMode ? [{ debugName: "emailError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.emailSuccess = signal("", ...ngDevMode ? [{ debugName: "emailSuccess" }] : (
      /* istanbul ignore next */
      []
    ));
    this.emailCooldown = signal(0, ...ngDevMode ? [{ debugName: "emailCooldown" }] : (
      /* istanbul ignore next */
      []
    ));
    this.currentPassword = "";
    this.newPassword = "";
    this.confirmPassword = "";
    this.showCurrent = signal(false, ...ngDevMode ? [{ debugName: "showCurrent" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showNew = signal(false, ...ngDevMode ? [{ debugName: "showNew" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showConfirm = signal(false, ...ngDevMode ? [{ debugName: "showConfirm" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pwLoading = signal(false, ...ngDevMode ? [{ debugName: "pwLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pwError = signal("", ...ngDevMode ? [{ debugName: "pwError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pwSuccess = signal("", ...ngDevMode ? [{ debugName: "pwSuccess" }] : (
      /* istanbul ignore next */
      []
    ));
    this.indianStates = [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
      "Delhi",
      "Jammu & Kashmir",
      "Ladakh"
    ];
    this.maxDob = new Date((/* @__PURE__ */ new Date()).setFullYear((/* @__PURE__ */ new Date()).getFullYear() - 18)).toISOString().split("T")[0];
  }
  ngOnInit() {
    this.loadProfile();
  }
  ngOnChanges(c) {
    if (this.activeSubSection === "profile-password") {
      this.activeTab.set("password");
    } else {
      this.activeTab.set("view");
    }
  }
  // ─────────────────────────────────────────────
  //  LOAD PROFILE
  // ─────────────────────────────────────────────
  loadProfile() {
    this.loading.set(true);
    this.profileService.getMyProfile().subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.success) {
          this.profile.set(res.data);
          this.prefillEditForm(res.data);
        }
      },
      error: () => {
        this.loading.set(false);
        this.ns.danger("Failed to load profile.");
      }
    });
  }
  prefillEditForm(data) {
    this.editForm = {
      fullName: data.fullName || "",
      phone: data.phone || "",
      dateOfBirth: data.dateOfBirth ? this.toInputDate(data.dateOfBirth) : "",
      gender: data.gender || "",
      addressLine: data.addressLine || "",
      city: data.city || "",
      state: data.state || "",
      pincode: data.pincode || ""
    };
    if (data.profilePhotoBase64) {
      this.photoPreview.set(`data:${data.profilePhotoType};base64,${data.profilePhotoBase64}`);
    }
  }
  // ─────────────────────────────────────────────
  //  UPDATE PROFILE — SKIP IF SAME
  // ─────────────────────────────────────────────
  saveProfile() {
    this.editError.set("");
    const current = this.profile();
    const payload = {};
    if (this.editForm.fullName.trim() && this.editForm.fullName.trim() !== (current?.fullName || "")) {
      payload.fullName = this.editForm.fullName.trim();
    }
    if (this.editForm.phone && this.editForm.phone !== (current?.phone || "")) {
      if (!/^[6-9]\d{9}$/.test(this.editForm.phone)) {
        this.editError.set("Enter valid 10-digit mobile number.");
        this.ns.danger("Enter valid 10-digit mobile number.");
        return;
      }
      payload.phone = this.editForm.phone;
    }
    if (this.editForm.dateOfBirth && this.toDisplayDate(this.editForm.dateOfBirth) !== (current?.dateOfBirth || "")) {
      payload.dateOfBirth = this.editForm.dateOfBirth;
    }
    if (this.editForm.gender && this.editForm.gender !== (current?.gender || "")) {
      payload.gender = this.editForm.gender;
    }
    if (this.editForm.addressLine.trim() !== (current?.addressLine || "")) {
      payload.addressLine = this.editForm.addressLine.trim();
    }
    if (this.editForm.city.trim() !== (current?.city || "")) {
      payload.city = this.editForm.city.trim();
    }
    if (this.editForm.state !== (current?.state || "")) {
      payload.state = this.editForm.state;
    }
    if (this.editForm.pincode && this.editForm.pincode !== (current?.pincode || "")) {
      if (!/^\d{6}$/.test(this.editForm.pincode)) {
        this.editError.set("Pincode must be 6 digits.");
        this.ns.danger("Pincode must be 6 digits.");
        return;
      }
      payload.pincode = this.editForm.pincode;
    }
    if (Object.keys(payload).length === 0) {
      this.ns.info("No changes detected. Profile is already up to date.");
      this.activeTab.set("view");
      return;
    }
    this.editLoading.set(true);
    this.profileService.updateProfile(payload).subscribe({
      next: (res) => {
        this.editLoading.set(false);
        const resData = res;
        if (resData.success) {
          this.profile.set(resData.data);
          this.prefillEditForm(resData.data);
          this.editError.set("");
          this.activeTab.set("view");
          this.updateLocalStorage(resData.data);
          this.profileUpdated.emit(resData.data);
          const changed = Object.keys(payload).join(", ");
          this.ns.success(`Profile updated: ${this.humanizeKeys(changed)}`);
        } else {
          this.editError.set(resData.message || "Update failed.");
          this.ns.danger(resData.message || "Update failed.");
        }
      },
      error: (err) => {
        this.editLoading.set(false);
        const errData = err;
        const code = errData.error?.errorCode || "";
        if (code === "PHONE_EXISTS") {
          const msg = "This mobile number is already registered to another account.";
          this.editError.set(msg);
          this.ns.danger(msg);
        } else {
          const msg = errData.error?.message || "Update failed.";
          this.editError.set(msg);
          this.ns.danger(msg);
        }
      }
    });
  }
  // ─────────────────────────────────────────────
  //  PROFILE PHOTO
  // ─────────────────────────────────────────────
  onPhotoSelect(event) {
    const input = event.target;
    if (!input.files?.[0])
      return;
    const file = input.files[0];
    if (!["image/jpeg", "image/png"].includes(file.type)) {
      this.photoError.set("Only JPG or PNG images are allowed.");
      this.ns.danger("Only JPG or PNG images are allowed.");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      this.photoError.set("Photo must be under 2MB.");
      this.ns.danger("Photo must be under 2MB.");
      return;
    }
    this.photoError.set("");
    this.selectedPhoto = file;
    const reader = new FileReader();
    reader.onload = (e) => this.photoPreview.set(e.target?.result);
    reader.readAsDataURL(file);
  }
  uploadPhoto() {
    if (!this.selectedPhoto) {
      this.photoError.set("Please select a photo first.");
      this.ns.warning("Please select a photo first.");
      return;
    }
    this.photoLoading.set(true);
    this.photoError.set("");
    this.profileService.uploadPhoto(this.selectedPhoto).subscribe({
      next: (res) => {
        this.photoLoading.set(false);
        const resData = res;
        if (resData.success) {
          this.profile.set(resData.data);
          this.selectedPhoto = null;
          this.photoError.set("");
          this.activeTab.set("view");
          this.profileUpdated.emit(resData.data);
          this.ns.success("Profile photo updated!");
        } else {
          this.photoError.set(resData.message || "Upload failed.");
          this.ns.danger(resData.message || "Upload failed.");
        }
      },
      error: (err) => {
        this.photoLoading.set(false);
        const errData = err;
        const msg = errData.error?.message || "Upload failed.";
        this.photoError.set(msg);
        this.ns.danger(msg);
      }
    });
  }
  removePhoto() {
    if (!confirm("Remove profile photo?"))
      return;
    this.profileService.removePhoto().subscribe({
      next: (res) => {
        const resData = res;
        if (resData.success) {
          this.profile.set(resData.data);
          this.photoPreview.set(null);
          this.photoError.set("");
          this.profileUpdated.emit(resData.data);
          this.ns.success("Profile photo removed.");
        }
      },
      error: (error) => {
        const msg = "Failed to remove photo.";
        this.photoError.set(msg);
        this.ns.danger(msg);
      }
    });
  }
  cancelPhoto() {
    this.selectedPhoto = null;
    this.photoError.set("");
    const p = this.profile();
    this.photoPreview.set(p?.profilePhotoBase64 ? `data:${p.profilePhotoType};base64,${p.profilePhotoBase64}` : null);
    this.activeTab.set("view");
  }
  // ─────────────────────────────────────────────
  //  EMAIL CHANGE
  // ─────────────────────────────────────────────
  sendEmailOtp() {
    this.emailError.set("");
    this.emailSuccess.set("");
    if (!this.newEmail.trim()) {
      this.emailError.set("Enter new email address.");
      this.ns.warning("Enter new email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.newEmail.trim())) {
      this.emailError.set("Invalid email format.");
      this.ns.danger("Invalid email format.");
      return;
    }
    if (this.newEmail.trim().toLowerCase() === this.profile()?.email?.toLowerCase()) {
      this.emailError.set("New email is the same as current email. No change needed.");
      this.ns.info("New email is the same as current email. No change needed.");
      return;
    }
    this.emailOtpLoading.set(true);
    this.profileService.sendEmailChangeOtp(this.newEmail.trim()).subscribe({
      next: (res) => {
        this.emailOtpLoading.set(false);
        const resData = res;
        if (resData.success) {
          this.emailOtpSent.set(true);
          this.emailOtp = "";
          this.emailSuccess.set(`OTP sent to ${this.newEmail}`);
          this.startEmailTimer();
          this.ns.success(`OTP sent to ${this.newEmail}`);
        } else {
          this.emailError.set(resData.message || "Failed to send OTP.");
          this.ns.danger(resData.message || "Failed to send OTP.");
        }
      },
      error: (err) => {
        this.emailOtpLoading.set(false);
        const errData = err;
        const code = errData.error?.errorCode || "";
        if (code === "EMAIL_EXISTS") {
          const msg = "This email is already registered to another account.";
          this.emailError.set(msg);
          this.ns.danger(msg);
        } else if (code === "OTP_COOLDOWN") {
          const msg = errData.error?.message || "Please wait before resending.";
          this.emailError.set(msg);
          this.ns.warning(msg);
        } else {
          const msg = errData.error?.message || "Failed to send OTP.";
          this.emailError.set(msg);
          this.ns.danger(msg);
        }
      }
    });
  }
  startEmailTimer() {
    this.emailCooldown.set(60);
    if (this.emailTimer)
      window.clearInterval(this.emailTimer);
    this.emailTimer = window.setInterval(() => {
      this.emailCooldown.update((v) => {
        if (v <= 1) {
          if (this.emailTimer)
            window.clearInterval(this.emailTimer);
          return 0;
        }
        return v - 1;
      });
    }, 1e3);
  }
  updateEmail() {
    this.emailError.set("");
    this.emailSuccess.set("");
    if (!this.emailOtp || this.emailOtp.length !== 6) {
      this.emailError.set("Enter the 6-digit OTP.");
      this.ns.warning("Enter the 6-digit OTP.");
      return;
    }
    this.emailVerifyLoading.set(true);
    this.profileService.updateEmail({
      newEmail: this.newEmail.trim(),
      otp: this.emailOtp
    }).subscribe({
      next: (res) => {
        this.emailVerifyLoading.set(false);
        const resData = res;
        if (resData.success) {
          this.profile.set(resData.data);
          this.updateLocalStorage(resData.data);
          this.profileUpdated.emit(resData.data);
          const updated = this.newEmail;
          this.newEmail = "";
          this.emailOtp = "";
          this.emailError.set("");
          this.emailSuccess.set("");
          this.emailOtpSent.set(false);
          this.activeTab.set("view");
          clearInterval(this.emailTimer);
          this.ns.success(`Email updated to ${updated}`);
        } else {
          this.emailError.set(resData.message || "Failed.");
          this.ns.danger(resData.message || "Failed.");
        }
      },
      error: (err) => {
        this.emailVerifyLoading.set(false);
        const errData = err;
        const code = errData.error?.errorCode || "";
        if (code === "OTP_INVALID") {
          this.emailOtp = "";
          const msg = errData.error?.message || "Invalid OTP.";
          this.emailError.set(msg);
          this.ns.danger(msg);
        } else if (code === "OTP_EXPIRED" || code === "OTP_NOT_FOUND") {
          this.emailOtpSent.set(false);
          this.emailOtp = "";
          const msg = "OTP expired. Please request a new OTP.";
          this.emailError.set(msg);
          this.ns.warning(msg);
        } else if (code === "OTP_MAX_ATTEMPTS") {
          this.emailOtpSent.set(false);
          this.emailOtp = "";
          const msg = "Too many wrong attempts. Request a new OTP.";
          this.emailError.set(msg);
          this.ns.danger(msg);
        } else {
          const msg = errData.error?.message || "Failed.";
          this.emailError.set(msg);
          this.ns.danger(msg);
        }
      }
    });
  }
  // ─────────────────────────────────────────────
  //  CHANGE PASSWORD
  // ─────────────────────────────────────────────
  changePassword() {
    this.pwError.set("");
    this.pwSuccess.set("");
    if (!this.currentPassword) {
      this.pwError.set("Current password is required.");
      return;
    }
    if (!this.newPassword || this.newPassword.length < 6) {
      this.pwError.set("New password must be at least 6 characters.");
      return;
    }
    if (this.newPassword !== this.confirmPassword) {
      this.pwError.set("Passwords do not match.");
      return;
    }
    if (this.currentPassword === this.newPassword) {
      this.pwError.set("New password must be different from current password.");
      return;
    }
    this.pwLoading.set(true);
    this.authService.changePassword({
      currentPassword: this.currentPassword,
      newPassword: this.newPassword,
      confirmPassword: this.confirmPassword
    }).subscribe({
      next: (res) => {
        this.pwLoading.set(false);
        const resData = res;
        if (resData.success) {
          this.currentPassword = "";
          this.newPassword = "";
          this.confirmPassword = "";
          this.pwSuccess.set("Password changed successfully!");
          this.ns.success("Password changed successfully!");
        } else {
          this.pwError.set(resData.message || "Failed.");
          this.ns.danger(resData.message || "Failed.");
        }
      },
      error: (err) => {
        this.pwLoading.set(false);
        const errData = err;
        const msg = errData.error?.message || "Failed to change password.";
        this.pwError.set(msg);
        this.ns.danger(msg);
      }
    });
  }
  // ─────────────────────────────────────────────
  //  HELPERS
  // ─────────────────────────────────────────────
  switchTab(tab) {
    this.editError.set("");
    this.photoError.set("");
    this.emailError.set("");
    this.emailSuccess.set("");
    this.pwError.set("");
    this.pwSuccess.set("");
    this.activeTab.set(tab);
  }
  getInitials() {
    const name = this.profile()?.fullName || this.profile()?.username || "";
    return name.split(" ").map((w) => w[0]).join("").substring(0, 2).toUpperCase();
  }
  getPasswordStrength(p) {
    if (!p)
      return { w: 0, cls: "", label: "" };
    let s = 0;
    if (p.length >= 6)
      s++;
    if (p.length >= 10)
      s++;
    if (/[A-Z]/.test(p))
      s++;
    if (/[0-9]/.test(p))
      s++;
    if (/[^a-zA-Z0-9]/.test(p))
      s++;
    if (s <= 1)
      return { w: 20, cls: "str-weak", label: "Weak" };
    if (s <= 2)
      return { w: 50, cls: "str-fair", label: "Fair" };
    if (s <= 3)
      return { w: 75, cls: "str-good", label: "Good" };
    return { w: 100, cls: "str-strong", label: "Strong" };
  }
  updateLocalStorage(data) {
    try {
      const u = JSON.parse(localStorage.getItem("user") || "{}");
      const userData = u;
      userData.fullName = data.fullName;
      userData.email = data.email;
      userData.phone = data.phone;
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (error) {
    }
  }
  toInputDate(display) {
    try {
      const months = {
        Jan: "01",
        Feb: "02",
        Mar: "03",
        Apr: "04",
        May: "05",
        Jun: "06",
        Jul: "07",
        Aug: "08",
        Sep: "09",
        Oct: "10",
        Nov: "11",
        Dec: "12"
      };
      const [d, m, y] = display.split(" ");
      return `${y}-${months[m]}-${d.padStart(2, "0")}`;
    } catch (error) {
      return "";
    }
  }
  toDisplayDate(input) {
    try {
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      const [y, m, d] = input.split("-");
      return `${d} ${months[parseInt(m) - 1]} ${y}`;
    } catch (error) {
      return "";
    }
  }
  humanizeKeys(keys) {
    const map = {
      fullName: "Full Name",
      phone: "Phone",
      dateOfBirth: "Date of Birth",
      gender: "Gender",
      addressLine: "Address",
      city: "City",
      state: "State",
      pincode: "Pincode"
    };
    return keys.split(", ").map((k) => map[k.trim()] || k).join(", ");
  }
  static {
    this.\u0275fac = function CustomerProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomerProfileComponent)(\u0275\u0275directiveInject(ProfileService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerProfileComponent, selectors: [["app-customer-profile"]], inputs: { activeSubSection: "activeSubSection", user: "user" }, outputs: { profileUpdated: "profileUpdated" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 2, consts: [[1, "p-loading"], [1, "spin-ring"], [1, "profile-hero"], [1, "avatar-wrap"], ["alt", "Profile", 1, "avatar-img", 3, "src"], [1, "avatar-initials"], ["title", "Change photo", 1, "avatar-edit-btn", 3, "click"], [1, "hero-info"], [1, "hero-name"], [1, "hero-email"], [1, "hero-badges"], [1, "role-badge"], [1, "status-badge"], [1, "hero-actions"], [1, "ha-btn", 3, "click"], [1, "ha-btn", "ha-email", 3, "click"], [1, "ha-btn", "ha-pw", 3, "click"], [1, "profile-tabs"], [1, "ptab", 3, "click"], [1, "detail-sections"], [1, "form-card"], [1, "form-card", "photo-card"], [1, "form-card", "pw-card"], [1, "detail-card"], [1, "dc-title"], [1, "detail-grid"], [1, "dg-item"], [1, "no-address"], [1, "dg-item", "full"], [1, "add-addr-btn", 3, "click"], [1, "fc-title"], [1, "p-alert", "p-err"], [1, "form-section"], [1, "form-row"], [1, "form-group"], ["type", "text", "placeholder", "Your full name", 1, "p-input", 3, "ngModelChange", "ngModel"], ["type", "tel", "placeholder", "10-digit mobile", "maxlength", "10", 1, "p-input", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "p-input", 3, "ngModelChange", "ngModel", "max"], [1, "p-input", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "MALE"], ["value", "FEMALE"], ["value", "OTHER"], ["type", "text", "placeholder", "House no., Street, Area, Landmark", 1, "p-input", 3, "ngModelChange", "ngModel"], [1, "form-row", "form-row-3"], ["type", "text", "placeholder", "City", 1, "p-input", 3, "ngModelChange", "ngModel"], [3, "value"], ["type", "text", "placeholder", "6-digit", "maxlength", "6", 1, "p-input", 3, "ngModelChange", "ngModel"], [1, "form-actions"], [1, "p-btn-outline", 3, "click"], [1, "p-btn-primary", 3, "click", "disabled"], [1, "spinner"], [1, "photo-preview-wrap"], ["alt", "Preview", 1, "photo-preview", 3, "src"], [1, "photo-placeholder"], [1, "photo-upload-zone"], ["for", "photoInput", 1, "puz-label"], [1, "puz-icon"], [1, "puz-text"], [1, "puz-hint"], ["type", "file", "id", "photoInput", "accept", ".jpg,.jpeg,.png", 3, "change"], [1, "photo-actions"], [1, "p-btn-danger"], [1, "p-btn-primary", 3, "disabled"], [1, "pp-initials"], [1, "p-btn-danger", 3, "click"], [1, "fc-sub"], [1, "p-alert", "p-ok"], ["type", "email", "placeholder", "newemail@example.com", 1, "p-input", 3, "ngModelChange", "ngModel", "disabled"], ["type", "text", "placeholder", "6-digit OTP", "maxlength", "6", "inputmode", "numeric", 1, "p-input", "otp-input", 3, "ngModelChange", "ngModel"], [1, "otp-footer"], [1, "cooldown"], [1, "link-btn", 3, "disabled"], [1, "link-btn", 3, "click"], [1, "link-btn", 3, "click", "disabled"], [1, "pw-wrap"], ["placeholder", "Enter current password", 1, "p-input", 3, "ngModelChange", "type", "ngModel"], [1, "pw-toggle", 3, "click"], ["placeholder", "Minimum 6 characters", 1, "p-input", 3, "ngModelChange", "type", "ngModel"], [1, "str-wrap"], ["placeholder", "Re-enter new password", 1, "p-input", 3, "ngModelChange", "type", "ngModel"], [1, "hint-ok"], [1, "str-bar"], [1, "str-fill"], [1, "str-lbl"]], template: function CustomerProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, CustomerProfileComponent_Conditional_0_Template, 4, 0, "div", 0);
        \u0275\u0275conditionalCreate(1, CustomerProfileComponent_Conditional_1_Template, 39, 22);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.loading() ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() && ctx.profile() ? 1 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], styles: ["\n.p-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  margin-bottom: 14px;\n}\n.p-alert[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 16px;\n  cursor: pointer;\n}\n.p-err[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n  border: 1px solid #fecaca;\n}\n.p-ok[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #166534;\n  border: 1px solid #bbf7d0;\n}\n.p-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 64px;\n  gap: 12px;\n  color: #64748b;\n}\n.profile-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 24px;\n  background: var(--surface, #fff);\n  border: 1px solid var(--border, #e2e8f0);\n  border-radius: 16px;\n  padding: 24px;\n  margin-bottom: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  flex-wrap: wrap;\n}\n.avatar-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n}\n.avatar-img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid rgba(99, 102, 241, 0.3);\n}\n.avatar-initials[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 28px;\n  font-weight: 700;\n}\n.avatar-edit-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 26px;\n  height: 26px;\n  background: #6366f1;\n  color: #fff;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  font-size: 11px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s;\n}\n.avatar-edit-btn[_ngcontent-%COMP%]:hover {\n  background: #4f46e5;\n}\n.hero-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.hero-name[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.hero-email[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  margin-bottom: 10px;\n}\n.hero-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.role-badge[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: #6366f1;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 20px;\n  text-transform: uppercase;\n}\n.status-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n.sb-active[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #166534;\n}\n.sb-inactive[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.sb-locked[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #991b1b;\n}\n.sb-suspended[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #92400e;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 160px;\n}\n.ha-btn[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border-radius: 9px;\n  background: rgba(99, 102, 241, 0.08);\n  border: 1.5px solid rgba(99, 102, 241, 0.2);\n  color: #6366f1;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: left;\n  white-space: nowrap;\n}\n.ha-btn[_ngcontent-%COMP%]:hover {\n  background: #6366f1;\n  color: #fff;\n}\n.ha-email[_ngcontent-%COMP%] {\n  border-color: rgba(59, 130, 246, 0.3);\n  color: #2563eb;\n  background: rgba(59, 130, 246, 0.06);\n}\n.ha-email[_ngcontent-%COMP%]:hover {\n  background: #3b82f6;\n  color: #fff;\n}\n.ha-pw[_ngcontent-%COMP%] {\n  border-color: rgba(239, 68, 68, 0.3);\n  color: #dc2626;\n  background: rgba(239, 68, 68, 0.06);\n}\n.ha-pw[_ngcontent-%COMP%]:hover {\n  background: #ef4444;\n  color: #fff;\n}\n.profile-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  border-radius: 12px;\n  padding: 4px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.ptab[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 80px;\n  padding: 9px 8px;\n  border-radius: 9px;\n  border: none;\n  background: none;\n  font-size: 12px;\n  font-weight: 600;\n  color: #043148;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.ptab[_ngcontent-%COMP%]:hover {\n  color: #6a029a;\n}\n.ptab-active[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #6366f1;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n.detail-sections[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.detail-card[_ngcontent-%COMP%] {\n  background: var(--surface, #fff);\n  border: 1px solid var(--border, #e2e8f0);\n  border-radius: 12px;\n  padding: 18px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n.dc-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #6366f1;\n  margin-bottom: 14px;\n  padding-bottom: 8px;\n  border-bottom: 1.5px solid var(--border, #e2e8f0);\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n@media (max-width: 480px) {\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.dg-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  background: var(--bg, #f8fafc);\n  border-radius: 8px;\n  padding: 10px 12px;\n}\n.dg-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.dg-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text, #0f172a);\n  word-break: break-word;\n}\n.dg-item.full[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.no-address[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 16px;\n}\n.no-address[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n  margin-bottom: 10px;\n}\n.add-addr-btn[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n  border-radius: 9px;\n  background: rgba(99, 102, 241, 0.08);\n  border: 1.5px solid rgba(99, 102, 241, 0.2);\n  color: #6366f1;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.add-addr-btn[_ngcontent-%COMP%]:hover {\n  background: #6366f1;\n  color: #fff;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: var(--surface, #fff);\n  border: 1px solid var(--border, #e2e8f0);\n  border-radius: 16px;\n  padding: 24px;\n  max-width: 620px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.fc-title[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n}\n.fc-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  margin: 0;\n}\n.form-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.form-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #374151;\n  margin: 0;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-row-3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n@media (max-width: 560px) {\n  .form-row[_ngcontent-%COMP%], \n   .form-row-3[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.p-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1.5px solid var(--border, #e2e8f0);\n  border-radius: 10px;\n  font-size: 14px;\n  color: var(--text, #0f172a);\n  background: var(--surface, #fff);\n  outline: none;\n  transition: border 0.2s;\n  box-sizing: border-box;\n}\n.p-input[_ngcontent-%COMP%]:focus {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.p-input.is-ok[_ngcontent-%COMP%] {\n  border-color: #22c55e;\n}\n.otp-input[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: 8px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n  margin-top: 4px;\n}\n.p-btn-primary[_ngcontent-%COMP%] {\n  padding: 11px 22px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  border: none;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);\n}\n.p-btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n}\n.p-btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.p-btn-outline[_ngcontent-%COMP%] {\n  padding: 11px 22px;\n  border-radius: 10px;\n  border: 1.5px solid var(--border, #e2e8f0);\n  background: var(--surface, #fff);\n  color: var(--text, #0f172a);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.p-btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: #6366f1;\n  color: #6366f1;\n}\n.p-btn-danger[_ngcontent-%COMP%] {\n  padding: 11px 22px;\n  border-radius: 10px;\n  background: rgba(239, 68, 68, 0.08);\n  border: 1.5px solid rgba(239, 68, 68, 0.3);\n  color: #dc2626;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.p-btn-danger[_ngcontent-%COMP%]:hover {\n  background: #ef4444;\n  color: #fff;\n}\n.photo-card[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.photo-preview-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 16px 0;\n}\n.photo-preview[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 4px solid rgba(99, 102, 241, 0.2);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n.photo-placeholder[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  background: rgba(99, 102, 241, 0.08);\n  border: 2px dashed rgba(99, 102, 241, 0.3);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.pp-initials[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 700;\n  color: #6366f1;\n}\n.photo-placeholder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  margin: 0;\n}\n.photo-upload-zone[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.puz-label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  border: 2px dashed #e2e8f0;\n  border-radius: 10px;\n  padding: 20px;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: center;\n  position: relative;\n}\n.puz-label[_ngcontent-%COMP%]:hover {\n  border-color: #6366f1;\n  background: rgba(99, 102, 241, 0.04);\n}\n.puz-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  opacity: 0;\n}\n.puz-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.puz-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n}\n.puz-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.photo-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.otp-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  font-size: 13px;\n  color: #94a3b8;\n}\n.cooldown[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.link-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6366f1;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0;\n}\n.link-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.pw-card[_ngcontent-%COMP%] {\n  max-width: 480px;\n}\n.pw-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.pw-wrap[_ngcontent-%COMP%]   .p-input[_ngcontent-%COMP%] {\n  padding-right: 60px;\n}\n.pw-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: #6366f1;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.str-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 4px;\n}\n.str-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 4px;\n  background: #e2e8f0;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.str-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.3s ease;\n}\n.str-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  min-width: 44px;\n}\n.str-weak[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #ef4444;\n}\n.str-fair[_ngcontent-%COMP%] {\n  background: #f97316;\n  color: #f97316;\n}\n.str-good[_ngcontent-%COMP%] {\n  background: #eab308;\n  color: #eab308;\n}\n.str-strong[_ngcontent-%COMP%] {\n  background: #22c55e;\n  color: #22c55e;\n}\n.hint-ok[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #22c55e;\n  font-weight: 500;\n}\n.spin-ring[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #6366f1;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=customer-profile.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerProfileComponent, [{
    type: Component,
    args: [{ selector: "app-customer-profile", standalone: true, imports: [CommonModule, FormsModule], template: `<!------- customer-profile.component.html ------->

<!-- Global alerts -->
<!-- @if (error())   { <div class="p-alert p-err">{{ error() }}<button (click)="error.set('')">\u2715</button></div> }
@if (success()) { <div class="p-alert p-ok">{{ success() }}<button (click)="success.set('')">\u2715</button></div> } -->

<!-- Loading -->
@if (loading()) {
  <div class="p-loading"><div class="spin-ring"></div><p>Loading profile...</p></div>
}

@if (!loading() && profile()) {

  <!-- \u2550\u2550 PROFILE HEADER CARD \u2550\u2550 -->
  <div class="profile-hero">
    <!-- Avatar -->
    <div class="avatar-wrap">
      @if (photoPreview()) {
        <img [src]="photoPreview()!" class="avatar-img" alt="Profile" />
      } @else {
        <div class="avatar-initials">{{ getInitials() }}</div>
      }
      <button class="avatar-edit-btn"
        (click)="switchTab('photo')"
        title="Change photo">\u270F</button>
    </div>

    <!-- Name + info -->
    <div class="hero-info">
      <h2 class="hero-name">{{ profile().fullName || profile().username }}</h2>
      <p class="hero-email">{{ profile().email }}</p>
      <div class="hero-badges">
        <span class="role-badge">{{ profile().role }}</span>
        <span class="status-badge"
          [class]="'sb-' + profile().status?.toLowerCase()">
          {{ profile().status }}
        </span>
      </div>
    </div>

    <!-- Quick actions -->
    <div class="hero-actions">
      <button class="ha-btn" (click)="switchTab('edit')">\u270F Edit Profile</button>
      <button class="ha-btn ha-email" (click)="switchTab('email')">\u{1F4E7} Change Email</button>
      <button class="ha-btn ha-pw" (click)="switchTab('password')">\u{1F512} Change Password</button>
    </div>
  </div>

  <!-- \u2550\u2550 TABS \u2550\u2550 -->
  <div class="profile-tabs">
    <button class="ptab" [class.ptab-active]="activeTab() === 'view'"
      (click)="switchTab('view')">\u{1F464} Details</button>
    <button class="ptab" [class.ptab-active]="activeTab() === 'edit'"
      (click)="switchTab('edit')">\u270F Edit</button>
    <button class="ptab" [class.ptab-active]="activeTab() === 'photo'"
      (click)="switchTab('photo')">\u{1F5BC} Photo</button>
    <button class="ptab" [class.ptab-active]="activeTab() === 'email'"
      (click)="switchTab('email')">\u{1F4E7} Email</button>
    <button class="ptab" [class.ptab-active]="activeTab() === 'password'"
      (click)="switchTab('password')">\u{1F512} Password</button>
  </div>

  <!-- \u2550\u2550 VIEW TAB \u2550\u2550 -->
  @if (activeTab() === 'view') {
    <div class="detail-sections">

      <!-- Personal Info -->
      <div class="detail-card">
        <div class="dc-title">\u{1F464} Personal Information</div>
        <div class="detail-grid">
          <div class="dg-item"><span>Username</span><strong>{{ profile().username }}</strong></div>
          <div class="dg-item"><span>Full Name</span><strong>{{ profile().fullName || '\u2014' }}</strong></div>
          <div class="dg-item"><span>Email</span><strong>{{ profile().email }}</strong></div>
          <div class="dg-item"><span>Phone</span><strong>{{ profile().phone || '\u2014' }}</strong></div>
          <div class="dg-item"><span>Date of Birth</span><strong>{{ profile().dateOfBirth || '\u2014' }}</strong></div>
          <div class="dg-item"><span>Gender</span><strong>{{ profile().gender || '\u2014' }}</strong></div>
          <div class="dg-item"><span>Role</span><strong>{{ profile().role }}</strong></div>
          <div class="dg-item"><span>Status</span><strong>{{ profile().status }}</strong></div>
        </div>
      </div>

      <!-- Address Info -->
      <div class="detail-card">
        <div class="dc-title">\u{1F3E0} Address Information</div>
        @if (profile().addressLine || profile().city) {
          <div class="detail-grid">
            <div class="dg-item full"><span>Address</span><strong>{{ profile().addressLine || '\u2014' }}</strong></div>
            <div class="dg-item"><span>City</span><strong>{{ profile().city || '\u2014' }}</strong></div>
            <div class="dg-item"><span>State</span><strong>{{ profile().state || '\u2014' }}</strong></div>
            <div class="dg-item"><span>Pincode</span><strong>{{ profile().pincode || '\u2014' }}</strong></div>
          </div>
        } @else {
          <div class="no-address">
            <p>No address added yet.</p>
            <button class="add-addr-btn" (click)="switchTab('edit')">+ Add Address</button>
          </div>
        }
      </div>

      <!-- Account Meta -->
      <div class="detail-card">
        <div class="dc-title">\u2699 Account Information</div>
        <div class="detail-grid">
          <div class="dg-item"><span>Member Since</span><strong>{{ profile().createdAt }}</strong></div>
          <div class="dg-item"><span>Last Updated</span><strong>{{ profile().updatedAt || '\u2014' }}</strong></div>
        </div>
      </div>
    </div>
  }

  <!-- \u2550\u2550 EDIT TAB \u2550\u2550 -->
  @if (activeTab() === 'edit') {
    <div class="form-card">
      <div class="fc-title">Edit Profile</div>
      @if (editError()) { <div class="p-alert p-err">{{ editError() }}</div> }

      <div class="form-section">
        <h4>Personal Details</h4>
        <div class="form-row">
          <div class="form-group">
            <label>Full Name</label>
            <input type="text" class="p-input" [(ngModel)]="editForm.fullName"
              placeholder="Your full name" />
          </div>
          <div class="form-group">
            <label>Phone Number</label>
            <input type="tel" class="p-input" [(ngModel)]="editForm.phone"
              placeholder="10-digit mobile" maxlength="10" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Date of Birth</label>
            <input type="date" class="p-input" [(ngModel)]="editForm.dateOfBirth"
              [max]="maxDob" />
          </div>
          <div class="form-group">
            <label>Gender</label>
            <select class="p-input" [(ngModel)]="editForm.gender">
              <option value="">Select...</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
        </div>
      </div>

      <div class="form-section">
        <h4>Address</h4>
        <div class="form-group">
          <label>Address Line</label>
          <input type="text" class="p-input" [(ngModel)]="editForm.addressLine"
            placeholder="House no., Street, Area, Landmark" />
        </div>
        <div class="form-row form-row-3">
          <div class="form-group">
            <label>City</label>
            <input type="text" class="p-input" [(ngModel)]="editForm.city"
              placeholder="City" />
          </div>
          <div class="form-group">
            <label>State</label>
            <select class="p-input" [(ngModel)]="editForm.state">
              <option value="">Select state...</option>
              @for (st of indianStates; track st) {
                <option [value]="st">{{ st }}</option>
              }
            </select>
          </div>
          <div class="form-group">
            <label>Pincode</label>
            <input type="text" class="p-input" [(ngModel)]="editForm.pincode"
              placeholder="6-digit" maxlength="6" />
          </div>
        </div>
      </div>

      <div class="form-actions">
        <button class="p-btn-outline" (click)="switchTab('view')">Cancel</button>
        <button class="p-btn-primary" (click)="saveProfile()" [disabled]="editLoading()">
          @if (editLoading()) { <span class="spinner"></span> } Save Changes
        </button>
      </div>
    </div>
  }

  <!-- \u2550\u2550 PHOTO TAB \u2550\u2550 -->
  @if (activeTab() === 'photo') {
    <div class="form-card photo-card">
      <div class="fc-title">Profile Photo</div>
      @if (photoError()) { <div class="p-alert p-err">{{ photoError() }}</div> }

      <!-- Current / Preview -->
      <div class="photo-preview-wrap">
        @if (photoPreview()) {
          <img [src]="photoPreview()!" class="photo-preview" alt="Preview" />
        } @else {
          <div class="photo-placeholder">
            <div class="pp-initials">{{ getInitials() }}</div>
            <p>No photo</p>
          </div>
        }
      </div>

      <!-- Upload Zone -->
      <div class="photo-upload-zone">
        <label class="puz-label" for="photoInput">
          <span class="puz-icon">\u{1F4F7}</span>
          <span class="puz-text">Click to select photo</span>
          <span class="puz-hint">JPG or PNG \xB7 Max 2MB</span>
          <input type="file" id="photoInput"
            (change)="onPhotoSelect($event)"
            accept=".jpg,.jpeg,.png" />
        </label>
      </div>

      <div class="photo-actions">
        <button class="p-btn-outline" (click)="cancelPhoto()">Cancel</button>
        @if (profile().profilePhotoBase64) {
          <button class="p-btn-danger" (click)="removePhoto()">\u{1F5D1} Remove Photo</button>
        }
        @if (selectedPhoto) {
          <button class="p-btn-primary" (click)="uploadPhoto()" [disabled]="photoLoading()">
            @if (photoLoading()) { <span class="spinner"></span> } Upload Photo
          </button>
        }
      </div>
    </div>
  }

  <!-- \u2550\u2550 EMAIL TAB \u2550\u2550 -->
  @if (activeTab() === 'email') {
    <div class="form-card">
      <div class="fc-title">Change Email Address</div>
      <p class="fc-sub">Current email: <strong>{{ profile().email }}</strong></p>

      @if (emailError())   { <div class="p-alert p-err">{{ emailError() }}</div> }
      @if (emailSuccess()) { <div class="p-alert p-ok">{{ emailSuccess() }}</div> }

      <div class="form-group">
        <label>New Email Address</label>
        <input type="email" class="p-input" [(ngModel)]="newEmail"
          placeholder="newemail@example.com"
          [disabled]="emailOtpSent()" />
      </div>

      @if (!emailOtpSent()) {
        <button class="p-btn-primary" (click)="sendEmailOtp()"
          [disabled]="emailOtpLoading()">
          @if (emailOtpLoading()) { <span class="spinner"></span> }
          Send OTP to New Email \u2192
        </button>
      } @else {
        <div class="form-group">
          <label>OTP (sent to {{ newEmail }})</label>
          <input type="text" class="p-input otp-input"
            [(ngModel)]="emailOtp"
            placeholder="6-digit OTP"
            maxlength="6" inputmode="numeric" />
        </div>

        <div class="otp-footer">
          @if (emailCooldown() > 0) {
            <span class="cooldown">Resend in {{ emailCooldown() }}s</span>
          } @else {
            <button class="link-btn" (click)="sendEmailOtp()"
              [disabled]="emailOtpLoading()">
              Resend OTP
            </button>
          }
          <button class="link-btn" (click)="emailOtpSent.set(false); emailOtp = ''">
            Change email
          </button>
        </div>

        <div class="form-actions">
          <button class="p-btn-outline" (click)="switchTab('view')">Cancel</button>
          <button class="p-btn-primary" (click)="updateEmail()"
            [disabled]="emailVerifyLoading()">
            @if (emailVerifyLoading()) { <span class="spinner"></span> }
            Verify & Update Email
          </button>
        </div>
      }
    </div>
  }

  <!-- \u2550\u2550 PASSWORD TAB \u2550\u2550 -->
  @if (activeTab() === 'password') {
    <div class="form-card pw-card">
      <div class="fc-title">Change Password</div>

      @if (pwError())   { <div class="p-alert p-err">{{ pwError() }}</div> }
      @if (pwSuccess()) { <div class="p-alert p-ok">{{ pwSuccess() }}</div> }

      <div class="form-group">
        <label>Current Password</label>
        <div class="pw-wrap">
          <input [type]="showCurrent() ? 'text' : 'password'"
            class="p-input" [(ngModel)]="currentPassword"
            placeholder="Enter current password" />
          <button class="pw-toggle" (click)="showCurrent.update(v => !v)">
            {{ showCurrent() ? 'Hide' : 'Show' }}
          </button>
        </div>
      </div>

      <div class="form-group">
        <label>New Password</label>
        <div class="pw-wrap">
          <input [type]="showNew() ? 'text' : 'password'"
            class="p-input" [(ngModel)]="newPassword"
            placeholder="Minimum 6 characters" />
          <button class="pw-toggle" (click)="showNew.update(v => !v)">
            {{ showNew() ? 'Hide' : 'Show' }}
          </button>
        </div>
        @if (newPassword.length > 0) {
          <div class="str-wrap">
            <div class="str-bar">
              <div class="str-fill"
                [class]="getPasswordStrength(newPassword).cls"
                [style.width.%]="getPasswordStrength(newPassword).w">
              </div>
            </div>
            <span class="str-lbl"
              [class]="getPasswordStrength(newPassword).cls">
              {{ getPasswordStrength(newPassword).label }}
            </span>
          </div>
        }
      </div>

      <div class="form-group">
        <label>Confirm New Password</label>
        <div class="pw-wrap">
          <input [type]="showConfirm() ? 'text' : 'password'"
            class="p-input"
            [class.is-ok]="confirmPassword && newPassword === confirmPassword"
            [(ngModel)]="confirmPassword"
            placeholder="Re-enter new password" />
          <button class="pw-toggle" (click)="showConfirm.update(v => !v)">
            {{ showConfirm() ? 'Hide' : 'Show' }}
          </button>
        </div>
        @if (confirmPassword && newPassword === confirmPassword) {
          <span class="hint-ok">\u2713 Passwords match</span>
        }
      </div>

      <div class="form-actions">
        <button class="p-btn-outline" (click)="switchTab('view')">Cancel</button>
        <button class="p-btn-primary" (click)="changePassword()"
          [disabled]="pwLoading()">
          @if (pwLoading()) { <span class="spinner"></span> }
          \u{1F512} Change Password
        </button>
      </div>
    </div>
  }
}`, styles: ["/* src/app/features/customer/customer-profile/customer-profile.component.css */\n.p-alert {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  margin-bottom: 14px;\n}\n.p-alert button {\n  background: none;\n  border: none;\n  font-size: 16px;\n  cursor: pointer;\n}\n.p-err {\n  background: #fef2f2;\n  color: #dc2626;\n  border: 1px solid #fecaca;\n}\n.p-ok {\n  background: #f0fdf4;\n  color: #166534;\n  border: 1px solid #bbf7d0;\n}\n.p-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 64px;\n  gap: 12px;\n  color: #64748b;\n}\n.profile-hero {\n  display: flex;\n  align-items: flex-start;\n  gap: 24px;\n  background: var(--surface, #fff);\n  border: 1px solid var(--border, #e2e8f0);\n  border-radius: 16px;\n  padding: 24px;\n  margin-bottom: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  flex-wrap: wrap;\n}\n.avatar-wrap {\n  position: relative;\n  flex-shrink: 0;\n}\n.avatar-img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid rgba(99, 102, 241, 0.3);\n}\n.avatar-initials {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 28px;\n  font-weight: 700;\n}\n.avatar-edit-btn {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 26px;\n  height: 26px;\n  background: #6366f1;\n  color: #fff;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  font-size: 11px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s;\n}\n.avatar-edit-btn:hover {\n  background: #4f46e5;\n}\n.hero-info {\n  flex: 1;\n  min-width: 200px;\n}\n.hero-name {\n  font-size: 22px;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.hero-email {\n  font-size: 13px;\n  color: #64748b;\n  margin-bottom: 10px;\n}\n.hero-badges {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.role-badge {\n  background: rgba(99, 102, 241, 0.1);\n  color: #6366f1;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 20px;\n  text-transform: uppercase;\n}\n.status-badge {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n.sb-active {\n  background: #f0fdf4;\n  color: #166534;\n}\n.sb-inactive {\n  background: #f1f5f9;\n  color: #475569;\n}\n.sb-locked {\n  background: #fef2f2;\n  color: #991b1b;\n}\n.sb-suspended {\n  background: #fffbeb;\n  color: #92400e;\n}\n.hero-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 160px;\n}\n.ha-btn {\n  padding: 8px 14px;\n  border-radius: 9px;\n  background: rgba(99, 102, 241, 0.08);\n  border: 1.5px solid rgba(99, 102, 241, 0.2);\n  color: #6366f1;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: left;\n  white-space: nowrap;\n}\n.ha-btn:hover {\n  background: #6366f1;\n  color: #fff;\n}\n.ha-email {\n  border-color: rgba(59, 130, 246, 0.3);\n  color: #2563eb;\n  background: rgba(59, 130, 246, 0.06);\n}\n.ha-email:hover {\n  background: #3b82f6;\n  color: #fff;\n}\n.ha-pw {\n  border-color: rgba(239, 68, 68, 0.3);\n  color: #dc2626;\n  background: rgba(239, 68, 68, 0.06);\n}\n.ha-pw:hover {\n  background: #ef4444;\n  color: #fff;\n}\n.profile-tabs {\n  display: flex;\n  gap: 4px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  border-radius: 12px;\n  padding: 4px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.ptab {\n  flex: 1;\n  min-width: 80px;\n  padding: 9px 8px;\n  border-radius: 9px;\n  border: none;\n  background: none;\n  font-size: 12px;\n  font-weight: 600;\n  color: #043148;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.ptab:hover {\n  color: #6a029a;\n}\n.ptab-active {\n  background: #ffffff;\n  color: #6366f1;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n.detail-sections {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.detail-card {\n  background: var(--surface, #fff);\n  border: 1px solid var(--border, #e2e8f0);\n  border-radius: 12px;\n  padding: 18px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n.dc-title {\n  font-size: 13px;\n  font-weight: 700;\n  color: #6366f1;\n  margin-bottom: 14px;\n  padding-bottom: 8px;\n  border-bottom: 1.5px solid var(--border, #e2e8f0);\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n@media (max-width: 480px) {\n  .detail-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.dg-item {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  background: var(--bg, #f8fafc);\n  border-radius: 8px;\n  padding: 10px 12px;\n}\n.dg-item span {\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.dg-item strong {\n  font-size: 13px;\n  color: var(--text, #0f172a);\n  word-break: break-word;\n}\n.dg-item.full {\n  grid-column: 1 / -1;\n}\n.no-address {\n  text-align: center;\n  padding: 16px;\n}\n.no-address p {\n  font-size: 13px;\n  color: #94a3b8;\n  margin-bottom: 10px;\n}\n.add-addr-btn {\n  padding: 8px 18px;\n  border-radius: 9px;\n  background: rgba(99, 102, 241, 0.08);\n  border: 1.5px solid rgba(99, 102, 241, 0.2);\n  color: #6366f1;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.add-addr-btn:hover {\n  background: #6366f1;\n  color: #fff;\n}\n.form-card {\n  background: var(--surface, #fff);\n  border: 1px solid var(--border, #e2e8f0);\n  border-radius: 16px;\n  padding: 24px;\n  max-width: 620px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.fc-title {\n  font-size: 17px;\n  font-weight: 700;\n}\n.fc-sub {\n  font-size: 13px;\n  color: #64748b;\n  margin: 0;\n}\n.form-section {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.form-section h4 {\n  font-size: 13px;\n  font-weight: 700;\n  color: #374151;\n  margin: 0;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-row-3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n@media (max-width: 560px) {\n  .form-row,\n  .form-row-3 {\n    grid-template-columns: 1fr;\n  }\n}\n.p-input {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1.5px solid var(--border, #e2e8f0);\n  border-radius: 10px;\n  font-size: 14px;\n  color: var(--text, #0f172a);\n  background: var(--surface, #fff);\n  outline: none;\n  transition: border 0.2s;\n  box-sizing: border-box;\n}\n.p-input:focus {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.p-input.is-ok {\n  border-color: #22c55e;\n}\n.otp-input {\n  text-align: center;\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: 8px;\n}\n.form-actions {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n  margin-top: 4px;\n}\n.p-btn-primary {\n  padding: 11px 22px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  border: none;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);\n}\n.p-btn-primary:hover:not(:disabled) {\n  transform: translateY(-1px);\n}\n.p-btn-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.p-btn-outline {\n  padding: 11px 22px;\n  border-radius: 10px;\n  border: 1.5px solid var(--border, #e2e8f0);\n  background: var(--surface, #fff);\n  color: var(--text, #0f172a);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.p-btn-outline:hover {\n  border-color: #6366f1;\n  color: #6366f1;\n}\n.p-btn-danger {\n  padding: 11px 22px;\n  border-radius: 10px;\n  background: rgba(239, 68, 68, 0.08);\n  border: 1.5px solid rgba(239, 68, 68, 0.3);\n  color: #dc2626;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.p-btn-danger:hover {\n  background: #ef4444;\n  color: #fff;\n}\n.photo-card {\n  align-items: center;\n}\n.photo-preview-wrap {\n  display: flex;\n  justify-content: center;\n  padding: 16px 0;\n}\n.photo-preview {\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 4px solid rgba(99, 102, 241, 0.2);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n.photo-placeholder {\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  background: rgba(99, 102, 241, 0.08);\n  border: 2px dashed rgba(99, 102, 241, 0.3);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.pp-initials {\n  font-size: 40px;\n  font-weight: 700;\n  color: #6366f1;\n}\n.photo-placeholder p {\n  font-size: 12px;\n  color: #94a3b8;\n  margin: 0;\n}\n.photo-upload-zone {\n  width: 100%;\n}\n.puz-label {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  border: 2px dashed #e2e8f0;\n  border-radius: 10px;\n  padding: 20px;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: center;\n  position: relative;\n}\n.puz-label:hover {\n  border-color: #6366f1;\n  background: rgba(99, 102, 241, 0.04);\n}\n.puz-label input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  opacity: 0;\n}\n.puz-icon {\n  font-size: 2rem;\n}\n.puz-text {\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n}\n.puz-hint {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.photo-actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.otp-footer {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  font-size: 13px;\n  color: #94a3b8;\n}\n.cooldown {\n  color: #94a3b8;\n}\n.link-btn {\n  background: none;\n  border: none;\n  color: #6366f1;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0;\n}\n.link-btn:hover {\n  text-decoration: underline;\n}\n.pw-card {\n  max-width: 480px;\n}\n.pw-wrap {\n  position: relative;\n}\n.pw-wrap .p-input {\n  padding-right: 60px;\n}\n.pw-toggle {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: #6366f1;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.str-wrap {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 4px;\n}\n.str-bar {\n  flex: 1;\n  height: 4px;\n  background: #e2e8f0;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.str-fill {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.3s ease;\n}\n.str-lbl {\n  font-size: 11px;\n  font-weight: 600;\n  min-width: 44px;\n}\n.str-weak {\n  background: #ef4444;\n  color: #ef4444;\n}\n.str-fair {\n  background: #f97316;\n  color: #f97316;\n}\n.str-good {\n  background: #eab308;\n  color: #eab308;\n}\n.str-strong {\n  background: #22c55e;\n  color: #22c55e;\n}\n.hint-ok {\n  font-size: 12px;\n  color: #22c55e;\n  font-weight: 500;\n}\n.spin-ring {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #6366f1;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.spinner {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=customer-profile.component.css.map */\n"] }]
  }], () => [{ type: ProfileService }, { type: AuthService }, { type: NotificationService }], { activeSubSection: [{
    type: Input
  }], user: [{
    type: Input
  }], profileUpdated: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerProfileComponent, { className: "CustomerProfileComponent", filePath: "app/features/customer/customer-profile/customer-profile.component.ts", lineNumber: 22 });
})();

// src/app/core/services/transation.service.ts
var TransactionService = class _TransactionService {
  constructor(http) {
    this.http = http;
    this.base = environment.apiUrl;
  }
  get authHeaders() {
    return { Authorization: `Bearer ${localStorage.getItem("token")}` };
  }
  // ─────────────────────────────────────────────
  //  CUSTOMER
  // ─────────────────────────────────────────────
  // getMyTransactions(accountNumber: string, page = 0, size = 10): Observable<any> {
  //   return this.http.get(
  //     `${this.base}/transaction/my/${accountNumber}`,
  //     { params: { page, size }, headers: this.authHeaders }
  //   );
  // }
  getMyTransactions(accountNumber, page = 0, size = 10, type, status) {
    let params = { page, size };
    if (type)
      params["type"] = type;
    if (status)
      params["status"] = status;
    return this.http.get(`${this.base}/transaction/my/${accountNumber}`, {
      params
      // , headers: this.authHeaders 
    });
  }
  upiTransfer(payload) {
    return this.http.post(`${this.base}/transaction/upi`, payload);
  }
  neftTransfer(payload) {
    return this.http.post(`${this.base}/transaction/neft`, payload);
  }
  selfTransfer(payload) {
    return this.http.post(`${this.base}/transaction/self`, payload);
  }
  // ─────────────────────────────────────────────
  //  ADMIN
  // ─────────────────────────────────────────────
  adminDeposit(payload) {
    return this.http.post(`${this.base}/transaction/admin/deposit`, payload);
  }
  adminWithdraw(payload) {
    return this.http.post(`${this.base}/transaction/admin/withdraw`, payload);
  }
  // getAllAdminTransactions(page = 0, size = 10): Observable<any> {
  //   return this.http.get(
  //     `${this.base}/transaction/admin/all`,
  //     { params: { page, size }, headers: this.authHeaders }
  //   );
  // }
  getAllAdminTransactions(page = 0, size = 10, search) {
    let params = { page, size };
    if (search)
      params["search"] = search;
    return this.http.get(`${this.base}/transaction/admin/all`, {
      params
      // , headers: this.authHeaders 
    });
  }
  static {
    this.\u0275fac = function TransactionService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TransactionService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TransactionService, factory: _TransactionService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransactionService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/core/services/loan.service.ts
var LoanService = class _LoanService {
  constructor(http) {
    this.http = http;
    this.base = `${environment.apiUrl}/loans`;
  }
  // ── EMI Calculator (public) ──
  calculateEmi(payload) {
    return this.http.post(`${this.base}/calculate-emi`, payload);
  }
  // ── Products ──
  getActiveProducts() {
    return this.http.get(`${this.base}/products/active`);
  }
  getAllProducts() {
    return this.http.get(`${this.base}/products`);
  }
  getProduct(id) {
    return this.http.get(`${this.base}/products/${id}`);
  }
  createProduct(payload) {
    return this.http.post(`${this.base}/products`, payload);
  }
  updateProduct(id, payload) {
    return this.http.put(`${this.base}/products/${id}`, payload);
  }
  // ── Customer ──
  applyLoan(form) {
    return this.http.post(`${this.base}/apply`, form);
  }
  getMyLoans() {
    return this.http.get(`${this.base}/my`);
  }
  getEmiSchedule(loanId) {
    return this.http.get(`${this.base}/${loanId}/emi-schedule`);
  }
  requestForeclosure(loanId) {
    return this.http.post(`${this.base}/${loanId}/foreclosure`, {});
  }
  manualPayEmi(loanId, emiId, note) {
    return this.http.patch(`${this.base}/${loanId}/repayments/${emiId}/pay`, note ? { note } : {});
  }
  // ── Admin ──
  getAllLoans(status = "", page = 0, size = 15) {
    return this.http.get(`${this.base}/admin/all`, { params: { status, page, size } });
  }
  getLoanDetail(loanId) {
    return this.http.get(`${this.base}/admin/${loanId}`);
  }
  approveLoan(loanId, interestRate, treasuryId) {
    return this.http.post(`${this.base}/admin/${loanId}/approve`, { interestRate, treasuryId });
  }
  rejectLoan(loanId, reason) {
    return this.http.post(`${this.base}/admin/${loanId}/reject`, { reason });
  }
  approveForeclosure(loanId) {
    return this.http.post(`${this.base}/admin/${loanId}/foreclosure/approve`, {});
  }
  adminGetEmiSchedule(loanId) {
    return this.http.get(`${this.base}/admin/${loanId}/emi-schedule`);
  }
  adminManualPayEmi(loanId, emiId, note) {
    return this.http.patch(`${this.base}/admin/${loanId}/repayments/${emiId}/pay`, note ? { note } : {});
  }
  static {
    this.\u0275fac = function LoanService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoanService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LoanService, factory: _LoanService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoanService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/core/services/card.service.ts
var CardService = class _CardService {
  constructor(http) {
    this.http = http;
    this.base = `${environment.apiUrl}/cards`;
  }
  issueCard(payload) {
    return this.http.post(`${this.base}/issue`, payload);
  }
  // getMyCards(): Observable<any> {
  //   return this.http.get(`${this.base}/my`);
  // }
  // blockCard(cardId: number, reason?: string): Observable<any> {
  //   return this.http.post(`${this.base}/${cardId}/block`,
  //     null, { params: reason ? { reason } : {} });
  // }
  // unblockCard(cardId: number): Observable<any> {
  //   return this.http.post(`${this.base}/${cardId}/unblock`, {});
  // }
  // updateLimits(cardId: number, payload: {
  //   onlineLimit?: string; atmLimit?: string; dailyLimit?: string;
  // }): Observable<any> {
  //   return this.http.put(`${this.base}/${cardId}/limits`, payload);
  // }
  // sendPinOtp(cardId: number): Observable<any> {
  //   return this.http.post(`${this.base}/${cardId}/pin/send-otp`, {});
  // }
  setPin(payload) {
    return this.http.post(`${this.base}/pin/set`, payload);
  }
  // requestReplacement(payload: {
  //   cardId: string; reason: string;
  // }): Observable<any> {
  //   return this.http.post(`${this.base}/replacement`, payload);
  // }
  // getCardTransactions(cardId: number,
  //   page = 0, size = 15): Observable<any> {
  //   return this.http.get(`${this.base}/${cardId}/transactions`,
  //     { params: { page, size } });
  // }
  // sendTransferOtp(cardNumber: string): Observable<any> {
  //   return this.http.post(`${this.base}/transfer/send-otp`,
  //     null, { params: { cardNumber } });
  // }
  cardTransfer(payload) {
    return this.http.post(`${this.base}/transfer`, payload);
  }
  // ── Customer ──
  requestCard(payload) {
    return this.http.post(`${this.base}/request`, payload);
  }
  getMyCards() {
    return this.http.get(`${this.base}/my`);
  }
  sendRevealOtp(cardId) {
    return this.http.post(`${this.base}/${cardId}/details/send-otp`, {});
  }
  revealCardDetails(payload) {
    return this.http.post(`${this.base}/details/reveal`, payload);
  }
  sendPinOtp(cardId) {
    return this.http.post(`${this.base}/${cardId}/pin/send-otp`, {});
  }
  changePin(payload) {
    return this.http.post(`${this.base}/pin/change`, payload);
  }
  blockCard(cardId, reason) {
    return this.http.post(`${this.base}/${cardId}/block`, null, { params: reason ? { reason } : {} });
  }
  unblockCard(cardId) {
    return this.http.post(`${this.base}/${cardId}/unblock`, {});
  }
  updateLimits(cardId, payload) {
    return this.http.put(`${this.base}/${cardId}/limits`, payload);
  }
  requestReplacement(payload) {
    return this.http.post(`${this.base}/replacement`, payload);
  }
  getCardTransactions(cardId, page = 0, size = 15) {
    return this.http.get(`${this.base}/${cardId}/transactions`, { params: { page, size } });
  }
  sendTransferOtp(cardNumber) {
    return this.http.post(`${this.base}/transfer/send-otp`, null, { params: { cardNumber } });
  }
  cardBankTransfer(payload) {
    return this.http.post(`${this.base}/transfer`, payload);
  }
  // ── Admin ──
  getAllCards(filter = "", page = 0, size = 15) {
    return this.http.get(`${this.base}/admin/all`, { params: { filter, page, size } });
  }
  approveCard(cardId) {
    return this.http.post(`${this.base}/admin/${cardId}/approve`, {});
  }
  rejectCard(cardId, rejectionReason) {
    return this.http.post(`${this.base}/admin/${cardId}/reject`, { rejectionReason });
  }
  adminBlockCard(cardId, reason) {
    return this.http.post(`${this.base}/admin/${cardId}/block`, null, { params: reason ? { reason } : {} });
  }
  adminUnblockCard(cardId) {
    return this.http.post(`${this.base}/admin/${cardId}/unblock`, {});
  }
  static {
    this.\u0275fac = function CardService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CardService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CardService, factory: _CardService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AccountService,
  TransactionService,
  ProfileService,
  CustomerProfileComponent,
  LoanService,
  CardService
};
//# sourceMappingURL=chunk-WI3YPBFE.js.map
