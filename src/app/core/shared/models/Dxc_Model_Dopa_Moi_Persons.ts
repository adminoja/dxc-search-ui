import * as moment from 'moment';
// tslint:disable-next-line:class-name
export interface IDxc_Model_Dopa_Moi_Persons {
  citizenCardNumber: string;
  age: string;
  dateOfBirth: string;
  dateOfMoveIn: string;
  fatherName: string;
  fatherNationalityCode: string;
  fatherNationalityDesc: string;
  fatherPersonalID: string;
  firstName: string;
  fullnameAndRank: string;
  genderCode: string;
  genderDesc: string;
  lastName: string;
  middleName: string;
  motherName: string;
  motherNationalityCode: string;
  motherNationalityDesc: string;
  motherPersonalID: string;
  nationalityCode: string;
  nationalityDesc: string;
  ownerStatusDesc: string;
  statusOfPersonCode: string;
  statusOfPersonDesc: string;
  titleCode: string;
  titleDesc: string;
  titleName: string;
  titleSex: string;

  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  wartermarks: string;
  status: string;
  body: string[];
}

// tslint:disable-next-line:class-name
export class Dxc_Model_Dopa_Moi_Persons {
  dopamoipersons: any;
  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  wartermarks: string;
  private dataSet: IDxc_Model_Dopa_Moi_Persons;
  constructor(selectData: any) {
   this.dopamoipersons = {
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'age': this.changeNull(selectData.age),
      'dateOfBirth': this.changeNull(selectData.dateOfBirth),
      'dateOfMoveIn': this.changeNull(selectData.dateOfMoveIn),
      'fatherName': this.changeNull(selectData.fatherName),
      'fatherNationalityCode': this.changeNull(selectData.fatherNationalityCode),
      'fatherNationalityDesc': this.changeNull(selectData.fatherNationalityDesc),
      'fatherPersonalID': this.changeNull(selectData.fatherPersonalID),
      'firstName': this.changeNull(selectData.firstName),
      'fullnameAndRank': this.changeNull(selectData.fullnameAndRank),
      'genderCode': this.changeNull(selectData.genderCode),
      'genderDesc': this.changeNull(selectData.genderDesc),
      'lastName': this.changeNull(selectData.lastName),
      'middleName': this.changeNull(selectData.middleName),
      'motherName': this.changeNull(selectData.motherName),
      'motherNationalityCode': this.changeNull(selectData.motherNationalityCode),
      'motherNationalityDesc': this.changeNull(selectData.motherNationalityDesc),
      'motherPersonalID': this.changeNull(selectData.motherPersonalID),
      'nationalityCode': this.changeNull(selectData.nationalityCode),
      'nationalityDesc': this.changeNull(selectData.nationalityDesc),
      'ownerStatusDesc': this.changeNull(selectData.ownerStatusDesc),
      'statusOfPersonCode': this.changeNull(selectData.statusOfPersonCode),
      'statusOfPersonDesc': this.changeNull(selectData.statusOfPersonDesc),
      'titleCode': this.changeNull(selectData.titleCode),
      'titleDesc': this.changeNull(selectData.titleDesc),
      'titleName': this.changeNull(selectData.titleName),
      'titleSex': this.changeNull(selectData.titleSex),
      'person': {
        'citizenCardNumber': selectData.citizenCardNumber,
        'fullName': selectData.firstName + ' ' + selectData.lastName,
        'sex': selectData.genderDesc,
        'dateOfBirth': this.changeNull(selectData.dateOfBirth)
      },
      'wartermarks': this.loadReportDetail(),
      'reportName' : this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime

    };
    this.dataSet = this.dopamoipersons;

  }

  setData(selectData: any) {
    this.dopamoipersons = {
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'age': this.changeNull(selectData.age),
      'dateOfBirth': this.formatDate(selectData.dateOfBirth),
      'dateOfMoveIn': this.formatDate(selectData.dateOfMoveIn),
      'fatherName': this.changeNull(selectData.fatherName),
      'fatherNationalityCode': this.changeNull(selectData.fatherNationalityCode),
      'fatherNationalityDesc': this.changeNull(selectData.fatherNationalityDesc),
      'fatherPersonalID': this.changeNull(selectData.fatherPersonalID),
      'firstName': this.changeNull(selectData.firstName),
      'fullnameAndRank': this.changeNull(selectData.fullnameAndRank),
      'genderCode': this.changeNull(selectData.genderCode),
      'genderDesc': this.changeNull(selectData.genderDesc),
      'lastName': this.changeNull(selectData.lastName),
      'middleName': this.changeNull(selectData.middleName),
      'motherName': this.changeNull(selectData.motherName),
      'motherNationalityCode': this.changeNull(selectData.motherNationalityCode),
      'motherNationalityDesc': this.changeNull(selectData.motherNationalityDesc),
      'motherPersonalID': this.changeNull(selectData.motherPersonalID),
      'nationalityCode': this.changeNull(selectData.nationalityCode),
      'nationalityDesc': this.changeNull(selectData.nationalityDesc),
      'ownerStatusDesc': this.changeNull(selectData.ownerStatusDesc),
      'statusOfPersonCode': this.changeNull(selectData.statusOfPersonCode),
      'statusOfPersonDesc': this.changeNull(selectData.statusOfPersonDesc),
      'titleCode': this.changeNull(selectData.titleCode),
      'titleDesc': this.changeNull(selectData.titleDesc),
      'titleName': this.changeNull(selectData.titleName),
      'titleSex': this.changeNull(selectData.titleSex),
      'person': {
        'citizenCardNumber': selectData.citizenCardNumber,
        'fullName': selectData.firstName + ' ' + selectData.lastName,
        'sex': selectData.genderDesc,
        'dateOfBirth': this.changeNull(this.formatDate(selectData.dateOfBirth))
      },
      'wartermarks': this.loadReportDetail(),
      'reportName' : this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime

    };
  }

  getData(): any {
    return this.dopamoipersons;
  }

  // เช็ควันที่
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
  changeNull(selectData: string) {
    if (selectData == null || selectData == '0') {
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
   * @return {IDxc_Model_Dopa_Moi_Persons}
   */
  public get $dataSet(): IDxc_Model_Dopa_Moi_Persons {
    return this.dataSet;
  }

  /**
   * Setter $dataSet
   * @param {IDxc_Model_Dopa_Moi_Persons} value
   */
  public set $dataSet(value: IDxc_Model_Dopa_Moi_Persons) {
    this.dataSet = value;
  }

}
