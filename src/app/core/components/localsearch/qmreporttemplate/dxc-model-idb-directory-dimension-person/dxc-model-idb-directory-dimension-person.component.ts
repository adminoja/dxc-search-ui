import {IDxc_Model_Idb_DirectoryDimensionPerson} from '../../../../shared/models/Dxc_Model_Idb_DirectoryDimensionPerson';
import { Component, OnInit } from '@angular/core';
import { IdbDirectoryDimensionPersonMetadata, IReportIdbDirectoryDimensionPerson } from './dxc-model-idb-directory-dimension-person.interface';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;

@Component({
  selector: 'app-dxc-model-idb-directory-dimension-person',
  templateUrl: './dxc-model-idb-directory-dimension-person.component.html',
  styleUrls: ['./dxc-model-idb-directory-dimension-person.component.scss'],
  providers: [
    IdbDirectoryDimensionPersonMetadata
  ]
})
export class DxcModelIdbDirectoryDimensionPersonComponent implements OnInit {

  selectData: IDxc_Model_Idb_DirectoryDimensionPerson;
  dataSourceName: any;
  dataModelName: any = 'ฐานข้อมูลสารบบคดี (มิติคน)';
  id: any;
  dataHtml: IReportIdbDirectoryDimensionPerson;
  constructor(private html: IdbDirectoryDimensionPersonMetadata) {
    // const schema = environment.qm.sub[0]['dop'].sub[0]['MoiDsdWorkforceDevelopments'].schema;
    //   this.selectData = JSON.parse(localStorage.getItem(schema));
    this.selectData = JSON.parse(localStorage.getItem('agoth-directory-dimension-person'));
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