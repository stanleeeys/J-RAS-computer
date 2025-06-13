import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { CartService } from '../../services/cart';
@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterLink, Header, Footer],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})

export class CartComponent {
  constructor(public cartService: CartService) {}

  incrementQuantity(item: any) {
    this.cartService.updateQuantity(item.id, item.quantity + 1);
  }

  decrementQuantity(item: any) {
    if (item.quantity > 1) {
      this.cartService.updateQuantity(item.id, item.quantity - 1);
    }
  }

}
