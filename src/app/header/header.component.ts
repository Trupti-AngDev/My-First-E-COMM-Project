import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../datatype';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   menutype:string='default';
   sellerName:string='';
   searchResult: undefined | product[]
  constructor(private route: Router, private product:ProductService){}

  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
    // console.log(val.url)
    if(val.url){
      if(localStorage.getItem('seller')&& val.url.includes('seller') ){
       // console.log('in seller area')
        this.menutype='seller'
        if(localStorage.getItem('seller')){
          let sellerStore= localStorage.getItem('seller');
          let sellerData= sellerStore && JSON.parse(sellerStore)[0];
          this.sellerName=sellerData.username;
        }
      }
      else{
        console.log('outside seller')
        this.menutype='default'
      }
    }
    })   
  }
  logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }
  searchProduct(event: Event) {
    const target = event.target as HTMLInputElement;
    const query = target.value;
    if (query) {
        this.product.searchProduct(query).subscribe((result) => {
         if(result.length>=5){
          result.length =5
         }
            this.searchResult = result;
           // console.log(result);
        });
    }
}
hideSearch(){
  this.searchResult = undefined;
}
searchDetails(val:string){
  this.route.navigate([`search/${val}`]);
//console.log(val);
}
redirectToDetail(id:number){
this.route.navigate(['details/'+id])
}
}
