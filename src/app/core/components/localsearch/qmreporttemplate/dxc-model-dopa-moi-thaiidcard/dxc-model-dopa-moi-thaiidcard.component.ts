import { Component, OnInit, Input } from '@angular/core';
import { DopaMoiThaiidcardMetadata, IReportDopaMoiThaiidcard } from './dxc-model-dopa-moi-thaiidcard.interface';
import { Dxc_Model_Moi_Dopa_ThaiIdcard } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Thaiidcard';
import { environment } from 'src/environments/environment';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;

@Component({
  selector: 'app-dxc-model-dopa-moi-thaiidcard',
  templateUrl: './dxc-model-dopa-moi-thaiidcard.component.html',
  styleUrls: ['./dxc-model-dopa-moi-thaiidcard.component.css'],
  providers: [
    DopaMoiThaiidcardMetadata
  ]
})

export class DxcModelDopaMoiThaiidcardComponent implements OnInit {
  selectData: Dxc_Model_Moi_Dopa_ThaiIdcard;
  dataSourceName: any;
  dataModelName: any = 'บัตรประจำตัวประชาชน (Linkage)';
  id: any;
  dataHtml: IReportDopaMoiThaiidcard;
  constructor(private html: DopaMoiThaiidcardMetadata) {
    const schema = environment.qm.sub[0]['dopa'].sub[0]['thaiidcard'].schema;
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
