// home.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product';
import { Product } from '../../model/product.model';
import { CartService } from '../../services/cart.service';

// Importações do Angular Material (Necessário rodar 'ng add @angular/material' primeiro)
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  // ADICIONADO: Módulos do Angular Material
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  add(product: Product) {
    this.cartService.addToCart(product);
  }
}