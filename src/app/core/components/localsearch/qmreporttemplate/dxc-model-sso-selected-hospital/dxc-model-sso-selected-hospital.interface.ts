import * as moment from 'moment';
import { IDxc_Model_Sso_Selected_Hospital } from 'src/app/core/shared/models/Dxc_Model_Sso_Selected_Hospital';
import { Injectable } from "@angular/core";
export interface IReportSsolSsoSelectedHospital {
    model: IDxc_Model_Sso_Selected_Hospital;
}
@Injectable()
export class SsolSsoSelectedHospitalMetaData {
    private results: IDxc_Model_Sso_Selected_Hospital[];
    reportName: string;
    reportOfTime: string;
    reportOfDate: string;

    html: string;
    
    constructor() {}
    public getHtml(selectData: IDxc_Model_Sso_Selected_Hospital, title: string) {
      
        return (this.html = `
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
                                <p class="text-white font-20"><u>ข้อมูลผู้ประกันตน</u></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">
                                    ${selectData.persons.ssoNum}
                                </p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">คำนำหน้า</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.persons.titleCodeDesc}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อผู้ประกันตน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.persons.firstName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">สกุลผู้ประกันตน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.persons.lastName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">วันเดือนปี เกิด</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.persons.empBirthDate}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">เพศ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.persons.genderDesc}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">วันที่มรณะ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.persons.expirationDate}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">สถานะผู้ประกันตน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.persons.activeStatusDesc}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ประเภทบัตร</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.persons.idDesc}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20"></p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20"></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20"><u>ข้อมูลสถานพยาบาล</u></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อสถานพยาบาล</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.hospitalName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ปี การเลือกรพ.</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.medYY}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อ สปส.รับผิดชอบ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.ssoBranchName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">วันที่ลาออก</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.empResignDate}</p>
                            </div>
                        </div> 
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">วันออกบัตร</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.mselStartDate}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">บัตรหมดอายุ</p>
                            </div>
                            <div class="col-3">
                            <p class="text-success font-20">${selectData.mselExpireDate}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">วันที่เปลี่ยนแปลงครั้งสุดท้าย
                                </p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.mselLastChange}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">สถานะการอนุมัติ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.mselStatusDesc}</p>
                            </div>
                        </div>  
                    </div>
                </div>
            </body>
        </html>`);
    }
    public viewgetHtml(selectData: IDxc_Model_Sso_Selected_Hospital, title: string) {
        console.log(selectData.wartermarks)
        return this.html = `
        <html>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
                <script>
                    $(document).ready(function() {
                        $('#confirmSsolSsoSelectedHospital').click(function(){
                            $('#ssolSsoSelectedHospital').modal('hide');
                            $('#ssolSsoSelectedHospital').on('hidden.bs.modal', function () {
                                $('body').addClass('modal-open');
                            });   
                        });
                        $('#close').click(function(){
                            $('#ssolSsoSelectedHospital').modal('hide');
                            $('#ssolSsoSelectedHospital').on('hidden.bs.modal', function () {
                                $('body').addClass('modal-open');
                            });    
                        });
                        $('#closeSsolSsoSelectedHospital').click(function(){
                            $('#ssolSsoSelectedHospital').modal('hide');
                            $('#ssolSsoSelectedHospital').on('hidden.bs.modal', function () {
                                $('body').addClass('modal-open');
                            });  
                        });
                        $("#ssolSsoSelectedHospital").modal({
                            show: false,
                            backdrop: 'static'
                        });
                        $("#clickSsolSsoSelectedHospital").click(function() {
                            $("#ssolSsoSelectedHospital").modal("show");             
                        });
                    }); 
                </script>
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
                                <p class="text-white font-20"><u>ข้อมูลผู้ประกันตน</u></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">
                                    <a id="clickSsolSsoSelectedHospital" type="button">${selectData.persons.ssoNum}<i class="material-icons">link</i></a>
                                </p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">คำนำหน้า</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.persons.titleCodeDesc}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อผู้ประกันตน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.persons.firstName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">สกุลผู้ประกันตน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.persons.lastName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">วันเดือนปี เกิด</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.persons.empBirthDate}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">เพศ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.persons.genderDesc}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">วันที่มรณะ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.persons.expirationDate}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">สถานะผู้ประกันตน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.persons.activeStatusDesc}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ประเภทบัตร</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.persons.idDesc}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20"></p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20"></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20"><u>ข้อมูลสถานพยาบาล</u></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อสถานพยาบาล</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.hospitalName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ปี การเลือกรพ.</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.medYY}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อ สปส.รับผิดชอบ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.ssoBranchName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">วันที่ลาออก</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.empResignDate}</p>
                            </div>
                        </div> 
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">วันออกบัตร</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.mselStartDate}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">บัตรหมดอายุ</p>
                            </div>
                            <div class="col-3">
                            <p class="text-success font-20">${selectData.mselExpireDate}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">วันที่เปลี่ยนแปลงครั้งสุดท้าย
                                </p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.mselLastChange}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">สถานะการอนุมัติ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.mselStatusDesc}</p>
                            </div>
                        </div>  
                    </div>
                </div>
            </body>
            <div id="ssolSsoSelectedHospital" class="modal fade" tabindex="-1" data-backdrop="static" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title text-white" id="exampleModalLongTitle">ยืนยันการค้นหา</h4>
                            <button type="button" class="close" id="close">×</button>
                        </div>
                        <div class="modal-body font-20 text-white text-center">
                            คุณต้องการเปิดรายงาน Single Report ของ <br>
                            หมายเลขบัตรประชาชนนี้ ${selectData.persons.ssoNum} ใช่หรือไม่
                        </div>
                        <div class="modal-footer">
                            <button type="button" id="closeSsolSsoSelectedHospital" class="btn btn-danger">ยกเลิก</button>
                            <a id="confirmSsolSsoSelectedHospital" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.persons.ssoNum}/0/0/0/0/0">ตกลง</a>				
                        </div>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </html>`;
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
    changeNull(selectData: string) {
            if (selectData == null) {
                return '-';
            } else {
                return selectData;
            }
    }
    formatDate(dateOfBirth: string): string {

      const date = new Date(dateOfBirth);
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear() + 543;
      if (dateOfBirth === 'null' || dateOfBirth === "") {
        return '-';
      } else {
        const thmonth = new Array ('มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
              'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม');
        return `${day} ${thmonth[month]} ${year}`;
      }
    }

}