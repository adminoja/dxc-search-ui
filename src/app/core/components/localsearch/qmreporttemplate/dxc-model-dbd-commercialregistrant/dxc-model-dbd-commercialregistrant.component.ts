import { Component, OnInit, Input } from '@angular/core';
import { DbdCommercialRegistrantMetadata, IReportDbdCommercialRegistrant } from './dxc-model-dbd-commercialregistrant.interface';
import { Dxc_Model_Dbd_CommercialRegistrant } from './../../../../shared/models/Dxc_Model_Dbd_CommercialRegistrant';
import { environment } from 'src/environments/environment';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;

@Component({
  selector: 'app-dxc-model-dbd-commercialregistrant',
  templateUrl: './dxc-model-dbd-commercialregistrant.component.html',
  styleUrls: ['./dxc-model-dbd-commercialregistrant.component.css'],
  providers: [
    DbdCommercialRegistrantMetadata
  ]
})
export class DxcModelDbdCommercialregistrantComponent implements OnInit {
  @Input() selectData: any;
  dataSourceName: any;
  dataModelName: any = 'ฐานข้อมูลนิติบุคคล';
  constructor(private html: DbdCommercialRegistrantMetadata) {
    const schema = environment.qm.sub[0]['dbd'].sub[0]['commercialregistrant'].schema;
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
    }
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
