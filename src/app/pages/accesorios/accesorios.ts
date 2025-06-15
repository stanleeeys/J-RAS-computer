import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CartService } from '../cart/cart';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accesorios',
  imports: [Header,Footer, RouterLink, CommonModule],
  templateUrl: './accesorios.html',
  styleUrl: './accesorios.css'
})
export class Accesorios {
@ViewChild('buscarInput') buscarInput!: ElementRef;
productos = [
  {
    nombre: 'UTP',
    descripcion: 'Cale convertidor UTP',
    precio: '$10',
    imagen: 'imgCategories/ADP0320.jpg'
  },
  {
    nombre: 'Headset',
    descripcion: 'Escucha musica en alta calidad',
    precio: '$94',
    imagen: 'imgCategories/AUD0296.png'
  },
  {
    nombre: 'USB',
    descripcion: 'Intel i9 · 32GB RAM · 1TB SSD',
    precio: '$399.99',
    imagen: 'imgCategories/USB0295.jpg'
  },
  {
    nombre: 'JBL',
    descripcion: 'Intel Core i7 128GB 12GB RAM',
    precio: '$1249.99',
    imagen: 'imgCategories/AUD0409.png'
  },
  
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
  searchTerm: string = '';

  ngAfterViewInit() {
    // Filtro de búsqueda

    this.renderer.listen(this.buscarInput.nativeElement, 'input', (event: any) => {
      const filtro = event.target.value.toLowerCase();
      this.productosFiltrados = this.productos.filter(p =>
        p.nombre.toLowerCase().includes(filtro)
      );
    });

    // Tarjetas 3D
    /*const tarjetas = this.el.nativeElement.querySelectorAll('.tarjeta-3d');
    tarjetas.forEach((card: HTMLElement) => {
      this.renderer.listen(card, 'mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 20;
        const rotateX = ((y / rect.height) - 0.5) * -20;
        card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.05)`;
      });

      this.renderer.listen(card, 'mouseleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
      });

      this.renderer.listen(card, 'mousedown', () => {
        card.style.transform += ' scale(0.98)';
      });

      this.renderer.listen(card, 'mouseup', () => {
        card.style.transform = card.style.transform.replace(' scale(0.98)', ' scale(1.05)');
      });
    });*/
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
