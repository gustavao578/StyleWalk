import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-esportes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './esportes.html',
  styleUrls: ['./esportes.css']
})
export class Esportes implements OnInit {

  esportes: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.esportes = products.filter(p => p.category === 'Esportes');
    });
  }
}
