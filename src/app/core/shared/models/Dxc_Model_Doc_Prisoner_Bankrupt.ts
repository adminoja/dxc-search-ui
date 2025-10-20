import * as moment from 'moment';

export interface IDxc_Model_Doc_Prisoner_Bankrupt {
  addressAmphurText: string; // อำเภอ (ปัจจุบัน) 
  addressMooBanText: string; // หมู่บ้าน(ปัจจุบัน) 
  addressMooText: string; // หมู่(ปัจจุบัน) 
  addressNoText: string; // บ้านเลขที่(ที่อยู่ปัจจุบัน) 
  addressPostCode: string; // จังหวัด(ปัจจุบัน) 
  addressProvinceText: string; // จังหวัด(ปัจจุบัน) 
  addressRoadText: string; // ถนน(ปัจจุบัน) 
  addressSoiText: string; // ซอย(ปัจจุบัน) 
  addressTumbonText: string; // ตำบล(ปัจจุบัน) 
  allegation: string;  // โทษฐาน 
  dateOfBirth: string; // วันเดือนปีเกิด 
  decidedCaseId: string; // เลขคดีแดง
  educationLevel: string; // ระดับการศึกษา 
  educationProvince: string;  // จังหวัดที่ตั้งของโรงเรียน 
  educationSchool: string; // สถานศึกษา 
  fatherFirstName: string; // ชื่อบิดา 
  fatherLastName: string; // สกุลบิดา 
  fatherPrefix: string; // คำนำหน้าชื่อบิดา 
  imposeTypeCode: string;  // รหัสผลของคำสั่งศาล(จากต้นทาง) 
  motherFirstName: string; // ชื่อมารดา 
  motherLastName: string; // สกุลมารดา 
  motherPrefix: string; // คำนำหน้าชื่อมารดา 
  nationality: string; // สัญชาติ 
  nationalityCode: string; // รหัสสัญชาติ(จากต้นทาง) 
  prisonCode: string; // รหัสเรือนจำ(จากต้นทาง) 
  prisonName: string; // เรือนจำ 
  prisonerId: string; // เลขที่นักโทษ 
  receiveDate: string; // วันที่รับตัว
  releaseDate: string; // วันที่ปล่อย
  religious: string; // ศาสนา
  religiousCode: string; // รหัสศาสนา(จากต้นทาง)
  sentenceDate: string; // วันที่ได้รับโทษ
  sexCode: string; // รหัสเพศ(จากต้นทาง)
  undecidedCaseId: string; // เลขคดีดำ
  citizenCardNumber: string; // เลขบัตรประชาชน
  firstName: string; // ชื่อ
  lastName: string; // สกุล
  sex: string; // เพศ
  courtName: string; // ชื่อศาล
  caseDate : string // วันที่ลงหมายศาล
  courtKey : string // รหัสศาล

  //ล้มละลาย
  blackCaseNumber:string; //เลขคดีดำ
  blackCaseYear: string; //ปีเลขคดีดำ
  redCaseNumber: string; // เลขคดีแดง
  redCaseYear: string; // ปีเลขคดีแดง


  status: string; // ex.status == '200'
  body: string[]; //
  reportName: string; // ผู้ขอรายงาน
  reportOfDate: string; // วันที่พิมรายงาน
  reportOfTime: string; // เวลาที่พิมรายงาน
  reportBarcode: string; // เลขที่เอกสาร(เลขบาร์โค๊ด)
  wartermarks: string;
}

