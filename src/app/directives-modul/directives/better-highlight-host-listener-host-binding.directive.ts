import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { DirectivesComponent } from "../directives.component";

@Directive({selector: '[appHostListenerHostBinding]'})
export class HostListenerHostBindingDirective implements OnInit {

  @Input() defaultColor: string;
  highlightColor: string;
  // Input string in HostBinding declare which property of the hosting element will bi binding
  @HostBinding('style.backgroundColor') backgorundColor: string;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private component: DirectivesComponent
  ) {
  }

  ngOnInit(): void {
    this.component.selectedColor.subscribe(
      (color: string) => {
        this.highlightColor = color;
      }
    )
    this.backgorundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgorundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgorundColor = 'transparent'
  }
}
