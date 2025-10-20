import * as moment from 'moment'
import { isEmpty } from 'rxjs/operators';

export interface IPerson {
  citizenCardNumber: string;
  fullName: string;
  sex: string;
  dateOfBirth: Date;
}
export interface IDxc_Model_Rlpd_Requestors {

  allCaseTypeId: string;  //  allCaseTypeId, string, รหัสประเภทหน่วยงานที่ดำเนินการต่อ],
  caseChannel: string;  //  caseChannel, string, ช่องทางการรับเรื่อง],
  caseId: number;  //  caseId, number, รหัสคดี],
  caseName: string;  //  caseName, string, ชื่อเรื่อง],
  caseRunningId: string;  //  caseRunningId, string, ลำดับเลขที่ทะเบียน],
  caseTypeName: string;  //  caseTypeName, string, ประเภทหน่วยงานที่ดำเนินการต่อ],
  centerApproveRemark: string;  //  centerApproveRemark, string, หมายเหตุจากส่วนกลาง],
  centerApproveStatus: number;  //  centerApproveStatus, number, สถานะการ Approve จากส่วนกลาง],
  centerSendDate: string;  //  centerSendDate, string, วันที่ส่งเข้าส่วนกลาง],
  channelId: number;  //  channelId, number, รหัสช่องทางการรับเรื่อง],
  checkRemark: string;  //  checkRemark, string, checkRemark],
  checkStatus: number;  //  checkStatus, number, การให้คำปรึกษา // เจ้าหน้าที่ตรวจสอบ]],
  dataId: string;  //  dataId, string, รหัสข้อมูล],
  dataSubmitDate: string;  //  dataSubmitDate, string, วันที่นำเข้าข้อมูล],
  dateCreate: string;  //  dateCreate, string, วันที่สร้างข้อมูล],
  dateUpdate: string;  //  dateUpdate, string, วันที่แก้ไขข้อมูล],
  departmentAbbriviation: string;  //  departmentAbbriviation, string, ชื่อย่อหน่วยงาน  // ศูนย์]เจ้าของเรื่อง],
  departmentId: number;  //  departmentId, number, หน่วยงานเจ้าของเรื่อง],
  departmentName: string;  //  departmentName, string, ชื่อหน่วยงาน  // ศูนย์]เจ้าของเรื่อง],
  districtId: number;  //  districtId, number, รหัสอำเภอ],
  editStatus: number;  //  editStatus, number, ยืนการการแก้ไขข้อมูล เจ้าหน้าที่/ที่ปรึกษากฎหมาย],
  email: string;  //  email, string, อีเมล์],
  entryDate: string;  //  entryDate, string, วันที่รับเรื่อง],
  kpi1DateEnd: string;  //  kpi1DateEnd, string, เวลาเริ่มลงทะเบียนแล้วเสร็จ],
  kpi1DateStart: string;  //  kpi1DateStart, string, เวลาเริ่มลงทะเบียน],
  kpi2DateEnd: string;  //  kpi2DateEnd, string, เวลาที่ให้คำปรึกษาแล้วเสร็จ],
  kpi2DateStart: string;  //  kpi2DateStart, string, เวลาที่เข้ารับคำปรึกษา],
  kpiDay: number;  //  kpiDay, number, kpiDay],
  kpiStatus: number;  //  kpiStatus, number, kpiStatus],
  logCount: number;  //  logCount, number, ลำดับที่ของ Log],
  oldCaseId: number;  //  oldCaseId, number, รหัส CASE_ID ของระบบเก่า],
  parentCaseId: string;  //  parentCaseId, string, ทะเบียนที่ส่งมาดำเนินการต่อ],
  personAddressAmphur: string;  //  personAddressAmphur, string, อำเภอ],
  personAddressFullText: string;  //  personAddressFullText, string, ที่อยู่],
  personAddressPostalCode: string;  //  personAddressPostalCode, string, รหัสไปรษณีย์],
  personAddressProvince: string;  //  personAddressProvince, string, จังหวัด],
  personAddressProvinceCode: string;  //  personAddressProvinceCode, number, รหัสจังหวัด],
  personAddressTumbon: string;  //  personAddressTumbon, string, ตำบล],
  personAddressTumbonCode: string;  //  personAddressTumbonCode, string, รหัสตำบล],
  personAge: number;  //  personAge, number, อายุ],
  personBirthDate: string;  //  personBirthDate, string, วันเกิด],
  personEducationLevelText: string;  //  personEducationLevelText, string, ระดับการศึกษา],
  personGivenName: string;  //  personGivenName, string, ชื่อ],
  personNationalIdentificationId: string;  //  personNationalIdentificationId, string, เลขประจำตัวประชาชนผู้ร้อง],
  personNationalityText: string;  //  personNationalityText, string, สัญชาติ],
  personOccupationText: string;  //  personOccupationText, string, อาชีพ],
  personPrefixName: string;  //  personPrefixName, string, คำนำหน้า],
  personReligionText: string;  //  personReligionText, string, ศาสนา],
  personSex: string;  //  personSex, string, เพศ],
  personSurName: string;  //  personSurName, string, นามสกุล],
  regionId: number;  //  regionId, number, ภูมิภาคที่ลงทะเบียน],
  regionName: string;  //  regionName, string, ภูมิภาคที่ลงทะเบียน],
  registerAcceptDate: string;  //  registerAcceptDate, string, registerAcceptDate],
  registerAcceptStatus: number;  //  registerAcceptStatus, number, registerAcceptStatus],
  registerCodeString: string;  //  registerCodeString, string, ],
  requestBy: number;  //  requestBy, number, ประเภทของผู้ถูกละเมิด],
  requestByEtc: string;  //  requestByEtc, string, รายละเอียดผู้มีส่วนเกี่ยวข้อง],
  statusId: number;  //  statusId, number, statusId],
  telephoneNumber: string;  //  telephoneNumber, string, เบอร์โทรศัพท์],
  userCenterApprove: number;  //  userCenterApprove, number, รหัสเจ้าหน้าที่ตรวจสอบการให้คำปรึกษา],
  userId: number;  //  userId, number, รหัสเจ้าหน้าที่ ที่รับลงทะเบียน],
  userStatus: number;  //  userStatus, number, สถานะการอนุญาตให้ใช้งาน],
  year: number;  //  year, number, ปีขึ้นทะเบียน],

  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  wartermarks: string;
  status: string;
  body: string[];
  workOther: string;
  person: IPerson;

}
export interface Dxc_Model_Rlpd_Requestors {

