import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converseTime'
})
export class ConverseTimePipe implements PipeTransform {

  transform(time: any): any {
    console.log(typeof(time))

    const t = new Date(time);
    const times = t.toLocaleTimeString('th-thai')
    // const hour = t.getHours();
    // const minute = t.getMinutes();
    // const second = t.getSeconds();
 
    if (time === 'null') {
      return '-';
    } else if (time === null && time === 0) {
      return '-';
    } else if ( time === 0) {
      return '-';
    } else {
      return `${times}`;
      // return `${hour}:${minute}:${second}`;
    }
  }

}
