import { Component, Inject } from '@angular/core';
import { AuthService } from '../services/auth'; // ✅ OK
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule, Footer, Header],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {
  constructor(private auth: AuthService, private router: Router, private dialog: MatDialog) {} // ✅ OK

  logout() {
    this.auth.logout();
    this.router.navigate(['/Login']);
  }
   navigateToProducts() {
    this.router.navigate(['/category']);
  }

  openOrders() {
    this.router.navigate(['/user/orders']);
  }
  openProfile() {
  // Aquí puedes abrir un diálogo, navegar a otra página, etc.
  console.log('Perfil abierto');
}
}
