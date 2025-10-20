import { IDxc_Model_Dopa_Moi_Death_Certificates } from "../../../../shared/models/Dxc_Model_Dopa_Moi_Death_Certificates";
import * as moment from 'moment';
import { Injectable } from "@angular/core";
export interface IReportDopaMoiDeathCertificates {
  model: IDxc_Model_Dopa_Moi_Death_Certificates
}

@Injectable()
export class DopaMoiDeathCertificatesMetadata {
  private results: IDxc_Model_Dopa_Moi_Death_Certificates[];
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
  public getHtml(selectData: IDxc_Model_Dopa_Moi_Death_Certificates, title: string) {

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
  ${selectData.wartermarks}
    <div>
      <table border="1px" style="border-style:solid; border-color:#000; width:100%">
        <tr>
          <td align="center">${title}</td>
        </tr>
      </table>
      <table style="width:100%" border="0">
                <tbody>
                <tr>
                <td style="width: 20%;">&nbsp;</td>
                <td style="width: 10%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 0%;">&nbsp;</td>
                <td style="width: 8%;">&nbsp;</td>
                <td style="width: 12%;">&nbsp;</td>
                <td style="width: 14%;">&nbsp;</td>
                <td style="width: 29%;">&nbsp;</td>
            </tr>

            <tr>
                <td style="font-weight: bold; text-decoration:underline" colspan="5">รายละเอียดข้อมูลส่วนตัว</td>
            </tr>

            <tr>
                <td>เลขที่เอกสาร</td>
                <td style="color: blue;" colspan="1">${selectData.documentNo}</td>
            </tr>
            <tr>
                <td colspan="1">ชื่อเต็ม</td>
                <td style="color: blue;" colspan="3" data-attributename="accusedCitizenIds"
                data-role="dxc-hyperlink" data-value="[[lawsuit.case_id]]">${selectData.fullnameAndRank}</td>

            </tr>
            <tr>
                <td>คำนำหน้านาม</td>
                <td style="color: blue;">${selectData.titlePrint}</td>
                <td>ชื่อ</td>
                <td style="color: blue;" colspan="2" data-attributename="accusedCitizenIds"
                data-role="dxc-hyperlink" data-value="[[lawsuit.case_id]]">${selectData.firstName}</td>
            </tr>
            <tr>
                <td>ชื่อสกุล</td>
                <td style="color: blue;">${selectData.lastName}</td>
                <td>ชื่อกลาง</td>
                <td style="color: blue;" colspan="1">${selectData.middleName}</td>
            </tr>
            <tr>
                <td>เพศ</td>
                <td style="color: blue;">${selectData.genderDesc}</td>
                <td>อายุ</td>
                <td style="color: blue;" colspan="1">${selectData.age}</td>
            </tr>
            <tr>
                <td>สัญชาติ</td>
                <td style="color: blue;" colspan="1">${selectData.nationalityDesc}</td>
            </tr>
            <tr>
                <td>บ้านเลขที่</td>
                <td style="color: blue;" colspan="1">${selectData.addressHouseNo}</td>
                <td>หมู่ที่</td>
                <td style="color: blue;" colspan="2">${selectData.addressVillageNo}</td>
            </tr>
            <tr>
                <td>ชื่อตรอก</td>
                <td style="color: blue;" colspan="1">${selectData.addressAlleyWayDesc}</td>
                <td>ชื่อซอย</td>
                <td style="color: blue;" colspan="1">${selectData.addressAlleyDesc}</td>
            </tr>
            <tr>
                <td>ชื่อถนน</td>
                <td style="color: blue;" colspan="1">${selectData.addressRoadDesc}</td>
                <td>ชื่อตำบล</td>
                <td style="color: blue;" colspan="1">${selectData.addressSubdistrictDesc}</td>
            </tr>
            </tr>
            <tr>
                <td>ชื่ออำเภอ</td>
                <td style="color: blue;" colspan="1">${selectData.addressDistrictDesc}</td>
                <td>ชื่อจังหวัด</td>
                <td style="color: blue;" colspan="1">${selectData.addressProvinceDesc}</td>
            </tr>
            </tr>
            <tr>
                <td>สถานะภาพสมรส</td>
                <td style="color: blue;" colspan="1">${selectData.marriageStatusDesc}</td>
            </tr>
            <tr>
                <td>ชื่อบิดา</td>
                <td style="color: blue;" colspan="1">${selectData.fatherName}</td>
                <td>เลขประจำตัวประชาชนบิดา</td>
                <td style="color: blue;" colspan="1">${selectData.fatherPersonalID}</td>
            </tr>
            </tr>
            <tr>
                <td>ชื่อมารดา</td>
                <td style="color: blue;" colspan="1">${selectData.motherName}</td>
                <td>เลขประจำตัวประชาชนมารดา</td>
                <td style="color: blue;" colspan="1">${selectData.motherPersonalID}</td>
            </tr>
            <tr>
                <td>รหัสสำนักทะเบียนที่รับแจ้งตาย</td>
                <td style="color: blue;" >${selectData.authorityIssuing}</td>
                <td> สาเหตุการตาย</td>
                <td style="color: blue;" colspan="">${selectData.causeOfDeath}</td>
            </tr>
            <tr>
                <td>วันที่ตาย (วันเดือนปี)</td>
                <td style="color: blue;" colspan="">${selectData.dateOfDeath}</td>
                <td>วันที่แจ้งตาย(วันเดือนปี)</td>
                <td style="color: blue;" colspan="">${selectData.dateOfNotifying}</td>
            </tr>
            <tr>
                <td>บ้านเลขที่(สถานที่ตาย)</td>
                <td style="color: blue;" colspan="0">${selectData.placeOfDeathHouseNo}</td>
                <td>หมู่ที่(สถานที่ตาย)</td>
                <td style="color: blue;" colspan="1">${selectData.placeOfDeathVillageNo}</td>
            </tr>
            <tr>
                <td>ชื่อตรอก(สถานที่ตาย)</td>
                <td style="color: blue;" colspan="1">${selectData.placeOfDeathAlleyWayDesc}</td>
                <td>ชื่อซอย(สถานที่ตาย)</td>
                <td style="color: blue;" colspan="0">${selectData.placeOfDeathAlleyDesc}</td>
            </tr>
            <tr>
                <td >ชื่อถนน(สถานที่ตาย)</td>
                <td style="color: blue;" colspan="1">${selectData.placeOfDeathRoadDesc}</td>
                <td>ชื่อตำบล (สถานที่ตาย)</td>
                <td style="color: blue;" >${selectData.placeOfDeathSubdistrictDesc}</td>
            </tr>
            <tr>
                <td>ชื่ออำเภอ (สถานที่ตาย)</td>
                <td style="color: blue;" colspan="1">${selectData.placeOfDeathDistrictDesc}</td>
                <td>ชื่อจังหวัด(สถานที่ตาย)</td>
                <td style="color: blue;" >${selectData.placeOfDeathProvinceDesc}</td>
            </tr>
          </tbody>
        </table>
    </div>
    ${selectData.wartermarks}
  </body>
</html>
`;
  }

  public viewgetHtml(selectData: IDxc_Model_Dopa_Moi_Death_Certificates, title: string) {

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
          <table class="table-borderless mb-0">
            <thead>
              <tr>
                <td class="text-white font-20" colspan="2"><u>รายละเอียดข้อมูลส่วนตัว</u></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-white font-20">เลขที่เอกสาร</td>
                <td class="text-success font-20">${selectData.documentNo}</td>
                <td class="text-white font-20"></td>
                <td class="text-success font-20"></td>
                <td class="text-white font-20"></td>
                <td class="text-success font-20"></td>
              </tr>
              <tr>
                <td class="text-white font-20">คำนำหน้านาม ชื่อตัว ชื่อกลาง ชื่อสกุล</td>
                <td class="text-success font-20">${selectData.fullnameAndRank}</td>
              </tr>
              <tr>
                <td class="text-white font-20">คำนำหน้านาม</td>
                <td class="text-success font-20">${selectData.titlePrint}</td>
                <td class="text-white font-20">ชื่อ</td>
                <td class="text-success font-20">${selectData.firstName}</td>
              </tr>
              <tr>
                <td class="text-white font-20">ชื่อสกุล</td>
                <td class="text-success font-20">${selectData.lastName}</td>
                <td class="text-white font-20">ชื่อกลาง</td>
                <td class="text-success font-20">${selectData.middleName}</td>
              </tr>
              <tr>
                <td class="text-white font-20">เพศ</td>
                <td class="text-success font-20">${selectData.genderDesc}</td>
                <td class="text-white font-20">อายุ</td>
                <td class="text-success font-20">${selectData.age}</td>
              </tr>
              <tr>
                <td class="text-white font-20">สัญชาติ</td>
                <td class="text-success font-20">${selectData.nationalityDesc}</td>
                <td class="text-white font-20"></td>
                <td class="text-success font-20"></td>
              </tr>
              <tr>
                <td class="text-white font-20">บ้านเลขที่</td>
                <td class="text-success font-20">${selectData.addressHouseNo}</td>
                <td class="text-white font-20">หมู่ที่</td>
                <td class="text-success font-20">${selectData.addressVillageNo}</td>
              </tr>
              <tr>
                <td class="text-white font-20">ชื่อตรอก</td>
                <td class="text-success font-20">${selectData.addressAlleyWayDesc}</td>
                <td class="text-white font-20">ชื่อซอย</td>
                <td class="text-success font-20">${selectData.addressAlleyDesc}</td>
              </tr>
              <tr>
                <td class="text-white font-20">ชื่อถนน</td>
                <td class="text-success font-20">${selectData.addressRoadDesc}</td>
                <td class="text-white font-20">ชื่อตำบล</td>
                <td class="text-success font-20">${selectData.addressSubdistrictDesc}</td>
              </tr>
              <tr>
                <td class="text-white font-20">ชื่ออำเภอ</td>
                <td class="text-success font-20">${selectData.addressDistrictDesc}</td>
                <td class="text-white font-20">ชื่อจังหวัด</td>
                <td class="text-success font-20">${selectData.addressProvinceDesc}</td>
              </tr>
              <tr>
                <td class="text-white font-20">สถานะภาพสมรส</td>
                <td class="text-success font-20">${selectData.marriageStatusDesc}</td>
                <td class="text-white font-20"></td>
                <td class="text-success font-20"></td>
              </tr>
              <tr>
                <td class="text-white font-20">ชื่อบิดา</td>
                <td class="text-success font-20">${selectData.fatherName}</td>
                <td class="text-white font-20">เลขประจำตัวประชาชนบิดา</td>
                <td class="text-success font-20">${selectData.fatherPersonalID}</td>
              </tr>
              <tr>
                <td class="text-white font-20">ชื่อมารดา</td>
                <td class="text-success font-20">${selectData.motherName}</td>
                <td class="text-white font-20">เลขประจำตัวประชาชนมารดา</td>
                <td class="text-success font-20">${selectData.motherPersonalID}</td>
              </tr>
              <tr><td>&nbsp;</td></tr>
              <tr>
                <td class="text-white font-20" colspan="6"><u>รายละเอียดเกี่ยวกับการตาย</u></td>
                <td class="text-success font-20"></td>
                <td class="text-white font-20"></td>
                <td class="text-success font-20"></td>
              </tr>
              <tr>
                <td class="text-white font-20">รหัสสำนักทะเบียนที่รับแจ้งตาย</td>
                <td class="text-success font-20">${selectData.authorityIssuing}</td>
                <td class="text-white font-20">สาเหตุการตาย</td>
                <td class="text-success font-20">${selectData.causeOfDeath}</td>
              </tr>
              <tr>
                <td class="text-white font-20">วันที่ตาย (วันเดือนปี)</td>
                <td class="text-success font-20">${selectData.dateOfDeath}</td>
                <td class="text-white font-20">วันที่แจ้งตาย(วันเดือนปี)</td>
                <td class="text-success font-20">${selectData.dateOfNotifying}</td>
              </tr>
              <tr>
                <td class="text-white font-20">บ้านเลขที่(สถานที่ตาย)</td>
                <td class="text-success font-20">${selectData.placeOfDeathHouseNo}</td>
                <td class="text-white font-20">หมู่ที่(สถานที่ตาย)</td>
                <td class="text-success font-20">${selectData.placeOfDeathVillageNo}</td>
              </tr>
              <tr>
                <td class="text-white font-20">ชื่อตรอก(สถานที่ตาย)</td>
                <td class="text-success font-20">${selectData.placeOfDeathAlleyWayDesc}</td>
                <td class="text-white font-20">ชื่อซอย(สถานที่ตาย)</td>
                <td class="text-success font-20">${selectData.placeOfDeathAlleyDesc}</td>
              </tr>
              <tr>
                <td class="text-white font-20">ชื่อถนน(สถานที่ตาย)</td>
                <td class="text-success font-20">${selectData.placeOfDeathRoadDesc}</td>
                <td class="text-white font-20">ชื่อตำบล (สถานที่ตาย)</td>
                <td class="text-success font-20">${selectData.placeOfDeathSubdistrictDesc}</td>
              </tr>
              <tr>
                <td class="text-white font-20">ชื่ออำเภอ (สถานที่ตาย)</td>
                <td class="text-success font-20">${selectData.placeOfDeathDistrictDesc}</td>
                <td class="text-white font-20">ชื่อจังหวัด(สถานที่ตาย)</td>
                <td class="text-success font-20">${selectData.placeOfDeathProvinceDesc}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </body>
    </html>`;
  }
  public getSearchData() {
    const schema = 'dopa-moi-dopa-death-certificates';
    if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {
    } else {
      this.show = true;
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length;
    }
  }
  public getnormalPdf() {
    const schema = 'dopa-moi-dopa-death-certificates';

      if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {
        this.normalPdf = [];
      } else {
        this.obj = localStorage.getItem(schema + 'Results');
        this.results = JSON.parse(this.obj);
        this.count = this.results.length; // นับจำนวนรายการ
        this.normalPdfCount = `<div class="col-md-11"
        class="row card singlereport-timeline-item list-normal-design-head-collapse">
        <span class="list-normal-design-underline depart">กรมการปกครอง: </span>
        <span class="list-normal-design-underline departdata">ข้อมูลใบมรณบัตร (Linkage) </span>
        <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ
        </span>
        </div>`;
        this.loadReportDetail();
        for (let i = 0; i < this.results.length; i++) {
          this.normalPdf.push(`
          <div class="col-md-11">
          <div class="section-criminal-results" style="text-indent:25px;
          font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
          <span class="list-normal-design-underline depart">ข้อมูลใบมรณบัตร (Linkage)</span>
            <div style="padding-left:15px;">
                <strong class="report-field-title">ชื่อ</strong>
                <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].firstName)}</span>
                <strong class="report-field-title">สกุล</strong>
                <span class="report-field-value" style="text-decoration:underline"> ${this.changeNull(this.results[i].lastName)}</span>
                <strong class="report-field-title">วันที่ตาย (วันเดือนปี)</strong>
                <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].dateOfDeath)}</span>
                <strong class="report-field-title">วันที่แจ้งตาย (วันเดือนปี)</strong>
                <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].dateOfNotifying)}</span>
            </div>
          </div>
          </div>${this.loadReportDetail()}`); 
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
   * @return {Dxc_Model_Dopa_Moi_Death_Certificates[]}
   */
  public get $results(): IDxc_Model_Dopa_Moi_Death_Certificates[] {
    return this.results;
  }

  /**
   * Setter $results
   * @param {Dxc_Model_Dopa_Moi_Death_Certificates[]} value
   */
  public set $results(value: IDxc_Model_Dopa_Moi_Death_Certificates[]) {
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
     * Getter $show
     * @return {boolean}
     */
	public get $show(): boolean {
		return this.show;
	}

    /**
     * Getter $count
     * @return {number}
     */
	public get $count(): number {
		return this.count;
	}

    /**
     * Getter $normalPdf
     * @return {string []}
     */
	public get $normalPdf(): string [] {
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
     * Setter $count
     * @param {number} value
     */
	public set $count(value: number) {
		this.count = value;
	}

    /**
     * Setter $normalPdf
     * @param {string []} value
     */
	public set $normalPdf(value: string []) {
		this.normalPdf = value;
	}

    /**
     * Setter $normalPdfCount
     * @param {string} value
     */
	public set $normalPdfCount(value: string) {
		this.normalPdfCount = value;
	}

 

}
