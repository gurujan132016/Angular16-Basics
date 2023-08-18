import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BacknavigationComponent } from '../backnavigation/backnavigation.component';



@NgModule({
  declarations: [
    BacknavigationComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BacknavigationComponent
  ]
})
export class DesignUtilityModule { }
