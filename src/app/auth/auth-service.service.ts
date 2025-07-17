import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

  // login api integrated here

  loginUser(payload:{email:string,password:string}):Observable<{token:string,user:any}> {
    const url = `${environment.apiBaseUrl}userData/login`
    return this.http.post<{ token: string, user: any }>(url, payload);
  }

  storeToken(token:string) {
    localStorage.setItem('token', token);
  }

  storeUser(userData:any) {
    localStorage.setItem('user', userData);
  }


  logout() {
    localStorage.clear();
  }

  isLogedIn() {
    !!localStorage.getItem('token');
  }

  // signUp Api 

  signUpUser(payload:{name:string,email:string,password:string,confirmPassword:string,photo:string}):Observable<any> {
    
    const url = `${environment.apiBaseUrl}userData/signup`;

   return this.http.post<any>(url, payload);
  }

  getuser(){
    
    const url = `${environment.apiBaseUrl}userData/6878f1920a27b002fa19ae13`;

   return this.http.get<any>(url);
  }
}
