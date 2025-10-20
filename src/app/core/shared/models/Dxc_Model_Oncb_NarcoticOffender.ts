import * as moment from 'moment';
import { Data } from '@angular/router';
export interface IPerson {
  citizenCardNumber: string;
  fullName: string;
  sex: string;
  dateOfBirth: Date;
}
export interface IDxc_Model_Oncb_NarcoticOffender {

  id: string; // "รหัสข้อมูล"
  caseId: string; // รหัสคดี
  oncbCaseId: string; // รหัสคดีปปส.
  pid: string; // รหัสผู้ต้องหา
  citizenCardNumber: string; // เลขประจำตัวประชาชน
  firstName: string; // ชื่อ
  lastName: string; // นามสกุล
  reportedYear: string; // ปีรายงาน
  investigationUnitName: string; // หน่วยงานที่สอบสวน
  crimeSceneProvince: string; // จังหวัดเกิดเหตุ
  narcoticName: string; // ชื่อยาเสพติด
  allegation: string; // ชื่อข้อหา
  arrestDate: string; // วันที่จับกุม
  policeCaseId: string; // เลขคดีตำรวจ
  undecidedCaseId: string; // เลขคดีดำ
  decidedCaseId: string; // เลขคดีแดง
  dataSubmitDate: string; // วันที่ปรับปรุงขอมูล
  investigateagencyname: string; // ชื่อหน่วยงานที่สอบสวน
  arrestagencyname: string; // ชื่อหน่วยงานที่จับกุม
  cdthainame: string; // ข้อหาการจับกุม
  cdthaishort: string; // ข้อหาการจับกุม
  dateofbirth: Data; // วันเดือนปีเกิด
  decidedcaseid: string; // เลขคดีดำ
  districtname: string; // อำเภอ
  subdistrictname: string; // ตำบล
  villagename: string; // หมู่บ้าน
  sex: string; // เพศ

  status: string; // ex.status == '200'
  body: string[];
  reportName: string; // ผู้ขอรายงาน
  reportOfDate: string; //  วันที่พิมรายงาน
  reportOfTime: string; // เวลาที่พิมรายงาน
  reportBarcode: string; // เลขที่เอกสาร(เลขบาร์โค๊ด)
  wartermarks: string;
  person: IPerson;
}

export class Dxc_Model_Oncb_NarcoticOffender {
  oncbnarcoticoffenders: any;
  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  private dataSet: IDxc_Model_Oncb_NarcoticOffender;
  constructor(selectData: any) {
    this.oncbnarcoticoffenders = {
      'id': this.changeNull(selectData.id),
      'caseId': this.changeNull(selectData.caseId),
      'oncbCaseId': this.changeNull(selectData.oncbCaseId),
      'pid': this.changeNull(selectData.pid),
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'firstName': this.changeNull(selectData.firstName),
      'lastName': this.changeNull(selectData.lastName),
      'reportedYear': this.changeNull(selectData.reportedYear),
      'investigationUnitName': this.changeNull(selectData.investigationUnitName),
      'crimeSceneProvince': this.changeNull(selectData.crimeSceneProvince),
      'narcoticName': this.changeNull(selectData.narcoticName),
      'allegation': this.changeNull(selectData.allegation),
      'arrestDate': this.changeNull(selectData.arrestDate),
      'policeCaseId': this.changeNull(selectData.policeCaseId),
      'undecidedCaseId': this.changeNull(selectData.undecidedCaseId),
      'decidedCaseId': this.changeNull(selectData.decidedCaseId),
      'dataSubmitDate': this.changeNull(selectData.dataSubmitDate),
      'investigateagencyname': this.changeNull(selectData.investigateagencyname),
      'arrestagencyname': this.changeNull(selectData.arrestagencyname),
      'cdthainame': this.changeNull(selectData.cdthainame),
      'cdthaishort': this.changeNull(selectData.cdthaishort),
      'dateofbirth': this.changeNull(selectData.dateofbirth),
      'decidedcaseid': this.changeNull(selectData.decidedcaseid),
      'districtname': this.changeNull(selectData.districtname),
      'subdistrictname': this.changeNull(selectData.subdistrictname),
      'villagename': this.changeNull(selectData.villagename),
      'sex': this.changeNull(selectData.sex),

      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime,
      'person': {
        'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
        'fullName': this.changeNull(selectData.firstName) + ' ' + this.changeNull(selectData.lastName),
        'sex': this.changeNull(selectData.sex),
        'dateOfBirth': this.changeNull(selectData.dateofbirth)
      },
    };
    this.dataSet = this.oncbnarcoticoffenders;

  }

