import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Idb_DirectoryDimensionCase } from 'src/app/core/shared/models/Dxc_Model_Idb_DirectoryDimensionCase';
import { IdbDirectoryDimensionCaseMetadata, IReportIdbDirectoryDimensionCase } from './dxc-model-idb-directory-dimension-case.interface';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;

@Component({
  selector: 'app-dxc-model-idb-directory-dimension-case',
  templateUrl: './dxc-model-idb-directory-dimension-case.component.html',
  styleUrls: ['./dxc-model-idb-directory-dimension-case.component.scss'],
  providers: [
    IdbDirectoryDimensionCaseMetadata
  ]
})
export class DxcModelIdbDirectoryDimensionCaseComponent implements OnInit {

  selectData: IDxc_Model_Idb_DirectoryDimensionCase;
  dataSourceName: any;
  dataModelName: any = 'ฐานข้อมูลสารบบคดี (มิติคดี)';
  id: any;
  dataHtml: IReportIdbDirectoryDimensionCase;
  constructor(private html: IdbDirectoryDimensionCaseMetadata) {
    // const schema = environment.qm.sub[0]['dop'].sub[0]['MoiDsdWorkforceDevelopments'].schema;
    //   this.selectData = JSON.parse(localStorage.getItem(schema));
    this.selectData = JSON.parse(localStorage.getItem('agoth-directory-dimension-case'));
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
