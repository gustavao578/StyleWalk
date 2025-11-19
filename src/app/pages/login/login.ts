import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';

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

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    // Agora chamamos o serviço para verificar as credenciais
    const loginSucesso = this.authService.login(this.username, this.password);

    if (loginSucesso) {
      // Se for Admin, vai para o painel administrativo
      if (this.authService.userRole === 'admin') {
        this.router.navigate(['/admin']);
      } else {
        // Se for Cliente, vai para a Home
        this.router.navigate(['/home']);
      }
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