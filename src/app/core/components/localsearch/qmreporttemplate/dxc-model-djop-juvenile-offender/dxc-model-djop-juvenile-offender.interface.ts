import { Dxc_Model_Djop_JuvenileOffender } from "../../../../shared/models/Dxc_Model_Djop_JuvenileOffender";
import * as moment from 'moment';
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
export interface IReportDjopJuvenileOffender {
  model: Dxc_Model_Djop_JuvenileOffender;
}
@Injectable()
export class DjopJuvenileOffenderMetadata {
  private results: Dxc_Model_Djop_JuvenileOffender[];
  private obj: string;
  private show: boolean;
  private countResults: number;
  private listLefts: any[];
  private listAlgations: any[];
  private listNormals: any[];
  private listNormalPersons: any[];
  private algationPdf: string[];
  private count: number;
  reportName: string;
  reportOfTime: string;
  reportOfDate: string;
  html: string;
  private allegationPdfCount: string;
  constructor() {
    this.listLefts = [];
    this.listAlgations = [];
    this.listNormals = [];
    this.listNormalPersons = [];
    this.results = [];
    this.algationPdf = [];
    this.count = 0;
    this.allegationPdfCount = '';
  }
  public getHtml(selectData: Dxc_Model_Djop_JuvenileOffender, title: string) {

    return this.html = `<html>
      <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <style>
    @font-face {
      font-family: "THSarabunNew";
      src: url(https://search.dxc.go.th/public/font/THSarabunNew.ttf);
    }
    html {
      font-family: "THSarabunNew";
      height: 100%;
      width: 100%;
    }
    .watermark {
      content: "";
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
      content: "";
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
      content: "";
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
      content: "";
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
      content: "";
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
      content: "";
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
      content: "";
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
      content: "";
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
      content: "";
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
      content: "";
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
      content: "";
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
     content: "หน้า " counter(page) " / " counter(pages);
    }
    }
    /* repeating page background image */

    html {
      font-family: "THSarabunNew";
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
      content: "";
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
    <div class="table-responsive mt-4">
      <table border="1px" style="border-style:solid; border-color:#000; width:100%">
        <tr>
          <td align="center">${title}</td>
        </tr>
      </table>
      <br /><br />
      <div class="table-responsive mt-4">
              <table style="width:100%">
                  <tbody>
                      <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td colspan="3"></td>
                          <td colspan="3"></td>
                          <td colspan="3"></td>
                          <td style="color:black" align="left">เลขคดี/ปี</td>
                          <td style="color:blue" align="right">${selectData.caseId}/${selectData.caseYear}</td>
                      </tr>
                      <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                      </tr>
                      <tr>
                          <td style="color:black" >เลขประจำตัวประชาชน</td>
                          <td style="color:#0000ff">${selectData.citizenCardNumber}</td>
                          <td></td>
                          <td></td>
                      </tr>
                      <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                      </tr>
                      <tr>
                          <td style="color:black">ชื่อ</td>
                          <td style="color:blue">${selectData.firstName}</td>
                          <td style="color:black">นามสกุล</td>
                          <td style="color:blue">${selectData.lastName}</td>
                      </tr>
                      <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                      </tr>
                      <tr>
                          <td style="color:black">วันเกิด</td>
                          <td style="color:blue">${selectData.birthDate}</td>
                          <td style="color:black">เพศ</td>
                          <td style="color:blue">${selectData.sex}</td>
                      </tr>
                      <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                      </tr>
                      <tr>
                          <td style="color:black">ศูนย์ฝึก</td>
                          <td style="color:blue">${selectData.trainingUnitName}</td>
                          <td></td>
                          <td></td>
                      </tr>
                      <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                      </tr>
                      <tr>
                          <td style="color:black">ชื่อสถานพินิจ</td>
                          <td style="color:blue">${selectData.unitName}</td>
                          <td></td>
                          <td></td>
                      </tr>
                      <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                      </tr>
                      <tr>
                          <td style="color:black">วันที่เกิดเหตุ</td>
                          <td style="color:blue">${selectData.eventDate}</td>
                          <td style="color:black">วันที่รับตัว</td>
                          <td style="color:blue">${selectData.receiveDate}</td>
                      </tr>
                      <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                      </tr>
                      <tr>
                          <td style="color:black">วันที่ปล่อยตัว</td>
                          <td style="color:blue">${selectData.releaseDate}</td>
                          <td></td>
                          <td></td>
                      </tr>
                      <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                      </tr>
                      <tr>
                          <td style="color:black">ชื่อคดี (ข้อกล่าวหา)</td>
                          <td style="color:blue">${selectData.allegation}</td>
                          <td></td>
                          <td></td>
                      </tr>
                  </tbody>
              </table>
              </div>
      </div>
      </body>
      </html>

      `;
  }

