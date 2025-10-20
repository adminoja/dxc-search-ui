import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Agoth_CaseProsecutionAttorney } from 'src/app/core/shared/models/Dxc_Model_Agoth_CaseProsecutionAttorney';
import { environment } from 'src/environments/environment.prod';
import { AgothCaseProsecutionAttorneyMetadata, IReportAgothCaseProsecutionAttorney } from './dxc-model-agoth-case-prosecution-attorney.interface';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'app-dxc-model-agoth-case-prosecution-attorney',
  templateUrl: './dxc-model-agoth-case-prosecution-attorney.component.html',
  styleUrls: ['./dxc-model-agoth-case-prosecution-attorney.component.css'],
  providers: [
    AgothCaseProsecutionAttorneyMetadata
  ]
})
export class DxcModelAgothCaseProsecutionAttorneyComponent implements OnInit {

  selectData: IDxc_Model_Agoth_CaseProsecutionAttorney;
  dataSourceName: any;
  dataModelName: any = 'ฐานข้อมูลอัยการแต่ละสำนวน';
  id: any;
  dataHtml: IReportAgothCaseProsecutionAttorney;
  constructor(private html: AgothCaseProsecutionAttorneyMetadata) {
    this.selectData = JSON.parse(localStorage.getItem('agoth-case-prosecution-attorney'));
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
              var iframe = document.getElementById('result');
              iframe.src = 'data:application/pdf;base64,' + Result.document
            });
          }
        }, 3000);
      });
    });
  }

}
