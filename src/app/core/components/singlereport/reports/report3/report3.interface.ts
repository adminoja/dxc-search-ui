import { Injectable } from "@angular/core";
export interface IReport3{
  citizenCardNumber:string;
  firstName:string; //Dopa
  lastName:string; //Dopa
  dateOfBirth:string; //Dopa
  age:string; //Dopa
  nationality:string; //Dopa
  religion:string; //Dopa
  fatherFullName:string //Dopa
  motherFullName:string //Dopa
  homeNumber:string; //Dopa
  homeMoo:string; //Dopa
  homeTrock:string; //Dopa
  homeSoy:string; //Dopa
  homeRoad:string; //Dopa
  homeTumbon:string; //Dopa
  homeAmphur:string; //Dopa
  homeProvince:string; //Dopa
  homeAddress:string;
  allegationDoc:string[]; //Doc
  allegationDocNumber:number;
  sentenceDate:string; //Doc
  releaseDate:string; //Doc
  allegationDjop:string[]; //Djop
  narcoticName:string[]; //Once
  allegationDjopNumber:number;
  reportName:string; //ผู้ขอรายงาน
  reportOfDate:string; // วันที่พิมรายงาน
  reportOfTime:string; //เวลาที่พิมรายงาน
  reportBarcode:string; //เลขที่เอกสาร(เลขบาร์โค๊ด)
  wartermarks:string;
}
@Injectable()
export class Metadata{
    html:string;
    public getHtml(model:IReport3){
        return this.html=`<html>

        <head>

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
                <td >ผู้พิมพ์ ${model.reportName}</td>
              </tr>
              <tr>
                <td >วันที่ ${model.reportOfDate} เวลา ${model.reportOfTime}</td>
              </tr>
            </table>
        </footer>
        <div name="MyCustomHeader">
            <img src="https://search.dxc.go.th/public/image/DXC_logo.jpg" style="width: 150px; height: 60px" />
            <div>
                <label>DXC Report</label>
                <br>
                <a href="www.dxc.go.th">www.dxc.go.th</a>

            </div>
            <hr>
        </div>

        ${model.wartermarks}

            <div *ngIf="report_name=='รายงานสนับสนุนการสืบเสาะ ค.ป.๐๔.๑ กรมพินิจฯ'">
                    <div class="card example-2 scrollbar-deep-blue">
                      <div class="card">
                        <div class="row">
                          <div class="body">
                            <div class="container-fluid">
                              <div style="margin-left:470px; margin-top:10px;">
                                <table style="width:100%" border="0">
                                    <tbody>
                                      <tr>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                      </tr>
                                      <tr>
                                        <td colspan="4">รายงานที่</td>
                                        <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                                        <td>/</td>
                                        <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                                      </tr>
                                      <tr>
                                        <td colspan="3">เลขคดี</td>
                                        <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                                        <td>/</td>
                                        <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                                      </tr>




                                    </tbody>
                                  </table>
                              </div>
                              <div style="text-align:center;">
                                <h4>
                                  <span>รายงานข้อเท็จจริงเกี่ยวกับเด็ก/เยาวชน</span>
                                </h4>
                                <h4>
                                  <span>สถานพินิจและคุ้มครองเด็กและเยาวชน จังหวัดพิษณุโลก</span>
                                </h4>
                              </div>
                              <div>
                                <h5>
                                  <span style="margin-left:50px;">ข้าพเจ้าขอรายงานข้อเท็จจริงสาเหตุแห่งการกระทำผิดเกี่ยวกับเด็ก/เยาวชน และความเห็นตามที่ระบุไว้ในมาตรา
                                    ๓๖(๑) และมาตรา ๘๒(๒) แห่งพระราชบัญญัติศาลเยาวชนและครอบครัวและวิธีพิจารณาคดีเยาวชนและครอบครัว
                                    พ.ศ. ๒๕๕๓ ดังต่อไปนี้
                                  </span>
                                </h5>
                              </div>
                              <div>

                                <form>
                                  <table style="width:100%" border="0">

                                    <tbody>
                                      <tr>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>



                                      </tr>
                                      <tr>
                                        <td colspan="4">ชื่อ-สกุล เด็ก/เยาวชน</td>
                                        <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;" colspan="5">${model.firstName} ${model.lastName}</td>
                                        <td>ชื่อเล่น</td>
                                        <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;"></td>
                                        <td colspan="4">เลขประจำตัวประชาชน</td>
                                        <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;" colspan="2">${model.citizenCardNumber}</td>
                                        <td>เกิดวันที่</td>
                                        <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;" colspan="3">${model.dateOfBirth}</td>
                                      </tr>
                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>
                                      <tr>
                                        <td colspan="2">ปัจจุบันอายุ</td>
                                        <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;">${model.age}</td>
                                        <td >ปี</td>
                                        <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;"></td>
                                        <td >เดือน</td>
                                        <td>เชื้อชาติ</td>
                                        <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;"></td>
                                        <td>สัญชาติ</td>
                                        <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;">${model.nationality}</td>
                                        <td>ศาสนา</td>
                                        <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;">${model.religion}</td>
                                      </tr>
                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>
                                      <tr>
                                        <td colspan="2">ชื่อ-สกุล บิดา </td>
                                        <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;" colspan="3">${model.fatherFullName}</td>
                                        <td colspan="2">ชื่อ-สกุล มารดา</td>
                                        <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;" colspan="2">${model.motherFullName}</td>
                                      </tr>

                                    </tbody>
                                  </table>
                                </form>




								            <form>
                                  <table style="width:100%" border="0">

                                    <tbody>
                                      <tr>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>

                                      </tr>

                                      <tr>
                                        <td colspan="3">ที่อยู่ของบิดา/มารดา เลขที่</td>
                                        <td class="colorfont" class="colorfont" style="border-bottom: black 1px dotted; " colspan="12"></td>
                                      </tr>
                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>
                                      <tr>
                                        <td colspan="2">โทรศัพท์</td>
                                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                                      </tr>
                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>
                                      <tr>
                                        <td colspan="3">ชื่อ-สกุล ผู้ปกครอง</td>
                                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                                      </tr>
                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>
                                      <tr>
                                        <td colspan="3">ที่อยู่ของผู้ปกครอง เลขที่</td>
                                        <td style="border-bottom: black 1px dotted; " colspan="12"></td>
                                      </tr>

                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>
                                      <tr>
                                        <td colspan="2">โทรศัพท์</td>
                                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                                      </tr>
                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>
                                      <tr>
                                        <td colspan="3">สถานภาพบิดามารดา</td>
                                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                                      </tr>
                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>
                                      <tr>
                                        <td colspan="2">เป็นบุตรคนที่</td>
                                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                                        <td colspan="2">ในจำนวนบุตร</td>
                                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                                        <td colspan="3">คน ของบิดามารดา</td>
                                      </tr>

                                    </tbody>
                                  </table>
                                </form>


								              <form>
                                  <table style="width:100%" border="0">
                                    <tbody>
                                      <tr>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>

                                      </tr>

                                      <tr>
                                        <td colspan="3">ปัจจุบันอาศัยอยู่กับ</td>
                                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                                        <td colspan="3">เกี่ยวข้องกับเด็ก/เยาวชน</td>
                                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>

                                      </tr>
                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>

                                      <tr>

                                        <td colspan="3">ที่อยู่ เลขที่</td>
                                        <td style="border-bottom: black 1px dotted; " colspan="12">${model.homeAddress}</td>
                                      </tr>
                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>
                                      <tr>
                                        <td colspan="2">โทรศัพท์</td>
                                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                                      </tr>
                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>
                                      <tr>
                                        <td colspan="3">สถานที่ติดต่อ เลขที่</td>
                                        <td style="border-bottom: black 1px dotted;" colspan="12">${model.homeAddress}</td>
                                      </tr>
                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>
                                      <tr>
                                        <td colspan="2">โทรศัพท์</td>
                                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                                      </tr>
                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>
                                      <tr>
                                        <td colspan="3">วัน เดือน ปี ที่รับตัว</td>
                                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                                      </tr>


                                    </tbody>
                                  </table>
                                </form>
                                ${model.wartermarks}
								              <form>
                                  <table style="width:100%" border="0">

                                    <tbody>
                                      <tr>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>

                                      </tr>

                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>
                                      <tr>
                                        <td colspan="4">ถูกกล่าวหากระทำความผิดในข้อหา</td>
                                        <td style="border-bottom: black 1px dotted; " colspan="11">
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>
                                      <tr>
                                        <td colspan="6">หนังสือแจ้งการดำเนินคดี/แจ้งการจับกุม เลขที่</td>
                                        <td style="border-bottom: black 1px dotted;" colspan="6"></td>
                                      </tr>
                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>
                                      <tr>
                                        <td colspan="2">ลงวันที่</td>
                                        <td style="border-bottom: black 1px dotted; text-align:center; " colspan="4"></td>
                                      </tr>
                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>
                                      <tr>
                                        <td colspan="2">สถานีตำรวจภูธร</td>
                                        <td style="border-bottom: black 1px dotted; text-align:center; " colspan="6"></td>
                                      </tr>
                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>
                                      <tr>
                                        <td colspan="5">วันเดือนปีที่ถูกกล่าวหาว่ากระทำผิด</td>
                                        <td style="border-bottom: black 1px dotted; text-align:center; " colspan="1"></td>
                                        <td colspan="3">อายุขณะกระทำความผิด</td>
                                        <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                                        <td >ปี</td>
                                        <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                                        <td >เดือน</td>
                                      </tr>
                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>
                                      <tr>
                                        <td colspan="2">วันเวลาที่เกิดเหตุ</td>
                                        <td style="border-bottom: black 1px dotted;" colspan="11">
                                        </td>

                                      </tr>
                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>
                                      <tr>
                                        <td colspan="2">สถานที่เกิดเหตุ</td>
                                        <td style="border-bottom: black 1px dotted; " colspan="11"></td>

                                      </tr>
                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>
                                      <tr>
                                        <td colspan="5">ชั้นพนักงานสอบสวน เด็ก/เยาวชนให้การ</td>
                                        <td style="border-bottom: black 1px dotted; " colspan="10">
                                        </td>
                                      </tr>



                                    </tbody>
                                  </table>
                                </form>




								              <form>
                                  <table style="width:100%" border="0">

                                    <tbody>
                                      <tr>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>

                                      </tr>

                                      <tr>
                                        <td colspan="6">ชั้นพนักงานคุมประพฤติ เด็ก/เยาวชนให้การ</td>
                                        <td style="border-bottom: black 1px dotted; " colspan="9">
                                        </td>
                                      </tr>

                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>
                                      <tr>
                                        <td colspan="4">พฤติการณ์คดีโดยสังเขป</td>
                                        <td style="border-bottom: black 1px dotted; " colspan="11"></td>
                                      </tr>

                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>
                                      <tr>
                                        <td style="height: 5px; text-decoration: underline; font-weight: bold; " colspan="11">เกี่ยวกับผู้เสียหาย</td>
                                      </tr>

                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>
                                      <tr>

                                        <td colspan="4">ผู้เสียหายให้ถ้อยคำว่า</td>
                                        <td style="border-bottom: black 1px dotted; " colspan="11">
                                        </td>
                                      </tr>

                                    </tbody>
                                  </table>
                                </form>
                                ${model.wartermarks}
								              <form>
                                  <table style="width:100%" border="0">

                                    <tbody>
                                      <tr>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>

                                      </tr>
									                    <tr>
                                        <td colspan="4">ประวัติครอบครัว</td>
                                        <td style="border-bottom: black 1px dotted; " colspan="11"></td>
                                      </tr>

                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>

                                      <tr>
                                        <td style="height: 5px; text-decoration: underline; font-weight: bold; " colspan="11">ปัจจัยความเสี่ยงความจำเป็น</td>
                                      </tr>



                                    </tbody>
                                  </table>
                                </form>


								                <form>
                                  <table style="width:100%" border="0">

                                    <tbody>
                                      <tr>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>

                                      </tr>

                                      <tr>
                                        <td colspan="4">๑. ครอบครัว</td>
                                      </tr>
                                      <tr>
                                        <td colspan="4" style="margin-left:20px;">ข้อมูลเบื้องต้น</td>
                                        <td style="border-bottom: black 1px dotted; " colspan="11"></td>
                                      </tr>
                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>
                                      <tr>
                                        <td style="height: 5px; text-decoration: underline; font-weight: bold; " colspan="11">การทำหน้าที่ของครอบครัว</td>
                                      </tr>
                                      <tr>
                                        <td colspan="5">วิธีการควบคุมพฤติกรรมของเยาวชน พบว่า</td>
                                        <td style="border-bottom: black 1px dotted; " colspan="10">
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colspan="7">ลักษณะความสัมพันธ์ระหว่างบิดา มารดา/ผู้ปกครอง พบว่า</td>
                                        <td style="border-bottom: black 1px dotted; " colspan="8"></td>
                                      </tr>
                                      <tr>
                                        <td colspan="9">ลักษณะความสัมพันธ์ระหว่างเด็ก/เยาวชนกับบิดา มารดา/ผู้ปกครอง พบว่า</td>
                                        <td style="border-bottom: black 1px dotted; " colspan="6">
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colspan="9">ความเจ็บป่วยทางสุขภาพกายและจิตของบุคคลในครอบครัว พบว่า</td>
                                        <td style="border-bottom: black 1px dotted; " colspan="6">
                                        </td>
                                      </tr>




                                    </tbody>
                                  </table>
                                </form>

                                ${model.wartermarks}
								            <form>
                                  <table style="width:100%" border="0">

                                    <tbody>
                                      <tr>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>

                                      </tr>
									                    <tr>
                                        <td colspan="4">๒. ชุมชนและสภาพแวดล้อม</td>
                                      </tr>
                                      <tr>
                                        <td colspan="4">ข้อมูลจากการสืบเสาะ พบว่า</td>
                                        <td style="border-bottom: black 1px dotted; " colspan="11"></td>
                                      </tr>

                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>

                                      <tr>
                                        <td colspan="6">๓. ภูมิหลังทางการศึกษา อาชีพและสังคม</td>
                                        <td style="border-bottom: black 1px dotted; " colspan="9"></td>
                                      </tr>

                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>

                                      <tr>
                                        <td colspan="4">๔. เพื่อนและบุคคลใกล้ชิด</td>
                                        <td style="border-bottom: black 1px dotted; " colspan="11"></td>
                                      </tr>

                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>

                                      <tr>
                                        <td colspan="5">๕. ประวัติการเกี่ยวข้องกับยา/สารเสพติด</td>
                                        ${model.narcoticName}
                                      </tr>


                                    </tbody>
                                  </table>
                                </form>


								                <form>
                                  <table style="width:100%" border="0">

                                    <tbody>
                                      <tr>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>

                                      </tr>

                                      <tr>
                                        <td colspan="4">๖. ประวัติการกระทำผิด</td>
                                      </tr>
                                      <tr>
                                        <td style="height: 5px; text-decoration: underline; font-weight: bold; " colspan="11">เด็กถูกดำเนินคดีรวม ${model.allegationDjopNumber} คดี มีรายละเอียดดังนี้</td>
                                      </tr>
                                      ${model.allegationDjop}
                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>

                                      <tr>
                                        <td colspan="4">๗. สภาวะทางกาย และจิต</td>
                                        <td style="border-bottom: black 1px dotted; " colspan="11"></td>

                                      </tr>

                                    </tbody>
                                  </table>
                                </form>

                                ${model.wartermarks}
								                <form>
                                  <table style="width:100%" border="0">

                                    <tbody>
                                      <tr>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>

                                      </tr>
									                    <tr>
                                        <td colspan="4">๘. ปัญหาพฤติกรรม</td>
                                        <td style="border-bottom: black 1px dotted; " colspan="11"></td>
                                      </tr>

                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>
                                      <tr>
                                        <td colspan="14">ความจำเป็นที่ต้องได้รับการคุ้มครองสวัสดิภาพเด็ก/เยาวชนตามพระราชบัญญัติคุ้มครองเด็ก หรือเป็นผู้เสียหายจากการค้ามนุษย์</td>
                                        <td style="border-bottom: black 1px dotted;"></td>
                                      </tr>

                                      <tr>
                                        <td colspan="4">สาเหตุแห่งการกระทำความผิด</td>
                                        <td style="border-bottom: black 1px dotted; " colspan="11">
                                        </td>
                                      </tr>

                                    </tbody>
                                  </table>
                                </form>
                                ${model.wartermarks}

								                <form>
                                  <table style="width:100%" border="0">

                                    <tbody>
                                      <tr>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>
                                        <td style="width: 5%;"></td>

                                      </tr>

                                      <tr>
                                        <td colspan="6">ผลการประชุมคณะกรรมการสหวิชาชีพ</td>
                                        <td colspan="7">จากการประชุมคณะกรรมการสหวิชาชีพ เมื่อวันที่</td>
                                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="4"></td>
                                      </tr>
                                      <tr>
                                        <td style="height: 3px;" colspan="11"></td>
                                      </tr>

                                      <tr>
                                        <td colspan="13">คณะกรรมการสหวิชาชีพ มีข้อเสนอแนะสำหรับการแก้ไขบำบัดฟื้นฟู รายละเอียด ดังนี้</td>
                                        <td style="border-bottom: black 1px dotted; " colspan="6"></td>

                                      </tr>

                                      <tr>
                                        <td style="height: 150px;" colspan="11"></td>
                                      </tr>
                                      <tr>
                                        <td style="text-align:center;" colspan="7">(  )</td>
                                        <td style="text-align:center;" colspan="7">(  )</td>
                                      </tr>

                                      <tr>
                                        <td style="height: 20px;" colspan="11"></td>
                                      </tr>
                                      <tr>
                                        <td style="text-align:center;" colspan="7">พนักงานคุมประพฤติผู้สืบเสาะข้อเท็จจริง</td>
                                        <td style="text-align:center;" colspan="9">ผู้อำนวยการสถานพินิจและคุ้มครองเด็กและเยาวชนจังหวัด............</td>
                                      </tr>



                                    </tbody>
                                  </table>
                                </form>

                              </div>
                              ${model.wartermarks}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        </body>

        </html>`;
    }
}
