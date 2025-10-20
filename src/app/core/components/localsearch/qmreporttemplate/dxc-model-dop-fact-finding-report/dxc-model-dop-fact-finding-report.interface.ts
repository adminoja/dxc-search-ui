import { Dxc_Model_Dop_Fact_Finding_Report } from '../../../../shared/models/Dxc_Model_Dop_Fact_Finding_Report';
import { Utils } from '../../../../shared/utils/Utils';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { Injectable } from "@angular/core";

export interface IReportDopFactFindingReport {
  model: Dxc_Model_Dop_Fact_Finding_Report;
}

@Injectable()
export class DopFactFindingReportMetadata {

  private results: Dxc_Model_Dop_Fact_Finding_Report[];
  private obj: string;
  private show: boolean;

  private allegationDoc: string[];
  private util: Utils;
  private algationPdf: string[];
  private addressPrisonerPdf: string[];
  private count: number;
  private algationPdfCount: string;
  reportName: string;
  reportOfTime: string;
  reportOfDate: string;
  html: string;
  private resultsContact: Dxc_Model_Dop_Fact_Finding_Report[];
  private countContact: number;
  private objContact: string;
  private showContact: boolean;

  constructor() {
    this.util = new Utils();
    this.allegationDoc = [];
    this.algationPdf = [];
    this.results = [];
    this.addressPrisonerPdf = [];
    this.count = 0;
    this.algationPdfCount = '';
    //Contact
    this.resultsContact = [];
    this.countContact = 0;
  }
  public getHtml(selectData: Dxc_Model_Dop_Fact_Finding_Report, title: string) {

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
                <br /><br />
                <div class="ml-3">
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20 "><b>ประกอบการพิจารณา</b></p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.consideration}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20 ">บัตรประจำตัวประชาชน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.citizenCardNumber}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">คดีอาญาหมายเลขแดงที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.redNo}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ศาล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.court}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เรือนจำ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.prison}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">สำนักงานคุมประพฤติ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.officeName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขทะเบียนที</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.registerNumber}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20"><b>ข้อมูลคดี</b></p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20"></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อ-ชื่อสกุลจริง น.ช./น.ญ.</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.firstName} ${selectData.lastName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ฐานความผิด</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.guiltyName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20"><b>นักโทษเด็ดขาด</b></p>
                        </div>
                        <div class="col-3">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อ-ชื่อสกุล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.firstName} ${selectData.lastName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อเล่น</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.nickName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">สถานภาพ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.status}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20"><b>ข้อมูลผู้อุปการะ</b></p>
                        </div>
                        <div class="col-3"> </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อ-ชื่อสกุล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.sponsorFristName} ${selectData.sponsorLastName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">เกี่ยวข้องกับนักโทษผู้นี้เป็น</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.sponsorStatus}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">อยู่บ้านเลขที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.houseNumber}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">หมู่ที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.village}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ถนน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.road}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ตำบล/แขวง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.subDistrict}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">อำเภอ/เขต</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.district}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">จังหวัด</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.prvince}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">โทรศัพท์</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.phoneNumber}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ความเห็นของพนักงานคุมประพฤติ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.commentProbationOfficer}</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
      </html>
      `;

  }
  public viewgetHtml(selectData: Dxc_Model_Dop_Fact_Finding_Report, title: string) {

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
            <br /><br />
            <div class="ml-3">
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20 "><b>ประกอบการพิจารณา</b></p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.consideration}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20 ">บัตรประจำตัวประชาชน</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.citizenCardNumber}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">คดีอาญาหมายเลขแดงที่</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.redNo}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">ศาล</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.court}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">เรือนจำ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.prison}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">สำนักงานคุมประพฤติ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.officeName}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">เลขทะเบียนที</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.registerNumber}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20"><b>ข้อมูลคดี</b></p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20"></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">ชื่อ-ชื่อสกุลจริง น.ช./น.ญ.</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.firstName} ${selectData.lastName}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">ฐานความผิด</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.guiltyName}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20"><b>นักโทษเด็ดขาด</b></p>
                    </div>
                    <div class="col-3">
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">ชื่อ-ชื่อสกุล</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.firstName} ${selectData.lastName}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">ชื่อเล่น</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.nickName}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">สถานภาพ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.status}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20"><b>ข้อมูลผู้อุปการะ</b></p>
                    </div>
                    <div class="col-3"> </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">ชื่อ-ชื่อสกุล</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.sponsorFristName} ${selectData.sponsorLastName}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">เกี่ยวข้องกับนักโทษผู้นี้เป็น</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.sponsorStatus}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">อยู่บ้านเลขที่</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.houseNumber}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">หมู่ที่</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.village}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">ถนน</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.road}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">ตำบล/แขวง</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.subDistrict}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">อำเภอ/เขต</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.district}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">จังหวัด</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.prvince}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">โทรศัพท์</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.phoneNumber}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">ความเห็นของพนักงานคุมประพฤติ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.commentProbationOfficer}</p>
                    </div>
                </div>
            </div>
        </div>
      </body>
      </html>
      `;
  }

  public viewgetHtmlSingleReport(selectData: Dxc_Model_Dop_Fact_Finding_Report, title: string) {

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
          <br /><br />
          <div class="ml-3">
              <div class="row">
                  <div class="col-3">
                      <p class="text-white font-20 "><b>ประกอบการพิจารณา</b></p>
                  </div>
                  <div class="col-3">
                      <p class="text-success font-20">${selectData.consideration}</p>
                  </div>
              </div>
              <div class="row">
                  <div class="col-3">
                      <p class="text-white font-20">คดีอาญาหมายเลขแดงที่</p>
                  </div>
                  <div class="col-3">
                      <p class="text-success font-20">${selectData.redNo}</p>
                  </div>
                  <div class="col-3">
                      <p class="text-white font-20">ศาล</p>
                  </div>
                  <div class="col-3">
                      <p class="text-success font-20">${selectData.court}</p>
                  </div>
              </div>
              <div class="row">
                  <div class="col-3">
                      <p class="text-white font-20">เรือนจำ</p>
                  </div>
                  <div class="col-3">
                      <p class="text-success font-20">${selectData.prison}</p>
                  </div>
                  <div class="col-3">
                      <p class="text-white font-20">สำนักงานคุมประพฤติ</p>
                  </div>
                  <div class="col-3">
                      <p class="text-success font-20">${selectData.officeName}</p>
                  </div>
              </div>
              <div class="row">
                  <div class="col-3">
                      <p class="text-white font-20">เลขทะเบียนที</p>
                  </div>
                  <div class="col-3">
                      <p class="text-success font-20">${selectData.registerNumber}</p>
                  </div>
              </div>
              <div class="row">
                  <div class="col-3">
                      <p class="text-white font-20"><b>ข้อมูลคดี</b></p>
                  </div>
                  <div class="col-3">
                      <p class="text-success font-20"></p>
                  </div>
              </div>
              <div class="row">
                  <div class="col-3">
                      <p class="text-white font-20">ชื่อ-ชื่อสกุลจริง น.ช./น.ญ.</p>
                  </div>
                  <div class="col-3">
                      <p class="text-success font-20">${selectData.firstName} ${selectData.lastName}</p>
                  </div>
                  <div class="col-3">
                      <p class="text-white font-20">ฐานความผิด</p>
                  </div>
                  <div class="col-3">
                      <p class="text-success font-20">${selectData.guiltyName}</p>
                  </div>
              </div>
              <div class="row">
                  <div class="col-3">
                      <p class="text-white font-20"><b>นักโทษเด็ดขาด</b></p>
                  </div>
                  <div class="col-3">
                  </div>
              </div>
              <div class="row">
                  <div class="col-3">
                      <p class="text-white font-20">ชื่อ-ชื่อสกุล</p>
                  </div>
                  <div class="col-3">
                      <p class="text-success font-20">${selectData.firstName} ${selectData.lastName}</p>
                  </div>
                  <div class="col-3">
                      <p class="text-white font-20">ชื่อเล่น</p>
                  </div>
                  <div class="col-3">
                      <p class="text-success font-20">${selectData.nickName}</p>
                  </div>
              </div>
              <div class="row">
                  <div class="col-3">
                      <p class="text-white font-20">สถานภาพ</p>
                  </div>
                  <div class="col-3">
                      <p class="text-success font-20">${selectData.status}</p>
                  </div>
              </div>
              <div class="row">
                  <div class="col-3">
                      <p class="text-white font-20"><b>ข้อมูลผู้อุปการะ</b></p>
                  </div>
                  <div class="col-3"> </div>
              </div>
              <div class="row">
                  <div class="col-3">
                      <p class="text-white font-20">ชื่อ-ชื่อสกุล</p>
                  </div>
                  <div class="col-3">
                      <p class="text-success font-20">${selectData.sponsorFristName} ${selectData.sponsorLastName}</p>
                  </div>
                  <div class="col-3">
                      <p class="text-white font-20">เกี่ยวข้องกับนักโทษผู้นี้เป็น</p>
                  </div>
                  <div class="col-3">
                      <p class="text-success font-20">${selectData.sponsorStatus}</p>
                  </div>
              </div>
              <div class="row">
                  <div class="col-3">
                      <p class="text-white font-20">อยู่บ้านเลขที่</p>
                  </div>
                  <div class="col-3">
                      <p class="text-success font-20">${selectData.houseNumber}</p>
                  </div>
                  <div class="col-3">
                      <p class="text-white font-20">หมู่ที่</p>
                  </div>
                  <div class="col-3">
                      <p class="text-success font-20">${selectData.village}</p>
                  </div>
              </div>
              <div class="row">
                  <div class="col-3">
                      <p class="text-white font-20">ถนน</p>
                  </div>
                  <div class="col-3">
                      <p class="text-success font-20">${selectData.road}</p>
                  </div>
                  <div class="col-3">
                      <p class="text-white font-20">ตำบล/แขวง</p>
                  </div>
                  <div class="col-3">
                      <p class="text-success font-20">${selectData.subDistrict}</p>
                  </div>
              </div>
              <div class="row">
                  <div class="col-3">
                      <p class="text-white font-20">อำเภอ/เขต</p>
                  </div>
                  <div class="col-3">
                      <p class="text-success font-20">${selectData.district}</p>
                  </div>
                  <div class="col-3">
                      <p class="text-white font-20">จังหวัด</p>
                  </div>
                  <div class="col-3">
                      <p class="text-success font-20">${selectData.prvince}</p>
                  </div>
              </div>
              <div class="row">
                  <div class="col-3">
                      <p class="text-white font-20">โทรศัพท์</p>
                  </div>
                  <div class="col-3">
                      <p class="text-success font-20">${selectData.phoneNumber}</p>
                  </div>
              </div>
              <div class="row">
                  <div class="col-3">
                      <p class="text-white font-20">ความเห็นของพนักงานคุมประพฤติ</p>
                  </div>
                  <div class="col-3">
                      <p class="text-success font-20">${selectData.commentProbationOfficer}</p>
                  </div>
              </div>
          </div>
      </div>
    </body>
    </html>
      `;
  }

//   public getSearchData() {
//     // const schema = environment.qm.sub[0]['doc'].sub[0]['prisoner'].schema;
//     const schema = 'doc-prisoner';
//     console.log(typeof (localStorage.getItem(schema + 'Results')));
//     if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {
//       this.allegationDoc = []; // Doc

//       console.log('ผู้ต้องขัง (คดีที่พิพากษาแล้ว) null');
//     } else {
//       this.show = true;
//       this.obj = localStorage.getItem(schema + 'Results');
//       this.results = JSON.parse(this.obj);
//       this.count = this.results.length; // นับจำนวนรายการ
//       console.log('prisonerObj' + this.obj);


//       for (let i = 0; i < this.results.length; i++) {
//         if (this.results[i].allegation !== null) {
//           this.allegationDoc.push("<tr><td style='border-bottom: black 1px dotted; text-align:center;' colspan='16'>"
//             + this.util.thaiNumber(i) + "." + this.results[i].allegation + "</td></tr>"); // Doc
//           console.log('DOC.allegation' + this.allegationDoc[i]);
//         } else {

//         }
//       }

//     }
//   }

//   public getSearchDataContact() {
//     const schema = 'doc-prisoner';
//       if (
//         localStorage.getItem(schema + '-contact-Results') === '[]' ||
//         localStorage.getItem(schema + '-contact-Results') === null
//       ) {
//         console.log('7.1');
//       } else {
//         this.showContact = true;
//         this.objContact = localStorage.getItem(schema + '-contact-Results');
//         this.resultsContact = JSON.parse(this.objContact);
//         this.countContact = this.resultsContact.length; // นับจำนวนรายการ
//       }
//   } 


//   public getalgationPdf() {
//     // const schema = environment.qm.sub[0]['doc'].sub[0]['prisoner'].schema;
//     const schema = 'doc-prisoner';
//     if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {
//       this.algationPdf = [];
//       console.log('ผู้ต้องขัง (คดีที่พิพากษาแล้ว) PDF null');
//     } else {
//       this.obj = localStorage.getItem(schema + 'Results');
//       this.results = JSON.parse(this.obj);
//       this.count = this.results.length; // นับจำนวนรายการ

//       if (this.count !== undefined) {
//         // PDF ค้นด้วยเลขบัตร
//         this.algationPdfCount = `<div class="col-md-11"
//           class="row card singlereport-timeline-item list-normal-design-head-collapse">
//           <span class="list-normal-design-underline depart">กรมราชทัณฑ์: </span>
//           <span class="list-normal-design-underline departdata">ผู้ต้องขัง (คดีที่พิพากษาแล้ว) </span>
//           <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ
//           </span>
//         </div>`;
//         this.loadReportDetail();
//         for (let i = 0; i < this.results.length; i++) {
//           this.algationPdf.push(`
//             <div class="col-md-11">
//               <div class="section-criminal-results"
//                 style="text-indent:25px;font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
//                 <span class="list-normal-design-underline depart">ผู้ต้องขัง (คดีที่พิพากษาแล้ว)</span>
//                 <div style="padding-left:15px;">
//                   <strong class="report-field-title">ชื่อ</strong>&nbsp;&nbsp;
//                   <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].firstName)}
//                   ${this.changeNull(this.results[i].lastName)}
//                   </span>&nbsp;&nbsp;
//                   <strong class="report-field-title">ถูกศาลพิพากษาจำคุกเมื่อวันที่</strong>&nbsp;&nbsp;
//                   <span class="report-field-value" style="text-decoration:underline">-</span>&nbsp;&nbsp;
//                   <strong class="report-field-title">โทษฐาน</strong>&nbsp;&nbsp;
//                   <span class="report-field-value" style="text-decoration:underline">
//                   ${this.changeNull(this.results[i].allegation)}</span>&nbsp;&nbsp;
//                   <strong class="report-field-title">จำคุกอยู่ที่</strong>&nbsp;&nbsp;
//                   <span class="report-field-value" style="text-decoration:underline">
//                   ${this.changeNull(this.results[i].prisonName)}</span>&nbsp;&nbsp;
//                   <strong class="report-field-title">ย้ายมาจาก</strong>&nbsp;&nbsp;
//                   <span class="report-field-value" style="text-decoration:underline">-</span>&nbsp;&nbsp;
//                   <strong class="report-field-title">เมื่อวันที่</strong>&nbsp;&nbsp;
//                   <span class="report-field-value" style="text-decoration:underline">-</span>&nbsp;&nbsp;
//                   <strong class="report-field-title">ครบกำหนดปล่อยตัวตามศาลสั่ง</strong>&nbsp;&nbsp;
//                   <span class="report-field-value" style="text-decoration:underline">-</span>&nbsp;&nbsp;
//                   <strong class="report-field-title">วันที่ได้รับโทษ</strong>&nbsp;&nbsp;
//                   <span class="report-field-value" style="text-decoration:underline">
//                   ${this.formatDate(this.results[i].sentenceDate)}</span>&nbsp;&nbsp;
//                   <strong class="report-field-title">วันที่พ้นโทษ</strong>&nbsp;&nbsp;
//                   <span class="report-field-value" style="text-decoration:underline">
//                   ${this.formatDate(this.results[i].releaseDate)}</span>&nbsp;&nbsp;
//                 </div>
//             </div>
//           </div>${this.loadReportDetail()}`
//           );
//           console.log('DOC.allegation: ' + this.algationPdf[i])
//         }
//       } else {
//         // PDF ค้นด้วยชื่อ-สกุล
//         const results = JSON.parse(this.obj);
//         this.algationPdfCount = `<div class="col-md-11"
//           class="row card singlereport-timeline-item list-normal-design-head-collapse">
//           <span class="list-normal-design-underline depart">กรมราชทัณฑ์: </span>
//           <span class="list-normal-design-underline departdata">ผู้ต้องขัง (คดีที่พิพากษาแล้ว)</span>
//         </div>`;
//         this.loadReportDetail();
//         this.algationPdf.push(`
//           <div class="col-md-11">
//             <div class="section-criminal-results"
//               style="text-indent:25px;font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
//               <span class="list-normal-design-underline depart">ผู้ต้องขัง (คดีที่พิพากษาแล้ว)</span>
//               <div style="padding-left:15px;">
//                 <strong class="report-field-title">ชื่อ</strong>&nbsp;&nbsp;
//                 <span class="report-field-value" style="text-decoration:underline">${this.changeNull(results.firstName)}
//                 ${this.changeNull(results.lastName)}
//                 </span>&nbsp;&nbsp;
//                 <strong class="report-field-title">ถูกศาลพิพากษาจำคุกเมื่อวันที่</strong>&nbsp;&nbsp;
//                 <span class="report-field-value" style="text-decoration:underline">-</span>&nbsp;&nbsp;
//                 <strong class="report-field-title">โทษฐาน</strong>&nbsp;&nbsp;
//                 <span class="report-field-value" style="text-decoration:underline">
//                 ${this.changeNull(results.allegation)}</span>&nbsp;&nbsp;
//                 <strong class="report-field-title">จำคุกอยู่ที่</strong>&nbsp;&nbsp;
//                 <span class="report-field-value" style="text-decoration:underline">
//                 ${this.changeNull(results.prisonName)}</span>&nbsp;&nbsp;
//                 <strong class="report-field-title">ย้ายมาจาก</strong>&nbsp;&nbsp;
//                 <span class="report-field-value" style="text-decoration:underline">-</span>&nbsp;&nbsp;
//                 <strong class="report-field-title">เมื่อวันที่</strong>&nbsp;&nbsp;
//                 <span class="report-field-value" style="text-decoration:underline">-</span>&nbsp;&nbsp;
//                 <strong class="report-field-title">ครบกำหนดปล่อยตัวตามศาลสั่ง</strong>&nbsp;&nbsp;
//                 <span class="report-field-value" style="text-decoration:underline">-</span>&nbsp;&nbsp;
//                 <strong class="report-field-title">วันที่ได้รับโทษ</strong>&nbsp;&nbsp;
//                 <span class="report-field-value" style="text-decoration:underline">
//                 ${this.formatDate(results.sentenceDate)}</span>&nbsp;&nbsp;
//                 <strong class="report-field-title">วันที่พ้นโทษ</strong>&nbsp;&nbsp;
//                 <span class="report-field-value" style="text-decoration:underline">
//                 ${this.formatDate(results.releaseDate)}</span>&nbsp;&nbsp;
//               </div>
//             </div>
//           </div>${this.loadReportDetail()}`
//         );
//         console.log('DOC.allegation: ' + this.algationPdf)
//       }
//     }
//   }

//   public getAddressPrisonerPdf() {
//     const schema = environment.qm.sub[0]['doc'].sub[0]['prisoner'].schema;
//     if (localStorage.getItem(schema + 'Results') === null) {
//       this.addressPrisonerPdf = [];
//       console.log('1.1');
//     } else {
//       this.obj = localStorage.getItem(schema + 'Results');
//       this.results = JSON.parse(this.obj);

//       for (let i = 0; i < this.results.length; i++) {
//         this.addressPrisonerPdf.push(`
//         <div class="col-md-11">
//           <div class="section-criminal-results"
//             style="text-indent:25px;font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
//             <span style="text-decoration:underline; color: #0070C0; font-weight: bold; " class="report-section-source-title">
//             กรมราชทัณฑ์ </span>
//             <span style="text-decoration:underline; color: #C00000;font-weight: bold; font-style: italic;"
//             class="report-section-data-title">ผู้ต้องขัง (คดีที่พิพากษาแล้ว)</span>
//             <div style="padding-left:15px;">
//               <strong class="report-field-title">เลขบัตรประชาชน</strong>&nbsp;&nbsp;
//               <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].citizenCardNumber)}
//               </span>&nbsp;&nbsp;
//               <strong class="report-field-title">ชื่อ</strong>&nbsp;&nbsp;
//               <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].firstName)}
//               </span>&nbsp;&nbsp;
//               <strong class="report-field-title">นามสกุล</strong>&nbsp;&nbsp;
//               <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].lastName)}
//               </span>&nbsp;&nbsp;
//               <strong class="report-field-title">เพศ</strong>&nbsp;&nbsp;
//               <span class="report-field-value" style="text-decoration:underline">${this.changeSex(this.results[i].sex)}
//               </span>&nbsp;&nbsp;
//               <strong class="report-field-title">เลขที่</strong>&nbsp;&nbsp;
//               <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].addressNoText)}
//               </span>&nbsp;&nbsp;
//               <strong class="report-field-title">หมู่ที่</strong>&nbsp;&nbsp;
//               <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].addressMooText)}
//               </span>&nbsp;&nbsp;
//               <strong class="report-field-title">หมู่บ้าน</strong>&nbsp;&nbsp;
//               <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].addressMooBanText)}
//               </span>&nbsp;&nbsp;
//               <strong class="report-field-title">ถนน</strong>&nbsp;&nbsp;
//               <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].addressRoadText)}
//               </span>&nbsp;&nbsp;
//               <strong class="report-field-title">ซอย</strong>&nbsp;&nbsp;
//               <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].addressSoiText)}
//               </span>&nbsp;&nbsp;
//               <strong class="report-field-title">ตำบล</strong>&nbsp;&nbsp;
//               <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].addressTumbonText)}
//               </span>&nbsp;&nbsp;
//               <strong class="report-field-title">อำเภอ</strong>&nbsp;&nbsp;
//               <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].addressAmphurText)}
//               </span>&nbsp;&nbsp;
//               <strong class="report-field-title">จังหวัด</strong>&nbsp;&nbsp;
//               <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].addressProvinceText)}
//               </span>&nbsp;&nbsp;
//               <strong class="report-field-title">รหัสไปรษณีย์</strong>&nbsp;&nbsp;
//               <span class="report-field-value" style="text-decoration:underline">${this.changeNull(this.results[i].addressPostCode)}
//               </span>&nbsp;&nbsp;
//             </div>
//           </div>
//         </div>${this.loadReportDetail()}`);
//       }
//       console.log('1.2');
//     }
//   }

  changeNull(selectData: string) {
    if (selectData == null) {
      return '-';
    } else {
      return selectData;
    }
  }

  changeSex(sex: string) {
    if (sex == 'MALE') {
      return 'ชาย';
    } else if (sex == 'FEMALE') {
      return 'หญิง';
    } else if (sex == 'OTHER') {
      return 'อื่นๆ';
    } else if (sex == 'null') {
      return '-';
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
   * Getter $algationPdfCount
   * @return {string}
   */
  public get $algationPdfCount(): string {
    return this.algationPdfCount;
  }

  /**
   * Setter $algationPdfCount
   * @param {string} value
   */
  public set $algationPdfCount(value: string) {
    this.algationPdfCount = value;
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
   * Getter $addressPrisonerPdf
   * @return {string[]}
   */
  public get $addressPrisonerPdf(): string[] {
    return this.addressPrisonerPdf;
  }

  /**
   * Setter $addressPrisonerPdf
   * @param {string[]} value
   */
  public set $addressPrisonerPdf(value: string[]) {
    this.addressPrisonerPdf = value;
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

  /**
   * Getter $results
   * @return {Dxc_Model_Dop_Fact_Finding_Report[]}
   */
  public get $results(): Dxc_Model_Dop_Fact_Finding_Report[] {
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
   * Getter $allegationDoc
   * @return {string[] }
   */
  public get $allegationDoc(): string[] {
    return this.allegationDoc;
  }

  /**
   * Setter $results
   * @param {Dxc_Model_Dop_Fact_Finding_Report[]} value
   */
  public set $results(value: Dxc_Model_Dop_Fact_Finding_Report[]) {
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
   * Setter $allegationDoc
   * @param {string[] } value
   */
  public set $allegationDoc(value: string[]) {
    this.allegationDoc = value;
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

  public get $resultsContact(): Dxc_Model_Dop_Fact_Finding_Report[] {
    return this.resultsContact;
  }
  public set $resultsContact(value: Dxc_Model_Dop_Fact_Finding_Report[]) {
      this.resultsContact = value;
  }
  public get $countContact(): number {
      return this.countContact;
  }
  public set $countContact(value: number) {
      this.countContact = value;
  }
  public get $objContact(): string {
      return this.objContact;
  }
  public set $objContact(value: string) {
      this.objContact = value;
  }
  public get $showContact(): boolean {
      return this.showContact;
  }
  public set $showContact(value: boolean) {
      this.showContact = value;
  }

}
