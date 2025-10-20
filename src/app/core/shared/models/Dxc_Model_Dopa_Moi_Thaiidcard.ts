import * as moment from 'moment';
import { isEmpty } from 'rxjs/operators';

export interface IDxc_Model_Moi_Dopa_ThaiIdcard {

  addressAlleyDesc: string;
  addressAlleyWayDesc: string;
  addressDistrictDesc: string;
  addressHouseNo: string;
  addressProvinceDesc: string;
  addressRoadDesc: string;
  addressSubdistrictDesc: string;
  addressVillageNo: number;
  birthDate: string;
  blood: string;
  cancelCause: string;
  citizenCardNumber: string;
  expireDate: string;
  foreignCountry: string;
  foreignCountryCity: string;
  id: string;
  issueDate: string;
  issueTime: number;
  nameENFirstName: string;
  nameENLastName: string;
  nameENMiddleName: string;
  nameENTitle: string;
  nameTHFirstName: string;
  nameTHLastName: string;
  nameTHMiddleName: string;
  nameTHTitle: string;
  religion: string;
  religionOther: string;
  sex: string;
  phoneNumber: string;

  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  wartermarks: string;
  status: string;
  body: string[];
}

export interface Dxc_Model_Moi_Dopa_ThaiIdcard {
  addressAlleyDesc: string;
  addressAlleyWayDesc: string;
  addressDistrictDesc: string;
  addressHouseNo: string;
  addressProvinceDesc: string;
  addressRoadDesc: string;
  addressSubdistrictDesc: string;
  addressVillageNo: number;
  birthDate: string;
  blood: string;
  cancelCause: string;
  citizenCardNumber: string;
  expireDate: string;
  foreignCountry: string;
  foreignCountryCity: string;
  id: string;
  issueDate: string;
  issueTime: number;
  nameENFirstName: string;
  nameENLastName: string;
  nameENMiddleName: string;
  nameENTitle: string;
  nameTHFirstName: string;
  nameTHLastName: string;
  nameTHMiddleName: string;
  nameTHTitle: string;
  religion: string;
  religionOther: string;
  sex: string;
  phoneNumber: string;

  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  wartermarks: string;
  status: string;
  body: string[];

}
export class Dxc_Model_Moi_Dopa_ThaiIdcard {
  dopamoithaiidcard: any;
  private dataSet: IDxc_Model_Moi_Dopa_ThaiIdcard;
  constructor(selectData: any) {
    moment.locale('th');
    console.log('TESTTTTTTTTTTTT' + selectData.addressAlleyDesc);

    this.dopamoithaiidcard = {
      'addressAlleyDesc': this.changeNull(selectData.addressAlleyDesc),
      'addressAlleyWayDesc': this.changeNull(selectData.addressAlleyWayDesc),
      'addressDistrictDesc': this.changeNull(selectData.addressDistrictDesc),
      'addressHouseNo': this.changeNull(selectData.addressHouseNo),
      'addressProvinceDesc': this.changeNull(selectData.addressProvinceDesc),
      'addressRoadDesc': this.changeNull(selectData.addressRoadDesc),
      'addressSubdistrictDesc': this.changeNull(selectData.addressSubdistrictDesc),
      'addressVillageNo': this.changeNull(selectData.addressVillageNo),
      'birthDate': this.changeNull(selectData.birthDate),
      'blood': this.changeNull(selectData.blood),
      'cancelCause': this.changeNull(selectData.cancelCause),
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'expireDate': this.changeNull(selectData.expireDate),
      'foreignCountry': this.changeNull(selectData.foreignCountry),
      'foreignCountryCity': this.changeNull(selectData.foreignCountryCity),
      'id': this.changeNull(selectData.id),
      'issueDate': this.changeNull(selectData.issueDate),
      // 'issueTime': this.changeNull(selectData.issueTime),
      'issueTime': moment(new Date(selectData.issueTime).toString()).format('LT').toString(),
      'nameENFirstName': this.changeNull(selectData.nameENFirstName),
      'nameENLastName': this.changeNull(selectData.nameENLastName),
      'nameENMiddleName': this.changeNull(selectData.nameENMiddleName),
      'nameENTitle': this.changeNull(selectData.nameENTitle),
      'nameTHFirstName': this.changeNull(selectData.nameTHFirstName),
      'nameTHLastName': this.changeNull(selectData.nameTHLastName),
      'nameTHMiddleName': this.changeNull(selectData.nameTHMiddleName),
      'nameTHTitle': this.changeNull(selectData.nameTHTitle),
      'religion': this.changeNull(selectData.religion),
      'religionOther': this.changeNull(selectData.religionOther),
      'sex': this.changeNull(selectData.sex),
      'phoneNumber': this.changeNull(selectData.phoneNumber),
      'person': {
        'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
        'fullName': this.changeNull(selectData.nameTHFirstName) + ' ' + this.changeNull(selectData.nameTHLastName),
        'sex': this.changeNull(selectData.sex),
        'dateOfBirth': this.changeNull(selectData.birthDate),
    },
    'wartermarks': this.loadReportDetail(),
    'reportName' : this.reportName,
    'reportOfDate': this.reportOfDate,
    'reportOfTime': this.reportOfTime
    };
    this.dataSet = this.dopamoithaiidcard;
  }

