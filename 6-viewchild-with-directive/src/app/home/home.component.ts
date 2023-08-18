import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Comp1Component } from '../comp1/comp1.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{

 @ViewChild('box', { static: true }) box!: ElementRef;

 userFullName:string="Hitesh Sharma";

  constructor(private renderer: Renderer2)
  {  
  }
  ngOnInit(){

  }

  ngAfterViewInit(){
    this.renderer.setStyle(this.box.nativeElement,'backgroundColor','red')
    this.renderer.setStyle(this.box.nativeElement,'color','white')
    this.renderer.addClass(this.box.nativeElement,'myClass')
    this.renderer.setAttribute(this.box.nativeElement,'title','this is test title')
  }

}
