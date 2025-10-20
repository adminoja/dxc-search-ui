import { IDxc_Model_Jfo_Jfo_Case } from './../../../../shared/models/Dxc_Model_Jfo_Jfo_Case';
import * as moment from 'moment';
import { Injectable } from "@angular/core";

export interface IReportJfoJfoCase {
  model: IDxc_Model_Jfo_Jfo_Case;
}

@Injectable()
export class JfoJfoCaseMetadata {

  private results: IDxc_Model_Jfo_Jfo_Case[];
  private obj: string;
  private show: boolean;
  private count: number;
  private normalPdf: string[];
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

  public getHtml(selectData: IDxc_Model_Jfo_Jfo_Case, title: string) {
    return this.html =
      `<html>
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
          .row {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
                flex-wrap: wrap;
            margin-right: -12px;
            margin-left: -12px;
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
        <body>
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
          <div>
            <table class="table" border="2px" width="100%">
                <tr>
                  <td align="center" class="text-white font-20">${title}</td>
                </tr>
            </table>
          </div>
          <div>
            <br /><br />
            <div class="ml-3">
                <div class="row">
                    <div class="col-12">
                        <p class="text-white font-20"><u>การรับคำขอสนับสนุนกองทุนยุติธรรม</u></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p class="text-white font-20"><u>การรับคำขอสนับสนุนกองทุนยุติธรรม</u></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">ประเภทสำนวน</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.caseType}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">เลขรับกองทุน</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.caseFundNo}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">วันที่ยื่นเรื่อง</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.entryDate}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">วันที่กองทุนรับเรื่อง</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.receiveDate}</p>
                    </div>
                    <div class="col-3">
                </div>
                <div class="row">
                        <p class="text-white font-20">จังหวัดเจ้าของสำนวน</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.provinceName}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">เชื้อชาติผู้ขอรับการช่วยเหลือ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.nationality}</p>
                    </div>
                    <div class="col-3">
                </div>
                <div class="row">
                        <p class="text-white font-20">เพศผู้ขอรับการช่วยเหลือ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.sex}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">ฐานความผิดหลัก</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.categoryId}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">ฐานความผิดรอง</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.subcategoryId}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">ปี (ตามปฏิทิน)</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.year}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">หมายเลขประจำตัวประชาชน</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.citizenId}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p class="text-white font-20"><u>ข้อมูลการพิจารณา</u></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">วันที่เริ่มทำสำนวน</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.ofcStartDate}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">วันที่ทำสำนวนเสร็จ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.ofcResultDate}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">จำนวนเงินที่ได้รับการอนุมัติ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.amount}</p>
                    </div>
                    <div class="col-3"></div>
                    <div class="col-3"></div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p class="text-white font-20"><u>สรุปความเห็นที่ประชุม</u></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">วันที่ประชุมพิจารณา</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.meetingDate}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">จำนวนเงินที่ได้รับการอนุมัติ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.amount}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p class="text-white font-20"><u>ผลการพิจารณา</u></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">วันที่แจ้งผลการพิจารณา</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.ofcNotifyDate}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">ประเภทการปิดสำนวน</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.caseEndType}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">วันที่ยุติเรื่อง (ในกรณีที่ผู้ร้องขอยุติเรื่อง)</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.caseEndDate}</p>
                    </div>
                    <div class="col-3"></div>
                    <div class="col-3"></div>
                </div>
            </div>
          </div>
        </body>
    </html> `;
  }

