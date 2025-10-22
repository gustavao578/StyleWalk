import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Tênis Esportivo', image: 'https://via.placeholder.com/150', description: 'Ideal para corridas.' },
    { id: 2, name: 'Sapato Social', image: 'https://via.placeholder.com/150', description: 'Couro legítimo.' }
  ];
  private nextId = 3;

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  addProduct(product: Omit<Product, 'id'>): Observable<Product> {
    const newProduct: Product = { ...product, id: this.nextId++ };
    this.products.push(newProduct);
    return of(newProduct);
  }

  updateProduct(productToUpdate: Product): Observable<Product> {
    const index = this.products.findIndex(p => p.id === productToUpdate.id);
    if (index > -1) {
      this.products[index] = productToUpdate;
      return of(productToUpdate);
    }
    return throwError(() => new Error('Produto não encontrado para atualização'));
  }

  deleteProduct(id: number): Observable<{}> {
    const index = this.products.findIndex(p => p.id === id);
    if (index > -1) {
      this.products.splice(index, 1);
      return of({});
    }
    return throwError(() => new Error('Produto não encontrado'));
  }
}
