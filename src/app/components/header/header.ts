import { Component, OnInit } from '@angular/core';
import { RouterLink,Router, Navigation, NavigationEnd, RouterLinkActive } from '@angular/router';
import { CartService } from '../../services/cart';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
  
})

export class Header implements OnInit {
  cartItemCount = 0;

currentRoute: string = '';
  indicatorTransform: string = 'translateX(0) scaleX(0)';

  constructor(private router: Router, private CartService: CartService) {}

  justAddeed = false;

  ngOnInit() {
    this.CartService.cartItems$.subscribe(items => {
  this.cartItemCount = items.reduce((count, item) => count + item.quantity, 0);
   this.justAddeed = false;
   this.justAddeed = true;
    setTimeout(() => this.justAddeed = false, 400);
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        this.updateIndicator();
      }
    });
  }
  mensaje = '';

addToCart(product: any) {
  this.CartService.addToCart(product);
  this.mensaje = `${product.name} agregado al carrito!`;
  setTimeout(() => this.mensaje = '', 3000);
}


  updateIndicator() {
    // Timeout para esperar a que se aplique la clase active-page
    setTimeout(() => {
      const activeLink = document.querySelector('.main-nav a.active-page');
      if (activeLink) {
        const linkRect = activeLink.getBoundingClientRect();
        const navRect = activeLink.closest('.main-nav')!.getBoundingClientRect();
        const position = linkRect.left - navRect.left;
        const width = linkRect.width;

        this.indicatorTransform = `translateX(${position}px) scaleX(${width})`;
      }
    }, 50);
  }
}
