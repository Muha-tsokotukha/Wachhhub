import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.apiUrl + 'users');
  }
}
