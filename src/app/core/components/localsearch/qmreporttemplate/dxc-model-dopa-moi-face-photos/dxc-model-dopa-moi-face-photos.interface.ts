import {IDxc_Model_Dopa_Moi_Face_Photos, Dxc_Model_Dopa_Moi_Face_Photos} from '../../../../shared/models/Dxc_Model_Dopa_Moi_Face_Photos';
import { Utils } from '../../../../shared/utils/Utils';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { Injectable } from "@angular/core";
export interface IReportDopaMoiFacePhotos {
  model: IDxc_Model_Dopa_Moi_Face_Photos;
}

@Injectable()
export class DopaMoiFacePhotosMetadata {
  private results: IDxc_Model_Dopa_Moi_Face_Photos[];
  private obj: string;
  private show: boolean;
  private count: number;
  private normalPdf: string[];
  private normalPdfCount: string;
  private topPdf: string[];
  reportName: string;
  reportOfTime: string;
  reportOfDate: string;
    html: string;
    constructor() {
      this.results = [];
      this.normalPdf = [];
      this.topPdf = [];
      this.count = 0;
      this.normalPdfCount = '';
    }
  public getHtml(selectData: IDxc_Model_Dopa_Moi_Face_Photos, title: string) {

    return (this.html = `<html>
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
          <table border='0'>
            <tr>
              <td rowspan='2'> <barcode:barcode xmlns:barcode='http://barcode4j.krysalis.org/ns' message='123456789012'>
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
          <img src='https://search.dxc.go.th/public/image/DXC_logo.jpg' style='width: 150px; height: 50px' />
            <div>
              <label>DXC Report</label>
              <br>
              <a href='www.dxc.go.th'>www.dxc.go.th</a>
            </div>
          <hr>
        </div>
        ${selectData.wartermarks}
        <table class='table' border='2px' width='100%'>
            <tr>
                <td align='center'>ฐานข้อมูล${title}</td>
            </tr>
        </table>
    <br />
    <br />
        <table style='width:100%' border='0'>
            <tr>
              <td style='width: 19%;'>&nbsp;</td>
              <td style='width: 19%;'>&nbsp;</td>
              <td style='width: 14%;'>&nbsp;</td>
              <td style='width: 18%;'>&nbsp;</td>
              <td style='width: 16%;'>&nbsp;</td>
              <td style='width: 14%;'>&nbsp;</td>
            </tr>
            <tr>
              <td style='width:30%'><strong><em>รายละเอียดข้อมูลภาพใบหน้า</em></strong></td>
              <td>&nbsp;</td>
              <td style='width:20%'>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td style='height: 5px;' colspan='6'>&nbsp;</td>
            </tr>
            <tr>
              <td  style='width: 110px'>เลขประจำตัวประชาชน</td>
              <td  style='color:blue' data-attributeName='citizenCardNumber'>
                <span class='text-info'><a target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.citizenCardNumber}/0/0/0/0/0">
                ${selectData.citizenCardNumber}</a></span>
              </td>
            </tr>
          	<tr>
            <td>ภาพใบหน้า</td>
            </tr>
            <tr>
              <td style='height: 5px;' colspan='6'>&nbsp;</td>
            </tr>
          <tr>
            <td>&nbsp;</td>
            <td><img src="${selectData.mimeType},${selectData.image}"></td>
          </tr>
        </table>
      </div>
      </body>
    </html>`);
  }

