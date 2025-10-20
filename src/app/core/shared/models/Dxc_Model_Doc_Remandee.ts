import * as moment from 'moment';

export interface IDxc_Model_Doc_Remandee {
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
    amountOfTimesBreakDiscipline: 0;
    citizenCardNumber: string;
    dataId: string;
    dataSource: string;
    dataSubmitDate: string;
    dateOfBirth: string;
    decidedCaseId: string;
    educationLevel: string;
    educationProvince: string;
    educationSchool: string;
    fatherFirstName: string;
    fatherLastName: string;
    fatherPrefix: string;
    firstName: string;
    imposeTypeCode: string;
    judgement: string;
    lastName: string;
    motherFirstName: string;
    motherLastName: string;
    motherPrefix: string;
    nationality: string;
    nationalityCode: string;
    policeCaseId: string;
    prisonCode: string;
    prisonName: string;
    prisonerId: string;
    receiveDate: string;
    releaseDate: string;
    religious: string;
    religiousCode: string;
    sentenceDate: string;
    sex: string;
    sexCode: string;
    undecidedCaseId: string;

    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    reportBarcode: string;
    wartermarks: string;
    status: string;
    body: string[];
}

export interface Dxc_Model_Doc_Remandee {
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
    amountOfTimesBreakDiscipline: 0;
    citizenCardNumber: string;
    dataId: string;
    dataSource: string;
    dataSubmitDate: string;
    dateOfBirth: string;
    decidedCaseId: string;
    educationLevel: string;
    educationProvince: string;
    educationSchool: string;
    fatherFirstName: string;
    fatherLastName: string;
    fatherPrefix: string;
    firstName: string;
    imposeTypeCode: string;
    judgement: string;
    lastName: string;
    motherFirstName: string;
    motherLastName: string;
    motherPrefix: string;
    nationality: string;
    nationalityCode: string;
    policeCaseId: string;
    prisonCode: string;
    prisonName: string;
    prisonerId: string;
    receiveDate: string;
    releaseDate: string;
    religious: string;
    religiousCode: string;
    sentenceDate: string;
    sex: string;
    sexCode: string;
    undecidedCaseId: string;

    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    reportBarcode: string;
    wartermarks: string;
    status: string;
    body: string[];
}

export class Dxc_Model_Doc_Remandee {
    docremandee: any;
    private dataSet: IDxc_Model_Doc_Remandee;
    constructor(selectData: any) {
        moment.locale('th');
        this.docremandee = {
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
            'dataId': this.changeNull(selectData.dataId),
            'dataSource': this.changeNull(selectData.dataSource),
            'dataSubmitDate': this.changeNull(selectData.dataSubmitDate),
            'dateOfBirth': this.changeNull(selectData.dateOfBirth),
            'decidedCaseId': this.changeNull(selectData.decidedCaseId),
            'educationLevel': this.changeNull(selectData.educationLevel),
            'educationProvince': this.changeNull(selectData.educationProvince),
            'educationSchool': this.changeNull(selectData.educationSchool),
            'fatherFirstName': this.changeNull(selectData.fatherFirstName),
            'fatherLastName': this.changeNull(selectData.fatherLastName),
            'fatherPrefix': this.changeNull(selectData.fatherPrefix),
            'firstName': this.changeNull(selectData.firstName),
            'imposeTypeCode': this.changeNull(selectData.imposeTypeCode),
            'judgement': this.changeNull(selectData.judgement),
            'lastName': this.changeNull(selectData.lastName),
            'motherFirstName': this.changeNull(selectData.motherFirstName),
            'motherLastName': this.changeNull(selectData.motherLastName),
            'motherPrefix': this.changeNull(selectData.motherPrefix),
            'nationality': this.changeNull(selectData.nationality),
            'nationalityCode': this.changeNull(selectData.nationalityCode),
            'policeCaseId': this.changeNull(selectData.policeCaseId),
            'prisonCode': this.changeNull(selectData.prisonCode),
            'prisonName': this.changeNull(selectData.prisonName),
            'prisonerId': this.changeNull(selectData.prisonerId),
            'receiveDate': this.changeNull(selectData.receiveDate),
            'releaseDate': this.changeNull(selectData.releaseDate),
            'religious': this.changeNull(selectData.religious),
            'religiousCode': this.changeNull(selectData.religiousCode),
            'sentenceDate': this.changeNull(selectData.sentenceDate),
            'sex': this.changeNull(selectData.sex),
            'sexCode': this.changeNull(selectData.sexCode),
            'undecidedCaseId': this.changeNull(selectData.undecidedCaseId),

            'person': {
                'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
                'fullName': this.changeNull(selectData.firstName) + ' ' + this.changeNull(selectData.lastName),
                'sex': this.changeNull(selectData.sex),
                'dateOfBirth': this.changeNull(selectData.dateOfBirth),
            },
            'wartermarks': this.loadReportDetail(),
            'reportName': this.reportName,
            'reportOfDate': this.reportOfDate,
            'reportOfTime': this.reportOfTime
        };
        this.dataSet = this.docremandee;
    }

