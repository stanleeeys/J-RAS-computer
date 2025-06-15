import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  imports: [Header, Footer, ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './category.html',
  styleUrl: './category.css'
})
export class Category {
    categories = [
    {
      id: 1,
      name: 'laptop',
      description: 'Portátiles para trabajo, gaming y diseño',
      image: 'imgCategories/7.jpg',
      count: 12
    },
    {
      id: 2,
      name: 'computer',
      description: 'Equipos de escritorio de alto rendimiento',
      image: 'imgCategories/Skytech.png',
      count: 12
    },
    {
      id: 3,
      name: 'Componentes',
      description: 'Tarjetas gráficas, procesadores y más',
      image: 'imgCategories/componentes.png',
      count: 12
    },
    {
      id: 4,
      name: 'Accesorios',
      description: 'Periféricos y complementos esenciales',
      image: 'imgCategories/accesorios.png',
      count: 12
    }
  ];
}
