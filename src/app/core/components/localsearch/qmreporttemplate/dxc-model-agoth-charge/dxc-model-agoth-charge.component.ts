import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Agoth_Charge } from 'src/app/core/shared/models/Dxc_Model_Agoth_Charge';
import { AgothChargeMetadata, IReportAgothCharge } from './dxc-model-agoth-charge.interface';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;

@Component({
  selector: 'app-dxc-model-agoth-charge',
  templateUrl: './dxc-model-agoth-charge.component.html',
  styleUrls: ['./dxc-model-agoth-charge.component.scss'],
  providers: [
    AgothChargeMetadata
  ]
})
export class DxcModelAgothChargeComponent implements OnInit {
  
  selectData: IDxc_Model_Agoth_Charge;
  dataSourceName: any;
  dataModelName: any = 'ฐานข้อมูลข้อหาในตัวผู้ต้องหา/จำเลย';
  id: any;
  dataHtml: IReportAgothCharge;
  constructor(private html: AgothChargeMetadata) {
    // const schema = environment.qm.sub[0]['dop'].sub[0]['MoiDsdWorkforceDevelopments'].schema;
    //   this.selectData = JSON.parse(localStorage.getItem(schema));
    this.selectData = JSON.parse(localStorage.getItem('agoth-charge'));
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
