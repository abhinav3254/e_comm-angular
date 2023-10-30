import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(formData: any) {
    const url = 'http://localhost:9091/product/all';
    const token = localStorage.getItem('token');

    // Set the HTTP headers, including the authorization token
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.post(url, formData, httpOptions);
  }
}
