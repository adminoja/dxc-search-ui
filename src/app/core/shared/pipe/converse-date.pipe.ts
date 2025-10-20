import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converseDate'
})
export class ConverseDatePipe implements PipeTransform {

  transform(birthDate: any): string {
    const date = new Date(birthDate);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear() + 543;
    if (birthDate === 'null' || birthDate == null || birthDate == '') {
      return '-';
    } else if (year == 9999) {
      return 'ตลอดชีพ';
    } else {
      const thmonth = new Array('มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
        'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม');
      return `${day} ${thmonth[month]} ${year}`;
    }

  }

}
