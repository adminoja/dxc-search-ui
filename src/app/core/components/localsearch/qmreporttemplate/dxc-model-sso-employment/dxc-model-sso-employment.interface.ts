import * as moment from 'moment';
import { IDxc_Model_Sso_Employment } from 'src/app/core/shared/models/Dxc_Model_Sso_Employment';
import { Injectable } from "@angular/core";
export interface IReportSsoEmployment {
    model: IDxc_Model_Sso_Employment;
}
@Injectable()
export class SsoEmploymentMetaData {
    private results: IDxc_Model_Sso_Employment[];
    private obj: string;
    private show: boolean;
    private normalPdf: string [];
    private normalPdfCount: string;
    private count: number;
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
    public getHtml(selectData: IDxc_Model_Sso_Employment, title: string) {
      
        return (this.html = `
        <html>
            <head>
              <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
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
                      <a href="www.dxc.go.th">www.dxc.go.th</a>
                    </div>
                  <hr>
                </div>
                ${selectData.wartermarks}
                <table class="table" border="2px" width="100%">
                  <tr>
                    <td align="center">ฐานข้อมูล${title}</td>
                  </tr>
                </table>
                <br/>
                ${selectData.wartermarks}
                    <br />
                    <table class="table table-borderless mb-0">
                        <tbody>
                            <tr>
                                <td class="text-white font-20">เลขประจำตัวประชาชน</td>
                                <td><a class="text-success font-20">
                                  ${selectData.ssoNum}</td>
                                <td class="text-white font-20">	สถานะลูกจ้าง</td>
                                <td class="text-success font-20">${selectData.employStatusDesc}</td>
                            </tr>
                            <tr>
                                <td class="text-white font-20">ชื่อบริษัท</td>
                                <td class="text-success font-20">${selectData.companyName}</td>
                            </tr>
                            <tr>
                                <td class="text-white font-20">วันที่เริ่มจ้างงาน</td>
                                <td class="text-success font-20">${selectData.expStartDate}</td>
                                <td class="text-white font-20">วันที่ลาออก</td>
                                <td class="text-success font-20">${selectData.empResignDate}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </body>
        </html>`);
    }
    public viewgetHtml(selectData: IDxc_Model_Sso_Employment, title: string) {
        return this.html = `
        <html>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
                <script>
                  $(document).ready(function() {
                    $('#confirmSsoEmployment').click(function(){
                      $('#ssoEmployment').modal('hide');
                      $('#ssoEmployment').on('hidden.bs.modal', function () {
                        $('body').addClass('modal-open');
                      });   
                    });
                    $('#close').click(function(){
                      $('#ssoEmployment').modal('hide');
                      $('#ssoEmployment').on('hidden.bs.modal', function () {
                        $('body').addClass('modal-open');
                      });    
                    });
                    $('#closeSsoEmployment').click(function(){
                      $('#ssoEmployment').modal('hide');
                      $('#ssoEmployment').on('hidden.bs.modal', function () {
                        $('body').addClass('modal-open');
                      });  
                    });
                    $("#ssoEmployment").modal({
                      show: false,
                      backdrop: 'static'
                    });
                    $("#clickSsoEmployment").click(function() {
                      $("#ssoEmployment").modal("show");             
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
                    <br />
                    <br />
                    <table class="table table-borderless mb-0">
                        <tbody>
                            <tr>
                                <td class="text-white font-20">เลขประจำตัวประชาชน</td>
                                <td><a class="text-success font-20" id="clickSsoEmployment" type="button">
                                  ${selectData.ssoNum}<i class="material-icons">link</i></a></td>
                                <td class="text-white font-20">	สถานะลูกจ้าง</td>
                                <td class="text-success font-20">${selectData.employStatusDesc}</td>
                            </tr>
                            <tr>
                                <td class="text-white font-20">ชื่อบริษัท</td>
                                <td class="text-success font-20">${selectData.companyName}</td>
                            </tr>
                            <tr>
                                <td class="text-white font-20">วันที่เริ่มจ้างงาน</td>
                                <td class="text-success font-20">${selectData.expStartDate}</td>
                                <td class="text-white font-20">วันที่ลาออก</td>
                                <td class="text-success font-20">${selectData.empResignDate}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </body>
            <div id="ssoEmployment" class="modal fade" tabindex="-1" data-backdrop="static" role="dialog" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title text-white" id="exampleModalLongTitle">ยืนยันการค้นหา</h4>
                    <button type="button" class="close" id="close">×</button>
                  </div>
                  <div class="modal-body font-20 text-white text-center">
                    คุณต้องการเปิดรายงาน Single Report ของ <br>
                    หมายเลขบัตรประชาชนนี้ ${selectData.ssoNum} ใช่หรือไม่
                  </div>
                  <div class="modal-footer">
                    <button type="button" id="closeSsoEmployment" class="btn btn-danger">ยกเลิก</button>
                    <a id="confirmSsoEmployment" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.ssoNum}/0/0/0/0/0">ตกลง</a>				
                  </div>
                </div>
              </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </html>`;
    }

