import * as moment from 'moment';
export interface IPerson {
    citizenCardNumber: string;
    fullName: string;
    sex: string;
    dateOfBirth: Date;
}
export interface IDxc_Model_Rtp_TravelInformation {

    // birthDate: string;
    // citizenCardNumber: string;
    // convenm: string;
    // convregNo: string;
    // dataId: string;
    // deptTnm: string;
    // eFullName: string;
    // id: string;
    // inOutType: string;
    // nationEnm: string;
    // refNumber: string;
    // sex: string;
    // tdtNo: string;
    // visaType: string;

    dataId: string;
    refNumber: string;
    idCardNo: string;
    tdtNo: string;
    inOutType: string;
    sex: string;
    naionEm: string;
    birthDate: string;
    visaType: string;
    convregNo: string;
    convmn: string;
    deptTnm: string;
    efullName: string;

    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    reportBarcode: string;
    wartermarks: string;
    status: string;
    body: string[];
    person: IPerson;
}

export class Dxc_Model_Rtp_TravelInformation {
    travelInformation: any;
    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    reportBarcode: string;
    wartermarks: string;
    private dataSet: IDxc_Model_Rtp_TravelInformation;
    constructor(selectData: any) {
        this.travelInformation = {
            // 'birthDate': this.changeNull(selectData.birthDate),
            // 'citizenCardNumber': selectData.citizenCardNumber,
            // 'convenm': this.changeNull(selectData.convenm),
            // 'convregNo': this.changeNull(selectData.convregNo),
            // 'dataId': this.changeNull(selectData.dataId),
            // 'deptTnm': this.changeNull(selectData.deptTnm),
            // 'eFullName': this.changeNull(selectData.eFullName),
            // 'id': this.changeNull(selectData.id),
            // 'inOutType': this.changeNull(selectData.inOutType),
            // 'nationEnm': this.changeNull(selectData.nationEnm),
            // 'refNumber': this.changeNull(selectData.refNumber),
            // 'sex': this.changeNull(selectData.sex),
            // 'tdtNo': this.changeNull(selectData.tdtNo),
            // 'visaType': this.changeNull(selectData.visaType),

            dataId: this.changeNull(selectData.dataId),
            refNumber: this.changeNull(selectData.refNumber),
            idCardNo: this.changeNull(selectData.idCardNo),
            tdtNo: this.changeNull(selectData.tdtNo),
            inOutType: this.changeNull(selectData.inOutType),
            sex: this.changeNull(selectData.sex),
            naionEm: this.changeNull(selectData.naionEm),
            birthDate: this.changeNull(selectData.birthDate),
            visaType: this.changeNull(selectData.visaType),
            convregNo: this.changeNull(selectData.convregNo),
            convmn: this.changeNull(selectData.convmn),
            deptTnm: this.changeNull(selectData.deptTnm),
            efullName: this.changeNull(selectData.efullName),

            'wartermarks': this.loadReportDetail(),
            'reportName': this.reportName,
            'reportOfDate': this.reportOfDate,
            'reportOfTime': this.reportOfTime,
            'reportBarcode': this.reportBarcode,
            'person': {
                'citizenCardNumber':selectData.idCardNo,
                'fullName': this.changeNull(selectData.efullName),
                'sex': this.changeNull(selectData.sex),
                'dateOfBirth': this.changeNull(selectData.birthDate),
            },
        };
        this.dataSet = this.travelInformation;
    }
    setData(selectData: any) {
        this.travelInformation = {
          // 'birthDate': this.changeNull(selectData.birthDate),
          // 'citizenCardNumber': selectData.citizenCardNumber,
          // 'convenm': this.changeNull(selectData.convenm),
          // 'convregNo': this.changeNull(selectData.convregNo),
          // 'dataId': this.changeNull(selectData.dataId),
          // 'deptTnm': this.changeNull(selectData.deptTnm),
          // 'eFullName': this.changeNull(selectData.eFullName),
          // 'id': this.changeNull(selectData.id),
          // 'inOutType': this.changeNull(selectData.inOutType),
          // 'nationEnm': this.changeNull(selectData.nationEnm),
          // 'refNumber': this.changeNull(selectData.refNumber),
          // 'sex': this.changeNull(selectData.sex),
          // 'tdtNo': this.changeNull(selectData.tdtNo),
          // 'visaType': this.changeNull(selectData.visaType),

          dataId: this.changeNull(selectData.dataId),
          refNumber: this.changeNull(selectData.refNumber),
          idCardNo: this.changeNull(selectData.idCardNo),
          tdtNo: this.changeNull(selectData.tdtNo),
          inOutType: this.changeNull(selectData.inOutType),
          sex: this.changeNull(selectData.sex),
          naionEm: this.changeNull(selectData.naionEm),
          birthDate: this.changeNull(selectData.birthDate),
          visaType: this.changeNull(selectData.visaType),
          convregNo: this.changeNull(selectData.convregNo),
          convmn: this.changeNull(selectData.convmn),
          deptTnm: this.changeNull(selectData.deptTnm),
          efullName: this.changeNull(selectData.efullName),

          'wartermarks': this.loadReportDetail(),
          'reportName': this.reportName,
          'reportOfDate': this.reportOfDate,
          'reportOfTime': this.reportOfTime,
          'reportBarcode': this.reportBarcode,
          'person': {
              'citizenCardNumber':selectData.idCardNo,
              'fullName': this.changeNull(selectData.efullName),
              'sex': this.changeNull(selectData.sex),
              'dateOfBirth': this.changeNull(selectData.birthDate),
          },
        };
    }
    getData(): any {
        return this.travelInformation;
    }
    formatDate(dateOfBirth: string): string {

      const date = new Date(dateOfBirth);
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear() + 543;
      if (dateOfBirth === 'null') {
          return '-';
      }
      if (dateOfBirth === null) {
        return '-';
      } else {
          const thmonth = new Array ('มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
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
     * @return {IDxc_Model_Rtp_TravelInformation}
     */
    public get $dataSet(): IDxc_Model_Rtp_TravelInformation {
        return this.dataSet;
    }

    /**
     * Setter $dataSet
     * @param {IDxc_Model_Rtp_TravelInformation} value
     */
    public set $dataSet(value: IDxc_Model_Rtp_TravelInformation) {
        this.dataSet = value;
    }

}
