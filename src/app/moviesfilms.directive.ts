import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMoviesfilms]'
})
export class MoviesfilmsDirective {

  @Input() set appMoviesfilms(condition:boolean) {
    if(condition) {
      this.vwRef.createEmbeddedView(this.tplRef);
    }else{
      this.vwRef.clear();
    }
  }

  constructor(private tplRef: TemplateRef<any>, private vwRef:ViewContainerRef) { }

}