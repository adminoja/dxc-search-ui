import * as moment from 'moment';

export interface IPerson {
  citizenCardNumber: string;
  fullName: string;
  sex: string;
  dateOfBirth: Date;
}

export interface IDxc_Model_Dsi_Warrant {

    // dsiDataId: string;
    // warrantId: string;
    // caseNo: string;
    // warrantNumber: string;
    // warrantYear: string;
    // warrantCourt: string;
    // warrantDate: string;
    // warrantOffenses: string;
    // warrantNameArrested: string;
    // citizenCardNumber: string;

    id: string;
    statusRecord: number;
    lawsuitId: string;
    caseNo: string;
    barkerNumber: string;
    barker: string;
    court: string;
    dateEnforcement: string;
    guilt: string;
    prescription: string;
    startDate: string;
    finishDate: string;
    note: string;
    status: string;
    idCard: string;
    accused: string;
    accusedAddress: string;
    arrested: string;
    dateArrest: string;
    proceedings: string;
    adjudge: string;
    escape: string;
    dateUpdate: string;
    unitCreate: string;
    num: string;

    reportName: string; // ผู้ขอรายงาน
    reportOfDate: string; // วันที่พิมรายงาน
    reportOfTime: string; // เวลาที่พิมรายงาน
    reportBarcode: string; // เลขที่เอกสาร(เลขบาร์โค๊ด)
    wartermarks: string;
    person: IPerson;
}

export class Dxc_Model_Dsi_Warrant {
    dsiwarrant: any;
    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    private dataSet: IDxc_Model_Dsi_Warrant;
    constructor(selectData: any) {
      this.dsiwarrant = {
        'id': this.changeNull(selectData.id),
        'statusRecord': this.statusRecord(selectData.statusRecord),
        'lawsuitId': this.changeNull(selectData.lawsuitId),
        'caseNo': this.changeNull(selectData.caseNo),
        'barkerNumber': this.changeNull(selectData.barkerNumber),
        'barker': this.changeNull(selectData.barker),
        'court': this.changeNull(selectData.court),
        'dateEnforcement': selectData.dateEnforcement,
        'guilt': this.changeNull(selectData.guilt),
        'prescription': this.changeNull(selectData.prescription),
        'startDate': selectData.startDate,
        'finishDate': selectData.finishDate,
        'note': this.changeNull(selectData.note),
        'status': this.changeNull(selectData.status),
        'idCard': this.changeNull(selectData.idCard),
        'accused': this.changeNull(selectData.accused),
        'accusedAddress': this.changeNull(selectData.accusedAddress),
        'arrested': this.arrested(selectData.arrested),
        'dateArrest': selectData.dateArrest,
        'proceedings': this.changeNull(selectData.proceedings),
        'adjudge': this.changeNull(selectData.adjudge),
        'escape': this.changeNull(selectData.escape),
        'dateUpdate': selectData.dateUpdate,
        'unitCreate': this.changeNull(selectData.unitCreate),
        'num': this.changeNull(selectData.num),

        'wartermarks': this.loadReportDetail(),
        'reportName' : this.reportName,
        'reportOfDate': this.reportOfDate,
        'reportOfTime': this.reportOfTime,
        'person': {
          'citizenCardNumber': this.changeNull(selectData.idCard),
          'fullName': this.changeNull(selectData.accused),
          'sex': '',
          'dateOfBirth': ''
        },
        
      };
      this.dataSet = this.dsiwarrant;
    }
    setData(selectData: any) {
      this.dsiwarrant = {
        'id': this.changeNull(selectData.id),
        'statusRecord': this.statusRecord(selectData.statusRecord),
        'lawsuitId': this.changeNull(selectData.lawsuitId),
        'caseNo': this.changeNull(selectData.caseNo),
        'barkerNumber': this.changeNull(selectData.barkerNumber),
        'barker': this.changeNull(selectData.barker),
        'court': this.changeNull(selectData.court),
        'dateEnforcement': this.formatDate(selectData.dateEnforcement),
        'guilt': this.changeNull(selectData.guilt),
        'prescription': this.changeNull(selectData.prescription),
        'startDate': this.formatDate(selectData.startDate),
        'finishDate': this.formatDate(selectData.finishDate),
        'note': this.changeNull(selectData.note),
        'status': this.changeNull(selectData.status),
        'idCard': this.changeNull(selectData.idCard),
        'accused': this.changeNull(selectData.accused),
        'accusedAddress': this.changeNull(selectData.accusedAddress),
        'arrested': this.arrested(selectData.arrested),
        'dateArrest': this.formatDate(selectData.dateArrest),
        'proceedings': this.changeNull(selectData.proceedings),
        'adjudge': this.changeNull(selectData.adjudge),
        'escape': this.changeNull(selectData.escape),
        'dateUpdate': this.formatDate(selectData.dateUpdate),
        'unitCreate': this.changeNull(selectData.unitCreate),
        'num': this.changeNull(selectData.num),

        'wartermarks': this.loadReportDetail(),
        'reportName' : this.reportName,
        'reportOfDate': this.reportOfDate,
        'reportOfTime': this.reportOfTime,
        'person': {
          'citizenCardNumber': this.changeNull(selectData.idCard),
          'fullName': this.changeNull(selectData.accused),
          'sex': '',
          'dateOfBirth': ''
        },
        
      };
    }

    getData(): any {
      return this.dsiwarrant;
    }
    formatDate(birthDate: string): string {
      const date = new Date(birthDate);
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear() + 543;
      if (birthDate === 'null' || birthDate === null) {
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
    statusRecord(statusRecord: number) {
      if(statusRecord === 1) {
        return 'Active'
      } else {
        return 'Inactive'
      }
    }
    arrested(arrested: string) {
      if(arrested === '1') {
        return 'จับแล้ว'
      } else {
        return 'ยังไม่จับ'
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
      const wartermarks = `<div class=watermark>
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
      const wartermarks = `<div class=watermark>
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
     * @return {IDxc_Model_Dsi_Warrant}
     */
    public get $dataSet(): IDxc_Model_Dsi_Warrant {
        return this.dataSet;
    }

    /**
     * Setter $dataSet
     * @param {IDxc_Model_Dsi_Warrant} value
     */
    public set $dataSet(value: IDxc_Model_Dsi_Warrant) {
        this.dataSet = value;
    }
  }
