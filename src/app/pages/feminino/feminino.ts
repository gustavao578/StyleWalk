import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-feminino',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './feminino.html',
  styleUrls: ['./feminino.css']
})
export class Feminino implements OnInit {

  femininos: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      // Filtra apenas Feminino
      this.femininos = products.filter(p => p.category === 'Feminino');
    });
  }
}
