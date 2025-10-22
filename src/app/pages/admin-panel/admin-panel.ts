import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-panel.html',
  styleUrls: ['./admin-panel.css']
})
export class AdminPanelComponent implements OnInit {
  products: Product[] = [];
  newProduct: { name: string; image: string; description: string } = {
    name: '',
    image: '',
    description: ''
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  addProduct(): void {
    this.productService.addProduct(this.newProduct).subscribe(() => {
      this.loadProducts(); // Recarrega a lista
      // Limpa o formulário
      this.newProduct = { name: '', image: '', description: '' };
    });
  }

  editProduct(product: Product): void {
    // Lógica de edição pode ser implementada aqui (ex: abrir um modal)
    alert(`Editando: ${product.name}`);
  }

  deleteProduct(product: Product): void {
    if (confirm(`Tem certeza que deseja excluir o produto "${product.name}"?`)) {
      this.productService.deleteProduct(product.id).subscribe(() => {
        this.loadProducts(); // Recarrega a lista
      });
    }
  }
}
