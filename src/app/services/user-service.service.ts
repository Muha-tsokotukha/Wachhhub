import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private router: Router) { }

  getUser(): any {
    const userJson = localStorage.getItem('user');

    if (userJson) {
      console.log('User found')
      return JSON.parse(userJson);
    } else {
      console.log('User not found')
      this.router.navigate(['/']);
      return null;
    }
  }
}
