import { Component, OnInit } from '@angular/core';
import { DocAbsolutePrisonerInformationBeforeReleaseOnProbationMetadata, IReportDocAbsolutePrisonerInformationBeforeReleaseOnProbation } from './dxc-model-doc-absolute-prisoner-information-before-release-on-probation.interface';
import { Dxc_Model_Doc_Absolute_Prisoner_Information_Before_Release_On_Probation } from 'src/app/core/shared/models/Dxc_Model_Doc_Absolute_Prisoner_Information_Before_Release_On_Probation';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;

@Component({
  selector: 'app-dxc-model-doc-absolute-prisoner-information-before-release-on-probation',
  templateUrl: './dxc-model-doc-absolute-prisoner-information-before-release-on-probation.component.html',
  styleUrls: ['./dxc-model-doc-absolute-prisoner-information-before-release-on-probation.component.scss'],
  providers: [
    DocAbsolutePrisonerInformationBeforeReleaseOnProbationMetadata
  ]
})
export class DxcModelDocAbsolutePrisonerInformationBeforeReleaseOnProbationComponent implements OnInit {

  selectData: Dxc_Model_Doc_Absolute_Prisoner_Information_Before_Release_On_Probation;
  dataSourceName: any;
  dataModelName: any = 'แบบบันทึกข้อมูลนักโทษเด็ดขาดก่อนปล่อยคุมประพฤติ (แบบ ส.1 - 46)';
  id: any;
  dataHtml: IReportDocAbsolutePrisonerInformationBeforeReleaseOnProbation;
  constructor(private html: DocAbsolutePrisonerInformationBeforeReleaseOnProbationMetadata) {
    this.selectData = JSON.parse(localStorage.getItem('doc-absolute-prisoner-information'));
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
