import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HanshinComponent } from './hanshin.component';
import { HanshinRoutingModule } from './hanshin.routing';

@NgModule({
  imports: [
    CommonModule,
    HanshinRoutingModule
  ],
  declarations: [HanshinComponent]
})
export class HanshinModule { }
