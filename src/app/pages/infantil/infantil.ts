import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product';
import { Product } from '../../model/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-infantil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './infantil.html',
  styleUrls: ['./infantil.css']
})
export class Infantil implements OnInit {

  infantil: Product[] = [];

   constructor(private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.infantil = products.filter(p => p.category === 'Infantil');
    });
  }

   add(product: Product) {
    this.cartService.addToCart(product);
  }
}
