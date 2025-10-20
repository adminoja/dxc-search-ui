import {IDxc_Model_Moi_Dopa_Border_Passes} from '../../../../shared/models/Dxc_Model_Dopa_Moi_Border_Passes';
import { Component, OnInit, Input } from '@angular/core';
import { DopaMoiBorderPassesMetadata, IReportDopaMoiBorderPasses } from './dxc-model-dopa-moi-border-passes.interface';
declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'app-dxc-model-dopa-moi-border-passes',
  templateUrl: './dxc-model-dopa-moi-border-passes.component.html',
  styleUrls: ['./dxc-model-dopa-moi-border-passes.component.css'],
  providers: [
    DopaMoiBorderPassesMetadata
  ]
})
export class DxcModelDopaMoiBorderPassesComponent implements OnInit {

  selectData: IDxc_Model_Moi_Dopa_Border_Passes;
  dataSourceName: any;
  dataModelName: any = 'ข้อมูลผู้ขอออกหนังสือผ่านแดนทั้งหมด (Linkage)';
  id: any;
  dataHtml: IReportDopaMoiBorderPasses;
  constructor(private html: DopaMoiBorderPassesMetadata) {
    this.selectData = JSON.parse(localStorage.getItem('dopa-moi-dopa-border-passes'));
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
              console.log(Result.document)
              const iframe = document.getElementById('result');
              iframe.src = 'data:application/pdf;base64,' + Result.document;
            });
          }
        }, 3000);
      });
    });
  }
}

