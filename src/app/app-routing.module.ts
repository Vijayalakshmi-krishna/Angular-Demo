import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ToysComponent } from './category/toys/toys.component';
import { TextilesComponent } from './category/textiles/textiles.component';
import { BabyproductsComponent } from './category/babyproducts/babyproducts.component';
import { ViewproductComponent } from './category/viewproduct/viewproduct.component';
import { ProductcreateComponent } from './productcreate/productcreate.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';


const routes: Routes = [
{path:'',
component:HomeComponent},
{
  path:'about',
  component:AboutComponent
},
{
  path:'services',
  component:ServicesComponent
},
{
  path:'list',
  component:ProductListComponent
},
{
  path:'services/toys',
  component:ToysComponent
  
},
{
  path:'services/textile',
  component:TextilesComponent
},
{
  path:'services/babyproducts',
  component:BabyproductsComponent
},
{
  path:'services/toys/:id',
  component:ViewproductComponent
},
{
  path:'services/:id',
  component:ViewproductComponent
},
{
  path:'services/textile/:id',
  component:ViewproductComponent
},
{
  path:'services/:id',
  component:ViewproductComponent
},
{
  path:'services/babyproducts/:id',
  component:ViewproductComponent
},
{
  path:'create',
  component:ProductcreateComponent
},
{
  path:'edit',
  component:ProductEditComponent
},
{
  path:'delete',
  component:ProductDeleteComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
