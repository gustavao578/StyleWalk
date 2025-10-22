// navbar.component.ts
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; // 1. Importe Router
import { AuthService } from '../../services/auth';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  // 2. Injete o AuthService e o Router
  constructor(private authService: AuthService, private router: Router) {}

  get isAdmin() {
    return this.authService.userRole === 'admin';
  }

  get isLogged() {
    return this.authService.isLoggedIn;
  }

  // 3. Crie o método de logout
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']); // Redireciona para o login após sair
  }
}
