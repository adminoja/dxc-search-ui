import { IDxc_Model_Mof_Registrant } from 'src/app/core/shared/models/Dxc_Model_Mof_Registrant';
import { Utils } from '../../../../shared/utils/Utils';
import * as moment from 'moment';
import { Injectable } from "@angular/core";
export interface IReportMofRegistrant {
  model: IDxc_Model_Mof_Registrant;
}

@Injectable()
export class MofRegistrantMetadata {
  private results: IDxc_Model_Mof_Registrant[];
  private obj: string;
  private show: boolean;
  private util: Utils;
  private count: number;
  private normalPdf: string [];
  private normalPdfCount: string;
  reportName: string;
  reportOfTime: string;
  reportOfDate: string;
  html: string;
  constructor() {
    this.util = new Utils();
    this.normalPdf = [];
    this.results = [];
    this.count = 0;
    this.normalPdfCount = '';
  }

  public getHtml(selectData: IDxc_Model_Mof_Registrant, title: string) {

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
            <table class="table" border="2px" width="100%">
                <tr>
                  <td align="center" class="text-white font-20">ฐานข้อมูล${title}</td>
                </tr>
            </table>
            <div class="ml-3"> 
              <div class="row">
                <div class="col-3"></div>
                <div class="col-3"></div>
                <div class="col-3">
                  <p class="text-white font-20">รหัสข้อมูล</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.dataId}</p>
                </div>
              </div>
              </br>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-24"><u>ข้อมูลส่วนตัว</u></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">
                    <a class="text-success font-20" id="clickMofRegistrant" type="button">
                    ${selectData.citizenCardNumber}<i class="material-icons">link</i></a>
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
                  <p class="text-white font-20">ชื่อสกุล</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.lastName}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">วันเดือนปีเกิด</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.dateOfBirth}</p>
                </div>
              </div>
              </br>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-24"><u>ที่อยู่</u></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20"><b>ที่อยู่ตามทะเบียนบ้าน</b></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">เลขรหัสประจำบ้าน</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.houseCode}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">เลขที่</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.houseNo}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">หมู่บ้าน/อาคาร</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.houseAddrVillage}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ชั้นที่</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.houseAddrFloor}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">หมู่ที่</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.houseAddrMoo}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ตรอก/ซอย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.houseAddrSoi}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">แยก</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.houseAddrSubSoi}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ถนน</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.houseAddrRoad}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">ตำบล/แขวง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.houseAddrSubDist}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">อำเภอ/เขต</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.houseAddrDist}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">จังหวัด</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.houseAddrProv}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">รหัสไปษณีย์</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.houseAddrPost}</p>
                </div>
              </div>
              </br>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20"><b>ที่อยุ่ปัจจุบัน</b></p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.addrCode}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">เลขที่</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.addrNo}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">หมู่บ้าน/อาคาร</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.addrVillage}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ชั้นที่</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.addrFloor}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">หมู่ที่</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.addrMoo}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ตรอก/ซอย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.addrSoi}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">แยก</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.addrSubSoi}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ถนน</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.addrRoad}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">ตำบล/แขวง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.addrSubDist}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">อำเภอ/เขต</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.addrDist}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">จังหวัด</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.addrProv}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">รหัสไปษณีย์</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.addrPost}</p>
                </div>
              </div>
              </br>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-24"><u>ช่องทางการติดต่อ</u></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">โทรศัพท์บ้าน</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.phoneHome}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">โทรศัพท์ที่ทำงาน</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.phoneOffice}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">โทรศัพท์มือถือ</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.phoneMobile}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">อีเมล</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.email}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">สถานภาพการอยุ่อาศัย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.liveCode}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">(ระบุจำนวนสมาชิกในครอบครัว(ไม่รวมตัวเอง)</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.familyMember}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">วุฒิการศึกษาสูงสุด</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.eduCode}</p>
                </div>
              </div>
              </br>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-24"><u>ข้อมูลอาชีพ</u></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">อาชีพ*/การทำงาน</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.workCode}</p>
                </div>
              </div>
              </br>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-24"><u>ข้อมูลทางการเงิน</u></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20"><b>เงินได้ทั้งสิ้นในปี 2559*</b></p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.totalIncome59}</p>
                </div>
              </div>
              </br>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20"><b>เงินกู้นอกระบบ</b></p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.neesinAmount}</p>
                </div>
              </div>
              </br>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20"><b>เงินกู้ในระบบ</b></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">หนี้บัตรเครดิต</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.deptCreditAmount}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">หนี้เพื่อการศึกษา</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.debtEduAmount}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">หนี้เพื่อการเกษตร</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.debtAgriAmount}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">หนี้เพื่อประกอบธุรกิจ</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.debtBusinessAmount}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">หนี้เพื่ออุปโภค/บริโภค</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.debtConsumptionAmount}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">หนี้เพื่อซื้อบ้าน/ที่ดิน</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.debtHouseAmount}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">หนี้เพื่อซื้อรถยนต์/รถจักรยานยนต์</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.debtVehicleAmount}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-9">
                  <p class="text-white font-20">เงินกู้นอกระบบ : ท่านได้ใช้ที่ดินหรือสินทรัพย์อื่นเป็นหลักทรัพย์ค้ำประกันหรือไม่</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.guaranteeCode}</p>
                </div>
              </div>
              </br>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-24"><u>ข้อมูลสินทรัพย์</u></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">บ้านเดี่ยว/ทาวน์เฮ้าส์/ทาวน์โฮม</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.landCode}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ห้องชุด</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.landRoomCode}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">ทำการเกษตร(ทำนา ทำสวน)</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.assetCode}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ทำประโยชน์อื่น ๆ (ทำการค้า โกดัง ยุ้งฉาง)</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.assetOtherCode}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">ไม่ได้ทำประโยชน์/รกร้างว่างเปล่า</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.assetNonCode}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-9">
                  <p class="text-white font-20">หากไม่สามารถแยกที่ดินเพื่ออยุ่อาศัยและที่ดินทำกินจากกันได้ โปรดระบุขนาดของพื้นที่รวม</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.landAssetCode}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">รถยนต์</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.carNumber}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">จักรยานยนต์</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.bikeNumber}</p>
                </div>
              </div>
              </br>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-24"><u>ทรัพย์สินทางการเงิน</u></p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p class="text-white font-20">1) เงินฝากธนาตาร**/สลากออมสิน/สลาก ธ.ก.ส.</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.bankDepositAmount}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">2) พันธบัตร/ตราสารหนี้</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.bondAmount}</p>
                </div>
              </div>
              </br>
              <div class="row">
                <div class="col-6">
                  <p class="text-white font-24"><u>บัญชีธนาคารที่ประสงค์จะใช้เพื่อรับสวัสดิการจากรัฐ</u></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">บัญชีของธนาคาร</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.bankCode}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">เลขที่บัญชี</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.bankAccount}</p>
                </div>
              </div>
            </div>
          </div>
          ${selectData.wartermarks}
        </body>
    </html>
    `;
  }

  public viewgetHtml(selectData: IDxc_Model_Mof_Registrant, title: string) {
    return (this.html = `<html>
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            <script>
              $(document).ready(function() {
                $('#confirmMofRegistrant').click(function(){
                  $('#mofRegistrant').modal('toggle'); 
                  $('#mofRegistrant').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $('#close').click(function(){
                  $('#mofRegistrant').modal('toggle'); 
                  $('#mofRegistrant').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  }); 
                });
                $('#closeMofRegistrant').click(function(){
                  $('#mofRegistrant').modal('toggle'); 
                  $('#mofRegistrant').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  }); 
                });
                $("#mofRegistrant").modal({
                  show: false,
                  backdrop: 'static'
                });
                $("#clickMofRegistrant").click(function() {
                $("#mofRegistrant").modal("show");             
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
            <div class="ml-3"> 
              <div class="row">
                <div class="col-3"></div>
                <div class="col-3"></div>
                <div class="col-3">
                  <p class="text-white font-20">รหัสข้อมูล</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.dataId}</p>
                </div>
              </div>
              </br>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-24"><u>ข้อมูลส่วนตัว</u></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">
                    <a class="text-success font-20" id="clickMofRegistrant" type="button">
                    ${selectData.citizenCardNumber}<i class="material-icons">link</i></a>
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
                  <p class="text-white font-20">ชื่อสกุล</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.lastName}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">วันเดือนปีเกิด</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.dateOfBirth}</p>
                </div>
              </div>
              </br>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-24"><u>ที่อยู่</u></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20"><b>ที่อยู่ตามทะเบียนบ้าน</b></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">เลขรหัสประจำบ้าน</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.houseCode}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">เลขที่</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.houseNo}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">หมู่บ้าน/อาคาร</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.houseAddrVillage}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ชั้นที่</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.houseAddrFloor}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">หมู่ที่</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.houseAddrMoo}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ตรอก/ซอย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.houseAddrSoi}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">แยก</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.houseAddrSubSoi}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ถนน</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.houseAddrRoad}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">ตำบล/แขวง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.houseAddrSubDist}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">อำเภอ/เขต</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.houseAddrDist}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">จังหวัด</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.houseAddrProv}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">รหัสไปษณีย์</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.houseAddrPost}</p>
                </div>
              </div>
              </br>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20"><b>ที่อยุ่ปัจจุบัน</b></p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.addrCode}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">เลขที่</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.addrNo}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">หมู่บ้าน/อาคาร</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.addrVillage}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ชั้นที่</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.addrFloor}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">หมู่ที่</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.addrMoo}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ตรอก/ซอย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.addrSoi}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">แยก</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.addrSubSoi}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ถนน</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.addrRoad}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">ตำบล/แขวง</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.addrSubDist}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">อำเภอ/เขต</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.addrDist}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">จังหวัด</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.addrProv}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">รหัสไปษณีย์</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.addrPost}</p>
                </div>
              </div>
              </br>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-24"><u>ช่องทางการติดต่อ</u></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">โทรศัพท์บ้าน</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.phoneHome}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">โทรศัพท์ที่ทำงาน</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.phoneOffice}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">โทรศัพท์มือถือ</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.phoneMobile}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">อีเมล</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.email}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">สถานภาพการอยุ่อาศัย</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.liveCode}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">(ระบุจำนวนสมาชิกในครอบครัว(ไม่รวมตัวเอง)</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.familyMember}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">วุฒิการศึกษาสูงสุด</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.eduCode}</p>
                </div>
              </div>
              </br>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-24"><u>ข้อมูลอาชีพ</u></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">อาชีพ*/การทำงาน</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.workCode}</p>
                </div>
              </div>
              </br>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-24"><u>ข้อมูลทางการเงิน</u></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20"><b>เงินได้ทั้งสิ้นในปี 2559*</b></p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.totalIncome59}</p>
                </div>
              </div>
              </br>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20"><b>เงินกู้นอกระบบ</b></p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.neesinAmount}</p>
                </div>
              </div>
              </br>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20"><b>เงินกู้ในระบบ</b></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">หนี้บัตรเครดิต</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.deptCreditAmount}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">หนี้เพื่อการศึกษา</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.debtEduAmount}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">หนี้เพื่อการเกษตร</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.debtAgriAmount}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">หนี้เพื่อประกอบธุรกิจ</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.debtBusinessAmount}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">หนี้เพื่ออุปโภค/บริโภค</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.debtConsumptionAmount}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">หนี้เพื่อซื้อบ้าน/ที่ดิน</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.debtHouseAmount}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">หนี้เพื่อซื้อรถยนต์/รถจักรยานยนต์</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.debtVehicleAmount}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-9">
                  <p class="text-white font-20">เงินกู้นอกระบบ : ท่านได้ใช้ที่ดินหรือสินทรัพย์อื่นเป็นหลักทรัพย์ค้ำประกันหรือไม่</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.guaranteeCode}</p>
                </div>
              </div>
              </br>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-24"><u>ข้อมูลสินทรัพย์</u></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">บ้านเดี่ยว/ทาวน์เฮ้าส์/ทาวน์โฮม</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.landCode}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ห้องชุด</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.landRoomCode}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">ทำการเกษตร(ทำนา ทำสวน)</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.assetCode}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">ทำประโยชน์อื่น ๆ (ทำการค้า โกดัง ยุ้งฉาง)</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.assetOtherCode}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">ไม่ได้ทำประโยชน์/รกร้างว่างเปล่า</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.assetNonCode}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-9">
                  <p class="text-white font-20">หากไม่สามารถแยกที่ดินเพื่ออยุ่อาศัยและที่ดินทำกินจากกันได้ โปรดระบุขนาดของพื้นที่รวม</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.landAssetCode}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">รถยนต์</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.carNumber}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">จักรยานยนต์</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.bikeNumber}</p>
                </div>
              </div>
              </br>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-24"><u>ทรัพย์สินทางการเงิน</u></p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p class="text-white font-20">1) เงินฝากธนาตาร**/สลากออมสิน/สลาก ธ.ก.ส.</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.bankDepositAmount}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">2) พันธบัตร/ตราสารหนี้</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.bondAmount}</p>
                </div>
              </div>
              </br>
              <div class="row">
                <div class="col-6">
                  <p class="text-white font-24"><u>บัญชีธนาคารที่ประสงค์จะใช้เพื่อรับสวัสดิการจากรัฐ</u></p>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <p class="text-white font-20">บัญชีของธนาคาร</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.bankCode}</p>
                </div>
                <div class="col-3">
                  <p class="text-white font-20">เลขที่บัญชี</p>
                </div>
                <div class="col-3">
                  <p class="text-success font-20">${selectData.bankAccount}</p>
                </div>
              </div>
            </div>
          </div>
        </body>
        <div id="mofRegistrant" class="modal fade" tabindex="-1" data-backdrop="static" role="dialog" aria-hidden="true">
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
                <button type="button" id="closeMofRegistrant" class="btn btn-danger">ยกเลิก</button>
                <a id="confirmMofRegistrant" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.citizenCardNumber}/0/0/0/0/0">ตกลง</a>				
              </div>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
      </html>
      `);
  }

  public getSearchData() {
    const schema = 'mof-registrant';
    if (
      localStorage.getItem(schema + 'Results') === '[]' ||
      localStorage.getItem(schema + 'Results') === null
    ) {
      console.log('ทะเบียนผู้มีรายได้น้อย null');
    } else {
      this.show = true;
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length; // นับจำนวนรายการ
    }
  }

  public getnormalPdf() {
    const schema = 'mof-registrant';

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
            <span class="list-normal-design-underline depart">กระทรวงการคลัง: </span>
            <span class="list-normal-design-underline departdata">ทะเบียนผู้มีรายได้น้อย </span>
            <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ</span>
          </div>`;
          this.loadReportDetail();
          for (let i = 0; i < this.results.length; i++) {
            this.normalPdf.push(`
            <div class="col-md-11">
              <div class="section-criminal-results" style="text-indent:25px;
                font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
                <span class="list-normal-design-underline depart">ทะเบียนผู้มีรายได้น้อย</span>
                <div style="padding-left:15px;">
                    <strong class="report-field-title">ชื่อ</strong>
                    <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].firstName)}</span>
                    <strong class="report-field-title">นามสกุล</strong>
                    <span class="report-field-value" style="text-decoration:underline"> ${this.changeNull(this.results[i].lastName)}</span>
                    <strong class="report-field-title">วันเดือนปีเกิด</strong>
                    <span class="report-field-value" style="text-decoration:underline">${this.formatDate(this.results[i].dateOfBirth)}</span>
                    <strong class="report-field-title">วันที่ลงทะเบียน</strong>
                    <span class="report-field-value" style="text-decoration:underline">${this.formatDate(this.results[i].registerDate)}</span>
                    <strong class="report-field-title">ประเภทการลงทะเบียน</strong>
                    <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].entryTry)}</span>
                </div>
              </div>
            </div>${this.loadReportDetail()}`);
            console.log('mof.normal: ' + this.normalPdf[i])
          }           
        } else {
          // PDF ค้นด้วยชื่อ-สกุล
          const results = JSON.parse(this.obj);
          this.normalPdfCount = `<div class="col-md-11"
            class="row card singlereport-timeline-item list-normal-design-head-collapse">
            <span class="list-normal-design-underline depart">กระทรวงการคลัง: </span>
            <span class="list-normal-design-underline departdata">ทะเบียนผู้มีรายได้น้อย </span>
          </div>`;
          this.loadReportDetail();
          this.normalPdf.push(`
          <div class="col-md-11">
            <div class="section-criminal-results" style="text-indent:25px;
              font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
              <span class="list-normal-design-underline depart">ทะเบียนผู้มีรายได้น้อย</span>
              <div style="padding-left:15px;">
                  <strong class="report-field-title">ชื่อ</strong>
                  <span class="report-field-value" style="text-decoration:underline">${this.changeNull(results.firstName)}</span>
                  <strong class="report-field-title">นามสกุล</strong>
                  <span class="report-field-value" style="text-decoration:underline"> ${this.changeNull(results.lastName)}</span>
                  <strong class="report-field-title">วันเดือนปีเกิด</strong>
                  <span class="report-field-value" style="text-decoration:underline">${this.formatDate(results.dateOfBirth)}</span>
                  <strong class="report-field-title">วันที่ลงทะเบียน</strong>
                  <span class="report-field-value" style="text-decoration:underline">${this.formatDate(results.registerDate)}</span>
                  <strong class="report-field-title">ประเภทการลงทะเบียน</strong>
                  <span class="report-field-value" style="text-decoration:underline">${this.changeNull(results.entryTry)}</span>
              </div>
            </div>
          </div>${this.loadReportDetail()}`);
          console.log('mof.normal: ' + this.normalPdf)
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
  * Getter $util
  * @return {Utils}
  */
  public get $util(): Utils {
    return this.util;
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
   * @return {IDxc_Model_Mof_Registrant[]}
   */
  public get $results(): IDxc_Model_Mof_Registrant[] {
    return this.results;
  }

  /**
   * Setter $results
   * @param {IDxc_Model_Mof_Registrant[]} value
   */
  public set $results(value: IDxc_Model_Mof_Registrant[]) {
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
}
