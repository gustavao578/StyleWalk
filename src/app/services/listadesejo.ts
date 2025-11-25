import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaDesejoService {
  private storageKey = 'stylewalk_wishlist';
  private wishlistSubject = new BehaviorSubject<Product[]>(this.getListaDesejo());
  
  wishlist$ = this.wishlistSubject.asObservable();

  constructor() {}

  getListaDesejo(): Product[] {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  toggleFavorite(product: Product) {
    let items = this.getListaDesejo();
    const index = items.findIndex(p => p.id === product.id);

    if (index > -1) {
      items.splice(index, 1); // Remove se já existe
    } else {
      items.push(product); // Adiciona se não existe
    }

    localStorage.setItem(this.storageKey, JSON.stringify(items));
    this.wishlistSubject.next(items);
  }

  isFavorite(id: number): boolean {
    const items = this.getListaDesejo();
    return items.some(p => p.id === id);
  }

  removeFromWishlist(id: number) {
    let items = this.getListaDesejo();
    items = items.filter(p => p.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(items));
    this.wishlistSubject.next(items);
  }
}