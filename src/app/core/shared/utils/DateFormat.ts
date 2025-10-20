/**
 * แปลงวันที่ string เป็น format Date
 * create 20/1/2563
 * author: Orpor
 */
export class DateFormat {
  datex: string;
  displayDate: string;
  constructor(datex: string) {
    this.datex = datex;
  }
  getStringFormatYYYYMMDD() {
    const year = this.datex.substring(0, 4);
    const month = this.datex.substring(4, 6);
    const day = this.datex.substring(6, 8);

    this.displayDate = year + '-' + month + '-' + day;

    return this.displayDate;
  }
  getStringFormatDDMMYYYY() {
    const year = this.datex.substring(0, 4);
    const month = this.datex.substring(4, 6);
    const day = this.datex.substring(6, 8);

    this.displayDate = day + '-' + month + '-' + year;

    return this.displayDate;
  }
}
