// src/app/core/guards/auth.guard.ts

import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

interface User {
  userId: number;
  role: string;
  tokenExpiresAt?: string;
}

// ── helpers ────────────────────────────────────────────────

const getUser = (): User | null => {
  try {
    const json = localStorage.getItem('user');
    return json ? JSON.parse(json) : null;
  } catch (error: unknown) { 
    return null; 
  }
};

const isTokenExpired = (user: User | null): boolean => {
  if (!user?.tokenExpiresAt) return true;           // no expiry field → treat as expired
  const expiry = new Date(user.tokenExpiresAt);     // "2026-05-11T10:31:38" → Date
  return expiry <= new Date();                      // expired if expiry is in the past
};

const handleExpiredSession = (router: Router): false => {
  alert('⚠️ Your session has expired. Please log in again.');
  localStorage.removeItem('user');
  router.navigate(['/login']);
  return false;
};

// ── guards ─────────────────────────────────────────────────

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const user = getUser();

  if (!user?.userId)            { router.navigate(['/login']); return false; }
  if (isTokenExpired(user))     { return handleExpiredSession(router); }  // ← NEW

  return true;
};

export const adminGuard: CanActivateFn = () => {
  const router = inject(Router);
  const user = getUser();

  if (!user?.userId)            { router.navigate(['/login']); return false; }
  if (isTokenExpired(user))     { return handleExpiredSession(router); }  // ← NEW
  if (!['ADMIN', 'SUPER_ADMIN'].includes(user.role)) {
    router.navigate(['/dashboard']); return false;
  }

  return true;
};

export const managerGuard: CanActivateFn = () => {
  const router = inject(Router);
  const user = getUser();

  if (!user?.userId)            { router.navigate(['/login']); return false; }
  if (isTokenExpired(user))     { return handleExpiredSession(router); }  // ← NEW
  if (!['ADMIN', 'SUPER_ADMIN', 'MANAGER'].includes(user.role)) {
    router.navigate(['/dashboard']); return false;
  }

  return true;
};

export const customerGuard: CanActivateFn = () => {
  const router = inject(Router);
  const user = getUser();

  if (!user?.userId)            { router.navigate(['/login']); return false; }
  if (isTokenExpired(user))     { return handleExpiredSession(router); }  // ← NEW
  if (user.role !== 'CUSTOMER') {
    router.navigate(['/admin']); return false;
  }

  return true;
};

export const guestGuard: CanActivateFn = () => {
  const router = inject(Router);
  const user = getUser();

  if (!user?.userId) return true;

  // ✅ No expiry check here — guest guard only redirects logged-in users away from /login
  if (['ADMIN', 'SUPER_ADMIN'].includes(user.role)) {
    router.navigate(['/admin']);
  } else if (user.role === 'MANAGER') {
    router.navigate(['/manager']);
  } else {
    router.navigate(['/dashboard']);
  }

  return false;
};