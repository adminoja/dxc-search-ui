import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Doc_PrisonerImages } from 'src/app/core/shared/models/Dxc_Model_Doc_PrisonerImages';
import { DocPrisonerImagesMetadata, IReportDocPrisonerImages } from './dxc-model-doc-prisoner-images.interface';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;

@Component({
  selector: 'app-dxc-model-doc-prisoner-images',
  templateUrl: './dxc-model-doc-prisoner-images.component.html',
  styleUrls: ['./dxc-model-doc-prisoner-images.component.scss'],
  providers: [
    DocPrisonerImagesMetadata
  ]
})
export class DxcModelDocPrisonerImagesComponent implements OnInit {

  selectData: IDxc_Model_Doc_PrisonerImages;
  dataSourceName: any;
  dataModelName: any = 'ฐานข้อมูลนิติบุคคล';
  id: any;
  dataHtml: IReportDocPrisonerImages;
  constructor(private html: DocPrisonerImagesMetadata) {
    this.selectData = JSON.parse(localStorage.getItem('doc-prisoner-images'));
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
