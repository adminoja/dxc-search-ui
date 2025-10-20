import * as moment from 'moment';
export interface IPerson {
    citizenCardNumber: string;
    fullName: string;
    sex: string;
    dateOfBirth: Date;
}

export interface IDxc_Model_Dopa_MoiDopaPersonFirstnameLastname {
    age: number;
    citizenCardNumber: string;
    dataId: string;
    dateOfBirth: number;
    dateOfMoveIn: number;
    englishFirstName: string;
    englishLastName: string;
    englishMiddleName: string;
    englishTitleDesc: string;
    fatherName: string;
    fatherNationalityCode: number;
    fatherNationalityDesc: string;
    fatherPersonalID: string;
    firstName: string;
    fullnameAndRank: string;
    genderCode: number;
    genderDesc: string;
    id: string;
    lastName: string;
    middleName: string;
    motherName: string;
    motherNationalityCode: number;
    motherNationalityDesc: string;
    motherPersonalID: string;
    nationalityCode: number;
    nationalityDesc: string;
    ownerStatusDesc: string;
    pid: string;
    recordNumber: number;
    statusOfPersonCode: number;
    statusOfPersonDesc: string;
    titleCode: number;
    titleDesc: string;
    titleName: string;
    titleSex: number;
    totalRecord: number;

    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    reportBarcode: string;
    wartermarks: string;
    person: IPerson;
}
export class Dxc_Model_Dopa_MoiDopaPersonFirstnameLastname {
    moiDopaPersonFirstnameLastname: any;
    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    reportBarcode: string;
    wartermarks: string;
    private dataSet: IDxc_Model_Dopa_MoiDopaPersonFirstnameLastname;
    constructor(selectData: any) {
        this.moiDopaPersonFirstnameLastname = {
            'age': this.changeNull(selectData.age),
            'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
            'dataId': this.changeNull(selectData.dataId),
            'dateOfBirth': this.changeNull(selectData.dateOfBirth),
            'dateOfMoveIn': this.changeNull(selectData.dateOfMoveIn),
            'englishFirstName': this.changeNull(selectData.englishFirstName),
            'englishLastName': this.changeNull(selectData.englishLastName),
            'englishMiddleName': this.changeNull(selectData.englishMiddleName),
            'englishTitleDesc': this.changeNull(selectData.englishTitleDesc),
            'fatherName': this.changeNull(selectData.fatherName),
            'fatherNationalityCode': this.changeNull(selectData.fatherNationalityCode),
            'fatherNationalityDesc': this.changeNull(selectData.fatherNationalityDesc),
            'fatherPersonalID': this.changeNull(selectData.fatherPersonalID),
            'firstName': this.changeNull(selectData.firstName),
            'fullnameAndRank': this.changeNull(selectData.fullnameAndRank),
            'genderCode': this.changeNull(selectData.genderCode),
            'genderDesc': this.changeNull(selectData.genderDesc),
            'id': this.changeNull(selectData.id),
            'lastName': this.changeNull(selectData.lastName),
            'middleName': this.changeNull(selectData.middleName),
            'motherName': this.changeNull(selectData.motherName),
            'motherNationalityCode': this.changeNull(selectData.motherNationalityCode),
            'motherNationalityDesc': this.changeNull(selectData.motherNationalityDesc),
            'motherPersonalID': this.changeNull(selectData.motherPersonalID),
            'nationalityCode': this.changeNull(selectData.nationalityCode),
            'nationalityDesc': this.changeNull(selectData.nationalityDesc),
            'ownerStatusDesc': this.changeNull(selectData.ownerStatusDesc),
            'pid': this.changeNull(selectData.pid),
            'recordNumber': this.changeNull(selectData.recordNumber),
            'statusOfPersonCode': this.changeNull(selectData.statusOfPersonCode),
            'statusOfPersonDesc': this.changeNull(selectData.statusOfPersonDesc),
            'titleCode': this.changeNull(selectData.titleCode),
            'titleDesc': this.changeNull(selectData.titleDesc),
            'titleName': this.changeNull(selectData.titleName),
            'titleSex': this.changeNull(selectData.titleSex),
            'totalRecord': this.changeNull(selectData.totalRecord),

            'wartermarks': this.loadReportDetail(),
            'reportName': this.reportName,
            'reportOfDate': this.reportOfDate,
            'reportOfTime': this.reportOfTime,
            'person': {
                'citizenCardNumber': this.changeNull(selectData.pid),
                'fullName': this.changeNull(selectData.firstName) + ' ' + selectData.lastName,
                'sex': this.changeNull(selectData.genderDesc),
                'dateOfBirth': this.changeNull(selectData.dateOfBirth),
            },
        };
        this.dataSet = this.moiDopaPersonFirstnameLastname;
    }
    setData(selectData: any) {
      this.moiDopaPersonFirstnameLastname = {
        'age': this.changeNull(selectData.age),
        'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
        'dataId': this.changeNull(selectData.dataId),
        'dateOfBirth': this.formatDate(selectData.dateOfBirth),
        'dateOfMoveIn': this.changeNull(selectData.dateOfMoveIn),
        'englishFirstName': this.changeNull(selectData.englishFirstName),
        'englishLastName': this.changeNull(selectData.englishLastName),
        'englishMiddleName': this.changeNull(selectData.englishMiddleName),
        'englishTitleDesc': this.changeNull(selectData.englishTitleDesc),
        'fatherName': this.changeNull(selectData.fatherName),
        'fatherNationalityCode': this.changeNull(selectData.fatherNationalityCode),
        'fatherNationalityDesc': this.changeNull(selectData.fatherNationalityDesc),
        'fatherPersonalID': this.changeNull(selectData.fatherPersonalID),
        'firstName': this.changeNull(selectData.firstName),
        'fullnameAndRank': this.changeNull(selectData.fullnameAndRank),
        'genderCode': this.changeNull(selectData.genderCode),
        'genderDesc': this.changeNull(selectData.genderDesc),
        'id': this.changeNull(selectData.id),
        'lastName': this.changeNull(selectData.lastName),
        'middleName': this.changeNull(selectData.middleName),
        'motherName': this.changeNull(selectData.motherName),
        'motherNationalityCode': this.changeNull(selectData.motherNationalityCode),
        'motherNationalityDesc': this.changeNull(selectData.motherNationalityDesc),
        'motherPersonalID': this.changeNull(selectData.motherPersonalID),
        'nationalityCode': this.changeNull(selectData.nationalityCode),
        'nationalityDesc': this.changeNull(selectData.nationalityDesc),
        'ownerStatusDesc': this.changeNull(selectData.ownerStatusDesc),
        'pid': this.changeNull(selectData.pid),
        'recordNumber': this.changeNull(selectData.recordNumber),
        'statusOfPersonCode': this.changeNull(selectData.statusOfPersonCode),
        'statusOfPersonDesc': this.changeNull(selectData.statusOfPersonDesc),
        'titleCode': this.changeNull(selectData.titleCode),
        'titleDesc': this.changeNull(selectData.titleDesc),
        'titleName': this.changeNull(selectData.titleName),
        'titleSex': this.changeNull(selectData.titleSex),
        'totalRecord': this.changeNull(selectData.totalRecord),

        'wartermarks': this.loadReportDetail(),
        'reportName': this.reportName,
        'reportOfDate': this.reportOfDate,
        'reportOfTime': this.reportOfTime,
        'person': {
            'citizenCardNumber': this.changeNull(selectData.pid),
            'fullName': this.changeNull(selectData.firstName) + ' ' + selectData.lastName,
            'sex': this.changeNull(selectData.genderDesc),
            'dateOfBirth': this.formatDate(selectData.dateOfBirth),
        },
    };
    }
    getData(): any {
        return this.moiDopaPersonFirstnameLastname;
    }
    // เช็ควันที่
    formatDate(birthDate: string): string {

      let date = `${birthDate}`;
      const year = date.substring(0, 4);
      const month = date.substring(4, 6);
      const day = date.substring(6, 8);
      if (birthDate === 'null') {
        return '-';
      } else if (birthDate == null) {
        return '-';
      } else {
        const thmonth = new Array('มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
          'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม');
          const d = new Date(month);
        return `${day} ${thmonth[d.getMonth()]} ${year}`;
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
     * @return {IDxc_Model_Dopa_MoiDopaPersonFirstnameLastname}
     */
    public get $dataSet(): IDxc_Model_Dopa_MoiDopaPersonFirstnameLastname {
        return this.dataSet;
    }

    /**
     * Setter $dataSet
     * @param {IDxc_Model_Dopa_MoiDopaPersonFirstnameLastname} value
     */
    public set $dataSet(value: IDxc_Model_Dopa_MoiDopaPersonFirstnameLastname) {
        this.dataSet = value;
    }

}