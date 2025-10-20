import * as moment from 'moment';
import { IDxc_Model_Oncb_NarcoticOffender } from '../../../../shared/models/Dxc_Model_Oncb_NarcoticOffender';
import { Utils } from '../../../../shared/utils/Utils';
import { Injectable } from "@angular/core";
export interface IReportOncbNarcoticOffender {
  model: IDxc_Model_Oncb_NarcoticOffender;
}

@Injectable()
export class OncbNarcoticOffenderMetadata {
  reportName: string;
  reportOfTime: string;
  reportOfDate: string;
  html: string;
  private results: IDxc_Model_Oncb_NarcoticOffender[];
  private obj: string;
  private show: boolean;
  private allegation: string;
  private narcoticName: string;
  private util: Utils;
  private listLefts: any[];
  private listAllegation: any[];
  private allegationPdf: string[];
  private addressNarcoticOffenderPdf: string[];
  private count: number;
  private allegationPdfCount: string;

  constructor() {
    this.util = new Utils();
    this.listLefts = [];
    this.listAllegation = [];
    this.allegationPdf = [];
    this.results = [];
    this.addressNarcoticOffenderPdf = [];
    this.count = 0;
    this.allegationPdfCount = '';
    moment.locale('th');

  }
  public getHtml(selectData: IDxc_Model_Oncb_NarcoticOffender, title: string) {

    return this.html = `
    <html>
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
                <div class="row">
                  <div class="col-9"></div>
                  <div class="col-1">
                    <p class="text-white font-20">รหัสคดี ป.ป.ส./ปีรายงาน</p>
                  </div>
                  <div class="col">
                    <p class="text-success font-20">${selectData.oncbCaseId}/${selectData.reportedYear}</p>
                  </div>
                </div>
                <div class="row">
                <div class="col-9"></div>
                  <div class="col-1">
                    <p class="text-white font-20">รหัสข้อมูล</p>
                  </div>
                  <div class="col">
                    <p class="text-success font-20">${selectData.id}</p>
                  </div>
                </div>
                <div class="row">
                <div class="col-9"></div>
                  <div class="col-1">
                    <p class="text-white font-20">รหัสคดี</p>
                  </div>
                  <div class="col">
                    <p class="text-success font-20">${selectData.caseId}</p>
                  </div>
                </div>

                <div class="row">
                  <div class="col-2">
                    <p class="text-white font-20">รหัสผู้ต้องหา</p>
                  </div>
                  <div class="col-2">
                    <p class="text-success font-20">${selectData.pid}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-2">
                    <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                  </div>
                  <div class="col-2">
                    <p class="text-success font-20">${selectData.citizenCardNumber}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-2">
                    <p class="text-white font-20">ชื่อ</p>
                  </div>
                  <div class="col-3">
                    <p class="text-success font-20">${selectData.firstName}</p>
                  </div>
                  <div class="col-2">
                    <p class="text-white font-20">นามสกุล</p>
                  </div>
                  <div class="col-2">
                    <p class="text-success font-20">${selectData.lastName}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-2">
                    <p class="text-white font-20">หน่วยงานที่สอบสวน</p>
                  </div>
                  <div class="col-2">
                    <p class="text-success font-20">${selectData.investigationUnitName}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-2">
                    <p class="text-white font-20">จังหวัดเกิดเหตุ</p>
                  </div>
                  <div class="col-2">
                    <p class="text-success font-20">${selectData.crimeSceneProvince}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-2">
                    <p class="text-white font-20">ชื่อยาเสพติด</p>
                  </div>
                  <div class="col-3">
                    <p class="text-success font-20">${selectData.narcoticName}</p>
                  </div>
                  <div class="col-2">
                    <p class="text-white font-20">ชื่อข้อหา</p>
                  </div>
                  <div class="col-2">
                    <p class="text-success font-20">${selectData.allegation}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-2">
                    <p class="text-white font-20">รหัสคดีปปส.</p>
                  </div>
                  <div class="col-3">
                    <p class="text-success font-20">${selectData.oncbCaseId}</p>
                  </div>
                  <div class="col-2">
                    <p class="text-white font-20">วันที่จับกุม</p>
                  </div>
                  <div class="col-2">
                    <p class="text-success font-20">${selectData.arrestDate}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-2">
                    <p class="text-white font-20">เลขคดีตำรวจ</p>
                  </div>
                  <div class="col-2">
                    <p class="text-success font-20">${selectData.policeCaseId}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-2">
                    <p class="text-white font-20">เลขคดีดำ</p>
                  </div>
                  <div class="col-3">
                    <p class="text-success font-20">${selectData.undecidedCaseId}</p>
                  </div>
                  <div class="col-2">
                    <p class="text-white font-20">เลขคดีแดง</p>
                  </div>
                  <div class="col-2">
                    <p class="text-success font-20">${selectData.decidedCaseId}</p>
                  </div>
                </div>
              </div>

      </div>


      </body>

      </html>
      `;

  }
  public viewgetHtml(selectData: IDxc_Model_Oncb_NarcoticOffender, title: string) {
    let checkCitizenCardNumber = '';
    if(selectData.citizenCardNumber == '-'){
      checkCitizenCardNumber = `
        ${selectData.citizenCardNumber}`
    } else {
      checkCitizenCardNumber =`
      <a class="text-success font-20" id="clickOncbNarcoticOffender" type="button">
        ${selectData.citizenCardNumber}<i class="material-icons">link</i></a>`
    }
    return this.html = `<html>

          <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            <script>
              $(document).ready(function() {
                $('#confirmOncbNarcoticOffender').click(function(){
                  $('#oncbNarcoticOffender').modal('toggle'); 
                  $('#oncbNarcoticOffender').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $('#close').click(function(){
                  $('#oncbNarcoticOffender').modal('toggle');
                  $('#oncbNarcoticOffender').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $('#closeOncbNarcoticOffender').click(function(){
                  $('#oncbNarcoticOffender').modal('toggle'); 
                  $('#oncbNarcoticOffender').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $("#oncbNarcoticOffender").modal({
                  show: false,
                  backdrop: 'static'
                });
                $("#clickOncbNarcoticOffender").click(function() {
                $("#oncbNarcoticOffender").modal("show");
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
                  <br />
                  <div>
                    <div class="row">
                      <div class="col-9"></div>
                      <div class="col">
                        <p class="text-white font-20">รหัสคดี ป.ป.ส./ปีรายงาน</p>
                      </div>
                      <div class="col">
                        <p class="text-success font-20">${selectData.oncbCaseId}/${selectData.reportedYear}</p>
                      </div>
                    </div>
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
                    <div class="col-9"></div>
                      <div class="col">
                        <p class="text-white font-20">รหัสคดี</p>
                      </div>
                      <div class="col">
                        <p class="text-success font-20">${selectData.caseId}</p>
                      </div>
                    </div>


                    <div class="row">
                      <div class="col-2">
                        <p class="text-white font-20">รหัสผู้ต้องหา</p>
                      </div>
                      <div class="col">
                        <p class="text-success font-20">${selectData.pid}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-2">
                        <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                      </div>
                      <div class="col text-success font-20">
                        ${checkCitizenCardNumber}
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-2">
                        <p class="text-white font-20">ชื่อ</p>
                      </div>
                      <div class="col-3">
                        <p class="text-success font-20">${selectData.firstName}</p>
                      </div>
                      <div class="col-2">
                        <p class="text-white font-20">นามสกุล</p>
                      </div>
                      <div class="col-2">
                        <p class="text-success font-20">${selectData.lastName}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-2">
                        <p class="text-white font-20">หน่วยงานที่สอบสวน</p>
                      </div>
                      <div class="col-2">
                        <p class="text-success font-20">${selectData.investigationUnitName}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-2">
                        <p class="text-white font-20">จังหวัดเกิดเหตุ</p>
                      </div>
                      <div class="col-2">
                        <p class="text-success font-20">${selectData.crimeSceneProvince}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-2">
                        <p class="text-white font-20">ชื่อยาเสพติด</p>
                      </div>
                      <div class="col-3">
                        <p class="text-success font-20">${selectData.narcoticName}</p>
                      </div>
                      <div class="col-2">
                        <p class="text-white font-20">ชื่อข้อหา</p>
                      </div>
                      <div class="col-2">
                        <p class="text-success font-20">${selectData.allegation}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-2">
                        <p class="text-white font-20">รหัสคดีปปส.</p>
                      </div>
                      <div class="col-3">
                        <p class="text-success font-20">${selectData.oncbCaseId}</p>
                      </div>
                      <div class="col-2">
                        <p class="text-white font-20">วันที่จับกุม</p>
                      </div>
                      <div class="col-2">
                        <p class="text-success font-20">${selectData.arrestDate}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-2">
                        <p class="text-white font-20">เลขคดีตำรวจ</p>
                      </div>
                      <div class="col-2">
                        <p class="text-success font-20">${selectData.policeCaseId}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-2">
                        <p class="text-white font-20">เลขคดีดำ</p>
                      </div>
                      <div class="col-3">
                        <p class="text-success font-20">${selectData.undecidedCaseId}</p>
                      </div>
                      <div class="col-2">
                        <p class="text-white font-20">เลขคดีแดง</p>
                      </div>
                      <div class="col-2">
                        <p class="text-success font-20">${selectData.decidedCaseId}</p>
                      </div>
                    </div>
                  </div>
            </div>
          </body>
          <div id="oncbNarcoticOffender" class="modal fade" tabindex="-1" data-backdrop="static" role="dialog" aria-hidden="true">
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
                  <button type="button" id="closeOncbNarcoticOffender" class="btn btn-danger">ยกเลิก</button>
                  <a id="confirmOncbNarcoticOffender" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.citizenCardNumber}/0/0/0/0/0">ตกลง</a>				
                </div>
              </div>
            </div><!-- /.modal-content -->
          </div><!-- /.modal-dialog -->
      </html>
      `;

  }

