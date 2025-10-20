import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Jfo_Jfo_Case64 } from 'src/app/core/shared/models/Dxc_Model_Jfo_Jfo_Case64';
import { environment } from 'src/environments/environment';
import { IReportJfoJfoCase64, JfoJfoCase64Metadata } from './dxc-model-jfo-jfo-case64.interface';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'app-dxc-model-jfo-jfo-case64',
  templateUrl: './dxc-model-jfo-jfo-case64.component.html',
  styleUrls: ['./dxc-model-jfo-jfo-case64.component.scss'],
  providers: [
    JfoJfoCase64Metadata
  ]
})
export class DxcModelJfoJfoCase64Component implements OnInit {

  selectData: IDxc_Model_Jfo_Jfo_Case64;
  dataSourceName: any;
  dataModelName: any = 'ฐานข้อมูลกองทุนยุติธรรม (2564)';
  id: any;
  dataHtml: IReportJfoJfoCase64;
  constructor(private html: JfoJfoCase64Metadata) { 
    const schema = environment.qm.sub[0]['jfo'].sub[0]['jfoCase64'].schema;
    this.selectData = JSON.parse(localStorage.getItem('jfo-jfo-case64'));
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
    }
    pdfReactor.convertAsync(config, function (id) {
      console.log(id);
      pdfReactor.getProgress(id, function (progress) {
        setTimeout(function () {
          if (!progress.finished) {
            pdfReactor.getDocument(id, function (Result) {
              console.log(Result.document);
              const iframe = document.getElementById('result')
              iframe.src = 'data:application/pdf;base64,' + Result.document;
            });
          }
        }, 3000);
      });
    });
  }

}
