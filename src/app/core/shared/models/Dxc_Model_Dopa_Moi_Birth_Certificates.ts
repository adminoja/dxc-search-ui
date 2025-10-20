import * as moment from 'moment';
import { isEmpty } from 'rxjs/operators';

export interface IDxc_Model_Dopa_Moi_Birth_Certificates {
  citizenCardNumber: string;
  addressAlleyDesc: string;
  authorityIssuing: string;
  dateOfBirth: string;
  dateOfNotifying: string;
  fatherName: string;
  fatherNationalityDesc: string;
  fatherPersonalID: string;
  firstName: string;
  gender: string;
  hospitalName: string;
  houseRegistrationAlleyDesc: string;
  houseRegistrationAlleyWayDesc: string;
  houseRegistrationDistrictDesc: string;
  houseRegistrationNo: string;
  houseRegistrationProvinceDesc: string;
  houseRegistrationRoadDesc: string;
  houseRegistrationSubdistrictDesc: string;
  houseRegistrationVillageNo: string;
  lastName: string;
  middleName: string;
  motherName: string;
  motherNationalityDesc: string;
  motherPersonalID: string;
  nationality: string;
  officerName: string;
  personInformAge: string;
  personInformName: string;
  personInformPersonalID: string;
  personInformRelation: string;
  personalID: string;
  placeOfBirth: string;
  placeOfBirthAlleyCode: string;
  placeOfBirthAlleyDesc: string;
  placeOfBirthAlleyWayCode: string;
  placeOfBirthAlleyWayDesc: string;
  placeOfBirthDistrictCode: string;
  placeOfBirthDistrictDesc: string;
  placeOfBirthNo: string;
  placeOfBirthProvinceCode: string;
  placeOfBirthProvinceDesc: string;
  placeOfBirthRoadCode: string;
  placeOfBirthRoadDesc: string;
  placeOfBirthSubdistrictCode: string;
  placeOfBirthSubdistrictDesc: string;
  placeOfBirthVillageNo: string;
  titleDesc: string;

  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  wartermarks: string;
  status: string;
  body: string[];

}
export interface Dxc_Model_Dopa_Moi_Birth_Certificates {
  citizenCardNumber: string;
  addressAlleyDesc: string;
  authorityIssuing: string;
  dateOfBirth: string;
  dateOfNotifying: string;
  fatherName: string;
  fatherNationalityDesc: string;
  fatherPersonalID: string;
  firstName: string;
  gender: string;
  hospitalName: string;
  houseRegistrationAlleyDesc: string;
  houseRegistrationAlleyWayDesc: string;
  houseRegistrationDistrictDesc: string;
  houseRegistrationNo: string;
  houseRegistrationProvinceDesc: string;
  houseRegistrationRoadDesc: string;
  houseRegistrationSubdistrictDesc: string;
  houseRegistrationVillageNo: string;
  lastName: string;
  middleName: string;
  motherName: string;
  motherNationalityDesc: string;
  motherPersonalID: string;
  nationality: string;
  officerName: string;
  personInformAge: string;
  personInformName: string;
  personInformPersonalID: string;
  personInformRelation: string;
  personalID: string;
  placeOfBirth: string;
  placeOfBirthAlleyCode: string;
  placeOfBirthAlleyDesc: string;
  placeOfBirthAlleyWayCode: string;
  placeOfBirthAlleyWayDesc: string;
  placeOfBirthDistrictCode: string;
  placeOfBirthDistrictDesc: string;
  placeOfBirthNo: string;
  placeOfBirthProvinceCode: string;
  placeOfBirthProvinceDesc: string;
  placeOfBirthRoadCode: string;
  placeOfBirthRoadDesc: string;
  placeOfBirthSubdistrictCode: string;
  placeOfBirthSubdistrictDesc: string;
  placeOfBirthVillageNo: string;
  titleDesc: string;

  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  wartermarks: string;
  status: string;
  body: string[];

}

