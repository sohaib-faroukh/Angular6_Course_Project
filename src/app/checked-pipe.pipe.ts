import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkedPipe',
   pure: false,
})
export class CheckedPipePipe implements PipeTransform {

  transform(array_: any[],key:string,value:string): any {
    if(value=="true"){
      return array_.filter(ele => ele[key] == true);

    }
   else if(value=="false"){
    return array_.filter(ele => ele[key] == false);
   }
   else{
    return array_.filter(ele => ele[key] == value);
   }
  }

}
