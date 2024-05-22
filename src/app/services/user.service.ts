import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { login, signUp } from '../datatype';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isloginerror= new EventEmitter<boolean>(false)
  constructor(private http : HttpClient, private router:Router) { }

  userSignup(user:signUp){
  return this.http.post('http://localhost:3000/users',user,{observe:'response'} ).subscribe((result)=>{
    console.log('user is registered', result);
    if(result){
      localStorage.setItem('user', JSON.stringify(result.body))
        }
      this.router.navigate(['/'])
  })
  }
  userAuthReload(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/'])
    }
  }
  userLogin(user:login){
 return this.http.get<login[]>(`http://localhost:3000/users?email=${user.email}&password=${user.password}`,
  {observe:'response'}).subscribe((result)=>{
    if(result && result.body && result.body.length === 1){
      console.log('user login successful' , result);
      localStorage.setItem('user', JSON.stringify(result.body[0]));
      this.router.navigate(['/'])
    }else{
      console.log('login failed');
      this.isloginerror.emit(true);
    }
  })
  }

}
