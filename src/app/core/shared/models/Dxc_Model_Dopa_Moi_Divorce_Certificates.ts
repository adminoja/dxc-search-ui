import * as moment from 'moment';
import { isEmpty } from 'rxjs/operators';

// tslint:disable-next-line: class-name
export interface IDxc_Model_Dopa_Moi_Divorce_Certificates {
  citizenCardNumber: string;
  divorceDate: string;
  divorceID: string;
  divorcePlace: string;
  divorcePlaceDesc: string;
  divorcePlaceProvince: string;
  divorceTime: string;
  divorceType: string;
  femaleAge: string;
  femaleDateOfBirth: string;
  femaleFirstName: string;
  femaleFullnameAndRank: string;
  femaleLastName: string;
  femaleMiddleName: string;
  femaleNationalityCode: string;
  femaleNationalityDesc: string;
  femaleOtherDocID: string;
  femalePID: string;
  femaleTitleCode: string;
  femaleTitleDesc: string;
  id: string;
  maleAge: string;
  maleDateOfBirth: string;
  maleFirstName: string;
  maleFullnameAndRank: string;
  maleLastName: string;
  maleMiddleName: string;
  maleNationalityCode: string;
  maleNationalityDesc: string;
  maleOtherDocID: string;
  malePID: string;
  maleTitleCode: string;
  maleTitleDesc: string;
  marryDate: string;
  marryID: string;
  marryPlace: string;
  marryPlaceDesc: string;
  marryPlaceProvince: string;
  marryTime: string;
  marryType: string;
}

// tslint:disable-next-line: class-name
export interface Dxc_Model_Dopa_Moi_Divorce_Certificates {

  citizenCardNumber: string;
  divorceDate: string;
  divorceID: string;
  divorcePlace: string;
  divorcePlaceDesc: string;
  divorcePlaceProvince: string;
  divorceTime: string;
  divorceType: string;
  femaleAge: string;
  femaleDateOfBirth: string;
  femaleFirstName: string;
  femaleFullnameAndRank: string;
  femaleLastName: string;
  femaleMiddleName: string;
  femaleNationalityCode: string;
  femaleNationalityDesc: string;
  femaleOtherDocID: string;
  femalePID: string;
  femaleTitleCode: string;
  femaleTitleDesc: string;
  id: string;
  maleAge: string;
  maleDateOfBirth: string;
  maleFirstName: string;
  maleFullnameAndRank: string;
  maleLastName: string;
  maleMiddleName: string;
  maleNationalityCode: string;
  maleNationalityDesc: string;
  maleOtherDocID: string;
  malePID: string;
  maleTitleCode: string;
  maleTitleDesc: string;
  marryDate: string;
  marryID: string;
  marryPlace: string;
  marryPlaceDesc: string;
  marryPlaceProvince: string;
  marryTime: string;
  marryType: string;

  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  wartermarks: string;
  status: string;
  body: string[];

}
// tslint:disable-next-line: class-name
export class Dxc_Model_Dopa_Moi_Divorce_Certificates {
  dopamoidivorcecertificates: any;
  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  private dataSet: Dxc_Model_Dopa_Moi_Divorce_Certificates;
  constructor(selectData: any) {
    console.log('TESTTTTTTTTTTTT' + selectData.dateOfBirth);

    this.dopamoidivorcecertificates = {
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'divorceDate': this.changeNull(selectData.divorceDate),
      'divorceID': this.changeNull(selectData.divorceID),
      'divorcePlace': this.changeNull(selectData.divorcePlace),
      'divorcePlaceDesc': this.changeNull(selectData.divorcePlaceDesc),
      'divorcePlaceProvince': this.changeNull(selectData.divorcePlaceProvince),
      'divorceTime': this.changeNull(selectData.divorceTime),
      'divorceType': this.changeNull(selectData.divorceType),
      'femaleAge': this.changeNull(selectData.femaleAge),
      'femaleDateOfBirth': this.changeNull(selectData.femaleDateOfBirth),
      'femaleFirstName': this.changeNull(selectData.femaleFirstName),
      'femaleFullnameAndRank': this.changeNull(selectData.femaleFullnameAndRank),
      'femaleLastName': this.changeNull(selectData.femaleLastName),
      'femaleMiddleName': this.changeNull(selectData.femaleMiddleName),
      'femaleNationalityCode': this.changeNull(selectData.femaleNationalityCode),
      'femaleNationalityDesc': this.changeNull(selectData.femaleNationalityDesc),
      'femaleOtherDocID': this.changeNull(selectData.femaleOtherDocID),
      'femalePID': this.changeNull(selectData.femalePID),
      'femaleTitleCode': this.changeNull(selectData.femaleTitleCode),
      'femaleTitleDesc': this.changeNull(selectData.femaleTitleDesc),
      'id': this.changeNull(selectData.id),
      'maleAge': this.changeNull(selectData.maleAge),
      'maleDateOfBirth': this.changeNull(selectData.maleDateOfBirth),
      'maleFirstName': this.changeNull(selectData.maleFirstName),
      'maleFullnameAndRank': this.changeNull(selectData.maleFullnameAndRank),
      'maleLastName': this.changeNull(selectData.maleLastName),
      'maleMiddleName': this.changeNull(selectData.maleMiddleName),
      'maleNationalityCode': this.changeNull(selectData.maleNationalityCode),
      'maleNationalityDesc': this.changeNull(selectData.maleNationalityDesc),
      'maleOtherDocID': this.changeNull(selectData.maleOtherDocID),
      'malePID': this.changeNull(selectData.malePID),
      'maleTitleCode': this.changeNull(selectData.maleTitleCode),
      'maleTitleDesc': this.changeNull(selectData.maleTitleDesc),
      'marryDate': this.changeNull(selectData.marryDate),
      'marryID': this.changeNull(selectData.marryID),
      'marryPlace': this.changeNull(selectData.marryPlace),
      'marryPlaceDesc': this.changeNull(selectData.marryPlaceDesc),
      'marryPlaceProvince': this.changeNull(selectData.marryPlaceProvince),
      'marryTime': this.changeNull(selectData.marryTime),
      'marryType': this.changeNull(selectData.marryType),
      'person': {
        'citizenCardNumber': selectData.citizenCardNumber,
        'fullName': '',
        'sex': '',
        'divorceDate': ''
      },
      'wartermarks': this.loadReportDetail(),
      'reportName' : this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime
    };
    this.dataSet = this.dopamoidivorcecertificates;
  }
  /**
   * Getter $dataSet
   * @return {Dxc_Model_Dopa_Moi_Divorce_Certificates}
   */
  public get $dataSet(): Dxc_Model_Dopa_Moi_Divorce_Certificates {
    return this.dataSet;
  }

