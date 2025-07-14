import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
  };

  private readonly routes = inject(Router)  
  
  login() {
    this.routes.navigateByUrl('/layout/list');
  }

  onSubmit() {
    console.log('Form Submitted', this.user);
    // Add your login logic here
  }
}
