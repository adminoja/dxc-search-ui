import * as moment from 'moment';
export interface IDxc_Model_Mof_register_Of_Taxpayers {
    
    tin: string;
    title: string;
    firstName: string;
    lastName: string;
    buildingName: string;
    floorNumber: string;
    houseIdNumber: string;
    roomNumber: string;
    houseNumber: string;
    mooNumber: string;
    yaek: string;
    villageName: string;
    soiName: string;
    streetName: string;
    thambolName: string;
    amphurName: string;
    provinceName: string;
    postCode: string,

    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    reportBarcode: string;
    wartermarks: string;
    status: string;
    body: string[];
}
export class Dxc_Model_Mof_register_Of_Taxpayers {
    private dataSet: IDxc_Model_Mof_register_Of_Taxpayers;
    registerOfTaxpayers: any;
    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    constructor(selectData: any) {
        this.registerOfTaxpayers = {
            'tin': this.changeNull(selectData.tin),
            'title': this.changeNull(selectData.title),
            'firstName': this.changeNull(selectData.firstName),
            'lastName': this.changeNull(selectData.lastName),
            'buildingName': this.changeNull(selectData.buildingName),
            'floorNumber': this.changeNull(selectData.floorNumber),
            'houseIdNumber': this.changeNull(selectData.houseIdNumber),
            'roomNumber': this.changeNull(selectData.roomNumber),
            'houseNumber': this.changeNull(selectData.houseNumber),
            'mooNumber': this.changeNull(selectData.mooNumber),
            'yaek': this.changeNull(selectData.yaek),
            'villageName': this.changeNull(selectData.villageName),
            'soiName': this.changeNull(selectData.soiName),
            'streetName': this.changeNull(selectData.streetName),
            'thambolName': this.changeNull(selectData.thambolName),
            'amphurName': this.changeNull(selectData.amphurName),
            'provinceName': this.changeNull(selectData.provinceName),
            'postCode': this.changeNull(selectData.postCode),
            'person': {
              'citizenCardNumber': this.changeNull(selectData.tin),
              'fullName':  this.changeNull(selectData.firstName) + ' ' + this.changeNull(selectData.lastName),
              'sex': '',
              'dateOfBirth': ''
            },
            'wartermarks': this.loadReportDetail(),
            'reportName' : this.reportName,
            'reportOfDate': this.reportOfDate,
            'reportOfTime': this.reportOfTime
        };
        this.dataSet = this.registerOfTaxpayers;
    }

    setData(selectData: any) {
        this.registerOfTaxpayers = {
            'tin': this.changeNull(selectData.tin),
            'title': this.changeNull(selectData.title),
            'firstName': this.changeNull(selectData.firstName),
            'lastName': this.changeNull(selectData.lastName),
            'buildingName': this.changeNull(selectData.buildingName),
            'floorNumber': this.changeNull(selectData.floorNumber),
            'houseIdNumber': this.changeNull(selectData.houseIdNumber),
            'roomNumber': this.changeNull(selectData.roomNumber),
            'houseNumber': this.changeNull(selectData.houseNumber),
            'mooNumber': this.changeNull(selectData.mooNumber),
            'yaek': this.changeNull(selectData.yaek),
            'villageName': this.changeNull(selectData.villageName),
            'soiName': this.changeNull(selectData.soiName),
            'streetName': this.changeNull(selectData.streetName),
            'thambolName': this.changeNull(selectData.thambolName),
            'amphurName': this.changeNull(selectData.amphurName),
            'provinceName': this.changeNull(selectData.provinceName),
            'postCode': this.changeNull(selectData.postCode),
            'person': {
              'citizenCardNumber': this.changeNull(selectData.tin),
              'fullName':  this.changeNull(selectData.firstName) + ' ' + this.changeNull(selectData.lastName),
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
        return this.registerOfTaxpayers;
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
     * @return {IDxc_Model_Mof_register_Of_Taxpayers}
     */
    public get $dataSet(): IDxc_Model_Mof_register_Of_Taxpayers {
        return this.dataSet;
    }

    /**
     * Setter $dataSet
     * @param {IDxc_Model_Mof_register_Of_Taxpayers} value
     */
    public set $dataSet(value: IDxc_Model_Mof_register_Of_Taxpayers) {
        this.dataSet = value;
    }

}
