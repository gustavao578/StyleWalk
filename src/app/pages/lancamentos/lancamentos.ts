import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product';
import { Product } from '../../model/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-lancamentos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lancamentos.html',
  styleUrls: ['./lancamentos.css']
})
export class Lancamentos implements OnInit {

  lancamentos: Product[] = [];

   constructor(private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.lancamentos = products.slice(0, 4);
    });
  }


   add(product: Product) {
    this.cartService.addToCart(product);
  }
}
