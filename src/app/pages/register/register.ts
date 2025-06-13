import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Footer } from '../../components/footer/footer';
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink, Footer, ReactiveFormsModule, Header],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  registerForm: any;

  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: Auth,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: any) {
    return form.get('password').value === form.get('confirmPassword').value
      ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { confirmPassword, ...userData } = this.registerForm.value;
      this.authService.register(userData).subscribe({
        next: () => {
          this.successMessage = '¡Registro exitoso! Redirigiendo...';
          setTimeout(() => this.router.navigate(['/']), 2000);
        },
        error: (err) => this.errorMessage = err.message
      });
    }
  }

}
