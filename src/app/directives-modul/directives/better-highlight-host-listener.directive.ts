import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({selector: '[appBetterHighlightHostListener]'})
export class BetterHighlightHostListenerDirective {
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {
  }

  // Host Listener enables to use event on specific element.
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red')
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
  }
}