  public viewgetHtmlSingleReport(selectData: IDxc_Model_Oncb_NarcoticOffender, title: string) {
    return this.html = `<html>

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
                  <br />
                  <div>
                    <div class="row">
                      <div class="col-9"></div>
                      <div class="col">
                        <p class="text-white font-20">รหัสคดี ป.ป.ส./ปีรายงาน</p>
                      </div>
                      <div class="col">
                        <p class="text-success font-20">${selectData.oncbCaseId}/${selectData.reportedYear}</p>
                      </div>
                    </div>
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
                    <div class="col-9"></div>
                      <div class="col">
                        <p class="text-white font-20">รหัสคดี</p>
                      </div>
                      <div class="col">
                        <p class="text-success font-20">${selectData.caseId}</p>
                      </div>
                    </div>


                    <div class="row">
                      <div class="col-2">
                        <p class="text-white font-20">รหัสผู้ต้องหา</p>
                      </div>
                      <div class="col">
                        <p class="text-success font-20">${selectData.pid}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-2">
                        <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                      </div>
                      <div class="col text-success font-20">
                        ${selectData.citizenCardNumber}
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-2">
                        <p class="text-white font-20">ชื่อ</p>
                      </div>
                      <div class="col-3">
                        <p class="text-success font-20">${selectData.firstName}</p>
                      </div>
                      <div class="col-2">
                        <p class="text-white font-20">นามสกุล</p>
                      </div>
                      <div class="col-2">
                        <p class="text-success font-20">${selectData.lastName}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-2">
                        <p class="text-white font-20">หน่วยงานที่สอบสวน</p>
                      </div>
                      <div class="col-2">
                        <p class="text-success font-20">${selectData.investigationUnitName}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-2">
                        <p class="text-white font-20">จังหวัดเกิดเหตุ</p>
                      </div>
                      <div class="col-2">
                        <p class="text-success font-20">${selectData.crimeSceneProvince}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-2">
                        <p class="text-white font-20">ชื่อยาเสพติด</p>
                      </div>
                      <div class="col-3">
                        <p class="text-success font-20">${selectData.narcoticName}</p>
                      </div>
                      <div class="col-2">
                        <p class="text-white font-20">ชื่อข้อหา</p>
                      </div>
                      <div class="col-2">
                        <p class="text-success font-20">${selectData.allegation}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-2">
                        <p class="text-white font-20">รหัสคดีปปส.</p>
                      </div>
                      <div class="col-3">
                        <p class="text-success font-20">${selectData.oncbCaseId}</p>
                      </div>
                      <div class="col-2">
                        <p class="text-white font-20">วันที่จับกุม</p>
                      </div>
                      <div class="col-2">
                        <p class="text-success font-20">${selectData.arrestDate}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-2">
                        <p class="text-white font-20">เลขคดีตำรวจ</p>
                      </div>
                      <div class="col-2">
                        <p class="text-success font-20">${selectData.policeCaseId}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-2">
                        <p class="text-white font-20">เลขคดีดำ</p>
                      </div>
                      <div class="col-3">
                        <p class="text-success font-20">${selectData.undecidedCaseId}</p>
                      </div>
                      <div class="col-2">
                        <p class="text-white font-20">เลขคดีแดง</p>
                      </div>
                      <div class="col-2">
                        <p class="text-success font-20">${selectData.decidedCaseId}</p>
                      </div>
                    </div>
                  </div>
            </div>
          </body>
      </html>
      `;

  }
  public getSearchData() {
    // const schema = environment.qm.sub[0]['oncb'].sub[0]['narcoticOffender'].schema;
    const schema = 'oncb-narcotic-offender';
    if (localStorage.getItem(schema + 'Results') === '[]' || 
        localStorage.getItem(schema + 'Results') === null) {

      console.log('ประวัติยาเสพติด null');
    } else {
      this.show = true;
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length; // นับจำนวนรายการ

      console.log('ประวัติยาเสพติด count: ' + this.count)
      console.log('ประวัติยาเสพติด results: ' + this.results);
    }
  }
  public getallegationPdf() {
    // const schema = environment.qm.sub[0]['oncb'].sub[0]['narcoticOffender'].schema; // เปิดตอน เปิด enviroment
    const schema = 'oncb-narcotic-offender'; // ใช้แทนตอนปิด enviroment
    if (localStorage.getItem(schema + 'Results') === '[]' ||
        localStorage.getItem(schema + 'Results') === null) {

      this.allegationPdf = [];
      console.log('ประวัติคดียาเสพติด PDF null');
    } else {
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length; // นับจำนวนรายการ
      console.log(this.count)

      if (this.count !== undefined) {
        // PDF ค้นด้วยเลขบัตร
        this.allegationPdfCount = `<div class="col-md-11"
        class="row card singlereport-timeline-item list-normal-design-head-collapse">
        <span class="list-normal-design-underline depart">สำนักงานคณะกรรมการป้องกันและปราบปรามยาเสพติด: </span>
        <span class="list-normal-design-underline departdata">ประวัติคดียาเสพติด</span>
        <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ
        </span>
      </div>`;
      this.loadReportDetail();
      for (let i = 0; i < this.results.length; i++) {
        this.allegationPdf.push(
          `<div class="col-md-11">
              <div class="section-criminal-results" style="text-indent:25px;
                font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
                <span class="list-normal-design-underline depart">ประวัติคดียาเสพติด</span>
                <div style="padding-left:15px;">
                  <strong class="report-field-title">ชื่อ
                  </strong>&nbsp;&nbsp;
                    <span class="report-field-value" style="text-decoration:underline">
                      ${this.changeNull(this.results[i].firstName)}
                      ${this.changeNull(this.results[i].lastName)}
                    </span>&nbsp;&nbsp;
                  <strong class="report-field-title">ถูกจับกุมเมื่อ
                  </strong>&nbsp;&nbsp;
                    <span class="report-field-value" style="text-decoration:underline">
                      ${this.formatDate(this.results[i].arrestDate)}
                    </span>&nbsp;&nbsp;
                  <strong class="report-field-title">ข้อหา
                  </strong>&nbsp;&nbsp;
                    <span class="report-field-value" style="text-decoration:underline">
                      ${this.changeNull(this.results[i].allegation)}
                    </span>&nbsp;&nbsp;
                  <strong class="report-field-title">ชื่อยาเสพติด
                  </strong>&nbsp;&nbsp;
                    <span class="report-field-value" style="text-decoration:underline">
                      ${this.changeNull(this.results[i].narcoticName)}
                    </span>&nbsp;&nbsp;
                  <strong class="report-field-title">จังหวัดเกิดเหตุ
                  </strong>&nbsp;&nbsp;
                    <span class="report-field-value" style="text-decoration:underline">
                      ${this.changeNull(this.results[i].crimeSceneProvince)}
                    </span>&nbsp;&nbsp;
                  <strong class="report-field-title">หน่วยงานที่สอบสวน
                  </strong>&nbsp;&nbsp;
                    <span class="report-field-value" style="text-decoration:underline">
                      ${this.changeNull(this.results[i].investigationUnitName)}
                    </span>&nbsp;&nbsp;
                </div>
              </div>
            </div>${this.loadReportDetail()}
        `);
        console.log('ONCB.allegation: ' + this.allegationPdf[i]);
      }
      console.log('ประวัติยาเสพติด PDF ค้นด้วยเลขบัตร');
      } else {
        // PDF ค้นด้วยชื่อ-สกุล
        const results = JSON.parse(this.obj);
        this.allegationPdfCount = `<div class="col-md-11"
            class="row card singlereport-timeline-item list-normal-design-head-collapse">
            <span class="list-normal-design-underline depart">สำนักงานคณะกรรมการป้องกันและปราบปรามยาเสพติด: </span>
            <span class="list-normal-design-underline departdata">ประวัติคดียาเสพติด</span>
          </div>`
        this.loadReportDetail();
          this.allegationPdf.push(
            `<div class="col-md-11">
              <div class="section-criminal-results" style="text-indent:25px;
                font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
                <span class="list-normal-design-underline depart">ประวัติคดียาเสพติด</span>
                <div style="padding-left:15px;">
                <strong class="report-field-title">ชื่อ
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                    ${this.changeNull(results.firstName)}
                    ${this.changeNull(results.lastName)}
                  </span>&nbsp;&nbsp;
                <strong class="report-field-title">ถูกจับกุมเมื่อ
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                    ${this.formatDate(results.arrestDate)}
                  </span>&nbsp;&nbsp;
                <strong class="report-field-title">ข้อหา
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                    ${this.changeNull(results.allegation)}
                  </span>&nbsp;&nbsp;
                <strong class="report-field-title">ชื่อยาเสพติด
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                    ${this.changeNull(results.narcoticName)}
                  </span>&nbsp;&nbsp;
                <strong class="report-field-title">จังหวัดเกิดเหตุ
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                    ${this.changeNull(results.crimeSceneProvince)}
                  </span>&nbsp;&nbsp;
                <strong class="report-field-title">หน่วยงานที่สอบสวน
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                    ${this.changeNull(results.investigationUnitName)}
                  </span>&nbsp;&nbsp;
                </div>
              </div>
            </div>${this.loadReportDetail()}`
          );
        console.log('oncb.allegation: ' + this.allegationPdf)
        console.log('ประวัติยาเสพติด PDF ค้นด้วยชื่อ-สกุล');
      }
    }
  }
  public getAddressNarcoticOffenderPdf() {
    // const schema = environment.qm.sub[0]['oncb'].sub[0]['narcoticOffender'].schema;
    const schema = 'oncb-narcotic-offender'; // ใช้แทนตอนปิด enviroment
    if (localStorage.getItem(schema + 'Results') === null) {
      this.addressNarcoticOffenderPdf = [];
      console.log('ประวัติยาเสพติด Address PDF null');
    } else {
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);

      for (let i = 0; i < this.results.length; i++) {
        this.addressNarcoticOffenderPdf.push(
          `<div class="col-md-11">
            <div class="section-criminal-results" style="text-indent:25px;
              font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
              <span class="list-normal-design-underline depart">ประวัติคดียาเสพติด</span>

              <div style='padding-left:15px;'>
                <strong class='report-field-title'>เลขบัตรประชาชน
                </strong>&nbsp;&nbsp;
                  <span class='report-field-value text-info'>${this.changeNull(this.results[i].citizenCardNumber)} </span>&nbsp;
                <strong class='report-field-title'>ชื่อ
                </strong>&nbsp;&nbsp;
                  <span class='report-field-value text-info'>${this.changeNull(this.results[i].firstName)} </span>&nbsp;
                <strong class='report-field-title'>นามสกุล
                </strong>&nbsp;&nbsp;
                  <span class='report-field-value text-info'>${this.changeNull(this.results[i].lastName)} </span>&nbsp;
                <strong class='report-field-title'>เพศ
                </strong>&nbsp;&nbsp;
                  <span class='report-field-value text-info'>${this.changeNull(this.results[i].sex)} </span>&nbsp;
                <div>
                  <strong class='report-field-title'>หมู่บ้าน
                  </strong>&nbsp;&nbsp;
                    <span class='report-field-value text-info'>${this.changeNull(this.results[i].villagename)} </span>&nbsp;
                  <strong class='report-field-title'>ตำบล
                  </strong>&nbsp;&nbsp;
                    <span class='report-field-value text-info'>${this.changeNull(this.results[i].subdistrictname)} </span>&nbsp;
                  <strong class='report-field-title'>อำเภอ
                  </strong>&nbsp;&nbsp;
                    <span class='report-field-value text-info'>${this.changeNull(this.results[i].districtname)} </span>&nbsp;
                  <strong class='report-field-title'>จังหวัดที่เกิดเหตุ
                  </strong>&nbsp;&nbsp;
                    <span class='report-field-value text-info'>${this.changeNull(this.results[i].crimeSceneProvince)} </span>&nbsp;
                </div>
              </div>

            </div>
          </div> ${this.loadReportDetail()}`);
      }
      console.log(this.addressNarcoticOffenderPdf);
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

  formatDate(birthDate: any): string {

    const date = new Date(birthDate);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear() + 543;
    if (birthDate === 'null') {
    return '-';
    } else if (birthDate == null) {
    return '-';
    } else {
    const thmonth = new Array('มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
        'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม');
    return `${day} ${thmonth[month]} ${year}`;
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
   * Getter $addressNarcoticOffenderPdf
   * @return {string[]}
   */
  public get $addressNarcoticOffenderPdf(): string[] {
    return this.addressNarcoticOffenderPdf;
  }

  /**
   * Getter $count
   * @return {number}
   */
  public get $count(): number {
    return this.count;
  }

  /**
   * Setter $addressNarcoticOffenderPdf
   * @param {string[]} value
   */
  public set $addressNarcoticOffenderPdf(value: string[]) {
    this.addressNarcoticOffenderPdf = value;
  }

  /**
   * Setter $count
   * @param {number} value
   */
  public set $count(value: number) {
    this.count = value;
  }

  /**
   * Getter $listLefts
   * @return {any[]}
   */
  public get $listLefts(): any[] {
    return this.listLefts;
  }

  /**
   * Getter $listAllegation
   * @return {any[]}
   */
  public get $listAllegation(): any[] {
    return this.listAllegation;
  }

  /**
   * Getter $allegationPdf
   * @return {string[]}
   */
  public get $allegationPdf(): string[] {
    return this.allegationPdf;
  }

  /**
   * Setter $listLefts
   * @param {any[]} value
   */
  public set $listLefts(value: any[]) {
    this.listLefts = value;
  }

  /**
   * Setter $listAllegation
   * @param {any[]} value
   */
  public set $listAllegation(value: any[]) {
    this.listAllegation = value;
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
   * @return {IDxc_Model_Oncb_NarcoticOffender[]}
   */
  public get $results(): IDxc_Model_Oncb_NarcoticOffender[] {
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
   * Getter $allegation
   * @return {string}
   */
  public get $allegation(): string {
    return this.allegation;
  }

  /**
   * Getter $narcoticName
   * @return {string}
   */
  public get $narcoticName(): string {
    return this.narcoticName;
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
   * @param {IDxc_Model_Oncb_NarcoticOffender[]} value
   */
  public set $results(value: IDxc_Model_Oncb_NarcoticOffender[]) {
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
   * Setter $allegation
   * @param {string} value
   */
  public set $allegation(value: string) {
    this.allegation = value;
  }

  /**
   * Setter $narcoticName
   * @param {string} value
   */
  public set $narcoticName(value: string) {
    this.narcoticName = value;
  }

  /**
   * Setter $util
   * @param {Utils} value
   */
  public set $util(value: Utils) {
    this.util = value;
  }

}
