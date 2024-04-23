import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../datatype';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
popularProducts: undefined | product[]
trendyProducts: undefined |product[]
  constructor(private product:ProductService){}
  ngOnInit(){
    this.product.popularProducts().subscribe((result)=>{
      if(Array.isArray(result)){   // Array.isArray is JS method to check the result is array or not. if it array then it is stored in productlist
        this.popularProducts =result;
      }
     // console.log(this.popularProducts)
    })
    this.product.trendyProducts().subscribe((result)=>{
    if(Array.isArray(result)){
      this.trendyProducts=result;
    }
    })
  }
}
