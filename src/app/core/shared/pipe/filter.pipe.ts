import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arrData: any, dateOfBirth: string): any {
    let inputDate = new Date(dateOfBirth);
    let day = inputDate.getDate();
    let month = inputDate.getMonth() + 1;
    let year = inputDate.getFullYear() + 543;
  
    if (arrData == null || arrData == 'null' || arrData == 'NULL') {
      return "-";
    } else if (arrData.length == '0') {
      return "-";
    } else if (arrData == 'MALE' || arrData == '1' || arrData == 'M' || arrData == 'm') {
      return 'ชาย';
    } else if (arrData == 'FEMALE' || arrData == '2' || arrData == 'F' || arrData == 'f') {
      return 'หญิง';
    } else if (arrData == 'OTHER') {
      return 'อื่นๆ';
    } else if (arrData == '0' || arrData == 0 || arrData == "") {
      return "-";
    } else if (Number.isNaN(arrData)) {
      return "ไม่ระบุ";
    } else {
      return arrData;
    }
  }
  

}