  public viewgetHtml(selectData: IDxc_Model_Jfo_Jfo_Case, title: string) {
    return this.html =
      `<html>
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
          <script>
            $(document).ready(function() {
              $('#confirmJfoJfoCase').click(function(){
                $('#jfoJfoCase').modal('toggle');
                $('#jfoJfoCase').on('hidden.bs.modal', function () {
                    $('body').addClass('modal-open');
                });
              });
              $('#close').click(function(){
                $('#jfoJfoCase').modal('toggle');
                $('#jfoJfoCase').on('hidden.bs.modal', function () {
                    $('body').addClass('modal-open');
                });
              });
              $('#closeJfoJfoCase').click(function(){
                $('#jfoJfoCase').modal('toggle');
                $('#jfoJfoCase').on('hidden.bs.modal', function () {
                    $('body').addClass('modal-open');
                });
              });
              $("#jfoJfoCase").modal({
                show: false,
                backdrop: 'static'
              });
              $("#clickJfoJfoCase").click(function() {
              $("#jfoJfoCase").modal("show");
              });
            });
          </script>
        </head>
        <body>
          <div>
            <table class="table" border="2px" width="100%">
                <tr>
                    <td align="center" class="text-white font-20">${title}</td>
                </tr>
            </table>
          </div>
          <br/> <br/>
          <div>
            <div class="ml-3">
                <div class="row">
                    <div class="col-12">
                        <p class="text-white font-20"><u>การรับคำขอสนับสนุนกองทุนยุติธรรม</u></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">ประเภทสำนวน</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.caseType}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">วันที่ยื่นเรื่อง</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.entryDate}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">วันที่กองทุนรับเรื่อง</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.receiveDate}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">จังหวัดเจ้าของสำนวน</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.provinceName}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">เชื้อชาติผู้ขอรับการช่วยเหลือ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.nationality}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">เพศผู้ขอรับการช่วยเหลือ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.sex}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">ฐานความผิดหลัก</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.categoryId}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">ฐานความผิดรอง</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.subcategoryId}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">ปี (ตามปฏิทิน)</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.year}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">หมายเลขประจำตัวประชาชน</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">
                          <a class="text-success font-20" id="clickJfoJfoCase" type="button">
				                  ${selectData.citizenId}<i class="material-icons">link</i></a>
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p class="text-white font-20"><u>ข้อมูลการพิจารณา</u></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">วันที่เริ่มทำสำนวน</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.ofcStartDate}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">วันที่ทำสำนวนเสร็จ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.ofcResultDate}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">จำนวนเงินที่ได้รับการอนุมัติ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.amount}</p>
                    </div>
                    <div class="col-3"></div>
                    <div class="col-3"></div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p class="text-white font-20"><u>สรุปความเห็นที่ประชุม</u></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">วันที่ประชุมพิจารณา</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.meetingDate}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">จำนวนเงินที่ได้รับการอนุมัติ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.amount}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p class="text-white font-20"><u>ผลการพิจารณา</u></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">วันที่แจ้งผลการพิจารณา</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.ofcNotifyDate}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">ประเภทการปิดสำนวน</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.caseEndType}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">วันที่ยุติเรื่อง (ในกรณีที่ผู้ร้องขอยุติเรื่อง)</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.caseEndDate}</p>
                    </div>
                    <div class="col-3"></div>
                    <div class="col-3"></div>
                </div>
            </div>
          </div>
        </body>
        <div id="jfoJfoCase" class="modal fade" tabindex="-1" data-backdrop="static" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title text-white" id="exampleModalLongTitle">ยืนยันการค้นหา</h4>
                <button type="button" class="close" id="close">×</button>
              </div>
              <div class="modal-body font-20 text-white text-center">
                คุณต้องการเปิดรายงาน Single Report ของ <br>
                หมายเลขบัตรประชาชนนี้ ${selectData.citizenId} ใช่หรือไม่
              </div>
              <div class="modal-footer">
                <button type="button" id="closeJfoJfoCase" class="btn btn-danger">ยกเลิก</button>
                <a id="confirmJfoJfoCase" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.citizenId}/0/0/0/0/0">ตกลง</a>				
              </div>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
      </html>
      `;
  }

