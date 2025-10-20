import * as moment from 'moment'
export interface IPerson {
  citizenCardNumber: string;
  fullName: string;
  sex: string;
  dateOfBirth: Date;
}
export interface IDxc_Model_Djop_JuvenileOffender {

  id: number;//['id', 'number', 'รหัสข้อมูล', { 'pk': 'true' }],
  citizenCardNumber: string;//[citizenCardNumber, string, เลขประจำตัวประชาชน],
  title: string;//[title, string, คำนำหน้าชื่อ],
  firstName: string;//[firstName, string, ชื่อ],
  lastName: string;//[lastName, string, นามสกุล],
  sex: string;//[sex, string, เพศ],
  birthDate: string;//[birthDate, datetime, วันเกิด],
  trainingUnitName: string;//[trainingUnitName, string, ศูนย์ฝึก],
  unitName: string;//[unitName, string, ชื่อสถานพินิจ],
  eventDate: string;//[eventDate, datetime, วันที่เกิดเหตุ],
  //catchDate : [catchDate, datetime, วันที่จับกุม],
  receiveDate: string;//[receiveDate, datetime, วันที่รับตัว],
  allegation: string;//[allegation, string, ชื่อคดี [ข้อกล่าวหา]],
  releaseDate: string;//[releaseDate, datetime, วันที่ปล่อยตัว],
  caseId: string;//[caseId, string, เลขคดี],
  caseYear: number;//[caseYear, number, ปีรายงาน],
  //unitAbb : [unitAbb, datetime,ชื่อย่อสถานพินิจ],
  //unitId : [unitId, datetime,รหัสหน่วยงาน เยาวชน],
  //localDataId : [localDataId, datetime,รหัสข้อมูล ภายในหน่วยงาน],
  //localDataYear : [localDataYear, datetime,ปีข้อมูล ภายในหน่วยงาน],
  //policeCaseId : [policeCaseId, string,เลขคดีตำรวจ],
  //undecidedCaseId : [undecidedCaseId, string,เลขคดีดำ],
  //decidedCaseId : [decidedCaseId, string,เลขคดีแดง]
  dataSubmitDate: string;//[dataSubmitDate, datetime, วันที่ปรับปรุงขอมูล],
  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  wartermarks: string;
  status: string;
  body: string[];
  person: IPerson;
}

export interface Dxc_Model_Djop_JuvenileOffender {

  id: number;
  citizenCardNumber: string;
  title: string;
  firstName: string;
  lastName: string;
  sex: string;
  birthDate: string;
  trainingUnitName: string;
  unitName: string;
  eventDate: string;
  receiveDate: string;
  allegation: string;
  releaseDate: string;
  caseId: string;
  caseYear: number;
  //unitAbb : [unitAbb, datetime,ชื่อย่อสถานพินิจ],
  //unitId : [unitId, datetime,รหัสหน่วยงาน เยาวชน],
  //localDataId : [localDataId, datetime,รหัสข้อมูล ภายในหน่วยงาน],
  //localDataYear : [localDataYear, datetime,ปีข้อมูล ภายในหน่วยงาน],
  //policeCaseId : [policeCaseId, string,เลขคดีตำรวจ],
  //undecidedCaseId : [undecidedCaseId, string,เลขคดีดำ],
  //decidedCaseId : [decidedCaseId, string,เลขคดีแดง]
  dataSubmitDate: string;

  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  wartermarks: string;
  status: string;
  body: string[];
  person: IPerson;
}

export class Dxc_Model_Djop_JuvenileOffender {
  djopjuvenileoffender: any;
  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  private dataSet: IDxc_Model_Djop_JuvenileOffender;
  constructor(selectData: any) {
    this.djopjuvenileoffender = {
      'id': this.changeNull(selectData.id),
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'title': this.changeNull(selectData.title),
      'firstName': this.changeNull(selectData.firstName),
      'lastName': this.changeNull(selectData.lastName),
      'sex': this.changeNull(selectData.sex),
      'birthDate': this.changeNull(selectData.birthDate),
      'trainingUnitName': this.changeNull(selectData.trainingUnitName),
      'unitName': this.changeNull(selectData.unitName),
      'eventDate': this.changeNull(selectData.eventDate),
      'receiveDate': this.changeNull(selectData.receiveDate),
      'allegation': this.changeNull(selectData.allegation),
      'releaseDate': this.changeNull(selectData.releaseDate),
      'caseId': this.changeNull(selectData.caseId),
      'caseYear': this.changeNull(selectData.caseYear),
      'dataSubmitDate': this.changeNull(selectData.dataSubmitDate),
      'person': {
        'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
        'fullName': this.changeNull(selectData.firstName) + ' ' + this.changeNull(selectData.lastName),
        'sex': this.changeNull(selectData.sex),
        'dateOfBirth': this.changeNull(selectData.birthDate),
      },
      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime,
      'reportBarcode': this.reportBarcode
    };
    this.dataSet = this.djopjuvenileoffender;
  }

  setData(selectData: any) {
    this.djopjuvenileoffender = {
      'id': this.changeNull(selectData.id),
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'title': this.changeNull(selectData.title),
      'firstName': this.changeNull(selectData.firstName),
      'lastName': this.changeNull(selectData.lastName),
      'sex': this.changeSex(selectData.sex),
      'birthDate': this.formatDate(selectData.birthDate),
      'trainingUnitName': this.changeNull(selectData.trainingUnitName),
      'unitName': this.changeNull(selectData.unitName),
      'eventDate': this.formatDate(selectData.eventDate),
      'receiveDate': this.formatDate(selectData.receiveDate),
      'allegation': this.changeNull(selectData.allegation),
      'releaseDate': this.formatDate(selectData.releaseDate),
      'caseId': this.changeNull(selectData.caseId),
      'caseYear': this.changeNull(selectData.caseYear),
      'dataSubmitDate': this.formatDate(selectData.dataSubmitDate),
      'person': {
        'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
        'fullName': this.changeNull(selectData.firstName) + ' ' + this.changeNull(selectData.lastName),
        'sex': this.changeSex(selectData.sex),
        'dateOfBirth': this.formatDate(selectData.birthDate),
      },
      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime,
      'reportBarcode': this.reportBarcode
    };
  }

  /**
   * Getter $dataSet
   * @return {IDxc_Model_Djop_JuvenileOffender}
   */
  public get $dataSet(): IDxc_Model_Djop_JuvenileOffender {
    return this.dataSet;
  }

  /**
   * Setter $dataSet
   * @param {IDxc_Model_Djop_JuvenileOffender} value
   */
  public set $dataSet(value: IDxc_Model_Djop_JuvenileOffender) {
    this.dataSet = value;
  }

  getData(): any {
    return this.djopjuvenileoffender;
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
    }else{
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
    } else {
      return selectData;
    }
  }
}
