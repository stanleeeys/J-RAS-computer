import { CategoriaModel } from "./categoria";

export interface Producto {
    id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen_url: string;
  categoria:{
    id: number;
    nombre: string;
    imagen_url: string;
  }      // Objeto completo (para consultas JOIN)
}

