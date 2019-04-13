import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFoucsedRow]'
})
export class FoucsedRowDirective {

  @Input('appFoucsedRow') foucsedRow : string;

  prevColor:string;
  
  constructor(private el:ElementRef ) {

    this.prevColor =  this.el.nativeElement.style.backgroundColor;
    this.el.nativeElement.style.backgroundColor =   this.foucsedRow  ;

  }

  @HostListener('mouseenter') 
  onMouseEneter(){
    this.putColor("#0f12215e");
  }


  @HostListener('mouseleave') 
  onMouseLeave(){
    this.putColor(this.prevColor);
  }

  putColor(color:string){
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.marginTop = "20px";
  }

}
