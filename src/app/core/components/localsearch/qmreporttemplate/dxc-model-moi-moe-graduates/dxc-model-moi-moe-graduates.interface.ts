import * as moment from "moment";
import { Dxc_Model_Moi_Moe_Graduates } from "src/app/core/shared/models/Dxc_Model_Moi_Moe_Graduates";
import { Injectable } from "@angular/core";

export interface IReportMoeMoiGraduates {
    model: Dxc_Model_Moi_Moe_Graduates;
}

@Injectable()
export class MoeMoiGraduatesMetadata {
    private results: Dxc_Model_Moi_Moe_Graduates[];
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

    public getHtml(selectData: Dxc_Model_Moi_Moe_Graduates, title: string) {

        return this.html = `
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
                <body>
                    <div>
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
                                <label>www.dxc.go.th</label>
                            </div>
                            <hr>
                        </div>
                        ${selectData.wartermarks}
                        <table class="table" border="2px" width="100%">
                            <tr>
                            <td align="center">ฐาน${title}</td>
                            </tr>
                        </table>
                        <br/>
                        ${selectData.wartermarks}
                        <br />
                        <div class="ml-3">
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">
                                        <a id="clickSsolSsoSelectedHospital" type="button">${selectData.personID}<i class="material-icons">link</i></a>
                                    </p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">คำนำหน้า</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.prefixName}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ชื่อ</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.firstName}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">นามสกุล</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.lastName}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ระดับการศึกษา</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.educationLevelName}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">วุฒิการศึกษา</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.degreeName}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ปีที่สำเร็จการศึกษา</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.academicYear}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">ภาคการศึกษา</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.semester}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">วันที่สำเร็จการศึกษา</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.graduateDate}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">ผลการเรียนเฉลี่ยสะสม</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.gpax}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">ชื่อสถานศึกษา</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.schoolName}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">รหัสสถานศึกษา</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.schoolID}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">หน่วยงานต้นสังกัด</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.departmentNameThai}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">ประเภทวิชา</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.majorName}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <p class="text-white font-20">สาขาวิชา</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.programName}</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-white font-20">สาขางาน</p>
                                </div>
                                <div class="col-3">
                                    <p class="text-success font-20">${selectData.courseName}</p>
                                </div>
                            </div>
                        </div>
                    </div>    
                </body>
        </html>`;
    }

    public viewgetHtml(selectData: Dxc_Model_Moi_Moe_Graduates, title: string) {
        return this.html = `<html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            </head>

            <body>
                <div>
                    <table class="table" border="2px" width="100%">
                    <tr>
                        <td align="center" class="text-white font-20">ฐาน${title}</td>
                    </tr>
                    </table>
                    <br />
                    <br />
                    <div class="ml-3">
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">
                                    <a id="clickSsolSsoSelectedHospital" type="button">${selectData.personID}<i class="material-icons">link</i></a>
                                </p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">คำนำหน้า</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.prefixName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.firstName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">นามสกุล</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.lastName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ระดับการศึกษา</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.educationLevelName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">วุฒิการศึกษา</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.degreeName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ปีที่สำเร็จการศึกษา</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.academicYear}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ภาคการศึกษา</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.semester}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">วันที่สำเร็จการศึกษา</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.graduateDate}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ผลการเรียนเฉลี่ยสะสม</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.gpax}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อสถานศึกษา</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.schoolName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">รหัสสถานศึกษา</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.schoolID}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">หน่วยงานต้นสังกัด</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.departmentNameThai}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ประเภทวิชา</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.majorName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">สาขาวิชา</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.programName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">สาขางาน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.courseName}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
        `;
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
     * @return {Dxc_Model_Moi_Moe_Graduates[]}
     */
    public get $results(): Dxc_Model_Moi_Moe_Graduates[] {
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
     * @param {Dxc_Model_Moi_Moe_Graduates[]} value
     */
    public set $results(value: Dxc_Model_Moi_Moe_Graduates[]) {
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