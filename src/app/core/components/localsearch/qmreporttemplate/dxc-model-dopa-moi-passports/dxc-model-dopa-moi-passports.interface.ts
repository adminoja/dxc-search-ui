import { Dxc_Model_Moi_Dopa_Passports, IDxc_Model_Moi_Dopa_Passports } from "../../../../shared/models/Dxc_Model_Dopa_Moi_Passports";
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { Injectable } from "@angular/core";

export interface IReportDopaMoiPassports {
  model: IDxc_Model_Moi_Dopa_Passports
}

@Injectable()
export class DopaMoiPassportsMetadata {
  private results: IDxc_Model_Moi_Dopa_Passports[];
  private obj: string;
  private show: boolean;
  private countResults: number;
  private normalPdf: string[];
  private count: number;
  reportName: string;
  reportOfTime: string;
  reportOfDate: string;
  html: string;
  private normalPdfCount: string;
  constructor() {
    this.results = [];
    this.normalPdf = [];
    this.count = 0;
    this.normalPdfCount = '';
  }
  public getHtml(selectData: IDxc_Model_Moi_Dopa_Passports, title: string) {

    return this.html = `<html>
        <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <style>
      @font-face {
        font-family: "THSarabunNew";
        src: url(https://search.dxc.go.th/public/font/THSarabunNew.ttf);
      }
      html {
        font-family: "THSarabunNew";
        height: 100%;
        width: 100%;
      }
      .watermark {
        content: "";
        z-index: 50;
        font-family: THSarabunNew;
        font-size: 11pt;
        color: rgba(192,192,192,0.7);
        text-transform: uppercase;
        text-align: center;
        transform: rotate(-45.7deg);
        position: absolute;
        width: 150%;
        height: 150%;
        top: -180px;
        left: 30px;
      }
      .watermark2 {
        content: "";
        z-index: 100;
        font-family: THSarabunNew;
        font-size: 11pt;
        text-align: center;
        color: rgba(192,192,192,0.7);
        text-transform: uppercase;
        transform: rotate(-45.7deg);
        position: absolute;
        width: 150%;
        height: 150%;
        top: -90px;
        left: 50px;
      }
      .watermark3 {
        content: "";
        z-index: 100;
        font-family: THSarabunNew;
        font-size: 11pt;
        color: rgba(192,192,192,0.7);
        text-align: center;
        text-transform: uppercase;
        transform: rotate(-45.7deg);
        position: absolute;
        width: 150%;
        height: 150%;
        top: -10px;
        left: 80px;
      }
      .watermark4 {
        content: "";
        z-index: 100;
        font-family: THSarabunNew;
        font-size: 11pt;
        color: rgba(192,192,192,0.7);
        text-align: center;
        text-transform: uppercase;
        transform: rotate(-45.7deg);
        position: absolute;
        width: 150%;
        height: 150%;
        top: 0px;
        left: 200px;
      }
      .watermark5 {
        content: "";
        z-index: 100;
        font-family: THSarabunNew;
        font-size: 11pt;
        color: rgba(192,192,192,0.7);
        text-align: center;
        text-transform: uppercase;
        transform: rotate(-45.7deg);
        position: absolute;
        width: 150%;
        height: 150%;
        top: 5px;
        left: 300px;
      }
      .watermark6 {
        content: "";
        z-index: 100;
        font-family: THSarabunNew;
        font-size: 11pt;
        color: rgba(192,192,192,0.7);
        text-align: center;
        text-transform: uppercase;
        transform: rotate(-45.7deg);
        position: absolute;
        width: 150%;
        height: 150%;
        top: 50px;
        left: 350px;
      }
      .watermark7 {
        content: "";
        z-index: 100;
        font-family: THSarabunNew;
        font-size: 11pt;
        color: rgba(192,192,192,0.7);
        text-align: center;
        text-transform: uppercase;
        transform: rotate(-45.7deg);
        position: absolute;
        width: 150%;
        height: 150%;
        top: 120px;
        left: 400px;
      }
      .watermark8 {
        content: "";
        z-index: 100;
        font-family: THSarabunNew;
        font-size: 11pt;
        color: rgba(192,192,192,0.7);
        text-align: center;
        text-transform: uppercase;
        transform: rotate(-45.7deg);
        position: absolute;
        width: 150%;
        height: 150%;
        top: 190px;
        left: 450px;
      }
      .watermark9 {
        content: "";
        z-index: 100;
        font-family: THSarabunNew;
        font-size: 11pt;
        color: rgba(192,192,192,0.7);
        text-align: center;
        text-transform: uppercase;
        transform: rotate(-45.7deg);
        position: absolute;
        width: 150%;
        height: 150%;
        top: 260px;
        left: 500px;
      }
      .watermark10 {
        content: "";
        z-index: 100;
        font-family: THSarabunNew;
        font-size: 11pt;
        color: rgba(192,192,192,0.7);
        text-align: center;
        text-transform: uppercase;
        transform: rotate(-45.7deg);
        position: absolute;
        width: 150%;
        height: 150%;
        top: 330px;
        left: 550px;
      }
      .watermark11 {
        content: "";
        z-index: 100;
        font-family: THSarabunNew;
        font-size: 11pt;
        color: rgba(192,192,192,0.7);
        text-align: center;
        text-transform: uppercase;
        transform: rotate(-45.7deg);
        position: absolute;
        width: 150%;
        height: 150%;
        top: 390px;
        left: 600px;
      }
      .colorfont {
        color: blue;
      }
      body {
        font-family: THSarabunNew;
        font-size: 18px;
      }
      div.header {
        display: block;
        text-align: center;
        position: running(header);
        width: 100%;
      }
      div.footer {
        display: block;
        text-align: center;
        position: running(footer);
        width: 100%;
      }
      footer{
        position: running(footerIdentifier);
    }
    barcode {
      top: 0px;
      width:120px;
      height:40px;
    }
    @page {
        @bottom-left {
          font: 9pt arial, THSarabunNew;
          text-align: right;
          margin-bottom: 5mm;
          margin-top: 0mm;
          border-top: 0.2mm solid #006DAB;
          vertical-align: top;
          padding-top: 0cm;
          content: element(footerIdentifier);
        }
    }
      div.container {
        min-height: 10em;
        display: table-cell;
        vertical-align: middle
      }
       @media print {
       @page {
       font-family: THSarabunNew;
       margin: 1.5cm;
       padding-top: 12pt;

          /* Initialize the page counter */
          counter-increment: page 1;
          /* The following lines are styles for page margin boxes
          which are described in the CSS 3 paged media module draft.
          The @xyz selector indicates the location of the box
          */
      @bottom-right {
       font: 9pt arial, THSarabunNew;
       text-align: right;
       margin-bottom: 5mm;
       margin-top: 0mm;
       border-top: 0.2mm solid #006DAB;
       vertical-align: top;
       padding-top: 0.1cm;
       content: "หน้า " counter(page) " / " counter(pages);
        }
      }
      /* repeating page background image */
      html {
        font-family: "THSarabunNew";
        height: 100%;
        width: 100%;
        background-attachment: scroll;
        box-decoration-break: clone;
        background-position: 0 -12pt;
      }
      .barcode {
        font: 7pt arial, THSarabunNew;
        text-align: left;
        margin-bottom: 5mm;
        margin-top: 2mm;
        border-top: 0.2mm solid #006DAB;
        vertical-align: top;
        padding-top: 0.1cm;
        content: "";
      }
      #tablecollapse {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid black;
      }
      #tablecollapse > tbody > tr > td {
        border: 1px solid black;
      }
      /* Cross-references */
      a.int::after {
          content: ' (see page ' target-counter(-ro-attr(href url), page) ')';
        }
      }
    </style>
  </head>
  <footer>
      <table border="0">
      <tr>
        <td rowspan="2"> <barcode:barcode xmlns:barcode="http://barcode4j.krysalis.org/ns" message="123456789012">
        <barcode:ean-13/>
      </barcode:barcode></td>
          <td >ผู้พิมพ์ ${selectData.reportName}</td>
        </tr>
        <tr>
          <td >วันที่ ${selectData.reportOfDate} เวลา ${selectData.reportOfTime}</td>
        </tr>
      </table>
  </footer>
  <body>
    <div>
      <img src="https://search.dxc.go.th/public/image/DXC_logo.jpg" style="width: 150px; height: 50px" />
      <div>
        <label>DXC Report</label>
        <br>
        <a href="www.dxc.go.th">www.dxc.go.th</a>
      </div>
      <hr>
    </div>
  ${selectData.wartermarks}
    <div>
      <table border="1px" style="border-style:solid; border-color:#000; width:100%">
        <tr>
          <td align="center">${title}</td>
        </tr>
      </table>
      <br /><br />
      <table style="width: 100%;">
        <tbody>
            <tr>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
            </tr>
            <tr>
                <td style="height: 5px;" colspan="8">&nbsp;</td>
            </tr>
			<tr>
				<td style="font-weight: bold; text-decoration:underline" colspan="5">รายละเอียดเกี่ยวกับหนังสือเดินทาง</td>
			</tr>
			<tr>
                <td colspan="4">วันที่ออกหนังสือเดินทาง </td>
                <td style="color: blue;">${selectData.issueDate}</td>
                <td colspan="2">วันหมดอายุหนังสือเดินทาง</td>
                <td style="color: blue;" colspan="3">${selectData.expireDate}</td>
            </tr>
			<tr>
                <td colspan="4">แผน</td>
                <td style="color: blue;">${selectData.frame}</td>
                <td colspan="2">ชื่อกลาง-นามสกุล ผู้ถือหนังสือเดินทาง (Eng)</td>
                <td style="color: blue;" colspan="3">${selectData.lastNameEn}</td>
            </tr>
			<tr>
                <td colspan="4">ชื่อกลาง-นามสกุล ผู้ถือหนังสือเดินทาง (ไทย)</td>
                <td style="color: blue;">${selectData.lastNameTh}</td>
                <td colspan="2">หมายเลขหนังสือเดินทาง</td>
                <td style="color: blue;">${selectData.passportNo}</td>
            </tr>
			<tr>
                <td colspan="4">สถานะหนังสือเดินทาง </td>
                <td style="color: blue;">${selectData.passportStatus}</td>
                <td colspan="2">ลำดับที่หนังสือเดินทาง</td>
                <td style="color: blue;" data-attributename="PassportSubNo"
                data-role="dxc-hyperlink" data-value="${selectData.passportSubNo}">${selectData.passportSubNo}</td>
            </tr>
			<tr>
                <td colspan="4">ประเภทหนังสือเดินทาง</td>
                <td style="color: blue;">${selectData.passportType}</td>
                <td colspan="2">ทะเบียน</td>
                <td style="color: blue;">${selectData.roll}</td>
            </tr>
			<tr>
                <td colspan="4">เลขที่รายการข้อมูลหนังสือเดินทาง </td>
                <td style="color: blue;">${selectData.seq}</td>
                <td colspan="2">แหล่งที่มา </td>
                <td style="color: blue;">${selectData.source}</td>
            <tr>
                <td colspan="4">จำนวนข้อมูลที่ส่งให้ </td>
                <td style="color: blue;">${selectData.passportRecordCount}</td>
            </tr>
            <tr>
                <td style="height: 5px;" colspan="8">&nbsp;</td>
            </tr>
			<tr>
				<td style="font-weight: bold; text-decoration:underline" colspan="5">รายละเอียดเกี่ยวกับตัวผู้ถือหนังสือเดินทาง</td>
			</tr>
            <tr>
                <td colspan="4">ชื่อผู้ถือหนังสือเดินทาง (Eng)</td>
                <td style="color: blue;">${selectData.firstNameEn}</td>
                <td colspan="2">ชื่อผู้ถือหนังสือเดินทาง (ไทย)</td>
                <td style="color: blue;">${selectData.firstNameTh}</td>
            </tr>
            <tr>
                <td colspan="4">เพศ</td>
                <td style="color: blue;">${selectData.sex}</td>
                <td colspan="2">ภูมิลำเนา (รองรับทั้งไทย และ อังกฤษ)</td>
                <td style="color: blue;">${selectData.domicile}</td>
            </tr>
            <tr>
                <td colspan="4">สถานที่เกิด </td>
                <td style="color: blue;">${selectData.birthPlace}</td>
                <td colspan="2">วันเกิด </td>
                <td style="color: blue;">${selectData.dob}</td>
            </tr>
        </tbody>
    </table>
    </div>
  </body>
</html>
`;
  }

