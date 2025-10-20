import * as moment from 'moment'
import { isEmpty } from 'rxjs/operators';

export interface IPerson {
  citizenCardNumber: string;
  fullName: string;
  sex: string;
  dateOfBirth: Date;
}
export interface IDxc_Model_Dopa_Moi_Face_Photos {

    citizenCardNumber: string;
    id: string;
    image: string;
    mimeType: string;
    imageSrcTagValue: string;
    imageTag: string;
    imageData: any;
    person: IPerson;
    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    reportBarcode: string;
    wartermarks: string;
    status: string;
    body: string[];

}
export interface Dxc_Model_Dopa_Moi_Face_Photos {

    citizenCardNumber: string;
    id: string;
    image: string;
    mimeType: string;
    imageSrcTagValue: string;
    imageTag: string;
    imageData: any;

    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    reportBarcode: string;
    wartermarks: string;
    status: string;
    body: string[];

}
export class Dxc_Model_Dopa_Moi_Face_Photos {

    private dataSet: IDxc_Model_Dopa_Moi_Face_Photos;
    dopamoifacephotos: any;
    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    constructor(selectData: any) {

        this.dopamoifacephotos = {
            // 'allCaseTypeId': this.changeNull(selectData.allCaseTypeId),
            'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
            'id': this.changeNull(selectData.id),
            'image': this.changeNull(selectData.image),
            'mimeType': this.changeNull(selectData.mimeType),
            'imageSrcTagValue': selectData.imageSrcTagValue ,
            'imageTag': selectData.imageTag,
            'imageData': selectData.imageData,
            'person': {
              'citizenCardNumber': selectData.citizenCardNumber,
              'fullName': '',
              'sex': '',
              'dateOfBirth': ''
            },
            'wartermarks': this.loadReportDetail(),
            'reportName' : this.reportName,
            'reportOfDate': this.reportOfDate,
            'reportOfTime': this.reportOfTime

        };
        this.dataSet = this.dopamoifacephotos;
    }

    setData(selectData: any) {
      this.dopamoifacephotos = {
        // 'allCaseTypeId': this.changeNull(selectData.allCaseTypeId),
        'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
        'id': this.changeNull(selectData.id),
        'image': this.changeNull(selectData.image),
        'mimeType': this.changeNull(selectData.mimeType),
        'imageSrcTagValue': selectData.imageSrcTagValue ,
        'imageTag': selectData.imageTag,
        'imageData': selectData.imageData,
        'person': {
          'citizenCardNumber': selectData.citizenCardNumber,
          'fullName': '',
          'sex': '',
          'dateOfBirth': ''
        },
        'wartermarks': this.loadReportDetail(),
        'reportName' : this.reportName,
        'reportOfDate': this.reportOfDate,
        'reportOfTime': this.reportOfTime

    };
    }

    getData(): any {
        return this.dopamoifacephotos;
    }


    /**
     * Getter $dataSet
     * @return {IDxc_Model_Dopa_Moi_Face_Photos}
     */
    public get $dataSet(): IDxc_Model_Dopa_Moi_Face_Photos {
      return this.dataSet;
    }

    /**
     * Setter $dataSet
     * @param {IDxc_Model_Dopa_Moi_Face_Photos} value
     */
    public set $dataSet(value: IDxc_Model_Dopa_Moi_Face_Photos) {
      this.dataSet = value;
    }

    formatDate(dateOfBirth: string): string {

        const date = new Date(dateOfBirth);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear() + 543;
        if (dateOfBirth === 'null') {
            return '-';
        } else {
            const thmonth = new Array ('มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
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
    // imageEncode(imageCode) {
    //   const hex = imageCode;
    //   const bytes = [];
    //   let str = '';
    //   for (let i = 0; i < hex.length - 1; i += 2) {
    //     bytes.push(parseInt(hex.substr(i, 2), 16));
    //   }
    //   str = String.fromCharCode.apply(String, bytes);
    //   const image = btoa(str);
    //   return image;
    // }

    loadReportDetail() {
        if (localStorage.getItem('reportName') !== null) {
            this.reportName = localStorage.getItem('reportName');
            this.reportOfDate = moment(new Date().toString()).format('L').toString();
            this.reportOfTime = moment(new Date().toString()).format('LTS').toString();
            this.reportBarcode = 'QP4015-12345678';
            this.wartermarks = `<div class="watermark">
          ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
          ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    </div>
    <div class="watermark2">
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    </div>
    <div class="watermark3">
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    </div>
    <div class="watermark4">
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    </div>
    <div class="watermark5">
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    </div>
    <div class="watermark6">
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    </div>
    <div class="watermark7">
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    </div>
    <div class="watermark8">
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    </div>
    <div class="watermark9">
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    </div>
    <div class="watermark10">
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    </div>
    <div class="watermark11">
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    </div>`;
            return this.wartermarks;
        } else {
            this.reportName = 'เกิดข้อผิดพลาด';
            this.reportOfDate = moment(new Date().toString()).format('L').toString();
            this.reportOfTime = moment(new Date().toString()).format('LTS').toString();
            this.reportBarcode = 'QP4015-12345678';
            this.wartermarks = `<div class="watermark">
          ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
          ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    </div>
    <div class="watermark2">
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    </div>
    <div class="watermark3">
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    </div>
    <div class="watermark4">
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    </div>
    <div class="watermark5">
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    </div>
    <div class="watermark6">
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    </div>
    <div class="watermark7">
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    </div>
    <div class="watermark8">
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    </div>
    <div class="watermark9">
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    </div>
    <div class="watermark10">
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    </div>
    <div class="watermark11">
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
    </div>`;
            return this.wartermarks;
        }
    }
}
