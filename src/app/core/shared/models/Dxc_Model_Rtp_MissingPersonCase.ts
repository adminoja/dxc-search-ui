import * as moment from 'moment';
export interface IPerson {
    citizenCardNumber: string;
    fullName: string;
    sex: string;
    dateOfBirth: Date;
}
export interface IDxc_Model_Rtp_MissingPersonCase {

    id: number; // รหัสข้อมูล
    citizenCardNumber: string; // เลขบัตรประชาชน
    firstName: string; // ชื่อ
    lastName: string; // นามสกุล
    sex: string; // เพศ
    dress: string; // การแต่งกาย
    height: string; // ส่วนสูง
    weight: string; // น้ำหนัก
    bodyTypeCodeName: string; // รหัสรูปร่าง ตอนแรกเป็น number
    skinTypeCodeName: string; // รหัสลักษณะผิว ตอนแรกเป็น number
    hairTypeCodeName: string; // รหัสลักษณะผม ตอนแรกเป็น number
    eyeTypeCodeName: string; // รหัสลักษณะตา ตอนแรกเป็น number
    missingDate: string; // วันที่หาย
    missingPlaceName: string; // สถานที่หาย
    reportDate: string; // วันที่รายงาน
    suspectPlace: string; // สถานที่สงสัย
    reportStation: string; // สถานีตำรวจที่รับเรื่อง
    investigatorFullName: string; // ชื่อตำรวจที่รับเรื่อง
    contact: string; // สถานที่ติดต่อ
    dataSubmitDate: string; // วันที่ปรับปรุงขอมูล

    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    reportBarcode: string;
    wartermarks: string;
    status: string;
    body: string[];
    person: IPerson;
}

export class Dxc_Model_Rtp_MissingPersonCase {
    missingpersoncase: any;
    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    reportBarcode: string;
    wartermarks: string;
    private dataSet: IDxc_Model_Rtp_MissingPersonCase;
    constructor(selectData: any) {
        this.missingpersoncase = {
            'id': this.changeNull(selectData.id),
            'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
            'firstName': this.changeNull(selectData.firstName),
            'lastName': this.changeNull(selectData.lastName),
            'sex': this.changeNull(selectData.sex),
            'dress': this.changeNull(selectData.dress),
            'height': this.changeNull(selectData.height),
            'weight': this.changeNull(selectData.weight),
            'bodyTypeCodeName': this.changeNull(selectData.bodyTypeCodeName),
            'skinTypeCodeName': this.changeNull(selectData.skinTypeCodeName),
            'hairTypeCodeName': this.changeNull(selectData.hairTypeCodeName),
            'eyeTypeCodeName': this.changeNull(selectData.eyeTypeCodeName),
            'missingDate': this.changeNull(selectData.missingDate),
            'missingPlaceName': this.changeNull(selectData.missingPlaceName),
            'reportDate': this.changeNull(this.formatDate(selectData.reportDate)),
            'suspectPlace': this.changeNull(selectData.suspectPlace),
            'reportStation': this.changeNull(selectData.reportStation),
            'investigatorFullName': this.changeNull(selectData.investigatorFullName),
            'contact': this.changeNull(selectData.contact),
            'dataSubmitDate': this.changeNull(selectData.dataSubmitDate),

            'wartermarks': this.loadReportDetail(),
            'reportName': this.reportName,
            'reportOfDate': this.reportOfDate,
            'reportOfTime': this.reportOfTime,
            'reportBarcode': this.reportBarcode,
            'person': {
                'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
                'fullName': this.changeNull(selectData.firstName) + ' ' + this.changeNull(selectData.lastName),
                'sex': this.changeNull(selectData.sex),
                'dateOfBirth': ''
            },
        };
        this.dataSet = this.missingpersoncase;
    }
    setData(selectData: any) {
      this.missingpersoncase = {
        'id': this.changeNull(selectData.id),
        'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
        'firstName': this.changeNull(selectData.firstName),
        'lastName': this.changeNull(selectData.lastName),
        'sex': this.changeSex(selectData.sex),
        'dress': this.changeNull(selectData.dress),
        'height': this.changeNull(selectData.height),
        'weight': this.changeNull(selectData.weight),
        'bodyTypeCodeName': this.changeNull(selectData.bodyTypeCodeName),
        'skinTypeCodeName': this.changeNull(selectData.skinTypeCodeName),
        'hairTypeCodeName': this.changeNull(selectData.hairTypeCodeName),
        'eyeTypeCodeName': this.changeNull(selectData.eyeTypeCodeName),
        'missingDate': this.formatDate(selectData.missingDate),
        'missingPlaceName': this.changeNull(selectData.missingPlaceName),
        'reportDate': this.changeNull(selectData.reportDate),
        'suspectPlace': this.changeNull(selectData.suspectPlace),
        'reportStation': this.changeNull(selectData.reportStation),
        'investigatorFullName': this.changeNull(selectData.investigatorFullName),
        'contact': this.changeNull(selectData.contact),
        'dataSubmitDate': this.changeNull(selectData.dataSubmitDate),

        'wartermarks': this.loadReportDetail(),
        'reportName': this.reportName,
        'reportOfDate': this.reportOfDate,
        'reportOfTime': this.reportOfTime,
        'reportBarcode': this.reportBarcode,
        'person': {
            'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
            'fullName': this.changeNull(selectData.firstName) + ' ' + this.changeNull(selectData.lastName),
            'sex': this.changeSex(selectData.sex),
            'dateOfBirth': ''
        },
    };
    }
    getData(): any {
        return this.missingpersoncase;
    }
    formatDate(dateOfBirth: string): string {

      const date = new Date(dateOfBirth);
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear() + 543;
      if (dateOfBirth === 'null') {
          return '-';
      }
      if (dateOfBirth === null) {
        return '-';
      } else {
          const thmonth = new Array ('มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
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
        }
        if (selectData == '0') {
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
     * @return {IDxc_Model_Rtp_MissingPersonCase}
     */
    public get $dataSet(): IDxc_Model_Rtp_MissingPersonCase {
        return this.dataSet;
    }

    /**
     * Setter $dataSet
     * @param {IDxc_Model_Rtp_MissingPersonCase} value
     */
    public set $dataSet(value: IDxc_Model_Rtp_MissingPersonCase) {
        this.dataSet = value;
    }

}
