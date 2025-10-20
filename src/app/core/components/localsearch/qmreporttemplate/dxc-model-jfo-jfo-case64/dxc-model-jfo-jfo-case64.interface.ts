import * as moment from "moment";
import { IDxc_Model_Jfo_Jfo_Case64 } from "src/app/core/shared/models/Dxc_Model_Jfo_Jfo_Case64";
import { Injectable } from "@angular/core";


export interface IReportJfoJfoCase64 {
    model: IDxc_Model_Jfo_Jfo_Case64;
}

@Injectable()
export class JfoJfoCase64Metadata {
    private results: IDxc_Model_Jfo_Jfo_Case64[];
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

    public getHtml(selectData: IDxc_Model_Jfo_Jfo_Case64, title: string) {
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
          .col-1 {
            width: 12.5%;
            margin-bottom: -2rem;
            -ms-flex-wrap: wrap;
                flex-wrap: wrap;
          } 

          .col-2 {
            width: 15%;
            margin-bottom: -2rem;
            -ms-flex-wrap: wrap;
                flex-wrap: wrap;
          }  
          .col-3 {
            width: 20%;
            margin-bottom: -2rem;
            -ms-flex-wrap: wrap;
                flex-wrap: wrap;
          }
          .col-4 {
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
            <table class="table" border="2px" width="100%">
                <tr>
                    <td align="center" class="text-white font-20">${title}</td>
                </tr>
            </table>
            <div class="ml-3">
                <div class="row">
                    <div class="col-4">
                        <p class="text-white font-20">เลขบัตรประจำตัวประชาชน</p>
                    </div>
                    <div class="col-4">
                        <p class="text-success font-20">${selectData.cardId}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <p class="text-white font-20">เลขสำนวน กทย.</p>
                    </div>
                    <div class="col-4">
                        <p class="text-success font-20">${selectData.jfCaseNo}</p>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-4">
                        <p class="text-white font-20">ชื่อเรื่อง</p>
                    </div>
                    <div class="col-9">
                        <p class="text-success font-20">${selectData.subject}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <p class="text-white font-20">เรื่องหลัก</p>
                    </div>
                    <div class="col-4">
                        <p class="text-success font-20">${selectData.caseCategoryName}</p>
                    </div>
                    <div class="col-4">
                        <p class="text-white font-20">เรื่องรอง</p>
                    </div>
                    <div class="col-4">
                        <p class="text-success font-20">${selectData.caseSubCategoryName}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <p class="text-white font-20">วันที่รับเรื่อง</p>
                    </div>
                    <div class="col-4">
                        <p class="text-success font-20">${selectData.createDate}</p>
                    </div>
                    <div class="col-4">
                        <p class="text-white font-20">วันที่ลงระบบ</p>
                    </div>
                    <div class="col-4">
                        <p class="text-success font-20">${selectData.registerDate}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <p class="text-white font-20">วันที่แก้ไขล่าสุด</p>
                    </div>
                    <div class="col-4">
                        <p class="text-success font-20">${selectData.modifiedDate}</p>
                    </div>
                    <div class="col-4">
                    <p class="text-white font-20">คะแนน</p>
                </div>
                <div class="col-4">
                    <p class="text-success font-20">${selectData.score}</p>
                </div>
                </div>                    
                <div class="row">
                    <div class="col-4">
                    <p class="text-white font-20">จํานวนเงินที่ยื่นคําขอ</p>
                </div>
                <div class="col-4">
                    <p class="text-success font-20">${selectData.requestAmount}</p>
                </div>
                    <div class="col-4">
                        <p class="text-white font-20">ประเภทคําขอ</p>
                    </div>
                    <div class="col-4">
                        <p class="text-success font-20">${selectData.caseTypeName}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <p class="text-white font-20">ขั้นตอนการทํางาน</p>
                    </div>
                    <div class="col-4">
                        <p class="text-success font-20">${selectData.workStepName}</p>
                    </div>
                    <div class="col-4">
                        <p class="text-white font-20">สถานะ</p>
                    </div>
                    <div class="col-4">
                        <p class="text-success font-20">${selectData.caseApplicationStatusName}</p>
                    </div>
                </div>

                <br>
                <div class="row">
                    <div class="col-4">
                        <p class="text-white font-20"><u>รายละเอียดผู้ขอ</u></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-1">
                        <p class="text-white font-20">คํานําหน้าชื่อ</p>
                    </div>
                    <div class="col-1">
                        <p class="text-success font-20">${selectData.title}</p>
                    </div>
                    <div class="col-1">
                        <p class="text-white font-20">ชื่อผู้ขอ</p>
                    </div>
                    <div class="col-1">
                        <p class="text-success font-20">${selectData.firstName}</p>
                    </div>
                    <div class="col-4">
                        <p class="text-white font-20">นามสกุลผู้ขอ</p>
                    </div>
                    <div class="col-4">
                        <p class="text-success font-20">${selectData.lastName}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <p class="text-white font-20">เพศ</p>
                    </div>
                    <div class="col-4">
                        <p class="text-success font-20">${selectData.gender}</p>
                    </div>
                    <div class="col-4">
                    <p class="text-white font-20">วันเกิด</p>
                </div>
                <div class="col-4">
                    <p class="text-success font-20">${selectData.dateOfBirth}</p>
                </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <p class="text-white font-20">อายุ</p>
                    </div>
                    <div class="col-4">
                        <p class="text-success font-20">${selectData.age}</p>
                    </div>
                    <div class="col-4">
                        <p class="text-white font-20">ศาสนา</p>
                    </div>
                    <div class="col-4">
                        <p class="text-success font-20">${selectData.religionName}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <p class="text-white font-20">สัญชาติ</p>
                    </div>
                    <div class="col-4">
                        <p class="text-success font-20">${selectData.raceName}</p>
                    </div>
                    <div class="col-4">
                    <p class="text-white font-20">เชื้อชาติ</p>
                </div>
                <div class="col-4">
                    <p class="text-success font-20">${selectData.nationalityName}</p>
                </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <p class="text-white font-20">อาชีพ</p>
                    </div>
                    <div class="col-4">
                        <p class="text-success font-20">${selectData.career}</p>
                    </div>
                    <div class="col-4">
                        <p class="text-white font-20">ประเภทบัตร</p>
                    </div>
                    <div class="col-4">
                        <p class="text-success font-20">${selectData.cardTypeName}</p>
                    </div>
                </div>

                <br>
                <div class="row">
                    <div class="col-4">
                        <p class="text-white font-20"><u>รายละเอียดเจ้าหน้าที่</u></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <p class="text-white font-20">ชื่อเจ้าหน้าที่</p>
                    </div>
                    <div class="col-4">
                        <p class="text-success font-20">${selectData.lawyerFirstName}</p>
                    </div>
                    <div class="col-4">
                        <p class="text-white font-20">นามสกุลเจ้าหน้าที่</p>
                    </div>
                    <div class="col-4">
                        <p class="text-success font-20">${selectData.lawyerLastName}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <p class="text-white font-20">ตัวย่อหน่วยงาน</p>
                    </div>
                    <div class="col-4">
                        <p class="text-success font-20">${selectData.departmentNameAbbr}</p>
                    </div>
                    <div class="col-4">
                        <p class="text-white font-20">หน่วยงาน</p>
                    </div>
                    <div class="col-4">
                        <p class="text-success font-20">${selectData.departmentName}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <p class="text-white font-20">จังหวัด</p>
                    </div>
                    <div class="col-4">
                        <p class="text-success font-20">${selectData.provinceName}</p>
                    </div>
                </div>
            </div>
        </body>
    </html> `;
     }
    public viewgetHtml(selectData: IDxc_Model_Jfo_Jfo_Case64, title: string) { 
        return this.html =
        `<html>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
                <script>
                    $(document).ready(function() {
                    $('#confirmjfoJfoCase64').click(function(){
                        $('#jfoJfoCase64').modal('toggle');
                        $('#jfoJfoCase64').on('hidden.bs.modal', function () {
                            $('body').addClass('modal-open');
                        });
                    });
                    $('#close').click(function(){
                        $('#jfoJfoCase64').modal('toggle');
                        $('#jfoJfoCase64').on('hidden.bs.modal', function () {
                            $('body').addClass('modal-open');
                        });
                    });
                    $('#closejfoJfoCase64').click(function(){
                        $('#jfoJfoCase64').modal('toggle');
                        $('#jfoJfoCase64').on('hidden.bs.modal', function () {
                            $('body').addClass('modal-open');
                        });
                    });
                    $("#jfoJfoCase64").modal({
                        show: false,
                        backdrop: 'static'
                    });
                    $("#checkJfoJfoCase64").click(function() {
                    $("#jfoJfoCase64").modal("show");
                    });
                    });
                </script>
            </head>
            <body>
                <table class="table" border="2px" width="100%">
                    <tr>
                        <td align="center" class="text-white font-20">${title}</td>
                    </tr>
                </table>
                <div class="ml-3">
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขบัตรประจำตัวประชาชน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">
                            <a class="text-success font-20" id="checkJfoJfoCase64" type="button">
                                ${selectData.cardId}<i class="material-icons">link</i></a>
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขสำนวน กทย.</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.jfCaseNo}</p>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อเรื่อง</p>
                        </div>
                        <div class="col-9">
                            <p class="text-success font-20">${selectData.subject}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เรื่องหลัก</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.caseCategoryName}</p>
                        </div>
                         <div class="col-3">
                            <p class="text-white font-20">เรื่องรอง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.caseSubCategoryName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">วันที่รับเรื่อง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.createDate}</p>
                        </div>
                         <div class="col-3">
                            <p class="text-white font-20">วันที่ลงระบบ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.registerDate}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">วันที่แก้ไขล่าสุด</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.modifiedDate}</p>
                        </div>
                        <div class="col-3">
                           <p class="text-white font-20">คะแนน</p>
                       </div>
                       <div class="col-3">
                           <p class="text-success font-20">${selectData.score}</p>
                       </div>
                    </div>                    
                    <div class="row">
                        <div class="col-3">
                           <p class="text-white font-20">จํานวนเงินที่ยื่นคําขอ</p>
                       </div>
                       <div class="col-3">
                           <p class="text-success font-20">${selectData.requestAmount}</p>
                       </div>
                         <div class="col-3">
                            <p class="text-white font-20">ประเภทคําขอ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.caseTypeName}</p>
                        </div>
                    </div>
                    <div class="row">
                         <div class="col-3">
                            <p class="text-white font-20">ขั้นตอนการทํางาน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.workStepName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">สถานะ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.caseApplicationStatusName}</p>
                        </div>
                    </div>

                    <br>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20"><u>รายละเอียดผู้ขอ</u></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-2">
                            <p class="text-white font-20">คํานําหน้าชื่อ</p>
                        </div>
                        <div class="col-1">
                            <p class="text-success font-20">${selectData.title}</p>
                        </div>
                         <div class="col-1">
                            <p class="text-white font-20">ชื่อผู้ขอ</p>
                        </div>
                        <div class="col-2">
                            <p class="text-success font-20">${selectData.firstName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">นามสกุลผู้ขอ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.lastName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เพศ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.gender}</p>
                        </div>
                        <div class="col-3">
                           <p class="text-white font-20">วันเกิด</p>
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
                            <p class="text-white font-20">ศาสนา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.religionName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">สัญชาติ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.raceName}</p>
                        </div>
                        <div class="col-3">
                           <p class="text-white font-20">เชื้อชาติ</p>
                       </div>
                       <div class="col-3">
                           <p class="text-success font-20">${selectData.nationalityName}</p>
                       </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">อาชีพ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.career}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ประเภทบัตร</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.cardTypeName}</p>
                        </div>
                    </div>

                    <br>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20"><u>รายละเอียดเจ้าหน้าที่</u></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อเจ้าหน้าที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.lawyerFirstName}</p>
                        </div>
                         <div class="col-3">
                            <p class="text-white font-20">นามสกุลเจ้าหน้าที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.lawyerLastName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ตัวย่อหน่วยงาน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.departmentNameAbbr}</p>
                        </div>
                         <div class="col-3">
                            <p class="text-white font-20">หน่วยงาน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.departmentName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">จังหวัด</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.provinceName}</p>
                        </div>
                    </div>
                </div>
            </body>
            <div id="jfoJfoCase64" class="modal fade" tabindex="-1" data-backdrop="static" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title text-white" id="exampleModalLongTitle">ยืนยันการค้นหา</h4>
                        <button type="button" class="close" id="close">×</button>
                    </div>
                    <div class="modal-body font-20 text-white text-center">
                        คุณต้องการเปิดรายงาน Single Report ของ <br>
                        หมายเลขบัตรประชาชนนี้ ${selectData.cardId} ใช่หรือไม่
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="closejfoJfoCase64" class="btn btn-danger">ยกเลิก</button>
                        <a id="confirmjfoJfoCase64" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.cardId}/0/0/0/0/0">ตกลง</a>				
                    </div>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </html>`
    }
    public getSearchData() {
        const schema = 'jfo-jfo-case64';
        if (
          localStorage.getItem(schema + 'Results') === '[]' ||
          localStorage.getItem(schema + 'Results') === null
        ) {
          console.log('Results-case64');
        } else {
          this.show = true;
          this.obj = localStorage.getItem(schema + 'Results');
          this.results = JSON.parse(this.obj);
          this.count = this.results.length; // นับจำนวนรายการ
          console.log(this.count);
        }
    }
    public getnormalPdf() {
        const schema = 'jfo-jfo-case64';
        if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {
          this.normalPdf = [];
        } else {
          this.obj = localStorage.getItem(schema + 'Results');
          this.results = JSON.parse(this.obj);
          this.count = this.results.length; // นับจำนวนรายการ

          if(this.count !== undefined) {
            // PDF ค้นด้วยเลขบัตร
            this.normalPdfCount = `<div class="col-md-11"
              class="row card singlereport-timeline-item list-normal-design-head-collapse">
              <span class="list-normal-design-underline depart">สำนักงานปลัดกระทรวงยุติธรรม</span>
              <span class="list-normal-design-underline departdata">ฐานข้อมูลกองทุนยุติธรรม (2564)</span>
              <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ</span>
            </div>`;
            this.loadReportDetail();
            for (let i = 0; i < this.results.length; i++) {
              this.normalPdf.push(`
                  <div class="col-md-11">
                      <div class="section-criminal-results" style="text-indent:25px;
                          font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
                          <span class="list-normal-design-underline depart">ฐานข้อมูลกองทุนยุติธรรม (2564)</span>
                          <div style="padding-left:15px;">
                              <strong class="report-field-title">เลขบัตรประจำตัวประชาชน</strong>
                                  <span class="report-field-value" style="text-decoration:underline">
                                  ${this.changeNull(this.results[i].cardId)}
                                  </span>
                              <strong class="report-field-title">เลขสํานวน กทย.</strong>
                                  <span class="report-field-value" style="text-decoration:underline"> 
                                  ${this.changeNull(this.results[i].jfCaseNo)}</span>
                              <strong class="report-field-title">ชื่อเรื่อง</strong>
                                  <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].subject)}</span>
                              <strong class="report-field-title">วันที่รับเรื่อง</strong>
                                  <span class="report-field-value" style="text-decoration:underline">${this.formatDate(this.results[i].createDate)}</span>
                              <strong class="report-field-title">วันที่ลงระบบ</strong>
                                  <span class="report-field-value" style="text-decoration:underline">${this.formatDate(this.results[i].registerDate)}</span>
                              <strong class="report-field-title">วันที่แก้ไขล่าสุด</strong>
                                  <span class="report-field-value" style="text-decoration:underline">${this.formatDate(this.results[i].modifiedDate)}</span>
                          </div>
                      </div>
                  </div>${this.loadReportDetail()}`);
              console.log('jfo.normal: ' + this.normalPdf[i]);
            }
          } else {
            // PDF ค้นด้วยชื่อ-สกุล
            const results = JSON.parse(this.obj);
            this.normalPdfCount = `<div class="col-md-11"
              class="row card singlereport-timeline-item list-normal-design-head-collapse">
              <span class="list-normal-design-underline depart">สำนักงานปลัดกระทรวงยุติธรรม</span>
              <span class="list-normal-design-underline departdata">ฐานข้อมูลกองทุนยุติธรรม (2564)</span>
            </div>`;
            this.loadReportDetail();
            this.normalPdf.push(`
                <div class="col-md-11">
                    <div class="section-criminal-results" style="text-indent:25px;
                        font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
                        <span class="list-normal-design-underline depart">ฐานข้อมูลกองทุนยุติธรรม (2564)</span>
                        <div style="padding-left:15px;">
                            <strong class="report-field-title">เลขบัตรประจำตัวประชาชน</strong>
                                <span class="report-field-value" style="text-decoration:underline">
                                ${this.changeNull(results.cardId)}
                                </span>
                            <strong class="report-field-title">เลขสํานวน กทย.</strong>
                                <span class="report-field-value" style="text-decoration:underline"> 
                                ${this.changeNull(results.jfCaseNo)}</span>
                            <strong class="report-field-title">ชื่อเรื่อง</strong>
                                <span class="report-field-value" style="text-decoration:underline">${this.changeNull(results.subject)}</span>
                            <strong class="report-field-title">วันที่รับเรื่อง</strong>
                                <span class="report-field-value" style="text-decoration:underline">${this.formatDate(results.createDate)}</span>
                            <strong class="report-field-title">วันที่ลงระบบ</strong>
                                <span class="report-field-value" style="text-decoration:underline">${this.formatDate(results.registerDate)}</span>
                            <strong class="report-field-title">วันที่แก้ไขล่าสุด</strong>
                                <span class="report-field-value" style="text-decoration:underline">${this.formatDate(results.modifiedDate)}</span>
                        </div>
                    </div>
                </div>${this.loadReportDetail()}`);
            console.log('jfo.normal: ' + this.normalPdf);
          }
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
        const month = date.getMonth();
        const year = date.getFullYear() + 543;
        if (dateOfBirth === 'null') {
          return '-';
        } else {
            const thmonth = new Array('มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
              'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม');
            return `${day} ${thmonth[month]} ${year}`;
        }
    }
    
      /**
   * Getter $results
   * @return {IDxc_Model_Jfo_Jfo_Case64[]}
   */
  public get $results(): IDxc_Model_Jfo_Jfo_Case64[] {
    return this.results;
  }

  /**
   * Setter $results
   * @param {IDxc_Model_Jfo_Jfo_Case64[]} value
   */
  public set $results(value: IDxc_Model_Jfo_Jfo_Case64[]) {
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