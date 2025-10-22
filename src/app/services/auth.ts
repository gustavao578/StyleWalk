import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn = false;
  userRole = '';

  login(user: string, pass: string): boolean {
    if (user === 'admin' && pass === '123') {
      this.isLoggedIn = true;
      this.userRole = 'admin';
      return true;
    }
    return false;
  }

  logout() {
    this.isLoggedIn = false;
    this.userRole = '';
  }
}
