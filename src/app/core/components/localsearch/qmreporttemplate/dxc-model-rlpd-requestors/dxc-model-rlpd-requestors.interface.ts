import { Dxc_Model_Rlpd_Requestors } from "../../../../shared/models/Dxc_Model_Rlpd_Requestors";
import * as moment from 'moment';
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
export interface IReportRlpdRequestors {
  model: Dxc_Model_Rlpd_Requestors
}

@Injectable()
export class RlpdRequestorsMetadata {
  reportName: string;
  reportOfTime: string;
  reportOfDate: string;
  private results: Dxc_Model_Rlpd_Requestors[];
  private obj: string;
  private show: boolean;
  private countResults: number;
  private normalPdf: string[];
  private addressRequestorsPdf: string[];
  private count: number;
  private normalPdfCount: string;
  html: string;
  private resultsCareer: Dxc_Model_Rlpd_Requestors[];
  private objCareer: string;
  private countCareer: number;
  private showCareer: boolean;
  private resultsContact: Dxc_Model_Rlpd_Requestors[];
  private countContact: number;
  private objContact: string;
  private showContact: boolean;

  constructor() {
    this.results = [];
    this.normalPdf = [];
    this.addressRequestorsPdf = [];
    this.count = 0;
    this.normalPdfCount = '';
    //Contact
    this.resultsContact = [];
    this.countContact = 0;
  }
  public getHtml(selectData: Dxc_Model_Rlpd_Requestors, title: string) {

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
            <table class="table" border="2px" width="100%">
            <tr>
                <td align="center">${title}</td>
            </tr>
              </table>
              <br />
              <br />
              <div class="ml-3">
                  <div class="row">
                    <div class="col-3"></div>
                    <div class="col-3"></div>
                    <div class="col-3">
                      <p class="text-white font-20">รหัสคดี</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20" >${selectData.caseId}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <p class="text-white font-20"><u>ข้อมูลผู้ร้องทุกข์</u></p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                    </div>
                    <div class="col-3">
                      <a class="text-success font-20" id="clickRlpdRequestors" type="button">
                        ${selectData.personNationalIdentificationId}<i class="material-icons">link</i></a>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <p class="text-white font-20">ชื่อผู้ร้อง</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.personGivenName} ${selectData.personSurName}</p>
                    </div>
                    <div class="col-3">
                      <p class="text-white font-20">เพศ</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.personSex}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <p class="text-white font-20">วันเกิด</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.personBirthDate}</p>
                    </div>
                    <div class="col-3">
                      <p class="text-white font-20">อายุ</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.personAge}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <p class="text-white font-20">ศาสนา</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.personReligionText}</p>
                    </div>
                    <div class="col-3">
                      <p class="text-white font-20">สัญชาติ</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.personNationalityText}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <p class="text-white font-20">ระดับการศึกษา</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.personEducationLevelText}</p>
                    </div>
                    <div class="col-3">
                      <p class="text-white font-20">อาชีพ</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.personOccupationText}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <p class="text-white font-20">ที่อยู่</p>
                    </div>
                    <div class="col-9">
                      <p class="text-success font-20">${selectData.personAddressFullText}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <p class="text-white font-20">ชื่อเรื่อง/ชื่อคดี</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.caseName}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <p class="text-white font-20">วันที่รับเรื่อง</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.entryDate}</p>
                    </div>
                    <div class="col-3">
                      <p class="text-white font-20">ปีขึ้นทะเบียน</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.year}</p>
                    </div>
                  </div>
                </div>
              </div>
          </body>
      </html>`;

  }
  public viewgetHtml(selectData: Dxc_Model_Rlpd_Requestors, title: string) {

    return this.html = `<html>
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
          <script>
            $(document).ready(function() {
              $('#confirmRlpdRequestors').click(function(){
                $('#rlpdRequestors').modal('toggle');
                $('#rlpdRequestors').on('hidden.bs.modal', function () {
                  $('body').addClass('modal-open');
                }); 
              });
              $('#close').click(function(){
                $('#rlpdRequestors').modal('toggle');
                $('#rlpdRequestors').on('hidden.bs.modal', function () {
                  $('body').addClass('modal-open');
                });  
              });
              $('#closeRlpdRequestors').click(function(){
                $('#rlpdRequestors').modal('toggle');
                $('#rlpdRequestors').on('hidden.bs.modal', function () {
                  $('body').addClass('modal-open');
                });  
              });
              $("#rlpdRequestors").modal({
                show: false,
                backdrop: 'static'
              });
              $("#clickRlpdRequestors").click(function() {
              $("#rlpdRequestors").modal("show");             
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
                <br />
                <div class="ml-3">
                  <div class="row">
                    <div class="col-3"></div>
                    <div class="col-3"></div>
                    <div class="col-3">
                      <p class="text-white font-20">รหัสคดี</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20" >${selectData.caseId}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <p class="text-white font-20"><u>ข้อมูลผู้ร้องทุกข์</u></p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                    </div>
                    <div class="col-3">
                      <a class="text-success font-20" id="clickRlpdRequestors" type="button">
                        ${selectData.personNationalIdentificationId}<i class="material-icons">link</i></a>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <p class="text-white font-20">ชื่อผู้ร้อง</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.personGivenName} ${selectData.personSurName}</p>
                    </div>
                    <div class="col-3">
                      <p class="text-white font-20">เพศ</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.personSex}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <p class="text-white font-20">วันเกิด</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.personBirthDate}</p>
                    </div>
                    <div class="col-3">
                      <p class="text-white font-20">อายุ</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.personAge}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <p class="text-white font-20">ศาสนา</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.personReligionText}</p>
                    </div>
                    <div class="col-3">
                      <p class="text-white font-20">สัญชาติ</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.personNationalityText}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <p class="text-white font-20">ระดับการศึกษา</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.personEducationLevelText}</p>
                    </div>
                    <div class="col-3">
                      <p class="text-white font-20">อาชีพ</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.personOccupationText}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <p class="text-white font-20">ที่อยู่</p>
                    </div>
                    <div class="col-9">
                      <p class="text-success font-20">${selectData.personAddressFullText}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <p class="text-white font-20">ชื่อเรื่อง/ชื่อคดี</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.caseName}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <p class="text-white font-20">วันที่รับเรื่อง</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.entryDate}</p>
                    </div>
                    <div class="col-3">
                      <p class="text-white font-20">ปีขึ้นทะเบียน</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.year}</p>
                    </div>
                  </div>
                </div>
            </div>
        </body>
        <div id="rlpdRequestors" class="modal fade" tabindex="-1" data-backdrop="static" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title text-white" id="exampleModalLongTitle">ยืนยันการค้นหา</h4>
                <button type="button" class="close" id="close">×</button>
              </div>
              <div class="modal-body font-20 text-white text-center">
                คุณต้องการเปิดรายงาน Single Report ของ <br>
                หมายเลขบัตรประชาชนนี้ ${selectData.personNationalIdentificationId} ใช่หรือไม่
              </div>
              <div class="modal-footer">
                <button type="button" id="closeRlpdRequestors" class="btn btn-danger">ยกเลิก</button>
                <a id="confirmRlpdRequestors" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.personNationalIdentificationId}/0/0/0/0/0">ตกลง</a>				
              </div>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </html>`;

  }

  public viewgetHtmlSingleReport(selectData: Dxc_Model_Rlpd_Requestors, title: string) {

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
                <br />
                <div class="ml-3">
                  <div class="row">
                    <div class="col-3"></div>
                    <div class="col-3"></div>
                    <div class="col-3">
                      <p class="text-white font-20">รหัสคดี</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20" >${selectData.caseId}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <p class="text-white font-20"><u>ข้อมูลผู้ร้องทุกข์</u></p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                    </div>
                    <div class="col-3 text-success font-20">
                      ${selectData.personNationalIdentificationId}
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <p class="text-white font-20">ชื่อผู้ร้อง</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.personGivenName} ${selectData.personSurName}</p>
                    </div>
                    <div class="col-3">
                      <p class="text-white font-20">เพศ</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.personSex}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <p class="text-white font-20">วันเกิด</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.personBirthDate}</p>
                    </div>
                    <div class="col-3">
                      <p class="text-white font-20">อายุ</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.personAge}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <p class="text-white font-20">ศาสนา</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.personReligionText}</p>
                    </div>
                    <div class="col-3">
                      <p class="text-white font-20">สัญชาติ</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.personNationalityText}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <p class="text-white font-20">ระดับการศึกษา</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.personEducationLevelText}</p>
                    </div>
                    <div class="col-3">
                      <p class="text-white font-20">อาชีพ</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.personOccupationText}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <p class="text-white font-20">ที่อยู่</p>
                    </div>
                    <div class="col-9">
                      <p class="text-success font-20">${selectData.personAddressFullText}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <p class="text-white font-20">ชื่อเรื่อง/ชื่อคดี</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.caseName}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <p class="text-white font-20">วันที่รับเรื่อง</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.entryDate}</p>
                    </div>
                    <div class="col-3">
                      <p class="text-white font-20">ปีขึ้นทะเบียน</p>
                    </div>
                    <div class="col-3">
                      <p class="text-success font-20">${selectData.year}</p>
                    </div>
                  </div>
                </div>
            </div>
        </body>
    </html>`;

  }
  public getSearchData() {
    //const schema = environment.qm.sub[0]['rlpd'].sub[0]['requestors'].schema;
    const schema = 'rlpd-requestors';
    if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {
    } else {
      this.show = true;
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length; // นับจำนวนรายการ
    }
  }

  public getSearchDataCareer() {
    //const schema = environment.qm.sub[0]['rlpd'].sub[0]['requestors'].schema;
    const schema = 'rlpd-requestors';
    if (localStorage.getItem(schema + '-career-Results') === '[]' || localStorage.getItem(schema + '-career-Results') === null) {
    } else {
      this.showCareer = true;
      this.objCareer = localStorage.getItem(schema + '-career-Results');
      this.resultsCareer = JSON.parse(this.objCareer);
      this.countCareer = this.resultsCareer.length; // นับจำนวนรายการ
    }
  }

  public getSearchDataContact() {
    const schema = 'rlpd-requestors';
      if (
        localStorage.getItem(schema + '-contact-Results') === '[]' ||
        localStorage.getItem(schema + '-contact-Results') === null
      ) {
        console.log('7.1');
      } else {
        this.showContact = true;
        this.objContact = localStorage.getItem(schema + '-contact-Results');
        this.resultsContact = JSON.parse(this.objContact);
        this.countContact = this.resultsContact.length; // นับจำนวนรายการ
      }
}

  public getnormalPdf() {
    const schema = environment.qm.sub[0]['rlpd'].sub[0]['requestors'].schema;
    //const schema = 'rlpd-requestors';
    if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {
      this.normalPdf = [];
      console.log('1.1');
    } else {
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length; // นับจำนวนรายการ
 
      if (this.count !== undefined) {
        // PDF ค้นด้วยเลขบัตร
        this.normalPdfCount = `<div class="col-md-11"
          class="row card singlereport-timeline-item list-normal-design-head-collapse">
          <span class="list-normal-design-underline depart">กรมคุ้มครองสิทธิและเสรีภาพ: </span>
          <span class="list-normal-design-underline departdata">ผู้ร้องทุกข์</span>
          <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ</span>
        </div>`
        this.loadReportDetail();
        for (let i = 0; i < this.results.length; i++) {
          this.normalPdf.push(`<div class="col-md-11">
            <div class="section-criminal-results" style="text-indent:25px;
              font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
              <span class="list-normal-design-underline depart">ผู้ร้องทุกข์</span>
              <div style="padding-left:15px;">
                <strong class="report-field-title">ชื่อ</strong>&nbsp;&nbsp;
                <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].personGivenName)} ${this.changeNull(this.results[i].personSurName)}</span>&nbsp;&nbsp;
                <strong class="report-field-title">วันที่รับเรื่อง</strong>&nbsp;&nbsp;
                <span class="report-field-value" style="text-decoration:underline">${this.formatDate(this.results[i].entryDate)}</span>&nbsp;&nbsp;
                <strong class="report-field-title">ชื่อเรื่อง</strong>&nbsp;&nbsp;
                <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].caseName)}</span>&nbsp;&nbsp;
                <strong class="report-field-title">หน่วยงานเจ้าของคดี</strong>&nbsp;&nbsp;
                <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].departmentName)}</span>&nbsp;&nbsp;
              </div>
            </div>
          </div>${this.loadReportDetail()}`);
          console.log('rlpd.allegation: ' + this.normalPdf[i])
        }
      } else {
        // PDF ค้นด้วยชื่อ-สกุล
        const results = JSON.parse(this.obj);
        this.normalPdfCount = `<div class="col-md-11"
          class="row card singlereport-timeline-item list-normal-design-head-collapse">
          <span class="list-normal-design-underline depart">กรมคุ้มครองสิทธิและเสรีภาพ: </span>
          <span class="list-normal-design-underline departdata">ผู้ร้องทุกข์</span>
        </div>`
        this.loadReportDetail();
        this.normalPdf.push(`<div class="col-md-11">
          <div class="section-criminal-results" style="text-indent:25px;
            font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
            <span class="list-normal-design-underline depart">ผู้ร้องทุกข์</span>
            <div style="padding-left:15px;">
              <strong class="report-field-title">ชื่อ</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">${this.changeNull(results.personGivenName)} ${this.changeNull(results.personSurName)}</span>&nbsp;&nbsp;
              <strong class="report-field-title">วันที่รับเรื่อง</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">${this.formatDate(results.entryDate)}</span>&nbsp;&nbsp;
              <strong class="report-field-title">ชื่อเรื่อง</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">${this.changeNull(results.caseName)}</span>&nbsp;&nbsp;
              <strong class="report-field-title">หน่วยงานเจ้าของคดี</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">${this.changeNull(results.departmentName)}</span>&nbsp;&nbsp;
            </div>
          </div>
        </div>${this.loadReportDetail()}`);
        console.log('rlpd.allegation: ' + this.normalPdf)
      }
    }
  }
  public getAddressRequestorsPdf() {
    const schema = environment.qm.sub[0]['rlpd'].sub[0]['requestors'].schema;
    if (localStorage.getItem(schema + 'Results') === null) {
      this.addressRequestorsPdf = [];
      console.log('1.1');
    } else {
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      for (let i = 0; i < this.results.length; i++) {
        this.addressRequestorsPdf.push(`<div class="col-md-11">
              <div class="section-criminal-results"
              style="text-indent:25px; font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
              <span style="text-decoration:underline; color: #0070C0; font-weight: bold; " class="report-section-source-title">
              กรมคุมประพฤติ </span>
              <span style="text-decoration:underline; color: #C00000; font-weight: bold; font-style: italic;"
              class="report-section-data-title">(ผู้ถูกคุมประพฤติ)</span>
              <div style="padding-left:15px;">
              <strong class="report-field-title">เลขบัตรประชาชน</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline"> ${this.changeNull(this.results[i].personNationalIdentificationId)}
              </span>&nbsp;&nbsp;
              <strong class="report-field-title">ชื่อ</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline"> ${this.changeNull(this.results[i].personGivenName)}
              </span>&nbsp;&nbsp;
              <strong class="report-field-title">นามสกุล</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline"> ${this.changeNull(this.results[i].personSurName)}
              </span>&nbsp;&nbsp;
              <strong class="report-field-title">เพศ</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline"> ${this.changeNull(this.changeSex(this.results[i].personSex))}
              </span>&nbsp;&nbsp;
              <div style="padding-left:15px;">
              <strong class="report-field-title">เลขที่</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline"> ${this.changeNull(this.results[i].personAddressFullText)}
              </span>&nbsp;&nbsp;
              <strong class="report-field-title">อำเภอ</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline"> ${this.changeNull(this.results[i].personAddressAmphur)}
              </span>&nbsp;&nbsp;
              <strong class="report-field-title">จังหวัด</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline"> ${this.changeNull(this.results[i].personAddressProvince)}
              </span>&nbsp;&nbsp;
              <strong class="report-field-title">รหัสไปรษณีย์</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline"> ${this.changeNull(this.results[i].personAddressPostalCode)}
              </span>&nbsp;&nbsp;
              <strong class="report-field-title">เบอร์โทรศัพท์</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline"> ${this.changeNull(this.results[i].telephoneNumber)}
              </span>&nbsp;&nbsp;
              <strong class="report-field-title">วันที่บันทึกข้อมูล</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline"> ${this.formatDate(this.results[i].dataSubmitDate)}
              </span>&nbsp;&nbsp;
              </div>
              </div>
              </div>
              </div> ${this.loadReportDetail()}`);
      }
      console.log('1.2');
    }
  }
  formatDate(birthDate: string): string {

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
  public get $addressRequestorsPdf(): string[] {
    return this.addressRequestorsPdf;
  }

  /**
   * Setter $results
   * @param {string[]} value
   */
  public set $addressRequestorsPdf(value: string[]) {
    this.addressRequestorsPdf = value;
  }



  /**
   * Getter $results
   * @return {Dxc_Model_Rlpd_Requestors[]}
   */
  public get $results(): Dxc_Model_Rlpd_Requestors[] {
    return this.results;
  }

  /**
   * Setter $results
   * @param {Dxc_Model_Rlpd_Requestors[]} value
   */
  public set $results(value: Dxc_Model_Rlpd_Requestors[]) {
    this.results = value;
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

  public get $resultsCareer(): Dxc_Model_Rlpd_Requestors[] {
    return this.resultsCareer;
  }
  public set $resultsCareer(value: Dxc_Model_Rlpd_Requestors[]) {
      this.resultsCareer = value;
  }
  public get $objCareer(): string {
      return this.objCareer;
  }
  public set $objCareer(value: string) {
      this.objCareer = value;
  }
  public get $showCareer(): boolean {
      return this.showCareer;
  }
  public set $showCareer(value: boolean) {
      this.showCareer = value;
  }
  public get $countCareer(): number {
      return this.countCareer;
  }
  public set $countCareer(value: number) {
      this.countCareer = value;
  }

  public get $resultsContact(): Dxc_Model_Rlpd_Requestors[] {
    return this.resultsContact;
  }
  public set $resultsContact(value: Dxc_Model_Rlpd_Requestors[]) {
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

