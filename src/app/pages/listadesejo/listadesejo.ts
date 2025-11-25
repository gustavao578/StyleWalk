import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../model/product.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listadesejo.html',
  styleUrls: ['./listadesejo.css']
})
export class WishlistComponent implements OnInit {
  favorites: Product[] = [];

  ngOnInit() {
    this.loadFavorites();
  }

  loadFavorites() {
    const data = localStorage.getItem('favoritos');
    this.favorites = data ? JSON.parse(data) : [];
  }

  remove(id: number) {
    this.favorites = this.favorites.filter(p => p.id !== id);
    localStorage.setItem('favoritos', JSON.stringify(this.favorites));
  }
}
