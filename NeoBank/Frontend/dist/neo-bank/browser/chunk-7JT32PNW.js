import {
  ApplicationService
} from "./chunk-AO72TSPP.js";
import {
  ThemeService
} from "./chunk-3UVNMLKZ.js";
import {
  RouterLink
} from "./chunk-5EBQK35F.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel
} from "./chunk-D2A5YED7.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QR452MNT.js";

// src/app/features/landing/landing.ts
function Landing_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275listener("click", function Landing_Conditional_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275elementEnd();
  }
}
function Landing_Conditional_37_Conditional_7_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusError());
  }
}
function Landing_Conditional_37_Conditional_7_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 87);
    \u0275\u0275text(1, " Sending... ");
  }
}
function Landing_Conditional_37_Conditional_7_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Send OTP \u2192 ");
  }
}
function Landing_Conditional_37_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "p", 81);
    \u0275\u0275text(2, " Enter your ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "Application ID");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " (e.g. NB20260000001) or ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7, "registered Email");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " to receive an OTP. ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, Landing_Conditional_37_Conditional_7_Conditional_9_Template, 2, 1, "div", 82);
    \u0275\u0275elementStart(10, "div", 83)(11, "label");
    \u0275\u0275text(12, "Application ID or Email ");
    \u0275\u0275elementStart(13, "span", 84);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function Landing_Conditional_37_Conditional_7_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function Landing_Conditional_37_Conditional_7_Template_input_keyup_enter_15_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendStatusOtp());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 86);
    \u0275\u0275listener("click", function Landing_Conditional_37_Conditional_7_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendStatusOtp());
    });
    \u0275\u0275conditionalCreate(17, Landing_Conditional_37_Conditional_7_Conditional_17_Template, 2, 0)(18, Landing_Conditional_37_Conditional_7_Conditional_18_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.statusError() ? 9 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.statusLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.statusLoading() ? 17 : 18);
  }
}
function Landing_Conditional_37_Conditional_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusError());
  }
}
function Landing_Conditional_37_Conditional_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusSuccess());
  }
}
function Landing_Conditional_37_Conditional_8_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 87);
    \u0275\u0275text(1, " Verifying... ");
  }
}
function Landing_Conditional_37_Conditional_8_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Verify & View Status ");
  }
}
function Landing_Conditional_37_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 88);
    \u0275\u0275text(2, "\u{1F510}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 81);
    \u0275\u0275text(4, " A 6-digit OTP has been sent to your registered email.");
    \u0275\u0275element(5, "br");
    \u0275\u0275text(6, " Enter it below to view your application details. ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, Landing_Conditional_37_Conditional_8_Conditional_7_Template, 2, 1, "div", 82);
    \u0275\u0275conditionalCreate(8, Landing_Conditional_37_Conditional_8_Conditional_8_Template, 2, 1, "div", 89);
    \u0275\u0275elementStart(9, "div", 83)(10, "label");
    \u0275\u0275text(11, "Enter OTP ");
    \u0275\u0275elementStart(12, "span", 84);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "input", 90);
    \u0275\u0275twoWayListener("ngModelChange", function Landing_Conditional_37_Conditional_8_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.statusOtp, $event) || (ctx_r1.statusOtp = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function Landing_Conditional_37_Conditional_8_Template_input_keyup_enter_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.verifyStatusOtp());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 86);
    \u0275\u0275listener("click", function Landing_Conditional_37_Conditional_8_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.verifyStatusOtp());
    });
    \u0275\u0275conditionalCreate(16, Landing_Conditional_37_Conditional_8_Conditional_16_Template, 2, 0)(17, Landing_Conditional_37_Conditional_8_Conditional_17_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 91)(19, "button", 92);
    \u0275\u0275listener("click", function Landing_Conditional_37_Conditional_8_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goBackToInput());
    });
    \u0275\u0275text(20, "\u2190 Change ID / Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 93);
    \u0275\u0275listener("click", function Landing_Conditional_37_Conditional_8_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resendStatusOtp());
    });
    \u0275\u0275text(24, " Resend OTP ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.statusError() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.statusSuccess() ? 8 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.statusOtp);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.statusLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.statusLoading() ? 16 : 17);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r1.statusLoading());
  }
}
function Landing_Conditional_37_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 94)(2, "span", 95);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 96);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 97);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 98)(10, "span", 99);
    \u0275\u0275text(11, "Application ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 100);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 101)(15, "h4", 102);
    \u0275\u0275text(16, "Personal Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 103)(18, "div", 104)(19, "span");
    \u0275\u0275text(20, "Account Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "strong");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 104)(24, "span");
    \u0275\u0275text(25, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "strong");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 104)(29, "span");
    \u0275\u0275text(30, "Father's Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "strong");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 104)(34, "span");
    \u0275\u0275text(35, "Mother's Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "strong");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 104)(39, "span");
    \u0275\u0275text(40, "Date of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "strong");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 104)(44, "span");
    \u0275\u0275text(45, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "strong");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 104)(49, "span");
    \u0275\u0275text(50, "Marital Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "strong");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 104)(54, "span");
    \u0275\u0275text(55, "Nationality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "strong");
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 104)(59, "span");
    \u0275\u0275text(60, "Occupation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "strong");
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 104)(64, "span");
    \u0275\u0275text(65, "Annual Income");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "strong");
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 104)(69, "span");
    \u0275\u0275text(70, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "strong");
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 104)(74, "span");
    \u0275\u0275text(75, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "strong");
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 104)(79, "span");
    \u0275\u0275text(80, "Aadhaar No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "strong");
    \u0275\u0275text(82);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 104)(84, "span");
    \u0275\u0275text(85, "PAN No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "strong");
    \u0275\u0275text(87);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(88, "div", 101)(89, "h4", 102);
    \u0275\u0275text(90, "Address Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 105)(92, "div", 106)(93, "div", 107);
    \u0275\u0275text(94, "Current Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 108);
    \u0275\u0275text(96);
    \u0275\u0275element(97, "br");
    \u0275\u0275text(98);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "div", 106)(100, "div", 107);
    \u0275\u0275text(101, "Permanent Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "div", 108);
    \u0275\u0275text(103);
    \u0275\u0275element(104, "br");
    \u0275\u0275text(105);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(106, "div", 101)(107, "h4", 102);
    \u0275\u0275text(108, "Nominee Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "div", 103)(110, "div", 104)(111, "span");
    \u0275\u0275text(112, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "strong");
    \u0275\u0275text(114);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(115, "div", 104)(116, "span");
    \u0275\u0275text(117, "Relation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "strong");
    \u0275\u0275text(119);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(120, "div", 104)(121, "span");
    \u0275\u0275text(122, "Age");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "strong");
    \u0275\u0275text(124);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(125, "div", 104)(126, "span");
    \u0275\u0275text(127, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "strong");
    \u0275\u0275text(129);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(130, "div", 109)(131, "span");
    \u0275\u0275text(132, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "strong");
    \u0275\u0275text(134);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(135, "div", 110)(136, "span");
    \u0275\u0275text(137, "Submitted On");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "strong");
    \u0275\u0275text(139);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(140, "button", 111);
    \u0275\u0275listener("click", function Landing_Conditional_37_Conditional_9_Template_button_click_140_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goBackToInput());
    });
    \u0275\u0275text(141, " \u2190 Check Another Application ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusClass(ctx_r1.statusResult().status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getStatusIcon(ctx_r1.statusResult().status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.statusResult().status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getStatusMessage(ctx_r1.statusResult().status));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.statusResult().applicationId);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.statusResult().accountType);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.statusResult().fullName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.statusResult().fatherName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.statusResult().motherName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.statusResult().dateOfBirth);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.statusResult().gender);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.statusResult().maritalStatus || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.statusResult().nationality || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.statusResult().occupation);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.statusResult().annualIncome ? "\u20B9" + ctx_r1.statusResult().annualIncome : "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.statusResult().phoneNumber);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.statusResult().emailId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.statusResult().aadhaarNumber);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.statusResult().panNumber);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r1.statusResult().currentAddressLine);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx_r1.statusResult().currentCity, ", ", ctx_r1.statusResult().currentState, " \u2013 ", ctx_r1.statusResult().currentPincode, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.statusResult().permanentAddressLine);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx_r1.statusResult().permanentCity, ", ", ctx_r1.statusResult().permanentState, " \u2013 ", ctx_r1.statusResult().permanentPincode, " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.statusResult().nomineeName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.statusResult().nomineeRelation);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.statusResult().nomineeAge);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.statusResult().nomineeMobileNumber);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.statusResult().nomineeAddress);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.statusResult().submittedOn);
  }
}
function Landing_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275listener("click", function Landing_Conditional_37_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeStatusPopup());
    });
    \u0275\u0275elementStart(1, "div", 77);
    \u0275\u0275listener("click", function Landing_Conditional_37_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 78)(3, "h3");
    \u0275\u0275text(4, "\u{1F50D} Application Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 79);
    \u0275\u0275listener("click", function Landing_Conditional_37_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeStatusPopup());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, Landing_Conditional_37_Conditional_7_Template, 19, 4, "div", 80);
    \u0275\u0275conditionalCreate(8, Landing_Conditional_37_Conditional_8_Template, 25, 6, "div", 80);
    \u0275\u0275conditionalCreate(9, Landing_Conditional_37_Conditional_9_Template, 142, 34, "div", 80);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.statusStep() === "input" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.statusStep() === "otp" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.statusStep() === "result" && ctx_r1.statusResult() ? 9 : -1);
  }
}
function Landing_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nav", 112)(1, "a", 113);
    \u0275\u0275text(2, "Features");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 114);
    \u0275\u0275text(4, "About");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 115);
    \u0275\u0275text(6, "Contact");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 22)(8, "a", 116);
    \u0275\u0275text(9, "Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 117);
    \u0275\u0275text(11, "Get Started");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 118);
    \u0275\u0275text(13, "Open Account");
    \u0275\u0275elementEnd()();
  }
}
function Landing_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 22);
  }
}
var Landing = class _Landing {
  constructor(themeService, applicationService) {
    this.themeService = themeService;
    this.applicationService = applicationService;
    this.sidebarOpen = signal(false, ...ngDevMode ? [{ debugName: "sidebarOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showStatusPopup = signal(false, ...ngDevMode ? [{ debugName: "showStatusPopup" }] : (
      /* istanbul ignore next */
      []
    ));
    this.statusStep = signal("input", ...ngDevMode ? [{ debugName: "statusStep" }] : (
      /* istanbul ignore next */
      []
    ));
    this.statusLoading = signal(false, ...ngDevMode ? [{ debugName: "statusLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.statusError = signal("", ...ngDevMode ? [{ debugName: "statusError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.statusSuccess = signal("", ...ngDevMode ? [{ debugName: "statusSuccess" }] : (
      /* istanbul ignore next */
      []
    ));
    this.isMobile = signal(window.innerWidth < 1024, ...ngDevMode ? [{ debugName: "isMobile" }] : (
      /* istanbul ignore next */
      []
    ));
    this.searchQuery = "";
    this.statusOtp = "";
    this.statusResult = signal(null, ...ngDevMode ? [{ debugName: "statusResult" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngOnInit() {
    window.addEventListener("resize", () => {
      this.isMobile.set(window.innerWidth < 1024);
      if (window.innerWidth >= 1024)
        this.sidebarOpen.set(true);
    });
  }
  // ── Theme ──
  isDarkMode() {
    return this.themeService.isDark();
  }
  cycleTheme() {
    this.themeService.cycle();
  }
  // ── Sidebar ──
  toggleSidebar() {
    this.sidebarOpen.update((v) => !v);
  }
  closeSidebar() {
    this.sidebarOpen.set(false);
  }
  // ── Open status popup ──
  openStatusPopup() {
    this.closeSidebar();
    this.resetStatusPopup();
    this.showStatusPopup.set(true);
  }
  closeStatusPopup() {
    this.showStatusPopup.set(false);
    this.resetStatusPopup();
  }
  resetStatusPopup() {
    this.statusStep.set("input");
    this.statusError.set("");
    this.statusSuccess.set("");
    this.searchQuery = "";
    this.statusOtp = "";
    this.statusResult.set(null);
  }
  // ────────────────────────────────────────────
  //  STEP 1 — Send OTP
  // ────────────────────────────────────────────
  sendStatusOtp() {
    if (!this.searchQuery.trim()) {
      this.statusError.set("Please enter your Application ID or registered Email.");
      return;
    }
    this.statusLoading.set(true);
    this.statusError.set("");
    this.applicationService.sendStatusOtp(this.searchQuery.trim()).subscribe({
      next: (res) => {
        this.statusLoading.set(false);
        if (res.success) {
          this.statusSuccess.set(`OTP sent to your registered email.`);
          this.statusStep.set("otp");
        } else {
          this.statusError.set(res.message || "Failed to send OTP.");
        }
      },
      error: (err) => {
        this.statusLoading.set(false);
        this.statusError.set(this.extractError(err));
      }
    });
  }
  // ────────────────────────────────────────────
  //  STEP 2 — Verify OTP + get details
  // ────────────────────────────────────────────
  verifyStatusOtp() {
    if (!this.statusOtp || this.statusOtp.length !== 6) {
      this.statusError.set("Enter valid 6-digit OTP.");
      return;
    }
    this.statusLoading.set(true);
    this.statusError.set("");
    this.applicationService.verifyStatusOtp(this.searchQuery.trim(), this.statusOtp).subscribe({
      next: (res) => {
        this.statusLoading.set(false);
        if (res.success && res.data) {
          this.statusResult.set(res.data);
          this.statusStep.set("result");
        } else {
          this.statusError.set(res.message || "Verification failed.");
        }
      },
      error: (err) => {
        this.statusLoading.set(false);
        this.statusError.set(this.extractError(err));
      }
    });
  }
  resendStatusOtp() {
    this.statusOtp = "";
    this.statusError.set("");
    this.statusSuccess.set("");
    this.sendStatusOtp();
  }
  goBackToInput() {
    this.statusStep.set("input");
    this.statusError.set("");
    this.statusSuccess.set("");
    this.statusOtp = "";
  }
  // ── Helpers ──
  getStatusClass(status) {
    const map = {
      PENDING: "status-pending",
      SUBMITTED: "status-submitted",
      APPROVED: "status-approved",
      REJECTED: "status-rejected"
    };
    return map[status] ?? "status-pending";
  }
  getStatusIcon(status) {
    const map = {
      PENDING: "\u{1F550}",
      SUBMITTED: "\u{1F4CB}",
      APPROVED: "\u2705",
      REJECTED: "\u274C"
    };
    return map[status] ?? "\u{1F550}";
  }
  getStatusMessage(status) {
    const map = {
      PENDING: "Submitted but OTP not verified yet.",
      SUBMITTED: "Under review by our team. Expected: 2\u20133 business days.",
      APPROVED: "Congratulations! Your account has been activated.",
      REJECTED: "Application was not approved. You may apply again."
    };
    return map[status] ?? "";
  }
  extractError(err) {
    if (err.error?.message)
      return err.error.message;
    switch (err.status) {
      case 0:
        return "Cannot connect to server. Check your connection.";
      case 400:
        return err.error?.message || "Invalid request.";
      case 404:
        return "No application found for the given details.";
      case 429:
        return "Too many attempts. Please wait and try again.";
      case 500:
        return "Server error. Please try again later.";
      default:
        return "Something went wrong. Please try again.";
    }
  }
  static {
    this.\u0275fac = function Landing_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Landing)(\u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(ApplicationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Landing, selectors: [["app-landing"]], decls: 233, vars: 10, consts: [[1, "landing"], [1, "sidebar-overlay"], [1, "sidebar"], [1, "sidebar-header"], [1, "logo"], [1, "logo-icon"], [1, "logo-text"], [1, "sidebar-close", 3, "click"], [1, "sidebar-menu"], [1, "sidebar-section-label"], [1, "sidebar-item", 3, "click"], [1, "sidebar-item-icon"], [1, "sidebar-item-text"], [1, "sidebar-item-arrow"], [1, "sidebar-footer"], ["routerLink", "/login", 1, "btn", "btn-secondary", "w-full", 3, "click"], ["routerLink", "/register", 1, "btn", "btn-primary", "w-full", 3, "click"], ["routerLink", "/register-openaccount", 1, "btn", "btn-primary", "w-full", 3, "click"], [1, "modal-backdrop"], [1, "header"], [1, "container", "header-content"], [1, "menu-btn", 3, "click"], [1, "header-actions"], [1, "hero"], [1, "container", "hero-content"], [1, "hero-text"], [1, "hero-title"], [1, "highlight"], [1, "hero-subtitle"], [1, "hero-buttons"], ["routerLink", "/register-openaccount", 1, "btn", "btn-primary", "btn-lg"], ["href", "#features", 1, "btn", "btn-secondary", "btn-lg"], [1, "hero-stats"], [1, "stat"], [1, "stat-value"], [1, "stat-label"], [1, "hero-visual"], [1, "card-visual"], [1, "card-balance"], [1, "balance-label"], [1, "balance-value"], [1, "card-info"], [1, "card-number"], [1, "card-expiry"], [1, "card-logo"], [1, "floating-elements"], [1, "float-item", "float-1"], [1, "float-item", "float-2"], [1, "float-item", "float-3"], ["id", "features", 1, "features"], [1, "container"], [1, "section-header"], [1, "features-grid"], [1, "feature-card"], [1, "feature-icon"], ["id", "about", 1, "about"], [1, "about-content"], [1, "about-text"], [1, "about-features"], [1, "about-visual"], [1, "phone-mockup"], [1, "phone-screen"], [1, "app-header"], [1, "app-balance"], [1, "app-actions"], [1, "app-action"], [1, "cta"], [1, "cta-content"], [1, "footer"], [1, "container", "footer-content"], [1, "footer-brand"], [1, "footer-links"], [1, "footer-column"], ["href", "#"], [1, "footer-bottom"], [1, "sidebar-overlay", 3, "click"], [1, "modal-backdrop", 3, "click"], [1, "status-modal", 3, "click"], [1, "status-modal-header"], [1, "modal-close-btn", 3, "click"], [1, "status-body"], [1, "status-hint"], [1, "s-alert", "s-alert-error"], [1, "form-group"], [1, "req"], ["type", "text", "placeholder", "NB20260000001 or email@example.com", 1, "s-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn", "btn-primary", "w-full", 3, "click", "disabled"], [1, "spinner"], [1, "otp-icon"], [1, "s-alert", "s-alert-success"], ["type", "text", "placeholder", "\u2022 \u2022 \u2022 \u2022 \u2022 \u2022", "maxlength", "6", "inputmode", "numeric", 1, "s-input", "s-input-otp", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "otp-footer"], [1, "link-btn", 3, "click"], [1, "link-btn", 3, "click", "disabled"], [1, "status-banner"], [1, "status-banner-icon"], [1, "status-banner-title"], [1, "status-banner-sub"], [1, "app-id-badge"], [1, "app-id-label"], [1, "app-id-value"], [1, "review-section"], [1, "review-section-title"], [1, "review-grid"], [1, "review-item"], [1, "address-blocks"], [1, "address-block"], [1, "address-label"], [1, "address-text"], [1, "review-item", "full-width"], [1, "submitted-row"], [1, "btn", "btn-outline", "w-full", "mt-2", 3, "click"], [1, "nav-links"], ["href", "#features"], ["href", "#about"], ["href", "#contact"], ["routerLink", "/login", 1, "btn", "btn-secondary"], ["routerLink", "/register", 1, "btn", "btn-primary"], ["routerLink", "/register-openaccount", 1, "btn", "btn-primary"]], template: function Landing_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, Landing_Conditional_1_Template, 1, 0, "div", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span", 5);
        \u0275\u0275text(6, "N");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span", 6);
        \u0275\u0275text(8, "NeoBank");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "button", 7);
        \u0275\u0275listener("click", function Landing_Template_button_click_9_listener() {
          return ctx.closeSidebar();
        });
        \u0275\u0275text(10, "\u2715");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 8)(12, "div", 9);
        \u0275\u0275text(13, "Application");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 10);
        \u0275\u0275listener("click", function Landing_Template_button_click_14_listener() {
          return ctx.openStatusPopup();
        });
        \u0275\u0275elementStart(15, "span", 11);
        \u0275\u0275text(16, "\u{1F50D}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "span", 12);
        \u0275\u0275text(18, "View Application Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 13);
        \u0275\u0275text(20, "\u203A");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 9);
        \u0275\u0275text(22, "Settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "button", 10);
        \u0275\u0275listener("click", function Landing_Template_button_click_23_listener() {
          return ctx.cycleTheme();
        });
        \u0275\u0275elementStart(24, "span", 11);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 12);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span", 13);
        \u0275\u0275text(29, "\u203A");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 14)(31, "a", 15);
        \u0275\u0275listener("click", function Landing_Template_a_click_31_listener() {
          return ctx.closeSidebar();
        });
        \u0275\u0275text(32, "Login");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "a", 16);
        \u0275\u0275listener("click", function Landing_Template_a_click_33_listener() {
          return ctx.closeSidebar();
        });
        \u0275\u0275text(34, "Get Started");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "a", 17);
        \u0275\u0275listener("click", function Landing_Template_a_click_35_listener() {
          return ctx.closeSidebar();
        });
        \u0275\u0275text(36, "Open Account");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(37, Landing_Conditional_37_Template, 10, 3, "div", 18);
        \u0275\u0275elementStart(38, "header", 19)(39, "div", 20)(40, "button", 21);
        \u0275\u0275listener("click", function Landing_Template_button_click_40_listener() {
          return ctx.toggleSidebar();
        });
        \u0275\u0275text(41, "\u2630");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 4)(43, "span", 5);
        \u0275\u0275text(44, "N");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "span", 6);
        \u0275\u0275text(46, "NeoBank");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(47, Landing_Conditional_47_Template, 14, 0);
        \u0275\u0275conditionalCreate(48, Landing_Conditional_48_Template, 1, 0, "div", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "section", 23)(50, "div", 24)(51, "div", 25)(52, "h1", 26);
        \u0275\u0275text(53, " The Future of ");
        \u0275\u0275elementStart(54, "span", 27);
        \u0275\u0275text(55, "Banking");
        \u0275\u0275elementEnd();
        \u0275\u0275text(56, " Starts Here ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "p", 28);
        \u0275\u0275text(58, " Experience seamless financial management with NeoBank. Secure, fast, and smart banking solutions designed for the modern world. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "div", 29)(60, "a", 30);
        \u0275\u0275text(61, "Create Account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "a", 31);
        \u0275\u0275text(63, "Learn More");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "div", 32)(65, "div", 33)(66, "span", 34);
        \u0275\u0275text(67, "500K+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "span", 35);
        \u0275\u0275text(69, "Customers");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "div", 33)(71, "span", 34);
        \u0275\u0275text(72, "50+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "span", 35);
        \u0275\u0275text(74, "Countries");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "div", 33)(76, "span", 34);
        \u0275\u0275text(77, "99.9%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "span", 35);
        \u0275\u0275text(79, "Uptime");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(80, "div", 36)(81, "div", 37)(82, "div", 38)(83, "span", 39);
        \u0275\u0275text(84, "Total Balance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "span", 40);
        \u0275\u0275text(86, "\u20B912,50,000.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(87, "div", 41)(88, "div", 42);
        \u0275\u0275text(89, "**** **** **** 4582");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "div", 43);
        \u0275\u0275text(91, "12/28");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(92, "div", 44);
        \u0275\u0275text(93, "NeoBank");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(94, "div", 45)(95, "div", 46);
        \u0275\u0275text(96, "+\u20B950,000");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "div", 47);
        \u0275\u0275text(98, "-\u20B925,000");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "div", 48);
        \u0275\u0275text(100, "UPI");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(101, "section", 49)(102, "div", 50)(103, "div", 51)(104, "h2");
        \u0275\u0275text(105, "Why Choose NeoBank?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "p");
        \u0275\u0275text(107, "Powerful features to manage your money with complete control");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(108, "div", 52)(109, "div", 53)(110, "div", 54);
        \u0275\u0275text(111, "\u26A1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "h3");
        \u0275\u0275text(113, "Instant Transfers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "p");
        \u0275\u0275text(115, "Send money instantly via UPI, NEFT, IMPS, or internal transfers with zero delays.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(116, "div", 53)(117, "div", 54);
        \u0275\u0275text(118, "\u{1F512}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "h3");
        \u0275\u0275text(120, "Bank-Grade Security");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "p");
        \u0275\u0275text(122, "Your data is protected with enterprise-level encryption and multi-factor authentication.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(123, "div", 53)(124, "div", 54);
        \u0275\u0275text(125, "\u{1F4F1}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "h3");
        \u0275\u0275text(127, "Easy KYC");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "p");
        \u0275\u0275text(129, "Complete your verification in minutes with our simple wizard-based KYC process.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(130, "div", 53)(131, "div", 54);
        \u0275\u0275text(132, "\u{1F4CA}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "h3");
        \u0275\u0275text(134, "Smart Analytics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "p");
        \u0275\u0275text(136, "Track your spending patterns and manage budgets with detailed financial insights.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(137, "div", 53)(138, "div", 54);
        \u0275\u0275text(139, "\u{1F4B3}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "h3");
        \u0275\u0275text(141, "Multi-Account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "p");
        \u0275\u0275text(143, "Manage savings and current accounts all in one place with real-time tracking.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(144, "div", 53)(145, "div", 54);
        \u0275\u0275text(146, "\u{1F30D}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "h3");
        \u0275\u0275text(148, "Global Access");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(149, "p");
        \u0275\u0275text(150, "Access your accounts from anywhere in the world, anytime.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(151, "section", 55)(152, "div", 50)(153, "div", 56)(154, "div", 57)(155, "h2");
        \u0275\u0275text(156, "Banking Made Simple");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "p");
        \u0275\u0275text(158, " NeoBank brings you the next generation of digital banking. With our intuitive interface and powerful features, managing your finances has never been easier. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(159, "ul", 58)(160, "li");
        \u0275\u0275text(161, "\u2713 Zero hidden charges");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "li");
        \u0275\u0275text(163, "\u2713 24/7 customer support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "li");
        \u0275\u0275text(165, "\u2713 Instant account creation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(166, "li");
        \u0275\u0275text(167, "\u2713 Real-time notifications");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(168, "div", 59)(169, "div", 60)(170, "div", 61)(171, "div", 62);
        \u0275\u0275text(172, "NeoBank");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(173, "div", 63);
        \u0275\u0275text(174, "\u20B912,50,000");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(175, "div", 64)(176, "div", 65);
        \u0275\u0275text(177, "Send");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "div", 65);
        \u0275\u0275text(179, "Request");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(180, "div", 65);
        \u0275\u0275text(181, "Scan");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(182, "section", 66)(183, "div", 50)(184, "div", 67)(185, "h2");
        \u0275\u0275text(186, "Ready to Get Started?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(187, "p");
        \u0275\u0275text(188, "Join thousands of users who have already switched to NeoBank");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(189, "a", 30);
        \u0275\u0275text(190, "Create Free Account");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(191, "footer", 68)(192, "div", 69)(193, "div", 70)(194, "div", 4)(195, "span", 5);
        \u0275\u0275text(196, "N");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(197, "span", 6);
        \u0275\u0275text(198, "NeoBank");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(199, "p");
        \u0275\u0275text(200, "The future of digital banking");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(201, "div", 71)(202, "div", 72)(203, "h4");
        \u0275\u0275text(204, "Product");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(205, "a", 73);
        \u0275\u0275text(206, "Features");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(207, "a", 73);
        \u0275\u0275text(208, "Pricing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(209, "a", 73);
        \u0275\u0275text(210, "Security");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(211, "div", 72)(212, "h4");
        \u0275\u0275text(213, "Company");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(214, "a", 73);
        \u0275\u0275text(215, "About");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(216, "a", 73);
        \u0275\u0275text(217, "Careers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(218, "a", 73);
        \u0275\u0275text(219, "Contact");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(220, "div", 72)(221, "h4");
        \u0275\u0275text(222, "Legal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(223, "a", 73);
        \u0275\u0275text(224, "Privacy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(225, "a", 73);
        \u0275\u0275text(226, "Terms");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(227, "a", 73);
        \u0275\u0275text(228, "FAQ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(229, "div", 74)(230, "div", 50)(231, "p");
        \u0275\u0275text(232, "\xA9 2026 NeoBank. All rights reserved.");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.sidebarOpen() ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("sidebar-open", ctx.sidebarOpen());
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.isDarkMode() ? "\u2600\uFE0F" : "\u{1F319}");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.isDarkMode() ? "Light Mode" : "Dark Mode");
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.showStatusPopup() ? 37 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275styleProp("color", ctx.isDarkMode() ? "#ffffff" : "#1e293b");
        \u0275\u0275advance(7);
        \u0275\u0275conditional(!ctx.isMobile() ? 47 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isMobile() ? 48 : -1);
      }
    }, dependencies: [RouterLink, CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], styles: ["\n[_ngcontent-%COMP%]:root {\n  --bg-gradient:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 100%);\n  --hero-bg-from: #f8fafc;\n  --hero-bg-to: #e2e8f0;\n  --features-bg: #ffffff;\n  --about-bg: #f3f4f6;\n  --card-border: #e5e7eb;\n  --card-hover-shadow: 0 20px 40px rgba(0, 0, 0, 0.10);\n  --header-bg: rgba(255, 255, 255, 0.95);\n  --header-border: rgba(0, 0, 0, 0.05);\n  --footer-bg: #1f2937;\n  --footer-text: #7696cd;\n  --footer-border: #374151;\n  --sidebar-bg: #eee8e8;\n  --sidebar-border: #e5e7eb;\n  --sidebar-label: #9ca3af;\n  --sidebar-item-bg: #1e293b;\n  --sidebar-item-hover: #f8fafc;\n  --modal-bg: #ffffff;\n  --modal-overlay: rgba(15, 23, 42, 0.72);\n  --review-item-bg: #f8fafc;\n  --review-item-text: #94a3b8;\n  --review-item-val: #1e293b;\n  --input-border: #e2e8f0;\n  --input-focus: #6366f1;\n  --float-bg: #ffffff;\n  --float-shadow: rgba(0, 0, 0, 0.10);\n  --phone-bg: #1f2937;\n  --phone-screen: #ffffff;\n  --app-action-bg: #f3f4f6;\n}\n.dark[_ngcontent-%COMP%] {\n  --bg-gradient:\n    linear-gradient(\n      135deg,\n      #4f46e5 0%,\n      #7c3aed 100%);\n  --hero-bg-from: #0f172a;\n  --hero-bg-to: #1e293b;\n  --features-bg: #111827;\n  --about-bg: #0f172a;\n  --card-border: #374151;\n  --card-hover-shadow: 0 20px 40px rgba(0, 0, 0, 0.40);\n  --header-bg: rgba(17, 24, 39, 0.95);\n  --header-border: rgba(255, 255, 255, 0.06);\n  --footer-bg: #5a79cd;\n  --footer-text: #6b7280;\n  --footer-border: #1f2937;\n  --sidebar-bg: #1f2937;\n  --sidebar-border: #374151;\n  --sidebar-label: #6b7280;\n  --sidebar-item-bg: #f9fafb;\n  --sidebar-item-hover: #111827;\n  --modal-bg: #1f2937;\n  --modal-overlay: rgba(0, 0, 0, 0.82);\n  --review-item-bg: #111827;\n  --review-item-text: #4b5563;\n  --review-item-val: #f9fafb;\n  --input-border: #374151;\n  --input-focus: #818cf8;\n  --float-bg: #1f2937;\n  --float-shadow: rgba(0, 0, 0, 0.40);\n  --phone-bg: #030712;\n  --phone-screen: #1f2937;\n  --app-action-bg: #111827;\n}\n.landing[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: inear-gradient(135deg, #4facfe, #00f2fe);\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  box-shadow: 0 8px 32px rgba(151, 72, 72, 0.2);\n  padding: 20px;\n  transition: background 0.3s ease, color 0.3s ease;\n}\n.header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background: var(--header-bg);\n  backdrop-filter: blur(50px);\n  -webkit-backdrop-filter: blur(50px);\n  border-bottom: 1px solid var(--header-border);\n  transition: background 0.3s ease, border-color 0.3s ease;\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 0;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 24px;\n  font-weight: 700;\n  text-decoration: none;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--bg-gradient);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.logo-text[_ngcontent-%COMP%] {\n  background: var(--bg-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--dark-secondary);\n  transition: color 0.2s;\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.menu-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  padding: 8px 10px;\n  border-radius: 8px;\n  transition: background 0.2s;\n  line-height: 1;\n  color: var(--dark);\n}\n.menu-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.10);\n}\n.sidebar-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: var(--modal-overlay);\n  z-index: 1099;\n  backdrop-filter: blur(2px);\n  -webkit-backdrop-filter: blur(2px);\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 300px;\n  height: 100vh;\n  background: var(--sidebar-bg);\n  opacity: 1;\n  z-index: 1100;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 6px 0 32px rgba(0, 0, 0, 0.28);\n  transform: translateX(-100%);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s ease;\n}\n.sidebar.sidebar-open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  border-bottom: 1px solid var(--sidebar-border);\n}\n.sidebar-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: var(--gray);\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s, color 0.2s;\n}\n.sidebar-close[_ngcontent-%COMP%]:hover {\n  background: var(--sidebar-item-hover);\n  color: var(--dark);\n}\n.sidebar-menu[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px 0;\n  overflow-y: auto;\n}\n.sidebar-section-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: var(--sidebar-label);\n  padding: 12px 20px 6px;\n}\n.sidebar-item[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 20px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.15s;\n  color: var(--dark);\n}\n.sidebar-item[_ngcontent-%COMP%]:hover {\n  background: var(--sidebar-item-hover);\n}\n.sidebar-item-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 28px;\n  text-align: center;\n}\n.sidebar-item-text[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 15px;\n  font-weight: 500;\n}\n.sidebar-item-arrow[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--gray);\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-top: 1px solid var(--sidebar-border);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: var(--modal-overlay);\n  z-index: 1200;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  backdrop-filter: blur(px);\n  -webkit-backdrop-filter: blur(6px);\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n.status-modal[_ngcontent-%COMP%] {\n  background: var(--modal-bg);\n  opacity: 1;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 580px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.38), 0 8px 24px rgba(0, 0, 0, 0.18);\n  animation: _ngcontent-%COMP%_slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: 1px solid var(--card-border);\n  transition: background 0.3s ease, border-color 0.3s ease;\n}\n.status-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px 24px 16px;\n  position: sticky;\n  top: 0;\n  background: var(--modal-bg);\n  opacity: 1;\n  z-index: 1;\n  border-bottom: 1px solid var(--card-border);\n  transition: background 0.3s ease, border-color 0.3s ease;\n}\n.status-modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--dark);\n}\n.modal-close-btn[_ngcontent-%COMP%] {\n  background: var(--light);\n  border: none;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  color: var(--gray);\n  transition: background 0.2s, color 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--card-border);\n  color: var(--dark);\n}\n.status-body[_ngcontent-%COMP%] {\n  padding: 20px 24px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.status-hint[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--gray);\n  line-height: 1.6;\n}\n.s-alert[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: 10px;\n  font-size: 13px;\n}\n.s-alert-error[_ngcontent-%COMP%] {\n  background: rgba(234, 67, 53, 0.10);\n  color: var(--danger);\n  border: 1px solid rgba(234, 67, 53, 0.25);\n}\n.s-alert-success[_ngcontent-%COMP%] {\n  background: rgba(52, 168, 83, 0.10);\n  color: var(--secondary);\n  border: 1px solid rgba(52, 168, 83, 0.25);\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--dark-secondary);\n}\n.s-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px 14px;\n  border: 1.5px solid var(--input-border);\n  border-radius: 10px;\n  font-size: 14px;\n  outline: none;\n  background: var(--white);\n  color: var(--dark);\n  transition: border-color 0.2s, background 0.3s;\n  box-sizing: border-box;\n}\n.s-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--input-focus);\n}\n.s-input-otp[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: 8px;\n}\n.req[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.otp-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  text-align: center;\n}\n.otp-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--gray);\n}\n.link-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--primary);\n  font-size: 13px;\n  cursor: pointer;\n  padding: 0;\n  text-decoration: underline;\n}\n.link-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.link-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.status-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 20px;\n  border-radius: 14px;\n}\n.status-banner-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.status-banner-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n.status-banner-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  opacity: 0.8;\n  margin-top: 2px;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: rgba(251, 191, 36, 0.12);\n  color: #92400e;\n  border: 1px solid rgba(251, 191, 36, 0.35);\n}\n.dark[_ngcontent-%COMP%]   .status-pending[_ngcontent-%COMP%] {\n  color: #fcd34d;\n  border-color: rgba(251, 191, 36, 0.30);\n}\n.status-submitted[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.10);\n  color: #1e40af;\n  border: 1px solid rgba(99, 102, 241, 0.25);\n}\n.dark[_ngcontent-%COMP%]   .status-submitted[_ngcontent-%COMP%] {\n  color: #a5b4fc;\n  border-color: rgba(99, 102, 241, 0.30);\n}\n.status-approved[_ngcontent-%COMP%] {\n  background: rgba(52, 168, 83, 0.10);\n  color: #166534;\n  border: 1px solid rgba(52, 168, 83, 0.25);\n}\n.dark[_ngcontent-%COMP%]   .status-approved[_ngcontent-%COMP%] {\n  color: #86efac;\n  border-color: rgba(52, 168, 83, 0.30);\n}\n.status-rejected[_ngcontent-%COMP%] {\n  background: rgba(234, 67, 53, 0.10);\n  color: #991b1b;\n  border: 1px solid rgba(234, 67, 53, 0.25);\n}\n.dark[_ngcontent-%COMP%]   .status-rejected[_ngcontent-%COMP%] {\n  color: #fca5a5;\n  border-color: rgba(234, 67, 53, 0.30);\n}\n.app-id-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: var(--review-item-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 12px;\n  padding: 12px 16px;\n  transition: background 0.3s ease, border-color 0.3s ease;\n}\n.app-id-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--gray);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.app-id-value[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--primary);\n  font-family: monospace;\n  letter-spacing: 1px;\n}\n.review-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.review-section-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--primary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding-bottom: 6px;\n  border-bottom: 1.5px solid var(--card-border);\n  transition: border-color 0.3s ease;\n}\n.review-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 6px;\n}\n.review-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  background: var(--review-item-bg);\n  border-radius: 8px;\n  padding: 10px 12px;\n  transition: background 0.3s ease;\n}\n.review-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--review-item-text);\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.review-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--review-item-val);\n  word-break: break-word;\n}\n.full-width[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.address-blocks[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.address-block[_ngcontent-%COMP%] {\n  background: var(--review-item-bg);\n  border-radius: 10px;\n  padding: 12px;\n  transition: background 0.3s ease;\n}\n.address-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--primary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 6px;\n}\n.address-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--dark);\n  line-height: 1.6;\n}\n.submitted-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: var(--review-item-bg);\n  border-radius: 10px;\n  padding: 12px 16px;\n  font-size: 13px;\n  transition: background 0.3s ease;\n}\n.submitted-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--gray);\n}\n.submitted-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--dark);\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1.5px solid var(--primary);\n  color: var(--primary);\n  border-radius: 10px;\n  padding: 10px 20px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s, color 0.2s;\n  font-size: 14px;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  color: #ffffff;\n}\n.hero[_ngcontent-%COMP%] {\n  padding: 160px 0 100px;\n  background:\n    linear-gradient(\n      180deg,\n      var(--hero-bg-from) 0%,\n      var(--hero-bg-to) 100%);\n  transition: background 0.3s ease;\n}\n.hero-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 64px;\n  align-items: center;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 56px;\n  font-weight: 700;\n  line-height: 1.1;\n  color: var(--dark);\n  margin-bottom: 24px;\n}\n.hero-title[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  background: var(--bg-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--gray);\n  margin-bottom: 32px;\n  max-width: 480px;\n}\n.hero-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 48px;\n}\n.btn-lg[_ngcontent-%COMP%] {\n  padding: 16px 32px;\n  font-size: 16px;\n}\n.hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 48px;\n}\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  color: var(--dark);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray);\n}\n.hero-visual[_ngcontent-%COMP%] {\n  position: relative;\n  height: 400px;\n}\n.card-visual[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 340px;\n  height: 220px;\n  background: var(--bg-gradient);\n  border-radius: 20px;\n  padding: 24px;\n  color: #ffffff;\n  box-shadow: 0 20px 60px rgba(99, 102, 241, 0.35);\n}\n.card-balance[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 32px;\n}\n.balance-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: 0.8;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.balance-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n}\n.card-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.card-number[_ngcontent-%COMP%] {\n  font-size: 16px;\n  letter-spacing: 2px;\n}\n.card-expiry[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.card-logo[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 24px;\n  right: 24px;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n.floating-elements[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.float-item[_ngcontent-%COMP%] {\n  position: absolute;\n  background: var(--float-bg);\n  padding: 12px 20px;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px var(--float-shadow);\n  font-weight: 600;\n  font-size: 14px;\n  transition: background 0.3s ease;\n}\n.float-1[_ngcontent-%COMP%] {\n  top: 20%;\n  right: 10%;\n  color: var(--secondary);\n}\n.float-2[_ngcontent-%COMP%] {\n  bottom: 30%;\n  left: 5%;\n  color: var(--danger);\n}\n.float-3[_ngcontent-%COMP%] {\n  top: 60%;\n  right: 0;\n  background: var(--primary);\n  color: #ffffff;\n}\n.features[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  background: var(--features-bg);\n  transition: background 0.3s ease;\n}\n.section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 64px;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 700;\n  margin-bottom: 16px;\n  color: var(--dark);\n}\n.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--gray);\n}\n.features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 32px;\n}\n.feature-card[_ngcontent-%COMP%] {\n  padding: 32px;\n  background: var(--white);\n  border: 1px solid var(--card-border);\n  border-radius: 16px;\n  transition:\n    transform 0.3s ease,\n    box-shadow 0.3s ease,\n    border-color 0.3s ease,\n    background 0.3s ease;\n}\n.feature-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: var(--card-hover-shadow);\n  border-color: var(--primary);\n}\n.feature-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.12) 0%,\n      rgba(139, 92, 246, 0.12) 100%);\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  margin-bottom: 20px;\n}\n.feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 12px;\n  color: var(--dark);\n}\n.feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--gray);\n  line-height: 1.6;\n}\n.about[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  background: var(--about-bg);\n  transition: background 0.3s ease;\n}\n.about-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 64px;\n  align-items: center;\n}\n.about-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 700;\n  margin-bottom: 24px;\n  color: var(--dark);\n}\n.about-text[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--gray);\n  margin-bottom: 32px;\n  line-height: 1.7;\n}\n.about-features[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.about-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: var(--dark-secondary);\n}\n.about-visual[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.phone-mockup[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 560px;\n  background: var(--phone-bg);\n  border-radius: 40px;\n  padding: 8px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n  transition: background 0.3s ease;\n}\n.phone-screen[_ngcontent-%COMP%] {\n  background: var(--phone-screen);\n  border-radius: 32px;\n  height: 100%;\n  padding: 24px;\n  transition: background 0.3s ease;\n}\n.app-header[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  background: var(--bg-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: 32px;\n}\n.app-balance[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  margin-bottom: 32px;\n  color: var(--dark);\n}\n.app-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.app-action[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px;\n  background: var(--app-action-bg);\n  border-radius: 12px;\n  text-align: center;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--dark);\n  transition: background 0.3s ease, color 0.3s ease;\n}\n.cta[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  background: var(--bg-gradient);\n}\n.cta-content[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #ffffff;\n}\n.cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 700;\n  margin-bottom: 16px;\n}\n.cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  opacity: 0.9;\n  margin-bottom: 32px;\n}\n.cta[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: var(--primary);\n}\n.cta[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--light);\n}\n.footer[_ngcontent-%COMP%] {\n  background: var(--footer-bg);\n  padding-top: 64px;\n  transition: background 0.3s ease;\n}\n.footer-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  gap: 64px;\n  padding-bottom: 48px;\n}\n.footer-brand[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  background: var(--bg-gradient);\n}\n.footer-brand[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  background: var(--bg-gradient);\n  -webkit-background-clip: text;\n}\n.footer-brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--footer-text);\n}\n.footer-links[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 32px;\n}\n.footer-column[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 20px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: var(--footer-text);\n}\n.footer-column[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--footer-text);\n  margin-bottom: 12px;\n  transition: color 0.2s;\n}\n.footer-column[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #4a03f0;\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--footer-border);\n  padding: 24px 0;\n  text-align: center;\n  transition: border-color 0.3s ease;\n}\n.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--footer-text);\n  font-size: 14px;\n}\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  margin-right: 6px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(40px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@media (max-width: 992px) {\n  .hero-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n  .hero-subtitle[_ngcontent-%COMP%] {\n    margin: 0 auto 32px;\n  }\n  .hero-buttons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .hero-stats[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .hero-visual[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .features-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .about-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .about-visual[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 768px) {\n  .nav-links[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .features-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .footer-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n  .footer-links[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n}\n@media (max-width: 500px) {\n  .review-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .address-blocks[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .status-modal[_ngcontent-%COMP%] {\n    border-radius: 16px 16px 0 0;\n    align-self: flex-end;\n    max-height: 95vh;\n  }\n  .modal-backdrop[_ngcontent-%COMP%] {\n    align-items: flex-end;\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=landing.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Landing, [{
    type: Component,
    args: [{ selector: "app-landing", standalone: true, imports: [RouterLink, CommonModule, FormsModule], template: `<!---------------------------  landing.html  --------------------------->
<div class="landing">

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       SIDEBAR OVERLAY
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (sidebarOpen()) {
    <div class="sidebar-overlay" (click)="closeSidebar()"></div>
  }

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       SIDEBAR
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="sidebar" [class.sidebar-open]="sidebarOpen()">

    <div class="sidebar-header">
      <div class="logo">
        <span class="logo-icon">N</span>
        <span class="logo-text">NeoBank</span>
      </div>
      <button class="sidebar-close" (click)="closeSidebar()">\u2715</button>
    </div>

    <div class="sidebar-menu">

      <div class="sidebar-section-label">Application</div>

      <button class="sidebar-item" (click)="openStatusPopup()">
        <span class="sidebar-item-icon">\u{1F50D}</span>
        <span class="sidebar-item-text">View Application Status</span>
        <span class="sidebar-item-arrow">\u203A</span>
      </button>

      <div class="sidebar-section-label">Settings</div>

      <button class="sidebar-item" (click)="cycleTheme()">
        <span class="sidebar-item-icon">{{ isDarkMode() ? '\u2600\uFE0F' : '\u{1F319}' }}</span>
        <span class="sidebar-item-text">{{ isDarkMode() ? 'Light Mode' : 'Dark Mode' }}</span>
        <span class="sidebar-item-arrow">\u203A</span>
      </button>

    </div>

    <div class="sidebar-footer">
      <a routerLink="/login"    class="btn btn-secondary w-full" (click)="closeSidebar()">Login</a>
      <a routerLink="/register" class="btn btn-primary w-full"   (click)="closeSidebar()">Get Started</a>
      <a routerLink="/register-openaccount" class="btn btn-primary w-full"   (click)="closeSidebar()">Open Account</a>
    </div>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       APPLICATION STATUS POPUP
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (showStatusPopup()) {
    <div class="modal-backdrop" (click)="closeStatusPopup()">
      <div class="status-modal" (click)="$event.stopPropagation()">

        <!-- Modal Header -->
        <div class="status-modal-header">
          <h3>\u{1F50D} Application Status</h3>
          <button class="modal-close-btn" (click)="closeStatusPopup()">\u2715</button>
        </div>

        <!-- \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
             STEP 1: Enter Query
        \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        @if (statusStep() === 'input') {
          <div class="status-body">
            <p class="status-hint">
              Enter your <strong>Application ID</strong> (e.g. NB20260000001)
              or <strong>registered Email</strong> to receive an OTP.
            </p>

            @if (statusError()) {
              <div class="s-alert s-alert-error">{{ statusError() }}</div>
            }

            <div class="form-group">
              <label>Application ID or Email <span class="req">*</span></label>
              <input
                type="text"
                class="s-input"
                [(ngModel)]="searchQuery"
                placeholder="NB20260000001 or email@example.com"
                (keyup.enter)="sendStatusOtp()"
              />
            </div>

            <button
              class="btn btn-primary w-full"
              (click)="sendStatusOtp()"
              [disabled]="statusLoading()"
            >
              @if (statusLoading()) { <span class="spinner"></span> Sending... }
              @else { Send OTP \u2192 }
            </button>
          </div>
        }

        <!-- \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
             STEP 2: Enter OTP
        \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        @if (statusStep() === 'otp') {
          <div class="status-body">

            <div class="otp-icon">\u{1F510}</div>
            <p class="status-hint">
              A 6-digit OTP has been sent to your registered email.<br>
              Enter it below to view your application details.
            </p>

            @if (statusError()) {
              <div class="s-alert s-alert-error">{{ statusError() }}</div>
            }
            @if (statusSuccess()) {
              <div class="s-alert s-alert-success">{{ statusSuccess() }}</div>
            }

            <div class="form-group">
              <label>Enter OTP <span class="req">*</span></label>
              <input
                type="text"
                class="s-input s-input-otp"
                [(ngModel)]="statusOtp"
                placeholder="\u2022 \u2022 \u2022 \u2022 \u2022 \u2022"
                maxlength="6"
                inputmode="numeric"
                (keyup.enter)="verifyStatusOtp()"
              />
            </div>

            <button
              class="btn btn-primary w-full"
              (click)="verifyStatusOtp()"
              [disabled]="statusLoading()"
            >
              @if (statusLoading()) { <span class="spinner"></span> Verifying... }
              @else { Verify & View Status }
            </button>

            <div class="otp-footer">
              <button class="link-btn" (click)="goBackToInput()">\u2190 Change ID / Email</button>
              <span>\xB7</span>
              <button class="link-btn" (click)="resendStatusOtp()" [disabled]="statusLoading()">
                Resend OTP
              </button>
            </div>
          </div>
        }

        <!-- \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
             STEP 3: Result
        \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        @if (statusStep() === 'result' && statusResult()) {
          <div class="status-body">

            <!-- Status Banner -->
            <div class="status-banner" [class]="getStatusClass(statusResult()!.status)">
              <span class="status-banner-icon">{{ getStatusIcon(statusResult()!.status) }}</span>
              <div>
                <div class="status-banner-title">{{ statusResult()!.status }}</div>
                <div class="status-banner-sub">{{ getStatusMessage(statusResult()!.status) }}</div>
              </div>
            </div>

            <!-- Application ID Badge -->
            <div class="app-id-badge">
              <span class="app-id-label">Application ID</span>
              <span class="app-id-value">{{ statusResult()!.applicationId }}</span>
            </div>

            <!-- Personal Info -->
            <div class="review-section">
              <h4 class="review-section-title">Personal Information</h4>
              <div class="review-grid">
                <div class="review-item">
                  <span>Account Type</span>
                  <strong>{{ statusResult()!.accountType }}</strong>
                </div>
                <div class="review-item">
                  <span>Full Name</span>
                  <strong>{{ statusResult()!.fullName }}</strong>
                </div>
                <div class="review-item">
                  <span>Father's Name</span>
                  <strong>{{ statusResult()!.fatherName }}</strong>
                </div>
                <div class="review-item">
                  <span>Mother's Name</span>
                  <strong>{{ statusResult()!.motherName }}</strong>
                </div>
                <div class="review-item">
                  <span>Date of Birth</span>
                  <strong>{{ statusResult()!.dateOfBirth }}</strong>
                </div>
                <div class="review-item">
                  <span>Gender</span>
                  <strong>{{ statusResult()!.gender }}</strong>
                </div>
                <div class="review-item">
                  <span>Marital Status</span>
                  <strong>{{ statusResult()!.maritalStatus || '\u2014' }}</strong>
                </div>
                <div class="review-item">
                  <span>Nationality</span>
                  <strong>{{ statusResult()!.nationality || '\u2014' }}</strong>
                </div>
                <div class="review-item">
                  <span>Occupation</span>
                  <strong>{{ statusResult()!.occupation }}</strong>
                </div>
                <div class="review-item">
                  <span>Annual Income</span>
                  <strong>{{ statusResult()!.annualIncome ? '\u20B9' + statusResult()!.annualIncome : '\u2014' }}</strong>
                </div>
                <div class="review-item">
                  <span>Mobile</span>
                  <strong>{{ statusResult()!.phoneNumber }}</strong>
                </div>
                <div class="review-item">
                  <span>Email</span>
                  <strong>{{ statusResult()!.emailId }}</strong>
                </div>
                <div class="review-item">
                  <span>Aadhaar No</span>
                  <strong>{{ statusResult()!.aadhaarNumber }}</strong>
                </div>
                <div class="review-item">
                  <span>PAN No</span>
                  <strong>{{ statusResult()!.panNumber }}</strong>
                </div>
              </div>
            </div>

            <!-- Address -->
            <div class="review-section">
              <h4 class="review-section-title">Address Details</h4>
              <div class="address-blocks">
                <div class="address-block">
                  <div class="address-label">Current Address</div>
                  <div class="address-text">
                    {{ statusResult()!.currentAddressLine }}<br>
                    {{ statusResult()!.currentCity }},
                    {{ statusResult()!.currentState }} \u2013
                    {{ statusResult()!.currentPincode }}
                  </div>
                </div>
                <div class="address-block">
                  <div class="address-label">Permanent Address</div>
                  <div class="address-text">
                    {{ statusResult()!.permanentAddressLine }}<br>
                    {{ statusResult()!.permanentCity }},
                    {{ statusResult()!.permanentState }} \u2013
                    {{ statusResult()!.permanentPincode }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Nominee -->
            <div class="review-section">
              <h4 class="review-section-title">Nominee Details</h4>
              <div class="review-grid">
                <div class="review-item">
                  <span>Name</span>
                  <strong>{{ statusResult()!.nomineeName }}</strong>
                </div>
                <div class="review-item">
                  <span>Relation</span>
                  <strong>{{ statusResult()!.nomineeRelation }}</strong>
                </div>
                <div class="review-item">
                  <span>Age</span>
                  <strong>{{ statusResult()!.nomineeAge }}</strong>
                </div>
                <div class="review-item">
                  <span>Mobile</span>
                  <strong>{{ statusResult()!.nomineeMobileNumber }}</strong>
                </div>
              </div>
              <div class="review-item full-width">
                <span>Address</span>
                <strong>{{ statusResult()!.nomineeAddress }}</strong>
              </div>
            </div>

            <!-- Submitted On -->
            <div class="submitted-row">
              <span>Submitted On</span>
              <strong>{{ statusResult()!.submittedOn }}</strong>
            </div>

            <!-- Action -->
            <button class="btn btn-outline w-full mt-2" (click)="goBackToInput()">
              \u2190 Check Another Application
            </button>

          </div>
        }

      </div>
    </div>
  }

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       HEADER
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <header class="header">
    <div class="container header-content">

      <button
        class="menu-btn"
        (click)="toggleSidebar()"
        [style.color]="isDarkMode() ? '#ffffff' : '#1e293b'"
      >\u2630</button>

      <div class="logo">
        <span class="logo-icon">N</span>
        <span class="logo-text">NeoBank</span>
      </div>

      @if (!this.isMobile()) {

      <nav class="nav-links">
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <div class="header-actions">
        <a routerLink="/login"    class="btn btn-secondary">Login</a>
        <a routerLink="/register" class="btn btn-primary">Get Started</a>
        <a routerLink="/register-openaccount" class="btn btn-primary">Open Account</a>
      </div>

    }@if (this.isMobile()) {
<div class="header-actions"></div>
    }

    </div>
  </header>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       HERO
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <section class="hero">
    <div class="container hero-content">
      <div class="hero-text">
        <h1 class="hero-title">
          The Future of <span class="highlight">Banking</span> Starts Here
        </h1>
        <p class="hero-subtitle">
          Experience seamless financial management with NeoBank.
          Secure, fast, and smart banking solutions designed for the modern world.
        </p>
        <div class="hero-buttons">
          <a routerLink="/register-openaccount" class="btn btn-primary btn-lg">Create Account</a>
          <a href="#features"       class="btn btn-secondary btn-lg">Learn More</a>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-value">500K+</span>
            <span class="stat-label">Customers</span>
          </div>
          <div class="stat">
            <span class="stat-value">50+</span>
            <span class="stat-label">Countries</span>
          </div>
          <div class="stat">
            <span class="stat-value">99.9%</span>
            <span class="stat-label">Uptime</span>
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="card-visual">
          <div class="card-balance">
            <span class="balance-label">Total Balance</span>
            <span class="balance-value">\u20B912,50,000.00</span>
          </div>
          <div class="card-info">
            <div class="card-number">**** **** **** 4582</div>
            <div class="card-expiry">12/28</div>
          </div>
          <div class="card-logo">NeoBank</div>
        </div>
        <div class="floating-elements">
          <div class="float-item float-1">+\u20B950,000</div>
          <div class="float-item float-2">-\u20B925,000</div>
          <div class="float-item float-3">UPI</div>
        </div>
      </div>
    </div>
  </section>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       FEATURES
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <section id="features" class="features">
    <div class="container">
      <div class="section-header">
        <h2>Why Choose NeoBank?</h2>
        <p>Powerful features to manage your money with complete control</p>
      </div>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">\u26A1</div>
          <h3>Instant Transfers</h3>
          <p>Send money instantly via UPI, NEFT, IMPS, or internal transfers with zero delays.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">\u{1F512}</div>
          <h3>Bank-Grade Security</h3>
          <p>Your data is protected with enterprise-level encryption and multi-factor authentication.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">\u{1F4F1}</div>
          <h3>Easy KYC</h3>
          <p>Complete your verification in minutes with our simple wizard-based KYC process.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">\u{1F4CA}</div>
          <h3>Smart Analytics</h3>
          <p>Track your spending patterns and manage budgets with detailed financial insights.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">\u{1F4B3}</div>
          <h3>Multi-Account</h3>
          <p>Manage savings and current accounts all in one place with real-time tracking.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">\u{1F30D}</div>
          <h3>Global Access</h3>
          <p>Access your accounts from anywhere in the world, anytime.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       ABOUT
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <section id="about" class="about">
    <div class="container">
      <div class="about-content">
        <div class="about-text">
          <h2>Banking Made Simple</h2>
          <p>
            NeoBank brings you the next generation of digital banking.
            With our intuitive interface and powerful features,
            managing your finances has never been easier.
          </p>
          <ul class="about-features">
            <li>\u2713 Zero hidden charges</li>
            <li>\u2713 24/7 customer support</li>
            <li>\u2713 Instant account creation</li>
            <li>\u2713 Real-time notifications</li>
          </ul>
        </div>
        <div class="about-visual">
          <div class="phone-mockup">
            <div class="phone-screen">
              <div class="app-header">NeoBank</div>
              <div class="app-balance">\u20B912,50,000</div>
              <div class="app-actions">
                <div class="app-action">Send</div>
                <div class="app-action">Request</div>
                <div class="app-action">Scan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       CTA
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <section class="cta">
    <div class="container">
      <div class="cta-content">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of users who have already switched to NeoBank</p>
        <a routerLink="/register-openaccount" class="btn btn-primary btn-lg">Create Free Account</a>
      </div>
    </div>
  </section>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       FOOTER
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <footer class="footer">
    <div class="container footer-content">
      <div class="footer-brand">
        <div class="logo">
          <span class="logo-icon">N</span>
          <span class="logo-text">NeoBank</span>
        </div>
        <p>The future of digital banking</p>
      </div>
      <div class="footer-links">
        <div class="footer-column">
          <h4>Product</h4>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Security</a>
        </div>
        <div class="footer-column">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>
        <div class="footer-column">
          <h4>Legal</h4>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">FAQ</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p>&copy; 2026 NeoBank. All rights reserved.</p>
      </div>
    </div>
  </footer>

</div>`, styles: ["/* src/app/features/landing/landing.css */\n:root {\n  --bg-gradient:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 100%);\n  --hero-bg-from: #f8fafc;\n  --hero-bg-to: #e2e8f0;\n  --features-bg: #ffffff;\n  --about-bg: #f3f4f6;\n  --card-border: #e5e7eb;\n  --card-hover-shadow: 0 20px 40px rgba(0, 0, 0, 0.10);\n  --header-bg: rgba(255, 255, 255, 0.95);\n  --header-border: rgba(0, 0, 0, 0.05);\n  --footer-bg: #1f2937;\n  --footer-text: #7696cd;\n  --footer-border: #374151;\n  --sidebar-bg: #eee8e8;\n  --sidebar-border: #e5e7eb;\n  --sidebar-label: #9ca3af;\n  --sidebar-item-bg: #1e293b;\n  --sidebar-item-hover: #f8fafc;\n  --modal-bg: #ffffff;\n  --modal-overlay: rgba(15, 23, 42, 0.72);\n  --review-item-bg: #f8fafc;\n  --review-item-text: #94a3b8;\n  --review-item-val: #1e293b;\n  --input-border: #e2e8f0;\n  --input-focus: #6366f1;\n  --float-bg: #ffffff;\n  --float-shadow: rgba(0, 0, 0, 0.10);\n  --phone-bg: #1f2937;\n  --phone-screen: #ffffff;\n  --app-action-bg: #f3f4f6;\n}\n.dark {\n  --bg-gradient:\n    linear-gradient(\n      135deg,\n      #4f46e5 0%,\n      #7c3aed 100%);\n  --hero-bg-from: #0f172a;\n  --hero-bg-to: #1e293b;\n  --features-bg: #111827;\n  --about-bg: #0f172a;\n  --card-border: #374151;\n  --card-hover-shadow: 0 20px 40px rgba(0, 0, 0, 0.40);\n  --header-bg: rgba(17, 24, 39, 0.95);\n  --header-border: rgba(255, 255, 255, 0.06);\n  --footer-bg: #5a79cd;\n  --footer-text: #6b7280;\n  --footer-border: #1f2937;\n  --sidebar-bg: #1f2937;\n  --sidebar-border: #374151;\n  --sidebar-label: #6b7280;\n  --sidebar-item-bg: #f9fafb;\n  --sidebar-item-hover: #111827;\n  --modal-bg: #1f2937;\n  --modal-overlay: rgba(0, 0, 0, 0.82);\n  --review-item-bg: #111827;\n  --review-item-text: #4b5563;\n  --review-item-val: #f9fafb;\n  --input-border: #374151;\n  --input-focus: #818cf8;\n  --float-bg: #1f2937;\n  --float-shadow: rgba(0, 0, 0, 0.40);\n  --phone-bg: #030712;\n  --phone-screen: #1f2937;\n  --app-action-bg: #111827;\n}\n.landing {\n  min-height: 100vh;\n  background: inear-gradient(135deg, #4facfe, #00f2fe);\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  box-shadow: 0 8px 32px rgba(151, 72, 72, 0.2);\n  padding: 20px;\n  transition: background 0.3s ease, color 0.3s ease;\n}\n.header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background: var(--header-bg);\n  backdrop-filter: blur(50px);\n  -webkit-backdrop-filter: blur(50px);\n  border-bottom: 1px solid var(--header-border);\n  transition: background 0.3s ease, border-color 0.3s ease;\n}\n.header-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 0;\n}\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 24px;\n  font-weight: 700;\n  text-decoration: none;\n}\n.logo-icon {\n  width: 40px;\n  height: 40px;\n  background: var(--bg-gradient);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.logo-text {\n  background: var(--bg-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.nav-links {\n  display: flex;\n  gap: 32px;\n}\n.nav-links a {\n  font-weight: 500;\n  color: var(--dark-secondary);\n  transition: color 0.2s;\n}\n.nav-links a:hover {\n  color: var(--primary);\n}\n.header-actions {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.menu-btn {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  padding: 8px 10px;\n  border-radius: 8px;\n  transition: background 0.2s;\n  line-height: 1;\n  color: var(--dark);\n}\n.menu-btn:hover {\n  background: rgba(99, 102, 241, 0.10);\n}\n.sidebar-overlay {\n  position: fixed;\n  inset: 0;\n  background: var(--modal-overlay);\n  z-index: 1099;\n  backdrop-filter: blur(2px);\n  -webkit-backdrop-filter: blur(2px);\n  animation: fadeIn 0.2s ease;\n}\n.sidebar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 300px;\n  height: 100vh;\n  background: var(--sidebar-bg);\n  opacity: 1;\n  z-index: 1100;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 6px 0 32px rgba(0, 0, 0, 0.28);\n  transform: translateX(-100%);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s ease;\n}\n.sidebar.sidebar-open {\n  transform: translateX(0);\n}\n.sidebar-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  border-bottom: 1px solid var(--sidebar-border);\n}\n.sidebar-close {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: var(--gray);\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s, color 0.2s;\n}\n.sidebar-close:hover {\n  background: var(--sidebar-item-hover);\n  color: var(--dark);\n}\n.sidebar-menu {\n  flex: 1;\n  padding: 16px 0;\n  overflow-y: auto;\n}\n.sidebar-section-label {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: var(--sidebar-label);\n  padding: 12px 20px 6px;\n}\n.sidebar-item {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 20px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.15s;\n  color: var(--dark);\n}\n.sidebar-item:hover {\n  background: var(--sidebar-item-hover);\n}\n.sidebar-item-icon {\n  font-size: 20px;\n  width: 28px;\n  text-align: center;\n}\n.sidebar-item-text {\n  flex: 1;\n  font-size: 15px;\n  font-weight: 500;\n}\n.sidebar-item-arrow {\n  font-size: 18px;\n  color: var(--gray);\n}\n.sidebar-footer {\n  padding: 20px;\n  border-top: 1px solid var(--sidebar-border);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: var(--modal-overlay);\n  z-index: 1200;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  backdrop-filter: blur(px);\n  -webkit-backdrop-filter: blur(6px);\n  animation: fadeIn 0.2s ease;\n}\n.status-modal {\n  background: var(--modal-bg);\n  opacity: 1;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 580px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.38), 0 8px 24px rgba(0, 0, 0, 0.18);\n  animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: 1px solid var(--card-border);\n  transition: background 0.3s ease, border-color 0.3s ease;\n}\n.status-modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px 24px 16px;\n  position: sticky;\n  top: 0;\n  background: var(--modal-bg);\n  opacity: 1;\n  z-index: 1;\n  border-bottom: 1px solid var(--card-border);\n  transition: background 0.3s ease, border-color 0.3s ease;\n}\n.status-modal-header h3 {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--dark);\n}\n.modal-close-btn {\n  background: var(--light);\n  border: none;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  color: var(--gray);\n  transition: background 0.2s, color 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-close-btn:hover {\n  background: var(--card-border);\n  color: var(--dark);\n}\n.status-body {\n  padding: 20px 24px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.status-hint {\n  font-size: 13px;\n  color: var(--gray);\n  line-height: 1.6;\n}\n.s-alert {\n  padding: 10px 14px;\n  border-radius: 10px;\n  font-size: 13px;\n}\n.s-alert-error {\n  background: rgba(234, 67, 53, 0.10);\n  color: var(--danger);\n  border: 1px solid rgba(234, 67, 53, 0.25);\n}\n.s-alert-success {\n  background: rgba(52, 168, 83, 0.10);\n  color: var(--secondary);\n  border: 1px solid rgba(52, 168, 83, 0.25);\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--dark-secondary);\n}\n.s-input {\n  width: 100%;\n  padding: 11px 14px;\n  border: 1.5px solid var(--input-border);\n  border-radius: 10px;\n  font-size: 14px;\n  outline: none;\n  background: var(--white);\n  color: var(--dark);\n  transition: border-color 0.2s, background 0.3s;\n  box-sizing: border-box;\n}\n.s-input:focus {\n  border-color: var(--input-focus);\n}\n.s-input-otp {\n  text-align: center;\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: 8px;\n}\n.req {\n  color: var(--danger);\n}\n.otp-icon {\n  font-size: 2.5rem;\n  text-align: center;\n}\n.otp-footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--gray);\n}\n.link-btn {\n  background: none;\n  border: none;\n  color: var(--primary);\n  font-size: 13px;\n  cursor: pointer;\n  padding: 0;\n  text-decoration: underline;\n}\n.link-btn:hover {\n  opacity: 0.8;\n}\n.link-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.status-banner {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 20px;\n  border-radius: 14px;\n}\n.status-banner-icon {\n  font-size: 28px;\n}\n.status-banner-title {\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n.status-banner-sub {\n  font-size: 13px;\n  opacity: 0.8;\n  margin-top: 2px;\n}\n.status-pending {\n  background: rgba(251, 191, 36, 0.12);\n  color: #92400e;\n  border: 1px solid rgba(251, 191, 36, 0.35);\n}\n.dark .status-pending {\n  color: #fcd34d;\n  border-color: rgba(251, 191, 36, 0.30);\n}\n.status-submitted {\n  background: rgba(99, 102, 241, 0.10);\n  color: #1e40af;\n  border: 1px solid rgba(99, 102, 241, 0.25);\n}\n.dark .status-submitted {\n  color: #a5b4fc;\n  border-color: rgba(99, 102, 241, 0.30);\n}\n.status-approved {\n  background: rgba(52, 168, 83, 0.10);\n  color: #166534;\n  border: 1px solid rgba(52, 168, 83, 0.25);\n}\n.dark .status-approved {\n  color: #86efac;\n  border-color: rgba(52, 168, 83, 0.30);\n}\n.status-rejected {\n  background: rgba(234, 67, 53, 0.10);\n  color: #991b1b;\n  border: 1px solid rgba(234, 67, 53, 0.25);\n}\n.dark .status-rejected {\n  color: #fca5a5;\n  border-color: rgba(234, 67, 53, 0.30);\n}\n.app-id-badge {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: var(--review-item-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 12px;\n  padding: 12px 16px;\n  transition: background 0.3s ease, border-color 0.3s ease;\n}\n.app-id-label {\n  font-size: 12px;\n  color: var(--gray);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.app-id-value {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--primary);\n  font-family: monospace;\n  letter-spacing: 1px;\n}\n.review-section {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.review-section-title {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--primary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding-bottom: 6px;\n  border-bottom: 1.5px solid var(--card-border);\n  transition: border-color 0.3s ease;\n}\n.review-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 6px;\n}\n.review-item {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  background: var(--review-item-bg);\n  border-radius: 8px;\n  padding: 10px 12px;\n  transition: background 0.3s ease;\n}\n.review-item span {\n  font-size: 11px;\n  color: var(--review-item-text);\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.review-item strong {\n  font-size: 13px;\n  color: var(--review-item-val);\n  word-break: break-word;\n}\n.full-width {\n  grid-column: 1 / -1;\n}\n.address-blocks {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.address-block {\n  background: var(--review-item-bg);\n  border-radius: 10px;\n  padding: 12px;\n  transition: background 0.3s ease;\n}\n.address-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--primary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 6px;\n}\n.address-text {\n  font-size: 13px;\n  color: var(--dark);\n  line-height: 1.6;\n}\n.submitted-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: var(--review-item-bg);\n  border-radius: 10px;\n  padding: 12px 16px;\n  font-size: 13px;\n  transition: background 0.3s ease;\n}\n.submitted-row span {\n  color: var(--gray);\n}\n.submitted-row strong {\n  color: var(--dark);\n}\n.btn-outline {\n  background: transparent;\n  border: 1.5px solid var(--primary);\n  color: var(--primary);\n  border-radius: 10px;\n  padding: 10px 20px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s, color 0.2s;\n  font-size: 14px;\n}\n.btn-outline:hover {\n  background: var(--primary);\n  color: #ffffff;\n}\n.hero {\n  padding: 160px 0 100px;\n  background:\n    linear-gradient(\n      180deg,\n      var(--hero-bg-from) 0%,\n      var(--hero-bg-to) 100%);\n  transition: background 0.3s ease;\n}\n.hero-content {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 64px;\n  align-items: center;\n}\n.hero-title {\n  font-size: 56px;\n  font-weight: 700;\n  line-height: 1.1;\n  color: var(--dark);\n  margin-bottom: 24px;\n}\n.hero-title .highlight {\n  background: var(--bg-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-subtitle {\n  font-size: 18px;\n  color: var(--gray);\n  margin-bottom: 32px;\n  max-width: 480px;\n}\n.hero-buttons {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 48px;\n}\n.btn-lg {\n  padding: 16px 32px;\n  font-size: 16px;\n}\n.hero-stats {\n  display: flex;\n  gap: 48px;\n}\n.stat {\n  display: flex;\n  flex-direction: column;\n}\n.stat-value {\n  font-size: 32px;\n  font-weight: 700;\n  color: var(--dark);\n}\n.stat-label {\n  font-size: 14px;\n  color: var(--gray);\n}\n.hero-visual {\n  position: relative;\n  height: 400px;\n}\n.card-visual {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 340px;\n  height: 220px;\n  background: var(--bg-gradient);\n  border-radius: 20px;\n  padding: 24px;\n  color: #ffffff;\n  box-shadow: 0 20px 60px rgba(99, 102, 241, 0.35);\n}\n.card-balance {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 32px;\n}\n.balance-label {\n  font-size: 12px;\n  opacity: 0.8;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.balance-value {\n  font-size: 28px;\n  font-weight: 700;\n}\n.card-info {\n  display: flex;\n  justify-content: space-between;\n}\n.card-number {\n  font-size: 16px;\n  letter-spacing: 2px;\n}\n.card-expiry {\n  font-size: 14px;\n}\n.card-logo {\n  position: absolute;\n  bottom: 24px;\n  right: 24px;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n.floating-elements {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.float-item {\n  position: absolute;\n  background: var(--float-bg);\n  padding: 12px 20px;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px var(--float-shadow);\n  font-weight: 600;\n  font-size: 14px;\n  transition: background 0.3s ease;\n}\n.float-1 {\n  top: 20%;\n  right: 10%;\n  color: var(--secondary);\n}\n.float-2 {\n  bottom: 30%;\n  left: 5%;\n  color: var(--danger);\n}\n.float-3 {\n  top: 60%;\n  right: 0;\n  background: var(--primary);\n  color: #ffffff;\n}\n.features {\n  padding: 100px 0;\n  background: var(--features-bg);\n  transition: background 0.3s ease;\n}\n.section-header {\n  text-align: center;\n  margin-bottom: 64px;\n}\n.section-header h2 {\n  font-size: 40px;\n  font-weight: 700;\n  margin-bottom: 16px;\n  color: var(--dark);\n}\n.section-header p {\n  font-size: 18px;\n  color: var(--gray);\n}\n.features-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 32px;\n}\n.feature-card {\n  padding: 32px;\n  background: var(--white);\n  border: 1px solid var(--card-border);\n  border-radius: 16px;\n  transition:\n    transform 0.3s ease,\n    box-shadow 0.3s ease,\n    border-color 0.3s ease,\n    background 0.3s ease;\n}\n.feature-card:hover {\n  transform: translateY(-8px);\n  box-shadow: var(--card-hover-shadow);\n  border-color: var(--primary);\n}\n.feature-icon {\n  width: 56px;\n  height: 56px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.12) 0%,\n      rgba(139, 92, 246, 0.12) 100%);\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  margin-bottom: 20px;\n}\n.feature-card h3 {\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 12px;\n  color: var(--dark);\n}\n.feature-card p {\n  color: var(--gray);\n  line-height: 1.6;\n}\n.about {\n  padding: 100px 0;\n  background: var(--about-bg);\n  transition: background 0.3s ease;\n}\n.about-content {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 64px;\n  align-items: center;\n}\n.about-text h2 {\n  font-size: 40px;\n  font-weight: 700;\n  margin-bottom: 24px;\n  color: var(--dark);\n}\n.about-text > p {\n  font-size: 18px;\n  color: var(--gray);\n  margin-bottom: 32px;\n  line-height: 1.7;\n}\n.about-features {\n  list-style: none;\n}\n.about-features li {\n  font-size: 16px;\n  margin-bottom: 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: var(--dark-secondary);\n}\n.about-visual {\n  display: flex;\n  justify-content: center;\n}\n.phone-mockup {\n  width: 280px;\n  height: 560px;\n  background: var(--phone-bg);\n  border-radius: 40px;\n  padding: 8px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n  transition: background 0.3s ease;\n}\n.phone-screen {\n  background: var(--phone-screen);\n  border-radius: 32px;\n  height: 100%;\n  padding: 24px;\n  transition: background 0.3s ease;\n}\n.app-header {\n  font-size: 18px;\n  font-weight: 700;\n  background: var(--bg-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: 32px;\n}\n.app-balance {\n  font-size: 32px;\n  font-weight: 700;\n  margin-bottom: 32px;\n  color: var(--dark);\n}\n.app-actions {\n  display: flex;\n  gap: 16px;\n}\n.app-action {\n  flex: 1;\n  padding: 12px;\n  background: var(--app-action-bg);\n  border-radius: 12px;\n  text-align: center;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--dark);\n  transition: background 0.3s ease, color 0.3s ease;\n}\n.cta {\n  padding: 100px 0;\n  background: var(--bg-gradient);\n}\n.cta-content {\n  text-align: center;\n  color: #ffffff;\n}\n.cta-content h2 {\n  font-size: 40px;\n  font-weight: 700;\n  margin-bottom: 16px;\n}\n.cta-content p {\n  font-size: 18px;\n  opacity: 0.9;\n  margin-bottom: 32px;\n}\n.cta .btn-primary {\n  background: #ffffff;\n  color: var(--primary);\n}\n.cta .btn-primary:hover {\n  background: var(--light);\n}\n.footer {\n  background: var(--footer-bg);\n  padding-top: 64px;\n  transition: background 0.3s ease;\n}\n.footer-content {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  gap: 64px;\n  padding-bottom: 48px;\n}\n.footer-brand .logo-icon {\n  background: var(--bg-gradient);\n}\n.footer-brand .logo-text {\n  background: var(--bg-gradient);\n  -webkit-background-clip: text;\n}\n.footer-brand p {\n  color: var(--footer-text);\n}\n.footer-links {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 32px;\n}\n.footer-column h4 {\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 20px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: var(--footer-text);\n}\n.footer-column a {\n  display: block;\n  color: var(--footer-text);\n  margin-bottom: 12px;\n  transition: color 0.2s;\n}\n.footer-column a:hover {\n  color: #4a03f0;\n}\n.footer-bottom {\n  border-top: 1px solid var(--footer-border);\n  padding: 24px 0;\n  text-align: center;\n  transition: border-color 0.3s ease;\n}\n.footer-bottom p {\n  color: var(--footer-text);\n  font-size: 14px;\n}\n.w-full {\n  width: 100%;\n}\n.mt-2 {\n  margin-top: 8px;\n}\n.spinner {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  margin-right: 6px;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideUp {\n  from {\n    transform: translateY(40px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@media (max-width: 992px) {\n  .hero-content {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n  .hero-subtitle {\n    margin: 0 auto 32px;\n  }\n  .hero-buttons {\n    justify-content: center;\n  }\n  .hero-stats {\n    justify-content: center;\n  }\n  .hero-visual {\n    display: none;\n  }\n  .features-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .about-content {\n    grid-template-columns: 1fr;\n  }\n  .about-visual {\n    display: none;\n  }\n}\n@media (max-width: 768px) {\n  .nav-links {\n    display: none;\n  }\n  .header-actions {\n    gap: 8px;\n  }\n  .hero-title {\n    font-size: 40px;\n  }\n  .features-grid {\n    grid-template-columns: 1fr;\n  }\n  .footer-content {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n  .footer-links {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n}\n@media (max-width: 500px) {\n  .review-grid {\n    grid-template-columns: 1fr;\n  }\n  .address-blocks {\n    grid-template-columns: 1fr;\n  }\n  .status-modal {\n    border-radius: 16px 16px 0 0;\n    align-self: flex-end;\n    max-height: 95vh;\n  }\n  .modal-backdrop {\n    align-items: flex-end;\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=landing.css.map */\n"] }]
  }], () => [{ type: ThemeService }, { type: ApplicationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Landing, { className: "Landing", filePath: "app/features/landing/landing.ts", lineNumber: 23 });
})();
export {
  Landing
};
//# sourceMappingURL=chunk-7JT32PNW.js.map
