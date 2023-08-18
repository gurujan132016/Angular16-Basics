import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nameSearch:string='';
 
  productArr=[
    {
      sno:1,
      name:'Redmi 32 inch LED',
      price:'32000 RS',
      availibility:'Available'
    },
    {
      sno:2,
      name:'HP Laptop 16 GB RAM',
      price:'62000 RS',
      availibility:'Not Available'
    },
    {
      sno:3,
      name:'Samsung Laptop 8 GB RAM',
      price:'52000 RS',
      availibility:'Available'
    },
    {
      sno:4,
      name:'Realme X7 Moble 6 GB RAM',
      price:'22000 RS',
      availibility:'Available'
    },
    {
      sno:5,
      name:'Sony 5 Speakers Home theater',
      price:'18000 RS',
      availibility:'Not Available'
    },
  ]
}
