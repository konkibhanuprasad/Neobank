import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private readonly TOKEN_KEY = 'neobank_token';
  private readonly USER_ID_KEY = 'neobank_user_id';
  private readonly ROLE_KEY = 'neobank_role';

  // ✅ Token methods
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  // ✅ User ID methods
  getUserId(): number | null {
    const userId = localStorage.getItem(this.USER_ID_KEY);
    return userId ? Number(userId) : null;
  }

  setUserId(userId: number): void {
    localStorage.setItem(this.USER_ID_KEY, String(userId));
  }

  // ✅ Role methods
  getRole(): string | null {
    return localStorage.getItem(this.ROLE_KEY);
  }

  setRole(role: string): void {
    localStorage.setItem(this.ROLE_KEY, role);
  }

  // ✅ Clear all
  clear(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_ID_KEY);
    localStorage.removeItem(this.ROLE_KEY);
  }
}