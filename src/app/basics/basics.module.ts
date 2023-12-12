import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicsComponent } from './basics/basics.component';



@NgModule({
  declarations: [BasicsComponent],
  imports: [
    CommonModule
  ],
  exports:[BasicsComponent]
})
export class BasicsModule { }
