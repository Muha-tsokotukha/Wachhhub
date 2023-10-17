import {Component} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

type User = {
  name: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  passwordVisible = false;
  password?: string;
  password2?: string;
  userName?: string;
  errorMessages?: string;

  constructor(private loginService: LoginService, private router: Router) {

  }

  addUser(name: any, password: any, password2: any) {
    if(password !== password2) {
      this.errorMessages = 'Passwords do not match';
      return;
    }
    this.loginService.postUser({name, password}).subscribe((data: any) => {
      this.errorMessages = 'Success';
      this.router.navigate(['/']);
    });
  }
}
