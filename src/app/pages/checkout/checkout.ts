import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css']
})
export class CheckoutComponent {
  paymentMethod: 'credit' | 'pix' | 'boleto' = 'credit';
  
  // Dados mockados para simular o carrinho
  cartItems = [
    { name: 'UltraBoost Runner', price: 899.90, qty: 1, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=100&q=80' },
    { name: 'Meias Performance', price: 49.90, qty: 2, image: 'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?auto=format&fit=crop&w=100&q=80' }
  ];

  userData = {
    fullName: '', email: '', phone: '', cpf: '',
    zip: '', street: '', number: '', district: '', city: '', state: '', comp: ''
  };

  cardData = { number: '', name: '', expiry: '', cvv: '' };

  get subtotal(): number {
    return this.cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
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
    alert('Pedido realizado com sucesso! Obrigado pela compra.');
  }
}