import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddcategoryComponent } from './components/admin/addcategory/addcategory.component';
import { AllcategoryComponent } from './components/admin/allcategory/allcategory.component';
import { CategoryComponent } from './components/admin/category/category.component';
import { AddproductComponent } from './components/admin/product/addproduct/addproduct.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'admin/category', component: CategoryComponent },
  { path: 'admin/category/add', component: AddcategoryComponent },
  { path: 'admin/category/all', component: AllcategoryComponent },
  { path: 'admin/product/add', component: AddproductComponent },
  { path: 'admin/product/all', component: AddproductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
