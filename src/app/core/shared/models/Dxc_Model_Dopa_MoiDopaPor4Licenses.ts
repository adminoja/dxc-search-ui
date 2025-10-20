import * as moment from 'moment';
import { isEmpty } from 'rxjs/operators';

export interface IDxc_Model_Dopa_MoiDopaPor4Licenses {
  id: string;
  citizenCardNumber: string;
  applicantType: string;
  docDate: string;
  expireDate: string;
  hid: string;
  hid2: number;
  personalId: string;
  personalId2: string;
  processTimestamp: string;
  total: string;
  businessType: string;
  fullNameAndRank2: string;
  amphorDesc: string;
  amphorDesc2: string;
  businessName: string;
  districtDesc: string;
  districtDesc2: string;
  docID: string;
  docPlaceDesc: string;
  docPlaceProvince: string;
  firstName: string;
  firstName2: string;
  fullNameAndRank: string;
  genderDesc: string;
  genderDesc2: string;
  gunCharacteristic: string;
  gunProduct: string;
  gunRegistrationId: string;
  gunSerialNo: string;
  gunSize: string;
  gunType: string;
  hidRcodeDesc: string;
  hidRcodeDesc2: string;
  hno: string;
  hno2: string;
  lastName: string;
  lastName2: string;
  middleName: string;
  middleName2: string;
  provinceDesc: string;
  provinceDesc2: string;
  remark: string;
  soi: string;
  soi2: string;
  thanon: string;
  thanon2: string;
  titleDesc: string;
  titleDesc2: string;
  trok: string;
  trok2: string;
  additionalProperties: string;

  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  wartermarks: string;
  status: string;
  body: string[];
}

export interface Dxc_Model_Dopa_MoiDopaPor4Licenses {
  id: string;
  citizenCardNumber: string;
  applicantType: string;
  docDate: string;
  expireDate: string;
  hid: string;
  hid2: number;
  personalId: string;
  personalId2: string;
  processTimestamp: string;
  total: string;
  businessType: string;
  fullNameAndRank2: string;
  amphorDesc: string;
  amphorDesc2: string;
  businessName: string;
  districtDesc: string;
  districtDesc2: string;
  docID: string;
  docPlaceDesc: string;
  docPlaceProvince: string;
  firstName: string;
  firstName2: string;
  fullNameAndRank: string;
  genderDesc: string;
  genderDesc2: string;
  gunCharacteristic: string;
  gunProduct: string;
  gunRegistrationId: string;
  gunSerialNo: string;
  gunSize: string;
  gunType: string;
  hidRcodeDesc: string;
  hidRcodeDesc2: string;
  hno: string;
  hno2: string;
  lastName: string;
  lastName2: string;
  middleName: string;
  middleName2: string;
  provinceDesc: string;
  provinceDesc2: string;
  remark: string;
  soi: string;
  soi2: string;
  thanon: string;
  thanon2: string;
  titleDesc: string;
  titleDesc2: string;
  trok: string;
  trok2: string;
  additionalProperties: string;

  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  wartermarks: string;
  status: string;
  body: string[];
}

