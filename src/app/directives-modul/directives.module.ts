import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { BasicHighlightDirective } from "./directives/basic-highlight.directive";
import { BetterHighlightDirectives } from "./directives/better-highlight.directives";
import { BetterHighlightHostListenerDirective } from "./directives/better-highlight-host-listener.directive";
import { HostListenerHostBindingDirective } from "./directives/better-highlight-host-listener-host-binding.directive";
import { FormsModule } from "@angular/forms";
import { UnlessDirective } from "./directives/unless.directive";


@NgModule({
  declarations: [
    DirectivesComponent,
    BetterHighlightDirectives,
    BetterHighlightHostListenerDirective,
    HostListenerHostBindingDirective,
    UnlessDirective
  ],
  exports: [
    DirectivesComponent,
  ],
  imports: [
    CommonModule,
    BasicHighlightDirective,
    FormsModule,
  ]
})
export class DirectivesModule {
}
