import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../datatype';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})

export class SellerAddProductComponent {
addProductForm = new FormGroup<any>({
name: new FormControl('',[Validators.required]),
price: new FormControl('',[Validators.required]),
color: new FormControl('',[Validators.required]),
category: new FormControl('',[Validators.required]),
description: new FormControl(''),
image: new FormControl('')

})

 
 constructor(private product:ProductService){}

 addProductMessage:string|undefined;


// submitProduct(data:product){
//   this.product.addProduct(data).subscribe((result)=>{
//    //console.log('products',result);
//    if(result){
//     this.addProductMessage= 'Product successfully added';
    
//    } 
//    setTimeout(()=>(this.addProductMessage=undefined),3000)
//   })
//   }

submitProduct(){
//console.log(this.addProductForm.value);
const products = this.addProductForm.value;
this.product.addProduct(products).subscribe((result)=>{
  console.log('product added', result)
  if(result){
        this.addProductMessage= 'Product successfully added';
        setTimeout(()=> (this.addProductMessage= undefined),3000)
       } 
})
this.addProductForm.reset();
}
get Name(){
  return this.addProductForm.get('name');
}
get Price(){
  return this.addProductForm.get('price');
}
get Color(){
  return this.addProductForm.get('color');
}
get Category(){
  return this.addProductForm.get('category')
}
}
