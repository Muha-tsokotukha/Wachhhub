import { Component } from '@angular/core';
import { IUserRequest } from 'src/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'wachhhub';

  requests: IUserRequest[] = [{ duration: 1, name: 'asd', category: 'horror' }];

  addNewRequest(request: IUserRequest) {
    this.requests.push(request);
  }
}
