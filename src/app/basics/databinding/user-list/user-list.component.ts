import { Component } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {

  userList: User[] = [
    new User('johndoe@example.com', 'John', 'Doe'),
    new User('sarahsmith@email.com', 'Sarah', 'Smith'),
    new User('alexjones@domain.com', 'Alex', 'Jones'),
  ];

  addUser(user: User){
    this.userList.push(user);
  }
}
