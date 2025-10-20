import * as moment from 'moment';
export interface IDxc_Model_Dca_Moi_Thailand_Passport {
    
  birthPlace: string;
  citizenCardNumber: string;
  citizenID: string;
  dataId: string;
  errorDesc: string;
  expireDate: string;
  firstNameEN: string;
  firstNameTH: string;
  height: string;
  id: string;
  isSuccess: string;
  issueDate: string;
  lastNameEN: string;
  lastNameTH: string;
  passportNo: string;
  passportStatus: string;
  passportType: string;
  sex: string,

    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    reportBarcode: string;
    wartermarks: string;
    status: string;
    body: string[];
}
export class Dxc_Model_Dca_Moi_Thailand_Passport {
    private dataSet: IDxc_Model_Dca_Moi_Thailand_Passport;
    thailandPassport: any;
    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    constructor(selectData: any) {
        this.thailandPassport = {
            'birthPlace': this.changeNull(selectData.birthPlace),
            'citizenID': this.changeNull(selectData.citizenID),
            'expireDate': this.formatDate(selectData.expireDate),
            'firstNameEN': this.changeNull(selectData.firstNameEN),
            'firstNameTH': this.changeNull(selectData.firstNameTH),
            'height': this.changeNull(selectData.height),
            'issueDate': this.formatDate(selectData.issueDate),
            'lastNameEN': this.changeNull(selectData.lastNameEN),
            'lastNameTH': this.changeNull(selectData.lastNameTH),
            'passportNo': this.changeNull(selectData.passportNo),
            'passportStatus': this.changeNull(selectData.passportStatus),
            'passportType': this.changeNull(selectData.passportType),
            'sex': this.changeNull(selectData.sex),
            'person': {
              'citizenCardNumber': this.changeNull(selectData.citizenID),
              'fullName':  this.changeNull(selectData.firstNameTH) + ' ' + this.changeNull(selectData.lastNameTH),
              'sex': this.changeNull(selectData.sex),
              'dateOfBirth': ''
            },
            'wartermarks': this.loadReportDetail(),
            'reportName' : this.reportName,
            'reportOfDate': this.reportOfDate,
            'reportOfTime': this.reportOfTime
        };
        this.dataSet = this.thailandPassport;
    }

    setData(selectData: any) {
      this.thailandPassport = {
        'birthPlace': this.changeNull(selectData.birthPlace),
        'citizenID': this.changeNull(selectData.citizenID),
        'expireDate': this.changeNull(selectData.expireDate),
        'firstNameEN': this.changeNull(selectData.firstNameEN),
        'firstNameTH': this.changeNull(selectData.firstNameTH),
        'height': this.changeNull(selectData.height),
        'issueDate': this.changeNull(selectData.issueDate),
        'lastNameEN': this.changeNull(selectData.lastNameEN),
        'lastNameTH': this.changeNull(selectData.lastNameTH),
        'passportNo': this.changeNull(selectData.passportNo),
        'passportStatus': this.changeNull(selectData.passportStatus),
        'passportType': this.changeNull(selectData.passportType),
        'sex': this.changeSex(selectData.sex),
        'person': {
          'citizenCardNumber': this.changeNull(selectData.citizenID),
          'fullName':  this.changeNull(selectData.firstNameTH) + ' ' + this.changeNull(selectData.lastNameTH),
          'sex': this.changeSex(selectData.sex),
          'dateOfBirth': ''
        },
        'wartermarks': this.loadReportDetail(),
        'reportName' : this.reportName,
        'reportOfDate': this.reportOfDate,
        'reportOfTime': this.reportOfTime
      };
    }

    getData(): any {
        return this.thailandPassport;
    }
    formatDate(birthDate: string): string {

      let date = `${birthDate}`;
      const year = date.substring(0, 4);
      const month = date.substring(4, 6);
      const day = date.substring(6, 8);
      let converseYear = (parseInt(year) + 543);
      if (birthDate === 'null') {
        return '-';
      } else if (birthDate == null) {
        return '-';
      } else {
        const thmonth = new Array('มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
          'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม');
          const d = new Date(month);
        return `${day} ${thmonth[d.getMonth()]} ${converseYear}`;
      }
  
    }

    changeSex(sex: string) {
        if (sex === 'MALE') {
          return'ชาย';
        } else if (sex === 'FEMALE') {
          return'หญิง';
        } else if (sex == 'M') {
          return 'ชาย';
        } else if (sex == 'F') {
          return 'หญิง';
        } else if (sex === 'OTHER') {
          return'อื่นๆ';
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
        } else {
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
     * @return {IDxc_Model_Dca_Moi_Thailand_Passport}
     */
    public get $dataSet(): IDxc_Model_Dca_Moi_Thailand_Passport {
        return this.dataSet;
    }

    /**
     * Setter $dataSet
     * @param {IDxc_Model_Dca_Moi_Thailand_Passport} value
     */
    public set $dataSet(value: IDxc_Model_Dca_Moi_Thailand_Passport) {
        this.dataSet = value;
    }

}
