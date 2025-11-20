import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn = false;
  // Define os tipos de permissão: 'admin', 'client' ou '' (guest)
  userRole: 'admin' | 'client' | '' = ''; 
  currentUser = '';

  constructor() {
    // Ao iniciar o serviço (ex: reload da página), verifica se já existe login salvo
    this.checkLocalStorage();
  }

  // Método para verificar o storage
  private checkLocalStorage() {
    const storedRole = localStorage.getItem('user_role');
    const storedUser = localStorage.getItem('user_name');

    if (storedRole && storedUser) {
      this.isLoggedIn = true;
      this.userRole = storedRole as 'admin' | 'client';
      this.currentUser = storedUser;
    }
  }

  login(user: string, pass: string): boolean {
    // 1. Login de ADMIN
    if (user === 'admin' && pass === '123') {
      this.setUserSession('admin', 'Administrador');
      return true;
    }

    // 2. Login de CLIENTE
    if (user === 'cliente' && pass === '123') {
      this.setUserSession('client', 'Cliente Teste');
      return true;
    }

    return false; // Falha no login
  }

  // Método auxiliar para salvar sessão
  private setUserSession(role: 'admin' | 'client', name: string) {
    this.isLoggedIn = true;
    this.userRole = role;
    this.currentUser = name;
    
    // Salva no navegador para persistir após F5
    localStorage.setItem('user_role', role);
    localStorage.setItem('user_name', name);
  }

  logout() {
    this.isLoggedIn = false;
    this.userRole = '';
    this.currentUser = '';
    
    // Limpa o storage
    localStorage.removeItem('user_role');
    localStorage.removeItem('user_name');
  }

  // Helpers para usar no HTML
  isAdmin(): boolean {
    return this.userRole === 'admin';
  }

  isClient(): boolean {
    return this.userRole === 'client';
  }
  
  // Se não está logado, é um visitante (Guest)
  isGuest(): boolean {
    return !this.isLoggedIn;
  }
}