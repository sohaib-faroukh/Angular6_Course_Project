import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appApplyStyle]'
})
export class ApplyStyleDirective {

  @Input('appApplyStyle') foucsedRow : string;

  prevColor:string;
  
  constructor(private el:ElementRef ) {

    this.prevColor =  this.el.nativeElement.style.cssText;
    // this.el.nativeElement.style.cssText =   this.foucsedRow  ;

  }

  @HostListener('mouseenter') 
  onMouseEneter(){
    this.putStyle(this.foucsedRow);
  }


  @HostListener('mouseleave') 
  onMouseLeave(){
    this.putStyle(this.prevColor);
  }

  putStyle(style:string){
    this.el.nativeElement.style.cssText = style;

  }


}
