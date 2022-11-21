import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductsComponent,
    ViewAllProductComponent,
    ViewProductComponent,
    AddProductComponent,
    EditProductComponent,
    DeleteProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductsModule { }
