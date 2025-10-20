import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converseSex'
})
export class ConverseSexPipe implements PipeTransform {

  transform(sex: any): any {

    if (sex == 'MALE') {
      return 'ชาย';
    }
    else if (sex == 'FEMALE') {
      return 'หญิง';
    }else if (sex == 'OTHER') {
      return 'อื่นๆ';
    } else if (sex == '1') {
      return 'ชาย';
    } else if (sex == '2') {
      return 'หญิง';
    } else if (sex == 'M     ' || sex == 'M') {
      return 'ชาย';
    } else if (sex == 'F' || sex == 'F     ') {
      return 'หญิง';
    } else if (sex == 'null' || sex == null) {
      return '-';
    } else {
      return sex;
    }

  }

}
