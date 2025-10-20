import * as moment from 'moment';
export interface IPerson {
  citizenCardNumber: string;
  fullName: string;
  sex: string;
  dateOfBirth: Date;
}

export interface IDxc_Model_Idb_DirectoryDimensionPerson {
    accusedAddress: string;
    accusedAmphurId: number;
    accusedAmphurName: string;
    accusedCitizenId: string;
    accusedCriRemark: string;
    accusedGenderName: string;
    accusedInqDecisionGroupName: string;
    accusedMigratedDate: Date;
    accusedMoo: string;
    accusedNationalityName: string;
    accusedNationalityOther: string;
    accusedNative: string;
    accusedProsCommandName: string;
    accusedProvinceName: string;
    accusedRace: string;
    accusedRoad: string;
    accusedSoi: string;
    accusedTambolId: number;
    accusedTambolName: string;
    accusedchargeChargeDetail: string;
    accusedchargeChargeName: string;
    accusedchargeChargeStatusName: string;
    accusedchargeLawName: string;
    accusedchargeSector: string;
    accusedchargeSubsector: string;
    accusedsName: string;
    accusedsSurname: string;
    accusedsBirthDate: Date;
    areaAmphurName: string;
    areaProvinceName: string;
    areaTambolName: string;
    complainantAddress: string;
    complainantAmphurId: number;
    complainantAmphurName: string;
    complainantCitizenId: string;
    complainantGenderName: string;
    complainantMigratedDate: Date;
    complainantMoo: string;
    complainantName: string;
    complainantNationalityName: string;
    complainantNative: string;
    complainantProvinceName: string;
    complainantRace: string;
    complainantRoad: string;
    complainantSoi: string;
    complainantSurname: string;
    complainantTambolId: number;
    complainantTambolName: string;
    complainantBirthDate: Date;
    courtresultAppealName: string;
    courtresultCourtDate: string;
    courtresultCourtLevelName: string;
    courtresultCourtName: string;
    courtresultCourtResultName: string;
    courtresultCourtTypeName: string;
    courtresultJudgementDate: string;
    courtresultJudgementDetail: string;
    courtresultJudgementName: string;
    courtresultResult1Name: string;
    dataId: string;
    manageDescrition: string;
    manageManagedate: string;
    prosecuteAssignTypeName: string;
    prosecuteOwnerName: string;
    prosecuteProsName: string;
    prosecuteProsecuteId: number;
    generallcBlackFile: string;
    generallcRedFile: string;

    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    reportBarcode: string;
    wartermarks: string;
    person: IPerson;
}

