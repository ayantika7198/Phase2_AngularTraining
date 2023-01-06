import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductAddComponent } from "../products/product-add.component";

const productRoutes: Routes = [
    { path: 'addProduct', component: ProductAddComponent }
  ];
  
  @NgModule({
    imports: [
  
      RouterModule.forChild(productRoutes),],
    exports:[RouterModule]})
  export class ProductRoutingModule{
  
  }