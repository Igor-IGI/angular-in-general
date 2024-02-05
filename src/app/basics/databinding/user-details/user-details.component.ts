import {Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';
import {User} from '../models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {

  @Input() user: User;

  @ContentChild('userContent', {static: true}) userContent: ElementRef;

  ngOnInit(): void {
    console.log(this.userContent)
    console.log('Text content from User List Component: ' + this.userContent.nativeElement.textContent)
  }
}
