import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeDate'
})
export class ChangeDatePipe implements PipeTransform {

  transform(birthDate: any): any {
    let date = `${birthDate}`;
        const day = date.substring(0, 2);
        const month = date.substring(3, 5);
        const year = date.substring(6, 10);
        let year2 = (parseInt(year) + 543);
        if (birthDate === 'null') {
        return '-';
        } else if (birthDate == null) {
        return '-';
        } else {
        const thmonth = new Array('มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
            'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม');
            const d = new Date(month);
        return `${day} ${thmonth[d.getMonth()]} ${year2}`;
        }
  }

}
