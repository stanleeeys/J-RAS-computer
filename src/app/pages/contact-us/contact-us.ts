import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  imports: [CommonModule, RouterLink, Footer, ReactiveFormsModule, Header],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css'
})
export class ContactUs {
  contactForm: any;

  submitted = false;
  loading = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^[0-9]{8}$/)]],
      subject: ['Consulta', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.loading = true;
      // Simular envío a servidor
      setTimeout(() => {
        console.log('Formulario enviado:', this.contactForm.value);
        this.submitted = true;
        this.loading = false;
        this.contactForm.reset();
      }, 1500);
    }
  }
}
