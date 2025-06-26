import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private loginUrl = 'http://localhost:8080/api/auth/login';
  private registrarUrl= 'http://localhost:8080/api/usuarios';

   constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(this.loginUrl, data);
  }

  register(data: any) {
    return this.http.post(this.registrarUrl, data);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

}
