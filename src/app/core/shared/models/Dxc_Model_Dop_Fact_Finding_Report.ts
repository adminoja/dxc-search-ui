import * as moment from 'moment';

export interface IDxc_Model_Dop_Fact_Finding_Report {
  consideration: string;
  citizenCardNumber: string;
  redNo: string;
  court: string;
  prison: string;
  officeName: string;
  registerNumber: string;
  firstName: string;
  lastName: string;
  guiltyName: string;
  nickName: string;
  status: string;
  sponsorFristName: string;
  sponsorLastName: string;
  sponsorStatus: string;
  houseNumber: string;
  village: string;
  road: string;
  subDistrict: string;
  district: string;
  prvince: string;
  phoneNumber: string;
  commentProbationOfficer : string;

  body: string[]; //
  reportName: string; // ผู้ขอรายงาน
  reportOfDate: string; // วันที่พิมรายงาน
  reportOfTime: string; // เวลาที่พิมรายงาน
  reportBarcode: string; // เลขที่เอกสาร(เลขบาร์โค๊ด)
  wartermarks: string;
}

export interface Dxc_Model_Dop_Fact_Finding_Report {
  consideration: string;
  citizenCardNumber: string;
  redNo: string;
  court: string;
  prison: string;
  officeName: string;
  registerNumber: string;
  firstName: string;
  lastName: string;
  guiltyName: string;
  nickName: string;
  status: string;
  sponsorFristName: string;
  sponsorLastName: string;
  sponsorStatus: string;
  houseNumber: string;
  village: string;
  road: string;
  subDistrict: string;
  district: string;
  prvince: string;
  phoneNumber: string;
  commentProbationOfficer : string;

  body: string[]; //
  reportName: string; // ผู้ขอรายงาน
  reportOfDate: string; // วันที่พิมรายงาน
  reportOfTime: string; // เวลาที่พิมรายงาน
  reportBarcode: string; // เลขที่เอกสาร(เลขบาร์โค๊ด)
  wartermarks: string;
}

export class Dxc_Model_Dop_Fact_Finding_Report {
  factFindingReport: any;
  private dataSet: IDxc_Model_Dop_Fact_Finding_Report;
  constructor(selectData: any) {
    moment.locale('th');
    this.factFindingReport = {
      'consideration': this.changeNull(selectData.consideration),
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'redNo': this.changeNull(selectData.redNo),
      'court': this.changeNull(selectData.court),
      'prison': this.changeNull(selectData.prison),
      'officeName': this.changeNull(selectData.officeName),
      'registerNumber': this.changeNull(selectData.registerNumber),
      'firstName': this.changeNull(selectData.firstName),
      'lastName': this.changeNull(selectData.lastName),
      'guiltyName': this.changeNull(selectData.guiltyName),
      'nickName': this.changeNull(selectData.citizenCardNumber),
      'status': this.changeNull(selectData.nickName),
      'sponsorFristName': this.changeNull(selectData.sponsorFristName),
      'sponsorLastName': this.changeNull(selectData.sponsorLastName),
      'sponsorStatus': this.changeNull(selectData.sponsorStatus),
      'houseNumber': this.changeNull(selectData.houseNumber),
      'village': this.changeNull(selectData.village),
      'road': this.changeNull(selectData.road),
      'subDistrict': this.changeNull(selectData.subDistrict),
      'district': this.changeNull(selectData.district),
      'prvince': this.changeNull(selectData.prvince),
      'phoneNumber': this.changeNull(selectData.phoneNumber),
      'commentProbationOfficer' : this.changeNull(selectData.commentProbationOfficer),
      'person': {
        'citizenCardNumber': '',
        'fullName': this.changeNull(selectData.firstName) + ' ' + this.changeNull(selectData.lastName),
        'sex': '',
        'dateOfBirth': '',
      },
      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime
    };
    this.dataSet = this.factFindingReport;
  }

  setData(selectData: any) {
    this.factFindingReport = {
      'consideration': this.changeNull(selectData.consideration),
      'redNo': this.changeNull(selectData.redNo),
      'court': this.changeNull(selectData.court),
      'prison': this.changeNull(selectData.prison),
      'officeName': this.changeNull(selectData.officeName),
      'registerNumber': this.changeNull(selectData.registerNumber),
      'firstName': this.changeNull(selectData.firstName),
      'lastName': this.changeNull(selectData.lastName),
      'guiltyName': this.changeNull(selectData.guiltyName),
      'nickName': this.changeNull(selectData.citizenCardNumber),
      'status': this.changeNull(selectData.nickName),
      'sponsorFristName': this.changeNull(selectData.sponsorFristName),
      'sponsorLastName': this.changeNull(selectData.sponsorLastName),
      'sponsorStatus': this.changeNull(selectData.sponsorStatus),
      'houseNumber': this.changeNull(selectData.houseNumber),
      'village': this.changeNull(selectData.village),
      'road': this.changeNull(selectData.road),
      'subDistrict': this.changeNull(selectData.subDistrict),
      'district': this.changeNull(selectData.district),
      'prvince': this.changeNull(selectData.prvince),
      'phoneNumber': this.changeNull(selectData.phoneNumber),
      'commentProbationOfficer' : this.changeNull(selectData.commentProbationOfficer),
      'person': {
        'citizenCardNumber': '',
        'fullName': this.changeNull(selectData.firstName) + '' + this.changeNull(selectData.lastName),
        'sex': '',
        'dateOfBirth': '',
      },
      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime
    };
  }
  getData(): any {
    return this.factFindingReport;
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
   * @return {IDxc_Model_Dop_Fact_Finding_Report}
   */
  public get $dataSet(): IDxc_Model_Dop_Fact_Finding_Report {
    return this.dataSet;
  }

  /**
   * Setter $dataSet
   * @param {IDxc_Model_Dop_Fact_Finding_Report} value
   */
  public set $dataSet(value: IDxc_Model_Dop_Fact_Finding_Report) {
    this.dataSet = value;
  }
}