export interface Dxc_Model_Doc_Prisoner_Bankrupt {
  addressAmphurText: string; // อำเภอ (ปัจจุบัน) 
  addressMooBanText: string; // หมู่บ้าน(ปัจจุบัน) 
  addressMooText: string; // หมู่(ปัจจุบัน) 
  addressNoText: string; // บ้านเลขที่(ที่อยู่ปัจจุบัน) 
  addressPostCode: string; // จังหวัด(ปัจจุบัน) 
  addressProvinceText: string; // จังหวัด(ปัจจุบัน) 
  addressRoadText: string; // ถนน(ปัจจุบัน) 
  addressSoiText: string; // ซอย(ปัจจุบัน) 
  addressTumbonText: string; // ตำบล(ปัจจุบัน) 
  allegation: string;  // โทษฐาน 
  dateOfBirth: string; // วันเดือนปีเกิด 
  decidedCaseId: string; // เลขคดีแดง
  educationLevel: string; // ระดับการศึกษา 
  educationProvince: string;  // จังหวัดที่ตั้งของโรงเรียน 
  educationSchool: string; // สถานศึกษา 
  fatherFirstName: string; // ชื่อบิดา 
  fatherLastName: string; // สกุลบิดา 
  fatherPrefix: string; // คำนำหน้าชื่อบิดา 
  imposeTypeCode: string;  // รหัสผลของคำสั่งศาล(จากต้นทาง) 
  motherFirstName: string; // ชื่อมารดา 
  motherLastName: string; // สกุลมารดา 
  motherPrefix: string; // คำนำหน้าชื่อมารดา 
  nationality: string; // สัญชาติ 
  nationalityCode: string; // รหัสสัญชาติ(จากต้นทาง) 
  prisonCode: string; // รหัสเรือนจำ(จากต้นทาง) 
  prisonName: string; // เรือนจำ 
  prisonerId: string; // เลขที่นักโทษ 
  receiveDate: string; // วันที่รับตัว 
  releaseDate: string; // วันที่ปล่อย 
  religious: string; // ศาสนา 
  religiousCode: string; // รหัสศาสนา(จากต้นทาง) 
  sentenceDate: Date; // วันที่ได้รับโทษ 
  sexCode: string; // รหัสเพศ(จากต้นทาง) 
  undecidedCaseId: string; // เลขคดีดำ 
  citizenCardNumber: string; // เลขบัตรประชาชน
  firstName: string; // ชื่อ
  lastName: string; // สกุล
  sex: string; // เพศ
  courtName: string; // ชื่อศาล
  caseDate : string // วันที่ลงหมายศาล
  courtKey : string // รหัสศาล

   //ล้มละลาย
   blackCaseNumber:string; //เลขคดีดำ
   blackCaseYear: string; //ปีเลขคดีดำ
   redCaseNumber: string; // เลขคดีแดง
   redCaseYear: string; // ปีเลขคดีแดง

  status: string; // ex.status == '200'
  body: string[]; //
  reportName: string; // ผู้ขอรายงาน
  reportOfDate: string; // วันที่พิมรายงาน
  reportOfTime: string; // เวลาที่พิมรายงาน
  reportBarcode: string; // เลขที่เอกสาร(เลขบาร์โค๊ด)
  wartermarks: string;
}

