import { AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent implements AfterViewInit {

  colors: string[] = ['blue', 'green', 'aqua', 'aquamarine', 'coral', 'crimson', 'deeppink']
  defaultColor: string = this.colors[4];
  selectedColor: EventEmitter<string> = new EventEmitter<string>()

  ngAfterViewInit(): void {
    this.selectedColor.emit(this.defaultColor);
  }

  onChange(event: any) {
    this.selectedColor.emit(event.target.value);
  }
}
