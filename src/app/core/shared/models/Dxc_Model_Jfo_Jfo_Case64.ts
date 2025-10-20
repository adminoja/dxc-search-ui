import * as moment from 'moment';

export interface IPerson {
    citizenCardNumber: string;
    fullName: string;
    sex: string;
    dateOfBirth: Date;
}

export interface IDxc_Model_Jfo_Jfo_Case64 {
    id: string;
    caseId: string;
    applicantId: string;
    departmentId: string;
    jfCaseNo: string;
    subject: string;
    createDate: string;
    registerDate: string;
    modifiedDate: string;
    title: string;
    firstName: string;
    lastName: string;
    requestAmount: string;
    gender: string;
    dateOfBirth: string;
    raceId: string;
    raceName: string;
    nationalityId: string;
    nationalityName: string;
    religionId: string;
    religionName: string;
    jfcaseTypeId: string;
    caseTypeName: string;
    provinceId: string;
    provinceName: string;
    departmentName: string;
    departmentNameAbbr: string;
    workStepId: string;
    workStepName: string;
    statusId: string;
    caseApplicationStatusName: string;
    cardId: string;
    cardTypeName: string;
    cardType: string;
    lawyerId: string;
    lawyerFirstName: string;
    caseCategoryId: string;
    lawyerLastName: string;
    caseCategoryName: string;
    caseSubCategoryId: string;
    caseSubCategoryName: string;
    career: string;
    score: string;
    age: string;

    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    reportBarcode: string;
    wartermarks: string;
}

export class Dxc_Model_Jfo_Jfo_Case64 {
    private dataSet: IDxc_Model_Jfo_Jfo_Case64;
    jfojfocase64: any;
    reportName: string;
    reportBarcode: string;
    reportOfDate: string;
    reportOfTime: string;
    wartermarks: string;
    constructor(selectData: any) {
        this.jfojfocase64 = {
            'id': this.changeNull(selectData.id),
            'caseId': this.changeNull(selectData.caseId),
            'applicantId': this.changeNull(selectData.applicantId),
            'departmentId': this.changeNull(selectData.departmentId),
            'jfCaseNo': this.changeNull(selectData.jfCaseNo),
            'subject': this.changeNull(selectData.subject),
            'createDate': this.changeNull(selectData.createDate),
            'registerDate': this.changeNull(selectData.registerDate),
            'modifiedDate': this.changeNull(selectData.modifiedDate),
            'title': this.changeNull(selectData.title),
            'firstName': this.changeNull(selectData.firstName),
            'lastName': this.changeNull(selectData.lastName),
            'requestAmount': this.changeNull(selectData.requestAmount),
            'gender': this.changeSex(selectData.gender),
            'dateOfBirth': this.formatDate(selectData.dateOfBirth),
            'raceId': this.changeNull(selectData.raceId),
            'raceName': this.changeNull(selectData.raceName),
            'nationalityId': this.changeNull(selectData.nationalityId),
            'nationalityName': this.changeNull(selectData.nationalityName),
            'religionId': this.changeNull(selectData.religionId),
            'religionName': this.changeNull(selectData.religionName),
            'jfcaseTypeId': this.changeNull(selectData.jfcaseTypeId),
            'caseTypeName': this.changeNull(selectData.caseTypeName),
            'provinceId': this.changeNull(selectData.provinceId),
            'provinceName': this.changeNull(selectData.provinceName),
            'departmentName': this.changeNull(selectData.departmentName),
            'departmentNameAbbr': this.changeNull(selectData.departmentNameAbbr),
            'workStepId': this.changeNull(selectData.workStepId),
            'workStepName': this.changeNull(selectData.workStepName),
            'statusId': this.changeNull(selectData.statusId),
            'caseApplicationStatusName': this.changeNull(selectData.caseApplicationStatusName),
            'cardId': this.changeNull(selectData.cardId),
            'cardTypeName': this.changeNull(selectData.cardTypeName),
            'cardType': this.changeNull(selectData.cardType),
            'lawyerId': this.changeNull(selectData.lawyerId),
            'lawyerFirstName': this.changeNull(selectData.lawyerFirstName),
            'caseCategoryId': this.changeNull(selectData.caseCategoryId),
            'lawyerLastName': this.changeNull(selectData.lawyerLastName),
            'caseCategoryName': this.changeNull(selectData.caseCategoryName),
            'caseSubCategoryId': this.changeNull(selectData.caseSubCategoryId),
            'caseSubCategoryName': this.changeNull(selectData.caseSubCategoryName),
            'career': this.changeNull(selectData.career),
            'score': this.changeNull(selectData.score),
            'age': this.changeNull(selectData.age),
            
            'wartermarks': this.loadReportDetail(),
            'reportName': this.reportName,
            'reportOfDate': this.reportOfDate,
            'reportOfTime': this.reportOfTime,
            'person': {
                'citizenCardNumber': this.changeNull(selectData.cardId),
                'fullName': this.changeNull(selectData.firstName) + ' ' + this.changeNull(selectData.lastName),
                'sex': this.changeSex(selectData.gender),
                'dateOfBirth': this.formatDate(selectData.dateOfBirth),
              }
        };
        this.dataSet = this.jfojfocase64;
    }

