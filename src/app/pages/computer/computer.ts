import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { Header } from "../../components/header/header";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-computer',
  imports: [CommonModule,Header],
  standalone: true,
  templateUrl: './computer.html',
  styleUrl: './computer.css'
})
export class ComputerComponent {
  @ViewChild('buscarInput') buscarInput!: ElementRef;
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

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    // Filtro de búsqueda

    this.renderer.listen(this.buscarInput.nativeElement, 'input', (event: any) => {
      const filtro = event.target.value.toLowerCase();
      this.productosFiltrados = this.productos.filter(p =>
        p.nombre.toLowerCase().includes(filtro)
      );
    });

    // Tarjetas 3D
    const tarjetas = this.el.nativeElement.querySelectorAll('.tarjeta-3d');
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
    });
  }

}
