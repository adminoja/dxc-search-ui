import * as moment from "moment";
import { Dxc_Model_Rtp_TravelInformation, IDxc_Model_Rtp_TravelInformation } from "src/app/core/shared/models/Dxc_Model_Rtp_TravelInformation";
import { Injectable } from "@angular/core";

export interface IReportRtpTravelInformation {
    model: IDxc_Model_Rtp_TravelInformation;
}

@Injectable()
export class RtpTravelInformationMetadata {
    reportName: string;
    reportOfTime: string;
    reportOfDate: string;
    html: string;
    private results: IDxc_Model_Rtp_TravelInformation[];
    private obj: string;
    private show: boolean;
    private count: number;
    private normalPdf: string[];
    private normalPdfCount: string;
  
    constructor() {
      this.results = [];
      this.count = 0;
      this.normalPdf = [];
      this.normalPdfCount = '';
  
    }
    // public getHtml(selectData: IDxc_Model_Rtp_TravelInformation, title: string) {
  
    //   return this.html = `<html>
    //         <head>
    //         <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
    //         <style>
    //         @font-face {
    //         font-family: 'THSarabunNew';
    //         src: url(https://search.dxc.go.th/public/font/THSarabunNew.ttf);
    //         }
    //         html {
    //         font-family: 'THSarabunNew';
    //         height: 100%;
    //         width: 100%;
    //         }
    //         .watermark {
    //         content: '';
    //         z-index: 50;
    //         font-family: THSarabunNew;
    //         font-size: 11pt;
    //         color: rgba(192,192,192,0.7);
    //         text-transform: uppercase;
    //         text-align: center;
    //         transform: rotate(-45.7deg);
    //         position: absolute;
    //         width: 150%;
    //         height: 150%;
    //         top: -180px;
    //         left: 30px;
    //         }
    //         .watermark2 {
    //         content: '';
    //         z-index: 100;
    //         font-family: THSarabunNew;
    //         font-size: 11pt;
    //         text-align: center;
    //         color: rgba(192,192,192,0.7);
    //         text-transform: uppercase;
    //         transform: rotate(-45.7deg);
    //         position: absolute;
    //         width: 150%;
    //         height: 150%;
    //         top: -90px;
    //         left: 50px;
    //         }
    //         .watermark3 {
    //         content: '';
    //         z-index: 100;
    //         font-family: THSarabunNew;
    //         font-size: 11pt;
    //         color: rgba(192,192,192,0.7);
    //         text-align: center;
    //         text-transform: uppercase;
    //         transform: rotate(-45.7deg);
    //         position: absolute;
    //         width: 150%;
    //         height: 150%;
    //         top: -10px;
    //         left: 80px;
    //         }
    //         .watermark4 {
    //         content: '';
    //         z-index: 100;
    //         font-family: THSarabunNew;
    //         font-size: 11pt;
    //         color: rgba(192,192,192,0.7);
    //         text-align: center;
    //         text-transform: uppercase;
    //         transform: rotate(-45.7deg);
    //         position: absolute;
    //         width: 150%;
    //         height: 150%;
    //         top: 0px;
    //         left: 200px;
    //         }
    //         .watermark5 {
    //         content: '';
    //         z-index: 100;
    //         font-family: THSarabunNew;
    //         font-size: 11pt;
    //         color: rgba(192,192,192,0.7);
    //         text-align: center;
    //         text-transform: uppercase;
    //         transform: rotate(-45.7deg);
    //         position: absolute;
    //         width: 150%;
    //         height: 150%;
    //         top: 5px;
    //         left: 300px;
    //         }
    //         .watermark6 {
    //         content: '';
    //         z-index: 100;
    //         font-family: THSarabunNew;
    //         font-size: 11pt;
    //         color: rgba(192,192,192,0.7);
    //         text-align: center;
    //         text-transform: uppercase;
    //         transform: rotate(-45.7deg);
    //         position: absolute;
    //         width: 150%;
    //         height: 150%;
    //         top: 50px;
    //         left: 350px;
    //         }
    //         .watermark7 {
    //         content: '';
    //         z-index: 100;
    //         font-family: THSarabunNew;
    //         font-size: 11pt;
    //         color: rgba(192,192,192,0.7);
    //         text-align: center;
    //         text-transform: uppercase;
    //         transform: rotate(-45.7deg);
    //         position: absolute;
    //         width: 150%;
    //         height: 150%;
    //         top: 120px;
    //         left: 400px;
    //         }
    //         .watermark8 {
    //         content: '';
    //         z-index: 100;
    //         font-family: THSarabunNew;
    //         font-size: 11pt;
    //         color: rgba(192,192,192,0.7);
    //         text-align: center;
    //         text-transform: uppercase;
    //         transform: rotate(-45.7deg);
    //         position: absolute;
    //         width: 150%;
    //         height: 150%;
    //         top: 190px;
    //         left: 450px;
    //         }
    //         .watermark9 {
    //         content: '';
    //         z-index: 100;
    //         font-family: THSarabunNew;
    //         font-size: 11pt;
    //         color: rgba(192,192,192,0.7);
    //         text-align: center;
    //         text-transform: uppercase;
    //         transform: rotate(-45.7deg);
    //         position: absolute;
    //         width: 150%;
    //         height: 150%;
    //         top: 260px;
    //         left: 500px;
    //         }
    //         .watermark10 {
    //         content: '';
    //         z-index: 100;
    //         font-family: THSarabunNew;
    //         font-size: 11pt;
    //         color: rgba(192,192,192,0.7);
    //         text-align: center;
    //         text-transform: uppercase;
    //         transform: rotate(-45.7deg);
    //         position: absolute;
    //         width: 150%;
    //         height: 150%;
    //         top: 330px;
    //         left: 550px;
    //         }
    //         .watermark11 {
    //         content: '';
    //         z-index: 100;
    //         font-family: THSarabunNew;
    //         font-size: 11pt;
    //         color: rgba(192,192,192,0.7);
    //         text-align: center;
    //         text-transform: uppercase;
    //         transform: rotate(-45.7deg);
    //         position: absolute;
    //         width: 150%;
    //         height: 150%;
    //         top: 390px;
    //         left: 600px;
    //         }
    //         .colorfont {
    //         color: blue;
    //         }
    //         body {
    //         font-family: THSarabunNew;
    //         font-size: 18px;
    //         }
    //         div.header {
    //         display: block;
    //         text-align: center;
    //         position: running(header);
    //         width: 100%;
    //         }
    //         div.footer {
    //         display: block;
    //         text-align: center;
    //         position: running(footer);
    //         width: 100%;
    //         }
    //         footer{
    //         position: running(footerIdentifier);
    //         }
    //         barcode {
    //         top: 0px;
    //         width:120px;
    //         height:40px;
    //         }
    //         @page {
    //             @bottom-left {
    //             font: 9pt arial, THSarabunNew;
    //             text-align: right;
    //             margin-bottom: 5mm;
    //             margin-top: 0mm;
    //             border-top: 0.2mm solid #006DAB;
    //             vertical-align: top;
    //             padding-top: 0cm;
    //             content: element(footerIdentifier);
    //             }
    //         }
    //         div.container {
    //             min-height: 10em;
    //             display: table-cell;
    //             vertical-align: middle
    //         }
    //         @media print {
    //             @page {
    //             font-family: THSarabunNew;
    //             margin: 1.5cm;
    //             padding-top: 12pt;
    //                                     /* Initialize the page counter */
    //                                     counter-increment: page 1;
        
