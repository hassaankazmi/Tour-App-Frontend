import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

  loginUser(payload:{email:string,password:string}):Observable<{token:string,user:any}> {
    const url = `${environment.apiBaseUrl}userData/login`
    return this.http.post<{token:string,user:any}>(url,payload);
  }

  storeToken(token:string) {
    localStorage.setItem('token', token);
  }

  storeUser(userData:any) {
    localStorage.setItem('user', userData);
  }


  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isLogedIn() {
    !!localStorage.getItem('token');
  }
}
