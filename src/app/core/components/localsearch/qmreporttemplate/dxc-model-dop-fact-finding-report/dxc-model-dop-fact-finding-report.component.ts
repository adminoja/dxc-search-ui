import { Component, OnInit } from '@angular/core';
import { Dxc_Model_Dop_Fact_Finding_Report } from 'src/app/core/shared/models/Dxc_Model_Dop_Fact_Finding_Report';
import { DopFactFindingReportMetadata, IReportDopFactFindingReport } from './dxc-model-dop-fact-finding-report.interface';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;

@Component({
  selector: 'app-dxc-model-dop-fact-finding-report',
  templateUrl: './dxc-model-dop-fact-finding-report.component.html',
  styleUrls: ['./dxc-model-dop-fact-finding-report.component.scss'],
  providers: [
    DopFactFindingReportMetadata
  ]
})
export class DxcModelDopFactFindingReportComponent implements OnInit {

  selectData: Dxc_Model_Dop_Fact_Finding_Report;
    dataSourceName: any
    dataModelName: any = 'ผลการสืบเสาะ (รายงานการสืบเสาะข้อเท็จจริง (แบบ ส.2 – 46))';
    id: any;
    dataHtml: IReportDopFactFindingReport;
    constructor(private html: DopFactFindingReportMetadata) {
      this.selectData = JSON.parse(localStorage.getItem('dop-fact-finding-report'));
    }
    ngOnInit() {
    this.pdfPreview();
    }
    pdfPreview() {
      const pdfReactor = new PDFreactor();
        console.log(pdfReactor);
        const config = {
          document: this.html.getHtml(this.selectData, this.dataModelName),
          signPDF: {
            'keyAlias': 'le-9474320e-12b6-4d31-b5c2-96673e619c6b',
            'keystorePassword': '1234',
            'keystoreType': 'PKCS12',
            'keystoreURL': 'https://search.dxc.go.th/public/secur/keystore.pfx',
            'signingMode': 'WINCER_SIGNED'
            },
          addAttachments: true,
          addBookmarks: true
        };
        pdfReactor.convertAsync(config, function(id) {
          console.log(id);
          pdfReactor.getProgress(id, function(progress) {
            setTimeout(function() {
              if (!progress.finished) {
                pdfReactor.getDocument(id, function(Result) {
                  console.log(Result.document);
                  const iframe = document.getElementById('result');
                  iframe.src = 'data:application/pdf;base64,' + Result.document;
                });
              }
            }, 3000);
          });
        });
    }

}
