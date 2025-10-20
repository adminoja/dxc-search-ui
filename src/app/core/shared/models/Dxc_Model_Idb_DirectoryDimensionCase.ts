import * as moment from 'moment';
export interface IPerson {
  citizenCardNumber: string;
  fullName: string;
  sex: string;
  dateOfBirth: Date;
}

export interface IDxc_Model_Idb_DirectoryDimensionCase {

    id: string;
    generalCourtTypeName: string;
    generalCourtName: string;
    generallcBlackFile: string;
    generallcRedFile: string;
    courtresultJudgementDate: string;
    courtresultCourtResultName: string;
    generallcOfficeName: string;
    generallcLcType: number;
    generallcRcNumber: string;
    year: number;
    generallcRecDate: string;
    generallcPoliceName: string;
    generallcPoliceProvName: string;
    generalInqnumber: string;
    generallcCouDate: string;
    generallcOffencesTypeName: string;
    generalIncedentDate: string;
    areaTambolName: string;
    areaAmphurName: string;
    areaProvinceName: string;
    
    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    reportBarcode: string;
    wartermarks: string;
    person: IPerson;
}

export class Dxc_Model_Idb_DirectoryDimensionCase {
    agothDirectoryDimensionCase: any;
    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    private dataSet: IDxc_Model_Idb_DirectoryDimensionCase;
    constructor(selectData: any) {
        this.agothDirectoryDimensionCase = {
            'id': this.changeNull(selectData.id),
            'generalCourtTypeName': this.changeNull(selectData.generalCourtTypeName),
            'generalCourtName': this.changeNull(selectData.generalCourtName),
            'generallcBlackFile': this.changeNull(selectData.generallcBlackFile),
            'generallcRedFile': this.changeNull(selectData.generallcRedFile),
            'courtresultJudgementDate': this.formatDate(selectData.courtresultJudgementDate),
            'courtresultCourtResultName': this.changeNull(selectData.courtresultCourtResultName),
            'generallcOfficeName': this.changeNull(selectData.generallcOfficeName),
            'generallcLcType': this.changeNull(selectData.generallcLcType),
            'generallcRcNumber': this.changeNull(selectData.generallcRcNumber),
            'year': this.changeNull(selectData.year),
            'generallcRecDate': this.changeNull(selectData.generallcRecDate),
            'generallcPoliceName': this.changeNull(selectData.generallcPoliceName),
            'generallcPoliceProvName': this.changeNull(selectData.generallcPoliceProvName),
            'generalInqnumber': this.changeNull(selectData.generalInqnumber),
            'generallcCouDate': this.formatDate(selectData.generallcCouDate),
            'generallcOffencesTypeName': this.changeNull(selectData.generallcOffencesTypeName),
            'generalIncedentDate': this.formatDate(selectData.generalIncedentDate),
            'areaTambolName': this.changeNull(selectData.areaTambolName),
            'areaAmphurName': this.changeNull(selectData.areaAmphurName),
            'areaProvinceName': this.changeNull(selectData.areaProvinceName),
            'person': {
                'citizenCardNumber': '',
                'fullName': '',
                'sex': '',
                'dateOfBirth': '',
            },
            'wartermarks': this.loadReportDetail(),
            'reportName': this.reportName,
            'reportOfDate': this.reportOfDate,
            'reportOfTime': this.reportOfTime,
        };
        this.dataSet = this.agothDirectoryDimensionCase;
    }
    getData(): any {
        return this.agothDirectoryDimensionCase;
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
        if (selectData == null || selectData == 'null' || selectData == 'NULL') {
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
     * @return {IDxc_Model_Idb_DirectoryDimensionCase}
     */
    public get $dataSet(): IDxc_Model_Idb_DirectoryDimensionCase {
        return this.dataSet;
    }

    /**
     * Setter $dataSet
     * @param {IDxc_Model_Idb_DirectoryDimensionCase} value
     */
    public set $dataSet(value: IDxc_Model_Idb_DirectoryDimensionCase) {
        this.dataSet = value;
    }

}
