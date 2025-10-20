import { IDxc_Model_Rtp_CriminalCase } from "src/app/core/shared/models/Dxc_Model_Rtp_CriminalCase";
import { Utils } from "src/app/core/shared/utils/Utils";
import * as moment from 'moment';
import { Injectable } from "@angular/core";

export interface IReportRtpCriminalCase {
    modal: IDxc_Model_Rtp_CriminalCase;
}

@Injectable()
export class RtpCriminalCaseMetadata {
    html: string;
    reportName: string;
    reportOfTime: string;
    reportOfDate: string;

    private results: IDxc_Model_Rtp_CriminalCase[];
    private obj: string;
    private show: boolean;
    private util: Utils;
    private countResults: number;
    private allegationPdf: string[];
    private count: number;
    private allegationPdfCount: string;
    private resultsContact: IDxc_Model_Rtp_CriminalCase[];
    private countContact: number;
    private objContact: string;
    private showContact: boolean;

    constructor() { 
      this.util = new Utils();
      this.allegationPdf = [];
      this.results = [];
      this.count = 0;
      this.allegationPdfCount = '';
      //Contact
      this.resultsContact = [];
      this.countContact = 0;
      moment.locale('th');
    }

    public getHtml(selectData: IDxc_Model_Rtp_CriminalCase, title: string) {
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
            <br />
            <br />
              <div class="ml-3">
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขคดี</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.caseNo}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ข้อหา</p>
                        </div>
                        <div class="col-9">
                            <p class="text-success font-20">${selectData.displayChargePerson}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">สถานะคดี</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.statusMagenta}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">หน่วยงานเจ้าของคดี</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.stationName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20"> บช./ภาค </p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.bh}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20"> บก./ภ.จว</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.bk}</p>
                        </div>
                    </div>
              </div>
          </div>
        </body>
    </html>
    `;
    }

    public viewgetHtml(selectData: IDxc_Model_Rtp_CriminalCase, title: string) {
      return this.html = `<html>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            </head>
            <body>
                <table class="table" border="2px" width="100%">
                    <tr>
                        <td align="center" class="text-white font-20">${title}</td>
                    </tr>
                </table>
                </br>
                </br>
                <div class="ml-3">
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขคดี</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.caseNo}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ข้อหา</p>
                        </div>
                        <div class="col-9">
                            <p class="text-success font-20">${selectData.displayChargePerson}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">สถานะคดี</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.statusMagenta}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">หน่วยงานเจ้าของคดี</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.stationName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20"> บช./ภาค </p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.bh}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20"> บก./ภ.จว</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.bk}</p>
                        </div>
                    </div>
                </div>
            </body>
        </html>`;
    }

    public getSearchData() {
      const schema = 'rtp-criminal-case';
      if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {
      } else {
        this.show = true;
        this.obj = localStorage.getItem(schema + 'Results');
        this.results = JSON.parse(this.obj);
        this.count = this.results.length; // นับจำนวนรายการ
        console.log('rtp-criminal-case' + this.obj);
      }
    }

    // public getallegationPdf() {
    //   const schema = 'rtp-criminal-case';
    //   // const schema = environment.qm.sub[0]['rtp'].sub[0]['criminalcase'].schema;
    //   if (localStorage.getItem(schema + 'Results') === '[]' ||
    //     localStorage.getItem(schema + 'Results') === null) {
  
    //     this.allegationPdf = [];
    //     console.log('3.1');
    //   } else {
    //     this.obj = localStorage.getItem(schema + 'Results');
    //     this.results = JSON.parse(this.obj);
    //     this.count = this.results.length; // นับจำนวนรายการ
    //     this.allegationPdfCount = `<div class="col-md-11"
    //     class="row card singlereport-timeline-item list-normal-design-head-collapse">
    //     <span class="list-normal-design-underline depart">สำนักงานตำรวจแห่งชาติ: </span>
    //     <span class="list-normal-design-underline departdata">ฐานข้อมูลคดีอาญา</span>
    //     <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ
    //     </span>
    //   </div>`;
    //     this.loadReportDetail();
    //     for (let i = 0; i < this.results.length; i++) {
    //       this.allegationPdf.push(
    //         `<div class="col-md-11">
    //           <div class="section-criminal-results" style="text-indent:25px;
    //               font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
    //           <span style="text-decoration:underline; font-weight: bold;" class="report-section-source-title">ฐานข้อมูลคดีอาญา</span>
  
    //           <div style="padding-left:15px;">
    //           <strong class="report-field-title">สถานะการสืบสวน
    //           </strong>&nbsp;&nbsp;
    //             <span class="report-field-value" style="text-decoration:underline">
    //                 ${this.changeNull(this.results[i].investigativeStatus)}
    //             </span>&nbsp;&nbsp;
    //           <strong class="report-field-title">เลขคดี
    //           </strong>&nbsp;&nbsp;
    //             <span class="report-field-value" style="text-decoration:underline">
    //                 ${this.changeNull(this.results[i].caseId)}
    //             </span>&nbsp;&nbsp;
    //           <strong class="report-field-title">สถานะคดี
    //           </strong>&nbsp;&nbsp;
    //             <span class="report-field-value" style="text-decoration:underline">
    //                 ${this.changeNull(this.results[i].caseStatus)}
    //             </span>&nbsp;&nbsp;
    //           <strong class="report-field-title">วันที่เกิดเหตุ
    //           </strong>&nbsp;&nbsp;
    //             <span class="report-field-value" style="text-decoration:underline">
    //                 ${this.formatDate(this.results[i].caseDate)}
    //             </span>&nbsp;&nbsp;
    //           <strong class="report-field-title">วันที่รับคำร้องทุกข์
    //           </strong>&nbsp;&nbsp;
    //             <span class="report-field-value" style="text-decoration:underline">
    //                 ${this.formatDate(this.results[i].eventDate)}
    //             </span>&nbsp;&nbsp;
    //           <strong class="report-field-title">ถึงวันที่
    //           </strong>&nbsp;&nbsp;
    //             <span class="report-field-value" style="text-decoration:underline">
    //                 ${this.formatDate(this.results[i].toDate)}
    //             </span>&nbsp;&nbsp;
    //           <strong class="report-field-title">พนักงานสอบสวน
    //           </strong>&nbsp;&nbsp;
    //             <span class="report-field-value" style="text-decoration:underline">
    //                 ${this.changeNull(this.results[i].inqDecisionGroupName)}
    //             </span>&nbsp;&nbsp;
    //           <strong class="report-field-title">ชื่อ-ผู้แจ้ง/ผู้เสียหาย
    //           </strong>&nbsp;&nbsp;
    //             <span class="report-field-value" style="text-decoration:underline">
    //                 ${this.changeNull(this.results[i].victimName)}
    //             </span>&nbsp;&nbsp;
    //           </div>
  
    //           </div>
    //         </div>${this.loadReportDetail()}`);
    //       console.log('dsi.allegation' + this.allegationPdf[i]);
    //     }
    //     console.log('3.2');
    //   }
    // }

    public changeNull(selectData: string) {
      if (selectData == null || selectData == undefined) {
        return '-';
      } else {
        return selectData;
      }
    }

    formatDate(birthDate: string): string {
      const date = new Date(birthDate);
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear() + 543;
      if (birthDate === 'null' || birthDate === null) {
        return '-';
      } else {
  
        const thmonth = new Array('มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
          'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม');
  
        return `${day} ${thmonth[month]} ${year}`;
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

    /**
   * Getter $allegationPdfCount
   * @return {string}
   */
  public get $allegationPdfCount(): string {
    return this.allegationPdfCount;
  }

  /**
   * Setter $allegationPdfCount
   * @param {string} value
   */
  public set $allegationPdfCount(value: string) {
    this.allegationPdfCount = value;
  }

  /**
   * Getter $allegationPdf
   * @return {string[]}
   */
  public get $allegationPdf(): string[] {
    return this.allegationPdf;
  }

  /**
   * Getter $count
   * @return {number}
   */
  public get $count(): number {
    return this.count;
  }

  /**
   * Getter $results
   * @return {IDxc_Model_Rtp_CriminalCase[]}
   */
  public get $results(): IDxc_Model_Rtp_CriminalCase[] {
    return this.results;
  }

  /**
   * Setter $results
   * @param {IDxc_Model_Rtp_CriminalCase[]} value
   */
  public set $results(value: IDxc_Model_Rtp_CriminalCase[]) {
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

  /**
   * Getter $util
   * @return {Utils}
   */
  public get $util(): Utils {
    return this.util;
  }

  public get $resultsContact(): IDxc_Model_Rtp_CriminalCase[] {
    return this.resultsContact;
  }
  public set $resultsContact(value: IDxc_Model_Rtp_CriminalCase[]) {
      this.resultsContact = value;
  }
  public get $countContact(): number {
      return this.countContact;
  }
  public set $countContact(value: number) {
      this.countContact = value;
  }
  public get $objContact(): string {
      return this.objContact;
  }
  public set $objContact(value: string) {
      this.objContact = value;
  }
  public get $showContact(): boolean {
      return this.showContact;
  }
  public set $showContact(value: boolean) {
      this.showContact = value;
  }
}