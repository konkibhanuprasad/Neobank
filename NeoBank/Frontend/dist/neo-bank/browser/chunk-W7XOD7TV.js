import {
  ApplicationService
} from "./chunk-AO72TSPP.js";
import {
  NotificationService
} from "./chunk-65BWTZ27.js";
import {
  ThemeService
} from "./chunk-3UVNMLKZ.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-5EBQK35F.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-D2A5YED7.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QR452MNT.js";

// src/app/features/auth/register-multi/register-multi.component.ts
var _forTrack0 = ($index, $item) => $item.n;
var _forTrack1 = ($index, $item) => $item.value;
function RegisterMultiComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6);
    \u0275\u0275text(5, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h2", 7);
    \u0275\u0275text(7, "Application Submitted!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 8);
    \u0275\u0275text(9, "Your bank account application has been received.");
    \u0275\u0275element(10, "br");
    \u0275\u0275text(11, " Our team will verify your documents within 2\u20133 business days.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 9)(13, "span", 10);
    \u0275\u0275text(14, "Application ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 11);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 12)(18, "div", 13)(19, "span");
    \u0275\u0275text(20, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "strong");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 13)(24, "span");
    \u0275\u0275text(25, "Account Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "strong");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 13)(29, "span");
    \u0275\u0275text(30, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "strong");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 13)(34, "span");
    \u0275\u0275text(35, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "strong");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 13)(39, "span");
    \u0275\u0275text(40, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 14);
    \u0275\u0275text(42, "\u2713 SUCCESS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 13)(44, "span");
    \u0275\u0275text(45, "Submitted On");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "strong");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 15)(49, "button", 16);
    \u0275\u0275listener("click", function RegisterMultiComponent_Conditional_0_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadPDF());
    });
    \u0275\u0275text(50, " \u2B07 Download Application PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 17);
    \u0275\u0275listener("click", function RegisterMultiComponent_Conditional_0_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToHome());
    });
    \u0275\u0275text(52, " Go to Home Page ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(53, "div", 18)(54, "div", 19)(55, "div", 20);
    \u0275\u0275text(56, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "h2");
    \u0275\u0275text(58, "Welcome to NeoBank!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "p");
    \u0275\u0275text(60, "Your application is under review. You'll receive an email confirmation shortly.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 21)(62, "div", 22)(63, "span", 23);
    \u0275\u0275text(64, "\u{1F514}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "span");
    \u0275\u0275text(66, "Email confirmation sent");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 22)(68, "span", 23);
    \u0275\u0275text(69, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "span");
    \u0275\u0275text(71, "Document verification in progress");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 22)(73, "span", 23);
    \u0275\u0275text(74, "\u{1F4B3}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "span");
    \u0275\u0275text(76, "Account activation in 2\u20133 days");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate(ctx_r1.applicationId());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.customerDetails.fullName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.customerDetails.accountType);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.customerDetails.phoneNumber);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.customerDetails.emailId);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.today);
  }
}
function RegisterMultiComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 24)(2, "div", 25);
    \u0275\u0275text(3, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "Application Submitted!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 26);
    \u0275\u0275text(7, "Your bank account application has been received.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 9)(9, "span", 10);
    \u0275\u0275text(10, "Application ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 11);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 12)(14, "div", 13)(15, "span");
    \u0275\u0275text(16, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 13)(20, "span");
    \u0275\u0275text(21, "Account Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 13)(25, "span");
    \u0275\u0275text(26, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "strong");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 13)(30, "span");
    \u0275\u0275text(31, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "strong");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 13)(35, "span");
    \u0275\u0275text(36, "Submitted On");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "strong");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 13)(40, "span");
    \u0275\u0275text(41, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 14);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "p", 27);
    \u0275\u0275text(45, "\u{1F4E5} PDF will auto-download in 3 seconds...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 28)(47, "button", 16);
    \u0275\u0275listener("click", function RegisterMultiComponent_Conditional_1_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDownloadAndClose());
    });
    \u0275\u0275text(48, " \u2B07 Download PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 17);
    \u0275\u0275listener("click", function RegisterMultiComponent_Conditional_1_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCloseSuccessPopup());
    });
    \u0275\u0275text(50, " Close ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r1.applicationResponse()) == null ? null : tmp_1_0.applicationId);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.applicationResponse()) == null ? null : tmp_2_0.fullName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r1.applicationResponse()) == null ? null : tmp_3_0.accountType);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_4_0 = ctx_r1.applicationResponse()) == null ? null : tmp_4_0.phoneNumber);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_5_0 = ctx_r1.applicationResponse()) == null ? null : tmp_5_0.emailId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_6_0 = ctx_r1.applicationResponse()) == null ? null : tmp_6_0.submittedOn);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u2713 ", (tmp_7_0 = ctx_r1.applicationResponse()) == null ? null : tmp_7_0.status);
  }
}
function RegisterMultiComponent_Conditional_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function RegisterMultiComponent_Conditional_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.successMessage());
  }
}
function RegisterMultiComponent_Conditional_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.otp);
  }
}
function RegisterMultiComponent_Conditional_2_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 40);
  }
}
function RegisterMultiComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275listener("click", function RegisterMultiComponent_Conditional_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeOtpModal());
    });
    \u0275\u0275elementStart(1, "div", 30);
    \u0275\u0275listener("click", function RegisterMultiComponent_Conditional_2_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 31);
    \u0275\u0275text(3, "\u{1F510}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "OTP Verification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 26);
    \u0275\u0275text(7, " We've sent a 6-digit OTP to");
    \u0275\u0275element(8, "br");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "br");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, RegisterMultiComponent_Conditional_2_Conditional_12_Template, 2, 1, "div", 32);
    \u0275\u0275conditionalCreate(13, RegisterMultiComponent_Conditional_2_Conditional_13_Template, 2, 1, "div", 33);
    \u0275\u0275elementStart(14, "div", 34)(15, "label", 35);
    \u0275\u0275text(16, "Enter OTP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_2_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.otp, $event) || (ctx_r1.otp = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, RegisterMultiComponent_Conditional_2_Conditional_18_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 28)(20, "button", 38);
    \u0275\u0275listener("click", function RegisterMultiComponent_Conditional_2_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeOtpModal());
    });
    \u0275\u0275text(21, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 39);
    \u0275\u0275listener("click", function RegisterMultiComponent_Conditional_2_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onVerifyOtp());
    });
    \u0275\u0275conditionalCreate(23, RegisterMultiComponent_Conditional_2_Conditional_23_Template, 1, 0, "span", 40);
    \u0275\u0275text(24, " Verify OTP ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 41);
    \u0275\u0275text(26, " OTP valid for 10 minutes \xB7 ");
    \u0275\u0275elementStart(27, "button", 42);
    \u0275\u0275listener("click", function RegisterMultiComponent_Conditional_2_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onResendOtp());
    });
    \u0275\u0275text(28, "Resend OTP");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.customerDetails.emailId);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.error() ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.successMessage() ? 13 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx_r1.errors.otp);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.otp);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errors.otp ? 18 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loading() ? 23 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.loading());
  }
}
function RegisterMultiComponent_Conditional_3_For_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2713 ");
  }
}
function RegisterMultiComponent_Conditional_3_For_22_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const s_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", s_r7.n, " ");
  }
}
function RegisterMultiComponent_Conditional_3_For_22_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 66);
  }
  if (rf & 2) {
    const s_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.isStepDone(s_r7.n));
  }
}
function RegisterMultiComponent_Conditional_3_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275listener("click", function RegisterMultiComponent_Conditional_3_For_22_Template_div_click_0_listener() {
      const s_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToStep(s_r7.n));
    });
    \u0275\u0275elementStart(1, "span", 63);
    \u0275\u0275conditionalCreate(2, RegisterMultiComponent_Conditional_3_For_22_Conditional_2_Template, 1, 0)(3, RegisterMultiComponent_Conditional_3_For_22_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 64);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, RegisterMultiComponent_Conditional_3_For_22_Conditional_6_Template, 1, 2, "div", 65);
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.isStepActive(s_r7.n))("completed", ctx_r1.isStepDone(s_r7.n))("clickable", ctx_r1.isStepDone(s_r7.n));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isStepDone(s_r7.n) ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r7.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r7.n < ctx_r1.totalSteps ? 6 : -1);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_24_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r9 = ctx.$implicit;
    \u0275\u0275property("value", opt_r9.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r9.label);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_24_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.accountType);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_24_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.fullName);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_24_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.fatherName);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_24_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.motherName);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_24_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.dateOfBirth);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_24_For_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r10 = ctx.$implicit;
    \u0275\u0275property("value", g_r10.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(g_r10.label);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_24_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.gender);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_24_For_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ms_r11 = ctx.$implicit;
    \u0275\u0275property("value", ms_r11.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ms_r11.label);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_24_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.occupation);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_24_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.phoneNumber);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_24_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.emailId);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_24_Conditional_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.aadhaarNumber);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_24_Conditional_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.panNumber);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_24_Conditional_123_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 40);
    \u0275\u0275text(1, " Processing... ");
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_24_Conditional_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Continue \u2192 ");
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 67, 0);
    \u0275\u0275listener("ngSubmit", function RegisterMultiComponent_Conditional_3_Conditional_24_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goNext());
    });
    \u0275\u0275elementStart(2, "div", 68)(3, "h3");
    \u0275\u0275text(4, "Account Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 34)(6, "label", 69);
    \u0275\u0275text(7, "Account Type ");
    \u0275\u0275elementStart(8, "span", 70);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "select", 71);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_24_Template_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.customerDetails.accountType, $event) || (ctx_r1.customerDetails.accountType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(11, "option", 72);
    \u0275\u0275text(12, "Select account type...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(13, RegisterMultiComponent_Conditional_3_Conditional_24_For_14_Template, 2, 2, "option", 73, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, RegisterMultiComponent_Conditional_3_Conditional_24_Conditional_15_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 68)(17, "h3");
    \u0275\u0275text(18, "Personal Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 34)(20, "label", 74);
    \u0275\u0275text(21, "Full Name (as per Aadhaar) ");
    \u0275\u0275elementStart(22, "span", 70);
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "input", 75);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_24_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.customerDetails.fullName, $event) || (ctx_r1.customerDetails.fullName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(25, RegisterMultiComponent_Conditional_3_Conditional_24_Conditional_25_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 76)(27, "div", 34)(28, "label", 77);
    \u0275\u0275text(29, "Father's Name ");
    \u0275\u0275elementStart(30, "span", 70);
    \u0275\u0275text(31, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "input", 78);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_24_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.customerDetails.fatherName, $event) || (ctx_r1.customerDetails.fatherName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(33, RegisterMultiComponent_Conditional_3_Conditional_24_Conditional_33_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 34)(35, "label", 79);
    \u0275\u0275text(36, "Mother's Name ");
    \u0275\u0275elementStart(37, "span", 70);
    \u0275\u0275text(38, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_24_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.customerDetails.motherName, $event) || (ctx_r1.customerDetails.motherName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(40, RegisterMultiComponent_Conditional_3_Conditional_24_Conditional_40_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 76)(42, "div", 34)(43, "label", 81);
    \u0275\u0275text(44, "Date of Birth ");
    \u0275\u0275elementStart(45, "span", 70);
    \u0275\u0275text(46, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_24_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.customerDetails.dateOfBirth, $event) || (ctx_r1.customerDetails.dateOfBirth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(48, RegisterMultiComponent_Conditional_3_Conditional_24_Conditional_48_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 34)(50, "label", 83);
    \u0275\u0275text(51, "Gender ");
    \u0275\u0275elementStart(52, "span", 70);
    \u0275\u0275text(53, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "select", 84);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_24_Template_select_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.customerDetails.gender, $event) || (ctx_r1.customerDetails.gender = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(55, "option", 72);
    \u0275\u0275text(56, "Select...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(57, RegisterMultiComponent_Conditional_3_Conditional_24_For_58_Template, 2, 2, "option", 73, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(59, RegisterMultiComponent_Conditional_3_Conditional_24_Conditional_59_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 76)(61, "div", 34)(62, "label", 85);
    \u0275\u0275text(63, "Marital Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "select", 86);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_24_Template_select_ngModelChange_64_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.customerDetails.maritalStatus, $event) || (ctx_r1.customerDetails.maritalStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(65, "option", 72);
    \u0275\u0275text(66, "Select...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(67, RegisterMultiComponent_Conditional_3_Conditional_24_For_68_Template, 2, 2, "option", 73, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 34)(70, "label", 87);
    \u0275\u0275text(71, "Nationality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_24_Template_input_ngModelChange_72_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.customerDetails.nationality, $event) || (ctx_r1.customerDetails.nationality = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(73, "div", 76)(74, "div", 34)(75, "label", 89);
    \u0275\u0275text(76, "Occupation ");
    \u0275\u0275elementStart(77, "span", 70);
    \u0275\u0275text(78, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "input", 90);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_24_Template_input_ngModelChange_79_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.customerDetails.occupation, $event) || (ctx_r1.customerDetails.occupation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(80, RegisterMultiComponent_Conditional_3_Conditional_24_Conditional_80_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div", 34)(82, "label", 91);
    \u0275\u0275text(83, "Annual Income (\u20B9)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "input", 92);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_24_Template_input_ngModelChange_84_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.customerDetails.annualIncome, $event) || (ctx_r1.customerDetails.annualIncome = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(85, "div", 68)(86, "h3");
    \u0275\u0275text(87, "Contact Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "div", 76)(89, "div", 34)(90, "label", 93);
    \u0275\u0275text(91, "Mobile Number ");
    \u0275\u0275elementStart(92, "span", 70);
    \u0275\u0275text(93, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_24_Template_input_ngModelChange_94_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.customerDetails.phoneNumber, $event) || (ctx_r1.customerDetails.phoneNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(95, RegisterMultiComponent_Conditional_3_Conditional_24_Conditional_95_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 34)(97, "label", 95);
    \u0275\u0275text(98, "Email Address ");
    \u0275\u0275elementStart(99, "span", 70);
    \u0275\u0275text(100, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "input", 96);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_24_Template_input_ngModelChange_101_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.customerDetails.emailId, $event) || (ctx_r1.customerDetails.emailId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(102, RegisterMultiComponent_Conditional_3_Conditional_24_Conditional_102_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(103, "div", 68)(104, "h3");
    \u0275\u0275text(105, "Identity Numbers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "div", 76)(107, "div", 34)(108, "label", 97);
    \u0275\u0275text(109, "Aadhaar Number ");
    \u0275\u0275elementStart(110, "span", 70);
    \u0275\u0275text(111, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(112, "input", 98);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_24_Template_input_ngModelChange_112_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.customerDetails.aadhaarNumber, $event) || (ctx_r1.customerDetails.aadhaarNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(113, RegisterMultiComponent_Conditional_3_Conditional_24_Conditional_113_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "div", 34)(115, "label", 99);
    \u0275\u0275text(116, "PAN Number ");
    \u0275\u0275elementStart(117, "span", 70);
    \u0275\u0275text(118, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(119, "input", 100);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_24_Template_input_ngModelChange_119_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.customerDetails.panNumber, $event) || (ctx_r1.customerDetails.panNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(120, RegisterMultiComponent_Conditional_3_Conditional_24_Conditional_120_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(121, "div", 101)(122, "button", 102);
    \u0275\u0275conditionalCreate(123, RegisterMultiComponent_Conditional_3_Conditional_24_Conditional_123_Template, 2, 0)(124, RegisterMultiComponent_Conditional_3_Conditional_24_Conditional_124_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("error", ctx_r1.errors.accountType);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.customerDetails.accountType);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.accountTypes);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.errors.accountType ? 15 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("error", ctx_r1.errors.fullName);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.customerDetails.fullName);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errors.fullName ? 25 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("error", ctx_r1.errors.fatherName);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.customerDetails.fatherName);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errors.fatherName ? 33 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("error", ctx_r1.errors.motherName);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.customerDetails.motherName);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errors.motherName ? 40 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("error", ctx_r1.errors.dateOfBirth);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.customerDetails.dateOfBirth);
    \u0275\u0275property("max", ctx_r1.maxDob);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errors.dateOfBirth ? 48 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("error", ctx_r1.errors.gender);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.customerDetails.gender);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.genders);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.errors.gender ? 59 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.customerDetails.maritalStatus);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.maritalStatuses);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.customerDetails.nationality);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("error", ctx_r1.errors.occupation);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.customerDetails.occupation);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errors.occupation ? 80 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.customerDetails.annualIncome);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("error", ctx_r1.errors.phoneNumber);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.customerDetails.phoneNumber);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errors.phoneNumber ? 95 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("error", ctx_r1.errors.emailId);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.customerDetails.emailId);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errors.emailId ? 102 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("error", ctx_r1.errors.aadhaarNumber);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.customerDetails.aadhaarNumber);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errors.aadhaarNumber ? 113 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("error", ctx_r1.errors.panNumber);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.customerDetails.panNumber);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errors.panNumber ? 120 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loading() ? 123 : 124);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_25_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.currentAddressLine);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_25_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.currentCity);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_25_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const st_r13 = ctx.$implicit;
    \u0275\u0275property("value", st_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(st_r13);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_25_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.currentState);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_25_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.currentPincode);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_25_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.permanentAddressLine);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_25_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.permanentCity);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_25_For_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const st_r14 = ctx.$implicit;
    \u0275\u0275property("value", st_r14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(st_r14);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_25_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.permanentState);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_25_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.permanentPincode);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 103);
    \u0275\u0275listener("ngSubmit", function RegisterMultiComponent_Conditional_3_Conditional_25_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goNext());
    });
    \u0275\u0275elementStart(1, "div", 68)(2, "h3");
    \u0275\u0275text(3, "Current Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 34)(5, "label", 104);
    \u0275\u0275text(6, "Address Line ");
    \u0275\u0275elementStart(7, "span", 70);
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "input", 105);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_25_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.addressDetails.currentAddressLine, $event) || (ctx_r1.addressDetails.currentAddressLine = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, RegisterMultiComponent_Conditional_3_Conditional_25_Conditional_10_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 106)(12, "div", 34)(13, "label", 107);
    \u0275\u0275text(14, "City ");
    \u0275\u0275elementStart(15, "span", 70);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "input", 108);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_25_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.addressDetails.currentCity, $event) || (ctx_r1.addressDetails.currentCity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, RegisterMultiComponent_Conditional_3_Conditional_25_Conditional_18_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 34)(20, "label", 109);
    \u0275\u0275text(21, "State ");
    \u0275\u0275elementStart(22, "span", 70);
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "select", 110);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_25_Template_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.addressDetails.currentState, $event) || (ctx_r1.addressDetails.currentState = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(25, "option", 72);
    \u0275\u0275text(26, "Select state...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(27, RegisterMultiComponent_Conditional_3_Conditional_25_For_28_Template, 2, 2, "option", 73, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(29, RegisterMultiComponent_Conditional_3_Conditional_25_Conditional_29_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 34)(31, "label", 111);
    \u0275\u0275text(32, "Pincode ");
    \u0275\u0275elementStart(33, "span", 70);
    \u0275\u0275text(34, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "input", 112);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_25_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.addressDetails.currentPincode, $event) || (ctx_r1.addressDetails.currentPincode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(36, RegisterMultiComponent_Conditional_3_Conditional_25_Conditional_36_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 68)(38, "h3");
    \u0275\u0275text(39, "Permanent Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 113)(41, "label")(42, "input", 114);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_25_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.addressDetails.sameAsCurrent, $event) || (ctx_r1.addressDetails.sameAsCurrent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function RegisterMultiComponent_Conditional_3_Conditional_25_Template_input_change_42_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSameAsCurrentChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, " Same as current address ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 34)(45, "label", 115);
    \u0275\u0275text(46, "Address Line ");
    \u0275\u0275elementStart(47, "span", 70);
    \u0275\u0275text(48, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "input", 116);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_25_Template_input_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.addressDetails.permanentAddressLine, $event) || (ctx_r1.addressDetails.permanentAddressLine = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(50, RegisterMultiComponent_Conditional_3_Conditional_25_Conditional_50_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 106)(52, "div", 34)(53, "label", 117);
    \u0275\u0275text(54, "City ");
    \u0275\u0275elementStart(55, "span", 70);
    \u0275\u0275text(56, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "input", 118);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_25_Template_input_ngModelChange_57_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.addressDetails.permanentCity, $event) || (ctx_r1.addressDetails.permanentCity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(58, RegisterMultiComponent_Conditional_3_Conditional_25_Conditional_58_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 34)(60, "label", 119);
    \u0275\u0275text(61, "State ");
    \u0275\u0275elementStart(62, "span", 70);
    \u0275\u0275text(63, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "select", 120);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_25_Template_select_ngModelChange_64_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.addressDetails.permanentState, $event) || (ctx_r1.addressDetails.permanentState = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(65, "option", 72);
    \u0275\u0275text(66, "Select state...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(67, RegisterMultiComponent_Conditional_3_Conditional_25_For_68_Template, 2, 2, "option", 73, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(69, RegisterMultiComponent_Conditional_3_Conditional_25_Conditional_69_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 34)(71, "label", 121);
    \u0275\u0275text(72, "Pincode ");
    \u0275\u0275elementStart(73, "span", 70);
    \u0275\u0275text(74, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "input", 122);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_25_Template_input_ngModelChange_75_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.addressDetails.permanentPincode, $event) || (ctx_r1.addressDetails.permanentPincode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(76, RegisterMultiComponent_Conditional_3_Conditional_25_Conditional_76_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(77, "div", 123)(78, "button", 124);
    \u0275\u0275listener("click", function RegisterMultiComponent_Conditional_3_Conditional_25_Template_button_click_78_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(79, "\u2190 Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "button", 125);
    \u0275\u0275text(81, "Continue \u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("error", ctx_r1.errors.currentAddressLine);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.addressDetails.currentAddressLine);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errors.currentAddressLine ? 10 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("error", ctx_r1.errors.currentCity);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.addressDetails.currentCity);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errors.currentCity ? 18 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("error", ctx_r1.errors.currentState);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.addressDetails.currentState);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.indianStates);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.errors.currentState ? 29 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("error", ctx_r1.errors.currentPincode);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.addressDetails.currentPincode);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errors.currentPincode ? 36 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.addressDetails.sameAsCurrent);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("error", ctx_r1.errors.permanentAddressLine);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.addressDetails.permanentAddressLine);
    \u0275\u0275property("disabled", ctx_r1.addressDetails.sameAsCurrent);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errors.permanentAddressLine ? 50 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("error", ctx_r1.errors.permanentCity);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.addressDetails.permanentCity);
    \u0275\u0275property("disabled", ctx_r1.addressDetails.sameAsCurrent);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errors.permanentCity ? 58 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("error", ctx_r1.errors.permanentState);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.addressDetails.permanentState);
    \u0275\u0275property("disabled", ctx_r1.addressDetails.sameAsCurrent);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.indianStates);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.errors.permanentState ? 69 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("error", ctx_r1.errors.permanentPincode);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.addressDetails.permanentPincode);
    \u0275\u0275property("disabled", ctx_r1.addressDetails.sameAsCurrent);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errors.permanentPincode ? 76 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_26_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.nomineeName);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_26_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r16 = ctx.$implicit;
    \u0275\u0275property("value", r_r16.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r16.label);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_26_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.nomineeRelation);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_26_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.nomineeAge);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_26_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.nomineeMobileNumber);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_26_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.nomineeAddress);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 103);
    \u0275\u0275listener("ngSubmit", function RegisterMultiComponent_Conditional_3_Conditional_26_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goNext());
    });
    \u0275\u0275elementStart(1, "div", 68)(2, "h3");
    \u0275\u0275text(3, "Nominee / Beneficiary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 76)(5, "div", 34)(6, "label", 126);
    \u0275\u0275text(7, "Nominee Full Name ");
    \u0275\u0275elementStart(8, "span", 70);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "input", 127);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_26_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.nomineeDetails.nomineeName, $event) || (ctx_r1.nomineeDetails.nomineeName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, RegisterMultiComponent_Conditional_3_Conditional_26_Conditional_11_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 34)(13, "label", 128);
    \u0275\u0275text(14, "Relationship ");
    \u0275\u0275elementStart(15, "span", 70);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "select", 129);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_26_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.nomineeDetails.nomineeRelation, $event) || (ctx_r1.nomineeDetails.nomineeRelation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(18, "option", 72);
    \u0275\u0275text(19, "Select relation...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(20, RegisterMultiComponent_Conditional_3_Conditional_26_For_21_Template, 2, 2, "option", 73, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(22, RegisterMultiComponent_Conditional_3_Conditional_26_Conditional_22_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 76)(24, "div", 34)(25, "label", 130);
    \u0275\u0275text(26, "Age ");
    \u0275\u0275elementStart(27, "span", 70);
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "input", 131);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_26_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.nomineeDetails.nomineeAge, $event) || (ctx_r1.nomineeDetails.nomineeAge = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(30, RegisterMultiComponent_Conditional_3_Conditional_26_Conditional_30_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 34)(32, "label", 132);
    \u0275\u0275text(33, "Mobile Number ");
    \u0275\u0275elementStart(34, "span", 70);
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "input", 133);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_26_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.nomineeDetails.nomineeMobileNumber, $event) || (ctx_r1.nomineeDetails.nomineeMobileNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(37, RegisterMultiComponent_Conditional_3_Conditional_26_Conditional_37_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 34)(39, "label", 134);
    \u0275\u0275text(40, "Nominee Address ");
    \u0275\u0275elementStart(41, "span", 70);
    \u0275\u0275text(42, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "textarea", 135);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_26_Template_textarea_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.nomineeDetails.nomineeAddress, $event) || (ctx_r1.nomineeDetails.nomineeAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(44, RegisterMultiComponent_Conditional_3_Conditional_26_Conditional_44_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 123)(46, "button", 124);
    \u0275\u0275listener("click", function RegisterMultiComponent_Conditional_3_Conditional_26_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(47, "\u2190 Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 125);
    \u0275\u0275text(49, "Continue \u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("error", ctx_r1.errors.nomineeName);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nomineeDetails.nomineeName);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errors.nomineeName ? 11 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("error", ctx_r1.errors.nomineeRelation);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nomineeDetails.nomineeRelation);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.nomineeRelations);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.errors.nomineeRelation ? 22 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("error", ctx_r1.errors.nomineeAge);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nomineeDetails.nomineeAge);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errors.nomineeAge ? 30 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("error", ctx_r1.errors.nomineeMobileNumber);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nomineeDetails.nomineeMobileNumber);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errors.nomineeMobileNumber ? 37 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("error", ctx_r1.errors.nomineeAddress);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nomineeDetails.nomineeAddress);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errors.nomineeAddress ? 44 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 138)(1, "span", 147);
    \u0275\u0275text(2, "\u{1F4CE}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 148);
    \u0275\u0275listener("click", function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onRemoveFile("aadhaarCardFile"));
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.aadhaarCardFileName());
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 139)(1, "span", 149);
    \u0275\u0275text(2, "\u{1F4E4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 150);
    \u0275\u0275text(4, "Click to upload Aadhaar Card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 151);
    \u0275\u0275text(6, "PDF, JPG, PNG \xB7 max 5MB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 152);
    \u0275\u0275listener("change", function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_13_Template_input_change_7_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onFileSelect($event, "aadhaarCardFile"));
    });
    \u0275\u0275elementEnd()();
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.aadhaarCardFile);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 138)(1, "span", 147);
    \u0275\u0275text(2, "\u{1F4CE}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 148);
    \u0275\u0275listener("click", function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_23_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onRemoveFile("panCardFile"));
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.panCardFileName());
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 140)(1, "span", 149);
    \u0275\u0275text(2, "\u{1F4E4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 150);
    \u0275\u0275text(4, "Click to upload PAN Card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 151);
    \u0275\u0275text(6, "PDF, JPG, PNG \xB7 max 5MB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 153);
    \u0275\u0275listener("change", function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_24_Template_input_change_7_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onFileSelect($event, "panCardFile"));
    });
    \u0275\u0275elementEnd()();
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.panCardFile);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 138)(1, "span", 147);
    \u0275\u0275text(2, "\u{1F4CE}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 148);
    \u0275\u0275listener("click", function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_32_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onRemoveFile("passportFile"));
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.passportFileName());
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 142)(1, "span", 149);
    \u0275\u0275text(2, "\u{1F4E4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 150);
    \u0275\u0275text(4, "Click to upload Passport");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 151);
    \u0275\u0275text(6, "PDF, JPG, PNG \xB7 max 5MB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 154);
    \u0275\u0275listener("change", function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_33_Template_input_change_7_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onFileSelect($event, "passportFile"));
    });
    \u0275\u0275elementEnd()();
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 138)(1, "span", 147);
    \u0275\u0275text(2, "\u{1F4CE}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 148);
    \u0275\u0275listener("click", function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_40_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onRemoveFile("voterIdFile"));
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.voterIdFileName());
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 143)(1, "span", 149);
    \u0275\u0275text(2, "\u{1F4E4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 150);
    \u0275\u0275text(4, "Click to upload Voter ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 151);
    \u0275\u0275text(6, "PDF, JPG, PNG \xB7 max 5MB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 155);
    \u0275\u0275listener("change", function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_41_Template_input_change_7_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onFileSelect($event, "voterIdFile"));
    });
    \u0275\u0275elementEnd()();
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 138)(1, "span", 147);
    \u0275\u0275text(2, "\u{1F5BC}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 148);
    \u0275\u0275listener("click", function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_53_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onRemoveFile("profilePhoto"));
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.profilePhotoName());
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 144)(1, "span", 149);
    \u0275\u0275text(2, "\u{1F933}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 150);
    \u0275\u0275text(4, "Upload Photo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 151);
    \u0275\u0275text(6, "JPG, PNG \xB7 max 2MB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 156);
    \u0275\u0275listener("change", function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_54_Template_input_change_7_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onFileSelect($event, "profilePhoto", true));
    });
    \u0275\u0275elementEnd()();
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.profilePhoto);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 138)(1, "span", 147);
    \u0275\u0275text(2, "\u270D\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 148);
    \u0275\u0275listener("click", function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_64_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onRemoveFile("signatureImage"));
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.signatureImageName());
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 145)(1, "span", 149);
    \u0275\u0275text(2, "\u270D\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 150);
    \u0275\u0275text(4, "Upload Signature");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 151);
    \u0275\u0275text(6, "JPG, PNG \xB7 max 2MB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 157);
    \u0275\u0275listener("change", function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_65_Template_input_change_7_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onFileSelect($event, "signatureImage", true));
    });
    \u0275\u0275elementEnd()();
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.signatureImage);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 138)(1, "span", 147);
    \u0275\u0275text(2, "\u{1F4CE}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 148);
    \u0275\u0275listener("click", function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_78_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onRemoveFile("addressProofDocument"));
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.addressProofDocumentName());
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 146)(1, "span", 149);
    \u0275\u0275text(2, "\u{1F3E0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 150);
    \u0275\u0275text(4, "Upload Address Proof");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 151);
    \u0275\u0275text(6, "Utility bill, bank statement, etc.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 158);
    \u0275\u0275listener("change", function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_79_Template_input_change_7_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onFileSelect($event, "addressProofDocument"));
    });
    \u0275\u0275elementEnd()();
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.addressProofDocument);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 103);
    \u0275\u0275listener("ngSubmit", function RegisterMultiComponent_Conditional_3_Conditional_27_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goNext());
    });
    \u0275\u0275elementStart(1, "div", 68)(2, "h3");
    \u0275\u0275text(3, "Identity Documents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 34)(5, "label");
    \u0275\u0275text(6, "Aadhaar Card ");
    \u0275\u0275elementStart(7, "span", 70);
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 136);
    \u0275\u0275text(10, "(PDF/JPG/PNG, max 5MB)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 137);
    \u0275\u0275conditionalCreate(12, RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_12_Template, 7, 1, "div", 138)(13, RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_13_Template, 8, 0, "label", 139);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_14_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 34)(16, "label");
    \u0275\u0275text(17, "PAN Card ");
    \u0275\u0275elementStart(18, "span", 70);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 136);
    \u0275\u0275text(21, "(PDF/JPG/PNG, max 5MB)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 137);
    \u0275\u0275conditionalCreate(23, RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_23_Template, 7, 1, "div", 138)(24, RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_24_Template, 8, 0, "label", 140);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(25, RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_25_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 34)(27, "label");
    \u0275\u0275text(28, "Passport ");
    \u0275\u0275elementStart(29, "span", 141);
    \u0275\u0275text(30, "(Optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 137);
    \u0275\u0275conditionalCreate(32, RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_32_Template, 7, 1, "div", 138)(33, RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_33_Template, 8, 0, "label", 142);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 34)(35, "label");
    \u0275\u0275text(36, "Voter ID ");
    \u0275\u0275elementStart(37, "span", 141);
    \u0275\u0275text(38, "(Optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 137);
    \u0275\u0275conditionalCreate(40, RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_40_Template, 7, 1, "div", 138)(41, RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_41_Template, 8, 0, "label", 143);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 68)(43, "h3");
    \u0275\u0275text(44, "Photo & Signature");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 34)(46, "label");
    \u0275\u0275text(47, "Profile Photo ");
    \u0275\u0275elementStart(48, "span", 70);
    \u0275\u0275text(49, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span", 136);
    \u0275\u0275text(51, "(JPG/PNG, max 2MB)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 137);
    \u0275\u0275conditionalCreate(53, RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_53_Template, 7, 1, "div", 138)(54, RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_54_Template, 8, 0, "label", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(55, RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_55_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 34)(57, "label");
    \u0275\u0275text(58, "Signature Image ");
    \u0275\u0275elementStart(59, "span", 70);
    \u0275\u0275text(60, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 136);
    \u0275\u0275text(62, "(JPG/PNG, max 2MB)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 137);
    \u0275\u0275conditionalCreate(64, RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_64_Template, 7, 1, "div", 138)(65, RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_65_Template, 8, 0, "label", 145);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(66, RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_66_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 68)(68, "h3");
    \u0275\u0275text(69, "Address Proof");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 34)(71, "label");
    \u0275\u0275text(72, "Address Proof Document ");
    \u0275\u0275elementStart(73, "span", 70);
    \u0275\u0275text(74, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "span", 136);
    \u0275\u0275text(76, "(PDF/JPG/PNG, max 5MB)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 137);
    \u0275\u0275conditionalCreate(78, RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_78_Template, 7, 1, "div", 138)(79, RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_79_Template, 8, 0, "label", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(80, RegisterMultiComponent_Conditional_3_Conditional_27_Conditional_80_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 123)(82, "button", 124);
    \u0275\u0275listener("click", function RegisterMultiComponent_Conditional_3_Conditional_27_Template_button_click_82_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(83, "\u2190 Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "button", 125);
    \u0275\u0275text(85, "Continue \u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275conditional(ctx_r1.aadhaarCardFileName() ? 12 : 13);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.errors.aadhaarCardFile ? 14 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.panCardFileName() ? 23 : 24);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.errors.panCardFile ? 25 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.passportFileName() ? 32 : 33);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.voterIdFileName() ? 40 : 41);
    \u0275\u0275advance(13);
    \u0275\u0275conditional(ctx_r1.profilePhotoName() ? 53 : 54);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.errors.profilePhoto ? 55 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.signatureImageName() ? 64 : 65);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.errors.signatureImage ? 66 : -1);
    \u0275\u0275advance(12);
    \u0275\u0275conditional(ctx_r1.addressProofDocumentName() ? 78 : 79);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.errors.addressProofDocument ? 80 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_28_Conditional_176_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.captcha);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_28_Conditional_182_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errors.confirmCheck);
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_28_Conditional_187_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 40);
    \u0275\u0275text(1, " Processing... ");
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_28_Conditional_188_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Submit Application ");
  }
}
function RegisterMultiComponent_Conditional_3_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 103);
    \u0275\u0275listener("ngSubmit", function RegisterMultiComponent_Conditional_3_Conditional_28_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitApplication());
    });
    \u0275\u0275elementStart(1, "div", 159)(2, "h3");
    \u0275\u0275text(3, "Personal Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 160)(5, "div", 161)(6, "span");
    \u0275\u0275text(7, "Account Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 161)(11, "span");
    \u0275\u0275text(12, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 161)(16, "span");
    \u0275\u0275text(17, "Father's Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 161)(21, "span");
    \u0275\u0275text(22, "Mother's Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "strong");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 161)(26, "span");
    \u0275\u0275text(27, "Date of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "strong");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 161)(31, "span");
    \u0275\u0275text(32, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "strong");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 161)(36, "span");
    \u0275\u0275text(37, "Marital Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "strong");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 161)(41, "span");
    \u0275\u0275text(42, "Nationality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "strong");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 161)(46, "span");
    \u0275\u0275text(47, "Occupation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "strong");
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 161)(51, "span");
    \u0275\u0275text(52, "Annual Income");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "strong");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 161)(56, "span");
    \u0275\u0275text(57, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "strong");
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 161)(61, "span");
    \u0275\u0275text(62, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "strong");
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 161)(66, "span");
    \u0275\u0275text(67, "Aadhaar No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "strong");
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 161)(71, "span");
    \u0275\u0275text(72, "PAN No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "strong");
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(75, "div", 159)(76, "h3");
    \u0275\u0275text(77, "Address Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div", 162)(79, "div", 163)(80, "div", 164);
    \u0275\u0275text(81, "Current Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "div", 165);
    \u0275\u0275text(83);
    \u0275\u0275element(84, "br");
    \u0275\u0275text(85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 163)(87, "div", 164);
    \u0275\u0275text(88, "Permanent Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "div", 165);
    \u0275\u0275text(90);
    \u0275\u0275element(91, "br");
    \u0275\u0275text(92);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(93, "div", 159)(94, "h3");
    \u0275\u0275text(95, "Nominee Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 160)(97, "div", 161)(98, "span");
    \u0275\u0275text(99, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "strong");
    \u0275\u0275text(101);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "div", 161)(103, "span");
    \u0275\u0275text(104, "Relation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "strong");
    \u0275\u0275text(106);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "div", 161)(108, "span");
    \u0275\u0275text(109, "Age");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "strong");
    \u0275\u0275text(111);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(112, "div", 161)(113, "span");
    \u0275\u0275text(114, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "strong");
    \u0275\u0275text(116);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(117, "div", 166)(118, "span");
    \u0275\u0275text(119, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "strong");
    \u0275\u0275text(121);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(122, "div", 159)(123, "h3");
    \u0275\u0275text(124, "Uploaded Documents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "div", 160)(126, "div", 161)(127, "span");
    \u0275\u0275text(128, "Aadhaar Card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "strong");
    \u0275\u0275text(130);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(131, "div", 161)(132, "span");
    \u0275\u0275text(133, "PAN Card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "strong");
    \u0275\u0275text(135);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(136, "div", 161)(137, "span");
    \u0275\u0275text(138, "Passport");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "strong");
    \u0275\u0275text(140);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(141, "div", 161)(142, "span");
    \u0275\u0275text(143, "Voter ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "strong");
    \u0275\u0275text(145);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(146, "div", 161)(147, "span");
    \u0275\u0275text(148, "Profile Photo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "strong");
    \u0275\u0275text(150);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(151, "div", 161)(152, "span");
    \u0275\u0275text(153, "Signature");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "strong");
    \u0275\u0275text(155);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(156, "div", 161)(157, "span");
    \u0275\u0275text(158, "Address Proof");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(159, "strong");
    \u0275\u0275text(160);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(161, "div", 68)(162, "h3");
    \u0275\u0275text(163, "Captcha Verification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "div", 167)(165, "div", 168)(166, "span", 169);
    \u0275\u0275text(167);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(168, "button", 170);
    \u0275\u0275listener("click", function RegisterMultiComponent_Conditional_3_Conditional_28_Template_button_click_168_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.refreshCaptcha());
    });
    \u0275\u0275text(169, "\u21BA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(170, "div", 171)(171, "label", 172);
    \u0275\u0275text(172, "Type the characters above ");
    \u0275\u0275elementStart(173, "span", 70);
    \u0275\u0275text(174, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(175, "input", 173);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_28_Template_input_ngModelChange_175_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.captchaUserInput, $event) || (ctx_r1.captchaUserInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(176, RegisterMultiComponent_Conditional_3_Conditional_28_Conditional_176_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(177, "div", 174)(178, "label", 175)(179, "input", 176);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterMultiComponent_Conditional_3_Conditional_28_Template_input_ngModelChange_179_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.confirmCheck, $event) || (ctx_r1.confirmCheck = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(180, "span");
    \u0275\u0275text(181, "I confirm that all the information provided is accurate and complete. I understand that providing false information may result in rejection of my application.");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(182, RegisterMultiComponent_Conditional_3_Conditional_28_Conditional_182_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(183, "div", 123)(184, "button", 124);
    \u0275\u0275listener("click", function RegisterMultiComponent_Conditional_3_Conditional_28_Template_button_click_184_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(185, "\u2190 Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(186, "button", 125);
    \u0275\u0275conditionalCreate(187, RegisterMultiComponent_Conditional_3_Conditional_28_Conditional_187_Template, 2, 0)(188, RegisterMultiComponent_Conditional_3_Conditional_28_Conditional_188_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.customerDetails.accountType || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.customerDetails.fullName || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.customerDetails.fatherName || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.customerDetails.motherName || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.customerDetails.dateOfBirth || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.customerDetails.gender || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.customerDetails.maritalStatus || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.customerDetails.nationality || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.customerDetails.occupation || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.customerDetails.annualIncome ? "\u20B9" + ctx_r1.customerDetails.annualIncome : "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.customerDetails.phoneNumber || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.customerDetails.emailId || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.customerDetails.aadhaarNumber ? "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" + ctx_r1.customerDetails.aadhaarNumber.slice(-4) : "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.customerDetails.panNumber || "\u2014");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r1.addressDetails.currentAddressLine);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx_r1.addressDetails.currentCity, ", ", ctx_r1.addressDetails.currentState, " \u2013 ", ctx_r1.addressDetails.currentPincode, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.addressDetails.permanentAddressLine);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx_r1.addressDetails.permanentCity, ", ", ctx_r1.addressDetails.permanentState, " \u2013 ", ctx_r1.addressDetails.permanentPincode, " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.nomineeDetails.nomineeName || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.nomineeDetails.nomineeRelation || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.nomineeDetails.nomineeAge || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.nomineeDetails.nomineeMobileNumber || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.nomineeDetails.nomineeAddress || "\u2014");
    \u0275\u0275advance(8);
    \u0275\u0275classProp("uploaded", ctx_r1.documents.aadhaarCardFile)("not-uploaded", !ctx_r1.documents.aadhaarCardFile);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.aadhaarCardFileName() || "\u2717 Not uploaded", " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("uploaded", ctx_r1.documents.panCardFile)("not-uploaded", !ctx_r1.documents.panCardFile);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.panCardFileName() || "\u2717 Not uploaded", " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("uploaded", ctx_r1.documents.passportFile)("optional-doc", !ctx_r1.documents.passportFile);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.passportFileName() || "Not provided", " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("uploaded", ctx_r1.documents.voterIdFile)("optional-doc", !ctx_r1.documents.voterIdFile);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.voterIdFileName() || "Not provided", " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("uploaded", ctx_r1.documents.profilePhoto)("not-uploaded", !ctx_r1.documents.profilePhoto);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.profilePhotoName() || "\u2717 Not uploaded", " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("uploaded", ctx_r1.documents.signatureImage)("not-uploaded", !ctx_r1.documents.signatureImage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.signatureImageName() || "\u2717 Not uploaded", " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("uploaded", ctx_r1.documents.addressProofDocument)("not-uploaded", !ctx_r1.documents.addressProofDocument);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.addressProofDocumentName() || "\u2717 Not uploaded", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.captchaCode());
    \u0275\u0275advance(8);
    \u0275\u0275classProp("error", ctx_r1.errors.captcha);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.captchaUserInput);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errors.captcha ? 176 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.errors.confirmCheck);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.confirmCheck);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.errors.confirmCheck ? 182 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loading() ? 187 : 188);
  }
}
function RegisterMultiComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 43)(2, "div", 44)(3, "div", 45)(4, "a", 46)(5, "span", 47);
    \u0275\u0275text(6, "N");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 48);
    \u0275\u0275text(8, "NeoBank");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 49);
    \u0275\u0275listener("click", function RegisterMultiComponent_Conditional_3_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleTheme());
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 50)(12, "h1");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 51);
    \u0275\u0275element(17, "div", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 53);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 54);
    \u0275\u0275repeaterCreate(21, RegisterMultiComponent_Conditional_3_For_22_Template, 7, 9, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, RegisterMultiComponent_Conditional_3_Conditional_23_Template, 2, 1, "div", 32);
    \u0275\u0275conditionalCreate(24, RegisterMultiComponent_Conditional_3_Conditional_24_Template, 125, 50, "form", 55);
    \u0275\u0275conditionalCreate(25, RegisterMultiComponent_Conditional_3_Conditional_25_Template, 82, 39, "form", 56);
    \u0275\u0275conditionalCreate(26, RegisterMultiComponent_Conditional_3_Conditional_26_Template, 50, 22, "form", 56);
    \u0275\u0275conditionalCreate(27, RegisterMultiComponent_Conditional_3_Conditional_27_Template, 86, 14, "form", 56);
    \u0275\u0275conditionalCreate(28, RegisterMultiComponent_Conditional_3_Conditional_28_Template, 189, 74, "form", 56);
    \u0275\u0275elementStart(29, "div", 57)(30, "p");
    \u0275\u0275text(31, "Already have an account? ");
    \u0275\u0275elementStart(32, "a", 58);
    \u0275\u0275text(33, "Sign in");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(34, "div", 18)(35, "div", 19)(36, "h2");
    \u0275\u0275text(37, "Start Your Banking Journey");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p");
    \u0275\u0275text(39, "Experience the future of digital banking with NeoBank");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 21)(41, "div", 22)(42, "span", 23);
    \u0275\u0275text(43, "\u{1F4B3}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span");
    \u0275\u0275text(45, "Multi-Account Support");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 22)(47, "span", 23);
    \u0275\u0275text(48, "\u26A1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50, "Instant Transfers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 22)(52, "span", 23);
    \u0275\u0275text(53, "\u{1F4CA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span");
    \u0275\u0275text(55, "Smart Analytics");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 22)(57, "span", 23);
    \u0275\u0275text(58, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span");
    \u0275\u0275text(60, "Bank-Grade Security");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 59)(62, "div", 60);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 61);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isDark() ? "\u2600\uFE0F" : "\u{1F319}", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getStepTitle());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getStepSubtitle());
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.progressPercent, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Step ", ctx_r1.step(), " of ", ctx_r1.totalSteps);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.stepDefs);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.error() ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.step() === 1 ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.step() === 2 ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.step() === 3 ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.step() === 4 ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.step() === 5 ? 28 : -1);
    \u0275\u0275advance(35);
    \u0275\u0275textInterpolate2("", ctx_r1.step(), "/", ctx_r1.totalSteps);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getStepTitle());
  }
}
var RegisterMultiComponent = class _RegisterMultiComponent {
  constructor(applicationService, router, route, popup, themeService) {
    this.applicationService = applicationService;
    this.router = router;
    this.route = route;
    this.popup = popup;
    this.themeService = themeService;
    this.step = signal(1, ...ngDevMode ? [{ debugName: "step" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalSteps = 5;
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.error = signal("", ...ngDevMode ? [{ debugName: "error" }] : (
      /* istanbul ignore next */
      []
    ));
    this.successMessage = signal("", ...ngDevMode ? [{ debugName: "successMessage" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showPassword = signal(false, ...ngDevMode ? [{ debugName: "showPassword" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showConfirmPassword = signal(false, ...ngDevMode ? [{ debugName: "showConfirmPassword" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showOtpModal = signal(false, ...ngDevMode ? [{ debugName: "showOtpModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showSuccessScreen = signal(false, ...ngDevMode ? [{ debugName: "showSuccessScreen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.userId = signal(null, ...ngDevMode ? [{ debugName: "userId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.applicationId = signal("", ...ngDevMode ? [{ debugName: "applicationId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.customerDetails = {
      accountType: "",
      fullName: "",
      fatherName: "",
      motherName: "",
      dateOfBirth: "",
      gender: "",
      maritalStatus: "",
      nationality: "India",
      occupation: "",
      annualIncome: "",
      phoneNumber: "",
      emailId: "",
      aadhaarNumber: "",
      panNumber: ""
    };
    this.password = "";
    this.confirmPassword = "";
    this.addressDetails = {
      currentAddressLine: "",
      currentCity: "",
      currentState: "",
      currentPincode: "",
      permanentAddressLine: "",
      permanentCity: "",
      permanentState: "",
      permanentPincode: "",
      sameAsCurrent: false
    };
    this.nomineeDetails = {
      nomineeName: "",
      nomineeRelation: "",
      nomineeAge: "",
      nomineeMobileNumber: "",
      nomineeAddress: ""
    };
    this.documents = {
      aadhaarCardFile: null,
      panCardFile: null,
      passportFile: null,
      voterIdFile: null,
      profilePhoto: null,
      signatureImage: null,
      addressProofDocument: null
    };
    this.aadhaarCardFileName = signal("", ...ngDevMode ? [{ debugName: "aadhaarCardFileName" }] : (
      /* istanbul ignore next */
      []
    ));
    this.panCardFileName = signal("", ...ngDevMode ? [{ debugName: "panCardFileName" }] : (
      /* istanbul ignore next */
      []
    ));
    this.passportFileName = signal("", ...ngDevMode ? [{ debugName: "passportFileName" }] : (
      /* istanbul ignore next */
      []
    ));
    this.voterIdFileName = signal("", ...ngDevMode ? [{ debugName: "voterIdFileName" }] : (
      /* istanbul ignore next */
      []
    ));
    this.profilePhotoName = signal("", ...ngDevMode ? [{ debugName: "profilePhotoName" }] : (
      /* istanbul ignore next */
      []
    ));
    this.signatureImageName = signal("", ...ngDevMode ? [{ debugName: "signatureImageName" }] : (
      /* istanbul ignore next */
      []
    ));
    this.addressProofDocumentName = signal("", ...ngDevMode ? [{ debugName: "addressProofDocumentName" }] : (
      /* istanbul ignore next */
      []
    ));
    this.captchaCode = signal("", ...ngDevMode ? [{ debugName: "captchaCode" }] : (
      /* istanbul ignore next */
      []
    ));
    this.captchaUserInput = "";
    this.confirmCheck = false;
    this.otp = "";
    this.generatedOtp = "";
    this.errors = {};
    this.accountTypes = [
      { value: "SAVINGS", label: "Savings Account" },
      { value: "CURRENT", label: "Current Account" },
      { value: "SALARY", label: "Salary Account" }
    ];
    this.genders = [
      { value: "MALE", label: "Male" },
      { value: "FEMALE", label: "Female" },
      { value: "OTHER", label: "Other" }
    ];
    this.maritalStatuses = [
      { value: "SINGLE", label: "Single" },
      { value: "MARRIED", label: "Married" },
      { value: "DIVORCED", label: "Divorced" },
      { value: "WIDOWED", label: "Widowed" }
    ];
    this.nomineeRelations = [
      { value: "SPOUSE", label: "Spouse" },
      { value: "FATHER", label: "Father" },
      { value: "MOTHER", label: "Mother" },
      { value: "SON", label: "Son" },
      { value: "DAUGHTER", label: "Daughter" },
      { value: "SIBLING", label: "Sibling" },
      { value: "OTHER", label: "Other" }
    ];
    this.stepDefs = [
      { n: 1, label: "Details" },
      { n: 2, label: "Address" },
      { n: 3, label: "Nominee" },
      { n: 4, label: "Docs" },
      { n: 5, label: "Review" }
    ];
    this.today = (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
    this.maxDob = new Date((/* @__PURE__ */ new Date()).setFullYear((/* @__PURE__ */ new Date()).getFullYear() - 18)).toISOString().split("T")[0];
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
    this.applicationResponse = signal(null, ...ngDevMode ? [{ debugName: "applicationResponse" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showSuccessPopup = signal(false, ...ngDevMode ? [{ debugName: "showSuccessPopup" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pdfAutoDownloaded = false;
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const s = Number(params["start"]);
      if (!isNaN(s) && s >= 1 && s <= 5)
        this.step.set(s);
    });
    this.refreshCaptcha();
  }
  // Add these two methods anywhere in the class:
  toggleTheme() {
    this.themeService.toggle();
  }
  isDark() {
    return this.themeService.isDark();
  }
  // ─────────────────────────────────────────────
  //  HELPERS
  // ─────────────────────────────────────────────
  get progressPercent() {
    return this.step() / this.totalSteps * 100;
  }
  getStepTitle() {
    const titles = ["Customer Details", "Address Details", "Nominee Details", "Upload Documents", "Review & Submit"];
    return titles[this.step() - 1] ?? "";
  }
  getStepSubtitle() {
    const subs = [
      "Personal & contact information",
      "Current & permanent address",
      "Beneficiary information",
      "Identity & address proof documents",
      "Verify all details before submission"
    ];
    return subs[this.step() - 1] ?? "";
  }
  isStepDone(n) {
    return this.step() > n;
  }
  isStepActive(n) {
    return this.step() === n;
  }
  togglePassword() {
    this.showPassword.update((v) => !v);
  }
  toggleConfirmPassword() {
    this.showConfirmPassword.update((v) => !v);
  }
  // ─────────────────────────────────────────────
  //  CAPTCHA
  // ─────────────────────────────────────────────
  refreshCaptcha() {
    const chars = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 6; i++)
      code += chars[Math.floor(Math.random() * chars.length)];
    this.captchaCode.set(code);
    this.captchaUserInput = "";
  }
  // ─────────────────────────────────────────────
  //  SAME ADDRESS COPY
  // ─────────────────────────────────────────────
  onSameAsCurrentChange() {
    if (this.addressDetails.sameAsCurrent) {
      this.addressDetails.permanentAddressLine = this.addressDetails.currentAddressLine;
      this.addressDetails.permanentCity = this.addressDetails.currentCity;
      this.addressDetails.permanentState = this.addressDetails.currentState;
      this.addressDetails.permanentPincode = this.addressDetails.currentPincode;
    } else {
      this.addressDetails.permanentAddressLine = "";
      this.addressDetails.permanentCity = "";
      this.addressDetails.permanentState = "";
      this.addressDetails.permanentPincode = "";
    }
  }
  // ─────────────────────────────────────────────
  //  FILE HANDLING
  // ─────────────────────────────────────────────
  onFileSelect(event, field, imageOnly = false) {
    const input = event.target;
    if (!input.files?.[0])
      return;
    const file = input.files[0];
    const allowedTypes = imageOnly ? ["image/jpeg", "image/png"] : ["application/pdf", "image/jpeg", "image/png"];
    const maxMB = imageOnly ? 2 : 5;
    if (!allowedTypes.includes(file.type)) {
      const msg = `Only ${imageOnly ? "JPG/PNG" : "PDF/JPG/PNG"} files allowed`;
      this.setFileError(field, msg);
      this.popup.show(msg, "warning");
      return;
    }
    if (file.size > maxMB * 1024 * 1024) {
      const msg = `File must be under ${maxMB}MB`;
      this.setFileError(field, msg);
      this.popup.show(msg, "warning");
      return;
    }
    this.documents[field] = file;
    this.setFileName(field, file.name);
    this.clearFieldError(field);
  }
  onRemoveFile(field) {
    this.documents[field] = null;
    this.setFileName(field, "");
  }
  setFileName(field, name) {
    const map = {
      aadhaarCardFile: () => this.aadhaarCardFileName.set(name),
      panCardFile: () => this.panCardFileName.set(name),
      passportFile: () => this.passportFileName.set(name),
      voterIdFile: () => this.voterIdFileName.set(name),
      profilePhoto: () => this.profilePhotoName.set(name),
      signatureImage: () => this.signatureImageName.set(name),
      addressProofDocument: () => this.addressProofDocumentName.set(name)
    };
    map[field]?.();
  }
  getFileName(field) {
    const map = {
      aadhaarCardFile: () => this.aadhaarCardFileName(),
      panCardFile: () => this.panCardFileName(),
      passportFile: () => this.passportFileName(),
      voterIdFile: () => this.voterIdFileName(),
      profilePhoto: () => this.profilePhotoName(),
      signatureImage: () => this.signatureImageName(),
      addressProofDocument: () => this.addressProofDocumentName()
    };
    return map[field]?.() ?? "";
  }
  setFileError(field, msg) {
    this.errors[field] = msg;
  }
  clearFieldError(field) {
    delete this.errors[field];
  }
  // ─────────────────────────────────────────────
  //  VALIDATION
  // ─────────────────────────────────────────────
  validateStep1() {
    this.errors = {};
    let ok = true;
    const d = this.customerDetails;
    if (!d.accountType) {
      this.errors.accountType = "Account type is required";
      ok = false;
    }
    if (!d.fullName?.trim()) {
      this.errors.fullName = "Full name is required";
      ok = false;
    }
    if (!d.fatherName?.trim()) {
      this.errors.fatherName = "Father's name is required";
      ok = false;
    }
    if (!d.motherName?.trim()) {
      this.errors.motherName = "Mother's name is required";
      ok = false;
    }
    if (!d.dateOfBirth) {
      this.errors.dateOfBirth = "Date of birth is required";
      ok = false;
    }
    if (!d.gender) {
      this.errors.gender = "Gender is required";
      ok = false;
    }
    if (!d.occupation?.trim()) {
      this.errors.occupation = "Occupation is required";
      ok = false;
    }
    if (!d.phoneNumber) {
      this.errors.phoneNumber = "Mobile number is required";
      ok = false;
    } else if (!/^[6-9]\d{9}$/.test(d.phoneNumber)) {
      this.errors.phoneNumber = "Enter valid 10-digit Indian mobile number";
      ok = false;
    }
    if (!d.emailId) {
      this.errors.emailId = "Email is required";
      ok = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.emailId)) {
      this.errors.emailId = "Enter a valid email address";
      ok = false;
    }
    if (!d.aadhaarNumber) {
      this.errors.aadhaarNumber = "Aadhaar number is required";
      ok = false;
    } else if (!/^\d{12}$/.test(d.aadhaarNumber)) {
      this.errors.aadhaarNumber = "Enter valid 12-digit Aadhaar number";
      ok = false;
    }
    if (!d.panNumber) {
      this.errors.panNumber = "PAN number is required";
      ok = false;
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(d.panNumber.toUpperCase())) {
      this.errors.panNumber = "Enter valid PAN (e.g. ABCDE1234F)";
      ok = false;
    }
    if (!ok)
      this.popup.show("Please fix the errors in the form before continuing.", "warning");
    return ok;
  }
  validateStep2() {
    this.errors = {};
    let ok = true;
    const a = this.addressDetails;
    if (!a.currentAddressLine?.trim()) {
      this.errors.currentAddressLine = "Address is required";
      ok = false;
    }
    if (!a.currentCity?.trim()) {
      this.errors.currentCity = "City is required";
      ok = false;
    }
    if (!a.currentState?.trim()) {
      this.errors.currentState = "State is required";
      ok = false;
    }
    if (!a.currentPincode) {
      this.errors.currentPincode = "Pincode is required";
      ok = false;
    } else if (!/^\d{6}$/.test(a.currentPincode)) {
      this.errors.currentPincode = "6-digit pincode required";
      ok = false;
    }
    if (!a.permanentAddressLine?.trim()) {
      this.errors.permanentAddressLine = "Address is required";
      ok = false;
    }
    if (!a.permanentCity?.trim()) {
      this.errors.permanentCity = "City is required";
      ok = false;
    }
    if (!a.permanentState?.trim()) {
      this.errors.permanentState = "State is required";
      ok = false;
    }
    if (!a.permanentPincode) {
      this.errors.permanentPincode = "Pincode is required";
      ok = false;
    } else if (!/^\d{6}$/.test(a.permanentPincode)) {
      this.errors.permanentPincode = "6-digit pincode required";
      ok = false;
    }
    if (!ok)
      this.popup.show("Please fix the address errors before continuing.", "warning");
    return ok;
  }
  validateStep3() {
    this.errors = {};
    let ok = true;
    const n = this.nomineeDetails;
    if (!n.nomineeName?.trim()) {
      this.errors.nomineeName = "Nominee name is required";
      ok = false;
    }
    if (!n.nomineeRelation) {
      this.errors.nomineeRelation = "Relation is required";
      ok = false;
    }
    if (!n.nomineeAge) {
      this.errors.nomineeAge = "Age is required";
      ok = false;
    } else if (Number(n.nomineeAge) < 1 || Number(n.nomineeAge) > 120) {
      this.errors.nomineeAge = "Enter valid age";
      ok = false;
    }
    if (!n.nomineeMobileNumber) {
      this.errors.nomineeMobileNumber = "Mobile number is required";
      ok = false;
    } else if (!/^\d{10}$/.test(n.nomineeMobileNumber)) {
      this.errors.nomineeMobileNumber = "Enter valid 10-digit number";
      ok = false;
    }
    if (!n.nomineeAddress?.trim()) {
      this.errors.nomineeAddress = "Address is required";
      ok = false;
    }
    if (!ok)
      this.popup.show("Please fill in all nominee details before continuing.", "warning");
    return ok;
  }
  validateStep4() {
    this.errors = {};
    let ok = true;
    const requiredDocs = [
      ["aadhaarCardFile", "Aadhaar Card is required"],
      ["panCardFile", "PAN Card is required"],
      ["profilePhoto", "Profile photo is required"],
      ["signatureImage", "Signature image is required"],
      ["addressProofDocument", "Address proof is required"]
    ];
    requiredDocs.forEach(([field, msg]) => {
      if (!this.documents[field]) {
        this.errors[field] = msg;
        ok = false;
      }
    });
    if (!ok)
      this.popup.show("Please upload all required documents before continuing.", "warning");
    return ok;
  }
  validateStep5() {
    this.errors = {};
    let ok = true;
    if (!this.captchaUserInput || this.captchaUserInput.toUpperCase() !== this.captchaCode()) {
      this.errors.captcha = "Captcha does not match. Please try again.";
      this.popup.show("Captcha does not match. Please try again.", "danger");
      this.refreshCaptcha();
      ok = false;
    }
    if (!this.confirmCheck) {
      this.errors.confirmCheck = "Please confirm that all details are correct.";
      if (ok)
        this.popup.show("Please confirm that all details are correct.", "warning");
      ok = false;
    }
    return ok;
  }
  // ─────────────────────────────────────────────
  //  NAVIGATION
  // ─────────────────────────────────────────────
  goToStep(n) {
    if (!this.isStepDone(n))
      return;
    this.errors = {};
    this.error.set("");
    this.step.set(n);
    window.scrollTo(0, 0);
  }
  goNext() {
    this.error.set("");
    const validators = {
      1: () => this.validateStep1(),
      2: () => this.validateStep2(),
      3: () => this.validateStep3(),
      4: () => this.validateStep4()
    };
    if (validators[this.step()] && !validators[this.step()]())
      return;
    this.step.update((s) => Math.min(5, s + 1));
    window.scrollTo(0, 0);
  }
  goBack() {
    this.errors = {};
    this.error.set("");
    this.step.update((s) => Math.max(1, s - 1));
    window.scrollTo(0, 0);
  }
  // ─────────────────────────────────────────────
  //  API CALLS
  // ─────────────────────────────────────────────
  submitApplication() {
    if (!this.validateStep5())
      return;
    this.loading.set(true);
    this.error.set("");
    this.applicationService.sendOtp(this.customerDetails.emailId).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.success) {
          this.otp = "";
          this.errors.otp = void 0;
          this.showOtpModal.set(true);
          this.popup.show(`OTP sent to ${this.customerDetails.emailId}`, "info");
        } else {
          this.error.set(res.message || "Failed to send OTP. Please try again.");
          this.popup.show(res.message || "Failed to send OTP. Please try again.", "danger");
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(this.extractErrorMessage(err));
        this.popup.show(this.extractErrorMessage(err), "danger");
      }
    });
  }
  onResendOtp() {
    this.loading.set(true);
    this.errors.otp = void 0;
    this.applicationService.sendOtp(this.customerDetails.emailId).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.success) {
          this.successMessage.set(`New OTP sent to ${this.customerDetails.emailId}`);
          this.popup.show(`New OTP sent to ${this.customerDetails.emailId}`, "info");
          setTimeout(() => this.successMessage.set(""), 3e3);
        } else {
          this.errors.otp = res.message || "Failed to resend OTP.";
          this.popup.show(res.message || "Failed to resend OTP.", "danger");
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.errors.otp = this.extractErrorMessage(err);
        this.popup.show(this.extractErrorMessage(err), "danger");
      }
    });
  }
  onVerifyOtp() {
    if (!this.otp || this.otp.length !== 6) {
      this.errors.otp = "Enter 6-digit OTP";
      this.popup.show("Please enter a valid 6-digit OTP.", "warning");
      return;
    }
    this.errors.otp = void 0;
    this.showOtpModal.set(false);
    this.finalSubmit();
  }
  closeOtpModal() {
    this.showOtpModal.set(false);
    this.otp = "";
    this.errors.otp = void 0;
  }
  finalSubmit() {
    this.loading.set(true);
    this.error.set("");
    const formData = new FormData();
    Object.entries(this.customerDetails).forEach(([k, v]) => formData.append(k, v ?? ""));
    formData.append("otp", this.otp);
    Object.entries(this.addressDetails).forEach(([k, v]) => formData.append(k, String(v)));
    Object.entries(this.nomineeDetails).forEach(([k, v]) => formData.append(k, v ?? ""));
    Object.entries(this.documents).forEach(([k, f]) => {
      if (f)
        formData.append(k, f, f.name);
    });
    this.applicationService.submitApplication(formData).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.success && res.data) {
          this.applicationId.set(res.data.applicationId);
          this.applicationResponse.set(res.data);
          this.showSuccessPopup.set(true);
          this.popup.show("Application submitted successfully!", "success");
          setTimeout(() => {
            if (!this.pdfAutoDownloaded) {
              this.pdfAutoDownloaded = true;
              this.downloadPDF();
            }
          }, 3e3);
        } else {
          this.error.set(res.message || "Submission failed. Please try again.");
          this.popup.show(res.message || "Submission failed. Please try again.", "danger");
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.handleSubmitError(err);
      }
    });
  }
  generateAppId() {
    return "NB" + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substr(2, 4).toUpperCase();
  }
  goToLogin() {
    this.router.navigate(["/login"]);
  }
  goToHome() {
    this.router.navigate(["/home"]);
  }
  // ─────────────────────────────────────────────
  //  PDF DOWNLOAD
  // ─────────────────────────────────────────────
  onDownloadAndClose() {
    this.pdfAutoDownloaded = true;
    this.downloadPDF();
    this.showSuccessPopup.set(false);
    this.showSuccessScreen.set(true);
    window.scrollTo(0, 0);
  }
  onCloseSuccessPopup() {
    if (!this.pdfAutoDownloaded) {
      this.pdfAutoDownloaded = true;
      this.downloadPDF();
    }
    this.showSuccessPopup.set(false);
    this.showSuccessScreen.set(true);
    window.scrollTo(0, 0);
  }
  downloadPDF() {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
    script.onload = () => this.generatePDF();
    document.head.appendChild(script);
  }
  generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const W = 210;
    let y = 36;
    const line = (text, size = 10, bold = false, color = [0, 0, 0]) => {
      doc.setFontSize(size);
      doc.setFont("helvetica", bold ? "bold" : "normal");
      doc.setTextColor(...color);
      const lines = doc.splitTextToSize(text, W - 40);
      lines.forEach((l) => {
        if (y > 270) {
          doc.addPage();
          y = 20;
        }
        doc.text(l, 20, y);
        y += size * 0.45 + 2;
      });
    };
    const section = (title) => {
      y += 5;
      doc.setDrawColor(99, 102, 241);
      doc.setLineWidth(0.5);
      doc.line(20, y, W - 20, y);
      y += 5;
      line(title, 11, true, [99, 102, 241]);
      y += 2;
    };
    const row = (label, val) => {
      doc.setFontSize(9);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(100, 116, 139);
      doc.text(label + ":", 20, y);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(15, 23, 42);
      const lines = doc.splitTextToSize(val || "\u2014", W - 80);
      lines.forEach((l, i) => doc.text(l, 80, y + i * 4.5));
      y += Math.max(5, lines.length * 4.5) + 2;
    };
    doc.setFillColor(99, 102, 241);
    doc.rect(0, 0, W, 28, "F");
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255);
    doc.text("NeoBank \u2014 Account Opening Application", W / 2, 12, { align: "center" });
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.text(`Application ID: ${this.applicationId()}   |   Date: ${(/* @__PURE__ */ new Date()).toLocaleDateString("en-IN")}`, W / 2, 21, { align: "center" });
    section("PERSONAL INFORMATION");
    const d = this.customerDetails;
    row("Account Type", d.accountType);
    row("Full Name", d.fullName);
    row("Father's Name", d.fatherName);
    row("Mother's Name", d.motherName);
    row("Date of Birth", d.dateOfBirth);
    row("Gender", d.gender);
    row("Marital Status", d.maritalStatus);
    row("Nationality", d.nationality);
    row("Occupation", d.occupation);
    row("Annual Income", d.annualIncome ? "\u20B9" + Number(d.annualIncome).toLocaleString() : "\u2014");
    row("Mobile", d.phoneNumber);
    row("Email", d.emailId);
    section("CURRENT ADDRESS");
    const a = this.addressDetails;
    row("Address", a.currentAddressLine);
    row("City / State", `${a.currentCity}, ${a.currentState}`);
    row("Pincode", a.currentPincode);
    section("PERMANENT ADDRESS");
    row("Address", a.permanentAddressLine);
    row("City / State", `${a.permanentCity}, ${a.permanentState}`);
    row("Pincode", a.permanentPincode);
    section("NOMINEE DETAILS");
    const n = this.nomineeDetails;
    row("Nominee Name", n.nomineeName);
    row("Relation", n.nomineeRelation);
    row("Age", n.nomineeAge);
    row("Mobile", n.nomineeMobileNumber);
    row("Address", n.nomineeAddress);
    section("DOCUMENTS SUBMITTED");
    const docs = [
      ["aadhaarCardFile", "Aadhaar Card"],
      ["panCardFile", "PAN Card"],
      ["passportFile", "Passport"],
      ["voterIdFile", "Voter ID"],
      ["profilePhoto", "Profile Photo"],
      ["signatureImage", "Signature"],
      ["addressProofDocument", "Address Proof"]
    ];
    docs.forEach(([field, label]) => {
      const f = this.documents[field];
      row(label, f ? `\u2713 Uploaded (${f.name})` : "Not uploaded");
    });
    section("APPLICATION STATUS");
    row("Status", "SUCCESS \u2014 Submitted for Verification");
    row("Application ID", this.applicationId());
    row("Submitted On", (/* @__PURE__ */ new Date()).toLocaleString("en-IN"));
    y += 6;
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text("This is a computer-generated document. For support: support@neobank.in", W / 2, y, { align: "center" });
    doc.save(`NeoBank_Application_${this.applicationId()}.pdf`);
  }
  // ─────────────────────────────────────────────
  //  ERROR HANDLERS
  // ─────────────────────────────────────────────
  extractErrorMessage(err) {
    if (err.error?.message)
      return err.error.message;
    switch (err.status) {
      case 0:
        return "Cannot connect to server. Please check your internet connection.";
      case 400:
        return err.error?.message || "Invalid request. Please check your details.";
      case 404:
        return "Service not found. Please try again later.";
      case 409:
        return err.error?.message || "A conflict occurred. Please try again.";
      case 429:
        return "Too many attempts. Please wait and try again.";
      case 500:
        return "Server error. Please try again later.";
      case 503:
        return "Service temporarily unavailable. Please try again later.";
      default:
        return "Something went wrong. Please try again.";
    }
  }
  handleSubmitError(err) {
    const errorCode = err.error?.errorCode || "";
    const message = err.error?.message || "";
    switch (errorCode) {
      case "OTP_INVALID":
      case "OTP_EXPIRED":
      case "OTP_NOT_FOUND":
        this.errors.otp = message;
        this.popup.show(message || "OTP is invalid or expired.", "danger");
        this.otp = "";
        this.showOtpModal.set(true);
        break;
      case "OTP_MAX_ATTEMPTS":
        this.errors.otp = message;
        this.popup.show(message || "Maximum OTP attempts reached.", "danger");
        this.otp = "";
        this.showOtpModal.set(true);
        break;
      case "ACTIVE_APPLICATION_EXISTS":
        this.error.set(message);
        this.popup.show(message || "An active application already exists.", "warning");
        this.step.set(1);
        window.scrollTo(0, 0);
        break;
      case "EMAIL_SEND_FAILED":
        this.error.set("Failed to send OTP email. Please check your email address and try again.");
        this.popup.show("Failed to send OTP email. Please check your email address.", "danger");
        break;
      default:
        if (message.toLowerCase().includes("otp")) {
          this.errors.otp = message;
          this.popup.show(message, "danger");
          this.otp = "";
          this.showOtpModal.set(true);
        } else {
          this.error.set(this.extractErrorMessage(err));
          this.popup.show(this.extractErrorMessage(err), "danger");
        }
        break;
    }
  }
  static {
    this.\u0275fac = function RegisterMultiComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegisterMultiComponent)(\u0275\u0275directiveInject(ApplicationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ThemeService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterMultiComponent, selectors: [["app-register-multi"]], decls: 4, vars: 4, consts: [["step1Form", "ngForm"], [1, "auth-page"], [1, "modal-backdrop"], [1, "auth-container", "success-container"], [1, "success-card"], [1, "success-icon-wrap"], [1, "success-icon"], [1, "success-title"], [1, "success-sub"], [1, "app-id-badge"], [1, "app-id-label"], [1, "app-id-value"], [1, "success-details-card"], [1, "success-row"], [1, "status-badge"], [1, "success-actions"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-outline", 3, "click"], [1, "auth-visual"], [1, "visual-content"], [1, "visual-check"], [1, "features-list"], [1, "feature"], [1, "feature-icon"], [1, "modal-box", "success-popup"], [1, "success-popup-icon"], [1, "modal-sub"], [1, "auto-download-note"], [1, "modal-actions"], [1, "modal-backdrop", 3, "click"], [1, "modal-box", 3, "click"], [1, "modal-icon"], [1, "alert", "alert-error"], [1, "alert", "alert-success"], [1, "form-group"], ["for", "otpField"], ["type", "text", "id", "otpField", "name", "otp", "placeholder", "\u2022 \u2022 \u2022 \u2022 \u2022 \u2022", "maxlength", "6", "inputmode", "numeric", "autocomplete", "one-time-code", 1, "form-control", "otp-input", 3, "ngModelChange", "ngModel"], [1, "error-message"], [1, "btn", "btn-outline", 3, "click", "disabled"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "spinner"], [1, "modal-footer-note"], ["type", "button", 1, "link-btn", 3, "click", "disabled"], [1, "auth-container"], [1, "auth-card"], [1, "logo-row"], ["routerLink", "/", 1, "logo"], [1, "logo-icon"], [1, "logo-text"], ["title", "Toggle theme", 1, "theme-toggle-btn", 3, "click"], [1, "auth-header"], [1, "progress-track"], [1, "progress-fill"], [1, "progress-label"], [1, "steps"], [1, "auth-form"], [1, "auth-form", "kyc-form"], [1, "auth-footer"], ["routerLink", "/login"], [1, "step-hint"], [1, "step-hint-num"], [1, "step-hint-label"], [1, "step", 3, "click"], [1, "step-number"], [1, "step-label"], [1, "step-line", 3, "active"], [1, "step-line"], [1, "auth-form", 3, "ngSubmit"], [1, "form-section"], ["for", "accountType"], [1, "req"], ["id", "accountType", "name", "accountType", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["for", "fullName"], ["type", "text", "id", "fullName", "name", "fullName", "placeholder", "Enter full name", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["for", "fatherName"], ["type", "text", "id", "fatherName", "name", "fatherName", "placeholder", "Father's full name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "motherName"], ["type", "text", "id", "motherName", "name", "motherName", "placeholder", "Mother's full name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "dateOfBirth"], ["type", "date", "id", "dateOfBirth", "name", "dateOfBirth", 1, "form-control", 3, "ngModelChange", "ngModel", "max"], ["for", "gender"], ["id", "gender", "name", "gender", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "maritalStatus"], ["id", "maritalStatus", "name", "maritalStatus", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "nationality"], ["type", "text", "id", "nationality", "name", "nationality", "placeholder", "e.g. India", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "occupation"], ["type", "text", "id", "occupation", "name", "occupation", "placeholder", "e.g. Software Engineer", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "annualIncome"], ["type", "text", "id", "annualIncome", "name", "annualIncome", "placeholder", "e.g. 600000", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "phoneNumber"], ["type", "tel", "id", "phoneNumber", "name", "phoneNumber", "placeholder", "10-digit number", "maxlength", "10", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "emailId"], ["type", "email", "id", "emailId", "name", "emailId", "placeholder", "yourname@email.com", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "aadhaarNumber"], ["type", "text", "id", "aadhaarNumber", "name", "aadhaarNumber", "placeholder", "12-digit Aadhaar number", "maxlength", "12", "inputmode", "numeric", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "panNumber"], ["type", "text", "id", "panNumber", "name", "panNumber", "placeholder", "e.g. ABCDE1234F", "maxlength", "10", 1, "form-control", 2, "text-transform", "uppercase", 3, "ngModelChange", "ngModel"], [1, "form-actions", "single"], ["type", "submit", 1, "btn", "btn-primary", "w-full", 3, "disabled"], [1, "auth-form", "kyc-form", 3, "ngSubmit"], ["for", "currentAddressLine"], ["type", "text", "id", "currentAddressLine", "name", "currentAddressLine", "placeholder", "House no., Street, Area, Landmark", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-row", "form-row-3"], ["for", "currentCity"], ["type", "text", "id", "currentCity", "name", "currentCity", "placeholder", "City", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "currentState"], ["id", "currentState", "name", "currentState", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "currentPincode"], ["type", "text", "id", "currentPincode", "name", "currentPincode", "placeholder", "6-digit", "maxlength", "6", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "same-address-check"], ["type", "checkbox", "name", "sameAsCurrent", 3, "ngModelChange", "change", "ngModel"], ["for", "permanentAddressLine"], ["type", "text", "id", "permanentAddressLine", "name", "permanentAddressLine", "placeholder", "House no., Street, Area, Landmark", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], ["for", "permanentCity"], ["type", "text", "id", "permanentCity", "name", "permanentCity", "placeholder", "City", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], ["for", "permanentState"], ["id", "permanentState", "name", "permanentState", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], ["for", "permanentPincode"], ["type", "text", "id", "permanentPincode", "name", "permanentPincode", "placeholder", "6-digit", "maxlength", "6", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["for", "nomineeName"], ["type", "text", "id", "nomineeName", "name", "nomineeName", "placeholder", "Full legal name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "nomineeRelation"], ["id", "nomineeRelation", "name", "nomineeRelation", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "nomineeAge"], ["type", "number", "id", "nomineeAge", "name", "nomineeAge", "placeholder", "Age in years", "min", "1", "max", "120", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "nomineeMobileNumber"], ["type", "tel", "id", "nomineeMobileNumber", "name", "nomineeMobileNumber", "placeholder", "10-digit number", "maxlength", "10", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "nomineeAddress"], ["id", "nomineeAddress", "name", "nomineeAddress", "placeholder", "Complete address of nominee", "rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "file-hint"], [1, "file-upload"], [1, "file-selected"], ["for", "aadhaarCardFile", 1, "file-drop-zone"], ["for", "panCardFile", 1, "file-drop-zone"], [1, "optional-label"], ["for", "passportFile", 1, "file-drop-zone"], ["for", "voterIdFile", 1, "file-drop-zone"], ["for", "profilePhoto", 1, "file-drop-zone"], ["for", "signatureImage", 1, "file-drop-zone"], ["for", "addressProofDocument", 1, "file-drop-zone"], [1, "file-icon"], ["type", "button", 1, "file-remove", 3, "click"], [1, "upload-icon"], [1, "upload-text"], [1, "upload-hint"], ["type", "file", "id", "aadhaarCardFile", "accept", ".pdf,.jpg,.jpeg,.png", 3, "change"], ["type", "file", "id", "panCardFile", "accept", ".pdf,.jpg,.jpeg,.png", 3, "change"], ["type", "file", "id", "passportFile", "accept", ".pdf,.jpg,.jpeg,.png", 3, "change"], ["type", "file", "id", "voterIdFile", "accept", ".pdf,.jpg,.jpeg,.png", 3, "change"], ["type", "file", "id", "profilePhoto", "accept", ".jpg,.jpeg,.png", 3, "change"], ["type", "file", "id", "signatureImage", "accept", ".jpg,.jpeg,.png", 3, "change"], ["type", "file", "id", "addressProofDocument", "accept", ".pdf,.jpg,.jpeg,.png", 3, "change"], [1, "form-section", "review-section"], [1, "review-grid"], [1, "review-item"], [1, "address-review"], [1, "address-block"], [1, "address-label"], [1, "address-text"], [1, "review-item", "full-width"], [1, "captcha-wrap"], [1, "captcha-display"], ["aria-hidden", "true", 1, "captcha-code"], ["type", "button", "title", "Refresh", 1, "captcha-refresh", 3, "click"], [1, "form-group", "captcha-input-group"], ["for", "captchaInput"], ["type", "text", "id", "captchaInput", "name", "captchaInput", "placeholder", "Enter captcha", "autocomplete", "off", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "confirm-wrap"], [1, "confirm-label"], ["type", "checkbox", "name", "confirmCheck", 3, "ngModelChange", "ngModel"]], template: function RegisterMultiComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, RegisterMultiComponent_Conditional_0_Template, 77, 6, "div", 1);
        \u0275\u0275conditionalCreate(1, RegisterMultiComponent_Conditional_1_Template, 51, 7, "div", 2);
        \u0275\u0275conditionalCreate(2, RegisterMultiComponent_Conditional_2_Template, 29, 11, "div", 2);
        \u0275\u0275conditionalCreate(3, RegisterMultiComponent_Conditional_3_Template, 66, 16, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.showSuccessScreen() ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showSuccessPopup() ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showOtpModal() ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.showSuccessScreen() ? 3 : -1);
      }
    }, dependencies: [RouterLink, CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, MinValidator, MaxValidator, NgModel, NgForm], styles: [`
.logo-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
}
.logo[_ngcontent-%COMP%] {
  margin-bottom: 0;
}
.theme-toggle-btn[_ngcontent-%COMP%] {
  background: none;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  width: 36px;
  height: 36px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  flex-shrink: 0;
}
.theme-toggle-btn[_ngcontent-%COMP%]:hover {
  border-color: #6366f1;
  background: #f5f3ff;
  transform: scale(1.05);
}
.auth-page[_ngcontent-%COMP%] {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.auth-container[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px 48px;
  background: var(--light);
  overflow-y: auto;
}
.success-container[_ngcontent-%COMP%] {
  align-items: center;
}
.auth-card[_ngcontent-%COMP%] {
  width: 100%;
  max-width: 480px;
  padding-bottom: 48px;
}
.logo[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  margin-bottom: 28px;
}
.logo-icon[_ngcontent-%COMP%] {
  width: 38px;
  height: 38px;
  background:
    linear-gradient(
      135deg,
      #6366f1 0%,
      #8b5cf6 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 18px;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
}
.logo-text[_ngcontent-%COMP%] {
  font-size: 20px;
  font-weight: 700;
  background:
    linear-gradient(
      135deg,
      #6366f1 0%,
      #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.auth-header[_ngcontent-%COMP%] {
  margin-bottom: 20px;
}
.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
  font-size: 26px;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 6px;
}
.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: var(--gray);
  font-size: 14px;
}
.progress-track[_ngcontent-%COMP%] {
  height: 4px;
  background: #e5e7eb;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 6px;
}
.progress-fill[_ngcontent-%COMP%] {
  height: 100%;
  background:
    linear-gradient(
      90deg,
      #6366f1,
      #8b5cf6);
  border-radius: 2px;
  transition: width 0.4s ease;
}
.progress-label[_ngcontent-%COMP%] {
  font-size: 12px;
  color: var(--gray);
  margin-bottom: 20px;
  text-align: right;
}
.steps[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  margin-bottom: 28px;
  overflow-x: auto;
  padding-bottom: 4px;
}
.step[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;
}
.step-number[_ngcontent-%COMP%] {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 13px;
  color: var(--gray);
  transition: all 0.3s ease;
}
.step.active[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {
  background: var(--primary);
  color: white;
  box-shadow: 0 4px 10px rgba(99, 102, 241, 0.35);
}
.step.completed[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {
  background: #10b981;
  color: white;
}
.step-label[_ngcontent-%COMP%] {
  font-size: 10px;
  color: var(--gray);
  letter-spacing: 0.3px;
  white-space: nowrap;
}
.step.active[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {
  color: var(--dark);
  font-weight: 600;
}
.step.completed[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {
  color: #10b981;
}
.step-line[_ngcontent-%COMP%] {
  flex: 1;
  height: 2px;
  background: #e5e7eb;
  margin: 0 6px;
  margin-bottom: 20px;
  min-width: 16px;
  transition: background 0.3s ease;
}
.step-line.active[_ngcontent-%COMP%] {
  background: #10b981;
}
.alert[_ngcontent-%COMP%] {
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 18px;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.alert-error[_ngcontent-%COMP%] {
  background: #fef2f2;
  color: var(--danger);
  border: 1px solid #fecaca;
}
.alert-success[_ngcontent-%COMP%] {
  background: #f0fdf4;
  color: #16a34a;
  border: 1px solid #bbf7d0;
}
.auth-form[_ngcontent-%COMP%] {
  margin-bottom: 20px;
}
.kyc-form[_ngcontent-%COMP%] {
  max-height: 72vh;
  overflow-y: auto;
  padding-right: 4px;
}
.kyc-form[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 5px;
}
.kyc-form[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}
.kyc-form[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 4px;
}
.form-section[_ngcontent-%COMP%] {
  margin-bottom: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f0f0f5;
}
.form-section[_ngcontent-%COMP%]:last-of-type {
  border-bottom: none;
}
.form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: var(--primary);
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid #ede9fe;
}
.form-group[_ngcontent-%COMP%] {
  margin-bottom: 14px;
}
.form-group[_ngcontent-%COMP%]:last-child {
  margin-bottom: 0;
}
label[_ngcontent-%COMP%] {
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: var(--dark);
  margin-bottom: 5px;
}
.req[_ngcontent-%COMP%] {
  color: #ef4444;
  margin-left: 2px;
}
.optional-label[_ngcontent-%COMP%] {
  color: var(--gray);
  font-weight: 400;
  font-size: 12px;
}
.file-hint[_ngcontent-%COMP%] {
  color: var(--gray);
  font-weight: 400;
  font-size: 11px;
}
.form-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-bottom: 14px;
}
.form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {
  margin-bottom: 0;
}
.form-row-3[_ngcontent-%COMP%] {
  grid-template-columns: 1fr 1fr 1fr;
}
.form-control[_ngcontent-%COMP%] {
  width: 100%;
  padding: 9px 13px;
  border: 1.5px solid var(--input-border, #d1d5db);
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
  color: var(--input-color, var(--dark));
  background: var(--input-bg, #ffffff);
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  appearance: none;
}
.form-control[_ngcontent-%COMP%]::placeholder {
  color: var(--input-placeholder, #9ca3af);
}
.form-control[_ngcontent-%COMP%]:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);
}
.form-control.error[_ngcontent-%COMP%] {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}
.form-control[_ngcontent-%COMP%]:disabled {
  background: var(--input-disabled-bg, #f9fafb);
  color: var(--gray);
  cursor: not-allowed;
}
select.form-control[_ngcontent-%COMP%] {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236b7280' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-color: var(--input-bg, #ffffff);
  padding-right: 36px;
}
textarea.form-control[_ngcontent-%COMP%] {
  resize: vertical;
  min-height: 80px;
}
.error-message[_ngcontent-%COMP%] {
  display: block;
  font-size: 12px;
  color: #ef4444;
  margin-top: 4px;
}
.password-field[_ngcontent-%COMP%] {
  position: relative;
}
.password-field[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {
  padding-right: 60px;
}
.toggle-password[_ngcontent-%COMP%] {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--primary);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
}
.file-drop-zone[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 18px 16px;
  border: 2px dashed var(--input-border, #d1d5db);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
  background: var(--input-bg, #fafafa);
  text-align: center;
}
.file-drop-zone[_ngcontent-%COMP%]:hover {
  border-color: var(--primary);
  background: #f5f3ff;
}
.file-drop-zone[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {
  display: none;
}
.upload-icon[_ngcontent-%COMP%] {
  font-size: 22px;
}
.upload-text[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 500;
  color: var(--dark);
}
.upload-hint[_ngcontent-%COMP%] {
  font-size: 11px;
  color: var(--gray);
}
.file-selected[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 8px;
}
.file-icon[_ngcontent-%COMP%] {
  font-size: 16px;
  flex-shrink: 0;
}
.file-selected[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {
  flex: 1;
  font-size: 13px;
  color: #15803d;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.file-remove[_ngcontent-%COMP%] {
  background: none;
  border: none;
  color: #9ca3af;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  transition: color 0.2s;
}
.file-remove[_ngcontent-%COMP%]:hover {
  color: #ef4444;
}
.same-address-check[_ngcontent-%COMP%] {
  margin-bottom: 14px;
}
.same-address-check[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 13px;
  color: var(--dark);
  font-weight: 400;
}
.same-address-check[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {
  width: 16px;
  height: 16px;
  accent-color: var(--primary);
  cursor: pointer;
}
.review-section[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {
  background: var(--review-section-bg, #fafafa);
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 14px;
  border: 1px solid var(--input-border, #f0f0f5);
}
.review-section[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin-bottom: 14px;
}
.review-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.review-item[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 8px 12px;
  background: var(--input-bg, #ffffff);
  border-radius: 8px;
  border: 1px solid var(--input-border, #e5e7eb);
}
.review-item[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {
  font-size: 11px;
  color: var(--gray);
  font-weight: 500;
  letter-spacing: 0.2px;
}
.review-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  font-size: 13px;
  color: var(--dark);
  font-weight: 600;
  word-break: break-word;
}
.review-item[_ngcontent-%COMP%]   strong.uploaded[_ngcontent-%COMP%] {
  color: #16a34a;
}
.review-item[_ngcontent-%COMP%]   strong.not-uploaded[_ngcontent-%COMP%] {
  color: #ef4444;
}
.review-item[_ngcontent-%COMP%]   strong.optional-doc[_ngcontent-%COMP%] {
  color: var(--gray);
  font-weight: 400;
  font-style: italic;
}
.full-width[_ngcontent-%COMP%] {
  grid-column: 1 / -1;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
}
.full-width[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {
  flex-shrink: 0;
  min-width: 100px;
  margin-top: 2px;
}
.address-review[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.address-block[_ngcontent-%COMP%] {
  padding: 12px 14px;
  background: var(--input-bg, #ffffff);
  border-radius: 8px;
  border: 1px solid var(--input-border, #e5e7eb);
}
.address-label[_ngcontent-%COMP%] {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--primary);
  margin-bottom: 6px;
}
.address-text[_ngcontent-%COMP%] {
  font-size: 13px;
  color: var(--dark);
  line-height: 1.6;
}
.captcha-wrap[_ngcontent-%COMP%] {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  margin-bottom: 16px;
}
.captcha-display[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}
.captcha-code[_ngcontent-%COMP%] {
  font-family: "Courier New", monospace;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 8px;
  color: var(--dark);
  background: var(--captcha-bg, linear-gradient(135deg, #f0f0f8 0%, #e8e8f8 100%));
  padding: 8px 14px;
  border-radius: 8px;
  border: 1.5px solid var(--input-border, #d1d5db);
  font-style: italic;
  -webkit-user-select: none;
  user-select: none;
  display: block;
  min-width: 140px;
}
.captcha-refresh[_ngcontent-%COMP%] {
  background: var(--input-bg, white);
  border: 1.5px solid var(--input-border, #d1d5db);
  border-radius: 8px;
  color: var(--gray);
  font-size: 18px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.captcha-refresh[_ngcontent-%COMP%]:hover {
  border-color: var(--primary);
  color: var(--primary);
}
.captcha-input-group[_ngcontent-%COMP%] {
  flex: 1;
  margin-bottom: 0;
}
.confirm-wrap[_ngcontent-%COMP%] {
  padding: 14px 16px;
  background: var(--confirm-bg, #fffbeb);
  border: 1px solid var(--confirm-border, #fde68a);
  border-radius: 10px;
  margin-top: 4px;
}
.confirm-wrap.has-error[_ngcontent-%COMP%] {
  border-color: #fecaca;
  background: #fef2f2;
}
.confirm-label[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
  font-size: 13px;
  color: var(--confirm-text, #78716c);
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 0;
}
.confirm-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {
  margin-top: 2px;
  width: 16px;
  height: 16px;
  accent-color: var(--primary);
  cursor: pointer;
  flex-shrink: 0;
}
.form-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}
.form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
  flex: 1;
}
.form-actions.single[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
  width: 100%;
}
.btn[_ngcontent-%COMP%] {
  padding: 11px 24px;
  border-radius: 9px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  font-family: inherit;
  letter-spacing: 0.2px;
}
.btn-primary[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #8b5cf6);
  color: white;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.28);
}
.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {
  background:
    linear-gradient(
      135deg,
      #4f46e5,
      #7c3aed);
  box-shadow: 0 6px 16px rgba(99, 102, 241, 0.38);
  transform: translateY(-1px);
}
.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {
  transform: translateY(0);
}
.btn-primary[_ngcontent-%COMP%]:disabled {
  opacity: 0.55;
  cursor: not-allowed;
  transform: none;
}
.btn-secondary[_ngcontent-%COMP%] {
  background: var(--input-bg, white);
  color: var(--dark);
  border: 1.5px solid var(--input-border, #d1d5db);
}
.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: var(--light);
  border-color: #9ca3af;
}
.btn-secondary[_ngcontent-%COMP%]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.btn-outline[_ngcontent-%COMP%] {
  background: transparent;
  color: var(--primary);
  border: 1.5px solid var(--primary);
}
.btn-outline[_ngcontent-%COMP%]:hover {
  background: #f5f3ff;
}
.w-full[_ngcontent-%COMP%] {
  width: 100%;
}
.spinner[_ngcontent-%COMP%] {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-top-color: white;
  border-radius: 50%;
  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;
  margin-right: 7px;
  vertical-align: middle;
}
@keyframes _ngcontent-%COMP%_spin {
  to {
    transform: rotate(360deg);
  }
}
.auth-footer[_ngcontent-%COMP%] {
  text-align: center;
  margin-top: 24px;
}
.auth-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 14px;
  color: var(--gray);
}
.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
}
.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  text-decoration: underline;
}
.modal-backdrop[_ngcontent-%COMP%] {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;
}
@keyframes _ngcontent-%COMP%_fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.modal-box[_ngcontent-%COMP%] {
  background: var(--modal-bg, white);
  color: var(--dark);
  border-radius: 20px;
  padding: 36px;
  width: 420px;
  max-width: 90vw;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  animation: _ngcontent-%COMP%_slideUp 0.25s ease;
  text-align: center;
}
@keyframes _ngcontent-%COMP%_slideUp {
  from {
    transform: translateY(24px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.modal-icon[_ngcontent-%COMP%] {
  font-size: 36px;
  margin-bottom: 12px;
}
.modal-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 20px;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 10px;
}
.modal-sub[_ngcontent-%COMP%] {
  font-size: 13px;
  color: var(--gray);
  line-height: 1.6;
  margin-bottom: 20px;
}
.demo-note[_ngcontent-%COMP%] {
  color: #f59e0b;
  font-size: 12px;
  display: block;
  margin-top: 4px;
  font-style: normal;
  font-weight: 500;
}
.otp-input[_ngcontent-%COMP%] {
  text-align: center !important;
  font-size: 26px !important;
  letter-spacing: 10px !important;
  font-weight: 700 !important;
  font-family: "Courier New", monospace !important;
}
.modal-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
.modal-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
  flex: 1;
}
.modal-footer-note[_ngcontent-%COMP%] {
  font-size: 12px;
  color: var(--gray);
  margin-top: 14px;
  text-align: center;
}
.link-btn[_ngcontent-%COMP%] {
  background: none;
  border: none;
  color: var(--primary);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
}
.link-btn[_ngcontent-%COMP%]:hover {
  text-decoration: underline;
}
.success-card[_ngcontent-%COMP%] {
  width: 100%;
  max-width: 480px;
  text-align: center;
}
.success-icon-wrap[_ngcontent-%COMP%] {
  margin-bottom: 20px;
}
.success-icon[_ngcontent-%COMP%] {
  width: 72px;
  height: 72px;
  background:
    linear-gradient(
      135deg,
      #10b981,
      #059669);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  font-weight: 700;
  margin: 0 auto;
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.35);
}
.success-title[_ngcontent-%COMP%] {
  font-size: 26px;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 8px;
}
.success-sub[_ngcontent-%COMP%] {
  font-size: 14px;
  color: var(--gray);
  line-height: 1.6;
  margin-bottom: 24px;
}
.app-id-badge[_ngcontent-%COMP%] {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background:
    linear-gradient(
      135deg,
      #f5f3ff,
      #ede9fe);
  border: 1.5px solid #c4b5fd;
  border-radius: 12px;
  padding: 12px 24px;
  margin-bottom: 24px;
}
.app-id-label[_ngcontent-%COMP%] {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #7c3aed;
}
.app-id-value[_ngcontent-%COMP%] {
  font-family: "Courier New", monospace;
  font-size: 20px;
  font-weight: 700;
  color: #6d28d9;
  letter-spacing: 3px;
}
.success-details-card[_ngcontent-%COMP%] {
  background: var(--input-bg, white);
  border: 1px solid var(--input-border, #e5e7eb);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 24px;
  text-align: left;
}
.success-row[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px 16px;
  border-bottom: 1px solid var(--input-border, #f3f4f6);
  font-size: 13px;
}
.success-row[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.success-row[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {
  color: var(--gray);
  font-weight: 500;
}
.success-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  color: var(--dark);
  font-weight: 600;
}
.status-badge[_ngcontent-%COMP%] {
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  color: #16a34a;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
  letter-spacing: 0.3px;
}
.success-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}
.auth-visual[_ngcontent-%COMP%] {
  background: var(--bg-gradient, linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 40px;
  color: white;
  position: sticky;
  top: 0;
  height: 100vh;
}
.visual-content[_ngcontent-%COMP%] {
  max-width: 380px;
  text-align: center;
}
.visual-check[_ngcontent-%COMP%] {
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 700;
  margin: 0 auto 20px;
}
.visual-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 14px;
  line-height: 1.25;
}
.visual-content[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {
  font-size: 16px;
  opacity: 0.85;
  margin-bottom: 40px;
  line-height: 1.6;
}
.features-list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 36px;
}
.feature[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.12);
  padding: 14px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 15px;
  font-weight: 500;
  transition: background 0.2s;
}
.feature[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.18);
}
.feature-icon[_ngcontent-%COMP%] {
  font-size: 22px;
}
.step-hint[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
}
.step-hint-num[_ngcontent-%COMP%] {
  font-size: 28px;
  font-weight: 700;
  opacity: 0.7;
  line-height: 1;
}
.step-hint-label[_ngcontent-%COMP%] {
  font-size: 15px;
  font-weight: 600;
  opacity: 0.9;
}
@media (max-width: 1024px) {
  .auth-page[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .auth-visual[_ngcontent-%COMP%] {
    display: none;
  }
  .auth-container[_ngcontent-%COMP%] {
    padding: 32px 24px;
    align-items: flex-start;
  }
  .form-row-3[_ngcontent-%COMP%] {
    grid-template-columns: 1fr 1fr;
  }
  .kyc-form[_ngcontent-%COMP%] {
    max-height: none;
    overflow-y: visible;
  }
}
@media (max-width: 600px) {
  .auth-container[_ngcontent-%COMP%] {
    padding: 24px 16px;
  }
  .form-row[_ngcontent-%COMP%], 
   .form-row-3[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .review-grid[_ngcontent-%COMP%], 
   .address-review[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .captcha-wrap[_ngcontent-%COMP%] {
    flex-direction: column;
  }
  .steps[_ngcontent-%COMP%] {
    gap: 0;
  }
  .step-line[_ngcontent-%COMP%] {
    min-width: 10px;
  }
}
.step.clickable[_ngcontent-%COMP%] {
  cursor: pointer;
}
.step.clickable[_ngcontent-%COMP%]:hover   .step-number[_ngcontent-%COMP%] {
  transform: scale(1.1);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25);
  transition: all 0.2s ease;
}
.step.clickable[_ngcontent-%COMP%]:hover   .step-label[_ngcontent-%COMP%] {
  color: #6366f1;
  transition: color 0.2s ease;
}
.success-popup[_ngcontent-%COMP%] {
  max-width: 480px;
  text-align: center;
}
.success-popup-icon[_ngcontent-%COMP%] {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}
.auto-download-note[_ngcontent-%COMP%] {
  font-size: 0.78rem;
  color: #6366f1;
  margin: 0.75rem 0 0;
  animation: _ngcontent-%COMP%_pulse 1.5s infinite;
}
@keyframes _ngcontent-%COMP%_pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}
/*# sourceMappingURL=register-multi.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterMultiComponent, [{
    type: Component,
    args: [{ selector: "app-register-multi", standalone: true, imports: [RouterLink, CommonModule, FormsModule], template: `<!-- -------------------------  register-multi.component.html  ------------------------- -->

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     SUCCESS SCREEN
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
@if (showSuccessScreen()) {
  <div class="auth-page">
    <div class="auth-container success-container">
      <div class="success-card">
        <div class="success-icon-wrap">
          <div class="success-icon">\u2713</div>
        </div>
        <h2 class="success-title">Application Submitted!</h2>
        <p class="success-sub">Your bank account application has been received.<br>
          Our team will verify your documents within 2\u20133 business days.</p>

        <div class="app-id-badge">
          <span class="app-id-label">Application ID</span>
          <span class="app-id-value">{{ applicationId() }}</span>
        </div>

        <div class="success-details-card">
          <div class="success-row"><span>Full Name</span><strong>{{ customerDetails.fullName }}</strong></div>
          <div class="success-row"><span>Account Type</span><strong>{{ customerDetails.accountType }}</strong></div>
          <div class="success-row"><span>Mobile</span><strong>{{ customerDetails.phoneNumber }}</strong></div>
          <div class="success-row"><span>Email</span><strong>{{ customerDetails.emailId }}</strong></div>
          <div class="success-row">
            <span>Status</span>
            <span class="status-badge">\u2713 SUCCESS</span>
          </div>
          <div class="success-row">
            <span>Submitted On</span>
            <strong>{{ today }}</strong>
          </div>
        </div>

        <div class="success-actions">
          <button class="btn btn-primary" (click)="downloadPDF()">
            \u2B07 Download Application PDF
          </button>
          <button class="btn btn-outline" (click)="goToHome()">
            Go to Home Page
          </button>
        </div>
      </div>
    </div>

    <div class="auth-visual">
      <div class="visual-content">
        <div class="visual-check">\u2713</div>
        <h2>Welcome to NeoBank!</h2>
        <p>Your application is under review. You'll receive an email confirmation shortly.</p>
        <div class="features-list">
          <div class="feature"><span class="feature-icon">\u{1F514}</span><span>Email confirmation sent</span></div>
          <div class="feature"><span class="feature-icon">\u{1F50D}</span><span>Document verification in progress</span></div>
          <div class="feature"><span class="feature-icon">\u{1F4B3}</span><span>Account activation in 2\u20133 days</span></div>
        </div>
      </div>
    </div>
  </div>
}

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     SUCCESS POPUP (after OTP verified + backend success)
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
@if (showSuccessPopup()) {
  <div class="modal-backdrop">
    <div class="modal-box success-popup">

      <div class="success-popup-icon">\u2705</div>
      <h3>Application Submitted!</h3>
      <p class="modal-sub">Your bank account application has been received.</p>

      <div class="app-id-badge">
        <span class="app-id-label">Application ID</span>
        <span class="app-id-value">{{ applicationResponse()?.applicationId }}</span>
      </div>

      <div class="success-details-card">
        <div class="success-row">
          <span>Full Name</span>
          <strong>{{ applicationResponse()?.fullName }}</strong>
        </div>
        <div class="success-row">
          <span>Account Type</span>
          <strong>{{ applicationResponse()?.accountType }}</strong>
        </div>
        <div class="success-row">
          <span>Mobile</span>
          <strong>{{ applicationResponse()?.phoneNumber }}</strong>
        </div>
        <div class="success-row">
          <span>Email</span>
          <strong>{{ applicationResponse()?.emailId }}</strong>
        </div>
        <div class="success-row">
          <span>Submitted On</span>
          <strong>{{ applicationResponse()?.submittedOn }}</strong>
        </div>
        <div class="success-row">
          <span>Status</span>
          <span class="status-badge">\u2713 {{ applicationResponse()?.status }}</span>
        </div>
      </div>

      <p class="auto-download-note">\u{1F4E5} PDF will auto-download in 3 seconds...</p>

      <div class="modal-actions">
        <button class="btn btn-primary" (click)="onDownloadAndClose()">
          \u2B07 Download PDF
        </button>
        <button class="btn btn-outline" (click)="onCloseSuccessPopup()">
          Close
        </button>
      </div>

    </div>
  </div>
}
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     OTP MODAL
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
@if (showOtpModal()) {
  <div class="modal-backdrop" (click)="closeOtpModal()">
    <div class="modal-box" (click)="$event.stopPropagation()">
      <div class="modal-icon">\u{1F510}</div>
      <h3>OTP Verification</h3>
      <p class="modal-sub">
        We've sent a 6-digit OTP to<br>
        <strong>{{ customerDetails.emailId }}</strong><br>
        <!-- <em class="demo-note">(Demo OTP: {{ generatedOtp }})</em> -->
      </p>

<!-- Inside OTP modal-box -->

@if (error()) {
  <div class="alert alert-error">{{ error() }}</div>
}

@if (successMessage()) {
  <div class="alert alert-success">{{ successMessage() }}</div>
}

      <div class="form-group">
        <label for="otpField">Enter OTP</label>
        <input
          type="text"
          id="otpField"
          class="form-control otp-input"
          [class.error]="errors.otp"
          [(ngModel)]="otp"
          name="otp"
          placeholder="\u2022 \u2022 \u2022 \u2022 \u2022 \u2022"
          maxlength="6"
          inputmode="numeric"
          autocomplete="one-time-code"
        />
        @if (errors.otp) {
          <span class="error-message">{{ errors.otp }}</span>
        }
      </div>

      <div class="modal-actions">
        <button class="btn btn-outline" (click)="closeOtpModal()" [disabled]="loading()">Cancel</button>
        <button class="btn btn-primary" (click)="onVerifyOtp()" [disabled]="loading()">
          @if (loading()) { <span class="spinner"></span> } Verify OTP
        </button>
      </div>

      <div class="modal-footer-note">
        OTP valid for 10 minutes \xB7
        <button type="button" class="link-btn" (click)="onResendOtp()" [disabled]="loading()">Resend OTP</button>
      </div>
    </div>
  </div>
}

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     MAIN FORM (steps 1\u20135)
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
@if (!showSuccessScreen()) {
  <div class="auth-page">

    <!-- LEFT: Form Area -->
    <div class="auth-container">
      <div class="auth-card">

        <!-- Brand -->
      <div class="logo-row">
  <a routerLink="/" class="logo">
    <span class="logo-icon">N</span>
    <span class="logo-text">NeoBank</span>
  </a>
  <button class="theme-toggle-btn" (click)="toggleTheme()" title="Toggle theme">
    {{ isDark() ? '\u2600\uFE0F' : '\u{1F319}' }}
  </button>
</div>

        <!-- Header -->
        <div class="auth-header">
          <h1>{{ getStepTitle() }}</h1>
          <p>{{ getStepSubtitle() }}</p>
        </div>

        <!-- Progress Bar -->
        <div class="progress-track">
          <div class="progress-fill" [style.width.%]="progressPercent"></div>
        </div>
        <div class="progress-label">Step {{ step() }} of {{ totalSteps }}</div>

        <!-- Step Indicators -->
        <div class="steps">
          @for (s of stepDefs; track s.n) {
            <!-- <div class="step" [class.active]="isStepActive(s.n)" [class.completed]="isStepDone(s.n)"> -->
              <div class="step" 
     [class.active]="isStepActive(s.n)" 
     [class.completed]="isStepDone(s.n)"
     [class.clickable]="isStepDone(s.n)"
     (click)="goToStep(s.n)">
              <span class="step-number">
                @if (isStepDone(s.n)) { \u2713 } @else { {{ s.n }} }
              </span>
              <span class="step-label">{{ s.label }}</span>
            </div>
            @if (s.n < totalSteps) {
              <div class="step-line" [class.active]="isStepDone(s.n)"></div>
            }
          }
        </div>

        <!-- Global Error -->
        @if (error()) {
          <div class="alert alert-error">{{ error() }}</div>
        }

        <!-- \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
             STEP 1: Customer Details
        \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        @if (step() === 1) {
          <form (ngSubmit)="goNext()" class="auth-form" #step1Form="ngForm">

            <div class="form-section">
              <h3>Account Type</h3>
              <div class="form-group">
                <label for="accountType">Account Type <span class="req">*</span></label>
                <select
                  id="accountType"
                  class="form-control"
                  [class.error]="errors.accountType"
                  [(ngModel)]="customerDetails.accountType"
                  name="accountType"
                >
                  <option value="">Select account type...</option>
                  @for (opt of accountTypes; track opt.value) {
                    <option [value]="opt.value">{{ opt.label }}</option>
                  }
                </select>
                @if (errors.accountType) { <span class="error-message">{{ errors.accountType }}</span> }
              </div>
            </div>

            <div class="form-section">
              <h3>Personal Details</h3>

              <div class="form-group">
                <label for="fullName">Full Name (as per Aadhaar) <span class="req">*</span></label>
                <input type="text" id="fullName" class="form-control" [class.error]="errors.fullName"
                  [(ngModel)]="customerDetails.fullName" name="fullName" placeholder="Enter full name" />
                @if (errors.fullName) { <span class="error-message">{{ errors.fullName }}</span> }
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="fatherName">Father's Name <span class="req">*</span></label>
                  <input type="text" id="fatherName" class="form-control" [class.error]="errors.fatherName"
                    [(ngModel)]="customerDetails.fatherName" name="fatherName" placeholder="Father's full name" />
                  @if (errors.fatherName) { <span class="error-message">{{ errors.fatherName }}</span> }
                </div>
                <div class="form-group">
                  <label for="motherName">Mother's Name <span class="req">*</span></label>
                  <input type="text" id="motherName" class="form-control" [class.error]="errors.motherName"
                    [(ngModel)]="customerDetails.motherName" name="motherName" placeholder="Mother's full name" />
                  @if (errors.motherName) { <span class="error-message">{{ errors.motherName }}</span> }
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="dateOfBirth">Date of Birth <span class="req">*</span></label>
                  <input type="date" id="dateOfBirth" class="form-control" [class.error]="errors.dateOfBirth"
                    [(ngModel)]="customerDetails.dateOfBirth" name="dateOfBirth" [max]="maxDob" />
                  @if (errors.dateOfBirth) { <span class="error-message">{{ errors.dateOfBirth }}</span> }
                </div>
                <div class="form-group">
                  <label for="gender">Gender <span class="req">*</span></label>
                  <select id="gender" class="form-control" [class.error]="errors.gender"
                    [(ngModel)]="customerDetails.gender" name="gender">
                    <option value="">Select...</option>
                    @for (g of genders; track g.value) {
                      <option [value]="g.value">{{ g.label }}</option>
                    }
                  </select>
                  @if (errors.gender) { <span class="error-message">{{ errors.gender }}</span> }
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="maritalStatus">Marital Status</label>
                  <select id="maritalStatus" class="form-control"
                    [(ngModel)]="customerDetails.maritalStatus" name="maritalStatus">
                    <option value="">Select...</option>
                    @for (ms of maritalStatuses; track ms.value) {
                      <option [value]="ms.value">{{ ms.label }}</option>
                    }
                  </select>
                </div>
                <div class="form-group">
                  <label for="nationality">Nationality</label>
                  <input type="text" id="nationality" class="form-control"
                    [(ngModel)]="customerDetails.nationality" name="nationality" placeholder="e.g. India" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="occupation">Occupation <span class="req">*</span></label>
                  <input type="text" id="occupation" class="form-control" [class.error]="errors.occupation"
                    [(ngModel)]="customerDetails.occupation" name="occupation" placeholder="e.g. Software Engineer" />
                  @if (errors.occupation) { <span class="error-message">{{ errors.occupation }}</span> }
                </div>
                <div class="form-group">
                  <label for="annualIncome">Annual Income (\u20B9)</label>
                  <input type="text" id="annualIncome" class="form-control"
                    [(ngModel)]="customerDetails.annualIncome" name="annualIncome" placeholder="e.g. 600000" />
                </div>
              </div>
            </div>

            <div class="form-section">
              <h3>Contact Information</h3>

              <div class="form-row">
                <div class="form-group">
                  <label for="phoneNumber">Mobile Number <span class="req">*</span></label>
                  <input type="tel" id="phoneNumber" class="form-control" [class.error]="errors.phoneNumber"
                    [(ngModel)]="customerDetails.phoneNumber" name="phoneNumber"
                    placeholder="10-digit number" maxlength="10" />
                  @if (errors.phoneNumber) { <span class="error-message">{{ errors.phoneNumber }}</span> }
                </div>
                <div class="form-group">
                  <label for="emailId">Email Address <span class="req">*</span></label>
                  <input type="email" id="emailId" class="form-control" [class.error]="errors.emailId"
                    [(ngModel)]="customerDetails.emailId" name="emailId" placeholder="yourname@email.com" />
                  @if (errors.emailId) { <span class="error-message">{{ errors.emailId }}</span> }
                </div>
              </div>
            </div>

<div class="form-section">
              <h3>Identity Numbers</h3>

              <div class="form-row">
                <div class="form-group">
                  <label for="aadhaarNumber">Aadhaar Number <span class="req">*</span></label>
                  <input
                    type="text"
                    id="aadhaarNumber"
                    class="form-control"
                    [class.error]="errors.aadhaarNumber"
                    [(ngModel)]="customerDetails.aadhaarNumber"
                    name="aadhaarNumber"
                    placeholder="12-digit Aadhaar number"
                    maxlength="12"
                    inputmode="numeric"
                  />
                  @if (errors.aadhaarNumber) {
                    <span class="error-message">{{ errors.aadhaarNumber }}</span>
                  }
                </div>

                <div class="form-group">
                  <label for="panNumber">PAN Number <span class="req">*</span></label>
                  <input
                    type="text"
                    id="panNumber"
                    class="form-control"
                    [class.error]="errors.panNumber"
                    [(ngModel)]="customerDetails.panNumber"
                    name="panNumber"
                    placeholder="e.g. ABCDE1234F"
                    maxlength="10"
                    style="text-transform: uppercase"
                  />
                  @if (errors.panNumber) {
                    <span class="error-message">{{ errors.panNumber }}</span>
                  }
                </div>
              </div>
            </div>

            <div class="form-actions single">
              <button type="submit" class="btn btn-primary w-full" [disabled]="loading()">
                @if (loading()) { <span class="spinner"></span> Processing... } @else { Continue \u2192 }
              </button>
            </div>
          </form>
        }

        <!-- \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
             STEP 2: Address Details
        \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        @if (step() === 2) {
          <form (ngSubmit)="goNext()" class="auth-form kyc-form">

            <div class="form-section">
              <h3>Current Address</h3>
              <div class="form-group">
                <label for="currentAddressLine">Address Line <span class="req">*</span></label>
                <input type="text" id="currentAddressLine" class="form-control" [class.error]="errors.currentAddressLine"
                  [(ngModel)]="addressDetails.currentAddressLine" name="currentAddressLine"
                  placeholder="House no., Street, Area, Landmark" />
                @if (errors.currentAddressLine) { <span class="error-message">{{ errors.currentAddressLine }}</span> }
              </div>
              <div class="form-row form-row-3">
                <div class="form-group">
                  <label for="currentCity">City <span class="req">*</span></label>
                  <input type="text" id="currentCity" class="form-control" [class.error]="errors.currentCity"
                    [(ngModel)]="addressDetails.currentCity" name="currentCity" placeholder="City" />
                  @if (errors.currentCity) { <span class="error-message">{{ errors.currentCity }}</span> }
                </div>
                <div class="form-group">
                  <label for="currentState">State <span class="req">*</span></label>
                  <select id="currentState" class="form-control" [class.error]="errors.currentState"
                    [(ngModel)]="addressDetails.currentState" name="currentState">
                    <option value="">Select state...</option>
                    @for (st of indianStates; track st) {
                      <option [value]="st">{{ st }}</option>
                    }
                  </select>
                  @if (errors.currentState) { <span class="error-message">{{ errors.currentState }}</span> }
                </div>
                <div class="form-group">
                  <label for="currentPincode">Pincode <span class="req">*</span></label>
                  <input type="text" id="currentPincode" class="form-control" [class.error]="errors.currentPincode"
                    [(ngModel)]="addressDetails.currentPincode" name="currentPincode"
                    placeholder="6-digit" maxlength="6" />
                  @if (errors.currentPincode) { <span class="error-message">{{ errors.currentPincode }}</span> }
                </div>
              </div>
            </div>

            <div class="form-section">
              <h3>Permanent Address</h3>
              <div class="same-address-check">
                <label>
                  <input type="checkbox" [(ngModel)]="addressDetails.sameAsCurrent"
                    name="sameAsCurrent" (change)="onSameAsCurrentChange()" />
                  Same as current address
                </label>
              </div>
              <div class="form-group">
                <label for="permanentAddressLine">Address Line <span class="req">*</span></label>
                <input type="text" id="permanentAddressLine" class="form-control" [class.error]="errors.permanentAddressLine"
                  [(ngModel)]="addressDetails.permanentAddressLine" name="permanentAddressLine"
                  placeholder="House no., Street, Area, Landmark"
                  [disabled]="addressDetails.sameAsCurrent" />
                @if (errors.permanentAddressLine) { <span class="error-message">{{ errors.permanentAddressLine }}</span> }
              </div>
              <div class="form-row form-row-3">
                <div class="form-group">
                  <label for="permanentCity">City <span class="req">*</span></label>
                  <input type="text" id="permanentCity" class="form-control" [class.error]="errors.permanentCity"
                    [(ngModel)]="addressDetails.permanentCity" name="permanentCity" placeholder="City"
                    [disabled]="addressDetails.sameAsCurrent" />
                  @if (errors.permanentCity) { <span class="error-message">{{ errors.permanentCity }}</span> }
                </div>
                <div class="form-group">
                  <label for="permanentState">State <span class="req">*</span></label>
                  <select id="permanentState" class="form-control" [class.error]="errors.permanentState"
                    [(ngModel)]="addressDetails.permanentState" name="permanentState"
                    [disabled]="addressDetails.sameAsCurrent">
                    <option value="">Select state...</option>
                    @for (st of indianStates; track st) {
                      <option [value]="st">{{ st }}</option>
                    }
                  </select>
                  @if (errors.permanentState) { <span class="error-message">{{ errors.permanentState }}</span> }
                </div>
                <div class="form-group">
                  <label for="permanentPincode">Pincode <span class="req">*</span></label>
                  <input type="text" id="permanentPincode" class="form-control" [class.error]="errors.permanentPincode"
                    [(ngModel)]="addressDetails.permanentPincode" name="permanentPincode"
                    placeholder="6-digit" maxlength="6"
                    [disabled]="addressDetails.sameAsCurrent" />
                  @if (errors.permanentPincode) { <span class="error-message">{{ errors.permanentPincode }}</span> }
                </div>
              </div>
            </div>

            <div class="form-actions">
              <button type="button" class="btn btn-secondary" (click)="goBack()" [disabled]="loading()">\u2190 Back</button>
              <button type="submit" class="btn btn-primary" [disabled]="loading()">Continue \u2192</button>
            </div>
          </form>
        }

        <!-- \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
             STEP 3: Nominee Details
        \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        @if (step() === 3) {
          <form (ngSubmit)="goNext()" class="auth-form kyc-form">
            <div class="form-section">
              <h3>Nominee / Beneficiary</h3>

              <div class="form-row">
                <div class="form-group">
                  <label for="nomineeName">Nominee Full Name <span class="req">*</span></label>
                  <input type="text" id="nomineeName" class="form-control" [class.error]="errors.nomineeName"
                    [(ngModel)]="nomineeDetails.nomineeName" name="nomineeName" placeholder="Full legal name" />
                  @if (errors.nomineeName) { <span class="error-message">{{ errors.nomineeName }}</span> }
                </div>
                <div class="form-group">
                  <label for="nomineeRelation">Relationship <span class="req">*</span></label>
                  <select id="nomineeRelation" class="form-control" [class.error]="errors.nomineeRelation"
                    [(ngModel)]="nomineeDetails.nomineeRelation" name="nomineeRelation">
                    <option value="">Select relation...</option>
                    @for (r of nomineeRelations; track r.value) {
                      <option [value]="r.value">{{ r.label }}</option>
                    }
                  </select>
                  @if (errors.nomineeRelation) { <span class="error-message">{{ errors.nomineeRelation }}</span> }
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="nomineeAge">Age <span class="req">*</span></label>
                  <input type="number" id="nomineeAge" class="form-control" [class.error]="errors.nomineeAge"
                    [(ngModel)]="nomineeDetails.nomineeAge" name="nomineeAge"
                    placeholder="Age in years" min="1" max="120" />
                  @if (errors.nomineeAge) { <span class="error-message">{{ errors.nomineeAge }}</span> }
                </div>
                <div class="form-group">
                  <label for="nomineeMobileNumber">Mobile Number <span class="req">*</span></label>
                  <input type="tel" id="nomineeMobileNumber" class="form-control" [class.error]="errors.nomineeMobileNumber"
                    [(ngModel)]="nomineeDetails.nomineeMobileNumber" name="nomineeMobileNumber"
                    placeholder="10-digit number" maxlength="10" />
                  @if (errors.nomineeMobileNumber) { <span class="error-message">{{ errors.nomineeMobileNumber }}</span> }
                </div>
              </div>

              <div class="form-group">
                <label for="nomineeAddress">Nominee Address <span class="req">*</span></label>
                <textarea id="nomineeAddress" class="form-control" [class.error]="errors.nomineeAddress"
                  [(ngModel)]="nomineeDetails.nomineeAddress" name="nomineeAddress"
                  placeholder="Complete address of nominee" rows="3"></textarea>
                @if (errors.nomineeAddress) { <span class="error-message">{{ errors.nomineeAddress }}</span> }
              </div>
            </div>

            <div class="form-actions">
              <button type="button" class="btn btn-secondary" (click)="goBack()" [disabled]="loading()">\u2190 Back</button>
              <button type="submit" class="btn btn-primary" [disabled]="loading()">Continue \u2192</button>
            </div>
          </form>
        }

        <!-- \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
             STEP 4: Document Upload
        \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        @if (step() === 4) {
          <form (ngSubmit)="goNext()" class="auth-form kyc-form">

            <div class="form-section">
              <h3>Identity Documents</h3>

              <!-- Aadhaar -->
              <div class="form-group">
                <label>Aadhaar Card <span class="req">*</span> <span class="file-hint">(PDF/JPG/PNG, max 5MB)</span></label>
                <div class="file-upload">
                  @if (aadhaarCardFileName()) {
                    <div class="file-selected">
                      <span class="file-icon">\u{1F4CE}</span>
                      <span>{{ aadhaarCardFileName() }}</span>
                      <button type="button" class="file-remove" (click)="onRemoveFile('aadhaarCardFile')">\xD7</button>
                    </div>
                  } @else {
                    <label class="file-drop-zone" for="aadhaarCardFile">
                      <span class="upload-icon">\u{1F4E4}</span>
                      <span class="upload-text">Click to upload Aadhaar Card</span>
                      <span class="upload-hint">PDF, JPG, PNG \xB7 max 5MB</span>
                      <input type="file" id="aadhaarCardFile"
                        (change)="onFileSelect($event, 'aadhaarCardFile')"
                        accept=".pdf,.jpg,.jpeg,.png" />
                    </label>
                  }
                </div>
                @if (errors.aadhaarCardFile) { <span class="error-message">{{ errors.aadhaarCardFile }}</span> }
              </div>

              <!-- PAN -->
              <div class="form-group">
                <label>PAN Card <span class="req">*</span> <span class="file-hint">(PDF/JPG/PNG, max 5MB)</span></label>
                <div class="file-upload">
                  @if (panCardFileName()) {
                    <div class="file-selected">
                      <span class="file-icon">\u{1F4CE}</span>
                      <span>{{ panCardFileName() }}</span>
                      <button type="button" class="file-remove" (click)="onRemoveFile('panCardFile')">\xD7</button>
                    </div>
                  } @else {
                    <label class="file-drop-zone" for="panCardFile">
                      <span class="upload-icon">\u{1F4E4}</span>
                      <span class="upload-text">Click to upload PAN Card</span>
                      <span class="upload-hint">PDF, JPG, PNG \xB7 max 5MB</span>
                      <input type="file" id="panCardFile"
                        (change)="onFileSelect($event, 'panCardFile')"
                        accept=".pdf,.jpg,.jpeg,.png" />
                    </label>
                  }
                </div>
                @if (errors.panCardFile) { <span class="error-message">{{ errors.panCardFile }}</span> }
              </div>

              <!-- Passport (optional) -->
              <div class="form-group">
                <label>Passport <span class="optional-label">(Optional)</span></label>
                <div class="file-upload">
                  @if (passportFileName()) {
                    <div class="file-selected">
                      <span class="file-icon">\u{1F4CE}</span>
                      <span>{{ passportFileName() }}</span>
                      <button type="button" class="file-remove" (click)="onRemoveFile('passportFile')">\xD7</button>
                    </div>
                  } @else {
                    <label class="file-drop-zone" for="passportFile">
                      <span class="upload-icon">\u{1F4E4}</span>
                      <span class="upload-text">Click to upload Passport</span>
                      <span class="upload-hint">PDF, JPG, PNG \xB7 max 5MB</span>
                      <input type="file" id="passportFile"
                        (change)="onFileSelect($event, 'passportFile')"
                        accept=".pdf,.jpg,.jpeg,.png" />
                    </label>
                  }
                </div>
              </div>

              <!-- Voter ID (optional) -->
              <div class="form-group">
                <label>Voter ID <span class="optional-label">(Optional)</span></label>
                <div class="file-upload">
                  @if (voterIdFileName()) {
                    <div class="file-selected">
                      <span class="file-icon">\u{1F4CE}</span>
                      <span>{{ voterIdFileName() }}</span>
                      <button type="button" class="file-remove" (click)="onRemoveFile('voterIdFile')">\xD7</button>
                    </div>
                  } @else {
                    <label class="file-drop-zone" for="voterIdFile">
                      <span class="upload-icon">\u{1F4E4}</span>
                      <span class="upload-text">Click to upload Voter ID</span>
                      <span class="upload-hint">PDF, JPG, PNG \xB7 max 5MB</span>
                      <input type="file" id="voterIdFile"
                        (change)="onFileSelect($event, 'voterIdFile')"
                        accept=".pdf,.jpg,.jpeg,.png" />
                    </label>
                  }
                </div>
              </div>
            </div>

            <div class="form-section">
              <h3>Photo & Signature</h3>
              <!-- <div class="form-row"> -->
                <!-- Profile Photo -->
                <div class="form-group">
                  <label>Profile Photo <span class="req">*</span> <span class="file-hint">(JPG/PNG, max 2MB)</span></label>
                  <div class="file-upload">
                    @if (profilePhotoName()) {
                      <div class="file-selected">
                        <span class="file-icon">\u{1F5BC}\uFE0F</span>
                        <span>{{ profilePhotoName() }}</span>
                        <button type="button" class="file-remove" (click)="onRemoveFile('profilePhoto')">\xD7</button>
                      </div>
                    } @else {
                      <label class="file-drop-zone" for="profilePhoto">
                        <span class="upload-icon">\u{1F933}</span>
                        <span class="upload-text">Upload Photo</span>
                        <span class="upload-hint">JPG, PNG \xB7 max 2MB</span>
                        <input type="file" id="profilePhoto"
                          (change)="onFileSelect($event, 'profilePhoto', true)"
                          accept=".jpg,.jpeg,.png" />
                      </label>
                    }
                  </div>
                  @if (errors.profilePhoto) { <span class="error-message">{{ errors.profilePhoto }}</span> }
                </div>
                  
                <!-- Signature -->
                <div class="form-group">
                  <label>Signature Image <span class="req">*</span> <span class="file-hint">(JPG/PNG, max 2MB)</span></label>
                  <div class="file-upload">
                    @if (signatureImageName()) {
                      <div class="file-selected">
                        <span class="file-icon">\u270D\uFE0F</span>
                        <span>{{ signatureImageName() }}</span>
                        <button type="button" class="file-remove" (click)="onRemoveFile('signatureImage')">\xD7</button>
                      </div>
                    } @else {
                      <label class="file-drop-zone" for="signatureImage">
                        <span class="upload-icon">\u270D\uFE0F</span>
                        <span class="upload-text">Upload Signature</span>
                        <span class="upload-hint">JPG, PNG \xB7 max 2MB</span>
                        <input type="file" id="signatureImage"
                          (change)="onFileSelect($event, 'signatureImage', true)"
                          accept=".jpg,.jpeg,.png" />
                      </label>
                    }
                  </div>
                  @if (errors.signatureImage) { <span class="error-message">{{ errors.signatureImage }}</span> }
                </div>
              <!-- </div> -->
            </div>

            <div class="form-section">
              <h3>Address Proof</h3>
              <div class="form-group">
                <label>Address Proof Document <span class="req">*</span> <span class="file-hint">(PDF/JPG/PNG, max 5MB)</span></label>
                <div class="file-upload">
                  @if (addressProofDocumentName()) {
                    <div class="file-selected">
                      <span class="file-icon">\u{1F4CE}</span>
                      <span>{{ addressProofDocumentName() }}</span>
                      <button type="button" class="file-remove" (click)="onRemoveFile('addressProofDocument')">\xD7</button>
                    </div>
                  } @else {
                    <label class="file-drop-zone" for="addressProofDocument">
                      <span class="upload-icon">\u{1F3E0}</span>
                      <span class="upload-text">Upload Address Proof</span>
                      <span class="upload-hint">Utility bill, bank statement, etc.</span>
                      <input type="file" id="addressProofDocument"
                        (change)="onFileSelect($event, 'addressProofDocument')"
                        accept=".pdf,.jpg,.jpeg,.png" />
                    </label>
                  }
                </div>
                @if (errors.addressProofDocument) { <span class="error-message">{{ errors.addressProofDocument }}</span> }
              </div>
            </div>

            <div class="form-actions">
              <button type="button" class="btn btn-secondary" (click)="goBack()" [disabled]="loading()">\u2190 Back</button>
              <button type="submit" class="btn btn-primary" [disabled]="loading()">Continue \u2192</button>
            </div>
          </form>
        }

        <!-- \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
             STEP 5: Review & Submit
        \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        @if (step() === 5) {
          <form (ngSubmit)="submitApplication()" class="auth-form kyc-form">

            <!-- Customer Details Review -->
            <div class="form-section review-section">
              <h3>Personal Information</h3>
              <div class="review-grid">
                <div class="review-item"><span>Account Type</span><strong>{{ customerDetails.accountType || '\u2014' }}</strong></div>
                <div class="review-item"><span>Full Name</span><strong>{{ customerDetails.fullName || '\u2014' }}</strong></div>
                <div class="review-item"><span>Father's Name</span><strong>{{ customerDetails.fatherName || '\u2014' }}</strong></div>
                <div class="review-item"><span>Mother's Name</span><strong>{{ customerDetails.motherName || '\u2014' }}</strong></div>
                <div class="review-item"><span>Date of Birth</span><strong>{{ customerDetails.dateOfBirth || '\u2014' }}</strong></div>
                <div class="review-item"><span>Gender</span><strong>{{ customerDetails.gender || '\u2014' }}</strong></div>
                <div class="review-item"><span>Marital Status</span><strong>{{ customerDetails.maritalStatus || '\u2014' }}</strong></div>
                <div class="review-item"><span>Nationality</span><strong>{{ customerDetails.nationality || '\u2014' }}</strong></div>
                <div class="review-item"><span>Occupation</span><strong>{{ customerDetails.occupation || '\u2014' }}</strong></div>
                <div class="review-item"><span>Annual Income</span><strong>{{ customerDetails.annualIncome ? '\u20B9' + customerDetails.annualIncome : '\u2014' }}</strong></div>
                <div class="review-item"><span>Mobile</span><strong>{{ customerDetails.phoneNumber || '\u2014' }}</strong></div>
                <div class="review-item"><span>Email</span><strong>{{ customerDetails.emailId || '\u2014' }}</strong></div>
                <div class="review-item"><span>Aadhaar No</span><strong>{{ customerDetails.aadhaarNumber ? '\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022' + customerDetails.aadhaarNumber.slice(-4) : '\u2014' }}</strong></div>
                <div class="review-item"><span>PAN No</span><strong>{{ customerDetails.panNumber || '\u2014' }}</strong></div>
              </div>
            </div>

            <!-- Address Review -->
            <div class="form-section review-section">
              <h3>Address Details</h3>
              <div class="address-review">
                <div class="address-block">
                  <div class="address-label">Current Address</div>
                  <div class="address-text">
                    {{ addressDetails.currentAddressLine }}<br>
                    {{ addressDetails.currentCity }}, {{ addressDetails.currentState }} \u2013 {{ addressDetails.currentPincode }}
                  </div>
                </div>
                <div class="address-block">
                  <div class="address-label">Permanent Address</div>
                  <div class="address-text">
                    {{ addressDetails.permanentAddressLine }}<br>
                    {{ addressDetails.permanentCity }}, {{ addressDetails.permanentState }} \u2013 {{ addressDetails.permanentPincode }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Nominee Review -->
            <div class="form-section review-section">
              <h3>Nominee Details</h3>
              <div class="review-grid">
                <div class="review-item"><span>Name</span><strong>{{ nomineeDetails.nomineeName || '\u2014' }}</strong></div>
                <div class="review-item"><span>Relation</span><strong>{{ nomineeDetails.nomineeRelation || '\u2014' }}</strong></div>
                <div class="review-item"><span>Age</span><strong>{{ nomineeDetails.nomineeAge || '\u2014' }}</strong></div>
                <div class="review-item"><span>Mobile</span><strong>{{ nomineeDetails.nomineeMobileNumber || '\u2014' }}</strong></div>
              </div>
              <div class="review-item full-width">
                <span>Address</span><strong>{{ nomineeDetails.nomineeAddress || '\u2014' }}</strong>
              </div>
            </div>

            <!-- Documents Review -->
            <div class="form-section review-section">
              <h3>Uploaded Documents</h3>
              <div class="review-grid">
                <div class="review-item"><span>Aadhaar Card</span>
                  <strong [class.uploaded]="documents.aadhaarCardFile" [class.not-uploaded]="!documents.aadhaarCardFile">
                    {{ aadhaarCardFileName() || '\u2717 Not uploaded' }}
                  </strong>
                </div>
                <div class="review-item"><span>PAN Card</span>
                  <strong [class.uploaded]="documents.panCardFile" [class.not-uploaded]="!documents.panCardFile">
                    {{ panCardFileName() || '\u2717 Not uploaded' }}
                  </strong>
                </div>
                <div class="review-item"><span>Passport</span>
                  <strong [class.uploaded]="documents.passportFile" [class.optional-doc]="!documents.passportFile">
                    {{ passportFileName() || 'Not provided' }}
                  </strong>
                </div>
                <div class="review-item"><span>Voter ID</span>
                  <strong [class.uploaded]="documents.voterIdFile" [class.optional-doc]="!documents.voterIdFile">
                    {{ voterIdFileName() || 'Not provided' }}
                  </strong>
                </div>
                <div class="review-item"><span>Profile Photo</span>
                  <strong [class.uploaded]="documents.profilePhoto" [class.not-uploaded]="!documents.profilePhoto">
                    {{ profilePhotoName() || '\u2717 Not uploaded' }}
                  </strong>
                </div>
                <div class="review-item"><span>Signature</span>
                  <strong [class.uploaded]="documents.signatureImage" [class.not-uploaded]="!documents.signatureImage">
                    {{ signatureImageName() || '\u2717 Not uploaded' }}
                  </strong>
                </div>
                <div class="review-item"><span>Address Proof</span>
                  <strong [class.uploaded]="documents.addressProofDocument" [class.not-uploaded]="!documents.addressProofDocument">
                    {{ addressProofDocumentName() || '\u2717 Not uploaded' }}
                  </strong>
                </div>
              </div>
            </div>

            <!-- Captcha -->
            <div class="form-section">
              <h3>Captcha Verification</h3>
              <div class="captcha-wrap">
                <div class="captcha-display">
                  <span class="captcha-code" aria-hidden="true">{{ captchaCode() }}</span>
                  <button type="button" class="captcha-refresh" (click)="refreshCaptcha()" title="Refresh">\u21BA</button>
                </div>
                <div class="form-group captcha-input-group">
                  <label for="captchaInput">Type the characters above <span class="req">*</span></label>
                  <input type="text" id="captchaInput" class="form-control" [class.error]="errors.captcha"
                    [(ngModel)]="captchaUserInput" name="captchaInput"
                    placeholder="Enter captcha" autocomplete="off" />
                  @if (errors.captcha) { <span class="error-message">{{ errors.captcha }}</span> }
                </div>
              </div>

              <!-- Confirm checkbox -->
              <div class="confirm-wrap" [class.has-error]="errors.confirmCheck">
                <label class="confirm-label">
                  <input type="checkbox" [(ngModel)]="confirmCheck" name="confirmCheck" />
                  <span>I confirm that all the information provided is accurate and complete. I understand that providing false information may result in rejection of my application.</span>
                </label>
                @if (errors.confirmCheck) { <span class="error-message">{{ errors.confirmCheck }}</span> }
              </div>
            </div>

            <div class="form-actions">
              <button type="button" class="btn btn-secondary" (click)="goBack()" [disabled]="loading()">\u2190 Back</button>
              <button type="submit" class="btn btn-primary" [disabled]="loading()">
                @if (loading()) { <span class="spinner"></span> Processing... } @else { Submit Application }
              </button>
            </div>
          </form>
        }

        <div class="auth-footer">
          <p>Already have an account? <a routerLink="/login">Sign in</a></p>
        </div>

      </div><!-- /auth-card -->
    </div><!-- /auth-container -->

    <!-- RIGHT: Visual Panel -->
    <div class="auth-visual">
      <div class="visual-content">
        <h2>Start Your Banking Journey</h2>
        <p>Experience the future of digital banking with NeoBank</p>
        <div class="features-list">
          <div class="feature"><span class="feature-icon">\u{1F4B3}</span><span>Multi-Account Support</span></div>
          <div class="feature"><span class="feature-icon">\u26A1</span><span>Instant Transfers</span></div>
          <div class="feature"><span class="feature-icon">\u{1F4CA}</span><span>Smart Analytics</span></div>
          <div class="feature"><span class="feature-icon">\u{1F512}</span><span>Bank-Grade Security</span></div>
        </div>
        <div class="step-hint">
          <div class="step-hint-num">{{ step() }}/{{ totalSteps }}</div>
          <div class="step-hint-label">{{ getStepTitle() }}</div>
        </div>
      </div>
    </div>

  </div><!-- /auth-page -->
}`, styles: [`/* src/app/features/auth/register-multi/register-multi.component.css */
.logo-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
}
.logo {
  margin-bottom: 0;
}
.theme-toggle-btn {
  background: none;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  width: 36px;
  height: 36px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  flex-shrink: 0;
}
.theme-toggle-btn:hover {
  border-color: #6366f1;
  background: #f5f3ff;
  transform: scale(1.05);
}
.auth-page {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.auth-container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px 48px;
  background: var(--light);
  overflow-y: auto;
}
.success-container {
  align-items: center;
}
.auth-card {
  width: 100%;
  max-width: 480px;
  padding-bottom: 48px;
}
.logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  margin-bottom: 28px;
}
.logo-icon {
  width: 38px;
  height: 38px;
  background:
    linear-gradient(
      135deg,
      #6366f1 0%,
      #8b5cf6 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 18px;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
}
.logo-text {
  font-size: 20px;
  font-weight: 700;
  background:
    linear-gradient(
      135deg,
      #6366f1 0%,
      #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.auth-header {
  margin-bottom: 20px;
}
.auth-header h1 {
  font-size: 26px;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 6px;
}
.auth-header p {
  color: var(--gray);
  font-size: 14px;
}
.progress-track {
  height: 4px;
  background: #e5e7eb;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 6px;
}
.progress-fill {
  height: 100%;
  background:
    linear-gradient(
      90deg,
      #6366f1,
      #8b5cf6);
  border-radius: 2px;
  transition: width 0.4s ease;
}
.progress-label {
  font-size: 12px;
  color: var(--gray);
  margin-bottom: 20px;
  text-align: right;
}
.steps {
  display: flex;
  align-items: center;
  margin-bottom: 28px;
  overflow-x: auto;
  padding-bottom: 4px;
}
.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;
}
.step-number {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 13px;
  color: var(--gray);
  transition: all 0.3s ease;
}
.step.active .step-number {
  background: var(--primary);
  color: white;
  box-shadow: 0 4px 10px rgba(99, 102, 241, 0.35);
}
.step.completed .step-number {
  background: #10b981;
  color: white;
}
.step-label {
  font-size: 10px;
  color: var(--gray);
  letter-spacing: 0.3px;
  white-space: nowrap;
}
.step.active .step-label {
  color: var(--dark);
  font-weight: 600;
}
.step.completed .step-label {
  color: #10b981;
}
.step-line {
  flex: 1;
  height: 2px;
  background: #e5e7eb;
  margin: 0 6px;
  margin-bottom: 20px;
  min-width: 16px;
  transition: background 0.3s ease;
}
.step-line.active {
  background: #10b981;
}
.alert {
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 18px;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.alert-error {
  background: #fef2f2;
  color: var(--danger);
  border: 1px solid #fecaca;
}
.alert-success {
  background: #f0fdf4;
  color: #16a34a;
  border: 1px solid #bbf7d0;
}
.auth-form {
  margin-bottom: 20px;
}
.kyc-form {
  max-height: 72vh;
  overflow-y: auto;
  padding-right: 4px;
}
.kyc-form::-webkit-scrollbar {
  width: 5px;
}
.kyc-form::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}
.kyc-form::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 4px;
}
.form-section {
  margin-bottom: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f0f0f5;
}
.form-section:last-of-type {
  border-bottom: none;
}
.form-section h3 {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: var(--primary);
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid #ede9fe;
}
.form-group {
  margin-bottom: 14px;
}
.form-group:last-child {
  margin-bottom: 0;
}
label {
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: var(--dark);
  margin-bottom: 5px;
}
.req {
  color: #ef4444;
  margin-left: 2px;
}
.optional-label {
  color: var(--gray);
  font-weight: 400;
  font-size: 12px;
}
.file-hint {
  color: var(--gray);
  font-weight: 400;
  font-size: 11px;
}
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-bottom: 14px;
}
.form-row .form-group {
  margin-bottom: 0;
}
.form-row-3 {
  grid-template-columns: 1fr 1fr 1fr;
}
.form-control {
  width: 100%;
  padding: 9px 13px;
  border: 1.5px solid var(--input-border, #d1d5db);
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
  color: var(--input-color, var(--dark));
  background: var(--input-bg, #ffffff);
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  appearance: none;
}
.form-control::placeholder {
  color: var(--input-placeholder, #9ca3af);
}
.form-control:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);
}
.form-control.error {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}
.form-control:disabled {
  background: var(--input-disabled-bg, #f9fafb);
  color: var(--gray);
  cursor: not-allowed;
}
select.form-control {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236b7280' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-color: var(--input-bg, #ffffff);
  padding-right: 36px;
}
textarea.form-control {
  resize: vertical;
  min-height: 80px;
}
.error-message {
  display: block;
  font-size: 12px;
  color: #ef4444;
  margin-top: 4px;
}
.password-field {
  position: relative;
}
.password-field .form-control {
  padding-right: 60px;
}
.toggle-password {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--primary);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
}
.file-drop-zone {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 18px 16px;
  border: 2px dashed var(--input-border, #d1d5db);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
  background: var(--input-bg, #fafafa);
  text-align: center;
}
.file-drop-zone:hover {
  border-color: var(--primary);
  background: #f5f3ff;
}
.file-drop-zone input[type=file] {
  display: none;
}
.upload-icon {
  font-size: 22px;
}
.upload-text {
  font-size: 13px;
  font-weight: 500;
  color: var(--dark);
}
.upload-hint {
  font-size: 11px;
  color: var(--gray);
}
.file-selected {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 8px;
}
.file-icon {
  font-size: 16px;
  flex-shrink: 0;
}
.file-selected span:nth-child(2) {
  flex: 1;
  font-size: 13px;
  color: #15803d;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.file-remove {
  background: none;
  border: none;
  color: #9ca3af;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  transition: color 0.2s;
}
.file-remove:hover {
  color: #ef4444;
}
.same-address-check {
  margin-bottom: 14px;
}
.same-address-check label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 13px;
  color: var(--dark);
  font-weight: 400;
}
.same-address-check input[type=checkbox] {
  width: 16px;
  height: 16px;
  accent-color: var(--primary);
  cursor: pointer;
}
.review-section .form-section {
  background: var(--review-section-bg, #fafafa);
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 14px;
  border: 1px solid var(--input-border, #f0f0f5);
}
.review-section .form-section h3 {
  margin-bottom: 14px;
}
.review-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.review-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 8px 12px;
  background: var(--input-bg, #ffffff);
  border-radius: 8px;
  border: 1px solid var(--input-border, #e5e7eb);
}
.review-item > span:first-child {
  font-size: 11px;
  color: var(--gray);
  font-weight: 500;
  letter-spacing: 0.2px;
}
.review-item strong {
  font-size: 13px;
  color: var(--dark);
  font-weight: 600;
  word-break: break-word;
}
.review-item strong.uploaded {
  color: #16a34a;
}
.review-item strong.not-uploaded {
  color: #ef4444;
}
.review-item strong.optional-doc {
  color: var(--gray);
  font-weight: 400;
  font-style: italic;
}
.full-width {
  grid-column: 1 / -1;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
}
.full-width > span:first-child {
  flex-shrink: 0;
  min-width: 100px;
  margin-top: 2px;
}
.address-review {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.address-block {
  padding: 12px 14px;
  background: var(--input-bg, #ffffff);
  border-radius: 8px;
  border: 1px solid var(--input-border, #e5e7eb);
}
.address-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--primary);
  margin-bottom: 6px;
}
.address-text {
  font-size: 13px;
  color: var(--dark);
  line-height: 1.6;
}
.captcha-wrap {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  margin-bottom: 16px;
}
.captcha-display {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}
.captcha-code {
  font-family: "Courier New", monospace;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 8px;
  color: var(--dark);
  background: var(--captcha-bg, linear-gradient(135deg, #f0f0f8 0%, #e8e8f8 100%));
  padding: 8px 14px;
  border-radius: 8px;
  border: 1.5px solid var(--input-border, #d1d5db);
  font-style: italic;
  -webkit-user-select: none;
  user-select: none;
  display: block;
  min-width: 140px;
}
.captcha-refresh {
  background: var(--input-bg, white);
  border: 1.5px solid var(--input-border, #d1d5db);
  border-radius: 8px;
  color: var(--gray);
  font-size: 18px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.captcha-refresh:hover {
  border-color: var(--primary);
  color: var(--primary);
}
.captcha-input-group {
  flex: 1;
  margin-bottom: 0;
}
.confirm-wrap {
  padding: 14px 16px;
  background: var(--confirm-bg, #fffbeb);
  border: 1px solid var(--confirm-border, #fde68a);
  border-radius: 10px;
  margin-top: 4px;
}
.confirm-wrap.has-error {
  border-color: #fecaca;
  background: #fef2f2;
}
.confirm-label {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
  font-size: 13px;
  color: var(--confirm-text, #78716c);
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 0;
}
.confirm-label input[type=checkbox] {
  margin-top: 2px;
  width: 16px;
  height: 16px;
  accent-color: var(--primary);
  cursor: pointer;
  flex-shrink: 0;
}
.form-actions {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}
.form-actions .btn {
  flex: 1;
}
.form-actions.single .btn {
  width: 100%;
}
.btn {
  padding: 11px 24px;
  border-radius: 9px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  font-family: inherit;
  letter-spacing: 0.2px;
}
.btn-primary {
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #8b5cf6);
  color: white;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.28);
}
.btn-primary:hover:not(:disabled) {
  background:
    linear-gradient(
      135deg,
      #4f46e5,
      #7c3aed);
  box-shadow: 0 6px 16px rgba(99, 102, 241, 0.38);
  transform: translateY(-1px);
}
.btn-primary:active:not(:disabled) {
  transform: translateY(0);
}
.btn-primary:disabled {
  opacity: 0.55;
  cursor: not-allowed;
  transform: none;
}
.btn-secondary {
  background: var(--input-bg, white);
  color: var(--dark);
  border: 1.5px solid var(--input-border, #d1d5db);
}
.btn-secondary:hover:not(:disabled) {
  background: var(--light);
  border-color: #9ca3af;
}
.btn-secondary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.btn-outline {
  background: transparent;
  color: var(--primary);
  border: 1.5px solid var(--primary);
}
.btn-outline:hover {
  background: #f5f3ff;
}
.w-full {
  width: 100%;
}
.spinner {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  margin-right: 7px;
  vertical-align: middle;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.auth-footer {
  text-align: center;
  margin-top: 24px;
}
.auth-footer p {
  font-size: 14px;
  color: var(--gray);
}
.auth-footer a {
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
}
.auth-footer a:hover {
  text-decoration: underline;
}
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  animation: fadeIn 0.2s ease;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.modal-box {
  background: var(--modal-bg, white);
  color: var(--dark);
  border-radius: 20px;
  padding: 36px;
  width: 420px;
  max-width: 90vw;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  animation: slideUp 0.25s ease;
  text-align: center;
}
@keyframes slideUp {
  from {
    transform: translateY(24px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.modal-icon {
  font-size: 36px;
  margin-bottom: 12px;
}
.modal-box h3 {
  font-size: 20px;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 10px;
}
.modal-sub {
  font-size: 13px;
  color: var(--gray);
  line-height: 1.6;
  margin-bottom: 20px;
}
.demo-note {
  color: #f59e0b;
  font-size: 12px;
  display: block;
  margin-top: 4px;
  font-style: normal;
  font-weight: 500;
}
.otp-input {
  text-align: center !important;
  font-size: 26px !important;
  letter-spacing: 10px !important;
  font-weight: 700 !important;
  font-family: "Courier New", monospace !important;
}
.modal-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
.modal-actions .btn {
  flex: 1;
}
.modal-footer-note {
  font-size: 12px;
  color: var(--gray);
  margin-top: 14px;
  text-align: center;
}
.link-btn {
  background: none;
  border: none;
  color: var(--primary);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
}
.link-btn:hover {
  text-decoration: underline;
}
.success-card {
  width: 100%;
  max-width: 480px;
  text-align: center;
}
.success-icon-wrap {
  margin-bottom: 20px;
}
.success-icon {
  width: 72px;
  height: 72px;
  background:
    linear-gradient(
      135deg,
      #10b981,
      #059669);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  font-weight: 700;
  margin: 0 auto;
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.35);
}
.success-title {
  font-size: 26px;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 8px;
}
.success-sub {
  font-size: 14px;
  color: var(--gray);
  line-height: 1.6;
  margin-bottom: 24px;
}
.app-id-badge {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background:
    linear-gradient(
      135deg,
      #f5f3ff,
      #ede9fe);
  border: 1.5px solid #c4b5fd;
  border-radius: 12px;
  padding: 12px 24px;
  margin-bottom: 24px;
}
.app-id-label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #7c3aed;
}
.app-id-value {
  font-family: "Courier New", monospace;
  font-size: 20px;
  font-weight: 700;
  color: #6d28d9;
  letter-spacing: 3px;
}
.success-details-card {
  background: var(--input-bg, white);
  border: 1px solid var(--input-border, #e5e7eb);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 24px;
  text-align: left;
}
.success-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px 16px;
  border-bottom: 1px solid var(--input-border, #f3f4f6);
  font-size: 13px;
}
.success-row:last-child {
  border-bottom: none;
}
.success-row > span:first-child {
  color: var(--gray);
  font-weight: 500;
}
.success-row strong {
  color: var(--dark);
  font-weight: 600;
}
.status-badge {
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  color: #16a34a;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
  letter-spacing: 0.3px;
}
.success-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}
.auth-visual {
  background: var(--bg-gradient, linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 40px;
  color: white;
  position: sticky;
  top: 0;
  height: 100vh;
}
.visual-content {
  max-width: 380px;
  text-align: center;
}
.visual-check {
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 700;
  margin: 0 auto 20px;
}
.visual-content h2 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 14px;
  line-height: 1.25;
}
.visual-content > p {
  font-size: 16px;
  opacity: 0.85;
  margin-bottom: 40px;
  line-height: 1.6;
}
.features-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 36px;
}
.feature {
  background: rgba(255, 255, 255, 0.12);
  padding: 14px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 15px;
  font-weight: 500;
  transition: background 0.2s;
}
.feature:hover {
  background: rgba(255, 255, 255, 0.18);
}
.feature-icon {
  font-size: 22px;
}
.step-hint {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
}
.step-hint-num {
  font-size: 28px;
  font-weight: 700;
  opacity: 0.7;
  line-height: 1;
}
.step-hint-label {
  font-size: 15px;
  font-weight: 600;
  opacity: 0.9;
}
@media (max-width: 1024px) {
  .auth-page {
    grid-template-columns: 1fr;
  }
  .auth-visual {
    display: none;
  }
  .auth-container {
    padding: 32px 24px;
    align-items: flex-start;
  }
  .form-row-3 {
    grid-template-columns: 1fr 1fr;
  }
  .kyc-form {
    max-height: none;
    overflow-y: visible;
  }
}
@media (max-width: 600px) {
  .auth-container {
    padding: 24px 16px;
  }
  .form-row,
  .form-row-3 {
    grid-template-columns: 1fr;
  }
  .review-grid,
  .address-review {
    grid-template-columns: 1fr;
  }
  .captcha-wrap {
    flex-direction: column;
  }
  .steps {
    gap: 0;
  }
  .step-line {
    min-width: 10px;
  }
}
.step.clickable {
  cursor: pointer;
}
.step.clickable:hover .step-number {
  transform: scale(1.1);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25);
  transition: all 0.2s ease;
}
.step.clickable:hover .step-label {
  color: #6366f1;
  transition: color 0.2s ease;
}
.success-popup {
  max-width: 480px;
  text-align: center;
}
.success-popup-icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}
.auto-download-note {
  font-size: 0.78rem;
  color: #6366f1;
  margin: 0.75rem 0 0;
  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}
/*# sourceMappingURL=register-multi.component.css.map */
`] }]
  }], () => [{ type: ApplicationService }, { type: Router }, { type: ActivatedRoute }, { type: NotificationService }, { type: ThemeService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterMultiComponent, { className: "RegisterMultiComponent", filePath: "app/features/auth/register-multi/register-multi.component.ts", lineNumber: 121 });
})();
export {
  RegisterMultiComponent
};
//# sourceMappingURL=chunk-W7XOD7TV.js.map
