import * as moment from 'moment';
import { IDxc_Model_Doe_Moi_Alien_Workforces } from '../../../../shared/models/Dxc_Model_Doe_Moi_Alien_Workforces';
import { Utils } from '../../../../shared/utils/Utils';
import { Injectable } from "@angular/core";

export interface IReportDoeMoiAlienWorkforces {
  model: IDxc_Model_Doe_Moi_Alien_Workforces;
}

@Injectable()
export class DoeMoiAlienWorkforcesMetadata {
  reportName: string;
  reportOfTime: string;
  reportOfDate: string;
  html: string;
  private results: IDxc_Model_Doe_Moi_Alien_Workforces[];
  private obj: string;
  private show: boolean;
  private util: Utils;
  private count: number;
  private normalPdf: string[];
  private normalPdfCount: string;

  constructor() {
    this.util = new Utils();
    this.results = [];
    this.count = 0;
    this.normalPdf = [];
    this.normalPdfCount = '';
    moment.locale('th');
  }
  public getHtml(selectData: IDxc_Model_Doe_Moi_Alien_Workforces, title: string) {

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
  <table style="width:100%">

                        <td>เลขประจำตัวคนต่างด้าว</td>
                        <td colspan="2"style="color: blue;" colspan="" data-attributename="citizenCardNumber"
                            data-role="dxc-hyperlink" data-value="${selectData.citizenCardNumber}">
                            <span class="text-info">${selectData.citizenCardNumber}</span>
                        </td>
                    </tr>

                    <tr>
                        <td style="height: 5px;" colspan="8">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>ชื่อ-นามสกุลต่างด้าว (ไทย)</td>
                            <td style="color: blue;"><span class="text-info">${selectData.alienFullNmaeTh}</span></td>
                        <td colspan="2">ชื่อ-นามสกุลต่างด้าว (อังกฤษ)</td>
                            <td style="color: blue;" ><span class="text-info">${selectData.alienFullNmaeEn}</span></td>
                        <td colspan="2">วัน เดือน ปี เกิด คนต่างด้าว</td>
                            <td style="color: blue;" ><span class="text-info">${selectData.alienBirthDate}</span></td>
                    </tr>

                    <tr>
                        <td style="height: 5px;" colspan="8">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>เพศคนต่างด้าว</td>
                            <td style="color: blue;" ><span class="text-info">${selectData.alienSex}</span></td>
                        <td colspan="2">สัญชาติคนต่างด้าว</td>
                            <td style="color: blue;" ><span class="text-info">${selectData.alienNation}</span></td>
                        <td colspan="2">ตำแหน่ง/อาชีพ/วิชาชีพ</td>
                            <td style="color: blue;" ><span class="text-info">${selectData.occupation}</span></td>
                    </tr>

                    <tr>
                        <td style="height: 5px;" colspan="8">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>ที่อยู่ปัจจุบันคนต่างด้าว</td>
                            <td style="color: blue;" colspan="7"><span class="text-info">${selectData.alienAddress}</span></td>

                    </tr>

                    <tr>
                        <td style="height: 5px;" colspan="8">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>เลขหนังสือเดินทางคนต่างด้าว</td>
                            <td style="color: blue;" colspan="2"><span class="text-info">${selectData.alienPassportNumber}</span></td>
                        <td colspan="">เลขใบอนุญาตทำงาน</td>
                            <td style="color: blue;" colspan=""><span class="text-info">${selectData.workPermitNo}</span></td>
                        <td colspan="2">วันที่ออกใบอนุญาตทำงาน</td>
                            <td style="color: blue;" colspan=""><span class="text-info">${selectData.workPermitIssuedDate}</span></td>
                    </tr>

                    <tr>
                        <td style="height: 5px;" colspan="8">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>วันที่ใบอนุญาตทำงานหมดอายุ</td>
                            <td style="color: blue;" colspan="2"><span class="text-info">${selectData.workPermitExpireDate}</span></td>
                        <td colspan="">อายุใบอนุญาต</td>
                            <td style="color: blue;" colspan=""><span class="text-info">${selectData.periodOfPermitValidity}</span></td>
                        <td colspan="2">ประเภทงานที่ได้รับอนุญาต</td>
                            <td style="color: blue;" colspan=""><span class="text-info">${selectData.permittedCategoryOfWork}</span></td>
                    </tr>

                    <tr>
                        <td style="height: 5px;" colspan="8">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>ท้องที่ที่ได้รับอนุญาตให้ทำงาน</td>
                            <td style="color: blue;" colspan="2"><span class="text-info">${selectData.permittedLocalityOfWork}</span></td>
                        <td colspan="">จังหวัดที่ออกใบอนุญาตทำงาน</td>
                            <td style="color: blue;" colspan=""><span class="text-info">${selectData.workPermitIssuedAt}</span></td>
                        <td colspan="2">วันที่ออกใบอนุญาตทำงาน</td>
                            <td style="color: blue;" colspan=""><span class="text-info">${selectData.workPermitIssuedDate}</span></td>
                    </tr>

                    <tr>
                        <td style="height: 5px;" colspan="8">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>ผลลัพธ์จากการตรวจสอบ</td>
                            <td style="color: blue;" colspan="2"><span class="text-info">${selectData.chkResult}</span></td>
                        <td colspan="">ชื่อนายจ้าง/สถานประกอบการ</td>
                            <td style="color: blue;" colspan=""><span class="text-info">${selectData.employerName}</span></td>
                        <td colspan="2">ประเภทนายจ้าง/สถานประกอบการ</td>
                            <td style="color: blue;" colspan=""><span class="text-info">${selectData.employerType}</span></td>
                    </tr>

                     <tr>
                        <td style="height: 5px;" colspan="8">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>ที่ตั้งสถานที่ทำงาน</td>
                            <td style="color: blue;" colspan="2"><span class="text-info">${selectData.addressOfPlaceOfWork}</span></td>
                        <td colspan="">ลักษณะงาน</td>
                            <td style="color: blue;" colspan="4"><span class="text-info">${selectData.natureOfWork}</span></td>

                    </tr>
                     <tr>
                        <td style="height: 5px;" colspan="8">&nbsp;</td>
                    </tr>
                    <tr>
                        <td colspan="2">รหัสข้อผิดพลาด อ้างอิงตามภาคผนวก</td>
                            <td style="color: blue;" colspan="2"><span class="text-info">${selectData.errorNumber}</span></td>
                        <td colspan="">คำอธิบายข้อผิดพลาด</td>
                            <td style="color: blue;" colspan=""><span class="text-info">${selectData.errorDesc}</span></td>
                    </tr>

                </tbody>
            </table>
        </div>

</body>
</html>`;
  }

  public viewgetHtml(selectData: IDxc_Model_Doe_Moi_Alien_Workforces, title: string) {

    return this.html = `<html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            <script>
              $(document).ready(function() {
                $('#confirmDoeMoiAlienWorkforces').click(function(){
                  $('#doeMoiAlienWorkforces').modal('toggle'); 
                  $('#doeMoiAlienWorkforces').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $('#close').click(function(){
                  $('#doeMoiAlienWorkforces').modal('toggle');  
                  $('#doeMoiAlienWorkforces').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $('#closeDoeMoiAlienWorkforces').click(function(){
                  $('#doeMoiAlienWorkforces').modal('toggle');
                  $('#doeMoiAlienWorkforces').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });  
                });
                $("#doeMoiAlienWorkforces").modal({
                  show: false,
                  backdrop: 'static'
                });
                $("#clickDoeMoiAlienWorkforces").click(function() {
                $("#doeMoiAlienWorkforces").modal("show");             
                });
              });
            </script>
        </head>

        <body>
        <div>
            <table class="table" border="2px" width="100%">
                <tbody>
                    <tr>
                        <td align="center" class="text-white font-20">${title}</td>
                    </tr>
                </tbody>
            </table>
            <br /> <br />
            <table style="width: 100%;">
                <tbody>
                    <tr>
                        <td style="width: 15%;">&nbsp;</td>
                        <td style="width: 10%;">&nbsp;</td>
                        <td style="width: 7%;">&nbsp;</td>
                        <td style="width: 0%;">&nbsp;</td>
                        <td style="width: 0%;">&nbsp;</td>
                        <td style="width: 5%;">&nbsp;</td>
                        <td style="width: 14%;">&nbsp;</td>
                        <td style="width: 20%;">&nbsp;</td>
                    </tr>

                        <td><span class="text-white font-20">เลขประจำตัวคนต่างด้าว</span></td>
                        <td colspan="2"style="color: blue;">
                        <a class="text-success font-20" id="clickDoeMoiAlienWorkforces" type="button">
                        ${selectData.citizenCardNumber} <i class="material-icons">link</i></a>
                        </td>
                    </tr>

                    <tr>
                        <td style="height: 5px;" colspan="8">&nbsp;</td>
                    </tr>
                    <tr>
                        <td><span class="text-white font-20">ชื่อ-นามสกุลต่างด้าว (ไทย)</span></td>
                            <td style="color: blue;"><span class="text-success">${selectData.alienFullNmaeTh}</span></td>
                        <td colspan="2"><span class="text-white font-20">ชื่อ-นามสกุลต่างด้าว (อังกฤษ)</span></td>
                            <td style="color: blue;" ><span class="text-success">${selectData.alienFullNmaeEn}</span></td>
                        <td colspan="2">วัน เดือน ปี เกิด คนต่างด้าว</span></td>
                            <td style="color: blue;" ><span class="text-success">${selectData.alienBirthDate}</span></td>
                    </tr>

                    <tr>
                        <td style="height: 5px;" colspan="8">&nbsp;</td>
                    </tr>
                    <tr>
                        <td><span class="text-white font-20">เพศคนต่างด้าว</span></td>
                            <td style="color: blue;" ><span class="text-success">${selectData.alienSex}</span></td>
                        <td colspan="2"><span class="text-white font-20">สัญชาติคนต่างด้าว</span></td>
                            <td style="color: blue;" ><span class="text-success">${selectData.alienNation}</span></td>
                        <td colspan="2"><span class="text-white font-20">ตำแหน่ง/อาชีพ/วิชาชีพ</span></td>
                            <td style="color: blue;" ><span class="text-success">${selectData.occupation}</span></td>
                    </tr>

                    <tr>
                        <td style="height: 5px;" colspan="8">&nbsp;</td>
                    </tr>
                    <tr>
                        <td><span class="text-white font-20">ที่อยู่ปัจจุบันคนต่างด้าว</span></td>
                            <td style="color: blue;" colspan="7"><span class="text-success">${selectData.alienAddress}</span></td>

                    </tr>

                    <tr>
                        <td style="height: 5px;" colspan="8">&nbsp;</td>
                    </tr>
                    <tr>
                        <td><span class="text-white font-20">เลขหนังสือเดินทางคนต่างด้าว</span></td>
                            <td style="color: blue;" colspan="2"><span class="text-success">${selectData.alienPassportNumber}</span></td>
                        <td colspan=""><span class="text-white font-20">เลขใบอนุญาตทำงาน</span></td>
                            <td style="color: blue;" colspan=""><span class="text-success">${selectData.workPermitNo}</span></td>
                        <td colspan="2"><span class="text-white font-20">วันที่ออกใบอนุญาตทำงาน</span></td>
                            <td style="color: blue;" colspan=""><span class="text-success">${selectData.workPermitIssuedDate}</span></td>
                    </tr>

                    <tr>
                        <td style="height: 5px;" colspan="8">&nbsp;</td>
                    </tr>
                    <tr>
                        <td><span class="text-white font-20">วันที่ใบอนุญาตทำงานหมดอายุ</span></td>
                            <td style="color: blue;" colspan="2"><span class="text-success">${selectData.workPermitExpireDate}</span></td>
                        <td colspan=""><span class="text-white font-20">อายุใบอนุญาต</span></td>
                            <td style="color: blue;" colspan=""><span class="text-success">${selectData.periodOfPermitValidity}</span></td>
                        <td colspan="2"><span class="text-white font-20">ประเภทงานที่ได้รับอนุญาต</span></td>
                            <td style="color: blue;" colspan=""><span class="text-success">${selectData.permittedCategoryOfWork}</span></td>
                    </tr>

                    <tr>
                        <td style="height: 5px;" colspan="8">&nbsp;</td>
                    </tr>
                    <tr>
                        <td><span class="text-white font-20">ท้องที่ที่ได้รับอนุญาตให้ทำงาน</span></td>
                            <td style="color: blue;" colspan="2"><span class="text-success">${selectData.permittedLocalityOfWork}</span></td>
                        <td colspan=""><span class="text-white font-20">จังหวัดที่ออกใบอนุญาตทำงาน</span></td>
                            <td style="color: blue;" colspan=""><span class="text-success">${selectData.workPermitIssuedAt}</span></td>
                        <td colspan="2"><span class="text-white font-20">วันที่ออกใบอนุญาตทำงาน</span></td>
                            <td style="color: blue;" colspan=""><span class="text-success">${selectData.workPermitIssuedDate}</span></td>
                    </tr>

                    <tr>
                        <td style="height: 5px;" colspan="8">&nbsp;</td>
                    </tr>
                    <tr>
                        <td><span class="text-white font-20">ผลลัพธ์จากการตรวจสอบ</span></td>
                            <td style="color: blue;" colspan="2"><span class="text-success">${selectData.chkResult}</span></td>
                        <td colspan=""><span class="text-white font-20">ชื่อนายจ้าง/สถานประกอบการ</span></td>
                            <td style="color: blue;" colspan=""><span class="text-success">${selectData.employerName}</span></td>
                        <td colspan="2"><span class="text-white font-20">ประเภทนายจ้าง/สถานประกอบการ</span></td>
                            <td style="color: blue;" colspan=""><span class="text-success">${selectData.employerType}</span></td>
                    </tr>

                     <tr>
                        <td style="height: 5px;" colspan="8">&nbsp;</td>
                    </tr>
                    <tr>
                        <td><span class="text-white font-20">ที่ตั้งสถานที่ทำงาน</span></td>
                            <td style="color: blue;" colspan="2"><span class="text-success">${selectData.addressOfPlaceOfWork}</span></td>
                        <td colspan=""><span class="text-white font-20">ลักษณะงาน</span></td>
                            <td style="color: blue;" colspan="4"><span class="text-success">${selectData.natureOfWork}</span></td>

                    </tr>
                     <tr>
                        <td style="height: 5px;" colspan="8">&nbsp;</td>
                    </tr>
                    <tr>
                        <td colspan="2"><span class="text-white font-20">รหัสข้อผิดพลาด อ้างอิงตามภาคผนวก</span></td>
                            <td style="color: blue;" colspan="2"><span class="text-success">${selectData.errorNumber}</span></td>
                        <td colspan=""><span class="text-white font-20">คำอธิบายข้อผิดพลาด</span></td>
                            <td style="color: blue;" colspan=""><span class="text-success">${selectData.errorDesc}</span></td>
                    </tr>

                </tbody>
            </table>
        </div>
        </body>
        <div id="doeMoiAlienWorkforces" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
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
                <button type="button" id="closeDoeMoiAlienWorkforces" class="btn btn-danger">ยกเลิก</button>
                <a id="confirmDoeMoiAlienWorkforces" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.citizenCardNumber}/0/0/0/0/0">ตกลง</a>				
              </div>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
      </html>`;
  }
  public getSearchData() {
    const schema = 'doe-moi-doe-alien-workforces';
    if (localStorage.getItem(schema + 'Results') === '[]' ||
      localStorage.getItem(schema + 'Results') === null) {

      console.log('41');
    } else {
      this.show = true;
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length;

      console.log('42' + this.results);
    }
  }
  public getnormalPdf() {
    // const schema = environment.qm.sub[0]['doe'].sub[0]['alienworkforces'].schema;
    const schema = 'doe-moi-doe-alien-workforces';
    if (localStorage.getItem(schema + 'Results') === '[]' ||
      localStorage.getItem(schema + 'Results') === null) {

      this.normalPdf = [];
      console.log('ทะเบียนแรงงานต่างด้าว (ทุกกลุ่ม) (Linkage) PDF null');
    } else {
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length; // นับจำนวนรายการ
      this.normalPdfCount = `<div class="col-md-11"
        class="row card singlereport-timeline-item list-normal-design-head-collapse">
        <span class="list-normal-design-underline depart">กรมการจัดหางาน: </span>
        <span class="list-normal-design-underline departdata">ทะเบียนแรงงานต่างด้าว (ทุกกลุ่ม) (Linkage)</span>
        <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ</span>
      </div>`;
      this.loadReportDetail();
      for (let i = 0; i < this.results.length; i++) {
        this.normalPdf.push(
          `<div class="col-md-11">
            <div class="section-criminal-results" style="text-indent:25px;
              font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
              <span class="list-normal-design-underline depart">ทะเบียนแรงงานต่างด้าว (ทุกกลุ่ม) (Linkage)</span>
              <div style="padding-left:15px;">
                <strong class="report-field-title">ชื่อ-นามสกุลต่างด้าว (ไทย)
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                    ${this.changeNull(this.results[i].alienFullNmaeTh)}
                  </span>&nbsp;&nbsp;
                <strong class="report-field-title">เลขหนังสือเดินทางคนต่างด้าว
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                    ${this.changeNull(this.results[i].alienPassportNumber)}
                  </span>&nbsp;&nbsp;
                <strong class="report-field-title">สัญชาติคนต่างด้าว
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                    ${this.changeNull(this.results[i].alienNation)}
                  </span>&nbsp;&nbsp;
                <strong class="report-field-title">เลขประจำตัวคนต่างด้าว
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                    ${this.changeNull(this.results[i].citizenCardNumber)}
                  </span>&nbsp;&nbsp;
                <strong class="report-field-title">วันที่ออกใบอนุญาตทำงาน
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                    ${this.changeNull(this.results[i].workPermitIssuedDate)}
                  </span>&nbsp;&nbsp;
                <strong class="report-field-title">วันที่ใบอนุญาตทำงานหมดอายุ
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                    ${this.changeNull(this.results[i].workPermitExpireDate)}
                  </span>&nbsp;&nbsp;
              </div>
            </div>
          </div>${this.loadReportDetail()}`);
        console.log('doe-moi.allegation' + this.normalPdf[i]);
      }
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
   * Getter $results
   * @return {IDxc_Model_Doe_Moi_Alien_Workforces[]}
   */
  public get $results(): IDxc_Model_Doe_Moi_Alien_Workforces[] {
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
   * @param {IDxc_Model_Doe_Moi_Alien_Workforces[]} value
   */
  public set $results(value: IDxc_Model_Doe_Moi_Alien_Workforces[]) {
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
}
