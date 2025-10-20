import { Dxc_Model_Dopa_Citizen } from '../../../../shared/models/Dxc_Model_Dopa_Citizen';
import { Utils } from '../../../../shared/utils/Utils';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { Injectable } from "@angular/core";

export interface IReportDopaCitizen {
  model: Dxc_Model_Dopa_Citizen;
}

@Injectable()
export class DopaCitizenMetadata {
  private results: Dxc_Model_Dopa_Citizen[];
  private obj: string;
  private show: boolean;
  private util: Utils;
  private countResults: number;
  private listLefts: any[];
  private listAlgations: any[];
  private listNormals: any[];
  private listNormalPersons: any[];
  private algationPdf: string[];
  private topPdf: string[];
  private addressCitizenPdf: string[];

  html: string;
  imageSrc: string;

  constructor() {
    this.util = new Utils();
    this.listLefts = [];
    this.listAlgations = [];
    this.listNormals = [];
    this.listNormalPersons = [];
    this.algationPdf = [];
    this.topPdf = [];
    this.results = [];
    this.addressCitizenPdf = [];
  }
  public getHtml(selectData: Dxc_Model_Dopa_Citizen, title: string) {
    this.imageEncode(selectData.image);
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
          font-family: THSarabunNew
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
              <table class="table" border="2px" width="100%">
                  <tr>
                      <td align="center">${title}</td>
                  </tr>
              </table>
              <br />
              <br />
            <table style="width: 100%;">
              <tbody>
                <tr>
                  <td style="width: 40%;">
                    <a class="colorbox-element" href="#">
                      <img src="${this.imageSrc}" width="300px" />
                    </a>
                  </td>
                  <td style="width: 60%;">
                    <table style="width: 100%;margin-top: 0px;margin-right: 30px;">
                      <tbody>
                        <tr>
                          <td style="color: black;" align="left">เลขประจำตัวประชาชน</td>
                          <td style="color:#0000ff" data-attributeName="citizenCardNumber"
                          data-role="dxc-hyperlink" data-value="[[citizenCardNumber]]" >
                          <a href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.citizenCardNumber}/0/0/0" target="_blank">${selectData.citizenCardNumber}<a></td>
                        </tr>

                        <tr>
                          <td style="color: black;" align="left">ชื่อ</td>
                          <td style="color: blue;" align="left">${selectData.prefix} ${selectData.firstName} ${selectData.lastName}</td>
                        </tr>
                        <tr>
                          <td style="color: black;" align="left">ชื่อเดิม</td>
                          <td style="color: blue;" align="left">${selectData.changeNames}</td>
                        </tr>
                        <tr>
                          <td style="color: black;" align="left">วันเกิด</td>
                          <td style="color: blue;" align="left">${selectData.dateOfBirth}</td>
                        </tr>
                        <tr>
                          <td style="color: black;">อายุ</td>
                          <td style="color: blue;">${selectData.age}</td>
                        </tr>
                        <tr>
                          <td style="color: black;">เพศ</td>
                          <td style="color: blue;">${selectData.sex}</td>
                        </tr>
                        <tr>
                          <td style="color: black;">สัญชาติ</td>
                          <td style="color: blue;">${selectData.nationality}</td>
                        </tr>
                        <tr>
                          <td style="color: black;">สถานะการมีชีวิต</td>
                          <td style="color: blue;">${selectData.personalStatus}</td>
                        </tr>
                      </tbody>
                    </table>


                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <div style="width: 100%;">
            <table style="width: 100%;">
              <tbody>
                <tr>
                  <td style="color: black;" width="25%">
                    <strong>ที่อยู่</strong>
                  </td>
                  <td width="25%">&nbsp;</td>
                  <td width="25%">&nbsp;</td>
                  <td width="25%">&nbsp;</td>
                </tr>
                <tr>
                  <td style="color: black;" width="25%">บ้านเลขที่</td>
                  <td style="color: blue;" width="25%">${selectData.homeNumber}</td>
                  <td style="color: black;" width="25%">หมู่ที่</td>
                  <td style="color: blue;" width="25%">${selectData.homeMoo}</td>
                </tr>
                <tr>
                  <td style="color: black;">ตรอก</td>
                  <td style="color: blue;">${selectData.homeTrock}</td>
                  <td style="color: black;">ซอย</td>
                  <td style="color: blue;">${selectData.homeSoy}</td>
                </tr>

