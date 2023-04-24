import { EventEmitter, Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { login, signUp } from '../datatype';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
   isSellerLoggedIn= new BehaviorSubject<boolean>(false)
   isloginerror= new EventEmitter<boolean>(false)
  constructor(private http:HttpClient, private router:Router) { }
  userSignUP(data:signUp){
    //console.log('service called');
    return this.http.post('http://localhost:3000/seller',data,
    {observe:'response'}).subscribe((result)=>{
     if(result){
     localStorage.setItem('seller',JSON.stringify(result.body))
     this.router.navigate(['seller-home'])
      //console.log('result',result);
     }
    });
  }
  reloadseller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home'])
    }
  }
  userLogin(data:login){
  //console.log(data);
  return this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
  {observe:'response'}
  ).subscribe((result:any)=>{
    //console.log(result);
    if(result && result.body && result.body.length===1){
      console.log('user logged in')
      localStorage.setItem('seller',JSON.stringify(result.body))
      this.router.navigate(['seller-home'])
    }
    else{
      console.log('login failed');
      this.isloginerror.emit(true);

    }
  })

  }
}