export class Dxc_Model_Dopa_MoiDopaPor4Licenses {
  dopamoipor4: any;
  private dataSet: IDxc_Model_Dopa_MoiDopaPor4Licenses;
  constructor(selectData: any) {
    this.dopamoipor4 = {
      'id': this.changeNull(selectData.id),
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'applicantType': this.changeNull(selectData.applicantType),
      'docDate': this.changeNull(selectData.docDate),
      'expireDate': this.changeNull(selectData.expireDate),
      'hid': this.changeNull(selectData.hid),
      'hid2': this.changeNull(selectData.hid2),
      'personalId': this.changeNull(selectData.personalId),
      'personalId2': this.changeNull(selectData.personalId2),
      'processTimestamp': this.changeNull(selectData.processTimestamp),
      'total': this.changeNull(selectData.total),
      'businessType': this.changeNull(selectData.businessType),
      'fullNameAndRank2': this.changeNull(selectData.fullNameAndRank2),
      'amphorDesc': this.changeNull(selectData.amphorDesc),
      'amphorDesc2': this.changeNull(selectData.amphorDesc2),
      'businessName': this.changeNull(selectData.businessName),
      'districtDesc': this.changeNull(selectData.districtDesc),
      'districtDesc2': this.changeNull(selectData.districtDesc2),
      'docID': this.changeNull(selectData.docID),
      'docPlaceDesc': this.changeNull(selectData.docPlaceDesc),
      'docPlaceProvince': this.changeNull(selectData.docPlaceProvince),
      'firstName': this.changeNull(selectData.firstName),
      'firstName2': this.changeNull(selectData.firstName2),
      'fullNameAndRank': this.changeNull(selectData.fullNameAndRank),
      'genderDesc': this.changeNull(selectData.genderDesc),
      'genderDesc2': this.changeNull(selectData.genderDesc2),
      'gunCharacteristic': this.changeNull(selectData.gunCharacteristic),
      'gunProduct': this.changeNull(selectData.gunProduct),
      'gunRegistrationId': this.changeNull(selectData.gunRegistrationId),
      'gunSerialNo': this.changeNull(selectData.gunSerialNo),
      'gunSize': this.changeNull(selectData.gunSize),
      'gunType': this.changeNull(selectData.gunType),
      'hidRcodeDesc': this.changeNull(selectData.hidRcodeDesc),
      'hidRcodeDesc2': this.changeNull(selectData.hidRcodeDesc2),
      'hno': this.changeNull(selectData.hno),
      'hno2': this.changeNull(selectData.hno2),
      'lastName': this.changeNull(selectData.lastName),
      'lastName2': this.changeNull(selectData.lastName2),
      'middleName': this.changeNull(selectData.middleName),
      'middleName2': this.changeNull(selectData.middleName2),
      'provinceDesc': this.changeNull(selectData.provinceDesc),
      'provinceDesc2': this.changeNull(selectData.provinceDesc2),
      'remark': this.changeNull(selectData.remark),
      'soi': this.changeNull(selectData.soi),
      'soi2': this.changeNull(selectData.soi2),
      'thanon': this.changeNull(selectData.thanon),
      'thanon2': this.changeNull(selectData.thanon2),
      'titleDesc': this.changeNull(selectData.titleDesc),
      'titleDesc2': this.changeNull(selectData.titleDesc2),
      'trok': this.changeNull(selectData.trok),
      'trok2': this.changeNull(selectData.trok2),
      'additionalProperties': this.changeNull(selectData.additionalProperties),
      'person': {
        'citizenCardNumber': selectData.citizenCardNumber,
        'fullName': selectData.firstName + ' ' + selectData.lastName,
        'sex': selectData.genderDesc,
        'dateOfBirth': ''
      },
      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime
    };
    this.dataSet = this.dopamoipor4;

  }

