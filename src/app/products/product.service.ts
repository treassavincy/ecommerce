import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 search=new BehaviorSubject('')
  constructor(private httpClient:HttpClient) { }
  viewAllproduct(){
    const baseurl='http://localhost:3000/products'
    return this.httpClient.get(baseurl)
  }
  viewproduct(productid:any){
    const baseurl='http://localhost:3000/products/'+productid
    return this.httpClient.get(baseurl)

  }
  deleteproduct(productid:any){
    const baseurl='http://localhost:3000/products/'+productid
    return this.httpClient.delete(baseurl)
  }
  addproduct(productData:any){
    const baseurl='http://localhost:3000/products/'
    return this.httpClient.post(baseurl,productData)

  }
  editproduct(productid:any,productdata:any){
    const baseurl='http://localhost:3000/products/'
    return this.httpClient.put(baseurl,productdata)

  }
}
