import { Component } from '@angular/core';

interface FooterLink {
  label: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  // Dados de Informação
  informationLinks: FooterLink[] = [
    { label: 'Sobre Drip Store', url: '/sobre' },
    { label: 'Segurança', url: '/seguranca' },
    { label: 'Wishlist', url: '/wishlist' },
    { label: 'Blog', url: '/blog' },
    { label: 'Trabalhe Conosco', url: '/trabalhe' }
  ];

  // Dados de Categoria
  categoryLinks: FooterLink[] = [
    { label: 'Camisetas', url: '/camisetas' },
    { label: 'Calças', url: '/calcas' },
    { label: 'Bonés', url: '/bones' },
    { label: 'Headphones', url: '/headphones' },
    { label: 'Tênis', url: '/tenis' }
  ];

  // Função simples para evitar reload no form de exemplo
  onSubmit(event: Event): void {
    event.preventDefault();
    alert('Inscrito com sucesso!');
  }
}