  public viewgetHtml(selectData: Dxc_Model_Djop_JuvenileOffender, title: string) {
    return this.html = `<html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <script>
          $(document).ready(function() {
            $('#confirmDjopJuvenileOffender').click(function(){
              $('#djopJuvenileOffender').modal('toggle'); 
              $('#djopJuvenileOffender').on('hidden.bs.modal', function () {
                  $('body').addClass('modal-open');
              });
            });
            $('#close').click(function(){
              $('#djopJuvenileOffender').modal('toggle');  
              $('#djopJuvenileOffender').on('hidden.bs.modal', function () {
                  $('body').addClass('modal-open');
              });
            });
            $('#closeDjopJuvenileOffender').click(function(){
              $('#djopJuvenileOffender').modal('toggle');  
              $('#djopJuvenileOffender').on('hidden.bs.modal', function () {
                  $('body').addClass('modal-open');
              });
            });
            $("#djopJuvenileOffender").modal({
              show: false,
              backdrop: 'static'
            });
            $("#clickDjopJuvenileOffender").click(function() {
            $("#djopJuvenileOffender").modal("show");             
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
          <div class="ml-3">
            <div class="row mt-3">
                <div class="col-3"></div>
                <div class="col-3"></div>
                <div class="col-3">
                    <p class="text-white font-20">เลขคดี/ปี</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.caseId}/${selectData.caseYear}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                </div>
                <div class="col-3">
                <p class="text-success font-20">
                  <a id="clickDjopJuvenileOffender" type="button">${selectData.citizenCardNumber}<i class="material-icons">link</i></a>
                </p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">ชื่อ</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.firstName}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">นามสกุล</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.lastName}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">วันเกิด</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.birthDate}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">เพศ</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.sex}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">ศูนย์ฝึก</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.trainingUnitName}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">ชื่อสถานพินิจ</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.unitName}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">วันที่รับตัว</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.receiveDate}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">วันที่ปล่อยตัว</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.releaseDate}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">ชื่อคดี (ข้อกล่าวหา)</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.allegation}</p>
                </div>
            </div>
          </div>
        </div>
      </body>
      <div id="djopJuvenileOffender" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
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
              <button type="button" id="closeDjopJuvenileOffender" class="btn btn-danger">ยกเลิก</button>
              <a id="confirmDjopJuvenileOffender" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.citizenCardNumber}/0/0/0/0/0">ตกลง</a>				
            </div>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </html>
        `;
  }

  public viewgetHtmlSingleReport(selectData: Dxc_Model_Djop_JuvenileOffender, title: string) {
    return this.html = `<html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <script>
          $(document).ready(function() {
            $('#confirmDjopJuvenileOffender').click(function(){
              $('#djopJuvenileOffender').modal('toggle'); 
              $('#djopJuvenileOffender').on('hidden.bs.modal', function () {
                  $('body').addClass('modal-open');
              });
            });
            $('#close').click(function(){
              $('#djopJuvenileOffender').modal('toggle');  
              $('#djopJuvenileOffender').on('hidden.bs.modal', function () {
                  $('body').addClass('modal-open');
              });
            });
            $('#closeDjopJuvenileOffender').click(function(){
              $('#djopJuvenileOffender').modal('toggle');  
              $('#djopJuvenileOffender').on('hidden.bs.modal', function () {
                  $('body').addClass('modal-open');
              });
            });
            $("#djopJuvenileOffender").modal({
              show: false,
              backdrop: 'static'
            });
            $("#clickDjopJuvenileOffender").click(function() {
            $("#djopJuvenileOffender").modal("show");             
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
          <div class="ml-3">
            <div class="row mt-3">
                <div class="col-3"></div>
                <div class="col-3"></div>
                <div class="col-3">
                    <p class="text-white font-20">เลขคดี/ปี</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.caseId}/${selectData.caseYear}</p>
                </div>
            </div>
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
                    <p class="text-white font-20">ชื่อ</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.firstName}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">นามสกุล</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.lastName}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">วันเกิด</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.birthDate}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">เพศ</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.sex}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">ศูนย์ฝึก</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.trainingUnitName}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">ชื่อสถานพินิจ</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.unitName}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">วันที่รับตัว</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.receiveDate}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">วันที่ปล่อยตัว</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.releaseDate}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">ชื่อคดี (ข้อกล่าวหา)</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.allegation}</p>
                </div>
            </div>
          </div>
        </div>
      </body>
      <div id="djopJuvenileOffender" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
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
              <button type="button" id="closeDjopJuvenileOffender" class="btn btn-danger">ยกเลิก</button>
              <a id="confirmDjopJuvenileOffender" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.citizenCardNumber}/0/0/0/0/0">ตกลง</a>				
            </div>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </html>
        `;
  }
  public getSearchData() {
    //const schema = environment.qm.sub[0]['djop'].sub[0]['juvenileOffender'].schema;
    const schema = 'djop-juvenile-offender';
    if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {
    } else {
      this.show = true;
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length; // นับจำนวนรายการ
    }
  }

