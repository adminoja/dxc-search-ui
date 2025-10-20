import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countlength'
})
export class CountlengthPipe implements PipeTransform {
  keysSub: any;
  keysSubArr: any;
  transform(value: any, ...args: any[]): any {
    this.keysSubArr = [];
    this.getKeysSub(value[0]);
    for (let index = 0; index < this.keysSub.length; index++) {
      const element = this.keysSub[index];
      // console.log(element);
      this.keysSubArr.push(value[element]);
    }
    return this.keysSubArr.length;
  }
  public getKeysSub(data) {
    this.keysSub = Object.keys(data);
    return true;
  }


}
