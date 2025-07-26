import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaModel } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService  {
  private apiUrl = 'http://localhost:8080/api/categorias';

  constructor(private http: HttpClient) {}

listarCategorias(): Observable<CategoriaModel[]> {
    return this.http.get<CategoriaModel[]>(this.apiUrl);
  }
}
