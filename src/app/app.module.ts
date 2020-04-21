import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { ServicesComponent } from './services/services.component';
import { ToysComponent } from './category/toys/toys.component';
import { ItemsComponent } from './category/items/items.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { TextilesComponent } from './category/textiles/textiles.component';
import { BabyproductsComponent } from './category/babyproducts/babyproducts.component';
import { ViewproductComponent } from './category/viewproduct/viewproduct.component';
import { ProductcreateComponent } from './productcreate/productcreate.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    CategoryComponent,
    ServicesComponent,
    ToysComponent,
    ItemsComponent,
    SlideshowComponent,
    TextilesComponent,
    BabyproductsComponent,
    ViewproductComponent,
    ProductcreateComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
