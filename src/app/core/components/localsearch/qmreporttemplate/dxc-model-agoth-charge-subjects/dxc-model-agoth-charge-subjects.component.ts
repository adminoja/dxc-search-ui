import { Component, OnInit, Input } from '@angular/core';
import { AgothChargeSubjectMetadata, IReportAgothChargeSubject } from './dxc-model-agoth-charge-subjects.interface';
import { Dxc_Model_Agoth_ChargeSubject } from 'src/app/core/shared/models/Dxc_Model_Agoth_ChargeSubject';
import { environment } from 'src/environments/environment';
declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;

@Component({
  selector: 'app-dxc-model-agoth-charge-subjects',
  templateUrl: './dxc-model-agoth-charge-subjects.component.html',
  styleUrls: ['./dxc-model-agoth-charge-subjects.component.scss'],
  providers: [
    AgothChargeSubjectMetadata
  ]
})
export class DxcModelAgothChargeSubjectsComponent implements OnInit {
  selectData: Dxc_Model_Agoth_ChargeSubject;
  dataSourceName: any;
  dataModelName: any = 'ข้อมูลผู้ต้องหา/จำเลย';
  id: any;
  dataHtml: IReportAgothChargeSubject;
  constructor(private html: AgothChargeSubjectMetadata) {
    const schema = environment.qm.sub[0]['agoth'].sub[0]['chargeSubject'].schema;
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
