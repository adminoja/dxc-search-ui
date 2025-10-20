import { environment } from 'src/environments/environment';
import {
  IDxc_Model_Nacc_Moi_Corruption_Accuseds,
  Dxc_Model_Nacc_Moi_Corruption_Accuseds
} from '../../../../shared/models/Dxc_Model_Nacc_Moi_Corruption_Accuseds';
import { Utils } from '../../../../shared/utils/Utils';
import * as moment from 'moment';
import { Injectable } from "@angular/core";

export interface IReportNaccCorruptionaccuseds {
  model: Dxc_Model_Nacc_Moi_Corruption_Accuseds;
}

@Injectable()
export class NaccMoiCorruptionAccusedsMetadata {
  private results: IDxc_Model_Nacc_Moi_Corruption_Accuseds[];
  private obj: string;
  private show: boolean;
  private listLefts: any[];
  private listAlgations: any[];
  private util: Utils;
  reportName: string;
  reportOfTime: string;
  reportOfDate: string;
  private count: number;
  private allegationPdf: string [];
  private allegationPdfCount: string;
  

  html: string;
  constructor() {
    this.util = new Utils();
    this.allegationPdf = [];
    this.results = [];
    this.count = 0;
    this.allegationPdfCount = '';
  }
  public getHtml(selectData: Dxc_Model_Nacc_Moi_Corruption_Accuseds, title: string) {
    return (this.html = `<html>
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
        ${selectData.wartermarks}
        <table class="table" border="2px" width="100%">
          <tr>
            <td align="center">ฐานข้อมูล${title}</td>
          </tr>
        </table>
        <br/>

        <table style="width: 100%;">
        <tbody>
            <tr>
                <td style="width: 20%;">&nbsp;</td>
                <td style="width: 10%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 0%;">&nbsp;</td>
                <td style="width: 8%;">&nbsp;</td>
                <td style="width: 12%;">&nbsp;</td>
                <td style="width: 14%;">&nbsp;</td>
                <td style="width: 29%;">&nbsp;</td>
            </tr>
			<tr>
				<td style="font-weight: bold; text-decoration:underline" colspan="5"></td>
			</tr>
            <tr>
                <td>คำนำหน้า</td>
                <td style="color: blue;" colspan="3" data-attributename="accusedCitizenIds" data-role="dxc-hyperlink">${selectData.pname}</td>
            </tr>
			<tr>
                <td>ชื่อ</td>
                <td style="color: blue;" colspan="3">${selectData.name}</td>
            </tr>
			<tr>
                <td>นามสกุล</td>
                <td style="color: blue;" colspan="3">${selectData.lastname}</td>
            </tr>
			<tr>
                <td>ตำแหน่งที่ถูกกล่าวหา</td>
                <td style="color: blue;" colspan="8">${selectData.positionName}</td>
            </tr>
        </tbody>
    </table>
      </div>
      </body>
  </html>`);
  }

  public viewgetHtml(selectData: Dxc_Model_Nacc_Moi_Corruption_Accuseds, title: string) {
    return (this.html = `<html>
    <head>
    </head>
    <body>
      <div>
        <table class="table" border="2px" width="100%">
            <tr>
                <td align="center" class="text-white font-20">ฐานข้อมูล${title}</td>
            </tr>
        </table>
      <br /> <br />
      <table style="width: 100%;">
        <tbody>
    			<tr>
    				<td style="font-weight: bold; text-decoration:underline" colspan="5"></td>
    			</tr>
          <tr>
            <td class="text-white font-20">คำนำหน้า</td>
            <td style="color: blue;" colspan="4" data-attributename="accusedCitizenIds" data-role="dxc-hyperlink">
                <span class="text-success font-20">${selectData.pname}</span>
            </td>
          </tr>
    			<tr>
            <td class="text-white font-20">ชื่อ</td>
            <td style="color: blue;" colspan="3"><span class="text-success font-20">${selectData.name}</span></td>
          </tr>
    			<tr>
            <td class="text-white font-20">นามสกุล</td>
            <td style="color: blue;" colspan="3"><span class="text-success font-20">${selectData.lastname}</span></td>
          </tr>
    			<tr>
            <td class="text-white font-20">ตำแหน่งที่ถูกกล่าวหา</td>
            <td style="color: blue;" colspan="3"><span class="text-success font-20">${selectData.positionName}</span></td>
          </tr>
        </tbody>
      </table>
      </div>
      </body>
    </html>`);
  }

