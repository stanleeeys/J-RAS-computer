import { Component, OnInit } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoriaService } from '../../services/categoria';
import { CategoriaModel } from '../../interfaces/categoria';

@Component({
  selector: 'app-category',
  imports: [Header, Footer, ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './category.html',
  styleUrl: './category.css'
})
export class Category implements OnInit {
categorias: CategoriaModel[] = [];

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.cargarCategorias();
  }

  cargarCategorias() {
    this.categoriaService.listarCategorias().subscribe({
      next: (data) => {
        this.categorias = data;
        console.log('Categorías obtenidas:', data); // Opcional: Ver en consola
      },
      error: (err) => {
        console.error('Error al cargar categorías:', err);
      }
    });
  }
}
