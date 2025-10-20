import * as moment from 'moment';
export interface IPerson {
  citizenCardNumber: string;
  fullName: string;
  sex: string;
  dateOfBirth: Date;
}
export interface IDxc_Model_Dlt_CarLicenseNew {
  citizenCardNumber: string;
  addressOwner1: string;
  addressOwner2: string;
  brnDesc: string;
  colorDesc: string;
  carStatus: string;
  cc: string;
  cly: string;
  docNo1: string;
  docNo2: string;
  engBrnDesc: string;
  expDate: string;
  fuelDesc: string;
  gasNoList: string;
  holdFlag: string;
  kindDesc: string;
  lastChkDate: string;
  lastSignDate: string;
  mfgYear: string;
  vehicleModelName: string;
  note: string;
  noteDate: string;
  numBody: string;
  numEng: string;
  offLocCode: string;
  offLocDesc: string;
  oldLastSignDate: string;
  owner1: string;
  owner2: string;
  plate1: string;
  plate2: string;
  regDate: string;
  vehTypeDesc: string;
  wgtCar: string;
  carChkMasColorListText: string;
  modelName: string;

  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  wartermarks: string;
  status: string;
  body: string[];
}
export class Dxc_Model_Dlt_CarLicenseNew {
  dltvehicleLicense: any;
  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  private dataSet: IDxc_Model_Dlt_CarLicenseNew;
  constructor(selectData: any) {
    this.dltvehicleLicense = {
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'addressOwner1': this.changeNull(selectData.addressOwner1),
      'addressOwner2': this.changeNull(selectData.addressOwner2),
      'brnDesc': this.changeNull(selectData.brnDesc),
      'colorDesc': this.changeNull(selectData.colorDesc),
      'carStatus': this.changeNull(selectData.carStatus),
      'cc': this.changeNull(selectData.cc),
      'cly': this.changeNull(selectData.cly),
      'docNo1': this.changeNull(selectData.docNo1),
      'docNo2': this.changeNull(selectData.docNo2),
      'engBrnDesc': this.changeNull(selectData.engBrnDesc),
      'expDate': this.changeNull(selectData.expDate),
      'fuelDesc': this.changeNull(selectData.fuelDesc),
      'gasNoList': this.changeNull(selectData.gasNoList),
      'holdFlag': this.changeNull(selectData.holdFlag),
      'kindDesc': this.changeNull(selectData.kindDesc),
      'lastChkDate': this.changeNull(selectData.lastChkDate),
      'lastSignDate': this.changeNull(selectData.lastSignDate),
      'mfgYear': this.changeNull(selectData.mfgYear),
      'vehicleModelName': this.changeNull(selectData.vehicleModelName),
      'note': this.changeNull(selectData.note),
      'noteDate': this.changeNull(selectData.noteDate),
      'numBody': this.changeNull(selectData.numBody),
      'numEng': this.changeNull(selectData.numEng),
      'offLocCode': this.changeNull(selectData.offLocCode),
      'offLocDesc': this.changeNull(selectData.offLocDesc),
      'oldLastSignDate': this.changeNull(selectData.oldLastSignDate),
      'owner1': this.changeNull(selectData.owner1),
      'owner2': this.changeNull(selectData.owner2),
      'plate1': this.changeNull(selectData.plate1),
      'plate2': this.changeNull(selectData.plate2),
      'regDate': this.changeNull(selectData.regDate),
      'vehTypeDesc': this.changeNull(selectData.vehTypeDesc),
      'wgtCar': this.changeNull(selectData.wgtCar),
      'carChkMasColorListText': this.changeNull(selectData.carChkMasColorListText),
      'modelName': this.changeNull(selectData.modelName),
      'person': {
        'citizenCardNumber': this.changeNull(selectData.docNo1),
        'fullName': '',
        'sex': '',
        'dateOfBirth': ''
      },
      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime
    };
    this.dataSet = this.dltvehicleLicense;
  }
  setData(selectData: any) {
    this.dltvehicleLicense = {
      'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
      'addressOwner1': this.changeNull(selectData.addressOwner1),
      'addressOwner2': this.changeNull(selectData.addressOwner2),
      'brnDesc': this.changeNull(selectData.brnDesc),
      'colorDesc': this.changeNull(selectData.colorDesc),
      'carStatus': this.changeNull(selectData.carStatus),
      'cc': this.changeNull(selectData.cc),
      'cly': this.changeNull(selectData.cly),
      'docNo1': this.changeNull(selectData.docNo1),
      'docNo2': this.changeNull(selectData.docNo2),
      'engBrnDesc': this.changeNull(selectData.engBrnDesc),
      'expDate': this.formatDate(selectData.expDate),
      'fuelDesc': this.changeNull(selectData.fuelDesc),
      'gasNoList': this.changeNull(selectData.gasNoList),
      'holdFlag': this.changeNull(selectData.holdFlag),
      'kindDesc': this.changeNull(selectData.kindDesc),
      'lastChkDate': this.changeNull(selectData.lastChkDate),
      'lastSignDate': this.changeNull(selectData.lastSignDate),
      'mfgYear': this.changeNull(selectData.mfgYear),
      'vehicleModelName': this.changeNull(selectData.vehicleModelName),
      'note': this.changeNull(selectData.note),
      'noteDate': this.changeNull(selectData.noteDate),
      'numBody': this.changeNull(selectData.numBody),
      'numEng': this.changeNull(selectData.numEng),
      'offLocCode': this.changeNull(selectData.offLocCode),
      'offLocDesc': this.changeNull(selectData.offLocDesc),
      'oldLastSignDate': this.changeNull(selectData.oldLastSignDate),
      'owner1': this.changeNull(selectData.owner1),
      'owner2': this.changeNull(selectData.owner2),
      'plate1': this.changeNull(selectData.plate1),
      'plate2': this.changeNull(selectData.plate2),
      'regDate': this.formatDate(selectData.regDate),
      'vehTypeDesc': this.changeNull(selectData.vehTypeDesc),
      'wgtCar': this.changeNull(selectData.wgtCar),
      'carChkMasColorListText': this.changeNull(selectData.carChkMasColorListText),
      'modelName': this.changeNull(selectData.modelName),
      'person': {
        'citizenCardNumber': this.changeNull(selectData.docNo1),
        'fullName': '',
        'sex': '',
        'dateOfBirth': ''
      },
      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime
    };
  }
  getData(): any {
    return this.dltvehicleLicense;
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
    if (selectData == null || selectData == '' || selectData == 'null') {
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
   * @return {IDxc_Model_Dlt_DriverLicenseNew}
   */
  public get $dataSet(): IDxc_Model_Dlt_CarLicenseNew {
    return this.dataSet;
  }
  /**
   * Setter $dataSet
   * @param {IDxc_Model_Dlt_DriverLicenseNew} value
   */
  public set $dataSet(value: IDxc_Model_Dlt_CarLicenseNew) {
    this.dataSet = value;
  }
}
