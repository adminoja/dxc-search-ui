import { Component, OnInit, Input } from '@angular/core';
import { CifsAnonymousCorpseMetadata, IReportCifsAnonymousCorpse } from './dxc-model-cifs-anonymous-corpse.interface';
import { IDxc_Model_Cifs_AnonymousCorpse } from './../../../../shared/models/Dxc_Model_Cifs_AnonymousCorpse';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;

@Component({
  selector: 'app-dxc-model-cifs-anonymous-corpse',
  templateUrl: './dxc-model-cifs-anonymous-corpse.component.html',
  styleUrls: ['./dxc-model-cifs-anonymous-corpse.component.css'],
  providers: [
    CifsAnonymousCorpseMetadata
  ]
})

export class DxcModelCifsAnonymousCorpseComponent implements OnInit {
  selectData: IDxc_Model_Cifs_AnonymousCorpse;
  dataSourceName: any;
  dataModelName: any = 'ฐานข้อมูลศพนิรนาม';
  id: any;
  dataHtml: IReportCifsAnonymousCorpse;
  constructor(private html: CifsAnonymousCorpseMetadata) {
    this.selectData = JSON.parse(localStorage.getItem('cifs-anonymous-corpse'));
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
