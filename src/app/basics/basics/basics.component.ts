import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  standalone: false,
  //imports: [],
  templateUrl: './basics.component.html',
  styleUrl: './basics.component.css',
})
export class BasicsComponent {
  name: string = 'Igor';
  propertyBindingName: string = '';
  customTwoWayBinding: string = 'Test';
  twoWayBindingName: string = 'Mika'

  onClick(inputName: HTMLInputElement){
    this.name = inputName.value;
  }

  onClickPropertyBinding(inputName: any){
    this.propertyBindingName = inputName.value;
  }
}
