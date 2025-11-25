import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CartItem, CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  total: number = 0;

  constructor(
    private cartService: CartService, 
    private router: Router
  ) {}

  ngOnInit() {
    // Assina o observable do carrinho para atualizações em tempo real
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.calculateTotal();
    });
  }

  calculateTotal() {
    // Usa o método do serviço ou calcula localmente (ambos funcionam)
    this.total = this.cartService.getTotal();
  }

  updateQty(id: number, qty: number) {
    this.cartService.updateQuantity(id, qty);
  }

  removeItem(id: number) {
    this.cartService.removeItem(id);
  }

  // FUNÇÃO QUE LEVA PARA O CHECKOUT
  irParaCheckout() {
    if (this.cartItems.length === 0) {
      alert('Seu carrinho está vazio! Adicione produtos antes de finalizar.');
      return;
    }
    // Navega para a rota /checkout
    this.router.navigate(['/checkout']);
  }
}