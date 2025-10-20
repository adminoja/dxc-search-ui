import * as moment from 'moment';
export interface IPerson {
    citizenCardNumber: string;
    fullName: string;
    sex: string;
    dateOfBirth: Date;
}

export interface IDxc_Model_Agoth_ChargeSubject {
    accusedId: number;
    address: string;
    age: number;
    amphurId: number;
    amphurName: string;
    birthDate?: any;
    citizenId?: any;
    country?: any;
    countryName?: any;
    countryOther?: any;
    criRemark?: any;
    email?: any;
    gender: number;
    genderName: string;
    generallcId: number;
    importDate: Date;
    inqDecisionGroup?: any;
    inqDecisionGroupName?: any;
    isDeleted: boolean;
    migratedDate: Date;
    moo: string;
    name1: string;
    name2?: any;
    name3?: any;
    name4?: any;
    name5?: any;
    nationality: number;
    nationalityName: string;
    nationalityOther?: any;
    personNative?: any;
    occupation?: any;
    occupationName?: any;
    occupationOther?: any;
    prosCommand?: any;
    prosCommandName?: any;
    provinceId: number;
    provinceName: string;
    race: string;
    road?: any;
    soi?: any;
    surname1: string;
    surname2?: any;
    surname3?: any;
    surname4?: any;
    surname5?: any;
    tambolId: number;
    tambolName: string;
    telephone?: any;
    title1: string;
    title2?: any;
    title3?: any;
    title4?: any;
    title5?: any;
    zipCode?: any;

    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    reportBarcode: string;
    wartermarks: string;
    person: IPerson;
}

