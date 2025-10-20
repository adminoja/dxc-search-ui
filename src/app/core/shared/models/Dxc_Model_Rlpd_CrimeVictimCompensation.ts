import * as moment from 'moment';

// tslint:disable-next-line:class-name
export interface IDxc_Model_Rlpd_CrimeVictimCompensation {
    dataId: string;
    caseId: string;
    dataSubmitDate: string;
    depId: string;
    masGuiltId: string;
    masGuiltName: string;
    oldCaseId: string;
    partyIndex: string;
    victimCitizenId: string;
    victimAppealFrom: string;
    victimAppealOpinion: string;
    victimAppealReceiveDate: string;
    victimAppealRedDate: string;
    victimAppealRedNo: string;
    victimAppealRemark: string;
    victimAttorneyAddress: string;
    victimAttorneyBirthDay: string;
    victimAttorneyDistrictFullText: string;
    victimAttorneyDistrictId: string;
    victimAttorneyFullName: string;
    victimAttorneyGivenName: string;
    victimAttorneyNationalIdentificationId: string;
    victimAttorneyPhone: string;
    victimAttorneyProvinceFullText: string;
    victimAttorneyProvinceId: string;
    victimAttorneyRelativeBy: string;
    victimAttorneyRemark: string;
    victimAttorneySubdistrictFullText: string;
    victimAttorneySubdistrictId: string;
    victimAttorneySurName: string;
    victimAttorneyTitle: string;
    victimCareer: string;
    victimCaseDate: string;
    victimCaseHelpReport: string;
    victimCasePeopleAmount: string;
    victimCasePeopleDescription: string;
    victimCasePlace: string;
    victimCasePoliceDate: string;
    victimCasePoliceNumber: string;
    victimCasePoliceStation: string;
    victimCaseSummary: string;
    victimCaseTime: string;
    victimCommitteeInspectDate: string;
    victimCommitteeInspectNo: string;
    victimCommitteeOpinion: string;
    victimCommitteeRemark: string;
    victimConnectpersonAddress: string;
    victimConnectpersonFullName: string;
    victimConnectpersonGivenName: string;
    victimConnectpersonPhone: string;
    victimConnectpersonRelative: string;
    victimConnectpersonSurName: string;
    victimConnectpersonTitle: string;
    victimDamage: string;
    victimDirectorOpinion: string;
    victimDirectorRemark: string;
    victimIncome: string;
    victimIncomePer: string;
    victimIsCareer: string;
    victimLawOpinion: string;
    victimLawSummary1: string;
    victimLawSummary2: string;
    victimLawSummary3: string;
    victimLawSummary4: string;
    victimSubcommitteeOpinion: string;
    victimSubcommitteeRemark: string;
    victimUncareer: string;
    victimUncareerType: string;
    victimWorkPlace: string;
    victimWorkPlaceProvinceFullText: string;
    victimWorkPlaceProvinceId: string;
    victimAppealOpinionDesc: string;

    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    reportBarcode: string;
    wartermarks: string;
}

