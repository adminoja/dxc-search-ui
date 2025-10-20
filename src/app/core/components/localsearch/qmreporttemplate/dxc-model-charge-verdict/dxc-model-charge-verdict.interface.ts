import { IDxc_Model_Agoth_ChargeVerdict } from "src/app/core/shared/models/Dxc_Model_Agoth_ChargeVerdict";
import { Injectable } from "@angular/core";

export interface IReportAgothchargeVerdict {
    model: IDxc_Model_Agoth_ChargeVerdict;
}

@Injectable()
export class AgothchargeVerdictMetadata {
    private results: IDxc_Model_Agoth_ChargeVerdict[];
    private obj: string;
    private show: boolean;
    private count: number;
    private normalPdf: string [];
    private normalPdfCount: string;
    reportName: string;
    reportOfTime: string;
    reportOfDate: string;
    html: string;
    constructor() {
      this.results = [];
      this.count = 0;
      this.normalPdf = [];
      this.normalPdfCount = '';
    }

    public getHtml(selectData: IDxc_Model_Agoth_ChargeVerdict, title: string) {
        
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
                <div class="ml-3">
                    <div class="row mt-3">
                        <div class="col-3">
                            <p class="text-white font-20">รหัสผู้ต้องหา/จำเลย</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accusedId}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">รหัสอ้างอิงคำพิพากษา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.courtresultId}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อศาล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.courtName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ประเภทชั้นศาล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.courtLevelName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ประเภทศาล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.courtTypeName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">วันที่ยื่นฟ้อง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.courtDate}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">วันที่ศาลพิพากษา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.judgementDate}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อ จำเลยให้การว่า</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accusedReplyName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อ ผลคดี</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.result1Name}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อ ผลการตัดสินคดี</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.result1Name}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">คำพิพากษา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.judgementName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">รายละเอียด คำพิพากษา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.judgementDetail}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">อุทธรณ์/ไม่อุทธรณ์</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.appealName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">วันที่อัยการสั่งอุทธรณ์/ไม่อุทธรณ์</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.prosAppealDate}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ผู้อุทธรณ์</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.petitionPerson}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">วันที่มีการกวาดข้อมูล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.migratedDate}</p>
                        </div>
                    </div>
                </div>
            </div>
          </body>
        </html>`;
    }
    
    public viewgetHtml(selectData: IDxc_Model_Agoth_ChargeVerdict, title: string) {
        return (this.html = `<html>
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
                </br></br>
                <div class="ml-3">
                    <div class="row mt-3">
                        <div class="col-3">
                            <p class="text-white font-20">รหัสผู้ต้องหา/จำเลย</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accusedId}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">รหัสอ้างอิงคำพิพากษา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.courtresultId}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อศาล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.courtName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ประเภทชั้นศาล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.courtLevelName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ประเภทศาล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.courtTypeName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">วันที่ยื่นฟ้อง</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.courtDate}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">วันที่ศาลพิพากษา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.judgementDate}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อ จำเลยให้การว่า</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.accusedReplyName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อ ผลคดี</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.result1Name}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">ชื่อ ผลการตัดสินคดี</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.result1Name}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">คำพิพากษา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.judgementName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">รายละเอียด คำพิพากษา</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.judgementDetail}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">อุทธรณ์/ไม่อุทธรณ์</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.appealName}</p>
                        </div>
                        <div class="col-3">
                            <p class="text-white font-20">วันที่อัยการสั่งอุทธรณ์/ไม่อุทธรณ์</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.prosAppealDate}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">ผู้อุทธรณ์</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.petitionPerson}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <p class="text-white font-20">วันที่มีการกวาดข้อมูล</p>
                        </div>
                        <div class="col-3">
                            <p class="text-success font-20">${selectData.migratedDate}</p>
                        </div>
                    </div>
                </div>
              </div>
            </body>
            </html>`);
    }
    
    public getSearchData() {
        const schema = 'agoth-case-prosecution-attorney-order';
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

    /**
     * Getter $results
     * @return {IDxc_Model_Agoth_ChargeVerdict[]}
     */
	public get $results(): IDxc_Model_Agoth_ChargeVerdict[] {
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
     * @param {IDxc_Model_Agoth_ChargeVerdict[]} value
     */
	public set $results(value: IDxc_Model_Agoth_ChargeVerdict[]) {
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