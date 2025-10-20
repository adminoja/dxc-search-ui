import { IDxc_Model_Cifs_AnonymousCorpse } from 'src/app/core/shared/models/Dxc_Model_Cifs_AnonymousCorpse';
import { Injectable } from "@angular/core";

export interface IReportCifsAnonymousCorpse {
  model: IDxc_Model_Cifs_AnonymousCorpse;
}

@Injectable()
export class CifsAnonymousCorpseMetadata {
  html: string;
  public getHtml(selectData: IDxc_Model_Cifs_AnonymousCorpse, title: string) {

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
  <div>
  <table border="1px" style="border-style:solid; border-color:#000; width:100%">
            <tr>
                <td align="center">${title}</td>
              </tr>
      </table>
  <br />
  <br />
  <table style="width:100%">

          <tr>
              <td style="width:25%"></td>
              <td style="width:25%"></td>
              <td style="width:5%"></td>
              <td style="width:15%"></td>
              <td style="width:30%"></td>
          </tr>

          <tr>
              <td>เลขที่ศพนิรนาม</td>
              <td colspan="4" style="color:blue" data-attributeName="anonymousCorpseNumber"
              data-role="dxc-hyperlink" data-value="${selectData.anonymousCorpseNumber}">${selectData.anonymousCorpseNumber}</td>

          </tr>

          <tr>
              <td colspan="5" style="height:5px"></td>
          </tr>

          <tr >
              <td>ต่างชาติ</td>
              <td style="color:blue">${selectData.personNationalityText}</td>
              <td>&nbsp;</td>
              <td>วันที่ชันสูตรศพ</td>
              <td style="color:blue">${selectData.autopsyDate}</td>
          </tr>

          <tr>
              <td colspan="5" style="height:5px"></td>
          </tr>

          <tr>
              <td>สถานีตำรวจท้องที่ที่พบศพ</td>
              <td style="color:blue">${selectData.policeOffice}</td>
              <td>&nbsp;</td>
              <td>เพศ</td>
              <td style="color:blue">${selectData.sex}</td>
          </tr>

          <tr>
              <td colspan="5" style="height:5px"></td>
          </tr>

          <tr>
              <td>ข้อมูลฟัน</td>
              <td style="color:blue">${selectData.teethDescriptionText}</td>
              <td>&nbsp;</td>
              <td>แผลเป็น/ตำหนิ</td>
              <td style="color:blue">${selectData.scarDescriptionText}</td>
          </tr>

          <tr>
              <td colspan="5" style="height:5px"></td>
          </tr>

          <tr>
              <td>รอยสัก</td>
              <td style="color:blue">${selectData.tattooDescriptionText}</td>
              <td>&nbsp;</td>
              <td>ลักษณะพิเศษ</td>
              <td style="color:blue">${selectData.characteristicsDescriptionText}</td>
          </tr>

          <tr>
              <td colspan="5" style="height:5px"></td>
          </tr>

          <tr>
              <td>ประวัติทางการแพทย์</td>
              <td colspan="4" style="color:blue">${selectData.medicalHistory}</td>
          </tr>

          <tr>
              <td colspan="5" style="height:5px"></td>
          </tr>

          <tr>
              <td>การแต่งกายและทรัพย์สินติดตัว</td>
              <td colspan="4" style="color:blue">${selectData.dressDescriptionText}</td>
          </tr>

          <tr>
              <td colspan="5" style="height:5px"></td>
          </tr>

          <tr>
              <td>หมายเหตุ</td>
              <td colspan="4" style="color:blue">${selectData.remark}</td>
          </tr>
  </table>
</div>

</body>

      </html>
      `;

  }
  public viewgetHtml(selectData: IDxc_Model_Cifs_AnonymousCorpse, title: string) {

    return this.html = `<html>
      <head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>

<body>
<div>
  <div>
		<table class="table" border="2px" width="100%">
            	<tr>
                	<td align="center" Class="text-white font-20">${title}</td>
                </tr>
        </table>
  <div>
<br />
<br />
    <table style="width:100%" border="0">
            <tr>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
            </tr>
      	    <tr>
                <td style="height: 5px;" colspan="21">&nbsp;</td>
            </tr>
            <tr>
                <td colspan="3"><span class="text-white font-20">เลขที่ศพนิรนาม</span></td>
                <td colspan="2"></td>
                <td style="color:blue" colspan="2"><span class="text-success font-20">${selectData.anonymousCorpseNumber}</span></td>
            </tr>
            <tr>
                <td style="height: 5px;" colspan="21">&nbsp;</td>
            </tr>

          <tr>
            <td colspan="3"><span class="text-white font-20">ต่างชาติ</span></td>
            <td colspan="2"></td>
            <td style="color:blue" colspan="2"><span class="text-success font-20">${selectData.personNationalityText}</span></td>
            <td colspan="2"></td>
            <td colspan="3"><span class="text-white font-20">วันที่ชันสูตรศพ</span></td>
            <td colspan="2"></td>
            <td style="color:blue" colspan="2"><span class="text-success font-20">${selectData.autopsyDate}</span></td>
            <td colspan="2"></td>
            <td colspan="3"><span class="text-white font-20">สถานีตำรวจท้องที่ที่พบศพ</span></td>
            <td colspan="2"></td>
            <td style="color:blue" colspan="2"><span class="text-success font-20">${selectData.policeOffice}</span></td>
            <td colspan="2"></td>
          </tr>
      		<tr>
                <td style="height: 5px;" colspan="21">&nbsp;</td>
          </tr>
          <tr>
          <td colspan="3"><span class="text-white font-20">เพศ</span></td>
          <td colspan="2"></td>
          <td style="color:blue" colspan="2"><span class="text-success font-20">${selectData.sex}</span></td>
          <td colspan="2"></td>
          <td colspan="3"><span class="text-white font-20">ข้อมูลฟัน</span></td>
          <td colspan="2"></td>
          <td style="color:blue" colspan="2"><span class="text-success font-20">${selectData.teethDescriptionText}</span></td>
          <td colspan="2"></td>
          <td colspan="3"><span class="text-white font-20">แผลเป็น/ตำหนิ</span></td>
          <td colspan="2"></td>
          <td style="color:blue" colspan="2"><span class="text-success font-20">${selectData.scarDescriptionText}</span></td>
          <td colspan="2"></td>
        </tr>
        <tr>
              <td style="height: 5px;" colspan="21">&nbsp;</td>
        </tr>
        <tr>
        <td colspan="3"><span class="text-white font-20">รอยสัก</span></td>
        <td colspan="2"></td>
        <td style="color:blue" colspan="2"><span class="text-success font-20">${selectData.tattooDescriptionText}</span></td>
        <td colspan="2"></td>
        <td colspan="3"><span class="text-white font-20">ลักษณะพิเศษ</span></td>
        <td colspan="2"></td>
        <td style="color:blue" colspan="2"><span class="text-success font-20">${selectData.characteristicsDescriptionText}</span></td>
        <td colspan="2"></td>
        <td colspan="3"><span class="text-white font-20">ประวัติทางการแพทย์</span></td>
        <td colspan="2"></td>
        <td style="color:blue" colspan="2"><span class="text-success font-20">${selectData.medicalHistory}</span></td>
        <td colspan="2"></td>
      </tr>
      <tr>
            <td style="height: 5px;" colspan="21">&nbsp;</td>
      </tr>
      <tr>
      <td colspan="3"><span class="text-white font-20">การแต่งกายและทรัพย์สินติดตัว</span></td>
      <td colspan="2"></td>
      <td style="color:blue" colspan="2"><span class="text-success font-20">${selectData.dressDescriptionText}</span></td>
      <td colspan="2"></td>
      <td colspan="3"><span class="text-white font-20">หมายเหตุ</span></td>
      <td colspan="2"></td>
      <td style="color:blue" colspan="2"><span class="text-success font-20">${selectData.remark}</span></td>
      <td colspan="2"></td>
    </tr>
    <tr>
          <td style="height: 5px;" colspan="21">&nbsp;</td>
    </tr>
    </table>
  </div>
</body>

      </html>
      `;
  }
}
