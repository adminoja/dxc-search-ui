import { Component, OnInit, Input } from '@angular/core';
import { AmloMoneylaunderingcaseMetadata } from './dxc-model-amlo-money-laundering-case.interface';
import { environment } from 'src/environments/environment';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'dxc-model-amlo-money-laundering-case',
  templateUrl: './dxc-model-amlo-money-laundering-case.component.html',
  styleUrls: ['./dxc-model-amlo-money-laundering-case.component.css'],
  providers: [AmloMoneylaunderingcaseMetadata]
})
export class DxcModelAmloMoneyLaunderingCaseComponent implements OnInit {
  @Input() selectData: any;
  dataSourceName: any;
  dataModelName: any = 'ข้อมูลประวัติคดี ปปง. (คดีถึงที่สุดแล้ว)';

  constructor(private html: AmloMoneylaunderingcaseMetadata) {
    const schema = environment.qm.sub[0]['amlo'].sub[0]['moneylaunderingcase'].schema;
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
