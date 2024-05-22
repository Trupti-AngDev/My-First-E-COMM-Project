import { Component } from '@angular/core';
import { login, signUp } from '../datatype';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {

  authError:string='';
  showLogin= false;
  constructor(private user: UserService, private router: Router) {}
 
  showSignUp=true;

  ngOnInit(){
    this.user.userAuthReload();
  }

  signUp(data: signUp):void {
   //console.log('signup details',data)
   this.user.userSignup(data)
  }
  
  openLogin(){
    this.showLogin= true
    }
    
    openSignUp(){
      this.showLogin= false
    }
    
    login(data:login):void{
     //console.log('login details', data)
     this.user.userLogin(data);
     this.user.isloginerror.subscribe((isError)=>{
      if(isError){
        //console.log('login error',isError)    -- true
        this.authError = 'Email or Password is Incorrect';
      }
     })
        }
      }
