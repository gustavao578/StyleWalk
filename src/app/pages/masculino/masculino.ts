import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-masculino',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './masculino.html',
  styleUrls: ['./masculino.css']
})
export class Masculino implements OnInit {

  masculinos: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      // Filtra somente produtos masculinos
      this.masculinos = products.filter(p => p.category === 'Masculino');
    });
  }
}