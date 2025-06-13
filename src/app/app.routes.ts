import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ComputerComponent } from './pages/computer/computer';
import { LaptopComponent } from './pages/laptop/laptop';
import { Category } from './pages/category/category';
import { ContactUs } from './pages/contact-us/contact-us';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';


export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'computer', component: ComputerComponent},
  {path: 'laptop', component: LaptopComponent},
  {path: 'category', component: Category},
  {path: 'contact', component: ContactUs},
  {path: 'Login', component: Login},
  {path: 'register',component: Register},
  {
   path: 'cart',
  loadComponent: () => import('./pages/cart/cart').then(m => m.CartComponent)
  }

];
