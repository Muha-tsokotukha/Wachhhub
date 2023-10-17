import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private router: Router) { }

  getUser(): any {
    const userJson = localStorage.getItem('user');
    if(window.location.href.includes('register') || window.location.href.includes('login')){
      return null;
    }
    else if (userJson) {
      console.log(this.router.url)
      console.log('User found')
      return JSON.parse(userJson);
    } else {
      console.log('User not found')
      this.router.navigate(['/']);
      return null;
    }
  }
}
