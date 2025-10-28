import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user.model';
import { LoginService } from '../services/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Error } from '../model/error.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  showpassword:boolean=false;
  errormessage:string = '';
  
  user:User = {username: '',secrets: ''};

  constructor(private loginService : LoginService){}

  loginProcess(loginForm:NgForm){
    this.user.username = loginForm.controls['username'].value;
    this.user.secrets = loginForm.controls['password'].value;
    this.loginService.loginRequest(this.user).subscribe({
      next: (response) => {
        console.log("Got a success ",response);
      },
      error: (error:Error) => {

        console.log("Got an error ",error);
        this.errormessage = error.message;

      }
    });

    
  }

 

}
