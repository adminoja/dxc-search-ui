
import * as moment from 'moment';
export interface IDxc_Model_Jfo_Jfo_Case {
  id: string;
  amount: string;
  caseEndDate: string;
  caseEndType: string;
  caseFundNo: string;
  caseType: string;
  categoryId: string;
  citizenId: string;
  dataSubmitDate: Date;
  entryDate: string;
  meetingDate: string;
  nationality: string;
  ofcNotifyDate: string;
  ofcResultDate: string;
  ofcStartDate: string;
  provinceName: string;
  receiveDate: string;
  sex: string;
  subcategoryId?: string;
  updated: Date;
  year: string;


  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  wartermarks: string;
  status: string;
  body: string[];
}
export class Dxc_Model_Jfo_Jfo_Case {
  private dataSet: IDxc_Model_Jfo_Jfo_Case;
  jfojfocase: any;
  reportName: string;
  reportBarcode: string;
  reportOfDate: string;
  reportOfTime: string;
  wartermarks: string;
  constructor(selectData: any) {
    this.jfojfocase = {
      'id': this.changeNull(selectData.id),
      'amount': this.changeNull(selectData.amount),
      'caseEndDate': this.changeNull(selectData.caseEndDate),
      'caseEndType': this.changeNull(selectData.caseEndType),
      'caseFundNo': this.changeNull(selectData.caseFundNo),
      'caseType': this.changeNull(selectData.caseType),
      'categoryId': this.changeNull(selectData.categoryId),
      'citizenId': this.changeNull(selectData.citizenId),
      'dataSubmitDate': this.changeNull(selectData.dataSubmitDate),
      'entryDate': this.changeNull(selectData.entryDate),
      'meetingDate': this.changeNull(selectData.meetingDate),
      'nationality': this.changeNull(selectData.nationality),
      'ofcNotifyDate': this.changeNull(selectData.ofcNotifyDate),
      'ofcResultDate': this.changeNull(selectData.ofcResultDate),
      'ofcStartDate': this.changeNull(selectData.ofcStartDate),
      'provinceName': this.changeNull(selectData.provinceName),
      'receiveDate': this.changeNull(selectData.receiveDate),
      'sex': this.changeNull(this.changeSex(selectData.sex)),
      'subcategoryId': this.changeNull(selectData.subcategoryId),
      'updated': this.changeNull(selectData.updated),
      'year': this.changeNull(selectData.year),
      'person': {
        'citizenCardNumber': this.changeNull(selectData.citizenId),
        'fullName': '',
        'sex': this.changeNull(this.changeSex(selectData.sex)),
        'dateOfBirth': '',
      },
      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime
    };
    this.dataSet = this.jfojfocase;
  }

  setData(selectData: any) {
    this.jfojfocase = {
      'id': this.changeNull(selectData.id),
      'amount': this.changeNull(selectData.amount),
      'caseEndDate': this.formatDate(selectData.caseEndDate),
      'caseEndType': this.changeNull(selectData.caseEndType),
      'caseFundNo': this.changeNull(selectData.caseFundNo),
      'caseType': this.changeNull(selectData.caseType),
      'categoryId': this.changeNull(selectData.categoryId),
      'citizenId': this.changeNull(selectData.citizenId),
      'dataSubmitDate': this.changeNull(selectData.dataSubmitDate),
      'entryDate': this.formatDate(selectData.entryDate),
      'meetingDate': this.formatDate(selectData.meetingDate),
      'nationality': this.changeNull(selectData.nationality),
      'ofcNotifyDate': this.formatDate(selectData.ofcNotifyDate),
      'ofcResultDate': this.formatDate(selectData.ofcResultDate),
      'ofcStartDate': this.formatDate(selectData.ofcStartDate),
      'provinceName': this.changeNull(selectData.provinceName),
      'receiveDate': this.formatDate(selectData.receiveDate),
      'sex': this.changeNull(this.changeSex(selectData.sex)),
      'subcategoryId': this.changeNull(selectData.subcategoryId),
      'updated': this.changeNull(selectData.updated),
      'year': this.changeNull(selectData.year),
      'person': {
        'citizenCardNumber': this.changeNull(selectData.citizenId),
        'fullName': '',
        'sex': this.changeNull(this.changeSex(selectData.sex)),
        'dateOfBirth': '',
      },
      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime
    };
  }

  getData(): any {
    return this.jfojfocase;
  }
  formatDate(dateOfBirth: string): string {

    const date = new Date(dateOfBirth);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear() + 543;
    if (dateOfBirth === 'null') {
      return '-';
    } else if (dateOfBirth === null) {
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
    } else if (sex === '1') {
      return 'ชาย';
    } else if (sex === '2') {
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

  loadReportDetail() {
    if (localStorage.getItem('reportName') !== null) {
      this.reportName = localStorage.getItem('reportName');
      this.reportOfDate = moment(new Date().toString()).format('L').toString();
      this.reportOfTime = moment(new Date().toString()).format('LTS').toString();
      this.reportBarcode = 'QP4015-12345678';
      this.wartermarks = `<div class="watermark">
        ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
        ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  </div>
  <div class="watermark2">
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  </div>
  <div class="watermark3">
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  </div>
  <div class="watermark4">
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  </div>
  <div class="watermark5">
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  </div>
  <div class="watermark6">
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  </div>
  <div class="watermark7">
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  </div>
  <div class="watermark8">
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  </div>
  <div class="watermark9">
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  </div>
  <div class="watermark10">
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  </div>
  <div class="watermark11">
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  </div>`;
      return this.wartermarks;
    } else {
      this.reportName = 'เกิดข้อผิดพลาด';
      this.reportOfDate = moment(new Date().toString()).format('L').toString();
      this.reportOfTime = moment(new Date().toString()).format('LTS').toString();
      this.reportBarcode = 'QP4015-12345678';
      this.wartermarks = `<div class="watermark">
        ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
        ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  </div>
  <div class="watermark2">
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  </div>
  <div class="watermark3">
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  </div>
  <div class="watermark4">
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  </div>
  <div class="watermark5">
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  </div>
  <div class="watermark6">
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  </div>
  <div class="watermark7">
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  </div>
  <div class="watermark8">
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  </div>
  <div class="watermark9">
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  </div>
  <div class="watermark10">
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  </div>
  <div class="watermark11">
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  </div>`;
      return this.wartermarks;
    }
  }


  /**
   * Getter $dataSet
   * @return {IDxc_Model_Jfo_Jfo_Case}
   */
  public get $dataSet(): IDxc_Model_Jfo_Jfo_Case {
    return this.dataSet;
  }

  /**
   * Setter $dataSet
   * @param {IDxc_Model_Jfo_Jfo_Case} value
   */
  public set $dataSet(value: IDxc_Model_Jfo_Jfo_Case) {
    this.dataSet = value;
  }

}

