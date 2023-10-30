import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  logInForm(data: NgForm) {
    console.log(data.value);
    this.authService.logInUser(data.value).subscribe(
      (response: HttpResponse<any>) => {
        if (response.status === 200) {
          // HTTP status code is 200 (OK)
        } else {
          // Handle other status codes as needed
        }
      },
      (error) => {
        // Handle the error here
        if (error.status === 200) {
          const token = error.error.text
          localStorage.setItem('token', token);
          this.router.navigate(['/dashboard']);
        } else if (error.status == 404) {
          alert('user not found');
        }
      }
    );
  }


}