  public viewgetHtml(selectData: IDxc_Model_Dopa_Moi_Face_Photos, title: string) {
    return (this.html = `<html>
      <head>
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <script>
          $(document).ready(function() {
            $('#confirmDopaMoiFacePhotos').click(function(){
              $('#dopaMoiFacePhotos').modal('toggle'); 
              $('#dopaMoiFacePhotos').on('hidden.bs.modal', function () {
                  $('body').addClass('modal-open');
              });
            });
            $('#close').click(function(){
              $('#dopaMoiFacePhotos').modal('toggle');  
              $('#dopaMoiFacePhotos').on('hidden.bs.modal', function () {
                  $('body').addClass('modal-open');
              });
            });
            $('#closeDopaMoiFacePhotos').click(function(){
              $('#dopaMoiFacePhotos').modal('toggle');  
              $('#dopaMoiFacePhotos').on('hidden.bs.modal', function () {
                  $('body').addClass('modal-open');
              });
            });
            $("#dopaMoiFacePhotos").modal({
              show: false,
              backdrop: 'static'
            });
            $("#clickDopaMoiFacePhotos").click(function() {
            $("#dopaMoiFacePhotos").modal("show");             
            });
          });
        </script>
      </head>
      <body>
      <div>
          <table class='table' border='2px' width='100%'>
              <tr>
                  <td align='center' class="text-white font-20">ฐานข้อมูล${title}</td>
              </tr>
          </table>
      <br />
      <br />
          <table style='width:100%' border='0'>
              <tr>
                <td style='width: 19%;'>&nbsp;</td>
                <td style='width: 19%;'>&nbsp;</td>
                <td style='width: 14%;'>&nbsp;</td>
                <td style='width: 18%;'>&nbsp;</td>
                <td style='width: 16%;'>&nbsp;</td>
                <td style='width: 14%;'>&nbsp;</td>
              </tr>
              <tr>
                <td style='width:30%'class="text-white font-20"><strong><em>รายละเอียดข้อมูลภาพใบหน้า</em></strong></td>
                <td>&nbsp;</td>
                <td style='width:20%'>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td style='height: 5px;' colspan='6'>&nbsp;</td>
              </tr>
              <tr>
                <td  style='width: 110px' class="text-white font-20">เลขประจำตัวประชาชน</td>
                <td  style='color:blue' data-attributeName='citizenCardNumber'>
                  <span class="text-success font-20"><a class="text-success font-20" id="clickDopaMoiFacePhotos" type="button">
                  ${selectData.citizenCardNumber}</a><i class="material-icons">link</i></span>
                </td>
              </tr>
              <tr>
              <td class="text-white font-20">ภาพใบหน้า</td>
              </tr>
              <tr>
                <td style='height: 5px;' colspan='6'>&nbsp;</td>
              </tr>
            <tr>
              <td>&nbsp;</td>
              <td><img src="${selectData.mimeType},${selectData.image}"></td>
            </tr>
          </table>
        </div>
      </body>
      <div id="dopaMoiFacePhotos" class="modal fade" tabindex="-1" data-backdrop="static" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title text-white" id="exampleModalLongTitle">ยืนยันการค้นหา</h4>
              <button type="button" class="close" id="close">×</button>
            </div>
            <div class="modal-body font-20 text-white text-center">
              คุณต้องการเปิดรายงาน Single Report ของ <br>
              หมายเลขบัตรประชาชนนี้ ${selectData.citizenCardNumber} ใช่หรือไม่
            </div>
            <div class="modal-footer">
              <button type="button" id="closeDopaMoiFacePhotos" class="btn btn-danger">ยกเลิก</button>
              <a id="confirmDopaMoiFacePhotos" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.citizenCardNumber}/0/0/0/0/0">ตกลง</a>				
            </div>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </html>`);
  }

  public viewgetHtmlSingleReport(selectData: IDxc_Model_Dopa_Moi_Face_Photos, title: string) {
    return (this.html = `<html>
      <head>
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
      </head>
      <body>
      <div>
          <table class='table' border='2px' width='100%'>
              <tr>
                  <td align='center' class="text-white font-20">ฐานข้อมูล${title}</td>
              </tr>
          </table>
      <br />
      <br />
          <table style='width:100%' border='0'>
              <tr>
                <td style='width: 19%;'>&nbsp;</td>
                <td style='width: 19%;'>&nbsp;</td>
                <td style='width: 14%;'>&nbsp;</td>
                <td style='width: 18%;'>&nbsp;</td>
                <td style='width: 16%;'>&nbsp;</td>
                <td style='width: 14%;'>&nbsp;</td>
              </tr>
              <tr>
                <td style='width:30%'class="text-white font-20"><strong><em>รายละเอียดข้อมูลภาพใบหน้า</em></strong></td>
                <td>&nbsp;</td>
                <td style='width:20%'>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td style='height: 5px;' colspan='6'>&nbsp;</td>
              </tr>
              <tr>
                <td  style='width: 110px' class="text-white font-20">เลขประจำตัวประชาชน</td>
                <td  style='color:blue' data-attributeName='citizenCardNumber'>
                  <span class="text-success font-20">${selectData.citizenCardNumber}</span>
                </td>
              </tr>
              <tr>
              <td class="text-white font-20">ภาพใบหน้า</td>
              </tr>
              <tr>
                <td style='height: 5px;' colspan='6'>&nbsp;</td>
              </tr>
            <tr>
              <td>&nbsp;</td>
              <td><img src="${selectData.mimeType},${selectData.image}"></td>
            </tr>
          </table>
        </div>
      </body>
    </html>`);
  }

