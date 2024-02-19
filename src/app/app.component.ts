import { Component, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BasicsModule } from './basics/basics.module';
import { DatabindingModule } from './basics/databinding/databinding.module';
import { DirectivesModule } from "./directives-modul/directives.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, //
    RouterOutlet,
    HeaderComponent,
    BasicsModule,
    DatabindingModule,
    DirectivesModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // loadSubPage: string = 'The-basics';
  loadSubPage: string = 'Directives';

  onNavigate(subPage: string) {
    this.loadSubPage = subPage;
  }
}
