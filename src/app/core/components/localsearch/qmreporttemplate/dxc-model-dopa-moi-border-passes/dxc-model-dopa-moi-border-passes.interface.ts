import {environment} from '../../../../../../environments/environment';
import * as moment from 'moment';
import { IDxc_Model_Moi_Dopa_Border_Passes } from '../../../../shared/models/Dxc_Model_Dopa_Moi_Border_Passes';
import { Injectable } from "@angular/core";

export interface IReportDopaMoiBorderPasses {
  model: IDxc_Model_Moi_Dopa_Border_Passes;
}

@Injectable()
export class DopaMoiBorderPassesMetadata {
  private results: IDxc_Model_Moi_Dopa_Border_Passes[];
  private obj: string;
  private show: boolean;
  private countResults: number;
  private normalPdf: string[];
  private count: number;
  reportName: string;
  reportOfTime: string;
  reportOfDate: string;
  private normalPdfCount: string;
  html: string;
  private showCareer: boolean;
  private objCareer: string;
  private resultsCareer: IDxc_Model_Moi_Dopa_Border_Passes[];
  private countCareer: number;

  private resultsContact: IDxc_Model_Moi_Dopa_Border_Passes[];
  private countContact: number;
  private objContact: string;
  private showContact: boolean;

  constructor() {
    this.results = [];
    this.normalPdf = [];
    this.count = 0;
    this.normalPdfCount = '';

    //career
    this.resultsCareer = [];
    this.countCareer = 0;
    //Contact
    this.resultsContact = [];
    this.countContact = 0;
  }
  public getHtml(selectData: IDxc_Model_Moi_Dopa_Border_Passes, title: string) {

    return this.html = `<html>
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
      <table class='table' border='2px' width='100%'>
          <tr>
              <td align='center' class="text-white font-20">ฐานข้อมูล${title}</td>
          </tr>
      </table>
      <br /><br />
      <div class="ml-3">
        <div class="row">
            <div class="col-3"></div>
            <div class="col-3"></div>
            <div class="col-3">
                <p class="text-white font-20">เลขที่เล่มหนังสือผ่านแดน</p>
            </div>
            <div class="col-3">
                <p class="text-success font-20">${selectData.bookNo}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-3"></div>
            <div class="col-3">
                <p class="text-white font-20">เลขที่หนังสือผ่านแดน</p>
            </div>
            <div class="col-3">
                <p class="text-success font-20">${selectData.borderPassNo}</p>
            </div>
        </div>
        </br>
        <div class="row">
              <div class="col-6">
                  <p class="text-white font-20"><u>รายละเอียดการออกหนังสือผ่านแดน</u></p>
              </div>
        </div>
        <div class="row">
              <div class="col-3">
                  <p class="text-white font-20">ประเภทหนังสือผ่านแดน</p>
              </div>
              <div class="col-3">
                  <p class="text-success font-20">${selectData.bookTypeDesc}</p>
              </div>
          <div class="col-3">
                  <p class="text-white font-20">ชื่อด่านออกหนังสือผ่านแดน</p>
              </div>
              <div class="col-3">
                  <p class="text-success font-20">${selectData.borderName}</p>
              </div>
        </div>
        <div class="row">
          <div class="col-3">
                  <p class="text-white font-20">เลขที่ออกคำร้อง</p>
              </div>
              <div class="col-3">
                  <p class="text-success font-20">${selectData.reqNo}</p>
              </div>
              <div class="col-3">
                  <p class="text-white font-20">สถานะคำร้อง (0=ปกติ, 1=ยกเลิก)</p>
              </div>
              <div class="col-3">
                  <p class="text-success font-20">${selectData.statusOfRequest}</p>
              </div>
        </div>
        <div class="row">
            <div class="col-3">
                  <p class="text-white font-20">วัตถุประสงค์ในการเดินทาง</p>
            </div>
            <div class="col-3">
                  <p class="text-success font-20">${selectData.travelPurpose}</p>
            </div>
            <div class="col-3">
                  <p class="text-white font-20">วันที่ออกคำร้อง</p>
            </div>
            <div class="col-3">
                  <p class="text-success font-20">${selectData.dateOfReq}</p>
            </div>
        </div>
        <div class="row">
              <div class="col-3">
                  <p class="text-white font-20">วันเดือนปีที่หมดอายุ (พ.ศ.)</p>
              </div>
              <div class="col-3">
                  <p class="text-success font-20">${selectData.expireDate}</p>
              </div>
        </div>
        </br>
        <div class="row">
              <div class="col-6">
                  <p class="text-white font-20"><u>รายละเอียดผู้ขอออกหนังสือผ่านแดน</u></p>
              </div>
        </div>
        <div class="row">
              <div class="col-3">
                  <p class="text-white font-20">เลขประจำตัวประชาชน</p>
              </div>
              <div class="col-3">
                  <p class="text-success font-20">${selectData.citizenCardNumber}</p>
              </div>
        <div class="col-3">
                  <p class="text-white font-20">ชื่อตัว-ชื่อสกุล ภาษาไทย</p>
              </div>
              <div class="col-3">
                  <p class="text-success font-20">${selectData.thaiName}</p>
              </div>
        </div>
        <div class="row">
              <div class="col-3">
                  <p class="text-white font-20">ชื่อตัว-ชื่อสกุล ภาษาอังกฤษ</p>
              </div>
              <div class="col-3">
                  <p class="text-success font-20">${selectData.englistName}</p>
              </div>
              <div class="col-3">
                  <p class="text-white font-20">เพศ</p>
              </div>
              <div class="col-3">
                  <p class="text-success font-20">${selectData.genderText}</p>
              </div>
        </div>
        <div class="row">
              <div class="col-3">
                  <p class="text-white font-20">ส่วนสูง</p>
              </div>
              <div class="col-3">
                  <p class="text-success font-20">${selectData.height}</p>
              </div>
              <div class="col-3">
                  <p class="text-white font-20">วันเดือนปีเกิด (พ.ศ.)</p>
              </div>
              <div class="col-3">
                  <p class="text-success font-20">${selectData.dateOfBirth}</p>
              </div>
        </div>
        <div class="row">
              <div class="col-3">
                  <p class="text-white font-20">ตำหนิรูปพรรณ</p>
              </div>
              <div class="col-3">
                  <p class="text-success font-20">${selectData.specialPeculiarities}</p>
              </div>
              <div class="col-3">
                  <p class="text-white font-20">อาชีพ</p>
              </div>
              <div class="col-3">
                  <p class="text-success font-20">${selectData.occupation}</p>
              </div>
        </div>
        <div class="row">
              <div class="col-3">
                  <p class="text-white font-20"><u>ที่อยู่</u></p>
              </div>
        </div>
        <div class="row">
              <div class="col-3">
                  <p class="text-white font-20">บ้านเลขที่</p>
              </div>
              <div class="col-3">
                  <p class="text-success font-20">${selectData.houseNo}</p>
              </div>
              <div class="col-3">
                  <p class="text-white font-20">หมู่ที่</p>
              </div>
              <div class="col-3">
                  <p class="text-success font-20">${selectData.houseVillageNo}</p>
              </div>
        </div>
        <div class="row">
              <div class="col-3">
                  <p class="text-white font-20">ซอย</p>
              </div>
              <div class="col-3">
                  <p class="text-success font-20">${selectData.houseAlleyDesc}</p>
              </div>
              <div class="col-3">
                  <p class="text-white font-20">ตรอก</p>
              </div>
              <div class="col-3">
                  <p class="text-success font-20">${selectData.houseAlleyWayDesc}</p>
              </div>
        </div>
        <div class="row">
              <div class="col-3">
                  <p class="text-white font-20">ถนน</p>
              </div>
              <div class="col-3">
                  <p class="text-success font-20">${selectData.houseRoadDesc}</p>
              </div>
              <div class="col-3">
                  <p class="text-white font-20">ตำบล</p>
              </div>
              <div class="col-3">
                  <p class="text-success font-20">${selectData.houseSubdistrictDesc}</p>
              </div>
        </div>
        <div class="row">
              <div class="col-3">
                  <p class="text-white font-20">อำเภอ</p>
              </div>
              <div class="col-3">
                  <p class="text-success font-20">${selectData.houseDistrictDesc}</p>
              </div>
              <div class="col-3">
                  <p class="text-white font-20">จังหวัด</p>
              </div>
              <div class="col-3">
                  <p class="text-success font-20">${selectData.houseProvinceDesc}</p>
              </div>
        </div>
      </div>
    </div>
  </body>
</html>
`;
  }

