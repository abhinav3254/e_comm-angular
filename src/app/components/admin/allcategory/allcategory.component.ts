import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-allcategory',
  templateUrl: './allcategory.component.html',
  styleUrls: ['./allcategory.component.css']
})
export class AllcategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }
  ngOnInit(): void {
    this.getAllCategory();
    console.log("hello abhinb")
  }

  Categories: Category[] = [];

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe(
      (res) => {
        this.Categories = res as Category[];
        console.log(this.Categories);
      }
    );
  }


  deletCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe(
    );
  }


}

export interface Category {
  id: number,
  name: string
}
