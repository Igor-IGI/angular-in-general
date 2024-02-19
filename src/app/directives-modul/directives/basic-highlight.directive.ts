import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
  standalone: true
})
export class BasicHighlightDirective {

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.background = 'lightgreen';
  }
}
