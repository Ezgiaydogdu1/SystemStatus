import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../login/user';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
 user:User=new User();
constructor(private router:Router ,private userService:UserServiceService){}
  login() {
    if (this.user.userName ==='user' && this.user.password === 'username') {
      this.userService.userName = this.user.userName;
      this.userService.password = this.user.password;
      this.router.navigate(['/sensor-status']); 
    }
    else {
      
      alert('Invalid username or password');
    }
  }
  
  
  ngOnInit(): void {}


  }
 


