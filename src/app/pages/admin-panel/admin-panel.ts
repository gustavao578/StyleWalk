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
  productFormData: Partial<Product> = {
    name: '',
    image: '',
    description: '',
    price: 0,
    category: ''
  };
  isEditing = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  saveProduct(): void {
    if (this.isEditing && this.productFormData.id) {
      this.productService.updateProduct(this.productFormData as Product).subscribe({
        next: () => {
          this.loadProducts();
          this.resetForm();
          alert('Produto atualizado com sucesso!');
        },
        error: (err) => console.error('Erro:', err)
      });
    } else {
      this.productService.addProduct(this.productFormData as Omit<Product, 'id'>).subscribe({
        next: () => {
          this.loadProducts();
          this.resetForm();
          alert('Produto adicionado com sucesso!');
        },
        error: (err) => console.error('Erro:', err)
      });
    }
  }

  editProduct(product: Product): void {
    this.productFormData = { ...product };
    this.isEditing = true;
    window.scrollTo(0, 0);
  }

  deleteProduct(product: Product): void {
    if (product.id && confirm(`Excluir "${product.name}"?`)) {
      this.productService.deleteProduct(product.id).subscribe({
        next: () => {
          this.loadProducts();
          alert('Produto excluído!');
        },
        error: (err) => console.error('Erro:', err)
      });
    }
  }

  resetForm(): void {
    this.productFormData = {
      name: '',
      image: '',
      description: '',
      price: 0,
      category: ''
    };
    this.isEditing = false;
  }
}