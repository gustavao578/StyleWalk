import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../model/product.model';

export interface CartItem extends Product {
  qty: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private storageKey = 'stylewalk_cart';
  private cartSubject = new BehaviorSubject<CartItem[]>(this.getCart());
  
  cart$ = this.cartSubject.asObservable();

  constructor() {}

  getCart(): CartItem[] {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  addToCart(product: Product) {
    const items = this.getCart();
    const index = items.findIndex(p => p.id === product.id);

    if (index > -1) {
      items[index].qty += 1;
    } else {
      items.push({ ...product, qty: 1 });
    }
    this.updateCart(items);
  }

  removeItem(id: number) {
    const items = this.getCart().filter(p => p.id !== id);
    this.updateCart(items);
  }

  updateQuantity(id: number, quantity: number) {
    let items = this.getCart();
    const index = items.findIndex(p => p.id === id);

    if (index > -1) {
      items[index].qty = quantity;
      if (items[index].qty <= 0) {
        items.splice(index, 1);
      }
    }
    this.updateCart(items);
  }

  clearCart() {
    this.updateCart([]);
  }

  getTotal(): number {
    return this.getCart().reduce((acc, item) => acc + (item.price * item.qty), 0);
  }

  /**
   * Returns the total number of items in the cart (sum of qty)
   */
  getCount(): number {
    return this.getCart().reduce((acc, item) => acc + (item.qty || 0), 0);
  }

  private updateCart(items: CartItem[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(items));
    this.cartSubject.next(items);
  }
}