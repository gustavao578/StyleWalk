import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product';
import { Product } from '../../model/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-masculino',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './masculino.html',
  styleUrls: ['./masculino.css']
})
export class Masculino implements OnInit {

  masculinos: Product[] = [];

   constructor(private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      // Filtra somente produtos masculinos
      this.masculinos = products.filter(p => p.category === 'Masculino');
    });
  }


   add(product: Product) {
    this.cartService.addToCart(product);
  }
}