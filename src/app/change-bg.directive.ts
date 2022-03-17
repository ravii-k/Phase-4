import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {
@Input() isCorrect : Boolean = false;

  constructor(private el : ElementRef, private render: Renderer2) { }
@HostListener('click') answer(){
  if(this.isCorrect){
  this.render.setStyle(this.el.nativeElement,'background','green');
  this.render.setStyle(this.el.nativeElement,'color','#fff');
  this.render.setStyle(this.el.nativeElement,'border','4px solid grey');
  }else{
    this.render.setStyle(this.el.nativeElement,'background','red');
    this.render.setStyle(this.el.nativeElement,'color','#fff');
    this.render.setStyle(this.el.nativeElement,'border','4px solid grey');
}
}
}