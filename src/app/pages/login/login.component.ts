import {Component} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

type User = {
  name: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  passwordVisible = false;
  password?: string;
  userName?: string;
  errorMessages?: string;

  constructor(private loginService: LoginService, private router: Router) {

  }

  fetchUsers(username: any, password: any) {
    this.loginService.getUsers().subscribe((data: any) => {
      const users = data;
      const user = users.find((user: any) => user.name === username);
      if (user) {
        if (user?.password === password) {
          this.errorMessages = undefined;
          console.log('Login successful');
          this.errorMessages = 'Success';
          localStorage.setItem('user', JSON.stringify(user))
          this.router.navigate(['/home']);
          ;
        } else {
          this.errorMessages = 'Password is incorrect';
        }
      }
    });
  }
}
