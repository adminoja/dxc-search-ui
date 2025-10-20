import { Dxc_Model_Dopa_Moi_Persons, IDxc_Model_Dopa_Moi_Persons } from '../../../../shared/models/Dxc_Model_Dopa_Moi_Persons';
import { Utils } from '../../../../shared/utils/Utils';
import * as moment from 'moment';
import { environment } from '../../../../../../environments/environment';
import { count } from 'rxjs/operators';
import { Injectable } from "@angular/core";

export interface IReportDopaMoiPersons {
  model: IDxc_Model_Dopa_Moi_Persons;
}

@Injectable()
export class DopaMoiPersonsMetadata {
  private results: IDxc_Model_Dopa_Moi_Persons[];
  private obj: string;
  private show: boolean;
  private util: Utils;
  private listLefts: any[];
  private listAlgations: any[];
  private listNormals: any[];
  private listNormalPersons: any[];
  private count: number;
  private topPdf: string[];
  private normalPdf: string[];
  private normalPdfCount: string;
  reportName: string;
  reportOfTime: string;
  reportOfDate: string;

  html: string;
  constructor() {
    this.util = new Utils();
    this.listLefts = [];
    this.listAlgations = [];
    this.listNormals = [];
    this.listNormalPersons = [];
    this.results = [];
    this.topPdf = [];
    this.normalPdf = [];
    this.normalPdfCount = '';
    this.count = 0;

  }
  public getHtml(selectData: IDxc_Model_Dopa_Moi_Persons, title: string) {

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
            <table class='table' border='2px' width='100%'>
                <tr>
                    <td align='center' class="text-white font-20">ฐานข้อมูล${title}</td>
                </tr>
            </table>
              <div class="ml-3">
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">
                                <a target="_blank" class="text-success font-20" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.citizenCardNumber}/0/0/0/0/0">
                                ${selectData.citizenCardNumber}<i class="material-icons"></i></a>
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">คำนำหน้านาม</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.titleDesc}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">คำนำหน้านามแบบเต็ม</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.titleName}</p>
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
                            <p class="text-white font-20">วันเดือนปี เกิด</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.dateOfBirth}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">อายุ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.age}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">เพศ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.genderDesc}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">สัญชาติ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.nationalityDesc}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">รหัสสถานะภาพบุคคล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.statusOfPersonDesc}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">สถานะภาพเจ้าบ้าน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.ownerStatusDesc}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">วันที่ย้ายเข้า</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.dateOfMoveIn}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20"><u>ข้อมูลบิดา/มารดา</u></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขประจำตัวประชาชนของบิดา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.fatherPersonalID}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อบิดา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.fatherName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขประจำตัวประชาชนของมารดา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.motherPersonalID}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อมารดา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.motherName}</p>
                        </div>
                    </div>
                </div>
            </div>
      </body>
  </html>
    `;
  }

  public viewgetHtml(selectData: IDxc_Model_Dopa_Moi_Persons, title: string) {
        let checkCitizenCardNumber = '';
        if(selectData.fatherPersonalID == '-') {
        checkCitizenCardNumber = `${selectData.fatherPersonalID}`
        } else {
        checkCitizenCardNumber =`
        <a class="text-success font-20" id="clickDopaMoiPersonsFather" type="button">
            ${selectData.fatherPersonalID}<i class="material-icons">link</i></a>`
        }

        let checkCitizenCardNumber2 = '';
        if(selectData.motherPersonalID == '-'){
            checkCitizenCardNumber2 = `${selectData.motherPersonalID}`
        } else {
            checkCitizenCardNumber2 =`
            <a class="text-success font-20" id="clickDopaMoiPersonsMother" type="button">
              ${selectData.motherPersonalID}<i class="material-icons">link</i></a>`
        }
    return this.html = `
    <html>
        <head>
            <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            <script>
              $(document).ready(function() {
                $('#confirmDopaMoiPersons').click(function(){
                  $('#dopaMoiPersons').modal('toggle');
                  $('#dopaMoiPersons').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $('#close').click(function(){
                  $('#dopaMoiPersons').modal('toggle');
                  $('#dopaMoiPersons').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $('#closeDopaMoiPersons').click(function(){
                  $('#dopaMoiPersons').modal('toggle');
                  $('#dopaMoiPersons').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $("#dopaMoiPersons").modal({
                  show: false,
                  backdrop: 'static'
                });
                $("#clickDopaMoiPersons").click(function() {
                $("#dopaMoiPersons").modal("show");
                });
              });
              $(document).ready(function() {
                $('#confirmDopaMoiPersonsFather').click(function(){
                  $('#dopaMoiPersonsFather').modal('toggle');
                  $('#dopaMoiPersonsFather').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $('#closeFather').click(function(){
                  $('#dopaMoiPersonsFather').modal('toggle');
                  $('#dopaMoiPersonsFather').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $('#closeDopaMoiPersonsFather').click(function(){
                  $('#dopaMoiPersonsFather').modal('toggle');
                  $('#dopaMoiPersonsFather').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $("#dopaMoiPersonsFather").modal({
                  show: false,
                  backdrop: 'static'
                });
                $("#clickDopaMoiPersonsFather").click(function() {
                $("#dopaMoiPersonsFather").modal("show");
                });
              });
              $(document).ready(function() {
                $('#confirmDopaMoiPersonsMother').click(function(){
                  $('#dopaMoiPersonsMother').modal('toggle');
                  $('#dopaMoiPersonsMother').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $('#closeMother').click(function(){
                  $('#dopaMoiPersonsMother').modal('toggle');
                  $('#dopaMoiPersonsMother').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $('#closeDopaMoiPersonsMother').click(function(){
                  $('#dopaMoiPersonsMother').modal('toggle');
                  $('#dopaMoiPersonsMother').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $("#dopaMoiPersonsMother").modal({
                  show: false,
                  backdrop: 'static'
                });
                $("#clickDopaMoiPersonsMother").click(function() {
                $("#dopaMoiPersonsMother").modal("show");
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
                <br /><br />
                <div class="ml-3"> 
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">
                                <a class="text-success font-20" id="clickDopaMoiPersons" type="button">
                                ${selectData.citizenCardNumber}<i class="material-icons">link</i></a>
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">คำนำหน้านาม</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.titleDesc}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">คำนำหน้านามแบบเต็ม</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.titleName}</p>
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
                            <p class="text-white font-20">วันเดือนปี เกิด</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.dateOfBirth}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">อายุ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.age}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">เพศ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.genderDesc}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">สัญชาติ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.nationalityDesc}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">สถานะภาพบุคคล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.statusOfPersonDesc}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">สถานะภาพเจ้าบ้าน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.ownerStatusDesc}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">วันที่ย้ายเข้า</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.dateOfMoveIn}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20"><u>ข้อมูลบิดา/มารดา</u></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขประจำตัวประชาชนของบิดา</p>
                        </div>
                        <div class="col-3">
                          <p class="text-success font-20">
                            ${checkCitizenCardNumber}
                          </p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อบิดา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.fatherName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขประจำตัวประชาชนของมารดา</p>
                        </div>
                        <div class="col-3">
                          <p class="text-success font-20">
                            ${checkCitizenCardNumber2}
                          </p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อมารดา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.motherName}</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        <div id="dopaMoiPersons" class="modal fade" tabindex="-1" data-backdrop="static" role="dialog" aria-hidden="true">
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
                <button type="button" id="closeDopaMoiPersons" class="btn btn-danger">ยกเลิก</button>
                <a id="confirmDopaMoiPersons" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.citizenCardNumber}/0/0/0/0/0">ตกลง</a>				
              </div>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
        <div id="dopaMoiPersonsFather" class="modal fade" tabindex="-1" data-backdrop="static" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title text-white" id="exampleModalLongTitle">ยืนยันการค้นหา</h4>
                <button type="button" class="close" id="closeFather">×</button>
              </div>
              <div class="modal-body font-20 text-white text-center">
                คุณต้องการเปิดรายงาน Single Report ของ <br>
                หมายเลขบัตรประชาชนนี้ ${selectData.fatherPersonalID} ใช่หรือไม่
              </div>
              <div class="modal-footer">
                <button type="button" id="closeDopaMoiPersonsFather" class="btn btn-danger">ยกเลิก</button>
                <a id="confirmDopaMoiPersonsFather" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.fatherPersonalID}/0/0/0/0/0">ตกลง</a>				
              </div>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
        <div id="dopaMoiPersonsMother" class="modal fade" tabindex="-1" data-backdrop="static" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title text-white" id="exampleModalLongTitle">ยืนยันการค้นหา</h4>
                <button type="button" class="close" id="closeMother">×</button>
              </div>
              <div class="modal-body font-20 text-white text-center">
                คุณต้องการเปิดรายงาน Single Report ของ <br>
                หมายเลขบัตรประชาชนนี้ ${selectData.motherPersonalID} ใช่หรือไม่
              </div>
              <div class="modal-footer">
                <button type="button" id="closeDopaMoiPersonsMother" class="btn btn-danger">ยกเลิก</button>
                <a id="confirmDopaMoiPersonsMother" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.motherPersonalID}/0/0/0/0/0">ตกลง</a>				
              </div>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </html>
    `;
  }

  public viewgetHtmlSingleReport(selectData: IDxc_Model_Dopa_Moi_Persons, title: string) {
    return this.html = `
    <html>
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
                <br /><br />
                <div class="ml-3"> 
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.citizenCardNumber}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">คำนำหน้านาม</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.titleDesc}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">คำนำหน้านามแบบเต็ม</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.titleName}</p>
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
                            <p class="text-white font-20">วันเดือนปี เกิด</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.dateOfBirth}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">อายุ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.age}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">เพศ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.genderDesc}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">สัญชาติ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.nationalityDesc}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">สถานะภาพบุคคล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.statusOfPersonDesc}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">สถานะภาพเจ้าบ้าน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.ownerStatusDesc}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">วันที่ย้ายเข้า</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.dateOfMoveIn}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20"><u>ข้อมูลบิดา/มารดา</u></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขประจำตัวประชาชนของบิดา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.fatherPersonalID}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อบิดา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.fatherName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขประจำตัวประชาชนของมารดา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.motherPersonalID}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อมารดา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.motherName}</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    </html>
    `;
  }

  public gettopPdf() {
    if (localStorage.getItem('dopa-moi-dopa-personResults') === '[]' || localStorage.getItem('dopa-moi-dopa-personResults') === null) {
      this.topPdf.push(`<div class="row" ng-model="Dxc_Model_Dopa_Moi_Persons">
      <table style="width: 100%;">
      <tbody>
        <tr>
          <td style="width: 100%;">
            <table style="width: 100%;margin-top: 0px;margin-right: 30px;">
            <tbody>
            <tr>
              <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; เลขบัตรประชาชน</td>
              <td align="left">
              <span class="text-info" style="color: blue;">-</span></td>
              <td style="font-weight:bold;" align="left"> &nbsp; &nbsp; &nbsp; ชื่อ </td>
              <td align="left">
              <span class="text-info" align="left" style="color: blue;">-</span></td>
              <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; นามสกุล</td>
              <td align="left">
              <span class="text-info" align="left" style="color: blue;">-</span></td>
            </tr>
            <tr>
              <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; เพศ</td>
              <td align="left">
              <span class="text-info" style="color: blue;">-</span></td>
              <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; เกิดวันที่</td>
              <td align="left"><span class="text-info" style="color: blue;">-</span></td>
              <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; อายุ</td>
              <td align="left" style="color: blue;"><span class="text-info">-</span></td>
            </tr>
            <tr>
              <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; สัญชาติ</td>
              <td align="left" style="color: blue;"><span class="text-info">-</span></td>
              <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; ชื่อบิดา</td>
              <td align="left">
              <span class="text-info" style="color: blue;">-</span></td>
              <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; ชื่อมารดา</td>
              <td align="left">
              <span class="text-info" style="color: blue;">-</span></td>
            </tr>
          </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>${this.loadReportDetail()}`);
      console.log('1.1');
    } else {
      this.obj = localStorage.getItem('dopa-moi-dopa-personResults');
      this.results = JSON.parse(this.obj);

      for (let i = 0; i < this.results.length; i++) {
        this.topPdf.push(`<div class="row" ng-model="Dxc_Model_Dopa_Moi_Persons">
        <table style="width: 100%;">
        <tbody>
          <tr>
            <td style="width: 100%;">
              <table style="width: 100%;margin-top: 0px;margin-right: 30px;">
              <tbody>
              <tr>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; เลขบัตรประชาชน</td>
                <td align="left">
                <span class="text-info" style="color: blue;">${this.changeNull(this.results[i].citizenCardNumber)}</span></td>
                <td style="font-weight:bold;" align="left"> &nbsp; &nbsp; &nbsp; ชื่อ </td>
                <td align="left">
                <span class="text-info" align="left" style="color: blue;">${this.changeNull(this.results[i].firstName)}</span></td>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; นามสกุล</td>
                <td align="left">
                <span class="text-info" align="left" style="color: blue;">${this.changeNull(this.results[i].lastName)}</span></td>
              </tr>
              <tr>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; เพศ</td>
                <td align="left">
                <span class="text-info" style="color: blue;">${this.changeNull(this.results[i].genderDesc)}</span></td>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; เกิดวันที่</td>
                <td align="left"><span class="text-info" style="color: blue;">${this.changeNull(this.results[i].dateOfBirth)}</span></td>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; อายุ</td>
                <td align="left" style="color: blue;"><span class="text-info">${this.changeNull(this.results[i].age)}</span></td>
              </tr>
              <tr>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; สัญชาติ</td>
                <td align="left" style="color: blue;"><span class="text-info">${this.changeNull(this.results[i].nationalityDesc)}</span></td>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; ชื่อบิดา</td>
                <td align="left">
                <span class="text-info" style="color: blue;">${this.changeNull(this.results[i].fatherName)}</span></td>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; ชื่อมารดา</td>
                <td align="left">
                <span class="text-info" style="color: blue;">${this.changeNull(this.results[i].motherName)}</span></td>
              </tr>
            </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>${this.loadReportDetail()}`);
        // }
      }
      console.log('1.2');
    }
  }

  public getnormalPdf() {
    const schema = environment.qm.sub[0]['dopa'].sub[0]['persons'].schema;
    // const schema = 'dopa-moi-dopa-person';
    if (localStorage.getItem(schema + 'Results') === '[]' ||
    localStorage.getItem(schema + 'Results') === null) {
      this.normalPdf = [];
      console.log('1.1');
    } else {
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length; // นับจำนวนรายการ\
      this.normalPdfCount = `<div class="col-md-11"
      class="row card singlereport-timeline-item list-normal-design-head-collapse">
      <span class="list-normal-design-underline depart">กรมการปกครอง: </span>
      <span class="list-normal-design-underline departdata">ทะเบียนราษฎร (Linkage) </span>
      <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ
      </span>
    </div>`;
      this.loadReportDetail();
      for (let i = 0; i < this.results.length; i++) {
        this.normalPdf.push(`
      <div class="col-md-11">
        <div class="section-criminal-results"
        style="text-indent:25px;font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
        <span class="list-normal-design-underline depart">ทะเบียนราษฎร (Linkage) </span>
        <div style="padding-left:15px;">
        <strong class="report-field-title">ชื่อตัว</strong>&nbsp;&nbsp;
          <span class="report-field-value" style="text-decoration:underline">
          ${this.changeNull(this.results[i].firstName)}</span>&nbsp;&nbsp;
          <strong class="report-field-title">ชื่อสกุล</strong>&nbsp;&nbsp;
          <span class="report-field-value" style="text-decoration:underline">
          ${this.changeNull(this.results[i].lastName)}</span>&nbsp;&nbsp;
          <strong class="report-field-title">อายุ</strong>&nbsp;&nbsp;
          <span class="report-field-value" style="text-decoration:underline">
          ${this.changeNull(this.results[i].age)}</span>&nbsp;&nbsp;
          <strong class="report-field-title">วันเดือนปี เกิด</strong>&nbsp;&nbsp;
          <span class="report-field-value" style="text-decoration:underline">
          ${this.formatDate(this.results[i].dateOfBirth)}</span>&nbsp;&nbsp;
          <strong class="report-field-title">สัญชาติ</strong>&nbsp;&nbsp;
          <span class="report-field-value" style="text-decoration:underline">
          ${this.changeNull(this.results[i].nationalityDesc)}</span>&nbsp;&nbsp;
          <strong class="report-field-title">สถานะภาพบุคคล</strong>&nbsp;&nbsp;
          <span class="report-field-value" style="text-decoration:underline">
          ${this.changeNull(this.results[i].statusOfPersonDesc)}</span>&nbsp;&nbsp;
        </div>
      </div>
    </div>${this.loadReportDetail()}`);
        console.log('dopa-moi-dopa-personResults' + this.normalPdf[i]);
      }
      console.log('1.2');
    }
  }

  public getSearchData() {
    if (localStorage.getItem('dopa-moi-dopa-personResults') === '[]' || localStorage.getItem('dopa-moi-dopa-personResults') === null) {
      console.log('4.1');
    } else {
      this.show = true;
      this.obj = localStorage.getItem('dopa-moi-dopa-personResults');
      this.results = JSON.parse(this.obj);
      console.log(this.results)
      if (this.results == null) {
        return null
      } else {
        this.count = this.results.length; // นับจำนวนรายการ
        console.log('4.2' + this.results[0]);
      }
      
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

  // เช็ควันที่
  formatDate(birthDate: string): string {

    let date = `${birthDate}`;
    const year = date.substring(0, 4);
    const month = date.substring(4, 6);
    const day = date.substring(6, 8);
    if (birthDate === 'null') {
      return '-';
    } else if (birthDate == null) {
      return '-';
    } else {
      const thmonth = new Array('มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
        'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม');
        const d = new Date(month);
      return `${day} ${thmonth[d.getMonth()]} ${year}`;
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


  /**
   * Getter $obj
   * @return {string}
   */
  public get $obj(): string {
    return this.obj;
  }

  /**
   * Getter $util
   * @return {Utils}
   */
  public get $util(): Utils {
    return this.util;
  }

  /**
   * Getter $listLefts
   * @return {any[]}
   */
  public get $listLefts(): any[] {
    return this.listLefts;
  }

  /**
   * Getter $listAlgations
   * @return {any[]}
   */
  public get $listAlgations(): any[] {
    return this.listAlgations;
  }

  /**
   * Getter $listNormals
   * @return {any[]}
   */
  public get $listNormals(): any[] {
    return this.listNormals;
  }

  /**
   * Getter $listNormalPersons
   * @return {any[]}
   */
  public get $listNormalPersons(): any[] {
    return this.listNormalPersons;
  }

  /**
   * Getter $count
   * @return {number}
   */
  public get $count(): number {
    return this.count;
  }

  /**
   * Setter $obj
   * @param {string} value
   */
  public set $obj(value: string) {
    this.obj = value;
  }

  /**
   * Setter $util
   * @param {Utils} value
   */
  public set $util(value: Utils) {
    this.util = value;
  }

  /**
   * Setter $listLefts
   * @param {any[]} value
   */
  public set $listLefts(value: any[]) {
    this.listLefts = value;
  }

  /**
   * Setter $listAlgations
   * @param {any[]} value
   */
  public set $listAlgations(value: any[]) {
    this.listAlgations = value;
  }

  /**
   * Setter $listNormals
   * @param {any[]} value
   */
  public set $listNormals(value: any[]) {
    this.listNormals = value;
  }

  /**
   * Setter $listNormalPersons
   * @param {any[]} value
   */
  public set $listNormalPersons(value: any[]) {
    this.listNormalPersons = value;
  }

  /**
   * Setter $count
   * @param {number} value
   */
  public set $count(value: number) {
    this.count = value;
  }


  /**
   * Getter $results
   * @return {IDxc_Model_Dopa_Moi_Persons[]}
   */
  public get $results(): IDxc_Model_Dopa_Moi_Persons[] {
    return this.results;
  }

  /**
   * Setter $results
   * @param {IDxc_Model_Dopa_Moi_Persons[]} value
   */
  public set $results(value: IDxc_Model_Dopa_Moi_Persons[]) {
    this.results = value;
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

}
