import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  // Injetamos o AuthService como 'public' para usar direto no HTML
  cartCount = 0;

  constructor(
    public authService: AuthService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngDoCheck() {
    this.cartCount = this.cartService.getCount();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}