// login.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth'; // 1. Importe o AuthService
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';
  info = '';
  

  // 2. Injete o AuthService
  constructor(private authService: AuthService, private router: Router) { }

  login() {
    // 3. Use o serviço para fazer o login
    if (this.username === 'admin' && this.password === 'admin') {
      // Lógica de login bem-sucedida
      this.router.navigate(['/admin']);
    } else {
      this.error = 'Usuário ou senha inválidos.';
    }
  }


  forgotPassword() {
    if (!this.username) {
      this.info = 'Por favor, insira seu usuário para recuperar a senha.';
      return;
    }
    this.info = `Um link de recuperação foi enviado para o e-mail cadastrado de ${this.username}.`;
  }

}
