import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../datatype';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})


export class SellerUpdateProductComponent {

  
  constructor(private route: ActivatedRoute, private product: ProductService, private router: Router){}
  productData: undefined | product
  updateProductMessage: undefined | string

  updateProductForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    color: new FormControl(''),
    category: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl('')
  })
updateProduct(){
  let productId = this.route.snapshot.paramMap.get('id');
  const updatedProductData = this.updateProductForm.value;
 productId && this.product.updateProduct(productId,updatedProductData).subscribe((result)=>{
  //console.log('product updated', result);
  this.updateProductMessage = 'Product is Updated';
  setTimeout(()=>{
   this.updateProductMessage = undefined;
   this.router.navigate(['/seller-home'])
  },1000)
 })

}

ngOnInit(){
let productId = this.route.snapshot.paramMap.get('id');
productId && this.product.getProduct(productId).subscribe((data)=>{
  console.log(data);
  this.productData = data;
  this.updateProductForm.patchValue({
    name:data.name,
    price: data.price.toString(),
    color: data.color,
    category:data.category,
    description:data.description,
    image:data.image
  })
})

//console.log(productId)
}
}