import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Doc_ReleasedOffender } from 'src/app/core/shared/models/Dxc_Model_Doc_ReleasedOffender';
import { DocReleasedOffenderMetadata, IReportDocReleasedOffender } from './dxc-model-released-offender.interface';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any; 

@Component({
  selector: 'app-dxc-model-released-offender',
  templateUrl: './dxc-model-released-offender.component.html',
  styleUrls: ['./dxc-model-released-offender.component.scss'],
  providers: [DocReleasedOffenderMetadata]
})
export class DxcModelReleasedOffenderComponent implements OnInit {

  selectData: IDxc_Model_Doc_ReleasedOffender;
  dataSourceName: any;
  dataModelName: any = 'ฐานข้อมูลบุคคลพ้นโทษ';
  id: any;
  dataHtml: IReportDocReleasedOffender;
  constructor(private html: DocReleasedOffenderMetadata) {
    const schema = 'idb-released-offender';
    this.selectData = JSON.parse(localStorage.getItem(schema));
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
