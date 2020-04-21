import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
itemData;
  constructor(private http:HttpClient) { }

  postProduct(data):Observable<any>{

  return  this.http.post('http://localhost:3000/create',data)

  }

  listProduct():Observable <any>{
    return  this.http.get('http://localhost:3000/listproducts')

  }

  editProduct(data):Observable<any>{
   
    return this.http.put('http://localhost:3000/edit/'+ data.productId,data);
  }

  deleteProduct(data):Observable<any>
  {
   
    return this.http.delete('http://localhost:3000/deleteproduct/'+data)
  }

  viewCategory(data):Observable<any>
  {
    return this.http.get('http://localhost:3000/category/'+data)
  }

  editQuantity(data):Observable<any>
  {
    return this.http.put('http://localhost:3000/editquantity/'+data.productId,data)
  }

  viewItems()
  {
  return this.itemData;
  }

  setItems(data){
    this.itemData=data;
  }
  
}