export class Dxc_Model_Moi_Dopa_Birth_Certificates {
  private dataSet: IDxc_Model_Dopa_Moi_Birth_Certificates;
  dopamoibirthcertificates: any;
  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  constructor(selectData: any) {
    moment.locale('th');
    this.dopamoibirthcertificates = {
      // "allCaseTypeId': this.changeNull(selectData.allCaseTypeId),//allCaseTypeId, string, รหัสประเภทหน่วยงานที่ดำเนินการต่อ],
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'authorityIssuing': this.changeNull(selectData.authorityIssuing),
      'dateOfBirth': this.changeNull(selectData.dateOfBirth),
      'dateOfNotifying': this.changeNull(selectData.dateOfNotifying),
      'fatherName': this.changeNull(selectData.fatherName),
      'fatherNationalityDesc': this.changeNull(selectData.fatherNationalityDesc),
      'fatherPersonalID': this.changeNull(selectData.fatherPersonalID),
      'firstName': this.changeNull(selectData.firstName),
      'gender': this.changeNull(selectData.gender),
      'hospitalName': this.changeNull(selectData.hospitalName),
      'houseRegistrationAlleyDesc': this.changeNull(selectData.houseRegistrationAlleyDesc),
      'houseRegistrationAlleyWayDesc': this.changeNull(selectData.houseRegistrationAlleyWayDesc),
      'houseRegistrationDistrictDesc': this.changeNull(selectData.houseRegistrationDistrictDesc),
      'houseRegistrationNo': this.changeNull(selectData.houseRegistrationNo),
      'houseRegistrationProvinceDesc': this.changeNull(selectData.houseRegistrationProvinceDesc),
      'houseRegistrationRoadDesc': this.changeNull(selectData.houseRegistrationRoadDesc),
      'houseRegistrationSubdistrictDesc': this.changeNull(selectData.houseRegistrationSubdistrictDesc),
      'houseRegistrationVillageNo': this.changeNull(selectData.houseRegistrationVillageNo),
      'lastName': this.changeNull(selectData.lastName),
      'middleName': this.changeNull(selectData.middleName),
      'motherName': this.changeNull(selectData.motherName),
      'motherNationalityDesc': this.changeNull(selectData.motherNationalityDesc),
      'motherPersonalID': this.changeNull(selectData.motherPersonalID),
      'nationality': this.changeNull(selectData.nationality),
      'officerName': this.changeNull(selectData.officerName),
      'personInformAge': this.changeNull(selectData.personInformAge),
      'personInformName': this.changeNull(selectData.personInformName),
      'personInformPersonalID': this.changeNull(selectData.personInformPersonalID),
      'personInformRelation': this.changeNull(selectData.personInformRelation),
      'personalID': this.changeNull(selectData.personalID),
      'placeOfBirth': this.changeNull(selectData.placeOfBirth),
      'placeOfBirthAlleyCode': this.changeNull(selectData.placeOfBirthAlleyCode),
      'placeOfBirthAlleyDesc': this.changeNull(selectData.placeOfBirthAlleyDesc),
      'placeOfBirthAlleyWayCode': this.changeNull(selectData.placeOfBirthAlleyWayCode),
      'placeOfBirthAlleyWayDesc': this.changeNull(selectData.placeOfBirthAlleyWayDesc),
      'placeOfBirthDistrictCode': this.changeNull(selectData.placeOfBirthDistrictCode),
      'placeOfBirthDistrictDesc': this.changeNull(selectData.placeOfBirthDistrictDesc),
      'placeOfBirthNo': this.changeNull(selectData.placeOfBirthNo),
      'placeOfBirthProvinceCode': this.changeNull(selectData.placeOfBirthProvinceCode),
      'placeOfBirthProvinceDesc': this.changeNull(selectData.placeOfBirthProvinceDesc),
      'placeOfBirthRoadCode': this.changeNull(selectData.placeOfBirthRoadCode),
      'placeOfBirthRoadDesc': this.changeNull(selectData.placeOfBirthRoadDesc),
      'placeOfBirthSubdistrictCode': this.changeNull(selectData.placeOfBirthSubdistrictCode),
      'placeOfBirthSubdistrictDesc': this.changeNull(selectData.placeOfBirthSubdistrictDesc),
      'placeOfBirthVillageNo': this.changeNull(selectData.placeOfBirthVillageNo),
      'titleDesc': this.changeNull(selectData.titleDesc),
      'person': {
        'citizenCardNumber': selectData.citizenCardNumber,
        'fullName': selectData.firstName + ' ' + selectData.lastName,
        'sex': this.changeNull(selectData.gender),
        'dateOfBirth': this.changeNull(selectData.dateOfBirth)
      },
      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime,
      'reportBarcode': this.reportBarcode
    };
    this.dataSet = this.dopamoibirthcertificates;
  }

