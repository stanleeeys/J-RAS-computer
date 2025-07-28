import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriaModel } from '../interfaces/categoria';
import { map } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
   private apiUrl = 'http://localhost:8080/api/productos';

  constructor(private http: HttpClient) { }
  obtenerPorCategoria(idCategoria: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}/categoria/${idCategoria}`);
  }

}
