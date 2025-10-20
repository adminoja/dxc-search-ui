import * as moment from 'moment';
import { IDxc_Model_Doc_Reg_seize } from '../../../../shared/models/Dxc_Model_Doc_Reg_seize';
import { Utils } from '../../../../shared/utils/Utils';
import { environment } from 'src/environments/environment';
import { Injectable } from "@angular/core";

export interface IReportDocRegseize {
  model: IDxc_Model_Doc_Reg_seize;
}

@Injectable()
export class DocRegseizeMetadata {
  /**
   * ประกาศตัวแปร
   */
  reportName: string;
  reportOfTime: string;
  reportOfDate: string;
  private results: IDxc_Model_Doc_Reg_seize[];
  private obj: string;
  private show: boolean;
  private util: Utils;
  private allegationPdf: string[];
  private count: number;
  private allegationPdfCount: string;
  html: string;

  constructor() {
    /**
     * set ค่าให้มัน
     */
    this.util = new Utils();
    this.allegationPdf = [];
    this.results = [];
    this.count = 0;
    this.allegationPdfCount = '';
    moment.locale('th');
  }
  /**
   * แสดงข้อมูลส่วนของรายงาน PDF (LocalShearch)
   */
  public getHtml(selectData: IDxc_Model_Doc_Reg_seize, title: string) {

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
        <td align="center">ฐานข้อมูล${title}</td>
      </tr>
    </table>
    <br/>
  ${selectData.wartermarks}
  <table style="width:100%" border="0">
                    <tr>
                        <td style="width: 19%;">&nbsp;</td>
                        <td style="width: 19%;">&nbsp;</td>
                        <td style="width: 14%;">&nbsp;</td>
                        <td style="width: 18%;">&nbsp;</td>
                        <td style="width: 16%;">&nbsp;</td>
                        <td style="width: 14%;">&nbsp;</td>
                   </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>รหัสข้อมูล</td>
                        <td colspan="2" style="color:blue"><span class="text-info">${selectData.id}</span></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>เลขที่นักโทษ</td>
                        <td style="color:blue" ><span class="text-info">${selectData.prisonerId}</span></td>
                    </tr>

                    <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                    </tr>
                    <tr>
                        <td colspan="2">เลขประจำตัวประชาชนผู้ถูกอายัดตัว</td>
                        <td style="color:blue">
                        <a target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.citizenCardNumber}/0/0/0/0/0">${selectData.citizenCardNumber}</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>ชื่อ</td>
                            <td style="color:blue"><span class="text-info">${selectData.firstname}</span></td>
                        <td>สกุล</td>
                            <td style="color:blue"><span class="text-info">${selectData.lastname}</span></td>
                    </tr>
                    <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>รหัสหนังสืออายัด</td>
                            <td style="color:blue"><span class="text-info">${selectData.seizeBookNo}</span></td>
                        <td>วันที่หนังสืออายัด</td>
                            <td  style="color:blue"><span class="text-info">${selectData.seizeBookDate}</span></td>
                        <td>เจ้าของการอายัด</td>
                            <td style="color:blue"><span class="text-info">${selectData.seizeOwner}</span></td>
                    </tr>
                    <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>ฐานอายัด</td>
                        <td  style="color:blue"><span class="text-info">${selectData.seizeBaseDesc}</span></td>
                        <td>เลขอายัด</td>
                            <td  style="color:blue"><span class="text-info">${selectData.seizeWarrantNo}</span></td>
                        <td>วันที่อายัด</td>
                            <td style="color:blue"><span class="text-info">${selectData.seizeWarrantDate}</span></td>
                    </tr>
                    <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>ข้อคิดเห็นการอายัด</td>
                            <td style="color:blue"><span class="text-info">${selectData.seizeRemark}</span></td>
                        <td>จังหวัดที่อายัด</td>
                            <td style="color:blue"><span class="text-info">${selectData.seizeProvinceDesc}</span></td>
                        <td>รหัสหนังสือถอนอายัด</td>
                        <td style="color:blue"><span class="text-info">${selectData.seizeWithdrawBookNo}</span></td>
                    </tr>
                    <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>วันที่หนังสือถอนอายัด</td>
                            <td style="color:blue"><span class="text-info">${selectData.seizeWithdrawBookDate}</span></td>
                        <td>ข้อคิดเห็นถอนอายัด</td>
                            <td  style="color:blue"><span class="text-info">${selectData.seizeWithdrawRemark}</span></td>
                        <td>ลงวันที่ศาลสั่ง</td>
                            <td  style="color:blue"><span class="text-info">${selectData.seizeCaseDate}</span></td>
                    </tr>
                    <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>จำคุกอยู่ที่</td>
                            <td style="color:blue"><span class="text-info">${selectData.seizePrisonName}</span></td>
                        <td>สถานะอายัดตัว</td>
                        <td style="color:blue"><span class="text-info">${selectData.seizeStatusName}</span></td>
                        <td>ประเภทอายัดตัว</td>
                        <td style="color:blue"><span class="text-info">${selectData.seizeTypeName}</span></td>
                    </tr>

