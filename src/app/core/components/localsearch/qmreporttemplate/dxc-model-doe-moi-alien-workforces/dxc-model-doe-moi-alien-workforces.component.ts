import {environment} from '../../../../../../environments/environment.stg';
import { Component, OnInit, Input } from '@angular/core';
import { DoeMoiAlienWorkforcesMetadata, IReportDoeMoiAlienWorkforces } from './dxc-model-doe-moi-alien-workforces.interface';
import { Dxc_Model_Doe_Moi_Alien_Workforces, IDxc_Model_Doe_Moi_Alien_Workforces } from 'src/app/core/shared/models/Dxc_Model_Doe_Moi_Alien_Workforces';
import { DomSanitizer } from '@angular/platform-browser';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'app-dxc-model-doe-moi-alien-workforces',
  templateUrl: './dxc-model-doe-moi-alien-workforces.component.html',
  styleUrls: ['./dxc-model-doe-moi-alien-workforces.component.css'],
  providers: [
    DoeMoiAlienWorkforcesMetadata
  ]
})
export class DxcModelDoeMoiAlienWorkforcesComponent implements OnInit {

  selectData: IDxc_Model_Doe_Moi_Alien_Workforces;
  dataSourceName: any;
  dataModelName: any = 'ทะเบียนแรงงานต่างด้าว (ทุกกลุ่ม)';
  id: any;
  dataHtml: IReportDoeMoiAlienWorkforces;
  constructor(private html: DoeMoiAlienWorkforcesMetadata, public sanitizer: DomSanitizer) {
    const schema = environment.qm.sub[0]['doe'].sub[0]['alienworkforces'].schema;
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