                <tr>
                  <td style="color: black;">ถนน</td>
                  <td style="color: blue;">${selectData.homeRoad}</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td style="color: black;">ตำบล</td>
                  <td style="color: blue;">${selectData.homeTumbon}</td>
                  <td style="color: black;">อำเภอ</td>
                  <td style="color: blue;">${selectData.homeAmphur}</td>
                </tr>
                <tr>
                  <td style="color: black;">จังหวัด</td>
                  <td style="color: blue;">${selectData.homeProvince}</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td style="color: black;">สถานะบ้าน</td>
                  <td style="color: blue;">${selectData.homeStatus}</td>
                  <td style="color: black;">สถานะ</td>
                  <td style="color: blue;">${selectData.inhabitantStatus}</td>
                </tr>
                <tr>
                  <td style="color: black;">สถานะ(เจ้าบ้าน,ผู้อาศัย)</td>
                  <td style="color: blue;">${selectData.homeOwnedStatus}</td>
                  <td style="color: black;">วันที่ย้ายเข้า</td>
                  <td style="color: blue;">${selectData.homeMoveInDate}</td>
                </tr>
                <tr>
                       <td colspan="4">
                    <strong>ข้อมูลบิดา/มารดา</strong>
                  </td>
                </tr>
                <tr>
                  <td colspan="4">
                    <table>
                      <tr>
                        <td width="200px">เลขประจำตัวประชาชนของบิดา</td>
                        <td style="color: blue;" data-attributeName="citizenCardNumber"
                        data-role="dxc-hyperlink" data-value="[[fatherCitizenCardNumber]]">${selectData.fatherCitizenCardNumber}</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                      </tr>
                      <tr>
                        <td>ชื่อบิดา</td>
                        <td style="color: blue;">${selectData.fatherFullName}</td>
                        <td>สัญชาติบิดา</td>
                        <td style="color: blue;">${selectData.fatherNationality}</td>
                      </tr>
                      <tr>
                        <td>เลขประจำตัวประชาชนของมารดา</td>
                        <td style="color:#0000ff" data-attributeName="citizenCardNumber"
                        data-role="dxc-hyperlink" data-value="[[citizenCardNumber]]" >
                        <a href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/
                        ${selectData.citizenCardNumber}/0/0/0" target="_blank">${selectData.citizenCardNumber}<a></td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                      </tr>
                      <tr>
                        <td>ชื่อมารดา</td>
                        <td style="color: blue;">${selectData.motherFullName}</td>
                        <td>สัญชาติมารดา</td>
                        <td style="color: blue;">${selectData.motherNationality}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </body>
      </html>
      `;
  }

  public viewgetHtml(selectData: Dxc_Model_Dopa_Citizen, title: string) {
    this.imageEncode(selectData.image);
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
              <br />
              <br />
            <table style="width: 100%;">
              <tbody>
                <tr>
                  <td style="width: 40%;">
                    <a class="colorbox-element" href="#">
                      <img src="${this.imageSrc}" width="300px" />
                    </a>
                  </td>
                  <td style="width: 60%;">
                    <table style="width: 100%;margin-top: 0px;margin-right: 30px;">
                      <tbody>
                        <tr>
                          <td style="color: black;" align="left">เลขประจำตัวประชาชน</td>
                          <td style="color:#0000ff" data-attributeName="citizenCardNumber"
                          data-role="dxc-hyperlink" data-value="[[citizenCardNumber]]" >
                          <a href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/
                          ${selectData.citizenCardNumber}/0/0/0/0/0" target="_blank">${selectData.citizenCardNumber}<a></td>
                        </tr>

                        <tr>
                          <td style="color: black;" align="left">ชื่อ</td>
                          <td style="color: blue;" align="left">
                          <span class="text-info">${selectData.prefix} ${selectData.firstName} ${selectData.lastName}</span></td>
                        </tr>
                        <tr>
                          <td style="color: black;" align="left">ชื่อเดิม</td>
                          <td style="color: blue;" align="left">
                          <span class="text-info">${selectData.changeNames}</span></td>
                        </tr>
                        <tr>
                          <td style="color: black;" align="left">วันเกิด</td>
                          <td style="color: blue;" align="left">
                          <span class="text-info">${selectData.dateOfBirth}</span></td>
                        </tr>
                        <tr>
                          <td style="color: black;">อายุ</td>
                          <td style="color: blue;">
                          <span class="text-info">${selectData.age}</span></td>
                        </tr>
                        <tr>
                          <td style="color: black;">เพศ</td>
                          <td style="color: blue;"><span class="text-info">${selectData.sex}</span></td>
                        </tr>
                        <tr>
                          <td style="color: black;">สัญชาติ</td>
                          <td style="color: blue;"><span class="text-info">${selectData.nationality}</span></td>
                        </tr>
                        <tr>
                          <td style="color: black;">สถานะการมีชีวิต</td>
                          <td style="color: blue;"><span class="text-info">${selectData.personalStatus}</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <br />
          </p>
          <div style="width: 100%;">
            <table style="width: 100%;">
              <tbody>
                <tr>
                  <td style="color: black;" width="25%">
                    <strong>ที่อยู่</strong>
                  </td>
                  <td width="25%">&nbsp;</td>
                  <td width="25%">&nbsp;</td>
                  <td width="25%">&nbsp;</td>
                </tr>
                <tr>
                  <td style="color: black;" width="25%">บ้านเลขที่</td>
                  <td style="color: blue;" width="25%"><span class="text-info">${selectData.homeNumber}</span></td>
                  <td style="color: black;" width="25%">หมู่ที่</td>
                  <td style="color: blue;" width="25%"><span class="text-info">${selectData.homeMoo}</span></td>
                </tr>
                <tr>
                  <td style="color: black;">ตรอก</td>
                  <td style="color: blue;"><span class="text-info">${selectData.homeTrock}</span></td>
                  <td style="color: black;">ซอย</td>
                  <td style="color: blue;"><span class="text-info">${selectData.homeSoy}</span></td>
                </tr>

                <tr>
                  <td style="color: black;">ถนน</td>
                  <td style="color: blue;"><span class="text-info">${selectData.homeRoad}</span></td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td style="color: black;">ตำบล</td>
                  <td style="color: blue;"><span class="text-info">${selectData.homeTumbon}</span></td>
                  <td style="color: black;">อำเภอ</td>
                  <td style="color: blue;"><span class="text-info">${selectData.homeAmphur}</span></td>
                </tr>
                <tr>
                  <td style="color: black;">จังหวัด</td>
                  <td style="color: blue;"><span class="text-info">${selectData.homeProvince}</span></td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td style="color: black;">สถานะบ้าน</td>
                  <td style="color: blue;"><span class="text-info">${selectData.homeStatus}</span></td>
                  <td style="color: black;">สถานะ</td>
                  <td style="color: blue;"><span class="text-info">${selectData.inhabitantStatus}</span></td>
                </tr>
                <tr>
                  <td style="color: black;">สถานะ(เจ้าบ้าน,ผู้อาศัย)</td>
                  <td style="color: blue;"><span class="text-info">${selectData.homeOwnedStatus}</span></td>
                  <td style="color: black;">วันที่ย้ายเข้า</td>
                  <td style="color: blue;"><span class="text-info">${selectData.homeMoveInDate}</span></td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td colspan="4">
                    <strong>ข้อมูลบิดา/มารดา</strong>
                  </td>
                </tr>
                <tr>
                  <td colspan="4">
                    <table>
                      <tr>
                        <td width="200px">เลขประจำตัวประชาชนของบิดา</td>
                        <td style="color: blue;" data-attributeName="citizenCardNumber"
                        data-role="dxc-hyperlink" data-value="[[fatherCitizenCardNumber]]">
                        <span class="text-info">${selectData.fatherCitizenCardNumber}</span></td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                      </tr>
                      <tr>
                        <td>ชื่อบิดา</td>
                        <td style="color: blue;"><span class="text-info">${selectData.fatherFullName}</span></td>
                        <td>สัญชาติบิดา</td>
                        <td style="color: blue;"><span class="text-info">${selectData.fatherNationality}</span></td>
                      </tr>
                      <tr>
                        <td>เลขประจำตัวประชาชนของมารดา</td>
                        <td style="color: blue;" data-attributeName="citizenCardNumber" data-role="dxc-hyperlink"
                        data-value="[[motherCitizenCardNumber]]">
                        <span class="text-info">${selectData.motherCitizenCardNumber}</span></td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                      </tr>
                      <tr>
                        <td>ชื่อมารดา</td>
                        <td style="color: blue;"><span class="text-info">${selectData.motherFullName}</span></td>
                        <td>สัญชาติมารดา</td>
                        <td style="color: blue;"><span class="text-info">${selectData.motherNationality}</span></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </body>
      </html>
      `;
  }
  public getSearchData() {
    // from env
    const schema = environment.qm.sub[0]['dopa'].sub[0]['citizen'].schema;
    console.log(typeof (localStorage.getItem(schema + 'Results')));
    if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {
    } else {
      this.show = true;
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      console.log(schema + 'Results' + this.obj);
    }
  }
  public getlistLefts() {
    let html: string;
    for (const result of this.results) {
      html = ``;
      this.listLefts.push(html);
    }
  }
  public getlistAlgations() {
    let html: string;
    for (const result of this.results) {
      html = ``;
      this.listAlgations.push(html);
    }
  }
  public getlistNormals() { }
  public getlistNormalPersons() { }
  public gettopPdf() {
    const schema = environment.qm.sub[0]['dopa'].sub[0]['citizen'].schema;
    if (localStorage.getItem(schema + 'Results') === null) {
      this.topPdf.push(`<div class="row" ng-model="Dxc_Model_Dopa_Citizen">
      <div class="report-section-title"
      style="font-size: 20px; font-weight: bold; color: blue; border: 1; border-color: black;" align="center">ข้อมูลทะเบียนราษฎร์</div>
      </br></br>
      <table style="width: 95%;">
      <tbody>
        <tr>
          <td style="width: 40%;">
            <a class="colorbox-element" href="#">
            <img src="https://sv1.picz.in.th/images/2020/01/14/RiHz5Q.png" alt="RiHz5Q.png" border="0" width="300px"/>
            </a>
            <div align="center">-</div>
            <div align="center">-</div>
          </td>
          <td style="width: 60%;">
            <table style="width: 100%;margin-top: 0px;margin-right: 30px;">
              <tbody>
                <tr>
                  <td style="font-weight:bold;" align="left"> &nbsp; &nbsp; &nbsp; ชื่อ </td>
                  <td align="left">
                  <span class="text-info" align="left" style="color: blue;">-</span></td>
                  <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; นามสกุล</td>
                  <td align="left">
                  <span class="text-info" align="left" style="color: blue;">-</span></td>
                </tr>
                <tr>
                  <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; เพศ</td>
                  <td align="left">
                  <span class="text-info" style="color: blue;">-</span></td>
                </tr>
                <tr>
                  <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; เลขบัตรประชาชน</td>
                  <td align="left">
                  <span class="text-info" style="color: blue;">-</span></td>
                </tr>
                <tr>
                  <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; เกิดวันที่</td>
                  <td align="left"><span class="text-info" style="color: blue;">-</span></td>
                  <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; อายุ</td>
                  <td align="left" style="color: blue;"><span class="text-info">-</span></td>
                </tr>
                <tr>
                  <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; สัญชาติ</td>
                  <td align="left" style="color: blue;"><span class="text-info">-</span></td>
                  <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; ศาสนา</td>
                  <td align="left" style="color: blue;"><span class="text-info">-</span></td>
                </tr>
                <tr>
                  <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; ชื่อบิดา</td>
                  <td align="left">
                  <span class="text-info" style="color: blue;">-</span></td>
                </tr>
                <tr>
                  <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; ชื่อมารดา</td>
                  <td align="left">
                  <span class="text-info" style="color: blue;">-</span></td>
                </tr>
                <tr>
                  <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; ชื่อเดิม</td>
                  <td style="color: green;" align="left"><span class="text-info">-</span></td>
                  <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; สถานะการมีชีวิต</td>
                  <td style="color: green;" align="left"><span class="text-info">-</span></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    </br>
  </div>${this.loadReportDetail()}`);
      console.log('1.1');
    } else {
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);

      for (let i = 0; i < this.results.length; i++) {
        this.imageEncode(this.results[i].image);
        this.topPdf.push(`<div class="row" ng-model="Dxc_Model_Dopa_Citizen">
        <span class="report-section-title"
        style="font-size: 20px; font-weight: bold; color: blue; border: 1; border-color: black;">ข้อมูลทะเบียนราษฎร์</span>
        <table style="width: 100%;">
        <tbody>
          <tr>
            <td style="width: 40%;">
              <a class="colorbox-element" href="#">
                <img src="${this.imageSrc}" width="300px" />
              </a>
              <strong > ${this.changeNull(this.results[i].citizenCardNumber)}</strong>
              <br />
              <strong >${this.changeNull(this.results[i].firstName)} ${this.changeNull(this.results[i].lastName)}</strong>
            </td>
            <td style="width: 60%;">
              <table style="width: 100%;margin-top: 0px;margin-right: 30px;">
              <tbody>
              <tr>
                <td style="font-weight:bold;" align="left"> &nbsp; &nbsp; &nbsp; ชื่อ </td>
                <td align="left">
                <span class="text-info" align="left" style="color: blue;">${this.changeNull(this.results[i].firstName)}</span></td>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; นามสกุล</td>
                <td align="left">
                <span class="text-info" align="left" style="color: blue;">${this.changeNull(this.results[i].lastName)}</span></td>
              </tr>
              <tr>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; เพศ</td>
                <td align="left">
                <span class="text-info" style="color: blue;">${this.changeNull(this.results[i].sex)}</span></td>
              </tr>
              <tr>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; เลขบัตรประชาชน</td>
                <td align="left">
                <span class="text-info" style="color: blue;">${this.changeNull(this.results[i].citizenCardNumber)}</span></td>
              </tr>
              <tr>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; เกิดวันที่</td>
                <td align="left"><span class="text-info" style="color: blue;">${this.changeNull(this.results[i].dateOfBirth)}</span></td>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; อายุ</td>
                <td align="left" style="color: blue;"><span class="text-info">${this.changeNull(this.results[i].age)}</span></td>
              </tr>
              <tr>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; สัญชาติ</td>
                <td align="left" style="color: blue;"><span class="text-info">${this.changeNull(this.results[i].nationality)}</span></td>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; ศาสนา</td>
                <td align="left" style="color: blue;"><span class="text-info">${this.changeNull(this.results[i].religion)}</span></td>
              </tr>
              <tr>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; ชื่อบิดา</td>
                <td align="left">
                <span class="text-info" style="color: blue;">${this.changeNull(this.results[i].fatherFullName)}</span></td>
              </tr>
              <tr>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; ชื่อมารดา</td>
                <td align="left">
                <span class="text-info" style="color: blue;">${this.changeNull(this.results[i].motherFullName)}</span></td>
              </tr>
              <tr>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; ชื่อเดิม</td>
                <td style="color: green;" align="left"><span class="text-info">${this.changeNull(this.results[i].changeNames)}</span></td>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; สถานะการมีชีวิต</td>
                <td style="color: green;" align="left"><span class="text-info">${this.changeNull(this.results[i].personalStatus)}
                </span></td>
              </tr>
            </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>${this.loadReportDetail()}`);
        // }
      }
      console.log('1.2');
    }
  }

  public getalgationPdf() {
    const schema = environment.qm.sub[0]['dopa'].sub[0]['citizen'].schema;

    if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {
      this.algationPdf = [];
    } else {
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.loadReportDetail();
      for (let i = 0; i < this.results.length; i++) {
        this.algationPdf.push(``); // Dop
        console.log('DOP.allegation' + this.algationPdf[i]);
      }

      // console.log('4.2' + this.results[0].caseName);
    }
  }

  public getAddressCitizenPdf() {
    const schema = environment.qm.sub[0]['dopa'].sub[0]['citizen'].schema;
    if (localStorage.getItem(schema + 'Results') === null) {
      this.addressCitizenPdf = [`<div class="row" ng-model="Dxc_Model_Dopa_Citizen">
      <div
      style="font-size: 20px; font-weight: bold; color: blue; border: 1; border-color: black;" align="center">ข้อมูลทะเบียนราษฎร์</div>
      </br></br>
      <table style="width: 100%;">
      <tbody>
        <tr>
          <td style="width: 40%;">
            <a class="colorbox-element" href="#">
            <img src="https://sv1.picz.in.th/images/2020/01/14/RiHz5Q.png" alt="RiHz5Q.png" border="0" width="300px"/>
            </a>
            <div align="center">-</div>
            <br />
            <div align="center">-</div>
          </td>
          <td style="width: 60%;">
            <table style="width: 100%;margin-top: 0px;margin-right: 30px;">
            <tbody>
            <tr>
              <td style="font-weight:bold;" align="left"> &nbsp; &nbsp; &nbsp; ชื่อ </td>
              <td align="left">
              <span class="text-info" align="left" style="color: blue;">-</span></td>
              <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; นามสกุล</td>
              <td align="left">
              <span class="text-info" align="left" style="color: blue;">-</span></td>
            </tr>
            <tr>
              <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; เพศ</td>
              <td align="left">
              <span class="text-info" style="color: blue;">-</span></td>
            </tr>
            <tr>
              <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; เลขบัตรประชาชน</td>
              <td align="left">
              <span class="text-info" style="color: blue;">-</span></td>
            </tr>
            <tr>
              <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; เกิดวันที่</td>
              <td align="left"><span class="text-info" style="color: blue;">-</span></td>
              <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; อายุ</td>
              <td align="left" style="color: blue;"><span class="text-info">-</span></td>
            </tr>
            <tr>
              <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; สัญชาติ</td>
              <td align="left" style="color: blue;"><span class="text-info">-</span></td>
              <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; ศาสนา</td>
              <td align="left" style="color: blue;"><span class="text-info">-</span></td>
            </tr>
            <tr>
              <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; ชื่อบิดา</td>
              <td align="left">
              <span class="text-info" style="color: blue;">-</span></td>
            </tr>
            <tr>
              <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; ชื่อมารดา</td>
              <td align="left">
              <span class="text-info" style="color: blue;">-</span></td>
            </tr>
            <tr>
              <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; ชื่อเดิม</td>
              <td style="color: green;" align="left"><span class="text-info">-</span></td>
              <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; สถานะการมีชีวิต</td>
              <td style="color: green;" align="left"><span class="text-info">-</span></td>
            </tr>
            <tr>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; บ้านเลขที่</td>
                <td align="left">
                <span class="text-info" align="left" style="color: blue;">-</span></td>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; หมู่ที่</td>
                <td align="left">
                <span class="text-info" style="color: blue;">-</span></td>
              </tr>
              <tr>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; ตรอก</td>
                <td align="left">
                <span class="text-info" style="color: blue;">-</span></td>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; ซอย</td>
                <td align="left">
                <span class="text-info" style="color: blue;">-</span></td>
              </tr>
              <tr>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; ถนน</td>
                <td align="left" style="color: blue;"><span class="text-info">-</span></td>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; ตำบล</td>
                <td align="left" style="color: blue;"><span class="text-info">-</span></td>
              </tr>
              <tr>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; อำเภอ</td>
                <td style="color: green;" align="left"><span class="text-info">-</span></td>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; จังหวัด</td>
                <td style="color: green;" align="left"><span class="text-info">-</span></td>
              </tr>
              <tr>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; รหัสไปรษณีย์</td>
                <td align="left" style="color: blue;"><span class="text-info">-</span></td>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; เบอร์โทรศัพท์</td>
                <td align="left" style="color: blue;"><span class="text-info">-</span></td>
              </tr>
              <tr>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; วันที่บันทึกข้อมูล</td>
                <td align="left" style="color: blue;"><span class="text-info">-</span></td>
              </tr>
          </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </tbody>
    </table>
    </br></br>
  </div>`];
      console.log('1.1');
    } else {
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);

      for (let i = 0; i < this.results.length; i++) {
        this.imageEncode(this.results[i].image);
        this.addressCitizenPdf.push(`<div class="row" ng-model="Dxc_Model_Dopa_Citizen">
        <span class="report-section-title"
        style="font-size: 20px; font-weight: bold; color: blue; border: 1; border-color: black;">ข้อมูลทะเบียนราษฎร์</span>
        <table style="width: 100%;">
        <tbody>
          <tr>
            <td style="width: 40%;">
              <a class="colorbox-element" href="#">
                <img src="${this.imageSrc}" width="300px" />
              </a>
              <strong > ${this.changeNull(this.results[i].citizenCardNumber)}</strong>
              <br />
              <strong >${this.changeNull(this.results[i].firstName)} ${this.changeNull(this.results[i].lastName)}</strong>
            </td>
            <td style="width: 60%;">
              <table style="width: 100%;margin-top: 0px;margin-right: 30px;">
                <tbody>
                <tr>
                <td style="font-weight:bold;" align="left"> &nbsp; &nbsp; &nbsp; ชื่อ </td>
                <td align="left">
                <span class="text-info" align="left" style="color: blue;">${this.changeNull(this.results[i].firstName)}</span></td>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; นามสกุล</td>
                <td align="left">
                <span class="text-info" align="left" style="color: blue;">${this.changeNull(this.results[i].lastName)}</span></td>
              </tr>
              <tr>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; เพศ</td>
                <td align="left">
                <span class="text-info" style="color: blue;">${this.changeNull(this.results[i].sex)}</span></td>
              </tr>
              <tr>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; เลขบัตรประชาชน</td>
                <td align="left">
                <span class="text-info" style="color: blue;">${this.changeNull(this.results[i].citizenCardNumber)}</span></td>
              </tr>
              <tr>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; เกิดวันที่</td>
                <td align="left"><span class="text-info" style="color: blue;">${this.changeNull(this.results[i].dateOfBirth)}</span></td>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; อายุ</td>
                <td align="left" style="color: blue;"><span class="text-info">${this.changeNull(this.results[i].age)}</span></td>
              </tr>
              <tr>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; สัญชาติ</td>
                <td align="left" style="color: blue;"><span class="text-info">${this.changeNull(this.results[i].nationality)}</span></td>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; ศาสนา</td>
                <td align="left" style="color: blue;"><span class="text-info">${this.changeNull(this.results[i].religion)}</span></td>
              </tr>
              <tr>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; ชื่อบิดา</td>
                <td align="left">
                <span class="text-info" style="color: blue;">${this.changeNull(this.results[i].fatherFullName)}</span></td>
              </tr>
              <tr>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; ชื่อมารดา</td>
                <td align="left">
                <span class="text-info" style="color: blue;">${this.changeNull(this.results[i].motherFullName)}</span></td>
              </tr>
              <tr>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; ชื่อเดิม</td>
                <td style="color: green;" align="left"><span class="text-info">${this.changeNull(this.results[i].changeNames)}</span></td>
                <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; สถานะการมีชีวิต</td>
                <td style="color: green;" align="left"><span class="text-info">${this.changeNull(this.results[i].personalStatus)}
                </span></td>
              </tr>
                  <tr>
                    <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; บ้านเลขที่</td>
                    <td align="left">
                    <span class="text-info" align="left" style="color: blue;">${this.changeNull(this.results[i].homeNumber)}</span></td>
                    <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; หมู่ที่</td>
                    <td align="left">
                    <span class="text-info" style="color: blue;">${this.changeNull(this.results[i].homeMoo)}</span></td>
                    <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; ตรอก</td>
                    <td align="left">
                    <span class="text-info" style="color: blue;">${this.changeNull(this.results[i].homeTrock)}</span></td>
                    <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; ซอย</td>
                    <td align="left">
                    <span class="text-info" style="color: blue;">${this.changeNull(this.results[i].homeSoy)}</span></td>
                </tr>
                <tr>
                  <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; ถนน</td>
                  <td align="left" style="color: blue;"><span class="text-info">${this.changeNull(this.results[i].homeRoad)}</span></td>
                  <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; ตำบล</td>
                  <td align="left" style="color: blue;"><span class="text-info">${this.changeNull(this.results[i].homeTumbon)}</span></td>
                  <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; อำเภอ</td>
                  <td style="color: green;" align="left"><span class="text-info">${this.changeNull(this.results[i].homeAmphur)}</span></td>
                  <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; จังหวัด</td>
                  <td style="color: green;" align="left"><span class="text-info">
                  ${this.changeNull(this.results[i].homeProvince)}</span></td>
                </tr>
                <tr>
                  <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; รหัสไปรษณีย์</td>
                  <td align="left" style="color: blue;"><span class="text-info">${this.changeNull(this.results[i].personAddressPostalCode)}
                  </span></td>
                  <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; เบอร์โทรศัพท์</td>
                  <td align="left" style="color: blue;"><span class="text-info">${this.changeNull(this.results[i].telephoneNumber)}
                  </span></td>
                  <td style="font-weight:bold;" align="left">&nbsp; &nbsp; &nbsp; วันที่บันทึกข้อมูล</td>
                  <td align="left" style="color: blue;"><span class="text-info">${this.changeNull(this.results[i].dataSubmitDate)}
                  </span></td>
                </tr>
                </tbody>
              </table>
            </td>
          </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>${this.loadReportDetail()}`);
      }
      console.log('1.2');
    }
  }

  formatDate(dateOfBirth: string): string {

    const date = new Date(dateOfBirth);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear() + 543;
    if (dateOfBirth === 'null') {
      return '-';
    } else {
      return `${day}/${month}/${year}`;
    }
  }
  changeSex(sex: string) {
    if (sex === 'MALE') {
      return 'ชาย';
    } else if (sex === 'FEMALE') {
      return 'หญิง';
    } else if (sex === 'OTHER') {
      return 'อื่นๆ';
    } else if (sex === 'null') {
      return '-';
    }
  }
  changeNull(selectData: string) {
    if (selectData == null) {
      return '-';
    } else {
      return selectData;
    }
  }
  imageEncode(imageCode) {
    const hex = imageCode;
    const bytes = [];
    let str = '';
    for (let i = 0; i < hex.length - 1; i += 2) {
      bytes.push(parseInt(hex.substr(i, 2), 16));
    }
    str = String.fromCharCode.apply(String, bytes);
    const image = 'data:image/png;base64,' + btoa(str);
    this.imageSrc = image;
    console.log(this.imageSrc);
  }
  loadReportDetail() {
    if (localStorage.getItem('reportName') !== null) {
      const reportName = localStorage.getItem('reportName');
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
     * Getter $addressCitizenPdf
     * @return {string[]}
     */
  public get $addressCitizenPdf(): string[] {
    return this.addressCitizenPdf;
  }

  /**
   * Setter $addressCitizenPdf
   * @param {string[]} value
   */
  public set $addressCitizenPdf(value: string[]) {
    this.addressCitizenPdf = value;
  }

  /**
   * Getter $topPdf
   * @return {string[]}
   */
  public get $topPdf(): string[] {
    return this.topPdf;
  }

  /**
   * Setter $topPdf
   * @param {string[]} value
   */
  public set $topPdf(value: string[]) {
    this.topPdf = value;
  }


  /**
   * Getter $results
   * @return {Dxc_Model_Dopa_Citizen[]}
   */
  public get $results(): Dxc_Model_Dopa_Citizen[] {
    return this.results;
  }

  /**
   * Setter $results
   * @param {Dxc_Model_Dopa_Citizen[]} value
   */
  public set $results(value: Dxc_Model_Dopa_Citizen[]) {
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
   * Getter $listLefts
   * @return {any[]}
   */
  public get $listLefts(): any[] {
    return this.listLefts;
  }

  /**
   * Setter $listLefts
   * @param {any[]} value
   */
  public set $listLefts(value: any[]) {
    this.listLefts = value;
  }

  /**
   * Getter $listAlgations
   * @return {any[]}
   */
  public get $listAlgations(): any[] {
    return this.listAlgations;
  }

  /**
   * Setter $listAlgations
   * @param {any[]} value
   */
  public set $listAlgations(value: any[]) {
    this.listAlgations = value;
  }

  /**
   * Getter $listNormals
   * @return {any[]}
   */
  public get $listNormals(): any[] {
    return this.listNormals;
  }

  /**
   * Setter $listNormals
   * @param {any[]} value
   */
  public set $listNormals(value: any[]) {
    this.listNormals = value;
  }

  /**
   * Getter $listNormalPersons
   * @return {any[]}
   */
  public get $listNormalPersons(): any[] {
    return this.listNormalPersons;
  }

  /**
   * Setter $listNormalPersons
   * @param {any[]} value
   */
  public set $listNormalPersons(value: any[]) {
    this.listNormalPersons = value;
  }

  /**
   * Getter $algationPdf
   * @return {string[]}
   */
  public get $algationPdf(): string[] {
    return this.algationPdf;
  }

  /**
   * Setter $algationPdf
   * @param {string[]} value
   */
  public set $algationPdf(value: string[]) {
    this.algationPdf = value;
  }

}
