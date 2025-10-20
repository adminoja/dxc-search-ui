import * as moment from 'moment';
import { IDxc_Model_Coj_ArrestWarrants } from 'src/app/core/shared/models/Dxc_Model_Coj_ArrestWarrants';
import { Injectable } from "@angular/core";

export interface IReportCojArrestWarrants {
    model: IDxc_Model_Coj_ArrestWarrants;
}

@Injectable()
export class CojArrestWarrantsMetadata {
    private results: IDxc_Model_Coj_ArrestWarrants[];
    private obj: string;
    private show: boolean;
    private count: number;
    private normalPdf: string[];
    private normalPdfCount: string;
    reportName: string;
    reportOfTime: string;
    reportOfDate: string;

    html: string;
    private showCareer: boolean;
    private objCareer: string;
    private resultsCareer: IDxc_Model_Coj_ArrestWarrants[];
    private countCareer: number;

    private resultsContact: IDxc_Model_Coj_ArrestWarrants[];
    private countContact: number;
    private objContact: string;
    private showContact: boolean;

    constructor() {
        this.results = [];
        this.count = 0;
        this.normalPdf = [];
        this.normalPdfCount = '';
        //career
        this.resultsCareer = [];
        this.countCareer = 0;
        //Contact
        this.resultsContact = [];
        this.countContact = 0;
    }

