import * as moment from 'moment';

// tslint:disable-next-line: class-name
export interface IDxc_Model_Rtp_Criminal {
  allegation: string;
  arrestedDate: string;
  citizenCardNumber: string;
  dataId: string;
  eventDate: string;
  firstName: string;
  lastName: string;
  policeCaseNumber: string;
  policeCaseOffice: string;
  id: string;
  birthDate: string;
  sex: string;
  crimeDate: string;
  lastAddress: string;
  lastAddressProvince: string;
  occupation: string;
  fatherFullName: string;
  motherFullName: string;
  courtName: string;
  policeCaseId: string;
  investigationResult: string;
  imprisonmentResult: string;
  judgement: string;
  dataSubmitDate: string;
  address:string;
  phone:string;
  career: string;

  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  wartermarks: string;
  status: string;
  body: string[];
}

// tslint:disable-next-line: class-name
export class Dxc_Model_Rtp_Criminal {
  criminal: any;
  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  wartermarks: string;
  private dataSet: IDxc_Model_Rtp_Criminal;
  constructor(selectData: any) {
    this.criminal = {
      'allegation': this.changeNull(selectData.allegation),
      'arrestedDate': this.changeNull(selectData.arrestedDate),
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'dataId': this.changeNull(selectData.dataId),
      'eventDate': this.changeNull(selectData.eventDate),
      'firstName': this.changeNull(selectData.firstName),
      'lastName': this.changeNull(selectData.lastName),
      'policeCaseNumber': this.changeNull(selectData.policeCaseNumber),
      'policeCaseOffice': this.changeNull(selectData.policeCaseOffice),
      'id': this.changeNull(selectData.id),
      'birthDate': this.changeNull(selectData.birthDate),
      'sex': this.changeNull(selectData.sex),
      'crimeDate': this.changeNull(selectData.crimeDate),
      'lastAddress': this.changeNull(selectData.lastAddress),
      'lastAddressProvince': this.changeNull(selectData.lastAddressProvince),
      'occupation': this.changeNull(selectData.occupation),
      'fatherFullName': this.changeNull(selectData.fatherFullName),
      'motherFullName': this.changeNull(selectData.motherFullName),
      'courtName': this.changeNull(selectData.courtName),
      'policeCaseId': this.changeNull(selectData.policeCaseId),
      'investigationResult': this.changeNull(selectData.investigationResult),
      'imprisonmentResult': this.changeNull(selectData.investigationResult),
      'judgement': this.changeNull(selectData.judgement),
      'dataSubmitDate': this.changeNull(selectData.dataSubmitDate),

      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime,
      'person': {
        'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
        'fullName': this.changeNull(selectData.firstName) + ' ' + this.changeNull(selectData.lastName),
        'sex': this.changeNull(selectData.sex),
        'dateOfBirth': this.changeNull(selectData.birthDate)
      },
    };
    this.dataSet = this.criminal;
  }
  setData(selectData: any) {
    this.criminal = {
      'allegation': this.changeNull(selectData.allegation),
      'arrestedDate': this.changeNull(selectData.arrestedDate),
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'dataId': this.changeNull(selectData.dataId),
      'eventDate': this.changeNull(selectData.eventDate),
      'firstName': this.changeNull(selectData.firstName),
      'lastName': this.changeNull(selectData.lastName),
      'policeCaseNumber': this.changeNull(selectData.policeCaseNumber),
      'policeCaseOffice': this.changeNull(selectData.policeCaseOffice),
      'id': this.changeNull(selectData.id),
      'birthDate': this.formatDate(selectData.birthDate),
      'sex': this.changeSex(selectData.sex),
      'crimeDate': this.formatDate(selectData.crimeDate),
      'lastAddress': this.changeNull(selectData.lastAddress),
      'lastAddressProvince': this.changeNull(selectData.lastAddressProvince),
      'occupation': this.changeNull(selectData.occupation),
      'fatherFullName': this.changeNull(selectData.fatherFullName),
      'motherFullName': this.changeNull(selectData.motherFullName),
      'courtName': this.changeNull(selectData.courtName),
      'policeCaseId': this.changeNull(selectData.policeCaseId),
      'investigationResult': this.changeNull(selectData.investigationResult),
      'imprisonmentResult': this.changeNull(selectData.investigationResult),
      'judgement': this.changeNull(selectData.judgement),
      'dataSubmitDate': this.changeNull(selectData.dataSubmitDate),

      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime,
      'person': {
        'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
        'fullName': this.changeNull(selectData.firstName) + ' ' + this.changeNull(selectData.lastName),
        'sex': this.changeSex(selectData.sex),
        'dateOfBirth': this.formatDate(selectData.birthDate)
      },
    };
  }
  getData(): any {
    return this.criminal;
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
   * @return {IDxc_Model_Rtp_Criminal}
   */
  public get $dataSet(): IDxc_Model_Rtp_Criminal {
    return this.dataSet;
  }

  /**
   * Setter $dataSet
   * @param {IDxc_Model_Rtp_Criminal} value
   */
  public set $dataSet(value: IDxc_Model_Rtp_Criminal) {
    this.dataSet = value;
  }
}
