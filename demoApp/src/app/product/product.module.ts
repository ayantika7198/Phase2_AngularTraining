import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductAddComponent } from '../products/product-add.component';
import { StarIconComponent } from '../star/star-icon.component';
import { ProductRoutingModule } from './product.routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductEffects } from '../state/products/product.effects';
import { productReducer } from '../state/products/product.reducer';
import { ProductListComponent } from '../products/product-list.component';



@NgModule({
  declarations: [ProductListComponent,ProductAddComponent,StarIconComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    ProductRoutingModule,
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forFeature([ProductEffects])]
  
})
export class ProductModule { }