  setData(selectData: any) {
    this.dopamoipor4 = {
      'id': this.changeNull(selectData.id),
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'applicantType': this.changeNull(selectData.applicantType),
      'docDate': this.formatDate(selectData.docDate),
      'expireDate': this.formatDate(selectData.expireDate),
      'hid': this.changeNull(selectData.hid),
      'hid2': this.changeNull(selectData.hid2),
      'personalId': this.changeNull(selectData.personalId),
      'personalId2': this.changeNull(selectData.personalId2),
      'processTimestamp': this.changeNull(selectData.processTimestamp),
      'total': this.changeNull(selectData.total),
      'businessType': this.changeNull(selectData.businessType),
      'fullNameAndRank2': this.changeNull(selectData.fullNameAndRank2),
      'amphorDesc': this.changeNull(selectData.amphorDesc),
      'amphorDesc2': this.changeNull(selectData.amphorDesc2),
      'businessName': this.changeNull(selectData.businessName),
      'districtDesc': this.changeNull(selectData.districtDesc),
      'districtDesc2': this.changeNull(selectData.districtDesc2),
      'docID': this.changeNull(selectData.docID),
      'docPlaceDesc': this.changeNull(selectData.docPlaceDesc),
      'docPlaceProvince': this.changeNull(selectData.docPlaceProvince),
      'firstName': this.changeNull(selectData.firstName),
      'firstName2': this.changeNull(selectData.firstName2),
      'fullNameAndRank': this.changeNull(selectData.fullNameAndRank),
      'genderDesc': this.changeNull(selectData.genderDesc),
      'genderDesc2': this.changeNull(selectData.genderDesc2),
      'gunCharacteristic': this.changeNull(selectData.gunCharacteristic),
      'gunProduct': this.changeNull(selectData.gunProduct),
      'gunRegistrationId': this.changeNull(selectData.gunRegistrationId),
      'gunSerialNo': this.changeNull(selectData.gunSerialNo),
      'gunSize': this.changeNull(selectData.gunSize),
      'gunType': this.changeNull(selectData.gunType),
      'hidRcodeDesc': this.changeNull(selectData.hidRcodeDesc),
      'hidRcodeDesc2': this.changeNull(selectData.hidRcodeDesc2),
      'hno': this.changeNull(selectData.hno),
      'hno2': this.changeNull(selectData.hno2),
      'lastName': this.changeNull(selectData.lastName),
      'lastName2': this.changeNull(selectData.lastName2),
      'middleName': this.changeNull(selectData.middleName),
      'middleName2': this.changeNull(selectData.middleName2),
      'provinceDesc': this.changeNull(selectData.provinceDesc),
      'provinceDesc2': this.changeNull(selectData.provinceDesc2),
      'remark': this.changeNull(selectData.remark),
      'soi': this.changeNull(selectData.soi),
      'soi2': this.changeNull(selectData.soi2),
      'thanon': this.changeNull(selectData.thanon),
      'thanon2': this.changeNull(selectData.thanon2),
      'titleDesc': this.changeNull(selectData.titleDesc),
      'titleDesc2': this.changeNull(selectData.titleDesc2),
      'trok': this.changeNull(selectData.trok),
      'trok2': this.changeNull(selectData.trok2),
      'additionalProperties': this.changeNull(selectData.additionalProperties),
      'person': {
        'citizenCardNumber': selectData.citizenCardNumber,
        'fullName': selectData.firstName + ' ' + selectData.lastName,
        'sex': selectData.genderDesc,
        'dateOfBirth': ''
      },
      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime
    };
  }

  getData(): any {
    return this.dopamoipor4;
  }

  formatDate(birthDate: any): any {
    let date = `${birthDate}`;
    const year = date.substring(0, 4);
    const month = date.substring(4, 6);
    const day = date.substring(6, 8);
    if (birthDate === 'null') {
      return '-';
    } else if (birthDate == null) {
      return '-';
    } else if (birthDate == 0) {
      return '-';
    } else {
      const thmonth = new Array('มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
        'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม');
      const d = new Date(month);
      return `${day} ${thmonth[d.getMonth()]} ${year}`;
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

  changeNull(selectData: any) {
    if (selectData == null || selectData == ' ' || selectData == '' || selectData == '0' || selectData == 0) {
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

  /**
   * Getter $dataSet
   * @return {IDxc_Model_Dopa_MoiDopaPor4Licenses}
   */
  public get $dataSet(): IDxc_Model_Dopa_MoiDopaPor4Licenses {
    return this.dataSet;
  }

  /**
   * Setter $dataSet
   * @param {IDxc_Model_Dopa_MoiDopaPor4Licenses} value
   */
  public set $dataSet(value: IDxc_Model_Dopa_MoiDopaPor4Licenses) {
    this.dataSet = value;
  }

}
