import * as moment from 'moment';
export interface IPerson {
  citizenCardNumber: string;
  fullName: string;
  sex: string;
  birthDateSrc: Date;
}
export interface IDxc_Model_Dop_Probationer {
  caseId: string;
  id: string; // "id", "number", "รหัสข้อมูล", { "pk": "true" }],
  citizenCardNumber: string; // citizenCardNumber, number, เลขประจำตัวประชาชน],
  prefix: string; // prefix, string, คำนำหน้าชื่อ],
  firstName: string; // firstName, string, ชื่อ],
  lastName: string; // lastName, string, นามสกุล],
  sex: string; // sex, string, เพศ],
  officeId: string; // officeId, string, สำนักงานคุมประพฤติ],
  officeName: string;
  birthDateSrc: string; // birthDate, datetime, วันเดือนปีเกิด],
  birthDate: string;
  predicateOffence: string; // predicateOffence, string, ฐานความผิด],
  caseRegistrationId: string; // caseRegistrationId, string, รหัสทะเบียน],
  caseRegistrationYear: string; // caseRegistrationYear, number, ปีทะเบียน],
  caseRegistrationNumber: string; // caseRegistrationNumber, string, หมายเลขทะเบียน],
  caseType: string; // caseType, string, รหัสประเภทคดี],
  caseName: string; // caseName, string, ชื้อตามฟ้อง],
  probationStartDate: string; // probationStartDate, datetime, วันที่ศาลสั่งคุมประพฤติ],
  probationStartDateSrc: string; // probationStartDate, datetime, วันที่ศาลสั่งคุมประพฤติ],
  probationPlannedEndDateSrc: string; // probationPlannedEndDate, datetime, วันที่ครบกำหนดคุมประพฤติ],
  probationActualEndDateSrc: string; // probationActualEndDate, datetime, วันที่พ้นคุมประพฤติ],
  probationResult: string; // ผลคำสั่งศาล
  probationEnddedReasonId: string; // probationEnddedReason, string, สาเหตุการสิ้นสุด],
  probationEnddedReason: string; // probationEnddedReason, string, สาเหตุการสิ้นสุด],
  probationStatus: string; // probationStatus, string, สถานะทะเบียนคดี],
  dataSubmitDate: string; // dataSubmitDate, datetime, วันที่ปรับปรุงขอมูล]
  educationName: string;
  fatherName: string;
  motherName: string;
  homeNumber: string;
  moo: string;
  village: string;
  soi: string;
  street: string;
  subDistrictName: string;
  districtName: string;
  provinceName: string;
  decidedCaseId: string; // หมายเลขคดีแดง
  undecidedCaseId: string; // หมายเลขคดีดำ
  courtName: string;
  registerDate: string
  person: IPerson;
  reportName: string; // ผู้ขอรายงาน
  reportOfDate: string; // วันที่พิมรายงาน
  reportOfTime: string; // เวลาที่พิมรายงาน
  reportBarcode: string; // เลขที่เอกสาร(เลขบาร์โค๊ด)
  wartermarks: string;
  status: string; // ex.status == '200'
  body: string[]; //

}


