import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  value='This is test value';
 
  nameArr=[
    'Hitesh',
    'Mahesh Lohar',
    'Maulik Patel',
    'Vainkatesh Venugopal Ayer',
    'Raj Rajeshwar',
    'Sacchin Tendulkar',
    'Nitin Kamath'
  ]
}
