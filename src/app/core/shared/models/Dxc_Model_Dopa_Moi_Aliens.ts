import * as moment from 'moment';

// tslint:disable-next-line: class-name
export interface IDxc_Model_Dopa_Moi_Aliens {

  bloodType: string;
  citizenCardNumber: string;
  dateInThai: string;
  dateOfBirth: string;
  fatherName: string;
  fatherNationalityDesc: string;
  fatherPersonalID: string;
  firstName: string;
  genderDesc: string;
  houseID: string;
  id: string;
  lastName: string;
  marryStatus: string;
  motherName: string;
  motherNationalityDesc: string;
  motherPersonalID: string;
  nationalityDesc: string;
  personAddDate: string;
  religion: string;
  spouseName: string;
  statusAdded: string;
  statusOfPersonDesc: string;
  terminateDate: string;
  titleDesc: string;
  passportDocumentIssuePlace: string;
  passportDocumentNo: string;
  passportDocumentType: string;
  passportExpireDate: string;
  passportIssueDate: string;
  visaDocumentIssuePlace: string;
  visaExpireDate: string;
  visaDocumentNo: string;
  visaIssueDate: string;
  visaVisaRequestType: string;
  visaVisaType: string;

  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  wartermarks: string;
}

// tslint:disable-next-line: class-name
export class Dxc_Model_Dopa_Moi_Aliens {
  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  private dataSet: IDxc_Model_Dopa_Moi_Aliens;
  dopamoialiens: any;
  constructor(selectData: any) {
    this.dopamoialiens = {
      'bloodType': this.changeNull(selectData.bloodType),
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'dateInThai': this.changeNull(selectData.dateInThai),
      'dateOfBirth': this.changeNull(selectData.dateOfBirth),
      'fatherName': this.changeNull(selectData.fatherName),
      'fatherNationalityDesc': this.changeNull(selectData.fatherNationalityDesc),
      'fatherPersonalID': this.changeNull(selectData.fatherPersonalID),
      'firstName': this.changeNull(selectData.firstName),
      'genderDesc': this.changeNull(selectData.genderDesc),
      'houseID': this.changeNull(selectData.houseID),
      'id': this.changeNull(selectData.id),
      'lastName': this.changeNull(selectData.lastName),
      'marryStatus': this.changeNull(selectData.marryStatus),
      'motherName': this.changeNull(selectData.motherName),
      'motherNationalityDesc': this.changeNull(selectData.motherNationalityDesc),
      'motherPersonalID': this.changeNull(selectData.motherPersonalID),
      'nationalityDesc': this.changeNull(selectData.nationalityDesc),
      'personAddDate': this.changeNull(selectData.personAddDate),
      'religion': this.changeNull(selectData.religion),
      'spouseName': this.changeNull(selectData.spouseName),
      'statusAdded': this.changeNull(selectData.statusAdded),
      'statusOfPersonDesc': this.changeNull(selectData.statusOfPersonDesc),
      'terminateDate': this.changeNull(selectData.terminateDate),
      'titleDesc': this.changeNull(selectData.titleDesc),
      'passportDocumentIssuePlace': this.changeNull(selectData.passportDocumentIssuePlace),
      'passportDocumentNo': this.changeNull(selectData.passportDocumentNo),
      'passportDocumentType': this.changeNull(selectData.passportDocumentType),
      'passportExpireDate': this.changeNull(selectData.passportExpireDate),
      'passportIssueDate': this.changeNull(selectData.passportIssueDate),
      'visaDocumentIssuePlace': this.changeNull(selectData.visaDocumentIssuePlace),
      'visaDocumentNo': this.changeNull(selectData.visaDocumentNo),
      'visaExpireDate': this.changeNull(selectData.visaExpireDate),
      'visaIssueDate': this.changeNull(selectData.visaIssueDate),
      'visaVisaRequestType': this.changeNull(selectData.visaVisaRequestType),
      'visaVisaType': this.changeNull(selectData.visaVisaType),

      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime,
      'person': {
        'citizenCardNumber': selectData.citizenCardNumber,
        'fullName': this.changeNull(selectData.firstName) + ' ' + this.changeNull(selectData.lastName),
        'sex': this.changeNull(selectData.genderDesc),
        'dateOfBirth': this.changeNull(selectData.dateOfBirth)
      }
    };
    this.dataSet = this.dopamoialiens;
  }