export class Dxc_Model_Dop_Probationer {
    dopprobationer: any;
    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    dataDopprobationer: any;
    private dataSet: IDxc_Model_Dop_Probationer;
    constructor(selectData: any) {
         this.dopprobationer = {
            'id': this.changeNull(selectData.id), // "id", "number", "รหัสข้อมูล", { "pk": "true" }],
            'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
            'prefix': this.changeNull(selectData.prefix),
            'firstName': this.changeNull(selectData.firstName),
            'lastName': this.changeNull(selectData.lastName),
            'sex': this.changeNull(selectData.sex),
            'officeId': this.changeNull(selectData.officeId), // officeId, string, สำนักงานคุมประพฤติ],
            'officeName': this.changeNull(selectData.officeName),
            'birthDateSrc': this.changeNull(selectData.birthDateSrc), // วันเดือนปีเกิด
            'educationName': this.changeNull(selectData.educationName),
            'fatherName': this.changeNull(selectData.fatherName),
            'motherName': this.changeNull(selectData.motherName),
            'homeNumber': this.changeNull(selectData.homeNumber),
            'moo': this.changeNull(selectData.moo),
            'village': this.changeNull(selectData.village),
            'soi': this.changeNull(selectData.soi),
            'street': this.changeNull(selectData.street),
            'subDistrictName': this.changeNull(selectData.subDistrictName),
            'districtName': this.changeNull(selectData.districtName),
            'provinceName': this.changeNull(selectData.provinceName),
            'caseId': this.changeNull(selectData.caseId),
            'birthDate': this.changeNull(selectData.birthDate),
            'predicateOffence': this.changeNull(selectData.predicateOffence), // predicateOffence, string, ฐานความผิด],
            'caseRegistrationId': this.changeNull(selectData.caseRegistrationId), // caseRegistrationId, string, รหัสทะเบียน],
            'caseRegistrationYear': this.changeNull(selectData.caseRegistrationYear), // caseRegistrationYear, number, ปีทะเบียน],
            'caseRegistrationNumber': this.changeNull(selectData.caseRegistrationNumber), // string, หมายเลขทะเบียน],
            'caseType': this.changeNull(selectData.caseType), // caseType, string, รหัสประเภทคดี],
            'caseName': this.changeNull(selectData.caseName), // caseName, string, ชื้อตามฟ้อง],
            'probationStartDate': this.changeNull(selectData.probationStartDate), // datetime,วันที่ศาลสั่งคุมประพฤติ],
            'probationStartDateSrc': this.changeNull(selectData.probationStartDateSrc), // datetime,วันที่ศาลสั่งคุมประพฤติ],
            'probationPlannedEndDateSrc': this.changeNull(selectData.probationPlannedEndDateSrc), // วันที่ครบกำหนดคุมประพฤติ],
            'probationActualEndDateSrc': this.changeNull(selectData.probationActualEndDateSrc), // วันที่พ้นคุมประพฤติ],
            'probationResult': this.changeNull(selectData.probationResult), // ผลคำสั่งศาล
            'probationEnddedReasonId': this.changeEnddedReason(selectData.probationEnddedReasonId), // string, สาเหตุการสิ้นสุด],
            'probationEnddedReason': this.changeNull(selectData.probationEnddedReason), // string, สาเหตุการสิ้นสุด],
            'probationStatus': this.changeNull(selectData.probationStatus), // probationStatus, string, สถานะทะเบียนคดี],
            'dataSubmitDate': this.changeNull(selectData.dataSubmitDate), // dataSubmitDate, datetime, วันที่ปรับปรุงขอมูล]
            'decidedCaseId': this.changeNull(selectData.decidedCaseId), // หมายเลขคดีแดง
            'undecidedCaseId': this.changeNull(selectData.undecidedCaseId), // หมายเลขคดีดำ
            'courtName': this.changeNull(selectData.courtName), // หมายเลขคดีดำ
            'registerDate': this.changeNull(selectData.registerDate), // วันที่สำนวน
            'person': {
              'citizenCardNumber': selectData.citizenCardNumber,
              'fullName': selectData.firstName + ' ' + selectData.lastName,
              'sex': this.changeNull(selectData.sex),
              'dateOfBirth': this.changeNull(selectData.birthDateSrc)
            },
            'wartermarks': this.loadReportDetail(),
            'reportName' : this.reportName,
            'reportOfDate': this.reportOfDate,
            'reportOfTime': this.reportOfTime
          };
          this.dataSet = this.dopprobationer;
    }
    setData(selectData: any) {
      this.dopprobationer = {
        'id': this.changeNull(selectData.id), // "id", "number", "รหัสข้อมูล", { "pk": "true" }],
        'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
        'prefix': this.changeNull(selectData.prefix),
        'firstName': this.changeNull(selectData.firstName),
        'lastName': this.changeNull(selectData.lastName),
        'sex': this.changeSex(selectData.sex),
        'officeId': this.changeNull(selectData.officeId), // officeId, string, สำนักงานคุมประพฤติ],
        'officeName': this.changeNull(selectData.officeName),
        'birthDateSrc': this.formatDate(selectData.birthDateSrc), // วันเดือนปีเกิด
        'educationName': this.changeNull(selectData.educationName),
        'fatherName': this.changeNull(selectData.fatherName),
        'motherName': this.changeNull(selectData.motherName),
        'homeNumber': this.changeNull(selectData.homeNumber),
        'moo': this.changeNull(selectData.moo),
        'village': this.changeNull(selectData.village),
        'soi': this.changeNull(selectData.soi),
        'street': this.changeNull(selectData.street),
        'subDistrictName': this.changeNull(selectData.subDistrictName),
        'districtName': this.changeNull(selectData.districtName),
        'provinceName': this.changeNull(selectData.provinceName),
        'caseId': this.changeNull(selectData.caseId),
        'birthDate': this.changeNull(selectData.birthDateSrc),
        'predicateOffence': this.changeNull(selectData.predicateOffence), // predicateOffence, string, ฐานความผิด],
        'caseRegistrationId': this.changeNull(selectData.caseRegistrationId), // caseRegistrationId, string, รหัสทะเบียน],
        'caseRegistrationYear': this.changeNull(selectData.caseRegistrationYear), // caseRegistrationYear, number, ปีทะเบียน],
        'caseRegistrationNumber': this.changeNull(selectData.caseRegistrationNumber), // string, หมายเลขทะเบียน],
        'caseType': this.changeNull(selectData.caseType), // caseType, string, รหัสประเภทคดี],
        'caseName': this.changeNull(selectData.caseName), // caseName, string, ชื้อตามฟ้อง],
        'probationStartDate': this.formatDate(selectData.probationStartDate), // datetime,วันที่ศาลสั่งคุมประพฤติ],
        'probationStartDateSrc': this.formatDate(selectData.probationStartDateSrc), // datetime,วันที่ศาลสั่งคุมประพฤติ],
        'probationPlannedEndDateSrc': this.formatDate(selectData.probationPlannedEndDateSrc), // วันที่ครบกำหนดคุมประพฤติ],
        'probationActualEndDateSrc': this.formatDate(selectData.probationActualEndDateSrc), // วันที่พ้นคุมประพฤติ],
        'probationResult': this.changeNull(selectData.probationResult), // ผลคำสั่งศาล
        'probationEnddedReasonId': this.changeEnddedReason(selectData.probationEnddedReasonId), // string, สาเหตุการสิ้นสุด],
        'probationEnddedReason': this.changeNull(selectData.probationEnddedReason), // string, สาเหตุการสิ้นสุด],
        'probationStatus': this.changeStatus(selectData.probationStatus), // probationStatus, string, สถานะทะเบียนคดี],
        'dataSubmitDate': this.formatDate(selectData.dataSubmitDate), // dataSubmitDate, datetime, วันที่ปรับปรุงขอมูล]
        'decidedCaseId': this.changeNull(selectData.decidedCaseId), // หมายเลขคดีแดง
        'undecidedCaseId': this.changeNull(selectData.undecidedCaseId), // หมายเลขคดีดำ
        'courtName': this.changeNull(selectData.courtName), // หมายเลขคดีดำ
        'registerDate': this.formatDate(selectData.registerDate), // วันที่สำนวน
        'person': {
          'citizenCardNumber': selectData.citizenCardNumber,
          'fullName': selectData.firstName + ' ' + selectData.lastName,
          'sex': this.changeSex(selectData.sex),
          'dateOfBirth': this.formatDate(selectData.birthDateSrc)
        },
        'wartermarks': this.loadReportDetail(),
        'reportName' : this.reportName,
        'reportOfDate': this.reportOfDate,
        'reportOfTime': this.reportOfTime
      };
    }
    getData(): any {
        return this.dopprobationer;
    }

