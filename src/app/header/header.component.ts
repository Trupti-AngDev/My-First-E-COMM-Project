import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   menutype:string='default';
   sellerName:string='';
  constructor(private route: Router){}

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
}
