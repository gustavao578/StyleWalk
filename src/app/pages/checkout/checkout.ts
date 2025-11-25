import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItem, CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css']
})
export class CheckoutComponent implements OnInit {
  paymentMethod: 'credit' | 'pix' | 'boleto' = 'credit';
  
  // Lista de itens carregada do carrinho
  cartItems: CartItem[] = [];

  // Dados do formulário
  userData = {
    fullName: '', email: '', phone: '', cpf: '',
    zip: '', street: '', number: '', district: '', city: '', state: '', comp: ''
  };

  cardData = { number: '', name: '', expiry: '', cvv: '' };

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  // ESTE É O MÉTODO QUE VOCÊ PRECISA
  ngOnInit() {
    // Carrega os produtos armazenados no serviço de carrinho
    this.cartItems = this.cartService.getCart();

    // Segurança: Se não houver itens, volta para a home
    if (this.cartItems.length === 0) {
      this.router.navigate(['/home']);
    }
  }

  // Getters para cálculos automáticos no HTML
  get subtotal(): number {
    return this.cartService.getTotal();
  }

  get shipping(): number {
    return 25.00; // Frete fixo para exemplo
  }

  get total(): number {
    return this.subtotal + this.shipping;
  }

  setPayment(method: 'credit' | 'pix' | 'boleto') {
    this.paymentMethod = method;
  }

  finishOrder() {
    // Aqui entraria a integração com backend real
    alert('Pedido realizado com sucesso! Obrigado pela compra.');
    
    // Limpa o carrinho após a compra
    this.cartService.clearCart();
    
    // Redireciona para a home
    this.router.navigate(['/home']);
  }
}