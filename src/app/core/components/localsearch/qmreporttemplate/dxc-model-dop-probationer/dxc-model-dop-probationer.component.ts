import {environment} from '../../../../../../environments/environment.prod';
import {IDxc_Model_Dop_Probationer} from '../../../../shared/models/Dxc_Model_Dop_Probationer';
import {IReportDopProbationer, DopProbationerMetadata} from './dxc-model-dop-probationer.interface';

import { Component, OnInit, Input } from '@angular/core';
declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'dxc-model-dop-probations',
  templateUrl: './dxc-model-dop-probationer.component.html',
  styleUrls: ['./dxc-model-dop-probationer.component.css'],
  providers: [
    DopProbationerMetadata
  ]
})
export class DxcModelDopProbationerComponent implements OnInit {

  selectData: IDxc_Model_Dop_Probationer;
    dataSourceName: any;
    dataModelName: any = 'ผู้ถูกคุมประพฤติ';
    id: any;
    dataHtml: IReportDopProbationer;
    constructor(private html: DopProbationerMetadata) {
      this.selectData = JSON.parse(localStorage.getItem('dop-probationee'));
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