  public viewgetHtml(selectData: IDxc_Model_Moi_Dopa_Border_Passes, title: string) {

    return this.html = `<html>
        <head>
            <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            <script>
              $(document).ready(function() {
                $('#confirmDopaMoiBorderPasses').click(function(){
                  $('#dopaMoiBorderPasses').modal('toggle'); 
                  $('#dopaMoiBorderPasses').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $('#close').click(function(){
                  $('#dopaMoiBorderPasses').modal('toggle');  
                  $('#dopaMoiBorderPasses').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $('#closeDopaMoiBorderPasses').click(function(){
                  $('#dopaMoiBorderPasses').modal('toggle'); 
                  $('#dopaMoiBorderPasses').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  }); 
                });
                $("#dopaMoiBorderPasses").modal({
                  show: false,
                  backdrop: 'static'
                });
                $("#clickDopaMoiBorderPasses").click(function() {
                $("#dopaMoiBorderPasses").modal("show");             
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
                      <div class="col-3"></div>
                      <div class="col-3"></div>
                      <div class="col-3">
                          <p class="text-white font-20">เลขที่เล่มหนังสือผ่านแดน</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.bookNo}</p>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-3"></div>
                      <div class="col-3"></div>
                      <div class="col-3">
                          <p class="text-white font-20">เลขที่หนังสือผ่านแดน</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.borderPassNo}</p>
                      </div>
                  </div>
                  </br>
                  <div class="row">
                        <div class="col-6">
                            <p class="text-white font-20"><u>รายละเอียดการออกหนังสือผ่านแดน</u></p>
                        </div>
                  </div>
                  <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ประเภทหนังสือผ่านแดน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.bookTypeDesc}</p>
                        </div>
                    <div class="col-3">
                            <p class="text-white font-20">ชื่อด่านออกหนังสือผ่านแดน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.borderName}</p>
                        </div>
                  </div>
                  <div class="row">
                    <div class="col-3">
                            <p class="text-white font-20">เลขที่ออกคำร้อง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.reqNo}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">สถานะคำร้อง (0=ปกติ, 1=ยกเลิก)</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.statusOfRequest}</p>
                        </div>
                  </div>
                  <div class="row">
                      <div class="col-3">
                            <p class="text-white font-20">วัตถุประสงค์ในการเดินทาง</p>
                      </div>
                      <div class="col-3">
                            <p class="text-success font-20">${selectData.travelPurpose}</p>
                      </div>
                      <div class="col-3">
                            <p class="text-white font-20">วันที่ออกคำร้อง</p>
                      </div>
                      <div class="col-3">
                            <p class="text-success font-20">${selectData.dateOfReq}</p>
                      </div>
                  </div>
                  <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">วันเดือนปีที่หมดอายุ (พ.ศ.)</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.expireDate}</p>
                        </div>
                  </div>
                  </br>
                  <div class="row">
                        <div class="col-6">
                            <p class="text-white font-20"><u>รายละเอียดผู้ขอออกหนังสือผ่านแดน</u></p>
                        </div>
                  </div>
                  <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">
                                <a class="text-success font-20" id="clickDopaMoiBorderPasses" type="button">
                                ${selectData.citizenCardNumber}<i class="material-icons">link</i></a>
                            </p>
                        </div>
                  <div class="col-3">
                            <p class="text-white font-20">ชื่อตัว-ชื่อสกุล ภาษาไทย</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.thaiName}</p>
                        </div>
                  </div>
                  <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อตัว-ชื่อสกุล ภาษาอังกฤษ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.englistName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">เพศ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.genderText}</p>
                        </div>
                  </div>
                  <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ส่วนสูง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.height}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">วันเดือนปีเกิด (พ.ศ.)</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.dateOfBirth}</p>
                        </div>
                  </div>
                  <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ตำหนิรูปพรรณ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.specialPeculiarities}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">อาชีพ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.occupation}</p>
                        </div>
                  </div>
                  <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20"><u>ที่อยู่</u></p>
                        </div>
                  </div>
                  <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">บ้านเลขที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.houseNo}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">หมู่ที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.houseVillageNo}</p>
                        </div>
                  </div>
                  <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ซอย</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.houseAlleyDesc}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ตรอก</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.houseAlleyWayDesc}</p>
                        </div>
                  </div>
                  <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ถนน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.houseRoadDesc}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ตำบล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.houseSubdistrictDesc}</p>
                        </div>
                  </div>
                  <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">อำเภอ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.houseDistrictDesc}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">จังหวัด</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.houseProvinceDesc}</p>
                        </div>
                  </div>
              </div>
            </div>
        </body>
        <div id="dopaMoiBorderPasses" class="modal fade" tabindex="-1" data-backdrop="static" role="dialog" aria-hidden="true">
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
                <button type="button" id="closeDopaMoiBorderPasses" class="btn btn-danger">ยกเลิก</button>
                <a id="confirmDopaMoiBorderPasses" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.citizenCardNumber}/0/0/0/0/0">ตกลง</a>				
              </div>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </html>`;
  }

