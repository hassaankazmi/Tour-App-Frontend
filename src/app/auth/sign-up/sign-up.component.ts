import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  private readonly routes = inject(Router)  
  private readonly authenticationService = inject(AuthServiceService);
  
  user = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    photo:''
  };

  selectedFile: File | null = null;
  toastr: ToastrService = inject(ToastrService);

  onFileSelected(event:Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }


  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.user.name);
    formData.append('email', this.user.email);
    formData.append('password', this.user.password);
    formData.append('confirmPassword', this.user.passwordConfirm);
    if (this.selectedFile) {
      formData.append('photo', this.selectedFile,this.selectedFile.name);
      this.user.photo = this.selectedFile.name;
    }

    console.log('formdata',this.user,this.selectedFile);
    

    const payload = {name:this.user.name,email:this.user.email,password:this.user.password,confirmPassword:this.user.passwordConfirm,photo:this.user.photo}
    this.authenticationService.signUpUser(payload).subscribe({
      next: (resp) => {
        this.toastr.success(resp.message);
        this.routes.navigate(['/']);
      },
      error: (error) => {
        this.toastr.error(error.message);
      }
    });
    // Send to backend or handle signup logic
  }
}