  public viewgetHtmlSingleReport(selectData: IDxc_Model_Jfo_Jfo_Case, title: string) {
    return this.html =
      `<html>
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        </head>
        <body>
          <div>
            <table class="table" border="2px" width="100%">
                <tr>
                    <td align="center" class="text-white font-20">${title}</td>
                </tr>
            </table>
          </div>
          <br/> <br/>
          <div>
            <div class="ml-3">
                <div class="row">
                    <div class="col-12">
                        <p class="text-white font-20"><u>การรับคำขอสนับสนุนกองทุนยุติธรรม</u></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">ประเภทสำนวน</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.caseType}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">เลขรับกองทุน</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.caseFundNo}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">วันที่ยื่นเรื่อง</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.entryDate}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">วันที่กองทุนรับเรื่อง</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.receiveDate}</p>
                    </div>
                    <div class="col-3">
                </div>
                <div class="row">
                        <p class="text-white font-20">จังหวัดเจ้าของสำนวน</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.provinceName}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">เชื้อชาติผู้ขอรับการช่วยเหลือ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.nationality}</p>
                    </div>
                    <div class="col-3">
                </div>
                <div class="row">
                        <p class="text-white font-20">เพศผู้ขอรับการช่วยเหลือ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.sex}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">ฐานความผิดหลัก</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.categoryId}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">ฐานความผิดรอง</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.subcategoryId}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">ปี (ตามปฏิทิน)</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.year}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">หมายเลขประจำตัวประชาชน</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.citizenId}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p class="text-white font-20"><u>ข้อมูลการพิจารณา</u></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">วันที่เริ่มทำสำนวน</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.ofcStartDate}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">วันที่ทำสำนวนเสร็จ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.ofcResultDate}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">จำนวนเงินที่ได้รับการอนุมัติ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.amount}</p>
                    </div>
                    <div class="col-3"></div>
                    <div class="col-3"></div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p class="text-white font-20"><u>สรุปความเห็นที่ประชุม</u></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">วันที่ประชุมพิจารณา</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.meetingDate}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">จำนวนเงินที่ได้รับการอนุมัติ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.amount}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p class="text-white font-20"><u>ผลการพิจารณา</u></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">วันที่แจ้งผลการพิจารณา</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.ofcNotifyDate}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">ประเภทการปิดสำนวน</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.caseEndType}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">วันที่ยุติเรื่อง (ในกรณีที่ผู้ร้องขอยุติเรื่อง)</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.caseEndDate}</p>
                    </div>
                    <div class="col-3"></div>
                    <div class="col-3"></div>
                </div>
            </div>
          </div>
        </body>
      </html>
      `;
  }
  public getSearchData() {
    const schema = 'jfo-jfo-case';
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
      console.log(this.count);
    }
  }
  public getnormalPdf() {
    const schema = 'jfo-jfo-case';

    if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {
      this.normalPdf = [];
    } else {
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length; // นับจำนวนรายการ
      this.normalPdfCount = `<div class="col-md-11"
        class="row card singlereport-timeline-item list-normal-design-head-collapse">
        <span class="list-normal-design-underline depart">สำนักงานปลัดกระทรวงยุติธรรม</span>
        <span class="list-normal-design-underline departdata">กองทุนยุติธรรม</span>
        <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ
        </span>
        </div>`;
      this.loadReportDetail();
      for (let i = 0; i < this.results.length; i++) {
        this.normalPdf.push(`
          <div class="col-md-11">
          <div class="section-criminal-results" style="text-indent:25px;
          font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
          <span class="list-normal-design-underline depart">กองทุนยุติธรรม</span>
            <div style="padding-left:15px;">
                  <strong class="report-field-title">เลขรับกองทุน:</strong>
                    <span class="report-field-value" style="text-decoration:underline">
                      ${this.changeNull(this.results[i].caseFundNo)}
                    </span>
                  <strong class="report-field-title">ประเภทสำนวน:</strong>
                    <span class="report-field-value" style="text-decoration:underline"> 
                    ${this.changeNull(this.results[i].caseType)}</span>
                  <strong class="report-field-title">ฐานความผิดหลัก:</strong>
                    <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].categoryId)}</span>
                  <strong class="report-field-title">ฐานความผิดรอง:</strong>
                    <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].subcategoryId)}</span>
                    <strong class="report-field-title">ปี:</strong>
                    <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].year)}</span>
                    <strong class="report-field-title">วันที่แจ้งผลการพิจารณา:</strong>
                    <span class="report-field-value" style="text-decoration:underline">${this.formatDate(this.results[i].ofcNotifyDate)}</span>
                    <strong class="report-field-title">จังหวัดเจ้าของสำนวน:</strong>
                    <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].provinceName)}</span>

              </div>
          </div>
          </div>${this.loadReportDetail()}`);
      }
      console.log('4.2' + this.results[0]);
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
  changeNull(selectData: string) {
    if (selectData == null) {
      return '-';
    } else {
      return selectData;
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

  /**
   * Getter $results
   * @return {IDxc_Model_Jfo_Jfo_Case[]}
   */
  public get $results(): IDxc_Model_Jfo_Jfo_Case[] {
    return this.results;
  }

  /**
   * Setter $results
   * @param {IDxc_Model_Jfo_Jfo_Case[]} value
   */
  public set $results(value: IDxc_Model_Jfo_Jfo_Case[]) {
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
   * @return {string []}
   */
  public get $normalPdf(): string[] {
    return this.normalPdf;
  }

  /**
   * Setter $normalPdf
   * @param {string []} value
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

}

