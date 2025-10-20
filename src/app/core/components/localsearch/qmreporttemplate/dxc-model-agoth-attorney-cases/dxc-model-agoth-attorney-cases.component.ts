import { Component, OnInit } from '@angular/core';
import { IReportAgothAttorneyCases, AgothAttorneyCasesMetadata } from './dxc-model-agoth-attorney-cases.interface';
import { IDxc_Model_Agoth_AttorneyMainCases } from 'src/app/core/shared/models/Dxc_Model_Agoth_AttorneyMainCases';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'app-dxc-model-agoth-attorney-cases',
  templateUrl: './dxc-model-agoth-attorney-cases.component.html',
  styleUrls: ['./dxc-model-agoth-attorney-cases.component.css'],
  providers: [ AgothAttorneyCasesMetadata ]
})
export class DxcModelAgothAttorneyCasesComponent implements OnInit {
  selectData: IDxc_Model_Agoth_AttorneyMainCases;
    dataSourceName: any;
    dataModelName: any = 'ฐานข้อมูลสำนวนหลัก';
    id: any;
    dataHtml: IReportAgothAttorneyCases;

  constructor(private html: AgothAttorneyCasesMetadata) {
    this.selectData = JSON.parse(localStorage.getItem('agoth-attorney-cases'));
  }

  ngOnInit() {
    this.pdfPreview();
  }
  pdfPreview() {
    var pdfReactor = new PDFreactor();
      console.log(pdfReactor);
      var config = {
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
      pdfReactor.convertAsync(config, function(id) {
        console.log(id);
        pdfReactor.getProgress(id, function(progress) {
          setTimeout(function() {
            if (!progress.finished) {
              pdfReactor.getDocument(id, function(Result) {
                console.log(Result.document);
                var iframe = document.getElementById('result');
                iframe.src = 'data:application/pdf;base64,' + Result.document;
              });
            }
          }, 3000);
        });
      });
  }
}
