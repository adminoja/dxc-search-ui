import { Component, OnInit, Input } from '@angular/core';
import { Dxc_Model_Dopa_Citizen } from '../../../../shared/models/Dxc_Model_Dopa_Citizen';
import { DopaCitizenMetadata, IReportDopaCitizen } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-citizen/dxc-model-dopa-citizen.interface';
declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dxc-model-dopa-citizen',
  templateUrl: './dxc-model-dopa-citizen.component.html',
  styleUrls: ['./dxc-model-dopa-citizen.component.css'],
  providers: [
    DopaCitizenMetadata
  ]
})
export class DxcModelDopaCitizenComponent implements OnInit {

  selectData: Dxc_Model_Dopa_Citizen;
  dataSourceName: any;
  dataModelName: any = 'ทะเบียนราษฎร';
  id: any;
  dataHtml: IReportDopaCitizen;
  constructor(private html: DopaCitizenMetadata) {
    this.selectData = JSON.parse(localStorage.getItem('dopa-citizen'));
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
              // tslint:disable-next-line: prefer-const
              let iframe = document.getElementById('result');
              iframe.src = 'data:application/pdf;base64,' + Result.document;
            });
          }
        }, 3000);
      });
    });
  }
}
