import { environment } from '../../../../../../environments/environment.prod';
import { IDxc_Model_Dop_Probationer } from '../../../../shared/models/Dxc_Model_Dop_Probationer';
import { Utils } from '../../../../shared/utils/Utils';
import * as moment from 'moment';
import { Injectable } from "@angular/core";

export interface IReportDopProbationer {
  model: IDxc_Model_Dop_Probationer;
}

@Injectable()
export class DopProbationerMetadata {
  reportName: string;
  reportOfTime: string;
  reportOfDate: string;
  private results: IDxc_Model_Dop_Probationer[];
  private obj: string;
  private show: boolean;
  private util: Utils;
  private listLefts: any[];
  private listAlgations: any[];
  private listNormals: any[];
  private listNormalPersons: any[];
  private algationPdf: string[];
  private addressProbationerPdf: string[];
  private count: number;
  private algationPdfCount: string;

  html: string;

  private resultsContact: IDxc_Model_Dop_Probationer[];
  private countContact: number;
  private objContact: string;
  private showContact: boolean;

  constructor() {
    this.util = new Utils();
    this.listLefts = [];
    this.listAlgations = [];
    this.listNormals = [];
    this.listNormalPersons = [];
    this.algationPdf = [];
    this.results = [];
    this.addressProbationerPdf = [];
    this.count = 0;
    this.algationPdfCount = '';
    //Contact
    this.resultsContact = [];
    this.countContact = 0;

  }
  public getHtml(selectData: IDxc_Model_Dop_Probationer, title: string) {

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
                    <td align="center">ฐานข้อมูล${title}</td>
                </tr>
        </table>
    <br />
        <table style="width:100%" border="0">
            <tr>
              <td >&nbsp;</td>
              <td colspan="2">&nbsp;</td>
              <td >หมายเลขทะเบียน</td>
              <td colspan="4" style="color:blue"> <span class="text-info">${selectData.caseRegistrationNumber}</span></td>
            </tr>
            <tr>
              <td >&nbsp;</td>
              <td colspan="2">&nbsp;</td>
              <td>ปีทะเบียน/ชื่อสำนักงานคุมประพฤติ</td>
              <td colspan="4" style="color:blue"><span class="text-info">${selectData.caseRegistrationYear} ${selectData.officeName}</span></td>
            </tr>
            <tr>
                <td style="width: 19%;">&nbsp;</td>
                <td style="width: 19%;">&nbsp;</td>
                <td style="width: 14%;">&nbsp;</td>
                <td style="width: 18%;">&nbsp;</td>
                <td style="width: 16%;">&nbsp;</td>
                <td style="width: 14%;">&nbsp;</td>
            </tr>
            <tr>
              <td colspan="4" style="font-size: 24px; padding-bottom: 5px"><u>ข้อมูลผู้ถูกคุมประพฤติ</u></td>
            </tr>
            <tr>
               	<td>เลขประจำตัวประชาชน</td>
                <td colspan="3" style="color:blue"><span class="text-info">
                <a target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.citizenCardNumber}/0/0/0/0/0">${selectData.citizenCardNumber}</a></span></td>
            </tr>
            <tr>
                <td>ชื่อ-นามสกุล</td>
                <td colspan="2" style="color:blue"><span class="text-info">${selectData.prefix} ${selectData.firstName} ${selectData.lastName}</span></td>
            </tr>
            <tr>
                <td >เพศ</td>
                <td colspan="3" style="color:blue"><span class="text-info">${selectData.sex}</span></td>
                <td>วันเดือนปีเกิด</td>
                <td colspan="2" style="color:blue"><span class="text-info">${selectData.birthDateSrc}</span></td>
            </tr>
            <tr>
                <td>ชื่อบิดาและมารดา</td>
                <td colspan="3" style="color:blue"><span class="text-info">ชื่อบิดา ${selectData.fatherName} ชื่อมารดา ${selectData.motherName}</span></td>
                <td>การศึกษา </td>
                <td colspan="2" style="color:blue"><span class="text-info">${selectData.educationName}</span></td>
            </tr>
            <tr>
                <td colspan="1">ที่อยู่</td>
                <td colspan="6" style="color:blue"><span class="text-info"> บ้านเลขที่ ${selectData.homeNumber} หมู่ ${selectData.moo}
                หมู่บ้าน ${selectData.village} ซอย ${selectData.soi} ถนน ${selectData.street}
                ตำบล ${selectData.subDistrictName} อำเภอ ${selectData.districtName} จังหวัด ${selectData.provinceName}
                </span></td>
            </tr>
            <tr>
                <td colspan="3" style="font-size: 22px; padding-bottom: 5px"><u>ข้อมูลคดี</u></td>
            </tr>
            <tr>
               	<td>รหัสทะเบียน</td>
                <td colspan="2" style="color:blue"><span class="text-info">${selectData.caseRegistrationId}</span></td>
                <td>ปีทะเบียน</td>
                <td colspan="2" style="color:blue"><span class="text-info">${selectData.caseRegistrationYear}</span></td>
            </tr>
            <tr>
               	<td>หมายเลขคดีดำ</td>
                <td colspan="2" style="color:blue"><span class="text-info">${selectData.undecidedCaseId}</span></td>
                <td>หมายเลขคดีแดง</td>
                <td colspan="2" style="color:blue"><span class="text-info">${selectData.decidedCaseId}</span></td>
            </tr>
            <tr>
               	<td>ชื่อตามฟ้อง</td>
                <td colspan="3" style="color:blue"><span class="text-info">${selectData.caseName}</span></td>
            </tr>
            <tr>
               	<td>ฐานความผิด</td>
                <td colspan="3" style="color:blue"><span class="text-info">${selectData.predicateOffence}</span></td>
            </tr>
            <tr>
               	<td>สถานะทะเบียน</td>
                <td colspan="3" style="color:blue"><span class="text-info">${selectData.probationStatus}</span></td>
            </tr>
             <tr>
               	<td colspan="1">ผลของคำพิพากษา</td>
                <td colspan="3" style="color:blue"><span class="text-info">${selectData.probationResult}</span></td>
                <td colspan="1">ศาล</td>
                <td colspan="3" style="color:blue"><span class="text-info">${selectData.courtName}</span></td>
            </tr>
    	      <tr>
               	<td>วันที่ศาลสั่งคุมประพฤติ</td>
                <td colspan="2" style="color:blue"><span class="text-info">${selectData.probationStartDateSrc}</span></td>
                <td>วันที่ครบกำหนดคุมประพฤติ</td>
                <td colspan="2" style="color:blue"><span class="text-info">${selectData.probationPlannedEndDateSrc}</span></td>
            </tr>
            <tr>
               	<td>วันที่สำนวน</td>
                <td colspan="2"><span class="text-info">-</td>
            </tr>
            <tr>
               	<td>วันที่สิ้นสุดคุมประพฤติ</td>
                <td colspan="3" style="color:blue"><span class="text-info">${selectData.probationActualEndDateSrc}</span></td>
            </tr>
            <tr>
               	<td>สาเหตุการสิ้นสุด</td>
                <td colspan="3" style="color:blue"><span class="text-info">${selectData.probationEnddedReasonId}</span></td>
            </tr>
            <tr>
               	<td>สำนักงานคุมประพฤติ</td>
                <td colspan="3" style="color:blue"><span class="text-info">${selectData.officeName}</span></td>
            </tr>
        </table>
      </div>
      </body>
      </html>`;
  }
  public viewgetHtml(selectData: IDxc_Model_Dop_Probationer, title: string) {

    return this.html = `<html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <script>
          $(document).ready(function() {
            $('#confirmDopProbationer').click(function(){
              $('#dopProbationer').modal('toggle'); 
              $('#dopProbationer').on('hidden.bs.modal', function () {
                  $('body').addClass('modal-open');
              });
            });
            $('#close').click(function(){
              $('#dopProbationer').modal('toggle');  
              $('#dopProbationer').on('hidden.bs.modal', function () {
                  $('body').addClass('modal-open');
              });
            });
            $('#closeDopProbationer').click(function(){
              $('#dopProbationer').modal('toggle'); 
              $('#dopProbationer').on('hidden.bs.modal', function () {
                  $('body').addClass('modal-open');
              }); 
            });
            $("#dopProbationer").modal({
              show: false,
              backdrop: 'static'
            });
            $("#clickDopProbationer").click(function() {
            $("#dopProbationer").modal("show");             
            });
          });
        </script>
      </head>
      <body>
        <div class="table-responsive">
            <table class="table" border="2px" width="100%">
                    <tr>
                        <td align="center" class="text-white font-20">ฐานข้อมูล${title}</td>
                    </tr>
            </table>
            <br />
            <table style="width:100%" border="0">
                <tr>
                  <td >&nbsp;</td>
                  <td >&nbsp;</td>
                  <td colspan="2">&nbsp;</td>
                  <td class="text-white font-20">หมายเลขทะเบียน</td>
                  <td colspan="4"> <span class="text-success font-20">${selectData.caseRegistrationNumber}</span></td>
                </tr>
                <tr>
                  <td >&nbsp;</td>
                  <td >&nbsp;</td>
                  <td colspan="2">&nbsp;</td>
                  <td class="text-white font-20">ปีทะเบียน/ชื่อสำนักงานคุมประพฤติ</td>
                  <td colspan="4"><span class="text-success font-20">${selectData.caseRegistrationYear} ${selectData.officeName}</span></td>
                </tr>
                <tr>
                    <td style="width: 19%;">&nbsp;</td>
                    <td style="width: 19%;">&nbsp;</td>
                    <td style="width: 14%;">&nbsp;</td>
                    <td style="width: 18%;">&nbsp;</td>
                    <td style="width: 16%;">&nbsp;</td>
                    <td style="width: 14%;">&nbsp;</td>
                </tr>
                <tr>
                  <td colspan="4" class="text-white font-20" style="padding-bottom: 5px"><u>ข้อมูลผู้ถูกคุมประพฤติ</u></td>
                </tr>
                <tr>
                    <td style="height: 5px;" colspan="6">&nbsp;</td>
                </tr>
                <tr>
                    <td class="text-white font-20">เลขประจำตัวประชาชน</td>
                    <td colspan="3">
                    <a target="_blank" id="clickDopProbationer" type="button">
                    <span class="text-success font-20">${selectData.citizenCardNumber}<i class="material-icons">link</i></span></a></td>
                    <td class="text-white font-20">ชื่อ-นามสกุล</td>
                    <td colspan="2"><span class="text-success font-20">${selectData.prefix} ${selectData.firstName} ${selectData.lastName}</span></td>
                </tr>
                <tr>
                    <td class="text-white font-20">เพศ</td>
                    <td colspan="3" ><span class="text-success font-20">${selectData.sex}</span></td>
                    <td class="text-white font-20">วันเดือนปีเกิด</td>
                    <td colspan="2"><span class="text-success font-20">${selectData.birthDateSrc}</span></td>
                </tr>
                <tr>
                    <td class="text-white font-20">ชื่อบิดาและมารดา</td>
                    <td colspan="3"><span class="text-success font-20">ชื่อบิดา ${selectData.fatherName} ชื่อมารดา ${selectData.motherName}</span></td>
                    <td class="text-white font-20">การศึกษา </td>
                    <td colspan="2"><span class="text-success font-20">${selectData.educationName}</span></td>
                </tr>
                <tr>
                    <td class="text-white font-20" colspan="1">ที่อยู่</td>
                    <td colspan="6"><span class="text-success font-20"> บ้านเลขที่ ${selectData.homeNumber} หมู่ ${selectData.moo}
                    หมู่บ้าน ${selectData.village} ซอย ${selectData.soi} ถนน ${selectData.street}
                    ตำบล ${selectData.subDistrictName} อำเภอ ${selectData.districtName} จังหวัด ${selectData.provinceName}
                    </span></td>
                </tr>
                <tr>
                    <td style="height: 5px;" colspan="6">&nbsp;</td>
                </tr>
                <tr>
                    <td colspan="3" class="text-white font-20" style="padding-bottom: 5px"><u>ข้อมูลคดี</u></td>
                </tr>
                <tr>
                    <td class="text-white font-20">รหัสทะเบียน</td>
                    <td colspan="3"><span class="text-success font-20">${selectData.caseRegistrationId}</span></td>
                    <td class="text-white font-20">ปีทะเบียน</td>
                    <td colspan="2"><span class="text-success font-20">${selectData.caseRegistrationYear}</span></td>
                </tr>
                <tr>
                    <td class="text-white font-20">หมายเลขคดีดำ</td>
                    <td colspan="3"><span class="text-success font-20">${selectData.undecidedCaseId}</span></td>
                    <td class="text-white font-20">หมายเลขคดีแดง</td>
                    <td colspan="2"><span class="text-success font-20">${selectData.decidedCaseId}</span></td>
                </tr>
                <tr>
                    <td class="text-white font-20">ชื่อตามฟ้อง</td>
                    <td colspan="3"><span class="text-success font-20">${selectData.caseName}</span></td>
                </tr>
                <tr>
                    <td class="text-white font-20">ฐานความผิด</td>
                    <td colspan="3"><span class="text-success font-20">${selectData.predicateOffence}</span></td>
                </tr>
                <tr>
                    <td class="text-white font-20">สถานะทะเบียน</td>
                    <td colspan="3"><span class="text-success font-20">${selectData.probationStatus}</span></td>
                </tr>
                <tr>
                    <td class="text-white font-20" colspan="1">ผลของคำพิพากษา</td>
                    <td colspan="3"><span class="text-success font-20">${selectData.probationResult}</span></td>
                    <td class="text-white font-20" colspan="1">ศาล</td>
                    <td colspan="3"><span class="text-success font-20">${selectData.courtName}</span></td>
                </tr>
                <tr>
                    <td class="text-white font-20">วันที่ศาลสั่งคุมประพฤติ</td>
                    <td colspan="3"><span class="text-success font-20">${selectData.probationStartDateSrc}</span></td>
                    <td class="text-white font-20">วันที่ครบกำหนดคุมประพฤติ</td>
                    <td colspan="2"><span class="text-success font-20">${selectData.probationPlannedEndDateSrc}</span></td>
                </tr>
                <tr>
                    <td class="text-white font-20">วันที่สำนวน</td>
                    <td colspan="2"><span class="text-success font-20">${selectData.registerDate}</td>
                </tr>
                <tr>
                    <td class="text-white font-20">วันที่สิ้นสุดคุมประพฤติ</td>
                    <td colspan="3"><span class="text-success font-20">${selectData.probationActualEndDateSrc}</span></td>
                </tr>
                <tr>
                    <td class="text-white font-20">สาเหตุการสิ้นสุด</td>
                    <td colspan="3"><span class="text-success font-20">${selectData.probationEnddedReasonId}</span></td>
                </tr>
                <tr>
                    <td class="text-white font-20">สำนักงานคุมประพฤติ</td>
                    <td colspan="3"><span class="text-success font-20">${selectData.officeName}</span></td>
                </tr>
            </table>
          </div>
        </body>
        <div id="dopProbationer" class="modal fade" tabindex="-1" data-backdrop="static" role="dialog" aria-hidden="true">
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
                <button type="button" id="closeDopProbationer" class="btn btn-danger">ยกเลิก</button>
                <a id="confirmDopProbationer" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.citizenCardNumber}/0/0/0/0/0">ตกลง</a>				
              </div>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </html>`;
  }

  public viewgetHtmlSingleReport(selectData: IDxc_Model_Dop_Probationer, title: string) {

    return this.html = `<html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </head>
      <body>
        <div class="table-responsive">
            <table class="table" border="2px" width="100%">
                    <tr>
                        <td align="center" class="text-white font-20">ฐานข้อมูล${title}</td>
                    </tr>
            </table>
            <br />
            <table style="width:100%" border="0">
                <tr>
                  <td >&nbsp;</td>
                  <td >&nbsp;</td>
                  <td colspan="2">&nbsp;</td>
                  <td class="text-white font-20">หมายเลขทะเบียน</td>
                  <td colspan="4"> <span class="text-success font-20">${selectData.caseRegistrationNumber}</span></td>
                </tr>
                <tr>
                  <td >&nbsp;</td>
                  <td >&nbsp;</td>
                  <td colspan="2">&nbsp;</td>
                  <td class="text-white font-20">ปีทะเบียน/ชื่อสำนักงานคุมประพฤติ</td>
                  <td colspan="4"><span class="text-success font-20">${selectData.caseRegistrationYear} ${selectData.officeName}</span></td>
                </tr>
                <tr>
                    <td style="width: 19%;">&nbsp;</td>
                    <td style="width: 19%;">&nbsp;</td>
                    <td style="width: 14%;">&nbsp;</td>
                    <td style="width: 18%;">&nbsp;</td>
                    <td style="width: 16%;">&nbsp;</td>
                    <td style="width: 14%;">&nbsp;</td>
                </tr>
                <tr>
                  <td colspan="4" class="text-white font-20" style="padding-bottom: 5px"><u>ข้อมูลผู้ถูกคุมประพฤติ</u></td>
                </tr>
                <tr>
                    <td style="height: 5px;" colspan="6">&nbsp;</td>
                </tr>
                <tr>
                    <td class="text-white font-20">เลขประจำตัวประชาชน</td>
                    <td colspan="3">
                    <a target="_blank" id="clickDopProbationer" type="button">
                    <span class="text-success font-20">${selectData.citizenCardNumber}</td>
                    <td class="text-white font-20">ชื่อ-นามสกุล</td>
                    <td colspan="2"><span class="text-success font-20">${selectData.prefix} ${selectData.firstName} ${selectData.lastName}</span></td>
                </tr>
                <tr>
                    <td class="text-white font-20">เพศ</td>
                    <td colspan="3" ><span class="text-success font-20">${selectData.sex}</span></td>
                    <td class="text-white font-20">วันเดือนปีเกิด</td>
                    <td colspan="2"><span class="text-success font-20">${selectData.birthDateSrc}</span></td>
                </tr>
                <tr>
                    <td class="text-white font-20">ชื่อบิดาและมารดา</td>
                    <td colspan="3"><span class="text-success font-20">ชื่อบิดา ${selectData.fatherName} ชื่อมารดา ${selectData.motherName}</span></td>
                    <td class="text-white font-20">การศึกษา </td>
                    <td colspan="2"><span class="text-success font-20">${selectData.educationName}</span></td>
                </tr>
                <tr>
                    <td class="text-white font-20" colspan="1">ที่อยู่</td>
                    <td colspan="6"><span class="text-success font-20"> บ้านเลขที่ ${selectData.homeNumber} หมู่ ${selectData.moo}
                    หมู่บ้าน ${selectData.village} ซอย ${selectData.soi} ถนน ${selectData.street}
                    ตำบล ${selectData.subDistrictName} อำเภอ ${selectData.districtName} จังหวัด ${selectData.provinceName}
                    </span></td>
                </tr>
                <tr>
                    <td style="height: 5px;" colspan="6">&nbsp;</td>
                </tr>
                <tr>
                    <td colspan="3" class="text-white font-20" style="padding-bottom: 5px"><u>ข้อมูลคดี</u></td>
                </tr>
                <tr>
                    <td class="text-white font-20">รหัสทะเบียน</td>
                    <td colspan="3"><span class="text-success font-20">${selectData.caseRegistrationId}</span></td>
                    <td class="text-white font-20">ปีทะเบียน</td>
                    <td colspan="2"><span class="text-success font-20">${selectData.caseRegistrationYear}</span></td>
                </tr>
                <tr>
                    <td class="text-white font-20">หมายเลขคดีดำ</td>
                    <td colspan="3"><span class="text-success font-20">${selectData.undecidedCaseId}</span></td>
                    <td class="text-white font-20">หมายเลขคดีแดง</td>
                    <td colspan="2"><span class="text-success font-20">${selectData.decidedCaseId}</span></td>
                </tr>
                <tr>
                    <td class="text-white font-20">ชื่อตามฟ้อง</td>
                    <td colspan="3"><span class="text-success font-20">${selectData.caseName}</span></td>
                </tr>
                <tr>
                    <td class="text-white font-20">ฐานความผิด</td>
                    <td colspan="3"><span class="text-success font-20">${selectData.predicateOffence}</span></td>
                </tr>
                <tr>
                    <td class="text-white font-20">สถานะทะเบียน</td>
                    <td colspan="3"><span class="text-success font-20">${selectData.probationStatus}</span></td>
                </tr>
                <tr>
                    <td class="text-white font-20" colspan="1">ผลของคำพิพากษา</td>
                    <td colspan="3"><span class="text-success font-20">${selectData.probationResult}</span></td>
                    <td class="text-white font-20" colspan="1">ศาล</td>
                    <td colspan="3"><span class="text-success font-20">${selectData.courtName}</span></td>
                </tr>
                <tr>
                    <td class="text-white font-20">วันที่ศาลสั่งคุมประพฤติ</td>
                    <td colspan="3"><span class="text-success font-20">${selectData.probationStartDateSrc}</span></td>
                    <td class="text-white font-20">วันที่ครบกำหนดคุมประพฤติ</td>
                    <td colspan="2"><span class="text-success font-20">${selectData.probationPlannedEndDateSrc}</span></td>
                </tr>
                <tr>
                    <td class="text-white font-20">วันที่สำนวน</td>
                    <td colspan="2"><span class="text-success font-20">${selectData.registerDate}</td>
                </tr>
                <tr>
                    <td class="text-white font-20">วันที่สิ้นสุดคุมประพฤติ</td>
                    <td colspan="3"><span class="text-success font-20">${selectData.probationActualEndDateSrc}</span></td>
                </tr>
                <tr>
                    <td class="text-white font-20">สาเหตุการสิ้นสุด</td>
                    <td colspan="3"><span class="text-success font-20">${selectData.probationEnddedReasonId}</span></td>
                </tr>
                <tr>
                    <td class="text-white font-20">สำนักงานคุมประพฤติ</td>
                    <td colspan="3"><span class="text-success font-20">${selectData.officeName}</span></td>
                </tr>
            </table>
          </div>
        </body>
    </html>`;
  }
  public getSearchData() {
    const schema = 'dop-probationee';
    if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {

    } else {
      this.show = true;
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length;
      console.log(this.results)
    }
  }

  public getSearchDataContact() {
    const schema = 'dop-probationee';
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

  public getlistLefts() {
    let html: string;
    for (const result of this.results) {
      html = `
      <ul class="list-unstyled feeds_widget">
        <li>
          <div class="feeds-left">
            <img src="assets/dist/img/dxc-img/symbol/datatype/32/doc-prisoner.png">
          </div>

          <div class="feeds-body">
            <span class="pull-right">${result.id}</span>
            <span style="margin-left: 15px;font-size: 18px;">ผู้ต้องขัง </span>
            <div class="row">
              <div class="col-md-13">เลขประจำตัวประชาชน:
                <span class="dataname text-info">${result.citizenCardNumber}</span>
              </div>
              <div class="col-md-8">ชื่อ:
                <span class="dataname text-info"> ${result.firstName}
                  ${result.lastName}</span>
              </div>
              <div class="col-md-4">เพศ:
                <span class="dataname text-info"> ${result.sex}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>`;
      this.listLefts.push(html);
    }
  }
  public getlistAlgations() {
    let html: string;
    for (const result of this.results) {
      html = `<input type="hidden" value="ผู้ถูกคุมประพฤติ" #probationerTitle>
    <input type="hidden" value="assets/dist/img/dop.png" #probationerdepartmentImg>
    <div class="section-criminal-results"
      style="text-indent:25px; font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp; "
      check="getModelName">
      <div>
        <span class="list-normal-design-underline depart">กรมคุมประพฤติ</span>
        <span class="list-normal-design-underline departdata">(ผู้ถูกคุมประพฤติ)</span>
        <button class="btn btn-primary btn-icon btn-icon-mini btn-round waves-effect pull-right" type="button"
          href="#largeModal" data-toggle="modal" data-target="#largeModal"
          (click)="selectRow(probationerItem,probationerTitle.value,probationerdepartmentImg.value)">
          <div class="demo-google-material-icon">
            <i class="material-icons" style="color:white;">call_made</i>
            <span class="icon-name"></span>
          </div>
        </button>
      </div>
      <div style="padding-left:15px;">
        <strong class="report-field-title">ชื่อ&nbsp;&nbsp;
        <span class="report-field-value" style="text-decoration:underline">
          ${result.firstName}
          ${result.lastName}</span>&nbsp;&nbsp;
        <strong class="report-field-title">ถูกศาลสั่งคุมประพฤติเมื่อ&nbsp;&nbsp;
        <span class="report-field-value" style="text-decoration:underline">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;
        <strong class="report-field-title">ฐานความผิด&nbsp;&nbsp;
        <span class="report-field-value" style="text-decoration:underline">
          ${result.predicateOffence}</span>&nbsp;&nbsp;
        <strong class="report-field-title">หน่วยงานคุมประพฤติ&nbsp;&nbsp;
        <span class="report-field-value" style="text-decoration:underline">
          ${result.officeName}</span>&nbsp;&nbsp;
        <strong class="report-field-title">วันที่ครบกำหนดคุมประพฤติ&nbsp;&nbsp;
        <span class="report-field-value" style="text-decoration:underline">
          ${result.probationPlannedEndDateSrc}</span>&nbsp;&nbsp;
        <strong class="report-field-title">วันที่พ้นคุมประพฤติ&nbsp;&nbsp;
        <span class="report-field-value" style="text-decoration:underline">
          ${result.probationActualEndDateSrc}</span>&nbsp;&nbsp;
      </div>
      </div>`;
      this.listAlgations.push(html);
    }
  }
  public getalgationPdf() {
    const schema = 'dop-probationee';
    console.log(schema);
    if (localStorage.getItem(schema + 'Results') === '[]' || localStorage.getItem(schema + 'Results') === null) {
      this.algationPdf = [];
    } else {
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length; // นับจำนวนรายการ

      if (this.count !== undefined) {
        // PDF ค้นด้วยเลขบัตร
        this.algationPdfCount = `<div class="col-md-11"
            class="row card singlereport-timeline-item list-normal-design-head-collapse">
            <span class="list-normal-design-underline depart">กรมคุมประพฤติ: </span>
            <span class="list-normal-design-underline departdata">ผู้ถูกคุมประพฤติ </span>
            <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ
            </span>
          </div>`;
        this.loadReportDetail();
        for (let i = 0; i < this.results.length; i++) {
          this.algationPdf.push(`<div class="col-md-11">
          <div class="section-criminal-results" style="text-indent:25px;
          font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
          <span class="list-normal-design-underline depart">ผู้ถูกคุมประพฤติ</span>
          <div style="padding-left:15px;">
            <strong class="report-field-title">ชื่อ</strong>&nbsp;&nbsp;
            <span class="report-field-value" style="text-decoration:underline">
              ${this.changeNull(this.results[i].firstName)}
              ${this.changeNull(this.results[i].lastName)}</span>&nbsp;&nbsp;
            <strong
              class="report-field-title">ถูกศาลสั่งคุมประพฤติเมื่อ</strong>&nbsp;&nbsp;
            <span class="report-field-value" style="text-decoration:underline">
              &nbsp; - &nbsp;</span>&nbsp;&nbsp;
            <strong class="report-field-title">ฐานความผิด</strong>&nbsp;&nbsp;
            <span class="report-field-value" style="text-decoration:underline">
              ${this.changeNull(this.results[i].predicateOffence)}</span>&nbsp;&nbsp;
            <strong class="report-field-title">หน่วยงานคุมประพฤติ</strong>&nbsp;&nbsp;
            <span class="report-field-value" style="text-decoration:underline">
              ${this.changeNull(this.results[i].officeName)}</span>&nbsp;&nbsp;
            <strong
              class="report-field-title">วันที่ครบกำหนดคุมประพฤติ</strong>&nbsp;&nbsp;
            <span class="report-field-value" style="text-decoration:underline">
              ${this.formatDate(this.results[i].probationPlannedEndDateSrc)}</span>&nbsp;&nbsp;
            <strong class="report-field-title">วันที่พ้นคุมประพฤติ</strong>&nbsp;&nbsp;
            <span class="report-field-value" style="text-decoration:underline">
              ${this.formatDate(this.results[i].probationActualEndDateSrc)}</span>&nbsp;&nbsp;
            </div>
            </div>
            </div>${this.loadReportDetail()}`); // Dop
          console.log('DOP.allegation' + this.algationPdf[i]);
        }
        console.log('ผู้ถูกคุมประพฤติ' + this.results[0].caseName);
      } else {
        // PDF ค้นด้วยชื่อ-สกุล
        const results = JSON.parse(this.obj);
        this.algationPdfCount = `<div class="col-md-11"
          class="row card singlereport-timeline-item list-normal-design-head-collapse">
          <span class="list-normal-design-underline depart">กรมคุมประพฤติ: </span>
          <span class="list-normal-design-underline departdata">ผู้ถูกคุมประพฤติ</span>
        </div>`;
        this.loadReportDetail();
        this.algationPdf.push(`<div class="col-md-11">
          <div class="section-criminal-results" style="text-indent:25px;
            font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
            <span class="list-normal-design-underline depart">ผู้ถูกคุมประพฤติ</span>

            <div style="padding-left:15px;">
              <strong class="report-field-title">ชื่อ</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
                ${this.changeNull(results.firstName)}
                ${this.changeNull(results.lastName)}</span>&nbsp;&nbsp;
              <strong
                class="report-field-title">ถูกศาลสั่งคุมประพฤติเมื่อ</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
                &nbsp; - &nbsp;</span>&nbsp;&nbsp;
              <strong class="report-field-title">ฐานความผิด</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
                ${this.changeNull(results.predicateOffence)}</span>&nbsp;&nbsp;
              <strong class="report-field-title">หน่วยงานคุมประพฤติ</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
                ${this.changeNull(results.officeName)}</span>&nbsp;&nbsp;
              <strong
                class="report-field-title">วันที่ครบกำหนดคุมประพฤติ</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
                ${this.changeNull(results.probationPlannedEndDateSrc)}</span>&nbsp;&nbsp;
              <strong class="report-field-title">วันที่พ้นคุมประพฤติ</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
                ${this.changeNull(results.probationActualEndDateSrc)}</span>&nbsp;&nbsp;
            </div>

          </div>
        </div>${this.loadReportDetail()}`); // Dop
        console.log('DOP.allegation: ' + this.algationPdf);
      }
    }
  }

  public getAddressProbationPdf() {
    let schema;
    if (environment.qm.sub[0]['dop'].sub[0]['probationer'].schema !== undefined) {
      schema = environment.qm.sub[0]['dop'].sub[0]['probationer'].schema;

      if (localStorage.getItem(schema + 'Results') === null) {
        this.addressProbationerPdf = [];
        console.log('1.1');
      } else {
        this.obj = localStorage.getItem(schema + 'Results');
        this.results = JSON.parse(this.obj);

        for (let i = 0; i < this.results.length; i++) {
          this.addressProbationerPdf.push(`<div class="col-md-11">
              <div class="section-criminal-results"
              style="text-indent:25px; font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
              <span style="text-decoration:underline; color: #0070C0; font-weight: bold; " class="report-section-source-title">
              กรมคุมประพฤติ </span>
              <span style="text-decoration:underline; color: #C00000; font-weight: bold; font-style: italic;"
              class="report-section-data-title">(ผู้ถูกคุมประพฤติ)</span>
              <div style="padding-left:15px;">
              <strong class="report-field-title">เลขบัตรประชาชน</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline"> ${this.changeNull(this.results[i].citizenCardNumber)}
              </span>&nbsp;&nbsp;
              <strong class="report-field-title">ชื่อ</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline"> ${this.changeNull(this.results[i].firstName)}
              </span>&nbsp;&nbsp;
              <strong class="report-field-title">นามสกุล</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline"> ${this.changeNull(this.results[i].lastName)}
              </span>&nbsp;&nbsp;
              <strong class="report-field-title">เพศ</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline"> ${this.changeNull(this.changeSex(this.results[i].sex))}
              </span>&nbsp;&nbsp;
              <div>
              <strong class="report-field-title">เลขที่</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline"> ${this.changeNull(this.results[i].homeNumber)}
              </span>&nbsp;&nbsp;
              <strong class="report-field-title">หมู่ที่</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline"> ${this.changeNull(this.results[i].moo)}
              </span>&nbsp;&nbsp;
              <strong class="report-field-title">หมู่บ้าน</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline"> ${this.changeNull(this.results[i].village)}
              </span>&nbsp;&nbsp;
              <strong class="report-field-title">ถนน</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline"> ${this.changeNull(this.results[i].street)}
              </span>&nbsp;&nbsp;
              <strong class="report-field-title">ซอย</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline"> ${this.changeNull(this.results[i].soi)}
              </span>&nbsp;&nbsp;
              <strong class="report-field-title">ตำบล</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline"> ${this.changeNull(this.results[i].subDistrictName)}
              </span>&nbsp;&nbsp;
              <strong class="report-field-title">อำเภอ</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline"> ${this.changeNull(this.results[i].districtName)}
              </span>&nbsp;&nbsp;
              <strong class="report-field-title">จังหวัด</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline"> ${this.changeNull(this.results[i].provinceName)}
              </span>&nbsp;&nbsp;
              </div>
              </div>
              </div>
              </div> ${this.loadReportDetail()}`);
        }
        console.log('1.2');
      }
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

  formatDate(birthDate: any): string {
    const date = new Date(birthDate);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear() + 543;
    if (birthDate === 'null' || birthDate == null || birthDate == '') {
      return '-';
    } else if (year == 9999) {
      return 'ตลอดชีพ';
    } else {
      const thmonth = new Array('มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
        'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม');
      return `${day} ${thmonth[month]} ${year}`;
    }

  }

  changeNull(selectData: string) {
    if (selectData == null) {
      return '-';
    } else {
      return selectData;
    }
  }
  changeSex(sex: string) {
    if (sex === '1') {
      return 'ชาย';
    } else if (sex === 'FEMALE') {
      return '2';
    } else if (sex === 'OTHER') {
      return 'อื่นๆ';
    } else if (sex === 'null') {
      return '-';
    }
  }

  /**
   * Getter $results
   * @return {Dxc_Model_Dop_Probationer[]}
   */
  public get $results(): IDxc_Model_Dop_Probationer[] {
    return this.results;
  }

  /**
   * Setter $results
   * @param {Dxc_Model_Dop_Probationer[]} value
   */
  public set $results(value: IDxc_Model_Dop_Probationer[]) {
    this.results = value;
  }

  /**
   * Getter $listNormalPersons
   * @return {any[]}
   */
  public get $listNormalPersons(): any[] {
    return this.listNormalPersons;
  }

  /**
   * Setter $listNormalPersons
   * @param {any[]} value
   */
  public set $listNormalPersons(value: any[]) {
    this.listNormalPersons = value;
  }



  /**
   * Getter $listNormals
   * @return {any[]}
   */
  public get $listNormals(): any[] {
    return this.listNormals;
  }

  /**
   * Setter $listNormals
   * @param {any[]} value
   */
  public set $listNormals(value: any[]) {
    this.listNormals = value;
  }



  /**
   * Getter $listAlgations
   * @return {any[]}
   */
  public get $listAlgations(): any[] {
    return this.listAlgations;
  }

  /**
   * Setter $listAlgations
   * @param {any[]} value
   */
  public set $listAlgations(value: any[]) {
    this.listAlgations = value;
  }

  /**
   * Getter $listLefts
   * @return {any[]}
   */
  public get $listLefts(): any[] {
    return this.listLefts;
  }

  /**
   * Setter $listLefts
   * @param {any[]} value
   */
  public set $listLefts(value: any[]) {
    this.listLefts = value;
  }

  /**
   * Getter $algationPdf
   * @return {string []}
   */
  public get $algationPdf(): string[] {
    return this.algationPdf;
  }

  /**
   * Setter $algationPdf
   * @param {string []} value
   */
  public set $algationPdf(value: string[]) {
    this.algationPdf = value;
  }

  /**
   * Getter $addressProbationerPdf
   * @return {string[]}
   */
  public get $addressProbationerPdf(): string[] {
    return this.addressProbationerPdf;
  }

  /**
   * Setter $addressProbationerPdf
   * @param {string[]} value
   */
  public set $addressProbationerPdf(value: string[]) {
    this.addressProbationerPdf = value;
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

  public get $resultsContact(): IDxc_Model_Dop_Probationer[] {
    return this.resultsContact;
  }
  public set $resultsContact(value: IDxc_Model_Dop_Probationer[]) {
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