    setData(selectData: any) {
        this.jfojfocase64 = {
            'id': this.changeNull(selectData.id),
            'caseId': this.changeNull(selectData.caseId),
            'applicantId': this.changeNull(selectData.applicantId),
            'departmentId': this.changeNull(selectData.departmentId),
            'jfCaseNo': this.changeNull(selectData.jfCaseNo),
            'subject': this.changeNull(selectData.subject),
            'createDate': this.formatDate(selectData.createDate),
            'registerDate': this.formatDate(selectData.registerDate),
            'modifiedDate': this.formatDate(selectData.modifiedDate),
            'title': this.changeNull(selectData.title),
            'firstName': this.changeNull(selectData.firstName),
            'lastName': this.changeNull(selectData.lastName),
            'requestAmount': this.changeNull(selectData.requestAmount),
            'gender': this.changeNull(selectData.gender),
            'dateOfBirth': this.changeNull(selectData.dateOfBirth),
            'raceId': this.changeNull(selectData.raceId),
            'raceName': this.changeNull(selectData.raceName),
            'nationalityId': this.changeNull(selectData.nationalityId),
            'nationalityName': this.changeNull(selectData.nationalityName),
            'religionId': this.changeNull(selectData.religionId),
            'religionName': this.changeNull(selectData.religionName),
            'jfcaseTypeId': this.changeNull(selectData.jfcaseTypeId),
            'caseTypeName': this.changeNull(selectData.caseTypeName),
            'provinceId': this.changeNull(selectData.provinceId),
            'provinceName': this.changeNull(selectData.provinceName),
            'departmentName': this.changeNull(selectData.departmentName),
            'departmentNameAbbr': this.changeNull(selectData.departmentNameAbbr),
            'workStepId': this.changeNull(selectData.workStepId),
            'workStepName': this.changeNull(selectData.workStepName),
            'statusId': this.changeNull(selectData.statusId),
            'caseApplicationStatusName': this.changeNull(selectData.caseApplicationStatusName),
            'cardId': this.changeNull(selectData.cardId),
            'cardTypeName': this.changeNull(selectData.cardTypeName),
            'cardType': this.changeNull(selectData.cardType),
            'lawyerId': this.changeNull(selectData.lawyerId),
            'lawyerFirstName': this.changeNull(selectData.lawyerFirstName),
            'caseCategoryId': this.changeNull(selectData.caseCategoryId),
            'lawyerLastName': this.changeNull(selectData.lawyerLastName),
            'caseCategoryName': this.changeNull(selectData.caseCategoryName),
            'caseSubCategoryId': this.changeNull(selectData.caseSubCategoryId),
            'caseSubCategoryName': this.changeNull(selectData.caseSubCategoryName),
            'career': this.changeNull(selectData.career),
            'score': this.changeNull(selectData.score),
            'age': this.changeNull(selectData.age),
            
            'wartermarks': this.loadReportDetail(),
            'reportName': this.reportName,
            'reportOfDate': this.reportOfDate,
            'reportOfTime': this.reportOfTime,
            'person': {
                'citizenCardNumber': this.changeNull(selectData.cardId),
                'fullName': this.changeNull(selectData.firstName) + ' ' + this.changeNull(selectData.lastName),
                'sex': this.changeSex(selectData.gender),
                'dateOfBirth': this.formatDate(selectData.dateOfBirth),
              }
        }
    }

    getData(): any {
        return this.jfojfocase64;
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
        } else if (birthDate == "") {
            return '-';
        } else {
            const thmonth = new Array('มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
                'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม');
            return `${day} ${thmonth[month]} ${year}`;
        }
    }
    changeNull(selectData: any) {
        if (selectData == null || selectData == 0 || selectData == 'N/A') {
            return '-';
        } else {
            return selectData;
        }
    }
    changeSex(sex: string) {
        if (sex === 'MALE') {
          return 'ชาย';
        } else if (sex === 'FEMALE') {
          return 'หญิง';
        } else if (sex === '1') {
          return 'ชาย';
        } else if (sex === '2') {
          return 'หญิง';
        } else if (sex === 'OTHER') {
          return 'อื่นๆ';
        } else if (sex === 'm') {
          return 'ชาย';
        } else if (sex === 'f') {
          return 'หญิง';
        } else if (sex === 'null') {
          return '-';
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
            const wartermarks = `<div class=watermark>
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
            const wartermarks = `<div class=watermark>
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
     * @return {IDxc_Model_Jfo_Jfo_Case64}
     */
    public get $dataSet(): IDxc_Model_Jfo_Jfo_Case64 {
        return this.dataSet;
    }

    /**
     * Setter $dataSet
     * @param {IDxc_Model_Jfo_Jfo_Case64} value
     */
    public set $dataSet(value: IDxc_Model_Jfo_Jfo_Case64) {
        this.dataSet = value;
    }
}