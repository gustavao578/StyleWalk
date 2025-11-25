import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from '../../services/product';
import { Product } from '../../model/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  favoritos: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadFavoritos();
  }

  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (data) => this.products = data,
      error: (err) => console.error(err)
    });
  }

  loadFavoritos() {
    const data = localStorage.getItem('favoritos');
    this.favoritos = data ? JSON.parse(data) : [];
  }

  salvarFavoritos() {
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
  }

  add(product: Product) {
    this.cartService.addToCart(product);
  }

  toggleFavorite(product: Product) {
    if (this.isFavorite(product)) {
      this.favoritos = this.favoritos.filter(p => p.id !== product.id);
    } else {
      this.favoritos.push(product);
    }

    this.salvarFavoritos();
  }

  isFavorite(product: Product) {
    return this.favoritos.some(p => p.id === product.id);
  }
}
