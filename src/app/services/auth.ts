import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn = false;
  userRole: 'admin' | 'client' | '' = ''; // Define os tipos de permissão
  currentUser = '';

  login(user: string, pass: string): boolean {
    // 1. Login de ADMIN (Acesso ao Painel)
    if (user === 'admin' && pass === '123') {
      this.isLoggedIn = true;
      this.userRole = 'admin';
      this.currentUser = 'Administrador';
      return true;
    }

    // 2. Login de CLIENTE (Acesso à Loja como usuário logado)
    // AQUI está o cadastro de teste para você conseguir entrar
    if (user === 'cliente' && pass === '123') {
        this.isLoggedIn = true;
        this.userRole = 'client';
        this.currentUser = 'Cliente Teste'; 
        return true;
    }

    return false; // Falha no login
  }

  logout() {
    this.isLoggedIn = false;
    this.userRole = '';
    this.currentUser = '';
  }
}