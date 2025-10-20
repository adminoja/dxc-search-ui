import * as moment from 'moment';
// tslint:disable-next-line: class-name
export interface IDxc_Model_Dopa_Citizen {
  id: number;
  citizenCardNumber: string;
  prefix: string;
  firstName: string;
  lastName: string;
  sex: string;
  dateOfBirth: string;
  age: string;
  nationality: string;
  homeAddress: string;
  homeNumber: string;
  homeMoo: string;
  homeTrock: string;
  homeSoy: string;
  homeRoad: string;
  homeTumbon: string;
  homeAmphur: string;
  homeProvince: string;
  homeStatus: string;
  inhabitantStatus: string;
  homeMoveInDate: string;
  homeOwnedStatus: string;
  fatherCitizenCardNumber: string;
  fatherFullName: string;
  fatherNationality: string;
  motherCitizenCardNumber: string;
  motherFullName: string;
  motherNationality: string;
  personalStatus: string;
  religion: string;
  changeNames: string;
  image: string;
  telephoneNumber: string;
  personAddressPostalCode: string;

  updateDateTime: string;
  dataSubmitDate: string;
  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  wartermarks: string;
}
// tslint:disable-next-line: class-name
export interface Dxc_Model_Dopa_Citizen {
  id: number;
  citizenCardNumber: string;
  prefix: string;
  firstName: string;
  lastName: string;
  sex: string;
  dateOfBirth: string;
  age: string;
  nationality: string;
  homeAddress: string;
  homeNumber: string;
  homeMoo: string;
  homeTrock: string;
  homeSoy: string;
  homeRoad: string;
  homeTumbon: string;
  homeAmphur: string;
  homeProvince: string;
  homeStatus: string;
  inhabitantStatus: string;
  homeMoveInDate: string;
  homeOwnedStatus: string;
  fatherCitizenCardNumber: string;
  fatherFullName: string;
  fatherNationality: string;
  motherCitizenCardNumber: string;
  motherFullName: string;
  motherNationality: string;
  personalStatus: string;
  religion: string;
  changeNames: string;
  image: string;
  telephoneNumber: string;
  personAddressPostalCode: string;

  updateDateTime: string;
  dataSubmitDate: string;
  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  wartermarks: string;
}
// tslint:disable-next-line: class-name
export class Dxc_Model_Dopa_Citizen {
  dopacitizen: any;
  private dataSet: IDxc_Model_Dopa_Citizen;
  constructor(selectData: any) {
    this.dopacitizen = {
      'id': this.changeNull(selectData.id),
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'prefix': this.changeNull(selectData.prefix),
      'firstName': this.changeNull(selectData.firstName),
      'lastName': this.changeNull(selectData.lastName),
      'sex': this.changeNull(selectData.sex),
      'dateOfBirth': this.formatDate(selectData.dateOfBirth),
      'age': this.changeNull(selectData.age),
      'nationality': this.changeNull(selectData.nationality),
      'homeAddress': this.changeNull(selectData.homeAddress),
      'homeNumber': this.changeNull(selectData.homeNumber),
      'homeMoo': this.changeNull(selectData.homeMoo),
      'homeTrock': this.changeNull(selectData.homeTrock),
      'homeSoy': this.changeNull(selectData.homeSoy),
      'homeRoad': this.changeNull(selectData.homeRoad),
      'homeTumbon': this.changeNull(selectData.homeTumbon),
      'homeAmphur': this.changeNull(selectData.homeAmphur),
      'homeProvince': this.changeNull(selectData.homeProvince),
      'homeStatus': this.changeNull(selectData.homeStatus),
      'telephoneNumber': this.changeNull(selectData.telephoneNumber),
      'personAddressPostalCode': this.changeNull(selectData.personAddressPostalCode),

      'inhabitantStatus': this.changeNull(selectData.inhabitantStatus),
      'homeMoveInDate': this.formatDate(selectData.homeMoveInDate),
      'homeOwnedStatus': this.changeNull(selectData.homeOwnedStatus),
      'fatherCitizenCardNumber': this.changeNull(selectData.fatherCitizenCardNumber),
      'fatherFullName': this.changeNull(selectData.fatherFullName),
      'fatherNationality': this.changeNull(selectData.fatherNationality),
      'motherCitizenCardNumber': this.changeNull(selectData.motherCitizenCardNumber),
      'motherFullName': this.changeNull(selectData.motherFullName),
      'motherNationality': this.changeNull(selectData.motherNationality),
      'personalStatus': this.changeNull(selectData.personalStatus),

      'reportName': this.changeNull(selectData.reportName),
      'reportOfDate': this.changeNull(selectData.reportOfDate),
      'reportOfTime': this.changeNull(selectData.reportOfTime),
      'reportBarcode': this.changeNull(selectData.reportBarcode),

      'religion': this.changeNull(selectData.religion),
      'changeNames': this.changeNull(selectData.changeNames),
      'image': this.changeNull(selectData.image),
      'dataSubmitDate': this.formatDate(selectData.dataSubmitDate),
      'updateDateTime': this.formatDate(selectData.updateDateTime),
      'wartermarks': this.loadReportDetail(),
      'person': {
        'citizenCardNumber': selectData.citizenCardNumber,
        'fullName': selectData.firstName + ' ' + selectData.lastName,
        'sex': selectData.sex,
        'dateOfBirth': selectData.dateOfBirth
      }
    };
    this.dataSet = this.dopacitizen;
  }
   /**
   * Getter $dataSet
   * @return {IDxc_Model_Dopa_Citizen}
   */
  public get $dataSet(): IDxc_Model_Dopa_Citizen {
    return this.dataSet;
  }

  /**
   * Setter $dataSet
   * @param {IDxc_Model_Dopa_Citizen} value
   */
  public set $dataSet(value: IDxc_Model_Dopa_Citizen) {
    this.dataSet = value;
  }
  getData(): any {
    return this.dopacitizen;
  }
  formatDate(birthDate: string): string {

    // tslint:disable-next-line: prefer-const
    let date = new Date(birthDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear() + 543;
    // tslint:disable-next-line: triple-equals
    if (birthDate == 'null') {
      return '-';
    } else {
      return `${day}/${month}/${year}`;
    }
  }
  changeSex(sex: string) {
    // tslint:disable-next-line: triple-equals
    if (sex == 'MALE') {
      return 'ชาย';
    // tslint:disable-next-line: triple-equals
    } else if (sex == 'FEMALE') {
      return 'หญิง';
    // tslint:disable-next-line: triple-equals
    } else if (sex == 'OTHER') {
      return 'อื่นๆ';
    // tslint:disable-next-line: triple-equals
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
}
