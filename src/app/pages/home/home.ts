import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { CommonModule } from '@angular/common';
import { Footer } from '../../components/footer/footer';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-home',
  imports: [Header, Footer, CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {
  images = [
    'icons/banner (1).png',
    'icons/banner (2).png',
    'icons/banner (3).png',
    'icons/banner (4).png',
    'icons/banner (5).png',
    'icons/banner (6).png',
    'icons/banner (7).png',
    'icons/banner (8).png',
    'icons/banner (9).png'

  ];
  // En tu HomeComponent
featuredProducts = [
  { id: '10', name: 'HP Owen', price: 399.99, image: '/imgComputers/HP OWEN.png' },
  { id: '11', name: 'Keyboard mechanic', price: 180, image: '/imgCategories/mecanicogaming.png' },
  { id: '11', name: 'RAM', price: 60, image: 'imgCategories/RAM0532.png' },
  { id: '11', name: 'USB', price: 100, image: 'imgCategories/USB0295.jpg' },
  // ...
];
testimonials = [
  { text: 'Excellent service and quality products.', author: 'Carlos M.' },
  { text: 'Mi PC gamer llegó rápido y funciona perfecto.', author: 'Ana G.' },
  // ...
];
  currentIndex = 0;
  intervalId: any;

  categories = [
    {
      name: 'Components',
      img: 'imgCategories/componentes.png',
      link: '/componentes'
    },
    {
      name: 'accessories',
      img: 'imgCategories/accesorios.png',
      link: '/accesorios'
    },
    {
      name: 'Computer',
      img: 'imgCategories/Skytech.png',
      link: '/computer'
    },
    {
      name: 'laptop',
      img: 'imgCategories/7.jpg',
      link: '/laptop'
    },


  ];
  constructor(private cartService: CartService) {}
   ngOnInit() {
    this.intervalId = setInterval(() => this.nextImage(), 4000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToImage(index: number) {
    this.currentIndex = index;
  }
      addToCart(product: any) {
    this.cartService.addToCart({
    id: product.nombre,
    name: product.nombre,
    price: parseFloat(product.precio.replace('$', '')),
    image: product.imagen,
    quantity: 1
  });
  }

}
