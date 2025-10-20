import { Utils } from '../../../../shared/utils/Utils';
import * as moment from 'moment';
import { Dxc_Model_Dopa_MoiDopaPor4Licenses } from '../../../../shared/models/Dxc_Model_Dopa_MoiDopaPor4Licenses';
import { Injectable } from "@angular/core";

export interface IReportDopaMoiPor4 {
    model: Dxc_Model_Dopa_MoiDopaPor4Licenses;
}

@Injectable()
export class DopaMoiPor4Metadata {

    private results: Dxc_Model_Dopa_MoiDopaPor4Licenses[];
    private obj: string;
    private show: boolean;
    private countResults: number; // ผลรวมคดี
    private normalPdf: string[];
    private util: Utils;
    private count: number;
    private normalPdfCount: string;
    reportName: string;
    reportOfTime: string;
    reportOfDate: string;
    html: string;

    private resultsContact: Dxc_Model_Dopa_MoiDopaPor4Licenses[];
    private countContact: number;
    private objContact: string;
    private showContact: boolean;


    constructor() {
        this.util = new Utils();
        this.results = [];
        this.normalPdf = [];
        this.count = 0;
        this.normalPdfCount = '';
        //Contact
        this.resultsContact = [];
        this.countContact = 0;
    }

    public getHtml(selectData: Dxc_Model_Dopa_MoiDopaPor4Licenses, title: string) {

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
                <div>
                    <table class="table" border="2px" width="100%">
                        <tr>
                            <td align="center" class="text-white font-20">${title}</td>
                        </tr>
                    </table>
                    <br/>
                    <div class="row">
                        <div class="col-3"></div>
                        <div class="col-3"></div>
                        <div class="col-3">
                            <p class="text-white font-20">เลขที่ใบอนุญาต</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.docID}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3"></div>
                        <div class="col-3"></div>
                        <div class="col-3">
                            <p class="text-white font-20">วันเดือนปีที่ออกใบอนุญาต</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.docDate}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20"><u>รายละเอียดใบอนุญาต</u></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">
                                <a target="_blank" class="text-success font-20" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.citizenCardNumber}/0/0/0/0/0">
                                ${selectData.citizenCardNumber}<i class="material-icons"></i></a>
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อนิติบุคคล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.businessName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ประเภทนิติบุคคล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.businessType}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">สำนักทะเบียนที่ออกใบอนุญาต/ใบแทน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.docPlaceDesc}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">จังหวัดที่ออกใบอนุญาต/ใบแทน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.docPlaceProvince}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">วันเดือนปีที่ใบอนุญาต สิ้นอายุ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.expireDate}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <p class="text-white font-20">เลขประจำตัวประชาชนผู้รับใบอนุญาต / เลขประจำตัวประชาชนตัวแทนนิติบุคคล คนที่ 1</p>
                        </div>
                        <div class="col-6">
                            <p class="text-success font-20">
                                <a target="_blank" class="text-success font-20" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.personalId}/0/0/0/0/0">
                                ${selectData.personalId}<i class="material-icons"></i></a>
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <p class="text-white font-20">เลขประจำตัวประชาชนผู้รับใบอนุญาต / เลขประจำตัวประชาชนตัวแทนนิติบุคคล คนที่ 2</p>
                        </div>
                        <div class="col-6">
                            <p class="text-success font-20">
                                <a target="_blank" class="text-success font-20" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.personalId2}/0/0/0/0/0">
                                ${selectData.personalId2}<i class="material-icons"></i></a>
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อตัว</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.firstName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อสกุล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.lastName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อกลาง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.middleName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อเต็มผู้ขอใบอนุญาต</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.fullNameAndRank}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เพศผู้ขอใบอนุญาต</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.genderDesc}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อตัว คนที่ 2</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.firstName2}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อสกุล คนที่ 2</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.lastName2}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อกลาง คนที่ 2</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.middleName2}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อเต็มผู้รับใบอนุญาต คนที่ 2</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.fullNameAndRank2}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เพศผู้รับใบอนุญาต คนที่ 2</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.genderDesc2}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชนิดอาวุธปืน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.gunCharacteristic}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ผู้ผลิต</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.gunProduct}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เครื่องหมายทะเบียนปืน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.gunRegistrationId}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">เลขหมายประจำปืน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.gunSerialNo}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ขนาดอาวุธปืน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.gunSize}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ประเภทอาวุธ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.gunType}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขรหัสประจำบ้านผู้รับใบอนุญาต</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.hid}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">สนท. ตามที่อยู่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.hidRcodeDesc}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">เลขรหัสประจำบ้านผู้รับใบอนุญาต คนที่ 2</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.hid2}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">สนท. ตามที่อยู่ คนที่ 2</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.hidRcodeDesc2}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20"><u>ที่อยู่ (ตามที่อยู่)</u></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">บ้านเลขที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.hno}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ตรอก</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.trok}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ซอย</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.soi}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ถนน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.thanon}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ตำบล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.districtDesc}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">อำเภอ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.amphorDesc}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">จังหวัด</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.provinceDesc}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20"><u>ที่อยู่ (คนที่2)</u></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">บ้านเลขที่</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.hno2}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ตรอก</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.trok2}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ซอย</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.soi2}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ถนน</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.thanon2}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ตำบล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.districtDesc2}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">อำเภอ</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.amphorDesc2}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">จังหวัด</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.provinceDesc2}</p>
                        </div>
                    </div>
                </div>
                ${selectData.wartermarks}   
          </body>
      </html>
        `;
    }
    public viewgetHtml(selectData: Dxc_Model_Dopa_MoiDopaPor4Licenses, title: string) {
        let checkCitizenCardNumber = '';
        if(selectData.personalId == '-') {
        checkCitizenCardNumber = `${selectData.personalId}`
        } else {
        checkCitizenCardNumber =`
        <a class="text-success font-20" id="clickDopaMoiDopaPor4LicensesPersonalId" type="button">
            ${selectData.personalId}<i class="material-icons">link</i></a>`
        }

        let checkCitizenCardNumber2 = '';
        if(selectData.personalId2 == '-'){
            checkCitizenCardNumber2 = `${selectData.personalId2}`
        } else {
            checkCitizenCardNumber2 =`
            <a class="text-success font-20" id="clickDopaMoiDopaPor4LicensesPersonalId2" type="button">
                ${selectData.personalId2}<i class="material-icons">link</i></a>>`
        }
        return this.html = `
        <html>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
                <script>
                    $(document).ready(function() {
                        $('#confirmDopaMoiDopaPor4Licenses').click(function(){
                            $('#dopaMoiDopaPor4Licenses').modal('toggle'); 
                            $('#dopaMoiDopaPor4Licenses').on('hidden.bs.modal', function () {
                                $('body').addClass('modal-open');
                            });
                        });
                        $('#close').click(function(){
                            $('#dopaMoiDopaPor4Licenses').modal('toggle'); 
                            $('#dopaMoiDopaPor4Licenses').on('hidden.bs.modal', function () {
                                $('body').addClass('modal-open');
                            });
                        });
                        $('#closeDopaMoiDopaPor4Licenses').click(function(){
                            $('#dopaMoiDopaPor4Licenses').modal('toggle'); 
                            $('#dopaMoiDopaPor4Licenses').on('hidden.bs.modal', function () {
                                $('body').addClass('modal-open');
                            });
                        });
                        $("#dopaMoiDopaPor4Licenses").modal({
                            show: false,
                            backdrop: 'static'
                        });
                        $("#clickDopaMoiDopaPor4Licenses").click(function() {
                        $("#dopaMoiDopaPor4Licenses").modal("show");
                        });
                    });
                    $(document).ready(function() {
                        $('#confirmDopaMoiDopaPor4LicensesPersonalId').click(function(){
                            $('#dopaMoiDopaPor4LicensesPersonalId').modal('toggle');
                            $('#dopaMoiDopaPor4LicensesPersonalId').on('hidden.bs.modal', function () {
                                $('body').addClass('modal-open');
                            });
                        });
                        $('#closePersonalId').click(function(){
                            $('#dopaMoiDopaPor4LicensesPersonalId').modal('toggle');
                            $('#dopaMoiDopaPor4LicensesPersonalId').on('hidden.bs.modal', function () {
                                $('body').addClass('modal-open');
                            });
                        });
                        $('#closeDopaMoiDopaPor4LicensesPersonalId').click(function(){
                            $('#dopaMoiDopaPor4LicensesPersonalId').modal('toggle');
                            $('#dopaMoiDopaPor4LicensesPersonalId').on('hidden.bs.modal', function () {
                                $('body').addClass('modal-open');
                            });
                        });
                        $("#dopaMoiDopaPor4LicensesPersonalId").modal({
                            show: false,
                            backdrop: 'static'
                        });
                        $("#clickDopaMoiDopaPor4LicensesPersonalId").click(function() {
                        $("#dopaMoiDopaPor4LicensesPersonalId").modal("show");
                        });
                    });
                    $(document).ready(function() {
                        $('#confirmDopaMoiDopaPor4LicensesPersonalId2').click(function(){
                            $('#dopaMoiDopaPor4LicensesPersonalId2').modal('toggle');
                            $('#dopaMoiDopaPor4LicensesPersonalId2').on('hidden.bs.modal', function () {
                                $('body').addClass('modal-open');
                            });
                        });
                        $('#closePersonalId2').click(function(){
                            $('#dopaMoiDopaPor4LicensesPersonalId2').modal('toggle');
                            $('#dopaMoiDopaPor4LicensesPersonalId2').on('hidden.bs.modal', function () {
                                $('body').addClass('modal-open');
                            });
                        });
                        $('#closeDopaMoiDopaPor4LicensesPersonalId2').click(function(){
                            $('#dopaMoiDopaPor4LicensesPersonalId2').modal('toggle');
                            $('#dopaMoiDopaPor4LicensesPersonalId2').on('hidden.bs.modal', function () {
                                $('body').addClass('modal-open');
                            });
                        });
                        $("#dopaMoiDopaPor4LicensesPersonalId2").modal({
                            show: false,
                            backdrop: 'static'
                        });
                        $("#clickDopaMoiDopaPor4LicensesPersonalId2").click(function() {
                        $("#dopaMoiDopaPor4LicensesPersonalId2").modal("show");
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
                            <div class="col-3"></div>
                            <div class="col-3"></div>
                            <div class="col-3">
                                <p class="text-white font-20">เลขที่ใบอนุญาต</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.docID}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3"></div>
                            <div class="col-3"></div>
                            <div class="col-3">
                                <p class="text-white font-20">วันเดือนปีที่ออกใบอนุญาต</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.docDate}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20"><u>รายละเอียดใบอนุญาต</u></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">
                                    <a class="text-success font-20" id="clickDopaMoiDopaPor4Licenses" type="button">
                                    ${selectData.citizenCardNumber}<i class="material-icons">link</i></a>
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อนิติบุคคล</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.businessName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ประเภทนิติบุคคล</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.businessType}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">สำนักทะเบียนที่ออกใบอนุญาต/ใบแทน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.docPlaceDesc}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">จังหวัดที่ออกใบอนุญาต/ใบแทน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.docPlaceProvince}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">วันเดือนปีที่ใบอนุญาต สิ้นอายุ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.expireDate}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <p class="text-white font-20">เลขประจำตัวประชาชนผู้รับใบอนุญาต / เลขประจำตัวประชาชนตัวแทนนิติบุคคล คนที่ 1</p>
                            </div>
                            <div class="col-6">
                                <p class="text-success font-20">
                                    ${checkCitizenCardNumber}
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <p class="text-white font-20">เลขประจำตัวประชาชนผู้รับใบอนุญาต / เลขประจำตัวประชาชนตัวแทนนิติบุคคล คนที่ 2</p>
                            </div>
                            <div class="col-6">
                                <p class="text-success font-20">
                                    ${checkCitizenCardNumber2}
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อตัว</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.firstName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อสกุล</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.lastName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อกลาง</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.middleName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อเต็มผู้ขอใบอนุญาต</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.fullNameAndRank}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">เพศผู้ขอใบอนุญาต</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.genderDesc}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อตัว คนที่ 2</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.firstName2}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อสกุล คนที่ 2</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.lastName2}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อกลาง คนที่ 2</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.middleName2}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อเต็มผู้รับใบอนุญาต คนที่ 2</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.fullNameAndRank2}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">เพศผู้รับใบอนุญาต คนที่ 2</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.genderDesc2}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ชนิดอาวุธปืน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.gunCharacteristic}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ผู้ผลิต</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.gunProduct}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">เครื่องหมายทะเบียนปืน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.gunRegistrationId}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">เลขหมายประจำปืน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.gunSerialNo}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ขนาดอาวุธปืน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.gunSize}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ประเภทอาวุธ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.gunType}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">เลขรหัสประจำบ้านผู้รับใบอนุญาต</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.hid}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">สนท. ตามที่อยู่</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.hidRcodeDesc}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">เลขรหัสประจำบ้านผู้รับใบอนุญาต คนที่ 2</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.hid2}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">สนท. ตามที่อยู่ คนที่ 2</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.hidRcodeDesc2}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20"><u>ที่อยู่ (ตามที่อยู่)</u></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">บ้านเลขที่</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.hno}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ตรอก</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.trok}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ซอย</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.soi}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ถนน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.thanon}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ตำบล</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.districtDesc}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">อำเภอ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.amphorDesc}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">จังหวัด</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.provinceDesc}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20"><u>ที่อยู่ (คนที่2)</u></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">บ้านเลขที่</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.hno2}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ตรอก</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.trok2}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ซอย</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.soi2}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ถนน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.thanon2}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ตำบล</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.districtDesc2}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">อำเภอ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.amphorDesc2}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">จังหวัด</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.provinceDesc2}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
            <div id="dopaMoiDopaPor4Licenses" class="modal fade" tabindex="-1" data-backdrop="static" role="dialog" aria-hidden="true">
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
                            <button type="button" id="closeDopaMoiDopaPor4Licenses" class="btn btn-danger">ยกเลิก</button>
                            <a id="confirmDopaMoiDopaPor4Licenses" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.citizenCardNumber}/0/0/0/0/0">ตกลง</a>				
                        </div>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
            <div id="dopaMoiDopaPor4LicensesPersonalId" class="modal fade" tabindex="-1" data-backdrop="static" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title text-white" id="exampleModalLongTitle">ยืนยันการค้นหา</h4>
                            <button type="button" class="close" id="closePersonalId">×</button>
                        </div>
                        <div class="modal-body font-20 text-white text-center">
                            คุณต้องการเปิดรายงาน Single Report ของ <br>
                            หมายเลขบัตรประชาชนนี้ ${selectData.personalId} ใช่หรือไม่
                        </div>
                        <div class="modal-footer">
                            <button type="button" id="closeDopaMoiDopaPor4LicensesPersonalId" class="btn btn-danger">ยกเลิก</button>
                            <a id="confirmDopaMoiDopaPor4LicensesPersonalId" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.personalId}/0/0/0/0/0">ตกลง</a>				
                        </div>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
            <div id="dopaMoiDopaPor4LicensesPersonalId2" class="modal fade" tabindex="-1" data-backdrop="static" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title text-white" id="exampleModalLongTitle">ยืนยันการค้นหา</h4>
                            <button type="button" class="close" id="closePersonalId2">×</button>
                        </div>
                        <div class="modal-body font-20 text-white text-center">
                            คุณต้องการเปิดรายงาน Single Report ของ <br>
                            หมายเลขบัตรประชาชนนี้ ${selectData.personalId2} ใช่หรือไม่
                        </div>
                        <div class="modal-footer">
                            <button type="button" id="closeDopaMoiDopaPor4LicensesPersonalId2" class="btn btn-danger">ยกเลิก</button>
                            <a id="confirmDopaMoiDopaPor4LicensesPersonalId2" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.personalId2}/0/0/0/0/0">ตกลง</a>				
                        </div>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </html>
        `;
    }

    public viewgetHtmlSingleReport(selectData: Dxc_Model_Dopa_MoiDopaPor4Licenses, title: string) {

        return this.html = `
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
                    <br /><br />
                    <div class="ml-3">
                        <div class="row">
                            <div class="col-3"></div>
                            <div class="col-3"></div>
                            <div class="col-3">
                                <p class="text-white font-20">เลขที่ใบอนุญาต</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.docID}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3"></div>
                            <div class="col-3"></div>
                            <div class="col-3">
                                <p class="text-white font-20">วันเดือนปีที่ออกใบอนุญาต</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.docDate}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20"><u>รายละเอียดใบอนุญาต</u></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">เลขประจำตัวประชาชน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.citizenCardNumber}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อนิติบุคคล</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.businessName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ประเภทนิติบุคคล</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.businessType}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">สำนักทะเบียนที่ออกใบอนุญาต/ใบแทน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.docPlaceDesc}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">จังหวัดที่ออกใบอนุญาต/ใบแทน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.docPlaceProvince}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">วันเดือนปีที่ใบอนุญาต สิ้นอายุ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.expireDate}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <p class="text-white font-20">เลขประจำตัวประชาชนผู้รับใบอนุญาต / เลขประจำตัวประชาชนตัวแทนนิติบุคคล คนที่ 1</p>
                            </div>
                            <div class="col-6">
                                <p class="text-success font-20">${selectData.personalId} </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <p class="text-white font-20">เลขประจำตัวประชาชนผู้รับใบอนุญาต / เลขประจำตัวประชาชนตัวแทนนิติบุคคล คนที่ 2</p>
                            </div>
                            <div class="col-6">
                                <p class="text-success font-20">${selectData.personalId2}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อตัว</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.firstName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อสกุล</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.lastName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อกลาง</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.middleName}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อเต็มผู้ขอใบอนุญาต</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.fullNameAndRank}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">เพศผู้ขอใบอนุญาต</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.genderDesc}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อตัว คนที่ 2</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.firstName2}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อสกุล คนที่ 2</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.lastName2}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อกลาง คนที่ 2</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.middleName2}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ชื่อเต็มผู้รับใบอนุญาต คนที่ 2</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.fullNameAndRank2}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">เพศผู้รับใบอนุญาต คนที่ 2</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.genderDesc2}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ชนิดอาวุธปืน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.gunCharacteristic}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ผู้ผลิต</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.gunProduct}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">เครื่องหมายทะเบียนปืน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.gunRegistrationId}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">เลขหมายประจำปืน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.gunSerialNo}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ขนาดอาวุธปืน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.gunSize}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ประเภทอาวุธ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.gunType}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">เลขรหัสประจำบ้านผู้รับใบอนุญาต</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.hid}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">สนท. ตามที่อยู่</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.hidRcodeDesc}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">เลขรหัสประจำบ้านผู้รับใบอนุญาต คนที่ 2</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.hid2}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">สนท. ตามที่อยู่ คนที่ 2</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.hidRcodeDesc2}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20"><u>ที่อยู่ (ตามที่อยู่)</u></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">บ้านเลขที่</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.hno}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ตรอก</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.trok}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ซอย</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.soi}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ถนน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.thanon}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ตำบล</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.districtDesc}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">อำเภอ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.amphorDesc}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">จังหวัด</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.provinceDesc}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20"><u>ที่อยู่ (คนที่2)</u></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">บ้านเลขที่</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.hno2}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ตรอก</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.trok2}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ซอย</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.soi2}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">ถนน</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.thanon2}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">ตำบล</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.districtDesc2}</p>
                            </div>
                            <div class="col-3">
                                <p class="text-white font-20">อำเภอ</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.amphorDesc2}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p class="text-white font-20">จังหวัด</p>
                            </div>
                            <div class="col-3">
                                <p class="text-success font-20">${selectData.provinceDesc2}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
        `;
    }

    public getSearchData() {
        // const schema = environment.qm.sub[0]['dopa'].sub[0]['por4'].schema;
        const schema = 'dopa-moi-dopa-por4-licenses';
        console.log(typeof (localStorage.getItem(schema + 'Results')));
        if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {

            console.log('1.1');
        } else {
            this.show = true;
            this.obj = localStorage.getItem(schema + 'Results');
            this.results = JSON.parse(this.obj);
            this.count = this.results.length; // นับจำนวนรายการ
            console.log('dopa-moi-dopa-por4-licensesResultsObj' + this.obj);

        }
    }

    public getSearchDataContact() {
        const schema = 'dopa-moi-dopa-por4-licenses';
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
        // const schema = environment.qm.sub[0]['dopa'].sub[0]['por4'].schema;
        const schema = 'dopa-moi-dopa-por4-licenses';
        if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {
            this.normalPdf = [];
            console.log('1.1');
        } else {
            this.obj = localStorage.getItem(schema + 'Results');
            this.results = JSON.parse(this.obj);
            this.count = this.results.length; // นับจำนวนรายการ\
            this.normalPdfCount = `<div class="col-md-11"
            class="row card singlereport-timeline-item list-normal-design-head-collapse">
            <span class="list-normal-design-underline depart">กรมการปกครอง: </span>
            <span class="list-normal-design-underline departdata">ใบอนุญาต ป.4 ครอบครองอาวุธปืน (Linkage) </span>
            <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ
            </span>
          </div>`;
            this.loadReportDetail();
            for (let i = 0; i < this.results.length; i++) {
                this.normalPdf.push(`
                <div class="col-md-11">
                  <div class="section-criminal-results"
                  style="text-indent:25px;font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
                  <span style="color: blue;"
                  class="list-normal-design-underline">ใบอนุญาต ป.4 ครอบครองอาวุธปืน (Linkage)</span>
                  <div style="padding-left:15px;">
                  <strong class="report-field-title">ชื่อตัว</strong>&nbsp;&nbsp;
                    <span class="report-field-value" style="text-decoration:underline">
                    ${this.changeNull(this.results[i].firstName)}</span>&nbsp;&nbsp;
                    <strong class="report-field-title">ชื่อสกุล</strong>&nbsp;&nbsp;
                    <span class="report-field-value" style="text-decoration:underline">
                    ${this.changeNull(this.results[i].lastName)}</span>&nbsp;&nbsp;
                    <strong class="report-field-title">เพศผู้ขอใบอนุญาต</strong>&nbsp;&nbsp;
                    <span class="report-field-value" style="text-decoration:underline">
                    ${this.changeNull(this.results[i].genderDesc)}</span>&nbsp;&nbsp;
                    <strong class="report-field-title">ชนิดอาวุธปืน</strong>&nbsp;&nbsp;
                    <span class="report-field-value" style="text-decoration:underline">
                    ${this.changeNull(this.results[i].gunType)}</span>&nbsp;&nbsp;
                    <strong class="report-field-title">ผู้ผลิต</strong>&nbsp;&nbsp;
                    <span class="report-field-value" style="text-decoration:underline">
                    ${this.changeNull(this.results[i].personalId)}</span>&nbsp;&nbsp;
                    <strong class="report-field-title">เครื่องหมายทะเบียนปืน</strong>&nbsp;&nbsp;
                    <span class="report-field-value" style="text-decoration:underline">
                    ${this.changeNull(this.results[i].gunRegistrationId)}</span>&nbsp;&nbsp;
                    <strong class="report-field-title">เลขหมายประจำปืน</strong>&nbsp;&nbsp;
                    <span class="report-field-value" style="text-decoration:underline">
                    ${this.changeNull(this.results[i].gunSerialNo)}</span>&nbsp;&nbsp;
                    <strong class="report-field-title">ขนาดอาวุธปืน</strong>&nbsp;&nbsp;
                    <span class="report-field-value" style="text-decoration:underline">
                    ${this.changeNull(this.results[i].gunSize)}</span>&nbsp;&nbsp;
                    <strong class="report-field-title">ประเภทอาวุธปืน</strong>&nbsp;&nbsp;
                    <span class="report-field-value" style="text-decoration:underline">
                    ${this.changeNull(this.results[i].gunType)}</span>&nbsp;&nbsp;
                  </div>
                </div>
              </div>${this.loadReportDetail()}`);
                console.log('dopa-moi-dopa-por4-licensesResultsResults' + this.normalPdf[i]);
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
     * Getter $util
     * @return {Utils}
     */
    public get $util(): Utils {
        return this.util;
    }

    /**
     * Getter $count
     * @return {number}
     */
    public get $count(): number {
        return this.count;
    }

    /**
     * Setter $util
     * @param {Utils} value
     */
    public set $util(value: Utils) {
        this.util = value;
    }

    /**
     * Setter $count
     * @param {number} value
     */
    public set $count(value: number) {
        this.count = value;
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
     * Getter $results
     * @return {Dxc_Model_Dopa_MoiDopaPor4Licenses[]}
     */
    public get $results(): Dxc_Model_Dopa_MoiDopaPor4Licenses[] {
        return this.results;
    }
    /**
     * Setter $results
     * @param {Dxc_Model_Dopa_MoiDopaPor4Licenses[]} value
     */
    public set $results(value: Dxc_Model_Dopa_MoiDopaPor4Licenses[]) {
        this.results = value;
    }

    public get $resultsContact(): Dxc_Model_Dopa_MoiDopaPor4Licenses[] {
        return this.resultsContact;
    }
    public set $resultsContact(value: Dxc_Model_Dopa_MoiDopaPor4Licenses[]) {
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