    //                                     /* The following lines are styles for page margin boxes
    //                         which are described in the CSS 3 paged media module draft.
    //                         The @xyz selector indicates the location of the box
    //                     */
        
    //                                     @bottom-right {
    //             font: 9pt arial, THSarabunNew;
    //             text-align: right;
    //             margin-bottom: 5mm;
    //             margin-top: 0mm;
    //             border-top: 0.2mm solid #006DAB;
    //             vertical-align: top;
    //             padding-top: 0.1cm;
    //             content: 'หน้า ' counter(page) ' / ' counter(pages);
    //             }
    //         }
    //         /* repeating page background image */
    //         html {
    //             font-family: 'THSarabunNew';
    //             height: 100%;
    //             width: 100%;
    //             background-attachment: scroll;
    //             box-decoration-break: clone;
    //             background-position: 0 -12pt;
    //         }
    //         .barcode {
    //             font: 7pt arial, THSarabunNew;
    //             text-align: left;
    //             margin-bottom: 5mm;
    //             margin-top: 2mm;
    //             border-top: 0.2mm solid #006DAB;
    //             vertical-align: top;
    //             padding-top: 0.1cm;
    //             content: '';
    //         }
    //         .row {
    //             display: -webkit-box;
    //             display: -ms-flexbox;
    //             display: flex;
    //             -ms-flex-wrap: wrap;
    //                 flex-wrap: wrap;
    //             margin-right: -12px;
    //             margin-left: -12px;
    //         }
    //         .col {
    //             width: 10%;
    //             margin-bottom: -2rem;
    //             -ms-flex-wrap: wrap;
    //                 flex-wrap: wrap;
    //         }
    //         .col-1 {
    //             width: 15%;
    //             margin-bottom: -2rem;
    //             -ms-flex-wrap: wrap;
    //                 flex-wrap: wrap;
    //         }
    //         .col-2 {
    //             width: 20%;
    //             margin-bottom: -2rem;
    //             -ms-flex-wrap: wrap;
    //                 flex-wrap: wrap;
    //         }
    //         .col-3 {
    //             width: 25%;
    //             margin-bottom: -2rem;
    //             -ms-flex-wrap: wrap;
    //                 flex-wrap: wrap;
    //         }
    //         .col-6 {
    //             width: 50%;
    //             margin-bottom: -2rem;
    //             -ms-flex-wrap: wrap;
    //                 flex-wrap: wrap;
    //         }
    //         .col-9 {
    //             width: 75%;
    //             margin-bottom: -2rem;
    //             -ms-flex-wrap: wrap;
    //                 flex-wrap: wrap;
    //         }
    //         .col-12 {
    //             width: 100%;
    //             margin-bottom: -2rem;
    //             -ms-flex-wrap: wrap;
    //                 flex-wrap: wrap;
    //         }
    //         .text-success {
    //             color: #0000cd !important;
    //         }
    //         .font-24 {
    //             font-size: 18px !important;
    //         }
    //         .mb-3,
    //         .my-3 {
    //             margin-bottom: 1.5rem !important;
    //         }
    //         .ml-3,
    //         .mx-3 {
    //             margin-left: 1.5rem !important;
    //         }
    //         .mt-3,
    //         .my-3 {
    //             margin-top: 1.5rem !important;
    //         }
    //         #tablecollapse {
    //             width: 100%;
    //             border-collapse: collapse;
    //             border: 1px solid black;
    //         }
    //         #tablecollapse > tbody > tr > td {
    //             border: 1px solid black;
    //         }
    //         /* Cross-references */
    //         a.int::after {
    //             content: ' (see page ' target-counter(-ro-attr(href url), page) ')';
    //         }
    //         }
    //         </style>
    //         </head>
    //         <body>
    //             <div>
    //                 <footer>
    //                     <table border="0">
    //                     <tr>
    //                         <td rowspan="2"> <barcode:barcode xmlns:barcode="http://barcode4j.krysalis.org/ns" message="123456789012">
    //                         <barcode:ean-13/>
    //                         </barcode:barcode></td>
    //                         <td >ผู้พิมพ์ ${selectData.reportName}</td>
    //                     </tr>
    //                     <tr>
    //                         <td >วันที่ ${selectData.reportOfDate} เวลา ${selectData.reportOfTime}</td>
    //                     </tr>
    //                     </table>
    //                 </footer>
    //                 <div>
    //                     <img src="https://search.dxc.go.th/public/image/DXC_logo.jpg" style="width: 150px; height: 50px" />
    //                     <div>
    //                         <label>DXC Report</label>
    //                         <br>
    //                         <a href="www.dxc.go.th">www.dxc.go.th</a>
    //                     </div>
    //                     <hr>
    //                 </div>
    //                 <table class="table" border="2px" width="100%">
    //                     <tr>
    //                     <td align="center">ฐานข้อมูล${title}</td>
    //                     </tr>
    //                 </table>
    //                 <br/>
    //                 ${selectData.wartermarks}
    //                 <div class="ml-3">
    //                     <div class="row">
    //                         <div class="col-2">
    //                             <p class="text-white font-20">เลขประจำตัวประชาชน</p>
    //                         </div>
    //                         <div class="col-3">
    //                             <p class="text-success font-20">${selectData.citizenCardNumber}</p>
    //                         </div>
    //                     </div>
    //                     <div class="row">
    //                         <div class="col-2">
    //                             <p class="text-white font-20">หมายเลขอ้างอิง</p>
    //                         </div>
    //                         <div class="col-3">
    //                             <p class="text-success font-20">${selectData.refNumber}</p>
    //                         </div>
    //                         <div class="col-2">
    //                             <p class="text-white font-20">หมายเลขพาสพอร์ท</p>
    //                         </div>
    //                         <div class="col-3">
    //                             <p class="text-success font-20">${selectData.tdtNo}</p>
    //                         </div>
    //                     </div>
    //                     <div class="row">
    //                         <div class="col-2">
    //                             <p class="text-white font-20">ประเภทการเดินทาง</p>
    //                         </div>
    //                         <div class="col-3">
    //                             <p class="text-success font-20">${selectData.inOutType}</p>
    //                         </div>
    //                         <div class="col-2">
    //                             <p class="text-white font-20">ชื่อ สกุล ผู้โดยการ (Eng)</p>
    //                         </div>
    //                         <div class="col-3">
    //                             <p class="text-success font-20">${selectData.eFullName}</p>
    //                         </div>
    //                     </div>
    //                     <div class="row">
    //                         <div class="col-2">
    //                             <p class="text-white font-20">เพศ</p>
    //                         </div>
    //                         <div class="col-9">
    //                             <p class="text-success font-20">${selectData.sex}</p>
    //                         </div>
    //                         <div class="col-2">
    //                             <p class="text-white font-20">สัญชาติ</p>
    //                         </div>
    //                         <div class="col-9">
    //                             <p class="text-success font-20">${selectData.nationEnm}</p>
    //                         </div>
    //                     </div>
    //                     <div class="row">
    //                         <div class="col-2">
    //                             <p class="text-white font-20">วันเดือนปี เกิด</p>
    //                         </div>
    //                         <div class="col-3">
    //                             <p class="text-success font-20">${selectData.birthDate}</p>
    //                         </div>
    //                         <div class="col-2">
    //                             <p class="text-white font-20">ประเภทวีซ่า</p>
    //                         </div>
    //                         <div class="col-3">
    //                             <p class="text-success font-20">${selectData.visaType}</p>
    //                         </div>
    //                     </div>
    //                     <div class="row">
    //                         <div class="col-2">
    //                             <p class="text-white font-20">หมายเลขทะเบียนพาหนะ</p>
    //                         </div>
    //                         <div class="col-3">
    //                             <p class="text-success font-20">${selectData.convregNo}</p>
    //                         </div>
    //                         <div class="col-2">
    //                             <p class="text-white font-20">ประเภทพาหนะ</p>
    //                         </div>
    //                         <div class="col-3">
    //                             <p class="text-success font-20">${selectData.convenm}</p>
    //                         </div>
    //                     </div>
    //                     <div class="row">
    //                         <div class="col-2">
    //                             <p class="text-white font-20">ด่านที่เดินทาง</p>
    //                         </div>
    //                         <div class="col-3">
    //                             <p class="text-success font-20">${selectData.deptTnm}</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </body>
    //     </html>`;
    // }
    // public viewgetHtml(selectData: IDxc_Model_Rtp_TravelInformation, title: string) {
    //   console.log(selectData.citizenCardNumber)
    //   return this.html = `<html>
    //         <head>
    //         <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    //         <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    //           <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    //           <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    //           <script>
    //             $(document).ready(function() {
    //               $('#confirmTravelInformation').click(function(){
    //                 $('#travelInformation').modal('toggle'); 
    //                 $('#travelInformation').on('hidden.bs.modal', function () {
    //                     $('body').addClass('modal-open');
    //                 });
    //               });
    //               $('#close').click(function(){
    //                 $('#travelInformation').modal('toggle'); 
    //                 $('#travelInformation').on('hidden.bs.modal', function () {
    //                     $('body').addClass('modal-open');
    //                 }); 
    //               });
    //               $('#closeTravelInformation').click(function(){
    //                 $('#travelInformation').modal('toggle');
    //                 $('#travelInformation').on('hidden.bs.modal', function () {
    //                     $('body').addClass('modal-open');
    //                 });  
    //               });
    //               $("#travelInformation").modal({
    //                 show: false,
    //                 backdrop: 'static'
    //               });
    //               $("#clickTravelInformation").click(function() {
    //               $("#travelInformation").modal("show");             
    //               });
    //             });
    //           </script>
    //         </head>
        
