import { Component, OnInit, Input } from '@angular/core';
import { MoacMoiFisheriesIllegalMetadata, IReportMoacMoiFisheriesIllegal } from './dxc-model-moac-moi-fisheries-illegal.interface';
import { Dxc_Model_Moi_Moac_Fisheries_Illegal } from 'src/app/core/shared/models/Dxc_Model_Moac_Moi_Fisheries_Illegal';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;

@Component({
  selector: 'app-dxc-model-moac-moi-fisheries-illegal',
  templateUrl: './dxc-model-moac-moi-fisheries-illegal.component.html',
  styleUrls: ['./dxc-model-moac-moi-fisheries-illegal.component.css'],
  providers: [
    MoacMoiFisheriesIllegalMetadata
  ]
})
export class DxcModelMoacMoiFisheriesIllegalComponent implements OnInit {

  selectData: Dxc_Model_Moi_Moac_Fisheries_Illegal;
  dataSourceName: any;
  dataModelName: any = 'คดีประมงผิดกฎหมาย(Linkage)';
  id: any;
  dataHtml: IReportMoacMoiFisheriesIllegal;
  constructor(private html: MoacMoiFisheriesIllegalMetadata) {
    this.selectData = JSON.parse(localStorage.getItem('moac-moi-moac-fisheries-illegal-fishing-cases'));
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
