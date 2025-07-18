import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http: HttpClient) { }
  
  getTours():Observable<any> {
    
    const token = localStorage.getItem('token');

    return this.http.get<any>(`${environment.apiBaseUrl}toursData`, {
      headers: {
        Authorization:`Bearer ${token}`
      }
    });
  }
}