    //         <body>
    //             <div>
    //                 <table class="table" border="2px" width="100%">
    //                     <tr>
    //                     <td align="center" class="text-white font-20">ฐานข้อมูล${title}</td>
    //                     </tr>
    //                 </table>
    //                 <br/>
    //                 <br/>
    //                 <div class="ml-3">
    //                     <div class="row">
    //                         <div class="col-2">
    //                             <p class="text-white font-20">เลขประจำตัวประชาชน</p>
    //                         </div>
    //                         <div class="col-3">
    //                             <p class="text-success font-20"><a class="text-success font-20" colspan="4" id="clickTravelInformation" type="button">
    //                             ${selectData.citizenCardNumber}<i class="material-icons">link</i></a></p>
    //                         </div>
    //                     </div>
    //                     <div class="row">
    //                         <div class="col-2">
    //                             <p class="text-white font-20">หมายเลขอ้างอิง</p>
    //                         </div>
    //                         <div class="col-3">
    //                             <p class="text-success font-20">${selectData.refNumber}</p>
    //                         </div>
    //                         <div class="col-2">
    //                             <p class="text-white font-20">หมายเลขพาสพอร์ท</p>
    //                         </div>
    //                         <div class="col-3">
    //                             <p class="text-success font-20">${selectData.tdtNo}</p>
    //                         </div>
    //                     </div>
    //                     <div class="row">
    //                         <div class="col-2">
    //                             <p class="text-white font-20">ประเภทการเดินทาง</p>
    //                         </div>
    //                         <div class="col-3">
    //                             <p class="text-success font-20">${selectData.inOutType}</p>
    //                         </div>
    //                         <div class="col-2">
    //                             <p class="text-white font-20">ชื่อ สกุล ผู้โดยการ (Eng)</p>
    //                         </div>
    //                         <div class="col-3">
    //                             <p class="text-success font-20">${selectData.eFullName}</p>
    //                         </div>
    //                     </div>
    //                     <div class="row">
    //                         <div class="col-2">
    //                             <p class="text-white font-20">เพศ</p>
    //                         </div>
    //                         <div class="col-9">
    //                             <p class="text-success font-20">${selectData.sex}</p>
    //                         </div>
    //                         <div class="col-2">
    //                             <p class="text-white font-20">สัญชาติ</p>
    //                         </div>
    //                         <div class="col-9">
    //                             <p class="text-success font-20">${selectData.nationEnm}</p>
    //                         </div>
    //                     </div>
    //                     <div class="row">
    //                         <div class="col-2">
    //                             <p class="text-white font-20">วันเดือนปี เกิด</p>
    //                         </div>
    //                         <div class="col-3">
    //                             <p class="text-success font-20">${selectData.birthDate}</p>
    //                         </div>
    //                         <div class="col-2">
    //                             <p class="text-white font-20">ประเภทวีซ่า</p>
    //                         </div>
    //                         <div class="col-3">
    //                             <p class="text-success font-20">${selectData.visaType}</p>
    //                         </div>
    //                     </div>
    //                     <div class="row">
    //                         <div class="col-2">
    //                             <p class="text-white font-20">หมายเลขทะเบียนพาหนะ</p>
    //                         </div>
    //                         <div class="col-3">
    //                             <p class="text-success font-20">${selectData.convregNo}</p>
    //                         </div>
    //                         <div class="col-2">
    //                             <p class="text-white font-20">ประเภทพาหนะ</p>
    //                         </div>
    //                         <div class="col-3">
    //                             <p class="text-success font-20">${selectData.convenm}</p>
    //                         </div>
    //                     </div>
    //                     <div class="row">
    //                         <div class="col-2">
    //                             <p class="text-white font-20">ด่านที่เดินทาง</p>
    //                         </div>
    //                         <div class="col-3">
    //                             <p class="text-success font-20">${selectData.deptTnm}</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </body>
    //         <div id="travelInformation" class="modal fade" tabindex="-1" data-backdrop="static" role="dialog" aria-hidden="true">
    //           <div class="modal-dialog modal-dialog-centered">
    //             <div class="modal-content">
    //               <div class="modal-header">
    //                 <h4 class="modal-title text-white" id="exampleModalLongTitle">ยืนยันการค้นหา</h4>
    //                 <button type="button" class="close" id="close">×</button>
    //               </div>
    //               <div class="modal-body font-20 text-white text-center">
    //                 คุณต้องการเปิดรายงาน Single Report ของ <br>
    //                 หมายเลขประจำตัวประชาชนนี้ ${selectData.citizenCardNumber} ใช่หรือไม่
    //               </div>
    //               <div class="modal-footer">
    //                 <button type="button" id="closeTravelInformation" class="btn btn-danger">ยกเลิก</button>
    //                 <a id="confirmTravelInformation" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.citizenCardNumber}/0/0/0/0/0">ตกลง</a>				
    //               </div>
    //             </div>
    //           </div><!-- /.modal-content -->
    //         </div><!-- /.modal-dialog -->
    //     </html>`;
    // }

