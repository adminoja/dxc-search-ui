import { IDxc_Model_Agoth_AttorneySubcase } from "src/app/core/shared/models/Dxc_Model_Agoth_AttorneySubcase";
import { Injectable } from "@angular/core";

export interface IReportAgothAttorneySubcase {
    model: IDxc_Model_Agoth_AttorneySubcase;
}

@Injectable()
export class AgothAttorneySubcaseMetadata {
    private results: IDxc_Model_Agoth_AttorneySubcase[];
    private obj: string;
    private show: boolean;
    private count: number;
    reportName: string;
    reportOfTime: string;
    reportOfDate: string;
  
    html: string;
    constructor() {
      this.results = [];
      this.count = 0;
    }
    public getHtml(selectData: IDxc_Model_Agoth_AttorneySubcase, title: string) {
      selectData.reportName = null;
      
      this.html = `
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
                <br /> <br />
                <div class="ml-3">
                  <div class="row mt-3">
                      <div class="col-3">
                          <p class="text-white font-20">วันเวลาที่เกิดเหตุ</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.incedentDate}</p>
                      </div>
                  </div>
                  <div class="row mt-3">
                      <div class="col-3">
                          <p class="text-white font-20">รายละเอียดการเกิดเหตุ</p>
                      </div>
                      <div class="col-9">
                          <p class="text-success font-20">${selectData.incedentDetail}</p>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">อายุความต่ำสุด/ปี</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.expMin}</p>
                      </div>
                      <div class="col-3">
                          <p class="text-white font-20">อายุความต่ำสุด/วันที่</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.expDateMin}</p>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">อายุความสูงสุด/ปี</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.expMax}</p>
                      </div>
                      <div class="col-3">
                          <p class="text-white font-20">อายุความสูงสุด/วันที่</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.expDateMax}</p>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">เลขรายงานการสอบสวนคดี</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.inqNumber}</p>
                      </div>
                      <div class="col-3">
                          <p class="text-white font-20">วันที่รายงานการสอบสวนคดี</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.inqDate}</p>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">วันที่จับกุม</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.arrestDate}</p>
                      </div>
                      <div class="col-3">
                          <p class="text-white font-20">ชื่อ เรื่องที่ตำรวจส่งมา</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.inqName}</p>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">รายละเอียดเพิ่มเติม เรื่องที่ตำรวจส่งมา</p>
                      </div>
                      <div class="col-9">
                          <p class="text-success font-20">${selectData.inqDetail}</p>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">ประเภทศาล</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.courtTypeName}</p>
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
                          <p class="text-white font-20">ชนิดสำนวน</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.fileTypeName}</p>
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
        return null;
    }

    public viewgetHtml(selectData: IDxc_Model_Agoth_AttorneySubcase, title: string) {
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
                <div class="ml-3">
                  <div class="row mt-3">
                      <div class="col-3">
                          <p class="text-white font-20">วันเวลาที่เกิดเหตุ</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.incedentDate}</p>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">รายละเอียดการเกิดเหตุ</p>
                      </div>
                      <div class="col-9">
                          <p class="text-success font-20">${selectData.incedentDetail}</p>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">อายุความต่ำสุด/ปี</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.expMin}</p>
                      </div>
                      <div class="col-3">
                          <p class="text-white font-20">อายุความต่ำสุด/วันที่</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.expDateMin}</p>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">อายุความสูงสุด/ปี</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.expMax}</p>
                      </div>
                      <div class="col-3">
                          <p class="text-white font-20">อายุความสูงสุด/วันที่</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.expDateMax}</p>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">เลขรายงานการสอบสวนคดี</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.inqNumber}</p>
                      </div>
                      <div class="col-3">
                          <p class="text-white font-20">วันที่รายงานการสอบสวนคดี</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.inqDate}</p>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">วันที่จับกุม</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.arrestDate}</p>
                      </div>
                      <div class="col-3">
                          <p class="text-white font-20">ชื่อ เรื่องที่ตำรวจส่งมา</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.inqName}</p>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">รายละเอียดเพิ่มเติม เรื่องที่ตำรวจส่งมา</p>
                      </div>
                      <div class="col-9">
                          <p class="text-success font-20">${selectData.inqDetail}</p>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-3">
                          <p class="text-white font-20">ประเภทศาล</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.courtTypeName}</p>
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
                          <p class="text-white font-20">ชนิดสำนวน</p>
                      </div>
                      <div class="col-3">
                          <p class="text-success font-20">${selectData.fileTypeName}</p>
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
        const schema = 'agoth-attorney-subcase';
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
     * @return {IDxc_Model_Agoth_AttorneySubcase[]}
     */
	public get $results(): IDxc_Model_Agoth_AttorneySubcase[] {
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
     * Setter $results
     * @param {IDxc_Model_Agoth_AttorneySubcase[]} value
     */
	public set $results(value: IDxc_Model_Agoth_AttorneySubcase[]) {
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
}