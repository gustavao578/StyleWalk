import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../model/product.model';
import { RouterLink } from '@angular/router';
import { ListaDesejoService } from '../../services/listadesejo';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listadesejo.html',
  styleUrls: ['./listadesejo.css']
})
export class WishlistComponent implements OnInit {
  favorites: Product[] = [];

  constructor(private wishlistService: ListaDesejoService) {}

  ngOnInit() {
    this.wishlistService.wishlist$.subscribe(items => {
      this.favorites = items;
    });
  }

  remove(id: number) {
    this.wishlistService.removeFromWishlist(id);
  }
}