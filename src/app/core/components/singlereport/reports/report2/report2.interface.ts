import { Injectable } from "@angular/core";
export interface IReport2 {
  firstName:string; //Dopa
  lastName:string; //Dopa
  dateOfBirth:string; //Dopa
  nationality:string; //Dopa
  religion:string; //Dopa
  homeNumber:string; //Dopa
  homeMoo:string; //Dopa
  homeTrock:string; //Dopa
  homeSoy:string; //Dopa
  homeRoad:string; //Dopa
  homeTumbon:string; //Dopa
  homeAmphur:string; //Dopa
  homeProvince:string; //Dopa
  age:string;
  allegationDoc:string; //Doc
  sentenceDate:string; //Doc
  releaseDate:string; //Doc
  prisonName:string;
  judgement:string;
  allegationDJop:string; //Djop
  narcoticName:string[]; //Once
  allegationDocNumber:number //ผลรวม
  reportName:string; //ผู้ขอรายงาน
  reportOfDate:string; // วันที่พิมรายงาน
  reportOfTime:string; //เวลาที่พิมรายงาน
  reportBarcode:string; //เลขที่เอกสาร(เลขบาร์โค๊ด)
  wartermarks:string;
}
@Injectable()
export class Metadata {
  html: string;
  public getHtml(model: IReport2) {
    return this.html = `<!DOCTYPE html>
    <html>
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
    <div name="MyCustomHeader"> <img src="https://search.dxc.go.th/public/image/DXC_logo.jpg" style="width: 150px; height: 65px" />
          <div>
        <label>DXC Report</label>
        <br>
        <a href="www.dxc.go.th">www.dxc.go.th</a> </div>
          <hr>
        </div>
    ${model.wartermarks}
    <div *ngIf="report_name=='รายงานสนับสนุนการแสวงหาข้อเท็จจริงกรมคุมประพฤติ'">
          <div class="card example-2 scrollbar-deep-blue">
        <div class="card">
              <div class="row">
            <div class="body">
                  <div class="container-fluid">
                <div style="text-align:center;font-size:22px;">
                      <h5> <span>แบบบันทึกข้อมูลเพื่อการแสวงหาและรวบรวมข้อเท็จจริงของนักโทษเด็ดขาด ส ๑ - ๔๖</span> </h5>
                    </div>
                <div>
                      <form>
                    <table style="margin-left:60px;width:100%" border="0">
                          <tbody>
                        <tr>
                              <td style="width: 10%;"></td>
                              <td style="width: 10%;"></td>
                              <td style="width: 10%;"></td>
                              <td style="width: 10%;"></td>
                              <td style="width: 10%;"></td>
                              <td style="width: 10%;"></td>
                              <td style="width: 5%;"></td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold;" colspan="3">ชื่อ-ชื่อสกุล นักโทษเด็ดขาด (น.ช./น.ญ.)</td>
                              <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;" colspan="3">${model.firstName} ${model.lastName}</td>
                            </tr>
                      </tbody>
                        </table>
                  </form>
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
                              <td style="width: 4%;"></td>
                              <td style="width: 4%;"></td>
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
                              <td style="font-weight: bold; height: 5px; text-decoration: underline;" colspan="11">ตอนที่ ๑ ความคิดเห็นของผู้อุปการะ</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold; height: 5px;" colspan="11">๑. การยอมรับเป็นผู้อุปการะนักโทษเด็ดขาด</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4">ชื่อ-ชื่อสกุล (ของผู้อุปการะ)</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="10"></td>
                              <td>อายุ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                              <td>ปี</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4">เกี่ยวข้องกับนักโทษผู้นี้เป็น</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="12"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="6">ข้าพเจ้ายินดีรับเป็นผู้อุปการะเนื่องจาก</td>
                              <td style="border-bottom: black 1px dotted; " colspan="9"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="17">และรับรองว่าจะดูแลตักเตือนให้ผู้ต้องขังปฏิบัติตามเงื่อนไขการคุมประพฤติทุกประการ หากผิดเงื่อนไขหรือ
                            ประพฤติไม่เหมาะสมจะรายงานให้สำนักงานคุมประพฤติทราบทันที </td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="8">ข้าพเจ้าไม่ยินดีรับเป็นผู้อุปการะเนื่องจาก</td>
                              <td style="border-bottom: black 1px dotted; " colspan="7"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="16">(ถ้าผู้อุปการะไม่ยินดีรับเป็นผู้อุปการะนักโทษเด็ดขาดรายนี้ ก็ไม่ต้องถามข้ออื่น)</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold; height: 5px;" colspan="15">๒. ข้อมูลทั่วไปของผู้อุปการะและความพร้อมของผู้อุปการะต่อการคุมความประพฤตินักโทษเด็ดขาด</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold; height: 5px;" colspan="15">๒.๑ ข้อมูลส่วนบุคคลของผู้อุปการะ</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4">ชื่อ-ชื่อสกุล (ของผู้อุปการะ)</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="10"></td>
                              <td>อายุ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                              <td>ปี</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4">เกี่ยวข้องกับนักโทษผู้นี้เป็น</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                              <td colspan="2">เชื้อชาติ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                              <td>สัญชาติ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                              <td>ศาสนา</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="2">อยู่บ้านเลขที่</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                              <td colspan="2">หมู่บ้าน</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                              <td>หมู่ที่</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                              <td>ซอย</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                              <td>ถนน</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="2">ตำบล/แขวง</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                              <td colspan="2">อำเภอ/เขต</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                              <td>จังหวัด</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                              <td colspan="2">รหัสไปรษณีย์</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                              <td>โทรศัพท์</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="2">จบการศึกษา</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="7"></td>
                              <td>อาชีพ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                              <td>ตำแหน่ง</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="2">สถานที่ทำงาน</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="10"></td>
                              <td>โทรศัพท์</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3">โทรศัพท์มือถือ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="9"></td>
                              <td>มีรายได้</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                              <td>บาท/เดือน</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3">สถานภาพสมรส</td>
                              <td><input type="checkbox" /></td>
                              <td>โสด</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="5">หย่าร้าง/เลิกร้าง/แยกกันอยู่</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="4">สมรส /อยู่กินฉันสามีภรรยา</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3">คู่สมรส ชื่อ-ชื่อสกุล</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="8"></td>
                              <td colspan="2">เชื้อชาติ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                              <td>สัญชาติ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td>ศาสนา</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                              <td colspan="3">จบการศึกษา</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="8"></td>
                              <td>อาชีพ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td>รายได้</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                              <td colspan="2">บาท/เดือน</td>
                              <td colspan="7">จำนวนสมาชิกในครอบครัวของผู้อุปการะมี</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="4"></td>
                              <td>คน</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="5">ผู้อุปการะมีนิสัยความประพฤติ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
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
                              <td style="width: 4%;"></td>
                              <td style="width: 4%;"></td>
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
                              <td style="font-weight: bold; height: 5px;" colspan="16">๒.๒ ความพร้อมของผู้อุปการะต่อการคุมความประพฤตินักโทษเด็ดขาด (ตอบได้มากกว่า ๑ ข้อ)</td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold; height: 5px;" colspan="16">(๑) ความพร้อมด้านฐานะทางเศรษฐกิจ</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="4">มีบ้านเป็นของตนเอง</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="4">อยู่บ้านเช่าเดือนละบาท</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                              <td>บาท</td>
                              <td><input type="checkbox" /></td>
                              <td>อื่นๆ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="4">มีอาชีพที่มั่นคง</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="4">มีรายได้มั่นคง</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                              <td>บาท</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="2">มีรายได้มากกว่ารายจ่าย</td>
                            </tr>
                        <!-- //หน้า2 -->
                        <tr>
                              <td style="height: 5px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td colspan="3"></td>
                              <td colspan="3"></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold; height: 5px;" colspan="16">(๒) ความพร้อมด้านครอบครัวและความสัมพันธ์</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold; height: 5px;" colspan="9">๒.๑ ความสัมพันธ์ของสมาชิกในครอบครัวของผู้อุปการะ</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="2">รักใคร่กันดี</td>
                              <td><input type="checkbox" /></td>
                              <td>ปกติ</td>
                              <td><input type="checkbox" /></td>
                              <td>ทะเลาะกันบ้าง</td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="2">มีปัญหาคือ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="13"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold; height: 5px;" colspan="14">๒.๒ ความสัมพันธ์ระหว่างสมาชิกในครอบครัวของผู้อุปการะกับนักโทษเด็ดขาด</td>
                              <td><input type="checkbox" /></td>
                              <td>รักใคร่กันดี</td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td>ปกติ</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="3">ทะเลาะกันบ้าง</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="3">มีปัญหาคือ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold; height: 5px;" colspan="10">๒.๓ ความสัมพันธ์ระหว่างผู้อุปการะกับนักโทษเด็ดขาด</td>
                              <td><input type="checkbox" /></td>
                              <td>ดีมาก</td>
                              <td><input type="checkbox" /></td>
                              <td>ดี</td>
                              <td><input type="checkbox" /></td>
                              <td>ไม่ค่อยดี</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td>ไม่ดี</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold; height: 5px;" colspan="16">๒.๔ ความพร้อมด้านการอุปการะนักโทษเด็ดขาด (ตอบได้มากกว่า ๑ ข้อ)</td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="15">นักโทษเด็ดขาดให้ความเคารพนับถือ และเชื่อฟังผู้อุปการะ</td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="15">มีเวลาเพียงพอต่อการสอดส่องดูแลพฤติกรรมของนักโทษเด็ดขาดในระหว่างพัก/ลดการลงโทษ</td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="15">ผู้อุปการะ สามารถเป็นต้นแบบและเป็นตัวอย่างที่ดีในการดำเนินชีวิตให้กับนักโทษเด็ดขาดได้</td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="15">ผู้อุปการะ สามารถวางแผนและช่วยเหลือให้นักโทษเด็ดขาดสามารถดำเนินชีวิตได้อย่างปกติสุข</td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="15">ผู้อุปการะ มีความพร้อมในการติดต่อสื่อสารและให้ข้อมูลเกี่ยวกับนักโทษเด็ดขาดต่อพนักงานเจ้าหน้าที่หรือ
                            อาสาสมัครคุมประพฤติ ตลอดจนบุคคลที่เป็นผู้ช่วยเหลือเจ้าพนักงานได้</td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="4">ความพร้อมด้านอื่น ๆ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="10"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold; height: 5px;" colspan="16">๒.๕ ประวัติการติดต่อเยี่ยมเยียนนักโทษเด็ดขาด</td>
                            </tr>
                        <tr>
                              <td colspan="14">ผู้อุปการะได้ไปเยี่ยมเยียนนักโทษเด็ดขาดที่เรือนจำ/ทัณฑสถาน โดยเฉลี่ยเดือน/ปีละ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                              <td>ครั้ง</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3">รวมทั้งสิ้นประมาณ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                              <td>ครั้ง</td>
                            </tr>
                        <tr>
                              <td colspan="12">ผู้อุปการะได้ติดต่อทางจดหมายกับนักโทษเด็ดขาด โดยเฉลี่ยเดือน/ปีละ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                              <td>ครั้ง/</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3">รวมทั้งสิ้นประมาณ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                              <td>ครั้ง</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold; height: 5px;" colspan="16">๓. ประวัติภูมิหลังของนักโทษเด็ดขาด (โดยผู้อุปการะเป็นผู้ให้ข้อมูล)</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
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
                              <td style="width: 4%;"></td>
                              <td style="width: 4%;"></td>
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
                              <td style="font-weight: bold; height: 5px;" colspan="9">๓.๑ ข้อมูลส่วนบุคคลของนักโทษเด็ดขาด</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="7">ชื่อ-ชื่อสกุลจริงของนักโทษเด็ดขาด</td>
                              <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;" colspan="6">${model.firstName} ${model.lastName}</td>
                              <td colspan="2">ชื่อเล่น</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="2">เชื้อชาติ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                              <td>สัญชาติ</td>
                              <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;">${model.nationality}</td>
                              <td>ศาสนา</td>
                              <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;">${model.religion}</td>
                              <td colspan="5">จบการศึกษาก่อนวันต้องโทษ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="4"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4">อาชีพก่อนต้องโทษ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="4"></td>
                              <td colspan="2">รายได้</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                              <td colspan="3">บาท/เดือน/ปี</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="6">ก่อนต้องโทษมีภูมิลำเนาอยู่บ้านเลขที</td>
                              <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;">${model.homeNumber}</td>
                              <td>หมู่ที่</td>
                              <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;">${model.homeMoo}</td>
                              <td>ถนน</td>
                              <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;" colspan="3">${model.homeRoad}</td>
                              <td colspan="2">ตำบล/แขวง</td>
                              <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;">${model.homeTumbon}</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3">อำเภอ/เขต</td>
                              <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;" colspan="3">${model.homeAmphur}</td>
                              <td colspan="2">จังหวัด</td>
                              <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;" colspan="2">${model.homeProvince}</td>
                              <td colspan="2">โทรศัพท์</td>
                              <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4">นักโทษผู้นี้มีหลักทรัพย์คือ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="12"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="6">ขณะนี้ผู้ดูแลหลักทรัพย์ดังกล่าว คือ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="10"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3">สถานภาพสมรส</td>
                              <td><input type="checkbox" /></td>
                              <td>โสด</td>
                              <td><input type="checkbox" /></td>
                              <td>สมรส</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="2">หย่าร้าง</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="2">แยกกันอยู่</td>
                              <td colspan="2"></td>
                              <td><input type="checkbox" /></td>
                              <td colspan="4">อยู่กินฉันสามีภรรยา</td>
                            </tr>

                              <td style="height: 5px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td colspan="3"></td>
                              <td colspan="3"></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4">คู่สมรสชื่อ-ชื่อสกุล</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                              <td>อายุ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                              <td colspan="2">จบการศึกษา</td>
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
                              <td style="width: 4%;"></td>
                              <td style="width: 4%;"></td>
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
                              <td>อาชีพ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                              <td colspan="2">รายได้</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                              <td colspan="5">บาท/เดือน/ปี มีบุตรด้วยกัน</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                              <td>คน</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4">อายุของบุตร (เรียงลำดับ)</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="12"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4">บุตรขณะนี้อยู่กับ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                              <td colspan="7">บุตรที่สามารถช่วยครอบครัวในการประกอบอาชีพ</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4">หรือเลี้ยงตัวเองได้แล้ว มี</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                              <td>คน</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4">แต่ละคนประกอบอาชีพ </td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="12"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4">บุตรที่กำลังศึกษาเล่าเรียน </td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                              <td>คน</td>
                              <td colspan="2">อยู่ชั้น </td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="8"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="9">ขณะนี้คู่สมรส (ภรรยา/สามี) ของนักโทษผู้นี้อาศัยอยู่กับ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="7"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3">บิดาของนักโทษ</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="3">ถึงแก่กรรมแล้ว</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="3">ยังมีชีวิต และอายุ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                              <td>ปี</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3">พักอาศัยอยู่กับ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="13"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="2">บ้านเลขที่</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                              <td colspan="2">หมู่ที่</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                              <td colspan="3">ตำบล/แขวง</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="4"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3">อำเภอ/เขต</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                              <td colspan="3">จังหวัด</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3">มารดาของนักโทษ</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="3">ถึงแก่กรรมแล้ว</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="3">ยังมีชีวิต และอายุ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                              <td>ปี</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3">พักอาศัยอยู่กับ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="13"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="2">บ้านเลขที่</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                              <td colspan="2">หมู่ที่</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                              <td colspan="3">ตำบล/แขวง</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="4"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3">อำเภอ/เขต</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                              <td colspan="3">จังหวัด</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="16">หลักทรัพย์ฐานะความเป็นอยู่ภายในครอบครัวและการประกอบอาชีพ คือ</td>
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
                              <td style="width: 4%;"></td>
                              <td style="width: 4%;"></td>
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
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="16"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold; height: 5px;" colspan="16">๓.๒ ข้อมูลสาเหตุการกระทำความผิด ประวัติการกระทำผิด และนิสัยความประพฤติ</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="7">สาเหตุและพฤติการณ์การกระทำผิดคดีนี้ </td>
                              <td><input type="checkbox" /></td>
                              <td colspan="2">ไม่ทราบ</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="4">ทราบราบละเอียดบ้าง คือ</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="10">ประวัติการต้องโทษจำคุก หรือกระทำผิดอาญาคดีอื่นนอกจากคดีนี้ </td>
                              <td><input type="checkbox" /></td>
                              <td colspan="2">ไม่ทราบ</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="2">ทราบ คือ</td>
                            </tr>
                        <tr>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="16"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="6">นิสัยความประพฤติของนักโทษ</td>
                            </tr>
                        <tr>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="16"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold; height: 5px;" colspan="16">๓.๓ ปัญหาของนักโทษเด็ดขาด</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
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
                              <td style="width: 4%;"></td>
                              <td style="width: 4%;"></td>
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
                              <td colspan="6">ปัญหาของนักโทษก่อนต้องโทษ</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="2">ไม่มี</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="2">ไม่ทราบ</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="2">มี คือ</td>
                            </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td colspan="4">ปัญหาครอบครัว</td>
                            <td><input type="checkbox" /></td>
                            <td colspan="4">ปัญหาสุขภาพกาย/จิต</td>
                            <td><input type="checkbox" /></td>
                            <td colspan="3">ปัญหาเศรษฐกิจ</td>
                            <td><input type="checkbox" /></td>
                            <td colspan="3">ปัญหายาเสพติด</td>
                          </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4">สภาพปัญหา คือ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="12"></td>
                            </tr>

                        <!-- //หน้า4 -->
                        <tr>
                              <td style="height: 5px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td colspan="3"></td>
                              <td colspan="3"></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="16">กรณีมีปัญหาด้านยาเสพติด คือ</td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="4">เสพยาเสพติดประเภท</td>
                              ${model.narcoticName}
                              <td colspan="2">ตั้งแต่อายุ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                              <td>ปี</td>
                            </tr>
                        <tr>
                              <td colspan="16">กรณีมีปัญหาด้านยาเสพติด คือ</td>
                            </tr>
                        <tr>
                              <td colspan="2">เนื่องจาก</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="14"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4">เข้ารับการบำบัดฟื้นฟู</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="2">ไม่เคย</td>
                              <td><input type="checkbox" /></td>
                              <td>เคย</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                              <td colspan="2">ครั้ง ที่</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="4">รับจ้างซื้อยาเสพติด</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="3">จำหน่ายยาเสพติด</td>
                              <td>เนื่องจาก</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold; height: 5px;" colspan="16">๓.๔ ที่อยู่อาศัยและสภาพแวดล้อมของนักโทษเด็ดขาดในระหว่างการคุมความประพฤติ</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="5">เป็นบ้านส่วนตัวของนักโทษเด็ดขาด</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="5">เป็นบ้านส่วนตัวของผู้อุปการะ</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="3">อาศัยผู้อื่น</td>
                              <td>คือ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                              <td colspan="2">เกี่ยวข้องเป็น</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="4"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="2">บ้านเช่า</td>
                              <td><input type="checkbox" /></td>
                              <td>อื่นๆ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="16">สภาพแวดล้อมที่พักอาศัย มีลักษณะ</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="3"> ชุมชนแออัด</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="2">ย่านการค้า</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="4">บริเวณโรงงานอุตสาหกรรม</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="3">บ้านจัดสรรชานเมือง</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="3"> ที่อยู่อาศัยทั่วไป</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="4">สภาพชนบทห่างไกล</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="4">ชุมชนหมู่บ้านในชนบท</td>
                              <td><input type="checkbox" /></td>
                              <td>อื่นๆ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="9">การประกอบอาชีพของประชาชนที่อยู่ในละแวกบ้านพัก</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="7"></td>
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
                              <td style="width: 4%;"></td>
                              <td style="width: 4%;"></td>
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
                              <td colspan="10">สภาพแวดล้อมมีความเหมาะสม ต่อการปรับเปลี่ยนพฤติกรรมนักโทษเพียงใด</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="4"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold; height: 5px;" colspan="16">๓.๕ การวางแผนให้นักโทษเด็ดขาดดำเนินชีวิตภายหลังปล่อยตัว</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="4">ยังไม่ได้เตรียมการไว้</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="4">เตรียมการไว้แล้ว คือ </td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="8"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="7">ต้องการคำแนะนำช่วยเหลือเพิ่มเติมในเรื่อง</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="8"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold; height: 5px;" colspan="16">๓.๖ การวางแผนให้นักโทษเด็ดขาดดำเนินชีวิตภายหลังปล่อยตัว</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="8">ผู้อุปการะเคยติดต่อ หรือมีความสัมพันธ์กันหรือไม</td>
                              <td><input type="checkbox" /></td>
                              <td>เคย</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="2">ไม่่เคย</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="16">การพักลงโทษนักโทษเด็ดขาดจะทำก่อให้เกิดปัญหาความไม่เป็นปกติสุขของผู้เสียหายหรือไม่</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="3">เกิดปัญหา</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="3">ไม่เกิดปัญหา</td>
                              <td colspan="2">เนื่องจาก</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                            </tr>
                        <!-- //หน้า5 -->
                        <tr>
                              <td style="height: 5px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td colspan="3"></td>
                              <td colspan="2"></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td colspan="12">ข้าพเจ้าขอรับรองรองว่า เป็นความจริงทุกประการ จึงลงลายมือชื่อไว้เป็นพยานหลักฐาน</td>
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
                              <td style="width: 4%;"></td>
                              <td style="width: 4%;"></td>
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
                              <td colspan="4"></td>
                              <td colspan="2">ลงชื่อ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                              <td colspan="3">ผู้อุปการะ</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="5"></td>
                              <td>(</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                              <td>)</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4"></td>
                              <td colspan="2">วันที่</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4"></td>
                              <td colspan="2">ลงชื่อ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                              <td colspan="4">พนักงานคุมประพฤติ/อ.ส.ค.</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="5"></td>
                              <td>(</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                              <td>)</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4"></td>
                              <td colspan="2">วันที่</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold; height: 5px; text-decoration: underline;" colspan="3">คำเตือน</td>
                              <td colspan="13">การพักโทษหรือลดวันต้องโทษ นักโทษหรือผู้อุปการะไม่ต้องเสียค่าใช้จ่ายหรือค่าธรรมเนียมใดๆ</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td colspan="13">แต่หากมีผู้ใดเรียกหรือรับทรัพย์สินหรือยินยอมที่จะรับประโยชน์อื่นใด ในการดำเนินการดังกล่าว</td>
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
                              <td style="width: 4%;"></td>
                              <td style="width: 4%;"></td>
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
                              <td colspan="3"></td>
                              <td style="font-weight: bold; height: 5px; text-decoration: underline;" colspan="2">โปรดแจ้ง</td>
                              <td colspan="6"> ผู้อำนวยการสำนักงานคุมประพฤติ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td>โทรศัพท์</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="7"></td>
                              <td colspan="6"> หรือ อธิบดีกรมคุมประพฤติกรมคุมประพฤติ</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td colspan="13">ถนนแจ้งวัฒนะ เขตหลักสี่ กรุงเทพมหานคร ๑๐๑๒๐ โทรศัพท์ ๐๒ – ๑๔๑๔๙๐๒</td>
                            </tr>

                        <!-- //หน้า6 -->
                        <tr>
                              <td style="height: 5px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td colspan="3"></td>
                              <td colspan="3"></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold; height: 5px; text-decoration: underline;" colspan="16">ตอนที่ ๒ ความเห็นของผู้นำชุมชน</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
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
                              <td style="width: 4%;"></td>
                              <td style="width: 4%;"></td>
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
                              <td colspan="4">ผู้ให้ถ้อยคำชื่อ-ชื่อสกุล</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                              <td colspan="4">เกี่ยวข้องกับนักโทษเป็น</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                            </tr>

                        <tr>
                              <td colspan="4">พักอาศัยอยู่บ้านเลขที่</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                              <td>หมู่ที่</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                              <td>ซอย</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                              <td>ถนน</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="4"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
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
                              <td style="width: 4%;"></td>
                              <td style="width: 4%;"></td>
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
                              <td colspan="3">ตำบล/แขวง</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                              <td colspan="3">อำเภอ/เขต</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                              <td colspan="2">จังหวัด</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3">โทรศัพท์</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="7"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold; height: 5px;" colspan="16">มีความเห็นว่า</td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="9">ควรปล่อยนักโทษรายนี้และคุมประพฤติไว้ เนื่องจาก</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="5">ไม่สมควรปล่อยเนื่องจาก</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="10"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
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
                              <td style="width: 4%;"></td>
                              <td style="width: 4%;"></td>
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
                              <td colspan="4">หากปล่อยตัวนักโทษรายนี้</td>
                              <td style="font-weight: bold;" colspan="12">แนวโน้มของความปลอดภัยทางสังคม</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td>สูง</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="2">ปานกลาง</td>
                              <td><input type="checkbox" /></td>
                              <td>ต่ำ</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="3">ไม่มีความปลอดภัย</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="2">ผู้ให้ถ้อยคำ</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="3">ไม่รู้จักผู้อุปการะ</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="3">รู้จักผู้อุปการะ</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="7">มีความเห็นต่อ นาย / นาง / นางสาว</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="7"></td>
                              <td colspan="2">ผู้อุปการะว่า</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="4">มีนิสัยความประพฤติ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="7">สามารถให้ความอุปการะนักโทษได้ เนื่องจาก</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="8"></td>
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
                              <td style="width: 4%;"></td>
                              <td style="width: 4%;"></td>
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
                              <td><input type="checkbox" /></td>
                              <td colspan="8">ไม่สามารถให้ความอุปการะนักโทษได้เนื่องจาก</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="7"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="3">อื่นๆ (ระบุ)</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="12"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td colspan="13">ข้าพเจ้าขอรับรองรองว่า เป็นความจริงทุกประการ จึงลงลายมือชื่อไว้เป็นพยานหลักฐาน</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4"></td>
                              <td colspan="2">ลงชื่อ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                              <td colspan="4">ผู้นำชุมชน</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="5"></td>
                              <td>(</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                              <td>)</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4"></td>
                              <td colspan="2">วันที่</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                            </tr>

                        <!-- //หน้า7 -->
                        <tr>
                              <td style="height: 5px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td colspan="3"></td>
                              <td colspan="3"></td>
                              <td></td>
                              <td></td>
                              <td></td>
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
                              <td style="width: 4%;"></td>
                              <td style="width: 4%;"></td>
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
                              <td colspan="4"></td>
                              <td colspan="2">ลงชื่อ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                              <td colspan="4">พนักงานคุมประพฤติ/อ.ส.ค.</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="5"></td>
                              <td>(</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                              <td>)</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4"></td>
                              <td colspan="2">วันที่</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold; height: 5px; text-decoration: underline;" colspan="3">คำเตือน</td>
                              <td colspan="13">การพักโทษหรือลดวันต้องโทษ นักโทษหรือผู้อุปการะไม่ต้องเสียค่าใช้จ่ายหรือค่าธรรมเนียมใดๆ</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td colspan="13">แต่หากมีผู้ใดเรียกหรือรับทรัพย์สินหรือยินยอมที่จะรับประโยชน์อื่นใด ในการดำเนินการดังกล่าว</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td style="font-weight: bold; height: 5px; text-decoration: underline;" colspan="2">โปรดแจ้ง</td>
                              <td colspan="6"> ผู้อำนวยการสำนักงานคุมประพฤติ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td>โทรศัพท์</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="7"></td>
                              <td colspan="6"> หรือ อธิบดีกรมคุมประพฤติกรมคุมประพฤติ</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td colspan="13">ถนนแจ้งวัฒนะ เขตหลักสี่ กรุงเทพมหานคร ๑๐๑๒๐ โทรศัพท์ ๐๒ – ๑๔๑๔๙๐๒</td>
                            </tr>

                        <!-- //หน้า8 -->
                        <tr>
                              <td style="height: 5px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td colspan="3"></td>
                              <td colspan="3"></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold; height: 5px; text-decoration: underline;" colspan="16">ตอนที่ ๓ ความเห็นของเพื่อนบ้าน</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4">ผู้ให้ถ้อยคำชื่อ-ชื่อสกุล</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                              <td colspan="4">เกี่ยวข้องกับนักโทษเป็น</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
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
                              <td style="width: 4%;"></td>
                              <td style="width: 4%;"></td>
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
                              <td colspan="4">พักอาศัยอยู่บ้านเลขที่</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                              <td>หมู่ที่</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                              <td>ซอย</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                              <td>ถนน</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="4"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3">ตำบล/แขวง</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                              <td colspan="3">อำเภอ/เขต</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                              <td colspan="2">จังหวัด</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3">โทรศัพท์</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="7"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold; height: 5px;" colspan="16">มีความเห็นว่า</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
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
                              <td style="width: 4%;"></td>
                              <td style="width: 4%;"></td>
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
                              <td><input type="checkbox" /></td>
                              <td colspan="9">ควรปล่อยนักโทษรายนี้และคุมประพฤติไว้ เนื่องจาก</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="5">ไม่สมควรปล่อยเนื่องจาก</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="10"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4">หากปล่อยตัวนักโทษรายนี้</td>
                              <td style="font-weight: bold;" colspan="12">แนวโน้มของความปลอดภัยทางสังคม</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td>สูง</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="2">ปานกลาง</td>
                              <td><input type="checkbox" /></td>
                              <td>ต่ำ</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="3">ไม่มีความปลอดภัย</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="2">ผู้ให้ถ้อยคำ</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="3">ไม่รู้จักผู้อุปการะ</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="3">รู้จักผู้อุปการะ</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="7">มีความเห็นต่อ นาย / นาง / นางสาว</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="7"></td>
                              <td colspan="2">ผู้อุปการะว่า</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="4">มีนิสัยความประพฤติ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="7">สามารถให้ความอุปการะนักโทษได้ เนื่องจาก</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="8"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="8">ไม่สามารถให้ความอุปการะนักโทษได้เนื่องจาก</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="7"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="3">อื่นๆ (ระบุ)</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="12"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td colspan="13">ข้าพเจ้าขอรับรองรองว่า เป็นความจริงทุกประการ จึงลงลายมือชื่อไว้เป็นพยานหลักฐาน</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4"></td>
                              <td colspan="2">ลงชื่อ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                              <td colspan="4">เพื่อนบ้าน</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="5"></td>
                              <td>(</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                              <td>)</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4"></td>
                              <td colspan="2">วันที่</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                            </tr>
                        <!-- // หน้า9 -->
                        <tr>
                              <td style="height: 5px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td colspan="3"></td>
                              <td colspan="3"></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4"></td>
                              <td colspan="2">ลงชื่อ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                              <td colspan="4">พนักงานคุมประพฤติ/อ.ส.ค.</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="5"></td>
                              <td>(</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                              <td>)</td>
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
                              <td style="width: 4%;"></td>
                              <td style="width: 4%;"></td>
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
                              <td colspan="4"></td>
                              <td colspan="2">วันที่</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold; height: 5px; text-decoration: underline;" colspan="3">คำเตือน</td>
                              <td colspan="13">การพักโทษหรือลดวันต้องโทษ นักโทษหรือผู้อุปการะไม่ต้องเสียค่าใช้จ่ายหรือค่าธรรมเนียมใดๆ</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td colspan="13">แต่หากมีผู้ใดเรียกหรือรับทรัพย์สินหรือยินยอมที่จะรับประโยชน์อื่นใด ในการดำเนินการดังกล่าว</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td style="font-weight: bold; height: 5px; text-decoration: underline;" colspan="2">โปรดแจ้ง</td>
                              <td colspan="6"> ผู้อำนวยการสำนักงานคุมประพฤติ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td>โทรศัพท์</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="7"></td>
                              <td colspan="6"> หรือ อธิบดีกรมคุมประพฤติกรมคุมประพฤติ</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td colspan="13">ถนนแจ้งวัฒนะ เขตหลักสี่ กรุงเทพมหานคร ๑๐๑๒๐ โทรศัพท์ ๐๒ – ๑๔๑๔๙๐๒</td>
                            </tr>



                        <tr>
                              <td style="height: 5px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td colspan="3"></td>
                              <td colspan="3"></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>

                            </tr>
                        <tr>
                              <td style="font-weight: bold; height: 5px; text-decoration: underline;" colspan="16">ตอนที่ ๔ ความเห็นของผู้เสียหาย</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4">ผู้ให้ถ้อยคำชื่อ-ชื่อสกุล</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                              <td colspan="4">เกี่ยวข้องกับนักโทษเป็น</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4">พักอาศัยอยู่บ้านเลขที่</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                              <td>หมู่ที่</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                              <td>ซอย</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                              <td>ถนน</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="4"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3">ตำบล/แขวง</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                              <td colspan="3">อำเภอ/เขต</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                              <td colspan="2">จังหวัด</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3">โทรศัพท์</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="7"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold; height: 5px;" colspan="16">มีความเห็นว่า</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="9">ควรปล่อยนักโทษรายนี้และคุมประพฤติไว้ เนื่องจาก</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="5">ไม่สมควรปล่อยเนื่องจาก</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="10"></td>
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
                              <td style="width: 4%;"></td>
                              <td style="width: 4%;"></td>
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
                              <td colspan="4">หากปล่อยตัวนักโทษรายนี้</td>
                              <td style="font-weight: bold;" colspan="12">แนวโน้มของความปลอดภัยทางสังคม</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td>สูง</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="2">ปานกลาง</td>
                              <td><input type="checkbox" /></td>
                              <td>ต่ำ</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="3">ไม่มีความปลอดภัย</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="2">ผู้ให้ถ้อยคำ</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="3">ไม่รู้จักผู้อุปการะ</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="3">รู้จักผู้อุปการะ</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="7">มีความเห็นต่อ นาย / นาง / นางสาว</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="7"></td>
                              <td colspan="2">ผู้อุปการะว่า</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="4">มีนิสัยความประพฤติ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="7">สามารถให้ความอุปการะนักโทษได้ เนื่องจาก</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="8"></td>
                            </tr>
                            ${model.wartermarks}
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="8">ไม่สามารถให้ความอุปการะนักโทษได้เนื่องจาก</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="7"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="3">อื่นๆ (ระบุ)</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="12"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td colspan="13">ข้าพเจ้าขอรับรองรองว่า เป็นความจริงทุกประการ จึงลงลายมือชื่อไว้เป็นพยานหลักฐาน</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4"></td>
                              <td colspan="2">ลงชื่อ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                              <td colspan="4">ผูู้เสียหาย/คู่คดี</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="5"></td>
                              <td>(</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                              <td>)</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4"></td>
                              <td colspan="2">วันที่</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                            </tr>
                        <!-- // หน้า11 -->
                        <tr>
                              <td style="height: 5px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td colspan="3"></td>
                              <td colspan="3"></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>

                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4"></td>
                              <td colspan="2">ลงชื่อ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                              <td colspan="4">พนักงานคุมประพฤติ/อ.ส.ค.</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="5"></td>
                              <td>(</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                              <td>)</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4"></td>
                              <td colspan="2">วันที่</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold; height: 5px; text-decoration: underline;" colspan="3">คำเตือน</td>
                              <td colspan="13">การพักโทษหรือลดวันต้องโทษ นักโทษหรือผู้อุปการะไม่ต้องเสียค่าใช้จ่ายหรือค่าธรรมเนียมใดๆ</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td colspan="13">แต่หากมีผู้ใดเรียกหรือรับทรัพย์สินหรือยินยอมที่จะรับประโยชน์อื่นใด ในการดำเนินการดังกล่าว</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td style="font-weight: bold; height: 5px; text-decoration: underline;" colspan="2">โปรดแจ้ง</td>
                              <td colspan="6"> ผู้อำนวยการสำนักงานคุมประพฤติ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
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
                              <td style="width: 4%;"></td>
                              <td style="width: 4%;"></td>
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
                              <td colspan="3"></td>
                              <td>โทรศัพท์</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="7"></td>
                              <td colspan="6"> หรือ อธิบดีกรมคุมประพฤติกรมคุมประพฤติ</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td colspan="13">ถนนแจ้งวัฒนะ เขตหลักสี่ กรุงเทพมหานคร ๑๐๑๒๐ โทรศัพท์ ๐๒ – ๑๔๑๔๙๐๒</td>
                            </tr>

                        <!-- //หน้า12 -->
                        <tr>
                              <td style="height: 5px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td colspan="3"></td>
                              <td colspan="3"></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold; height: 5px; text-decoration: underline;" colspan="16">ตอนที่ ๔ ความเห็นของคู่คดี</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4">ผู้ให้ถ้อยคำชื่อ-ชื่อสกุล</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                              <td colspan="4">เกี่ยวข้องกับนักโทษเป็น</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4">พักอาศัยอยู่บ้านเลขที่</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                              <td>หมู่ที่</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                              <td>ซอย</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                              <td>ถนน</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="4"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3">ตำบล/แขวง</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                              <td colspan="3">อำเภอ/เขต</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                              <td colspan="2">จังหวัด</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3">โทรศัพท์</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="7"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold; height: 5px;" colspan="16">มีความเห็นว่า</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="9">ควรปล่อยนักโทษรายนี้และคุมประพฤติไว้ เนื่องจาก</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
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
                              <td style="width: 4%;"></td>
                              <td style="width: 4%;"></td>
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
                              <td><input type="checkbox" /></td>
                              <td colspan="5">ไม่สมควรปล่อยเนื่องจาก</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="10"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4">หากปล่อยตัวนักโทษรายนี้</td>
                              <td style="font-weight: bold;" colspan="12">แนวโน้มของความปลอดภัยทางสังคม</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td>สูง</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="2">ปานกลาง</td>
                              <td><input type="checkbox" /></td>
                              <td>ต่ำ</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="3">ไม่มีความปลอดภัย</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="2">ผู้ให้ถ้อยคำ</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="3">ไม่รู้จักผู้อุปการะ</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="3">รู้จักผู้อุปการะ</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="7">มีความเห็นต่อ นาย / นาง / นางสาว</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="7"></td>
                              <td colspan="2">ผู้อุปการะว่า</td>
                            </tr>
                            ${model.wartermarks}
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="4">มีนิสัยความประพฤติ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="7">สามารถให้ความอุปการะนักโทษได้ เนื่องจาก</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="8"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="8">ไม่สามารถให้ความอุปการะนักโทษได้เนื่องจาก</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="7"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td><input type="checkbox" /></td>
                              <td colspan="3">อื่นๆ (ระบุ)</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="12"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td colspan="13">ข้าพเจ้าขอรับรองรองว่า เป็นความจริงทุกประการ จึงลงลายมือชื่อไว้เป็นพยานหลักฐาน</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4"></td>
                              <td colspan="2">ลงชื่อ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                              <td colspan="4">ผูู้เสียหาย/คู่คดี</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="5"></td>
                              <td>(</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                              <td>)</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4"></td>
                              <td colspan="2">วันที่</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                            </tr>
                        <!-- // หน้า13 -->
                        <tr>
                              <td style="height: 5px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td colspan="3"></td>
                              <td colspan="3"></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4"></td>
                              <td colspan="2">ลงชื่อ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                              <td colspan="4">พนักงานคุมประพฤติ/อ.ส.ค.</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="5"></td>
                              <td>(</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                              <td>)</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="4"></td>
                              <td colspan="2">วันที่</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold; height: 5px; text-decoration: underline;" colspan="3">คำเตือน</td>
                              <td colspan="13">การพักโทษหรือลดวันต้องโทษ นักโทษหรือผู้อุปการะไม่ต้องเสียค่าใช้จ่ายหรือค่าธรรมเนียมใดๆ</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td colspan="13">แต่หากมีผู้ใดเรียกหรือรับทรัพย์สินหรือยินยอมที่จะรับประโยชน์อื่นใด ในการดำเนินการดังกล่าว</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td style="font-weight: bold; height: 5px; text-decoration: underline;" colspan="2">โปรดแจ้ง</td>
                              <td colspan="6"> ผู้อำนวยการสำนักงานคุมประพฤติ</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td>โทรศัพท์</td>
                              <td style="border-bottom: black 1px dotted; text-align:center;" colspan="7"></td>
                              <td colspan="6"> หรือ อธิบดีกรมคุมประพฤติกรมคุมประพฤติ</td>
                            </tr>
                        <tr>
                              <td style="height: 3px;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="3"></td>
                              <td colspan="13">ถนนแจ้งวัฒนะ เขตหลักสี่ กรุงเทพมหานคร ๑๐๑๒๐ โทรศัพท์ ๐๒ – ๑๔๑๔๙๐๒</td>
                            </tr>
                      </tbody>
                        </table>
                  </form>
                      ${model.wartermarks} </div>
              </div>
                </div>
          </div>
            </div>
        <div class="row">
              <div class="body">
            <div class="container-fluid">
                  <div style="margin-top:1000px;">
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
                        <td style="width: 10%;"></td>
                        <td style="width: 10%;"></td>
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
                        <td style="height: 5px; font-weight: bold;" colspan="18">ค.ป. 3</td>
                      </tr>
                          <tr>
                        <td style="font-weight: bold;" colspan="10">แบบบันทึกข้อมูลจําเลย</td>
                        <td style="font-weight: bold;" colspan="5">เลขทะเบียนสืบเสาะที่</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                        <td style="font-weight: bold;">/25</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                      </tr>
                          <tr>
                        <td colspan="10"></td>
                        <td style="font-weight: bold;" colspan="5">สำนักงานคุมประพฤติ</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                      </tr>
                        </tbody>
                  </table>
                    </form>
                <form>
                      <table style="width:100%" border="0">
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
                          <td style="width: 10%;"></td>
                          <td style="width: 10%;"></td>
                        </tr>
                    <tr>
                          <td style="font-weight: bold;" colspan="6">ให้กรอกข้อมูลและทําเครื่องหมาย/ในช่อง</td>
                          <td><input type="checkbox" /></td>
                          <td style="font-weight: bold;" colspan="9">ตามข้อเท็จจริงหรือให้พนักงานคุมประพฤติสอบถามและบันทึกข้อมูล</td>
                        </tr>
                  </table>
                    </form>
              </div>
                  <div>
                <form>
                      <table id="tablecollapse" border="1">
                    <tbody>
                          <tr>
                        <td style="font-weight: bold;" colspan="15">1.ประวัติครอบครัวและภูมิหลัง</td>
                      </tr>
                          <tr>
                        <td style="text-align:center;" colspan="5">ชื่อและชื่อสกุลจริง (นาย / นาง/ นางสาว)</td>
                        <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;" colspan="10">${model.firstName} ${model.lastName}</td>
                      </tr>
                          <tr>
                        <td style="font-weight: bold; text-align:center;" colspan="5">ชื่อเล่น / ชื่อรอง / ชื่ออื่น ๆ</td>
                        <td colspan="5" style="font-weight: bold; text-align:center;">เชื้อชาติ</td>
                        <td colspan="5" style="font-weight: bold; text-align:center;">สัญชาติ</td>
                      </tr>
                          <tr>
                        <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                        <td colspan="5" style="text-align:center;"><input type="checkbox" />
                              ไทย
                              <input type="checkbox" />
                              อื่นๆ</td>
                        <td colspan="5" style="text-align:center;"><input type="checkbox" />
                              ไทย
                              <input type="checkbox" />
                              อื่นๆ</td>
                      </tr>
                          <tr>
                        <td style="font-weight: bold; text-align:center;" colspan="4">เกิดที่จังหวัด</td>
                        <td colspan="3" style="font-weight: bold; text-align:center;">เกิด วันที่ เดือน พ.ศ.</td>
                        <td colspan="3" style="font-weight: bold; text-align:center;">อายุ</td>
                        <td colspan="5" style="font-weight: bold; text-align:center;">ศาสนา</td>
                      </tr>
                          <tr>
                        <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;" colspan="4">${model.homeProvince}</td>
                        <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;" colspan="3">${model.dateOfBirth}</td>
                        <td class="colorfont" style="border-bottom: black 1px dotted; text-align:center;" colspan="3">${model.age} ปี</td>
                        <td colspan="5" style="text-align:center;"><input type="checkbox" name="checkbox" id="checkbox">
                              <label for="checkbox">พุทธ
                            <input type="checkbox" name="checkbox2" id="checkbox2">
                            อิสลาม
                            <input type="checkbox" name="checkbox3" id="checkbox3">
                            คริสต์
                            <input type="checkbox" name="checkbox4" id="checkbox4">
                            อื่นๆ</label>${model.religion}</td>
                      </tr>
                        </tbody>
                  </table>
                    </form>

                <!-- //เปิดform 2 -->

                <form>
                      <table id="tablecollapse">
                    <tbody>
                          <tr>
                        <td colspan="8" style="font-weight: bold;">ที่อยู่ปัจจุบัน</td>
                        <td width="50%" style="font-weight: bold;">ที่อยู่ตามทะเบียนบ้าน</td>
                      </tr>
                          <tr>
                        <td colspan="8" style="font-weight: bold;">&nbsp;</td>
                        <td ><input type="checkbox" name="checkbox5" id="checkbox5">
                              <label for="checkbox5">เช่นเดียวกับ ที่อยู่ปัจจุบัน(ไม่ต้องเขียนรายละเอียด)</label></td>
                      </tr>
                          <tr>
                        <td colspan="8">&nbsp;</td>
                        <td ><input type="checkbox" name="checkbox6" id="checkbox6">
                              <label for="checkbox6">ต่างจากที่อยู่ปัจจุบัน ดังนี้</label></td>
                      </tr>
                          <tr>
                        <td colspan="8">เลขที่

                              ${model.homeNumber}
                              หมู่ที่
                              ${model.homeMoo} </td>
                        <td>เลขที่

                              ${model.homeNumber}
                              หมู่ที่
                              ${model.homeMoo}
                              <div></div>
                              <div>
                            <div></div>
                          </div></td>
                      </tr>
                          <tr>
                        <td colspan="8" >บ้าน/ตรอก/ซอย ${model.homeTrock} ${model.homeSoy}</td>
                        <td><div>
                            <div>บ้าน/ตรอก/ซอย ${model.homeTrock} ${model.homeSoy}</div>
                          </div>
                              <div>
                            <div></div>
                          </div></td>
                      </tr>
                          <tr>
                        <td colspan="8">ถนน
                              ${model.homeRoad} </td>
                        <td ><div>
                            <div>ถนน
                              ${model.homeRoad}
                              <div>
                                <div></div>
                              </div>
                            </div>
                          </div></td>
                      </tr>
                          <tr>
                        <td colspan="8" >ตำบล/แขวง
                              ${model.homeTumbon} </td>
                        <td ><div>
                            <div>ตำบล/แขวง
                              ${model.homeTumbon}
                              <div>
                                <div></div>
                              </div>
                            </div>
                          </div></td>
                      </tr>
                          <tr>
                        <td colspan="8">อำเภอ/เขต
                              ${model.homeAmphur} </td>
                        <td><div>
                            <div>อำเภอ/เขต
                              ${model.homeAmphur}
                              <div>
                                <div></div>
                              </div>
                            </div>
                          </div></td>
                      </tr>
                          <tr>
                        <td colspan="8">จังหวัด
                              ${model.homeProvince} </td>
                        <td><div>
                            <div>จังหวัด
                              ${model.homeProvince}
                              <div>
                                <div></div>
                              </div>
                            </div>
                          </div></td>
                      </tr>
                          <tr>
                        <td colspan="8">รหัสไปรษณีย์ โทร</td>
                        <td><div>
                            <div>รหัสไปรษณีย์ โทร</div>
                          </div>
                              <div>
                            <div></div>
                          </div></td>
                      </tr>
                          <tr>
                        <td colspan="8"><input type="checkbox" name="checkbox10" id="checkbox10">
                              <label for="checkbox10">บ้านตนเอง
                            <input type="checkbox" name="checkbox10" id="checkbox11">
                            บ้านบิดามารดา
                            <input type="checkbox" name="checkbox10" id="checkbox12">
                            บ้านญาติ</label></td>
                        <td><input type="checkbox" name="checkbox7" id="checkbox7">
                              <label for="checkbox7">บ้านตนเอง
                            <input type="checkbox" name="checkbox8" id="checkbox8">
                            บ้านบิดามารดา
                            <input type="checkbox" name="checkbox9" id="checkbox9">
                            บ้านญาติ</label></td>
                      </tr>
                          <tr>
                        <td colspan="8"><input type="checkbox" name="checkbox11" id="checkbox16">
                              <label for="checkbox16">บ้านเพื่อน</label>
                              <input type="checkbox" name="checkbox11" id="checkbox17">
                              <label for="checkbox17">บ้านคนรู้จัก</label>
                              <input type="checkbox" name="checkbox11" id="checkbox18">
                              <label for="checkbox18">บ้านเช่า</label></td>
                        <td><input type="checkbox" name="checkbox13" id="checkbox13">
                              <label for="checkbox13">บ้านเพื่อน</label>
                              <input type="checkbox" name="checkbox14" id="checkbox14">
                              <label for="checkbox14">บ้านคนรู้จัก</label>
                              <input type="checkbox" name="checkbox15" id="checkbox15">
                              <label for="checkbox15">บ้านเช่า</label></td>
                      </tr>
                          <tr>
                        <td colspan="8">เจ้าของบ้านชื่อ</td>
                        <td >เจ้าของบ้านชื่อ</td>
                      </tr>
                          <tr>
                        <td colspan="8" >ชื่อกำนัน/ผู้ใหญ่บ้าน</td>
                        <td >ชื่อกำนัน/ผู้ใหญ่บ้าน</td>
                      </tr>
                          <tr>
                        <td colspan="8" >พักอาศัยอยู่เป็นระยะเวลา ปี</td>
                        <td >พักอาศัยอยู่เป็นระยะเวลา ปี</td>
                      </tr>
                          <tr>
                        <td colspan="16">ที่อยู่อื่นที่ติดต่อได้/รายละเอียดเพิ่มเติม</td>
                      </tr>
                          <tr>
                        <td class="colorfont" style="border-bottom: black 1px dotted;" colspan="16">..........................................................
                        ............................................................</td>
                      </tr>
                        </tbody>
                  </table>
                    </form>
                ${model.wartermarks}

                <!-- //ปิด form2 -->

                <!-- //ลงชื่อหน้า1 -->
                <form>
                      <table style="width:100%" border="0">
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
                          <td style="width: 10%;"></td>
                          <td style="width: 10%;"></td>
                        </tr>
                    <tr>
                          <td style="height: 20px;" colspan="11"></td>
                        </tr>
                    <tr>
                          <td colspan="9"></td>
                          <td colspan="2">( ลงชื่อ )</td>
                          <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                          <td>จำเลย</td>
                        </tr>
                    <tr>
                          <td style="height: 30px;" colspan="11"></td>
                        </tr>
                    <tr>
                          <td colspan="3"></td>
                          <td colspan="3"></td>
                          <td colspan="3"></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                    <tr>
                          <td style="height: 60px;" colspan="11"></td>
                        </tr>
                  </table>
                    </form>
                <!-- //ปิดลงชื่อหน้า1 -->

                <!-- //เปิดหน้า2 -->

                <form style="border:1px solid black;">
                      <table style="width: 100%;">
                    <tbody style="margin-bottom:5px;">
                          <tr>
                        <td style="width: 1%;"></td>
                        <td style="width: 3%;"></td>
                        <td style="width: 5%;"></td>
                        <td style="width: 5%;"></td>
                        <td style="width: 5%;"></td>
                        <td style="width: 5%;"></td>
                        <td style="width: 5%;"></td>
                        <td style="width: 2%;"></td>
                        <td style="width: 5%;"></td>
                      </tr>
                          <tr>
                        <td style="font-weight: bold; border-bottom:1px solid black;" colspan="15">ครอบครัวและผู้ใกล้ชิด</td>
                      </tr>
                          <tr> ${model.wartermarks}
                        <td style="font-weight: bold;">บิดา</td>
                        <td colspan="2">ชื่อ-ชื่อสกุล</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                      </tr>
                          <tr>
                        <td><input type="checkbox" /></td>
                        <td colspan="2">เสียชีวิตไปแล้ว</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                        <td>ปี
                            <td>
                        <td>เนื่องจาก</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="4"></td>
                      </tr>
                          <tr>
                        <td><input type="checkbox" /></td>
                        <td colspan="3">ยังมีชีวิตอยู่ ปัจจุบันอายุ</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                        <td>ปี
                            <td>
                      </tr>
                          <tr>
                        <td colspan="3">บิดาประกอบอาชีพ</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                        <td>รายได้</td>
                        <td>วัน/เดือน/ปีละ</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                        <td>บาท</td>
                      </tr>
                          <tr>
                        <td>ที่อยู่</td>
                        <td style="border-bottom: black 1px dotted;" colspan="6"></td>
                        <td>โทร</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                      </tr>
                          <tr>
                        <td colspan="2">สถานที่ทำงาน</td>
                        <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                        <td>โทร</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                      </tr>
                          <tr>
                        <td style="font-weight: bold;">มารดา</td>
                        <td colspan="2">ชื่อ-ชื่อสกุล</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                      </tr>
                          <tr>
                        <td><input type="checkbox" /></td>
                        <td colspan="2">เสียชีวิตไปแล้ว</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                        <td>ปี</td>
                        <td>เนื่องจาก</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="4"></td>
                      </tr>
                          <tr>
                        <td><input type="checkbox" /></td>
                        <td colspan="3">ยังมีชีวิตอยู่ ปัจจุบันอายุ</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                        <td>ปี</td>
                      </tr>
                          <tr>
                        <td colspan="3">มารดาประกอบอาชีพ</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                        <td>รายได้</td>
                        <td>วัน/เดือน/ปีละ</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                        <td>บาท</td>
                      </tr>
                          <tr>
                        <td>ที่อยู่</td>
                        <td style="border-bottom: black 1px dotted;" colspan="6"></td>
                        <td>โทร</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                      </tr>
                          <tr>
                        <td colspan="2">สถานที่ทำงาน</td>
                        <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                        <td>โทร</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                      </tr>
                          <tr>
                        <td></td>
                        <td colspan="3">ความสัมพันธ์กับบิดามารดา</td>
                        <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                      </tr>
                          <tr>
                        <td style="height: 20px;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="border-bottom: black 1px dotted;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="height: 20px;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="border-bottom: black 1px dotted;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="height: 20px;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="border-bottom: black 1px dotted;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="height: 20px;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="border-bottom: black 1px dotted;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="height: 20px;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="border-bottom: black 1px dotted;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td></td>
                        <td colspan="3">ความสัมพันธ์ระหว่างบิดากับมารดา</td>
                        <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                      </tr>
                          <tr>
                        <td style="height: 20px;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="border-bottom: black 1px dotted;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="height: 20px;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="border-bottom: black 1px dotted;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="height: 20px;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="border-bottom: black 1px dotted;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="height: 20px;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="border-bottom: black 1px dotted;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="height: 20px;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="border-bottom: black 1px dotted;" colspan="9"></td>
                      </tr>
                        </tbody>
                  </table>
                    </form>
                </form>

                <!-- //ปิดหน้า2 -->
                <!-- //ลงชื่อหน้า2 -->
                <form>
                      <table style="width:100%" border="0">
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
                          <td style="width: 10%;"></td>
                          <td style="width: 10%;"></td>
                        </tr>
                    <tr>
                          <td style="height: 20px;" colspan="11"></td>
                        </tr>
                    <tr>
                          <td colspan="10"></td>
                          <td colspan="2">( ลงชื่อ )</td>
                          <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                          <td>จำเลย</td>
                        </tr>
                    <tr>
                          <td style="height: 30px;" colspan="11"></td>
                        </tr>
                    <tr>
                          <td colspan="3"></td>
                          <td colspan="3"></td>
                          <td colspan="3"></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                    <tr>
                          <td style="height: 90px;" colspan="11"></td>
                        </tr>
                  </table>
                    </form>
                <!-- //ปิดลงชื่อหน้า2 -->
                ${model.wartermarks}
                <!-- //เปิดหน้า3 -->
                <div style="margin-top:30px;"></div>
                <form style="border:1px solid black;">
                <form>
                      <table style="width: 100%;">
                    <tbody style="margin-bottom:5px;">
                          <tr>
                        <td style="width: 1%;"></td>
                        <td style="width: 3%;"></td>
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
                        <td style="width: 2%;"></td>
                        <td style="width: 5%;"></td>
                      </tr>
                          <tr>
                        <td colspan="2">พี่น้อง</td>
                        <td style="font-weight: bold; height: 5px; text-decoration: underline;" colspan="4">ร่วมบิดาและมารดาเดียวกัน</td>
                        <td colspan="4">รวมทั้งตัวข้าพเจ้าด้วยจำนวน</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                        <td>คน</td>
                        <td colspan="3">ข้าพเจ้าเป็นบุตรคนที่</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                      </tr>
                          <tr>
                        <td style="font-weight: bold; height: 5px;" colspan="15">โดยมีพี่น้องที่สามารถติดต่อได้ คือ</td>
                      </tr>
                          <tr>
                        <td colspan="2">( 1 )</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                        <td colspan="3">อายุ</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                        <td>ปี</td>
                        <td>อาชีพ</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                      </tr>
                          <tr>
                        <td colspan="2">ที่อยู่</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="10"></td>
                        <td>โทร</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                      </tr>
                          <tr>
                        <td colspan="2">( 2 )</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                        <td colspan="3">อายุ</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                        <td>ปี</td>
                        <td>อาชีพ</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                      </tr>
                          <tr>
                        <td colspan="2">ที่อยู่</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="10"></td>
                        <td>โทร</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                      </tr>
                          <tr>
                        <td colspan="2">( 3 )</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                        <td colspan="3">อายุ</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                        <td>ปี</td>
                        <td>อาชีพ</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                      </tr>
                          <tr>
                        <td colspan="2">ที่อยู่</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="10"></td>
                        <td>โทร</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                      </tr>
                          <tr>
                        <td style="height: 20px;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td></td>
                        <td colspan="3">ความสัมพันธ์กับพี่น้อง</td>
                        <td style="border-bottom: black 1px dotted;" colspan="12"></td>
                      </tr>
                          <tr>
                        <td style="height: 20px;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="border-bottom: black 1px dotted;" colspan="16"></td>
                      </tr>
                          <tr>
                        <td style="height: 20px;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="border-bottom: black 1px dotted;" colspan="16"></td>
                      </tr>
                          <tr>
                        <td style="height: 20px;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="border-bottom: black 1px dotted;" colspan="16"></td>
                      </tr>
                          <tr>
                        <td style="height: 20px;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="border-bottom: black 1px dotted;" colspan="16"></td>
                      </tr>
                          <tr>
                        <td style="height: 20px;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="border-bottom: black 1px dotted;" colspan="16"></td>
                      </tr>
                        </tbody>
                  </table>
                    </form>
                </form>
                <div style="margin-top:30px;"></div>
                <form style="border:1px solid black;">
                      <table style="width: 100%;">
                    <tbody style="margin-bottom:5px;">
                          <tr>
                        <td style="font-weight: bold; border-bottom:1px solid black; " colspan="20">สถานภาพการสมรส</td>
                      </tr>
                          <tr>
                        <td colspan="2"></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="2">โสด</td>
                      </tr>
                          <tr>
                        <td colspan="2"></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="2">ม่าย</td>
                        <td></td>
                        <td>โดย</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="3">จดทะเบียนหย่า</td>
                        <td></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="2">เลิกร้าง</td>
                        <td></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="3">คู่ครองเสียชีวิต</td>
                      </tr>
                          <tr>
                        <td colspan="2"></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="3">มีครอบครัวแล้ว</td>
                        <td>โดย</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="4">จดทะเบียนสมรส</td>
                        <td></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="4">ไม่จดทะเบียนสมรส</td>
                      </tr>
                          <tr>
                        <td colspan="2"></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="7">เคยมีภรรยา/สามี มาก่อน จำนวน</td>
                        <td style="border-bottom: black 1px dotted;" colspan="2"></td>
                        <td>คน</td>
                      </tr>
                          <tr>
                        <td colspan="3"></td>
                        <td colspan="6">โดยมีบุตรกับภรรยา/สามีคนที่</td>
                        <td style="border-bottom: black 1px dotted;" colspan="2"></td>
                        <td>จำนวน</td>
                        <td style="border-bottom: black 1px dotted;" colspan="2"></td>
                        <td>คน</td>
                      </tr>
                          <tr>
                        <td colspan="3"></td>
                        <td colspan="5">บุตรอยู่ในความดูแลของ</td>
                        <td style="border-bottom: black 1px dotted;" colspan="12"></td>
                      </tr>
                          <tr>
                        <td colspan="3"></td>
                        <td colspan="6">และมีบุตรกับภรรยา/สามีคนที่</td>
                        <td style="border-bottom: black 1px dotted;" colspan="2"></td>
                        <td>จำนวน</td>
                        <td style="border-bottom: black 1px dotted;" colspan="2"></td>
                        <td>คน</td>
                      </tr>
                          <tr>
                        <td colspan="3"></td>
                        <td colspan="5">บุตรอยู่ในความดูแลของ</td>
                        <td style="border-bottom: black 1px dotted;" colspan="12"></td>
                      </tr>
                          <tr>
                        <td style="height: 20px;" colspan="20"></td>
                      </tr>
                          <tr>
                        <td style="font-weight: bold;" colspan="6">ภรรยา/สามี คนปัจจุบันชื่อ</td>
                        <td style="border-bottom: black 1px dotted;" colspan="12"></td>
                        <td>อายุ</td>
                        <td style="border-bottom: black 1px dotted;"></td
                                                      >
                        <td>ปี</td>
                      </tr>
                          <tr>
                        <td>ที่อยู่</td>
                        <td style="border-bottom: black 1px dotted;" colspan="11"></td>
                        <td>โทร</td>
                        <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                        <td>อาชีพ</td>
                        <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                      </tr>
                          <tr>
                        <td colspan="4">รายได้ วัน / เดือน / ปีละ</td>
                        <td style="border-bottom: black 1px dotted;" colspan="6"></td>
                        <td>บาท</td>
                        <td colspan="3">สถานที่ทำงาน</td>
                        <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                        <td>โทร</td>
                        <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                      </tr>
                        </tbody>
                  </table>
                    </form>
                </form>

                <!-- //ปิดหน้า3 -->

                ${model.wartermarks}

                <!-- //เปิดลงชื่อหน้า3 -->
                <form>
                      <table style="width:100%" border="0">
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
                          <td style="width: 10%;"></td>
                          <td style="width: 10%;"></td>
                        </tr>
                    <tr>
                          <td style="height: 20px;" colspan="11"></td>
                        </tr>
                    <tr>
                          <td colspan="10"></td>
                          <td colspan="2">( ลงชื่อ )</td>
                          <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                          <td>จำเลย</td>
                        </tr>

                          <td style="height: 30px;" colspan="11"></td>
                        </tr>
                    <tr>
                          <td colspan="3"></td>
                          <td colspan="3"></td>
                          <td colspan="3"></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                    <tr>
                          <td style="height: 30px;" colspan="11"></td>
                        </tr>
                  </table>
                    </form>
                <!-- //ปิดลงชื่อหน้า3 -->

                <!-- //เปิดหน้า4 -->

                <form style="border:1px solid black;">
                <form>
                      <table style="width: 100%;">
                    <tbody style="margin-bottom:5px;">
                          <tr>
                        <td style="width: 1%;"></td>
                        <td style="width: 3%;"></td>
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
                        <td style="width: 2%;"></td>
                        <td style="width: 5%;"></td>
                      </tr>
                          <tr>
                        <td colspan="7">ข้าพเจ้ามีบุตรกับสามี/ภรรยาคนปัจจุบัน</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                        <td>คน</td>
                        <td>คือ</td>
                      </tr>
                          <tr>
                        <td colspan="2">( 1 )</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                        <td colspan="3">อายุ</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                        <td>ปี
                            <td>
                        <td>อาชีพ</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                      </tr>
                          <tr>
                        <td colspan="2">ที่อยู่</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="10"></td>
                        <td>โทร</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                      </tr>
                          <tr>
                        <td colspan="2">( 2 )</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                        <td colspan="3">อายุ</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                        <td>ปี</td>
                        <td>อาชีพ</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                      </tr>
                          <tr>
                        <td colspan="2">ที่อยู่</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="10"></td>
                        <td>โทร</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                      </tr>
                          <tr>
                        <td colspan="2">( 3 )</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                        <td colspan="3">อายุ</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                        <td>ปี</td>
                        <td>อาชีพ</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                      </tr>
                          <tr>
                        <td colspan="2">ที่อยู่</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="10"></td>
                        <td>โทร</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                      </tr>
                          <tr>
                        <td colspan="2">( 4 )</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                        <td colspan="3">อายุ</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                        <td>ปี</td>
                        <td>อาชีพ</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                      </tr>
                          <tr>
                        <td colspan="2">ที่อยู่</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="10"></td>
                        <td>โทร</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                      </tr>
                          <tr>
                        <td colspan="2">( 5 )</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                        <td colspan="3">อายุ</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;"></td>
                        <td>ปี</td>
                        <td>อาชีพ</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                      </tr>
                          <tr>
                        <td colspan="2">ที่อยู่</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="10"></td>
                        <td>โทร</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                      </tr>
                          <tr>
                        <td colspan="5">ข้าพเจ้าใกล้ชิดกับบุคคลที่</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                        <td colspan="3">มากที่สุด</td>
                      </tr>
                          <tr>
                        <td colspan="5">ความสัมพันธ์ในครอบครัว</td>
                      </tr>
                          <tr>
                        <td style="height: 20px;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="border-bottom: black 1px dotted;" colspan="16"></td>
                      </tr>
                          <tr>
                        <td style="height: 20px;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="border-bottom: black 1px dotted;" colspan="16"></td>
                      </tr>
                          <tr>
                        <td style="height: 20px;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="border-bottom: black 1px dotted;" colspan="16"></td>
                      </tr>
                          <tr>
                        <td style="height: 20px;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="border-bottom: black 1px dotted;" colspan="16"></td>
                      </tr>
                          <tr>
                        <td style="height: 20px;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="border-bottom: black 1px dotted;" colspan="16"></td>
                      </tr>
                        </tbody>
                  </table>
                    </form>
                </form>
                <form style="border:1px solid black; margin-top:30px;">
                      <table id="tablecollapse">
                    <tbody>
                          <tr> ${model.wartermarks}
                        <td colspan="4" style="font-weight: bold;">บุคคลที่ข้าพเจ้าต้องอุปการะเลี้ยงดูมี</td>
                        <td colspan="4" style="font-weight: bold;"><div>
                            <div>บุคคลที่ให้ความอุปการะช่วยเหลือข้าพเจ้าในปัจจุบัน คือ</div>
                          </div></td>
                      </tr>
                          <tr>
                        <td colspan="4">คือ
                              <input type="checkbox" name="checkbox19" id="checkbox19">
                              <label for="checkbox19">บิดา</label>
                              <input type="checkbox" name="checkbox20" id="checkbox20">
                              <label for="checkbox20">มารดา</label></td>
                        <td colspan="">1. ชื่อ</td>
                        <td colspan="4" style="border-bottom: black 1px dotted;">&nbsp;</td>
                      </tr>
                          <tr>
                        <td width="2%" style="font-weight: bold;">&nbsp;</td>
                        <td colspan="2" ><input type="checkbox" name="checkbox21" id="checkbox21">
                              <label for="checkbox21">คู่สมรส</label>
                              <input type="checkbox" name="checkbox22" id="checkbox22">
                              <label for="checkbox22">บุตร</label></td>
                        <td width="15%">คน</td>
                        <td width="15%">เกี่ยวข้องเป็น</td>
                        <td colspan="3" style="border-bottom: black 1px dotted;">&nbsp;</td>
                      </tr>
                          <tr>
                        <td style="font-weight: bold;">&nbsp;</td>
                        <td colspan="2"><input type="checkbox" name="checkbox23" id="checkbox23">
                              <label for="checkbox23">บุคคลอื่นๆ</label>                          (ระบุ)</td>
                        <td style="border-bottom: black 1px dotted;">&nbsp;</td>
                        <td colspan="" >2. ชื่อ</td>
                        <td colspan="4" style="border-bottom: black 1px dotted;">&nbsp;</td>
                      </tr>
                          <tr>
                        <td colspan="4" style="border-bottom: black 1px dotted;">&nbsp;</td>
                        <td width="15%" >เกี่ยวข้องเป็น</td>
                        <td colspan="3" style="border-bottom: black 1px dotted;">&nbsp;</td>
                      </tr>
                          <tr>
                          <td colspan="4">บุคคลในครอบครัวข้าพเจ้า
                          <input type="checkbox" name="checkbox" id="checkbox">
                          <label for="checkbox">ไม่มี</label>
                          <input type="checkbox" name="checkbox2" id="checkbox2">
                          <label for="checkbox2">มี</label></td>
                        <td colspan="4">ประวัติถูกจับกุมดำเนินคดีอาญา หรือต้องโทษจำคุก คือ</td>
                      </tr>
                          <tr>
                            <td >(1)</td>
                            <td colspan="3" style="font-weight: bold;">&nbsp;</td>
                            <td colspan="">เกี่ยวข้องเป็น</td>
                            <td colspan="2" style="border-bottom: black 1px dotted;">&nbsp;</td>
                            <td width="20%" >ของข้าพเจ้า</td>
                      </tr>
                          <tr>
                            <td colspan="2">ถูกจับข้อหา</td>
                            <td style="font-weight: bold;" colspan="2">&nbsp;</td>
                            <td colspan="" >ผลคดี</td>
                            <td colspan="4" style="border-bottom: black 1px dotted;">&nbsp;</td>

                      </tr>
                          <tr>
                            <td >(2)</td>
                            <td colspan="3" style="font-weight: bold;">&nbsp;</td>
                            <td colspan="">เกี่ยวข้องเป็น</td>
                            <td style="border-bottom: black 1px dotted;" colspan="2">&nbsp;</td>
                            <td width="20%" >ของข้าพเจ้า</td>
                      </tr>
                          <tr>
                            <td colspan="2" >ถูกจับข้อหา</td>
                            <td colspan="2" style="font-weight: bold;">&nbsp;</td>
                            <td colspan="" >ผลคดี</td>
                            <td colspan="4" style="border-bottom: black 1px dotted;">&nbsp;</td>
                      </tr>
                          <tr>
                          <td colspan="4">บุคคลในครอบครัวข้าพเจ้า
                          <input type="checkbox" name="checkbox3" id="checkbox3">
                          <label for="checkbox3">ไม่มี</label>
                          <input type="checkbox" name="checkbox3" id="checkbox4">
                        <label for="checkbox4">มี</label></td>
                        <td colspan="4">ประวัติเกี่ยวข้องกับยาและสารเสพติดให้โทษ คือ</td>
                          </tr>
                          <tr>
                            <td >(1)</td>
                            <td colspan="3" >&nbsp;</td>
                            <td colspan="" >เกี่ยวข้องเป็น</td>
                            <td style="border-bottom: black 1px dotted;" colspan="2">&nbsp;</td>
                            <td >ของข้าพเจ้า</td>
                          </tr>
                          <tr>
                            <td colspan="2" >ถูกจับข้อหา</td>
                            <td colspan="2" >&nbsp;</td>
                            <td colspan="" >ผลคดี</td>
                            <td colspan="4" style="border-bottom: black 1px dotted;">&nbsp;</td>
                          </tr>
                          <tr>
                            <td >(2)</td>
                            <td colspan="3" >&nbsp;</td>
                            <td colspan="" >เกี่ยวข้องเป็น</td>
                            <td style="border-bottom: black 1px dotted;" colspan="2">&nbsp;</td>
                            <td >ของข้าพเจ้า</td>
                          </tr>
                          <tr>
                            <td colspan="2" >ถูกจับข้อหา</td>
                            <td colspan="2" >&nbsp;</td>
                            <td colspan="" >ผลคดี</td>
                            <td colspan="4" style="border-bottom: black 1px dotted;">&nbsp;</td>
                          </tr>

                        </tbody>
                  </table>
                    </form>


                <!-- //ปิดหน้า4 -->

                ${model.wartermarks}

                <!-- //เปิดลงชื่อหน้า4 -->
                <form>
                      <table style="width:100%" border="0">
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
                          <td style="width: 10%;"></td>
                          <td style="width: 10%;"></td>
                        </tr>
                    <tr>
                          <td style="height: 20px;" colspan="11"></td>
                        </tr>
                    <tr>
                          <td colspan="10"></td>
                          <td colspan="2">( ลงชื่อ )</td>
                          <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                          <td>จำเลย</td>
                        </tr>

                          <td style="height: 30px;" colspan="11"></td>
                        </tr>
                    <tr>
                          <td colspan="3"></td>
                          <td colspan="3"></td>
                          <td colspan="3"></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                    <tr>
                          <td style="height: 30px;" colspan="11"></td>
                        </tr>
                  </table>
                    </form>
                <!-- //ปิดลงชื่อหน้า4 -->

                <!-- //เปิดหน้า5 -->
                <form style="border:1px solid black;">
                <form>
                      <table style="width: 100%;">
                    <tbody style="margin-bottom:5px;">
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
                      </tr>
                          <tr>
                        <td colspan="16">ชื่อและที่อยู่ที่สามารถติดต่อได้ของบุคคลที่ข้าพเจ้ารู้จักคุ้นเคยใกล้ชิด (เช่น ญาติ เพื่อน
                              เพื่อนบ้าน เพื่อนร่วมงาน ผู้นำชุมชน ผู้นำทางศาสนา ครู ฯลฯ)</td>
                      </tr>
                          <tr>
                        <td colspan="3">( 1 ) ชื่อ-ชื่อสกุล</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                        <td colspan="3">เกี่ยวข้องเป็น</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                      </tr>
                          <tr>
                        <td colspan="2">รู้จักมานาน</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="10"></td>
                        <td>ปี</td>
                        <td>อาชีพ</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                      </tr>
                          <tr>
                        <td colspan="2">ที่อยู่</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="10"></td>
                        <td>โทร</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                      </tr>
                          <tr>
                        <td colspan="3">( 2 ) ชื่อ-ชื่อสกุล</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                        <td colspan="3">เกี่ยวข้องเป็น</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="5"></td>
                      </tr>
                          <tr>
                        <td colspan="2">รู้จักมานาน</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="10"></td>
                        <td>ปี</td>
                        <td>อาชีพ</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="2"></td>
                      </tr>
                          <tr>
                        <td colspan="2">ที่อยู่</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="10"></td>
                        <td>โทร</td>
                        <td style="border-bottom: black 1px dotted; text-align:center;" colspan="3"></td>
                      </tr>
                        </tbody>
                  </table>
                    </form>
                </form>
                <div style="margin-top:30px;"></div>
                <form style="border:1px solid black;">
                      <table width="100%" border="0">
                    <tr>
                          <td colspan="2"><strong>การศึกษา</strong></td>
                        </tr>
                    <tr>
                          <td width="50%"><input type="checkbox" name="checkbox" id="checkbox">
                        <label for="checkbox">ไม่เคยเข้าเรียนในสถานศึกษาใด</label></td>
                          <td width="50%"><input type="checkbox" name="checkbox4" id="checkbox4">
                        <label for="checkbox4">ยังศึกษาอยู่ชั้น</label></td>
                        </tr>
                    <tr>
                          <td><input type="checkbox" name="checkbox2" id="checkbox2">
                        <label for="checkbox2">จบการศึกษาชั้น</label></td>
                          <td>ชื่อสถานศึกษา...........................................</td>
                        </tr>
                    <tr>
                          <td><input type="checkbox" name="checkbox3" id="checkbox3">
                        <label for="checkbox3">เมื่อ พ.ศ........................................อายุ................ปี</label></td>
                          <td>อำเภอ........................................................</td>
                        </tr>
                    <tr>
                          <td>ชื่อสถานศึกษา...............................................................</td>
                          <td>จังหวัด.......................................................</td>
                        </tr>
                    <tr>
                          <td>อำเภอ........................................จังหวัด.......................................</td>
                          <td>ชื่ออาจารย์ที่ปรึกษา..................................</td>
                        </tr>
                    <tr>
                          <td colspan="2">รายละเอียดเพิ่มเติม............................................................................................................................................................................................</td>
                        </tr>
                    <tr>
                          <td colspan="2">............................................................................................................................................................................................................................</td>
                        </tr>
                    <tr>
                          <td colspan="2">............................................................................................................................................................................................................................</td>
                        </tr>
                    <tr>
                          <td colspan="2">............................................................................................................................................................................................................................</td>
                        </tr>
                    <tr>
                          <td colspan="2">............................................................................................................................................................................................................................</td>
                        </tr>
                  </table>
                    </form>


                <form style="border:1px solid black;">
                      <table id="tablecollapse">
                    <tbody>
                          <tr>
                        <td style="font-weight: bold; border-bottom:1px solid black;" colspan="5">การประกอบอาชีพ</td>
                      </tr>
                      <tr>
                        <td style="font-weight: bold; border-bottom:1px solid black;" colspan="5">ข้าพเจ้าเคยประกอบอาชีพดังนี้</td>
                      </tr>
                      <tr>
                          <td>ปี พ.ศ.</td>
                          <td>ลักษณะงาน/สถานที่ทำงาน</td>
                          <td>ตำแหน่ง</td>
                          <td>รายได้ต่อวัน/เดือน/ปี</td>
                          <td>เหตุที่ออกจากงาน/เลิกอาชีพ</td>
                        </tr>
                    <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        </tbody>
                  </table>
                    </form>

                ${model.wartermarks}


                <!-- //ปิดหน้า5 -->

                <!-- //เปิดลงชื่อหน้า5 -->
                <form>
                      <table style="width:100%" border="0">
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
                          <td style="width: 10%;"></td>
                          <td style="width: 10%;"></td>
                        </tr>
                    <tr>
                          <td style="height: 20px;" colspan="11"></td>
                        </tr>
                    <tr>
                          <td colspan="10"></td>
                          <td colspan="2">( ลงชื่อ )</td>
                          <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                          <td>จำเลย</td>
                        </tr>

                          <td style="height: 30px;" colspan="11"></td>
                        </tr>
                    <tr>
                          <td colspan="3"></td>
                          <td colspan="3"></td>
                          <td colspan="3"></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                    <tr>
                          <td style="height: 30px;" colspan="11"></td>
                        </tr>
                  </table>
                    </form>
                <!-- //ปิดลงชื่อหน้า5 -->

                <!-- //เปิดหน้า6 -->
                <form style="border:1px solid black;">
                <form>
                      <table style="width: 100%;">
                    <tbody style="margin-bottom:5px;">
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
                        <td></td>
                        <td colspan="5">รายละเอียดเพิ่มเติม</td>
                      </tr>
                          <tr>
                        <td style="height: 20px;" colspan="14"></td>
                      </tr>
                          <tr>
                        <td style="border-bottom: black 1px dotted;" colspan="20"></td>
                      </tr>
                          <tr>
                        <td style="height: 20px;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="border-bottom: black 1px dotted;" colspan="20"></td>
                      </tr>
                          <tr>
                        <td style="height: 20px;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="border-bottom: black 1px dotted;" colspan="20"></td>
                      </tr>
                          <tr>
                        <td style="height: 20px;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="border-bottom: black 1px dotted;" colspan="20"></td>
                      </tr>
                          <tr>
                        <td style="height: 20px;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td style="border-bottom: black 1px dotted;" colspan="20"></td>
                      </tr>
                          <tr>
                        <td colspan="3">ปัจจุบันข้าพเจ้า</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="5">ไม่ได้ประกอบอาชีพ เพราะ</td>
                        <td style="border-bottom: black 1px dotted;" colspan="11"></td>
                      </tr>
                          <tr>
                        <td colspan="7">แต่ข้าพเจ้าได้รับเงินค่าใช้จ่ายจาก</td>
                        <td style="border-bottom: black 1px dotted;" colspan="13"></td>
                      </tr>
                          <tr>
                        <td colspan="3"></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="3">ประกอบอาชีพ</td>
                        <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                        <td colspan="2">ตำแหน่ง</td>
                        <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                      </tr>
                          <tr>
                        <td colspan="4">รายได้ วัน/เดือน/ปีละ</td>
                        <td style="border-bottom: black 1px dotted;" colspan="7"></td>
                        <td>บาท</td>
                        <td colspan="3">ทำงานนี้มานาน</td>
                        <td style="border-bottom: black 1px dotted;" colspan="4"></td>
                        <td>ปี</td>
                      </tr>
                          <tr>
                        <td colspan="4">ชื่อสถานที่ทำงาน</td>
                        <td style="border-bottom: black 1px dotted;" colspan="10"></td>
                        <td>โทร</td>
                        <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                      </tr>
                          <tr>
                        <td colspan="5">ชื่อนายจ้าง/หัวหน้างาน</td>
                        <td style="border-bottom: black 1px dotted;" colspan="9"></td>
                        <td>โทร</td>
                        <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                      </tr>
                          <tr>
                        <td colspan="7">นอกจากทำงานประจำแล้ว ข้าพเจ้า</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="5">ไม่มีอาชีพเสริมอื่น ๆ อีก</td>
                      </tr>
                          <tr>
                        <td colspan="7"></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="3">มีอาชีพเสริม</td>
                      </tr>
                          <tr>
                        <td>คือ</td>
                        <td style="border-bottom: black 1px dotted;" colspan="10"></td>
                      </tr>
                          <tr>
                        <td colspan="4">สถานที่ทำงาน</td>
                        <td style="border-bottom: black 1px dotted;" colspan="10"></td>
                        <td>โทร</td>
                        <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                      </tr>
                          <tr>
                        <td colspan="5">มีรายได้ วัน/เดือน/ปีละ</td>
                        <td style="border-bottom: black 1px dotted;" colspan="2"></td>
                        <td> บาท</td>
                      </tr>
                          <tr>
                        <td colspan="7">ข้าพเจ้ามีความรู้ความสามารถพิเศษด้าน</td>
                        <td style="border-bottom: black 1px dotted;" colspan="10"></td>
                      </tr>
                          <tr>
                        <td colspan="5">สถานะทางการเงิน/หนี้สิน</td>
                        <td style="border-bottom: black 1px dotted;" colspan="13"></td>
                      </tr>
                        </tbody>
                  </table>
                    </form>
                </form>
                ${model.wartermarks}
                <div style="margin-top:30px;"></div>
                <form style="border:1px solid black;">
                      <table style="width:100%">
                    <tbody style="margin-bottom:5px;">
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
                        <td style="font-weight: bold; border-bottom:1px solid black;" colspan="20">การรับราชการทหารกองประจำการ</td>
                      </tr>
                          <tr>
                        <td>ข้าพเจ้า</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="8">ไม่เคยรับราชการทหารกองประจำการ เพราะ</td>
                        <td style="border-bottom: black 1px dotted;" colspan="10"></td>
                      </tr>
                          <tr>
                        <td></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="7">เคยเป็นทหารกองประจำการเมื่อ พ.ศ.</td>
                        <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                        <td>สังกัด</td>
                        <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                      </tr>
                          <tr>
                        <td></td>
                        <td>ที่ตั้ง</td>
                        <td style="border-bottom: black 1px dotted;" colspan="18"></td>
                      </tr>
                          <tr>
                        <td></td>
                        <td colspan="5">เคยปฎิบัติราชการพิเศษที่</td>
                        <td style="border-bottom: black 1px dotted;" colspan="14"></td>
                      </tr>
                          <tr>
                        <td></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="2">ไม่เคย</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="6">เคย กระทำผิดในระหว่างเป็นทหาร</td>
                        <td style="border-bottom: black 1px dotted;" colspan="2"></td>
                        <td>ครั้ง</td>
                        <td>คือ</td>
                        <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                      </tr>
                          <tr>
                        <td colspan="2"></td>
                        <td style="border-bottom: black 1px dotted;" colspan="18"></td>
                      </tr>
                        </tbody>
                  </table>
                    </form>
                </form>

                <!-- //ปิดหน้า6 -->

                ${model.wartermarks}
                <!-- //เปิดลงชื่อหน้า6 -->
                <form>
                      <table style="width:100%" border="0">
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
                          <td style="width: 10%;"></td>
                          <td style="width: 10%;"></td>
                        </tr>
                    <tr>
                          <td style="height: 20px;" colspan="11"></td>
                        </tr>
                    <tr>
                          <td colspan="10"></td>
                          <td colspan="2">( ลงชื่อ )</td>
                          <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                          <td>จำเลย</td>
                        </tr>

                          <td style="height: 30px;" colspan="11"></td>
                        </tr>
                    <tr>
                          <td colspan="3"></td>
                          <td colspan="3"></td>
                          <td colspan="3"></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                    <tr>
                          <td style="height: 30px;" colspan="11"></td>
                        </tr>
                  </table>
                    </form>
                <!-- //ปิดลงชื่อหน้า6 -->

                <!-- //เปิดหน้า7 -->
                <form style="border:1px solid black;">
                      <table style="width:100%">
                    <tbody style="margin-bottom:5px;">
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
                        <td style="font-weight: bold; border-bottom:1px solid black;" colspan="20">นิสัยและความประพฤติ (ตอบได้มากกว่า 1 ข้อ)</td>
                      </tr>
                          <tr>
                        <td colspan="7">ข้าพเจ้าใช้เวลาว่างส่วนใหญ่</td>
                      </tr>
                          <tr>
                        <td></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="5">ทำงานพิเศษหรืองานบ้าน</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="3">อ่านหนังสือ</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="4">นอนพักผ่อนที่บ้าน</td>
                      </tr>
                          <tr>
                        <td></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="5">ฟัง/เล่นดนตรี</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="3">ไปหาเพื่อน</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="4">เล่นกีฬา</td>
                        <td style="border-bottom: black 1px dotted;" colspan="2"></td>
                      </tr>
                          <tr>
                        <td></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="2">ไปเที่ยว</td>
                        <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="3">ไม่มีเวลาว่าง</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="4">อิื่นๆ</td>
                        <td style="border-bottom: black 1px dotted;" colspan="2"></td>
                      </tr>
                          <tr>
                        <td colspan="9">ข้าพเจ้ามีนิสัย / อารมณ์ความรู้สึก</td>
                      </tr>
                          <tr>
                        <td></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="5">คล้อยตามผู้อื่นได้ง่าย</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="5">เป็นคนร่าเริ่งชอบพบปะผู้อื่น</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="5">รู้สึกเบื่อหน่าย ท้อแท้</td>
                      </tr>
                          <tr>
                        <td></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="5">ไม่เชื่ออะไรง่ายๆ</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="5">ใจเย็น รับฟังผู้อื่น</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="5">รู้สึกไม่มีความสุข/เศร้าหมอง</td>
                      </tr>
                          <tr>
                        <td></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="5">เป็นคนเฉยๆไม่ชอบพบปะผู้อื่น</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="5">หงุดหงิด เอาแต่ใจตนเอง</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="5">รู้สึกอ่อนไหวต่อคำวิจารณ์ของผู้อื่น</td>
                      </tr>
                          <tr>
                        <td></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="5">ต้องการเป็นที่ยอมรับของผู้อื่น</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="5">อารมณ์ร้อน วู่วาม โกรธง่าย</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="5">มักมีเรื่องทะเลาะบาดหมางกับผู้อื่น</td>
                      </tr>
                          <tr>
                        <td></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="8">นอนไม่หลับ เพราะคิดมาก หรือกังวลใจ</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="8">คนอะไรวนไปวนมา ตัดสินใจไม่ค่อยได้</td>
                      </tr>
                          <tr>
                        <td></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="8">มีอาการเจ็บป่วยทางกายโดยหาสาเหตุไม่ได้</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="8">ทำอะไรลงไปโดยไม่สามารถควบคุมตัวเองได้</td>
                      </tr>
                          <tr>
                        <td></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="17">เวลาโกรธ มักจะระบายความรู้สึกกับ สิ่งของ สัตว์เลี้ยง บุคคลรอบข้าง หรือทำร้ายตัวเอง</td>
                      </tr>
                          <tr>
                        <td></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="17">เคยก่อเหตุทำ ร้ายร่างกายบุคคลในครอบครัว หรือบุคคลอื่น</td>
                      </tr>
                          <tr>
                        <td></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="17">เคยลักทรัพย์สินของบุคคลในครอบครัว หรือผู้อื่น</td>
                      </tr>
                          <tr>
                        <td></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="17">มักจะไม่ทำตามกฎระเบียบ แบบแผนของสังคม</td>
                      </tr>
                          <tr>
                        <td></td>
                        <td><input type="checkbox" /></td>
                        <td>อื่น ๆ</td>
                        <td style="border-bottom: black 1px dotted;" colspan="16"></td>
                      </tr>
                          <tr>
                        <td>ข้าพเจ้า</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="3">ไม่สูบบุหรี่</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="4">สูบบุหรี่นานๆครั้ง</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="5">สูบบุหรี่ ประจำวันละ</td>
                        <td style="border-bottom: black 1px dotted;" colspan="2"></td>
                        <td>ซอง</td>
                      </tr>
                          <tr>
                        <td></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="3">ไม่ดื่มสุรา</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="4">ดื่มสุรานานๆครั้ง</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="5">ดื่มสุรา ประจำวันละ</td>
                        <td style="border-bottom: black 1px dotted;" colspan="2"></td>
                        <td>ครั้ง</td>
                      </tr>
                          <tr>
                        <td></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="3">ไม่เล่นการพนัน</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="5">เล่นการพนัน</td>
                        <td style="border-bottom: black 1px dotted;" colspan="9"></td>
                      </tr>
                          <tr>
                        <td colspan="20">บุคคลที่ข้าพเจ้าคบเป็นเพื่อนโดยทั่วไปไม่มีความประพฤติเสียหายโดย</td>
                      </tr>
                          <tr>
                        <td><input type="checkbox" /></td>
                        <td colspan="5">เป็นเพื่อนร่วมสถานศึกษา</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="5">เป็นเพื่อนร่วมงาน</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="5">เป็นเพื่อนบ้าน</td>
                      </tr>
                          <tr>
                        <td colspan="5">บางคนมีความประพฤติ เช่น</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="6">เสพสารเสพติดเป็นครั้งคราว</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="7">เคยถูกจับกุมดำเนินคดี</td>
                      </tr>
                          <tr>
                        <td colspan="5"></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="6">บางคนเป็นผู้ค้ายาเสพติด</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="7">มีเรื่องทะเลาะวิวาทกับผู้อื่นเป็นครั้งคราว</td>
                      </tr>
                        </tbody>
                  </table>
                    </form>
                </form>
                <div style="margin-top:30px;"></div>
                <form style="border:1px solid black;">
                <form>
                      <table style="width: 100%;">
                    <tbody style="margin-bottom:5px;">
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
                        <td></td>
                        <td style="font-weight: bold;" colspan="5">นิสัยความประพฤติอื่นๆ</td>
                      </tr>
                          <tr>
                        <td style="border-bottom: black 1px dotted;" colspan="20"></td>
                      </tr>
                        </tbody>
                  </table>
                    </form>
                </form>

                <!-- //ปิดหน้า7 -->

                ${model.wartermarks}
                <!-- //เปิดลงชื่อหน้า7 -->
                <form>
                      <table style="width:100%" border="0">
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
                          <td style="width: 10%;"></td>
                          <td style="width: 10%;"></td>
                        </tr>
                    <tr>
                          <td style="height: 20px;" colspan="11"></td>
                        </tr>
                    <tr>
                          <td colspan="10"></td>
                          <td colspan="2">( ลงชื่อ )</td>
                          <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                          <td>จำเลย</td>
                        </tr>

                          <td style="height: 30px;" colspan="11"></td>
                        </tr>
                    <tr>
                          <td colspan="3"></td>
                          <td colspan="3"></td>
                          <td colspan="3"></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                    <tr>
                          <td style="height: 60px;" colspan="11"></td>
                        </tr>
                  </table>
                    </form>
                <!-- //ปิดลงชื่อหน้า7 -->
                ${model.wartermarks}
                <!-- //เปิดหน้า8 -->

                <div>
                      <form style="border:1px solid black;">
                    <table style="width:100%">
                          <tbody style="margin-bottom:5px;">
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
                            <td style="font-weight: bold; border-bottom:1px solid black;" colspan="20">สุขภาพและรูปพรรณ</td>
                            </tr>
                        <tr>

                              <td colspan="4">สุขภาพร่างกาย</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="2">แข็งแรง</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="4">ไม่ค่อยแข็งแรง</td>
                              <td><input type="checkbox" /></td>
                              <td colspan="2">ทรุดโทรม</td>
                            </tr>
                        <tr>
                              <td colspan="4"></td>
                              <td><input type="checkbox" /></td>
                              <td colspan="4">มีโรคประจำตัวคือ</td>
                              <td style="border-bottom: black 1px dotted;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="5"></td>
                              <td colspan="7">เคยป่วยเป็นโรคทางกายที่ร้ายแรง คือ</td>
                              <td style="border-bottom: black 1px dotted;" colspan="8"></td>
                            </tr>
                        <tr>
                              <td colspan="5"></td>
                              <td colspan="4">เคยเข้ารับการรักษาที่</td>
                              <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                              <td>เมื่อ</td>
                              <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                            </tr>
                        <tr>
                              <td colspan="5"></td>
                              <td colspan="4">ผลการรักษา</td>
                              <td style="border-bottom: black 1px dotted;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="5"></td>
                              <td colspan="4">อาการปัจจุบัน</td>
                              <td style="border-bottom: black 1px dotted;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="10">สุขภาพจิต/ภาวะทางอารมณ์และบุคลิกภาพ</td>
                            </tr>
                        <tr>
                              <td colspan="4"></td>
                              <td><input type="checkbox" /></td>
                              <td>ปกติ</td>
                              <td style="border-bottom: black 1px dotted;" colspan="14"></td>
                            </tr>
                        <tr>
                              <td colspan="4"></td>
                              <td><input type="checkbox" /></td>
                              <td colspan="8">เคยมีการป่วยทางจิต ประสาท คือ</td>
                              <td style="border-bottom: black 1px dotted;" colspan="7"></td>
                            </tr>
                        <tr>
                              <td colspan="5"></td>
                              <td colspan="4">เคยเข้ารับการรักษาที่</td>
                              <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                              <td>เมื่อ</td>
                              <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                            </tr>
                        <tr>
                              <td colspan="5"></td>
                              <td colspan="4">ผลการรักษา</td>
                              <td style="border-bottom: black 1px dotted;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td colspan="5"></td>
                              <td colspan="4">อาการปัจจุบัน</td>
                              <td style="border-bottom: black 1px dotted;" colspan="11"></td>
                            </tr>
                        <tr>
                              <td style="font-weight: bold;" colspan="2">ข้อสังเกต</td>
                              <td colspan="7">(เกี่ยวกับบุคลิกภาพ ท่าทางของจำเลย)</td>
                              <td style="border-bottom: black 1px dotted;" colspan="11"></td>
                            </tr>
                      </tbody>
                        </table>
                  </form>
                    </div>
                </form>
                <form style="border:1px solid black; margin-top:30px;">
                <div>
                <form style="border-bottom:1px solid black;">
                      <table id="tablecollapse" border="1">
                    <tr>
                          <td  colspan="4"><center>
                              <strong>รูปร่าง</strong>
                            </center></td>
                          <td colspan="4"><center>
                              <strong>รูปหน้า </strong>
                            </center></td>
                          <td colspan="4"><center>
                              <strong>ศีรษะ</strong>
                            </center></td>
                        </tr>
                    <tr>
                          <td width="6%"><span >
                        <center spry:hover="th">
                              เตี้ย
                            </center></td>
                          <td width="10%"><span >
                            <center>
                            สันทัด
                          </center>
                            </span></td>
                          <td width="5%"><span >
                            <center>
                            สูง
                          </center>
                            </span></td>
                          <td width="7%"><span >.......</span></td>
                          <td width="7%"><span >
                            <center>
                            กลม
                          </center>
                            </span></td>
                          <td width="9%"><span >
                            <center>
                            รูปไข่
                          </center>
                            </span></td>
                          <td width="17%"><span >
                            <center>
                            สามเหลี่ยม
                          </center>
                            </span></td>
                          <td width="10%"><span >..........</span></td>
                          <td width="6%"><span >
                            <center>
                            ทุย
                          </center>
                            </span></td>
                          <td width="7%"><span >
                            <center>
                            แบน
                          </center>
                            </span></td>
                          <td width="6%"><span >
                            <center>
                            เถิก
                          </center>
                            </span></td>
                          <td width="10%"><span >.........</span></td>
                        </tr>
                    <tr >
                          <td colspan="2"><center>
                              <strong>สีตา</strong>
                            </center></td>
                          <td  colspan="2"><center>
                              <strong>สีผม</strong>
                            </center></td>
                          <td colspan="4"><center>
                              <strong>สีผิว</strong>
                            </center></td>
                          <td colspan="2" ><center>
                              <strong>ส่วนสูง</strong>
                            </center></td>
                          <td colspan="2" ><center>
                              <strong>น้ำหนัก</strong>
                            </center></td>
                        </tr>
                    <tr>
                          <td><span >ดำ</span></td>
                          <td><span >........</span></td>
                          <td><span >
                            <center>
                            ดำ
                          </center>
                            </span></td>
                          <td>.......</td>
                          <td ><center>
                              ดำ
                            </center></td>
                          <td ><center>
                              ดำแดง
                            </center></td>
                          <td ><center>
                              ขาว
                            </center></td>
                          <td >......</td>
                          <td colspan="2" >&nbsp;ซม.</td>
                          <td colspan="2" >&nbsp;กก.</td>
                        </tr>
                    <tr>
                          <td colspan="2">&nbsp;</td>
                        </tr>
                  </table>
                      <table width="41%" border="1" id="tablecollapse">
                    <tr>
                          <td width="15%" ><strong>ตำหนิ/พิการ</strong></td>
                          <td width="85%">&nbsp;</td>
                        </tr>
                  </table>
                      <table width="41%" border="1" id="tablecollapse">
                    <tr>
                          <td width="15%"><input type="checkbox" name="ไม่มี" id="ไม่มี">

                            <label for="ไม่มี">ไม่มี</label>
                            </td>
                          <td><input type="checkbox" name="มี" id="มี">

                            <label for="มี">มี ร่องรอยการกรีด ที่</label>                            ......................................</td>
                        </tr>
                    <tr>
                          <td><input type="checkbox" name="ไม่มี2" id="ไม่มี2">
                        <label for="ไม่มี2">ไม่มี</label></td>
                          <td><input type="checkbox" name="มี2" id="มี2">

                           <label for="มี2">มี ร่องรอยเข็มฉีดยา ที่</label>                           ......................................</td>
                        </tr>
                  </table>
                      <table id="tablecollapse" border="1">
                    <tr>
                          <td width="206"><center>
                              <span ><strong>ลอยสัก / รูป</strong></span>
                            </center></td>
                          <td width="233" ><center>
                              <strong>บริเวณ</strong>
                            </center></td>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                        </tr>
                  </table>
                    </form>
              </div>

                  <!-- //ปิดหน้า8 -->
                  ${model.wartermarks}

                  <!-- //เปิดลงชื่อหน้า8 -->
                  <form>
                <table style="width:100%" border="0">
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
                    <td style="width: 10%;"></td>
                    <td style="width: 10%;"></td>
                  </tr>
                      <tr>
                    <td style="height: 20px;" colspan="11"></td>
                  </tr>
                      <tr>
                    <td colspan="10"></td>
                    <td colspan="2">( ลงชื่อ )</td>
                    <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                    <td>จำเลย</td>
                  </tr>
                      <tr>
                    <td style="height: 30px;" colspan="11"></td>
                  </tr>
                      <tr>
                    <td colspan="3"></td>
                    <td colspan="3"></td>
                    <td colspan="3"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                      <tr>
                    <td style="height: 30px;" colspan="11"></td>
                  </tr>
                    </table>
              </form>
                  <!-- //ปิดลงชื่อหน้า8 -->

                  <!-- //เปิดหน้า9 -->
                  <form style="border:1px solid black;">
                <table style="width:100%">
                      <tbody style="margin-bottom:5px;">
                    <tr>
                          <td style="font-weight: bold;border-bottom:1px solid black;" colspan="6">2.ประวัติการกระทำความผิด</td>
                        </tr>
                        <tr>
                                <td style="font-weight: bold;">ข้าพเจ้า</td>
                                <td>
                                  <input type="checkbox" />
                                </td>
                                <td style="font-weight: bold;" colspan="18">ไม่มีคดีอาญาอื่นๆที่ยังอยู่ในชั้นพนักงานสอบสวน หรืออยู่ในชั้นศาลขณะนี้</td>
                              </tr>

                              <tr>
                                <td></td>
                                <td>
                                  <input type="checkbox" />
                                </td>
                                <td style="font-weight: bold;" colspan="18">มี คดีอาญาอื่นๆที่ยังอยู่ในชั้นพนักงานสอบสวน หรืออยู่ในชั้นศาลขณะนี้ ดังนี้</td>

                              </tr>
                              <tr>
                                <td colspan="3"></td>
                                <td colspan="4">1. สถานีตำรวจ/ศาล</td>
                                <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                                <td colspan="4">ฐานความผิด</td>
                                <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                              </tr>
                              <tr>
                                <td colspan="3">ข้อมูลเพิ่มเติม</td>
                                <td style="border-bottom: black 1px dotted;" colspan="17"></td>

                              </tr>
                              <tr>
                                <td colspan="3"></td>
                                <td colspan="4">2. สถานีตำรวจ/ศาล</td>
                                <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                                <td colspan="4">ฐานความผิด</td>
                                <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                              </tr>
                              <tr>
                                <td colspan="3">ข้อมูลเพิ่มเติม</td>
                                <td style="border-bottom: black 1px dotted;" colspan="17"></td>

                              </tr>
                              <tr>
                                <td style="font-weight: bold;" colspan="9">ข้าพเจ้า เคยมีประวัติการถูกจับกุมดำเนินคดี</td>
                                <td style="border-bottom: black 1px dotted;">${model.allegationDocNumber}</td>
                                <td style="font-weight: bold;" colspan="4">ครั้ง ดังนี้</td>
                              </tr>
                      ${model.allegationDoc}
                        </tbody>

                    </table>
              </form>

                  <!-- ปิดหน้า9 -->
                  ${model.wartermarks}

                  <!-- //เปิดลงชื่อหน้า9 -->
                  <form>
                <table style="width:100%" border="0">
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
                    <td style="width: 10%;"></td>
                    <td style="width: 10%;"></td>
                  </tr>
                      <tr>
                    <td style="height: 20px;" colspan="11"></td>
                  </tr>
                      <tr>
                    <td colspan="10"></td>
                    <td colspan="2">( ลงชื่อ )</td>
                    <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                    <td>จำเลย</td>
                  </tr>
                      <tr>
                    <td style="height: 30px;" colspan="11"></td>
                  </tr>
                      <tr>
                    <td colspan="3"></td>
                    <td colspan="3"></td>
                    <td colspan="3"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                      <tr>
                    <td style="height: 30px;" colspan="11"></td>
                  </tr>
                    </table>
              </form>
                  <!-- //ปิดลงชื่อหน้า9-->

                  ${model.wartermarks}


                  <!-- //เปิดหน้า11 -->

                  <form style="border:1px solid black;">
                <table style="width:100%">
                      <tbody style="margin-bottom:5px;">
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
                          <td style="font-weight: bold; border-bottom:1px solid black;" colspan="20">การเกี่ยวข้องกับยา และสารเสพติดให้โทษ</td>
                        </tr>
                    <tr>
                          <td colspan="15">ข้าพเจ้าเกี่ยวข้องกับยาและสารเสพติดให้โทษ ดังนี้</td>
                        </tr>
                    <tr>
                          <td style="font-weight: bold;" colspan="7">ประวัติการเสพยา</td>
                        </tr>
                    <tr>
                          <td style="font-weight: bold;" colspan="4">1.กัญชา</td>
                          <td colspan="4">เสพครั้งแรกเมื่อ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                          <td>เพราะ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="6"></td>
                        </tr>
                    <tr>
                          <td></td>
                          <td style="font-weight: bold;" colspan="2">โดยวิธี</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="4">ผสมบุหรี่สูบ</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="4">ใช้บ้อง</td>
                          <td><input type="checkbox" /></td>
                          <td>อื่นๆ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                        </tr>
                    <tr>
                          <td></td>
                          <td style="font-weight: bold;" colspan="2">ปัจจุบัน</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="4">อยู่ระหว่างการรักษา</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="5">ยังคงเสพอยู่โดยวิธี</td>
                          <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                        </tr>
                    <tr>
                          <td colspan="3"></td>
                          <td><input type="checkbox" /></td>
                          <td colspan="4">เลิกเสพแล้วตั้งแต่</td>
                          <td style="border-bottom: black 1px dotted;" colspan="12"></td>
                        </tr>
                    <tr>
                          <td style="font-weight: bold;" colspan="5">ก่อนถูกจับกุม/ปัจจุบัน</td>
                          <td colspan="4">ข้าพเจ้าเสพ วันละ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                          <td>ครั้ง</td>
                          <td colspan="5">ปริมาณการเสพครั้งละ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                        </tr>
                    <tr>
                          <td style="font-weight: bold;" colspan="4">2.มอร์ฟีน/เฮโรอีน</td>
                          <td colspan="4">เสพครั้งแรกเมื่อ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                          <td>เพราะ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="6"></td>
                        </tr>
                    <tr>
                          <td></td>
                          <td style="font-weight: bold;" colspan="2">โดยวิธี</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="4">ฉีดเข้าเส้นโลหิต</td>
                          <td><input type="checkbox" /></td>
                          <td>อื่นๆ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="15"></td>
                        </tr>
                    <tr>
                          <td></td>
                          <td style="font-weight: bold;" colspan="2">ปัจจุบัน</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="4">อยู่ระหว่างการรักษา</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="5">ยังคงเสพอยู่โดยวิธี</td>
                          <td><input type="checkbox" /></td>
                          <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                        </tr>
                    <tr>
                          <td colspan="3"></td>
                          <td><input type="checkbox" /></td>
                          <td colspan="4">เลิกเสพแล้วตั้งแต่</td>
                          <td style="border-bottom: black 1px dotted;" colspan="12"></td>
                        </tr>
                    <tr>
                          <td style="font-weight: bold;" colspan="5">ก่อนถูกจับกุม/ปัจจุบัน</td>
                          <td colspan="4">ข้าพเจ้าเสพ วันละ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                          <td>ครั้ง</td>
                          <td colspan="5">ปริมาณการเสพครั้งละ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                        </tr>
                    <tr>
                          <td style="font-weight: bold;" colspan="4">3.แอมเฟตามีน</td>
                          <td colspan="4">เสพครั้งแรกเมื่อ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                          <td>เพราะ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="6"></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td style="font-weight: bold;" colspan="2">โดยวิธี</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="4">รับประทาน</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="6">ละลายน้ำแล้วฉีดเข้าเส้นโลหิต</td>
                          <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                        </tr>
                    <tr>
                          <td colspan="3"></td>
                          <td><input type="checkbox" /></td>
                          <td colspan="4">สูดควัน</td>
                          <td><input type="checkbox" /></td>
                          <td>อื่นๆ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="10"></td>
                        </tr>
                    <tr>
                          <td></td>
                          <td style="font-weight: bold;" colspan="2">ปัจจุบัน</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="4">อยู่ระหว่างการรักษา</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="5">ยังคงเสพอยู่โดยวิธี</td>
                          <td><input type="checkbox" /></td>
                          <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                        </tr>
                    <tr>
                          <td colspan="3"></td>
                          <td><input type="checkbox" /></td>
                          <td colspan="4">เลิกเสพแล้วตั้งแต่</td>
                          <td style="border-bottom: black 1px dotted;" colspan="12"></td>
                        </tr>
                    <tr>
                          <td style="font-weight: bold;" colspan="5">ก่อนถูกจับกุม/ปัจจุบัน</td>
                          <td colspan="4">ข้าพเจ้าเสพ วันละ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                          <td>ครั้ง</td>
                          <td colspan="5">ปริมาณการเสพครั้งละ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                        </tr>
                    <tr>
                          <td style="font-weight: bold;" colspan="6">4.เมทแอมเฟตามีน(ยาบ้า)</td>
                          <td colspan="4">เสพครั้งแรกเมื่อ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="4"></td>
                          <td>เพราะ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                        </tr>
                    <tr>
                          <td></td>
                          <td style="font-weight: bold;" colspan="2">โดยวิธี</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="4">รับประทาน</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="6">ละลายน้ำแล้วฉีดเข้าเส้นโลหิต</td>
                          <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                        </tr>
                    <tr>
                          <td colspan="3"></td>
                          <td><input type="checkbox" /></td>
                          <td colspan="4">สูดควัน</td>
                          <td><input type="checkbox" /></td>
                          <td>อื่นๆ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="10"></td>
                        </tr>
                    <tr>
                          <td></td>
                          <td style="font-weight: bold;" colspan="2">ปัจจุบัน</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="4">อยู่ระหว่างการรักษา</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="5">ยังคงเสพอยู่โดยวิธี</td>
                          <td><input type="checkbox" /></td>
                          <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                        </tr>
                    <tr>
                          <td colspan="3"></td>
                          <td><input type="checkbox" /></td>
                          <td colspan="4">เลิกเสพแล้วตั้งแต่</td>
                          <td style="border-bottom: black 1px dotted;" colspan="12"></td>
                        </tr>
                    <tr>
                          <td style="font-weight: bold;" colspan="5">ก่อนถูกจับกุม/ปัจจุบัน</td>
                          <td colspan="4">ข้าพเจ้าเสพ วันละ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                          <td>ครั้ง</td>
                          <td colspan="5">ปริมาณการเสพครั้งละ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                        </tr>
                    <tr>
                          <td style="font-weight: bold;" colspan="9">5.ยาวัตถุออกฤทธิ์ต่อจิตประสาท ประเภท</td>
                          <td style="border-bottom: black 1px dotted;" colspan="11"></td>
                        </tr>
                    <tr>
                          <td colspan="4">เสพครั้งแรกเมื่อ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="8"></td>
                          <td>เพราะ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="7"></td>
                        </tr>
                    <tr>
                          <td></td>
                          <td style="font-weight: bold;" colspan="2">โดยวิธี</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="4">รับประทาน</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="6">ละลายน้ำแล้วฉีดเข้าเส้นโลหิต</td>
                          <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                        </tr>
                    <tr>
                          <td colspan="3"></td>
                          <td><input type="checkbox" /></td>
                          <td>อื่นๆ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                        </tr>
                    <tr>
                          <td colspan="3"></td>
                          <td><input type="checkbox" /></td>
                          <td colspan="4">สูดควัน</td>
                          <td><input type="checkbox" /></td>
                          <td>อื่นๆ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="10"></td>
                        </tr>
                    <tr>
                          <td></td>
                          <td style="font-weight: bold;" colspan="2">ปัจจุบัน</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="4">อยู่ระหว่างการรักษา</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="5">ยังคงเสพอยู่โดยวิธี</td>
                          <td><input type="checkbox" /></td>
                          <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                        </tr>
                    <tr>
                          <td colspan="3"></td>
                          <td><input type="checkbox" /></td>
                          <td colspan="4">เลิกเสพแล้วตั้งแต่</td>
                          <td style="border-bottom: black 1px dotted;" colspan="12"></td>
                        </tr>
                    <tr>
                          <td style="font-weight: bold;" colspan="5">ก่อนถูกจับกุม/ปัจจุบัน</td>
                          <td colspan="4">ข้าพเจ้าเสพ วันละ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                          <td>ครั้ง</td>
                          <td colspan="5">ปริมาณการเสพครั้งละ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                        </tr>
                  </tbody>
                    </table>
              </form>

                  <!-- //ปิดหน้า11 -->
                  ${model.wartermarks}
                  <!-- //เปิดลงชื่อหน้า11 -->
                  <form>
                <table style="width:100%" border="0">
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
                    <td style="width: 10%;"></td>
                    <td style="width: 10%;"></td>
                  </tr>
                      <tr>
                    <td style="height: 20px;" colspan="11"></td>
                  </tr>
                      <tr>
                    <td colspan="10"></td>
                    <td colspan="2">( ลงชื่อ )</td>
                    <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                    <td>จำเลย</td>
                  </tr>
                      <tr>
                    <td style="height: 30px;" colspan="11"></td>
                  </tr>
                      <tr>
                    <td colspan="3"></td>
                    <td colspan="3"></td>
                    <td colspan="3"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                      <tr>
                    <td style="height: 30px;" colspan="11"></td>
                  </tr>
                    </table>
              </form>
                  <!-- //ปิดลงชื่อหน้า11-->

                  <!-- //เปิดหน้า12 -->
                  <div style="margin-top:30px;"></div>
                  <form style="border:1px solid black;">
                  <form>
                <table style="width: 100%;">
                      <tbody style="margin-bottom:5px;">
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
                          <td style="font-weight: bold;" colspan="5">6.สารระเหย ประเภท</td>
                          <td style="border-bottom: black 1px dotted;" colspan="11"></td>
                        </tr>
                    <tr>
                          <td colspan="4">สูดดมครั้งแรกเมื่อ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="8"></td>
                          <td>เพราะ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="7"></td>
                        </tr>
                    <tr>
                          <td></td>
                          <td style="font-weight: bold;" colspan="2">ปัจจุบัน</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="4">อยู่ระหว่างการรักษา</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="5">ยังคงสูดดมอยู่</td>
                        </tr>
                    <tr>
                          <td colspan="3"></td>
                          <td><input type="checkbox" /></td>
                          <td colspan="4">เลิกสูดดมแล้วตั้งแต่</td>
                          <td style="border-bottom: black 1px dotted;" colspan="12"></td>
                        </tr>
                    <tr>
                          <td style="font-weight: bold;" colspan="5">ก่อนถูกจับกุม/ปัจจุบัน</td>
                          <td colspan="4">ข้าพเจ้าเสพ วันละ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                          <td>ครั้ง</td>
                          <td colspan="5">ปริมาณการเสพครั้งละ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                        </tr>
                    <tr>
                          <td style="font-weight: bold;" colspan="9">7.อื่นๆ(พืชกระท่อม ฝิ่น ฯลฯ)</td>
                          <td style="border-bottom: black 1px dotted;" colspan="11"></td>
                        </tr>
                    <tr>
                          <td colspan="10">ส่วนใหญ่ข้าพเจ้าเสพยาหรือสารเสพติดที่</td>
                        </tr>
                    <tr>
                          <td></td>
                          <td><input type="checkbox" /></td>
                          <td colspan="3">บ้านตนเอง</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="4">ในบริเวณใกล้บ้าน</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="3">บ้านเพื่อน</td>
                        </tr>
                    <tr>
                          <td></td>
                          <td><input type="checkbox" /></td>
                          <td colspan="5">ในแหล่งที่ซื้อยาเสพติด ที่</td>
                          <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                          <td><input type="checkbox" /></td>
                          <td colspan="3">อื่นๆ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="6"></td>
                        </tr>
                    <tr>
                          <td></td>
                          <td><input type="checkbox" /></td>
                          <td colspan="3">เสพคนเดียว</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="5">เสพร่วมกับเพื่อน ชื่อ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="6"></td>
                        </tr>
                    <tr>
                          <td style="font-weight: bold;" colspan="10">การรับจ้างซื้อยาเสพติด/วัตถุออกฤกธิ์ต่อจิตประสาท</td>
                        </tr>
                    <tr>
                          <td></td>
                          <td>ข้าพเจ้า</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="2">ไม่เคย</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="12">เคย รับจ้างซื้อยาเสพติด/วัตถุออกฤทธิ์ต่อจิตประสาท ประเภท</td>
                          <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                        </tr>
                    <tr>
                          <td colspan="3">ได้รับค่าจ้างเป็น</td>
                          <td style="border-bottom: black 1px dotted;" colspan="17"></td>
                        </tr>
                    <tr>
                          <td colspan="2">ครั้งละ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                          <td colspan="4">ระยะเวลาการจำหน่าย</td>
                          <td style="border-bottom: black 1px dotted;" colspan="9"></td>
                        </tr>
                    <tr>
                          <td style="font-weight: bold;" colspan="10">การจำหน่ายยาเสพติด/วัตถุออกฤกธิ์ต่อจิตประสาท</td>
                        </tr>
                    <tr>
                          <td></td>
                          <td>ข้าพเจ้า</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="2">ไม่เคย</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="12">เคย จำหน่ายยาเสพติด/วัตถุออกฤทธิ์ต่อจิตประสาท ประเภท</td>
                          <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                        </tr>
                    <tr>
                          <td colspan="3">ได้รับค่าจ้างเป็น</td>
                          <td style="border-bottom: black 1px dotted;" colspan="17"></td>
                        </tr>
                    <tr>
                          <td colspan="2">ครั้งละ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                          <td colspan="4">ระยะเวลาการจำหน่าย</td>
                          <td style="border-bottom: black 1px dotted;" colspan="9"></td>
                        </tr>
                    <tr>
                          <td colspan="12">บุคคลใกล้ชิดที่ทราบว่าข้าพเจ้าเกี่ยวข้องกับยาเสพติดให้โทษคือ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="8"></td>
                        </tr>
                    <tr>
                          <td></td>
                          <td colspan="3">ข้าพเจ้ารู้สึก</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="3">ผิด/รู้สึกละอาย</td>
                        </tr>
                    <tr>
                          <td colspan="4"></td>
                          <td><input type="checkbox" /></td>
                          <td colspan="8">เฉยๆไม่ทุกข์ร้อนและยังคงเสพเรื่อยมา</td>
                        </tr>
                    <tr>
                          <td colspan="4"></td>
                          <td><input type="checkbox" /></td>
                          <td colspan="7">รำคาญไม่ต้องการให้ผู้ใดมายุ่งเกี่ยว</td>
                        </tr>
                    <tr>
                          <td colspan="4"></td>
                          <td><input type="checkbox" /></td>
                          <td colspan="3">อื่นๆ(ระบุ)</td>
                          <td style="border-bottom: black 1px dotted;" colspan="12"></td>
                        </tr>
                    <tr>
                          <td colspan="3">บุคคลใกล้ชิด</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="2">เคย</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="5">ไม่เคยว่ากล่าวตักเตือน</td>
                        </tr>
                    <tr>
                          <td colspan="3">ข้าพเจ้า</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="2">ปฎิบัติตาม</td>
                          <td><input type="checkbox" /></td>
                          <td colspan="4">ไม่ปฎิบัติตาม เพราะ</td>
                          <td style="border-bottom: black 1px dotted;" colspan="10"></td>
                        </tr>
                  </tbody>
                    </table>
              </form>
                  </form>
                  <!-- //ปิดหน้า12 -->
                  ${model.wartermarks}
                  <!-- //เปิดลงชื่อหน้า12 -->
                  <form>
                <table style="width:100%" border="0">
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
                    <td style="width: 10%;"></td>
                    <td style="width: 10%;"></td>
                  </tr>
                      <tr>
                    <td style="height: 20px;" colspan="11"></td>
                  </tr>
                      <tr>
                    <td colspan="10"></td>
                    <td colspan="2">( ลงชื่อ )</td>
                    <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                    <td>จำเลย</td>
                  </tr>
                      <tr>
                    <td style="height: 30px;" colspan="11"></td>
                  </tr>
                      <tr>
                    <td colspan="3"></td>
                    <td colspan="3"></td>
                    <td colspan="3"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                      <tr>
                    <td style="height: 30px;" colspan="11"></td>
                  </tr>
                    </table>
              </form>
                  <!-- //ปิดลงชื่อหน้า12-->

                  <!-- //เปิดหน้า13 -->
                  <div style="margin-top:30px;"></div>
                  <form style="border-bottom:1px solid black;">
                <table id="tablecollapse">
                      <tbody>

                  <tr>
                          <td colspan="7">ข้าพเจ้าเคยรับการบำบัดรักษาอาการติดยา/สารเสพติดให้โทษมาแล้ว</td>
                          <td style="border-bottom: black 1px dotted;" colspan="3">............ ครั้ง ดังนี้</td>
                  </tr>
                  <tr>
                    <td>ครั้งที่</td>
                    <td>พ.ศ.</td>
                    <td>สถานที่บำบัดรักษา</td>
                    <td>ยา/สารเสพติด</td>
                    <td>ระยะเวลา</td>
                    <td>ผลการบำบัดรักษา (ครบไม่ครบเลิกเสพได้นาน เท่าใด)</td>
                  </tr>
                      <tr>
                    <td></td>
                    <td style="border-bottom: black 1px dotted;"></td>
                    <td style="border-bottom: black 1px dotted;"></td>
                    <td style="border-bottom: black 1px dotted;"></td>
                    <td style="border-bottom: black 1px dotted;"></td>
                    <td style="border-bottom: black 1px dotted;"></td>
                  </tr>
                  </tbody>
                    </table>
              </form>

                  <div style="margin-top:30px;"></div>
                  <div>
                <form style="border:1px solid black;">
                <form>
                      <table style="width: 100%;">
                    <tbody style="margin-bottom:5px;">
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
                        <td></td>
                        <td colspan="12">เพิ่มเติมเกี่ยวกับประวัติการเกี่ยวข้องกับยาหรือสารเสพติดให้</td>
                      </tr>
                          <tr>
                        <td>โทษ</td>
                        <td style="border-bottom: black 1px dotted;" colspan="19"></td>
                      </tr>
                        </tbody>
                  </table>
                    </form>
                </form>
              </div>

                  <!-- //ปิดหน้า13 -->

                  <!-- //เปิดลงชื่อหน้า13 -->
                  <form>
                <table style="width:100%" border="0">
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
                    <td style="width: 10%;"></td>
                    <td style="width: 10%;"></td>
                  </tr>
                      <tr>
                    <td style="height: 20px;" colspan="11"></td>
                  </tr>
                      <tr>
                    <td colspan="10"></td>
                    <td colspan="2">( ลงชื่อ )</td>
                    <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                    <td>จำเลย</td>
                  </tr>
                      <tr>
                    <td style="height: 30px;" colspan="11"></td>
                  </tr>
                      <tr>
                    <td colspan="3"></td>
                    <td colspan="3"></td>
                    <td colspan="3"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                      <tr>
                    <td style="height: 30px;" colspan="11"></td>
                  </tr>
                    </table>
              </form>
                  <!-- //ปิดลงชื่อหน้า13-->

                  <!-- //เปิดหน้า14 -->
                  <div style="margin-top:30px;"></div>
                  <div>
                <form style="border:1px solid black;">
                      <table style="width:100%">
                    <tbody style="margin-bottom:5px;">
                      <tr>
                          <td style="font-weight: bold; border-bottom:1px solid black;" colspan="20">3.สภาพความผิดและพฤติการณ์แห่งคดี</td>
                        </tr>
                          <tr>
                        <td></td>
                        <td colspan="6">จากคำให้การของจำเลย</td>
                        <td style="border-bottom: black 1px dotted;" colspan="13"></td>
                      </tr>
                          <tr>
                        <td></td>
                        <td colspan="6">สาเหตุที่กระทำความผิดในครั้งนี้</td>
                        <td style="border-bottom: black 1px dotted;" colspan="12"></td>
                      </tr>
                        </tbody>
                  </table>
                    </form>
                  <!-- //ปิดหน้า14 -->

                  <!-- //เปิดลงชื่อหน้า14 -->
                  <form>
                <table style="width:100%" border="0">
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
                    <td style="width: 10%;"></td>
                    <td style="width: 10%;"></td>
                  </tr>
                      <tr>
                    <td style="height: 20px;" colspan="11"></td>
                  </tr>
                      <tr>
                    <td colspan="10"></td>
                    <td colspan="2">( ลงชื่อ )</td>
                    <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                    <td>จำเลย</td>
                  </tr>
                      <tr>
                    <td style="height: 30px;" colspan="11"></td>
                  </tr>
                      <tr>
                    <td colspan="3"></td>
                    <td colspan="3"></td>
                    <td colspan="3"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                      <tr>
                    <td style="height: 30px;" colspan="11"></td>
                  </tr>
                    </table>
              </form>
                  <!-- //ปิดลงชื่อหน้า14-->

                  <!-- //เปิดหน้า15 -->
                  <div style="margin-top:30px;"></div>
                  <div>
                <form style="border:1px solid black;">
                <form>
                      <table style="width:100%">
                    <tbody style="margin-bottom:5px;">
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
                        <td></td>
                        ${model.wartermarks}
                        <td colspan="6">ความเสียหายและการบรรเทาผลร้าย</td>
                        <td style="border-bottom: black 1px dotted;" colspan="13"></td>
                      </tr>
                          <tr>
                        <td></td>
                        <td colspan="6">พฤติการณ์ที่เกี่ยวข้อง/อื่นๆ(เช่นความสัมพันธ์ระหว่างคู่ความ หรือ เกี่ยวกับรถที่ขับ ฯลฯ)</td>
                        <td style="border-bottom: black 1px dotted;" colspan="13"></td>
                      </tr>
                          <tr>
                        <td colspan="6">ข้าพเจ้ากระทำผิดเมื่อ วันที่</td>
                        <td style="border-bottom: black 1px dotted;" colspan="4"></td>
                        <td>เดือน</td>
                        <td style="border-bottom: black 1px dotted;" colspan="4"></td>
                        <td>พ.ศ.</td>
                        <td style="border-bottom: black 1px dotted;" colspan="4"></td>
                      </tr>
                          <tr>
                        <td colspan="6">ถูกจับกุม/เข้ามอบตัวเมื่อวันที่</td>
                        <td style="border-bottom: black 1px dotted;" colspan="4"></td>
                        <td>เดือน</td>
                        <td style="border-bottom: black 1px dotted;" colspan="4"></td>
                        <td>พ.ศ.</td>
                        <td style="border-bottom: black 1px dotted;" colspan="4"></td>
                      </tr>
                          <tr>
                        <td colspan="6">สถานการควบคุมตัว</td>
                      </tr>
                          <tr>
                        <td colspan="2"></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="5">ได้รับการปล่อยตัวชั่วคราว</td>
                      </tr>
                          <tr>
                        <td colspan="2"></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="2">ต้องขัง</td>
                        <td style="border-bottom: black 1px dotted;"></td>
                        <td >วัน</td>
                        <td colspan="4">นับถึงวัน พิพากษาคดี</td>
                      </tr>
                          <tr>
                        <td colspan="3"></td>
                        <td>ที่</td>
                        <td style="border-bottom: black 1px dotted;" colspan="10"></td>
                      </tr>
                          <tr>
                        <td colspan="2"></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="5">ในระหว่างสอบสวน</td>
                        <td><input type="checkbox" /></td>
                        <td colspan="5">ในระหว่างพิจารณาคดี</td>
                      </tr>
                        </tbody>
                  </table>
                    </form>
                </form>
              </div>
                  <!-- //ปิดหน้า15 -->

                  <!-- //เปิดลงชื่อหน้า15 -->
                  <form>
                <table style="width:100%" border="0">
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
                    <td style="width: 10%;"></td>
                    <td style="width: 10%;"></td>
                  </tr>
                      <tr>
                    <td style="height: 20px;" colspan="11"></td>
                  </tr>
                      <tr>
                    <td colspan="10"></td>
                    <td colspan="2">( ลงชื่อ )</td>
                    <td style="border-bottom: black 1px dotted;" colspan="3"></td>
                    <td>จำเลย</td>
                  </tr>
                      <tr>
                    <td style="height: 30px;" colspan="11"></td>
                  </tr>
                      <tr>
                    <td colspan="3"></td>
                    <td colspan="3"></td>
                    <td colspan="3"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                      <tr>
                    <td style="height: 30px;" colspan="11"></td>
                  </tr>
                    </table>
              </form>
                  <!-- //ปิดลงชื่อหน้า15-->

                  ${model.wartermarks}

                  <!-- //เปิดหน้า16 -->

                  <form style="border:1px solid black;">
                <table id="tablecollapse" border="1" align="center">
                      <tr>
                    <td width="433">จำเลยร่วม/คู่คดี</td>
                    <td width="747">ชื่อและที่ทำงานทนายความ</td>
                  </tr>
                      <tr>
                    <td> 1..........................................................................................................</td>
                    <td>............................................................................................</td>
                  </tr>
                      <tr>
                    <td>2..........................................................................................................</td>
                    <td>............................................................................................</td>
                  </tr>
                      <tr>
                    <td>3..........................................................................................................</td>
                    <td>............................................................................................</td>
                  </tr>
                      <tr>
                    <td>4..........................................................................................................</td>
                    <td>............................................................................................</td>
                  </tr>
                      <tr>
                    <td>คดีนี้
                          <input type="checkbox" name="checkbox" id="checkbox">
                          <label for="checkbox">ไม่มีผู้เสียหาย
                        <input type="checkbox" name="checkbox2" id="checkbox2">
                        มีผู้เสียหาย จำนวน ............................คน</label></td>

                  </tr>
                    </table>
              </form>

                  <form style="border:1px solid black;">
                <table id="tablecollapse" border="1">
                      <tr>
                    <td><strong>ความรู้สึกต่อการกระทำผิดครั้งนี้</strong></td>
                  </tr>
                      <tr>
                    <td><input type="checkbox" name="checkbox" id="checkbox">
                          <label for="checkbox">สำนึกผิด อยากกลับตัวเป็นคนดี</label></td>
                  </tr>
                      <tr>
                    <td><input type="checkbox" name="checkbox2" id="checkbox2">
                          <label for="checkbox2">เฉยๆ ไม่ทุกข์ร้อน</label></td>
                  </tr>
                      <tr>
                    <td><input type="checkbox" name="checkbox3" id="checkbox3">
                          <label for="checkbox3">คิดว่าไม่เป็นความผิด/ไม่เห็นว่าจำเป็นต้องแก้ไข ปรับปรุงตนเองแต่อย่างใด</label></td>
                  </tr>
                      <tr>
                    <td><input type="checkbox" name="checkbox4" id="checkbox4">
                          <label for="checkbox4">คิดว่าตนเองบริสุทธิ์</label></td>
                  </tr>
                      <tr>
                    <td><input type="checkbox" name="checkbox5" id="checkbox5">
                          <label for="checkbox5">อื่นๆ.............................................................................................................................................................................................</label></td>
                  </tr>
                    </table>
              </form>


                <form style="border:1px solid black;">
                      <table style="width:100%">
                    <tbody style="margin-bottom:5px;">
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
                          <td style="font-weight: bold; border-bottom:1px solid black;" colspan="20">4.เหตุที่ควรจะได้รับความปรานีจากศาล</td>
                        </tr>
                          <tr>
                        <td></td>
                        <td colspan="15">ข้าพเจ้าควรจะได้รับปราณีจากศาลให้ลงโทษในสถานเบา โดยข้าพเจ้ามีเหตุอันควรปรานี ดังนี้</td>
                      </tr>
                          <tr>
                        <td><input type="checkbox" /></td>
                        <td colspan="10">มีภาระต้องเลี้ยงดู บิดา มารดา ภรรยา บุตร อื่นๆ(ระบุ)</td>
                        <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                      </tr>
                          <tr>
                        <td><input type="checkbox" /></td>
                        <td colspan="10">ไม่เคยมีประวัติถูกจับกุมดำเนินคดีอาญาใดมาก่อน</td>
                      </tr>
                          <tr>
                        <td><input type="checkbox" /></td>
                        <td colspan="10">ได้ชดใช้ค่าเสียหายหรือบรรเทาผลร้าย จนผู้เสียหายพอใจแล้ว</td>
                      </tr>
                          <tr>
                        <td><input type="checkbox" /></td>
                        <td>อื่นๆ</td>
                        <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                      </tr>
                        </tbody>
                  </table>
                    </form>


                <div style="margin-top:60px;"></div>
                <form style="border:1px solid black;">
                      <table style="width:100%">
                    <tbody style="margin-bottom:5px;">
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
                        <td style="font-weight: bold;  border-bottom:1px solid black; " colspan="20">5.ความต้องการ และความยินยอมของจำเลยเกี่ยวกับวิธีการควบคุมความประพฤติ</td>
                      </tr>
                          <tr>
                        <td style="font-weight: bold;" colspan="2">ข้าพเจ้า</td>
                        <td><input type="checkbox" /></td>
                        <td style="font-weight: bold;" colspan="10">ไม่ต้องการให้ศาลสั่งใช้วิธีการคุมความประพฤติ เพราะ</td>
                        <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                      </tr>
                          <tr>
                        <td colspan="2"></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="14">ต้องการให้ศาลสั่งใช้วิธีการควบคุมความประพฤติ และรับรองว่าจะปฎิบัติตามเงื่อนไขที่ศาลกำหนด</td>
                      </tr>
                          <tr>
                        <td colspan="3"></td>
                        <td style="font-weight: bold;" colspan="2">ข้าพเจ้า</td>
                        <td><input type="checkbox" /></td>
                        <td style="font-weight: bold;" colspan="14">ยินดีทำงานบริการสังคมและงานสาธารณประโยชน์ตามที่พนักงานคุมประพฤติและข้าพเจ้าเห็นสมควร</td>
                      </tr>
                          <tr>
                      <tr>
                        <td colspan="5"></td>
                        <td><input type="checkbox" /></td>
                        <td style="font-weight: bold;" colspan="10">ไม่ยินดีทำงานบริการสังคมและงานสาธารณประโยชน์ เพราะ</td>
                        <td style="border-bottom: black 1px dotted;" colspan="4"></td>
                      </tr>
                          <tr>
                        <td colspan="2"></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="13">ยินยอมให้ใช้อุปกรณ์อิเล็กทรอนิกส์ หรืออุปกรณ์อื่นใดในการติดตามตัว เพราะ</td>
                        <td style="border-bottom: black 1px dotted;" colspan="4"></td>
                      </tr>
                          <tr>
                        <td colspan="2"></td>
                        <td><input type="checkbox" /></td>
                        <td colspan="13">ไม่ยินยอมให้ใช้อุปกรณ์อิเล็กทรอนิกส์ หรืออุปกรณ์อื่นใดในการติดตามตัว เพราะ</td>
                        <td style="border-bottom: black 1px dotted;" colspan="4"></td>
                      </tr>
                        </tbody>
                  </table>
                    </form>
                  <!-- //ปิดหน้า16 -->

                  ${model.wartermarks}

                  <!-- //เปิดลงชื่อหน้า16 -->
                  <form>
                <table style="width:100%" border="0">
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
                    <td style="width: 10%;"></td>
                    <td style="width: 10%;"></td>
                  </tr>
                      <tr>
                    <td style="height: 20px;" colspan="11"></td>
                  </tr>
                      <tr>
                    <td style="height: 3px;" colspan="11"></td>
                  </tr>
                      <tr>
                    <td colspan="3"></td>
                    <td style="font-weight: bold;" colspan="12">ข้าพเจ้าขอรับรองรองว่า เป็นความจริงทุกประการ จึงลงลายมือชื่อไว้เป็นพยานหลักฐาน</td>
                  </tr>
                      <tr>
                    <td style="height: 3px;" colspan="11"></td>
                  </tr>
                      <tr>
                    <td colspan="4"></td>
                    <td colspan="2">ลงชื่อ</td>
                    <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                    <td >จำเลย</td>
                  </tr>
                      <tr>
                    <td style="height: 3px;" colspan="11"></td>
                  </tr>
                      <tr>
                    <td colspan="5"></td>
                    <td>(</td>
                    <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                    <td >)</td>
                  </tr>
                      <tr>
                    <td style="height: 3px;" colspan="11"></td>
                  </tr>
                      <tr>
                    <td style="height: 3px;" colspan="11"></td>
                  </tr>
                      <tr>
                    <td colspan="4"></td>
                    <td colspan="2">ลงชื่อ</td>
                    <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                    <td colspan="4">พนักงานคุมประพฤติ</td>
                  </tr>
                      <tr>
                    <td style="height: 3px;" colspan="11"></td>
                  </tr>
                      <tr>
                    <td colspan="5"></td>
                    <td>(</td>
                    <td style="border-bottom: black 1px dotted; text-align:center;" colspan="6"></td>
                    <td>)</td>
                    </tr>
                      <tr>
                    <td style="height: 3px;" colspan="11"></td>
                  </tr>
                      <tr>
                    <td style="height: 30px;" colspan="11"></td>
                  </tr>
                      <tr>
                    <td colspan="3"></td>
                    <td colspan="3"></td>
                    <td colspan="3"></td>
                    <td></td>
                    <td></td>
                  </tr>
                      <tr>
                    <td style="height: 30px;" colspan="11"></td>
                  </tr>
                    </table>
              </form>
                  <!-- //ปิดลงชื่อหน้า16-->

                  ${model.wartermarks}
                  <!-- //เปิดหน้า 17 -->
                  <div style="margin-top:30px;"></div>
                  <div>
                <form style="border:1px solid black;">
                <form>
                      <table style="width:100%">
                    <tbody style="margin-bottom:5px;">
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
                        <td colspan="7"></td>
                        <td style="font-weight: bold;" colspan="7">แผนที่บ้านปัจจุบันของจำเลย</td>
                      </tr>
                          <tr>
                        <td style="font-weight: bold;" colspan="2">เลขที่</td>
                        <td style="border-bottom: black 1px dotted;" colspan="2">
                        <td style="font-weight: bold;">หมู่</td>
                        <td style="border-bottom: black 1px dotted;" colspan="3">
                        <td style="font-weight: bold;" colspan="4">บ้าน/ตรอก/ซอย</td>
                        <td style="border-bottom: black 1px dotted;"></td>
                        <td style="font-weight: bold;" colspan="2">ถนน</td>
                        <td style="border-bottom: black 1px dotted;" colspan="5"></td>
                      </tr>
                          <tr>
                        <td style="font-weight: bold;" colspan="3">ตำบล/แขวง</td>
                        <td style="border-bottom: black 1px dotted;" colspan="5">
                        <td style="font-weight: bold;" colspan="3">อำเภอ/เขต</td>
                        <td style="border-bottom: black 1px dotted;" colspan="4">
                        <td style="font-weight: bold;" colspan="2">จังหวัด</td>
                        <td style="border-bottom: black 1px dotted;" colspan="3">
                      </tr>
                          <tr>
                        <td style="font-weight: bold;" colspan="3">ลักษณะบ้าน</td>
                        <td style="border-bottom: black 1px dotted;" colspan="15">
                      </tr>
                        </tbody>
                  </table>
                    </form>
                </form>
              </div>
                  <!-- //ปิดหน้า17 -->
                  ${model.wartermarks} </div>
          </div>
            </div>
      </div>
        </div>
    </body>
    </html>`;
  }
}
