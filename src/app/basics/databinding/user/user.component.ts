import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {User} from "../models/user.model";
import {HeaderComponent} from "../../../header/header.component";
import {UserListComponent} from "../user-list/user-list.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  @Output() createdUser: EventEmitter<User> = new EventEmitter<User>();
  // ViewChild is used to access HTML element from view template in component class
  @ViewChild('firstName', {static: true}) firstName: ElementRef;
  @ViewChild('lastName', {static: true}) lastName: ElementRef;


  ngOnInit(): void {
    this.firstName.nativeElement.value = 'Frank';
  }

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
