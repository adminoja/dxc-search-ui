import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converseStatus'
})
export class ConverseStatusPipe implements PipeTransform {

  transform(status: any): any {

    if (status == '0') {
      return 'อยู่ระหว่างดำเนินการ';
    }
    else if (status == '1') {
      return 'เสร็จสิ้นการดำเนินการ';
    }else if (status == 'OTHER') {
      return 'อื่นๆ';
    }
    else {
      return status;
    }

  }

}
