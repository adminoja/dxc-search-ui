import * as moment from 'moment';
export interface IPerson {
  citizenCardNumber: string;
  fullName: string;
  sex: string;
  dateOfBirth: Date;
}
export interface IDxc_Model_Dlt_DriverLicenseNew {
  citizenCardNumber: string;
  fullName: string;
  diseasesAndConditionIndex: string;
  address: string;
  licenseNumber: string;
  type: string;
  typeCode: string;
  officeBranch: string;
  officeBranchCode: string;
  idString: string;
  licenseIssueDate: string;
  issueDateString: string;
  licenseExpirationDate: string;
  expirationDateString: string;
  status: string;
  sequester: string;
  dataSubmitDate: string;

  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  wartermarks: string;
  body: string[];
}

export class Dxc_Model_Dlt_DriverLicenseNew {
  dltdriverlicense: any;
  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  private dataSet: IDxc_Model_Dlt_DriverLicenseNew;
  
  constructor(selectData: any) {
    this.dltdriverlicense = {
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'fullName': this.changeNull(selectData.fullName),
      'diseasesAndConditionIndex': this.changeNull(selectData.diseasesAndConditionIndex),
      'address': this.changeNull(selectData.address),
      'licenseNumber': this.changeNull(selectData.licenseNumber),
      'type': this.changeNull(selectData.type),
      'typeCode': this.changeNull(selectData.typeCode),
      'officeBranch': this.changeNull(selectData.officeBranch),
      'officeBranchCode': this.changeNull(selectData.officeBranchCode),
      'idString': this.changeNull(selectData.idString),
      'licenseIssueDate': this.changeNull(selectData.licenseIssueDate),
      'issueDateString': this.changeNull(selectData.issueDateString),
      'licenseExpirationDate': this.changeNull(selectData.licenseExpirationDate),
      'expirationDateString': this.changeNull(selectData.expirationDateString),
      'sequester': this.changeNull(selectData.sequester),
      'dataSubmitDate': this.changeNull(selectData.dataSubmitDate),
      'status': this.changeNull(selectData.status),
      'person': {
        'citizenCardNumber': selectData.citizenCardNumber,
        'fullName': selectData.fullName,
        'sex': '',
        'dateOfBirth': ''
      },
      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime
    };
    this.dataSet = this.dltdriverlicense;

  }
  setData(selectData: any) {
    this.dltdriverlicense = {
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'fullName': this.changeNull(selectData.fullName),
      'diseasesAndConditionIndex': this.changeNull(selectData.diseasesAndConditionIndex),
      'address': this.changeNull(selectData.address),
      'licenseNumber': this.changeNull(selectData.licenseNumber),
      'type': this.changeNull(selectData.type),
      'typeCode': this.changeNull(selectData.typeCode),
      'officeBranch': this.changeNull(selectData.officeBranch),
      'officeBranchCode': this.changeNull(selectData.officeBranchCode),
      'idString': this.changeNull(selectData.idString),
      'licenseIssueDate': this.formatDate(selectData.licenseIssueDate),
      'issueDateString': this.changeNull(selectData.issueDateString),
      'licenseExpirationDate': this.formatDate(selectData.licenseExpirationDate),
      'expirationDateString': this.changeNull(selectData.expirationDateString),
      'sequester': this.changeNull(selectData.sequester),
      'dataSubmitDate': this.changeNull(this.formatDate(selectData.dataSubmitDate)),
      'status': this.changeNull(selectData.status),
      'person': {
        'citizenCardNumber': selectData.citizenCardNumber,
        'fullName': selectData.fullName,
        'sex': '',
        'dateOfBirth': ''
      },
      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime
    };
  }
  getData(): any {
    return this.dltdriverlicense;
  }
  // เช็ควันที่
  formatDate(birthDate: string): string {
    const date = new Date(birthDate);
    const day = date.getDate();
    // console.log(date.getFullYear())
    const month = date.getMonth();
    const year = date.getFullYear() + 543;
    if (birthDate === 'null') {
      return '-';
    } else if (birthDate == null) {
      return '-';
    } else if (year == 9999) {
      return 'ตลอดชีพ'
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
    if (selectData == null || selectData == "") {
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
   * @return {IDxc_Model_Dlt_DriverLicenseNew}
   */
  public get $dataSet(): IDxc_Model_Dlt_DriverLicenseNew {
    return this.dataSet;
  }

  /**
   * Setter $dataSet
   * @param {IDxc_Model_Dlt_DriverLicenseNew} value
   */
  public set $dataSet(value: IDxc_Model_Dlt_DriverLicenseNew) {
    this.dataSet = value;
  }

}

