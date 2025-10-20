import { Dxc_Model_Moi_Dopa_Education_Backgroundes } from '../../../../shared/models/Dxc_Model_Dopa_Moi_Education_Backgroundes';
import * as moment from 'moment';
import { Injectable } from "@angular/core";

export interface IReportDopaMoiEducationBackgroundes {
  model: Dxc_Model_Moi_Dopa_Education_Backgroundes;
}

@Injectable()
export class DopaMoiEducationBackgroundesMetadata {

  private results: Dxc_Model_Moi_Dopa_Education_Backgroundes[];
  private obj: string;
  private show: boolean;
  private normalPdf: string[];
  private count: number;
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
  public getHtml(selectData: Dxc_Model_Moi_Dopa_Education_Backgroundes, title: string) {

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
<table style="border-style: solid; border-color: #000; width: 100%;" border="1px">
    <tbody>
        <tr>
            <td align="center">${title}</td>
        </tr>
    </tbody>
</table>
<br /> <br />
<table style="width: 100%;">
    <tbody>
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

        </tr>

        <tr>
            <td style="height: 5px;" colspan="8">&nbsp;</td>
        </tr>

  <tr>
    <td colspan="2"></td>
    <td style="font-weight: bold; text-decoration:underline" colspan="10">ระดับการศึกษา</td>
    <td style="font-weight: bold; text-decoration:underline" colspan="10">ชื่อย่อย ประเภทวิชา/ปริญญา</td>
  </tr>

        <tr>
        <td colspan="2"></td>
            <td colspan="5">ระดับการศึกษา 1 </td>
            <td style="color: blue;" colspan="5">${selectData.degree1}</td>
            <td colspan="5">ชื่อย่อย ประเภทวิชา/ปริญญา 1 </td>
            <td style="color: blue;" colspan="5">${selectData.faculty1}</td>
        </tr>
        <tr>
<td colspan="2"></td>
        <td colspan="5">ระดับการศึกษา 2 </td>
            <td style="color: blue;" colspan="5">${selectData.degree1}</td>
            <td colspan="5">ชื่อย่อย ประเภทวิชา/ปริญญา 2 </td>
            <td style="color: blue;" colspan="5">${selectData.faculty1}</td>
        </tr>
  <tr>
<td colspan="2"></td>
            <td colspan="5">ระดับการศึกษา 3 </td>
            <td style="color: blue;" colspan="5">${selectData.degree3}</td>
            <td colspan="5">ชื่อย่อย ประเภทวิชา/ปริญญา 3 </td>
            <td style="color: blue;" colspan="5">${selectData.faculty3}</td>
        </tr>
  <tr>
<td colspan="2"></td>
            <td colspan="5">ระดับการศึกษา 4 </td>
            <td style="color: blue;" colspan="5">${selectData.degree4}</td>
            <td colspan="5">ชื่อย่อย ประเภทวิชา/ปริญญา 4 </td>
            <td style="color: blue;" colspan="5">${selectData.faculty4}</td>
        </tr>

  <tr>
<td colspan="2"></td>
           <td colspan="5">ระดับการศึกษา 5 </td>
            <td style="color: blue;" colspan="5">${selectData.degree5}</td>
            <td colspan="5">ชื่อย่อย ประเภทวิชา/ปริญญา 5 </td>
            <td style="color: blue;" colspan="5">${selectData.faculty5}</td>
        </tr>

  <tr>
<td colspan="2"></td>
            <td colspan="5">ระดับการศึกษา 6 </td>
            <td style="color: blue;" colspan="5">${selectData.degree6}</td>
            <td colspan="5">ชื่อย่อย ประเภทวิชา/ปริญญา 6  </td>
            <td style="color: blue;" colspan="5">${selectData.faculty6}</td>
        </tr>
  <tr>
<td colspan="2"></td>
            <td colspan="5">ระดับการศึกษา 7 </td>
            <td style="color: blue;" colspan="5">${selectData.degree7}</td>
            <td colspan="5">ชื่อย่อย ประเภทวิชา/ปริญญา 7 </td>
            <td style="color: blue;" colspan="5">${selectData.faculty7}</td>
        </tr>
  <tr>
<td colspan="2"></td>
            <td colspan="5">ระดับการศึกษา 8 </td>
            <td style="color: blue;" colspan="5">${selectData.degree8}</td>
            <td colspan="5">ชื่อย่อย ประเภทวิชา/ปริญญา 8 </td>
            <td style="color: blue;" colspan="5">${selectData.faculty8}</td>
        </tr>

        <tr>
<td colspan="2"></td>
            <td style="height: 5px;" colspan="8">&nbsp;</td>
        </tr>

  <tr>
<td colspan="2"></td>
    <td style="font-weight: bold; text-decoration:underline" colspan="10">ระดับผลเฉลี่ยการศึกษา</td>
    <td style="font-weight: bold; text-decoration:underline" colspan="10">ชื่อสถานศึกษาที่เรียนจบ</td>

  </tr>

        <tr>
<td colspan="2"></td>
            <td colspan="5">ระดับผลเฉลี่ยการศึกษา 1</td>
            <td style="color: blue;" colspan="5">${selectData.gpa1}</td>
             <td colspan="5">ชื่อสถานศึกษาที่เรียนจบ 1</td>
            <td style="color: blue;" colspan="5">${selectData.graduate1}</td>
            </tr>
            <tr>
<td colspan="2"></td>
            <td colspan="5">ระดับผลเฉลี่ยการศึกษา 2</td>
            <td style="color: blue;" colspan="5">${selectData.gpa2}</td>
            <td colspan="5">ชื่อสถานศึกษาที่เรียนจบ 2</td>
            <td style="color: blue;" colspan="5">${selectData.graduate2}</td>
        </tr>
        <tr>
<td colspan="2"></td>
            <td colspan="5">ระดับผลเฉลี่ยการศึกษา 3</td>
            <td style="color: blue;" colspan="5">${selectData.gpa3}</td>
            <td colspan="5">ชื่อสถานศึกษาที่เรียนจบ 3</td>
            <td style="color: blue;" colspan="5">${selectData.graduate3}</td>
        </tr>
        <tr>
<td colspan="2"></td>
            <td colspan="5">ระดับผลเฉลี่ยการศึกษา 4</td>
            <td style="color: blue;" colspan="5">${selectData.gpa4}</td>
            <td colspan="5">ชื่อสถานศึกษาที่เรียนจบ 4</td>
            <td style="color: blue;" colspan="5">${selectData.graduate4}</td>
        </tr>
        <tr>
<td colspan="2"></td>
            <td colspan="5">ระดับผลเฉลี่ยการศึกษา 5</td>
            <td style="color: blue;" colspan="5">${selectData.gpa5}</td>
            <td colspan="5">ชื่อสถานศึกษาที่เรียนจบ 5</td>
            <td style="color: blue;" colspan="5">${selectData.graduate5}</td>
        </tr>
        <tr>
<td colspan="2"></td>
            <td colspan="5">ระดับผลเฉลี่ยการศึกษา 6</td>
            <td style="color: blue;" colspan="5">${selectData.gpa6}</td>
            <td colspan="5">ชื่อสถานศึกษาที่เรียนจบ 6</td>
            <td style="color: blue;" colspan="5">${selectData.graduate6}</td>
        </tr>
        <tr>
<td colspan="2"></td>
            <td colspan="5">ระดับผลเฉลี่ยการศึกษา 7</td>
            <td style="color: blue;" colspan="5">${selectData.gpa7}</td>
            <td colspan="5">ชื่อสถานศึกษาที่เรียนจบ 7</td>
            <td style="color: blue;" colspan="5">${selectData.graduate7}</td>
        </tr>
         <tr>
<td colspan="2"></td>
            <td colspan="5">ระดับผลเฉลี่ยการศึกษา 8</td>
            <td style="color: blue;" colspan="5">${selectData.gpa8}</td>
            <td colspan="5">ชื่อสถานศึกษาที่เรียนจบ 8</td>
            <td style="color: blue;" colspan="5">${selectData.graduate8}</td>
        </tr>
        <tr>
<td colspan="2"></td>
            <td style="height: 5px;" colspan="8">&nbsp;</td>
        </tr>


        <tr>
<td colspan="2"></td>
            <td style="height: 5px;" colspan="8">&nbsp;</td>
        </tr>

  <tr>
<td colspan="2"></td>
    <td style="font-weight: bold; text-decoration:underline" colspan="10">วันที่จบการศึกษา</td>
    <td style="font-weight: bold; text-decoration:underline" colspan="10">สาขาวิชา</td>

  </tr>

        <tr>
<td colspan="2"></td>
            <td colspan="5">วันที่จบการศึกษา 1</td>
            <td style="color: blue;" colspan="5">${selectData.gradDate1}</td>
            <td colspan="5">สาขาวิชา 1</td>
            <td style="color: blue;" colspan="5">${selectData.major1}</td>
        </tr>
        <tr>
<td colspan="2"></td>
            <td colspan="5">วันที่จบการศึกษา 2</td>
            <td style="color: blue;" colspan="5">${selectData.gradDate2}</td>
            <td colspan="5">สาขาวิชา 2</td>
            <td style="color: blue;" colspan="5">${selectData.major2}</td>
        </tr>
        <tr>
<td colspan="2"></td>
            <td colspan="5">วันที่จบการศึกษา 3</td>
            <td style="color: blue;" colspan="5">${selectData.gradDate3}</td>
            <td colspan="5">สาขาวิชา 3</td>
            <td style="color: blue;" colspan="5">${selectData.major3}</td>
        </tr>
        <tr>
<td colspan="2"></td>
            <td colspan="5">วันที่จบการศึกษา 4</td>
            <td style="color: blue;" colspan="5">${selectData.gradDate4}</td>
            <td colspan="5">สาขาวิชา 4</td>
            <td style="color: blue;" colspan="5">${selectData.major4}</td>
        </tr>
        <tr>
<td colspan="2"></td>
            <td colspan="5">วันที่จบการศึกษา 5</td>
            <td style="color: blue;" colspan="5">${selectData.gradDate5}</td>
            <td colspan="5">สาขาวิชา 5</td>
            <td style="color: blue;" colspan="5">${selectData.major5}</td>
        </tr>
        <tr>
<td colspan="2"></td>
            <td colspan="5">วันที่จบการศึกษา 6</td>
            <td style="color: blue;" colspan="5">${selectData.gradDate6}</td>
            <td colspan="5">สาขาวิชา 6</td>
            <td style="color: blue;" colspan="5">${selectData.major6}</td>
        </tr>
        <tr>
            <td colspan="2"></td>
            <td colspan="5">วันที่จบการศึกษา 7</td>
            <td style="color: blue;" colspan="5">${selectData.gradDate7}</td>
            <td colspan="5">สาขาวิชา 7</td>
            <td style="color: blue;" colspan="5">${selectData.major7}</td>
        </tr>
         <tr>
            <td colspan="2"></td>
            <td colspan="5">วันที่จบการศึกษา 8</td>
            <td style="color: blue;" colspan="5">${selectData.gradDate8}</td>
            <td colspan="5">สาขาวิชา 8</td>
            <td style="color: blue;" colspan="5">${selectData.major8}</td>
        </tr>

          <tr>
            <td style="height: 5px;" colspan="8">&nbsp;</td>
        </tr>
    </tbody>
</table>
</div>
${selectData.wartermarks}
</body>
</html>
`;
  }

  public viewgetHtml(selectData: Dxc_Model_Moi_Dopa_Education_Backgroundes, title: string) {

    return this.html = `<html>
      <head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>

<body>
<div>
  <div>
		<table class="table" border="2px" width="100%">
            	<tr>
                	<td align="center">${title}</td>
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
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
                <td style="width: 5%;">&nbsp;</td>
            </tr>
      	    <tr>
                <td style="height: 5px;" colspan="30">&nbsp;</td>
            </tr>

            <tr>
              <td colspan="4" style="height: 5px; text-decoration: underline; font-size: 16px; font-weight: bold;">ระดับการศึกษา</td>
              <td style="color: blue;" colspan="4"></td>
              <td colspan="2"></td>
              <td colspan="4" style="height: 5px; text-decoration: underline; font-size: 16px; font-weight: bold;">
              ชื่อย่อย ประเภทวิชา/ปริญญา</td>
              <td style="color: blue;" colspan="4"></td>
              <td colspan="2"></td>
              <td colspan="4" style="height: 5px; text-decoration: underline; font-size: 16px; font-weight: bold;">
              ระดับผลเฉลี่ยการศึกษา</td>
              <td style="color: blue;" colspan="4"></td>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td colspan="4">ระดับการศึกษา 1 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.degree1}</span></td>
              <td colspan="2"></td>
              <td colspan="4">ชื่อย่อย ประเภทวิชา/ปริญญา 1 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.faculty1}</span></td>
              <td colspan="2"></td>
              <td colspan="4">ระดับผลเฉลี่ยการศึกษา 1 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.gpa1}</span></td>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td colspan="4">ระดับการศึกษา 2 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.degree2}</span></td>
              <td colspan="2"></td>
              <td colspan="4">ชื่อย่อย ประเภทวิชา/ปริญญา 2 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.faculty2}</span></td>
              <td colspan="2"></td>
              <td colspan="4">ระดับผลเฉลี่ยการศึกษา 2 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.gpa2}</span></td>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td colspan="4">ระดับการศึกษา 3 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.degree3}</span></td>
              <td colspan="2"></td>
              <td colspan="4">ชื่อย่อย ประเภทวิชา/ปริญญา 3 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.faculty3}</span></td>
              <td colspan="2"></td>
              <td colspan="4">ระดับผลเฉลี่ยการศึกษา 3 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.gpa3}</span></td>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td colspan="4">ระดับการศึกษา 4 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.degree4}</span></td>
              <td colspan="2"></td>
              <td colspan="4">ชื่อย่อย ประเภทวิชา/ปริญญา 4 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.faculty4}</span></td>
              <td colspan="2"></td>
              <td colspan="4">ระดับผลเฉลี่ยการศึกษา 4 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.gpa4}</span></td>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td colspan="4">ระดับการศึกษา 5 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.degree5}</span></td>
              <td colspan="2"></td>
              <td colspan="4">ชื่อย่อย ประเภทวิชา/ปริญญา 5 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.faculty5}</span></td>
              <td colspan="2"></td>
              <td colspan="4">ระดับผลเฉลี่ยการศึกษา 5 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.gpa5}</span></td>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td colspan="4">ระดับการศึกษา 6 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.degree6}</span></td>
              <td colspan="2"></td>
              <td colspan="4">ชื่อย่อย ประเภทวิชา/ปริญญา 6 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.faculty6}</span></td>
              <td colspan="2"></td>
              <td colspan="4">ระดับผลเฉลี่ยการศึกษา 6 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.gpa6}</span></td>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td colspan="4">ระดับการศึกษา 7 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.degree7}</span></td>
              <td colspan="2"></td>
              <td colspan="4">ชื่อย่อย ประเภทวิชา/ปริญญา 7 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.faculty7}</span></td>
              <td colspan="2"></td>
              <td colspan="4">ระดับผลเฉลี่ยการศึกษา 7 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.gpa7}</span></td>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td colspan="4">ระดับการศึกษา 8 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.degree8}</span></td>
              <td colspan="2"></td>
              <td colspan="4">ชื่อย่อย ประเภทวิชา/ปริญญา 8 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.faculty8}</span></td>
              <td colspan="2"></td>
              <td colspan="4">ระดับผลเฉลี่ยการศึกษา 8 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.gpa8}</span></td>
              <td colspan="2"></td>
            </tr>
            <tr>
                <td style="height: 5px;" colspan="30">&nbsp;</td>
            </tr>

      		<tr>
            <td colspan="4" style="height: 5px; text-decoration: underline; font-size: 16px; font-weight: bold;">
            ชื่อสถานศึกษาที่เรียนจบ</td>
            <td style="color: blue;" colspan="4"></td>
            <td colspan="2"></td>
            <td colspan="4" style="height: 5px; text-decoration: underline; font-size: 16px; font-weight: bold;">วันที่จบการศึกษา</td>
            <td style="color: blue;" colspan="4"></td>
            <td colspan="2"></td>
            <td colspan="4" style="height: 5px; text-decoration: underline; font-size: 16px; font-weight: bold;">สาขาวิชา</td>
            <td style="color: blue;" colspan="4"></td>
            <td colspan="2"></td>
          </tr>
          <tr>
              <td colspan="4">ชื่อสถานศึกษาที่เรียนจบ 1 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.graduate1}</span></td>
              <td colspan="2"></td>
              <td colspan="4">วันที่จบการศึกษา 1 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.gradDate1}</span></td>
              <td colspan="2"></td>
              <td colspan="4">สาขาวิชา 1 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.major1}</span></td>
              <td colspan="2"></td>
          </tr>
          <tr>
              <td colspan="4">ชื่อสถานศึกษาที่เรียนจบ 2 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.graduate2}</span></td>
              <td colspan="2"></td>
              <td colspan="4">วันที่จบการศึกษา 2 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.gradDate2}</span></td>
              <td colspan="2"></td>
              <td colspan="4">สาขาวิชา 2 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.major2}</span></td>
              <td colspan="2"></td>
          </tr>
          <tr>
              <td colspan="4">ชื่อสถานศึกษาที่เรียนจบ 3 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.graduate3}</span></td>
              <td colspan="2"></td>
              <td colspan="4">วันที่จบการศึกษา 3 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.gradDate3}</span></td>
              <td colspan="2"></td>
              <td colspan="4">สาขาวิชา 3 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.major3}</span></td>
              <td colspan="2"></td>
          </tr>
          <tr>
              <td colspan="4">ชื่อสถานศึกษาที่เรียนจบ 4 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.graduate4}</span></td>
              <td colspan="2"></td>
              <td colspan="4">วันที่จบการศึกษา 4 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.gradDate4}</span></td>
              <td colspan="2"></td>
              <td colspan="4">สาขาวิชา 4 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.major4}</span></td>
              <td colspan="2"></td>
          </tr>
          <tr>
              <td colspan="4">ชื่อสถานศึกษาที่เรียนจบ 5 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.graduate5}</span></td>
              <td colspan="2"></td>
              <td colspan="4">วันที่จบการศึกษา 5 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.gradDate5}</span></td>
              <td colspan="2"></td>
              <td colspan="4">สาขาวิชา 5 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.major5}</span></td>
              <td colspan="2"></td>
          </tr>
          <tr>
              <td colspan="4">ชื่อสถานศึกษาที่เรียนจบ 6 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.graduate6}</span></td>
              <td colspan="2"></td>
              <td colspan="4">วันที่จบการศึกษา 6 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.gradDate6}</span></td>
              <td colspan="2"></td>
              <td colspan="4">สาขาวิชา 6 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.major6}</span></td>
              <td colspan="2"></td>
          </tr>
          <tr>
              <td colspan="4">ชื่อสถานศึกษาที่เรียนจบ 7 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.graduate7}</span></td>
              <td colspan="2"></td>
              <td colspan="4">วันที่จบการศึกษา 7 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.gradDate7}</span></td>
              <td colspan="2"></td>
              <td colspan="4">สาขาวิชา 7 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.major7}</span></td>
              <td colspan="2"></td>
          </tr>
          <tr>
              <td colspan="4">ชื่อสถานศึกษาที่เรียนจบ 8 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.graduate8}</span></td>
              <td colspan="2"></td>
              <td colspan="4">วันที่จบการศึกษา 8 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.gradDate8}</span></td>
              <td colspan="2"></td>
              <td colspan="4">สาขาวิชา 8 </td>
              <td style="color: blue;" colspan="4"><span class="text-info">${selectData.major8}</span></td>
              <td colspan="2"></td>
          </tr>
        <tr>
              <td style="height: 5px;" colspan="30">&nbsp;</td>
        </tr>
    </table>
  </div>
