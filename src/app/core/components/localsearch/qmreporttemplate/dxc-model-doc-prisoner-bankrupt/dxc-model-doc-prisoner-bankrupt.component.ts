import { Component, OnInit } from '@angular/core';
import { Dxc_Model_Doc_Prisoner_Bankrupt } from 'src/app/core/shared/models/Dxc_Model_Doc_Prisoner_Bankrupt';
import { DocPrisonerBankruptMetadata, IReportDocPrisonerBankrupt } from './dxc-model-doc-prisoner-bankrupt.interface';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;

@Component({
  selector: 'app-dxc-model-doc-prisoner-bankrupt',
  templateUrl: './dxc-model-doc-prisoner-bankrupt.component.html',
  styleUrls: ['./dxc-model-doc-prisoner-bankrupt.component.scss'],
  providers: [
    DocPrisonerBankruptMetadata
  ]
})
export class DxcModelDocPrisonerBankruptComponent implements OnInit {

  selectData: Dxc_Model_Doc_Prisoner_Bankrupt;
  dataSourceName: any;
  dataModelName: any = 'ผู้ต้องขัง (บุคคลล้มละลาย)';
  id: any;
  dataHtml: IReportDocPrisonerBankrupt;
  constructor(private html: DocPrisonerBankruptMetadata) {
    this.selectData = JSON.parse(localStorage.getItem('doc-prisoner-bankrupt'));
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
        }, 3000);
      });
    });
  }
}