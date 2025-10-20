import * as moment from 'moment';
export interface IPerson {
  citizenCardNumber: string;
  fullName: string;
  sex: string;
  dateOfBirth: Date;
}

export interface IDxc_Model_Agoth_CaseProsecutionAttorney {
    assignType: string;
    assignTypeName: string;
    generallcId: string;
    importDate: string;
    isDeleted: string;
    migratedDate: string;
    ownerName: string;
    page: string;
    prosecuteId: string;
    prosName: string;
    prosSeq: string;
    rng: string;
    size: string;
    sortDirection: string;
    sortProperties: string;

    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    reportBarcode: string;
    wartermarks: string;
    person: IPerson;
}

export class Dxc_Model_Agoth_CaseProsecutionAttorney {
  caseProsecutionAttorney: any;
    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    private dataSet: IDxc_Model_Agoth_CaseProsecutionAttorney;
    constructor(selectData: any) {
      moment.locale('th');
      this.caseProsecutionAttorney = {
        'assignType': this.changeNull(selectData.assignType),
        'assignTypeName': this.changeNull(selectData.assignTypeName),
        'generallcId': this.changeNull(selectData.generallcId),
        'importDate': this.changeNull(selectData.importDate),
        'isDeleted': this.changeNull(selectData.isDeleted),
        'migratedDate': this.changeNull(selectData.migratedDate),
        'ownerName': this.changeNull(selectData.ownerName),
        'page': this.changeNull(selectData.page),
        'prosecuteId': this.changeNull(selectData.prosecuteId),
        'prosName': this.changeNull(selectData.prosName),
        'prosSeq': this.changeNull(selectData.prosSeq),
        'rng': this.changeNull(selectData.rng),
        'size': this.changeNull(selectData.size),
        'sortDirection': this.changeNull(selectData.sortDirection),
        'sortProperties': this.changeNull(selectData.sortProperties),

        'wartermarks': this.loadReportDetail(),
        'reportName': this.reportName,
        'reportOfDate': this.reportOfDate,
        'reportOfTime': this.reportOfTime,
        'person': {
          'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
          'fullName': this.changeNull(selectData.fullName),
          'sex': this.changeNull(selectData.sex),
          'dateOfBirth': this.changeNull(selectData.dateOfBirth),
        }
      };
        this.dataSet = this.caseProsecutionAttorney;
    }

    getData(): any {
        return this.caseProsecutionAttorney;
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
   * @return {IDxc_Model_Agoth_CaseProsecutionAttorney}
   */
  public get $dataSet(): IDxc_Model_Agoth_CaseProsecutionAttorney {
    return this.dataSet;
  }

  /**
   * Setter $dataSet
   * @param {IDxc_Model_Agoth_CaseProsecutionAttorney} value
   */
  public set $dataSet(value: IDxc_Model_Agoth_CaseProsecutionAttorney) {
    this.dataSet = value;
  }

}