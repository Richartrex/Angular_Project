import {Directive, Renderer2, ElementRef, OnInit, HostListener, Input, HostBinding} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective  implements OnInit {

  @HostBinding('style.backgroundColor') myBackgroundColor:string;
 
  constructor(){}

  ngOnInit() {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    this.myBackgroundColor = 'yellow' ;
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.myBackgroundColor = 'transparent';
  }

}