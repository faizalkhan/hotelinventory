import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn :boolean = false;

  isAdmin :boolean = false;

  constructor( private router : Router) { }


  login(email: string, password:string)
  {
    if(email === 'raja'  && password === '12345')
    {
       this.isLoggedIn = true;
       this.isAdmin = true;
    }

    else if(email === 'user@gmail.com'  && password === 'admin')
    {
       this.isLoggedIn = true;
       this.isAdmin = false;
    }


    return this.isLoggedIn;

  }


}
