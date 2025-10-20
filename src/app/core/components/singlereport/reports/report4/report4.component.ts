import { Report1Component } from './../report1/report1.component';
import { DocPrisonerMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-doc-prisoner/dxc-model-doc-prisoner.interface';
import { IDxc_Model_Rlpd_Requestors } from './../../../../shared/models/Dxc_Model_Rlpd_Requestors';
import { Component, OnInit } from '@angular/core';
import { IReport4, Metadata } from './report4.interface';
import { ThemeLight } from '../../../../shared/utils/theme-light';
import * as moment from 'moment';
import { ThaiDatePipe } from '../../../../shared/pipe/thaidate.pipe';
import { Dxc_Model_Dopa_Citizen } from '../../../../shared/models/Dxc_Model_Dopa_Citizen';
import { Dxc_Model_Doc_Prisoner } from '../../../../shared/models/Dxc_Model_Doc_Prisoner';
import { IDxc_Model_Djop_JuvenileOffender } from '../../../../shared/models/Dxc_Model_Djop_JuvenileOffender';
import { IDxc_Model_Dop_Probationer } from '../../../../shared/models/Dxc_Model_Dop_Probationer';
import { IDxc_Model_Oncb_NarcoticOffender } from '../../../../shared/models/Dxc_Model_Oncb_NarcoticOffender';
import { Dxc_Model_Rlpd_Requestors } from '../../../../shared/models/Dxc_Model_Rlpd_Requestors';
import { DopaCitizenMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dopa-citizen/dxc-model-dopa-citizen.interface';
import { DopProbationerMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dop-probationer/dxc-model-dop-probationer.interface';
import { RlpdRequestorsMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-rlpd-requestors/dxc-model-rlpd-requestors.interface';
declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'app-report4',
  templateUrl: './report4.component.html',
  styleUrls: ['./report4.component.scss'],
  providers: [
    Metadata,
    DopaCitizenMetadata,
    DocPrisonerMetadata,
    DopProbationerMetadata,
    RlpdRequestorsMetadata
  ]
})
export class Report4Component implements OnInit {

  dataHtml: IReport4;
  theme: ThemeLight;

  reportName: string; // ผู้ขอรายงาน
  reportOfDate: string; // วันที่พิมรายงาน
  reportOfTime: string; // เวลาที่พิมรายงาน
  reportBarcode: string; // เลขที่เอกสาร(เลขบาร์โค๊ด)
  wartermarks: string;

  image: any;
  addressTopCitizen: string[];
  addressPrisonerPdf: string[];
  addressProbationerPdf: string[];
  addressRequestorsPdf: string[];

  constructor(private html: Metadata,
    private ReportDopaCitizen: DopaCitizenMetadata,
    private ReportDocPrisoner: DocPrisonerMetadata,
    private ReportDopProbationer: DopProbationerMetadata,
    private ReportRlpdRequestors: RlpdRequestorsMetadata,

  ) {
    this.loadReportDetail();
    this.ReportDocPrisoner.getAddressPrisonerPdf();
    this.addressPrisonerPdf = this.ReportDocPrisoner.$addressPrisonerPdf;
    this.ReportDopaCitizen.getAddressCitizenPdf();
    this.addressTopCitizen = this.ReportDopaCitizen.$addressCitizenPdf;
    this.ReportDopProbationer.getAddressProbationPdf();
    this.addressProbationerPdf = this.ReportDopProbationer.$addressProbationerPdf;
    this.ReportRlpdRequestors.getAddressRequestorsPdf();
    this.addressRequestorsPdf = this.ReportRlpdRequestors.$addressRequestorsPdf;

  }

  ngOnInit() {
    this.pdfPreview();
  }
  pdfPreview() {
    this.dataHtml = {
      reportName: this.reportName, // ผู้ขอรายงาน
      reportOfDate: this.reportOfDate, // วันที่พิมรายงาน
      reportOfTime: this.reportOfTime, // เวลาที่พิมรายงาน
      reportBarcode: this.reportBarcode, // เลขที่เอกสาร(เลขบาร์โค๊ด)
      wartermarks: this.wartermarks,
      image: this.changeNull(this.image),
      addressTopCitizen: this.changeNull(this.addressTopCitizen.join('').toString()),
      addressPrisonerPdf: this.changeNull(this.addressPrisonerPdf.join('').toString()),
      addressProbationerPdf: this.changeNull(this.addressProbationerPdf.join('').toString()),
      addressRequestorsPdf: this.changeNull(this.addressRequestorsPdf.join('').toString())

    };

    const pdfReactor = new PDFreactor();
    console.log(pdfReactor);
    const config = {

      document: this.html.getHtml(this.dataHtml),
      signPDF: {
        'keyAlias': 'le-9474320e-12b6-4d31-b5c2-96673e619c6b',
        'keystorePassword': '1234',
        'keystoreType': 'PKCS12',
        'keystoreURL': 'https://search.dxc.go.th/public/secur/keystore.pfx',
        'signingMode': 'WINCER_SIGNED'
      },
      addAttachments: true,
      addBookmarks: true,
      title: 'รายงานประวัติที่อยู่บุคคล'
    };

    pdfReactor.convertAsync(config, function (id) {
      console.log(id);
      pdfReactor.getProgress(id, function (progress) {
        setTimeout(function () {
          if (!progress.finished) {
            pdfReactor.getDocument(id, function (Result) {
              console.log(Result.document);
              const iframe = document.getElementById('result');

              iframe.src = 'data:application/pdf;base64,' + Result.document;
            });
          }
        }, 9000);
      });
    });
  }
  loadReportDetail(): any {
    if (localStorage.getItem('reportName') !== null) {
      this.reportName = localStorage.getItem('reportName');
      this.reportOfDate = moment(new Date().toString()).format('L').toString();
      this.reportOfTime = moment(new Date().toString()).format('LTS').toString();
      this.reportBarcode = 'QP4015-12345678';
      this.wartermarks = `<div class="watermark">
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark2">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark3">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark4">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark5">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark6">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark7">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark8">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark9">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark10">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark11">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>`;

    } else {
      this.reportName = 'เกิดข้อผิดพลาด';
      this.reportOfDate = moment(new Date().toString()).format('L').toString();
      this.reportOfTime = moment(new Date().toString()).format('LTS').toString();
      this.reportBarcode = 'QP4015-12345678';
      this.wartermarks = `<div class="watermark">
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark2">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark3">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark4">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark5">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark6">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark7">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark8">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark9">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark10">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark11">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>`;

    }
  }
  thaiNumber(num) {
    const array = { '1': '๑', '2': '๒', '3': '๓', '4': '๔', '5': '๕', '6': '๖', '7': '๗', '8': '๘', '9': '๙', '0': '๐' };
    var str = num.toString();
    for (var val in array) {
      str = str.split(val).join(array[val]);
    }
    return str;
  }
  changeNull(selectData: string) {
    if (selectData == null || selectData == undefined || selectData == 'null') {
      return '-';
    } else {
      return selectData;
    }
  }
  changeSex(sex: string) {
    if (sex == 'MALE') {
      return 'ชาย'
    } else if (sex == 'FEMALE') {
      return 'หญิง'
    } else if (sex == 'OTHER') {
      return 'อื่นๆ'
    } else if (sex == 'null') {
      return '-';
    }
  }
  imageEncode(imageCode) {
    var hex = imageCode,
      bytes = [],
      str;

    for (var i = 0; i < hex.length - 1; i += 2) {
      bytes.push(parseInt(hex.substr(i, 2), 16));
    }

    str = String.fromCharCode.apply(String, bytes);

    var image = 'data:image/png;base64,' + btoa(str);

    this.image = image;
  }
}