  allCaseTypeId: string;  //  allCaseTypeId, string, รหัสประเภทหน่วยงานที่ดำเนินการต่อ],
  caseChannel: string;  //  caseChannel, string, ช่องทางการรับเรื่อง],
  caseId: number;  //  caseId, number, รหัสคดี],
  caseName: string;  //  caseName, string, ชื่อเรื่อง],
  caseRunningId: string;  //  caseRunningId, string, ลำดับเลขที่ทะเบียน],
  caseTypeName: string;  //  caseTypeName, string, ประเภทหน่วยงานที่ดำเนินการต่อ],
  centerApproveRemark: string;  //  centerApproveRemark, string, หมายเหตุจากส่วนกลาง],
  centerApproveStatus: number;  //  centerApproveStatus, number, สถานะการ Approve จากส่วนกลาง],
  centerSendDate: string;  //  centerSendDate, string, วันที่ส่งเข้าส่วนกลาง],
  channelId: number;  //  channelId, number, รหัสช่องทางการรับเรื่อง],
  checkRemark: string;  //  checkRemark, string, checkRemark],
  checkStatus: number;  //  checkStatus, number, การให้คำปรึกษา // เจ้าหน้าที่ตรวจสอบ]],
  dataId: string;  //  dataId, string, รหัสข้อมูล],
  dataSubmitDate: string;  //  dataSubmitDate, string, วันที่นำเข้าข้อมูล],
  dateCreate: string;  //  dateCreate, string, วันที่สร้างข้อมูล],
  dateUpdate: string;  //  dateUpdate, string, วันที่แก้ไขข้อมูล],
  departmentAbbriviation: string;  //  departmentAbbriviation, string, ชื่อย่อหน่วยงาน  // ศูนย์]เจ้าของเรื่อง],
  departmentId: number;  //  departmentId, number, หน่วยงานเจ้าของเรื่อง],
  departmentName: string;  //  departmentName, string, ชื่อหน่วยงาน  // ศูนย์]เจ้าของเรื่อง],
  districtId: number;  //  districtId, number, รหัสอำเภอ],
  editStatus: number;  //  editStatus, number, ยืนการการแก้ไขข้อมูล เจ้าหน้าที่/ที่ปรึกษากฎหมาย],
  email: string;  //  email, string, อีเมล์],
  entryDate: string;  //  entryDate, string, วันที่รับเรื่อง],
  kpi1DateEnd: string;  //  kpi1DateEnd, string, เวลาเริ่มลงทะเบียนแล้วเสร็จ],
  kpi1DateStart: string;  //  kpi1DateStart, string, เวลาเริ่มลงทะเบียน],
  kpi2DateEnd: string;  //  kpi2DateEnd, string, เวลาที่ให้คำปรึกษาแล้วเสร็จ],
  kpi2DateStart: string;  //  kpi2DateStart, string, เวลาที่เข้ารับคำปรึกษา],
  kpiDay: number;  //  kpiDay, number, kpiDay],
  kpiStatus: number;  //  kpiStatus, number, kpiStatus],
  logCount: number;  //  logCount, number, ลำดับที่ของ Log],
  oldCaseId: number;  //  oldCaseId, number, รหัส CASE_ID ของระบบเก่า],
  parentCaseId: string;  //  parentCaseId, string, ทะเบียนที่ส่งมาดำเนินการต่อ],
  personAddressAmphur: string;  //  personAddressAmphur, string, อำเภอ],
  personAddressFullText: string;  //  personAddressFullText, string, ที่อยู่],
  personAddressPostalCode: string;  //  personAddressPostalCode, string, รหัสไปรษณีย์],
  personAddressProvince: string;  //  personAddressProvince, string, จังหวัด],
  personAddressProvinceCode: string;  //  personAddressProvinceCode, number, รหัสจังหวัด],
  personAddressTumbon: string;  //  personAddressTumbon, string, ตำบล],
  personAddressTumbonCode: string;  //  personAddressTumbonCode, string, รหัสตำบล],
  personAge: number;  //  personAge, number, อายุ],
  personBirthDate: string;  //  personBirthDate, string, วันเกิด],
  personEducationLevelText: string;  //  personEducationLevelText, string, ระดับการศึกษา],
  personGivenName: string;  //  personGivenName, string, ชื่อ],
  personNationalIdentificationId: string;  //  personNationalIdentificationId, string, เลขประจำตัวประชาชนผู้ร้อง],
  personNationalityText: string;  //  personNationalityText, string, สัญชาติ],
  personOccupationText: string;  //  personOccupationText, string, อาชีพ],
  personPrefixName: string;  //  personPrefixName, string, คำนำหน้า],
  personReligionText: string;  //  personReligionText, string, ศาสนา],
  personSex: string;  //  personSex, string, เพศ],
  personSurName: string;  //  personSurName, string, นามสกุล],
  regionId: number;  //  regionId, number, ภูมิภาคที่ลงทะเบียน],
  regionName: string;  //  regionName, string, ภูมิภาคที่ลงทะเบียน],
  registerAcceptDate: string;  //  registerAcceptDate, string, registerAcceptDate],
  registerAcceptStatus: number;  //  registerAcceptStatus, number, registerAcceptStatus],
  registerCodeString: string;  //  registerCodeString, string, ],
  requestBy: number;  //  requestBy, number, ประเภทของผู้ถูกละเมิด],
  requestByEtc: string;  //  requestByEtc, string, รายละเอียดผู้มีส่วนเกี่ยวข้อง],
  statusId: number;  //  statusId, number, statusId],
  telephoneNumber: string;  //  telephoneNumber, string, เบอร์โทรศัพท์],
  userCenterApprove: number;  //  userCenterApprove, number, รหัสเจ้าหน้าที่ตรวจสอบการให้คำปรึกษา],
  userId: number;  //  userId, number, รหัสเจ้าหน้าที่ ที่รับลงทะเบียน],
  userStatus: number;  //  userStatus, number, สถานะการอนุญาตให้ใช้งาน],
  year: number;  //  year, number, ปีขึ้นทะเบียน],
  address:string;
  phone:string;

  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  wartermarks: string;
  status: string;
  body: string[];
  workOther: string;
  person: IPerson;

}
export class Dxc_Model_Rlpd_Requestors {
  rlpdrequestors: any;
  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  private dataSet: IDxc_Model_Rlpd_Requestors;
  constructor(selectData: any) {
    //  console.log('TESTTTTTTTTTTTT' + selectData.personAddressPostalCode);
    moment.locale('th');
    this.rlpdrequestors = {
      'allCaseTypeId': this.changeNull(selectData.allCaseTypeId),  //  allCaseTypeId, string, รหัสประเภทหน่วยงานที่ดำเนินการต่อ],
      'caseChannel': this.changeNull(selectData.caseChannel),  //  caseChannel, string, ช่องทางการรับเรื่อง],
      'caseId': this.changeNull(selectData.caseId),  //  caseId, number, รหัสคดี],
      'caseName': this.changeNull(selectData.caseName),  //  caseName, string, ชื่อเรื่อง],
      'caseRunningId': this.changeNull(selectData.caseRunningId),  //  caseRunningId, string, ลำดับเลขที่ทะเบียน],
      'caseTypeName': this.changeNull(selectData.caseTypeName),  //  caseTypeName, string, ประเภทหน่วยงานที่ดำเนินการต่อ],
      'centerApproveRemark': this.changeNull(selectData.centerApproveRemark),  //  centerApproveRemark, string, หมายเหตุจากส่วนกลาง],
      'centerApproveStatus': this.changeNull(
        selectData.centerApproveStatus),  //  centerApproveStatus, number, สถานะการ Approve จากส่วนกลาง],
      'centerSendDate': this.changeNull(selectData.centerSendDate),  //  centerSendDate, string, วันที่ส่งเข้าส่วนกลาง],
      'channelId': this.changeNull(selectData.channelId),  //  channelId, number, รหัสช่องทางการรับเรื่อง],
      'checkRemark': this.changeNull(selectData.checkRemark),  //  checkRemark, string, checkRemark],
      'checkStatus': this.changeNull(selectData.checkStatus),  //  checkStatus, number, การให้คำปรึกษา // เจ้าหน้าที่ตรวจสอบ]],
      'dataId': this.changeNull(selectData.dataId),  //  dataId, string, รหัสข้อมูล],
      'dataSubmitDate': this.changeNull(selectData.dataSubmitDate),  //  dataSubmitDate, string, วันที่นำเข้าข้อมูล],
      'dateCreate': this.changeNull(selectData.dateCreate),  //  dateCreate, string, วันที่สร้างข้อมูล],
      'dateUpdate': this.changeNull(selectData.dateUpdate),  //  dateUpdate, string, วันที่แก้ไขข้อมูล],
      'departmentAbbriviation': this.changeNull(
        selectData.departmentAbbriviation),  //  departmentAbbriviation, string, ชื่อย่อหน่วยงาน  // ศูนย์]เจ้าของเรื่อง],
      'departmentId': this.changeNull(selectData.departmentId),  //  departmentId, number, หน่วยงานเจ้าของเรื่อง],
      'departmentName': this.changeNull(
        selectData.departmentName),  //  departmentName, string, ชื่อหน่วยงาน  // ศูนย์]เจ้าของเรื่อง],
      'districtId': this.changeNull(selectData.districtId),  //  districtId, number, รหัสอำเภอ],
      'editStatus': this.changeNull(
        selectData.editStatus),  //  editStatus, number, ยืนการการแก้ไขข้อมูล เจ้าหน้าที่/ที่ปรึกษากฎหมาย],
      'email': this.changeNull(selectData.email),  //  email, string, อีเมล์],
      'entryDate': this.changeNull(selectData.entryDate),  //  entryDate, string, วันที่รับเรื่อง],
      'kpi1DateEnd': this.changeNull(selectData.kpi1DateEnd), // kpi1DateEnd, string, เวลาเริ่มลงทะเบียนแล้วเสร็จ],
      'kpi1DateStart': this.changeNull(selectData.kpi1DateStart), // kpi1DateStart, string, เวลาเริ่มลงทะเบียน],
      'kpi2DateEnd': this.changeNull(selectData.kpi2DateEnd), // kpi2DateEnd, string, เวลาที่ให้คำปรึกษาแล้วเสร็จ],
      'kpi2DateStart': this.changeNull(selectData.kpi2DateStart), // kpi2DateStart, string, เวลาที่เข้ารับคำปรึกษา],
      'kpiDay': this.changeNull(selectData.kpiDay), // kpiDay, number, kpiDay],
      'kpiStatus': this.changeNull(selectData.kpiStatus), // kpiStatus, number, kpiStatus],
      'logCount': this.changeNull(selectData.logCount), // logCount, number, ลำดับที่ของ Log],
      'oldCaseId': this.changeNull(selectData.oldCaseId), // oldCaseId, number, รหัส CASE_ID ของระบบเก่า],
      'parentCaseId': this.changeNull(selectData.parentCaseId), // parentCaseId, string, ทะเบียนที่ส่งมาดำเนินการต่อ],
      'personAddressAmphur': this.changeNull(selectData.personAddressAmphur), // personAddressAmphur, string, อำเภอ],
      'personAddressFullText': this.changeNull(selectData.personAddressFullText), // personAddressFullText, string, ที่อยู่],
      'personAddressPostalCode': this.changeNull(
        selectData.personAddressPostalCode), // personAddressPostalCode, string, รหัสไปรษณีย์],
      'personAddressProvince': this.changeNull(selectData.personAddressProvince), // personAddressProvince, string, จังหวัด],
      'personAddressProvinceCode': this.changeNull(
        selectData.personAddressProvinceCode), // personAddressProvinceCode, number, รหัสจังหวัด],
      'personAddressTumbon': this.changeNull(selectData.personAddressTumbon), // personAddressTumbon, string, ตำบล],
      'personAddressTumbonCode': this.changeNull(selectData.personAddressTumbonCode), // personAddressTumbonCode, string, รหัสตำบล],
      'personAge': this.changeNull(selectData.personAge), // personAge, number, อายุ],
      'personBirthDate': this.changeNull(selectData.personBirthDate), // personBirthDate, string, วันเกิด],
      'personEducationLevelText': this.changeNull(
        selectData.personEducationLevelText), // personEducationLevelText, string, ระดับการศึกษา],
      'personGivenName': this.changeNull(selectData.personGivenName), // personGivenName, string, ชื่อ],
      'personNationalIdentificationId': this.changeNull(
        selectData.personNationalIdentificationId), // personNationalIdentificationId, string, เลขประจำตัวประชาชนผู้ร้อง],
      'personNationalityText': this.changeNull(selectData.personNationalityText), // personNationalityText, string, สัญชาติ],
      'personOccupationText': this.changeNull(selectData.personOccupationText), // personOccupationText, string, อาชีพ],
      'personPrefixName': this.changeNull(selectData.personPrefixName), // personPrefixName, string, คำนำหน้า],
      'personReligionText': this.changeNull(selectData.personReligionText), // personReligionText, string, ศาสนา],
      'personSex': this.changeNull(selectData.personSex), // personSex, string, เพศ],
      'personSurName': this.changeNull(selectData.personSurName), // personSurName, string, นามสกุล],
      'regionId': this.changeNull(selectData.regionId), // regionId, number, ภูมิภาคที่ลงทะเบียน],
      'regionName': this.changeNull(selectData.regionName), // regionName, string, ภูมิภาคที่ลงทะเบียน],
      'registerAcceptDate': this.changeNull(selectData.registerAcceptDate), // registerAcceptDate, string, registerAcceptDate],
      'registerAcceptStatus': this.changeNull(
        selectData.registerAcceptStatus), // registerAcceptStatus, number, registerAcceptStatus],
      'registerCodeString': this.changeNull(selectData.registerCodeString), // registerCodeString, string, ],
      'requestBy': this.changeNull(selectData.requestBy), // requestBy, number, ประเภทของผู้ถูกละเมิด],
      'requestByEtc': this.changeNull(selectData.requestByEtc), // requestByEtc, string, รายละเอียดผู้มีส่วนเกี่ยวข้อง],
      'statusId': this.changeNull(selectData.statusId), // statusId, number, statusId],
      'telephoneNumber': this.changeNull(selectData.telephoneNumber), // telephoneNumber, string, เบอร์โทรศัพท์],
      'userCenterApprove': this.changeNull(
        selectData.userCenterApprove), // userCenterApprove, number, รหัสเจ้าหน้าที่ตรวจสอบการให้คำปรึกษา],
      'userId': this.changeNull(selectData.userId), // userId, number, รหัสเจ้าหน้าที่ ที่รับลงทะเบียน],
      'userStatus': this.changeNull(selectData.userStatus), // userStatus, number, สถานะการอนุญาตให้ใช้งาน],
      'year': this.changeNull(selectData.year), // year, number, ปีขึ้นทะเบียน],
      'workOther': selectData.workOther,
      'person': {
        'citizenCardNumber': selectData.personNationalIdentificationId,
        'fullName': selectData.personGivenName + ' ' + selectData.personSurName,
        'sex': this.changeNull(selectData.personSex),
        'dateOfBirth': this.changeNull(selectData.personBirthDate),
      },
      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime,
      'reportBarcode': this.reportBarcode
    },

    this.dataSet = this.rlpdrequestors;

  }

