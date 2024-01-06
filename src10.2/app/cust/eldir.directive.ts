import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEldir]',
  standalone: true
})
export class EldirDirective {

  constructor(private obj : ElementRef) 
  { 
      
  }

  @HostListener('mouseenter') onmouseenter()
  {
    this.obj.nativeElement.style.color = "green";
  }

  @HostListener('mouseleave') onmouseleave()
  {
    this.obj.nativeElement.style.color = "black";
  }
}
