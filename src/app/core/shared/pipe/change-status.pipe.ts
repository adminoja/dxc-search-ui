import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeStatus'
})
export class ChangeStatusPipe implements PipeTransform {

  transform(exitCode): any {
    // console.log(exitCode);
    if (exitCode === 'UNAUTHORIZED') {
      return 'ผู้ใช้งานไม่มีสิทธิ์';
    } else if (exitCode === 'BAD_REQUEST') {
      return 'ผู้ใช้งาน ทำผิดพลาด';
    } else if (exitCode === 'BAD_GATEWAY') {
      return 'พบปัญหาที่ระบบเจ้าของข้อมูล';
    } else if (exitCode === 'INTERNAL_SERVER_ERROR') {
      return 'ระบบเรามีปัญหา';
    } else if (exitCode === 'NOT_FOUND') {
      return 'ไม่พบข้อมูล';
    }
  }

}
