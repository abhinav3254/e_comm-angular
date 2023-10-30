import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategory(formData: any) {
    const url = 'http://localhost:9091/category/add';
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

  getAllCategory() {
    const url = 'http://localhost:9091/category/all';
    const token = localStorage.getItem('token');

    // Set the HTTP headers, including the authorization token
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get(url, httpOptions);
  }

  deleteCategory(id: number) {
    const url = 'http://localhost:9091/category/delete/' + id;
    const token = localStorage.getItem('token');

    // Set the HTTP headers, including the authorization token
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.post(url, {}, httpOptions);
  }

}