  public getalgationPdf() {
    const schema = environment.qm.sub[0]['djop'].sub[0]['juvenileOffender'].schema;
    //const schema = 'djop-juvenile-offender';
    if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {
      this.algationPdf = [];
      console.log('1.1');
    } else {
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length; // นับจำนวนรายการ
      this.allegationPdfCount = `<div class="col-md-11"
      class="row card singlereport-timeline-item list-normal-design-head-collapse">
      <span class="list-normal-design-underline depart">กรมพินิจและคุ้มครองเด็กและเยาวชน: </span>
      <span class="list-normal-design-underline departdata">เด็กหรือเยาวชนผู้กระทำผิด</span>
      <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ
      </span>
    </div>`;
      for (let i = 0; i < this.results.length; i++) {
        this.algationPdf.push(`<div class="col-md-11">
          <div class="section-criminal-results" style="text-indent:25px;
            font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
            <span class="list-normal-design-underline depart">เด็กหรือเยาวชนผู้กระทำผิด</span>
            <div style="padding-left:15px;">
              <strong class="report-field-title">ชื่อ</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
              ${this.changeNull(this.results[i].firstName)}
              ${this.changeNull(this.results[i].lastName)}
              </span>&nbsp;&nbsp;
              <strong class="report-field-title">ถูกจับดำเนินคดีเมื่อ</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
              ${this.formatDate(this.results[i].eventDate)}</span>&nbsp;&nbsp;
              <strong class="report-field-title">ฐานความผิด</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
              ${this.changeNull(this.results[i].allegation)}</span>&nbsp;&nbsp;
              <strong class="report-field-title">หน่วยงานเจ้าของคดี</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
              ${this.changeNull(this.results[i].unitName)}</span>&nbsp;&nbsp;
              <strong class="report-field-title">วันที่รับตัว</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
              ${this.formatDate(this.results[i].receiveDate)}</span>&nbsp;&nbsp;
              <strong class="report-field-title">ณ</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
              ${this.changeNull(this.results[i].trainingUnitName)}</span>&nbsp;&nbsp;
              <strong class="report-field-title">วันที่ปล่อยตัว</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
              ${this.formatDate(this.results[i].releaseDate)}</span>&nbsp;&nbsp;
            </div>
          </div>
        </div>${this.loadReportDetail()}`);
      }
      console.log('1.2');
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
  changeNull(selectData: string) {
    if (selectData === null || selectData === 'null') {
      return '-';
    } else {
      return selectData;
    }
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

  /**
   * Getter $listAlgations
   * @return {any[]}
   */
  public get $listAlgations(): any[] {
    return this.listAlgations;
  }

  /**
   * Setter $listAlgations
   * @param {any[]} value
   */
  public set $listAlgations(value: any[]) {
    this.listAlgations = value;
  }

  /**
   * Getter $listNormals
   * @return {any[]}
   */
  public get $listNormals(): any[] {
    return this.listNormals;
  }

  /**
   * Setter $listNormals
   * @param {any[]} value
   */
  public set $listNormals(value: any[]) {
    this.listNormals = value;
  }

  /**
   * Getter $listNormalPersons
   * @return {any[]}
   */
  public get $listNormalPersons(): any[] {
    return this.listNormalPersons;
  }

  /**
   * Setter $listNormalPersons
   * @param {any[]} value
   */
  public set $listNormalPersons(value: any[]) {
    this.listNormalPersons = value;
  }

  /**
   * Getter $algationPdf
   * @return {string[]}
   */
  public get $algationPdf(): string[] {
    return this.algationPdf;
  }

  /**
   * Setter $algationPdf
   * @param {string[]} value
   */
  public set $algationPdf(value: string[]) {
    this.algationPdf = value;
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
   * Getter $listLefts
   * @return {any[]}
   */
  public get $listLefts(): any[] {
    return this.listLefts;
  }

  /**
   * Setter $listLefts
   * @param {any[]} value
   */
  public set $listLefts(value: any[]) {
    this.listLefts = value;
  }

  /**
   * Getter $results
   * @return {Dxc_Model_Djop_JuvenileOffender[]}
   */
  public get $results(): Dxc_Model_Djop_JuvenileOffender[] {
    return this.results;
  }

  /**
   * Setter $results
   * @param {Dxc_Model_Djop_JuvenileOffender[]} value
   */
  public set $results(value: Dxc_Model_Djop_JuvenileOffender[]) {
    this.results = value;
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
}