  setData(selectData: any) {
    this.rlpdrequestors = {
      'allCaseTypeId': this.changeNull(selectData.allCaseTypeId),  //  allCaseTypeId, string, รหัสประเภทหน่วยงานที่ดำเนินการต่อ],
      'caseChannel': this.changeNull(selectData.caseChannel),  //  caseChannel, string, ช่องทางการรับเรื่อง],
      'caseId': this.changeNull(selectData.caseId),  //  caseId, number, รหัสคดี],
      'caseName': this.changeNull(selectData.caseName),  //  caseName, string, ชื่อเรื่อง],
      'caseRunningId': this.changeNull(selectData.caseRunningId),  //  caseRunningId, string, ลำดับเลขที่ทะเบียน],
      'caseTypeName': this.changeNull(selectData.caseTypeName),  //  caseTypeName, string, ประเภทหน่วยงานที่ดำเนินการต่อ],
      'centerApproveRemark': this.changeNull(selectData.centerApproveRemark),  //  centerApproveRemark, string, หมายเหตุจากส่วนกลาง],
      'centerApproveStatus': this.changeNull(
        selectData.centerApproveStatus),  //  centerApproveStatus, number, สถานะการ Approve จากส่วนกลาง],
      'centerSendDate': this.changeNull(selectData.centerSendDate),  //  centerSendDate, string, วันที่ส่งเข้าส่วนกลาง],
      'channelId': this.changeNull(selectData.channelId),  //  channelId, number, รหัสช่องทางการรับเรื่อง],
      'checkRemark': this.changeNull(selectData.checkRemark),  //  checkRemark, string, checkRemark],
      'checkStatus': this.changeNull(selectData.checkStatus),  //  checkStatus, number, การให้คำปรึกษา // เจ้าหน้าที่ตรวจสอบ]],
      'dataId': this.changeNull(selectData.dataId),  //  dataId, string, รหัสข้อมูล],
      'dataSubmitDate': this.changeNull(selectData.dataSubmitDate),  //  dataSubmitDate, string, วันที่นำเข้าข้อมูล],
      'dateCreate': this.changeNull(selectData.dateCreate),  //  dateCreate, string, วันที่สร้างข้อมูล],
      'dateUpdate': this.changeNull(selectData.dateUpdate),  //  dateUpdate, string, วันที่แก้ไขข้อมูล],
      'departmentAbbriviation': this.changeNull(
        selectData.departmentAbbriviation),  //  departmentAbbriviation, string, ชื่อย่อหน่วยงาน  // ศูนย์]เจ้าของเรื่อง],
      'departmentId': this.changeNull(selectData.departmentId),  //  departmentId, number, หน่วยงานเจ้าของเรื่อง],
      'departmentName': this.changeNull(
        selectData.departmentName),  //  departmentName, string, ชื่อหน่วยงาน  // ศูนย์]เจ้าของเรื่อง],
      'districtId': this.changeNull(selectData.districtId),  //  districtId, number, รหัสอำเภอ],
      'editStatus': this.changeNull(
        selectData.editStatus),  //  editStatus, number, ยืนการการแก้ไขข้อมูล เจ้าหน้าที่/ที่ปรึกษากฎหมาย],
      'email': this.changeNull(selectData.email),  //  email, string, อีเมล์],
      'entryDate': this.formatDate(selectData.entryDate),  //  entryDate, string, วันที่รับเรื่อง],
      'kpi1DateEnd': this.changeNull(selectData.kpi1DateEnd), // kpi1DateEnd, string, เวลาเริ่มลงทะเบียนแล้วเสร็จ],
      'kpi1DateStart': this.changeNull(selectData.kpi1DateStart), // kpi1DateStart, string, เวลาเริ่มลงทะเบียน],
      'kpi2DateEnd': this.changeNull(selectData.kpi2DateEnd), // kpi2DateEnd, string, เวลาที่ให้คำปรึกษาแล้วเสร็จ],
      'kpi2DateStart': this.changeNull(selectData.kpi2DateStart), // kpi2DateStart, string, เวลาที่เข้ารับคำปรึกษา],
      'kpiDay': this.changeNull(selectData.kpiDay), // kpiDay, number, kpiDay],
      'kpiStatus': this.changeNull(selectData.kpiStatus), // kpiStatus, number, kpiStatus],
      'logCount': this.changeNull(selectData.logCount), // logCount, number, ลำดับที่ของ Log],
      'oldCaseId': this.changeNull(selectData.oldCaseId), // oldCaseId, number, รหัส CASE_ID ของระบบเก่า],
      'parentCaseId': this.changeNull(selectData.parentCaseId), // parentCaseId, string, ทะเบียนที่ส่งมาดำเนินการต่อ],
      'personAddressAmphur': this.changeNull(selectData.personAddressAmphur), // personAddressAmphur, string, อำเภอ],
      'personAddressFullText': this.changeNull(selectData.personAddressFullText), // personAddressFullText, string, ที่อยู่],
      'personAddressPostalCode': this.changeNull(
        selectData.personAddressPostalCode), // personAddressPostalCode, string, รหัสไปรษณีย์],
      'personAddressProvince': this.changeNull(selectData.personAddressProvince), // personAddressProvince, string, จังหวัด],
      'personAddressProvinceCode': this.changeNull(
        selectData.personAddressProvinceCode), // personAddressProvinceCode, number, รหัสจังหวัด],
      'personAddressTumbon': this.changeNull(selectData.personAddressTumbon), // personAddressTumbon, string, ตำบล],
      'personAddressTumbonCode': this.changeNull(selectData.personAddressTumbonCode), // personAddressTumbonCode, string, รหัสตำบล],
      'personAge': this.changeNull(selectData.personAge), // personAge, number, อายุ],
      'personBirthDate': this.formatDate(selectData.personBirthDate), // personBirthDate, string, วันเกิด],
      'personEducationLevelText': this.changeNull(
        selectData.personEducationLevelText), // personEducationLevelText, string, ระดับการศึกษา],
      'personGivenName': this.changeNull(selectData.personGivenName), // personGivenName, string, ชื่อ],
      'personNationalIdentificationId': this.changeNull(
        selectData.personNationalIdentificationId), // personNationalIdentificationId, string, เลขประจำตัวประชาชนผู้ร้อง],
      'personNationalityText': this.changeNull(selectData.personNationalityText), // personNationalityText, string, สัญชาติ],
      'personOccupationText': this.changeNull(selectData.personOccupationText), // personOccupationText, string, อาชีพ],
      'personPrefixName': this.changeNull(selectData.personPrefixName), // personPrefixName, string, คำนำหน้า],
      'personReligionText': this.changeNull(selectData.personReligionText), // personReligionText, string, ศาสนา],
      'personSex': this.changeSex(selectData.personSex), // personSex, string, เพศ],
      'personSurName': this.changeNull(selectData.personSurName), // personSurName, string, นามสกุล],
      'regionId': this.changeNull(selectData.regionId), // regionId, number, ภูมิภาคที่ลงทะเบียน],
      'regionName': this.changeNull(selectData.regionName), // regionName, string, ภูมิภาคที่ลงทะเบียน],
      'registerAcceptDate': this.changeNull(selectData.registerAcceptDate), // registerAcceptDate, string, registerAcceptDate],
      'registerAcceptStatus': this.changeNull(
        selectData.registerAcceptStatus), // registerAcceptStatus, number, registerAcceptStatus],
      'registerCodeString': this.changeNull(selectData.registerCodeString), // registerCodeString, string, ],
      'requestBy': this.changeNull(selectData.requestBy), // requestBy, number, ประเภทของผู้ถูกละเมิด],
      'requestByEtc': this.changeNull(selectData.requestByEtc), // requestByEtc, string, รายละเอียดผู้มีส่วนเกี่ยวข้อง],
      'statusId': this.changeNull(selectData.statusId), // statusId, number, statusId],
      'telephoneNumber': this.changeNull(selectData.telephoneNumber), // telephoneNumber, string, เบอร์โทรศัพท์],
      'userCenterApprove': this.changeNull(
        selectData.userCenterApprove), // userCenterApprove, number, รหัสเจ้าหน้าที่ตรวจสอบการให้คำปรึกษา],
      'userId': this.changeNull(selectData.userId), // userId, number, รหัสเจ้าหน้าที่ ที่รับลงทะเบียน],
      'userStatus': this.changeNull(selectData.userStatus), // userStatus, number, สถานะการอนุญาตให้ใช้งาน],
      'year': this.changeNull(selectData.year), // year, number, ปีขึ้นทะเบียน],
      'workOther': selectData.workOther,
      'person': {
        'citizenCardNumber': selectData.personNationalIdentificationId,
        'fullName': selectData.personGivenName + ' ' + selectData.personSurName,
        'sex': this.changeNull(selectData.personSex),
        'dateOfBirth': this.formatDate(selectData.personBirthDate),
      },
      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime,
      'reportBarcode': this.reportBarcode
    };
  }