  setData(selectData: any) {
    this.oncbnarcoticoffenders = {
      'id': this.changeNull(selectData.id),
      'caseId': this.changeNull(selectData.caseId),
      'oncbCaseId': this.changeNull(selectData.oncbCaseId),
      'pid': this.changeNull(selectData.pid),
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'firstName': this.changeNull(selectData.firstName),
      'lastName': this.changeNull(selectData.lastName),
      'reportedYear': this.changeNull(selectData.reportedYear),
      'investigationUnitName': this.changeNull(selectData.investigationUnitName),
      'crimeSceneProvince': this.changeNull(selectData.crimeSceneProvince),
      'narcoticName': this.changeNull(selectData.narcoticName),
      'allegation': this.changeNull(selectData.allegation),
      'arrestDate': this.formatDate(selectData.arrestDate),
      'policeCaseId': this.changeNull(selectData.policeCaseId),
      'undecidedCaseId': this.changeNull(selectData.undecidedCaseId),
      'decidedCaseId': this.changeNull(selectData.decidedCaseId),
      'dataSubmitDate': this.changeNull(selectData.dataSubmitDate),
      'investigateagencyname': this.changeNull(selectData.investigateagencyname),
      'arrestagencyname': this.changeNull(selectData.arrestagencyname),
      'cdthainame': this.changeNull(selectData.cdthainame),
      'cdthaishort': this.changeNull(selectData.cdthaishort),
      'dateofbirth': this.formatDate(selectData.dateofbirth),
      'decidedcaseid': this.changeNull(selectData.decidedcaseid),
      'districtname': this.changeNull(selectData.districtname),
      'subdistrictname': this.changeNull(selectData.subdistrictname),
      'villagename': this.changeNull(selectData.villagename),
      'sex': this.changeSex(selectData.sex),

      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime,
      'person': {
        'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
        'fullName': this.changeNull(selectData.firstName) + ' ' + this.changeNull(selectData.lastName),
        'sex': this.changeNull(this.changeSex(selectData.sex)),
        'dateOfBirth': this.changeNull(selectData.dateofbirth)
      },
    };
  }
  getData(): any {
    return this.oncbnarcoticoffenders;
  }
  formatDate(birthDate: string): string {

    const date = new Date(birthDate);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear() + 543;
    if (birthDate === 'null') {
      return '-';
    } else if (birthDate == null) {
      return '-';
    } else {
      const thmonth = new Array('มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
        'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม');
      return `${day} ${thmonth[month]} ${year}`;
    }
  }

  changeSex(sex: string) {
    if (sex == 'MALE') {
      return 'ชาย';
    } else if (sex == 'FEMALE') {
      return 'หญิง';
    } else if (sex == 'OTHER') {
      return 'อื่นๆ';
    } else if (sex == 'null') {
      return '-';
    }
  }
  changeNull(selectData: string) {
    if (selectData == null) {
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
    <div class='watermark2'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark3'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark4'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark5'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark6'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark7'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark8'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark9'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark10'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark11'>
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
    <div class='watermark2'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark3'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark4'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark5'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark6'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark7'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark8'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark9'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark10'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark11'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>`;
      return wartermarks;
    }
  }

  /**
* Getter $dataSet
* @return {IDxc_Model_Oncb_NarcoticOffender}
*/
  public get $dataSet(): IDxc_Model_Oncb_NarcoticOffender {
    return this.dataSet;
  }

  /**
   * Setter $dataSet
   * @param {IDxc_Model_Oncb_NarcoticOffender} value
   */
  public set $dataSet(value: IDxc_Model_Oncb_NarcoticOffender) {
    this.dataSet = value;
  }
}