</body>

      </html>
      `;
  }

  public getSearchData() {
    const schema = 'dopa-moi-dopa-education-backgrounds';
    console.log(typeof (localStorage.getItem(schema + 'Results')));
    if (localStorage.getItem(schema + 'Results') === '[]'
      || localStorage.getItem(schema + 'Results') === null) {

      console.log('1.1');
    } else {
      this.show = true;
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length; // นับจำนวนรายการ
      console.log('dopa-moi-dopa-education-backgroundsObj' + this.obj);

    }
  }

  public getnormalPdf() {
    const schema = 'dopa-moi-dopa-education-backgrounds';
    if (localStorage.getItem(schema + 'Results') === '[]' ||
      localStorage.getItem(schema + 'Results') === null) {
      this.normalPdf = [];
      console.log('1.1');
    } else {
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length; // นับจำนวนรายการ\
      this.normalPdfCount = `<div class="col-md-11"
      class="row card singlereport-timeline-item list-normal-design-head-collapse">
      <span class="list-normal-design-underline depart">กรมการปกครอง: </span>
      <span class="list-normal-design-underline departdata">ข้อมูลวุฒิการศึกษา (2556) สำนักปลัดกระทรวงศึกษาธิการ(Linkage) </span>
      <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ
      </span>
    </div>`;
      this.loadReportDetail();
      for (let i = 0; i < this.results.length; i++) {
        this.normalPdf.push(`
      <div class="col-md-11">
        <div class="section-criminal-results"
        style="text-indent:25px;font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
        <span class="list-normal-design-underline depart">ข้อมูลวุฒิการศึกษา (2556) สำนักปลัดกระทรวงศึกษาธิการ(Linkage) </span>
        <div style="padding-left:15px;">
        <strong class="report-field-title">ชื่อตัว (ภาษาไทย)</strong>&nbsp;&nbsp;
          <span class="report-field-value" style="text-decoration:underline">
          ${this.changeNull(this.results[i].major8)}</span>&nbsp;&nbsp;
          <strong class="report-field-title">ชื่อสกุล (ภาษาไทย)</strong>&nbsp;&nbsp;
          <span class="report-field-value" style="text-decoration:underline">
          ${this.changeNull(this.results[i].major8)}</span>&nbsp;&nbsp;
          <strong class="report-field-title">วันเดือนปี เกิด</strong>&nbsp;&nbsp;
          <span class="report-field-value" style="text-decoration:underline">
          ${this.results[i].major8}</span>&nbsp;&nbsp;
          <strong class="report-field-title">วันเดือนปี ที่ออกบัตร</strong>&nbsp;&nbsp;
          <span class="report-field-value" style="text-decoration:underline">
          ${this.results[i].major8}</span>&nbsp;&nbsp;
          <strong class="report-field-title">วันเดือนปี บัตรหมดอายุ</strong>&nbsp;&nbsp;
          <span class="report-field-value" style="text-decoration:underline">
          ${this.changeNull(this.results[i].major8)}</span>&nbsp;&nbsp;
          <strong class="report-field-title">สาเหตุการยกเลิกบัตร</strong>&nbsp;&nbsp;
          <span class="report-field-value" style="text-decoration:underline">
          ${this.changeNull(this.results[i].major8)}</span>&nbsp;&nbsp;
        </div>
      </div>
    </div>${this.loadReportDetail()}`);
        console.log('dopa-moi-dopa-thai-id-cardsResults' + this.normalPdf[i]);
      }
      console.log('1.2');
    }
  }

  changeNull(selectData: string) {
    if (selectData == null) {
      return '-';
    } else if (selectData == "") {
      return '-';
    } else {
      return selectData;
    }
  }

  formatDate(dateOfBirth: string): string {

    const date = new Date(dateOfBirth);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear() + 543;
    if (dateOfBirth == 'null') {
      return '-';
    } else {
      return `${day}/${month}/${year}`;
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
   * Getter $normalPdf
   * @return {string[]}
   */
  public get $normalPdf(): string[] {
    return this.normalPdf;
  }

  /**
   * Getter $count
   * @return {number}
   */
  public get $count(): number {
    return this.count;
  }

  /**
   * Getter $normalPdfCount
   * @return {string}
   */
  public get $normalPdfCount(): string {
    return this.normalPdfCount;
  }

  /**
   * Setter $normalPdf
   * @param {string[]} value
   */
  public set $normalPdf(value: string[]) {
    this.normalPdf = value;
  }

  /**
   * Setter $count
   * @param {number} value
   */
  public set $count(value: number) {
    this.count = value;
  }

  /**
   * Setter $normalPdfCount
   * @param {string} value
   */
  public set $normalPdfCount(value: string) {
    this.normalPdfCount = value;
  }


  /**
   * Getter $results
   * @return {Dxc_Model_Moi_Dopa_Education_Backgroundes[]}
   */
  public get $results(): Dxc_Model_Moi_Dopa_Education_Backgroundes[] {
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
   * Setter $results
   * @param {Dxc_Model_Moi_Dopa_Education_Backgroundes[]} value
   */
  public set $results(value: Dxc_Model_Moi_Dopa_Education_Backgroundes[]) {
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

}
