import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../datatype';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private activatedRoute:ActivatedRoute,private product: ProductService, private route: Router){}
  searchResult :  product[] | null = null;
  productUnavailable : boolean = false;

ngOnInit(){
let query = this.activatedRoute.snapshot.paramMap.get('query');
//console.log(query);
 query && this.product.searchProduct(query).subscribe((result)=>{
  if(result && result.length > 0){
    this.searchResult = result;
   // window.location.reload();
    const productUnavailable = document.getElementById('productUnavailable');
    if (productUnavailable !== null) {
      productUnavailable.style.visibility = 'hidden';
    }
  }
  else{
    this.searchResult == undefined;
   const productUnavailable = document.getElementById('productUnavailable');
   const item = document.getElementById('item');
   if(productUnavailable!=null){
    productUnavailable.style.visibility = 'visible';
   }
   if(item!= null){
    item.style.display = 'none';
   }
  } 
  this.ngOnInit();
 })
}
// searchMore(){
// this.route.navigate(['/'])
// }
}
