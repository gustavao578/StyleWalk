import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Product[] = [];

  constructor() {}

  getCart() {
    return this.cart;
  }

  addToCart(product: Product) {
    this.cart.push(product);
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(p => p.id !== productId);
  }

  clearCart() {
    this.cart = [];
  }

  getTotal() {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  }

  getCount() {
    return this.cart.length;
  }
}
