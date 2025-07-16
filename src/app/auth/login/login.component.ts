import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { ToastrService } from 'ngx-toastr';
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
  toastr: ToastrService = inject(ToastrService);

  private readonly routes = inject(Router)  
  private readonly authenticationService = inject(AuthServiceService);
  login() {
    const payload = { email: this.user.email, password: this.user.password };
    this.authenticationService.loginUser(payload).subscribe({
      next: (resp) => {
        this.authenticationService.storeToken(resp.token);
        this.authenticationService.storeUser(resp.user);
        this.toastr.success('Login successful!');
        this.routes.navigate(['/layout/list']);
      },
      error: (err) => {
        this.toastr.error(err.error?.message || 'Login failed');
      }
    })

    this.routes.navigateByUrl('/layout/list');
  }

  onSubmit() {
    console.log('Form Submitted', this.user);
    // Add your login logic here
  }
}