    setData(selectData: any) {
      this.docremandee = {
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
        'dataId': this.changeNull(selectData.dataId),
        'dataSource': this.changeNull(selectData.dataSource),
        'dataSubmitDate': this.changeNull(selectData.dataSubmitDate),
        'dateOfBirth': this.formatDate(selectData.dateOfBirth),
        'decidedCaseId': this.changeNull(selectData.decidedCaseId),
        'educationLevel': this.changeNull(selectData.educationLevel),
        'educationProvince': this.changeNull(selectData.educationProvince),
        'educationSchool': this.changeNull(selectData.educationSchool),
        'fatherFirstName': this.changeNull(selectData.fatherFirstName),
        'fatherLastName': this.changeNull(selectData.fatherLastName),
        'fatherPrefix': this.changeNull(selectData.fatherPrefix),
        'firstName': this.changeNull(selectData.firstName),
        'imposeTypeCode': this.changeNull(selectData.imposeTypeCode),
        'judgement': this.changeNull(selectData.judgement),
        'lastName': this.changeNull(selectData.lastName),
        'motherFirstName': this.changeNull(selectData.motherFirstName),
        'motherLastName': this.changeNull(selectData.motherLastName),
        'motherPrefix': this.changeNull(selectData.motherPrefix),
        'nationality': this.changeNull(selectData.nationality),
        'nationalityCode': this.changeNull(selectData.nationalityCode),
        'policeCaseId': this.changeNull(selectData.policeCaseId),
        'prisonCode': this.changeNull(selectData.prisonCode),
        'prisonName': this.changeNull(selectData.prisonName),
        'prisonerId': this.changeNull(selectData.prisonerId),
        'receiveDate': this.formatDate(selectData.receiveDate),
        'releaseDate': this.formatDate(selectData.releaseDate),
        'religious': this.changeNull(selectData.religious),
        'religiousCode': this.changeNull(selectData.religiousCode),
        'sentenceDate': this.formatDate(selectData.sentenceDate),
        'sex': this.changeSex(selectData.sex),
        'sexCode': this.changeNull(selectData.sexCode),
        'undecidedCaseId': this.changeNull(selectData.undecidedCaseId),

        'person': {
            'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
            'fullName': this.changeNull(selectData.firstName) + ' ' + this.changeNull(selectData.lastName),
            'sex': this.changeSex(selectData.sex),
            'dateOfBirth': this.changeNull(this.formatDate(selectData.dateOfBirth)),
        },
        'wartermarks': this.loadReportDetail(),
        'reportName': this.reportName,
        'reportOfDate': this.reportOfDate,
        'reportOfTime': this.reportOfTime
    };
    }

    getData(): any {
        return this.docremandee;
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
            this.reportName = localStorage.getItem('reportName');
            this.reportOfDate = moment(new Date().toString()).format('L').toString();
            this.reportOfTime = moment(new Date().toString()).format('LTS').toString();
            this.reportBarcode = 'QP4015-12345678';
            this.wartermarks = `<div class=watermark>
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class=watermark2>
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class=watermark3>
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class=watermark4>
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class=watermark5>
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class=watermark6>
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class=watermark7>
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class=watermark8>
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class=watermark9>
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class=watermark10>
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class=watermark11>
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>`;
            return this.wartermarks;
        } else {
            this.reportName = 'เกิดข้อผิดพลาด';
            this.reportOfDate = moment(new Date().toString()).format('L').toString();
            this.reportOfTime = moment(new Date().toString()).format('LTS').toString();
            this.reportBarcode = 'QP4015-12345678';
            this.wartermarks = `<div class=watermark>
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class=watermark2>
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class=watermark3>
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class=watermark4>
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class=watermark5>
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class=watermark6>
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class=watermark7>
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class=watermark8>
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class=watermark9>
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class=watermark10>
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class=watermark11>
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>`;
            return this.wartermarks;
        }
    }

    /**
     * Getter $dataSet
     * @return {IDxc_Model_Doc_Remandee}
     */
    public get $dataSet(): IDxc_Model_Doc_Remandee {
        return this.dataSet;
    }

    /**
     * Setter $dataSet
     * @param {IDxc_Model_Doc_Remandee} value
     */
    public set $dataSet(value: IDxc_Model_Doc_Remandee) {
        this.dataSet = value;
    }
}
