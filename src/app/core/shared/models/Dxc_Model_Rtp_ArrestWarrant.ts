import * as moment from 'moment';
export interface IPerson {
  citizenCardNumber: string;
  fullName: string;
  sex: string;
  dateOfBirth: Date;
}
export interface IDxc_Model_Rtp_ArrestWarrant {

  // id: number;	// รหัสข้อมูล
  // crimeCase: string;		// กระทำความผิดฐาน
  // address: string;	// ที่อยู่
  // warrantNo: string;	// หมายจับที่
  // wantD: Date;	// วันที่ออกหมายจับ
  // wantDText: Date;	// วันที่ออกหมายจับ
  // lastName: string;	// ชื่อสกุล
  // idNo: string;	// เลขประจำตัวประชาชน
  // firstName: string;	// ชื่อตัว
  // birthDate: Date;	// วันเดือนปีเกิด
  // birthDateText: Date;	// วันเดือนปีเกิด
  // nation: string;	// สัญชาติ
  // complainDate: Date;	// วันเดือนปีที่ต้องคดี
  // complainDateText: Date;	// วันเดือนปีที่ต้องคดี
  // crimeNumber: string; // คดีที่
  // title: string;	// คำนำหน้านาม
  // org: string;	// สถานที่ออกหมายจับ

  id: number; //id, number, รหัสข้อมูล, { pk: true }],
  citizenCardNumber: string; //citizenCardNumber, nvarchar//50], เลขประจำตัวประชาชน], /* mockup */
  warrantNumber: string; //warrantNumber, string, รหัสนำจับ],
  courtName: string; //courtName, string, ศาล],
  subjectFullName: string; //subjectFullName, string, ผู้ต้องหา],
  effectiveDate: string; //effectiveDate, datetime, วันประกาศ],
  expirationDate: string; //expirationDate, datetime, วันที่สิ้นสุด],
  policeFullName: string; //policeFullName, string, ชื่อพนักงานสืบสวน],
  policeCaseNumber: string; //policeCaseNumber, string, เลขคดีตำรวจ],
  policeCaseOffice: string; //policeCaseOffice, string, หน่วยงานที่ออกหมายจับ],
  undecidedCaseId: string; //undecidedCaseId, string, คดีดำ],
  decidedCaseId: string; //decidedCaseId, string, คดีแดง],
  allegation: string; //allegation, string, ข้อหา],
  dataSubmitDate: string; //dataSubmitDate, datetime, วันที่ปรับปรุงขอมูล]

  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  wartermarks: string;
  status: string;
  body: string[];
}

export class Dxc_Model_Rtp_ArrestWarrant {
  rtparrestwarrant: any;
  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  wartermarks: string;
  private dataSet: IDxc_Model_Rtp_ArrestWarrant;
  constructor(selectData: any) {
    moment.locale('th');
    this.rtparrestwarrant = {
      'id': this.changeNull(selectData.id),
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'warrantNumber': this.changeNull(selectData.warrantNumber),
      'courtName': this.changeNull(selectData.courtName),
      'subjectFullName': this.changeNull(selectData.subjectFullName),
      'effectiveDate': selectData.effectiveDate,
      'expirationDate': selectData.expirationDate,
      'policeFullName': this.changeNull(selectData.policeFullName),
      'policeCaseNumber': this.changeNull(selectData.policeCaseNumber),
      'policeCaseOffice': this.changeNull(selectData.policeCaseOffice),
      'undecidedCaseId': this.changeNull(selectData.undecidedCaseId),
      'decidedCaseId': this.changeNull(selectData.decidedCaseId),
      'allegation': this.changeNull(selectData.allegation),
      'dataSubmitDate': this.changeNull(selectData.dataSubmitDate),
      'person': {
        'citizenCardNumber': '',
        'fullName': this.changeNull(selectData.subjectFullName),
        'sex': '',
        'dateOfBirth': '',
      },
      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime,
    };
    this.dataSet = this.rtparrestwarrant;
  }

  setData(selectData: any) {
    this.rtparrestwarrant = {
      'id': this.changeNull(selectData.id),
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'warrantNumber': this.changeNull(selectData.warrantNumber),
      'courtName': this.changeNull(selectData.courtName),
      'subjectFullName': this.changeNull(selectData.subjectFullName),
      'effectiveDate': this.formatDate(selectData.effectiveDate),
      'expirationDate': this.formatDate(selectData.expirationDate),
      'policeFullName': this.changeNull(selectData.policeFullName),
      'policeCaseNumber': this.changeNull(selectData.policeCaseNumber),
      'policeCaseOffice': this.changeNull(selectData.policeCaseOffice),
      'undecidedCaseId': this.changeNull(selectData.undecidedCaseId),
      'decidedCaseId': this.changeNull(selectData.decidedCaseId),
      'allegation': this.changeNull(selectData.allegation),
      'dataSubmitDate': this.formatDate(selectData.dataSubmitDate),
      'person': {
        'citizenCardNumber': '',
        'fullName': this.changeNull(selectData.subjectFullName),
        'sex': '',
        'dateOfBirth': '',
      },
      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime,
    };
  }

  getData(): any {
    return this.rtparrestwarrant;
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
    if (selectData == null || selectData == "") {
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
   * @return {IDxc_Model_Rtp_ArrestWarrant}
   */
  public get $dataSet(): IDxc_Model_Rtp_ArrestWarrant {
    return this.dataSet;
  }

  /**
   * Setter $dataSet
   * @param {IDxc_Model_Rtp_ArrestWarrant} value
   */
  public set $dataSet(value: IDxc_Model_Rtp_ArrestWarrant) {
    this.dataSet = value;
  }

}
