import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirectives implements OnInit {
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
  }
}
