import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Dlt_CarLicenseNew } from 'src/app/core/shared/models/Dxc_Model_Dlt_CarLicenseNew';
import { environment } from 'src/environments/environment';
import { IReportDltCarLicense, DltCarLicenseMetadata } from './dxc-model-dlt-car-license.interface';

declare var PDFreactor: any;
declare var document: any;

@Component({
  selector: 'dxc-model-dlt-car-license',
  templateUrl: './dxc-model-dlt-car-license.component.html',
  styleUrls: ['./dxc-model-dlt-car-license.component.css'],
  providers: [
    DltCarLicenseMetadata
  ]
})
export class DxcModelDltCarLicenseComponent implements OnInit {

  selectData: IDxc_Model_Dlt_CarLicenseNew;
  dataSourceName: any;
  dataModelName: any = 'ทะเบียนยานพาหนะ';
  id: any;
  dataHtml: IReportDltCarLicense;
  constructor(private html: DltCarLicenseMetadata) {
    //const schema = environment.qm.sub[0]['dlt'].sub[0]['carLicense'].schema;
    this.selectData = JSON.parse(localStorage.getItem('dlt-car-license-new'));
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
