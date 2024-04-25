import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../datatype';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
constructor(private activatedRoute: ActivatedRoute ,private product: ProductService){}
productData: undefined | product
count: number = 1;
ngOnInit():void{
  const productID = this.activatedRoute.snapshot.paramMap.get('productId');
   //console.log('id', productID);
  productID && this.product.getProduct(productID).subscribe((result)=>{
     this.productData = result;
   })
}
incQuantity(){
this.count++
}
decQuantity(){
  if(this.count > 1){
    this.count--
  
  }
}
}
