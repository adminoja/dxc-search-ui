import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectvalue'
})
export class ObjectvaluePipe implements PipeTransform {
  keysSub: any;
  keysSubArr: any;
  transform(value: any, ...args: any[]): any {
    this.keysSubArr = [];
    this.getKeysSub(value);
    for (let index = 0; index < this.keysSub.length; index++) {
      const element = this.keysSub[index];
      this.keysSubArr.push(value[element]);
    }
    return this.keysSubArr;
  }
  public getKeysSub(data) {
    this.keysSub = Object.keys(data);
    return true;
  }

}
