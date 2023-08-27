import { Component } from '@angular/core';
import {  Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../login/user';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user: User = new UserServiceService(); // User nesnesini oluşturun

  constructor(private router: Router,public userService:UserServiceService){
  }
 ;

  onLogout() {
    alert('Çıkış yapıldı.');
    this.router.navigate(['/login']);

  }

  
  

}

