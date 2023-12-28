import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicsComponent } from './basics/basics.component';
import { DatabindingComponent } from './databinding/databinding.component';

@NgModule({
  declarations: [
    BasicsComponent, //
    DatabindingComponent,
  ],
  imports: [CommonModule],
  exports: [
    BasicsComponent, //
    DatabindingComponent,
  ],
})
export class BasicsModule {}