    public getHtml(selectData: IDxc_Model_Rtp_TravelInformation, title: string) {
  
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
            .col {
                width: 10%;
                margin-bottom: -2rem;
                -ms-flex-wrap: wrap;
                    flex-wrap: wrap;
            }
            .col-1 {
                width: 15%;
                margin-bottom: -2rem;
                -ms-flex-wrap: wrap;
                    flex-wrap: wrap;
            }
            .col-2 {
                width: 20%;
                margin-bottom: -2rem;
                -ms-flex-wrap: wrap;
                    flex-wrap: wrap;
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
                    <table class="table" border="2px" width="100%">
                        <tr>
                        <td align="center">ฐานข้อมูล${title}</td>
                        </tr>
                    </table>
                    <br/>
                    ${selectData.wartermarks}
                    <div class="ml-3">
                        <div class="row">
                            <div class="col-2">
                                <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.idCardNo}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2">
                                <p class="text-white font-20">หมายเลขอ้างอิง</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.refNumber}</p>
                            </div>
                            <div class="col-2">
                                <p class="text-white font-20">หมายเลขพาสพอร์ท</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.tdtNo}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2">
                                <p class="text-white font-20">ประเภทการเดินทาง</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.inOutType}</p>
                            </div>
                            <div class="col-2">
                                <p class="text-white font-20">ชื่อ สกุล ผู้โดยการ (Eng)</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.efullName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2">
                                <p class="text-white font-20">เพศ</p>
                            </div>
                            <div class="col-9">
                                <p class="text-success font-20">${selectData.sex}</p>
                            </div>
                            <div class="col-2">
                                <p class="text-white font-20">สัญชาติ</p>
                            </div>
                            <div class="col-9">
                                <p class="text-success font-20">${selectData.naionEm}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2">
                                <p class="text-white font-20">วันเดือนปี เกิด</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.birthDate}</p>
                            </div>
                            <div class="col-2">
                                <p class="text-white font-20">ประเภทวีซ่า</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.visaType}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2">
                                <p class="text-white font-20">หมายเลขทะเบียนพาหนะ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.convregNo}</p>
                            </div>
                            <div class="col-2">
                                <p class="text-white font-20">ประเภทพาหนะ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.convmn}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2">
                                <p class="text-white font-20">ด่านที่เดินทาง</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.deptTnm}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>`;
    }
    public viewgetHtml(selectData: IDxc_Model_Rtp_TravelInformation, title: string) {
      return this.html = `<html>
            <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
              <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
              <script>
                $(document).ready(function() {
                  $('#confirmTravelInformation').click(function(){
                    $('#travelInformation').modal('toggle'); 
                    $('#travelInformation').on('hidden.bs.modal', function () {
                        $('body').addClass('modal-open');
                    });
                  });
                  $('#close').click(function(){
                    $('#travelInformation').modal('toggle'); 
                    $('#travelInformation').on('hidden.bs.modal', function () {
                        $('body').addClass('modal-open');
                    }); 
                  });
                  $('#closeTravelInformation').click(function(){
                    $('#travelInformation').modal('toggle');
                    $('#travelInformation').on('hidden.bs.modal', function () {
                        $('body').addClass('modal-open');
                    });  
                  });
                  $("#travelInformation").modal({
                    show: false,
                    backdrop: 'static'
                  });
                  $("#clickTravelInformation").click(function() {
                  $("#travelInformation").modal("show");             
                  });
                });
              </script>
            </head>
        
            <body>
                <div>
                    <table class="table" border="2px" width="100%">
                        <tr>
                        <td align="center" class="text-white font-20">ฐานข้อมูล${title}</td>
                        </tr>
                    </table>
                    <br/>
                    <br/>
                    <div class="ml-3">
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20"><a class="text-success font-20" colspan="4" id="clickTravelInformation" type="button">
                                ${selectData.idCardNo}<i class="material-icons">link</i></a></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">หมายเลขอ้างอิง</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.refNumber}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">หมายเลขพาสพอร์ท</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.tdtNo}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ประเภทการเดินทาง</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.inOutType}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อ สกุล ผู้โดยการ (Eng)</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.efullName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">เพศ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.sex}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">สัญชาติ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.naionEm}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">วันเดือนปี เกิด</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.birthDate}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ประเภทวีซ่า</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.visaType}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">หมายเลขทะเบียนพาหนะ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.convregNo}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ประเภทพาหนะ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.convmn}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ด่านที่เดินทาง</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.deptTnm}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
            <div id="travelInformation" class="modal fade" tabindex="-1" data-backdrop="static" role="dialog" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title text-white" id="exampleModalLongTitle">ยืนยันการค้นหา</h4>
                    <button type="button" class="close" id="close">×</button>
                  </div>
                  <div class="modal-body font-20 text-white text-center">
                    คุณต้องการเปิดรายงาน Single Report ของ <br>
                    หมายเลขประจำตัวประชาชนนี้ ${selectData.idCardNo} ใช่หรือไม่
                  </div>
                  <div class="modal-footer">
                    <button type="button" id="closeTravelInformation" class="btn btn-danger">ยกเลิก</button>
                    <a id="confirmTravelInformation" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.idCardNo}/0/0/0/0/0">ตกลง</a>				
                  </div>
                </div>
              </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </html>`;
    }

    public getSearchData() {
        // const schema = environment.qm.sub[0]['moac'].sub[0]['fisheriesillegal'].schema;
        const schema = 'rtp-travel-information';
        console.log(typeof (localStorage.getItem('rtp-travel-informationResults')));
        if (localStorage.getItem(schema + 'Results') === '[]'
          || localStorage.getItem(schema + 'Results') === null) {
    
          console.log('1.1');
        } else {
          this.show = true;
          this.obj = localStorage.getItem(schema + 'Results');
          this.results = JSON.parse(this.obj);
          this.count = this.results.length; // นับจำนวนรายการ
          console.log('rtp-travel-informationObj' + this.obj);
    
        }
      }
    
      public getnormalPdf() {
        // const schema = environment.qm.sub[0]['moac'].sub[0]['fisheriesillegal'].schema;
        const schema = 'rtp-travel-information';
        if (localStorage.getItem(schema + 'Results') === '[]' ||
        localStorage.getItem(schema + 'Results') === null) {
          this.normalPdf = [];
          console.log('1.1');
        } else {
          this.obj = localStorage.getItem(schema + 'Results');
          this.results = JSON.parse(this.obj);
          this.count = this.results.length; // นับจำนวนรายการ\
          this.normalPdfCount = `<div class="col-md-11"
          class="row card singlereport-timeline-item list-normal-design-head-collapse">
          <span class="list-normal-design-underline depart">สำนักงานตำรวจแห่งชาติ: </span>
          <span class="list-normal-design-underline departdata">ฐานข้อมูลการเดินทางเข้าออกประเทศ </span>
          <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ
          </span>
        </div>`;
          this.loadReportDetail();
          for (let i = 0; i < this.results.length; i++) {
            this.normalPdf.push(`
          <div class="col-md-11">
            <div class="section-criminal-results"
            style="text-indent:25px;font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
            <span style="text-decoration:underline; font-weight: bold;" class="report-section-source-title">
            ฐานข้อมูลการเดินทางเข้าออกประเทศ </span>
            <div style="padding-left:15px;">
            <strong class="report-field-title">หมายเลขอ้างอิง</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
              ${this.changeNull(this.results[i].refNumber)}</span>&nbsp;&nbsp;
              <strong class="report-field-title">หมายเลขพาสพอร์ท</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
              ${this.changeNull(this.results[i].tdtNo)}</span>&nbsp;&nbsp;
              <strong class="report-field-title">ประเภทการเดินทาง</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
              ${this.changeNull(this.results[i].inOutType)}</span>&nbsp;&nbsp;
              <strong class="report-field-title">ชื่อ สกุล ผู้โดยสาร (Eng)</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
              ${this.changeNull(this.results[i].efullName)}</span>&nbsp;&nbsp;
              <strong class="report-field-title">เพศ</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
              ${this.changeNull(this.results[i].sex)}</span>&nbsp;&nbsp;
              <strong class="report-field-title">สัญชาติ</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
              ${this.changeNull(this.results[i].naionEm)}</span>&nbsp;&nbsp;
              <strong class="report-field-title">ประเภทวีซ่า</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
              ${this.changeNull(this.results[i].visaType)}</span>&nbsp;&nbsp;
            </div>
          </div>
        </div>${this.loadReportDetail()}`);
          }
          console.log('1.2');
        }
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
    
      /**
       * Getter $normalPdf
       * @return {string[]}
       */
      public get $normalPdf(): string[] {
        return this.normalPdf;
      }
    
      /**
       * Setter $normalPdf
       * @param {string[]} value
       */
      public set $normalPdf(value: string[]) {
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
       * Getter $results
       * @return {IDxc_Model_Rtp_TravelInformation[]}
       */
      public get $results(): IDxc_Model_Rtp_TravelInformation[] {
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
       * @param {IDxc_Model_Rtp_TravelInformation[]} value
       */
      public set $results(value: IDxc_Model_Rtp_TravelInformation[]) {
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
  