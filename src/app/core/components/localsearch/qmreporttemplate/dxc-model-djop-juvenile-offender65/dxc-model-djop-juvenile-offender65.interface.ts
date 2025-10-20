import * as moment from "moment";
import { IDxc_Model_Djop_JuvenileOffender65 } from "src/app/core/shared/models/Dxc_Model_Djop_JuvenileOffender65";
import { Injectable } from "@angular/core";

export interface IReportDjopJuvenileOffender65 {
    model: IDxc_Model_Djop_JuvenileOffender65;
}
@Injectable()
export class DjopJuvenileOffender65Metadata {
    private results: IDxc_Model_Djop_JuvenileOffender65[];
    private obj: string;
    private show: boolean;
    private count: number;
    private allegationPdf: string[];
    private allegationPdfCount: string;
    reportName: string;
    reportOfTime: string;
    reportOfDate: string;
    html: string;
    caseLists: any = [];
    caseListsPDF: any = [];
    relativeLists: any = [];
    relativeListsPDF: any = [];

    constructor() {
        const someArray = [9, 2, 5];
        someArray.forEach((value, index) => {
        });
        this.results = [];
        this.count = 0;
        this.allegationPdf = [];
        this.allegationPdfCount = '';
    }

    public getHtml(selectData: IDxc_Model_Djop_JuvenileOffender65, title: string) {
        console.log(selectData)
        if(selectData.caseDetailList[0].allegationName != '') {
            this.caseLists = [];
            selectData.caseDetailList.forEach((element,index) => {
                console.log(element)
                this.caseLists.push(
                    `
                    <div class="row">
                        <div class="col-6">
                            <p class="text-white font-20"><b>ข้อมูลคดีที่ ${index+1}</b></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20"> เลขคดีของแต่ละหน่วยงาน/ปีของเลขคดี</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${element.caseNo}/${element.caseYear}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">หน่วยงานเจ้าของคดี</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${element.unitAbbName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">วันที่เริ่มต้นการเกิดเหตุ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${element.occurDateStart}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">วันที่สิ้นสุดการเกิดเหตุ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${element.occurDateEnd}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อฐานความผิดข้อหา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${element.allegationName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ผลคำพิพากษา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${element.wordName}</p>
                        </div>
                    </div>
                    <div class="row"> 
                        <div class="col-3">
                            <p class="text-white font-20">สถานที่ทำการฝึกอบรม</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${element.practicePlaceName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">วันที่ศูนย์ฝึกรับตัว</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${element.registerDate}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">วันที่ปล่อยตัวออกจากศูนย์ฝึก</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${element.exitDate}</p>
                        </div>
                    </div>
                    `
                );
                console.log(this.caseLists)
                this.caseListsPDF.push(
                    `
                    <div class="row">
                        <div class="col-6">
                            <p class="text-white font-20"><b>ข้อมูลคดีที่ ${index+1}</b></p>
                        </div>
                    </div>                   
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20"> เลขคดีของแต่ละหน่วยงาน/ปีของเลขคดี</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${element.caseNo}/${element.caseYear}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">หน่วยงานเจ้าของคดี</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${element.unitAbbName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">วันที่เริ่มต้นการเกิดเหตุ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${element.occurDateStart}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">วันที่สิ้นสุดการเกิดเหตุ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${element.occurDateEnd}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อฐานความผิดข้อหา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${element.allegationName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ผลคำพิพากษา"</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${element.wordName}</p>
                        </div>
                    </div>
                    <div class="row"> 
                        <div class="col-3">
                            <p class="text-white font-20">สถานที่ทำการฝึกอบรม</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${element.practicePlaceName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">วันที่ศูนย์ฝึกรับตัว</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${element.registerDate}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">วันที่ปล่อยตัวออกจากศูนย์ฝึก</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${element.exitDate}</p>
                        </div>
                    </div>
                    
                    ${selectData.wartermarks}
                    `
                );
            });
        }
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
                <table border="0">
                    <tr>
                    <td rowspan="2"> 
                        <barcode:barcode xmlns:barcode="http://barcode4j.krysalis.org/ns" message="123456789012">
                            <barcode:ean-13/>
                        </barcode:barcode>
                    </td>
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
                <table class="table" border="2px" width="100%">
                    <tr>
                        <td align="center" class="text-white font-20">${title}</td>
                    </tr>
                </table>
                <div class="ml-3">
                    <div class="row mt-3">
                        <div class="col-3">
                            <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">
                                <a id="clickDjopJuvenileOffender65" type="button">${selectData.jvnCardId}</a>
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.jvnFname}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">นามสกุล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.jvnLname}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">วันเดือนปีเกิด</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.jvnBirthDate}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">เพศ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.jvnSex}</p>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20"><u>ข้อมูลคดี</u></p>
                        </div>
                    </div>
                    ${this.caseListsPDF}
                </div>
                ${selectData.wartermarks}
            </body>
        </html>`;
    }

    public viewgetHtml(selectData: IDxc_Model_Djop_JuvenileOffender65, title: string) {
        console.log(this.caseLists)
        return this.html = `<html>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
                <script>
                  $(document).ready(function() {
                    $('#confirmDjopJuvenileOffender65').click(function(){
                      $('#djopJuvenileOffender65').modal('toggle'); 
                      $('#djopJuvenileOffender65').on('hidden.bs.modal', function () {
                          $('body').addClass('modal-open');
                      });
                    });
                    $('#close').click(function(){
                      $('#djopJuvenileOffender65').modal('toggle');  
                      $('#djopJuvenileOffender65').on('hidden.bs.modal', function () {
                          $('body').addClass('modal-open');
                      });
                    });
                    $('#closeDjopJuvenileOffender65').click(function(){
                      $('#djopJuvenileOffender65').modal('toggle');  
                      $('#djopJuvenileOffender65').on('hidden.bs.modal', function () {
                          $('body').addClass('modal-open');
                      });
                    });
                    $("#djopJuvenileOffender65").modal({
                      show: false,
                      backdrop: 'static'
                    });
                    $("#clickDjopJuvenileOffender65").click(function() {
                    $("#djopJuvenileOffender65").modal("show");             
                    });
                  });
                </script>
            </head>
            <body>
                <table class="table" border="2px" width="100%">
                    <tr>
                        <td align="center" class="text-white font-20">${title}</td>
                    </tr>
                </table>
                <div class="ml-3">
                    <div class="row mt-3">
                        <div class="col-3">
                            <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                        </div>
                        <div class="col-6">
                            <p class="text-success font-20">
                                <a id="clickDjopJuvenileOffender65" type="button">${selectData.jvnCardId}<i class="material-icons">link</i></a>
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.jvnFname}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">นามสกุล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.jvnLname}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">วันเดือนปีเกิด</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.jvnBirthDate}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">เพศ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.jvnSex}</p>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20"><u>ข้อมูลคดี</u></p>
                        </div>
                    </div>
                    ${this.caseLists}
                </div>
            </body>
            <div id="djopJuvenileOffender65" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title text-white" id="exampleModalLongTitle">ยืนยันการค้นหา</h4>
                    <button type="button" class="close" id="close">×</button>
                  </div>
                  <div class="modal-body font-20 text-white text-center">
                    คุณต้องการเปิดรายงาน Single Report ของ <br>
                    หมายเลขบัตรประชาชนนี้ ${selectData.jvnCardId} ใช่หรือไม่
                  </div>
                  <div class="modal-footer">
                    <button type="button" id="closeDjopJuvenileOffender65" class="btn btn-danger">ยกเลิก</button>
                    <a id="confirmDjopJuvenileOffender65" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.jvnCardId}/0/0/0/0/0">ตกลง</a>				
                  </div>
                </div>
              </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </html>`;
    }

    public getSearchData() {
        const schema = 'djop-juvenile-offender-new';
        if(localStorage.getItem(schema + 'Results') === '[]' || 
        localStorage.getItem(schema + 'Results') === null) {

        } else {
          this.show = true;
          this.obj = localStorage.getItem(schema + 'Results');
          this.results = JSON.parse(this.obj);
          this.count = this.results.length; // นับจำนวนรายการ
        }
    }

    public getallegationPdf() {
        const schema = 'djop-juvenile-offender-new';
        if(localStorage.getItem(schema + 'Results') === '[]' || 
            localStorage.getItem(schema + 'Results') === null) {
            this.allegationPdf = [];
            console.log('เด็กหรือเยาวชนผู้กระทำผิด PDF null');
        } else {
            this.show = true;
            this.obj = localStorage.getItem(schema + 'Results');
            this.results = JSON.parse(this.obj);
            this.count = this.results.length; // นับจำนวนรายการ
            this.allegationPdfCount = `<div class="col-md-11"
                class="row card singlereport-timeline-item list-normal-design-head-collapse">
                <span class="list-normal-design-underline depart">กรมพินิจและคุ้มครองเด็กและเยาวชน: </span>
                <span class="list-normal-design-underline departdata">เด็กหรือเยาวชนผู้กระทำผิด</span>
                <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ
                </span>
              </div>`;
            this.loadReportDetail();for (let i = 0; i < this.results.length; i++) {
                for (let index = 0; index < this.results[i].caseDetailList.length; index++) {
                    // const element = this.results[i].caseDetailList[index];
                    
                    this.allegationPdf.push(`
                        <div class="col-md-11">
                        <div class="section-criminal-results"
                        style="text-indent:25px;font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
                        <span class="list-normal-design-underline depart">เด็กหรือเยาวชนผู้กระทำผิด</span>
                        <div style="padding-left:15px;">
                            <strong class="report-field-title">ชื่อ</strong>&nbsp;&nbsp;
                            <span class="report-field-value" style="text-decoration:underline">
                            ${this.changeNull(this.results[i].jvnFname)}</span>&nbsp;&nbsp;
                            <strong class="report-field-title">นามสกุล</strong>&nbsp;&nbsp;
                            <span class="report-field-value" style="text-decoration:underline">
                            ${this.changeNull(this.results[i].jvnLname)}</span>&nbsp;&nbsp;
                            <strong class="report-field-title">วันที่ศูนย์ฝึกรับตัว</strong>&nbsp;&nbsp;
                            <span class="report-field-value" style="text-decoration:underline">
                            ${this.changeNull(this.results[i].caseDetailList[index].registerDate)}</span>&nbsp;&nbsp;
                            <strong class="report-field-title">ชื่อฐานความผิดข้อหา</strong>&nbsp;&nbsp;
                            <span class="report-field-value" style="text-decoration:underline">
                            ${this.changeNull(this.results[i].caseDetailList[index].allegationName)}</span>&nbsp;&nbsp;
                        </div>
                        </div>
                        </div>${this.loadReportDetail()}
                    `);
                    console.log('djop.allegationPdf: ' + this.allegationPdf[i]);
                }
            }
        }
    }

    changeNull(selectData: string) {
      if (selectData === null || selectData === 'null') {
        return '-';
      } else {
        return selectData;
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
     * Getter $results
     * @return {IDxc_Model_Djop_JuvenileOffender65[]}
     */
	public get $results(): IDxc_Model_Djop_JuvenileOffender65[] {
		return this.results;
	}

    /**
     * Setter $results
     * @param {IDxc_Model_Djop_JuvenileOffender65[]} value
     */
	public set $results(value: IDxc_Model_Djop_JuvenileOffender65[]) {
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
     * Getter $show
     * @return {boolean}
     */
	public get $show(): boolean {
		return this.show;
	}

    /**
     * Getter $count
     * @return {number}
     */
	public get $count(): number {
		return this.count;
	}

    /**
     * Getter $allegationPdf
     * @return {string []}
     */
	public get $allegationPdf(): string [] {
		return this.allegationPdf;
	}

    /**
     * Getter $allegationPdfCount
     * @return {string}
     */
	public get $allegationPdfCount(): string {
		return this.allegationPdfCount;
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
     * Setter $count
     * @param {number} value
     */
	public set $count(value: number) {
		this.count = value;
	}

    /**
     * Setter $allegationPdf
     * @param {string []} value
     */
	public set $allegationPdf(value: string []) {
		this.allegationPdf = value;
	}

    /**
     * Setter $allegationPdfCount
     * @param {string} value
     */
	public set $allegationPdfCount(value: string) {
		this.allegationPdfCount = value;
	}
}