    public getHtml(selectData: IDxc_Model_Coj_ArrestWarrants, title: string) {
        
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
                        <td align="center">${title}</td>
                    </tr>
                </table>
                <br /> <br />
                <div class="ml-3">
                    <div class="row">
                            <div class="col-6"></div>
                        <div class="col-3">
                            <p class="text-white font-20">รหัสหมายจับ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.arrestWarrantId}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accCardId}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อ-สกุลผู้ต้องหา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accFullName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">อายุ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accAge}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">สัญชาติ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accNationText}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">เชื้อชาติ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accOriginText}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">อาชีพ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accOccupation}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">เบอร์โทรศัพท์ ผู้ต้องหา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accTel}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20"><u>ที่อยู่ผู้ต้องหา</u></p>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-3">
                            <p class="text-white font-20">บ้านเลขที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accAddno}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">หมู่ที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accVilno}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ถนน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accRoad}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ซอย</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accSoi}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ตำบล/แขวง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accSubDistrictText}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">อำเภอ/เขต</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accDistrictText}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">จังหวัด</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accProvinceText}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">วันนัด</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.appointmentDate}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ประเภทของวันนัด</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.appointmentTypeText}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">จับได้เมื่อวันที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.arrestDate}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อเจ้าหน้าที่ผู้จับกุม</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.arrestOfficerName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">วันที่รายงาน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.arrestReportDate}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ผลการจับ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.arrestResultText}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ข้อความ กรณีจับไม่ได้หรืออื่นๆ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.arrestResultOtherText}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">สถานะหมาย</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.arrestStatus}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ยกเลิกเพราะว่า</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.because}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">เลขดำ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.blackCaseNum}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">อักษรย่อเลขดำ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.blackCaseNumPrefixText}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">คำอธิบาย อักษรย่อเลขดำ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.blackCaseNumPrefixDescText}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขดำ พ.ศ.</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.blackCaseNumYear}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ด้วย</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.causeText}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ต้องหาว่ากระทำผิดฐาน</p>
                        </div>
                        <div class="col-9">
                            <p class="text-success font-20">${selectData.charge}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">อื่นๆ(ข้อความ)	</p>
                        </div>
                        <div class="col-9">
                            <p class="text-success font-20">${selectData.chargeOtherText}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ประเภทการกระทำผิด1</p>
                        </div>
                        <div class="col-9">
                            <p class="text-success font-20">${selectData.chargeType1Text}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ประเภทการกระทำผิด2</p>
                        </div>
                        <div class="col-9">
                            <p class="text-success font-20">${selectData.chargeType2Text}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ประเภทการกระทำผิด3</p>
                        </div>
                        <div class="col-9">
                            <p class="text-success font-20">${selectData.chargeType3Text}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ประเภทการกระทำผิด21</p>
                        </div>
                        <div class="col-9">
                            <p class="text-success font-20">${selectData.chargeType21Text}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ประเภทการกระทำผิด22</p>
                        </div>
                        <div class="col-9">
                            <p class="text-success font-20">${selectData.chargeType22Text}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ศาล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.courtCodeText}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">คำสั่งศาล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.courtInjunctionText}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ประเภทความ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.faultTypeIdText}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อผู้พิพากษา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.judgeName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อผู้พิพากษา 2</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.judgeName2}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อผู้พิพากษา 3</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.judgeName3}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ผู้ร้อง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.plaintiff}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">สถานีตำรวจ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.policeStationIdText}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">อายุความ(ปี)</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.prescription}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">หน่วยของอายุความ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.prescriptionUnitText}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขแดง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.redCaseNum}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">อักษรย่อเลขแดง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.redCaseNumPrefixText}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">คำอธิบาย อักษรย่อเลขแดง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.redCaseNumPrefixDescText}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">เลขแดง พ.ศ.</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.redCaseNumYear}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขคำร้อง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.reqNum}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ประเภทคำร้อง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.reqNumCaseTypeIdText}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ปีคำร้อง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.reqNumYear}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ส่งไปที่ศาล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.sendToCourtIdText}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">หมายถึง (ส่งหมายถึงใคร)</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.sendToName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">วันที่ออกหมาย</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.woaDate}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ถึงวันที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.woaEndDate}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขหมาย</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.woaNo}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">นับตั้งแต่วันที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.woaStartDate}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ประเภทหมายจับ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.woaTypeText}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ปีของหมาย (พ.ศ.)</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.woaYear}</p>
                        </div>
                    </div>
                </div>
            </div>
            ${selectData.wartermarks}
        </body>
        </html>`;
    }

    public viewgetHtml(selectData: IDxc_Model_Coj_ArrestWarrants, title: string) {
        return (this.html = `<html>
            <head>
                <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
                <script>
                    $(document).ready(function() {
                        $('#confirmCojArrestWarrants').click(function(){
                        $('#cojArrestWarrants').modal('toggle'); 
                        $('#cojArrestWarrants').on('hidden.bs.modal', function () {
                            $('body').addClass('modal-open');
                        });
                        });
                        $('#close').click(function(){
                        $('#cojArrestWarrants').modal('toggle');  
                        $('#cojArrestWarrants').on('hidden.bs.modal', function () {
                            $('body').addClass('modal-open');
                        });
                        });
                        $('#closeCojArrestWarrants').click(function(){
                        $('#cojArrestWarrants').modal('toggle');  
                        $('#cojArrestWarrants').on('hidden.bs.modal', function () {
                            $('body').addClass('modal-open');
                        });
                        });
                        $("#cojArrestWarrants").modal({
                        show: false,
                        backdrop: 'static'
                        });
                        $("#clickCojArrestWarrants").click(function() {
                        $("#cojArrestWarrants").modal("show");             
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
                    <div class="row">
                            <div class="col-6"></div>
                        <div class="col-3">
                            <p class="text-white font-20">รหัสหมายจับ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.arrestWarrantId}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">
                                <a class="text-success font-20" id="clickCojArrestWarrants" type="button">
                                ${selectData.accCardId}</a><i class="material-icons">link</i>
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อ-สกุลผู้ต้องหา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accFullName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">อายุ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accAge}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">สัญชาติ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accNationText}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">เชื้อชาติ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accOriginText}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">อาชีพ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accOccupation}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">เบอร์โทรศัพท์ ผู้ต้องหา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accTel}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20"><u>ที่อยู่ผู้ต้องหา</u></p>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-3">
                            <p class="text-white font-20">บ้านเลขที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accAddno}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">หมู่ที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accVilno}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ถนน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accRoad}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ซอย</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accSoi}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ตำบล/แขวง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accSubDistrictText}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">อำเภอ/เขต</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accDistrictText}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">จังหวัด</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accProvinceText}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">วันนัด</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.appointmentDate}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ประเภทของวันนัด</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.appointmentTypeText}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">จับได้เมื่อวันที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.arrestDate}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อเจ้าหน้าที่ผู้จับกุม</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.arrestOfficerName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">วันที่รายงาน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.arrestReportDate}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ผลการจับ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.arrestResultText}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ข้อความ กรณีจับไม่ได้หรืออื่นๆ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.arrestResultOtherText}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">สถานะหมาย</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.arrestStatus}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ยกเลิกเพราะว่า</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.because}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">เลขดำ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.blackCaseNum}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">อักษรย่อเลขดำ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.blackCaseNumPrefixText}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">คำอธิบาย อักษรย่อเลขดำ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.blackCaseNumPrefixDescText}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขดำ พ.ศ.</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.blackCaseNumYear}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ด้วย</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.causeText}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ต้องหาว่ากระทำผิดฐาน</p>
                        </div>
                        <div class="col-9">
                            <p class="text-success font-20">${selectData.charge}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">อื่นๆ(ข้อความ)	</p>
                        </div>
                        <div class="col-9">
                            <p class="text-success font-20">${selectData.chargeOtherText}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ประเภทการกระทำผิด1</p>
                        </div>
                        <div class="col-9">
                            <p class="text-success font-20">${selectData.chargeType1Text}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ประเภทการกระทำผิด2</p>
                        </div>
                        <div class="col-9">
                            <p class="text-success font-20">${selectData.chargeType2Text}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ประเภทการกระทำผิด3</p>
                        </div>
                        <div class="col-9">
                            <p class="text-success font-20">${selectData.chargeType3Text}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ประเภทการกระทำผิด21</p>
                        </div>
                        <div class="col-9">
                            <p class="text-success font-20">${selectData.chargeType21Text}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ประเภทการกระทำผิด22</p>
                        </div>
                        <div class="col-9">
                            <p class="text-success font-20">${selectData.chargeType22Text}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ศาล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.courtCodeText}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">คำสั่งศาล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.courtInjunctionText}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ประเภทความ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.faultTypeIdText}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อผู้พิพากษา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.judgeName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อผู้พิพากษา 2</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.judgeName2}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อผู้พิพากษา 3</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.judgeName3}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ผู้ร้อง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.plaintiff}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">สถานีตำรวจ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.policeStationIdText}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">อายุความ(ปี)</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.prescription}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">หน่วยของอายุความ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.prescriptionUnitText}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขแดง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.redCaseNum}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">อักษรย่อเลขแดง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.redCaseNumPrefixText}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">คำอธิบาย อักษรย่อเลขแดง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.redCaseNumPrefixDescText}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">เลขแดง พ.ศ.</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.redCaseNumYear}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขคำร้อง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.reqNum}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ประเภทคำร้อง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.reqNumCaseTypeIdText}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ปีคำร้อง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.reqNumYear}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ส่งไปที่ศาล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.sendToCourtIdText}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">หมายถึง (ส่งหมายถึงใคร)</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.sendToName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">วันที่ออกหมาย</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.woaDate}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ถึงวันที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.woaEndDate}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขหมาย</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.woaNo}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">นับตั้งแต่วันที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.woaStartDate}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ประเภทหมายจับ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.woaTypeText}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ปีของหมาย (พ.ศ.)</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.woaYear}</p>
                        </div>
                    </div>
                </div>
            </div>
            </body>
            <div id="cojArrestWarrants" class="modal fade" tabindex="-1" data-backdrop="static" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h4 class="modal-title text-white" id="exampleModalLongTitle">ยืนยันการค้นหา</h4>
                        <button type="button" class="close" id="close">×</button>
                        </div>
                        <div class="modal-body font-20 text-white text-center">
                        คุณต้องการเปิดรายงาน Single Report ของ <br>
                        หมายเลขบัตรประชาชนนี้ ${selectData.accCardId} ใช่หรือไม่
                        </div>
                        <div class="modal-footer">
                        <button type="button" id="closeCojArrestWarrants" class="btn btn-danger">ยกเลิก</button>
                        <a id="confirmCojArrestWarrants" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.accCardId}/0/0/0/0/0">ตกลง</a>				
                        </div>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
            </html>`);
    }

    public getSearchData() {
        const schema = 'coj-arrest-warrants';
        if (
        localStorage.getItem(schema + 'Results') === '[]' ||
        localStorage.getItem(schema + 'Results') === null
        ) {
            console.log('7.1');
        } else {
            this.show = true;
            this.obj = localStorage.getItem(schema + 'Results');
            this.results = JSON.parse(this.obj);
            this.count = this.results.length; // นับจำนวนรายการ
        }
    }

    public getSearchDataCareer() {
        const schema = 'coj-arrest-warrants';
        if (
        localStorage.getItem(schema + '-career-Results') === '[]' ||
        localStorage.getItem(schema + '-career-Results') === null
        ) {
            console.log('7.1');
        } else {
            this.showCareer = true;
            this.objCareer = localStorage.getItem(schema + '-career-Results');
            this.resultsCareer = JSON.parse(this.objCareer);
            this.countCareer = this.resultsCareer.length; // นับจำนวนรายการ
        }
    }

    public getSearchDataContact() {
        const schema = 'coj-arrest-warrants';
          if (
            localStorage.getItem(schema + '-contact-Results') === '[]' ||
            localStorage.getItem(schema + '-contact-Results') === null
          ) {
            console.log('7.1');
          } else {
            this.showContact = true;
            this.objContact = localStorage.getItem(schema + '-contact-Results');
            this.resultsContact = JSON.parse(this.objContact);
            this.countContact = this.resultsContact.length; // นับจำนวนรายการ
          }
    }

    public getnormalPdf() {
        const schema = 'coj-arrest-warrants';
    
        if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {
            this.normalPdf = [];
        } else {
            this.obj = localStorage.getItem(schema + 'Results');
            this.results = JSON.parse(this.obj);
            this.count = this.results.length; // นับจำนวนรายการ
            this.normalPdfCount = `<div class="col-md-11"
            class="row card singlereport-timeline-item list-normal-design-head-collapse">
            <span class="list-normal-design-underline depart">สำนักงานศาลยุติธรรมฯ: </span>
            <span class="list-normal-design-underline departdata">ฐานข้อมูลหมายจับศาล </span>
            <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ
            </span>
            </div>`;
            this.loadReportDetail();
            for (let i = 0; i < this.results.length; i++) {
                this.normalPdf.push(`
                <div class="col-md-11">
                <div class="section-criminal-results" style="text-indent:25px;
                font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
                <span class="list-normal-design-underline depart">ฐานข้อมูลหมายจับศาล</span>
                    <div style="padding-left:15px;">
                        <strong class="report-field-title">เลขประจำตัวประชาชน:</strong>
                        <span class="report-field-value" style="text-decoration:underline">
                            ${this.changeNull(this.results[i].accCardId)}
                        </span>
                        <strong class="report-field-title">ชื่อ-สกุลผู้ต้องหา:</strong>
                        <span class="report-field-value" style="text-decoration:underline"> 
                            ${this.changeNull(this.results[i].accFullName)}
                        </span>
                        <strong class="report-field-title">สัญชาติ:</strong>
                        <span class="report-field-value" style="text-decoration:underline">
                            ${this.changeNull(this.results[i].accNationText)}
                        </span>
                        <strong class="report-field-title">วันนัด:</strong>
                        <span class="report-field-value" style="text-decoration:underline">
                            ${this.formatDate(this.results[i].appointmentDate)}
                        </span>
                        <strong class="report-field-title">ประเภทของวันนัด:</strong>
                        <span class="report-field-value" style="text-decoration:underline">
                            ${this.changeNull(this.results[i].appointmentTypeText)}
                        </span>
                        <strong class="report-field-title">จับได้เมื่อวันที่:</strong>
                        <span class="report-field-value" style="text-decoration:underline">
                            ${this.formatDate(this.results[i].arrestDate)}
                        </span>
                        <strong class="report-field-title">ชื่อเจ้าหน้าที่ผู้จับกุม:</strong>
                        <span class="report-field-value" style="text-decoration:underline">
                            ${this.changeNull(this.results[i].arrestOfficerName)}
                        </span>
                    </div>
                </div>
                </div>${this.loadReportDetail()}`); // Dop
                console.log('DOPA.allegation' + this.normalPdf[i]);
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

    changeNull(selectData: any) {
        if (selectData == null) {
            return '-';
        } else {
            return selectData;
        }
    }

    formatDate(birthDate: any): string {

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
     * Getter $results
     * @return {IDxc_Model_Coj_ArrestWarrants[]}
     */
    public get $results(): IDxc_Model_Coj_ArrestWarrants[] {
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
     * @param {IDxc_Model_Coj_ArrestWarrants[]} value
     */
    public set $results(value: IDxc_Model_Coj_ArrestWarrants[]) {
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
     * Getter $normalPdf
     * @return {string []}
     */
    public get $normalPdf(): string [] {
        return this.normalPdf;
    }
  
    /**
     * Setter $normalPdf
     * @param {string []} value
     */
    public set $normalPdf(value: string []) {
        this.normalPdf = value;
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

    public get $resultsCareer(): IDxc_Model_Coj_ArrestWarrants[] {
        return this.resultsCareer;
    }
    public set $resultsCareer(value: IDxc_Model_Coj_ArrestWarrants[]) {
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

    public get $resultsContact(): IDxc_Model_Coj_ArrestWarrants[] {
        return this.resultsContact;
    }
    public set $resultsContact(value: IDxc_Model_Coj_ArrestWarrants[]) {
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