import { Component, OnInit, Input } from '@angular/core';
import { IDxc_Model_Doc_Reg_seize } from '../../../../shared/models/Dxc_Model_Doc_Reg_seize';
import { DocRegseizeMetadata, IReportDocRegseize } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-doc-reg-seize/dxc-model-doc-reg-seize.interface';
import { environment } from 'src/environments/environment.prod';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'app-dxc-model-doc-reg-seize',
  templateUrl: './dxc-model-doc-reg-seize.component.html',
  styleUrls: ['./dxc-model-doc-reg-seize.component.css'],
  providers: [
    DocRegseizeMetadata
  ]
})
export class DxcModelDocRegSeizeComponent implements OnInit {

  selectData: IDxc_Model_Doc_Reg_seize;
  dataSourceName: any;
  dataModelName: any = 'อายัดตัวผู้ต้องขัง';
  id: any;
  dataHtml: IReportDocRegseize;
  constructor(private html: DocRegseizeMetadata) {
    const schema = environment.qm.sub[0]['doc'].sub[0]['regseize'].schema;
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
              var iframe = document.getElementById('result');
              iframe.src = 'data:application/pdf;base64,' + Result.document
            });
          }
        }, 3000);
      });
    });
  }
}

