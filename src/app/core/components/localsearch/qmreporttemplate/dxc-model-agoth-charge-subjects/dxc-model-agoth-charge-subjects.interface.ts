import { Dxc_Model_Agoth_ChargeSubject } from 'src/app/core/shared/models/Dxc_Model_Agoth_ChargeSubject';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { Injectable } from "@angular/core";

export interface IReportAgothChargeSubject {
  model: Dxc_Model_Agoth_ChargeSubject;
}

@Injectable()
export class AgothChargeSubjectMetadata {

  private results: Dxc_Model_Agoth_ChargeSubject[];
  private obj: string;
  private show: boolean;
  private allegationPdf: string[];
  private count: number;
  private allegationPdfCount: string;

  private resultsCareer: Dxc_Model_Agoth_ChargeSubject[];
  private objCareer: string;
  private showCareer: boolean;
  private countCareer: number;

  private resultsContact: Dxc_Model_Agoth_ChargeSubject[];
  private countContact: number;
  private objContact: string;
  private showContact: boolean;
  
  reportName: string;
  reportOfTime: string;
  reportOfDate: string;
  html: string;

  constructor() {
    this.allegationPdf = [];
    this.results = [];
    this.count = 0;
    this.allegationPdfCount = '';
    //Career
    this.resultsCareer = [];
    this.countCareer = 0;
    //Contact
    this.resultsContact = [];
    this.countContact = 0;

  }
  public getHtml(selectData: Dxc_Model_Agoth_ChargeSubject, title: string) {
    
    console.log(selectData)
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
      body {
        font-family: THSarabunNew;
        font-size: 18px;
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
      .text-success {
        color: blue;
        font-size: 16px!important;
      }
      .text-white {
        font-size: 16px!important;
      }
    </style>
  </head>
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
  <div class="card">
    <div class="card-body">
      <table class="table" border="2px" width="100%">
        <tr>
          <td class="header-title mb-3 text-white font-20 table" align="center">${title}</td>
        </tr>
      </table>
      </hr>
      <div class="table-responsive">
          <table class="table table-borderless">
          <tbody>
          <tr>
            <td class="text-white font-20"><u><b>ข้อมูลเกี่ยวกับผู้ต้องหา/จำเลย</b></u></td>
          </tr>
          <tr>
            <td class="text-white font-20">รหัสผู้ต้องหา/จำเลย</td>
            <td>
                <span class="text-success font-20">${selectData.accusedId}
                </span>
            </td>
          </tr>
          <tr>
          <td class="text-white font-20">รหัสของแต่ละ generallc</td>
            <td>
              <span class="text-success font-20">${selectData.generallcId}
              </span>
            </td>
          </tr>
          <tr>
            <td class="text-white font-20">เลขบัตรประชาชนผู้ต้องหา</td>
            <td>
                <span class="text-success font-20">${selectData.citizenId}
                </span>
            </td>
          </tr>
          <tr>
            <td class="text-white font-20">คำนำชื่อผู้ต้องหา1</td>
            <td class="text-success font-20">${selectData.title1}</td>
            <td class="text-white font-20">ชื่อผู้ต้องหา1</td>
            <td class="text-success font-20">${selectData.name1}</td>
            <td class="text-white font-20">นามสกุลผู้ต้องหา1</td>
            <td class="text-success font-20">${selectData.surname1}</td>
          </tr>
          <tr>
            <td class="text-white font-20">คำนำชื่อผู้ต้องหา2</td>
            <td class="text-success font-20">${selectData.title2}</td>
            <td class="text-white font-20">ชื่อผู้ต้องหา2</td>
            <td class="text-success font-20">${selectData.name2}</td>
            <td class="text-white font-20">นามสกุลผู้ต้องหา2</td>
            <td class="text-success font-20">${selectData.surname2}</td>
          </tr>
          <tr>
            <td class="text-white font-20">คำนำชื่อผู้ต้องหา3</td>
            <td class="text-success font-20">${selectData.title3}</td>
            <td class="text-white font-20">ชื่อผู้ต้องหา3</td>
            <td class="text-success font-20">${selectData.name3}</td>
            <td class="text-white font-20">นามสกุลผู้ต้องหา3</td>
            <td class="text-success font-20">${selectData.surname3}</td>
          </tr>
          <tr>
            <td class="text-white font-20">คำนำชื่อผู้ต้องหา4</td>
            <td class="text-success font-20">${selectData.title4}</td>
            <td class="text-white font-20">ชื่อผู้ต้องหา4</td>
            <td class="text-success font-20">${selectData.name4}</td>
            <td class="text-white font-20">นามสกุลผู้ต้องหา4</td>
            <td class="text-success font-20">${selectData.surname4}</td>
          </tr>
          <tr>
            <td class="text-white font-20">คำนำชื่อผู้ต้องหา5</td>
            <td class="text-success font-20">${selectData.title5}</td>
            <td class="text-white font-20">ชื่อผู้ต้องหา5</td>
            <td class="text-success font-20">${selectData.name5}</td>
            <td class="text-white font-20">นามสกุลผู้ต้องหา5</td>
            <td class="text-success font-20">${selectData.surname5}</td>
          </tr>
          <tr>
            <td class="text-white font-20">วันเดือนปีเกิด ผู้ต้องหา</td>
            <td class="text-success font-20">${selectData.birthDate}</td>
            <td class="text-white font-20">อายุผู้ต้องหา</td>
            <td class="text-success font-20">${selectData.age} ปี</td>
          </tr>
          <tr>
            <td class="text-white font-20">เพศผู้ต้องหา</td>
            <td class="text-success font-20">${selectData.genderName}</td>
            <td class="text-white font-20">อาชีพผู้ต้องหา</td>
            <td class="text-success font-20" colspan="2">${selectData.occupationName}</td>
          </tr>
          <tr>
              <td class="text-white font-20">อาชีพอื่นๆ</td>
              <td class="text-success font-20">${selectData.occupationOther}</td>
              <td class="text-white font-20"></td>
              <td class="text-success font-20"></td>
          </tr>
          <tr>
              <td class="text-white font-20">สัญชาติผู้ต้องหา</td>
              <td class="text-success font-20">${selectData.nationalityName}</td>
              <td class="text-white font-20">สัญชาติอื่นๆ</td>
              <td class="text-success font-20">${selectData.nationalityOther}</td>
          </tr>
          <tr>
              <td class="text-white font-20">เชื้อชาติผู้ต้องหา</td>
              <td class="text-success font-20">${selectData.race}</td>
              <td class="text-white font-20">ภูมิลำเนา</td>
              <td class="text-success font-20">${selectData.personNative}</td>
          </tr>
          <tr>
              <td class="text-white font-20">ชื่อประเทศ</td>
              <td class="text-success font-20">${selectData.countryName}</td>
              <td class="text-white font-20">ประเทศอื่นๆ</td>
              <td class="text-success font-20">${selectData.countryOther}</td>
          </tr>
          <tr>
              <td class="text-white font-20"><u>ที่อยู่ผู้ต้องหา</u></td>
          </tr>
          <tr>
              <td class="text-white font-20">บ้านเลขที่</td>
              <td class="text-success font-20">${selectData.address}</td>
              <td class="text-white font-20">หมู่</td>
              <td class="text-success font-20">${selectData.moo}</td>
          </tr>
          <tr>
              <td class="text-white font-20">ซอย</td>
              <td class="text-success font-20">${selectData.soi}</td>
              <td class="text-white font-20">ถนน</td>
              <td class="text-success font-20">${selectData.road}</td>
          </tr>
          <tr>
              <td class="text-white font-20">ตำบล</td>
              <td class="text-success font-20">${selectData.tambolName}</td>
              <td class="text-white font-20">อำเภอ</td>
              <td class="text-success font-20">${selectData.amphurName}</td>
          </tr>
          <tr>
              <td class="text-white font-20">จังหวัด</td>
              <td class="text-success font-20">${selectData.provinceName}</td>
              <td class="text-white font-20">รหัสไปษณีย์</td>
              <td class="text-success font-20">${selectData.zipCode}</td>
          </tr>
          <tr>
              <td class="text-white font-20">โทรศัพท์</td>
              <td class="text-success font-20">${selectData.telephone}</td>
              <td class="text-white font-20">อีเมล</td>
              <td class="text-success font-20">${selectData.email}</td>
          </tr>
          <tr>
              <td class="text-white font-20">คำสั่งอัยการ</td>
              <td class="text-success font-20">${selectData.prosCommandName}</td>
          </tr>
          <tr>
              <td class="text-white font-20">รายละเอียดความเห็นพนักงานสอบสวน</td>
              <td class="text-success font-20">${selectData.criRemark}</td>
          </tr>
          <tr>
              <td class="text-white font-20">ความเห็นพนักงานสอบสวน</td>
              <td class="text-success font-20">${selectData.inqDecisionGroupName}</td>
          </tr>
          <tr>
              <td class="text-white font-20">วันที่มีการกวาดข้อมูล</td>
              <td class="text-success font-20">${selectData.migratedDate}</td>
          </tr>
        </tbody>
          </table>
      </div> <!-- end table responsive-->
  </div> <!-- end col-->
</div>
  </body>
</html>
`;
  }

  public viewgetHtml(selectData: Dxc_Model_Agoth_ChargeSubject, title: string) {
    let checkCitizenCardNumber = '';
    if(selectData.citizenId == '-') {
    checkCitizenCardNumber = `${selectData.citizenId}`
    } else {
    checkCitizenCardNumber =`
    <a class="text-success font-20" id="clickAgothChargeSubjects" type="button">
        ${selectData.citizenId}<i class="material-icons">link</i></a>`
    }
    return this.html = `<html>

        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            <script>
              $(document).ready(function() {
                $('#confirmAgothChargeSubjects').click(function(){
                  $('#agothChargeSubjects').modal('toggle');
                  $('#agothChargeSubjects').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $('#close').click(function(){
                  $('#agothChargeSubjects').modal('toggle');
                  $('#agothChargeSubjects').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $('#closeAgothChargeSubjects').click(function(){
                  $('#agothChargeSubjects').modal('toggle');
                  $('#agothChargeSubjects').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $("#agothChargeSubjects").modal({
                  show: false,
                  backdrop: 'static'
                });
                $("#clickAgothChargeSubjects").click(function() {
                $("#agothChargeSubjects").modal("show");
                });
              });
            </script>
        </head>

        <body>
            <div class="card">
                <div class="card-body">
                  <table class="table" border="2px" width="100%">
                    <td class="header-title mb-3 text-white font-20 text-center">${title}</td>
                  </table>
                    </hr>
                    <div class="table-responsive">
                        <table class="table table-borderless">
                            <tbody>
                                <tr>
                                  <td class="text-white font-20"><u>ข้อมูลเกี่ยวกับผู้ต้องหา/จำเลย</u></td>
                                </tr>
                                <tr>
                                  <td class="text-white font-20">รหัสผู้ต้องหา/จำเลย</td>
                                  <td>
                                      <span class="text-success font-20">${selectData.accusedId}
                                      </span>
                                  </td>
                                </tr>
                                <tr>
                                <td class="text-white font-20">รหัสของแต่ละ generallc</td>
                                  <td>
                                    <span class="text-success font-20">${selectData.generallcId}
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="text-white font-20">เลขบัตรประชาชนผู้ต้องหา</td>
                                  <td>
                                      <span class="text-success font-20">${checkCitizenCardNumber}
                                      </span>
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">คำนำชื่อผู้ต้องหา1</td>
                                    <td class="text-success font-20">${selectData.title1}</td>
                                    <td class="text-white font-20">ชื่อผู้ต้องหา1</td>
                                    <td class="text-success font-20">${selectData.name1}</td>
                                    <td class="text-white font-20">นามสกุลผู้ต้องหา1</td>
                                    <td class="text-success font-20">${selectData.surname1}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">คำนำชื่อผู้ต้องหา2</td>
                                    <td class="text-success font-20">${selectData.title2}</td>
                                    <td class="text-white font-20">ชื่อผู้ต้องหา2</td>
                                    <td class="text-success font-20">${selectData.name2}</td>
                                    <td class="text-white font-20">นามสกุลผู้ต้องหา2</td>
                                    <td class="text-success font-20">${selectData.surname2}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">คำนำชื่อผู้ต้องหา3</td>
                                    <td class="text-success font-20">${selectData.title3}</td>
                                    <td class="text-white font-20">ชื่อผู้ต้องหา3</td>
                                    <td class="text-success font-20">${selectData.name3}</td>
                                    <td class="text-white font-20">นามสกุลผู้ต้องหา3</td>
                                    <td class="text-success font-20">${selectData.surname3}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">คำนำชื่อผู้ต้องหา4</td>
                                    <td class="text-success font-20">${selectData.title4}</td>
                                    <td class="text-white font-20">ชื่อผู้ต้องหา4</td>
                                    <td class="text-success font-20">${selectData.name4}</td>
                                    <td class="text-white font-20">นามสกุลผู้ต้องหา4</td>
                                    <td class="text-success font-20">${selectData.surname4}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">คำนำชื่อผู้ต้องหา5</td>
                                    <td class="text-success font-20">${selectData.title5}</td>
                                    <td class="text-white font-20">ชื่อผู้ต้องหา5</td>
                                    <td class="text-success font-20">${selectData.name5}</td>
                                    <td class="text-white font-20">นามสกุลผู้ต้องหา5</td>
                                    <td class="text-success font-20">${selectData.surname5}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">วันเดือนปีเกิด ผู้ต้องหา</td>
                                    <td class="text-success font-20">${selectData.birthDate}</td>
                                    <td class="text-white font-20">อายุผู้ต้องหา</td>
                                    <td class="text-success font-20">${selectData.age} ปี</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">เพศผู้ต้องหา</td>
                                    <td class="text-success font-20">${selectData.genderName}</td>
                                    <td class="text-white font-20">อาชีพผู้ต้องหา</td>
                                    <td class="text-success font-20" colspan="2">${selectData.occupationName}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">อาชีพอื่นๆ</td>
                                    <td class="text-success font-20">${selectData.occupationOther}</td>
                                    <td class="text-white font-20"></td>
                                    <td class="text-success font-20"></td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">สัญชาติผู้ต้องหา</td>
                                    <td class="text-success font-20">${selectData.nationalityName}</td>
                                    <td class="text-white font-20">สัญชาติอื่นๆ</td>
                                    <td class="text-success font-20">${selectData.nationalityOther}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">เชื้อชาติผู้ต้องหา</td>
                                    <td class="text-success font-20">${selectData.race}</td>
                                    <td class="text-white font-20">ภูมิลำเนา</td>
                                    <td class="text-success font-20">${selectData.personNative}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">ชื่อประเทศ</td>
                                    <td class="text-success font-20">${selectData.countryName}</td>
                                    <td class="text-white font-20">ประเทศอื่นๆ</td>
                                    <td class="text-success font-20">${selectData.countryOther}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20"><u>ที่อยู่ผู้ต้องหา</u></td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">บ้านเลขที่</td>
                                    <td class="text-success font-20">${selectData.address}</td>
                                    <td class="text-white font-20">หมู่</td>
                                    <td class="text-success font-20">${selectData.moo}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">ซอย</td>
                                    <td class="text-success font-20">${selectData.soi}</td>
                                    <td class="text-white font-20">ถนน</td>
                                    <td class="text-success font-20">${selectData.road}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">ตำบล</td>
                                    <td class="text-success font-20">${selectData.tambolName}</td>
                                    <td class="text-white font-20">อำเภอ</td>
                                    <td class="text-success font-20">${selectData.amphurName}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">จังหวัด</td>
                                    <td class="text-success font-20">${selectData.provinceName}</td>
                                    <td class="text-white font-20">รหัสไปษณีย์</td>
                                    <td class="text-success font-20">${selectData.zipCode}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">โทรศัพท์</td>
                                    <td class="text-success font-20">${selectData.telephone}</td>
                                    <td class="text-white font-20">อีเมล</td>
                                    <td class="text-success font-20">${selectData.email}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">คำสั่งอัยการ</td>
                                    <td class="text-success font-20">${selectData.prosCommandName}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">รายละเอียดความเห็นพนักงานสอบสวน</td>
                                    <td class="text-success font-20">${selectData.criRemark}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">ความเห็นพนักงานสอบสวน</td>
                                    <td class="text-success font-20">${selectData.inqDecisionGroupName}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">วันที่มีการกวาดข้อมูล</td>
                                    <td class="text-success font-20">${selectData.migratedDate}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> <!-- end table responsive-->
                </div> <!-- end col-->
            </div>
        </body>
        <div id="agothChargeSubjects" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title text-white" id="exampleModalLongTitle">ยืนยันการค้นหา</h4>
                <button type="button" class="close" id="close">×</button>
              </div>
              <div class="modal-body font-20 text-white text-center">
                คุณต้องการเปิดรายงาน Single Report ของ <br>
                หมายเลขบัตรประชาชนนี้ ${selectData.citizenId} ใช่หรือไม่
              </div>
              <div class="modal-footer">
                <button type="button" id="closeAgothChargeSubjects" class="btn btn-danger">ยกเลิก</button>
                <a id="confirmAgothChargeSubjects" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.citizenId}/0/0/0/0/0">ตกลง</a>				
              </div>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
        </html>`;
  }

  public viewgetHtmlSingleReport(selectData: Dxc_Model_Agoth_ChargeSubject, title: string) {

    return this.html = `<html>

        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            <script>
              $(document).ready(function() {
                $('#confirmAgothChargeSubjects').click(function(){
                  $('#agothChargeSubjects').modal('toggle');
                  $('#agothChargeSubjects').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $('#close').click(function(){
                  $('#agothChargeSubjects').modal('toggle');
                  $('#agothChargeSubjects').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $('#closeAgothChargeSubjects').click(function(){
                  $('#agothChargeSubjects').modal('toggle');
                  $('#agothChargeSubjects').on('hidden.bs.modal', function () {
                      $('body').addClass('modal-open');
                  });
                });
                $("#agothChargeSubjects").modal({
                  show: false,
                  backdrop: 'static'
                });
                $("#clickAgothChargeSubjects").click(function() {
                $("#agothChargeSubjects").modal("show");
                });
              });
            </script>
        </head>

        <body>
            <div class="card">
                <div class="card-body">
                    <h4 class="header-title mb-3 text-white font-20 text-center">${title}</h4>
                    </hr>
                    <div class="table-responsive">
                        <table class="table table-borderless">
                            <tbody>
                                <tr>
                                  <td class="text-white font-20"><u>ข้อมูลเกี่ยวกับผู้ต้องหา/จำเลย</u></td>
                                </tr>
                                <tr>
                                  <td class="text-white font-20">รหัสผู้ต้องหา/จำเลย</td>
                                  <td>
                                      <span class="text-success font-20">${selectData.accusedId}
                                      </span>
                                  </td>
                                </tr>
                                <tr>
                                <td class="text-white font-20">รหัสของแต่ละ generallc</td>
                                  <td>
                                    <span class="text-success font-20">${selectData.generallcId}
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="text-white font-20">เลขบัตรประชาชนผู้ต้องหา</td>
                                  <td>
                                      <span class="text-success font-20">${selectData.citizenId}
                                      </span>
                                  </td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">คำนำชื่อผู้ต้องหา1</td>
                                    <td class="text-success font-20">${selectData.title1}</td>
                                    <td class="text-white font-20">ชื่อผู้ต้องหา1</td>
                                    <td class="text-success font-20">${selectData.name1}</td>
                                    <td class="text-white font-20">นามสกุลผู้ต้องหา1</td>
                                    <td class="text-success font-20">${selectData.surname1}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">คำนำชื่อผู้ต้องหา2</td>
                                    <td class="text-success font-20">${selectData.title2}</td>
                                    <td class="text-white font-20">ชื่อผู้ต้องหา2</td>
                                    <td class="text-success font-20">${selectData.name2}</td>
                                    <td class="text-white font-20">นามสกุลผู้ต้องหา2</td>
                                    <td class="text-success font-20">${selectData.surname2}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">คำนำชื่อผู้ต้องหา3</td>
                                    <td class="text-success font-20">${selectData.title3}</td>
                                    <td class="text-white font-20">ชื่อผู้ต้องหา3</td>
                                    <td class="text-success font-20">${selectData.name3}</td>
                                    <td class="text-white font-20">นามสกุลผู้ต้องหา3</td>
                                    <td class="text-success font-20">${selectData.surname3}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">คำนำชื่อผู้ต้องหา4</td>
                                    <td class="text-success font-20">${selectData.title4}</td>
                                    <td class="text-white font-20">ชื่อผู้ต้องหา4</td>
                                    <td class="text-success font-20">${selectData.name4}</td>
                                    <td class="text-white font-20">นามสกุลผู้ต้องหา4</td>
                                    <td class="text-success font-20">${selectData.surname4}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">คำนำชื่อผู้ต้องหา5</td>
                                    <td class="text-success font-20">${selectData.title5}</td>
                                    <td class="text-white font-20">ชื่อผู้ต้องหา5</td>
                                    <td class="text-success font-20">${selectData.name5}</td>
                                    <td class="text-white font-20">นามสกุลผู้ต้องหา5</td>
                                    <td class="text-success font-20">${selectData.surname5}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">วันเดือนปีเกิด ผู้ต้องหา</td>
                                    <td class="text-success font-20">${selectData.birthDate}</td>
                                    <td class="text-white font-20">อายุผู้ต้องหา</td>
                                    <td class="text-success font-20">${selectData.age} ปี</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">เพศผู้ต้องหา</td>
                                    <td class="text-success font-20">${selectData.genderName}</td>
                                    <td class="text-white font-20">อาชีพผู้ต้องหา</td>
                                    <td class="text-success font-20" colspan="2">${selectData.occupationName}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">อาชีพอื่นๆ</td>
                                    <td class="text-success font-20">${selectData.occupationOther}</td>
                                    <td class="text-white font-20"></td>
                                    <td class="text-success font-20"></td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">สัญชาติผู้ต้องหา</td>
                                    <td class="text-success font-20">${selectData.nationalityName}</td>
                                    <td class="text-white font-20">สัญชาติอื่นๆ</td>
                                    <td class="text-success font-20">${selectData.nationalityOther}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">เชื้อชาติผู้ต้องหา</td>
                                    <td class="text-success font-20">${selectData.race}</td>
                                    <td class="text-white font-20">ภูมิลำเนา</td>
                                    <td class="text-success font-20">${selectData.personNative}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">ชื่อประเทศ</td>
                                    <td class="text-success font-20">${selectData.countryName}</td>
                                    <td class="text-white font-20">ประเทศอื่นๆ</td>
                                    <td class="text-success font-20">${selectData.countryOther}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20"><u>ที่อยู่ผู้ต้องหา</u></td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">บ้านเลขที่</td>
                                    <td class="text-success font-20">${selectData.address}</td>
                                    <td class="text-white font-20">หมู่</td>
                                    <td class="text-success font-20">${selectData.moo}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">ซอย</td>
                                    <td class="text-success font-20">${selectData.soi}</td>
                                    <td class="text-white font-20">ถนน</td>
                                    <td class="text-success font-20">${selectData.road}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">ตำบล</td>
                                    <td class="text-success font-20">${selectData.tambolName}</td>
                                    <td class="text-white font-20">อำเภอ</td>
                                    <td class="text-success font-20">${selectData.amphurName}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">จังหวัด</td>
                                    <td class="text-success font-20">${selectData.provinceName}</td>
                                    <td class="text-white font-20">รหัสไปษณีย์</td>
                                    <td class="text-success font-20">${selectData.zipCode}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">โทรศัพท์</td>
                                    <td class="text-success font-20">${selectData.telephone}</td>
                                    <td class="text-white font-20">อีเมล</td>
                                    <td class="text-success font-20">${selectData.email}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">คำสั่งอัยการ</td>
                                    <td class="text-success font-20">${selectData.prosCommandName}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">รายละเอียดความเห็นพนักงานสอบสวน</td>
                                    <td class="text-success font-20">${selectData.criRemark}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">ความเห็นพนักงานสอบสวน</td>
                                    <td class="text-success font-20">${selectData.inqDecisionGroupName}</td>
                                </tr>
                                <tr>
                                    <td class="text-white font-20">วันที่มีการกวาดข้อมูล</td>
                                    <td class="text-success font-20">${selectData.migratedDate}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> <!-- end table responsive-->
                </div> <!-- end col-->
            </div>
        </body>
        <div id="agothChargeSubjects" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title text-white" id="exampleModalLongTitle">ยืนยันการค้นหา</h4>
                <button type="button" class="close" id="close">×</button>
              </div>
              <div class="modal-body font-20 text-white text-center">
                คุณต้องการเปิดรายงาน Single Report ของ <br>
                หมายเลขบัตรประชาชนนี้ ${selectData.citizenId} ใช่หรือไม่
              </div>
              <div class="modal-footer">
                <button type="button" id="closeAgothChargeSubjects" class="btn btn-danger">ยกเลิก</button>
                <a id="confirmAgothChargeSubjects" class="btn btn-primary" target="_blank" href="#/dxcui0014/dxcui0018/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20Single%20Report/${selectData.citizenId}/0/0/0/0/0">ตกลง</a>				
              </div>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
        </html>`;
  }

  public getSearchData() {
    // const schema = environment.qm.sub[0]['dopa'].sub[0]['thaiidcard'].schema;
    const schema = 'agoth-charge-subject';
    console.log(typeof (localStorage.getItem(schema + 'Results')));
    if (localStorage.getItem(schema + 'Results') === '[]'
      || localStorage.getItem(schema + 'Results') === null) {

      console.log('1.1');
    } else {
      this.show = true;
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length; // นับจำนวนรายการ
      console.log('agoth-charge-subjectObj' + this.obj);

    }
  }

  public getSearchDataCareer() {
    // const schema = environment.qm.sub[0]['dopa'].sub[0]['thaiidcard'].schema;
    const schema = 'agoth-charge-subject';
    console.log(typeof (localStorage.getItem(schema + '-career-Results')));
    if (localStorage.getItem(schema + '-career-Results') === '[]'
      || localStorage.getItem(schema + '-career-Results') === null) {

      console.log('1.1');
    } else {
      this.showCareer = true;
      this.objCareer = localStorage.getItem(schema + '-career-Results');
      this.resultsCareer = JSON.parse(this.objCareer);
      this.countCareer = this.resultsCareer.length; // นับจำนวนรายการ
      console.log('agoth-charge-subjectObj' + this.obj);

    }
  }

  public getallegationPdf() {
    // const schema = environment.qm.sub[0]['dopa'].sub[0]['thaiidcard'].schema;
    const schema = 'agoth-charge-subject';
    if (localStorage.getItem(schema + 'Results') === '[]' ||
      localStorage.getItem(schema + 'Results') === null) {

      this.allegationPdf = [];
      console.log('ข้อมูลผู้ต้องหา/จำเลย PDF null');
    } else {
      this.obj = localStorage.getItem(schema + 'Results');
      this.results = JSON.parse(this.obj);
      this.count = this.results.length; // นับจำนวนรายการ
      this.allegationPdfCount = `<div class="col-md-11"
          class="row card singlereport-timeline-item list-normal-design-head-collapse">
          <span class="list-normal-design-underline depart">สำนักงานอัยการสูงสุด: </span>
          <span class="list-normal-design-underline departdata">ข้อมูลผู้ต้องหา/จำเลย </span>
          <span class="list-normal-design-underline count">จำนวน: ${this.count} รายการ
          </span>
        </div>`;
      this.loadReportDetail();
      for (let i = 0; i < this.results.length; i++) {
        this.allegationPdf.push(`
          <div class="col-md-11">
            <div class="section-criminal-results"
            style="text-indent:25px;font-size: 16px; line-height:30px; padding-top: 0px ;margin-top: 0pxp;">
            <span class="list-normal-design-underline depart">ข้อมูลผู้ต้องหา/จำเลย</span>
            <div style="padding-left:15px;">
            <strong class="report-field-title">ชื่อ-สกุลผู้ต้องหา/จำเลย</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
              ${this.changeNull(this.results[i].name1)} ${this.changeNull(this.results[i].surname1)}</span>&nbsp;&nbsp;
              <strong class="report-field-title">วันเดือนปี เกิด</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
              ${this.formatDate(this.results[i].birthDate)}</span>&nbsp;&nbsp;
              <strong class="report-field-title">อายุ</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
              ${this.results[i].age} ปี</span>&nbsp;&nbsp;
              <strong class="report-field-title">อาชีพ</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
              ${this.changeNull(this.results[i].occupationName)}</span>&nbsp;&nbsp;
              <strong class="report-field-title">สัญชาติ</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
              ${this.changeNull(this.results[i].nationalityName)}</span>&nbsp;&nbsp;
              <strong class="report-field-title">คำสั่งอัยการ</strong>&nbsp;&nbsp;
              <span class="report-field-value" style="text-decoration:underline">
              ${this.changeNull(this.results[i].prosCommandName)}</span>&nbsp;&nbsp;
            </div>
          </div>
        </div>${this.loadReportDetail()}`);
        console.log('agoth-charge-subjectResults' + this.allegationPdf[i]);
      }
    }
  }

  public getSearchDataContact() {
    const schema = 'agoth-charge-subject';
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
      const month = date.getMonth();
      const year = date.getFullYear() + 543;
      if (dateOfBirth === 'null' || dateOfBirth == null || dateOfBirth == '') {
        return '-';
      } else if (year == 9999) {
        return 'ตลอดชีพ';
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
   * Getter $allegationPdfCount
   * @return {string}
   */
  public get $allegationPdfCount(): string {
    return this.allegationPdfCount;
  }

  /**
   * Setter $allegationPdfCount
   * @param {string} value
   */
  public set $allegationPdfCount(value: string) {
    this.allegationPdfCount = value;
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
   * Getter $allegationPdf
   * @return {string[]}
   */
  public get $allegationPdf(): string[] {
    return this.allegationPdf;
  }

  /**
   * Setter $allegationPdf
   * @param {string[]} value
   */
  public set $allegationPdf(value: string[]) {
    this.allegationPdf = value;
  }


  /**
   * Getter $results
   * @return {Dxc_Model_Agoth_ChargeSubject[]}
   */
  public get $results(): Dxc_Model_Agoth_ChargeSubject[] {
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
   * @param {Dxc_Model_Agoth_ChargeSubject[]} value
   */
  public set $results(value: Dxc_Model_Agoth_ChargeSubject[]) {
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

  public get $resultsCareer(): Dxc_Model_Agoth_ChargeSubject[] {
    return this.resultsCareer;
  }
  public set $resultsCareer(value: Dxc_Model_Agoth_ChargeSubject[]) {
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

  public get $resultsContact(): Dxc_Model_Agoth_ChargeSubject[] {
    return this.resultsContact;
  }
  public set $resultsContact(value: Dxc_Model_Agoth_ChargeSubject[]) {
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
