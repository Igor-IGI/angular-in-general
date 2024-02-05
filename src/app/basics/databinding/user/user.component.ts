import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {User} from "../models/user.model";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Output() createdUser: EventEmitter<User> = new EventEmitter<User>();
  @ViewChild('firstName', {static: true}) firstName: ElementRef;
  @ViewChild('lastName', {static: true}) lastName: ElementRef;
  email: string

  createUserClick(email: HTMLInputElement) {
    this.createdUser.emit(
      {
        firstName: this.firstName.nativeElement.value,
        lastName: this.lastName.nativeElement.value,
        email: email.value
      } as User
    );
  }

}