  setData(selectData: any) {
    this.dopamoialiens = {
      'bloodType': this.changeNull(selectData.bloodType),
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'dateInThai': this.formatDate(selectData.dateInThai),
      'dateOfBirth': this.formatDate(selectData.dateOfBirth),
      'fatherName': this.changeNull(selectData.fatherName),
      'fatherNationalityDesc': this.changeNull(selectData.fatherNationalityDesc),
      'fatherPersonalID': this.changeNull(selectData.fatherPersonalID),
      'firstName': this.changeNull(selectData.firstName),
      'genderDesc': this.changeNull(selectData.genderDesc),
      'houseID': this.changeNull(selectData.houseID),
      'id': this.changeNull(selectData.id),
      'lastName': this.changeNull(selectData.lastName),
      'marryStatus': this.changeNull(selectData.marryStatus),
      'motherName': this.changeNull(selectData.motherName),
      'motherNationalityDesc': this.changeNull(selectData.motherNationalityDesc),
      'motherPersonalID': this.changeNull(selectData.motherPersonalID),
      'nationalityDesc': this.changeNull(selectData.nationalityDesc),
      'personAddDate': this.formatDate(selectData.personAddDate),
      'religion': this.changeNull(selectData.religion),
      'spouseName': this.changeNull(selectData.spouseName),
      'statusAdded': this.changeNull(selectData.statusAdded),
      'statusOfPersonDesc': this.changeNull(selectData.statusOfPersonDesc),
      'terminateDate': this.changeNull(selectData.terminateDate),
      'titleDesc': this.changeNull(selectData.titleDesc),
      'passportDocumentIssuePlace': this.changeNull(selectData.passportDocumentIssuePlace),
      'passportDocumentNo': this.changeNull(selectData.passportDocumentNo),
      'passportDocumentType': this.changeNull(selectData.passportDocumentType),
      'passportExpireDate': this.formatDate(selectData.passportExpireDate),
      'passportIssueDate': this.formatDate(selectData.passportIssueDate),
      'visaDocumentIssuePlace': this.changeNull(selectData.visaDocumentIssuePlace),
      'visaDocumentNo': this.changeNull(selectData.visaDocumentNo),
      'visaExpireDate': this.formatDate(selectData.visaExpireDate),
      'visaIssueDate': this.formatDate(selectData.visaIssueDate),
      'visaVisaRequestType': this.changeNull(selectData.visaVisaRequestType),
      'visaVisaType': this.changeNull(selectData.visaVisaType),

      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime,
      'person': {
        'citizenCardNumber': selectData.citizenCardNumber,
        'fullName': this.changeNull(selectData.firstName) + ' ' + this.changeNull(selectData.lastName),
        'sex': this.changeNull(selectData.genderDesc),
        'dateOfBirth': this.formatDate(selectData.dateOfBirth)
      }
    };
  }

  getData(): any {
    return this.dopamoialiens;
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

  getStringFormatYYYYMMDD(datex: string) {
    const year = datex.substring(0, 4);
    const month = datex.substring(4, 6);
    const day = datex.substring(6, 8);

    const displayDate = year + '-' + month + '-' + day;

    return displayDate;
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
    } else if (selectData == "") {
      return '-';
    } else if (selectData == " ") {
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
   * @return {IDxc_Model_Dopa_Moi_Aliens}
   */
  public get $dataSet(): IDxc_Model_Dopa_Moi_Aliens {
    return this.dataSet;
  }

  /**
   * Setter $dataSet
   * @param {IDxc_Model_Dopa_Moi_Aliens} value
   */
  public set $dataSet(value: IDxc_Model_Dopa_Moi_Aliens) {
    this.dataSet = value;
  }


}
