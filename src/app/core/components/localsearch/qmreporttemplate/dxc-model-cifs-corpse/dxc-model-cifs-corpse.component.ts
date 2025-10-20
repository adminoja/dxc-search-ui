import { Component, OnInit, Input } from '@angular/core';
import { Dxc_Model_Cifs_Corpse, IDxc_Model_Cifs_Corpse } from 'src/app/core/shared/models/Dxc_Model_Cifs_Corpse';
import { IReportCifsCorpse, CifsCorpseMetadata } from './dxc-model-cifs-corpse.interface';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;

@Component({
  selector: 'app-dxc-model-cifs-corpse',
  templateUrl: './dxc-model-cifs-corpse.component.html',
  styleUrls: ['./dxc-model-cifs-corpse.component.css'],
  providers: [
    CifsCorpseMetadata
  ]
})
export class DxcModelCifsCorpseComponent implements OnInit {
  selectData: IDxc_Model_Cifs_Corpse;
  dataSourceName: any;
  dataModelName: any = 'ฐานข้อมูลคนนิรนาม';
  id: any;
  dataHtml: IReportCifsCorpse;
  constructor(private html: CifsCorpseMetadata) {
    this.selectData = JSON.parse(localStorage.getItem('cifs-corpse'));
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
