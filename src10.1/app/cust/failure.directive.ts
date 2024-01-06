import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFailure]',
  standalone: true
})
export class FailureDirective {

  constructor(private obj:ElementRef) { }

  @HostListener('mouseenter') mouseenter()
  {
    this.obj.nativeElement.style.color = "red";
  }

  @HostListener('mouseleave') mouseleave()
  {
    this.obj.nativeElement.style.color = "black";
  }


}
