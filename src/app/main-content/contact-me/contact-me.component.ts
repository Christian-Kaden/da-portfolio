// import { CommonModule } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
// import { Component, inject } from '@angular/core';
// import {
//   FormBuilder,
//   FormGroup,
//   FormsModule,
//   NgForm,
//   ReactiveFormsModule,
//   Validators,
// } from '@angular/forms';

// @Component({
//   selector: 'app-contact-me',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule, FormsModule],
//   templateUrl: './contact-me.component.html',
//   styleUrl: './contact-me.component.scss',
// })
// export class ContactMeComponent {
//   http = inject(HttpClient);

//   aggrement = false;
//   contactForm!: FormGroup;
//   formSubmitted = false;
//   contactData = {
//     name: '',
//     email: '',
//     message: '',
//   };

//   constructor(private fb: FormBuilder) {}

//   ngOnInit(): void {
//     this.contactForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       message: ['', Validators.required],
//       privacy: [false, Validators.requiredTrue],
//     });
//   }

//   isFieldValid(field: string): boolean {
//     const control = this.contactForm.get(field);
//     return control
//       ? control.valid &&
//           (control.dirty || control.touched || this.formSubmitted)
//       : false;
//   }

//   acceptPrivacyPolicy() {
//     this.aggrement = !this.aggrement;
//   }

//   mailTest = true;

//   post = {
//     endPoint: 'https://deineDomain.de/sendMail.php',
//     body: (payload: any) => JSON.stringify(payload),
//     options: {
//       headers: {
//         'Content-Type': 'text/plain',
//         responseType: 'text',
//       },
//     },
//   };

//   onSubmit() {
//     if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
//       this.http
//         .post(this.post.endPoint, this.post.body(this.contactData))
//         .subscribe({
//           next: (response) => {
//             ngForm.resetForm();
//           },
//           error: (error) => {
//             console.error(error);
//           },
//           complete: () => console.info('send post complete'),
//         });
//     } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
//       ngForm.resetForm();
//     }
//   }

//   // onSubmit(): void {
//   //   this.formSubmitted = true;
//   //   if (this.contactForm.valid) {
//   //     console.log('Form submitted:', this.contactForm.value);
//   //   }
//   // }
// }

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
  http = inject(HttpClient);

  aggrement = false;
  formSubmitted = false;
  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  acceptPrivacyPolicy() {
    this.aggrement = !this.aggrement;
    this.contactData.privacy = this.aggrement;
  }

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    // this.formSubmitted = true;
    // if (ngForm.valid) {
    //   if (!this.mailTest) {
    //     this.http
    //       .post(this.post.endPoint, this.post.body(this.contactData))
    //       .subscribe({
    //         next: () => ngForm.resetForm(),
    //         error: (error) => console.error(error),
    //         complete: () => console.info('send post complete'),
    //       });
    //   } else {
    //     ngForm.resetForm();
    //   }
    // }
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log('Form submitted:', this.contactData);
      // ngForm.resetForm();
    }
  }
}
