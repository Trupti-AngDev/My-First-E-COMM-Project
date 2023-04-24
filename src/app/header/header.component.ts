import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   menutype:string='default';
  constructor(private route: Router){}

  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
    // console.log(val.url)
    if(val.url){
      if(localStorage.getItem('seller')&& val.url.includes('seller') ){
        console.log('in seller area')
        this.menutype='seller'
      }
      else{
        console.log('outside seller')
        this.menutype='default'
      }
    }
    })   
  }
}