  setData(selectData: any) {
    this.dopamoithaiidcard = {
      'addressAlleyDesc': this.changeNull(selectData.addressAlleyDesc),
      'addressAlleyWayDesc': this.changeNull(selectData.addressAlleyWayDesc),
      'addressDistrictDesc': this.changeNull(selectData.addressDistrictDesc),
      'addressHouseNo': this.changeNull(selectData.addressHouseNo),
      'addressProvinceDesc': this.changeNull(selectData.addressProvinceDesc),
      'addressRoadDesc': this.changeNull(selectData.addressRoadDesc),
      'addressSubdistrictDesc': this.changeNull(selectData.addressSubdistrictDesc),
      'addressVillageNo': this.changeNull(selectData.addressVillageNo),
      'birthDate': this.changeNull(selectData.birthDate),
      'blood': this.changeNull(selectData.blood),
      'cancelCause': this.changeNull(selectData.cancelCause),
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'expireDate': this.formatDate(selectData.expireDate),
      'foreignCountry': this.changeNull(selectData.foreignCountry),
      'foreignCountryCity': this.changeNull(selectData.foreignCountryCity),
      'id': this.changeNull(selectData.id),
      'issueDate': this.formatDate(selectData.issueDate),
      'issueTime': this.changeNull(selectData.issueTime),
      // 'issueTime': moment(new Date(selectData.issueTime).toString()).format('LT').toString(),
      'nameENFirstName': this.changeNull(selectData.nameENFirstName),
      'nameENLastName': this.changeNull(selectData.nameENLastName),
      'nameENMiddleName': this.changeNull(selectData.nameENMiddleName),
      'nameENTitle': this.changeNull(selectData.nameENTitle),
      'nameTHFirstName': this.changeNull(selectData.nameTHFirstName),
      'nameTHLastName': this.changeNull(selectData.nameTHLastName),
      'nameTHMiddleName': this.changeNull(selectData.nameTHMiddleName),
      'nameTHTitle': this.changeNull(selectData.nameTHTitle),
      'religion': this.changeNull(selectData.religion),
      'religionOther': this.changeNull(selectData.religionOther),
      'sex': this.changeNull(selectData.sex),
      'phoneNumber': this.changeNull(selectData.phoneNumber),
      'person': {
        'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
        'fullName': this.changeNull(selectData.nameTHFirstName) + ' ' + this.changeNull(selectData.nameTHLastName),
        'sex': this.changeNull(selectData.sex),
        'dateOfBirth': this.formatDate(selectData.birthDate),
    },
    'wartermarks': this.loadReportDetail(),
    'reportName' : this.reportName,
    'reportOfDate': this.reportOfDate,
    'reportOfTime': this.reportOfTime
    };
  }

  getData(): any {
    return this.dopamoithaiidcard;
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
    } else if (selectData == "") {
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
   * @return {IDxc_Model_Moi_Dopa_ThaiIdcard}
   */
  public get $dataSet(): IDxc_Model_Moi_Dopa_ThaiIdcard {
    return this.dataSet;
  }

  /**
   * Setter $dataSet
   * @param {IDxc_Model_Moi_Dopa_ThaiIdcard} value
   */
  public set $dataSet(value: IDxc_Model_Moi_Dopa_ThaiIdcard) {
    this.dataSet = value;
  }


}
