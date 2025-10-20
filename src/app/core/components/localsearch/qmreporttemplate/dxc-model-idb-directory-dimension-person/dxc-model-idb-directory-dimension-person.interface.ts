import { IDxc_Model_Idb_DirectoryDimensionPerson } from 'src/app/core/shared/models/Dxc_Model_Idb_DirectoryDimensionPerson';
import { Injectable } from "@angular/core";

export interface IReportIdbDirectoryDimensionPerson {
    model: IDxc_Model_Idb_DirectoryDimensionPerson;
}

@Injectable()
export class IdbDirectoryDimensionPersonMetadata {
  html: string;
  reportName: string;
  reportOfTime: string;
  reportOfDate: string;
  private results: IDxc_Model_Idb_DirectoryDimensionPerson[];
  private obj: string;
  private show: boolean;
  private count: number;
  private normalPdf: string [];
  private normalPdfCount: string;
  constructor() {
    this.results = [];
    this.count = 0;
    this.normalPdf = [];
    this.normalPdfCount = '';
   }

    public getHtml(selectData: IDxc_Model_Idb_DirectoryDimensionPerson, title: string) {
        
        return this.html = `
        <html>
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
            <body>
            <div>
                <img src='https://search.dxc.go.th/public/image/DXC_logo.jpg' style='width: 150px; height: 50px' />
                    <div>
                        <label>DXC Report</label>
                        <br>
                        <a href='www.dxc.go.th'>www.dxc.go.th</a>
                    </div>
                <hr>
                </div>
                ${selectData.wartermarks}
                <div>
                <table class="table" border="2px" width="100%">
                    <tr>
                        <td align="center" class="text-white font-20">${title}</td>
                    </tr>
                </table>
                <br>
                <div class="ml-3">
                    <div class="row">
                        <div class="col-12">
                            <label class="text-white font-20"><u><b>ข้อมูลเกี่ยวกับคดี</b></u></label>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-12">
                            <p class="text-white font-20"><u>ผู้ต้องหา/จำเลย</u></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขบัตรประชาชนต้องหา/จำเลย</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accusedCitizenId}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อผู้ต้องหา/จำเลย</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accusedsName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">สกุลผู้ต้องหา/จำเลย</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accusedsSurname}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">วันเดือนปีเกิด ผู้ต้องหา/จำเลย</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accusedsBirthDate}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เพศ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accusedGenderName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">สัญชาติ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accusedNationalityName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">สัญชาติอื่นๆ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accusedNationalityOther}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">เชื่อชาติ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accusedRace}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ภูมิลำเนา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accusedNative}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ที่อยู่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accusedAddress}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">หมู่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accusedMoo}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ซอย</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accusedSoi}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ถนน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accusedRoad}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ตำบล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accusedTambolName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">อำเภอ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accusedAmphurName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">จังหวัด</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accusedProvinceName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ความเห็นพนักงานสอบสวน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accusedInqDecisionGroupName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">รายละเอียดความเห็นพนักงานสอบสวน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accusedCriRemark}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20"><u>ผู้เสียหาย</u></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขบัตรประชาชนผู้เสียหาย</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.complainantCitizenId}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อผู้เสียหาย</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.complainantName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">สกุลผู้เสียหาย</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.complainantSurname}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">วันเดือนปีเกิด ผู้เสียหาย</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.complainantBirthDate}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เพศ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.complainantGenderName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">สัญชาติ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.complainantNationalityName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เชื่อชาติ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.complainantRace}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ภูมิลำเนา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.complainantNative}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ที่อยู่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.complainantAddress}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">หมู่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.complainantMoo}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ซอย</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.complainantSoi}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ถนน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.complainantRoad}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ตำบล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.complainantTambolName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">อำเภอ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.complainantAmphurName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">จังหวัด</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.complainantProvinceName}</p>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-3">
                            <p class="text-white font-20"><u>คดี</u></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">หมายเลขคดีดำ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.generallcBlackFile}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">หมายเลขคดีแดง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.generallcRedFile}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ข้อหา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accusedchargeChargeName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">รายละเอียด ข้อหา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accusedchargeChargeDetail}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">มาตรา</p>
                        </div>
                        <div class="col-9">
                            <p class="text-success font-20">${selectData.accusedchargeSector}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">สถานะข้อหา</p>
                        </div>
                        <div class="col-9">
                            <p class="text-success font-20">${selectData.accusedchargeChargeStatusName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อกฎหมาย</p>
                        </div>
                        <div class="col-9">
                            <p class="text-success font-20">${selectData.accusedchargeLawName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">รายละเอียด คำพิพากษา</p>
                        </div>
                        <div class="col-9">
                            <p class="text-success font-20">${selectData.courtresultJudgementDetail}</p>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-3">
                            <p class="text-white font-20"><u>อัยการ</u></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชื่ออัยการ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.prosecuteProsName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ประเภทงาน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.prosecuteOwnerName}</p>
                        </div>
                    </div>
                    ${selectData.wartermarks}
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">สถานะการทำงาน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.prosecuteAssignTypeName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">คำสั่งอัยการ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.manageDescrition}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">วันที่สั่งอัยการ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.manageManagedate}</p>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-3">
                            <p class="text-white font-20"><u>สถานที่เกิดเหตุ</u></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ตำบลที่เกิดเหตุ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.areaTambolName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">อำเภอที่เกิดเหตุ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.areaAmphurName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">จังหวัดที่เกิดเหตุ</p>
                        </div>
                        <div class="col-9">
                            <p class="text-success font-20">${selectData.areaProvinceName}</p>
                        </div>
                    </div>
                    <div class="row mt-3">
                    <div class="col-3">
                        <p class="text-white font-20"><u>ศาล</u></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">คำสั่งอัยการในตัว ผู้ต้องหา/จำเลย</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.accusedProsCommandName}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">ประเภทชั้นศาล</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.courtresultCourtLevelName}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">ศาล</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.courtresultCourtName}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">ประเภทศาล</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.courtresultCourtTypeName}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">วันที่ยื่นฟ้อง</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.courtresultCourtDate}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">วันที่ศาลพิพากษา</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.courtresultJudgementDate}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">ผลคดี</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.courtresultResult1Name}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">ผลการตัดสินคดี</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.courtresultCourtResultName}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">คำพิพากษา</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.courtresultJudgementName}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">อนุมาตรา</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.accusedchargeSubsector}</p>
                    </div>
                </div>
                </div>
            </div>
            </body>
        </html>`;
    }

