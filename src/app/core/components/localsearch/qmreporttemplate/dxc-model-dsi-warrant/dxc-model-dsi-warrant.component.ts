import { Component, OnInit, Input } from '@angular/core';
import { IDxc_Model_Dsi_Warrant } from 'src/app/core/shared/models/Dxc_Model_Dsi_Warrant';
import { IReportDsiWarrant, DsiWarrantMetadata } from './dxc-model-dsi-warrant.interface';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'dxc-model-dsi-warrant',
  templateUrl: './dxc-model-dsi-warrant.component.html',
  styleUrls: ['./dxc-model-dsi-warrant.component.css'],
  providers: [
    DsiWarrantMetadata
  ]
})
export class DxcModelDsiWarrantComponent implements OnInit {
  selectData: IDxc_Model_Dsi_Warrant;
  dataSourceName: any;
  dataModelName: any = 'ฐานข้อมูลหมายจับคดีพิเศษ';
  id: any;
  dataHtml: IReportDsiWarrant;
  constructor(private html: DsiWarrantMetadata) {
    this.selectData = JSON.parse(localStorage.getItem('dsi-warrant'));
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
              const iframe = document.getElementById('result')
              iframe.src = 'data:application/pdf;base64,' + Result.document;
            });
          }
        }, 3000);
      });
    });
  }
}