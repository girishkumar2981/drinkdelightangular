import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Login } from './user';
import { UserDetails } from './user.details';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:Login =new Login(0,'','');
  
  constructor(private userdetails:UserDetails,private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  } 
  checkUser()
  {
    if(this.user.userId && this.user.password)
    {
      this.validate(this.user.userId,this.user.password);
    }
    else
    {
      alert("Either of UserId / Password is NULL");
    }
  }
  validate(userId:number,password:string) {
      this.loginService.getLogin(userId,password).subscribe((res: any) => {
      this.user=res;
      this.userdetails.userDetails.userId=userId;
      this.userdetails.userDetails.userName=this.user.userName;
      
        this.router.navigate(['cover']);
    },
      (error) => {
        alert("invalid login credentials")
      }
    );
  }
}