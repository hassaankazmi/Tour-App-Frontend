import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const authRoutes: Routes = [
  {
    path: '',
    component:LoginComponent
  },
  {
    path: 'signUp',
    component:SignUpComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
  ],

})
export class AuthModule { }
