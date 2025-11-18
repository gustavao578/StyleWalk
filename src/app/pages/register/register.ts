import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  formData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phone: ''
  };

  constructor(private router: Router) {}

  register() {
    if (this.formData.password !== this.formData.confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }
    console.log('Dados do registro:', this.formData);
    alert('Conta criada com sucesso! Faça login.');
    this.router.navigate(['/login']);
  }
}