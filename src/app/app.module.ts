import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatMenuModule } from '@angular/material/menu';
import { AddcategoryComponent } from './components/admin/addcategory/addcategory.component';
import { AllcategoryComponent } from './components/admin/allcategory/allcategory.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CategoryComponent } from './components/admin/category/category.component';
import { AddproductComponent } from './components/admin/product/addproduct/addproduct.component';
import { GetproductComponent } from './components/admin/product/getproduct/getproduct.component';
import { UpdateproductComponent } from './components/admin/product/updateproduct/updateproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    NavBarComponent,
    AddcategoryComponent,
    AllcategoryComponent,
    CategoryComponent,
    AddproductComponent,
    GetproductComponent,
    UpdateproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatGridListModule,
    MatMenuModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
