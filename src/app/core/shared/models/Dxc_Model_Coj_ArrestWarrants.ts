import * as moment from 'moment';
// tslint:disable-next-line: class-name
export interface IPerson {
    citizenCardNumber: string;
    fullName: string;
    sex: string;
    dateOfBirth: Date;
}
export interface IDxc_Model_Coj_ArrestWarrants {

    id: string,
    accAddno: string,
    accAge: number,
    accCardId: string,
    accCardType: number,
    accCardTypeText: string,
    accDistrict: string,
    accDistrictText: string,
    accFullName: string,
    accNation: number,
    accNationText: string,
    accNear: string,
    accOccupation: string,
    accOrigin: number,
    accOriginText: string,
    accProvince: string,
    accProvinceText: string,
    accRoad: string,
    accSoi: string,
    accSubDistrict: string,
    accSubDistrictText: string,
    accTel: string,
    accVilno: string,
    accused: string,
    appointmentDate: string,
    appointmentType: number,
    appointmentTypeText: string,
    arrestDate: string,
    arrestOfficerName: string,
    arrestReportDate: string,
    arrestReportUid: number,
    arrestResult: number,
    arrestResultText: string,
    arrestResultOtherText: string,
    arrestStatus: string,
    because: string,
    blackCaseNum: number,
    blackCaseNumPrefix: number,
    blackCaseNumPrefixText: string,
    blackCaseNumPrefixDescText: string,
    blackCaseNumYear: number,
    causeText: string,
    charge: string,
    chargeOtherText: string,
    chargeType1: number,
    chargeType1Text: string,
    chargeType2: number,
    chargeType2Text: string,
    chargeType21: number,
    chargeType21Text: string,
    chargeType22: number,
    chargeType22Text: string,
    chargeType23: number,
    chargeType23Text: string,
    chargeType3: number,
    chargeType3Text: string,
    courtCode: string,
    courtCodeText: string,
    courtInjunction: number,
    courtInjunctionText: string,
    faultTypeId: number,
    faultTypeIdText: string,
    arrestWarrantId: string,
    judgeName: string,
    judgeName2: string,
    judgeName3: string,
    plaintiff: string,
    policeStationId: string,
    policeStationIdText: string,
    prescription: number,
    prescriptionUnit: number,
    prescriptionUnitText: string,
    redCaseNum: number,
    redCaseNumPrefix: number,
    redCaseNumPrefixText: string,
    redCaseNumPrefixDescText: string,
    redCaseNumYear: number,
    reqFormId: number,
    reqNum: number,
    reqNumCaseTypeId: number,
    reqNumCaseTypeIdText: string,
    reqNumYear: number,
    sendToCourtId: string,
    sendToCourtIdText: string,
    sendToName: string,
    woaDate: string,
    woaEndDate: string,
    woaNo: number,
    woaStartDate: string,
    woaType: number,
    woaTypeText: string,
    woaYear: number

    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    reportBarcode: string;
    wartermarks: string;
    person: IPerson;

}
// tslint:disable-next-line: class-name
export class Dxc_Model_Coj_ArrestWarrants {
    cojArrestWarrants: any;
    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    private dataSet: IDxc_Model_Coj_ArrestWarrants;
    constructor(selectData: any) {
        this.cojArrestWarrants = {
            'id': this.changeNull(selectData.id),
            'accAddno': this.changeNull(selectData.accAddno),
            'accAge': this.changeNull(selectData.accAge),
            'accCardId': this.changeNull(selectData.accCardId),
            'accCardType': this.changeNull(selectData.accCardType),
            'accCardTypeText': this.changeNull(selectData.accCardTypeText),
            'accDistrict': this.changeNull(selectData.accDistrict),
            'accDistrictText': this.changeNull(selectData.accDistrictText),
            'accFullName': this.changeNull(selectData.accFullName),
            'accNation': this.changeNull(selectData.accNation),
            'accNationText': this.changeNull(selectData.accNationText),
            'accNear': this.changeNull(selectData.accNear),
            'accOccupation': this.changeNull(selectData.accOccupation),
            'accOrigin': this.changeNull(selectData.accOrigin),
            'accOriginText': this.changeNull(selectData.accOriginText),
            'accProvince': this.changeNull(selectData.accProvince),
            'accProvinceText': this.changeNull(selectData.accProvinceText),
            'accRoad': this.changeNull(selectData.accRoad),
            'accSoi': this.changeNull(selectData.accSoi),
            'accSubDistrict': this.changeNull(selectData.accSubDistrict),
            'accSubDistrictText': this.changeNull(selectData.accSubDistrictText),
            'accTel': this.changeNull(selectData.accTel),
            'accVilno': this.changeNull(selectData.accVilno),
            'accused': this.changeNull(selectData.accused),
            'appointmentDate': this.formatDate(selectData.appointmentDate),
            'appointmentType': this.changeNull(selectData.appointmentType),
            'appointmentTypeText': this.changeNull(selectData.appointmentTypeText),
            'arrestDate': this.changeNull(selectData.arrestDate),
            'arrestOfficerName': this.changeNull(selectData.arrestOfficerName),
            'arrestReportDate': this.formatDate(selectData.arrestReportDate),
            'arrestReportUid': this.changeNull(selectData.arrestReportUid),
            'arrestResult': this.changeNull(selectData.arrestResult),
            'arrestResultText': this.changeNull(selectData.arrestResultText),
            'arrestResultOtherText': this.changeNull(selectData.arrestResultOtherText),
            'arrestStatus': this.changeNull(selectData.arrestStatus),
            'because': this.changeNull(selectData.because),
            'blackCaseNum': this.changeNull(selectData.blackCaseNum),
            'blackCaseNumPrefix': this.changeNull(selectData.blackCaseNumPrefix),
            'blackCaseNumPrefixText': this.changeNull(selectData.blackCaseNumPrefixText),
            'blackCaseNumPrefixDescText': this.changeNull(selectData.blackCaseNumPrefixDescText),
            'blackCaseNumYear': this.changeNull(selectData.blackCaseNumYear),
            'causeText': this.changeNull(selectData.causeText),
            'charge': this.changeNull(selectData.charge),
            'chargeOtherText': this.changeNull(selectData.chargeOtherText),
            'chargeType1': this.changeNull(selectData.chargeType1),
            'chargeType1Text': this.changeNull(selectData.chargeType1Text),
            'chargeType2': this.changeNull(selectData.chargeType2),
            'chargeType2Text': this.changeNull(selectData.chargeType2Text),
            'chargeType21': this.changeNull(selectData.chargeType21),
            'chargeType21Text': this.changeNull(selectData.chargeType21Text),
            'chargeType22': this.changeNull(selectData.chargeType22),
            'chargeType22Text': this.changeNull(selectData.chargeType22Text),
            'chargeType23': this.changeNull(selectData.chargeType23),
            'chargeType23Text': this.changeNull(selectData.chargeType23Text),
            'chargeType3': this.changeNull(selectData.chargeType3),
            'chargeType3Text': this.changeNull(selectData.chargeType3Text),
            'courtCode': this.changeNull(selectData.courtCode),
            'courtCodeText': this.changeNull(selectData.courtCodeText),
            'courtInjunction': this.changeNull(selectData.courtInjunction),
            'courtInjunctionText': this.changeNull(selectData.courtInjunctionText),
            'faultTypeId': this.changeNull(selectData.faultTypeId),
            'faultTypeIdText': this.changeNull(selectData.faultTypeIdText),
            'arrestWarrantId': this.changeNull(selectData.arrestWarrantId),
            'judgeName': this.changeNull(selectData.judgeName),
            'judgeName2': this.changeNull(selectData.judgeName2),
            'judgeName3': this.changeNull(selectData.judgeName3),
            'plaintiff': this.changeNull(selectData.plaintiff),
            'policeStationId': this.changeNull(selectData.policeStationId),
            'policeStationIdText': this.changeNull(selectData.policeStationIdText),
            'prescription': this.changeNull(selectData.prescription),
            'prescriptionUnit': this.changeNull(selectData.prescriptionUnit),
            'prescriptionUnitText': this.changeNull(selectData.prescriptionUnitText),
            'redCaseNum': this.changeNull(selectData.redCaseNum),
            'redCaseNumPrefix': this.changeNull(selectData.redCaseNumPrefix),
            'redCaseNumPrefixText': this.changeNull(selectData.redCaseNumPrefixText),
            'redCaseNumPrefixDescText': this.changeNull(selectData.redCaseNumPrefixDescText),
            'redCaseNumYear': this.changeNull(selectData.redCaseNumYear),
            'reqFormId': this.changeNull(selectData.reqFormId),
            'reqNum': this.changeNull(selectData.reqNum),
            'reqNumCaseTypeId': this.changeNull(selectData.reqNumCaseTypeId),
            'reqNumCaseTypeIdText': this.changeNull(selectData.reqNumCaseTypeIdText),
            'reqNumYear': this.changeNull(selectData.reqNumYear),
            'sendToCourtId': this.changeNull(selectData.sendToCourtId),
            'sendToCourtIdText': this.changeNull(selectData.sendToCourtIdText),
            'sendToName': this.changeNull(selectData.sendToName),
            'woaDate': this.formatDate(selectData.woaDate),
            'woaEndDate': this.formatDate(selectData.woaEndDate),
            'woaNo': this.changeNull(selectData.woaNo),
            'woaStartDate': this.formatDate(selectData.woaStartDate),
            'woaType': this.changeNull(selectData.woaType),
            'woaTypeText': this.changeNull(selectData.woaTypeText),
            'woaYear': this.changeNull(selectData.woaYear),
            'wartermarks': this.loadReportDetail(),
            'reportName': this.reportName,
            'reportOfDate': this.reportOfDate,
            'reportOfTime': this.reportOfTime,
            'person': {
                'citizenCardNumber': this.changeNull(selectData.accCardId),
                'fullName': this.changeNull(selectData.accFullName),
                'sex': '',
                'dateOfBirth': '',
            },

        };
        this.dataSet = this.cojArrestWarrants;
        console.log('cojArrestWarrants 1', this.cojArrestWarrants)
    }

