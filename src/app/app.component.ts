import { Component, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BasicsModule } from './basics/basics.module';
import { BasicsComponent } from './basics/basics/basics.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, BasicsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  loadSubPage: string = 'The-basics';

  onNavigate(subPage: string) {
    this.loadSubPage = subPage;
  }
}
