import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  user = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  };

  onSubmit() {
    console.log('Signup data:', this.user);
    // Send to backend or handle signup logic
  }
}
