import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface CartItem {
  id: string,
  name: string,
  price: number,
  image: string,
  quantity: number
}


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();

  addToCart(product: any) {
    const currentItems = this.cartItems.value;
    const existingItem = currentItems.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      currentItems.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image
      });
    }

    this.cartItems.next([...currentItems]);
  }

  removeFromCart(productId: string) {
    const updatedItems = this.cartItems.value.filter(item => item.id !== productId);
    this.cartItems.next(updatedItems);
  }

  updateQuantity(productId: string, quantity: number) {
    const updatedItems = this.cartItems.value.map(item => {
      if (item.id === productId) {
        return { ...item, quantity };
      }
      return item;
    });
    this.cartItems.next(updatedItems);
  }

  getTotal() {
    return this.cartItems.value.reduce(
      (sum, item) => sum + (item.price * item.quantity),
      0
    );
  }

  clearCart() {
    this.cartItems.next([]);
  }
}
