import * as moment from 'moment';

export interface IDxc_Model_Doc_ReleasedPrisoners {
    dataId: string;
    addressAmphurText: string;
    addressMooBanText: string;
    addressMooText: string;
    addressNoText: string;
    addressPostCode: string;
    addressProvinceText: string;
    addressRoadText: string;
    addressSoiText: string;
    addressTumbonText: string;
    allegation: string;
    amountOfTimesBreakDiscipline: string;
    citizenCardNumber: string;
    dataSource: string;
    dataSubmitDate: Date;
    dateOfBirth: string;
    decidedCaseId: string;
    educationLevel: string;
    educationProvince: string;
    educationSchool: string;
    firstName: string;
    judgement: string;
    lastName: string;
    nationality: string;
    policeCaseId: string;
    prisonName: string;
    prisonerId: string;
    receiveDate: string;
    releaseDate: string;
    religious: string;
    sentenceDate: string;
    sex: string;
    undecidedCaseId: string;
    sexCode: string;
    imposeTypeCode: string;
    nationalityCode: string;
    prisonCode: string;
    religiousCode: string;
    motherFirstName: string;
    fatherFirstName: string;
    motherLastName: string;
    fatherLastName: string;
    motherPrefix: string;
    fatherPrefix: string;

    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    reportBarcode: string;
    wartermarks: string;
    status: string;
    body: string[];
}

export class Dxc_Model_Doc_ReleasedPrisoners {
    releasedprisoners: any;
    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    private dataSet: IDxc_Model_Doc_ReleasedPrisoners;
    constructor(selectData: any) {
        moment.locale('th');
        this.releasedprisoners = {
            'dataId': this.changeNull(selectData.dataId),
            'addressAmphurText': this.changeNull(selectData.addressAmphurText),
            'addressMooBanText': this.changeNull(selectData.addressMooBanText),
            'addressMooText': this.changeNull(selectData.addressMooText),
            'addressNoText': this.changeNull(selectData.addressNoText),
            'addressPostCode': this.changeNull(selectData.addressPostCode),
            'addressProvinceText': this.changeNull(selectData.addressProvinceText),
            'addressRoadText': this.changeNull(selectData.addressRoadText),
            'addressSoiText': this.changeNull(selectData.addressSoiText),
            'addressTumbonText': this.changeNull(selectData.addressTumbonText),
            'allegation': this.changeNull(selectData.allegation),
            'amountOfTimesBreakDiscipline': this.changeNull(selectData.amountOfTimesBreakDiscipline),
            'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
            'dataSource': this.changeNull(selectData.dataSource),
            'dataSubmitDate': this.changeNull(this.formatDate(selectData.dataSubmitDate)),
            'dateOfBirth': this.changeNull(selectData.dateOfBirth),
            'decidedCaseId': this.changeNull(selectData.decidedCaseId),
            'educationLevel': this.changeNull(selectData.educationLevel),
            'educationProvince': this.changeNull(selectData.educationProvince),
            'educationSchool': this.changeNull(selectData.educationSchool),
            'firstName': this.changeNull(selectData.firstName),
            'judgement': this.changeNull(selectData.judgement),
            'lastName': this.changeNull(selectData.lastName),
            'nationality': this.changeNull(selectData.nationality),
            'policeCaseId': this.changeNull(selectData.policeCaseId),
            'prisonName': this.changeNull(selectData.prisonName),
            'prisonerId': this.changeNull(selectData.prisonerId),
            'receiveDate': this.changeNull(this.formatDate(selectData.receiveDate)),
            'releaseDate': this.changeNull(this.formatDate(selectData.releaseDate)),
            'religious': this.changeNull(selectData.religious),
            'sentenceDate': this.changeNull(this.formatDate(selectData.sentenceDate)),
            'sex': this.changeNull(this.changeSex(selectData.sex)),
            'undecidedCaseId': this.changeNull(selectData.undecidedCaseId),
            'sexCode': this.changeNull(selectData.sexCode),
            'imposeTypeCode': this.changeNull(selectData.imposeTypeCode),
            'nationalityCode': this.changeNull(selectData.nationalityCode),
            'prisonCode': this.changeNull(selectData.prisonCode),
            'religiousCode': this.changeNull(selectData.religiousCode),
            'motherFirstName': this.changeNull(selectData.motherFirstName),
            'fatherFirstName': this.changeNull(selectData.fatherFirstName),
            'motherLastName': this.changeNull(selectData.motherLastName),
            'fatherLastName': this.changeNull(selectData.fatherLastName),
            'motherPrefix': this.changeNull(selectData.motherPrefix),
            'fatherPrefix': this.changeNull(selectData.fatherPrefix),
            'person': {
                'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
                'fullName': this.changeNull(selectData.firstName) + ' ' + this.changeNull(selectData.lastName),
                'sex': this.changeNull(this.changeSex(selectData.sex)),
                'dateOfBirth': this.formatDate(selectData.dateOfBirth),
            },
            'wartermarks': this.loadReportDetail(),
            'reportName': this.reportName,
            'reportOfDate': this.reportOfDate,
            'reportOfTime': this.reportOfTime
        };
        this.dataSet = this.releasedprisoners;
    }

    getData(): any {
        return this.releasedprisoners;
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
        } else if (selectData == 'Invalid date') {
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

    /**
     * Getter $dataSet
     * @return {IDxc_Model_Doc_ReleasedPrisoners}
     */
    public get $dataSet(): IDxc_Model_Doc_ReleasedPrisoners {
        return this.dataSet;
    }

    /**
     * Setter $dataSet
     * @param {IDxc_Model_Doc_ReleasedPrisoners} value
     */
    public set $dataSet(value: IDxc_Model_Doc_ReleasedPrisoners) {
        this.dataSet = value;
    }
}