  public viewgetHtml(selectData: IDxc_Model_Moi_Dopa_Passports, title: string) {

    return this.html = `<html>
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        </head>
        <body>
        <div>
                              <table class="table" border="2px" width="100%">
                                  <tr>
                                      <td align="center">${title}</td>
                                  </tr>
                              </table>
        <br />
        <br />
  <table style="width: 100%;">
        <tbody>
            <tr>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
            </tr>
            <tr>
                <td style="height: 5px;" colspan="8">&nbsp;</td>
            </tr>
			<tr>
				<td class="text-white font-20" text-decoration:underline" colspan="5">รายละเอียดเกี่ยวกับหนังสือเดินทาง</td>
      </tr>
      <tr>
                    <td style="height: 5px;" colspan="8">&nbsp;</td>
      </tr>
			<tr>
                <td colspan="4" class="text-white font-20">วันที่ออกหนังสือเดินทาง </td>
                <td style="color: blue;"><span class="text-success font-20">${selectData.issueDate}</span></td>
                <td colspan="2" class="text-white font-20">วันหมดอายุหนังสือเดินทาง</td>
                <td style="color: blue;" colspan="3"><span class="text-success font-20">${selectData.expireDate}</span></td>
            </tr>
			<tr>
                <td colspan="4" class="text-white font-20">แผน</td>
                <td style="color: blue;"><span class="text-success font-20">${selectData.frame}</span></td>
                <td colspan="2" class="text-white font-20">ชื่อกลาง-นามสกุล ผู้ถือหนังสือเดินทาง (Eng)</td>
                <td style="color: blue;" colspan="3"><span class="text-success font-20">${selectData.lastNameEn}</span></td>
            </tr>
			<tr>
                <td colspan="4" class="text-white font-20">ชื่อกลาง-นามสกุล ผู้ถือหนังสือเดินทาง (ไทย)</td>
                <td style="color: blue;"><span class="text-success font-20">${selectData.lastNameTh}</span></td>
                <td colspan="2" class="text-white font-20">หมายเลขหนังสือเดินทาง</td>
                <td style="color: blue;"><span class="text-success font-20">${selectData.passportNo}</span></td>
            </tr>
			<tr>
                <td colspan="4" class="text-white font-20">สถานะหนังสือเดินทาง </td>
                <td style="color: blue;"><span class="text-success font-20">${selectData.passportStatus}</span></td>
                <td colspan="2" class="text-white font-20">ลำดับที่หนังสือเดินทาง</td>
                <td style="color: blue;" data-attributename="PassportSubNo"
                data-role="dxc-hyperlink" data-value="${selectData.passportSubNo}">
                <span class="text-success font-20">${selectData.passportSubNo}</span></td>
            </tr>
			<tr>
                <td colspan="4" class="text-white font-20">ประเภทหนังสือเดินทาง</td>
                <td style="color: blue;"><span class="text-success font-20">${selectData.passportType}</span></td>
                <td colspan="2" class="text-white font-20">ทะเบียน</td>
                <td style="color: blue;"><span class="text-success font-20">${selectData.roll}</span></td>
            </tr>
			<tr>
                <td colspan="4" class="text-white font-20">เลขที่รายการข้อมูลหนังสือเดินทาง </td>
                <td style="color: blue;"><span class="text-success font-20">${selectData.seq}</span></td>
                <td colspan="2" class="text-white font-20">แหล่งที่มา </td>
                <td style="color: blue;"><span class="text-success font-20">${selectData.source}</span></td>
            <tr>
                <td colspan="4" class="text-white font-20">จำนวนข้อมูลที่ส่งให้ </td>
                <td style="color: blue;"><span class="text-success font-20">${selectData.passportRecordCount}</span></td>
            </tr>
            <tr>
                <td style="height: 5px;" colspan="8">&nbsp;</td>
            </tr>
			<tr>
				<td class="text-white font-20" text-decoration:underline" colspan="5">รายละเอียดเกี่ยวกับตัวผู้ถือหนังสือเดินทาง</td>
      </tr>
            <tr>
                    <td style="height: 5px;" colspan="8">&nbsp;</td>
            </tr>
            <tr>
                <td colspan="4" class="text-white font-20">ชื่อผู้ถือหนังสือเดินทาง (Eng)</td>
                <td style="color: blue;"><span class="text-success font-20">${selectData.firstNameEn}</span></td>
                <td colspan="2" class="text-white font-20">ชื่อผู้ถือหนังสือเดินทาง (ไทย)</td>
                <td style="color: blue;"><span class="text-success font-20">${selectData.firstNameTh}</span></td>
            </tr>
            <tr>
                <td colspan="4" class="text-white font-20">เพศ</td>
                <td style="color: blue;"><span class="text-success font-20">${selectData.sex}</span></td>
                <td colspan="2" class="text-white font-20">ภูมิลำเนา (รองรับทั้งไทย และ อังกฤษ)</td>
                <td style="color: blue;"><span class="text-success font-20">${selectData.domicile}</span></td>
            </tr>
            <tr>
                <td colspan="4" class="text-white font-20">สถานที่เกิด </td>
                <td style="color: blue;"><span class="text-success font-20">${selectData.birthPlace}</span></td>
                <td colspan="2" class="text-white font-20">วันเกิด </td>
                <td style="color: blue;"><span class="text-success font-20">${selectData.dob}</span></td>
            </tr>
        </tbody>
    </table>
    </div>
  </body>
</html>
`;
  }
  public getSearchData() {
    // มาจาก env
    const schema = 'dopa-moi-dopa-passports';
    //const schema = environment.qm.sub[0]['dopa'].sub[0]['passports'].schema;
    if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {

      console.log('รายการประวัติหนังสือเดินทาง (Linkage) search nul');
    } else {
      this.show = true;
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length; // นับจำนวนรายการ

      console.log('รายการประวัติหนังสือเดินทาง (Linkage) results: ' + this.results);
    }
  }
  public getnormalPdf(){
    const schema = 'dopa-moi-dopa-passports';
    //const schema = environment.qm.sub[0]['dopa'].sub[0]['passports'].schema;
    if (localStorage.getItem(schema + 'Results') === null) {
      this.normalPdf = [];
      console.log('รายการประวัติหนังสือเดินทาง (Linkage) PDF null');
    } else {
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length;
      this.normalPdfCount = `<div class="col-md-11"
        class="row card singlereport-timeline-item list-normal-design-head-collapse">
        <span class="list-normal-design-underline depart">กรมการปกครอง: </span>
        <span class="list-normal-design-underline departdata">รายการประวัติหนังสือเดินทาง (Linkage)</span>
        <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ</span>
      </div>`;
      for (let i = 0; i < this.results.length; i++) {
        this.normalPdf.push(`<div class="col-md-11">
          <div class="section-criminal-results" style="text-indent:25px;
            font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
            <span class="list-normal-design-underline depart">รายการประวัติหนังสือเดินทาง (Linkage)</span>
              <div style="padding-left:15px;">
                <strong class="report-field-title">ชื่อผู้ถือหนังสือเดินทาง(ไทย)</strong>&nbsp;&nbsp;
                <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].firstNameTh)}</span>&nbsp;&nbsp;
                <strong class="report-field-title">เพศ</strong>&nbsp;&nbsp;
                <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].sex)}</span>&nbsp;&nbsp;
                <strong class="report-field-title">สถานะหนังสือเดินทาง</strong>&nbsp;&nbsp;
                <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].passportStatus)}</span>&nbsp;&nbsp;
                <strong class="report-field-title">หมายเลขหนังสือเดินทาง</strong>&nbsp;&nbsp;
                <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].passportNo)}</span>&nbsp;&nbsp;
                <strong class="report-field-title">วันที่ออกหนังสือเดินทาง</strong>&nbsp;&nbsp;
                <span class="report-field-value" style="text-decoration:underline">${this.formatDate(this.results[i].issueDate)}</span>&nbsp;&nbsp;
              </div>
          </div>
        </div>${this.loadReportDetail()}`);
      console.log('dopa-moi.normal: ' + this.normalPdf[i]);
      }
    }
  }
  formatDate(dateOfBirth: string): string {

    const date = new Date(dateOfBirth);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear() + 543;
    if (dateOfBirth === 'null') {
      return '-';
    } else {
      return `${day}/${month}/${year}`;
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
   * Getter $results
   * @return {Dxc_Model_Moi_Dopa_Passports[]}
   */
  public get $results(): IDxc_Model_Moi_Dopa_Passports[] {
    return this.results;
  }

  /**
   * Setter $results
   * @param {IDxc_Model_Moi_Dopa_Passports[]} value
   */
  public set $results(value: IDxc_Model_Moi_Dopa_Passports[]) {
    this.results = value;
  }

  /**
   * Getter $obj
   * @return {string}
   */
  public get $obj(): string {
    return this.obj;
  }

  /**
   * Setter $obj
   * @param {string} value
   */
  public set $obj(value: string) {
    this.obj = value;
  }

  /**
   * Getter $show
   * @return {boolean}
   */
  public get $show(): boolean {
    return this.show;
  }

  /**
   * Setter $show
   * @param {boolean} value
   */
  public set $show(value: boolean) {
    this.show = value;
  }

  /**
   * Getter $countResults
   * @return {number}
   */
  public get $countResults(): number {
    return this.countResults;
  }

  /**
   * Setter $countResults
   * @param {number} value
   */
  public set $countResults(value: number) {
    this.countResults = value;
  }
  public get $normalPdf(): string[] {
    return this.normalPdf;
  }

  /**
   * Setter $results
   * @param {string[]} value
   */
  public set $normalPdf(value: string[]) {
    this.normalPdf = value;
  }
  /**
     * Getter $count
     * @return {number}
     */
	public get $count(): number {
		return this.count;
	}

    /**
     * Setter $count
     * @param {number} value
     */
	public set $count(value: number) {
		this.count = value;
	}

/**
   * Getter $normalPdfCount
   * @return {string}
   */
  public get $normalPdfCount(): string {
    return this.normalPdfCount;
  }

  /**
   * Setter $normalPdfCount
   * @param {string} value
   */
  public set $normalPdfCount(value: string) {
    this.normalPdfCount = value;
  }
}