    public viewgetHtml(selectData: IDxc_Model_Idb_DirectoryDimensionPerson, title: string) {
        let checkCitizenCardNumber = '';
        if(selectData.accusedCitizenId == '-') {
        checkCitizenCardNumber = `${selectData.accusedCitizenId}`
        } else {
        checkCitizenCardNumber =`
        <a class="text-success font-20" id="clickIdbDirectoryDimensionPersonAccused" type="button">
            ${selectData.accusedCitizenId}<i class="material-icons">link</i></a>`
        }

        let checkCitizenCardNumber2 = '';
        if(selectData.complainantCitizenId == '-') {
            checkCitizenCardNumber2 = `${selectData.complainantCitizenId}`
        } else {
            checkCitizenCardNumber2 =`
            <a id="clickIdbDirectoryDimensionPersonComplainant" type="button" class="text-success font-20">
            ${selectData.complainantCitizenId}<i class="material-icons">link</i></a>`
        }

        return (this.html = `
            <html>
                <head>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
                    <script>
                        $(document).ready(function() {
                            $('#confirmIdbDirectoryDimensionPerson').click(function(){
                                $('#idbDirectoryDimensionPerson').modal('toggle');
                            });
                            $('#close').click(function(){
                                $('#idbDirectoryDimensionPerson').modal('toggle');
                            });
                            $('#closeIdbDirectoryDimensionPerson').click(function(){
                                $('#idbDirectoryDimensionPerson').modal('toggle');
                            });
                            $("#idbDirectoryDimensionPerson").modal({
                                show: false,
                                backdrop: 'static'
                            });
                            $("#clickIdbDirectoryDimensionPersonAccused").click(function() {
                            $("#idbDirectoryDimensionPerson").modal("show");
                            });
                        });
                        $(document).ready(function() {
                            $('#confirmIdbDirectoryDimensionPersonComplainant').click(function(){
                                $('#idbDirectoryDimensionPersonComplainant').modal('toggle');
                            });
                            $('#closeComplainant').click(function(){
                                $('#idbDirectoryDimensionPersonComplainant').modal('toggle');
                            });
                            $('#closeIdbDirectoryDimensionPersonComplainant').click(function(){
                                $('#idbDirectoryDimensionPersonComplainant').modal('toggle');
                            });
                            $("#idbDirectoryDimensionPersonComplainant").modal({
                                show: false,
                                backdrop: 'static'
                            });
                            $("#clickIdbDirectoryDimensionPersonComplainant").click(function() {
                            $("#idbDirectoryDimensionPersonComplainant").modal("show");
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
                    <div class="ml-3">
                        <div class="row mt-3">
                            <div class="col-12">
                                <label class="text-white font-20"><u><b>ข้อมูลเกี่ยวกับคดี</b></u></label>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-12">
                                <p class="text-white font-20"><u>ผู้ต้องหา/จำเลย</u></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">เลขบัตรประชาชนต้องหา/จำเลย</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">
                                    ${checkCitizenCardNumber}
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อผู้ต้องหา/จำเลย</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedsName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">สกุลผู้ต้องหา/จำเลย</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedsSurname}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">วันเดือนปีเกิด ผู้ต้องหา/จำเลย</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedsBirthDate}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">เพศ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedGenderName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">สัญชาติ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedNationalityName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">สัญชาติอื่นๆ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedNationalityOther}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">เชื่อชาติ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedRace}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ภูมิลำเนา</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedNative}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ที่อยู่</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedAddress}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">หมู่</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedMoo}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ซอย</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedSoi}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ถนน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedRoad}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ตำบล</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedTambolName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">อำเภอ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedAmphurName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">จังหวัด</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedProvinceName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ความเห็นพนักงานสอบสวน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedInqDecisionGroupName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">รายละเอียดความเห็นพนักงานสอบสวน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedCriRemark}</p>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-3">
                                <p class="text-white font-20"><u>ผู้เสียหาย</u></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">เลขบัตรประชาชนผู้เสียหาย</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">
                                    ${checkCitizenCardNumber2}
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อผู้เสียหาย</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.complainantName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">สกุลผู้เสียหาย</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.complainantSurname}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">วันเดือนปีเกิด ผู้เสียหาย</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.complainantBirthDate}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">เพศ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.complainantGenderName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">สัญชาติ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.complainantNationalityName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">เชื่อชาติ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.complainantRace}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ภูมิลำเนา</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.complainantNative}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ที่อยู่</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.complainantAddress}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">หมู่</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.complainantMoo}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ซอย</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.complainantSoi}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ถนน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.complainantRoad}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ตำบล</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.complainantTambolName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">อำเภอ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.complainantAmphurName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">จังหวัด</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.complainantProvinceName}</p>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-3">
                                <p class="text-white font-20"><u>คดี</u></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">หมายเลขคดีดำ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.generallcBlackFile}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">หมายเลขคดีแดง</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.generallcRedFile}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ข้อหา</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedchargeChargeName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">รายละเอียด ข้อหา</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedchargeChargeDetail}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">มาตรา</p>
                            </div>
                            <div class="col-9">
                                <p class="text-success font-20">${selectData.accusedchargeSector}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">สถานะข้อหา</p>
                            </div>
                            <div class="col-9">
                                <p class="text-success font-20">${selectData.accusedchargeChargeStatusName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อกฎหมาย</p>
                            </div>
                            <div class="col-9">
                                <p class="text-success font-20">${selectData.accusedchargeLawName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">รายละเอียด คำพิพากษา</p>
                            </div>
                            <div class="col-9">
                                <p class="text-success font-20">${selectData.courtresultJudgementDetail}</p>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-3">
                                <p class="text-white font-20"><u>อัยการ</u></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ชื่ออัยการ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.prosecuteProsName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ประเภทงาน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.prosecuteOwnerName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">สถานะการทำงาน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.prosecuteAssignTypeName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">คำสั่งอัยการ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.manageDescrition}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">วันที่สั่งอัยการ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.manageManagedate}</p>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-3">
                                <p class="text-white font-20"><u>สถานที่เกิดเหตุ</u></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ตำบลที่เกิดเหตุ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.areaTambolName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">อำเภอที่เกิดเหตุ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.areaAmphurName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">จังหวัดที่เกิดเหตุ</p>
                            </div>
                            <div class="col-9">
                                <p class="text-success font-20">${selectData.areaProvinceName}</p>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-3">
                                <p class="text-white font-20"><u>ศาล</u></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">คำสั่งอัยการในตัว ผู้ต้องหา/จำเลย</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedProsCommandName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ประเภทชั้นศาล</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.courtresultCourtLevelName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ศาล</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.courtresultCourtName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ประเภทศาล</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.courtresultCourtTypeName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">วันที่ยื่นฟ้อง</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.courtresultCourtDate}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">วันที่ศาลพิพากษา</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.courtresultJudgementDate}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ผลคดี</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.courtresultResult1Name}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ผลการตัดสินคดี</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.courtresultCourtResultName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">คำพิพากษา</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.courtresultJudgementName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">อนุมาตรา</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedchargeSubsector}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
            <div id="idbDirectoryDimensionPerson" class="modal fade" tabindex="-1" data-backdrop="static" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title text-white" id="exampleModalLongTitle">ยืนยันการค้นหา</h4>
                            <button type="button" class="close" id="close">×</button>
                        </div>
                        <div class="modal-body font-20 text-white text-center">
                            คุณต้องการเปิดรายงาน Single Report ของ <br>
                            หมายเลขบัตรประชาชนนี้ ${selectData.accusedCitizenId} ใช่หรือไม่
                        </div>
                        <div class="modal-footer">
                            <button type="button" id="closeIdbDirectoryDimensionPerson" class="btn btn-danger">ยกเลิก</button>
                            <a id="confirmIdbDirectoryDimensionPerson" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.accusedCitizenId}/0/0/0/0/0">ตกลง</a>				
                        </div>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
            <div id="idbDirectoryDimensionPersonComplainant" class="modal fade" tabindex="-1" data-backdrop="static" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title text-white" id="exampleModalLongTitle">ยืนยันการค้นหา</h4>
                            <button type="button" class="close" id="closeComplainant">×</button>
                        </div>
                        <div class="modal-body font-20 text-white text-center">
                            คุณต้องการเปิดรายงาน Single Report ของ <br>
                            หมายเลขบัตรประชาชนนี้ ${selectData.complainantCitizenId} ใช่หรือไม่
                        </div>
                        <div class="modal-footer">
                            <button type="button" id="closeIdbDirectoryDimensionPersonComplainant" class="btn btn-danger">ยกเลิก</button>
                            <a id="confirmIdbDirectoryDimensionPersonComplainant" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.complainantCitizenId}/0/0/0/0/0">ตกลง</a>				
                        </div>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </html>`);
    }

