import * as moment from 'moment';
import { IDxc_Model_Rtp_MissingPersonCase } from 'src/app/core/shared/models/Dxc_Model_Rtp_MissingPersonCase';
import { Utils } from '../../../../shared/utils/Utils';
import { Injectable } from "@angular/core";


export interface IReportRtpMissingPersonCase {
  model: IDxc_Model_Rtp_MissingPersonCase;
}
@Injectable()
export class RtpMissingPersonCaseMetadata {
  reportName: string;
  reportOfTime: string;
  reportOfDate: string;
  html: string;
  private results: IDxc_Model_Rtp_MissingPersonCase[];
  private obj: string;
  private show: boolean;
  private util: Utils;
  private count: number;
  private normalPdf: string[];
  private normalPdfCount: string;

  constructor() {
    this.util = new Utils();
    this.results = [];
    this.count = 0;
    this.normalPdf = [];
    this.normalPdfCount = '';

  }
  public getHtml(selectData: IDxc_Model_Rtp_MissingPersonCase, title: string) {

    return this.html = `<html>
    <head>
    <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
    <style>
  @font-face {
    font-family: 'THSarabunNew';
    src: url(https://search.dxc.go.th/public/font/THSarabunNew.ttf);
  }
  html {
    font-family: 'THSarabunNew';
    height: 100%;
    width: 100%;
  }
  .watermark {
    content: '';
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
    content: '';
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
    content: '';
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
    content: '';
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
    content: '';
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
    content: '';
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
    content: '';
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
    content: '';
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
    content: '';
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
    content: '';
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
    content: '';
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
        content: 'หน้า ' counter(page) ' / ' counter(pages);
        }
    }
    /* repeating page background image */
    html {
      font-family: 'THSarabunNew';
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
      content: '';
    }
    .row {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
      margin-right: -12px;
      margin-left: -12px;
    }
    .col {
      width: 10%;
      margin-bottom: -2rem;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
    }
    .col-1 {
      width: 15%;
      margin-bottom: -2rem;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
    }
    .col-2 {
      width: 20%;
      margin-bottom: -2rem;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
    }
    .col-3 {
      width: 25%;
      margin-bottom: -2rem;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
    }
    .col-6 {
      width: 50%;
      margin-bottom: -2rem;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
    }
    .col-9 {
      width: 75%;
      margin-bottom: -2rem;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
    }
    .col-12 {
      width: 100%;
      margin-bottom: -2rem;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
    }
    .text-success {
      color: #0000cd !important;
    }
    .font-24 {
      font-size: 18px !important;
    }
    .mb-3,
    .my-3 {
      margin-bottom: 1.5rem !important;
    }
    .ml-3,
    .mx-3 {
      margin-left: 1.5rem !important;
    }
    .mt-3,
    .my-3 {
      margin-top: 1.5rem !important;
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
        <div class="ml-3">
          <div class="row">
          <div class="col-9"></div>
            <div class="col">
              <p class="text-white font-20">รหัสข้อมูล</p>
            </div>
            <div class="col">
              <p class="text-success font-20">${selectData.id}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-3">
              <p class="text-white font-20"><u>ลักษณะผู้หาย</u></p>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <p class="text-white font-20">ชื่อ</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${selectData.firstName} ${selectData.lastName}</p>
            </div>
            <div class="col-3">
              <p class="text-white font-20">เพศ</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${selectData.sex}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <p class="text-white font-20">ส่วนสูง</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${selectData.height}</p>
            </div>
            <div class="col-3">
              <p class="text-white font-20">น้ำหนัก</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${selectData.weight}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <p class="text-white font-20">การแต่งกาย</p>
            </div>
            <div class="col-9">
              <p class="text-success font-20">${selectData.dress}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <p class="text-white font-20">รูปร่าง</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${selectData.bodyTypeCodeName}</p>
            </div>
            <div class="col-3">
              <p class="text-white font-20">ลักษณะผิว</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${selectData.skinTypeCodeName}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <p class="text-white font-20">ลักษณะผม</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${selectData.hairTypeCodeName}</p>
            </div>
            <div class="col-3">
              <p class="text-white font-20">ลักษณะตา</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${selectData.eyeTypeCodeName}</p>
            </div>
          </div>
          <br/>
          <div class="row">
            <div class="col-3">
              <p class="text-white font-20">สถานที่หาย</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${selectData.missingPlaceName}</p>
            </div>
            <div class="col-3">
              <p class="text-white font-20">วันที่หาย</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${selectData.missingDate}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <p class="text-white font-20">สถานที่สงสัย</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${selectData.suspectPlace}</p>
            </div>
            <div class="col-3">
              <p class="text-white font-20">สถานที่ติดต่อ</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${selectData.contact}</p>
            </div>
          </div>
          <br/>
          <div class="row">
            <div class="col-3">
              <p class="text-white font-20"><u>ข้อมูลการรับแจ้ง</u></p>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <p class="text-white font-20">วันที่รายงาน</p>
            </div>
            <div class="col-9">
              <p class="text-success font-20">${selectData.reportDate}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <p class="text-white font-20">สถานีตำรวจที่รับเรื่อง</p>
            </div>
            <div class="col-9">
              <p class="text-success font-20">${selectData.reportStation}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <p class="text-white font-20">ชื่อตำรวจที่รับเรื่อง</p>
            </div>
            <div class="col-9">
              <p class="text-success font-20">${selectData.investigatorFullName}</p>
            </div>
          </div>
        </div>
  </div>
</body>
</html>
`;
  }
  public viewgetHtml(selectData: IDxc_Model_Rtp_MissingPersonCase, title: string) {

    return this.html = `<html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    </head>

    <body>
      <div>
        <table class="table" border="2px" width="100%">
          <tr>
            <td align="center" class="text-white font-20">ฐานข้อมูล${title}</td>
          </tr>
        </table>
      <br/>
      <br/>
        <div class="ml-3">
          <div class="row">
          <div class="col-9"></div>
            <div class="col">
              <p class="text-white font-20">รหัสข้อมูล</p>
            </div>
            <div class="col">
              <p class="text-success font-20">${selectData.id}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-2">
              <p class="text-white font-20"><u>ลักษณะผู้หาย</u></p>
            </div>
          </div>
          <div class="row">
            <div class="col-2">
              <p class="text-white font-20">ชื่อ</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${selectData.firstName} ${selectData.lastName}</p>
            </div>
            <div class="col-2">
              <p class="text-white font-20">เพศ</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${selectData.sex}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-2">
              <p class="text-white font-20">ส่วนสูง</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${selectData.height}</p>
            </div>
            <div class="col-2">
              <p class="text-white font-20">น้ำหนัก</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${selectData.weight}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-2">
              <p class="text-white font-20">การแต่งกาย</p>
            </div>
            <div class="col-9">
              <p class="text-success font-20">${selectData.dress}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-2">
              <p class="text-white font-20">รูปร่าง</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${selectData.bodyTypeCodeName}</p>
            </div>
            <div class="col-2">
              <p class="text-white font-20">ลักษณะผิว</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${selectData.skinTypeCodeName}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-2">
              <p class="text-white font-20">ลักษณะผม</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${selectData.hairTypeCodeName}</p>
            </div>
            <div class="col-2">
              <p class="text-white font-20">ลักษณะตา</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${selectData.eyeTypeCodeName}</p>
            </div>
          </div>

          <br/>
          <div class="row">
            <div class="col-2">
              <p class="text-white font-20">สถานที่หาย</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${selectData.missingPlaceName}</p>
            </div>
            <div class="col-2">
              <p class="text-white font-20">วันที่หาย</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${selectData.missingDate}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-2">
              <p class="text-white font-20">สถานที่สงสัย</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${selectData.suspectPlace}</p>
            </div>
            <div class="col-2">
              <p class="text-white font-20">สถานที่ติดต่อ</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${selectData.contact}</p>
            </div>
          </div>

          <br/>
          <div class="row">
            <div class="col-3">
              <p class="text-white font-20"><u>ข้อมูลการรับแจ้ง</u></p>
            </div>
          </div>
          <div class="row">
            <div class="col-2">
              <p class="text-white font-20">วันที่รายงาน</p>
            </div>
            <div class="col-9">
              <p class="text-success font-20">${selectData.reportDate}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-2">
              <p class="text-white font-20">สถานีตำรวจที่รับเรื่อง</p>
            </div>
            <div class="col-9">
              <p class="text-success font-20">${selectData.reportStation}</p>
            </div>
            <div class="col-2">
              <p class="text-white font-20">ชื่อตำรวจที่รับเรื่อง</p>
            </div>
            <div class="col-9">
              <p class="text-success font-20">${selectData.investigatorFullName}</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>`;
  }
  public getSearchData() {
    const schema = 'rtp-missing-person-case';
    if (localStorage.getItem(schema + 'Results') === '[]' ||
      localStorage.getItem(schema + 'Results') === null) {

      this.normalPdf = [];
      console.log('ประวัติบุคคลสูญหาย null');
    } else {
      this.show = true;
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length; // นับจำนวนรายการ

      console.log('ประวัติบุคคลสูญหาย results: ' + this.results);
    }
  }
  public getnormalPdf() {
    // const schema = environment.qm.sub[0]['rtp'].sub[0]['missingpersoncase'].schema;
    const schema = 'rtp-missing-person-case';
    if (localStorage.getItem(schema + 'Results') === '[]' ||
      localStorage.getItem(schema + 'Results') === null) {

      this.normalPdf = [];
      console.log('ประวัติบุคคลสูญหาย PDF null');
    } else {
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length; // นับจำนวนรายการ
      this.normalPdfCount = `<div class="col-md-11"
    class="row card singlereport-timeline-item list-normal-design-head-collapse">
    <span class="list-normal-design-underline depart">สำนักงานตำรวจแห่งชาติ: </span>
    <span class="list-normal-design-underline departdata">ประวัติบุคคลสูญหาย (ฐานข้อมูลเก่า ระบบ Police)</span>
    <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ
    </span>
    </div>`;
      this.loadReportDetail();
      for (let i = 0; i < this.results.length; i++) {
        this.normalPdf.push(
          `<div class="col-md-11">
        <div class="section-criminal-results" style="text-indent:25px;
          font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
        <span style="text-decoration:underline; color: #0070C0;
          font-weight: bold; " class="report-section-source-title">สำนักงานตำรวจแห่งชาติ</span>"
        <span style="text-decoration:underline; color: #C00000;
          font-weight: bold; font-style: italic;" class="report-section-data-title">ประวัติบุคคลสูญหาย (ฐานข้อมูลเก่า ระบบ Police)</span>

        <div style="padding-left:15px;">
        <strong class="report-field-title">ชื่อ
        </strong>&nbsp;&nbsp;
          <span class="report-field-value" style="text-decoration:underline">
            ${this.changeNull(this.results[i].firstName)}
            ${this.changeNull(this.results[i].lastName)}
          </span>&nbsp;&nbsp;
        <strong class="report-field-title">เพศ
        </strong>&nbsp;&nbsp;
          <span class="report-field-value" style="text-decoration:underline">
            ${this.changeNull(this.results[i].sex)}
          </span>&nbsp;&nbsp;
        <strong class="report-field-title">ส่วนสูง
        </strong>&nbsp;&nbsp;
          <span class="report-field-value" style="text-decoration:underline">
            ${this.changeNull(this.results[i].height)}
          </span>&nbsp;&nbsp;
        <strong class="report-field-title">น้ำหนัก
        </strong>&nbsp;&nbsp;
          <span class="report-field-value" style="text-decoration:underline">
            ${this.changeNull(this.results[i].weight)}
          </span>&nbsp;&nbsp;
        <strong class="report-field-title">รูปร่าง
        </strong>&nbsp;&nbsp;
          <span class="report-field-value" style="text-decoration:underline">
            ${this.changeNull(this.results[i].bodyTypeCodeName)}
          </span>&nbsp;&nbsp;
        <strong class="report-field-title">สีผิว
        </strong>&nbsp;&nbsp;
          <span class="report-field-value" style="text-decoration:underline">
            ${this.changeNull(this.results[i].skinTypeCodeName)}
          </span>&nbsp;&nbsp;
        <strong class="report-field-title">ลักษณะผม
        </strong>&nbsp;&nbsp;
          <span class="report-field-value" style="text-decoration:underline">
            ${this.changeNull(this.results[i].hairTypeCodeName)}
          </span>&nbsp;&nbsp;
        <strong class="report-field-title">ลักษณะตา
        </strong>&nbsp;&nbsp;
          <span class="report-field-value" style="text-decoration:underline">
            ${this.changeNull(this.results[i].eyeTypeCodeName)}
          </span>&nbsp;&nbsp;
        <strong class="report-field-title">การแต่งกาย
        </strong>&nbsp;&nbsp;
          <span class="report-field-value" style="text-decoration:underline">
          ${this.changeNull(this.results[i].dress)}
          </span>&nbsp;&nbsp;
        <strong class="report-field-title">บริเวณที่หาย
        </strong>&nbsp;&nbsp;
          <span class="report-field-value" style="text-decoration:underline">
            ${this.changeNull(this.results[i].missingPlaceName)}
          </span>&nbsp;&nbsp;
        <strong class="report-field-title">ถูกแจ้งหายเมื่อ
        </strong>&nbsp;&nbsp;
          <span class="report-field-value" style="text-decoration:underline">
            ${this.changeNull(this.results[i].missingDate)}
          </span>&nbsp;&nbsp;
        <strong class="report-field-title">ที่สถานนีตำรวจ
        </strong>&nbsp;&nbsp;
          <span class="report-field-value" style="text-decoration:underline">
            ${this.changeNull(this.results[i].reportStation)}
          </span>&nbsp;&nbsp;
      </div>
        </div>
        </div>${this.loadReportDetail()}`);
        console.log('DJOP.allegation' + this.normalPdf[i]);

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
   * @return {IDxc_Model_Rtp_MissingPersonCase[]}
   */
  public get $results(): IDxc_Model_Rtp_MissingPersonCase[] {
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
   * @param {IDxc_Model_Rtp_MissingPersonCase[]} value
   */
  public set $results(value: IDxc_Model_Rtp_MissingPersonCase[]) {
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