    /**
     * Getter $dataSet
     * @return {IDxc_Model_Dop_Probationer}
     */
    public get $dataSet(): IDxc_Model_Dop_Probationer {
        return this.dataSet;
    }

    /**
     * Setter $dataSet
     * @param {IDxc_Model_Dop_Probationer} value
     */
    public set $dataSet(value: IDxc_Model_Dop_Probationer) {
        this.dataSet = value;
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
        if (sex === '1') {
            return 'ชาย';
        } else if (sex === '2') {
            return 'หญิง';
        }else if (sex === 'MALE') {
          return 'ชาย';
        } else if (sex === 'FEMALE') {
        return 'หญิง';
        }else if (sex === 'OTHER') {
            return 'อื่นๆ';
        } else if (sex === 'null') {
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
    changeEnddedReason(EnddedReasonId: string) {
      if (EnddedReasonId == null) {
        return '-';
      } else if (EnddedReasonId == '0') {
        return 'ศาลไม่ได้สั่งคุม';
      } else if (EnddedReasonId == '1'){
        return 'ปฏิบัติตามเงื่อนไข';
      } else if (EnddedReasonId == '2'){
        return 'ศาลสูงเปลี่ยนแปลงคำพิพากษา';
      } else if (EnddedReasonId == '3'){
        return EnddedReasonId;
      } else if (EnddedReasonId == '4'){
        return 'จำคุก';
      } else if (EnddedReasonId == '5'){
        return 'ศาลออกหมายจับ';
      } else if (EnddedReasonId == '6'){
        return 'ตาย';
      } else if (EnddedReasonId == '7'){
        return 'แจ้งประเด็นกลับ';
      } else if (EnddedReasonId == '8'){
        return 'โอนกลับการโอนเบ็ดเสร็จ';
      } else if (EnddedReasonId == '9'){
        return 'โอนคดีแบบเบ็ดเสร็จ';
      } else if (EnddedReasonId == 'A'){
        return 'ไม่มารายงานตัว';
      } else if (EnddedReasonId == 'B'){
        return 'ถูกจับคดีใหม่';
      } else if (EnddedReasonId == 'C'){
        return 'ผิดเงื่อนไขคุมประพฤติ';
      } else if (EnddedReasonId == 'G'){
        return 'ได้รับการอภัยโทษ';
      } else if (EnddedReasonId == 'H'){
        return 'ไปต่างประเทศ';
      } else if (EnddedReasonId == 'I'){
        return 'เจ็บป่วย พิการร้ายแรง';
      } else {
        return EnddedReasonId;
      }
    }

    changeStatus(probationStatus: any) {
      if (probationStatus == '0') {
        return 'อยู่ระหว่างดำเนินการ';
      }
      else if (probationStatus == '1') {
        return 'เสร็จสิ้นการดำเนินการ';
      }else if (probationStatus == 'OTHER') {
        return 'อื่นๆ';
      } else if (probationStatus == 'null') {
        return '-';
      }else {
        return probationStatus;
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
          <div class="watermark2">
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark3">
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark4">
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark5">
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark6">
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark7">
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark8">
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark9">
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark10">
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark11">
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
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