    public viewgetHtmlSingleReport(selectData: IDxc_Model_Idb_DirectoryDimensionPerson, title: string) {
            return (this.html = `
            <html>
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
                    <div class="ml-3">
                        <div class="row mt-3">
                            <div class="col-12">
                                <label class="text-white font-20"><u><b>ข้อมูลเกี่ยวกับคดี</b></u></label>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-12">
                                <p class="text-white font-20"><u>ผู้ต้องหา/จำเลย</u></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">เลขบัตรประชาชนต้องหา/จำเลย</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedCitizenId}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อผู้ต้องหา/จำเลย</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedsName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">สกุลผู้ต้องหา/จำเลย</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedsSurname}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">เพศ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedGenderName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">สัญชาติ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedNationalityName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">สัญชาติอื่นๆ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedNationalityOther}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">เชื่อชาติ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedRace}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ภูมิลำเนา</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedNative}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ที่อยู่</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedAddress}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">หมู่</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedMoo}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ซอย</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedSoi}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ถนน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedRoad}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ตำบล</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedTambolName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">อำเภอ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedAmphurName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">จังหวัด</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedProvinceName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ความเห็นพนักงานสอบสวน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedInqDecisionGroupName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">รายละเอียดความเห็นพนักงานสอบสวน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedCriRemark}</p>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-3">
                                <p class="text-white font-20"><u>ผู้เสียหาย</u></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">เลขบัตรประชาชนผู้เสียหาย</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.complainantCitizenId}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อผู้เสียหาย</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.complainantName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">สกุลผู้เสียหาย</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.complainantSurname}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">วันเดือนปีเกิด ผู้เสียหาย</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.complainantBirthDate}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">เพศ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.complainantGenderName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">สัญชาติ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.complainantNationalityName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">เชื่อชาติ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.complainantRace}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ภูมิลำเนา</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.complainantNative}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ที่อยู่</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.complainantAddress}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">หมู่</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.complainantMoo}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ซอย</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.complainantSoi}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ถนน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.complainantRoad}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ตำบล</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.complainantTambolName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">อำเภอ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.complainantAmphurName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">จังหวัด</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.complainantProvinceName}</p>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-3">
                                <p class="text-white font-20"><u>คดี</u></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">หมายเลขคดีดำ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.generallcBlackFile}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">หมายเลขคดีแดง</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.generallcRedFile}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ข้อหา</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedchargeChargeName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">รายละเอียด ข้อหา</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedchargeChargeDetail}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">มาตรา</p>
                            </div>
                            <div class="col-9">
                                <p class="text-success font-20">${selectData.accusedchargeSector}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">สถานะข้อหา</p>
                            </div>
                            <div class="col-9">
                                <p class="text-success font-20">${selectData.accusedchargeChargeStatusName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อกฎหมาย</p>
                            </div>
                            <div class="col-9">
                                <p class="text-success font-20">${selectData.accusedchargeLawName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">รายละเอียด คำพิพากษา</p>
                            </div>
                            <div class="col-9">
                                <p class="text-success font-20">${selectData.courtresultJudgementDetail}</p>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-3">
                                <p class="text-white font-20"><u>อัยการ</u></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ชื่ออัยการ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.prosecuteProsName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ประเภทงาน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.prosecuteOwnerName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">สถานะการทำงาน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.prosecuteAssignTypeName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">คำสั่งอัยการ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.manageDescrition}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">วันที่สั่งอัยการ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.manageManagedate}</p>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-3">
                                <p class="text-white font-20"><u>สถานที่เกิดเหตุ</u></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ตำบลที่เกิดเหตุ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.areaTambolName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">อำเภอที่เกิดเหตุ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.areaAmphurName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">จังหวัดที่เกิดเหตุ</p>
                            </div>
                            <div class="col-9">
                                <p class="text-success font-20">${selectData.areaProvinceName}</p>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-3">
                                <p class="text-white font-20"><u>ศาล</u></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">คำสั่งอัยการในตัว ผู้ต้องหา/จำเลย</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedProsCommandName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ประเภทชั้นศาล</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.courtresultCourtLevelName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ศาล</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.courtresultCourtName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ประเภทศาล</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.courtresultCourtTypeName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">วันที่ยื่นฟ้อง</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.courtresultCourtDate}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">วันที่ศาลพิพากษา</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.courtresultJudgementDate}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ผลคดี</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.courtresultResult1Name}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ผลการตัดสินคดี</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.courtresultCourtResultName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">คำพิพากษา</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.courtresultJudgementName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">อนุมาตรา</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.accusedchargeSubsector}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>`);
    }

    public getResults(): IDxc_Model_Idb_DirectoryDimensionPerson[] {
        return this.results;
    }

    public setResults(results: IDxc_Model_Idb_DirectoryDimensionPerson[]): void {
        this.results = results;
    }

    public getObj(): string {
        return this.obj;
    }

    public setObj(obj: string): void {
        this.obj = obj;
    }

    public isShow(): boolean {
        return this.show;
    }

    public setShow(show: boolean): void {
        this.show = show;
    }

    public getCount(): number {
        return this.count;
    }

    public setCount(count: number): void {
        this.count = count;
    }

}