import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userName: string = '';
  password: string = '';
  constructor() { }
}
