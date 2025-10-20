import * as moment from 'moment';
export interface IPerson {
  citizenCardNumber: string;
  fullName: string;
  sex: string;
  dateOfBirth: Date;
}
// tslint:disable-next-line:class-name
export interface IDxc_Model_Doc_Reg_seize {
  citizenCardNumber: string;
  dataId: string;
  dataSource: string;
  dataSubmitDate: string;
  firstname: string;
  id: string;
  lastname: string;
  prisonCode: string;
  prisonerId: string;
  regSeizecol: string;
  seizeBookDate: string;
  seizeBookNo: string;
  seizeOwner: string;
  seizePolice: string;
  seizeCaseDate: string;
  seizePrisonName: string;
  seizeRemark: string;
  seizeWarrantDate: string;
  seizeWarrantNo: string;
  seizeWithdrawBookDate: string;
  seizeWithdrawBookNo: string;
  seizeWithdrawRemark: string;
  seize_base: string;
  seizeProvinceDesc: string;
  seizeStatusName: string;
  seizeBase: string;
  seizeTypeName: string;
  seizeBaseDesc: string;
  person: IPerson;
  reportName: string; // ผู้ขอรายงาน
  reportOfDate: string; // วันที่พิมรายงาน
  reportOfTime: string; // เวลาที่พิมรายงาน
  reportBarcode: string; // เลขที่เอกสาร(เลขบาร์โค๊ด)
  wartermarks: string;
  
}

