import { Component, OnInit } from '@angular/core';
import {
  DopaMoiPor4Metadata,
  IReportDopaMoiPor4
} from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-por4/dxc-model-dopa-moi-por4.interface';
import { Dxc_Model_Dopa_MoiDopaPor4Licenses } from 'src/app/core/shared/models/Dxc_Model_Dopa_MoiDopaPor4Licenses';
import { environment } from 'src/environments/environment';

declare var PDFreactor: any;
declare var document: any;

@Component({
  selector: 'app-dxc-model-dopa-moi-por4',
  templateUrl: './dxc-model-dopa-moi-por4.component.html',
  styleUrls: ['./dxc-model-dopa-moi-por4.component.css'],
  providers: [
    DopaMoiPor4Metadata
  ]
})
export class DxcModelDopaMoiPor4Component implements OnInit {

  selectData: Dxc_Model_Dopa_MoiDopaPor4Licenses;
  dataSourceName: any;
  dataModelName: any = 'ใบอนุญาต ป.4 ครอบครองอาวุธปืน (Linkage)';
  id: any;
  dataHtml: IReportDopaMoiPor4;
  constructor(private html: DopaMoiPor4Metadata) {
    const schema = environment.qm.sub[0]['dopa'].sub[0]['por4'].schema;
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