export class Dxc_Model_Idb_DirectoryDimensionPerson {
    idbDirectoryDimensionPerson: any;
    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    reportBarcode: string;
    wartermarks: string;
    private dataSet: IDxc_Model_Idb_DirectoryDimensionPerson;
    constructor(selectData: any) {
        this.idbDirectoryDimensionPerson = {
            'accusedAddress': this.changeNull(selectData.accusedAddress),
            'accusedAmphurId': this.changeNull(selectData.accusedAmphurId),
            'accusedAmphurName': this.changeNull(selectData.accusedAmphurName),
            'accusedCitizenId': this.changeNull(selectData.accusedCitizenId),
            'accusedCriRemark': this.changeNull(selectData.accusedCriRemark),
            'accusedGenderName': this.changeNull(selectData.accusedGenderName),
            'accusedInqDecisionGroupName': this.changeNull(selectData.accusedInqDecisionGroupName),
            'accusedMigratedDate': this.changeNull(selectData.accusedMigratedDate),
            'accusedMoo': this.changeNull(selectData.accusedMoo),
            'accusedNationalityName': this.changeNull(selectData.accusedNationalityName),
            'accusedNationalityOther': this.changeNull(selectData.accusedNationalityOther),
            'accusedNative': this.changeNull(selectData.accusedNative),
            'accusedProsCommandName': this.changeNull(selectData.accusedProsCommandName),
            'accusedProvinceName': this.changeNull(selectData.accusedProvinceName),
            'accusedRace': this.changeNull(selectData.accusedRace),
            'accusedRoad': this.changeNull(selectData.accusedRoad),
            'accusedSoi': this.changeNull(selectData.accusedSoi),
            'accusedTambolId': this.changeNull(selectData.accusedTambolId),
            'accusedTambolName': this.changeNull(selectData.accusedTambolName),
            'accusedchargeChargeDetail': this.changeNull(selectData.accusedchargeChargeDetail),
            'accusedchargeChargeName': this.changeNull(selectData.accusedchargeChargeName),
            'accusedchargeChargeStatusName': this.changeNull(selectData.accusedchargeChargeStatusName),
            'accusedchargeLawName': this.changeNull(selectData.accusedchargeLawName),
            'accusedchargeSector': this.changeNull(selectData.accusedchargeSector),
            'accusedchargeSubsector': this.changeNull(selectData.accusedchargeSubsector),
            'accusedsName': this.changeNull(selectData.accusedsName),
            'accusedsSurname': this.changeNull(selectData.accusedsSurname),
            'accusedsBirthDate': this.changeNull(selectData.accusedsBirthDate),
            'areaAmphurName': this.changeNull(selectData.areaAmphurName),
            'areaProvinceName': this.changeNull(selectData.areaProvinceName),
            'areaTambolName': this.changeNull(selectData.areaTambolName),
            'complainantAddress': this.changeNull(selectData.complainantAddress),
            'complainantAmphurId': this.changeNull(selectData.complainantAmphurId),
            'complainantAmphurName': this.changeNull(selectData.complainantAmphurName),
            'complainantCitizenId': this.changeNull(selectData.complainantCitizenId),
            'complainantGenderName': this.changeNull(selectData.complainantGenderName),
            'complainantMigratedDate': this.changeNull(selectData.complainantMigratedDate),
            'complainantMoo': this.changeNull(selectData.complainantMoo),
            'complainantName': this.changeNull(selectData.complainantName),
            'complainantNationalityName': this.changeNull(selectData.complainantNationalityName),
            'complainantNative': this.changeNull(selectData.complainantNative),
            'complainantProvinceName': this.changeNull(selectData.complainantProvinceName),
            'complainantRace': this.changeNull(selectData.complainantRace),
            'complainantRoad': this.changeNull(selectData.complainantRoad),
            'complainantSoi': this.changeNull(selectData.complainantSoi),
            'complainantSurname': this.changeNull(selectData.complainantSurname),
            'complainantTambolId': this.changeNull(selectData.complainantTambolId),
            'complainantTambolName': this.changeNull(selectData.complainantTambolName),
            'complainantBirthDate': this.changeNull(selectData.complainantBirthDate),
            'courtresultAppealName': this.changeNull(selectData.courtresultAppealName),
            'courtresultCourtDate': this.formatDate(selectData.courtresultCourtDate),
            'courtresultCourtLevelName': this.changeNull(selectData.courtresultCourtLevelName),
            'courtresultCourtName': this.changeNull(selectData.courtresultCourtName),
            'courtresultCourtResultName': this.changeNull(selectData.courtresultCourtResultName),
            'courtresultCourtTypeName': this.changeNull(selectData.courtresultCourtTypeName),
            'courtresultJudgementDate': this.formatDate(selectData.courtresultJudgementDate),
            'courtresultJudgementDetail': this.changeNull(selectData.courtresultJudgementDetail),
            'courtresultJudgementName': this.changeNull(selectData.courtresultJudgementName),
            'courtresultResult1Name': this.changeNull(selectData.courtresultResult1Name),
            'dataId': this.changeNull(selectData.dataId),
            'manageDescrition': this.changeNull(selectData.manageDescrition),
            'manageManagedate': this.changeNull(selectData.manageManagedate),
            'prosecuteAssignTypeName': this.changeNull(selectData.prosecuteAssignTypeName),
            'prosecuteOwnerName': this.changeNull(selectData.prosecuteOwnerName),
            'prosecuteProsName': this.changeNull(selectData.prosecuteProsName),
            'prosecuteProsecuteId': this.changeNull(selectData.prosecuteProsecuteId),
            'generallcBlackFile': this.changeNull(selectData.generallcBlackFile),
            'generallcRedFile': this.changeNull(selectData.generallcRedFile),

            'wartermarks': this.loadReportDetail(),
            'reportName': this.reportName,
            'reportOfDate': this.reportOfDate,
            'reportOfTime': this.reportOfTime,
            'person': {
                'citizenCardNumber': '',
                'fullName': '',
                'sex': '',
                'dateOfBirth': '',
            },
        };
        this.dataSet = this.idbDirectoryDimensionPerson;
    }
    getData(): any {
        return this.idbDirectoryDimensionPerson;
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
     * Getter $dataSet
     * @return {IDxc_Model_Idb_DirectoryDimensionPerson}
     */
    public get $dataSet(): IDxc_Model_Idb_DirectoryDimensionPerson {
        return this.dataSet;
    }

    /**
     * Setter $dataSet
     * @param {IDxc_Model_Idb_DirectoryDimensionCase} value
     */
    public set $dataSet(value: IDxc_Model_Idb_DirectoryDimensionPerson) {
        this.dataSet = value;
    }

}
