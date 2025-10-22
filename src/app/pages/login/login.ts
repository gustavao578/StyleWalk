// login.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth'; // 1. Importe o AuthService

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  // 2. Injete o AuthService
  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    // 3. Use o serviço para fazer o login
    if (this.username === 'admin' && this.password === 'admin') {
      // Lógica de login bem-sucedida
      this.router.navigate(['/admin']);
    } else {
      this.error = 'Usuário ou senha inválidos.';
    }
  }
}
