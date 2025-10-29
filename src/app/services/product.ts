import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Product } from '../model/product.model';
import { HttpClient } from '@angular/common/http'; // Importado
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Define o endpoint da API para o recurso 'products' no JSON-SERVER (porta padrão 3000)
  private readonly API = 'http://localhost:3000/products';

  // Injeção de dependência do HttpClient
  constructor(private http: HttpClient) { }

  // READ: Retorna todos os produtos [cite: 161]
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API);
  }

  // CREATE: Adiciona um novo produto (o ID será gerado pelo JSON-SERVER) [cite: 177]
  addProduct(product: Omit<Product, 'id'>): Observable<Product> {
    return this.http.post<Product>(this.API, product);
  }

  // UPDATE: Atualiza um produto existente [cite: 180]
  updateProduct(productToUpdate: Product): Observable<Product> {
    const url = `${this.API}/${productToUpdate.id}`;
    return this.http.put<Product>(url, productToUpdate).pipe(
      catchError(error => {
        console.error('Erro ao atualizar produto:', error);
        return throwError(() => new Error('Produto não encontrado para atualização'));
      })
    );
  }

  // DELETE: Exclui um produto pelo ID [cite: 182]
  deleteProduct(id: number): Observable<{}> {
    const url = `${this.API}/${id}`;
    return this.http.delete<{}>(url).pipe(
      catchError(error => {
        console.error('Erro ao excluir produto:', error);
        return throwError(() => new Error('Produto não encontrado para exclusão'));
      })
    );
  }
}