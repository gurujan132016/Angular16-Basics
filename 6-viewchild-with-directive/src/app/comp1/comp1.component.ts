import { AfterContentInit, Component, ContentChild, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TestdirectiveDirective } from '../appDirectives/testdirective.directive';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements  OnInit, AfterContentInit{

  userName="Default User Name"
  @ContentChild('childCon', { static: true }) childParagraph!:ElementRef

  @ViewChild(TestdirectiveDirective) myDir!:TestdirectiveDirective

  constructor(private renderer: Renderer2){

  }

  ngOnInit(){
  }

  ngAfterContentInit() {
    console.log(this.childParagraph);
    this.renderer.setStyle(this.childParagraph.nativeElement,'color','red');
  }

  clickMe(){
    alert(this.userName);
    var text=this.renderer.createText('this text is created by renderer');
    this.renderer.appendChild(this.childParagraph.nativeElement,text);
  }

  changeColor(color:string){
    this.myDir.changeBg(color);
  }
}
