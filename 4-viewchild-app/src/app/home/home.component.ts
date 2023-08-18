import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Comp1Component } from '../comp1/comp1.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{

 @ViewChild('box', { static: true }) box!: ElementRef;
 @ViewChild(Comp1Component) child!:Comp1Component;

 userFullName:string="Hitesh Sharma";

  constructor()
  {  
  }
  ngOnInit(){

  }

  ngAfterViewInit(){
    console.log(this.box);
    //set the back ground color 
    this.box.nativeElement.style.backgroundColor="orange";
    //apply custom css class
    this.box.nativeElement.classList="boxOrange";
    //update the html content 
    this.box.nativeElement.innerHTML="This is modified html";
  }

  changeChildProperty(){
    this.child.userName="Code Circulation";
  }

  callChildMethod(){
    this.child.clickMe();
  }
}
