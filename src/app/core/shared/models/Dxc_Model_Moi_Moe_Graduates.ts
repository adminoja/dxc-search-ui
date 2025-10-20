import * as moment from "moment";

export interface IDxc_Model_Moi_Moe_Graduates {
    academicYear: string;         // ปีที่สำเร็จการศึกษา
    courseName: string;           // สาขางาน
    degreeName: string;           // วุฒิการศึกษา
    departmentNameThai: string;   // หน่วยงานต้นสังกัด
    educationLevelName: string;   // ระดับการศึกษา
    firstName: string;            // ชื่อ
    gpax: string;                 // ผลการเรียนเฉลี่ยสะสม
    graduateDate: string;         // วันที่สำเร็จการศึกษา
    lastName: string;             // นามสกุล
    majorName: string;            // ประเภทวิชา
    personID: string;             // เลขบัตรประจำตัวประชาชน
    prefixName: string;           // คำนำหน้าชื่อ
    programName: string;          // สาขาวิชา
    schoolID: string;             // รหัสสถานศึกษา
    schoolName: string;           // ชื่อสถานศึกษา
    semester: string;             // ภาคการศึกษา

    reportName?: string; // ผู้ขอรายงาน
    reportOfDate?: string; // วันที่พิมรายงาน
    reportOfTime?: string; // เวลาที่พิมรายงาน
    reportBarcode?: string; // เลขที่เอกสาร(เลขบาร์โค๊ด)
    wartermarks?: string;
    body?: any;
    status?: any;
}

export interface Dxc_Model_Moi_Moe_Graduates {
    academicYear: string;         // ปีที่สำเร็จการศึกษา
    courseName: string;           // สาขางาน
    degreeName: string;           // วุฒิการศึกษา
    departmentNameThai: string;   // หน่วยงานต้นสังกัด
    educationLevelName: string;   // ระดับการศึกษา
    firstName: string;            // ชื่อ
    gpax: string;                 // ผลการเรียนเฉลี่ยสะสม
    graduateDate: string;         // วันที่สำเร็จการศึกษา
    lastName: string;             // นามสกุล
    majorName: string;            // ประเภทวิชา
    personID: string;             // เลขบัตรประจำตัวประชาชน
    prefixName: string;           // คำนำหน้าชื่อ
    programName: string;          // สาขาวิชา
    schoolID: string;             // รหัสสถานศึกษา
    schoolName: string;           // ชื่อสถานศึกษา
    semester: string;             // ภาคการศึกษา

    reportName?: string; // ผู้ขอรายงาน
    reportOfDate?: string; // วันที่พิมรายงาน
    reportOfTime?: string; // เวลาที่พิมรายงาน
    reportBarcode?: string; // เลขที่เอกสาร(เลขบาร์โค๊ด)
    wartermarks?: string;
    body?: any;
    status?: any;
}

export class Dxc_Model_Moi_Moe_Graduates {
    dopastudents: any;
    private dataSet: IDxc_Model_Moi_Moe_Graduates;
    constructor(selectData: any) {
        this.dopastudents = {
            'academicYear': this.changeNull(selectData.academicYear),
            'courseName': this.changeNull(selectData.courseName),
            'degreeName': this.changeNull(selectData.degreeName),
            'departmentNameThai': this.changeNull(selectData.departmentNameThai),
            'educationLevelName': this.changeNull(selectData.educationLevelName),
            'firstName': this.changeNull(selectData.firstName),
            'gpax': this.changeNull(selectData.gpax),
            'graduateDate': this.changeNull(selectData.graduateDate),
            'lastName': this.changeNull(selectData.lastName),
            'majorName': this.changeNull(selectData.majorName),
            'personID': this.changeNull(selectData.personID),
            'prefixName': this.changeNull(selectData.prefixName),
            'programName': this.changeNull(selectData.programName),
            'schoolID': this.changeNull(selectData.schoolID),
            'schoolName': this.changeNull(selectData.schoolName),
            'semester': this.changeNull(selectData.semester),

            'wartermarks': this.loadReportDetail(),
            'reportName': this.reportName,
            'reportOfDate': this.reportOfDate,
            'reportOfTime': this.reportOfTime,
            'person': {
                'citizenCardNumber': this.changeNull(selectData.personID),
                'fullName': this.changeNull(selectData.firstName) + ' ' + this.changeNull(selectData.lastName),
                'sex': '',
                'dateOfBirth': '',
            },

        };
        this.dataSet = this.dopastudents;
    }

    getData(): any {
        return this.dopastudents;
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
        if (sex == 'MALE') {
        return 'ชาย';
        } else if (sex == 'FEMALE') {
        return 'หญิง';
        } else if (sex == 'OTHER') {
        return 'อื่นๆ';
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
   * @return {IDxc_Model_Moi_Moe_Graduates}
   */
  public get $dataSet(): IDxc_Model_Moi_Moe_Graduates {
    return this.dataSet;
  }

  /**
   * Setter $dataSet
   * @param {IDxc_Model_Moi_Moe_Graduates} value
   */
  public set $dataSet(value: IDxc_Model_Moi_Moe_Graduates) {
    this.dataSet = value;
  }


}