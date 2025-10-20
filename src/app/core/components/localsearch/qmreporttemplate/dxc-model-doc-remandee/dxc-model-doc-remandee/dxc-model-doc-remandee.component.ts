import { Component, OnInit, Input } from '@angular/core';
import { DocRemandeeMetadata, IReportDocRemandee } from './dxc-model-doc-remandee.interface';
import { Dxc_Model_Doc_Remandee } from 'src/app/core/shared/models/Dxc_Model_Doc_Remandee';
import { environment } from 'src/environments/environment';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;

@Component({
  selector: 'app-dxc-model-doc-remandee',
  templateUrl: './dxc-model-doc-remandee.component.html',
  styleUrls: ['./dxc-model-doc-remandee.component.scss'],
  providers: [
    DocRemandeeMetadata
  ]
})
export class DxcModelDocRemandeeComponent implements OnInit {
  selectData: Dxc_Model_Doc_Remandee;
  dataSourceName: any;
  dataModelName: any = 'ผู้ต้องขัง (คดีที่ยังไม่พิพากษา)';
  id: any;
  dataHtml: IReportDocRemandee;
  constructor(private html: DocRemandeeMetadata) {
    const schema = environment.qm.sub[0]['doc'].sub[0]['remandee'].schema;
    this.selectData = JSON.parse(localStorage.getItem(schema));
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
