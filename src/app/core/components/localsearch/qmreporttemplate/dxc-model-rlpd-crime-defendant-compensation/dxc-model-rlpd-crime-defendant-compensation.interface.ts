import * as moment from 'moment';
import { IDxc_Model_Rlpd_CrimeDefendantCompensation } from 'src/app/core/shared/models/Dxc_Model_Rlpd_CrimeDefendantCompensation';
import { Utils } from 'src/app/core/shared/utils/Utils';
import { Injectable } from "@angular/core";

export interface IReportRlpdCrimeDefendantCompensation {
    model: IDxc_Model_Rlpd_CrimeDefendantCompensation;
}
@Injectable()
export class RlpdCrimeDefendantCompensationMetadata {
    html: string;
    reportName: string;
    reportOfTime: string;
    reportOfDate: string;
    private results: IDxc_Model_Rlpd_CrimeDefendantCompensation[];
    private obj: string;
    private show: boolean;
    private util: Utils;
    private count: number;
    private countResults: number;
    private normalPdf: string[];
    private normalPdfCount: string;
    private showCareer: boolean;
    private objCareer: string;
    private resultsCareer: IDxc_Model_Rlpd_CrimeDefendantCompensation[];
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
    public getHtml(selectData: IDxc_Model_Rlpd_CrimeDefendantCompensation, title: string) {
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
                    <p class="text-white font-20">รหัสคดี</p>
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
                    <p class="text-white font-20">ประกอบอาชีพอยู่หรือไม่</p>
                </div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.dftIsCareer}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">อาชีพของผู้เสียหาย</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.dftCareer}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">กรณีไม่ได้ประกอบอาชีพ *</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.dftUnCareerType}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">รายได้</p>
                </div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.dftIncome}/${selectData.dftIncomePer}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">สถานที่ทำงาน</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.dftWorkPlace}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">จังหวัด</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.dftWorkplaceProvinceFullText}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">กรณีไม่ได้ประกอบอาชีพอื่นๆ</p>
                </div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.dftUnCareer}</p>
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
                    <p class="text-success font-20">${selectData.dftConnectPersonFullName}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">เกี่ยวข้องเป็น</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.dftConnectPersonRelative}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">ที่อยู่ของผู้ติดต่อได้</p>
                </div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.dftConnectPersonAddress}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">เบอร์โทรศัพท์ของผู้ติดต่อได้</p>
                </div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.dftConnectPersonPhone}</p>
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
                    <p class="text-success font-20">${selectData.dftAttorneyFullName}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">วันเกิดของผู้ยื่นคำขอแทน</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.dftAttorneyBirthday}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">เลขที่ประจำตัวประชาชนผู้ขอความช่วยเหลือ</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.dftCitizenId}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">ผู้ยื่นคำขอแทนในฐานะ</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.dftAttorneyRelativeby}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">ที่อยู่ของผู้ยื่นคำขอแทน</p>
                </div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.dftAttroneyAddress}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">เบอร์โทรศัพท์ของผู้ยื่นคำขอแทน</p>
                </div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.dftAttorneyPhone}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">หมายเหตุ*(ผู้ร้องไม่สามารถยื่นคำร้องได้)</p>
                </div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.dftAttorneyRemark}</p>
                </div>
            </div>

            </br>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20"><u>ข้อมูลคดี</u></p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">เป็นจำเลยที่</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.dftNo}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">ชื่อฐานความผิด</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.dftBaseGuilt}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">ศาล</p>
                </div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.dftCourt}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">คดีอาญาหมายเลขดำที่</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.dftBlackCaseNo}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">คดีอาญาหมายเลขแดงที่</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.dftRedCaseNo}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">คดีนี้มีจำเลยร่วม</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.dftCodftAmount}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">จำเลยร่วม(ได้แก่)</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.dftCodftDescription}</p>
                </div>
            </div>

            <br/>
            <div class="row">
                <div class="col-6">
                    <p class="text-white font-20">วันที่ศาลมีคำสั่งอนุญาติให้ถอนฟ้อง/ จำหน่ายคดี/ พิพากษายกฟ้อง มันคือฟิลด์เดียวกัน</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.dftCancleDate}</p>
                </div>
            </div>
            <br/>

            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">ศาลพิพากษาคดีถึงที่สุดที่</p>
                </div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.dftEndCourt}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">วันที่เคยยื่นคำขอรับค่าทดแทน</p>
                </div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.dftEverUseDate}</p>
                </div>
            </div>
            <br/>

            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20"><b>ความเสียหายที่เกิดขึ้น</b></p>
                </div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.dftDamage}</p>
                </div>
            </div>
            <br/>

            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20"><b>ความเห็นนิติกร</b></p>
                </div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.dftLawOpinion}</p>
                </div>
            </div>
            <br/>

            <div class="row">
                <div class="col-6">
                    <p class="text-white font-20"><b>คำกล่าวอ้างของโจทย์ มั</b></p>
                </div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col-11" align="justify">
                    <p class="text-success font-20">${selectData.dftLawSummary1}</p>
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
                    <p class="text-success font-20">${selectData.dftLawSummary2}</p>
                </div>
            </div>
            <br/>

            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20"><b>ข้อมูลของจำเลย </b></p>
                </div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col-11" align="justify">
                    <p class="text-success font-20">${selectData.dftLawSummary3}</p>
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
                    <p class="text-success font-20">${selectData.dftLawSummary4}</p>
                </div>
            </div>
            <br/>
            ${selectData.wartermarks}
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20"><b>ความเห็นผู้อำนวยการ</b></p>
                </div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.dftDirectorOpinion}</p>
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
                    <p class="text-success font-20">${selectData.dftDirectorRemark}</p>
                </div>
            </div>
            <br/>

            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20"><b>ผลการลงความเห็นของ คณะอนุกรรมการ</b></p>
                </div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.dftSubcommitteeOpinion}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">ความเห็นคณะอนุกรรมการ</p>
                </div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class=col-11" align="justify">
                    <p class="text-success font-20">${selectData.dftSubcommitteeRemark}</p>
                </div>
            </div>
            <br/>

            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20"><b>ความเห็นคณะกรรมการ</b></p>
                </div>
                <div class="col-9">
                    <p class="text-success font-20">${selectData.dftCommitteeOpinion}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">วันที่ออกคำวินิจฉัย</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.dftCommitteeInspectDate}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">เลขที่คำวินิจฉัย</p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.dftCommitteeInspectNo}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20">ความเห็นเพิ่มเติมคณะกรรมการ</p>
                </div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class=col-11" align="justify">
                    <p class="text-success font-20">${selectData.dftCommitteeRemark}</p>
                </div>
            </div>

            <br/>
            <div class="row">
                <div class="col-3">
                    <p class="text-white font-20"><b>ความเห็นศาลอุทธรณ์</b></p>
                </div>
                <div class="col-3">
                    <p class="text-success font-20">${selectData.dftAppealOpinion}</p>
                </div>
                <div class="col-3">
                    <p class="text-white font-20">รับเรื่องอุทธรณ์มาจาก</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.dftAppealFrom}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">วันที่ สชง. รับเรื่องอุทธรณ์</p>
                    </div>
                    <div class="col-9">
                        <p class="text-success font-20">${selectData.dftAppealRecieveDate}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">ศาลอุทธรณ์มีคำวินิจฉัยตามหมายเลขคดีแดงที่</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.dftAppealRedNo}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">วันที่ศาลอุทธรณ์มีคำสั่ง</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.dftAppealRedDate}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">ความเห็นเพิ่มเติมศาลอุทธรณ์</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col"></div>
                    <div class=col-11" align="justify">
                        <p class="text-success font-20">${selectData.dftAppealRemark}</p>
                    </div>
                </div>
            </div>
        </div>
        ${selectData.wartermarks}
    </body>
