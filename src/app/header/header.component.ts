import {Component, OnInit} from '@angular/core';
import {UserServiceService} from "../services/user-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user: any;

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  logout() {
    localStorage.clear();
    window.location.reload();
  }
}