    public viewgetHtmlSingleReport(selectData: IDxc_Model_Sso_Employment, title: string) {
      return this.html = `
      <html>
          <head>
              <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          </head>
          <body>
              <div>
                  <table class="table" border="2px" width="100%">
                      <tr>
                          <td align="center" class="text-white font-20">ฐานข้อมูล${title}</td>
                      </tr>
                  </table>
                  <br />
                  <br />
                  <table class="table table-borderless mb-0">
                      <tbody>
                          <tr>
                              <td class="text-white font-20">เลขประจำตัวประชาชน</td>
                              <td class="text-success font-20">${selectData.ssoNum}</td>
                              <td class="text-white font-20">	สถานะลูกจ้าง</td>
                              <td class="text-success font-20">${selectData.employStatusDesc}</td>
                          </tr>
                          <tr>
                              <td class="text-white font-20">ชื่อบริษัท</td>
                              <td class="text-success font-20">${selectData.companyName}</td>
                          </tr>
                          <tr>
                              <td class="text-white font-20">วันที่เริ่มจ้างงาน</td>
                              <td class="text-success font-20">${selectData.expStartDate}</td>
                              <td class="text-white font-20">วันที่ลาออก</td>
                              <td class="text-success font-20">${selectData.empResignDate}</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </body>
      </html>`;
  }

    public getSearchData() {
        const schema = 'sso-employment';
          if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {
    
          } else {
            this.show = true;
            this.obj = localStorage.getItem(schema + 'Results');
            this.results = JSON.parse(this.obj);
            this.count = this.results.length;
    
          }
    }
    public getnormalPdf() {
        const schema = 'sso-employment';
    
          if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {
            this.normalPdf = [];
          } else {
            this.obj = localStorage.getItem(schema + 'Results');
            this.results = JSON.parse(this.obj);
            this.count = this.results.length; // นับจำนวนรายการ
            this.normalPdfCount = `<div class="col-md-11"
            class="row card singlereport-timeline-item list-normal-design-head-collapse">
            <span class="list-normal-design-underline depart">สำนักงานประกันสังคม: </span>
            <span class="list-normal-design-underline departdata">ประวัติผู้จ้างงาน</span>
            <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ
            </span>
            </div>`;
            this.loadReportDetail();
            for (let i = 0; i < this.results.length; i++) {
              this.normalPdf.push(`
              <div class="col-md-11">
              <div class="section-criminal-results" style="text-indent:25px;
              font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
              <span class="list-normal-design-underline depart">ประวัติผู้จ้างงาน</span>
                <div style="padding-left:15px;">
                        <strong class="report-field-title">ชื่อบริษัท:</strong>
                            <span class="report-field-value" style="text-decoration:underline"> 
                                ${this.changeNull(this.results[i].companyName)}</span>
                        <strong class="report-field-title">สถานะบริษัท:</strong>
                            <span class="report-field-value" style="text-decoration:underline">
                                ${this.changeNull(this.results[i].employStatusDesc)}</span>
                        <strong class="report-field-title">วันที่เริ่มจ้างงาน:</strong>
                            <span class="report-field-value" style="text-decoration:underline"> 
                                ${this.formatDate(this.results[i].expStartDate)}</span>
                  </div>
              </div>
              </div>${this.loadReportDetail()}`); 
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
    /**
     * Getter $results
     * @return {IDxc_Model_Sso_Employment[]}
     */
	public get $results(): IDxc_Model_Sso_Employment[] {
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
     * Getter $count
     * @return {number}
     */
	public get $count(): number {
		return this.count;
	}

    /**
     * Getter $normalPdf
     * @return {string []}
     */
	public get $normalPdf(): string [] {
		return this.normalPdf;
	}

    /**
     * Getter $normalPdfCount
     * @return {string}
     */
	public get $normalPdfCount(): string {
		return this.normalPdfCount;
	}

    /**
     * Setter $results
     * @param {IDxc_Model_Sso_Employment[]} value
     */
	public set $results(value: IDxc_Model_Sso_Employment[]) {
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
     * Setter $count
     * @param {number} value
     */
	public set $count(value: number) {
		this.count = value;
	}

    /**
     * Setter $normalPdf
     * @param {string []} value
     */
	public set $normalPdf(value: string []) {
		this.normalPdf = value;
	}

    /**
     * Setter $normalPdfCount
     * @param {string} value
     */
	public set $normalPdfCount(value: string) {
		this.normalPdfCount = value;
	}

}