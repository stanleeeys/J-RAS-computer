import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from "../../components/header/header";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule,Header],
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  clientesCount: number = 0;
  productosCount: number = 0;
  aniosCount: number = 0;

    private clientesFinal: number = 12500;
  private productosFinal: number = 350;
  private aniosFinal: number = new Date().getFullYear() - 2015;
  private incrementSpeed: number = 50;

    ngOnInit(): void {
    this.animateCounter('clientes');
    this.animateCounter('productos');
    this.animateCounter('anios');
  }
  private animateCounter(tipo: 'clientes' | 'productos' | 'anios'): void {
    let current = 0;
    const finalValue = tipo === 'clientes' ? this.clientesFinal :
                       tipo === 'productos' ? this.productosFinal :
                       this.aniosFinal;
    const increment = finalValue / 20;

    const interval = setInterval(() => {
      current += increment;
      if (current >= finalValue) {
        current = finalValue;
        clearInterval(interval);
      }

      if (tipo === 'clientes') this.clientesCount = Math.floor(current);
      if (tipo === 'productos') this.productosCount = Math.floor(current);
      if (tipo === 'anios') this.aniosCount = Math.floor(current);
    }, this.incrementSpeed);
  }

}
