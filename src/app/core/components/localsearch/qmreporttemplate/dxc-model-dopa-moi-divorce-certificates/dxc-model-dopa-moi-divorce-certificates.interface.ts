import { Dxc_Model_Dopa_Moi_Divorce_Certificates } from "../../../../shared/models/Dxc_Model_Dopa_Moi_Divorce_Certificates";
import * as moment from 'moment';
import { Injectable } from "@angular/core";
export interface IReportDopaMoiDivorceCertificates {
  model: Dxc_Model_Dopa_Moi_Divorce_Certificates
}

@Injectable()
export class DopaMoiDivorceCertificatesMetadata {
  private results: Dxc_Model_Dopa_Moi_Divorce_Certificates[];
  private obj: string;
  private show: boolean;
  private count: number;
  private normalPdf: string [];
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
  public getHtml(selectData: Dxc_Model_Dopa_Moi_Divorce_Certificates, title: string) {

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
                <td class="text-white font-20" align="center">${title}</td>
              </tr>
            </table>
            <div class="ml-3">
              <div class="row">
                <div class="col-3"></div>
                <div class="col-3"></div>
                <div class="col-3">
                  <p class="text-white font-20">เลขทะเบียนจดทะเบียนการหย่า</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.divorceID}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3"></div>
                <div class="col-3"></div>
                <div class="col-3">
                  <p class="text-white font-20">วันเดือนปีที่จดทะเบียนการหย่า</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.divorceDate}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                    <p class="text-white font-20"><u>ข้อมูลฝ่ายชาย</u></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">เลขประจำตัวประชาชนฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">
                    <a target="_blank" class="text-success font-20" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.malePID}/0/0/0/0/0">
                    ${selectData.malePID}<i class="material-icons"></i></a>
                  </p>
                </div>
                <div class="col-3"></div>
                <div class="col-3"></div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">คำนำหน้านามฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.maleTitleDesc}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ชื่อเต็มฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.maleFullnameAndRank}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">ชื่อตัวของฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.maleFirstName}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ชื่อสกุลของฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.maleLastName}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">ชื่อกลาง ฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.maleMiddleName}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">สัญชาติของฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.maleNationalityDesc}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">เลขที่เอกสารอื่น ๆ ของฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.maleOtherDocID}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">อายุฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.maleAge}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">วันเดือนปีเกิดของฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.maleDateOfBirth}</p>
                </div>
                <div class="col-3"></div>
                <div class="col-3"></div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20"><u>ข้อมูลฝ่ายหญิง</u></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">เลขประจำตัวประชาชนฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">
                    <a target="_blank" class="text-success font-20" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.malePID}/0/0/0/0/0">
                    ${selectData.femalePID}<i class="material-icons"></i></a>
                  </p>
                </div>
                <div class="col-3"></div>
                <div class="col-3"></div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">คำนำหน้านามฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.femaleTitleDesc}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ชื่อเต็มฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.femaleFullnameAndRank}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">ชื่อตัวของฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.femaleFirstName}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ชื่อสกุลของฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.femaleLastName}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">ชื่อกลาง ฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.femaleMiddleName}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">สัญชาติของฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.femaleNationalityDesc}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">เลขที่เอกสารอื่น ๆ ของฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.femaleOtherDocID}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">อายุฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.femaleAge}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">วันเดือนปีเกิดของฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.femaleDateOfBirth}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20"><u>รายละเอียดการจดทะเบียนการหย่า</u></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">สนท.ที่จดทะเบียนการหย่า</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.divorcePlaceDesc}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">จังหวัดที่จดทะเบียนการหย่า</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.divorcePlaceProvince}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">เวลาจดทะเบียนการหย่า</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.divorceTime}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ประเภทของการการหย่า</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.divorceType}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20"><u>รายละเอียดการจดทะเบียนสมรส</u></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">เลขทะเบียนในการจดทะเบียนสมรส</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.marryID}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">วันเดือนปีที่จดทะเบียนสมรส</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.marryDate}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">สนท.ที่จดทะเบียนสมรส</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.marryPlaceDesc}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">จังหวัดที่จดทะเบียนสมรส</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.marryPlaceProvince}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">เวลาจดทะเบียนสมรส</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.marryTime}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ประเภทของการสมรส</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.marryType}</p>
                </div>
              </div>
            </div>
          </div>
      </body>
  </html> `;
  }

  public viewgetHtml(selectData: Dxc_Model_Dopa_Moi_Divorce_Certificates, title: string) {
    return this.html = `<html>
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
           <script>
            $(document).ready(function() {
              $('#confirmDopaMoiDivorceCertificates').click(function(){
                $('#dopaMoiDivorceCertificates').modal('toggle'); 
                $('#dopaMoiDivorceCertificates').on('hidden.bs.modal', function () {
                    $('body').addClass('modal-open');
                });
              });
              $('#close').click(function(){
                $('#dopaMoiDivorceCertificates').modal('toggle'); 
                $('#dopaMoiDivorceCertificates').on('hidden.bs.modal', function () {
                    $('body').addClass('modal-open');
                }); 
              });
              $('#closeDopaMoiDivorceCertificates').click(function(){
                $('#dopaMoiDivorceCertificates').modal('toggle');  
                $('#dopaMoiDivorceCertificates').on('hidden.bs.modal', function () {
                    $('body').addClass('modal-open');
                });
              });
              $("#dopaMoiDivorceCertificates").modal({
                show: false,
                backdrop: 'static'
              });
              $("#clickDopaMoiDivorceCertificatesMale").click(function() {
              $("#dopaMoiDivorceCertificates").modal("show");             
              });
            });
          </script>
          <script>
            $(document).ready(function() {
              $('#confirmDopaMoiDivorceCertificatesFemale').click(function(){
                $('#dopaMoiDivorceCertificatesFemale').modal('toggle');
                $('#dopaMoiDivorceCertificatesFemale').on('hidden.bs.modal', function () {
                    $('body').addClass('modal-open');
                }); 
              });
              $('#closeFemale').click(function(){
                $('#dopaMoiDivorceCertificatesFemale').modal('toggle');  
                $('#dopaMoiDivorceCertificatesFemale').on('hidden.bs.modal', function () {
                    $('body').addClass('modal-open');
                });
              });
              $('#closeDopaMoiDivorceCertificatesFemale').click(function(){
                $('#dopaMoiDivorceCertificatesFemale').modal('toggle');  
                $('#dopaMoiDivorceCertificatesFemale').on('hidden.bs.modal', function () {
                    $('body').addClass('modal-open');
                });
              });
              $("#dopaMoiDivorceCertificatesFemale").modal({
                show: false,
                backdrop: 'static'
              });
              $("#clickDopaMoiDivorceCertificatesFemale").click(function() {
              $("#dopaMoiDivorceCertificatesFemale").modal("show");             
              });
            });
          </script>
        </head>
        <body>
          <div>
            <table class="table" border="2px" width="100%">
              <tr>
                <td class="text-white font-20" align="center">${title}</td>
              </tr>
            </table>
            </br></br>
            <div class="ml-3">
              <div class="row">
                <div class="col-3"></div>
                <div class="col-3"></div>
                <div class="col-3">
                  <p class="text-white font-20">เลขทะเบียนจดทะเบียนการหย่า</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.divorceID}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3"></div>
                <div class="col-3"></div>
                <div class="col-3">
                  <p class="text-white font-20">วันเดือนปีที่จดทะเบียนการหย่า</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.divorceDate}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                    <p class="text-white font-20"><u>ข้อมูลฝ่ายชาย</u></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">เลขประจำตัวประชาชนฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">
                    <a id="clickDopaMoiDivorceCertificatesMale" type="button">
                    ${selectData.malePID}<i class="material-icons">link</i></a>
                  </p>
                </div>
                <div class="col-3"></div>
                <div class="col-3"></div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">คำนำหน้านามฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.maleTitleDesc}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ชื่อเต็มฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.maleFullnameAndRank}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">ชื่อตัวของฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.maleFirstName}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ชื่อสกุลของฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.maleLastName}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">ชื่อกลาง ฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.maleMiddleName}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">สัญชาติของฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.maleNationalityDesc}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">เลขที่เอกสารอื่น ๆ ของฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.maleOtherDocID}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">อายุฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.maleAge}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">วันเดือนปีเกิดของฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.maleDateOfBirth}</p>
                </div>
                <div class="col-3"></div>
                <div class="col-3"></div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20"><u>ข้อมูลฝ่ายหญิง</u></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">เลขประจำตัวประชาชนฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">
                    <a id="clickDopaMoiDivorceCertificatesFemale" type="button">
                    ${selectData.femalePID}<i class="material-icons">link</i></a>
                  </p>
                </div>
                <div class="col-3"></div>
                <div class="col-3"></div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">คำนำหน้านามฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.femaleTitleDesc}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ชื่อเต็มฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.femaleFullnameAndRank}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">ชื่อตัวของฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.femaleFirstName}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ชื่อสกุลของฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.femaleLastName}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">ชื่อกลาง ฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.femaleMiddleName}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">สัญชาติของฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.femaleNationalityDesc}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">เลขที่เอกสารอื่น ๆ ของฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.femaleOtherDocID}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">อายุฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.femaleAge}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">วันเดือนปีเกิดของฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.femaleDateOfBirth}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20"><u>รายละเอียดการจดทะเบียนการหย่า</u></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">สนท.ที่จดทะเบียนการหย่า</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.divorcePlaceDesc}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">จังหวัดที่จดทะเบียนการหย่า</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.divorcePlaceProvince}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">เวลาจดทะเบียนการหย่า</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.divorceTime}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ประเภทของการการหย่า</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.divorceType}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20"><u>รายละเอียดการจดทะเบียนสมรส</u></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">เลขทะเบียนในการจดทะเบียนสมรส</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.marryID}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">วันเดือนปีที่จดทะเบียนสมรส</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.marryDate}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">สนท.ที่จดทะเบียนสมรส</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.marryPlaceDesc}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">จังหวัดที่จดทะเบียนสมรส</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.marryPlaceProvince}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">เวลาจดทะเบียนสมรส</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.marryTime}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ประเภทของการสมรส</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.marryType}</p>
                </div>
              </div>
            </div>
          </div>
        </body>
        <div id="dopaMoiDivorceCertificates" class="modal fade" tabindex="-1" data-backdrop="static" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title text-white" id="exampleModalLongTitle">ยืนยันการค้นหา</h4>
                <button type="button" class="close" id="close">×</button>
              </div>
              <div class="modal-body font-20 text-white text-center">
                คุณต้องการเปิดรายงาน Single Report ของ <br>
                หมายเลขบัตรประชาชนนี้ ${selectData.malePID} ใช่หรือไม่
              </div>
              <div class="modal-footer">
                <button type="button" id="closeDopaMoiDivorceCertificates" class="btn btn-danger">ยกเลิก</button>
                <a id="confirmDopaMoiDivorceCertificates" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.malePID}/0/0/0/0/0">ตกลง</a>				
              </div>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
        <div id="dopaMoiDivorceCertificatesFemale" class="modal fade" tabindex="-1" data-backdrop="static" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title text-white" id="exampleModalLongTitle">ยืนยันการค้นหา</h4>
                <button type="button" class="close" id="closeFemale">×</button>
              </div>
              <div class="modal-body font-20 text-white text-center">
                คุณต้องการเปิดรายงาน Single Report ของ <br>
                หมายเลขบัตรประชาชนนี้ ${selectData.femalePID} ใช่หรือไม่
              </div>
              <div class="modal-footer">
                <button type="button" id="closeDopaMoiDivorceCertificatesFemale" class="btn btn-danger">ยกเลิก</button>
                <a id="confirmDopaMoiDivorceCertificatesFemale" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.femalePID}/0/0/0/0/0">ตกลง</a>				
              </div>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->

      </html>`;
  }

  public viewgetHtmlSingleReport(selectData: Dxc_Model_Dopa_Moi_Divorce_Certificates, title: string) {
    return this.html = `<html>
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        </head>
        <body>
          <div>
            <table class="table" border="2px" width="100%">
              <tr>
                <td class="text-white font-20" align="center">${title}</td>
              </tr>
            </table>
            </br></br>
            <div class="ml-3">
              <div class="row">
                <div class="col-3"></div>
                <div class="col-3"></div>
                <div class="col-3">
                  <p class="text-white font-20">เลขทะเบียนจดทะเบียนการหย่า</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.divorceID}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3"></div>
                <div class="col-3"></div>
                <div class="col-3">
                  <p class="text-white font-20">วันเดือนปีที่จดทะเบียนการหย่า</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.divorceDate}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                    <p class="text-white font-20"><u>ข้อมูลฝ่ายชาย</u></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">เลขประจำตัวประชาชนฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.malePID}</p>
                </div>
                <div class="col-3"></div>
                <div class="col-3"></div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">คำนำหน้านามฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.maleTitleDesc}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ชื่อเต็มฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.maleFullnameAndRank}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">ชื่อตัวของฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.maleFirstName}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ชื่อสกุลของฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.maleLastName}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">ชื่อกลาง ฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.maleMiddleName}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">สัญชาติของฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.maleNationalityDesc}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">เลขที่เอกสารอื่น ๆ ของฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.maleOtherDocID}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">อายุฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.maleAge}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">วันเดือนปีเกิดของฝ่ายชาย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.maleDateOfBirth}</p>
                </div>
                <div class="col-3"></div>
                <div class="col-3"></div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20"><u>ข้อมูลฝ่ายหญิง</u></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">เลขประจำตัวประชาชนฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.femalePID}</p>
                </div>
                <div class="col-3"></div>
                <div class="col-3"></div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">คำนำหน้านามฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.femaleTitleDesc}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ชื่อเต็มฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.femaleFullnameAndRank}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">ชื่อตัวของฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.femaleFirstName}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ชื่อสกุลของฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.femaleLastName}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">ชื่อกลาง ฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.femaleMiddleName}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">สัญชาติของฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.femaleNationalityDesc}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">เลขที่เอกสารอื่น ๆ ของฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.femaleOtherDocID}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">อายุฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.femaleAge}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">วันเดือนปีเกิดของฝ่ายหญิง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.femaleDateOfBirth}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20"><u>รายละเอียดการจดทะเบียนการหย่า</u></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">สนท.ที่จดทะเบียนการหย่า</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.divorcePlaceDesc}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">จังหวัดที่จดทะเบียนการหย่า</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.divorcePlaceProvince}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">เวลาจดทะเบียนการหย่า</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.divorceTime}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ประเภทของการการหย่า</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.divorceType}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20"><u>รายละเอียดการจดทะเบียนสมรส</u></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">เลขทะเบียนในการจดทะเบียนสมรส</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.marryID}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">วันเดือนปีที่จดทะเบียนสมรส</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.marryDate}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">สนท.ที่จดทะเบียนสมรส</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.marryPlaceDesc}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">จังหวัดที่จดทะเบียนสมรส</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.marryPlaceProvince}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">เวลาจดทะเบียนสมรส</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.marryTime}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ประเภทของการสมรส</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.marryType}</p>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>`;
  }
  public getSearchData() {
      const schema = 'dopa-moi-dopa-divorce-certificates';
      if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {
    
      } else {
      this.show = true;
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length;
      }
  }
  public getnormalPdf() {
    const schema = 'dopa-moi-dopa-divorce-certificates';

      if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {
        this.normalPdf = [];
      } else {
        this.obj = localStorage.getItem(schema + 'Results');
        this.results = JSON.parse(this.obj);
        this.count = this.results.length; // นับจำนวนรายการ
        this.normalPdfCount = `<div class="col-md-11"
        class="row card singlereport-timeline-item list-normal-design-head-collapse">
        <span class="list-normal-design-underline depart">กรมการปกครอง: </span>
        <span class="list-normal-design-underline departdata">ข้อมูลข้อมูลทะเบียนหย่า (Linkage) </span>
        <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ
        </span>
        </div>`;
        this.loadReportDetail();
        for (let i = 0; i < this.results.length; i++) {
          this.normalPdf.push(`
          <div class="col-md-11">
          <div class="section-criminal-results" style="text-indent:25px;
          font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
          <span class="list-normal-design-underline depart">ข้อมูลทะเบียนหย่า (Linkage)</span>
            <div style="padding-left:15px;">
                <strong class="report-field-title">ชื่อตัวฝ่ายชาย</strong>
                <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].maleFirstName)}</span>
                <strong class="report-field-title">ชื่อสกุลฝ่ายชาย</strong>
                <span class="report-field-value" style="text-decoration:underline"> ${this.changeNull(this.results[i].maleLastName)}</span>
                <strong class="report-field-title">ชื่อตัวฝ่ายหญิง</strong>
                <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].femaleFirstName)}</span>
                <strong class="report-field-title">ชื่อสกุลฝ่ายหญิง</strong>
                <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].femaleLastName)}</span>
                <strong class="report-field-title">วันเดือนปีที่จดทะเบียนหย่า</strong>
                <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].divorceTime)}</span>
                <strong class="report-field-title">สนท.ที่จดทะเบียนหย่า</strong>
                <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].divorcePlaceDesc)}</span>
                <strong class="report-field-title">จังหวัดที่จดทะเบียนหย่า</strong>
                <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].divorcePlaceProvince)}</span>
              </div>
          </div>
          </div>${this.loadReportDetail()}`); 
          console.log('DOPA.allegation' + this.normalPdf[i]);
        }
        console.log('4.2' + this.results[0]);
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
   * @return {Dxc_Model_Dopa_Moi_Divorce_Certificates[]}
   */
  public get $results(): Dxc_Model_Dopa_Moi_Divorce_Certificates[] {
    return this.results;
  }

  /**
   * Setter $results
   * @param {Dxc_Model_Dopa_Moi_Divorce_Certificates[]} value
   */
  public set $results(value: Dxc_Model_Dopa_Moi_Divorce_Certificates[]) {
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
  public get $count(): number {
    return this.count;
  }

  /**
   * Setter $countResults
   * @param {number} value
   */
  public set $count(value: number) {
    this.count = value;
  }

    /**
     * Getter $normalPdf
     * @return {string []}
     */
	public get $normalPdf(): string [] {
		return this.normalPdf;
	}

    /**
     * Setter $normalPdf
     * @param {string []} value
     */
	public set $normalPdf(value: string []) {
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
