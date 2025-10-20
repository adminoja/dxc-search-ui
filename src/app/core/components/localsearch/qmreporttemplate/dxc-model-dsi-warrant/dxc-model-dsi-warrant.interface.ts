import * as moment from 'moment';
import { IDxc_Model_Dsi_Warrant } from 'src/app/core/shared/models/Dxc_Model_Dsi_Warrant';
import { Utils } from 'src/app/core/shared/utils/Utils';
import { Injectable } from "@angular/core";

export interface IReportDsiWarrant {
    model: IDxc_Model_Dsi_Warrant;
}

@Injectable()
export class DsiWarrantMetadata {
  html: string;
  reportName: string;
  reportOfTime: string;
  reportOfDate: string;
  private results: IDxc_Model_Dsi_Warrant[];
  private count: number;
  private obj: string;
  private show: boolean;
  private util: Utils;
  private allegationPdf: string[];
  private allegationPdfCount: string;

  constructor() {
    /**
     * set ค่าให้มัน
     */
    this.util = new Utils();
    this.allegationPdf = [];
    this.results = [];
    this.count = 0;
    this.allegationPdfCount = '';
  }
  public getHtml(selectData: IDxc_Model_Dsi_Warrant, title: string) {
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
        .col-4 {
          width: 30%;
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
            <td align="center">${title}</td>
          </tr>
        </table>
        <br/>
        ${selectData.wartermarks}
        <form>
          <div class="ml-3">
            <div class="row">
              <div class="col-2">
                <p class="text-white font-20">เลขประจำตัวประชาชน</p>
              </div>
              <div class="col-6">
                <p class="text-success font-20">${selectData.idCard}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <p class="text-white font-20">ชื่อ-นามสกุลผู้ต้องหา</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${selectData.accused}</p>
              </div>
              <div class="col-2">
                <p class="text-white font-20">ที่อยู่ผู้ต้องหา</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${selectData.accusedAddress}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <p class="text-white font-20">คำร้องเลขที่</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${selectData.barkerNumber}</p>
              </div>
              <div class="col-2">
                <p class="text-white font-20">ผู้ร้อง</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${selectData.barker}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <p class="text-white font-20">เลขที่หมาย</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${selectData.lawsuitId}</p>
              </div>
              <div class="col-2">
                <p class="text-white font-20">เลขที่คดี</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${selectData.caseNo}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <p class="text-white font-20">ศาล</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${selectData.court}</p>
              </div>
              <div class="col-2">
                <p class="text-white font-20">วันที่ออกหมายจับ</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${selectData.dateEnforcement}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <p class="text-white font-20">ฐานความผิด</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${selectData.guilt}</p>
              </div>
              <div class="col-2">
                <p class="text-white font-20">อายุความ</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${selectData.prescription}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <p class="text-white font-20">นับตั้งแต่วันที่</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${selectData.startDate}</p>
              </div>
              <div class="col-2">
                <p class="text-white font-20">แต่ไม่เกินวันที่</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${selectData.finishDate}</p>
              </div>
            </div>              
            <div class="row">
              <div class="col-2">
                <p class="text-white font-20">สถานะหมายจับ</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${selectData.statusRecord}</p>
              </div>
              <div class="col-2">
                <p class="text-white font-20">สถานะการจับกุม</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${selectData.arrested}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <p class="text-white font-20">สถานะการดำเนินคดี</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${selectData.proceedings}</p>
              </div>
              <div class="col-2">
                <p class="text-white font-20">สถานะการตัดสิน</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${selectData.adjudge}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <p class="text-white font-20">สถานะการหลบหนี</p>
              </div>
              <div class="col-9">
                <p class="text-success font-20">${selectData.escape}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <p class="text-white font-20">วันที่จับกุม</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${selectData.dateArrest}</p>
              </div>
              <div class="col-2">
                <p class="text-white font-20">วันที่ปรับปรุงข้อมูล</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${selectData.dateUpdate}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <p class="text-white font-20">ผู้บันทึกข้อมูล</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${selectData.unitCreate}</p>
              </div>
              <div class="col-2">
                <p class="text-white font-20">บันทึกเพิ่มเติม</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${selectData.note}</p>
              </div>
            </div>
          </div>
        </form>
      </div>
      </body>
  </html>
    `;
  }
  public viewgetHtml(selectData: IDxc_Model_Dsi_Warrant, title: string) {
        return this.html =
        `<html>
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            <script>
              $(document).ready(function() {
                $('#confirmDsiWarrant').click(function(){
                  $('#dsiWarrant').modal('toggle'); 
                  $('#dsiWarrant').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $('#close').click(function(){
                  $('#dsiWarrant').modal('toggle'); 
                  $('#dsiWarrant').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  }); 
                });
                $('#closeDsiWarrant').click(function(){
                  $('#dsiWarrant').modal('toggle'); 
                  $('#dsiWarrant').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  }); 
                });
                $("#dsiWarrant").modal({
                  show: false,
                  backdrop: 'static'
                });
                $("#clickDsiWarrant").click(function() {
                $("#dsiWarrant").modal("show");             
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
            <br/>
            <div class="ml-3">
              <div class="row">
                <div class="col-2">
                  <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                </div>
                <div class="col-6">
                  <a class="text-success font-20" id="clickDsiWarrant">
                    ${selectData.idCard}<i class="material-icons">link</i></a>
                </div>
              </div>
              <div class="row">
                <div class="col-2">
                  <p class="text-white font-20">ชื่อ-นามสกุลผู้ต้องหา</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.accused}</p>
                </div>
                <div class="col-2">
                  <p class="text-white font-20">ที่อยู่ผู้ต้องหา</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.accusedAddress}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-2">
                  <p class="text-white font-20">คำร้องเลขที่</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.barkerNumber}</p>
                </div>
                <div class="col-2">
                  <p class="text-white font-20">ผู้ร้อง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.barker}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-2">
                  <p class="text-white font-20">เลขที่หมาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.lawsuitId}</p>
                </div>
                <div class="col-2">
                  <p class="text-white font-20">เลขที่คดี</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.caseNo}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-2">
                  <p class="text-white font-20">ศาล</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.court}</p>
                </div>
                <div class="col-2">
                  <p class="text-white font-20">วันที่ออกหมายจับ</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.dateEnforcement}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-2">
                  <p class="text-white font-20">ฐานความผิด</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.guilt}</p>
                </div>
                <div class="col-2">
                  <p class="text-white font-20">อายุความ</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.prescription}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-2">
                  <p class="text-white font-20">นับตั้งแต่วันที่</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.startDate}</p>
                </div>
                <div class="col-2">
                  <p class="text-white font-20">แต่ไม่เกินวันที่</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.finishDate}</p>
                </div>
              </div>              
              <div class="row">
                <div class="col-2">
                  <p class="text-white font-20">สถานะหมายจับ</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.statusRecord}</p>
                </div>
                <div class="col-2">
                  <p class="text-white font-20">สถานะการจับกุม</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.arrested}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-2">
                  <p class="text-white font-20">สถานะการดำเนินคดี</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.proceedings}</p>
                </div>
                <div class="col-2">
                  <p class="text-white font-20">สถานะการตัดสิน</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.adjudge}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-2">
                  <p class="text-white font-20">สถานะการหลบหนี</p>
                </div>
                <div class="col-9">
                  <p class="text-success font-20">${selectData.escape}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-2">
                  <p class="text-white font-20">วันที่จับกุม</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.dateArrest}</p>
                </div>
                <div class="col-2">
                  <p class="text-white font-20">วันที่ปรับปรุงข้อมูล</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.dateUpdate}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-2">
                  <p class="text-white font-20">ผู้บันทึกข้อมูล</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.unitCreate}</p>
                </div>
                <div class="col-2">
                  <p class="text-white font-20">บันทึกเพิ่มเติม</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.note}</p>
                </div>
              </div>
            </div>
          </div>
        </body>
        <div id="dsiWarrant" class="modal fade" tabindex="-1" data-backdrop="static" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title text-white" id="exampleModalLongTitle">ยืนยันการค้นหา</h4>
                <button type="button" class="close" id="close">×</button>
              </div>
              <div class="modal-body font-20 text-white text-center">
                คุณต้องการเปิดรายงาน Single Report ของ <br>
                หมายเลขบัตรประชาชนนี้ ${selectData.idCard} ใช่หรือไม่
              </div>
              <div class="modal-footer">
                <button type="button" id="closeDsiWarrant" class="btn btn-danger">ยกเลิก</button>
                <a id="confirmDsiWarrant" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.idCard}/0/0/0/0/0">ตกลง</a>				
              </div>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
      </html>
      `;
  }
  public getSearchData() {
    const schema = 'dsi-warrant';
    // const schema = environment.qm.sub[0]['doc'].sub[0]['warrant'].schema;
    if (localStorage.getItem(schema + 'Results') === '[]' ||
      localStorage.getItem(schema + 'Results') === null) {

    } else {
      this.show = true;
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length; // นับจำนวนรายการ

      console.log('72' + this.results);
    }
  }
  public getallegationPdf() {
    const schema = 'dsi-warrant';
    // const schema = environment.qm.sub[0]['doc'].sub[0]['regseize'].schema;
    if (localStorage.getItem(schema + 'Results') === '[]' ||
      localStorage.getItem(schema + 'Results') === null) {

      this.allegationPdf = [];
      console.log('3.1');
    } else {
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length; // นับจำนวนรายการ
      this.allegationPdfCount = `<div class="col-md-11"
      class="row card singlereport-timeline-item list-normal-design-head-collapse">
      <span class="list-normal-design-underline depart">กรมสอบสวนคดีพิเศษ: </span>
      <span class="list-normal-design-underline departdata">หมายจับคดีพิเศษ</span>
      <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ
      </span>
    </div>`;
      this.loadReportDetail();
      for (let i = 0; i < this.results.length; i++) {
        this.allegationPdf.push(
          `<div class="col-md-11">
            <div class="section-criminal-results" style="text-indent:25px;
                font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
            <span class="list-normal-design-underline depart">หมายจับคดีพิเศษ</span>

            <div style="padding-left:15px;">
            <strong class="report-field-title">เลขประจำตัวประชาชน
            </strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
                  ${this.changeNull(this.results[i].idCard)}
              </span>&nbsp;&nbsp;
            <strong class="report-field-title">ชื่อ-นามสกุลผู้ต้องหา
            </strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
                  ${this.changeNull(this.results[i].accused)}
              </span>&nbsp;&nbsp;
            <strong class="report-field-title">ฐานความผิด
            </strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
                  ${this.changeNull(this.results[i].guilt)}
              </span>&nbsp;&nbsp;
            <strong class="report-field-title">เลขที่คดี
            </strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
                  ${this.changeNull(this.results[i].caseNo)}
              </span>&nbsp;&nbsp;
            <strong class="report-field-title">ศาลที่ออกหมายจับ
            </strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
                  ${this.changeNull(this.results[i].court)}
              </span>&nbsp;&nbsp;
            <strong class="report-field-title">วันที่ออกหมายจับ
            </strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
                  ${this.formatDate(this.results[i].dateEnforcement)}
              </span>&nbsp;&nbsp;
            </div>

            </div>
          </div>${this.loadReportDetail()}`);
        console.log('dsi.allegation' + this.allegationPdf[i]);
      }
      console.log('3.2');
    }
  }
  public changeNull(selectData: string) {
    if (selectData == null || selectData == undefined) {
      return '-';
    } else {
      return selectData;
    }
  }
  public formatDate(birthDate: string): string {
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
   * Getter $allegationPdf
   * @return {string[]}
   */
  public get $allegationPdf(): string[] {
    return this.allegationPdf;
  }

  /**
   * Setter $allegationPdf
   * @param {string[]} value
   */
  public set $allegationPdf(value: string[]) {
    this.allegationPdf = value;
  }

  /**
   * Getter $results
   * @return {IDxc_Model_Dsi_Warrant[]}
   */
  public get $results(): IDxc_Model_Dsi_Warrant[] {
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
   * @param {IDxc_Model_Dsi_Warrant[]} value
   */
  public set $results(value: IDxc_Model_Dsi_Warrant[]) {
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
