import * as moment from 'moment';
import { isEmpty } from 'rxjs/operators';

export interface IDxc_Model_Moi_Dopa_Education_Backgroundes {
  citizenCardNumber: string;
  degree1: string;
  degree2: string;
  degree3: string;
  degree4: string;
  degree5: string;
  degree6: string;
  degree7: string;
  degree8: string;
  errorMessage: string;
  faculty1: string;
  faculty2: string;
  faculty3: string;
  faculty4: string;
  faculty5: string;
  faculty6: string;
  faculty7: string;
  faculty8: string;
  gpa1: string;
  gpa2: string;
  gpa3: string;
  gpa4: string;
  gpa5: string;
  gpa6: string;
  gpa7: string;
  gpa8: string;
  gradDate1: string;
  gradDate2: string;
  gradDate3: string;
  gradDate4: string;
  gradDate5: string;
  gradDate6: string;
  gradDate7: string;
  gradDate8: string;
  graduate1: string;
  graduate2: string;
  graduate3: string;
  graduate4: string;
  graduate5: string;
  graduate6: string;
  graduate7: string;
  graduate8: string;
  id: string;
  isError: true;
  lGradDate: string;
  major1: string;
  major2: string;
  major3: string;
  major4: string;
  major5: string;
  major6: string;
  major7: string;
  major8: string;
  pid: string;

  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  wartermarks: string;
  status: string;
  body: string[];
}

export interface Dxc_Model_Moi_Dopa_Education_Backgroundes {
  citizenCardNumber: string;
  degree1: string;
  degree2: string;
  degree3: string;
  degree4: string;
  degree5: string;
  degree6: string;
  degree7: string;
  degree8: string;
  errorMessage: string;
  faculty1: string;
  faculty2: string;
  faculty3: string;
  faculty4: string;
  faculty5: string;
  faculty6: string;
  faculty7: string;
  faculty8: string;
  gpa1: string;
  gpa2: string;
  gpa3: string;
  gpa4: string;
  gpa5: string;
  gpa6: string;
  gpa7: string;
  gpa8: string;
  gradDate1: string;
  gradDate2: string;
  gradDate3: string;
  gradDate4: string;
  gradDate5: string;
  gradDate6: string;
  gradDate7: string;
  gradDate8: string;
  graduate1: string;
  graduate2: string;
  graduate3: string;
  graduate4: string;
  graduate5: string;
  graduate6: string;
  graduate7: string;
  graduate8: string;
  id: string;
  isError: true;
  lGradDate: string;
  major1: string;
  major2: string;
  major3: string;
  major4: string;
  major5: string;
  major6: string;
  major7: string;
  major8: string;
  pid: string;

  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  wartermarks: string;
  status: string;
  body: string[];
}

export class Dxc_Model_Moi_Dopa_Education_Backgroundes {
  dopamoieducationbackgroundes: any;
  private dataSet: IDxc_Model_Moi_Dopa_Education_Backgroundes;
  constructor(selectData: any) {
    moment.locale('th');
    console.log('TESTTTTTTTTTTTT' + selectData.dateOfBirth);

    this.dopamoieducationbackgroundes = {
      // 'allCaseTypeId': this.changeNull(selectData.allCaseTypeId),
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'degree1': this.changeNull(selectData.degree1),
      'degree2': this.changeNull(selectData.degree2),
      'degree3': this.changeNull(selectData.degree3),
      'degree4': this.changeNull(selectData.degree4),
      'degree5': this.changeNull(selectData.degree5),
      'degree6': this.changeNull(selectData.degree6),
      'degree7': this.changeNull(selectData.degree7),
      'degree8': this.changeNull(selectData.degree8),
      'errorMessage': this.changeNull(selectData.errorMessage),
      'faculty1': this.changeNull(selectData.faculty1),
      'faculty2': this.changeNull(selectData.faculty2),
      'faculty3': this.changeNull(selectData.faculty3),
      'faculty4': this.changeNull(selectData.faculty4),
      'faculty5': this.changeNull(selectData.faculty5),
      'faculty6': this.changeNull(selectData.faculty6),
      'faculty7': this.changeNull(selectData.faculty7),
      'faculty8': this.changeNull(selectData.faculty8),
      'gpa1': this.changeNull(selectData.gpa1),
      'gpa2': this.changeNull(selectData.gpa2),
      'gpa3': this.changeNull(selectData.gpa3),
      'gpa4': this.changeNull(selectData.gpa4),
      'gpa5': this.changeNull(selectData.gpa5),
      'gpa6': this.changeNull(selectData.gpa6),
      'gpa7': this.changeNull(selectData.gpa7),
      'gpa8': this.changeNull(selectData.gpa8),
      'gradDate1': this.changeNull(selectData.gradDate1),
      'gradDate2': this.changeNull(selectData.gradDate2),
      'gradDate3': this.changeNull(selectData.gradDate3),
      'gradDate4': this.changeNull(selectData.gradDate4),
      'gradDate5': this.changeNull(selectData.gradDate5),
      'gradDate6': this.changeNull(selectData.gradDate6),
      'gradDate7': this.changeNull(selectData.gradDate7),
      'gradDate8': this.changeNull(selectData.gradDate8),
      'graduate1': this.changeNull(selectData.graduate1),
      'graduate2': this.changeNull(selectData.graduate2),
      'graduate3': this.changeNull(selectData.graduate3),
      'graduate4': this.changeNull(selectData.graduate4),
      'graduate5': this.changeNull(selectData.graduate5),
      'graduate6': this.changeNull(selectData.graduate6),
      'graduate7': this.changeNull(selectData.graduate7),
      'graduate8': this.changeNull(selectData.graduate8),
      'id': this.changeNull(selectData.id),
      'isError': this.changeNull(selectData.isError),
      'lGradDate': this.changeNull(selectData.lGradDate),
      'major1': this.changeNull(selectData.major1),
      'major2': this.changeNull(selectData.major2),
      'major3': this.changeNull(selectData.major3),
      'major4': this.changeNull(selectData.major4),
      'major5': this.changeNull(selectData.major5),
      'major6': this.changeNull(selectData.major6),
      'major7': this.changeNull(selectData.major7),
      'major8': this.changeNull(selectData.major8),
      'pid': this.changeNull(selectData.pid),

      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime,
      'person': {
        'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
        'fullName': this.changeNull(selectData.degree1) + ' ' + this.changeNull(selectData.degree1),
        'sex': this.changeNull(selectData.degree1),
        'dateOfBirth': this.changeNull(selectData.degree1),
      },
    };
    this.dataSet = this.dopamoieducationbackgroundes;
  }

  getData(): any {
    return this.dopamoieducationbackgroundes;
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

  // formatDate(dateOfBirth: string): string {

  //   const date = new Date(dateOfBirth);
  //   const day = date.getDate();
  //   const month = date.getMonth() + 1;
  //   const year = date.getFullYear() + 543;
  //   if (dateOfBirth == 'null') {
  //     return '-';
  //   } else {
  //     return `${day}/${month}/${year}`;
  //   }
  // }

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
   * @return {IDxc_Model_Dopa_Moi_Education_Backgroundes}
   */
  public get $dataSet(): IDxc_Model_Moi_Dopa_Education_Backgroundes {
    return this.dataSet;
  }

  /**
   * Setter $dataSet
   * @param {IDxc_Model_Dopa_Moi_Education_Backgroundes} value
   */
  public set $dataSet(value: IDxc_Model_Moi_Dopa_Education_Backgroundes) {
    this.dataSet = value;
  }


}
