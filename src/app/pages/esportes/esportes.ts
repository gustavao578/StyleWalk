import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product';
import { Product } from '../../model/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-esportes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './esportes.html',
  styleUrls: ['./esportes.css']
})
export class Esportes implements OnInit {

  esportes: Product[] = [];

   constructor(private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.esportes = products.filter(p => p.category === 'Esportes');
    });
  }

   add(product: Product) {
    this.cartService.addToCart(product);
  }
}
