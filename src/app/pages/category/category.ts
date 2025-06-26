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
      description: 'Laptops for work, gaming and design',
      image: 'imgCategories/7.jpg',
      count: 12
    },
    {
      id: 2,
      name: 'computer',
      description: 'High-performance desktop computers',
      image: 'imgCategories/Skytech.png',
      count: 12
    },
    {
      id: 3,
      name: 'Componentes',
      description: 'Graphics cards, processors and more',
      image: 'imgCategories/componentes.png',
      count: 8
    },
    {
      id: 4,
      name: 'accesorios',
      description: 'Essential peripherals and accessories',
      image: 'imgCategories/accesorios.png',
      count: 12
    }
  ];
}
