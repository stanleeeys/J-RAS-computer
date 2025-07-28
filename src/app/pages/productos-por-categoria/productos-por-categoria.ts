import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto';
import { CommonModule } from '@angular/common';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-productos-por-categoria',
  imports: [CommonModule, Footer, Header, RouterLink],
  templateUrl: './productos-por-categoria.html',
  styleUrl: './productos-por-categoria.css'
})
export class ProductosPorCategoria implements OnInit {
  productos: Producto[] = [];

  constructor(private route: ActivatedRoute, private productoService: ProductoService) { }

  ngOnInit(): void {
    const idCategoria = Number(this.route.snapshot.paramMap.get('id'));
    this.productoService.obtenerPorCategoria(idCategoria).subscribe(data => {
      this.productos = data;
    });
  }
    addToCart(producto: Producto) {
    console.log('Producto agregado al carrito:', producto);
    // aquí puedes integrar con tu servicio de carrito
  }
   getFilteredProductos(search: string): any[] {
    if (!search) {
      return this.productos;
    }
    const lowerSearch = search.toLowerCase();
    return this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(lowerSearch)
    );
  }
}
