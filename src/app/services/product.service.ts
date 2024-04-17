import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../datatype';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiurl = 'http://localhost:3000/products'
  constructor(private http:HttpClient) { }

  addProduct(data:product){
    console.log("service called");
    return this.http.post('http://localhost:3000/products',data)
  }
  productList(){
    return this.http.get<product>('http://localhost:3000/products');
  }
  softDeleteProduct(productId: number): Observable<any> {
    return this.http.patch(`${this.apiurl}/${productId}`, { status: 'deleted' });
  }
}
