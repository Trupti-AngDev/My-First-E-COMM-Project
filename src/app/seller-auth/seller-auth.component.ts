import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { login, signUp } from '../datatype';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent {
  authError:string='';
  constructor(private seller: SellerService) {}
  ngOnInit():void{
 this.seller.reloadseller()
  }
  showSignUp=true;

  SignUp(data: signUp):void {
    //console.log(data);
    this.seller.userSignUP(data)
  }
  openLogin(){
  const login= document.getElementById('login');
  if(login!=null){
    login.style.display='block';
    this.showSignUp=false
  }
  }
  openSignUp(){
   this.showSignUp=true
   const login= document.getElementById('login');
   if(login!=null){
     login.style.display='none';
  }
}

login(data:login):void{
  //console.log(data);
  this.seller.userLogin(data);
  this.seller.isloginerror.subscribe((isError)=>{
    if(isError){
    this.authError='Email or password is incorrect.'
    }
  })
}
}
