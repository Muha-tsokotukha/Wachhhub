import { Component, EventEmitter, Output } from '@angular/core';
import { IUserRequest } from 'src/store';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css'],
})
export class RequestFormComponent {
  @Output() newRequest = new EventEmitter<IUserRequest>();

  name: string = '';
  category: string = '';
  duration: number = 0;

  onAddRequest() {
    this.newRequest.emit({
      name: this.name,
      category: this.category,
      duration: this.duration,
    });
    this.category = '';
    this.duration = 0;
    this.name = '';
  }
}
