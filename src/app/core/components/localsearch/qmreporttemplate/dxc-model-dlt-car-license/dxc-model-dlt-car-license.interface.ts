import { IDxc_Model_Dlt_CarLicenseNew } from '../../../../shared/models/Dxc_Model_Dlt_CarLicenseNew';

import * as moment from 'moment';
import { Utils } from '../../../../shared/utils/Utils';
import { environment } from 'src/environments/environment';
import { Injectable } from "@angular/core";

export interface IReportDltCarLicense {
    model: IDxc_Model_Dlt_CarLicenseNew;
}

@Injectable()
export class DltCarLicenseMetadata {
    reportName: string;
    reportOfTime: string;
    reportOfDate: string;
    private results: IDxc_Model_Dlt_CarLicenseNew[];
    private obj: string;
    private show: boolean;
    private count: number;
    private normalPdf: string [];
    private normalPdfCount: string;

    private resultsContact: IDxc_Model_Dlt_CarLicenseNew[];
    private countContact: number;
    private objContact: string;
    private showContact: boolean;

    html: string;
    constructor() {
      this.results = [];
      this.count = 0;
      this.normalPdf = [];
      this.normalPdfCount = '';
      //Contact
      this.resultsContact = [];
      this.countContact = 0;
    }

    public getHtml(selectData: IDxc_Model_Dlt_CarLicenseNew, title: string) {

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
              <table class="table" border="2px" width="100%">
                  <tr>
                      <td align="center">ฐานข้อมูล${title}</td>
                  </tr>
              </table>
              <div class="ml-3">
                <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">วันจดทะเบียน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.regDate}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">เลขทะเบียน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.plate1} ${selectData.plate2}</p>
                        </div>
                  </div>
                  <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">จังหวัด</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.offLocDesc}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ประเภท</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.vehTypeDesc}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ยี่ห้อรถ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.brnDesc}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">แบบ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.modelName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">สี</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.carChkMasColorListText}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">เลขตัวรถ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.numBody}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">วันที่หมดอายุภาษี</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.expDate}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ยี่ห้อเครื่องยนต์</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.engBrnDesc}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขเครื่องยนต์</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.numEng}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">เชื้อเพลิง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.fuelDesc}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ลักษณะ/มาตรฐานรถ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.kindDesc}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">จำนวนซีซี</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.cc}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">รุ่นปี ค.ศ.</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.mfgYear}</p>
                        </div>
                    </div>
                    </br>
                    <div class="row">
                      <div class="col-6">
                          <p class="text-white font-20"><u>รายละเอียดผู้ถือกรรมสิทธิ์</u></p>
                      </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ผู้ถือกรรมสิทธิ์</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.owner1}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เจ้าของรถลำดับที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">-</p>
                        </div>
                    </div>
                    <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                      </div>
                      <div class="col-9">
                          <p class="text-success font-20">${selectData.docNo1}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">ที่อยู่</p>
                      </div>
                      <div class="col-9">
                          <p class="text-success font-20"> ${selectData.addressOwner1}</p>
                      </div>
                    </div>
                    </br>
                    <div class="row">
                        <div class="col-6">
                            <p class="text-white font-20"><u>รายละเอียดผู้ครอบครอง</u></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ผู้ครอบครอง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.owner2}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เจ้าของรถลำดับที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">-</p>
                        </div>
                    </div>
                    <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                      </div>
                      <div class="col-9">
                          <p class="text-success font-20">${selectData.docNo2}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">ที่อยู่</p>
                      </div>
                      <div class="col-9">
                          <p class="text-success font-20"> ${selectData.addressOwner2}</p>
                      </div>
                    </div>
              </div>
            </div>
        </body>
    </html>`;

    }
    public viewgetHtml(selectData: IDxc_Model_Dlt_CarLicenseNew, title: string) {

        return this.html = `<html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            <script>
            $(document).ready(function() {
              $('#confirmDltCarLicenseNew').click(function(){
                $('#dltCarLicenseNew').modal('toggle');
                $('#dltCarLicenseNew').on('hidden.bs.modal', function () {
                    $('body').addClass('modal-open');
                }); 
              });
              $('#close').click(function(){
                $('#dltCarLicenseNew').modal('toggle');  
                $('#dltCarLicenseNew').on('hidden.bs.modal', function () {
                    $('body').addClass('modal-open');
                });
              });
              $('#closeDopaMoiAliens').click(function(){
                $('#dltCarLicenseNew').modal('toggle');  
                $('#dltCarLicenseNew').on('hidden.bs.modal', function () {
                    $('body').addClass('modal-open');
                });
              });
              $("#dltCarLicenseNew").modal({
                show: false,
                backdrop: 'static'
              });
              $("#clickDltCarLicenseNewNo1").click(function() {
              $("#dltCarLicenseNew").modal("show");             
              });
            });
            </script>
            <script>
            $(document).ready(function() {
              $('#confirmDltCarLicenseNewNo2').click(function(){
                $('#dltCarLicenseNewNo2').modal('toggle');
                $('#dltCarLicenseNewNo2').on('hidden.bs.modal', function () {
                    $('body').addClass('modal-open');
                }); 
              });
              $('#close').click(function(){
                $('#dltCarLicenseNewNo2').modal('toggle');  
                $('#dltCarLicenseNewNo2').on('hidden.bs.modal', function () {
                    $('body').addClass('modal-open');
                });
              });
              $('#closeDopaMoiAliens').click(function(){
                $('#dltCarLicenseNewNo2').modal('toggle');  
                $('#dltCarLicenseNewNo2').on('hidden.bs.modal', function () {
                    $('body').addClass('modal-open');
                });
              });
              $("#dltCarLicenseNewNo2").modal({
                show: false,
                backdrop: 'static'
              });
              $("#clickDltCarLicenseNewNo2").click(function() {
              $("#dltCarLicenseNewNo2").modal("show");             
              });
            });
            </script>
        </head>

        <body>
            <div>
                <table class="table" border="2px" width="100%">
                    <tr>
                      <td align="center" class="text-white font-20">ฐานข้อมูล${title}</td>
                    </tr>
                </table>
                <br /><br />
                <div class="ml-3">
                  <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">วันจดทะเบียน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.regDate}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">เลขทะเบียน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.plate1} ${selectData.plate2}</p>
                        </div>
                  </div>
                  <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">จังหวัด</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.offLocDesc}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ประเภท</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.vehTypeDesc}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ยี่ห้อรถ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.brnDesc}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">แบบ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.modelName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">สี</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.carChkMasColorListText}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">เลขตัวรถ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.numBody}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">วันที่หมดอายุภาษี</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.expDate}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ยี่ห้อเครื่องยนต์</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.engBrnDesc}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขเครื่องยนต์</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.numEng}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">เชื้อเพลิง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.fuelDesc}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ลักษณะ/มาตรฐานรถ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.kindDesc}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">จำนวนซีซี</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.cc}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">รุ่นปี ค.ศ.</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.mfgYear}</p>
                        </div>
                    </div>
                    </br>
                    <div class="row">
                      <div class="col-6">
                          <p class="text-white font-20"><u>รายละเอียดผู้ถือกรรมสิทธิ์</u></p>
                      </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ผู้ถือกรรมสิทธิ์</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.owner1}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เจ้าของรถลำดับที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">-</p>
                        </div>
                    </div>
                    <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                      </div>
                      <div class="col-9">
                          <p class="text-success font-20">
                            <a class="text-success font-20" id="clickDltCarLicenseNewNo2" type="button">
                              ${selectData.docNo1}<i class="material-icons">link</i></a></p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">ที่อยู่</p>
                      </div>
                      <div class="col-9">
                          <p class="text-success font-20"> ${selectData.addressOwner1}</p>
                      </div>
                    </div>
                    </br>
                    <div class="row">
                        <div class="col-6">
                            <p class="text-white font-20"><u>รายละเอียดผู้ครอบครอง</u></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ผู้ครอบครอง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.owner2}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เจ้าของรถลำดับที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">-</p>
                        </div>
                    </div>
                    <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                      </div>
                      <div class="col-9">
                          <p class="text-success font-20">
                            <a class="text-success font-20" id="clickDltCarLicenseNewNo1" type="button">${selectData.docNo2}
                              <i class="material-icons">link</i></a>
                          </p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">ที่อยู่</p>
                      </div>
                      <div class="col-9">
                          <p class="text-success font-20"> ${selectData.addressOwner2}</p>
                      </div>
                    </div>
                </div>
            </div>
        </body>
        <div id="dltCarLicenseNew" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title text-white" id="exampleModalLongTitle">ยืนยันการค้นหา</h4>
                <button type="button" class="close" id="close">×</button>
              </div>
              <div class="modal-body font-20 text-white text-center">
                คุณต้องการเปิดรายงาน Single Report ของ <br>
                หมายเลขบัตรประชาชนนี้ ${selectData.docNo1} ใช่หรือไม่
              </div>
              <div class="modal-footer">
                <button type="button" id="closeDltCarLicenseNew" class="btn btn-danger">ยกเลิก</button>
                <a id="confirmDltCarLicenseNew" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.docNo1}/0/0/0/0/0">ตกลง</a>				
              </div>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
        <div id="dltCarLicenseNewNo2" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title text-white" id="exampleModalLongTitle">ยืนยันการค้นหา</h4>
              <button type="button" class="close" id="closeNo2">×</button>
            </div>
            <div class="modal-body font-20 text-white text-center">
              คุณต้องการเปิดรายงาน Single Report ของ <br>
              หมายเลขบัตรประชาชนนี้ ${selectData.docNo2} ใช่หรือไม่
            </div>
            <div class="modal-footer">
              <button type="button" id="closeDltCarLicenseNewNo2" class="btn btn-danger">ยกเลิก</button>
              <a id="confirmDltCarLicenseNewNo2" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.docNo2}/0/0/0/0/0">ตกลง</a>				
            </div>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </html>`;
    }

    // public viewgetHtmlSingleReport(selectData: IDxc_Model_Dlt_CarLicenseNew, title: string) {

    //     return this.html = `<html>
    //     <head>
    //         <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    //     </head>

    //     <body>
    //         <div>
    //             <table class="table" border="2px" width="100%">
    //                 <tr>
    //                   <td align="center" class="text-white font-20">ฐานข้อมูล${title}</td>
    //                 </tr>
    //             </table>
    //             <br /><br />
    //             <div class="ml-3">
    //               <div class="row">
    //                     <div class="col-3">
    //                         <p class="text-white font-20">วันจดทะเบียน</p>
    //                     </div>
    //                     <div class="col-3">
    //                         <p class="text-success font-20">${selectData.regDate}</p>
    //                     </div>
    //                     <div class="col-3">
    //                         <p class="text-white font-20">เลขทะเบียน</p>
    //                     </div>
    //                     <div class="col-3">
    //                         <p class="text-success font-20">${selectData.plate1} ${selectData.plate2}</p>
    //                     </div>
    //               </div>
    //               <div class="row">
    //                     <div class="col-3">
    //                         <p class="text-white font-20">จังหวัด</p>
    //                     </div>
    //                     <div class="col-3">
    //                         <p class="text-success font-20">${selectData.offLocDesc}</p>
    //                     </div>
    //                     <div class="col-3">
    //                         <p class="text-white font-20">ประเภท</p>
    //                     </div>
    //                     <div class="col-3">
    //                         <p class="text-success font-20">${selectData.vehTypeDesc}</p>
    //                     </div>
    //                 </div>
    //                 <div class="row">
    //                     <div class="col-3">
    //                         <p class="text-white font-20">ยี่ห้อรถ</p>
    //                     </div>
    //                     <div class="col-3">
    //                         <p class="text-success font-20">${selectData.brnDesc}</p>
    //                     </div>
    //                     <div class="col-3">
    //                         <p class="text-white font-20">แบบ</p>
    //                     </div>
    //                     <div class="col-3">
    //                         <p class="text-success font-20">${selectData.modelName}</p>
    //                     </div>
    //                 </div>
    //                 <div class="row">
    //                     <div class="col-3">
    //                         <p class="text-white font-20">สี</p>
    //                     </div>
    //                     <div class="col-3">
    //                         <p class="text-success font-20">${selectData.carChkMasColorListText}</p>
    //                     </div>
    //                     <div class="col-3">
    //                         <p class="text-white font-20">เลขตัวรถ</p>
    //                     </div>
    //                     <div class="col-3">
    //                         <p class="text-success font-20">${selectData.numBody}</p>
    //                     </div>
    //                 </div>
    //                 <div class="row">
    //                     <div class="col-3">
    //                         <p class="text-white font-20">วันที่หมดอายุภาษี</p>
    //                     </div>
    //                     <div class="col-3">
    //                         <p class="text-success font-20">${selectData.expDate}</p>
    //                     </div>
    //                     <div class="col-3">
    //                         <p class="text-white font-20">ยี่ห้อเครื่องยนต์</p>
    //                     </div>
    //                     <div class="col-3">
    //                         <p class="text-success font-20">${selectData.engBrnDesc}</p>
    //                     </div>
    //                 </div>
    //                 <div class="row">
    //                     <div class="col-3">
    //                         <p class="text-white font-20">เลขเครื่องยนต์</p>
    //                     </div>
    //                     <div class="col-3">
    //                         <p class="text-success font-20">${selectData.numEng}</p>
    //                     </div>
    //                 </div>
    //                 </br>
    //                 <div class="row">
    //                     <div class="col-3">
    //                         <p class="text-white font-20"><u>เจ้าของ/ผู้ครอบครอง</u></p>
    //                     </div>
    //                 </div>
    //                 <div class="row">
    //                     <div class="col-3">
    //                         <p class="text-white font-20">เจ้าของรถลำดับที่</p>
    //                     </div>
    //                     <div class="col-3">
    //                         <p class="text-success font-20">-</p>
    //                     </div>
    //                 </div>
    //                 <div class="row">
    //                   <div class="col-3">
    //                       <p class="text-white font-20">เลขประจำตัวประชาชน</p>
    //                   </div>
    //                   <div class="col-9">
    //                       <p class="text-success font-20">${selectData.docNo1}</p>
    //                   </div>
    //                 </div>
    //                 <div class="row">
    //                   <div class="col-3">
    //                       <p class="text-white font-20">ที่อยู่</p>
    //                   </div>
    //                   <div class="col-9">
    //                       <p class="text-success font-20"> ${selectData.addressOwner1}</p>
    //                   </div>
    //                 </div>
    //                 </br>
    //                 <div class="row">
    //                     <div class="col-3">
    //                         <p class="text-white font-20">เจ้าของรถลำดับที่</p>
    //                     </div>
    //                     <div class="col-3">
    //                         <p class="text-success font-20">-</p>
    //                     </div>
    //                 </div>
    //                 <div class="row">
    //                   <div class="col-3">
    //                       <p class="text-white font-20">เลขประจำตัวประชาชน</p>
    //                   </div>
    //                   <div class="col-9">
    //                       <p class="text-success font-20">${selectData.docNo2}</p>
    //                   </div>
    //                 </div>
    //                 <div class="row">
    //                   <div class="col-3">
    //                       <p class="text-white font-20">ที่อยู่</p>
    //                   </div>
    //                   <div class="col-9">
    //                       <p class="text-success font-20"> ${selectData.addressOwner2}</p>
    //                   </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </body>
    // </html>`;
    // }
    // เช็ค รับข้อมูลการค้นหา
    public getSearchData() {
        // มาจาก env
        // const schema = environment.qm.sub[0]['dlt'].sub[0]['driverLicense'].schema;
        const schema = 'dlt-car-license-new';
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
        }
    }

    public getSearchDataContact() {
      const schema = 'dlt-car-license-new';
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

    // เช็ค PDF ประวัติทั่วไป (Single Report)
    public getnormalPdf() {
          // const schema = environment.qm.sub[0]['dlt'].sub[0]['CarLicense'].schema; // เปิดตอน เปิด environment
          const schema = 'dlt-car-license-new'; // เปิดใช้ตอน ปิด environment
          if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {

              this.normalPdf = []; // dlt
              console.log('3.1');
          } else {
              this.obj = localStorage.getItem(schema + 'Results');
              this.results = JSON.parse(this.obj);
              this.loadReportDetail();
              for (let i = 0; i < this.results.length; i++) {
                  this.normalPdf.push(
                    `<div class="col-md-11">
                    <div class="section-criminal-results"
                    style="text-indent:25px;font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
                    <span class="list-normal-design-underline depart">ทะเบียนยานพาหนะ</span>
                    <div style="padding-left:15px;">
                      <strong class="report-field-title">ทะเบียน</strong>&nbsp;&nbsp;
                      <span class="report-field-value" style="text-decoration:underline">
                      ${this.changeNull(this.results[i].plate1)}
                      ${this.changeNull(this.results[i].plate2)}
                      </span>&nbsp;&nbsp;
                      <strong class="report-field-title">ยี่ห้อ</strong>&nbsp;&nbsp;
                      <span class="report-field-value" style="text-decoration:underline">
                      ${this.changeNull(this.results[i].brnDesc)}</span>&nbsp;&nbsp;
                      <strong class="report-field-title">เลขเครื่อง</strong>&nbsp;&nbsp;
                      <span class="report-field-value" style="text-decoration:underline">
                      ${this.changeNull(this.results[i].numEng)}</span>&nbsp;&nbsp;
                      <strong class="report-field-title">เลขตัวถัง</strong>&nbsp;&nbsp;
                      <span class="report-field-value" style="text-decoration:underline">
                      ${this.changeNull(this.results[i].numBody)}</span>&nbsp;&nbsp;
                      <strong class="report-field-title">ผู้ครอบครอง</strong>&nbsp;&nbsp;
                      <span class="report-field-value" style="text-decoration:underline">
                      ${this.changeNull(this.results[i].owner2)}</span>&nbsp;&nbsp;
                      <strong class="report-field-title">เลขประจำตัวประชาชน</strong>&nbsp;&nbsp;
                      <span class="report-field-value" style="text-decoration:underline">
                      ${this.changeNull(this.results[i].docNo1)}</span>&nbsp;&nbsp;
                      <strong class="report-field-title">ที่อยู่ผู้ครอบครอง</strong>&nbsp;&nbsp;
                      <span class="report-field-value" style="text-decoration:underline">
                      ${this.changeNull(this.results[i].addressOwner2)}</span>&nbsp;&nbsp;
                    </div>
                  </div>
                  </div>${this.loadReportDetail()}`);
                  console.log('DJOP.allegation' + this.normalPdf[i]);
              }
              console.log('3.2');
          }
    }
    // ลายน้ำ
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
    // เช็คค่าว่างของข้อมูล
    public changeNull(selectData: string) {
      if (selectData == null || selectData == undefined) {
          return '-';
      } else {
          return selectData;
      }
    }

    /**
     * Getter $results
     * @return {IDxc_Model_Dlt_CarLicenseNew[]}
     */
    public get $results(): IDxc_Model_Dlt_CarLicenseNew[] {
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
     * Getter $count
     * @return {number}
     */
    public get $count(): number {
      return this.count;
    }

    /**
     * Getter $normalPdf
     * @return {string []}
     */
    public get $normalPdf(): string [] {
      return this.normalPdf;
    }

    /**
     * Getter $normalPdfCount
     * @return {string}
     */
    public get $normalPdfCount(): string {
      return this.normalPdfCount;
    }

    /**
     * Setter $results
     * @param {IDxc_Model_Dlt_CarLicenseNew[]} value
     */
    public set $results(value: IDxc_Model_Dlt_CarLicenseNew[]) {
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
     * Setter $count
     * @param {number} value
     */
    public set $count(value: number) {
      this.count = value;
    }

    /**
     * Setter $normalPdf
     * @param {string []} value
     */
    public set $normalPdf(value: string []) {
      this.normalPdf = value;
    }

    /**
     * Setter $normalPdfCount
     * @param {string} value
     */
    public set $normalPdfCount(value: string) {
      this.normalPdfCount = value;
    }

    public get $resultsContact(): IDxc_Model_Dlt_CarLicenseNew[] {
      return this.resultsContact;
    }
    public set $resultsContact(value: IDxc_Model_Dlt_CarLicenseNew[]) {
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
