import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../category.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent {

  constructor(private categoryService: CategoryService, private router: Router) { }

  addCategoryForm(formValue: NgForm) {
    this.categoryService.addCategory(formValue.value).subscribe(
      // (response: any) => {
      //   if (response.status === 200) {
      //     // HTTP status code is 200 (OK)
      //     // Handle success if needed
      //   } else {
      //     // Handle other status codes as needed
      //   }
      // },
      // (error) => {
      //   // Handle the error here
      //   if (error.status === 200) {
      //     // HTTP status code is 200 (OK) - This might be incorrect as error should not have status 200
      //     alert('Unexpected success: added');
      //   } else if (error.status === 404) {
      //     // HTTP status code is 404 (Not Found)
      //     alert('Not found: something went wrong');
      //   } else {
      //     // Handle other error cases or unknown status codes
      //     alert('Unknown error occurred');
      //   }
      // }
    );
  }


}