// tslint:disable-next-line:class-name
export class Dxc_Model_Doc_Reg_seize {
  docregseize: any;
  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  private dataSet: IDxc_Model_Doc_Reg_seize;
  constructor(selectData: any) {
    moment.locale('th');
    this.docregseize = {
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'dataId': this.changeNull(selectData.dataId),
      'dataSource': this.changeNull(selectData.dataSource),
      'dataSubmitDate': this.changeNull(selectData.dataSubmitDate),
      'firstname': this.changeNull(selectData.firstname),
      'id': this.changeNull(selectData.id),
      'lastname': this.changeNull(selectData.lastname),
      'prisonCode': this.changeNull(selectData.prisonCode),
      'prisonerId': this.changeNull(selectData.prisonerId),
      'regSeizecol': this.changeNull(selectData.regSeizecol),
      'seizeBookDate': this.changeNull(selectData.seizeBookDate),
      'seizeBookNo': this.changeNull(selectData.seizeBookNo),
      'seizeOwner': this.changeNull(selectData.seizeOwner),
      'seizePolice': this.changeNull(selectData.seizePolice),
      'seizeCaseDate': this.changeNull(selectData.seizeCaseDate),
      'seizePrisonName': this.changeNull(selectData.seizePrisonName),
      'seizeRemark': this.changeNull(selectData.seizeRemark),
      'seizeWarrantDate': this.changeNull(selectData.seizeWarrantDate),
      'seizeWarrantNo': this.changeNull(selectData.seizeWarrantNo),
      'seizeWithdrawBookDate': this.changeNull(selectData.seizeWithdrawBookDate),
      'seizeWithdrawBookNo': this.changeNull(selectData.seizeWithdrawBookNo),
      'seizeWithdrawRemark': this.changeNull(selectData.seizeWithdrawRemark),
      'seize_base': this.changeNull(selectData.seize_base),
      'seizeProvinceDesc': this.changeNull(selectData.seizeProvinceDesc),
      'seizeStatusName': this.changeNull(selectData.seizeStatusName),
      'seizeBase': this.changeNull(selectData.seizeBase),
      'seizeTypeName': this.changeNull(selectData.seizeTypeName),
      'seizeBaseDesc': this.changeNull(selectData.seizeBaseDesc),
      'person': {
        'citizenCardNumber': selectData.citizenCardNumber,
        'fullName': this.changeNull(selectData.firstname) + ' ' + this.changeNull(selectData.lastname),
        'sex': '',
        'dateOfBirth': ''
      },
      'wartermarks': this.loadReportDetail(),
      'reportName' : this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime
    };
    this.dataSet = this.docregseize;

  }
  setData(selectData: any) {
    this.docregseize = {
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'dataId': this.changeNull(selectData.dataId),
      'dataSource': this.changeNull(selectData.dataSource),
      'dataSubmitDate': this.changeNull(selectData.dataSubmitDate),
      'firstname': this.changeNull(selectData.firstname),
      'id': this.changeNull(selectData.id),
      'lastname': this.changeNull(selectData.lastname),
      'prisonCode': this.changeNull(selectData.prisonCode),
      'prisonerId': this.changeNull(selectData.prisonerId),
      'regSeizecol': this.changeNull(selectData.regSeizecol),
      'seizeBookDate': this.formatDate(selectData.seizeBookDate),
      'seizeBookNo': this.changeNull(selectData.seizeBookNo),
      'seizeOwner': this.changeNull(selectData.seizeOwner),
      'seizePolice': this.changeNull(selectData.seizePolice),
      'seizeCaseDate': this.formatDate(selectData.seizeCaseDate),
      'seizePrisonName': this.changeNull(selectData.seizePrisonName),
      'seizeRemark': this.changeNull(selectData.seizeRemark),
      'seizeWarrantDate': this.formatDate(selectData.seizeWarrantDate),
      'seizeWarrantNo': this.changeNull(selectData.seizeWarrantNo),
      'seizeWithdrawBookDate': this.formatDate(selectData.seizeWithdrawBookDate),
      'seizeWithdrawBookNo': this.changeNull(selectData.seizeWithdrawBookNo),
      'seizeWithdrawRemark': this.changeNull(selectData.seizeWithdrawRemark),
      'seize_base': this.changeNull(selectData.seize_base),
      'seizeProvinceDesc': this.changeNull(selectData.seizeProvinceDesc),
      'seizeStatusName': this.changeNull(selectData.seizeStatusName),
      'seizeBase': this.changeNull(selectData.seizeBase),
      'seizeTypeName': this.changeNull(selectData.seizeTypeName),
      'seizeBaseDesc': this.changeNull(selectData.seizeBaseDesc),
      'person': {
        'citizenCardNumber': selectData.citizenCardNumber,
        'fullName': this.changeNull(selectData.firstname) + ' ' + this.changeNull(selectData.lastname),
        'sex': '',
        'dateOfBirth': ''
      },
      'wartermarks': this.loadReportDetail(),
      'reportName' : this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime
    };
  }

  getData(): any {
    return this.docregseize;
  }
  // เช็ควันที่
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
      return 'ชาย'
    } else if (sex == 'FEMALE') {
      return 'หญิง'
    } else if (sex == 'OTHER') {
      return 'อื่นๆ'
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
      const reportName = localStorage.getItem('reportName');
      this.reportName = localStorage.getItem('reportName');
      const reportOfDate = moment(new Date().toString()).format('L').toString();
      this.reportOfDate = moment(new Date().toString()).format('L').toString();
      const reportOfTime = moment(new Date().toString()).format('LTS').toString();
      this.reportOfTime = moment(new Date().toString()).format('LTS').toString();
      const reportBarcode = 'QP4015-12345678';
      const wartermarks = `<div class="watermark">
      ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark2'>
      ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark3'>
      ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark4'>
      ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark5'>
      ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark6'>
      ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark7'>
      ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark8'>
      ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark9'>
      ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark10'>
      ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark11'>
      ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
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
     * @return {IDxc_Model_Doc_Reg_seize}
     */
  public get $dataSet(): IDxc_Model_Doc_Reg_seize {
    return this.dataSet;
  }

  /**
   * Setter $dataSet
   * @param {IDxc_Model_Doc_Reg_seize} value
   */
  public set $dataSet(value: IDxc_Model_Doc_Reg_seize) {
    this.dataSet = value;
  }
}
