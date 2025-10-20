import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Agoth_ChargeVictim } from 'src/app/core/shared/models/Dxc_Model_Agoth_ChargeVictim';
import { AgothChargeVictimMetadata, IReportAgothChargeVictim } from './dxc-model-agoth-charge-victim.interface';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'app-dxc-model-agoth-charge-victim',
  templateUrl: './dxc-model-agoth-charge-victim.component.html',
  styleUrls: ['./dxc-model-agoth-charge-victim.component.scss'],
  providers: [
    AgothChargeVictimMetadata
  ]
})
export class DxcModelAgothChargeVictimComponent implements OnInit {
  selectData: IDxc_Model_Agoth_ChargeVictim;
  dataSourceName: any;
  dataModelName: any = 'ฐานข้อมูลผู้เสียหาย';
  id: any;
  dataHtml: IReportAgothChargeVictim;
  constructor(private html: AgothChargeVictimMetadata) { 
    this.selectData = JSON.parse(localStorage.getItem('agoth-charge-victim'));
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
