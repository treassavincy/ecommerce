import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
addproductform=this.formbuilder.group({
  id: [''],
      productName: [''],
      categoryId: [''],
      description:[''],
      price: [''],
      is_available: [''],
      productImg: [''],
      rating: [''],
      review: [''],
      vendor_name: [''],
      warranty: ['']
})
  constructor(private formbuilder:FormBuilder,private productservice:ProductService,private router:Router) { }

  ngOnInit(): void {
    
  }
addproduct(){
  let newProduct={
    id: this.addproductform.value.id,
    productName: this.addproductform.value.productName,
    categoryId: this.addproductform.value.categoryId,
    description:this.addproductform.value.description,
    price: this.addproductform.value.price,
    is_available: this.addproductform.value.is_available,
    productImg: this.addproductform.value.productImg,
    rating: this.addproductform.value.rating,
    review:this.addproductform.value.review,
    vendor_name:this.addproductform.value.vendor_name,
    warranty:this.addproductform.value.warranty
  
  }
  this.productservice.addproduct(newProduct).subscribe((data:any)=>{
    alert('Product added successfully')
    this.router.navigateByUrl('products')
  })
}
}
