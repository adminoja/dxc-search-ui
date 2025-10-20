import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // ✅ ใช้ได้ทุกเวอร์ชันใหม่

import { Dxc_Model_Rlpd_Complainant } from '../../../models/Dxc_Model_Rlpd_Complainant';

@Injectable({
  providedIn: 'root'
})
export class ComplainantService {

  constructor() {

  }

  findByID(id: string) {
    let complainantpersonNationalIdentificationId = id;
    console.log("ServicecomplainantpersonNationalIdentificationId", complainantpersonNationalIdentificationId);
    return this.findByID;
  }

  findByFN(fn: string) {
    let complainantpersonGivenName = fn;
    console.log("ServicecomplainantpersonGivenName", complainantpersonGivenName);
    return this.findByFN;
  }

  findByLN(ln: string) {
    let complainantpersonSurName = ln;
    console.log("ServicecomplainantpersonSurName", complainantpersonSurName);
    return this.findByLN;
  }

  //แสดงข้อมูล
  getItems() {
    return new Observable<Dxc_Model_Rlpd_Complainant[]>(obj => {
      obj.next([
        {
          allCaseTypeId: 'N/A',//allCaseTypeId, string, รหัสประเภทหน่วยงานที่ดำเนินการต่อ],
          caseChannel: 'N/A',//caseChannel, string, ช่องทางการรับเรื่อง],
          caseId: 9999,//caseId, number, รหัสคดี],
          caseName: 'N/A',//caseName, string, ชื่อเรื่อง],
          caseRunningId: 'N/A',//caseRunningId, string, ลำดับเลขที่ทะเบียน],
          caseTypeName: 'N/A',//caseTypeName, string, ประเภทหน่วยงานที่ดำเนินการต่อ],
          centerApproveRemark: 'N/A',//centerApproveRemark, string, หมายเหตุจากส่วนกลาง],
          centerApproveStatus: 99,//centerApproveStatus, number, สถานะการ Approve จากส่วนกลาง],
          centerSendDate: 'N/A',//centerSendDate, string, วันที่ส่งเข้าส่วนกลาง],
          channelId: 99,//channelId, number, รหัสช่องทางการรับเรื่อง],
          checkRemark: 'N/A',//checkRemark, string, checkRemark],
          checkStatus: 99,//checkStatus, number, การให้คำปรึกษา//เจ้าหน้าที่ตรวจสอบ]],
          dataId: 'N/A',//dataId, string, รหัสข้อมูล],
          dataSubmitDate: 'N/A',//dataSubmitDate, string, วันที่นำเข้าข้อมูล],
          dateCreate: 'N/A',//dateCreate, string, วันที่สร้างข้อมูล],
          dateUpdate: 'N/A',//dateUpdate, string, วันที่แก้ไขข้อมูล],
          departmentAbbriviation: 'N/A',//departmentAbbriviation, string, ชื่อย่อหน่วยงาน //ศูนย์]เจ้าของเรื่อง],
          departmentId: 99,//departmentId, number, หน่วยงานเจ้าของเรื่อง],
          departmentName: 'N/A',//departmentName, string, ชื่อหน่วยงาน //ศูนย์]เจ้าของเรื่อง],
          districtId: 99,//districtId, number, รหัสอำเภอ],
          editStatus: 99,//editStatus, number, ยืนการการแก้ไขข้อมูล เจ้าหน้าที่/ที่ปรึกษากฎหมาย],
          email: 'N/A',//email, string, อีเมล์],
          entryDate: 'N/A',//entryDate, string, วันที่รับเรื่อง],
          kpi1DateEnd: 'N/A',//kpi1DateEnd, string, เวลาเริ่มลงทะเบียนแล้วเสร็จ],
          kpi1DateStart: 'N/A',//kpi1DateStart, string, เวลาเริ่มลงทะเบียน],
          kpi2DateEnd: 'N/A',//kpi2DateEnd, string, เวลาที่ให้คำปรึกษาแล้วเสร็จ],
          kpi2DateStart: 'N/A',//kpi2DateStart, string, เวลาที่เข้ารับคำปรึกษา],
          kpiDay: 99,//kpiDay, number, kpiDay],
          kpiStatus: 99,//kpiStatus, number, kpiStatus],
          logCount: 99,//logCount, number, ลำดับที่ของ Log],
          oldCaseId: 99,//oldCaseId, number, รหัส CASE_ID ของระบบเก่า],
          parentCaseId: 'N/A',//parentCaseId, string, ทะเบียนที่ส่งมาดำเนินการต่อ],
          personAddressAmphur: 'N/A',//personAddressAmphur, string, อำเภอ],
          personAddressFullText: 'N/A',//personAddressFullText, string, ที่อยู่],
          personAddressPostalCode: 'N/A',//personAddressPostalCode, string, รหัสไปรษณีย์],
          personAddressProvince: 'N/A',//personAddressProvince, string, จังหวัด],
          personAddressProvinceCode: 'N/A',//personAddressProvinceCode, number, รหัสจังหวัด],
          personAddressTumbon: 'N/A',//personAddressTumbon, string, ตำบล],
          personAddressTumbonCode: 'N/A',//personAddressTumbonCode, string, รหัสตำบล],
          personAge: 99,//personAge, number, อายุ],
          personBirthDate: 'N/A',//personBirthDate, string, วันเกิด],
          personEducationLevelText: 'N/A',//personEducationLevelText, string, ระดับการศึกษา],
          personGivenName: 'นายสมสมสมสมสม',//personGivenName, string, ชื่อ],
          personNationalIdentificationId: '33333333333',//personNationalIdentificationId, string, เลขประจำตัวประชาชนผู้ร้อง],
          personNationalityText: 'N/A',//personNationalityText, string, สัญชาติ],
          personOccupationText: 'N/A',//personOccupationText, string, อาชีพ],
          personPrefixName: 'N/A',//personPrefixName, string, คำนำหน้า],
          personReligionText: 'N/A',//personReligionText, string, ศาสนา],
          personSex: 'ชาย',//personSex, string, เพศ],
          personSurName: 'N/A',//personSurName, string, นามสกุล],
          regionId: 99,//regionId, number, ภูมิภาคที่ลงทะเบียน],
          regionName: 'N/A',//regionName, string, ภูมิภาคที่ลงทะเบียน],
          registerAcceptDate: 'N/A',//registerAcceptDate, string, registerAcceptDate],
          registerAcceptStatus: 99,//registerAcceptStatus, number, registerAcceptStatus],
          registerCodeString: 'N/A',//registerCodeString, string, ],
          requestBy: 99,//requestBy, number, ประเภทของผู้ถูกละเมิด],
          requestByEtc: 'N/A',//requestByEtc, string, รายละเอียดผู้มีส่วนเกี่ยวข้อง],
          statusId: 99,//statusId, number, statusId],
          telephoneNumber: 'N/A',//telephoneNumber, string, เบอร์โทรศัพท์],
          userCenterApprove: 99,//userCenterApprove, number, รหัสเจ้าหน้าที่ตรวจสอบการให้คำปรึกษา],
          userId: 99,//userId, number, รหัสเจ้าหน้าที่ ที่รับลงทะเบียน],
          userStatus: 99,//userStatus, number, สถานะการอนุญาตให้ใช้งาน],
          year: 99,//year, number, ปีขึ้นทะเบียน],
        }
      ]),
        obj.complete();
    });
  }
}