export class Dxc_Model_Doc_Prisoner_Bankrupt {
  docprisoner: any;
  private dataSet: IDxc_Model_Doc_Prisoner_Bankrupt;
  constructor(selectData: any) {
    moment.locale('th');
    this.docprisoner = {
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'firstName': this.changeNull(selectData.firstName),
      'lastName': this.changeNull(selectData.lastName),
      'sex': this.changeNull(selectData.sex),
      'addressAmphurText': this.changeNull(selectData.addressAmphurText), // อำเภอ (ปัจจุบัน)
      'addressMooBanText': this.changeNull(selectData.addressMooBanText), // หมู่บ้าน(ปัจจุบัน)
      'addressMooText': this.changeNull(selectData.addressMooText), // หมู่(ปัจจุบัน)
      'addressNoText': this.changeNull(selectData.addressNoText), // บ้านเลขที่(ที่อยู่ปัจจุบัน)
      'addressPostCode': this.changeNull(selectData.addressPostCode), // จังหวัด(ปัจจุบัน)
      'addressProvinceText': this.changeNull(selectData.addressProvinceText), // จังหวัด(ปัจจุบัน)
      'addressRoadText': this.changeNull(selectData.addressRoadText), // ถนน(ปัจจุบัน)
      'addressSoiText': this.changeNull(selectData.addressSoiText), // ซอย(ปัจจุบัน)
      'addressTumbonText': this.changeNull(selectData.addressTumbonText), // ตำบล(ปัจจุบัน)
      'allegation': this.changeNull(selectData.allegation),  // โทษฐาน
      'dataId': this.changeNull(selectData.dataId), // รหัสข้อมูล
      'dateOfBirth': this.formatDate(selectData.dateOfBirth), // วันเดือนปีเกิด
      'decidedCaseId': this.changeNull(selectData.decidedCaseId), // เลขคดีแดง
      'educationLevel': this.changeNull(selectData.educationLevel), // ระดับการศึกษา
      'educationProvince': this.changeNull(selectData.educationProvince),  // จังหวัดที่ตั้งของโรงเรียน
      'educationSchool': this.changeNull(selectData.educationSchool), // สถานศึกษา
      'fatherFirstName': this.changeNull(selectData.fatherFirstName), // ชื่อบิดา
      'fatherLastName': this.changeNull(selectData.fatherLastName), // สกุลบิดา
      'fatherPrefix': this.changeNull(selectData.fatherPrefix), // คำนำหน้าชื่อบิดา
      'imposeTypeCode': this.changeNull(selectData.imposeTypeCode),  // รหัสผลของคำสั่งศาล(จากต้นทาง)
      'motherFirstName': this.changeNull(selectData.motherFirstName), // ชื่อมารดา
      'motherLastName': this.changeNull(selectData.motherLastName), // สกุลมารดา
      'motherPrefix': this.changeNull(selectData.motherPrefix), // คำนำหน้าชื่อมารดา
      'nationality': this.changeNull(selectData.nationality), // สัญชาติ
      'nationalityCode': this.changeNull(selectData.nationalityCode), // รหัสสัญชาติ(จากต้นทาง)
      'prisonCode': this.changeNull(selectData.prisonCode), // รหัสเรือนจำ(จากต้นทาง)
      'prisonName': this.changeNull(selectData.prisonName), // เรือนจำ
      'prisonerId': this.changeNull(selectData.prisonerId), // เลขที่นักโทษ
      'receiveDate': this.formatDate(selectData.receiveDate), // วันที่รับตัว
      'releaseDate': this.changeNull(selectData.releaseDate), // วันที่ปล่อย
      'religious': this.changeNull(selectData.religious), // ศาสนา
      'religiousCode': this.changeNull(selectData.religiousCode), // รหัสศาสนา(จากต้นทาง)
      'sentenceDate': this.changeNull(selectData.sentenceDate), // วันที่ได้รับโทษ
      'sexCode': this.changeNull(selectData.sexCode), // รหัสเพศ(จากต้นทาง)
      'undecidedCaseId': this.changeNull(selectData.undecidedCaseId), // เลขคดีดำ
      'courtName': this.changeNull(selectData.courtName), // เลขคดีดำ
      'caseDate' : this.formatDate(selectData.caseDate), // วันที่ลงหมายศาล
      'courtKey' : this.changeNull(selectData.courtKey), // รหัสศาล
      'blackCaseNumber':this.changeNull(selectData.blackCaseNumber), //เลขคดีดำ
      'blackCaseYear': this.changeNull(selectData.blackCaseYear), //ปีเลขคดีดำ
      'redCaseNumber': this.changeNull(selectData.redCaseNumber), // เลขคดีแดง
      'redCaseYear': this.changeNull(selectData.redCaseYear), // ปีเลขคดีแดง
   
      
      'person': {
        'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
        'fullName': this.changeNull(selectData.firstName) + ' ' + this.changeNull(selectData.lastName),
        'sex': this.changeNull(selectData.sex),
        'dateOfBirth': this.formatDate(selectData.dateOfBirth),
      },
      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime
    };
    this.dataSet = this.docprisoner;
  }

  getData(): any {
    return this.docprisoner;
  }

  formatDate(birthDate: string): string {
    console.log(birthDate)
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
    } else if (sex === 'OTHER') {
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
   * @return {IDxc_Model_Doc_Prisoner_Bankrupt}
   */
  public get $dataSet(): IDxc_Model_Doc_Prisoner_Bankrupt {
    return this.dataSet;
  }

  /**
   * Setter $dataSet
   * @param {IDxc_Model_Doc_Prisoner_Bankrupt} value
   */
  public set $dataSet(value: IDxc_Model_Doc_Prisoner_Bankrupt) {
    this.dataSet = value;
  }
}
