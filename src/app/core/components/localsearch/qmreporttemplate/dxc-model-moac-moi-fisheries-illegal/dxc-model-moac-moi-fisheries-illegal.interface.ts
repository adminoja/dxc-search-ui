import { Dxc_Model_Moi_Moac_Fisheries_Illegal } from '../../../../shared/models/Dxc_Model_Moac_Moi_Fisheries_Illegal';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { Injectable } from "@angular/core";

export interface IReportMoacMoiFisheriesIllegal {
  model: Dxc_Model_Moi_Moac_Fisheries_Illegal;
}

@Injectable()
export class MoacMoiFisheriesIllegalMetadata {

  private results: Dxc_Model_Moi_Moac_Fisheries_Illegal[];
  private obj: string;
  private show: boolean;
  private normalPdf: string[];
  private count: number;
  private normalPdfCount: string;
  reportName: string;
  reportOfTime: string;
  reportOfDate: string;
  html: string;

  constructor() {
    this.normalPdf = [];
    this.results = [];
    this.count = 0;
    this.normalPdfCount = '';
  }
  public getHtml(selectData: Dxc_Model_Moi_Moac_Fisheries_Illegal, title: string) {

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
<table style="border-style: solid; border-color: #000; width: 100%;" border="1px">
    <tbody>
        <tr>
            <td align="center">${title}</td>
        </tr>
    </tbody>
</table>
<br /> <br />
<table style="width: 100%;">
    <tbody>
        <tr>
            <td style="width: 10%;">&nbsp;</td>
            <td style="width: 10%;">&nbsp;</td>
            <td style="width: 10%;">&nbsp;</td>
            <td style="width: 10%;">&nbsp;</td>
            <td style="width: 10%;">&nbsp;</td>
            <td style="width: 10%;">&nbsp;</td>
            <td style="width: 10%;">&nbsp;</td>
            <td style="width: 10%;">&nbsp;</td>
            <td style="width: 10%;">&nbsp;</td>
            <td style="width: 10%;">&nbsp;</td>
        </tr>
  <tr>
    <td style="font-weight: bold; text-decoration:underline" colspan="10"></td>
  </tr>
        <tr>
            <td colsoan="1"></td>
            <td colspan="2">เลขคดีอาญา</td>
            <td style="color: blue;" colspan="3">${selectData.caseId}</td>
            <td colspan="2">ชื่อสถานีตำรวจ</td>
            <td style="color: blue;" colspan="3">${selectData.policeStation}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; text-decoration:underline" colspan="10"></td>
        </tr>
        <tr>
            <td colsoan="1"></td>
            <td colspan="2">ชื่อจังหวัดของสถานีตำรวจ</td>
            <td style="color: blue;" colspan="3">${selectData.provincialDivision}</td>
            <td colspan="2">ปี พ.ศ. ของคดีอาญา</td>
            <td style="color: blue;" colspan="3">${selectData.year}</td>
        </tr>
    </tbody>
</table>
</div>

</body>
</html>
`;
  }


  public viewgetHtml(selectData: Dxc_Model_Moi_Moac_Fisheries_Illegal, title: string) {

    return this.html = `<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<div>
  <div>
    <table class="table" border="2px" width="100%">
          <tr>
              <td align="center" class="text-white font-20">${title}</td>
            </tr>
    </table>
  <div>
<br /> <br />
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
            <td style="width: 5%;">&nbsp;</td>
            <td style="width: 5%;">&nbsp;</td>
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
    <td style="font-weight: bold; text-decoration:underline" colspan="10"></td>
  </tr>
        <tr>
            <td colspan="1"></td>
            <td colspan="4" class="text-white font-20">เลขคดีอาญา</td>
            <td style="color: blue;" colspan="3"><span class="text-success font-20">${selectData.caseId}</span></td>
            <td colspan="3"></td>
            <td colspan="4" class="text-white font-20">ชื่อสถานีตำรวจ</td>
            <td style="color: blue;" colspan="3"><span class="text-success font-20">${selectData.policeStation}</span></td>
        </tr>
        <tr>
          <td style="font-weight: bold; text-decoration:underline" colspan="10"></td>
        </tr>
        <tr>
            <td colspan="1"></td>
            <td colspan="4" class="text-white font-20">ชื่อจังหวัดของสถานีตำรวจ</td>
            <td style="color: blue;" colspan="3"><span class="text-success font-20">${selectData.provincialDivision}</span></td>
            <td colspan="3"></td>
            <td colspan="4" class="text-white font-20">ปี พ.ศ. ของคดีอาญา</td>
            <td style="color: blue;" colspan="3"><span class="text-success font-20">${selectData.year}</span></td>
        </tr>

    </tbody>
</table>
</div>
</body>
</html>
`;
  }

  public getSearchData() {
    // const schema = environment.qm.sub[0]['moac'].sub[0]['fisheriesillegal'].schema;
    const schema = 'moac-moi-moac-fisheries-illegal-fishing-cases';
    console.log(typeof (localStorage.getItem('MoiMoacFisheriesIllegalResults')));
    if (localStorage.getItem(schema + 'Results') === '[]'
      || localStorage.getItem(schema + 'Results') === null) {

      console.log('1.1');
    } else {
      this.show = true;
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length; // นับจำนวนรายการ
      console.log('MoiMoacFisheriesIllegalObj' + this.obj);

    }
  }

  public getnormalPdf() {
    // const schema = environment.qm.sub[0]['moac'].sub[0]['fisheriesillegal'].schema;
    const schema = 'moac-moi-moac-fisheries-illegal-fishing-cases';
    if (localStorage.getItem(schema + 'Results') === '[]' ||
    localStorage.getItem(schema + 'Results') === null) {
      this.normalPdf = [];
      console.log('1.1');
    } else {
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length; // นับจำนวนรายการ\
      this.normalPdfCount = `<div class="col-md-11"
      class="row card singlereport-timeline-item list-normal-design-head-collapse">
      <span class="list-normal-design-underline depart">กรมประมง: </span>
      <span class="list-normal-design-underline departdata">คดีประมงผิดกฎหมาย(Linkage) </span>
      <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ
      </span>
    </div>`;
      this.loadReportDetail();
      for (let i = 0; i < this.results.length; i++) {
        this.normalPdf.push(`
      <div class="col-md-11">
        <div class="section-criminal-results"
        style="text-indent:25px;font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
        <span class="list-normal-design-underline depart">คดีประมงผิดกฎหมาย(Linkage) </span>
        <div style="padding-left:15px;">
        <strong class="report-field-title">เลขคดีอาญา</strong>&nbsp;&nbsp;
          <span class="report-field-value" style="text-decoration:underline">
          ${this.changeNull(this.results[i].caseId)}</span>&nbsp;&nbsp;
          <strong class="report-field-title">ชื่อสถานีตำรวจ</strong>&nbsp;&nbsp;
          <span class="report-field-value" style="text-decoration:underline">
          ${this.changeNull(this.results[i].policeStation)}</span>&nbsp;&nbsp;
          <strong class="report-field-title">ชื่อจังหวัดของสถานีตำรวจ</strong>&nbsp;&nbsp;
          <span class="report-field-value" style="text-decoration:underline">
          ${this.changeNull(this.results[i].provincialDivision)}</span>&nbsp;&nbsp;
          <strong class="report-field-title">ปี พ.ศ. ของคดีอาญา</strong>&nbsp;&nbsp;
          <span class="report-field-value" style="text-decoration:underline">
          ${this.changeNull(this.results[i].year)}</span>&nbsp;&nbsp;
        </div>
      </div>
    </div>${this.loadReportDetail()}`);
        console.log('dopa-moi-dopa-personResults' + this.normalPdf[i]);
      }
      console.log('1.2');
    }
  }

  changeNull(selectData: string) {
    if (selectData == null) {
      return '-';
    } else if (selectData == "") {
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
    } else {
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

  /**
   * Getter $normalPdf
   * @return {string[]}
   */
  public get $normalPdf(): string[] {
    return this.normalPdf;
  }

  /**
   * Setter $normalPdf
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
   * Getter $results
   * @return {Dxc_Model_Moi_Moac_Fisheries_Illegal[]}
   */
  public get $results(): Dxc_Model_Moi_Moac_Fisheries_Illegal[] {
    return this.results;
  }

  /**
   * Getter $obj
   * @return {string}
   */
  public get $obj(): string {
    return this.obj;
  }

  /**
   * Getter $show
   * @return {boolean}
   */
  public get $show(): boolean {
    return this.show;
  }

  /**
   * Setter $results
   * @param {Dxc_Model_Moi_Moac_Fisheries_Illegal[]} value
   */
  public set $results(value: Dxc_Model_Moi_Moac_Fisheries_Illegal[]) {
    this.results = value;
  }

  /**
   * Setter $obj
   * @param {string} value
   */
  public set $obj(value: string) {
    this.obj = value;
  }

  /**
   * Setter $show
   * @param {boolean} value
   */
  public set $show(value: boolean) {
    this.show = value;
  }

}
