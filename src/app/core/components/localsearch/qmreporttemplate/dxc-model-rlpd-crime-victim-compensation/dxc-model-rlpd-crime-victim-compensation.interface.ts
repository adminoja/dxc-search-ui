import * as moment from 'moment';
import { IDxc_Model_Rlpd_CrimeVictimCompensation } from 'src/app/core/shared/models/Dxc_Model_Rlpd_CrimeVictimCompensation';
import { Utils } from 'src/app/core/shared/utils/Utils';
import { Injectable } from "@angular/core";

export interface IReportRlpdCrimeVictimCompensation {
    model: IDxc_Model_Rlpd_CrimeVictimCompensation;
}
@Injectable()
export class RlpdCrimeVictimCompensationMetadata {
    html: string;
    reportName: string;
    reportOfTime: string;
    reportOfDate: string;
    private results: IDxc_Model_Rlpd_CrimeVictimCompensation[];
    private obj: string;
    private show: boolean;
    private util: Utils;
    private count: number;
    private countResults: number;
    private normalPdf: string[];
    private normalPdfCount: string;
    private showCareer: boolean;
    private objCareer: string;
    private resultsCareer: IDxc_Model_Rlpd_CrimeVictimCompensation[];
    private countCareer: number;
    constructor() {
        this.util = new Utils();
        this.count = 0;
        this.results = [];
        this.normalPdf = [];
        this.normalPdfCount = '';
        moment.locale('th');
         //career
         this.countCareer = 0;
        this.resultsCareer = [];
    }
    public getHtml(selectData: IDxc_Model_Rlpd_CrimeVictimCompensation, title: string) {
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
      .col-7 {
        width: 70%;
        margin-bottom: -2rem;
        -ms-flex-wrap: wrap;
            flex-wrap: wrap;
      }
      .col-8 {
        width: 72%;
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
      .col-10 {
        width: 80%;
        margin-bottom: -2rem;
        -ms-flex-wrap: wrap;
            flex-wrap: wrap;
      }
      .col-11 {
        width: 85%;
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
        <table style="border-style: solid; border-color: #000; width: 100%;" border="1px">
          <tbody>
            <tr>
              <td align="center">${title}</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <div class="ml-3">
            <div class="row">
                <div class="col-9"></div>
                <div class="col">
                    <p class="text-white font-20">รหัสทะเบียน</p>
                </div>
                <div class="col">
                    <p class="text-success font-20">${selectData.caseId}</p>
                </div>
            </div>

            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20"><u>ข้อมูลผู้ร้อง</u></p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">ผู้เสียหายประกอบอาชีพอยู่หรือไม่</p>
                </div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.victimIsCareer}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">อาชีพของผู้เสียหาย</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.victimCareer}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">กรณีไม่ได้ประกอบอาชีพ *</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.victimUncareerType}</p>
                </div>
            </div>
            <br/>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">ข้อมูลอื่นๆ กรณีไม่ได้ประกอบอาชีพ</p>
                </div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.victimUncareer}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">รายได้ของผู้เสียหาย</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.victimIncome}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">ประเภทรายได้</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.victimIncomePer}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">สถานที่ทำงาน</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.victimWorkPlace}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">จังหวัด</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.victimWorkPlaceProvinceId}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20"><u>ข้อมูลผู้ติดต่อได้</u></p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">ชื่อ-สกุลของผู้ติดต่อได้</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.victimConnectpersonFullName}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">เกี่ยวข้องเป็น</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.victimConnectpersonRelative}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">ที่อยู่ของผู้ติดต่อได้</p>
                </div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.victimConnectpersonAddress}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">เบอร์โทรศัพท์ของผู้ติดต่อได้</p>
                </div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.victimConnectpersonPhone}</p>
                </div>
            </div>

            <br/>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20"><u>ข้อมูลผู้ยื่นคำขอแทน</u></p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">ชื่อ-สกุลของผู้ยื่นคำขอแทน</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.victimAttorneyFullName}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">วันเกิดของผู้ยื่นคำขอแทน</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.victimAttorneyBirthDay}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">เลขบัตรประจำตัวประชาชนผู้ขอความช่วยเหลือ</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.victimCitizenId}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">ผู้ยื่นคำขอแทนในฐานะ</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.victimAttorneyRelativeBy}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">ที่อยู่ของผู้ยื่นคำขอแทน</p>
                </div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.victimAttorneyAddress}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">เบอร์โทรศัพท์ของผู้ยื่นคำขอแทน</p>
                </div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.victimAttorneyPhone}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">หมายเหตุ*(ผู้ร้องไม่สามารถยื่นคำร้องได้)</p>
                </div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.victimAttorneyRemark}</p>
                </div>
            </div>

            <br/>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20"><u>ข้อมูลคดี</u></p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">ฐานความผิด</p>
                </div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.masGuiltName}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">วัน/เดือน/ปี ที่เกิดเหตุ</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.victimCaseDate}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">เวลาที่เกิดเหตุ</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.victimCaseTime}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">สถานที่เกิดเหตุ</p>
                </div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.victimCasePlace}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">สถานีตำรวจที่มีอำนาจสืบสวนรับผิดชอบ</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.victimCasePoliceStation}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">ลำดับที่</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.victimCasePoliceNumber}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">วันที่รับฟ้องของตำรวจ</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.victimCasePoliceDate}</p>
                </div>
            </div>
            ${selectData.wartermarks}
            <br/>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">มีผู้เสียหายรวม</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.victimCasePeopleAmount}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">รายละเอียดของผู้เสียหายรวม</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.victimCasePeopleDescription}</p>
                </div>
            </div>

            <br/>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">พฤติการณ์แห่งคดี</p>
                </div>
                <div class="col-7" align="justify">
                    <p class="text-success font-20">${selectData.victimCaseSummary}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">ได้รับการบรรเทาความเสียหาย</p>
                </div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.victimCaseHelpReport}</p>
                </div>
            </div>

            <br/>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">ความเสียหายที่เกิดขึ้น</p>
                </div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.victimDamage}</p>
                </div>
            </div>
            ${selectData.wartermarks}
            <br/>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20"><b>ความเห็นนิติกร</b></p>
                </div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.victimLawOpinion}</p>
                </div>
            </div>

            <br/>
            <div class="row">
                <div class="col-6">
                    <p class="text-white font-20"><b>ผลการสอบสวนของพนักงานเจ้าหน้าที่</b></p>
                </div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col-11" align="justify">
                    <p class="text-success font-20">${selectData.victimLawSummary1}</p>
                </div>
            </div>

            <br/>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20"><b>ผลการสอบสวนของพนักงาน</b></p>
                </div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col-11" align="justify">
                    <p class="text-success font-20">${selectData.victimLawSummary2}</p>
                </div>
            </div>

            <br/>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20"><b>พฤติกรรมของผู้เสียหาย</b></p>
                </div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col-11" align="justify">
                    <p class="text-success font-20">${selectData.victimLawSummary3}</p>
                </div>
            </div>

            <br/>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20"><b>สรุปความเห็น</b></p>
                </div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col-11" align="justify">
                    <p class="text-success font-20">${selectData.victimLawSummary4}</p>
                </div>
            </div>
            ${selectData.wartermarks}
            <br/>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20"><b>ความเห็นผู้อำนวยการ</b></p>
                </div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.victimDirectorOpinion}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">ความเห็นเพิ่มเติมผู้อำนวยการ</p>
                </div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col-11" align="justify">
                    <p class="text-success font-20">${selectData.victimDirectorRemark}</p>
                </div>
            </div>

            <br/>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20"><b>ความเห็นคณะอนุกรรมการ</b></p>
                </div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.victimSubcommitteeOpinion}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">ความเห็นเพิ่มเติมคณะอนุกรรมการ</p>
                </div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col-11" align="justify">
                    <p class="text-success font-20">${selectData.victimSubcommitteeRemark}</p>
                </div>
            </div>
            ${selectData.wartermarks}
            <br/>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20"><b>ความเห็นคณะกรรมการ</b></p>
                </div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.victimCommitteeOpinion}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">วันที่ออกคำวินิจฉัย</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.victimCommitteeInspectDate}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">เลขที่คำวินิจฉัย</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.victimCommitteeInspectNo}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">ความเห็นเพิ่มเติมคณะกรรมการ</p>
                </div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col-11" align="justify">
                    <p class="text-success font-20">${selectData.victimCommitteeRemark}</p>
                </div>
            </div>

            <br/>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20"><b>รหัสความเห็นศาลอุทธรณ์</b></p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.victimAppealOpinion}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">รับเรื่องอุทธรณ์มาจาก</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.victimAppealFrom}</p>
                </div>
            </div>

            <br/>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">ศาลอุทธรณ์มีคำวินิจฉัยตามหมายเลขคดีแดงที่</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.victimAppealRedNo}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">นที่ สชง. รับเรื่องอุทธรณ์</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.victimAppealRedDate}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">ความเห็นเพิ่มเติมศาลอุทธรณ์</p>
                </div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col-11" align="justify">
                    <p class="text-success font-20">${selectData.victimAppealRemark}</p>
                </div>
            </div>
        </div>
      </div>
        ${selectData.wartermarks}
    </body>
