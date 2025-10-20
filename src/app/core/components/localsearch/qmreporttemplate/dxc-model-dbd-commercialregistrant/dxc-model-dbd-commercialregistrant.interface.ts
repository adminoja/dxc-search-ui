import { Dxc_Model_Dbd_CommercialRegistrant } from 'src/app/core/shared/models/Dxc_Model_Dbd_CommercialRegistrant';
import { Injectable } from "@angular/core";

export interface IReportDbdCommercialRegistrant {
  model: Dxc_Model_Dbd_CommercialRegistrant;
}

@Injectable()
export class DbdCommercialRegistrantMetadata {

  html: string;
  objectives: any = [];
  personList: any = [];
  descriptions: any = [];
  address: any = [];
  objectivesPdf: any = [];
  personListPdf: any = [];
  descriptionsPDF: any = [];
  addressPdf: any = [];
;
  public getHtml(selectData: Dxc_Model_Dbd_CommercialRegistrant, title: string) {
    selectData.organizationJuristicObjective.forEach((element, index) => {
      this.objectivesPdf.push(
        `
          <div class="row">
            <div class="col-6">
              <p class="text-white font-20"><b>วัตถุประสงค์ ${index + 1}</b></p>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <p class="text-white font-20">ประเภทวัตถุประสงค์</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${element.juristicObjective}</p>
            </div>
            <div class="col-3">
              <p class="text-white font-20">วัตถุประสงค์ของนิติบุคคลอ้างอิงตามรหัส TSIC</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${element.juristicObjectiveCode}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <p class="text-white font-20">วัตถุประสงค์ (ภาษาไทย)</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${element.juristicObjectiveTextTH}</p>
            </div>
            <div class="col-3">
              <p class="text-white font-20">วัตถุประสงค์ (ภาษาอังกฤษ)</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${element.juristicObjectiveTextEN}</p>
            </div>
          </div>
        `
      );
    });
    selectData.organizationJuristicPersonList.forEach(element => {
      console.log('organizationJuristicPersonList',element.juristicPerson.personNameTH)
      this.personListPdf.push(
        `
          <div class="row">
            <div class="col-3">
              <p class="text-white font-20">ลำดับ</p>
            </div><div class="col-3">
              <p class="text-success font-20">${element.juristicPersonSequence}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <p class="text-white font-20">คำนำหน้าชื่อ</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${element.juristicPerson.personNameTH.personNameTitleTextTH}</p>
            </div>
            <div class="col-3">
              <p class="text-white font-20">ชื่อตัว</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${element.juristicPerson.personNameTH.personFirstNameTH}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <p class="text-white font-20">ชื่อรอง</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${element.juristicPerson.personNameTH.personMiddleNameTH}</p>
            </div>
            <div class="col-3">
              <p class="text-white font-20">ชื่อสกุล</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${element.juristicPerson.personNameTH.personLastNameTH}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-9">
              <p class="text-white font-20">ประเภทบุคคล (กรรมการ/ผู้เป็นหุ้นส่วน)</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${element.juristicPersonType}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <p class="text-white font-20">เฉพาะกรณีห้างหุ้นส่วน ลงหุ้นด้วย เงินสด ทรัพย์สิน แรงงาน</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${element.juristicPersonInvestType}</p>
            </div>
            <div class="col-3">
              <p class="text-white font-20">เฉพาะกรณีห้างหุ้นส่วน จำนวนเงินลงทุน</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${element.juristicPersonInvestAmount}</p>
            </div>
          </div>
        `
      )
    });
    selectData.organizationJuristicPersonDescription.forEach(element => {
      this.descriptionsPDF.push(
        `
          <div class="row">
            <div class="col-3">
              <p class="text-white font-20">ลำดับของข้อมูล</p>
            </div><div class="col-3">
              <p class="text-success font-20">${element.organizationJuristicPersonDescriptionSequence}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-9">
              <p class="text-white font-20">รายละเอียดเพิ่มเติม</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${element.organizationJuristicPersonDescriptionType}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <p class="text-white font-20">รายละเอียดข้อมูล</p>
            </div>
            <div class="col-9">
              <p class="text-success font-20">${element.organizationJuristicPersonDescriptionDetail}</p>
            </div>
          </div>
        `
      )
    });
    selectData.organizationJuristicAddress.forEach(element => {
      this.addressPdf.push(
        `
          <div class="row">
            <div class="col-3">
              <p class="text-white font-20">ที่อยู่</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${element.addressType.address}</p>
            </div>
            <div class="col-3">
              <p class="text-white font-20">ชื่อตึก/อาคาร</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${element.addressType.building}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <p class="text-white font-20">เลขที่ห้อง</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${element.addressType.roomNo}</p>
            </div>
            <div class="col-3">
              <p class="text-white font-20">ชั้นที่</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${element.addressType.floor}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <p class="text-white font-20">เลขที่บ้านหรืออาคาร</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${element.addressType.addressNo}</p>
            </div>
            <div class="col-3">
              <p class="text-white font-20">หมู่ที่</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${element.addressType.moo}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <p class="text-white font-20">แยก</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${element.addressType.yaek}</p>
            </div>
            <div class="col-3">
              <p class="text-white font-20">ซอย</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${element.addressType.soi}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <p class="text-white font-20">ตรอก</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${element.addressType.trok}</p>
            </div>
            <div class="col-3">
              <p class="text-white font-20">หมู่บ้าน</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${element.addressType.village}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <p class="text-white font-20">ถนน</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${element.addressType.road}</p>
            </div>
            <div class="col-3">
              <p class="text-white font-20">ชื่อตำบล</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${element.addressType.citySubDivision.citySubDivisionTextTH}</p>
            </div>
          </div>
           <div class="row">
            <div class="col-3">
              <p class="text-white font-20">อำเภอ</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${element.addressType.city.cityTextTH}</p>
            </div>
            <div class="col-3">
              <p class="text-white font-20">จังหวัด</p>
            </div>
            <div class="col-3">
              <p class="text-success font-20">${element.addressType.countrySubDivision.countrySubDivisionTextTH}</p>
            </div>
          </div>
        `
      )
    });
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
            <table class="table" border="2px" width="100%">
                <tr>
                  <td align="center" class="text-white font-20">${title}</td>
                </tr>
            </table>
          </div>
          <div>
          </br>
              <div class="ml-3">
                <div class="row">
                    <div class="col-12">
                        <p class="text-white font-20"><u>ข้อมูลพื้นฐานของนิติบุคคล</u></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">เลขทะเบียนนิติบุคคล 13 หลัก</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.organizationJuristicID}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">เลขทะเบียนนิติบุคคลเดิม</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.organizationOldJuristicID}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">ชื่อนิติบุคคล (ภาษาไทย)</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.organizationJuristicNameTH}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">ชื่อนิติบุคคล (ภาษาอังกฤษ)</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.organizationJuristicNameEN}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">สถานะของนิติบุคคล</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.organizationJuristicStatus}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">ประเภทนิติบุคคล</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.organizationJuristicType}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">วันที่จดทะเบียนจัดตั้งของนิติบุคคล</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.organizationJuristicRegisterDate}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">ชื่อสาขาของนิติบุคคล</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.organizationJuristicBranchName}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">รองรับการให้บริการ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.digitalIDFlag}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p class="text-white font-20"><u>ข้อมูลทางการเงิน</u></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">ทุนจดทะเบียน (บาท)</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.organizationJuristicRegisterCapital}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">ทุนเรียกชำระแล้ว</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.organizationJuristicPaidUpCapital}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">ประวัติการนำส่งงบการเงิน</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.financialSubmitRecord}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p class="text-white font-20"><u>วัตถุประสงค์ของนิติบุคคล</u></p>
                    </div>
                </div>
                <div class="row">
                  <div class="col-3">
                    <p class="text-white font-20">จำนวนข้อวัตถุประสงค์</p>
                  </div>
                  <div class="col-3">
                    <p class="text-success font-20">${selectData.organizationJuristicObjectiveItems}</p>
                  </div>
                  <div class="col-3">
                    <p class="text-white font-20">จำนวนแผ่น</p>
                  </div>
                  <div class="col-3">
                    <p class="text-success font-20">${selectData.organizationJuristicObjectivePages}</p>
                  </div>
                </div>
                ${this.objectivesPdf}
                <div class="row">
                    <div class="col-12">
                        <p class="text-white font-20"><u>ข้อมูลบุคคล (กรรมการ/หุ้นส่วน)</u></p>
                    </div>
                </div>
                ${this.personListPdf}
                <div class="row">
                    <div class="col-12">
                        <p class="text-white font-20"><u>ข้อมูลอื่น ๆ</u></p>
                    </div>
                </div>
                ${this.descriptionsPDF}
                <div class="row">
                    <div class="col-12">
                        <p class="text-white font-20"><u>ที่ตั้งสำนักงานนิติบุคคล</u></p>
                    </div>
                </div>
                ${this.addressPdf}
            </div>   
            ${selectData.wartermarks}
          </div>
        </body>
    </html> `;
  }
  public viewgetHtml(selectData: Dxc_Model_Dbd_CommercialRegistrant, title: string) {
    console.log(selectData)
      selectData.organizationJuristicObjective.forEach((element, index) => {
        this.objectives.push(
          `
            <div class="row">
              <div class="col-6">
                <p class="text-white font-20"><b>วัตถุประสงค์ ${index + 1}</b></p>
              </div>
            </div>
            <div class="row">
              <div class="col-3">
                <p class="text-white font-20">ประเภทวัตถุประสงค์</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${element.juristicObjective}</p>
              </div>
              <div class="col-3">
                <p class="text-white font-20">วัตถุประสงค์ของนิติบุคคลอ้างอิงตามรหัส TSIC</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${element.juristicObjectiveCode}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-3">
                <p class="text-white font-20">วัตถุประสงค์ (ภาษาไทย)</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${element.juristicObjectiveTextTH}</p>
              </div>
              <div class="col-3">
                <p class="text-white font-20">วัตถุประสงค์ (ภาษาอังกฤษ)</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${element.juristicObjectiveTextEN}</p>
              </div>
            </div>
          `
        );
      });
      selectData.organizationJuristicPersonList.forEach(element => {
        console.log('organizationJuristicPersonList',element.juristicPerson.personNameTH)
        this.personList.push(
          `
            <div class="row">
              <div class="col-3">
                <p class="text-white font-20">ลำดับ</p>
              </div><div class="col-3">
                <p class="text-success font-20">${element.juristicPersonSequence}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-3">
                <p class="text-white font-20">คำนำหน้าชื่อ</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${element.juristicPerson.personNameTH.personNameTitleTextTH}</p>
              </div>
              <div class="col-3">
                <p class="text-white font-20">ชื่อตัว</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${element.juristicPerson.personNameTH.personFirstNameTH}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-3">
                <p class="text-white font-20">ชื่อรอง</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${element.juristicPerson.personNameTH.personMiddleNameTH}</p>
              </div>
              <div class="col-3">
                <p class="text-white font-20">ชื่อสกุล</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${element.juristicPerson.personNameTH.personLastNameTH}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-9">
                <p class="text-white font-20">ประเภทบุคคล (กรรมการ/ผู้เป็นหุ้นส่วน)</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${element.juristicPersonType}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-3">
                <p class="text-white font-20">เฉพาะกรณีห้างหุ้นส่วน ลงหุ้นด้วย เงินสด ทรัพย์สิน แรงงาน</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${element.juristicPersonInvestType}</p>
              </div>
              <div class="col-3">
                <p class="text-white font-20">เฉพาะกรณีห้างหุ้นส่วน จำนวนเงินลงทุน</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${element.juristicPersonInvestAmount}</p>
              </div>
            </div>
          `
        )
      });
      selectData.organizationJuristicPersonDescription.forEach(element => {
        this.descriptions.push(
          `
            <div class="row">
              <div class="col-3">
                <p class="text-white font-20">ลำดับของข้อมูล</p>
              </div><div class="col-3">
                <p class="text-success font-20">${element.organizationJuristicPersonDescriptionSequence}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-3">
                <p class="text-white font-20">รายละเอียดเพิ่มเติม</p>
              </div>
              <div class="col-9">
                <p class="text-success font-20">${element.organizationJuristicPersonDescriptionType}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-3">
                <p class="text-white font-20">รายละเอียดข้อมูล</p>
              </div>
              <div class="col-9">
                <p class="text-success font-20">${element.organizationJuristicPersonDescriptionDetail}</p>
              </div>
            </div>
          `
        )
      });
      selectData.organizationJuristicAddress.forEach(element => {
        this.address.push(
          `
            <div class="row">
              <div class="col-3">
                <p class="text-white font-20">ที่อยู่</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${element.addressType.address}</p>
              </div>
              <div class="col-3">
                <p class="text-white font-20">ชื่อตึก/อาคาร</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${element.addressType.building}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-3">
                <p class="text-white font-20">เลขที่ห้อง</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${element.addressType.roomNo}</p>
              </div>
              <div class="col-3">
                <p class="text-white font-20">ชั้นที่</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${element.addressType.floor}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-3">
                <p class="text-white font-20">เลขที่บ้านหรืออาคาร</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${element.addressType.addressNo}</p>
              </div>
              <div class="col-3">
                <p class="text-white font-20">หมู่ที่</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${element.addressType.moo}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-3">
                <p class="text-white font-20">แยก</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${element.addressType.yaek}</p>
              </div>
              <div class="col-3">
                <p class="text-white font-20">ซอย</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${element.addressType.soi}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-3">
                <p class="text-white font-20">ตรอก</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${element.addressType.trok}</p>
              </div>
              <div class="col-3">
                <p class="text-white font-20">หมู่บ้าน</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${element.addressType.village}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-3">
                <p class="text-white font-20">ถนน</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${element.addressType.road}</p>
              </div>
              <div class="col-3">
                <p class="text-white font-20">ชื่อตำบล</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${element.addressType.citySubDivision.citySubDivisionTextTH}</p>
              </div>
            </div>
             <div class="row">
              <div class="col-3">
                <p class="text-white font-20">อำเภอ</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${element.addressType.city.cityTextTH}</p>
              </div>
              <div class="col-3">
                <p class="text-white font-20">จังหวัด</p>
              </div>
              <div class="col-3">
                <p class="text-success font-20">${element.addressType.countrySubDivision.countrySubDivisionTextTH}</p>
              </div>
            </div>
          `
        )
      });

    return this.html = `<html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        </head>

        <body>
        <div>
          <div>
            <table class="table" border="2px" width="100%">
                <tr>
                  <td align="center" class="text-white font-20">${title}</td>
                </tr>
            </table>
          </div>
          <div>
            <br /><br />
            <div class="ml-3">
                <div class="row">
                    <div class="col-12">
                        <p class="text-white font-20"><u>ข้อมูลพื้นฐานของนิติบุคคล</u></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">เลขทะเบียนนิติบุคคล 13 หลัก</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.organizationJuristicID}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">เลขทะเบียนนิติบุคคลเดิม</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.organizationOldJuristicID}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">ชื่อนิติบุคคล (ภาษาไทย)</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.organizationJuristicNameTH}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">ชื่อนิติบุคคล (ภาษาอังกฤษ)</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.organizationJuristicNameEN}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">สถานะของนิติบุคคล</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.organizationJuristicStatus}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">ประเภทนิติบุคคล</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.organizationJuristicType}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">วันที่จดทะเบียนจัดตั้งของนิติบุคคล</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.organizationJuristicRegisterDate}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">ชื่อสาขาของนิติบุคคล</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.organizationJuristicBranchName}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">รองรับการให้บริการ</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.digitalIDFlag}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p class="text-white font-20"><u>ข้อมูลทางการเงิน</u></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">ทุนจดทะเบียน (บาท)</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.organizationJuristicRegisterCapital}</p>
                    </div>
                    <div class="col-3">
                        <p class="text-white font-20">ทุนเรียกชำระแล้ว</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.organizationJuristicPaidUpCapital}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p class="text-white font-20">ประวัติการนำส่งงบการเงิน</p>
                    </div>
                    <div class="col-3">
                        <p class="text-success font-20">${selectData.financialSubmitRecord}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p class="text-white font-20"><u>วัตถุประสงค์ของนิติบุคคล</u></p>
                    </div>
                </div>
                <div class="row">
                  <div class="col-3">
                    <p class="text-white font-20">จำนวนข้อวัตถุประสงค์</p>
                  </div>
                  <div class="col-3">
                    <p class="text-success font-20">${selectData.organizationJuristicObjectiveItems}</p>
                  </div>
                  <div class="col-3">
                    <p class="text-white font-20">จำนวนแผ่น</p>
                  </div>
                  <div class="col-3">
                    <p class="text-success font-20">${selectData.organizationJuristicObjectivePages}</p>
                  </div>
                </div>
                ${this.objectives}
                <div class="row">
                    <div class="col-12">
                        <p class="text-white font-20"><u>ข้อมูลบุคคล (กรรมการ/หุ้นส่วน)</u></p>
                    </div>
                </div>
                ${this.personList}
                <div class="row">
                    <div class="col-12">
                        <p class="text-white font-20"><u>ข้อมูลอื่น ๆ</u></p>
                    </div>
                </div>
                ${this.descriptions}
                <div class="row">
                    <div class="col-12">
                        <p class="text-white font-20"><u>ที่ตั้งสำนักงานนิติบุคคล</u></p>
                    </div>
                </div>
                ${this.address}
            </div>            
          </div>
        </body>
      </html> `;
  }
}
