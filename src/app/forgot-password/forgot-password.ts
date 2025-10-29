import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './forgot-password.html',
  styleUrls: ['./forgot-password.css']
})
export class ForgotPasswordComponent {
  email: string = '';
  message: string = '';

  recoverPassword() {
    if (!this.email) {
      this.message = 'Por favor, insira seu e-mail.';
      return;
    }

    this.message = `Um link de recuperação foi enviado para ${this.email}.`;
  }
}
