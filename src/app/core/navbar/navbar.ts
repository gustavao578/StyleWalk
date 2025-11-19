import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  constructor(public authService: AuthService, private router: Router) {}

  get isLogged() {
    return this.authService.isLoggedIn;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}