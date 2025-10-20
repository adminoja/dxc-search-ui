import * as moment from 'moment';

export interface IDxc_Model_Doc_Absolute_Prisoner_Information_Before_Release_On_Probation {
  dataId: string
  firstName: string
  lastName: string
  age: string
  citizenCardNumber: string
  offenseNickName: string
  guiltyName: string
  courtCase: string
  blackNo: string
  redNo: string
  imposePenalty: string
  startDate: string
  endDate: string
  imprisoned: string
  sentenceCompletionDate: string
  relationshipWithPrisoner: string
  dateOfBirth: string
  ethnicty: string
  nationality: string
  religion: string
  education: string
  occupationBeforePunish: string
  income: string
  addressBeforePunish: string
  status: string
  spouseName: string
  address: string
  phoneNumber: string
  occupation: string
  numberChildren: string
  fatherName: string
  occupationFather: string
  addressFather: string
  phoneNumberFather: string
  motherName: string
  occupationMother: string
  addressMother: string
  phoneNumberMother: string
  policeName: string
  arrestedCharges: string
  crimeDate: string
  court: string
  judgement: string
  judgementDate: string
  releaseDate: string
  fromPrison: string
  health: string
  sick: string
}

export interface Dxc_Model_Doc_Absolute_Prisoner_Information_Before_Release_On_Probation {
  dataId: string
  firstName: string
  lastName: string
  age: string
  citizenCardNumber: string
  offenseNickName: string
  guiltyName: string
  courtCase: string
  blackNo: string
  redNo: string
  imposePenalty: string
  startDate: string
  endDate: string
  imprisoned: string
  sentenceCompletionDate: string
  relationshipWithPrisoner: string
  dateOfBirth: string
  ethnicty: string
  nationality: string
  religion: string
  education: string
  occupationBeforePunish: string
  income: string
  addressBeforePunish: string
  status: string
  spouseName: string
  address: string
  phoneNumber: string
  occupation: string
  numberChildren: string
  fatherName: string
  occupationFather: string
  addressFather: string
  phoneNumberFather: string
  motherName: string
  occupationMother: string
  addressMother: string
  phoneNumberMother: string
  policeName: string
  arrestedCharges: string
  crimeDate: string
  court: string
  judgement: string
  judgementDate: string
  releaseDate: string
  fromPrison: string
  health: string
  sick: string

  
  body: string[]; //
  reportName: string; // ผู้ขอรายงาน
  reportOfDate: string; // วันที่พิมรายงาน
  reportOfTime: string; // เวลาที่พิมรายงาน
  reportBarcode: string; // เลขที่เอกสาร(เลขบาร์โค๊ด)
  wartermarks: string;
}

export class Dxc_Model_Doc_Absolute_Prisoner_Information_Before_Release_On_Probation {
  docprisoner: any;
  private dataSet: IDxc_Model_Doc_Absolute_Prisoner_Information_Before_Release_On_Probation;
  constructor(selectData: any) {
    moment.locale('th');
    this.docprisoner = {
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'dataId': this.changeNull(selectData.dataId),
      'firstName': this.changeNull(selectData.firstName),
      'lastName': this.changeNull(selectData.lastName),
      'age': this.changeNull(selectData.age),
      'offenseNickName': this.changeNull(selectData.offenseNickName),
      'guiltyName': this.changeNull(selectData.guiltyName),
      'courtCase': this.changeNull(selectData.courtCase),
      'blackNo': this.changeNull(selectData.blackNo),
      'redNo': this.changeNull(selectData.redNo),
      'imposePenalty': this.changeNull(selectData.imposePenalty),
      'startDate': this.changeNull(selectData.startDate),
      'endDate': this.changeNull(selectData.endDate),
      'imprisoned': this.changeNull(selectData.imprisoned),
      'sentenceCompletionDate': this.changeNull(selectData.sentenceCompletionDate),
      'relationshipWithPrisoner': this.changeNull(selectData.relationshipWithPrisoner),
      'dateOfBirth': this.changeNull(selectData.dateOfBirth),
      'ethnicty': this.changeNull(selectData.ethnicty),
      'nationality': this.changeNull(selectData.nationality),
      'religion': this.changeNull(selectData.religion),
      'education': this.changeNull(selectData.education),
      'occupationBeforePunish': this.changeNull(selectData.occupationBeforePunish),
      'income': this.changeNull(selectData.income),
      'addressBeforePunish': this.changeNull(selectData.addressBeforePunish),
      'status': this.changeNull(selectData.status),
      'spouseName': this.changeNull(selectData.spouseName),
      'address': this.changeNull(selectData.address),
      'phoneNumber': this.changeNull(selectData.phoneNumber),
      'occupation': this.changeNull(selectData.occupation),
      'numberChildren': this.changeNull(selectData.numberChildren),
      'fatherName': this.changeNull(selectData.fatherName),
      'occupationFather': this.changeNull(selectData.occupationFather),
      'addressFather': this.changeNull(selectData.addressFather),
      'phoneNumberFather': this.changeNull(selectData.phoneNumberFather),
      'motherName': this.changeNull(selectData.motherName),
      'occupationMother': this.changeNull(selectData.occupationMother),
      'addressMother': this.changeNull(selectData.addressMother),
      'phoneNumberMother': this.changeNull(selectData.phoneNumberMother),
      'policeName': this.changeNull(selectData.policeName),
      'arrestedCharges': this.changeNull(selectData.arrestedCharges),
      'crimeDate': this.changeNull(selectData.crimeDate),
      'court': this.changeNull(selectData.court),
      'judgement': this.changeNull(selectData.judgement),
      'judgementDate': this.changeNull(selectData.judgementDate),
      'releaseDate': this.changeNull(selectData.releaseDate),
      'fromPrison': this.changeNull(selectData.fromPrison),
      'health': this.changeNull(selectData.health),
      'sick': this.changeNull(selectData.sick),
      'person': {
        'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
        'fullName': this.changeNull(selectData.firstName) + '' + this.changeNull(selectData.lastName),
        'sex': '',
        'dateOfBirth': this.changeNull(selectData.dateOfBirth),
      },
      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime
    };
    this.dataSet = this.docprisoner;
  }
 
  getData(): any {
    return this.docprisoner;
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
    } else if (selectData == 'Invalid date') {
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
   * @return {IDxc_Model_Doc_Absolute_Prisoner_Information_Before_Release_On_Probation}
   */
  public get $dataSet(): IDxc_Model_Doc_Absolute_Prisoner_Information_Before_Release_On_Probation {
    return this.dataSet;
  }

  /**
   * Setter $dataSet
   * @param {IDxc_Model_Doc_Absolute_Prisoner_Information_Before_Release_On_Probation} value
   */
  public set $dataSet(value: IDxc_Model_Doc_Absolute_Prisoner_Information_Before_Release_On_Probation) {
    this.dataSet = value;
  }
}