  setData(selectData: any) {
    this.dopamoibirthcertificates = {
      // "allCaseTypeId': this.changeNull(selectData.allCaseTypeId),//allCaseTypeId, string, รหัสประเภทหน่วยงานที่ดำเนินการต่อ],
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'authorityIssuing': this.changeNull(selectData.authorityIssuing),
      'dateOfBirth': this.formatDate(selectData.dateOfBirth),
      'dateOfNotifying': this.formatDate(selectData.dateOfNotifying),
      'fatherName': this.changeNull(selectData.fatherName),
      'fatherNationalityDesc': this.changeNull(selectData.fatherNationalityDesc),
      'fatherPersonalID': this.changeNull(selectData.fatherPersonalID),
      'firstName': this.changeNull(selectData.firstName),
      'gender': this.changeNull(selectData.gender),
      'hospitalName': this.changeNull(selectData.hospitalName),
      'houseRegistrationAlleyDesc': this.changeNull(selectData.houseRegistrationAlleyDesc),
      'houseRegistrationAlleyWayDesc': this.changeNull(selectData.houseRegistrationAlleyWayDesc),
      'houseRegistrationDistrictDesc': this.changeNull(selectData.houseRegistrationDistrictDesc),
      'houseRegistrationNo': this.changeNull(selectData.houseRegistrationNo),
      'houseRegistrationProvinceDesc': this.changeNull(selectData.houseRegistrationProvinceDesc),
      'houseRegistrationRoadDesc': this.changeNull(selectData.houseRegistrationRoadDesc),
      'houseRegistrationSubdistrictDesc': this.changeNull(selectData.houseRegistrationSubdistrictDesc),
      'houseRegistrationVillageNo': this.changeNull(selectData.houseRegistrationVillageNo),
      'lastName': this.changeNull(selectData.lastName),
      'middleName': this.changeNull(selectData.middleName),
      'motherName': this.changeNull(selectData.motherName),
      'motherNationalityDesc': this.changeNull(selectData.motherNationalityDesc),
      'motherPersonalID': this.changeNull(selectData.motherPersonalID),
      'nationality': this.changeNull(selectData.nationality),
      'officerName': this.changeNull(selectData.officerName),
      'personInformAge': this.changeNull(selectData.personInformAge),
      'personInformName': this.changeNull(selectData.personInformName),
      'personInformPersonalID': this.changeNull(selectData.personInformPersonalID),
      'personInformRelation': this.changeNull(selectData.personInformRelation),
      'personalID': this.changeNull(selectData.personalID),
      'placeOfBirth': this.changeNull(selectData.placeOfBirth),
      'placeOfBirthAlleyCode': this.changeNull(selectData.placeOfBirthAlleyCode),
      'placeOfBirthAlleyDesc': this.changeNull(selectData.placeOfBirthAlleyDesc),
      'placeOfBirthAlleyWayCode': this.changeNull(selectData.placeOfBirthAlleyWayCode),
      'placeOfBirthAlleyWayDesc': this.changeNull(selectData.placeOfBirthAlleyWayDesc),
      'placeOfBirthDistrictCode': this.changeNull(selectData.placeOfBirthDistrictCode),
      'placeOfBirthDistrictDesc': this.changeNull(selectData.placeOfBirthDistrictDesc),
      'placeOfBirthNo': this.changeNull(selectData.placeOfBirthNo),
      'placeOfBirthProvinceCode': this.changeNull(selectData.placeOfBirthProvinceCode),
      'placeOfBirthProvinceDesc': this.changeNull(selectData.placeOfBirthProvinceDesc),
      'placeOfBirthRoadCode': this.changeNull(selectData.placeOfBirthRoadCode),
      'placeOfBirthRoadDesc': this.changeNull(selectData.placeOfBirthRoadDesc),
      'placeOfBirthSubdistrictCode': this.changeNull(selectData.placeOfBirthSubdistrictCode),
      'placeOfBirthSubdistrictDesc': this.changeNull(selectData.placeOfBirthSubdistrictDesc),
      'placeOfBirthVillageNo': this.changeNull(selectData.placeOfBirthVillageNo),
      'titleDesc': this.changeNull(selectData.titleDesc),
      'person': {
        'citizenCardNumber': selectData.citizenCardNumber,
        'fullName': selectData.firstName + ' ' + selectData.lastName,
        'sex': this.changeNull(selectData.gender),
        'dateOfBirth': this.formatDate(selectData.dateOfBirth)
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
   * @return {IDxc_Model_Dopa_Moi_Birth_Certificates}
   */
  public get $dataSet(): IDxc_Model_Dopa_Moi_Birth_Certificates {
    return this.dataSet;
  }

  /**
   * Setter $dataSet
   * @param {IDxc_Model_Dopa_Moi_Birth_Certificates} value
   */
  public set $dataSet(value: IDxc_Model_Dopa_Moi_Birth_Certificates) {
    this.dataSet = value;
  }


  getData(): any {
    return this.dopamoibirthcertificates;
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
    if (selectData == null || selectData == '0' || selectData == '') {
      return '-';
    } else {
      return selectData;
    }
  }
}