  getData(): any {
    return this.rlpdrequestors;
  }


  /**
   * Getter $dataSet
   * @return {IDxc_Model_Rlpd_Requestors}
   */
  public get $dataSet(): IDxc_Model_Rlpd_Requestors {
    return this.dataSet;
  }

  /**
   * Setter $dataSet
   * @param {IDxc_Model_Rlpd_Requestors} value
   */
  public set $dataSet(value: IDxc_Model_Rlpd_Requestors) {
    this.dataSet = value;
  }

  formatDate(birthDate: string): string {

    const date = new Date(birthDate);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear() + 543;
    if (birthDate === 'null') {
      return '-';
    } else {

      const thmonth = new Array('มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
        'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม');


      return `${day} ${thmonth[month]} ${year}`;
    }
  }
  changeSex(sex: string) {
    if (sex === 'MALE') {
      return 'ชาย';
    } else if (sex === 'FEMALE') {
      return 'หญิง';
    } else if (sex === 'OTHER') {
      return 'อื่นๆ';
    } else if (sex === 'null') {
      return '-';
    }
  }
  changeNull(selectData: string) {
    if (selectData == null) {
      return '-';
    } else if (selectData === 'Invalid date') {
      return '-';
    } else {
      return selectData;
    }
  }
  loadReportDetail() {
    if (localStorage.getItem('reportName') !== null) {
      const reportName = localStorage.getItem('reportName');
      this.reportName = localStorage.getItem('reportName');
      const reportOfDate = moment(new Date().toString()).format('L').toString();
      this.reportOfDate = moment(new Date().toString()).format('L').toString();
      const reportOfTime = moment(new Date().toString()).format('LTS').toString();
      this.reportOfTime = moment(new Date().toString()).format('LTS').toString();
      const reportBarcode = 'QP4015-12345678';
      const wartermarks = `<div class="watermark">
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      </div>
      <div class="watermark2">
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      </div>
      <div class="watermark3">
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      </div>
      <div class="watermark4">
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      </div>
      <div class="watermark5">
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      </div>
      <div class="watermark6">
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      </div>
      <div class="watermark7">
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      </div>
      <div class="watermark8">
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      </div>
      <div class="watermark9">
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      </div>
      <div class="watermark10">
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      </div>
      <div class="watermark11">
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      </div>`;
      return wartermarks;
    } else {
      const reportName = 'เกิดข้อผิดพลาด';
      const reportOfDate = moment(new Date().toString()).format('L').toString();
      const reportOfTime = moment(new Date().toString()).format('LTS').toString();
      const reportBarcode = 'QP4015-12345678';
      const wartermarks = `<div class="watermark">
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      </div>
      <div class="watermark2">
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      </div>
      <div class="watermark3">
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      </div>
      <div class="watermark4">
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      </div>
      <div class="watermark5">
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      </div>
      <div class="watermark6">
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      </div>
      <div class="watermark7">
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      </div>
      <div class="watermark8">
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      </div>
      <div class="watermark9">
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      </div>
      <div class="watermark10">
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      </div>
      <div class="watermark11">
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      </div>`;
      return wartermarks;
    }
  }
}
