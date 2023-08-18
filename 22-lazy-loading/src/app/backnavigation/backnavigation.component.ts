import { Component } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-backnavigation',
  templateUrl: './backnavigation.component.html',
  styleUrls: ['./backnavigation.component.css']
})
export class BacknavigationComponent {
  constructor(private location: Location) {}

  back(): void {
    this.location.back()
  }

}
