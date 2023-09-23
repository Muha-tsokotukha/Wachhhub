import { Component, Input } from '@angular/core';
import { IUserRequest } from 'src/store';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css'],
})
export class WatchListComponent {
  @Input() requests: IUserRequest[] = [];
}
