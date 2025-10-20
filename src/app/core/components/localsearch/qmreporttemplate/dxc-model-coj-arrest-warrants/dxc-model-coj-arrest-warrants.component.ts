import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Coj_ArrestWarrants } from 'src/app/core/shared/models/Dxc_Model_Coj_ArrestWarrants';
import { CojArrestWarrantsMetadata, IReportCojArrestWarrants } from './dxc-model-coj-arrest-warrants.interface';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'app-dxc-model-coj-arrest-warrants',
  templateUrl: './dxc-model-coj-arrest-warrants.component.html',
  styleUrls: ['./dxc-model-coj-arrest-warrants.component.scss'],
  providers: [
    CojArrestWarrantsMetadata
  ]
})
export class DxcModelCojArrestWarrantsComponent implements OnInit {

  selectData: IDxc_Model_Coj_ArrestWarrants;
  dataSourceName: any;
  dataModelName: any = 'ฐานข้อมูลหมายจับศาล';
  id: any;
  dataHtml: IReportCojArrestWarrants;
  constructor(private html: CojArrestWarrantsMetadata) {
    // const schema = environment.qm.sub[0]['dop'].sub[0]['MoiDsdWorkforceDevelopments'].schema;
    //   this.selectData = JSON.parse(localStorage.getItem(schema));
    this.selectData = JSON.parse(localStorage.getItem('coj-arrest-warrants'));
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