export interface Dxc_Model_Agoth_ChargeSubject {
  accusedId: number;
  address: string;
  age: number;
  amphurId: number;
  amphurName: string;
  birthDate?: any;
  citizenId?: any;
  country?: any;
  countryName?: any;
  countryOther?: any;
  criRemark?: any;
  email?: any;
  gender: number;
  genderName: string;
  generallcId: number;
  importDate: Date;
  inqDecisionGroup?: any;
  inqDecisionGroupName?: any;
  isDeleted: boolean;
  migratedDate: Date;
  moo: string;
  name1: string;
  name2?: any;
  name3?: any;
  name4?: any;
  name5?: any;
  nationality: number;
  nationalityName: string;
  nationalityOther?: any;
  personNative?: any;
  occupation?: any;
  occupationName?: any;
  occupationOther?: any;
  prosCommand?: any;
  prosCommandName?: any;
  provinceId: number;
  provinceName: string;
  race: string;
  road?: any;
  soi?: any;
  surname1: string;
  surname2?: any;
  surname3?: any;
  surname4?: any;
  surname5?: any;
  tambolId: number;
  tambolName: string;
  telephone?: any;
  title1: string;
  title2?: any;
  title3?: any;
  title4?: any;
  title5?: any;
  zipCode?: any;

  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  reportBarcode: string;
  wartermarks: string;
  person: IPerson;
}
export class Dxc_Model_Agoth_ChargeSubject {
    agothChargeSubject: any;
    private dataSet: IDxc_Model_Agoth_ChargeSubject;
    constructor(selectData: any) {
        this.agothChargeSubject = {
            'accusedId': this.changeNull(selectData.accusedId),
            'address': this.changeNull(selectData.address),
            'age': this.changeNull(selectData.age),
            'amphurId': this.changeNull(selectData.amphurId),
            'amphurName': this.changeNull(selectData.amphurName),
            'birthDate': this.changeNull(selectData.birthDate),
            'citizenId': this.changeNull(selectData.citizenId),
            'country': this.changeNull(selectData.country),
            'countryName': this.changeNull(selectData.countryName),
            'countryOther': this.changeNull(selectData.countryOther),
            'criRemark': this.changeNull(selectData.criRemark),
            'email': this.changeNull(selectData.email),
            'gender': this.changeNull(selectData.gender),
            'genderName': this.changeNull(selectData.genderName),
            'generallcId': this.changeNull(selectData.generallcId),
            'importDate': this.changeNull(selectData.importDate),
            'inqDecisionGroup': this.changeNull(selectData.inqDecisionGroup),
            'inqDecisionGroupName': this.changeNull(selectData.inqDecisionGroupName),
            'isDeleted': this.changeNull(selectData.isDeleted),
            'migratedDate': this.changeNull(selectData.migratedDate),
            'moo': this.changeNull(selectData.moo),
            'name1': this.changeNull(selectData.name1),
            'name2': this.changeNull(selectData.name2),
            'name3': this.changeNull(selectData.name3),
            'name4': this.changeNull(selectData.name4),
            'name5': this.changeNull(selectData.name5),
            'nationality': this.changeNull(selectData.nationality),
            'nationalityName': this.changeNull(selectData.nationalityName),
            'nationalityOther': this.changeNull(selectData.nationalityOther),
            'personNative': this.changeNull(selectData.personNative),
            'occupation': this.changeNull(selectData.occupation),
            'occupationName': this.changeNull(selectData.occupationName),
            'occupationOther': this.changeNull(selectData.occupationOther),
            'prosCommand': this.changeNull(selectData.prosCommand),
            'prosCommandName': this.changeNull(selectData.prosCommandName),
            'provinceId': this.changeNull(selectData.provinceId),
            'provinceName': this.changeNull(selectData.provinceName),
            'race': this.changeNull(selectData.race),
            'road': this.changeNull(selectData.road),
            'soi': this.changeNull(selectData.soi),
            'surname1': this.changeNull(selectData.surname1),
            'surname2': this.changeNull(selectData.surname2),
            'surname3': this.changeNull(selectData.surname3),
            'surname4': this.changeNull(selectData.surname4),
            'surname5': this.changeNull(selectData.surname5),
            'tambolId': this.changeNull(selectData.tambolId),
            'tambolName': this.changeNull(selectData.tambolName),
            'telephone': this.changeNull(selectData.telephone),
            'title1': this.changeNull(selectData.title1),
            'title2': this.changeNull(selectData.title2),
            'title3': this.changeNull(selectData.title3),
            'title4': this.changeNull(selectData.title4),
            'title5': this.changeNull(selectData.title5),
            'zipCode': this.changeNull(selectData.zipCode),

            'wartermarks': this.loadReportDetail(),
            'reportName': this.reportName,
            'reportOfDate': this.reportOfDate,
            'reportOfTime': this.reportOfTime,
            'person': {
                'citizenCardNumber': this.changeNull(selectData.citizenId),
                'fullName': this.changeNull(selectData.name1) + ' ' + this.changeNull(selectData.surname1),
                'sex': this.changeNull(selectData.genderName),
                'dateOfBirth': this.changeNull(selectData.birthDate),
            },
        };
        this.dataSet = this.agothChargeSubject;
    }
    setData(selectData: any) {
      this.agothChargeSubject = {
        'accusedId': this.changeNull(selectData.accusedId),
        'address': this.changeNull(selectData.address),
        'age': this.changeNull(selectData.age),
        'amphurId': this.changeNull(selectData.amphurId),
        'amphurName': this.changeNull(selectData.amphurName),
        'birthDate': this.formatDate(selectData.birthDate),
        'citizenId': this.changeNull(selectData.citizenId),
        'country': this.changeNull(selectData.country),
        'countryName': this.changeNull(selectData.countryName),
        'countryOther': this.changeNull(selectData.countryOther),
        'criRemark': this.changeNull(selectData.criRemark),
        'email': this.changeNull(selectData.email),
        'gender': this.changeNull(selectData.gender),
        'genderName': this.changeNull(selectData.genderName),
        'generallcId': this.changeNull(selectData.generallcId),
        'importDate': this.formatDate(selectData.importDate),
        'inqDecisionGroup': this.changeNull(selectData.inqDecisionGroup),
        'inqDecisionGroupName': this.changeNull(selectData.inqDecisionGroupName),
        'isDeleted': this.changeNull(selectData.isDeleted),
        'migratedDate': this.formatDate(selectData.migratedDate),
        'moo': this.changeNull(selectData.moo),
        'name1': this.changeNull(selectData.name1),
        'name2': this.changeNull(selectData.name2),
        'name3': this.changeNull(selectData.name3),
        'name4': this.changeNull(selectData.name4),
        'name5': this.changeNull(selectData.name5),
        'nationality': this.changeNull(selectData.nationality),
        'nationalityName': this.changeNull(selectData.nationalityName),
        'nationalityOther': this.changeNull(selectData.nationalityOther),
        'personNative': this.changeNull(selectData.personNative),
        'occupation': this.changeNull(selectData.occupation),
        'occupationName': this.changeNull(selectData.occupationName),
        'occupationOther': this.changeNull(selectData.occupationOther),
        'prosCommand': this.changeNull(selectData.prosCommand),
        'prosCommandName': this.changeNull(selectData.prosCommandName),
        'provinceId': this.changeNull(selectData.provinceId),
        'provinceName': this.changeNull(selectData.provinceName),
        'race': this.changeNull(selectData.race),
        'road': this.changeNull(selectData.road),
        'soi': this.changeNull(selectData.soi),
        'surname1': this.changeNull(selectData.surname1),
        'surname2': this.changeNull(selectData.surname2),
        'surname3': this.changeNull(selectData.surname3),
        'surname4': this.changeNull(selectData.surname4),
        'surname5': this.changeNull(selectData.surname5),
        'tambolId': this.changeNull(selectData.tambolId),
        'tambolName': this.changeNull(selectData.tambolName),
        'telephone': this.changeNull(selectData.telephone),
        'title1': this.changeNull(selectData.title1),
        'title2': this.changeNull(selectData.title2),
        'title3': this.changeNull(selectData.title3),
        'title4': this.changeNull(selectData.title4),
        'title5': this.changeNull(selectData.title5),
        'zipCode': this.changeNull(selectData.zipCode),

        'wartermarks': this.loadReportDetail(),
        'reportName': this.reportName,
        'reportOfDate': this.reportOfDate,
        'reportOfTime': this.reportOfTime,
        'person': {
            'citizenCardNumber': this.changeNull(selectData.citizenId),
            'fullName': this.changeNull(selectData.name1) + ' ' + this.changeNull(selectData.surname1),
            'sex': this.changeNull(selectData.genderName),
            'dateOfBirth': this.formatDate(selectData.birthDate),
        },
    };
    }
    getData(): any {
        return this.agothChargeSubject;
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
     * @return {IDxc_Model_Agoth_ChargeSubject}
     */
    public get $dataSet(): IDxc_Model_Agoth_ChargeSubject {
        return this.dataSet;
    }

    /**
     * Setter $dataSet
     * @param {IDxc_Model_Agoth_ChargeSubject} value
     */
    public set $dataSet(value: IDxc_Model_Agoth_ChargeSubject) {
        this.dataSet = value;
    }

}