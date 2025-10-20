import * as moment from 'moment';
import { isEmpty } from 'rxjs/operators';

// tslint:disable-next-line: class-name
export interface IDxc_Model_Dopa_Moi_Death_Certificates {
  addressAlleyDesc: string;
  addressAlleyWayDesc: string;
  addressDistrictDesc: string;
  addressHouseNo: string;
  addressProvinceDesc: string;
  addressRoadDesc: string;
  addressSubdistrictDesc: string;
  addressVillageNo: string;
  age: string;
  authorityIssuing: string;
  causeOfDeath: string;
  citizenCardNumber: string;
  dateOfDeath: string;
  dateOfNotifying: string;
  documentNo: string;
  fatherName: string;
  fatherPersonalID: string;
  firstName: string;
  fullnameAndRank: string;
  genderCode: string;
  genderDesc: string;
  id: string;
  lastName: string;
  marriageStatusCode: string;
  marriageStatusDesc: string;
  middleName: string;
  motherName: string;
  motherPersonalID: string;
  nationalityCode: string;
  nationalityDesc: string;
  placeOfDeathAlleyDesc: string;
  placeOfDeathAlleyWayDesc: string;
  placeOfDeathDistrictDesc: string;
  placeOfDeathHouseNo: string;
  placeOfDeathProvinceDesc: string;
  placeOfDeathRoadDesc: string;
  placeOfDeathSubdistrictDesc: string;
  placeOfDeathVillageNo: string;
  titleCode: string;
  titlePrint: string;

  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  wartermarks: string;
  status: string;
  body: string[];
}


// tslint:disable-next-line: class-name
export class Dxc_Model_Dopa_Moi_Death_Certificates {
  private dataSet: IDxc_Model_Dopa_Moi_Death_Certificates;
  dopamoideathcertificates: any;
  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  constructor(selectData: any) {
    this.dopamoideathcertificates = {
      'addressAlleyDesc': this.changeNull(selectData.addressAlleyDesc),
      'addressAlleyWayDesc': this.changeNull(selectData.addressAlleyWayDesc),
      'addressDistrictDesc': this.changeNull(selectData.addressDistrictDesc),
      'addressHouseNo': this.changeNull(selectData.addressHouseNo),
      'addressProvinceDesc': this.changeNull(selectData.addressProvinceDesc),
      'addressRoadDesc': this.changeNull(selectData.addressRoadDesc),
      'addressSubdistrictDesc': this.changeNull(selectData.addressSubdistrictDesc),
      'addressVillageNo': this.changeNull(selectData.addressVillageNo),
      'age': this.changeNull(selectData.age),
      'authorityIssuing': this.changeNull(selectData.authorityIssuing),
      'causeOfDeath': this.changeNull(selectData.causeOfDeath),
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'dateOfDeath': this.changeNull(selectData.dateOfDeath),
      'dateOfNotifying': this.changeNull(selectData.dateOfNotifying),
      'documentNo': this.changeNull(selectData.documentNo),
      'fatherName': this.changeNull(selectData.fatherName),
      'fatherPersonalID': this.changeNull(selectData.fatherPersonalID),
      'firstName': this.changeNull(selectData.firstName),
      'fullnameAndRank': this.changeNull(selectData.fullnameAndRank),
      'genderCode': this.changeNull(selectData.genderCode),
      'genderDesc': this.changeNull(selectData.genderDesc),
      'id': this.changeNull(selectData.id),
      'lastName': this.changeNull(selectData.lastName),
      'marriageStatusCode': this.changeNull(selectData.marriageStatusCode),
      'marriageStatusDesc': this.changeNull(selectData.marriageStatusDesc),
      'middleName': this.changeNull(selectData.middleName),
      'motherName': this.changeNull(selectData.motherName),
      'motherPersonalID': this.changeNull(selectData.motherPersonalID),
      'nationalityCode': this.changeNull(selectData.nationalityCode),
      'nationalityDesc': this.changeNull(selectData.nationalityDesc),
      'placeOfDeathAlleyDesc': this.changeNull(selectData.placeOfDeathAlleyDesc),
      'placeOfDeathAlleyWayDesc': this.changeNull(selectData.placeOfDeathAlleyWayDesc),
      'placeOfDeathDistrictDesc': this.changeNull(selectData.placeOfDeathDistrictDesc),
      'placeOfDeathHouseNo': this.changeNull(selectData.placeOfDeathHouseNo),
      'placeOfDeathProvinceDesc': this.changeNull(selectData.placeOfDeathProvinceDesc),
      'placeOfDeathRoadDesc': this.changeNull(selectData.placeOfDeathRoadDesc),
      'placeOfDeathSubdistrictDesc': this.changeNull(selectData.placeOfDeathSubdistrictDesc),
      'placeOfDeathVillageNo': this.changeNull(selectData.placeOfDeathVillageNo),
      'titleCode': this.changeNull(selectData.titleCode),
      'titlePrint': this.changeNull(selectData.titlePrint),
      'person': {
        'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
        'fullName': this.changeNull(selectData.firstName) + ' ' + this.changeNull(selectData.lastName),
        'sex': this.changeNull(selectData.genderDesc),
        'dateOfBirth': selectData.dateOfBirth
      },
      'wartermarks': this.loadReportDetail(),
      'reportName' : this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime
    };
    this.dataSet = this.dopamoideathcertificates;
  }

  getData(): any {
    return this.dopamoideathcertificates;
  }

  formatDate(dateOfBirth: string): string {
    const date = new Date(dateOfBirth);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear() + 543;
    if (dateOfBirth === 'null') {
      return '-';
    } else {
      return `${day}/${month}/${year}`;
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

  /**
   * Getter $dataSet
   * @return {Dxc_Model_Dopa_Moi_Death_Certificates}
   */
  public get $dataSet(): IDxc_Model_Dopa_Moi_Death_Certificates {
    return this.dataSet;
  }

  /**
   * Setter $dataSet
   * @param {Dxc_Model_Dopa_Moi_Death_Certificates} value
   */
  public set $dataSet(value: IDxc_Model_Dopa_Moi_Death_Certificates) {
    this.dataSet = value;
  }

}
