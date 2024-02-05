import {Component, ContentChild, OnInit, ViewChild} from '@angular/core';
import { User } from '../models/user.model';
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit{

  userList: User[] = [
    new User('johndoe@example.com', 'John', 'Doe'),
    new User('sarahsmith@email.com', 'Sarah', 'Smith'),
    new User('alexjones@domain.com', 'Alex', 'Jones'),
  ];

  // ViewChild is used to access a specific Component within its parent component.
  @ViewChild(HeaderComponent, {static: true}) header: HeaderComponent;

  ngOnInit(): void {
   this.header.title = 'USER SERVICE'
  }

  addUser(user: User){
    this.userList.push(user);
  }
}