  public viewgetHtmlSingleReport(selectData: IDxc_Model_Moi_Dopa_Border_Passes, title: string) {

    return this.html = `<html>
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
                    <div class="col-3"></div>
                    <div class="col-3"></div>
                    <div class="col-3">
                        <p class="text-white font-20">เลขที่เล่มหนังสือผ่านแดน</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.bookNo}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-3"></div>
                    <div class="col-3">
                        <p class="text-white font-20">เลขที่หนังสือผ่านแดน</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.borderPassNo}</p>
                    </div>
                </div>
                </br>
                <div class="row">
                      <div class="col-6">
                          <p class="text-white font-20"><u>รายละเอียดการออกหนังสือผ่านแดน</u></p>
                      </div>
                </div>
                <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">ประเภทหนังสือผ่านแดน</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.bookTypeDesc}</p>
                      </div>
                  <div class="col-3">
                          <p class="text-white font-20">ชื่อด่านออกหนังสือผ่านแดน</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.borderName}</p>
                      </div>
                </div>
                <div class="row">
                  <div class="col-3">
                          <p class="text-white font-20">เลขที่ออกคำร้อง</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.reqNo}</p>
                      </div>
                      <div class="col-3">
                          <p class="text-white font-20">สถานะคำร้อง (0=ปกติ, 1=ยกเลิก)</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.statusOfRequest}</p>
                      </div>
                </div>
                <div class="row">
                    <div class="col-3">
                          <p class="text-white font-20">วัตถุประสงค์ในการเดินทาง</p>
                    </div>
                    <div class="col-3">
                          <p class="text-success font-20">${selectData.travelPurpose}</p>
                    </div>
                    <div class="col-3">
                          <p class="text-white font-20">วันที่ออกคำร้อง</p>
                    </div>
                    <div class="col-3">
                          <p class="text-success font-20">${selectData.dateOfReq}</p>
                    </div>
                </div>
                <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">วันเดือนปีที่หมดอายุ (พ.ศ.)</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.expireDate}</p>
                      </div>
                </div>
                </br>
                <div class="row">
                      <div class="col-6">
                          <p class="text-white font-20"><u>รายละเอียดผู้ขอออกหนังสือผ่านแดน</u></p>
                      </div>
                </div>
                <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">
                              <a class="text-success font-20" id="clickDopaMoiBorderPasses" type="button">
                              ${selectData.citizenCardNumber}<i class="material-icons">link</i></a>
                          </p>
                      </div>
                <div class="col-3">
                          <p class="text-white font-20">ชื่อตัว-ชื่อสกุล ภาษาไทย</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.thaiName}</p>
                      </div>
                </div>
                <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">ชื่อตัว-ชื่อสกุล ภาษาอังกฤษ</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.englistName}</p>
                      </div>
                      <div class="col-3">
                          <p class="text-white font-20">เพศ</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.genderText}</p>
                      </div>
                </div>
                <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">ส่วนสูง</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.height}</p>
                      </div>
                      <div class="col-3">
                          <p class="text-white font-20">วันเดือนปีเกิด (พ.ศ.)</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.dateOfBirth}</p>
                      </div>
                </div>
                <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">ตำหนิรูปพรรณ</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.specialPeculiarities}</p>
                      </div>
                      <div class="col-3">
                          <p class="text-white font-20">อาชีพ</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.occupation}</p>
                      </div>
                </div>
                <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20"><u>ที่อยู่</u></p>
                      </div>
                </div>
                <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">บ้านเลขที่</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.houseNo}</p>
                      </div>
                      <div class="col-3">
                          <p class="text-white font-20">หมู่ที่</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.houseVillageNo}</p>
                      </div>
                </div>
                <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">ซอย</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.houseAlleyDesc}</p>
                      </div>
                      <div class="col-3">
                          <p class="text-white font-20">ตรอก</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.houseAlleyWayDesc}</p>
                      </div>
                </div>
                <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">ถนน</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.houseRoadDesc}</p>
                      </div>
                      <div class="col-3">
                          <p class="text-white font-20">ตำบล</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.houseSubdistrictDesc}</p>
                      </div>
                </div>
                <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">อำเภอ</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.houseDistrictDesc}</p>
                      </div>
                      <div class="col-3">
                          <p class="text-white font-20">จังหวัด</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.houseProvinceDesc}</p>
                      </div>
                </div>
            </div>
          </div>
        </body>
    </html>`;
  }
  public getSearchData() {
    // มาจาก env
    const schema = 'dopa-moi-dopa-border-passes';
    //const schema = environment.qm.sub[0]['dopa'].sub[0]['borderpasses'].schema;
    if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {
    } else {
      this.show = true;
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length; // นับจำนวนรายการ
    }
  }

