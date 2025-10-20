import { IDxc_Model_Jfo_Jfo_Case } from './../../../../shared/models/Dxc_Model_Jfo_Jfo_Case';
import { JfoJfoCaseMetadata, IReportJfoJfoCase } from './dxc-model-jfo-jfo-case.interface';
import { environment } from 'src/environments/environment';
import { Component, OnInit, Input } from '@angular/core';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'dxc-model-jfo-jfo-case',
  templateUrl: './dxc-model-jfo-jfo-case.component.html',
  styleUrls: ['./dxc-model-jfo-jfo-case.component.css'],
  providers: [
    JfoJfoCaseMetadata
  ]
})
export class DxcModelJfoJfoCaseComponent implements OnInit {
  selectData: IDxc_Model_Jfo_Jfo_Case;
  dataSourceName: any;
  dataModelName: any = 'ฐานข้อมูลกองทุนยุติธรรม';
  id: any;
  dataHtml: IReportJfoJfoCase;
  constructor(private html: JfoJfoCaseMetadata) {
    const schema = environment.qm.sub[0]['jfo'].sub[0]['jfoCase'].schema;
    this.selectData = JSON.parse(localStorage.getItem('jfo-jfo-case'));
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