</html>
`;
    }
    public viewgetHtml(selectData: IDxc_Model_Rlpd_CrimeDefendantCompensation, title: string) {
        return this.html = `<html>

            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
                <script>
                    $(document).ready(function() {
                        $('#confirmRlpdCrimeDefendantCompensation').click(function(){
                            $('#rlpdCrimeDefendantCompensation').modal('toggle'); 
                            $('#rlpdCrimeDefendantCompensation').on('hidden.bs.modal', function () {
                                $('body').addClass('modal-open');
                            });
                        });
                        $('#close').click(function(){
                            $('#rlpdCrimeDefendantCompensation').modal('toggle');
                            $('#rlpdCrimeDefendantCompensation').on('hidden.bs.modal', function () {
                                $('body').addClass('modal-open');
                            });  
                        });
                        $('#closeRlpdCrimeDefendantCompensation').click(function(){
                            $('#rlpdCrimeDefendantCompensation').modal('toggle');
                            $('#rlpdCrimeDefendantCompensation').on('hidden.bs.modal', function () {
                                $('body').addClass('modal-open');
                            });  
                        });
                        $("#rlpdCrimeDefendantCompensation").modal({
                            show: false,
                            backdrop: 'static'
                        });
                        $("#clickRlpdCrimeDefendantCompensation").click(function() {
                        $("#rlpdCrimeDefendantCompensation").modal("show");             
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
                                <div class="col-10"></div>
                                <div class="col">
                                    <p class="text-white font-20">รหัสคดี</p>
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
                                    <p class="text-white font-20">ประกอบอาชีพอยู่หรือไม่</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftIsCareer}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">อาชีพของผู้เสียหาย</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftCareer}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">กรณีไม่ได้ประกอบอาชีพ *</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftUnCareerType}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">รายได้</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftIncome}/${selectData.dftIncomePer}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">สถานที่ทำงาน</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftWorkPlace}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">จังหวัด</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftWorkplaceProvinceFullText}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">กรณีไม่ได้ประกอบอาชีพอื่นๆ</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftUnCareer}</p>
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
                                    <p class="text-success font-20">${selectData.dftConnectPersonFullName}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">เกี่ยวข้องเป็น</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftConnectPersonRelative}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ที่อยู่ของผู้ติดต่อได้</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftConnectPersonAddress}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">เบอร์โทรศัพท์ของผู้ติดต่อได้</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftConnectPersonPhone}</p>
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
                                    <p class="text-success font-20">${selectData.dftAttorneyFullName}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">วันเกิดของผู้ยื่นคำขอแทน</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftAttorneyBirthday}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">เลขที่ประจำตัวประชาชนผู้ขอความช่วยเหลือ</p>
                                </div>
                                <div class="col-3">
                                    <a class="text-success font-20" id="clickRlpdCrimeDefendantCompensation" type="button">
                                        ${selectData.dftCitizenId} <i class="material-icons">link</i></a>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">ผู้ยื่นคำขอแทนในฐานะ</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftAttorneyRelativeby}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ที่อยู่ของผู้ยื่นคำขอแทน</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftAttroneyAddress}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">เบอร์โทรศัพท์ของผู้ยื่นคำขอแทน</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftAttorneyPhone}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">หมายเหตุ*(ผู้ร้องไม่สามารถยื่นคำร้องได้)</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftAttorneyRemark}</p>
                                </div>
                            </div>

                            </br>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><u>ข้อมูลคดี</u></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">เป็นจำเลยที่</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftNo}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">ชื่อฐานความผิด</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftBaseGuilt}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ศาล</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftCourt}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">คดีอาญาหมายเลขดำที่</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftBlackCaseNo}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">คดีอาญาหมายเลขแดงที่</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftRedCaseNo}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">คดีนี้มีจำเลยร่วม</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftCodftAmount}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">จำเลยร่วม(ได้แก่)</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftCodftDescription}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-6">
                                    <p class="text-white font-20">วันที่ศาลมีคำสั่งอนุญาติให้ถอนฟ้อง/ จำหน่ายคดี/ พิพากษายกฟ้อง มันคือฟิลด์เดียวกัน</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftCancleDate}</p>
                                </div>
                            </div>
                            <br/>

                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ศาลพิพากษาคดีถึงที่สุดที่</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftEndCourt}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">วันที่เคยยื่นคำขอรับค่าทดแทน</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftEverUseDate}</p>
                                </div>
                            </div>
                            <br/>

                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>ความเสียหายที่เกิดขึ้น</b></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftDamage}</p>
                                </div>
                            </div>
                            <br/>

                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>ความเห็นนิติกร</b></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftLawOpinion}</p>
                                </div>
                            </div>
                            <br/>

                            <div class="row">
                                <div class="col-6">
                                    <p class="text-white font-20"><b>คำกล่าวอ้างของโจทย์ มั</b></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-10" align="justify">
                                    <p class="text-success font-20">${selectData.dftLawSummary1}</p>
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
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftLawSummary2}</p>
                                </div>
                            </div>
                            <br/>

                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>ข้อมูลของจำเลย </b></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftLawSummary3}</p>
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
                                    <p class="text-success font-20">${selectData.dftLawSummary4}</p>
                                </div>
                            </div>
                            <br/>

                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>ความเห็นผู้อำนวยการ</b></p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftDirectorOpinion}</p>
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
                                    <p class="text-success font-20">${selectData.dftDirectorRemark}</p>
                                </div>
                            </div>
                            <br/>

                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>ผลการลงความเห็นของ คณะอนุกรรมการ</b></p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftSubcommitteeOpinion}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ความเห็นคณะอนุกรรมการ</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-10" align="justify">
                                    <p class="text-success font-20">${selectData.dftSubcommitteeRemark}</p>
                                </div>
                            </div>
                            <br/>

                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>ความเห็นคณะกรรมการ</b></p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftCommitteeOpinion}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">วันที่ออกคำวินิจฉัย</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftCommitteeInspectDate}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">เลขที่คำวินิจฉัย</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftCommitteeInspectNo}</p>
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
                                    <p class="text-success font-20">${selectData.dftCommitteeRemark}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                            <div class="col-3">
                                    <p class="text-white font-20"><b>ความเห็นศาลอุทธรณ์</b></p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftAppealOpinion}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>ความเห็นศาลอุทธรณ์</b></p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftAppealOpinionDesc}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">รับเรื่องอุทธรณ์มาจาก</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftAppealFrom}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">วันที่ สชง. รับเรื่องอุทธรณ์</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftAppealRecieveDate}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ศาลอุทธรณ์มีคำวินิจฉัยตามหมายเลขคดีแดงที่</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftAppealRedNo}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">วันที่ศาลอุทธรณ์มีคำสั่ง</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftAppealRedDate}</p>
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
                                    <p class="text-success font-20">${selectData.dftAppealRemark}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
            <div id="rlpdCrimeDefendantCompensation" class="modal fade" tabindex="-1" data-backdrop="static" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title text-white" id="exampleModalLongTitle">ยืนยันการค้นหา</h4>
                            <button type="button" class="close" id="close">×</button>
                        </div>
                        <div class="modal-body font-20 text-white text-center">
                            คุณต้องการเปิดรายงาน Single Report ของ <br>
                            หมายเลขบัตรประชาชนนี้ ${selectData.dftCitizenId} ใช่หรือไม่
                        </div>
                        <div class="modal-footer">
                            <button type="button" id="closeRlpdCrimeDefendantCompensation" class="btn btn-danger">ยกเลิก</button>
                            <a id="confirmRlpdCrimeDefendantCompensation" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.dftCitizenId}/0/0/0/0/0">ตกลง</a>				
                        </div>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        <html>`;
    }

    public viewgetHtmlSingleReport(selectData: IDxc_Model_Rlpd_CrimeDefendantCompensation, title: string) {
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
                                <div class="col-10"></div>
                                <div class="col">
                                    <p class="text-white font-20">รหัสคดี</p>
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
                                    <p class="text-white font-20">ประกอบอาชีพอยู่หรือไม่</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftIsCareer}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">อาชีพของผู้เสียหาย</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftCareer}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">กรณีไม่ได้ประกอบอาชีพ *</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftUnCareerType}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">รายได้</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftIncome}/${selectData.dftIncomePer}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">สถานที่ทำงาน</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftWorkPlace}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">จังหวัด</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftWorkplaceProvinceFullText}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">กรณีไม่ได้ประกอบอาชีพอื่นๆ</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftUnCareer}</p>
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
                                    <p class="text-success font-20">${selectData.dftConnectPersonFullName}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">เกี่ยวข้องเป็น</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftConnectPersonRelative}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ที่อยู่ของผู้ติดต่อได้</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftConnectPersonAddress}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">เบอร์โทรศัพท์ของผู้ติดต่อได้</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftConnectPersonPhone}</p>
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
                                    <p class="text-success font-20">${selectData.dftAttorneyFullName}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">วันเกิดของผู้ยื่นคำขอแทน</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftAttorneyBirthday}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">เลขที่ประจำตัวประชาชนผู้ขอความช่วยเหลือ</p>
                                </div>
                                <div class="col-3 text-success font-20">
                                    ${selectData.dftCitizenId}
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">ผู้ยื่นคำขอแทนในฐานะ</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftAttorneyRelativeby}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ที่อยู่ของผู้ยื่นคำขอแทน</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftAttroneyAddress}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">เบอร์โทรศัพท์ของผู้ยื่นคำขอแทน</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftAttorneyPhone}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">หมายเหตุ*(ผู้ร้องไม่สามารถยื่นคำร้องได้)</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftAttorneyRemark}</p>
                                </div>
                            </div>

                            </br>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><u>ข้อมูลคดี</u></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">เป็นจำเลยที่</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftNo}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">ชื่อฐานความผิด</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftBaseGuilt}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ศาล</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftCourt}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">คดีอาญาหมายเลขดำที่</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftBlackCaseNo}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">คดีอาญาหมายเลขแดงที่</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftRedCaseNo}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">คดีนี้มีจำเลยร่วม</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftCodftAmount}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">จำเลยร่วม(ได้แก่)</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftCodftDescription}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-6">
                                    <p class="text-white font-20">วันที่ศาลมีคำสั่งอนุญาติให้ถอนฟ้อง/ จำหน่ายคดี/ พิพากษายกฟ้อง มันคือฟิลด์เดียวกัน</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftCancleDate}</p>
                                </div>
                            </div>
                            <br/>

                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ศาลพิพากษาคดีถึงที่สุดที่</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftEndCourt}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">วันที่เคยยื่นคำขอรับค่าทดแทน</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftEverUseDate}</p>
                                </div>
                            </div>
                            <br/>

                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>ความเสียหายที่เกิดขึ้น</b></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftDamage}</p>
                                </div>
                            </div>
                            <br/>

                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>ความเห็นนิติกร</b></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftLawOpinion}</p>
                                </div>
                            </div>
                            <br/>

                            <div class="row">
                                <div class="col-6">
                                    <p class="text-white font-20"><b>คำกล่าวอ้างของโจทย์ มั</b></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-10" align="justify">
                                    <p class="text-success font-20">${selectData.dftLawSummary1}</p>
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
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftLawSummary2}</p>
                                </div>
                            </div>
                            <br/>

                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>ข้อมูลของจำเลย </b></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftLawSummary3}</p>
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
                                    <p class="text-success font-20">${selectData.dftLawSummary4}</p>
                                </div>
                            </div>
                            <br/>

                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>ความเห็นผู้อำนวยการ</b></p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftDirectorOpinion}</p>
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
                                    <p class="text-success font-20">${selectData.dftDirectorRemark}</p>
                                </div>
                            </div>
                            <br/>

                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>ผลการลงความเห็นของ คณะอนุกรรมการ</b></p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftSubcommitteeOpinion}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ความเห็นคณะอนุกรรมการ</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-10" align="justify">
                                    <p class="text-success font-20">${selectData.dftSubcommitteeRemark}</p>
                                </div>
                            </div>
                            <br/>

                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>ความเห็นคณะกรรมการ</b></p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftCommitteeOpinion}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">วันที่ออกคำวินิจฉัย</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftCommitteeInspectDate}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">เลขที่คำวินิจฉัย</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftCommitteeInspectNo}</p>
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
                                    <p class="text-success font-20">${selectData.dftCommitteeRemark}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                            <div class="col-3">
                                    <p class="text-white font-20"><b>ความเห็นศาลอุทธรณ์</b></p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftAppealOpinion}</p>
                                </div>
                            </div>

                            <br/>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20"><b>ความเห็นศาลอุทธรณ์</b></p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftAppealOpinionDesc}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">รับเรื่องอุทธรณ์มาจาก</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftAppealFrom}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">วันที่ สชง. รับเรื่องอุทธรณ์</p>
                                </div>
                                <div class="col-9">
                                    <p class="text-success font-20">${selectData.dftAppealRecieveDate}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ศาลอุทธรณ์มีคำวินิจฉัยตามหมายเลขคดีแดงที่</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftAppealRedNo}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">วันที่ศาลอุทธรณ์มีคำสั่ง</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.dftAppealRedDate}</p>
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
                                    <p class="text-success font-20">${selectData.dftAppealRemark}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        <html>`;
    }

    public getSearchData() {
        const schema = 'rlpd-crime-defendant-compensation';
        if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {
        } else {
            this.show = true;
            this.obj = localStorage.getItem(schema + 'Results');
            this.results = JSON.parse(this.obj);
            this.count = this.results.length; // นับจำนวนรายการ

            console.log('results' + this.results);
            console.log('count' + this.count);
        }
    }

    public getSearchDataCareer() {
        const schema = 'rlpd-crime-defendant-compensation';
        if (localStorage.getItem(schema + '-career-Results') === '[]' || localStorage.getItem(schema + '-career-Results') === null) {
        } else {
            this.showCareer = true;
            this.objCareer = localStorage.getItem(schema + '-career-Results');
            this.resultsCareer = JSON.parse(this.objCareer);
            this.countCareer = this.resultsCareer.length; // นับจำนวนรายการ
        }
    }

    public getnormalPdf() {
        const schema = 'rlpd-crime-defendant-compensation';
        // const schema = environment.qm.sub[0]['rlpd'].sub[0]['rlpd-crime-defendant-compensation'].schema;
        if (localStorage.getItem(schema + 'Results') === '[]' ||
            localStorage.getItem(schema + 'Results') === null) {

            this.normalPdf = [];
            console.log('3.1');
        } else {
            this.obj = localStorage.getItem(schema + 'Results');
            this.results = JSON.parse(this.obj);
            this.count = this.results.length; // นับจำนวนรายการ
            this.normalPdfCount = `<div class="col-md-11"
          class="row card singlereport-timeline-item list-normal-design-head-collapse">
          <span class="list-normal-design-underline depart">กรมคุ้มครองสิทธิและเสรีภาพ: </span>
          <span class="list-normal-design-underline departdata">ความช่วยเหลือทางด้านการเงิน แก่จำเลยในคดีอาญา</span>
          <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ
          </span>
        </div>`;
            this.loadReportDetail();
            for (let i = 0; i < this.results.length; i++) {
                this.normalPdf.push(
                    `<div class="col-md-11">
                <div class="section-criminal-results" style="text-indent:25px;
                    font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
                <span class="list-normal-design-underline depart">ความช่วยเหลือทางด้านการเงิน แก่จำเลยในคดีอาญา</span>

                <div style="padding-left:15px;">
                <strong class="report-field-title">ชื่อจำเลย
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                      ${this.changeNull(this.results[i].dftAttorneyGivenName)}
                      ${this.changeNull(this.results[i].dftAttorneySurName)}
                  </span>&nbsp;&nbsp;
                <strong class="report-field-title">เป็นจำเลยที่
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                      ${this.changeNull(this.results[i].dftNo)}
                  </span>&nbsp;&nbsp;
                <strong class="report-field-title">ชื่อฐานความผิด
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                      ${this.changeNull(this.results[i].dftBaseGuilt)}
                  </span>&nbsp;&nbsp;
                <strong class="report-field-title">ศาล
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                      ${this.changeNull(this.results[i].dftCourt)}
                </span>&nbsp;&nbsp;
                <strong class="report-field-title">ชื่อ-สกุลของผู้ยื่นคำขอแทน
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                      ${this.changeNull(this.results[i].dftAttorneyFullName)}
                  </span>&nbsp;&nbsp;
                <strong class="report-field-title">เลขประจำตัวประชาชนของผู้ยื่นขอแทน
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                      ${this.changeNull(this.results[i].dftCitizenId)}
                  </span>&nbsp;&nbsp;
                <strong class="report-field-title">ผู้ยื่นคำขอแทนในฐานะ
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                      ${this.changeNull(this.results[i].dftAttorneyRelativeby)}
                  </span>&nbsp;&nbsp;
                <strong class="report-field-title">เบอร์โทรศัพท์ของผู้ยื่นคำขอแทน
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                      ${this.changeNull(this.results[i].dftAttorneyPhone)}
                  </span>&nbsp;&nbsp;
                <strong class="report-field-title">ศาลพิพากษาคดีถึงที่สุดที่
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                      ${this.changeNull(this.results[i].dftEndCourt)}
                  </span>&nbsp;&nbsp;
                <strong class="report-field-title">วันที่ออกคำวินิจฉัย
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                      ${this.changeNull(this.formatDate(this.results[i].dftCommitteeInspectDate))}
                  </span>&nbsp;&nbsp;
                <strong class="report-field-title">วันที่ศาลอุทธรณ์มีคำสั่ง
                </strong>&nbsp;&nbsp;
                  <span class="report-field-value" style="text-decoration:underline">
                      ${this.changeNull(this.formatDate(this.results[i].dftAppealRedDate))}
                  </span>&nbsp;&nbsp;

                </div>
              </div>${this.loadReportDetail()}`);
                console.log('DJOP.normal' + this.normalPdf[i]);
            }
            console.log('3.2');
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
     * @return {IDxc_Model_Rlpd_CrimeDefendantCompensation[]}
     */
    public get $results(): IDxc_Model_Rlpd_CrimeDefendantCompensation[] {
        return this.results;
    }

    /**
     * Setter $results
     * @param {IDxc_Model_Rlpd_CrimeDefendantCompensation[]} value
     */
    public set $results(value: IDxc_Model_Rlpd_CrimeDefendantCompensation[]) {
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

    public get $resultsCareer(): IDxc_Model_Rlpd_CrimeDefendantCompensation[] {
        return this.resultsCareer;
    }
    public set $resultsCareer(value: IDxc_Model_Rlpd_CrimeDefendantCompensation[]) {
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
