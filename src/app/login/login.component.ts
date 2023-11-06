import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string ='';

  constructor(private router : Router, private loginService : LoginService ) {}

  login(){

    console.log(this.loginService.login(this.email, this.password))

    if(this.loginService.login(this.email, this.password)){

       this.router.navigate(['/rooms'])

    }

  }
}