  public getSearchDataCareer() {
    // มาจาก env
    const schema = 'dopa-moi-dopa-border-passes';
    //const schema = environment.qm.sub[0]['dopa'].sub[0]['borderpasses'].schema;
    if (localStorage.getItem(schema + '-career-Results') === '[]' || localStorage.getItem(schema + '-career-Results') === null) {
    } else {
      this.showCareer = true;
      this.objCareer = localStorage.getItem(schema + '-career-Results');
      this.resultsCareer = JSON.parse(this.objCareer);
      this.countCareer = this.resultsCareer.length; // นับจำนวนรายการ
    }
  }

  public getSearchDataContact() {
    const schema = 'dopa-moi-dopa-border-passes';
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
    const schema = 'dopa-moi-dopa-border-passes';
    // const schema = environment.qm.sub[0]['dopa'].sub[0]['borderpasses'].schema;
    if (localStorage.getItem(schema + 'Results') === '[]' ||
      localStorage.getItem(schema + 'Results') === null) {
      this.normalPdf = [];
      console.log('ผู้ขอออกหนังสือผ่านแดนทั้งหมด (Linkage) PDF null');
    } else {
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length; // นับจำนวนรายการ
      this.normalPdfCount = `<div class="col-md-11"
        class="row card singlereport-timeline-item list-normal-design-head-collapse">
        <span class="list-normal-design-underline depart">กรมการปกครอง: </span>
        <span class="list-normal-design-underline departdata">ผู้ขอออกหนังสือผ่านแดนทั้งหมด (Linkage)</span>
        <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ</span>
      </div>`;
      for (let i = 0; i < this.results.length; i++) {
        this.normalPdf.push(`<div class="col-md-11">
          <div class="section-criminal-results" style="text-indent:25px;
            font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
            <span class="list-normal-design-underline depart">ผู้ขอออกหนังสือผ่านแดนทั้งหมด (Linkage)</span>
            <div style="padding-left:15px;">
              <strong class="report-field-title">ชื่อตัว-ชื่อสกุล ภาษาไทย</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].thaiName)}</span>&nbsp;&nbsp;
              <strong class="report-field-title">เลขที่หนังสือผ่านแดน</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].borderPassNo)}</span>&nbsp;&nbsp;
              <strong class="report-field-title">ประเภทหนังสือผ่านแดน</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].bookTypeDesc)}</span>&nbsp;&nbsp;
              <strong class="report-field-title">วันเดือนปีที่หมดอายุ (พ.ศ.)</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">${this.formatDate(this.results[i].expireDate)}</span>&nbsp;&nbsp;
            </div>
          </div>
        </div>${this.loadReportDetail()}`);
        console.log('dopa-moi.normal: ' + this.normalPdf[i]);
      }
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

  /**
   * Getter $results
   * @return {IDxc_Model_Moi_Dopa_Border_Passes[]}
   */
  public get $results(): IDxc_Model_Moi_Dopa_Border_Passes[] {
    return this.results;
  }

  /**
   * Setter $results
   * @param {IDxc_Model_Moi_Dopa_Border_Passes[]} value
   */
  public set $results(value: IDxc_Model_Moi_Dopa_Border_Passes[]) {
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
  public get $countResults(): number {
    return this.countResults;
  }

  /**
   * Setter $countResults
   * @param {number} value
   */
  public set $countResults(value: number) {
    this.countResults = value;
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

  public get $resultsCareer(): IDxc_Model_Moi_Dopa_Border_Passes[] {
      return this.resultsCareer;
  }
  public set $resultsCareer(value: IDxc_Model_Moi_Dopa_Border_Passes[]) {
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

  public get $resultsContact(): IDxc_Model_Moi_Dopa_Border_Passes[] {
    return this.resultsContact;
  }
  public set $resultsContact(value: IDxc_Model_Moi_Dopa_Border_Passes[]) {
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
