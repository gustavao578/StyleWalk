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
  // Usa Partial<Product> para acomodar dados de um novo produto (sem ID) ou edição (com ID)
  productFormData: Partial<Product> = {
    name: '',
    image: '',
    description: ''
  };
  isEditing = false; // Flag para controlar o modo de edição

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  // Método unificado para Adicionar ou Salvar Alterações
  saveProduct(): void {
    if (this.isEditing && this.productFormData.id) {
      // Lógica para Alteração [cite: 292]
      this.productService.updateProduct(this.productFormData as Product).subscribe({
        next: () => {
          this.loadProducts();
          this.resetForm();
          alert('Produto atualizado com sucesso!');
        },
        error: (err) => console.error('Erro ao atualizar produto:', err)
      });
    } else {
      // Lógica para Inclusão [cite: 295]
      this.productService.addProduct(this.productFormData as Omit<Product, 'id'>).subscribe({
        next: () => {
          this.loadProducts();
          this.resetForm();
          alert('Produto adicionado com sucesso!');
        },
        error: (err) => console.error('Erro ao adicionar produto:', err)
      });
    }
  }

  editProduct(product: Product): void {
    // Carrega os dados do produto no formulário para edição
    this.productFormData = { ...product };
    this.isEditing = true;
    window.scrollTo(0, 0); // Opcional: rola para o topo para visualizar o formulário
  }

  deleteProduct(product: Product): void {
    if (product.id && confirm(`Tem certeza que deseja excluir o produto "${product.name}"?`)) {
      this.productService.deleteProduct(product.id).subscribe({
        next: () => {
          this.loadProducts(); // Recarrega a lista
          alert('Produto excluído com sucesso!');
          this.resetForm();
        },
        error: (err) => console.error('Erro ao excluir produto:', err)
      });
    }
  }

  resetForm(): void {
    this.productFormData = {
      name: '',
      image: '',
      description: ''
    };
    this.isEditing = false;
  }
}