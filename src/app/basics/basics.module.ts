import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicsComponent } from './basics/basics.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [BasicsComponent],
  imports: [CommonModule, FormsModule],
  exports: [BasicsComponent],
})
export class BasicsModule {}
