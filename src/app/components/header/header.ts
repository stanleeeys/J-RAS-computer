import { Component, OnInit } from '@angular/core';
import { RouterLink,Router, Navigation, NavigationEnd, RouterLinkActive } from '@angular/router';
import { CartService } from '../../services/cart';
@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
  providers: [CartService]
})

export class Header implements OnInit {
  cartItemCount = 0;

currentRoute: string = '';
  indicatorTransform: string = 'translateX(0) scaleX(0)';

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe((items: any[]) => {
      this.cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        this.updateIndicator();
      }
    });
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
