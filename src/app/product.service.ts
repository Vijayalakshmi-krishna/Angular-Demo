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

  return  this.http.post('https://nodejs-productcatalog.herokuapp.com/create',data)

  }

  listProduct():Observable <any>{
    return  this.http.get('https://nodejs-productcatalog.herokuapp.com/listproducts')

  }

  editProduct(data):Observable<any>{
   
    return this.http.put('https://nodejs-productcatalog.herokuapp.com/edit/'+ data.productId,data);
  }

  deleteProduct(data):Observable<any>
  {
   
    return this.http.delete('https://nodejs-productcatalog.herokuapp.com/deleteproduct/'+data)
  }

  viewCategory(data):Observable<any>
  {
    return this.http.get('https://nodejs-productcatalog.herokuapp.com/category/'+data)
  }

  editQuantity(data):Observable<any>
  {
    return this.http.put('https://nodejs-productcatalog.herokuapp.com/editquantity/'+data.productId,data)
  }

  viewItems()
  {
  return this.itemData;
  }

  setItems(data){
    this.itemData=data;
  }
  
}
