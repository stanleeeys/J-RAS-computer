import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {
private apiUrl = 'https://tu-api.com/auth';
  constructor(private http: HttpClient) { }
  login(credentials: { email: string; password: string }) {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
      }),
      catchError(err => {
        return throwError(() => new Error('Credenciales inválidas'));
      })
    );
  }
  register(userData: any) {
    return this.http.post(`${this.apiUrl}/register`, userData).pipe(
      catchError(err => {
        return throwError(() => new Error('Error en el registro'));
      })
    );
  }
}
