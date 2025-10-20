import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'revert'
})
export class DepartmentNamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // console.log(value);
    if (value === '3') {
      return 'กรมคุมประพฤติ';
    } else if (value === '6') {
      return 'สำนักงานปลัดกระทรวงยุติธรรม';
    } else if (value === '10') {
      return 'กรมพินิจและคุ้มครองเด็กและเยาวชน';
    } else if (value === '12') {
      return 'กรมราชทัณฑ์';
    } else if (value === '4') {
      return 'กรมคุ้มครองสิทธิและเสรีภาพ';
    } else if (value === '7') {
      return 'สำนักงานป้องกันและปราบปรามการฟอกเงิน(ปปง.)';
    } else if (value === '8') {
      return 'กรมสอบสวนคดีพิเศษ';
    } else if (value === '13') {
      return 'กรมบังคับคดี';
    } else if (value === '15') {
      return 'สำนักงานคณะกรรมการป้องกันและปราบปรามยาเสพติด(ป.ป.ส.)';
    } else if (value === '16') {
      return 'สำนักงานตำรวจแห่งชาติ';
    } else if (value === '51') {
      return 'สำนักงานคณะกรรมการป้องกันและปราบปรามการทุจริตในภาครัฐ(ป.ป.ท.)';
    } else if (value === '52') {
      return 'สถาบันนิติวิทยาศาสตร์';
    } else if (value === '270') {
      return 'หน่วยข่าวกรองทางทหาร';
    } else if (value === '271') {
      return 'สำนักข่าวกรองแห่งชาติ';
    } else if (value === '276') {
      return 'สำนักงานคณะกรรมการการเลือกตั้ง';
    } else if (value === '280') {
      return 'กรมประมง';
    } else if (value === '27') {
      return 'สำนักงานผู้ตรวจการแผ่นดิน';
    } else if (value === '9') {
      return 'สำนักงานอัยการสูงสุด';
    } else if (value === '5') {
      return 'สำนักงานกิจการยุติธรรม';
    } else if (value === '19') {
      return 'กรมการปกครอง';
    } else if (value === '21') {
      return 'กรมการขนส่งทางบก';
    } else if (value === '31') {
      return 'กอ.รมน.ภาค 4 ส่วนหน้า';
    } else if (value === '57') {
      return 'ศอ.บต.';
    } else if (value === '58') {
      return 'สำนักงานประกันสังคม';
    } else if (value === '250') {
      return 'ศูนย์ปฏิบัติการนายกรัฐมนตรี(PMOC)';
    } else if (value === '273') {
      return 'กระทรวงการคลัง';
    } else if (value === '277') {
      return 'กรมพัฒนาธุรกิจการค้า';
    } else if (value === '279') {
      return 'ส่วนนโยบายและยุทธศาสตร์ยุติธรรมชุมชนและยุติธรรมจังหวัด(สชจ.)';
    } else if (value === '417') {
      return 'ธนาคารแห่งประเทศไทย';
    }
  }
}
