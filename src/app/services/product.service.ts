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
  updateProduct(productId:string,productData:object){
    return this.http.put<product>(`http://localhost:3000/products/${productId}`,productData)
  }
  getProduct(id:string){
    return this.http.get<product>(`http://localhost:3000/products/${id}`)
  }
  popularProducts(){
    return this.http.get<product>('http://localhost:3000/products?_limit=3');
  }
  trendyProducts(){
    return this.http.get<product>('http://localhost:3000/products?_limit=8');
  }
}
