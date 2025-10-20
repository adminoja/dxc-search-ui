import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Agoth_AttorneySubcase } from 'src/app/core/shared/models/Dxc_Model_Agoth_AttorneySubcase';
import { AgothAttorneySubcaseMetadata, IReportAgothAttorneySubcase } from './dxc-model-agoth-attorney-subcase.interface';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;

@Component({
  selector: 'app-dxc-model-agoth-attorney-subcase',
  templateUrl: './dxc-model-agoth-attorney-subcase.component.html',
  styleUrls: ['./dxc-model-agoth-attorney-subcase.component.scss'],
  providers: [
    AgothAttorneySubcaseMetadata
  ]
})
export class DxcModelAgothAttorneySubcaseComponent implements OnInit {
  selectData: IDxc_Model_Agoth_AttorneySubcase;
  dataSourceName: any;
  dataModelName: any = 'ฐานข้อมูลสำนวนย่อย';
  id: any;
  dataHtml: IReportAgothAttorneySubcase;
  constructor(private html: AgothAttorneySubcaseMetadata) { 
    this.selectData = JSON.parse(localStorage.getItem('agoth-attorney-subcase'));
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
