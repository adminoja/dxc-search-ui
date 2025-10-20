import * as moment from 'moment';
import { IDxc_Model_Msdhs_Moi_New_Born_Babies } from 'src/app/core/shared/models/Dxc_Model_Msdhs_Moi_New_Born_Babies';
import { Utils } from '../../../../shared/utils/Utils';
import { Injectable } from "@angular/core";

export interface IReportMsdhsMoiNewBornBabies {
  model: IDxc_Model_Msdhs_Moi_New_Born_Babies;
}

@Injectable()
export class MsdhsMoiNewBornBabiesMetadata {
  reportName: string;
  reportOfTime: string;
  reportOfDate: string;
  html: string;
  private results: IDxc_Model_Msdhs_Moi_New_Born_Babies[];
  private obj: string;
  private show: boolean;
  private util: Utils;
  private count: number;
  private normalPdf: string[];
  private normalPdfCount: string;


  constructor() {
    this.util = new Utils();
    this.results = [];
    this.normalPdf = [];
    this.normalPdfCount = '';
    this.count = 0;
    moment.locale('th');
  }
  public getHtml(selectData: IDxc_Model_Msdhs_Moi_New_Born_Babies, title: string) {

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
<body>
  <div>
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
    <div>
      <img src="https://search.dxc.go.th/public/image/DXC_logo.jpg" style="width: 150px; height: 50px" />
        <div>
          <label>DXC Report</label>
          <br>
          <a href="www.dxc.go.th">www.dxc.go.th</a>
        </div>
      <hr>
    </div>
    <table class="table" border="2px" width="100%">
      <tr>
        <td align="center">ฐานข้อมูล${title}</td>
      </tr>
    </table>
    <br/>
${selectData.wartermarks}
<table style="width:100%">

                      <td colspan="2">เลขประจำตัวประชาชนชนเด็ก</td>
                      <td colspan="2" style="color: blue;" colspan="" data-attributename="childIdcard"
                          data-role="dxc-hyperlink" data-value="${selectData.childIdcard}">
                          <span class="text-info">${selectData.childIdcard}</span></td>
                  </tr>

                  <tr>
                      <td style="height: 5px;" colspan="8">&nbsp;</td>
                  </tr>
                  <tr>
                      <td colspan="2">คำนำหน้าชื่อเด็ก</td>
                      <td colspan="2" style="color: blue;"><span class="text-info">${selectData.childPrename}</span></td>
                      <td colspan="2">ชื่อ-นามสกุลเด็ก</td>
                      <td colspan="2" style="color: blue;">
                          <span class="text-info">${selectData.childName} ${selectData.childSurname}</span></td>
                  </tr>
                  <tr>
                      <td style="height: 5px;" colspan="8">&nbsp;</td>
                  </tr>

                  <tr>
                      <td colspan="2">การพิจารณาสิทธิ์</td>
                      <td colspan="2"style="color: blue;" ><span class="text-info">${selectData.childConsider}</span></td>
                      <td colspan="2">การได้รับเงินอุดหนุนฯ</td>
                      <td colspan="2"style="color: blue;" ><span class="text-info">${selectData.childReceiveMoney}</span></td>
                  </tr>
                  <tr>
                      <td style="height: 5px;" colspan="8">&nbsp;</td>
                  </tr>

                  <tr>
                      <td colspan="2">วันที่ลงทะเบียน</td>
                      <td colspan="2" style="color: blue;" ><span class="text-info">${selectData.childRegisterDate}</span></td>
                      <td colspan="2">สถานที่ลงทะเบียน</td>
                      <td colspan="2" style="color: blue;" colspan="2"><span class="text-info">${selectData.childRegisterPlace}</span></td>
                  </tr>

                  <tr>
                      <td style="height: 5px;" colspan="8">&nbsp;</td>
                  </tr>
                  <tr>
                      <td colspan="2">จังหวัดรับลงทะเบียน</td>
                      <td colspan="2" style="color: blue;" colspan="">
                          <span class="text-info"><span class="text-info">${selectData.childRegisterProvince}</span></td>
                      <td colspan="2">สถานะ</td>
                      <td colspan="2" style="color: blue;" colspan=""><span class="text-info">${selectData.childStatus}</span></td>
                  </tr>

              </tbody>
          </table>
        </div>
</body>
</html>
`;
  }

  public viewgetHtml(selectData: IDxc_Model_Msdhs_Moi_New_Born_Babies, title: string) {

    return this.html = `<html>
      <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </head>

      <body>
      <div>
          <table class="table" border="2px" width="100%">
              <tbody>
                  <tr>
                      <td align="center" class='text-white font-20'>${title}</td>
                  </tr>
              </tbody>
          </table>
          <br /> <br />
          <table style="width: 100%;">
              <tbody>
                  <tr>
                      <td style="width: 15%;">&nbsp;</td>
                      <td style="width: 10%;">&nbsp;</td>
                      <td style="width: 7%;">&nbsp;</td>
                      <td style="width: 0%;">&nbsp;</td>
                      <td style="width: 0%;">&nbsp;</td>
                      <td style="width: 5%;">&nbsp;</td>
                      <td style="width: 14%;">&nbsp;</td>
                      <td style="width: 20%;">&nbsp;</td>
                  </tr>

                      <td colspan="2"><span class="text-white font-20">เลขประจำตัวประชาชนชนเด็ก</span></td>
                      <td colspan="2" style="color: blue;">
                      <a class="text-success font-20" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/
                      ${selectData.citizenCardNumber}/0/0/0/0/0">${selectData.citizenCardNumber} <i class="material-icons">link</i></a>
                      </td>
                  </tr>

                  <tr>
                      <td style="height: 5px;" colspan="8">&nbsp;</td>
                  </tr>
                  <tr>
                      <td colspan="2"><span class="text-white font-20">คำนำหน้าชื่อเด็ก</span></td>
                      <td colspan="2" style="color: blue;"><span class="text-success" font-20>${selectData.childPrename}</span></td>
                      <td colspan="2"><span class="text-white font-20">ชื่อ-นามสกุลเด็ก</span></td>
                      <td colspan="2" style="color: blue;">
                          <span class="text-success" font-20>${selectData.childName} ${selectData.childSurname}</span></td>
                  </tr>
                  <tr>
                      <td style="height: 5px;" colspan="8">&nbsp;</td>
                  </tr>

                  <tr>
                      <td colspan="2"><span class="text-white font-20">การพิจารณาสิทธิ์</span></td>
                      <td colspan="2"style="color: blue;" ><span class="text-success" font-20>${selectData.childConsider}</span></td>
                      <td colspan="2"><span class="text-white font-20">การได้รับเงินอุดหนุนฯ</span></td>
                      <td colspan="2"style="color: blue;" ><span class="text-success" font-20>${selectData.childReceiveMoney}</span></td>
                  </tr>
                  <tr>
                      <td style="height: 5px;" colspan="8">&nbsp;</td>
                  </tr>

                  <tr>
                      <td colspan="2"><span class="text-white font-20">วันที่ลงทะเบียน</span></td>
                      <td colspan="2" style="color: blue;" ><span class="text-success" font-20>${selectData.childRegisterDate}</span></td>
                      <td colspan="2"><span class="text-white font-20">สถานที่ลงทะเบียน</span></td>
                      <td colspan="2" style="color: blue;" colspan="2"><span class="text-success" font-20>${selectData.childRegisterPlace}</span></td>
                  </tr>

                  <tr>
                      <td style="height: 5px;" colspan="8">&nbsp;</td>
                  </tr>
                  <tr>
                      <td colspan="2"><span class="text-white font-20">จังหวัดรับลงทะเบียน</span></td>
                      <td colspan="2" style="color: blue;" colspan="">
                          <span class="text-success" font-20>${selectData.childRegisterProvince}</span></td>
                      <td colspan="2"><span class="text-white font-20">สถานะ</span></td>
                      <td colspan="2" style="color: blue;" colspan=""><span class="text-success" font-20>${selectData.childStatus}</span></td>
                  </tr>

              </tbody>
          </table>
        </div>
      </body>
      </html>
`;
  }
  public getSearchData() {
    const schema = 'msdhs-moi-msdhs-new-born-babies';
    if (localStorage.getItem(schema + 'Results') === '[]' ||
      localStorage.getItem(schema + 'Results') === null) {

      console.log('ข้อมูลทะบียนเด็กแรกเกิด null');
    } else {
      this.show = true;
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length; // นับจำนวนรายการ

      console.log('ข้อมูลทะบียนเด็กแรกเกิด results: ' + this.results);
    }
  }
  public getnormalPdf() {
    // const schema = environment.qm.sub[0]['led'].sub[0]['bankruptcycase'].schema;
    const schema = 'msdhs-moi-msdhs-new-born-babies';
    if (localStorage.getItem(schema + 'Results') === '[]' ||
      localStorage.getItem(schema + 'Results') === null) {

      this.normalPdf = [];
      console.log('ข้อมูลทะบียนเด็กแรกเกิด PDF null');
    } else {
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length; // นับจำนวนรายการ
      this.normalPdfCount = `<div class="col-md-11"
        class="row card singlereport-timeline-item list-normal-design-head-collapse">
        <span class="list-normal-design-underline depart">กระทรวงพัฒนาสังคมและความมั่นคงของมนุษย์: </span>
        <span class="list-normal-design-underline departdata">ข้อมูลทะบียนเด็กแรกเกิด</span>
        <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ</span>
      </div>`;
      this.loadReportDetail();
      for (let i = 0; i < this.results.length; i++) {
        this.normalPdf.push(
          `<div class="col-md-11">
            <div class="section-criminal-results" style="text-indent:25px;
              font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
              <span class="list-normal-design-underline depart">ข้อมูลทะบียนเด็กแรกเกิด</span>
              <div style="padding-left:15px;">
                <strong class="report-field-title">เลขประจำตัวประชาชนชนเด็ก
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                    ${this.changeNull(this.results[i].citizenCardNumber)}
                  </span>&nbsp;&nbsp;
                <strong class="report-field-title">ชื่อเด็ก
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                    ${this.changeNull(this.results[i].childName)}
                  </span>&nbsp;&nbsp;
                <strong class="report-field-title">นามสกุลเด็ก
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                    ${this.changeNull(this.results[i].childSurname)}
                  </span>&nbsp;&nbsp;
                <strong class="report-field-title">สถานะ
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                    ${this.changeNull(this.results[i].childStatus)}
                  </span>&nbsp;&nbsp;
                <strong class="report-field-title">วันที่ลงทะเบียน
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                    ${this.changeNull(this.results[i].childRegisterDate)}
                  </span>&nbsp;&nbsp;
                <strong class="report-field-title">สถานที่ลงทะเบียน
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                    ${this.changeNull(this.results[i].childRegisterPlace)}
                  </span>&nbsp;&nbsp;
                <strong class="report-field-title">จังหวัดรับลงทะเบียน
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                    ${this.changeNull(this.results[i].childRegisterProvince)}
                  </span>&nbsp;&nbsp;
            </div>
          </div>
        </div>${this.loadReportDetail()}`);
      console.log('msdhs.normal' + this.normalPdf[i]);
      }
    }
  }
  public loadReportDetail() {
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
  public changeNull(selectData: string) {
    if (selectData == null || selectData == undefined) {
      return '-';
    } else {
      return selectData;
    }
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
   * Getter $results
   * @return {IDxc_Model_Msdhs_Moi_New_Born_Babies[]}
   */
  public get $results(): IDxc_Model_Msdhs_Moi_New_Born_Babies[] {
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
   * Getter $util
   * @return {Utils}
   */
  public get $util(): Utils {
    return this.util;
  }

  /**
   * Setter $results
   * @param {IDxc_Model_Msdhs_Moi_New_Born_Babies[]} value
   */
  public set $results(value: IDxc_Model_Msdhs_Moi_New_Born_Babies[]) {
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

  /**
   * Setter $util
   * @param {Utils} value
   */
  public set $util(value: Utils) {
    this.util = value;
  }

}
