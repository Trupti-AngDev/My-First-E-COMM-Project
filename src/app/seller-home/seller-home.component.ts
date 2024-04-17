import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../datatype';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
  constructor(private product:ProductService){}
  productList: product[] = [];
  productDeletedMessage: string|undefined;
  
  ngOnInit(){
    this.product.productList().subscribe((result)=>{
      if(Array.isArray(result)){   // Array.isArray is JS method to check the result is array or not. if it array then it is stored in productlist
        this.productList =result;
      }
      else {
        // If the result is a single product, wrap it in an array
        this.productList = [result];
      }
    })
  }
  deleteProduct(id:number){
   //console.log('id', id)
  this.product.softDeleteProduct(id).subscribe((result)=>{
    //console.log('product deleted', result)
    if(result){
    this.productDeletedMessage = 'Product is Deleted';
    setTimeout(()=>(this.productDeletedMessage=undefined),1000)
    }
   // this.productList = this.productList.filter(item => item.id !== id);
    this.ngOnInit();
  })
  }


}
