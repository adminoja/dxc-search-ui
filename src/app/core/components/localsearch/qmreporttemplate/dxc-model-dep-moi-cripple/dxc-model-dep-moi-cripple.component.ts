import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Dep_Moi_Cripple } from 'src/app/core/shared/models/Dxc_Model_Dep_Moi_Cripple';
import { environment } from 'src/environments/environment';
import { DepMoiCrippleMetadata, IReportDepMoiCripple } from './dxc-model-dep-moi-cripple.interface';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'app-dxc-model-dep-moi-cripple',
  templateUrl: './dxc-model-dep-moi-cripple.component.html',
  styleUrls: ['./dxc-model-dep-moi-cripple.component.scss'],
  providers: [
    DepMoiCrippleMetadata
  ]
})
export class DxcModelDepMoiCrippleComponent implements OnInit {

  selectData: IDxc_Model_Dep_Moi_Cripple;
  dataSourceName: any;
  dataModelName: any = 'ฐานข้อมูลคนพิการ (Linkage)';
  id: any;
  dataHtml: IReportDepMoiCripple;
  constructor(private html: DepMoiCrippleMetadata) {
    const schema = environment.qm.sub[0]['dep'].sub[0]['cripple'].schema;
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
