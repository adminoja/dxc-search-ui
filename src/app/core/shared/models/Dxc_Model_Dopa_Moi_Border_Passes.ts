import * as moment from 'moment'
import { isEmpty } from 'rxjs/operators';


export interface IDxc_Model_Moi_Dopa_Border_Passes {

  bookNo: string;
  bookTypeDesc: string;
  borderName: string;
  borderPassNo: string;
  citizenCardNumber: string;
  dateOfBirth: string;
  dateOfReq: string;
  englistName: string;
  expireDate: string;
  genderText: string;
  height: string;
  houseAlleyDesc: string;
  houseAlleyWayDesc: string;
  houseDistrictDesc: string;
  houseNo: string;
  houseProvinceDesc: string;
  houseRoadDesc: string;
  houseSubdistrictDesc: string;
  houseVillageNo: string;
  id: string;
  occupation: string;
  personalID: string;
  reqNo: string;
  specialPeculiarities: string;
  statusOfRequest: number;
  thaiName: string;
  travelPurpose: string;

  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  wartermarks: string;
  status: string;
  body: string[];

}

export class Dxc_Model_Moi_Dopa_Border_Passes {
  dopamoiborderpasses: any;
  private dataSet: IDxc_Model_Moi_Dopa_Border_Passes;
  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  constructor(selectData: any) {
    moment.locale('th');
    console.log('TESTTTTTTTTTTTT' + selectData.dateOfBirth);

    this.dopamoiborderpasses = {
      // 'allCaseTypeId': this.changeNull(selectData.allCaseTypeId),
      'bookNo': this.changeNull(selectData.bookNo),
      'bookTypeDesc': this.changeNull(selectData.bookTypeDesc),
      'borderName': this.changeNull(selectData.borderName),
      'borderPassNo': this.changeNull(selectData.borderPassNo),
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'dateOfBirth': this.changeNull(selectData.dateOfBirth),
      'dateOfReq': this.changeNull(selectData.dateOfReq),
      'englistName': this.changeNull(selectData.englistName),
      'expireDate': this.changeNull(selectData.expireDate),
      'genderText': this.changeNull(selectData.genderText),
      'height': this.changeNull(selectData.height),
      'houseAlleyDesc': this.changeNull(selectData.houseAlleyDesc),
      'houseAlleyWayDesc': this.changeNull(selectData.houseAlleyWayDesc),
      'houseDistrictDesc': this.changeNull(selectData.houseDistrictDesc),
      'houseNo': this.changeNull(selectData.houseNo),
      'houseProvinceDesc': this.changeNull(selectData.houseProvinceDesc),
      'houseRoadDesc': this.changeNull(selectData.houseRoadDesc),
      'houseSubdistrictDesc': this.changeNull(selectData.houseSubdistrictDesc),
      'houseVillageNo': this.changeNull(selectData.houseVillageNo),
      'id': this.changeNull(selectData.id),
      'occupation': this.changeNull(selectData.occupation),
      'personalID': this.changeNull(selectData.personalID),
      'reqNo': this.changeNull(selectData.reqNo),
      'specialPeculiarities': this.changeNull(selectData.specialPeculiarities),
      'statusOfRequest': this.changeNull(this.changeStatus(selectData.statusOfRequest)),
      'thaiName': this.changeNull(selectData.thaiName),
      'travelPurpose': this.changeNull(selectData.travelPurpose),

      'person': {
        'citizenCardNumber': selectData.citizenCardNumber,
        'fullName': this.changeNull(selectData.thaiName) ,
        'sex': this.changeNull(selectData.genderText),
        'dateOfBirth': this.changeNull(selectData.dateOfBirth),
      },
      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfDate,
      'reportBarcode': this.reportBarcode

    };
    this.dataSet = this.dopamoiborderpasses;
  }

  setData(selectData: any) {
    this.dopamoiborderpasses = {
      // 'allCaseTypeId': this.changeNull(selectData.allCaseTypeId),
      'bookNo': this.changeNull(selectData.bookNo),
      'bookTypeDesc': this.changeNull(selectData.bookTypeDesc),
      'borderName': this.changeNull(selectData.borderName),
      'borderPassNo': this.changeNull(selectData.borderPassNo),
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'dateOfBirth': this.formatDate(selectData.dateOfBirth),
      'dateOfReq': this.formatDate(selectData.dateOfReq),
      'englistName': this.changeNull(selectData.englistName),
      'expireDate': this.formatDate(selectData.expireDate),
      'genderText': this.changeNull(selectData.genderText),
      'height': this.changeNull(selectData.height),
      'houseAlleyDesc': this.changeNull(selectData.houseAlleyDesc),
      'houseAlleyWayDesc': this.changeNull(selectData.houseAlleyWayDesc),
      'houseDistrictDesc': this.changeNull(selectData.houseDistrictDesc),
      'houseNo': this.changeNull(selectData.houseNo),
      'houseProvinceDesc': this.changeNull(selectData.houseProvinceDesc),
      'houseRoadDesc': this.changeNull(selectData.houseRoadDesc),
      'houseSubdistrictDesc': this.changeNull(selectData.houseSubdistrictDesc),
      'houseVillageNo': this.changeNull(selectData.houseVillageNo),
      'id': this.changeNull(selectData.id),
      'occupation': this.changeNull(selectData.occupation),
      'personalID': this.changeNull(selectData.personalID),
      'reqNo': this.changeNull(selectData.reqNo),
      'specialPeculiarities': this.changeNull(selectData.specialPeculiarities),
      'statusOfRequest': this.changeNull(this.changeStatus(selectData.statusOfRequest)),
      'thaiName': this.changeNull(selectData.thaiName),
      'travelPurpose': this.changeNull(selectData.travelPurpose),

      'person': {
        'citizenCardNumber': selectData.citizenCardNumber,
        'fullName': this.changeNull(selectData.thaiName) ,
        'sex': this.changeNull(selectData.genderText),
        'dateOfBirth': this.changeNull(this.formatDate(selectData.dateOfBirth)),
      },
      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfDate,
      'reportBarcode': this.reportBarcode

    };
  }

  getData(): any {
    return this.dopamoiborderpasses;
  }


    /**
     * Getter $dataSet
     * @return {IDxc_Model_Moi_Dopa_Border_Passes}
     */
	public get $dataSet(): IDxc_Model_Moi_Dopa_Border_Passes {
		return this.dataSet;
	}

    /**
     * Setter $dataSet
     * @param {IDxc_Model_Moi_Dopa_Border_Passes} value
     */
	public set $dataSet(value: IDxc_Model_Moi_Dopa_Border_Passes) {
		this.dataSet = value;
	}


  formatDate(birthDate: string): string {
    let date = `${birthDate}`;
    const year = date.substring(0, 4);
    const month = date.substring(4, 6);
    const day = date.substring(6, 8);
    if (birthDate === 'null') {
      return '-';
    } else if (birthDate == null) {
      return '-';
    } else if (day == '00') {
      return '-';
    } else {
      const thmonth = new Array('มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
        'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม');
      const d = new Date(month);
      return `${day} ${thmonth[d.getMonth()]} ${year}`;
    }
  }

  changeStatus(status: number) {
    if (status === 0) {
      return 'ปกติ';
    } else if (status === 0) {
      return 'ยกเลิก';
    } else if (status === null) {
      return '-';
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
