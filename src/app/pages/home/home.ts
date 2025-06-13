import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { CommonModule } from '@angular/common';
import { Footer } from '../../components/footer/footer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Header, Footer, CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {
  images = [
    'images/1.png',
    'images/4.png',
    'images/6.png',
    'images/pc.png',
    'images/pct.png'
  ];
  currentIndex = 0;

  constructor() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000);
  }

  scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

}
