import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn = false;
  userRole: 'admin' | 'client' | '' = '';
  currentUser = '';

  login(user: string, pass: string): boolean {
    if (user === 'admin' && pass === '123') {
      this.isLoggedIn = true;
      this.userRole = 'admin';
      this.currentUser = 'Administrador';
      return true;
    }
    // Simulação de login de cliente qualquer
    if (user && pass) {
        this.isLoggedIn = true;
        this.userRole = 'client';
        this.currentUser = user;
        return true;
    }
    return false;
  }

  logout() {
    this.isLoggedIn = false;
    this.userRole = '';
    this.currentUser = '';
  }
}