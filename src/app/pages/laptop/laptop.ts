import { Component, ElementRef, ViewChild,Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { CartService } from '../cart/cart';

@Component({
  selector: 'app-laptop',
  imports: [CommonModule, Footer, Header, RouterLink],
  standalone: true,
  templateUrl: './laptop.html',
  styleUrl: './laptop.css'
})
export class LaptopComponent {
  @ViewChild('buscarInput', { static: true }) buscarInput!: ElementRef;

productos = [
  {
    nombre: 'HP ProBook 450 G7',
    descripcion: 'Intel i5 · 8GB RAM · 256GB SSD',
    precio: '$599.99',
    imagen: 'imgproductos/laptop-murjp1nk4lp1idlt.jpg'
  },
  {
    nombre: 'Dell Inspiron 15',
    descripcion: 'Intel i7 · 16GB RAM · 512GB SSD',
    precio: '$849.99',
    imagen: 'imgproductos/b90064d71416de5e74f19c6f05e45eb07d904f77.jpeg'
  },
  {
    nombre: 'HP Notebook',
    descripcion: 'Intel i5 · 8GB RAM · 64GB SSD',
    precio: '$399.99',
    imagen: 'imgproductos/7.jpg'
  },
  {
    nombre: 'Laptop Apple Macbook Air',
    descripcion: 'Intel Core i7 128GB 12GB RAM',
    precio: '$1249.99',
    imagen: 'imgproductos/photo-1517336714731-489689fd1ca8.jpg'
  },
  {
    nombre: 'Dell Laptop 3535',
    descripcion: 'Ri7 16Gb 1Tb 15',
    precio: '$699.99',
    imagen: 'imgproductos/photo-1593642632823-8f785ba67e45.jpg'
  },
  {
    nombre: 'Dell Inspiron',
    descripcion: 'Intel i3 · 4GB RAM · 512GB',
    precio: '$399.99',
    imagen: 'imgproductos/6.jpg'
  },
  {
    nombre: 'Laptop Apple',
    descripcion: 'Ryzen 5 · 8GB RAM · 512GB SSD',
    precio: '$999.99',
    imagen: 'imgproductos/images (1).jpg'
  },
  {
    nombre: 'Acer Aspire 5',
    descripcion: 'Intel i3 · 4GB RAM · 256GB SSD',
    precio: '$449.99',
    imagen: 'imgproductos/8.1.jpg'
  },
  {
    nombre: 'HP Victus 15',
    descripcion: 'Ryzen 5 8645HS RTX4060 16GB 512GB 15.6" FHD IPS 144Hz',
    precio: '$999.99',
    imagen: 'imgproductos/14.png'
  },
  {
    nombre: 'Laptop Gamer HP VICTUS',
    descripcion: 'Ryzen 7 5800H 16GB 512GB RTX 3060 144HZ',
    precio: '$1199.99',
    imagen: 'imgproductos/10.jpg'
  },
  {
    nombre: 'Laptop LG',
    descripcion: 'Ryzen 5 · 12GB RAM · 512GB SSD',
    precio: '$1499.99',
    imagen: 'imgproductos/11.jpg'
  },
  {
    nombre: 'Laptop Samsung',
    descripcion: 'Intel i4 · 4GB RAM · 256GB',
    precio: '$749.99',
    imagen: 'imgproductos/12.jpg'
  }
];

  productosFiltrados = [...this.productos];
  filtrarProductos(event: Event) {
  const valor = (event.target as HTMLInputElement).value.toLowerCase();
  this.productosFiltrados = this.productos.filter(p =>
    p.nombre.toLowerCase().includes(valor)
  );
}


  tarjetas = [
    { texto: 'Tarjeta 1' },
    { texto: 'Tarjeta 2' }
  ];

 constructor(
     private renderer: Renderer2,
     private el: ElementRef,
     private cartService: CartService
   ) {}

  ngAfterViewInit() {
    // Filtro de búsqueda

    this.renderer.listen(this.buscarInput.nativeElement, 'input', (event: any) => {
      const filtro = event.target.value.toLowerCase();
      this.productosFiltrados = this.productos.filter(p =>
        p.nombre.toLowerCase().includes(filtro)
      );
    });

    // Tarjetas 3D

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
