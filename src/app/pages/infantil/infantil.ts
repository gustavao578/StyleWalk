import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-infantil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './infantil.html',
  styleUrls: ['./infantil.css']
})
export class Infantil implements OnInit {

  infantil: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.infantil = products.filter(p => p.category === 'Infantil');
    });
  }
}
