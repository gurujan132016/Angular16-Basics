import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTestdirective]'
})
export class TestdirectiveDirective {

  constructor(private el:ElementRef, private renderer:Renderer2) 
  {

  }

  @HostListener('click') myClick(){
       this.renderer.setStyle(this.el.nativeElement,'backgroundColor','green')
  }
  @HostListener('mouseover') myMouseOver(){
       this.renderer.setStyle(this.el.nativeElement,'backgroundColor','orange')
  }
  @HostListener('mouseout') myMouseOut(){
        this.renderer.setStyle(this.el.nativeElement,'backgroundColor','silver')
  }
}
