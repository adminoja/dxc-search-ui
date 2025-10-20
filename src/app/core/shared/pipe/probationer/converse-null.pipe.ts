import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converseNull'
})
export class ConverseNullPipe implements PipeTransform {

  transform(checkNull: any, ): any {
    // console.log(checkNull)
    if (checkNull == '0' || checkNull == 0) {
      console.log('เข้ามั้ย')
      return '-';
    } else if(checkNull == null) {
      return '-';
    } else if(checkNull == "" || checkNull == " ") {
      return '-';
    } else if(checkNull == 'NaN/undefined') {
      return '-';
    } else {
      return checkNull;
    }
  }

}
