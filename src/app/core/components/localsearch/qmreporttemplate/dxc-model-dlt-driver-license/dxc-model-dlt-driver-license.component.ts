import { Component, OnInit, Input } from '@angular/core';
import { IDxc_Model_Dlt_DriverLicenseNew } from '../../../../shared/models/Dxc_Model_Dlt_DriverLicenseNew';
import { DltDriverLicenseMetadata, IReportDltDriverLicense } from './dxc-model-dlt-driver-license.interface';
import { environment } from 'src/environments/environment';

declare var PDFreactor: any;
declare var document: any;

@Component({
  selector: 'app-dxc-model-dlt-driver-license',
  templateUrl: './dxc-model-dlt-driver-license.component.html',
  styleUrls: ['./dxc-model-dlt-driver-license.component.css'],
  providers: [DltDriverLicenseMetadata]
})
export class DxcModelDltDriverLicenseComponent implements OnInit {

  selectData: IDxc_Model_Dlt_DriverLicenseNew;
  dataSourceName: any;
  dataModelName: any = 'ใบอนุญาตขับขี่';
  id: any;
  dataHtml: IReportDltDriverLicense;
  constructor(private html: DltDriverLicenseMetadata) {
    const schema = environment.qm.sub[0]['dlt'].sub[0]['driverLicense'].schema;
    this.selectData = JSON.parse(localStorage.getItem(schema)); // localStorage.getItem(key) คือ การเรียกใช้ข้อมูล key ของ Local Storage
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