  public getSearchData() {
    const schema = 'dopa-moi-dopa-person-face-photo';
    if (
      localStorage.getItem(schema + 'Results') === '[]' ||
      localStorage.getItem(schema + 'Results') === null
    ) {
      console.log('7.1');
    } else {
      this.show = true;
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length; // นับจำนวนรายการ

      console.log('dopa-moi-dopa-person-face-photoResults' + this.results);
    }
  }

  public getnormalPdf() {
    const schema = 'dopa-moi-dopa-person-face-photo';
    if (localStorage.getItem(schema + 'Results') === null) {
      this.normalPdf = [];
      console.log('1.1');
    } else {
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length; // นับจำนวนรายการ
      this.normalPdfCount = `<div class="col-md-11"
      class="row card singlereport-timeline-item list-normal-design-head-collapse">
      <span class="list-normal-design-underline depart">กรมการปกครอง: </span>
      <span class="list-normal-design-underline departdata">ภาพใบหน้า (Linkage) </span>
      <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ
      </span>
      </div>`;

      for (let i = 0; i < this.results.length; i++) {
        this.normalPdf.push(`<div class="col-md-11">
                              <div class="section-criminal-results" style="text-indent:25px;
                                font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
                                <span class="list-normal-design-underline depart">ภาพใบหน้า (Linkage)</span>
                                  <div *ngFor="let moidopafacephotosResult of moidopafacephotosResults">
                                    <img src="${this.changeNull(this.results[i].mimeType)},${this.changeNull(this.results[i].image)}" style=" width:250px;  height:auto;">
                                  </div>
                              </div>
                            </div>${this.loadReportDetail()}`);

      }
      console.log('1.2');
    }
  }

  public gettopPdf() {
    const schema = 'dopa-moi-dopa-person-face-photo';
    if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {
      this.topPdf.push(`
      <div class="row" ng-model="Dxc_Model_Dopa_Citizen">
        <div class="report-section-title">
          <p style="font-size: 30px; font-weight: bold; text-align: center; color: blue; border: 1; border-color: black;">ข้อมูลทะเบียนราษฎร</p>
        </div>
        <div style="text-align: center;">
          <img src="https://sv1.picz.in.th/images/2020/01/14/RiHz5Q.png" alt="RiHz5Q.png" border="0" width="250px"/>
        </div>
        </br>
      </div>${this.loadReportDetail()}`);
      console.log('1.1');
    } else {
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      for (let i = 0; i < this.results.length; i++) {
          this.topPdf.push(`
          <div class="col-md-12">
            <div class="row text-center">
              <span class="report-section-title">
                <p style="font-size: 30px; font-weight: bold; text-align: center; color: blue; border: 1; border-color: black;">ข้อมูลทะเบียนราษฎร</p></span>
            </div>
            <div class="row" style="text-align: center;">
              <img src="${this.changeNull(this.results[i].mimeType)},${this.changeNull(this.results[i].image)}" style=" width:250px;  height:auto;">
            </div>
          </div>${this.loadReportDetail()}`);
      }
      console.log('1.2');
    }
  }
  
  // เช็ควันที่
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
  // เช็คเพศ
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
  // เช็คค่าว่าง
  changeNull(selectData: string) {
    if (selectData == null) {
      return '-';
    } else {
      return selectData;
    }
  }
  // เช็ค wartermarks, reportName, reportOfDate, reportOfTime
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
   * Getter $results
   * @return {IDxc_Model_Dopa_Moi_Face_Photos[]}
   */
  public get $results(): IDxc_Model_Dopa_Moi_Face_Photos[] {
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
   * @param {IDxc_Model_Dopa_Moi_Face_Photos[]} value
   */
  public set $results(value: IDxc_Model_Dopa_Moi_Face_Photos[]) {
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
   * Getter $topPdf
   * @return {string[]}
   */
  public get $topPdf(): string[] {
    return this.topPdf;
  }

  /**
   * Setter $topPdf
   * @param {string[]} value
   */
  public set $topPdf(value: string[]) {
    this.topPdf = value;
  }

}
