import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTestdirective]'
})
export class TestdirectiveDirective {

  constructor(private el:ElementRef, private renderer:Renderer2) 
  {

  }

  @HostBinding('style.backgroundColor') bgColor:any="green";
  @HostBinding('class.myClass') className:any;
  @HostBinding('attr.title') myTitle:any;
  @HostBinding('attr.alt') myalt:any;
  @HostListener('click') myClick(){
       this.bgColor="silver";
       this.className=true;
       this.myTitle="this is test tile";
       this.myalt="this is test alt";
  }
  @HostListener('mouseover') myMouseOver(){
      //  this.renderer.setStyle(this.el.nativeElement,'backgroundColor','orange')
  }
  @HostListener('mouseout') myMouseOut(){
        // this.renderer.setStyle(this.el.nativeElement,'backgroundColor','silver')
  }
}
