import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Dop_Probationer_Narcotics } from 'src/app/core/shared/models/Dxc_Model_Dop_Probationer_Narcotics';
import { DopProbationerNarcoticsMetadata, IReportDopProbationerNarcotics } from './dxc-model-dop-probationer-narcotics.interface';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;

@Component({
  selector: 'app-dxc-model-dop-probationer-narcotics',
  templateUrl: './dxc-model-dop-probationer-narcotics.component.html',
  styleUrls: ['./dxc-model-dop-probationer-narcotics.component.scss'],
  providers: [
    DopProbationerNarcoticsMetadata
  ]
})
export class DxcModelDopProbationerNarcoticsComponent implements OnInit {

  selectData: IDxc_Model_Dop_Probationer_Narcotics;
    dataSourceName: any
    dataModelName: any = 'ผู้ถูกคุมประพฤติในคดียาเสพติดและผลการเข้าร่วมกิจกรรมแก้ไขฟื้นฟู';
    id: any;
    dataHtml: IReportDopProbationerNarcotics;
    constructor(private html: DopProbationerNarcoticsMetadata) {
      this.selectData = JSON.parse(localStorage.getItem('dop-probationer-narcotics'));
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
        pdfReactor.convertAsync(config, function(id) {
          console.log(id);
          pdfReactor.getProgress(id, function(progress) {
            setTimeout(function() {
              if (!progress.finished) {
                pdfReactor.getDocument(id, function(Result) {
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