export class Dxc_Model_Rlpd_CrimeVictimCompensation {
    crimevictimcompensation: any;
    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    reportBarcode: string;
    wartermarks: string;
    private dataSet: IDxc_Model_Rlpd_CrimeVictimCompensation;
    constructor(selectData: any) {
        this.crimevictimcompensation = {
            'victimCitizenId': this.changeNull(selectData.victimCitizenId),
            'dataId': this.changeNull(selectData.dataId),
            'caseId': this.changeNull(selectData.caseId),
            'dataSubmitDate': this.changeNull(selectData.dataSubmitDate),
            'depId': this.changeNull(selectData.depId),
            'masGuiltId': this.changeNull(selectData.masGuiltId),
            'masGuiltName': this.changeNull(selectData.masGuiltName),
            'oldCaseId': this.changeNull(selectData.oldCaseId),
            'partyIndex': this.changeNull(selectData.partyIndex),
            'victimAppealFrom': this.changeNull(selectData.victimAppealFrom),
            'victimAppealOpinion': this.changeNull(selectData.victimAppealOpinion),
            'victimAppealRecieveDate': this.changeNull(selectData.victimAppealRecieveDate),
            'victimAppealRedDate': this.changeNull(selectData.victimAppealRedDate),
            'victimAppealRedNo': this.changeNull(selectData.victimAppealRedNo),
            'victimAppealRemark': this.changeNull(selectData.victimAppealRemark),
            'victimAttorneyAddress': this.changeNull(selectData.victimAttorneyAddress),
            'victimAttorneyBirthDay': this.changeNull(selectData.victimAttorneyBirthDay),
            'victimAttorneyDistrictFullText': this.changeNull(selectData.victimAttorneyDistrictFullText),
            'victimAttorneyDistrictId': this.changeNull(selectData.victimAttorneyDistrictId),
            'victimAttorneyFullName': this.changeNull(selectData.victimAttorneyFullName),
            'victimAttorneyGivenName': this.changeNull(selectData.victimAttorneyGivenName),
            'victimAttorneyNationalIdentificationId': this.changeNull(selectData.victimAttorneyNationalIdentificationId),
            'victimAttorneyPhone': this.changeNull(selectData.victimAttorneyPhone),
            'victimAttorneyProvinceFullText': this.changeNull(selectData.victimAttorneyProvinceFullText),
            'victimAttorneyProvinceId': this.changeNull(selectData.victimAttorneyProvinceId),
            'victimAttorneyRelativeBy': this.changeNull(selectData.victimAttorneyRelativeBy),
            'victimAttorneyRemark': this.changeNull(selectData.victimAttorneyRemark),
            'victimAttorneySubdistrictFullText': this.changeNull(selectData.victimAttorneySubdistrictFullText),
            'victimAttorneySubdistrictId': this.changeNull(selectData.victimAttorneySubdistrictId),
            'victimAttorneySurName': this.changeNull(selectData.victimAttorneySurName),
            'victimAttorneyTitle': this.changeNull(selectData.victimAttorneyTitle),
            'victimCareer': this.changeNull(selectData.victimCareer),
            'victimCaseDate': this.changeNull(selectData.victimCaseDate),
            'victimCaseHelpReport': this.changeNull(selectData.victimCaseHelpReport),
            'victimCasePeopleAmount': this.changeNull(selectData.victimCasePeopleAmount),
            'victimCasePeopleDescription': this.changeNull(selectData.victimCasePeopleDescription),
            'victimCasePlace': this.changeNull(selectData.victimCasePlace),
            'victimCasePoliceDate': this.changeNull(selectData.victimCasePoliceDate),
            'victimCasePoliceNumber': this.changeNull(selectData.victimCasePoliceNumber),
            'victimCasePoliceStation': this.changeNull(selectData.victimCasePoliceStation),
            'victimCaseSummary': this.changeNull(selectData.victimCaseSummary),
            'victimCaseTime': this.changeNull(selectData.victimCaseTime),
            'victimCommitteeInspectDate': this.changeNull(selectData.victimCommitteeInspectDate),
            'victimCommitteeInspectNo': this.changeNull(selectData.victimCommitteeInspectNo),
            'victimCommitteeOpinion': this.changeNull(selectData.victimCommitteeOpinion),
            'victimCommitteeRemark': this.changeNull(selectData.victimCommitteeRemark),
            'victimConnectpersonAddress': this.changeNull(selectData.victimConnectpersonAddress),
            'victimConnectpersonFullName': this.changeNull(selectData.victimConnectpersonFullName),
            'victimConnectpersonGivenName': this.changeNull(selectData.victimConnectpersonGivenName),
            'victimConnectpersonPhone': this.changeNull(selectData.cvictimConnectpersonPhoneaseId),
            'victimConnectpersonRelative': this.changeNull(selectData.victimConnectpersonRelative),
            'victimConnectpersonSurName': this.changeNull(selectData.victimConnectpersonSurName),
            'victimConnectpersonTitle': this.changeNull(selectData.victimConnectpersonTitle),
            'victimDamage': this.changeNull(selectData.victimDamage),
            'victimDirectorOpinion': this.changeNull(selectData.victimDirectorOpinion),
            'victimDirectorRemark': this.changeNull(selectData.victimDirectorRemark),
            'victimIncome': this.changeNull(selectData.victimIncome),
            'victimIncomePer': this.changeNull(selectData.victimIncomePer),
            'victimIsCareer': this.changeNull(selectData.victimIsCareer),
            'victimLawOpinion': this.changeNull(selectData.victimLawOpinion),
            'victimLawSummary1': this.changeNull(selectData.victimLawSummary1),
            'victimLawSummary2': this.changeNull(selectData.victimLawSummary2),
            'victimLawSummary3': this.changeNull(selectData.victimLawSummary3),
            'victimLawSummary4': this.changeNull(selectData.victimLawSummary4),
            'victimSubcommitteeOpinion': this.changeNull(selectData.victimSubcommitteeOpinion),
            'victimSubcommitteeRemark': this.changeNull(selectData.victimSubcommitteeRemark),
            'victimUncareer': this.changeNull(selectData.victimUncareer),
            'victimUncareerType': this.changeNull(selectData.victimUncareerType),
            'victimWorkPlace': this.changeNull(selectData.victimWorkPlace),
            'victimWorkPlaceProvinceFullText': this.changeNull(selectData.victimWorkPlaceProvinceFullText),
            'victimWorkPlaceProvinceId': this.changeNull(selectData.victimWorkPlaceProvinceId),
            'victimAppealOpinionDesc': this.changeNull(selectData.victimAppealOpinionDesc),

            'wartermarks': this.loadReportDetail(),
            'reportName': this.reportName,
            'reportOfDate': this.reportOfDate,
            'reportOfTime': this.reportOfTime,
            'person': {
                'citizenCardNumber': this.changeNull(selectData.victimCitizenId),
                'fullName': this.changeNull(selectData.victimAttorneyFullName),
                'sex': '',
                'dateOfBirth': this.changeNull(selectData.victimAttorneyBirthDay)
            }
        };
        this.dataSet = this.crimevictimcompensation;
    }
    setData(selectData: any) {
      this.crimevictimcompensation = {
        'victimCitizenId': this.changeNull(selectData.victimCitizenId),
        'dataId': this.changeNull(selectData.dataId),
        'caseId': this.changeNull(selectData.caseId),
        'dataSubmitDate': this.changeNull(selectData.dataSubmitDate),
        'depId': this.changeNull(selectData.depId),
        'masGuiltId': this.changeNull(selectData.masGuiltId),
        'masGuiltName': this.changeNull(selectData.masGuiltName),
        'oldCaseId': this.changeNull(selectData.oldCaseId),
        'partyIndex': this.changeNull(selectData.partyIndex),
        'victimAppealFrom': this.changeNull(selectData.victimAppealFrom),
        'victimAppealOpinion': this.changeNull(selectData.victimAppealOpinion),
        'victimAppealRecieveDate': this.changeNull(selectData.victimAppealRecieveDate),
        'victimAppealRedDate': this.formatDate(selectData.victimAppealRedDate),
        'victimAppealRedNo': this.changeNull(selectData.victimAppealRedNo),
        'victimAppealRemark': this.changeNull(selectData.victimAppealRemark),
        'victimAttorneyAddress': this.changeNull(selectData.victimAttorneyAddress),
        'victimAttorneyBirthDay': this.formatDate(selectData.victimAttorneyBirthDay),
        'victimAttorneyDistrictFullText': this.changeNull(selectData.victimAttorneyDistrictFullText),
        'victimAttorneyDistrictId': this.changeNull(selectData.victimAttorneyDistrictId),
        'victimAttorneyFullName': this.changeNull(selectData.victimAttorneyFullName),
        'victimAttorneyGivenName': this.changeNull(selectData.victimAttorneyGivenName),
        'victimAttorneyNationalIdentificationId': this.changeNull(selectData.victimAttorneyNationalIdentificationId),
        'victimAttorneyPhone': this.changeNull(selectData.victimAttorneyPhone),
        'victimAttorneyProvinceFullText': this.changeNull(selectData.victimAttorneyProvinceFullText),
        'victimAttorneyProvinceId': this.changeNull(selectData.victimAttorneyProvinceId),
        'victimAttorneyRelativeBy': this.changeNull(selectData.victimAttorneyRelativeBy),
        'victimAttorneyRemark': this.changeNull(selectData.victimAttorneyRemark),
        'victimAttorneySubdistrictFullText': this.changeNull(selectData.victimAttorneySubdistrictFullText),
        'victimAttorneySubdistrictId': this.changeNull(selectData.victimAttorneySubdistrictId),
        'victimAttorneySurName': this.changeNull(selectData.victimAttorneySurName),
        'victimAttorneyTitle': this.changeNull(selectData.victimAttorneyTitle),
        'victimCareer': this.changeNull(selectData.victimCareer),
        'victimCaseDate': this.formatDate(selectData.victimCaseDate),
        'victimCaseHelpReport': this.changeNull(selectData.victimCaseHelpReport),
        'victimCasePeopleAmount': this.changeNull(selectData.victimCasePeopleAmount),
        'victimCasePeopleDescription': this.changeNull(selectData.victimCasePeopleDescription),
        'victimCasePlace': this.changeNull(selectData.victimCasePlace),
        'victimCasePoliceDate': this.formatDate(selectData.victimCasePoliceDate),
        'victimCasePoliceNumber': this.changeNull(selectData.victimCasePoliceNumber),
        'victimCasePoliceStation': this.changeNull(selectData.victimCasePoliceStation),
        'victimCaseSummary': this.changeNull(selectData.victimCaseSummary),
        'victimCaseTime': this.changeNull(selectData.victimCaseTime),
        'victimCommitteeInspectDate': this.formatDate(selectData.victimCommitteeInspectDate),
        'victimCommitteeInspectNo': this.changeNull(selectData.victimCommitteeInspectNo),
        'victimCommitteeOpinion': this.changeNull(selectData.victimCommitteeOpinion),
        'victimCommitteeRemark': this.changeNull(selectData.victimCommitteeRemark),
        'victimConnectpersonAddress': this.changeNull(selectData.victimConnectpersonAddress),
        'victimConnectpersonFullName': this.changeNull(selectData.victimConnectpersonFullName),
        'victimConnectpersonGivenName': this.changeNull(selectData.victimConnectpersonGivenName),
        'victimConnectpersonPhone': this.changeNull(selectData.cvictimConnectpersonPhoneaseId),
        'victimConnectpersonRelative': this.changeNull(selectData.victimConnectpersonRelative),
        'victimConnectpersonSurName': this.changeNull(selectData.victimConnectpersonSurName),
        'victimConnectpersonTitle': this.changeNull(selectData.victimConnectpersonTitle),
        'victimDamage': this.changeNull(selectData.victimDamage),
        'victimDirectorOpinion': this.changeNull(selectData.victimDirectorOpinion),
        'victimDirectorRemark': this.changeNull(selectData.victimDirectorRemark),
        'victimIncome': this.changeNull(selectData.victimIncome),
        'victimIncomePer': this.changeNull(selectData.victimIncomePer),
        'victimIsCareer': this.changeNull(selectData.victimIsCareer),
        'victimLawOpinion': this.changeNull(selectData.victimLawOpinion),
        'victimLawSummary1': this.changeNull(selectData.victimLawSummary1),
        'victimLawSummary2': this.changeNull(selectData.victimLawSummary2),
        'victimLawSummary3': this.changeNull(selectData.victimLawSummary3),
        'victimLawSummary4': this.changeNull(selectData.victimLawSummary4),
        'victimSubcommitteeOpinion': this.changeNull(selectData.victimSubcommitteeOpinion),
        'victimSubcommitteeRemark': this.changeNull(selectData.victimSubcommitteeRemark),
        'victimUncareer': this.changeNull(selectData.victimUncareer),
        'victimUncareerType': this.changeNull(selectData.victimUncareerType),
        'victimWorkPlace': this.changeNull(selectData.victimWorkPlace),
        'victimWorkPlaceProvinceFullText': this.changeNull(selectData.victimWorkPlaceProvinceFullText),
        'victimWorkPlaceProvinceId': this.changeNull(selectData.victimWorkPlaceProvinceId),
        'victimAppealOpinionDesc': this.changeNull(selectData.victimAppealOpinionDesc),

        'wartermarks': this.loadReportDetail(),
        'reportName': this.reportName,
        'reportOfDate': this.reportOfDate,
        'reportOfTime': this.reportOfTime,
        'person': {
            'citizenCardNumber': this.changeNull(selectData.victimCitizenId),
            'fullName': this.changeNull(selectData.victimAttorneyFullName),
            'sex': '',
            'dateOfBirth': this.formatDate(selectData.victimAttorneyBirthDay)
        }
    };
    }
    getData(): any {
        return this.crimevictimcompensation;
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
     * * Getter $dataSet
     * * @return {IDxc_Model_Rlpd_CrimeVictimCompensation}
     */
    public get $dataSet(): IDxc_Model_Rlpd_CrimeVictimCompensation {
        return this.dataSet;
    }

    /**
     * Setter $dataSet
     * @param {IDxc_Model_Rlpd_CrimeVictimCompensation} value
     */
    public set $dataSet(value: IDxc_Model_Rlpd_CrimeVictimCompensation) {
        this.dataSet = value;
    }
}