  /**
   * Setter $dataSet
   * @param {Dxc_Model_Dopa_Moi_Divorce_Certificates} value
   */
  public set $dataSet(value: Dxc_Model_Dopa_Moi_Divorce_Certificates) {
    this.dataSet = value;
  }

  setData(selectData: any) {
    this.dopamoidivorcecertificates = {
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'divorceDate': this.formatDate(selectData.divorceDate),
      'divorceID': this.changeNull(selectData.divorceID),
      'divorcePlace': this.changeNull(selectData.divorcePlace),
      'divorcePlaceDesc': this.changeNull(selectData.divorcePlaceDesc),
      'divorcePlaceProvince': this.changeNull(selectData.divorcePlaceProvince),
      'divorceTime': this.changeNull(moment(selectData.divorceTime).format('LT')),
      'divorceType': this.changeNull(selectData.divorceType),
      'femaleAge': this.changeNull(selectData.femaleAge),
      'femaleDateOfBirth': this.changeNull(this.formatDate(selectData.femaleDateOfBirth)),
      'femaleFirstName': this.changeNull(selectData.femaleFirstName),
      'femaleFullnameAndRank': this.changeNull(selectData.femaleFullnameAndRank),
      'femaleLastName': this.changeNull(selectData.femaleLastName),
      'femaleMiddleName': this.changeNull(selectData.femaleMiddleName),
      'femaleNationalityCode': this.changeNull(selectData.femaleNationalityCode),
      'femaleNationalityDesc': this.changeNull(selectData.femaleNationalityDesc),
      'femaleOtherDocID': this.changeNull(selectData.femaleOtherDocID),
      'femalePID': this.changeNull(selectData.femalePID),
      'femaleTitleCode': this.changeNull(selectData.femaleTitleCode),
      'femaleTitleDesc': this.changeNull(selectData.femaleTitleDesc),
      'id': this.changeNull(selectData.id),
      'maleAge': this.changeNull(selectData.maleAge),
      'maleDateOfBirth': this.changeNull(this.formatDate(selectData.maleDateOfBirth)),
      'maleFirstName': this.changeNull(selectData.maleFirstName),
      'maleFullnameAndRank': this.changeNull(selectData.maleFullnameAndRank),
      'maleLastName': this.changeNull(selectData.maleLastName),
      'maleMiddleName': this.changeNull(selectData.maleMiddleName),
      'maleNationalityCode': this.changeNull(selectData.maleNationalityCode),
      'maleNationalityDesc': this.changeNull(selectData.maleNationalityDesc),
      'maleOtherDocID': this.changeNull(selectData.maleOtherDocID),
      'malePID': this.changeNull(selectData.malePID),
      'maleTitleCode': this.changeNull(selectData.maleTitleCode),
      'maleTitleDesc': this.changeNull(selectData.maleTitleDesc),
      'marryDate': this.formatDate(selectData.marryDate),
      'marryID': this.changeNull(selectData.marryID),
      'marryPlace': this.changeNull(selectData.marryPlace),
      'marryPlaceDesc': this.changeNull(selectData.marryPlaceDesc),
      'marryPlaceProvince': this.changeNull(selectData.marryPlaceProvince),
      'marryTime': this.changeNull(moment(selectData.marryTime).format('LT')),
      'marryType': this.changeNull(selectData.marryType),
      'person': {
        'citizenCardNumber': selectData.citizenCardNumber,
        'fullName': '',
        'sex': '',
        'divorceDate': ''
      },
      'wartermarks': this.loadReportDetail(),
      'reportName' : this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime
    };
  }

  getData(): any {
    return this.dopamoidivorcecertificates;
  }

  formatDate(birthDate: string): string {
    let date = `${birthDate}`;
    const year = date.substring(0, 4);
    const month = date.substring(4, 6);
    const day = date.substring(6, 8);
    if (birthDate === 'null') {
      return '-';
    } else if (birthDate == null) {
      return '-';
    } else {
      const thmonth = new Array('มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
        'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม');
        const d = new Date(month);
      return `${day} ${thmonth[d.getMonth()]} ${year}`;
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

  changeNull(selectData: any) {
    if (selectData == null) {
      return '-';
    } else if (selectData == "" || selectData == 0) {
      return '-';
    } else if (selectData == " ") {
      return '-';
    } else {
      return selectData;
    }
  }

  fomateTime(time: any) {
    let t = `${time}`;
    const hour = t.substring(0, 2);
    const minute = t.substring(2, 4);
    const second = t.substring(4, 6);
    if (time === 'null' && time === '0') {
      return '-';
    } else if (time === null && time === 0) {
      return '-';
    } else if (time === 0) {
      return '-';
    } else {
      return `${hour}.${minute}.${second}`;
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
}
