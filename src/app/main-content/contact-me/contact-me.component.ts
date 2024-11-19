import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
  aggrement = false;
  contactForm!: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      privacy: [false, Validators.requiredTrue],
    });
  }

  onSubmit(): void {
    this.formSubmitted = true;
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
    }
  }

  isFieldValid(field: string): boolean {
    const control = this.contactForm.get(field);
    return control
      ? control.valid &&
          (control.dirty || control.touched || this.formSubmitted)
      : false;
  }
  // ----------

  acceptPrivacyPolicy() {
    this.aggrement = !this.aggrement;
  }
}
