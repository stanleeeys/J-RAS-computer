import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CartService } from '../cart/cart';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componentes',
  imports: [Header,Footer,RouterLink, CommonModule, FormsModule],
  templateUrl: './componentes.html',
  styleUrl: './componentes.css'
})
export class Componentes {
   @ViewChild('buscarInput') buscarInput!: ElementRef;
productos = [
  {
    nombre: 'XTRIKE',
    descripcion: 'Keyboard Mechanic',
    precio: '$65',
    imagen: 'imgCategories/mecanicogaming.png'
  },
  {
    nombre: 'RAM DDR4',
    descripcion: 'RGB 3200mhz',
    precio: '$94',
    imagen: 'imgCategories/RAM0532.png'
  },
  {
    nombre: 'RAM DDR4',
    descripcion: '3200mhz',
    precio: '$60',
    imagen: 'imgCategories/RAM0573.jpg'
  },
  {
    nombre: 'Hard drive',
    descripcion: '1TB the storage',
    precio: '$100',
    imagen: 'imgCategories/DIX0114.jpg'
  },
  {
    nombre: 'SSD BLUE',
    descripcion: '650gb the storage',
    precio: '$56.95',
    imagen: 'imgCategories/SSD0067.png'
  },
  {
    nombre: 'SSD Kingstone',
    descripcion: '1TB the storage',
    precio: '$99.99',
    imagen: 'imgCategories/ALM0035.png'
  },
  {
    nombre: 'Lenovo',
    descripcion: 'Keyboard for work',
    precio: '$35.69',
    imagen: 'imgCategories/[09057] Teclado Lenovo Preferred Pro USB Lector de Huellas KUF1256 FRA.jpg'
  },
  {
    nombre: 'Xtech',
    descripcion: 'RGB, Keyboard mechanic, perfect for gaming.',
    precio: '$100.00',
    imagen: 'imgCategories/[08514] Teclado Gaming Xtech Multimedia, ARMIGER  Multicolor, Backligth USB, XTK-510S.jpg'
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
