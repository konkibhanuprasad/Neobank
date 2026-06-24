import {
  AuthService
} from "./chunk-LAQ3PO6A.js";
import {
  NotificationService
} from "./chunk-65BWTZ27.js";
import {
  ThemeService
} from "./chunk-3UVNMLKZ.js";
import {
  Router,
  RouterLink
} from "./chunk-5EBQK35F.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QR452MNT.js";

// src/app/features/auth/login/login.component.ts
function LoginComponent_Conditional_11_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.loginError());
  }
}
function LoginComponent_Conditional_11_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.loginErrors.usernameOrEmail);
  }
}
function LoginComponent_Conditional_11_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.loginErrors.password);
  }
}
function LoginComponent_Conditional_11_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 33);
    \u0275\u0275text(1, " Signing in... ");
  }
}
function LoginComponent_Conditional_11_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Sign In \u2192 ");
  }
}
function LoginComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "h1");
    \u0275\u0275text(2, "Welcome Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Sign in to your NeoBank account");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, LoginComponent_Conditional_11_Conditional_5_Template, 2, 1, "div", 11);
    \u0275\u0275elementStart(6, "form", 12);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Conditional_11_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.login());
    });
    \u0275\u0275elementStart(7, "div", 13)(8, "label", 14);
    \u0275\u0275text(9, "Username or Email ");
    \u0275\u0275elementStart(10, "span", 15);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Conditional_11_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.usernameOrEmail, $event) || (ctx_r1.usernameOrEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, LoginComponent_Conditional_11_Conditional_13_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 13)(15, "div", 18)(16, "label", 19);
    \u0275\u0275text(17, "Password ");
    \u0275\u0275elementStart(18, "span", 15);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 20)(21, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Conditional_11_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.password, $event) || (ctx_r1.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 22);
    \u0275\u0275listener("click", function LoginComponent_Conditional_11_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePassword());
    });
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(24, LoginComponent_Conditional_11_Conditional_24_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 23)(26, "label", 24)(27, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Conditional_11_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rememberMe, $event) || (ctx_r1.rememberMe = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29, "Remember me");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "button", 26);
    \u0275\u0275conditionalCreate(31, LoginComponent_Conditional_11_Conditional_31_Template, 2, 0)(32, LoginComponent_Conditional_11_Conditional_32_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 27)(34, "button", 28);
    \u0275\u0275listener("click", function LoginComponent_Conditional_11_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForgotUsername());
    });
    \u0275\u0275text(35, "Forgot Username?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 29);
    \u0275\u0275text(37, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 28);
    \u0275\u0275listener("click", function LoginComponent_Conditional_11_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForgotPassword());
    });
    \u0275\u0275text(39, "Forgot Password?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 30)(41, "p");
    \u0275\u0275text(42, "Don't have an account ? ");
    \u0275\u0275elementStart(43, "a", 31);
    \u0275\u0275text(44, "Sign Up");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 30)(46, "p");
    \u0275\u0275text(47, "Open New Account ! ");
    \u0275\u0275elementStart(48, "a", 32);
    \u0275\u0275text(49, "Open Account");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.loginError() ? 5 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-error", ctx_r1.loginErrors.usernameOrEmail);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.usernameOrEmail);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loginErrors.usernameOrEmail ? 13 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("is-error", ctx_r1.loginErrors.password);
    \u0275\u0275property("type", ctx_r1.showPassword() ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.password);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.showPassword() ? "Hide" : "Show", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loginErrors.password ? 24 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rememberMe);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.loginLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loginLoading() ? 31 : 32);
  }
}
function LoginComponent_Conditional_12_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fuError());
  }
}
function LoginComponent_Conditional_12_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fuErrors.email);
  }
}
function LoginComponent_Conditional_12_Conditional_0_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fuErrors.captcha);
  }
}
function LoginComponent_Conditional_12_Conditional_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 33);
    \u0275\u0275text(1, " Sending OTP... ");
  }
}
function LoginComponent_Conditional_12_Conditional_0_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Send OTP \u2192 ");
  }
}
function LoginComponent_Conditional_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 35);
    \u0275\u0275listener("click", function LoginComponent_Conditional_12_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.backToLogin());
    });
    \u0275\u0275text(2, "\u2190 Back to Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4, "Forgot Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Enter your registered email to recover your username via OTP");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, LoginComponent_Conditional_12_Conditional_0_Conditional_7_Template, 2, 1, "div", 11);
    \u0275\u0275elementStart(8, "form", 12);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Conditional_12_Conditional_0_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendForgotUOtp());
    });
    \u0275\u0275elementStart(9, "div", 13)(10, "label");
    \u0275\u0275text(11, "Email Address ");
    \u0275\u0275elementStart(12, "span", 15);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Conditional_12_Conditional_0_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.fuEmail, $event) || (ctx_r1.fuEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, LoginComponent_Conditional_12_Conditional_0_Conditional_15_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 13)(17, "label");
    \u0275\u0275text(18, "Captcha ");
    \u0275\u0275elementStart(19, "span", 15);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 37)(22, "span", 38);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 39);
    \u0275\u0275listener("click", function LoginComponent_Conditional_12_Conditional_0_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.refreshCaptcha("forgotU"));
    });
    \u0275\u0275text(25, "\u21BA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Conditional_12_Conditional_0_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.fuCaptchaAnswer, $event) || (ctx_r1.fuCaptchaAnswer = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, LoginComponent_Conditional_12_Conditional_0_Conditional_27_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 26);
    \u0275\u0275conditionalCreate(29, LoginComponent_Conditional_12_Conditional_0_Conditional_29_Template, 2, 0)(30, LoginComponent_Conditional_12_Conditional_0_Conditional_30_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 30)(32, "p");
    \u0275\u0275text(33, "Remembered? ");
    \u0275\u0275elementStart(34, "a", 41);
    \u0275\u0275listener("click", function LoginComponent_Conditional_12_Conditional_0_Template_a_click_34_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.backToLogin());
    });
    \u0275\u0275text(35, "Back to Login");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.fuError() ? 7 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-error", ctx_r1.fuErrors.email);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.fuEmail);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fuErrors.email ? 15 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.fuCaptchaText());
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-error", ctx_r1.fuErrors.captcha);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.fuCaptchaAnswer);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fuErrors.captcha ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.fuLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fuLoading() ? 29 : 30);
  }
}
function LoginComponent_Conditional_12_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fuError());
  }
}
function LoginComponent_Conditional_12_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fuSuccess());
  }
}
function LoginComponent_Conditional_12_Conditional_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fuErrors.otp);
  }
}
function LoginComponent_Conditional_12_Conditional_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 33);
    \u0275\u0275text(1, " Verifying... ");
  }
}
function LoginComponent_Conditional_12_Conditional_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Verify OTP ");
  }
}
function LoginComponent_Conditional_12_Conditional_1_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Resend in ", ctx_r1.fuResendCooldown(), "s");
  }
}
function LoginComponent_Conditional_12_Conditional_1_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function LoginComponent_Conditional_12_Conditional_1_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.resendFuOtp());
    });
    \u0275\u0275text(1, "Resend OTP");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.fuLoading());
  }
}
function LoginComponent_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "h1");
    \u0275\u0275text(2, "Enter OTP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "OTP sent to ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(7, LoginComponent_Conditional_12_Conditional_1_Conditional_7_Template, 2, 1, "div", 11);
    \u0275\u0275conditionalCreate(8, LoginComponent_Conditional_12_Conditional_1_Conditional_8_Template, 2, 1, "div", 42);
    \u0275\u0275elementStart(9, "div", 43);
    \u0275\u0275text(10, "\u{1F510}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "form", 12);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Conditional_12_Conditional_1_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.verifyForgotUOtp());
    });
    \u0275\u0275elementStart(12, "div", 13)(13, "label");
    \u0275\u0275text(14, "Enter OTP ");
    \u0275\u0275elementStart(15, "span", 15);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Conditional_12_Conditional_1_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.fuOtp, $event) || (ctx_r1.fuOtp = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, LoginComponent_Conditional_12_Conditional_1_Conditional_18_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 26);
    \u0275\u0275conditionalCreate(20, LoginComponent_Conditional_12_Conditional_1_Conditional_20_Template, 2, 0)(21, LoginComponent_Conditional_12_Conditional_1_Conditional_21_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 45)(23, "button", 28);
    \u0275\u0275listener("click", function LoginComponent_Conditional_12_Conditional_1_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.forgotUStep.set("input"));
    });
    \u0275\u0275text(24, "\u2190 Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 29);
    \u0275\u0275text(26, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, LoginComponent_Conditional_12_Conditional_1_Conditional_27_Template, 2, 1, "span", 46)(28, LoginComponent_Conditional_12_Conditional_1_Conditional_28_Template, 2, 1, "button", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.fuEmail);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fuError() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fuSuccess() ? 8 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("is-error", ctx_r1.fuErrors.otp);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.fuOtp);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fuErrors.otp ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.fuLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fuLoading() ? 20 : 21);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.fuResendCooldown() > 0 ? 27 : 28);
  }
}
function LoginComponent_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 49)(2, "span");
    \u0275\u0275text(3, "\u2709\uFE0F");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Username Sent!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 50);
    \u0275\u0275text(7, " Your username has been sent to");
    \u0275\u0275element(8, "br");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 51);
    \u0275\u0275text(12, " \u{1F4EC} Please check your inbox and spam/junk folder. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 52);
    \u0275\u0275listener("click", function LoginComponent_Conditional_12_Conditional_2_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.backToLogin());
    });
    \u0275\u0275text(14, "\u2190 Back to Login");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.fuEmail);
  }
}
function LoginComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LoginComponent_Conditional_12_Conditional_0_Template, 36, 12);
    \u0275\u0275conditionalCreate(1, LoginComponent_Conditional_12_Conditional_1_Template, 29, 10);
    \u0275\u0275conditionalCreate(2, LoginComponent_Conditional_12_Conditional_2_Template, 15, 1, "div", 34);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.forgotUStep() === "input" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.forgotUStep() === "otp" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.forgotUStep() === "done" ? 2 : -1);
  }
}
function LoginComponent_Conditional_13_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fpError());
  }
}
function LoginComponent_Conditional_13_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fpErrors.email);
  }
}
function LoginComponent_Conditional_13_Conditional_0_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fpErrors.captcha);
  }
}
function LoginComponent_Conditional_13_Conditional_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 33);
    \u0275\u0275text(1, " Sending OTP... ");
  }
}
function LoginComponent_Conditional_13_Conditional_0_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Send OTP \u2192 ");
  }
}
function LoginComponent_Conditional_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 35);
    \u0275\u0275listener("click", function LoginComponent_Conditional_13_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.backToLogin());
    });
    \u0275\u0275text(2, "\u2190 Back to Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4, "Forgot Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Enter your registered email to receive an OTP");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, LoginComponent_Conditional_13_Conditional_0_Conditional_7_Template, 2, 1, "div", 11);
    \u0275\u0275elementStart(8, "form", 12);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Conditional_13_Conditional_0_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendForgotPOtp());
    });
    \u0275\u0275elementStart(9, "div", 13)(10, "label");
    \u0275\u0275text(11, "Email Address ");
    \u0275\u0275elementStart(12, "span", 15);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Conditional_13_Conditional_0_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.fpEmail, $event) || (ctx_r1.fpEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, LoginComponent_Conditional_13_Conditional_0_Conditional_15_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 13)(17, "label");
    \u0275\u0275text(18, "Captcha ");
    \u0275\u0275elementStart(19, "span", 15);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 37)(22, "span", 38);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 39);
    \u0275\u0275listener("click", function LoginComponent_Conditional_13_Conditional_0_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.refreshCaptcha("forgotP"));
    });
    \u0275\u0275text(25, "\u21BA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Conditional_13_Conditional_0_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.fpCaptchaAnswer, $event) || (ctx_r1.fpCaptchaAnswer = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, LoginComponent_Conditional_13_Conditional_0_Conditional_27_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 26);
    \u0275\u0275conditionalCreate(29, LoginComponent_Conditional_13_Conditional_0_Conditional_29_Template, 2, 0)(30, LoginComponent_Conditional_13_Conditional_0_Conditional_30_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 30)(32, "p");
    \u0275\u0275text(33, "Remembered? ");
    \u0275\u0275elementStart(34, "a", 41);
    \u0275\u0275listener("click", function LoginComponent_Conditional_13_Conditional_0_Template_a_click_34_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.backToLogin());
    });
    \u0275\u0275text(35, "Back to Login");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.fpError() ? 7 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-error", ctx_r1.fpErrors.email);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.fpEmail);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fpErrors.email ? 15 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.fpCaptchaText());
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-error", ctx_r1.fpErrors.captcha);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.fpCaptchaAnswer);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fpErrors.captcha ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.fpLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fpLoading() ? 29 : 30);
  }
}
function LoginComponent_Conditional_13_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fpError());
  }
}
function LoginComponent_Conditional_13_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fpSuccess());
  }
}
function LoginComponent_Conditional_13_Conditional_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fpErrors.otp);
  }
}
function LoginComponent_Conditional_13_Conditional_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 33);
    \u0275\u0275text(1, " Verifying... ");
  }
}
function LoginComponent_Conditional_13_Conditional_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Verify OTP \u2192 ");
  }
}
function LoginComponent_Conditional_13_Conditional_1_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Resend in ", ctx_r1.fpResendCooldown(), "s");
  }
}
function LoginComponent_Conditional_13_Conditional_1_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function LoginComponent_Conditional_13_Conditional_1_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.resendFpOtp());
    });
    \u0275\u0275text(1, "Resend OTP");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.fpLoading());
  }
}
function LoginComponent_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "h1");
    \u0275\u0275text(2, "Enter OTP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "OTP sent to ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(7, LoginComponent_Conditional_13_Conditional_1_Conditional_7_Template, 2, 1, "div", 11);
    \u0275\u0275conditionalCreate(8, LoginComponent_Conditional_13_Conditional_1_Conditional_8_Template, 2, 1, "div", 42);
    \u0275\u0275elementStart(9, "div", 43);
    \u0275\u0275text(10, "\u{1F510}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "form", 12);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Conditional_13_Conditional_1_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.verifyForgotPOtp());
    });
    \u0275\u0275elementStart(12, "div", 13)(13, "label");
    \u0275\u0275text(14, "Enter OTP ");
    \u0275\u0275elementStart(15, "span", 15);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Conditional_13_Conditional_1_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.fpOtp, $event) || (ctx_r1.fpOtp = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, LoginComponent_Conditional_13_Conditional_1_Conditional_18_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 26);
    \u0275\u0275conditionalCreate(20, LoginComponent_Conditional_13_Conditional_1_Conditional_20_Template, 2, 0)(21, LoginComponent_Conditional_13_Conditional_1_Conditional_21_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 45)(23, "button", 28);
    \u0275\u0275listener("click", function LoginComponent_Conditional_13_Conditional_1_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.forgotPStep.set("input"));
    });
    \u0275\u0275text(24, "\u2190 Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 29);
    \u0275\u0275text(26, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, LoginComponent_Conditional_13_Conditional_1_Conditional_27_Template, 2, 1, "span", 46)(28, LoginComponent_Conditional_13_Conditional_1_Conditional_28_Template, 2, 1, "button", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.fpEmail);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fpError() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fpSuccess() ? 8 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("is-error", ctx_r1.fpErrors.otp);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.fpOtp);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fpErrors.otp ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.fpLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fpLoading() ? 20 : 21);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.fpResendCooldown() > 0 ? 27 : 28);
  }
}
function LoginComponent_Conditional_13_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fpError());
  }
}
function LoginComponent_Conditional_13_Conditional_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fpErrors.newPassword);
  }
}
function LoginComponent_Conditional_13_Conditional_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 60);
    \u0275\u0275element(2, "div", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getPasswordStrength(ctx_r1.fpNewPassword).cls);
    \u0275\u0275styleProp("width", ctx_r1.getPasswordStrength(ctx_r1.fpNewPassword).width, "%");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getPasswordStrength(ctx_r1.fpNewPassword).cls);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getPasswordStrength(ctx_r1.fpNewPassword).label, " ");
  }
}
function LoginComponent_Conditional_13_Conditional_2_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fpErrors.confirmPassword);
  }
}
function LoginComponent_Conditional_13_Conditional_2_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1, "\u2713 Passwords match");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_13_Conditional_2_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 33);
    \u0275\u0275text(1, " Resetting... ");
  }
}
function LoginComponent_Conditional_13_Conditional_2_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Reset Password ");
  }
}
function LoginComponent_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "h1");
    \u0275\u0275text(2, "Set New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Create a strong new password for your account");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, LoginComponent_Conditional_13_Conditional_2_Conditional_5_Template, 2, 1, "div", 11);
    \u0275\u0275elementStart(6, "form", 12);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Conditional_13_Conditional_2_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitResetPassword());
    });
    \u0275\u0275elementStart(7, "div", 13)(8, "label");
    \u0275\u0275text(9, "New Password ");
    \u0275\u0275elementStart(10, "span", 15);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 20)(13, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Conditional_13_Conditional_2_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.fpNewPassword, $event) || (ctx_r1.fpNewPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 22);
    \u0275\u0275listener("click", function LoginComponent_Conditional_13_Conditional_2_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFpPassword());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(16, LoginComponent_Conditional_13_Conditional_2_Conditional_16_Template, 2, 1, "span", 17);
    \u0275\u0275conditionalCreate(17, LoginComponent_Conditional_13_Conditional_2_Conditional_17_Template, 5, 7, "div", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 13)(19, "label");
    \u0275\u0275text(20, "Confirm New Password ");
    \u0275\u0275elementStart(21, "span", 15);
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 20)(24, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Conditional_13_Conditional_2_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.fpConfirmPassword, $event) || (ctx_r1.fpConfirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 22);
    \u0275\u0275listener("click", function LoginComponent_Conditional_13_Conditional_2_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFpConfirm());
    });
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(27, LoginComponent_Conditional_13_Conditional_2_Conditional_27_Template, 2, 1, "span", 17)(28, LoginComponent_Conditional_13_Conditional_2_Conditional_28_Template, 2, 0, "span", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 26);
    \u0275\u0275conditionalCreate(30, LoginComponent_Conditional_13_Conditional_2_Conditional_30_Template, 2, 0)(31, LoginComponent_Conditional_13_Conditional_2_Conditional_31_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.fpError() ? 5 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("is-error", ctx_r1.fpErrors.newPassword);
    \u0275\u0275property("type", ctx_r1.showFpPassword() ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.fpNewPassword);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.showFpPassword() ? "Hide" : "Show", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fpErrors.newPassword ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fpNewPassword.length > 0 ? 17 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-error", ctx_r1.fpErrors.confirmPassword)("is-success", ctx_r1.fpConfirmPassword && ctx_r1.fpNewPassword === ctx_r1.fpConfirmPassword);
    \u0275\u0275property("type", ctx_r1.showFpConfirm() ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.fpConfirmPassword);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.showFpConfirm() ? "Hide" : "Show", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fpErrors.confirmPassword ? 27 : ctx_r1.fpConfirmPassword && ctx_r1.fpNewPassword === ctx_r1.fpConfirmPassword ? 28 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.fpLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fpLoading() ? 30 : 31);
  }
}
function LoginComponent_Conditional_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 63)(2, "span");
    \u0275\u0275text(3, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Password Reset!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 50);
    \u0275\u0275text(7, " Your password has been reset successfully.");
    \u0275\u0275element(8, "br");
    \u0275\u0275text(9, " You can now login with your new password. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 51);
    \u0275\u0275text(11, " \u{1F512} For security, do not share your password with anyone. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 52);
    \u0275\u0275listener("click", function LoginComponent_Conditional_13_Conditional_3_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.backToLogin());
    });
    \u0275\u0275text(13, " \u2190 Back to Login ");
    \u0275\u0275elementEnd()();
  }
}
function LoginComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LoginComponent_Conditional_13_Conditional_0_Template, 36, 12);
    \u0275\u0275conditionalCreate(1, LoginComponent_Conditional_13_Conditional_1_Template, 29, 10);
    \u0275\u0275conditionalCreate(2, LoginComponent_Conditional_13_Conditional_2_Template, 32, 18);
    \u0275\u0275conditionalCreate(3, LoginComponent_Conditional_13_Conditional_3_Template, 14, 0, "div", 34);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.forgotPStep() === "input" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.forgotPStep() === "otp" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.forgotPStep() === "reset" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.forgotPStep() === "done" ? 3 : -1);
  }
}
function LoginComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1, "\u{1F3E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h2");
    \u0275\u0275text(3, "Welcome Back!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Your financial journey continues with NeoBank");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 65)(7, "div", 66)(8, "span");
    \u0275\u0275text(9, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "Secure Login");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 66)(13, "span");
    \u0275\u0275text(14, "\u26A1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Instant Access");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 66)(18, "span");
    \u0275\u0275text(19, "\u{1F4CA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "Real-time Analytics");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 66)(23, "span");
    \u0275\u0275text(24, "\u{1F4B3}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26, "Manage All Accounts");
    \u0275\u0275elementEnd()()();
  }
}
function LoginComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h2");
    \u0275\u0275text(3, "Forgot Your Username?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "We'll send your username to your registered email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 65)(7, "div", 66)(8, "span");
    \u0275\u0275text(9, "\u{1F4E7}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "Enter your registered email");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 66)(13, "span");
    \u0275\u0275text(14, "\u{1F510}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Verify with OTP");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 66)(18, "span");
    \u0275\u0275text(19, "\u2709\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "Username sent to email");
    \u0275\u0275elementEnd()()();
  }
}
function LoginComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1, "\u{1F511}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h2");
    \u0275\u0275text(3, "Reset Your Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Securely reset your password in 3 simple steps");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 65)(7, "div", 66)(8, "span");
    \u0275\u0275text(9, "\u{1F4E7}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "Enter your registered email");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 66)(13, "span");
    \u0275\u0275text(14, "\u{1F510}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Verify with OTP");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 66)(18, "span");
    \u0275\u0275text(19, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "Set your new password");
    \u0275\u0275elementEnd()()();
  }
}
var LoginComponent = class _LoginComponent {
  constructor(authService, router, popup, themeService) {
    this.authService = authService;
    this.router = router;
    this.popup = popup;
    this.themeService = themeService;
    this.activeView = signal("login", ...ngDevMode ? [{ debugName: "activeView" }] : (
      /* istanbul ignore next */
      []
    ));
    this.usernameOrEmail = "";
    this.password = "";
    this.showPassword = signal(false, ...ngDevMode ? [{ debugName: "showPassword" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rememberMe = false;
    this.loginLoading = signal(false, ...ngDevMode ? [{ debugName: "loginLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loginError = signal("", ...ngDevMode ? [{ debugName: "loginError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loginErrors = {};
    this.forgotUStep = signal("input", ...ngDevMode ? [{ debugName: "forgotUStep" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fuEmail = "";
    this.fuCaptchaAnswer = "";
    this.fuOtp = "";
    this.fuLoading = signal(false, ...ngDevMode ? [{ debugName: "fuLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fuError = signal("", ...ngDevMode ? [{ debugName: "fuError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fuSuccess = signal("", ...ngDevMode ? [{ debugName: "fuSuccess" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fuErrors = {};
    this.fuCaptchaToken = signal("", ...ngDevMode ? [{ debugName: "fuCaptchaToken" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fuCaptchaText = signal("", ...ngDevMode ? [{ debugName: "fuCaptchaText" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fuResendCooldown = signal(0, ...ngDevMode ? [{ debugName: "fuResendCooldown" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fuTimer = void 0;
    this.forgotPStep = signal("input", ...ngDevMode ? [{ debugName: "forgotPStep" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fpEmail = "";
    this.fpCaptchaAnswer = "";
    this.fpOtp = "";
    this.fpNewPassword = "";
    this.fpConfirmPassword = "";
    this.fpLoading = signal(false, ...ngDevMode ? [{ debugName: "fpLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fpError = signal("", ...ngDevMode ? [{ debugName: "fpError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fpSuccess = signal("", ...ngDevMode ? [{ debugName: "fpSuccess" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fpErrors = {};
    this.showFpPassword = signal(false, ...ngDevMode ? [{ debugName: "showFpPassword" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showFpConfirm = signal(false, ...ngDevMode ? [{ debugName: "showFpConfirm" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fpCaptchaToken = signal("", ...ngDevMode ? [{ debugName: "fpCaptchaToken" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fpCaptchaText = signal("", ...ngDevMode ? [{ debugName: "fpCaptchaText" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fpResendCooldown = signal(0, ...ngDevMode ? [{ debugName: "fpResendCooldown" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fpTimer = void 0;
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    clearInterval(this.fuTimer);
    clearInterval(this.fpTimer);
  }
  // Add these two methods anywhere in the class:
  toggleTheme() {
    this.themeService.toggle();
  }
  isDark() {
    return this.themeService.isDark();
  }
  // ─────────────────────────────────────────────
  //  VIEW SWITCH
  // ─────────────────────────────────────────────
  showForgotUsername() {
    this.activeView.set("forgotUsername");
    this.resetForgotU();
    this.loadCaptcha("forgotU");
  }
  showForgotPassword() {
    this.activeView.set("forgotPassword");
    this.resetForgotP();
    this.loadCaptcha("forgotP");
  }
  backToLogin() {
    this.activeView.set("login");
    this.loginError.set("");
  }
  // ─────────────────────────────────────────────
  //  CAPTCHA
  // ─────────────────────────────────────────────
  loadCaptcha(target) {
    this.authService.getCaptcha().subscribe({
      next: (res) => {
        if (res.success && res.data) {
          if (target === "forgotU") {
            this.fuCaptchaToken.set(res.data.token);
            this.fuCaptchaText.set(res.data.captchaText);
            this.fuCaptchaAnswer = "";
          } else {
            this.fpCaptchaToken.set(res.data.token);
            this.fpCaptchaText.set(res.data.captchaText);
            this.fpCaptchaAnswer = "";
          }
        }
      },
      error: (error) => {
      }
    });
  }
  refreshCaptcha(target) {
    if (target === "forgotU")
      this.fuErrors.captcha = void 0;
    if (target === "forgotP")
      this.fpErrors.captcha = void 0;
    this.loadCaptcha(target);
  }
  // ─────────────────────────────────────────────
  //  LOGIN
  // ─────────────────────────────────────────────
  login() {
    this.loginErrors = {};
    this.loginError.set("");
    if (!this.usernameOrEmail.trim()) {
      this.loginErrors.usernameOrEmail = "Username or email is required.";
      this.popup.show("Username or email is required.", "danger");
      return;
    }
    if (!this.password) {
      this.loginErrors.password = "Password is required.";
      this.popup.show("Password is required.", "danger");
      return;
    }
    this.loginLoading.set(true);
    this.authService.login({
      usernameOrEmail: this.usernameOrEmail.trim(),
      password: this.password
    }).subscribe({
      next: (res) => {
        this.loginLoading.set(false);
        if (res.success && res.data) {
          this.popup.show("Welcome  " + res.data.fullName, "success");
          localStorage.setItem("token", res.data.token ?? "");
          localStorage.setItem("user", JSON.stringify(res.data));
          const role = res.data.role;
          if (role === "ADMIN" || role === "SUPER_ADMIN") {
            this.router.navigate(["/admin"]);
          } else if (role === "MANAGER") {
            this.router.navigate(["/manager"]);
          } else {
            this.router.navigate(["/dashboard"]);
          }
        } else {
          this.loginError.set(res.message || "Login failed.");
          this.popup.show(res.message, "danger");
        }
      },
      error: (err) => {
        this.loginLoading.set(false);
        this.loginError.set(this.extractError(err));
        this.popup.show(this.extractError(err), "danger");
      }
    });
  }
  // // localStorage keys:
  // localStorage.setItem('token', res.data.token);   // JWT string
  // localStorage.setItem('user', JSON.stringify({     // User object
  //   userId:        number,
  //   username:      string,
  //   email:         string,
  //   fullName:      string | null,
  //   accountNumber: string | null,
  //   role:          'CUSTOMER' | 'ADMIN' | 'SUPER_ADMIN' | 'MANAGER',
  //   token:         string
  // }));
  // ─────────────────────────────────────────────
  //  FORGOT USERNAME
  // ─────────────────────────────────────────────
  sendForgotUOtp() {
    this.fuErrors = {};
    if (!this.fuEmail.trim()) {
      this.fuErrors.email = "Email is required.";
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.fuEmail)) {
      this.fuErrors.email = "Enter a valid email.";
      return;
    }
    if (!this.fuCaptchaAnswer.trim()) {
      this.fuErrors.captcha = "Please enter the captcha.";
      return;
    }
    this.fuLoading.set(true);
    this.fuError.set("");
    this.authService.forgotUsername({
      email: this.fuEmail.trim().toLowerCase(),
      captchaToken: this.fuCaptchaToken(),
      captchaAnswer: this.fuCaptchaAnswer.trim()
    }).subscribe({
      next: (res) => {
        this.fuLoading.set(false);
        if (res.success) {
          this.forgotUStep.set("otp");
          this.fuSuccess.set(`OTP sent to ${this.fuEmail}`);
          this.startTimer("fu");
        } else {
          this.fuError.set(res.message);
          this.refreshCaptcha("forgotU");
        }
      },
      error: (err) => {
        this.fuLoading.set(false);
        this.fuError.set(this.extractError(err));
        this.popup.show(this.extractError(err), "danger");
        this.refreshCaptcha("forgotU");
      }
    });
  }
  verifyForgotUOtp() {
    if (!this.fuOtp || this.fuOtp.length !== 6) {
      this.fuErrors.otp = "Enter valid 6-digit OTP.";
      return;
    }
    this.fuErrors.otp = void 0;
    this.fuLoading.set(true);
    this.fuError.set("");
    this.authService.verifyForgotUsernameOtp({
      email: this.fuEmail.trim().toLowerCase(),
      otp: this.fuOtp
    }).subscribe({
      next: (res) => {
        this.fuLoading.set(false);
        if (res.success) {
          this.forgotUStep.set("done");
          clearInterval(this.fuTimer);
        } else {
          this.fuError.set(res.message);
        }
      },
      error: (err) => {
        this.fuLoading.set(false);
        const code = err?.error?.errorCode || "";
        if (code.includes("OTP")) {
          this.fuErrors.otp = err?.error?.message || "Invalid OTP.";
        } else {
          this.fuError.set(this.extractError(err));
          this.popup.show(this.extractError(err), "danger");
        }
      }
    });
  }
  resendFuOtp() {
    if (this.fuResendCooldown() > 0)
      return;
    this.fuLoading.set(true);
    this.fuErrors.otp = void 0;
    this.authService.resendOtp(this.fuEmail, "USERNAME_RECOVERY").subscribe({
      next: () => {
        this.fuLoading.set(false);
        this.fuSuccess.set("New OTP sent.");
        this.fuOtp = "";
        this.startTimer("fu");
        setTimeout(() => this.fuSuccess.set(""), 4e3);
      },
      error: (err) => {
        this.fuLoading.set(false);
        this.fuErrors.otp = this.extractError(err);
      }
    });
  }
  resetForgotU() {
    this.forgotUStep.set("input");
    this.fuEmail = "";
    this.fuCaptchaAnswer = "";
    this.fuOtp = "";
    this.fuErrors = {};
    this.fuError.set("");
    this.fuSuccess.set("");
    this.fuResendCooldown.set(0);
    clearInterval(this.fuTimer);
  }
  // ─────────────────────────────────────────────
  //  FORGOT PASSWORD
  // ─────────────────────────────────────────────
  sendForgotPOtp() {
    this.fpErrors = {};
    if (!this.fpEmail.trim()) {
      this.fpErrors.email = "Email is required.";
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.fpEmail)) {
      this.fpErrors.email = "Enter a valid email.";
      return;
    }
    if (!this.fpCaptchaAnswer.trim()) {
      this.fpErrors.captcha = "Please enter the captcha.";
      return;
    }
    this.fpLoading.set(true);
    this.fpError.set("");
    this.authService.forgotPassword({
      email: this.fpEmail.trim().toLowerCase(),
      captchaToken: this.fpCaptchaToken(),
      captchaAnswer: this.fpCaptchaAnswer.trim()
    }).subscribe({
      next: (res) => {
        this.fpLoading.set(false);
        if (res.success) {
          this.forgotPStep.set("otp");
          this.fpSuccess.set(`OTP sent to ${this.fpEmail}`);
          this.startTimer("fp");
        } else {
          this.fpError.set(res.message);
          this.refreshCaptcha("forgotP");
        }
      },
      error: (err) => {
        this.fpLoading.set(false);
        this.fpError.set(this.extractError(err));
        this.refreshCaptcha("forgotP");
      }
    });
  }
  verifyForgotPOtp() {
    if (!this.fpOtp || this.fpOtp.length !== 6) {
      this.fpErrors.otp = "Enter valid 6-digit OTP.";
      return;
    }
    this.fpErrors.otp = void 0;
    this.forgotPStep.set("reset");
  }
  resendFpOtp() {
    if (this.fpResendCooldown() > 0)
      return;
    this.fpLoading.set(true);
    this.fpErrors.otp = void 0;
    this.authService.resendOtp(this.fpEmail, "PASSWORD_RESET").subscribe({
      next: () => {
        this.fpLoading.set(false);
        this.fpSuccess.set("New OTP sent.");
        this.fpOtp = "";
        this.startTimer("fp");
        setTimeout(() => this.fpSuccess.set(""), 4e3);
      },
      error: (err) => {
        this.fpLoading.set(false);
        this.fpErrors.otp = this.extractError(err);
      }
    });
  }
  submitResetPassword() {
    this.fpErrors = {};
    let ok = true;
    if (!this.fpNewPassword) {
      this.fpErrors.newPassword = "Password is required.";
      ok = false;
    } else if (this.fpNewPassword.length < 6) {
      this.fpErrors.newPassword = "Minimum 6 characters.";
      ok = false;
    }
    if (!this.fpConfirmPassword) {
      this.fpErrors.confirmPassword = "Please confirm password.";
      ok = false;
    } else if (this.fpNewPassword !== this.fpConfirmPassword) {
      this.fpErrors.confirmPassword = "Passwords do not match.";
      ok = false;
    }
    if (!ok)
      return;
    this.fpLoading.set(true);
    this.fpError.set("");
    this.authService.resetPassword({
      email: this.fpEmail.trim().toLowerCase(),
      otp: this.fpOtp,
      newPassword: this.fpNewPassword,
      confirmPassword: this.fpConfirmPassword
    }).subscribe({
      next: (res) => {
        this.fpLoading.set(false);
        if (res.success) {
          this.forgotPStep.set("done");
          clearInterval(this.fpTimer);
        } else {
          this.fpError.set(res.message);
        }
      },
      error: (err) => {
        this.fpLoading.set(false);
        const code = err?.error?.errorCode || "";
        if (code.includes("OTP")) {
          this.fpErrors.otp = err?.error?.message || "OTP invalid. Go back.";
          this.forgotPStep.set("otp");
        } else {
          this.fpError.set(this.extractError(err));
        }
      }
    });
  }
  resetForgotP() {
    this.forgotPStep.set("input");
    this.fpEmail = "";
    this.fpCaptchaAnswer = "";
    this.fpOtp = "";
    this.fpNewPassword = "";
    this.fpConfirmPassword = "";
    this.fpErrors = {};
    this.fpError.set("");
    this.fpSuccess.set("");
    this.fpResendCooldown.set(0);
    clearInterval(this.fpTimer);
  }
  // ─────────────────────────────────────────────
  //  PASSWORD STRENGTH
  // ─────────────────────────────────────────────
  getPasswordStrength(pwd) {
    if (!pwd)
      return { label: "", cls: "", width: 0 };
    let score = 0;
    if (pwd.length >= 6)
      score++;
    if (pwd.length >= 10)
      score++;
    if (/[A-Z]/.test(pwd))
      score++;
    if (/[0-9]/.test(pwd))
      score++;
    if (/[^a-zA-Z0-9]/.test(pwd))
      score++;
    if (score <= 1)
      return { label: "Weak", cls: "str-weak", width: 25 };
    if (score <= 2)
      return { label: "Fair", cls: "str-fair", width: 50 };
    if (score <= 3)
      return { label: "Good", cls: "str-good", width: 75 };
    return { label: "Strong", cls: "str-strong", width: 100 };
  }
  // ─────────────────────────────────────────────
  //  TIMER
  // ─────────────────────────────────────────────
  startTimer(target) {
    const set = (v) => target === "fu" ? this.fuResendCooldown.set(v) : this.fpResendCooldown.set(v);
    const get = () => target === "fu" ? this.fuResendCooldown() : this.fpResendCooldown();
    const timerKey = target === "fu" ? "fuTimer" : "fpTimer";
    set(60);
    const timer = this[timerKey];
    if (timer)
      window.clearInterval(timer);
    this[timerKey] = window.setInterval(() => {
      const cur = get();
      if (cur <= 1) {
        const t = this[timerKey];
        if (t)
          window.clearInterval(t);
        set(0);
      } else {
        set(cur - 1);
      }
    }, 1e3);
  }
  // ─────────────────────────────────────────────
  //  HELPERS
  // ─────────────────────────────────────────────
  togglePassword() {
    this.showPassword.update((v) => !v);
  }
  toggleFpPassword() {
    this.showFpPassword.update((v) => !v);
  }
  toggleFpConfirm() {
    this.showFpConfirm.update((v) => !v);
  }
  extractError(err) {
    const error = err;
    if (error?.error?.message)
      return error.error.message;
    switch (error?.status) {
      case 0:
        return "Cannot connect to server. Check your connection.";
      case 401:
        return error?.error?.message || "Invalid credentials.";
      case 403:
        return error?.error?.message || "Account is locked or inactive.";
      case 404:
        return "No account found with this email.";
      case 429:
        return "Too many attempts. Please wait.";
      case 500:
        return "Server error. Please try again later.";
      default:
        return "Something went wrong. Please try again.";
    }
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ThemeService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 19, vars: 7, consts: [[1, "auth-page"], [1, "auth-container"], [1, "auth-card"], [1, "logo-row"], ["routerLink", "/", 1, "logo"], [1, "logo-icon"], [1, "logo-text"], ["title", "Toggle theme", 1, "theme-toggle-btn", 3, "click"], [1, "auth-visual"], [1, "visual-content"], [1, "auth-header"], [1, "alert", "alert-error"], [1, "auth-form", 3, "ngSubmit"], [1, "form-group"], ["for", "usernameOrEmail"], [1, "req"], ["type", "text", "id", "usernameOrEmail", "name", "usernameOrEmail", "placeholder", "Enter username or email", "autocomplete", "username", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "err-msg"], [1, "label-row"], ["for", "password"], [1, "pw-wrap"], ["id", "password", "name", "password", "placeholder", "Enter your password", "autocomplete", "current-password", 1, "form-control", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "pw-toggle", 3, "click"], [1, "remember-row"], [1, "remember-label"], ["type", "checkbox", "name", "rememberMe", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "w-full", 3, "disabled"], [1, "link-row"], [1, "link-btn", 3, "click"], [1, "dot"], [1, "auth-footer"], ["routerLink", "/register"], ["routerLink", "/register-openaccount"], [1, "spinner"], [1, "success-card"], [1, "back-btn", 3, "click"], ["type", "email", "name", "fuEmail", "placeholder", "yourname@email.com", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "captcha-box"], [1, "captcha-text"], ["type", "button", 1, "captcha-btn", 3, "click"], ["type", "text", "name", "fuCaptchaAnswer", "placeholder", "Enter captcha above", "autocomplete", "off", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "cursor-link", 3, "click"], [1, "alert", "alert-success"], [1, "otp-icon-big"], ["type", "text", "name", "fuOtp", "placeholder", "\u2022 \u2022 \u2022 \u2022 \u2022 \u2022", "maxlength", "6", "inputmode", "numeric", 1, "form-control", "otp-field", 3, "ngModelChange", "ngModel"], [1, "otp-actions"], [1, "cooldown-txt"], [1, "link-btn", 3, "disabled"], [1, "link-btn", 3, "click", "disabled"], [1, "success-circle", "success-circle-blue"], [1, "success-sub"], [1, "notice-box"], [1, "btn", "btn-primary", "w-full", 3, "click"], ["type", "email", "name", "fpEmail", "placeholder", "yourname@email.com", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "fpCaptchaAnswer", "placeholder", "Enter captcha above", "autocomplete", "off", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "fpOtp", "placeholder", "\u2022 \u2022 \u2022 \u2022 \u2022 \u2022", "maxlength", "6", "inputmode", "numeric", 1, "form-control", "otp-field", 3, "ngModelChange", "ngModel"], ["name", "fpNewPassword", "placeholder", "Minimum 6 characters", "autocomplete", "new-password", 1, "form-control", 3, "ngModelChange", "type", "ngModel"], [1, "str-wrap"], ["name", "fpConfirmPassword", "placeholder", "Re-enter new password", "autocomplete", "new-password", 1, "form-control", 3, "ngModelChange", "type", "ngModel"], [1, "hint", "hint-ok"], [1, "str-bar"], [1, "str-fill"], [1, "str-lbl"], [1, "success-circle"], [1, "visual-emoji"], [1, "v-features"], [1, "v-feature"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4)(5, "span", 5);
        \u0275\u0275text(6, "N");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span", 6);
        \u0275\u0275text(8, "NeoBank");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "button", 7);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_9_listener() {
          return ctx.toggleTheme();
        });
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(11, LoginComponent_Conditional_11_Template, 50, 14);
        \u0275\u0275conditionalCreate(12, LoginComponent_Conditional_12_Template, 3, 3);
        \u0275\u0275conditionalCreate(13, LoginComponent_Conditional_13_Template, 4, 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 8)(15, "div", 9);
        \u0275\u0275conditionalCreate(16, LoginComponent_Conditional_16_Template, 27, 0);
        \u0275\u0275conditionalCreate(17, LoginComponent_Conditional_17_Template, 22, 0);
        \u0275\u0275conditionalCreate(18, LoginComponent_Conditional_18_Template, 22, 0);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1(" ", ctx.isDark() ? "\u2600\uFE0F" : "\u{1F319}", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeView() === "login" ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeView() === "forgotUsername" ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeView() === "forgotPassword" ? 13 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.activeView() === "login" ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeView() === "forgotUsername" ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeView() === "forgotPassword" ? 18 : -1);
      }
    }, dependencies: [RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, NgForm, CommonModule], styles: ['\n.logo-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n}\n.logo[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.theme-toggle-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: 1.5px solid var(--input-border, #e2e8f0);\n  border-radius: 8px;\n  width: 36px;\n  height: 36px;\n  font-size: 18px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.theme-toggle-btn[_ngcontent-%COMP%]:hover {\n  border-color: #6366f1;\n  background: #f5f3ff;\n  transform: scale(1.05);\n}\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n.auth-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 24px;\n  background: var(--light, #f8fafc);\n  overflow-y: auto;\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n}\n.logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  margin-bottom: 28px;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 18px;\n  font-weight: 700;\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.auth-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 700;\n  color: var(--dark, #0f172a);\n  margin-bottom: 6px;\n}\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray, #64748b);\n}\n.back-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6366f1;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0;\n  margin-bottom: 12px;\n  display: inline-block;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  margin-bottom: 16px;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n  border: 1px solid #fecaca;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #166534;\n  border: 1px solid #bbf7d0;\n}\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--dark, #374151);\n}\n.req[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px 14px;\n  border: 1.5px solid var(--input-border, #e2e8f0);\n  border-radius: 10px;\n  font-size: 14px;\n  color: var(--input-color, #0f172a);\n  background: var(--input-bg, white);\n  outline: none;\n  box-sizing: border-box;\n  transition: border 0.2s, box-shadow 0.2s;\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: var(--input-placeholder, #9ca3af);\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.form-control.is-error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.08);\n}\n.form-control.is-success[_ngcontent-%COMP%] {\n  border-color: #22c55e;\n  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.08);\n}\n.form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--input-disabled-bg, #f9fafb);\n  color: var(--gray, #64748b);\n  cursor: not-allowed;\n}\n.err-msg[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #ef4444;\n  font-weight: 500;\n}\n.hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n}\n.hint-ok[_ngcontent-%COMP%] {\n  color: #22c55e;\n}\n.hint-bad[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.pw-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.pw-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: #6366f1;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0;\n}\n.str-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 4px;\n}\n.str-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 4px;\n  background: var(--input-border, #e2e8f0);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.str-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.3s ease;\n}\n.str-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  min-width: 42px;\n}\n.str-weak[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #ef4444;\n}\n.str-fair[_ngcontent-%COMP%] {\n  background: #f97316;\n  color: #f97316;\n}\n.str-good[_ngcontent-%COMP%] {\n  background: #eab308;\n  color: #eab308;\n}\n.str-strong[_ngcontent-%COMP%] {\n  background: #22c55e;\n  color: #22c55e;\n}\n.input-icon-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.field-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  font-weight: 700;\n}\n.u-spin[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid var(--input-border, #e2e8f0);\n  border-top-color: #6366f1;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n.u-ok[_ngcontent-%COMP%] {\n  color: #22c55e;\n}\n.u-bad[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.captcha-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: var(--captcha-bg, linear-gradient(135deg, #1e293b, #334155));\n  border-radius: 10px;\n  padding: 14px 20px;\n  margin-bottom: 8px;\n}\n.captcha-text[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: 10px;\n  color: #e2e8f0;\n  -webkit-user-select: none;\n  user-select: none;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);\n}\n.captcha-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: white;\n  border-radius: 8px;\n  width: 34px;\n  height: 34px;\n  font-size: 18px;\n  cursor: pointer;\n  transition: background 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.captcha-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.22);\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  text-decoration: none;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: white;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.45);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1.5px solid #6366f1;\n  color: #6366f1;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: #f5f3ff;\n}\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.otp-icon-big[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  text-align: center;\n  margin: 4px 0 16px;\n}\n.otp-field[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 26px;\n  font-weight: 700;\n  letter-spacing: 10px;\n}\n.otp-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin-top: 14px;\n  font-size: 13px;\n}\n.cooldown-txt[_ngcontent-%COMP%] {\n  color: var(--gray, #94a3b8);\n  font-size: 13px;\n}\n.dot[_ngcontent-%COMP%] {\n  color: var(--input-border, #cbd5e1);\n}\n.link-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin-top: 14px;\n  margin-bottom: 16px;\n  font-size: 13px;\n  color: var(--gray, #94a3b8);\n}\n.link-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6366f1;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0;\n}\n.link-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  text-decoration: underline;\n}\n.link-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 16px;\n}\n.auth-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--gray, #64748b);\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6366f1;\n  font-weight: 600;\n  text-decoration: none;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.success-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  text-align: center;\n  padding: 8px 0;\n}\n.success-circle[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 24px rgba(34, 197, 94, 0.35);\n  font-size: 30px;\n  color: white;\n  font-weight: 700;\n  animation: _ngcontent-%COMP%_popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.success-circle-blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.35);\n}\n@keyframes _ngcontent-%COMP%_popIn {\n  from {\n    transform: scale(0);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.success-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--dark, #0f172a);\n}\n.success-sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray, #64748b);\n  line-height: 1.7;\n}\n.info-card[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid var(--input-border, #e2e8f0);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 11px 16px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--input-border, #f1f5f9);\n}\n.info-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.info-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--gray, #64748b);\n}\n.info-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--dark, #0f172a);\n  word-break: break-all;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge-green[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #166534;\n  border: 1px solid #bbf7d0;\n}\n.notice-box[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--notice-bg, #eff6ff);\n  border: 1px solid var(--notice-border, #bfdbfe);\n  border-radius: 10px;\n  padding: 12px 16px;\n  font-size: 13px;\n  color: var(--notice-text, #1e40af);\n  text-align: left;\n  line-height: 1.6;\n}\n.notice-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6366f1;\n  font-weight: 600;\n  text-decoration: none;\n}\n.notice-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.auth-visual[_ngcontent-%COMP%] {\n  background: var(--bg-gradient, linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n  color: white;\n  position: sticky;\n  top: 0;\n  height: 100vh;\n}\n.visual-content[_ngcontent-%COMP%] {\n  max-width: 380px;\n  text-align: center;\n}\n.visual-emoji[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 24px;\n  display: block;\n}\n.visual-check-circle[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 36px;\n  margin: 0 auto 24px;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.visual-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 700;\n  margin-bottom: 12px;\n}\n.visual-content[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  opacity: 0.85;\n  margin-bottom: 36px;\n  line-height: 1.6;\n}\n.v-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.v-feature[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  padding: 13px 18px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  font-size: 14px;\n  text-align: left;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n}\n.v-feature[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 20px;\n}\n@media (max-width: 900px) {\n  .auth-page[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .auth-visual[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .auth-container[_ngcontent-%COMP%] {\n    padding: 32px 20px;\n  }\n}\n@media (max-width: 480px) {\n  .auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .captcha-text[_ngcontent-%COMP%] {\n    font-size: 18px;\n    letter-spacing: 6px;\n  }\n  .otp-field[_ngcontent-%COMP%] {\n    font-size: 22px;\n    letter-spacing: 6px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [RouterLink, FormsModule, CommonModule], template: `<!-------  login.component.html  ------->
<div class="auth-page">

  <!-- \u2550\u2550 LEFT \u2550\u2550 -->
  <div class="auth-container">
    <div class="auth-card">

      <!-- Logo -->
      <!-- <a routerLink="/" class="logo">
        <span class="logo-icon">N</span>
        <span class="logo-text">NeoBank</span>
      </a> -->
      <div class="logo-row">
  <a routerLink="/" class="logo">
    <span class="logo-icon">N</span>
    <span class="logo-text">NeoBank</span>
  </a>
  <button class="theme-toggle-btn" (click)="toggleTheme()" title="Toggle theme">
    {{ isDark() ? '\u2600\uFE0F' : '\u{1F319}' }}
  </button>
</div>

      <!-- \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557
           \u2551           LOGIN VIEW                 \u2551
           \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D -->
      @if (activeView() === 'login') {

        <div class="auth-header">
          <h1>Welcome Back</h1>
          <p>Sign in to your NeoBank account</p>
        </div>

        @if (loginError()) {
          <div class="alert alert-error">{{ loginError() }}</div>
        }

        <form (ngSubmit)="login()" class="auth-form">

          <!-- Username or Email -->
          <div class="form-group">
            <label for="usernameOrEmail">Username or Email <span class="req">*</span></label>
            <input
              type="text"
              id="usernameOrEmail"
              class="form-control"
              [class.is-error]="loginErrors.usernameOrEmail"
              [(ngModel)]="usernameOrEmail"
              name="usernameOrEmail"
              placeholder="Enter username or email"
              autocomplete="username"
            />
            @if (loginErrors.usernameOrEmail) {
              <span class="err-msg">{{ loginErrors.usernameOrEmail }}</span>
            }
          </div>

          <!-- Password -->
          <div class="form-group">
            <div class="label-row">
              <label for="password">Password <span class="req">*</span></label>
            </div>
            <div class="pw-wrap">
              <input
                [type]="showPassword() ? 'text' : 'password'"
                id="password"
                class="form-control"
                [class.is-error]="loginErrors.password"
                [(ngModel)]="password"
                name="password"
                placeholder="Enter your password"
                autocomplete="current-password"
              />
              <button type="button" class="pw-toggle" (click)="togglePassword()">
                {{ showPassword() ? 'Hide' : 'Show' }}
              </button>
            </div>
            @if (loginErrors.password) {
              <span class="err-msg">{{ loginErrors.password }}</span>
            }
          </div>

          <!-- Remember Me -->
          <div class="remember-row">
            <label class="remember-label">
              <input type="checkbox" [(ngModel)]="rememberMe" name="rememberMe" />
              <span>Remember me</span>
            </label>
          </div>

          <!-- Submit -->
          <button
            type="submit"
            class="btn btn-primary w-full"
            [disabled]="loginLoading()"
          >
            @if (loginLoading()) { <span class="spinner"></span> Signing in... }
            @else { Sign In \u2192 }
          </button>

        </form>

        <!-- Forgot links -->
        <div class="link-row">
          <button class="link-btn" (click)="showForgotUsername()">Forgot Username?</button>
          <span class="dot">\xB7</span>
          <button class="link-btn" (click)="showForgotPassword()">Forgot Password?</button>
        </div>

        <div class="auth-footer">
          <p>Don't have an account ? <a routerLink="/register">Sign Up</a></p>
        </div>
        <div class="auth-footer">
            <p>Open New Account ! <a routerLink="/register-openaccount">Open Account</a></p>
        </div>
      }

      <!-- \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557
           \u2551       FORGOT USERNAME VIEW           \u2551
           \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D -->
      @if (activeView() === 'forgotUsername') {

        <!-- STEP: input -->
        @if (forgotUStep() === 'input') {
          <div class="auth-header">
            <button class="back-btn" (click)="backToLogin()">\u2190 Back to Login</button>
            <h1>Forgot Username</h1>
            <p>Enter your registered email to recover your username via OTP</p>
          </div>

          @if (fuError()) { <div class="alert alert-error">{{ fuError() }}</div> }

          <form (ngSubmit)="sendForgotUOtp()" class="auth-form">
            <div class="form-group">
              <label>Email Address <span class="req">*</span></label>
              <input type="email" class="form-control"
                [class.is-error]="fuErrors.email"
                [(ngModel)]="fuEmail" name="fuEmail"
                placeholder="yourname@email.com" />
              @if (fuErrors.email) { <span class="err-msg">{{ fuErrors.email }}</span> }
            </div>

            <div class="form-group">
              <label>Captcha <span class="req">*</span></label>
              <div class="captcha-box">
                <span class="captcha-text">{{ fuCaptchaText() }}</span>
                <button type="button" class="captcha-btn" (click)="refreshCaptcha('forgotU')">\u21BA</button>
              </div>
              <input type="text" class="form-control"
                [class.is-error]="fuErrors.captcha"
                [(ngModel)]="fuCaptchaAnswer" name="fuCaptchaAnswer"
                placeholder="Enter captcha above" autocomplete="off" />
              @if (fuErrors.captcha) { <span class="err-msg">{{ fuErrors.captcha }}</span> }
            </div>

            <button type="submit" class="btn btn-primary w-full" [disabled]="fuLoading()">
              @if (fuLoading()) { <span class="spinner"></span> Sending OTP... }
              @else { Send OTP \u2192 }
            </button>
          </form>

          <div class="auth-footer">
            <p>Remembered? <a (click)="backToLogin()" class="cursor-link">Back to Login</a></p>
          </div>
        }

        <!-- STEP: otp -->
        @if (forgotUStep() === 'otp') {
          <div class="auth-header">
            <h1>Enter OTP</h1>
            <p>OTP sent to <strong>{{ fuEmail }}</strong></p>
          </div>

          @if (fuError()) { <div class="alert alert-error">{{ fuError() }}</div> }
          @if (fuSuccess()) { <div class="alert alert-success">{{ fuSuccess() }}</div> }

          <div class="otp-icon-big">\u{1F510}</div>

          <form (ngSubmit)="verifyForgotUOtp()" class="auth-form">
            <div class="form-group">
              <label>Enter OTP <span class="req">*</span></label>
              <input type="text" class="form-control otp-field"
                [class.is-error]="fuErrors.otp"
                [(ngModel)]="fuOtp" name="fuOtp"
                placeholder="\u2022 \u2022 \u2022 \u2022 \u2022 \u2022" maxlength="6" inputmode="numeric" />
              @if (fuErrors.otp) { <span class="err-msg">{{ fuErrors.otp }}</span> }
            </div>

            <button type="submit" class="btn btn-primary w-full" [disabled]="fuLoading()">
              @if (fuLoading()) { <span class="spinner"></span> Verifying... }
              @else { Verify OTP }
            </button>
          </form>

          <div class="otp-actions">
            <button class="link-btn" (click)="forgotUStep.set('input')">\u2190 Back</button>
            <span class="dot">\xB7</span>
            @if (fuResendCooldown() > 0) {
              <span class="cooldown-txt">Resend in {{ fuResendCooldown() }}s</span>
            } @else {
              <button class="link-btn" (click)="resendFuOtp()" [disabled]="fuLoading()">Resend OTP</button>
            }
          </div>
        }

        <!-- STEP: done -->
        @if (forgotUStep() === 'done') {
          <div class="success-card">
            <div class="success-circle success-circle-blue"><span>\u2709\uFE0F</span></div>
            <h2>Username Sent!</h2>
            <p class="success-sub">
              Your username has been sent to<br>
              <strong>{{ fuEmail }}</strong>
            </p>
            <div class="notice-box">
              \u{1F4EC} Please check your inbox and spam/junk folder.
            </div>
            <button class="btn btn-primary w-full" (click)="backToLogin()">\u2190 Back to Login</button>
          </div>
        }
      }

      <!-- \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557
           \u2551       FORGOT PASSWORD VIEW           \u2551
           \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D -->
      @if (activeView() === 'forgotPassword') {

        <!-- STEP: input -->
        @if (forgotPStep() === 'input') {
          <div class="auth-header">
            <button class="back-btn" (click)="backToLogin()">\u2190 Back to Login</button>
            <h1>Forgot Password</h1>
            <p>Enter your registered email to receive an OTP</p>
          </div>

          @if (fpError()) { <div class="alert alert-error">{{ fpError() }}</div> }

          <form (ngSubmit)="sendForgotPOtp()" class="auth-form">
            <div class="form-group">
              <label>Email Address <span class="req">*</span></label>
              <input type="email" class="form-control"
                [class.is-error]="fpErrors.email"
                [(ngModel)]="fpEmail" name="fpEmail"
                placeholder="yourname@email.com" />
              @if (fpErrors.email) { <span class="err-msg">{{ fpErrors.email }}</span> }
            </div>

            <div class="form-group">
              <label>Captcha <span class="req">*</span></label>
              <div class="captcha-box">
                <span class="captcha-text">{{ fpCaptchaText() }}</span>
                <button type="button" class="captcha-btn" (click)="refreshCaptcha('forgotP')">\u21BA</button>
              </div>
              <input type="text" class="form-control"
                [class.is-error]="fpErrors.captcha"
                [(ngModel)]="fpCaptchaAnswer" name="fpCaptchaAnswer"
                placeholder="Enter captcha above" autocomplete="off" />
              @if (fpErrors.captcha) { <span class="err-msg">{{ fpErrors.captcha }}</span> }
            </div>

            <button type="submit" class="btn btn-primary w-full" [disabled]="fpLoading()">
              @if (fpLoading()) { <span class="spinner"></span> Sending OTP... }
              @else { Send OTP \u2192 }
            </button>
          </form>

          <div class="auth-footer">
            <p>Remembered? <a (click)="backToLogin()" class="cursor-link">Back to Login</a></p>
          </div>
        }

        <!-- STEP: otp -->
        @if (forgotPStep() === 'otp') {
          <div class="auth-header">
            <h1>Enter OTP</h1>
            <p>OTP sent to <strong>{{ fpEmail }}</strong></p>
          </div>

          @if (fpError()) { <div class="alert alert-error">{{ fpError() }}</div> }
          @if (fpSuccess()) { <div class="alert alert-success">{{ fpSuccess() }}</div> }

          <div class="otp-icon-big">\u{1F510}</div>

          <form (ngSubmit)="verifyForgotPOtp()" class="auth-form">
            <div class="form-group">
              <label>Enter OTP <span class="req">*</span></label>
              <input type="text" class="form-control otp-field"
                [class.is-error]="fpErrors.otp"
                [(ngModel)]="fpOtp" name="fpOtp"
                placeholder="\u2022 \u2022 \u2022 \u2022 \u2022 \u2022" maxlength="6" inputmode="numeric" />
              @if (fpErrors.otp) { <span class="err-msg">{{ fpErrors.otp }}</span> }
            </div>

            <button type="submit" class="btn btn-primary w-full" [disabled]="fpLoading()">
              @if (fpLoading()) { <span class="spinner"></span> Verifying... }
              @else { Verify OTP \u2192 }
            </button>
          </form>

          <div class="otp-actions">
            <button class="link-btn" (click)="forgotPStep.set('input')">\u2190 Back</button>
            <span class="dot">\xB7</span>
            @if (fpResendCooldown() > 0) {
              <span class="cooldown-txt">Resend in {{ fpResendCooldown() }}s</span>
            } @else {
              <button class="link-btn" (click)="resendFpOtp()" [disabled]="fpLoading()">Resend OTP</button>
            }
          </div>
        }

        <!-- STEP: reset -->
        @if (forgotPStep() === 'reset') {
          <div class="auth-header">
            <h1>Set New Password</h1>
            <p>Create a strong new password for your account</p>
          </div>

          @if (fpError()) { <div class="alert alert-error">{{ fpError() }}</div> }

          <form (ngSubmit)="submitResetPassword()" class="auth-form">
            <div class="form-group">
              <label>New Password <span class="req">*</span></label>
              <div class="pw-wrap">
                <input [type]="showFpPassword() ? 'text' : 'password'"
                  class="form-control" [class.is-error]="fpErrors.newPassword"
                  [(ngModel)]="fpNewPassword" name="fpNewPassword"
                  placeholder="Minimum 6 characters" autocomplete="new-password" />
                <button type="button" class="pw-toggle" (click)="toggleFpPassword()">
                  {{ showFpPassword() ? 'Hide' : 'Show' }}
                </button>
              </div>
              @if (fpErrors.newPassword) {
                <span class="err-msg">{{ fpErrors.newPassword }}</span>
              }
              @if (fpNewPassword.length > 0) {
                <div class="str-wrap">
                  <div class="str-bar">
                    <div class="str-fill"
                      [class]="getPasswordStrength(fpNewPassword).cls"
                      [style.width.%]="getPasswordStrength(fpNewPassword).width">
                    </div>
                  </div>
                  <span class="str-lbl" [class]="getPasswordStrength(fpNewPassword).cls">
                    {{ getPasswordStrength(fpNewPassword).label }}
                  </span>
                </div>
              }
            </div>

            <div class="form-group">
              <label>Confirm New Password <span class="req">*</span></label>
              <div class="pw-wrap">
                <input [type]="showFpConfirm() ? 'text' : 'password'"
                  class="form-control"
                  [class.is-error]="fpErrors.confirmPassword"
                  [class.is-success]="fpConfirmPassword && fpNewPassword === fpConfirmPassword"
                  [(ngModel)]="fpConfirmPassword" name="fpConfirmPassword"
                  placeholder="Re-enter new password" autocomplete="new-password" />
                <button type="button" class="pw-toggle" (click)="toggleFpConfirm()">
                  {{ showFpConfirm() ? 'Hide' : 'Show' }}
                </button>
              </div>
              @if (fpErrors.confirmPassword) {
                <span class="err-msg">{{ fpErrors.confirmPassword }}</span>
              } @else if (fpConfirmPassword && fpNewPassword === fpConfirmPassword) {
                <span class="hint hint-ok">\u2713 Passwords match</span>
              }
            </div>

            <button type="submit" class="btn btn-primary w-full" [disabled]="fpLoading()">
              @if (fpLoading()) { <span class="spinner"></span> Resetting... }
              @else { Reset Password }
            </button>
          </form>
        }

        <!-- STEP: done -->
        @if (forgotPStep() === 'done') {
          <div class="success-card">
            <div class="success-circle"><span>\u2713</span></div>
            <h2>Password Reset!</h2>
            <p class="success-sub">
              Your password has been reset successfully.<br>
              You can now login with your new password.
            </p>
            <div class="notice-box">
              \u{1F512} For security, do not share your password with anyone.
            </div>
            <button class="btn btn-primary w-full" (click)="backToLogin()">
              \u2190 Back to Login
            </button>
          </div>
        }
      }

    </div>
  </div>

  <!-- \u2550\u2550 RIGHT: VISUAL \u2550\u2550 -->
  <div class="auth-visual">
    <div class="visual-content">

      @if (activeView() === 'login') {
        <div class="visual-emoji">\u{1F3E6}</div>
        <h2>Welcome Back!</h2>
        <p>Your financial journey continues with NeoBank</p>
        <div class="v-features">
          <div class="v-feature"><span>\u{1F512}</span><span>Secure Login</span></div>
          <div class="v-feature"><span>\u26A1</span><span>Instant Access</span></div>
          <div class="v-feature"><span>\u{1F4CA}</span><span>Real-time Analytics</span></div>
          <div class="v-feature"><span>\u{1F4B3}</span><span>Manage All Accounts</span></div>
        </div>
      }

      @if (activeView() === 'forgotUsername') {
        <div class="visual-emoji">\u{1F464}</div>
        <h2>Forgot Your Username?</h2>
        <p>We'll send your username to your registered email</p>
        <div class="v-features">
          <div class="v-feature"><span>\u{1F4E7}</span><span>Enter your registered email</span></div>
          <div class="v-feature"><span>\u{1F510}</span><span>Verify with OTP</span></div>
          <div class="v-feature"><span>\u2709\uFE0F</span><span>Username sent to email</span></div>
        </div>
      }

      @if (activeView() === 'forgotPassword') {
        <div class="visual-emoji">\u{1F511}</div>
        <h2>Reset Your Password</h2>
        <p>Securely reset your password in 3 simple steps</p>
        <div class="v-features">
          <div class="v-feature"><span>\u{1F4E7}</span><span>Enter your registered email</span></div>
          <div class="v-feature"><span>\u{1F510}</span><span>Verify with OTP</span></div>
          <div class="v-feature"><span>\u{1F512}</span><span>Set your new password</span></div>
        </div>
      }

    </div>
  </div>

</div>`, styles: ['/* src/app/features/auth/login/login.component.css */\n.logo-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n}\n.logo {\n  margin-bottom: 0;\n}\n.theme-toggle-btn {\n  background: none;\n  border: 1.5px solid var(--input-border, #e2e8f0);\n  border-radius: 8px;\n  width: 36px;\n  height: 36px;\n  font-size: 18px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.theme-toggle-btn:hover {\n  border-color: #6366f1;\n  background: #f5f3ff;\n  transform: scale(1.05);\n}\n.auth-page {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n.auth-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 24px;\n  background: var(--light, #f8fafc);\n  overflow-y: auto;\n}\n.auth-card {\n  width: 100%;\n  max-width: 440px;\n}\n.logo {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  margin-bottom: 28px;\n}\n.logo-icon {\n  width: 38px;\n  height: 38px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 18px;\n  font-weight: 700;\n}\n.logo-text {\n  font-size: 20px;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.auth-header {\n  margin-bottom: 20px;\n}\n.auth-header h1 {\n  font-size: 26px;\n  font-weight: 700;\n  color: var(--dark, #0f172a);\n  margin-bottom: 6px;\n}\n.auth-header p {\n  font-size: 14px;\n  color: var(--gray, #64748b);\n}\n.back-btn {\n  background: none;\n  border: none;\n  color: #6366f1;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0;\n  margin-bottom: 12px;\n  display: inline-block;\n}\n.back-btn:hover {\n  text-decoration: underline;\n}\n.alert {\n  padding: 12px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  margin-bottom: 16px;\n}\n.alert-error {\n  background: #fef2f2;\n  color: #dc2626;\n  border: 1px solid #fecaca;\n}\n.alert-success {\n  background: #f0fdf4;\n  color: #166534;\n  border: 1px solid #bbf7d0;\n}\n.auth-form {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  margin-bottom: 16px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--dark, #374151);\n}\n.req {\n  color: #ef4444;\n}\n.form-control {\n  width: 100%;\n  padding: 11px 14px;\n  border: 1.5px solid var(--input-border, #e2e8f0);\n  border-radius: 10px;\n  font-size: 14px;\n  color: var(--input-color, #0f172a);\n  background: var(--input-bg, white);\n  outline: none;\n  box-sizing: border-box;\n  transition: border 0.2s, box-shadow 0.2s;\n}\n.form-control::placeholder {\n  color: var(--input-placeholder, #9ca3af);\n}\n.form-control:focus {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.form-control.is-error {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.08);\n}\n.form-control.is-success {\n  border-color: #22c55e;\n  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.08);\n}\n.form-control:disabled {\n  background: var(--input-disabled-bg, #f9fafb);\n  color: var(--gray, #64748b);\n  cursor: not-allowed;\n}\n.err-msg {\n  font-size: 12px;\n  color: #ef4444;\n  font-weight: 500;\n}\n.hint {\n  font-size: 12px;\n  font-weight: 500;\n}\n.hint-ok {\n  color: #22c55e;\n}\n.hint-bad {\n  color: #ef4444;\n}\n.pw-wrap {\n  position: relative;\n}\n.pw-toggle {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: #6366f1;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0;\n}\n.str-wrap {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 4px;\n}\n.str-bar {\n  flex: 1;\n  height: 4px;\n  background: var(--input-border, #e2e8f0);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.str-fill {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.3s ease;\n}\n.str-lbl {\n  font-size: 11px;\n  font-weight: 600;\n  min-width: 42px;\n}\n.str-weak {\n  background: #ef4444;\n  color: #ef4444;\n}\n.str-fair {\n  background: #f97316;\n  color: #f97316;\n}\n.str-good {\n  background: #eab308;\n  color: #eab308;\n}\n.str-strong {\n  background: #22c55e;\n  color: #22c55e;\n}\n.input-icon-wrap {\n  position: relative;\n}\n.field-icon {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  font-weight: 700;\n}\n.u-spin {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid var(--input-border, #e2e8f0);\n  border-top-color: #6366f1;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n.u-ok {\n  color: #22c55e;\n}\n.u-bad {\n  color: #ef4444;\n}\n.captcha-box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: var(--captcha-bg, linear-gradient(135deg, #1e293b, #334155));\n  border-radius: 10px;\n  padding: 14px 20px;\n  margin-bottom: 8px;\n}\n.captcha-text {\n  font-family: "Courier New", monospace;\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: 10px;\n  color: #e2e8f0;\n  -webkit-user-select: none;\n  user-select: none;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);\n}\n.captcha-btn {\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: white;\n  border-radius: 8px;\n  width: 34px;\n  height: 34px;\n  font-size: 18px;\n  cursor: pointer;\n  transition: background 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.captcha-btn:hover {\n  background: rgba(255, 255, 255, 0.22);\n}\n.btn {\n  padding: 12px 24px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  text-decoration: none;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: white;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);\n}\n.btn-primary:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.45);\n}\n.btn-primary:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-outline {\n  background: transparent;\n  border: 1.5px solid #6366f1;\n  color: #6366f1;\n}\n.btn-outline:hover {\n  background: #f5f3ff;\n}\n.w-full {\n  width: 100%;\n}\n.spinner {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.otp-icon-big {\n  font-size: 3rem;\n  text-align: center;\n  margin: 4px 0 16px;\n}\n.otp-field {\n  text-align: center;\n  font-size: 26px;\n  font-weight: 700;\n  letter-spacing: 10px;\n}\n.otp-actions {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin-top: 14px;\n  font-size: 13px;\n}\n.cooldown-txt {\n  color: var(--gray, #94a3b8);\n  font-size: 13px;\n}\n.dot {\n  color: var(--input-border, #cbd5e1);\n}\n.link-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin-top: 14px;\n  margin-bottom: 16px;\n  font-size: 13px;\n  color: var(--gray, #94a3b8);\n}\n.link-btn {\n  background: none;\n  border: none;\n  color: #6366f1;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0;\n}\n.link-btn:hover:not(:disabled) {\n  text-decoration: underline;\n}\n.link-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.auth-footer {\n  text-align: center;\n  margin-top: 16px;\n}\n.auth-footer p {\n  font-size: 13px;\n  color: var(--gray, #64748b);\n}\n.auth-footer a {\n  color: #6366f1;\n  font-weight: 600;\n  text-decoration: none;\n}\n.auth-footer a:hover {\n  text-decoration: underline;\n}\n.success-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  text-align: center;\n  padding: 8px 0;\n}\n.success-circle {\n  width: 72px;\n  height: 72px;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 24px rgba(34, 197, 94, 0.35);\n  font-size: 30px;\n  color: white;\n  font-weight: 700;\n  animation: popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.success-circle-blue {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.35);\n}\n@keyframes popIn {\n  from {\n    transform: scale(0);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.success-card h2 {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--dark, #0f172a);\n}\n.success-sub {\n  font-size: 14px;\n  color: var(--gray, #64748b);\n  line-height: 1.7;\n}\n.info-card {\n  width: 100%;\n  border: 1px solid var(--input-border, #e2e8f0);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.info-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 11px 16px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--input-border, #f1f5f9);\n}\n.info-row:last-child {\n  border-bottom: none;\n}\n.info-row span {\n  color: var(--gray, #64748b);\n}\n.info-row strong {\n  color: var(--dark, #0f172a);\n  word-break: break-all;\n}\n.badge {\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge-green {\n  background: #f0fdf4;\n  color: #166534;\n  border: 1px solid #bbf7d0;\n}\n.notice-box {\n  width: 100%;\n  background: var(--notice-bg, #eff6ff);\n  border: 1px solid var(--notice-border, #bfdbfe);\n  border-radius: 10px;\n  padding: 12px 16px;\n  font-size: 13px;\n  color: var(--notice-text, #1e40af);\n  text-align: left;\n  line-height: 1.6;\n}\n.notice-box a {\n  color: #6366f1;\n  font-weight: 600;\n  text-decoration: none;\n}\n.notice-box a:hover {\n  text-decoration: underline;\n}\n.auth-visual {\n  background: var(--bg-gradient, linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n  color: white;\n  position: sticky;\n  top: 0;\n  height: 100vh;\n}\n.visual-content {\n  max-width: 380px;\n  text-align: center;\n}\n.visual-emoji {\n  font-size: 4rem;\n  margin-bottom: 24px;\n  display: block;\n}\n.visual-check-circle {\n  width: 80px;\n  height: 80px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 36px;\n  margin: 0 auto 24px;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.visual-content h2 {\n  font-size: 30px;\n  font-weight: 700;\n  margin-bottom: 12px;\n}\n.visual-content > p {\n  font-size: 16px;\n  opacity: 0.85;\n  margin-bottom: 36px;\n  line-height: 1.6;\n}\n.v-features {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.v-feature {\n  background: rgba(255, 255, 255, 0.12);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  padding: 13px 18px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  font-size: 14px;\n  text-align: left;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n}\n.v-feature span:first-child {\n  font-size: 20px;\n}\n@media (max-width: 900px) {\n  .auth-page {\n    grid-template-columns: 1fr;\n  }\n  .auth-visual {\n    display: none;\n  }\n  .auth-container {\n    padding: 32px 20px;\n  }\n}\n@media (max-width: 480px) {\n  .auth-header h1 {\n    font-size: 22px;\n  }\n  .captcha-text {\n    font-size: 18px;\n    letter-spacing: 6px;\n  }\n  .otp-field {\n    font-size: 22px;\n    letter-spacing: 6px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }, { type: NotificationService }, { type: ThemeService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "app/features/auth/login/login.component.ts", lineNumber: 42 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-GM5EIKSC.js.map
