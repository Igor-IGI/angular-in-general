import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {UserComponent} from "./user/user.component";



@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserComponent
  ],
  exports:[
    UserListComponent,
    UserDetailsComponent
  ]
})
export class DatabindingModule { }
