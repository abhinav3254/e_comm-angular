import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logInUser(formData: any): Observable<any> {
    const url = 'http://localhost:9091/user/login';
    return this.http.post(url, formData);
  }

}