    setData(selectData: any) {
        console.log('selectData', selectData)
        this.cojArrestWarrants = {
            'id': this.changeNull(selectData.id),
            'accAddno': this.changeNull(selectData.accAddno),
            'accAge': this.changeNull(selectData.accAge),
            'accCardId': this.changeNull(selectData.accCardId),
            'accCardType': this.changeNull(selectData.accCardType),
            'accCardTypeText': this.changeNull(selectData.accCardTypeText),
            'accDistrict': this.changeNull(selectData.accDistrict),
            'accDistrictText': this.changeNull(selectData.accDistrictText),
            'accFullName': this.changeNull(selectData.accFullName),
            'accNation': this.changeNull(selectData.accNation),
            'accNationText': this.changeNull(selectData.accNationText),
            'accNear': this.changeNull(selectData.accNear),
            'accOccupation': this.changeNull(selectData.accOccupation),
            'accOrigin': this.changeNull(selectData.accOrigin),
            'accOriginText': this.changeNull(selectData.accOriginText),
            'accProvince': this.changeNull(selectData.accProvince),
            'accProvinceText': this.changeNull(selectData.accProvinceText),
            'accRoad': this.changeNull(selectData.accRoad),
            'accSoi': this.changeNull(selectData.accSoi),
            'accSubDistrict': this.changeNull(selectData.accSubDistrict),
            'accSubDistrictText': this.changeNull(selectData.accSubDistrictText),
            'accTel': this.changeNull(selectData.accTel),
            'accVilno': this.changeNull(selectData.accVilno),
            'accused': this.changeNull(selectData.accused),
            'appointmentDate': selectData.appointmentDate,
            'appointmentType': this.changeNull(selectData.appointmentType),
            'appointmentTypeText': this.changeNull(selectData.appointmentTypeText),
            'arrestDate': selectData.arrestDate,
            'arrestOfficerName': this.changeNull(selectData.arrestOfficerName),
            'arrestReportDate': selectData.arrestReportDate,
            'arrestReportUid': this.changeNull(selectData.arrestReportUid),
            'arrestResult': this.changeNull(selectData.arrestResult),
            'arrestResultText': this.changeNull(selectData.arrestResultText),
            'arrestResultOtherText': this.changeNull(selectData.arrestResultOtherText),
            'arrestStatus': this.changeNull(selectData.arrestStatus),
            'because': this.changeNull(selectData.because),
            'blackCaseNum': this.changeNull(selectData.blackCaseNum),
            'blackCaseNumPrefix': this.changeNull(selectData.blackCaseNumPrefix),
            'blackCaseNumPrefixText': this.changeNull(selectData.blackCaseNumPrefixText),
            'blackCaseNumPrefixDescText': this.changeNull(selectData.blackCaseNumPrefixDescText),
            'blackCaseNumYear': this.changeNull(selectData.blackCaseNumYear),
            'causeText': this.changeNull(selectData.causeText),
            'charge': this.changeNull(selectData.charge),
            'chargeOtherText': this.changeNull(selectData.chargeOtherText),
            'chargeType1': this.changeNull(selectData.chargeType1),
            'chargeType1Text': this.changeNull(selectData.chargeType1Text),
            'chargeType2': this.changeNull(selectData.chargeType2),
            'chargeType2Text': this.changeNull(selectData.chargeType2Text),
            'chargeType21': this.changeNull(selectData.chargeType21),
            'chargeType21Text': this.changeNull(selectData.chargeType21Text),
            'chargeType22': this.changeNull(selectData.chargeType22),
            'chargeType22Text': this.changeNull(selectData.chargeType22Text),
            'chargeType23': this.changeNull(selectData.chargeType23),
            'chargeType23Text': this.changeNull(selectData.chargeType23Text),
            'chargeType3': this.changeNull(selectData.chargeType3),
            'chargeType3Text': this.changeNull(selectData.chargeType3Text),
            'courtCode': this.changeNull(selectData.courtCode),
            'courtCodeText': this.changeNull(selectData.courtCodeText),
            'courtInjunction': this.changeNull(selectData.courtInjunction),
            'courtInjunctionText': this.changeNull(selectData.courtInjunctionText),
            'faultTypeId': this.changeNull(selectData.faultTypeId),
            'faultTypeIdText': this.changeNull(selectData.faultTypeIdText),
            'arrestWarrantId': this.changeNull(selectData.arrestWarrantId),
            'judgeName': this.changeNull(selectData.judgeName),
            'judgeName2': this.changeNull(selectData.judgeName2),
            'judgeName3': this.changeNull(selectData.judgeName3),
            'plaintiff': this.changeNull(selectData.plaintiff),
            'policeStationId': this.changeNull(selectData.policeStationId),
            'policeStationIdText': this.changeNull(selectData.policeStationIdText),
            'prescription': this.changeNull(selectData.prescription),
            'prescriptionUnit': this.changeNull(selectData.prescriptionUnit),
            'prescriptionUnitText': this.changeNull(selectData.prescriptionUnitText),
            'redCaseNum': this.changeNull(selectData.redCaseNum),
            'redCaseNumPrefix': this.changeNull(selectData.redCaseNumPrefix),
            'redCaseNumPrefixText': this.changeNull(selectData.redCaseNumPrefixText),
            'redCaseNumPrefixDescText': this.changeNull(selectData.redCaseNumPrefixDescText),
            'redCaseNumYear': this.changeNull(selectData.redCaseNumYear),
            'reqFormId': this.changeNull(selectData.reqFormId),
            'reqNum': this.changeNull(selectData.reqNum),
            'reqNumCaseTypeId': this.changeNull(selectData.reqNumCaseTypeId),
            'reqNumCaseTypeIdText': this.changeNull(selectData.reqNumCaseTypeIdText),
            'reqNumYear': this.changeNull(selectData.reqNumYear),
            'sendToCourtId': this.changeNull(selectData.sendToCourtId),
            'sendToCourtIdText': this.changeNull(selectData.sendToCourtIdText),
            'sendToName': this.changeNull(selectData.sendToName),
            'woaDate': selectData.woaDate,
            'woaEndDate': selectData.woaEndDate,
            'woaNo': this.changeNull(selectData.woaNo),
            'woaStartDate': selectData.woaStartDate,
            'woaType': this.changeNull(selectData.woaType),
            'woaTypeText': this.changeNull(selectData.woaTypeText),
            'woaYear': this.changeNull(selectData.woaYear),
            'wartermarks': this.loadReportDetail(),
            'reportName': this.reportName,
            'reportOfDate': this.reportOfDate,
            'reportOfTime': this.reportOfTime,
            'person': {
                'citizenCardNumber': this.changeNull(selectData.accCardId),
                'fullName': this.changeNull(selectData.accFullName),
                'sex': '',
                'dateOfBirth': '',
            },
        };
        console.log('cojArrestWarrants 2', this.cojArrestWarrants)

    }
    getData(): any {
        return this.cojArrestWarrants;
    }

    formatDate(birthDate: any): string {

        const date = new Date(birthDate);
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear() + 543;
        if (birthDate == 'null' || birthDate == null) {
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

    changeNull(selectData: any) {
        if (selectData == null || selectData == 0 || selectData == 'null') {
            return '-';
        } else {
            return selectData;
        }
    }
    /**
     * Getter $dataSet
     * @return {IDxc_Model_Coj_ArrestWarrants}
     */
    public get $dataSet(): IDxc_Model_Coj_ArrestWarrants {
        return this.dataSet;
    }

    /**
     * Setter $dataSet
     * @param {IDxc_Model_Coj_ArrestWarrants} value
     */
    public set $dataSet(value: IDxc_Model_Coj_ArrestWarrants) {
        this.dataSet = value;
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

}
