import * as moment from 'moment';

export interface IPerson {
  citizenCardNumber: string;
  fullName: string;
  sex: string;
  dateOfBirth: Date;
}
export interface IDxc_Model_Dopa_MoiDopaPersonChangelastname {

    citizenCardNumber: string;
    docDate: string;
    docPlace: string;
    docPlaceDesc: string;
    docPlaceProvince: string;
    docID: number;
    newName: string;
    pid: number;
    titleCode: number;
    titleDesc: string;
    firstName: string;
    middleName: string;
    lastName: string;
    genderCode: number;
    genderDesc: string;
    dateOfBirth: number;
    age: number;
    nationalityCode: number;
    nationalityDesc: string;
    fullNameAndRank: string;
    hno: string;
    hrcode: string;
    hrcodeDesc: string;
    thanonDesc: string;
    trokDesc: string;
    soiDesc: string;
    districtDesc: string;
    amphorDesc: string;
    provinceDesc: string;
    requestID: number;
    requestYear: number;
    requestDate: number;
    fatherFirstName: string;
    motherFirstName: string;
    total: number;
    causeOfChange: string;

    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    reportBarcode: string;
    wartermarks: string;
    status: string;
    body: string[];

}

export class Dxc_Model_Dopa_MoiDopaPersonChangelastname {
  private dataSet: IDxc_Model_Dopa_MoiDopaPersonChangelastname;
  personchangelastnameprimary: any;
  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  constructor(selectData: any) {

    this.personchangelastnameprimary = {
        'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
        'docDate': this.changeNull(selectData.docDate),
        'docPlace': this.changeNull(selectData.docPlace),
        'docPlaceDesc': this.changeNull(selectData.docPlaceDesc),
        'docPlaceProvince': this.changeNull(selectData.docPlaceProvince),
        'docID': this.changeNull(selectData.docID),
        'newName': this.changeNull(selectData.newName),
        'pid': this.changeNull(selectData.pid),
        'titleCode': this.changeNull(selectData.titleCode),
        'titleDesc': this.changeNull(selectData.titleDesc),
        'firstName': this.changeNull(selectData.firstName),
        'middleName': this.changeNull(selectData.middleName),
        'lastName': this.changeNull(selectData.lastName),
        'genderCode': this.changeNull(selectData.genderCode),
        'genderDesc': this.changeNull(selectData.genderDesc),
        'dateOfBirth': this.changeNull(selectData.dateOfBirth),
        'age': this.changeNull(selectData.age),
        'nationalityCode': this.changeNull(selectData.nationalityCode),
        'nationalityDesc': this.changeNull(selectData.nationalityDesc),
        'fullNameAndRank': this.changeNull(selectData.fullNameAndRank),
        'hno': this.changeNull(selectData.hno),
        'hrcode': this.changeNull(selectData.hrcode),
        'hrcodeDesc': this.changeNull(selectData.hrcodeDesc),
        'thanonDesc': this.changeNull(selectData.thanonDesc),
        'trokDesc': this.changeNull(selectData.trokDesc),
        'soiDesc': this.changeNull(selectData.soiDesc),
        'districtDesc': this.changeNull(selectData.districtDesc),
        'amphorDesc': this.changeNull(selectData.amphorDesc),
        'provinceDesc': this.changeNull(selectData.provinceDesc),
        'requestID': this.changeNull(selectData.requestID),
        'requestYear': this.changeNull(selectData.requestYear),
        'requestDate': this.changeNull(selectData.requestDate),
        'fatherFirstName': this.changeNull(selectData.fatherFirstName),
        'motherFirstName': this.changeNull(selectData.motherFirstName),
        'total': this.changeNull(selectData.total),
        'causeOfChange': this.changeNull(selectData.causeOfChange),
        'person': {
            'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
            'fullName': this.changeNull(selectData.firstName) + ' ' + this.changeNull(selectData.lastName),
            'sex': this.changeNull(selectData.genderDesc),
            'dateOfBirth': this.changeNull(selectData.dateOfBirth)
        },
        'wartermarks': this.loadReportDetail(),
        'reportName' : this.reportName,
        'reportOfDate': this.reportOfDate,
        'reportOfTime': this.reportOfTime

    };
    this.dataSet = this.personchangelastnameprimary;
  }

  setData(selectData: any) {
    this.personchangelastnameprimary = {
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'docDate': this.formatDate(selectData.docDate),
      'docPlace': this.changeNull(selectData.docPlace),
      'docPlaceDesc': this.changeNull(selectData.docPlaceDesc),
      'docPlaceProvince': this.changeNull(selectData.docPlaceProvince),
      'docID': this.changeNull(selectData.docID),
      'newName': this.changeNull(selectData.newName),
      'pid': this.changeNull(selectData.pid),
      'titleCode': this.changeNull(selectData.titleCode),
      'titleDesc': this.changeNull(selectData.titleDesc),
      'firstName': this.changeNull(selectData.firstName),
      'middleName': this.changeNull(selectData.middleName),
      'lastName': this.changeNull(selectData.lastName),
      'genderCode': this.changeNull(selectData.genderCode),
      'genderDesc': this.changeNull(selectData.genderDesc),
      'dateOfBirth': this.formatDate(selectData.dateOfBirth),
      'age': this.changeNull(selectData.age),
      'nationalityCode': this.changeNull(selectData.nationalityCode),
      'nationalityDesc': this.changeNull(selectData.nationalityDesc),
      'fullNameAndRank': this.changeNull(selectData.fullNameAndRank),
      'hno': this.changeNull(selectData.hno),
      'hrcode': this.changeNull(selectData.hrcode),
      'hrcodeDesc': this.changeNull(selectData.hrcodeDesc),
      'thanonDesc': this.changeNull(selectData.thanonDesc),
      'trokDesc': this.changeNull(selectData.trokDesc),
      'soiDesc': this.changeNull(selectData.soiDesc),
      'districtDesc': this.changeNull(selectData.districtDesc),
      'amphorDesc': this.changeNull(selectData.amphorDesc),
      'provinceDesc': this.changeNull(selectData.provinceDesc),
      'requestID': this.changeNull(selectData.requestID),
      'requestYear': this.changeNull(selectData.requestYear),
      'requestDate': this.formatDate(selectData.requestDate),
      'fatherFirstName': this.changeNull(selectData.fatherFirstName),
      'motherFirstName': this.changeNull(selectData.motherFirstName),
      'total': this.changeNull(selectData.total),
      'causeOfChange': this.changeNull(selectData.causeOfChange),
      'person': {
          'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
          'fullName': this.changeNull(selectData.firstName) + ' ' + this.changeNull(selectData.lastName),
          'sex': this.changeNull(selectData.genderDesc),
          'dateOfBirth': this.formatDate(selectData.dateOfBirth)
      },
      'wartermarks': this.loadReportDetail(),
      'reportName' : this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime

  };
  }

  getData(): any {
    return this.personchangelastnameprimary;
  }


    /**
     * Getter $dataSet
     * @return {IDxc_Model_Dopa_MoiDopaPersonChangelastname}
     */
  public get $dataSet(): IDxc_Model_Dopa_MoiDopaPersonChangelastname {
    return this.dataSet;
  }

    /**
     * Setter $dataSet
     * @param {IDxc_Model_Dopa_MoiDopaPersonChangelastname} value
     */
  public set $dataSet(value: IDxc_Model_Dopa_MoiDopaPersonChangelastname) {
    this.dataSet = value;
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
      return'ชาย';
    } else if (sex === 'FEMALE') {
      return'หญิง';
    } else if (sex === 'OTHER') {
      return'อื่นๆ';
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