  public getSearchData() {
    let schema = 'nacc-moi-nacc-corruption-accuseds';
      if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {
        console.log('7.1');
      } else {
        this.show = true;
        this.obj = localStorage.getItem(schema + 'Results');
        this.results = JSON.parse(this.obj);
        this.count = this.results.length;
      
        console.log(schema + 'Results' + this.results);
      }
  }
  
  public getallegationPdf () {
    const schema = 'nacc-moi-nacc-corruption-accuseds';
    console.log(schema);
    if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {
      this.allegationPdf = [];
    } else {
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      console.log(this.results)
      this.count = this.results.length; // นับจำนวนรายการ
      this.allegationPdfCount = `<div class="col-md-11"
      class="row card singlereport-timeline-item list-normal-design-head-collapse">
      <span class="list-normal-design-underline depart">คณะกรรมการป้องกันและปราบปรามการทุจริตแห่งชาติ: </span>
      <span class="list-normal-design-underline departdata">ข้อมูลผู้ถูกกล่าวหาคดีด้านการทุจริต(Linkage) </span>
      <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ
      </span>
      </div>`;
      this.loadReportDetail();
      for (let i = 0; i < this.results.length; i++) {
        this.allegationPdf.push(`<div class="col-md-11">
            <div class="section-criminal-results" style="text-indent:25px;
              font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
              <span class="list-normal-design-underline depart">ข้อมูลผู้ถูกกล่าวหาคดีด้านการทุจริต(Linkage)</span>
              <div style="padding-left:15px;">
                <strong class="report-field-title">คำนำหน้า</strong>&nbsp;&nbsp;
                <span class="report-field-value" style="text-decoration:underline">
                  ${this.changeNull(this.results[i].pname)}</span>&nbsp;&nbsp;
                <strong class="report-field-title">ชื่อ</strong>&nbsp;&nbsp;
                <span class="report-field-value" style="text-decoration:underline">
                  ${this.changeNull(this.results[i].name)}</span>&nbsp;&nbsp;
                <strong class="report-field-title">นามสกุล</strong>&nbsp;&nbsp;
                <span class="report-field-value" style="text-decoration:underline">
                  ${this.changeNull(this.results[i].lastname)}</span>&nbsp;&nbsp;
                <strong
                  class="report-field-title">ข้อกล่าวหาโดยสรุป</strong>&nbsp;&nbsp;
                <span class="report-field-value" style="text-decoration:underline">
                  ${this.changeNull(this.results[i].detail)}</span>&nbsp;&nbsp;
              </div>
            </div>
          </div>${this.loadReportDetail()}`); // Dop
        console.log('NACC.allegation' + this.allegationPdf[i]);
      }

      console.log('4.2');
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

  changeNull(selectData: string) {
    if (selectData == null) {
        return '-';
    } else {
        return selectData;
    }
}

  /**
   * Getter $results
   * @return {IDxc_Model_Nacc_Moi_Corruption_Accuseds[]}
   */
  public get $results(): IDxc_Model_Nacc_Moi_Corruption_Accuseds[] {
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
   * @param {IDxc_Model_Nacc_Moi_Corruption_Accuseds[]} value
   */
  public set $results(value: IDxc_Model_Nacc_Moi_Corruption_Accuseds[]) {
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
     * Getter $algationPdf
     * @return {string []}
     */
  public get $allegationPdf(): string [] {
    return this.allegationPdf;
  }

    /**
     * Setter $algationPdf
     * @param {string []} value
     */
  public set $allegationPdf(value: string []) {
    this.allegationPdf = value;
  }

    /**
     * Getter $algationPdfCount
     * @return {string}
     */
  public get $allegationPdfCount(): string {
    return this.allegationPdfCount;
  }

    /**
     * Setter $algationPdfCount
     * @param {string} value
     */
  public set $allegationPdfCount(value: string) {
    this.allegationPdfCount = value;
  }
}
