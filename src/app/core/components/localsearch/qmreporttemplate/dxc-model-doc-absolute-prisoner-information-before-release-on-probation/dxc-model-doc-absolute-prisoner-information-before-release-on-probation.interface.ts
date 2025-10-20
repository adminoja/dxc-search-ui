import { Dxc_Model_Doc_Absolute_Prisoner_Information_Before_Release_On_Probation } from '../../../../shared/models/Dxc_Model_Doc_Absolute_Prisoner_Information_Before_Release_On_Probation';
import { Utils } from '../../../../shared/utils/Utils';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { Injectable } from "@angular/core";

export interface IReportDocAbsolutePrisonerInformationBeforeReleaseOnProbation {
  model: Dxc_Model_Doc_Absolute_Prisoner_Information_Before_Release_On_Probation;
}

@Injectable()
export class DocAbsolutePrisonerInformationBeforeReleaseOnProbationMetadata {

  private results: Dxc_Model_Doc_Absolute_Prisoner_Information_Before_Release_On_Probation[];
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
  private resultsContact: Dxc_Model_Doc_Absolute_Prisoner_Information_Before_Release_On_Probation[];
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
  public getHtml(selectData: Dxc_Model_Doc_Absolute_Prisoner_Information_Before_Release_On_Probation, title: string) {

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
                            <p class="text-white font-20 "><b>ตอนที่ 1</b></p>
                        </div>
                        <div class="col-9">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-9">
                            <p class="text-white font-20">ข้อมูลนักโทษเด็ดขาดก่อนปล่อยคุมประพฤติ โดยเจ้าหน้าที่เรือนจำ/ทัณฑสถาน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.fromPrison}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20 "><b>1.1 ข้อมูลคดี</b></p>
                        </div>
                        <div class="col-9">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">น.ช./น.ญ. (ชื่อ-สกุล)</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.firstName} ${selectData.lastName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">อายุ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.age}ปี</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขประจำตัวประชาชน 13 หลัก</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.citizenCardNumber}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อที่ใช้ในการกระทำความผิด</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.offenseNickName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20 "><b><u>คดีที่ 1</u></b></p>
                        </div>
                        <div class="col-9">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ความผิดฐาน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.guiltyName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">คดีของศาล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.courtCase}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">คดีอาญาหมายดำที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.blackNo}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">คดีอาญาหมายแดงที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.redNo}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">กำหนดโทษ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.imposePenalty}</p>
                        </div>
                    </div>
                
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">นับตั้งแต่วันที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.startDate}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ถึงวันที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.endDate}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">หักขัง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.imprisoned} วัน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">วันพ้นโทษ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.sentenceCompletionDate}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <p class="text-white font-20 "><b>1.2 ข้อมูลเกี่ยวกับผู้เสียหายคดีนี้และหรือคู่คดี (ให้ระบุรายละเอียด เช่น ชื่อ – สกุล ความสัมพันธ์ การเยียวยาหรือชดใช้ค่าเสียหาย)</b></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ความสัมพันธ์กับนักโทษ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.relationshipWithPrisoner}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-9">
                            <p class="text-white font-20 "><b>1.3 ประวัติภูมิหลัง</b></p>
                        </div>
                        <div class="col-3"></div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">วัน/เดือน/ปี เกิด</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.dateOfBirth}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">เชื้อชาติ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.ethnicty}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">สัญชาติ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.nationality}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ศาสนา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.religion}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">การศึกษา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.education}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">อาชีพก่อนต้องโทษ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.occupationBeforePunish}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">รายได้</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.income} บาท/ วัน/เดือน/ปี</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ก่อนต้องโทษมีภูมิลำเนาอยู่ที่บ้านเลขที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.addressBeforePunish}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">สถานะภาพ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.status}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">คู่สมรส ชื่อ – สกุล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.spouseName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ที่อยู่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.address}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">โทรศัพท์</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.phoneNumber}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">อาชีพ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.occupation}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">จำนวนบุตร</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.numberChildren} คน</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <p class="text-white font-20">คน (ระบุรายละเอียด เช่น อายุ และการศึกษาของบุตรแต่ละคน บุตรพักอาศัยหรืออยู่ในความดูแลของผู้ใด ฯลฯ)</p>
                        </div>
                        <div class="col-6">
                            <p class="text-success font-20">-</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">บิดา ชื่อ – สกุล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.fatherName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">อาชีพ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.occupationFather}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ที่อยู่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.addressFather}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">โทรศัพท์</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.phoneNumberFather}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">มารดา ชื่อ – สกุล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.motherName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">อาชีพ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.occupationMother}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ที่อยู่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.addressMother}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">โทรศัพท์</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.phoneNumberMother}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20"><b>1.4 ประวัติการกระทำผิด </b></p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">-</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">(1) เจ้าพนักงานตำรวจ สภ./สน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.policeName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">จับกุมในข้อหา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.arrestedCharges}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เมื่อวันที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.crimeDate}</p>
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
                            <p class="text-white font-20">คำพิพากษา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.judgement}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">เมื่อวันที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.judgementDate}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">วันพ้นโทษ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.releaseDate}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">จากเรือนจำ/ทัณฑสถาน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.fromPrison}</p>
                        </div>
                    </div>
                    
                    
                    <div class="row">
                        <div class="col-9">
                            <p class="text-white font-20"><b>1.6 การปรับเปลี่ยนพฤติกรรมและการพัฒนาพฤตินิสัย</b></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">สุขภาพ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.health}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">การเจ็บป่วย</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.sick}</p>
                        </div>
                    </div>
                </div>
            </div>
            ${selectData.wartermarks}
        </body>
      </html>
      `;

  }
  public viewgetHtml(selectData: Dxc_Model_Doc_Absolute_Prisoner_Information_Before_Release_On_Probation, title: string) {

    return this.html = `<html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <script>
          $(document).ready(function() {
            $('#confirmDocPrisonerBankrupt').click(function(){
              $('#docPrisonerBankrupt').modal('toggle'); 
              $('#docPrisonerBankrupt').on('hidden.bs.modal', function () {
                  $('body').addClass('modal-open');
              });
            });
            $('#close').click(function(){
              $('#docPrisonerBankrupt').modal('toggle');  
              $('#docPrisonerBankrupt').on('hidden.bs.modal', function () {
                  $('body').addClass('modal-open');
              });
            });
            $('#closeDocPrisonerBankrupt').click(function(){
              $('#docPrisonerBankrupt').modal('toggle');  
              $('#docPrisonerBankrupt').on('hidden.bs.modal', function () {
                  $('body').addClass('modal-open');
              });
            });
            $("#docPrisonerBankrupt").modal({
              show: false,
              backdrop: 'static'
            });
            $("#clickDocPrisonerBankrupt").click(function() {
            $("#docPrisonerBankrupt").modal("show");             
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
            <br /><br />
            <div class="ml-3">
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20 "><b>ตอนที่ 1</b></p>
                    </div>
                    <div class="col-9">
                    </div>
                </div>
                <div class="row">
                    <div class="col-9">
                        <p class="text-white font-20">ข้อมูลนักโทษเด็ดขาดก่อนปล่อยคุมประพฤติ โดยเจ้าหน้าที่เรือนจำ/ทัณฑสถาน</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.fromPrison}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20 "><b>1.1 ข้อมูลคดี</b></p>
                    </div>
                    <div class="col-9">
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">น.ช./น.ญ. (ชื่อ-สกุล)</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.firstName} ${selectData.lastName}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">อายุ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.age}ปี</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">เลขประจำตัวประชาชน 13 หลัก</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.citizenCardNumber}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">ชื่อที่ใช้ในการกระทำความผิด</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.offenseNickName}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20 "><b><u>คดีที่ 1</u></b></p>
                    </div>
                    <div class="col-9">
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">ความผิดฐาน</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.guiltyName}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">คดีของศาล</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.courtCase}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">คดีอาญาหมายดำที่</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.blackNo}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">คดีอาญาหมายแดงที่</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.redNo}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">กำหนดโทษ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.imposePenalty}</p>
                    </div>
                </div>
            
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">นับตั้งแต่วันที่</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.startDate}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">ถึงวันที่</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.endDate}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">หักขัง</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.imprisoned} วัน</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">วันพ้นโทษ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.sentenceCompletionDate}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p class="text-white font-20 "><b>1.2 ข้อมูลเกี่ยวกับผู้เสียหายคดีนี้และหรือคู่คดี (ให้ระบุรายละเอียด เช่น ชื่อ – สกุล ความสัมพันธ์ การเยียวยาหรือชดใช้ค่าเสียหาย)</b></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">ความสัมพันธ์กับนักโทษ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.relationshipWithPrisoner}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-9">
                        <p class="text-white font-20 "><b>1.3 ประวัติภูมิหลัง</b></p>
                    </div>
                    <div class="col-3"></div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">วัน/เดือน/ปี เกิด</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.dateOfBirth}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">เชื้อชาติ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.ethnicty}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">สัญชาติ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.nationality}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">ศาสนา</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.religion}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">การศึกษา</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.education}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">อาชีพก่อนต้องโทษ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.occupationBeforePunish}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">รายได้</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.income} บาท/ วัน/เดือน/ปี</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">ก่อนต้องโทษมีภูมิลำเนาอยู่ที่บ้านเลขที่</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.addressBeforePunish}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">สถานะภาพ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.status}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">คู่สมรส ชื่อ – สกุล</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.spouseName}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">ที่อยู่</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.address}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">โทรศัพท์</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.phoneNumber}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">อาชีพ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.occupation}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">จำนวนบุตร</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.numberChildren} คน</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <p class="text-white font-20">คน (ระบุรายละเอียด เช่น อายุ และการศึกษาของบุตรแต่ละคน บุตรพักอาศัยหรืออยู่ในความดูแลของผู้ใด ฯลฯ)</p>
                    </div>
                    <div class="col-6">
                        <p class="text-success font-20">-</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">บิดา ชื่อ – สกุล</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.fatherName}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">อาชีพ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.occupationFather}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">ที่อยู่</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.addressFather}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">โทรศัพท์</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.phoneNumberFather}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">มารดา ชื่อ – สกุล</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.motherName}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">อาชีพ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.occupationMother}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">ที่อยู่</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.addressMother}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">โทรศัพท์</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.phoneNumberMother}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20"><b>1.4 ประวัติการกระทำผิด </b></p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">-</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">(1) เจ้าพนักงานตำรวจ สภ./สน</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.policeName}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">จับกุมในข้อหา</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.arrestedCharges}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">เมื่อวันที่</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.crimeDate}</p>
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
                        <p class="text-white font-20">คำพิพากษา</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.judgement}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">เมื่อวันที่</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.judgementDate}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">วันพ้นโทษ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.releaseDate}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">จากเรือนจำ/ทัณฑสถาน</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.fromPrison}</p>
                    </div>
                </div>
                
                
                <div class="row">
                    <div class="col-9">
                        <p class="text-white font-20"><b>1.6 การปรับเปลี่ยนพฤติกรรมและการพัฒนาพฤตินิสัย</b></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">สุขภาพ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.health}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">การเจ็บป่วย</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.sick}</p>
                    </div>
                </div>
            </div>
        </div>
      </body>
      <div id="docPrisonerBankrupt" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
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
              <button type="button" id="closeDocPrisonerBankrupt" class="btn btn-danger">ยกเลิก</button>
              <a id="confirmDocPrisonerBankrupt" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.citizenCardNumber}/0/0/0/0/0">ตกลง</a>				
            </div>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
      </html>
      `;
  }



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
   * @return {Dxc_Model_Doc_Absolute_Prisoner_Information_Before_Release_On_Probation[]}
   */
  public get $results(): Dxc_Model_Doc_Absolute_Prisoner_Information_Before_Release_On_Probation[] {
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
   * @param {Dxc_Model_Doc_Absolute_Prisoner_Information_Before_Release_On_Probation[]} value
   */
  public set $results(value: Dxc_Model_Doc_Absolute_Prisoner_Information_Before_Release_On_Probation[]) {
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

  public get $resultsContact(): Dxc_Model_Doc_Absolute_Prisoner_Information_Before_Release_On_Probation[] {
    return this.resultsContact;
  }
  public set $resultsContact(value: Dxc_Model_Doc_Absolute_Prisoner_Information_Before_Release_On_Probation[]) {
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