</html>
`;
    }
    public viewgetHtml(selectData: IDxc_Model_Rlpd_CrimeVictimCompensation, title: string) {
        return this.html = `<html>

            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
                <script>
                    $(document).ready(function() {
                        $('#confirmRlpdCrimeVictimCompensation').click(function(){
                            $('#RlpdCrimeVictimCompensation').modal('toggle');
                            $('#rlpdCrimeVictimCompensation').on('hidden.bs.modal', function () {
                                $('body').addClass('modal-open');
                            }); 
                        });
                        $('#close').click(function(){
                            $('#rlpdCrimeVictimCompensation').modal('toggle');
                            $('#rlpdCrimeVictimCompensation').on('hidden.bs.modal', function () {
                                $('body').addClass('modal-open');
                            });  
                        });
                        $('#closeRlpdCrimeVictimCompensation').click(function(){
                            $('#rlpdCrimeVictimCompensation').modal('toggle');
                            $('#rlpdCrimeVictimCompensation').on('hidden.bs.modal', function () {
                                $('body').addClass('modal-open');
                            });  
                        });
                        $("#rlpdCrimeVictimCompensation").modal({
                            show: false,
                            backdrop: 'static'
                        });
                        $("#clickRlpdCrimeVictimCompensation").click(function() {
                        $("#rlpdCrimeVictimCompensation").modal("show");             
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
                    <br/>
                    <div>
                        <div class="ml-3">
                            <div class="row">
                                <div class="col-9"></div>
                                <div class="col">
                                    <p class="text-white font-20">รหัสทะเบียน</p>
                                </div>
                                <div class="col">
                                    <p class="text-success font-20">${selectData.caseId}</p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><u>ข้อมูลผู้ร้อง</u></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ผู้เสียหายประกอบอาชีพอยู่หรือไม่</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.victimIsCareer}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">อาชีพของผู้เสียหาย</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimCareer}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">กรณีไม่ได้ประกอบอาชีพ *</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimUncareerType}</p>
                                </div>
                            </div>
                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ข้อมูลอื่นๆ กรณีไม่ได้ประกอบอาชีพ</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.victimUncareer}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">รายได้ของผู้เสียหาย</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimIncome}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">ประเภทรายได้</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimIncomePer}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">สถานที่ทำงาน</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimWorkPlace}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">จังหวัด</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimWorkPlaceProvinceId}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><u>ข้อมูลผู้ติดต่อได้</u></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ชื่อ-สกุลของผู้ติดต่อได้</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimConnectpersonFullName}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">เกี่ยวข้องเป็น</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimConnectpersonRelative}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ที่อยู่ของผู้ติดต่อได้</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.victimConnectpersonAddress}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">เบอร์โทรศัพท์ของผู้ติดต่อได้</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.victimConnectpersonPhone}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><u>ข้อมูลผู้ยื่นคำขอแทน</u></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ชื่อ-สกุลของผู้ยื่นคำขอแทน</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimAttorneyFullName}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">วันเกิดของผู้ยื่นคำขอแทน</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimAttorneyBirthDay}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">เลขบัตรประจำตัวประชาชนผู้ขอความช่วยเหลือ</p>
                                </div>
                                <div class="col-3">
                                    <a class="text-success font-20" id="clickRlpdCrimeVictimCompensation" type="button">
                                        ${selectData.victimCitizenId} <i class="material-icons">link</i></a>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">ผู้ยื่นคำขอแทนในฐานะ</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimAttorneyRelativeBy}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ที่อยู่ของผู้ยื่นคำขอแทน</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.victimAttorneyAddress}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">เบอร์โทรศัพท์ของผู้ยื่นคำขอแทน</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.victimAttorneyPhone}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">หมายเหตุ*(ผู้ร้องไม่สามารถยื่นคำร้องได้)</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.victimAttorneyRemark}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><u>ข้อมูลคดี</u></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ฐานความผิด</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.masGuiltName}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">วัน/เดือน/ปี ที่เกิดเหตุ</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimCaseDate}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">เวลาที่เกิดเหตุ</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimCaseTime}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">สถานที่เกิดเหตุ</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.victimCasePlace}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">สถานีตำรวจที่มีอำนาจสืบสวนรับผิดชอบ</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimCasePoliceStation}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ลำดับที่</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimCasePoliceNumber}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">วันที่รับฟ้องของตำรวจ</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimCasePoliceDate}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">มีผู้เสียหายรวม</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimCasePeopleAmount}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">รายละเอียดของผู้เสียหายรวม</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimCasePeopleDescription}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">พฤติการณ์แห่งคดี</p>
                                </div>
                                <div class="col-8" align="justify">
                                    <p class="text-success font-20">${selectData.victimCaseSummary}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ได้รับการบรรเทาความเสียหาย</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.victimCaseHelpReport}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ความเสียหายที่เกิดขึ้น</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.victimDamage}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>ความเห็นนิติกร</b></p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.victimLawOpinion}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>ผลการสอบสวนของพนักงานเจ้าหน้าที่</b></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-10" align="justify">
                                    <p class="text-success font-20">${selectData.victimLawSummary1}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>ผลการสอบสวนของพนักงาน</b></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-10" align="justify">
                                    <p class="text-success font-20">${selectData.victimLawSummary2}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>พฤติกรรมของผู้เสียหาย</b></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-10" align="justify">
                                    <p class="text-success font-20">${selectData.victimLawSummary3}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>สรุปความเห็น</b></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-10" align="justify">
                                    <p class="text-success font-20">${selectData.victimLawSummary4}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>ความเห็นผู้อำนวยการ</b></p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.victimDirectorOpinion}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ความเห็นเพิ่มเติมผู้อำนวยการ</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-10" align="justify">
                                    <p class="text-success font-20">${selectData.victimDirectorRemark}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>ความเห็นคณะอนุกรรมการ</b></p>
                                </div>
                                <div class="col-9" align="justify">
                                    <p class="text-success font-20">${selectData.victimSubcommitteeOpinion}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ความเห็นเพิ่มเติมคณะอนุกรรมการ</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-10" align="justify">
                                    <p class="text-success font-20">${selectData.victimSubcommitteeRemark}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>ความเห็นคณะกรรมการ</b></p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.victimCommitteeOpinion}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">วันที่ออกคำวินิจฉัย</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimCommitteeInspectDate}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">เลขที่คำวินิจฉัย</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimCommitteeInspectNo}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ความเห็นเพิ่มเติมคณะกรรมการ</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-10" align="justify">
                                    <p class="text-success font-20">${selectData.victimCommitteeRemark}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                            <div class="col-3">
                                    <p class="text-white font-20"><b>รหัสความเห็นศาลอุทธรณ์</b></p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimAppealOpinion}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>ความเห็นศาลอุทธรณ์</b></p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimAppealOpinionDesc}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">รับเรื่องอุทธรณ์มาจาก</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimAppealFrom}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ศาลอุทธรณ์มีคำวินิจฉัยตามหมายเลขคดีแดงที่</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimAppealRedNo}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">นที่ สชง. รับเรื่องอุทธรณ์</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimAppealRedDate}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ความเห็นเพิ่มเติมศาลอุทธรณ์</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-10" align="justify">
                                    <p class="text-success font-20">${selectData.victimAppealRemark}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
            <div id="rlpdCrimeVictimCompensation" class="modal fade" tabindex="-1" data-backdrop="static" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title text-white" id="exampleModalLongTitle">ยืนยันการค้นหา</h4>
                            <button type="button" class="close" id="close">×</button>
                        </div>
                        <div class="modal-body font-20 text-white text-center">
                            คุณต้องการเปิดรายงาน Single Report ของ <br>
                            หมายเลขบัตรประชาชนนี้ ${selectData.victimCitizenId} ใช่หรือไม่
                        </div>
                        <div class="modal-footer">
                            <button type="button" id="closeRlpdCrimeVictimCompensation" class="btn btn-danger">ยกเลิก</button>
                            <a id="confirmRlpdCrimeVictimCompensation" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.victimCitizenId}/0/0/0/0/0">ตกลง</a>				
                        </div>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        <html>`;
    }

    public viewgetHtmlSingleReport(selectData: IDxc_Model_Rlpd_CrimeVictimCompensation, title: string) {
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
                    <br/>
                    <div>
                        <div class="ml-3">
                            <div class="row">
                                <div class="col-9"></div>
                                <div class="col-1">
                                    <p class="text-white font-20">รหัสทะเบียน</p>
                                </div>
                                <div class="col">
                                    <p class="text-success font-20">${selectData.caseId}</p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><u>ข้อมูลผู้ร้อง</u></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ผู้เสียหายประกอบอาชีพอยู่หรือไม่</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.victimIsCareer}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">อาชีพของผู้เสียหาย</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimCareer}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">กรณีไม่ได้ประกอบอาชีพ *</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimUncareerType}</p>
                                </div>
                            </div>
                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ข้อมูลอื่นๆ กรณีไม่ได้ประกอบอาชีพ</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.victimUncareer}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">รายได้ของผู้เสียหาย</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimIncome}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">ประเภทรายได้</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimIncomePer}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">สถานที่ทำงาน</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimWorkPlace}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">จังหวัด</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimWorkPlaceProvinceId}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><u>ข้อมูลผู้ติดต่อได้</u></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ชื่อ-สกุลของผู้ติดต่อได้</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimConnectpersonFullName}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">เกี่ยวข้องเป็น</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimConnectpersonRelative}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ที่อยู่ของผู้ติดต่อได้</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.victimConnectpersonAddress}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">เบอร์โทรศัพท์ของผู้ติดต่อได้</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.victimConnectpersonPhone}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><u>ข้อมูลผู้ยื่นคำขอแทน</u></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ชื่อ-สกุลของผู้ยื่นคำขอแทน</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimAttorneyFullName}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">วันเกิดของผู้ยื่นคำขอแทน</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimAttorneyBirthDay}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">เลขบัตรประจำตัวประชาชนผู้ขอความช่วยเหลือ</p>
                                </div>
                                <div class="col-3 text-success font-20"> 
                                    ${selectData.victimCitizenId}
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">ผู้ยื่นคำขอแทนในฐานะ</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimAttorneyRelativeBy}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ที่อยู่ของผู้ยื่นคำขอแทน</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.victimAttorneyAddress}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">เบอร์โทรศัพท์ของผู้ยื่นคำขอแทน</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.victimAttorneyPhone}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">หมายเหตุ*(ผู้ร้องไม่สามารถยื่นคำร้องได้)</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.victimAttorneyRemark}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><u>ข้อมูลคดี</u></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ฐานความผิด</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.masGuiltName}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">วัน/เดือน/ปี ที่เกิดเหตุ</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimCaseDate}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">เวลาที่เกิดเหตุ</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimCaseTime}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">สถานที่เกิดเหตุ</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.victimCasePlace}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">สถานีตำรวจที่มีอำนาจสืบสวนรับผิดชอบ</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimCasePoliceStation}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ลำดับที่</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimCasePoliceNumber}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">วันที่รับฟ้องของตำรวจ</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimCasePoliceDate}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">มีผู้เสียหายรวม</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimCasePeopleAmount}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">รายละเอียดของผู้เสียหายรวม</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimCasePeopleDescription}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">พฤติการณ์แห่งคดี</p>
                                </div>
                                <div class="col-8" align="justify">
                                    <p class="text-success font-20">${selectData.victimCaseSummary}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ได้รับการบรรเทาความเสียหาย</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.victimCaseHelpReport}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ความเสียหายที่เกิดขึ้น</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.victimDamage}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>ความเห็นนิติกร</b></p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.victimLawOpinion}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>ผลการสอบสวนของพนักงานเจ้าหน้าที่</b></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-10" align="justify">
                                    <p class="text-success font-20">${selectData.victimLawSummary1}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>ผลการสอบสวนของพนักงาน</b></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-10" align="justify">
                                    <p class="text-success font-20">${selectData.victimLawSummary2}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>พฤติกรรมของผู้เสียหาย</b></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-10" align="justify">
                                    <p class="text-success font-20">${selectData.victimLawSummary3}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>สรุปความเห็น</b></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-10" align="justify">
                                    <p class="text-success font-20">${selectData.victimLawSummary4}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>ความเห็นผู้อำนวยการ</b></p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.victimDirectorOpinion}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ความเห็นเพิ่มเติมผู้อำนวยการ</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-10" align="justify">
                                    <p class="text-success font-20">${selectData.victimDirectorRemark}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>ความเห็นคณะอนุกรรมการ</b></p>
                                </div>
                                <div class="col-9" align="justify">
                                    <p class="text-success font-20">${selectData.victimSubcommitteeOpinion}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ความเห็นเพิ่มเติมคณะอนุกรรมการ</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-10" align="justify">
                                    <p class="text-success font-20">${selectData.victimSubcommitteeRemark}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>ความเห็นคณะกรรมการ</b></p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.victimCommitteeOpinion}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">วันที่ออกคำวินิจฉัย</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimCommitteeInspectDate}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">เลขที่คำวินิจฉัย</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimCommitteeInspectNo}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ความเห็นเพิ่มเติมคณะกรรมการ</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-10" align="justify">
                                    <p class="text-success font-20">${selectData.victimCommitteeRemark}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                            <div class="col-3">
                                    <p class="text-white font-20"><b>รหัสความเห็นศาลอุทธรณ์</b></p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimAppealOpinion}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>ความเห็นศาลอุทธรณ์</b></p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimAppealOpinionDesc}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">รับเรื่องอุทธรณ์มาจาก</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimAppealFrom}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ศาลอุทธรณ์มีคำวินิจฉัยตามหมายเลขคดีแดงที่</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimAppealRedNo}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">นที่ สชง. รับเรื่องอุทธรณ์</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.victimAppealRedDate}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ความเห็นเพิ่มเติมศาลอุทธรณ์</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-10" align="justify">
                                    <p class="text-success font-20">${selectData.victimAppealRemark}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        <html>`;
    }
    public getSearchData() {
        const schema = 'rlpd-crime-victim-compensation';
        if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {
        } else {
            this.show = true;
            this.obj = localStorage.getItem(schema + 'Results');
            this.results = JSON.parse(this.obj);
            this.count = this.results.length; // นับจำนวนรายการ
            console.log('results: ' + this.results);
        }
    }

    public getSearchDataCareer() {
        const schema = 'rlpd-crime-victim-compensation';
        if (localStorage.getItem(schema + '-career-Results') === '[]' || localStorage.getItem(schema + '-career-Results') === null) {
        } else {
            this.showCareer = true;
            this.objCareer = localStorage.getItem(schema + '-career-Results');
            this.resultsCareer = JSON.parse(this.objCareer);
            this.countCareer = this.resultsCareer.length; // นับจำนวนรายการ
        }
    }

    public getnormalPdf() {
        const schema = 'rlpd-crime-victim-compensation';
        // const schema = environment.qm.sub[0]['rlpd'].sub[0]['rlpd-crime-victim-compensation'].schema;
        if (localStorage.getItem(schema + 'Results') === '[]' ||
            localStorage.getItem(schema + 'Results') === null) {

            this.normalPdf = [];
            console.log('ความช่วยเหลือทางด้านการเงิน แก่ผู้เสียหายในคดีอาญา PDF null');
        } else {
            this.obj = localStorage.getItem(schema + 'Results');
            this.results = JSON.parse(this.obj);
            this.count = this.results.length; // นับจำนวนรายการ

            if(this.count !== undefined) {
                // PDF ค้นด้วยเลขบัตร
                this.normalPdfCount = `<div class="col-md-11"
                    class="row card singlereport-timeline-item list-normal-design-head-collapse">
                    <span class="list-normal-design-underline depart">กรมคุ้มครองสิทธิและเสรีภาพ: </span>
                    <span class="list-normal-design-underline departdata">ความช่วยเหลือทางด้านการเงิน แก่ผู้เสียหายในคดีอาญา</span>
                    <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ</span>
                </div>`;
                this.loadReportDetail();
                for (let i = 0; i < this.results.length; i++) {
                    this.normalPdf.push(
                        `<div class="col-md-11">
                            <div class="section-criminal-results" style="text-indent:25px;
                                font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
                                <span class="list-normal-design-underline depart">ความช่วยเหลือทางด้านการเงิน แก่ผู้เสียหายในคดีอาญา</span>
                                <div style="padding-left:15px;">
                                    <strong class="report-field-title">ฐานความผิด
                                    </strong>&nbsp;&nbsp;
                                    <span class="report-field-value" style="text-decoration:underline">
                                        ${this.changeNull(this.results[i].masGuiltName)}
                                    </span>&nbsp;&nbsp;
                                    <strong class="report-field-title">วัน/เดือน/ปี ที่เกิดเหตุ
                                    </strong>&nbsp;&nbsp;
                                    <span class="report-field-value" style="text-decoration:underline">
                                        ${this.changeNull(this.formatDate(this.results[i].victimCaseDate))}
                                    </span>&nbsp;&nbsp;
                                    <strong class="report-field-title">สถานที่เกิดเหตุ
                                    </strong>&nbsp;&nbsp;
                                    <span class="report-field-value" style="text-decoration:underline">
                                        ${this.changeNull(this.results[i].victimCasePlace)}
                                    </span>&nbsp;&nbsp;
                                    <strong class="report-field-title">มีผู้เสียหายรวม
                                    </strong>&nbsp;&nbsp;
                                    <span class="report-field-value" style="text-decoration:underline">
                                        ${this.changeNull(this.results[i].victimCasePeopleAmount)}
                                    </span>&nbsp;&nbsp;
                                    <strong class="report-field-title">สถานีตำรวจที่มีอำนาจสืบสวนรับผิดชอบ
                                    </strong>&nbsp;&nbsp;
                                    <span class="report-field-value" style="text-decoration:underline">
                                        ${this.changeNull(this.results[i].victimCasePoliceStation)}
                                    </span>&nbsp;&nbsp;
                                    <strong class="report-field-title">พฤติการณ์แห่งคดี
                                    </strong>&nbsp;&nbsp;
                                    <span class="report-field-value" style="text-decoration:underline">
                                        ${this.changeNull(this.results[i].victimCaseSummary)}
                                    </span>&nbsp;&nbsp;
                                    <strong class="report-field-title">ได้รับการบรรเทาความเสียหาย
                                    </strong>&nbsp;&nbsp;
                                    <span class="report-field-value" style="text-decoration:underline">
                                        ${this.changeNull(this.results[i].victimCaseHelpReport)}
                                    </span>&nbsp;&nbsp;
                                    <strong class="report-field-title">ชื่อ-สกุลของผู้ยื่นคำขอแทน
                                    </strong>&nbsp;&nbsp;
                                    <span class="report-field-value" style="text-decoration:underline">
                                        ${this.changeNull(this.results[i].victimAttorneyFullName)}
                                    </span>&nbsp;&nbsp;
                                    <strong class="report-field-title">เลขบัตรประจำตัวประชาชนผู้ขอความช่วยเหลือ
                                    </strong>&nbsp;&nbsp;
                                    <span class="report-field-value" style="text-decoration:underline">
                                        ${this.changeNull(this.results[i].victimCitizenId)}
                                    </span>&nbsp;&nbsp;
                                    <strong class="report-field-title">ผู้ยื่นคำขอแทนในฐานะ
                                    </strong>&nbsp;&nbsp;
                                    <span class="report-field-value" style="text-decoration:underline">
                                        ${this.changeNull(this.results[i].victimAttorneyRelativeBy)}
                                    </span>&nbsp;&nbsp;
                                    <strong class="report-field-title">เบอร์โทรศัพท์ของผู้ยื่นคำขอแทน
                                    </strong>&nbsp;&nbsp;
                                    <span class="report-field-value" style="text-decoration:underline">
                                        ${this.changeNull(this.results[i].victimAttorneyPhone)}
                                    </span>&nbsp;&nbsp;
                                    <strong class="report-field-title">วันที่ออกคำวินิจฉัย
                                    </strong>&nbsp;&nbsp;
                                    <span class="report-field-value" style="text-decoration:underline">
                                        ${this.changeNull(this.formatDate(this.results[i].victimCommitteeInspectDate))}
                                    </span>&nbsp;&nbsp;
                                    <strong class="report-field-title">นที่ สชง. รับเรื่องอุทธรณ์
                                    </strong>&nbsp;&nbsp;
                                    <span class="report-field-value" style="text-decoration:underline">
                                        ${this.changeNull(this.formatDate(this.results[i].victimAppealRedDate))}
                                    </span>&nbsp;&nbsp;
                                </div>
                            </div>
                        </div>${this.loadReportDetail()}`);
                    console.log('rlpd.normal' + this.normalPdf[i]);
                }
            } else {
                // PDF ค้นด้วยชื่อ-สกุล
                const results = JSON.parse(this.obj);
                this.normalPdfCount = `<div class="col-md-11"
                    class="row card singlereport-timeline-item list-normal-design-head-collapse">
                    <span class="list-normal-design-underline depart">กรมคุ้มครองสิทธิและเสรีภาพ: </span>
                    <span class="list-normal-design-underline departdata">ความช่วยเหลือทางด้านการเงิน แก่ผู้เสียหายในคดีอาญา</span>
                </div>`;
                this.loadReportDetail();
                this.normalPdf.push(
                    `<div class="col-md-11">
                        <div class="section-criminal-results" style="text-indent:25px;
                            font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
                            <span class="list-normal-design-underline depart">ความช่วยเหลือทางด้านการเงิน แก่ผู้เสียหายในคดีอาญา</span>
                            <div style="padding-left:15px;">
                                <strong class="report-field-title">ฐานความผิด
                                </strong>&nbsp;&nbsp;
                                <span class="report-field-value" style="text-decoration:underline">
                                    ${this.changeNull(results.masGuiltName)}
                                </span>&nbsp;&nbsp;
                                <strong class="report-field-title">วัน/เดือน/ปี ที่เกิดเหตุ
                                </strong>&nbsp;&nbsp;
                                <span class="report-field-value" style="text-decoration:underline">
                                    ${this.changeNull(this.formatDate(results.victimCaseDate))}
                                </span>&nbsp;&nbsp;
                                <strong class="report-field-title">สถานที่เกิดเหตุ
                                </strong>&nbsp;&nbsp;
                                <span class="report-field-value" style="text-decoration:underline">
                                    ${this.changeNull(results.victimCasePlace)}
                                </span>&nbsp;&nbsp;
                                <strong class="report-field-title">มีผู้เสียหายรวม
                                </strong>&nbsp;&nbsp;
                                <span class="report-field-value" style="text-decoration:underline">
                                    ${this.changeNull(results.victimCasePeopleAmount)}
                                </span>&nbsp;&nbsp;
                                <strong class="report-field-title">สถานีตำรวจที่มีอำนาจสืบสวนรับผิดชอบ
                                </strong>&nbsp;&nbsp;
                                <span class="report-field-value" style="text-decoration:underline">
                                    ${this.changeNull(results.victimCasePoliceStation)}
                                </span>&nbsp;&nbsp;
                                <strong class="report-field-title">พฤติการณ์แห่งคดี
                                </strong>&nbsp;&nbsp;
                                <span class="report-field-value" style="text-decoration:underline">
                                    ${this.changeNull(results.victimCaseSummary)}
                                </span>&nbsp;&nbsp;
                                <strong class="report-field-title">ได้รับการบรรเทาความเสียหาย
                                </strong>&nbsp;&nbsp;
                                <span class="report-field-value" style="text-decoration:underline">
                                    ${this.changeNull(results.victimCaseHelpReport)}
                                </span>&nbsp;&nbsp;
                                <strong class="report-field-title">ชื่อ-สกุลของผู้ยื่นคำขอแทน
                                </strong>&nbsp;&nbsp;
                                <span class="report-field-value" style="text-decoration:underline">
                                    ${this.changeNull(results.victimAttorneyFullName)}
                                </span>&nbsp;&nbsp;
                                <strong class="report-field-title">เลขบัตรประจำตัวประชาชนผู้ขอความช่วยเหลือ
                                </strong>&nbsp;&nbsp;
                                <span class="report-field-value" style="text-decoration:underline">
                                    ${this.changeNull(results.victimCitizenId)}
                                </span>&nbsp;&nbsp;
                                <strong class="report-field-title">ผู้ยื่นคำขอแทนในฐานะ
                                </strong>&nbsp;&nbsp;
                                <span class="report-field-value" style="text-decoration:underline">
                                    ${this.changeNull(results.victimAttorneyRelativeBy)}
                                </span>&nbsp;&nbsp;
                                <strong class="report-field-title">เบอร์โทรศัพท์ของผู้ยื่นคำขอแทน
                                </strong>&nbsp;&nbsp;
                                <span class="report-field-value" style="text-decoration:underline">
                                    ${this.changeNull(results.victimAttorneyPhone)}
                                </span>&nbsp;&nbsp;
                                <strong class="report-field-title">วันที่ออกคำวินิจฉัย
                                </strong>&nbsp;&nbsp;
                                <span class="report-field-value" style="text-decoration:underline">
                                    ${this.changeNull(this.formatDate(results.victimCommitteeInspectDate))}
                                </span>&nbsp;&nbsp;
                                <strong class="report-field-title">นที่ สชง. รับเรื่องอุทธรณ์
                                </strong>&nbsp;&nbsp;
                                <span class="report-field-value" style="text-decoration:underline">
                                    ${this.changeNull(this.formatDate(results.victimAppealRedDate))}
                                </span>&nbsp;&nbsp;
                            </div>
                        </div>
                    </div>${this.loadReportDetail()}`);
                console.log('rlpd.normal' + this.normalPdf);
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
     * Getter $util
     * @return {Utils}
     */
    public get $util(): Utils {
        return this.util;
    }

    /**
     * Getter $count
     * @return {number}
     */
    public get $count(): number {
        return this.count;
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
     * Getter $results
     * @return {IDxc_Model_Rlpd_CrimeVictimCompensation[]}
     */
    public get $results(): IDxc_Model_Rlpd_CrimeVictimCompensation[] {
        return this.results;
    }

    /**
     * Setter $results
     * @param {IDxc_Model_Rlpd_CrimeVictimCompensation[]} value
     */
    public set $results(value: IDxc_Model_Rlpd_CrimeVictimCompensation[]) {
        this.results = value;
    }

    /**
     * Getter $normalPdf
     * @return {string[]}
     */
    public get $normalPdf(): string[] {
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
     * Setter $normalPdfCount
     * @param {string} value
     */
    public set $normalPdfCount(value: string) {
        this.normalPdfCount = value;
    }

    public get $resultsCareer(): IDxc_Model_Rlpd_CrimeVictimCompensation[] {
        return this.resultsCareer;
    }
    public set $resultsCareer(value: IDxc_Model_Rlpd_CrimeVictimCompensation[]) {
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
}
