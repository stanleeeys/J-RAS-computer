import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ CommonModule, Footer, Header, RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: ReturnType<FormBuilder['group']>;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit() {
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe({
        next: (res: any) => {
           this.authService.saveToken(res.token);
          this.router.navigate(['/']);
        },
        error: (err) => {
        this.errorMessage = err.error || "Error al iniciar sesión";
      }
      });
    }
  }
  ngOnInit() {
  if(this.authService.isLoggedIn()) {
    this.router.navigate(['/dashboard']); // O a la página principal
  }
}
}