                </table>

  </div>
  </body>
</html>`;

  }
  /**
   *  แสดงข้อมูลรายละเอียดฝั่งขวา (LocalSearch)
   */
  public viewgetHtml(selectData: IDxc_Model_Doc_Reg_seize, title: string) {

    return this.html = `<html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            <script>
              $(document).ready(function() {
                $('#confirmDocRegseize').click(function(){
                  $('#docRegseize').modal('toggle'); 
                  $('#docRegseize').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $('#close').click(function(){
                  $('#docRegseize').modal('toggle');  
                  $('#docRegseize').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $('#closeDocRegseize').click(function(){
                  $('#docRegseize').modal('toggle');  
                  $('#docRegseize').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $("#docRegseize").modal({
                  show: false,
                  backdrop: 'static'
                });
                $("#clickDocRegseize").click(function() {
                $("#docRegseize").modal("show");             
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
                <br />
                <br />
                <table style="width:100%" border="0">
                    <tr>
                        <td style="width: 19%;">&nbsp;</td>
                        <td style="width: 19%;">&nbsp;</td>
                        <td style="width: 14%;">&nbsp;</td>
                        <td style="width: 18%;">&nbsp;</td>
                        <td style="width: 16%;">&nbsp;</td>
                        <td style="width: 14%;">&nbsp;</td>
                   </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><span class="text-white font-20">รหัสข้อมูล</span></td>
                        <td colspan="2" style="color:blue"><span class="text-success font-20">${selectData.id}</span></td>
                    </tr>
                    <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><span class="text-white font-20">เลขที่นักโทษ</span></td>
                        <td style="color:blue" ><span class="text-success font-20">${selectData.prisonerId}</span></td>
                    </tr>

                    <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                    </tr>
                    <tr>
                        <td><span class="text-white font-20">เลขประจำตัวประชาชนผู้ถูกอายัดตัว</span></td>
                        <td style="color:blue">
                        <a class="text-success font-20" id="clickDocRegseize" type="button">
                        ${selectData.citizenCardNumber} <i class="material-icons">link</i></a>
                        </td>
                    </tr>
                    <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                    </tr>
                    <tr>
                        <td><span class="text-white font-20">ชื่อ</span></td>
                            <td style="color:blue"><span class="text-success font-20">${selectData.firstname}</span></td>
                        <td><span class="text-white font-20">สกุล</span></td>
                            <td style="color:blue"><span class="text-success font-20">${selectData.lastname}</span></td>
                    </tr>
                    <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                    </tr>
                    <tr>
                        <td><span class="text-white font-20">รหัสหนังสืออายัด</span></td>
                            <td style="color:blue"><span class="text-success font-20">${selectData.seizeBookNo}</span></td>
                        <td><span class="text-white font-20">วันที่หนังสืออายัด</span></td>
                            <td  style="color:blue"><span class="text-success font-20">${selectData.seizeBookDate}</span></td>
                        <td><span class="text-white font-20">เจ้าของการอายัด</span></td>
                            <td style="color:blue"><span class="text-success font-20">${selectData.seizeOwner}</span></td>
                    </tr>
                    <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                    </tr>
                    <tr>
                        <td><span class="text-white font-20">ฐานอายัด</span></td>
                        <td  style="color:blue"><span class="text-success font-20">${selectData.seizeBaseDesc}</span></td>
                        <td><span class="text-white font-20">เลขอายัด</span></td>
                            <td  style="color:blue"><span class="text-success font-20">${selectData.seizeWarrantNo}</span></td>
                        <td><span class="text-white font-20">วันที่อายัด</span></td>
                            <td style="color:blue"><span class="text-success font-20">${selectData.seizeWarrantDate}</span></td>
                    </tr>
                    <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                    </tr>
                    <tr>
                        <td><span class="text-white font-20">ข้อคิดเห็นการอายัด</span></td>
                            <td style="color:blue"><span class="text-success font-20">${selectData.seizeRemark}</span></td>
                        <td><span class="text-white font-20">จังหวัดที่อายัด</span></td>
                            <td style="color:blue"><span class="text-success font-20">${selectData.seizeProvinceDesc}</span></td>
                        <td><span class="text-white font-20">รหัสหนังสือถอนอายัด</span></td>
                        <td style="color:blue"><span class="text-success font-20">${selectData.seizeWithdrawBookNo}</span></td>
                    </tr>
                    <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                    </tr>
                    <tr>
                        <td><span class="text-white font-20">วันที่หนังสือถอนอายัด</span></td>
                            <td style="color:blue"><span class="text-success font-20">${selectData.seizeWithdrawBookDate}</span></td>
                        <td><span class="text-white font-20">ข้อคิดเห็นถอนอายัด</span></td>
                            <td  style="color:blue"><span class="text-success font-20">${selectData.seizeWithdrawRemark}</span></td>
                        <td><span class="text-white font-20">ลงวันที่ศาลสั่ง</span></td>
                            <td  style="color:blue"><span class="text-success font-20">${selectData.seizeCaseDate}</span></td>
                    </tr>
                    <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                    </tr>
                    <tr>
                        <td><span class="text-white font-20">จำคุกอยู่ที่</span></td>
                            <td style="color:blue"><span class="text-success font-20">${selectData.seizePrisonName}</span></td>
                        <td><span class="text-white font-20">สถานะอายัดตัว</span></td>
                        <td style="color:blue"><span class="text-success font-20">${selectData.seizeStatusName}</span></td>
                        <td><span class="text-white font-20">ประเภทอายัดตัว</span></td>
                        <td style="color:blue"><span class="text-success font-20">${selectData.seizeTypeName}</span></td>
                    </tr>

                </table>
            </div>
        </body>
        <div id="docRegseize" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
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
                <button type="button" id="closeDocRegseize" class="btn btn-danger">ยกเลิก</button>
                <a id="confirmDocRegseize" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.citizenCardNumber}/0/0/0/0/0">ตกลง</a>				
              </div>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </html>`;

  }

  public viewgetHtmlSingleReport(selectData: IDxc_Model_Doc_Reg_seize, title: string) {

    return this.html = `<html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            <script>
              $(document).ready(function() {
                $('#confirmDocRegseize').click(function(){
                  $('#docRegseize').modal('toggle'); 
                  $('#docRegseize').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $('#close').click(function(){
                  $('#docRegseize').modal('toggle');  
                  $('#docRegseize').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $('#closeDocRegseize').click(function(){
                  $('#docRegseize').modal('toggle');  
                  $('#docRegseize').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $("#docRegseize").modal({
                  show: false,
                  backdrop: 'static'
                });
                $("#clickDocRegseize").click(function() {
                $("#docRegseize").modal("show");             
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
                <br />
                <br />
                <table style="width:100%" border="0">
                    <tr>
                        <td style="width: 19%;">&nbsp;</td>
                        <td style="width: 19%;">&nbsp;</td>
                        <td style="width: 14%;">&nbsp;</td>
                        <td style="width: 18%;">&nbsp;</td>
                        <td style="width: 16%;">&nbsp;</td>
                        <td style="width: 14%;">&nbsp;</td>
                   </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><span class="text-white font-20">รหัสข้อมูล</span></td>
                        <td colspan="2" style="color:blue"><span class="text-success font-20">${selectData.id}</span></td>
                    </tr>
                    <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><span class="text-white font-20">เลขที่นักโทษ</span></td>
                        <td style="color:blue" ><span class="text-success font-20">${selectData.prisonerId}</span></td>
                    </tr>

                    <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                    </tr>
                    <tr>
                        <td><span class="text-white font-20">เลขประจำตัวประชาชนผู้ถูกอายัดตัว</span></td>
                        <td style="color:blue"><span class="text-success font-20">${selectData.citizenCardNumber}</span></td>
                    </tr>
                    <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                    </tr>
                    <tr>
                        <td><span class="text-white font-20">ชื่อ</span></td>
                            <td style="color:blue"><span class="text-success font-20">${selectData.firstname}</span></td>
                        <td><span class="text-white font-20">สกุล</span></td>
                            <td style="color:blue"><span class="text-success font-20">${selectData.lastname}</span></td>
                    </tr>
                    <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                    </tr>
                    <tr>
                        <td><span class="text-white font-20">รหัสหนังสืออายัด</span></td>
                            <td style="color:blue"><span class="text-success font-20">${selectData.seizeBookNo}</span></td>
                        <td><span class="text-white font-20">วันที่หนังสืออายัด</span></td>
                            <td  style="color:blue"><span class="text-success font-20">${selectData.seizeBookDate}</span></td>
                        <td><span class="text-white font-20">เจ้าของการอายัด</span></td>
                            <td style="color:blue"><span class="text-success font-20">${selectData.seizeOwner}</span></td>
                    </tr>
                    <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                    </tr>
                    <tr>
                        <td><span class="text-white font-20">ฐานอายัด</span></td>
                        <td  style="color:blue"><span class="text-success font-20">${selectData.seizeBaseDesc}</span></td>
                        <td><span class="text-white font-20">เลขอายัด</span></td>
                            <td  style="color:blue"><span class="text-success font-20">${selectData.seizeWarrantNo}</span></td>
                        <td><span class="text-white font-20">วันที่อายัด</span></td>
                            <td style="color:blue"><span class="text-success font-20">${selectData.seizeWarrantDate}</span></td>
                    </tr>
                    <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                    </tr>
                    <tr>
                        <td><span class="text-white font-20">ข้อคิดเห็นการอายัด</span></td>
                            <td style="color:blue"><span class="text-success font-20">${selectData.seizeRemark}</span></td>
                        <td><span class="text-white font-20">จังหวัดที่อายัด</span></td>
                            <td style="color:blue"><span class="text-success font-20">${selectData.seizeProvinceDesc}</span></td>
                        <td><span class="text-white font-20">รหัสหนังสือถอนอายัด</span></td>
                        <td style="color:blue"><span class="text-success font-20">${selectData.seizeWithdrawBookNo}</span></td>
                    </tr>
                    <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                    </tr>
                    <tr>
                        <td><span class="text-white font-20">วันที่หนังสือถอนอายัด</span></td>
                            <td style="color:blue"><span class="text-success font-20">${selectData.seizeWithdrawBookDate}</span></td>
                        <td><span class="text-white font-20">ข้อคิดเห็นถอนอายัด</span></td>
                            <td  style="color:blue"><span class="text-success font-20">${selectData.seizeWithdrawRemark}</span></td>
                        <td><span class="text-white font-20">ลงวันที่ศาลสั่ง</span></td>
                            <td  style="color:blue"><span class="text-success font-20">${selectData.seizeCaseDate}</span></td>
                    </tr>
                    <tr>
                        <td style="height: 5px;" colspan="6">&nbsp;</td>
                    </tr>
                    <tr>
                        <td><span class="text-white font-20">จำคุกอยู่ที่</span></td>
                            <td style="color:blue"><span class="text-success font-20">${selectData.seizePrisonName}</span></td>
                        <td><span class="text-white font-20">สถานะอายัดตัว</span></td>
                        <td style="color:blue"><span class="text-success font-20">${selectData.seizeStatusName}</span></td>
                        <td><span class="text-white font-20">ประเภทอายัดตัว</span></td>
                        <td style="color:blue"><span class="text-success font-20">${selectData.seizeTypeName}</span></td>
                    </tr>

                </table>
            </div>
        </body>
    </html>`;

  }
  /**
   * ดึงข้อมูลไปที่หน้า Single Report, ส่วนข้อมูลด้านซ้าย, ส่วนข้อมูลประวัติกระทำผิด,
  ส่วนข้อมูลประวัติทั่วไป, ส่วนของ Report 2, ส่วนของ Report 3
   */
  public getSearchData() {
    const schema = 'doc-reg-seize';
    // const schema = environment.qm.sub[0]['doc'].sub[0]['regseize'].schema;
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
  /**
   * ดึงข้อมูลไปที่ PDF ประวัติการกระทำผิด (Single Report)
   */
  public getallegationPdf() {
    const schema = 'doc-reg-seize';
    // const schema = environment.qm.sub[0]['doc'].sub[0]['regseize'].schema;
    if (localStorage.getItem(schema + 'Results') === '[]' ||
      localStorage.getItem(schema + 'Results') === null) {

      this.allegationPdf = []; // Doc
      console.log('3.1');
    } else {
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length; // นับจำนวนรายการ
      this.allegationPdfCount = `<div class="col-md-11"
      class="row card singlereport-timeline-item list-normal-design-head-collapse">
      <span class="list-normal-design-underline depart">กรมราชทัณฑ์: </span>
      <span class="list-normal-design-underline departdata">อายัดตัวผู้ต้องขัง</span>
      <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ
      </span>
    </div>`;
      this.loadReportDetail();
      for (let i = 0; i < this.results.length; i++) {
        this.allegationPdf.push(
          `<div class="col-md-11">
            <div class="section-criminal-results" style="text-indent:25px;
                font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
            <span class="list-normal-design-underline depart">อายัดตัวผู้ต้องขัง</span>

            <div style="padding-left:15px;">
            <strong class="report-field-title">ชื่อ-สกุลผู้ถูกอายัด
            </strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
                  ${this.changeNull(this.results[i].firstname)}
                  ${this.changeNull(this.results[i].lastname)}
              </span>&nbsp;&nbsp;
            <strong class="report-field-title">โทษฐานอายัด
            </strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
                  ${this.changeNull(this.results[i].seizeBase)}
              </span>&nbsp;&nbsp;
            <strong class="report-field-title">ลงวันที่ตามศาลสั่ง
            </strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
                  ${this.changeNull(moment(this.results[i].seizeCaseDate).format('LL'))}
              </span>&nbsp;&nbsp;
            <strong class="report-field-title">จำคุกอยู่ที่
            </strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
                  ${this.changeNull(this.results[i].seizePrisonName)}
              </span>&nbsp;&nbsp;
            </div>

            </div>
          </div>${this.loadReportDetail()}`);
        console.log('DJOP.allegation' + this.allegationPdf[i]);
      }
      console.log('3.2');
    }
  }
  /**
   * ลายน้ำ
   */
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
  /**
   * เช็คค่าว่างของข้อมูล
   */
  public changeNull(selectData: string) {
    if (selectData == null || selectData == undefined) {
      return '-';
    } else {
      return selectData;
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
   * @return {IDxc_Model_Doc_Reg_seize[]}
   */
  public get $results(): IDxc_Model_Doc_Reg_seize[] {
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
   * @param {IDxc_Model_Doc_Reg_seize[]} value
   */
  public set $results(value: IDxc_Model_Doc_Reg_seize[]) {
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
