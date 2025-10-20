import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Rtp_CriminalRecord } from 'src/app/core/shared/models/Dxc_Model_Rtp_CriminalRecord';

import { IReportRtpCriminalRecord, RtpCriminalRecordMetadata } from './dxc-model-rtp-criminal-record.interface';
declare var PDFreactor: any;
declare var document: any;
@Component({
  selector: 'app-dxc-model-rtp-criminal-record',
  templateUrl: './dxc-model-rtp-criminal-record.component.html',
  styleUrls: ['./dxc-model-rtp-criminal-record.component.scss'],
  providers: [ RtpCriminalRecordMetadata ]
})
export class DxcModelRtpCriminalRecordComponent implements OnInit {
  selectData: IDxc_Model_Rtp_CriminalRecord;
  dataModelName: any = 'ฐานข้อมูลทะเบียนประวัติอาชญากร';
  id: any;
  dataHtml: IReportRtpCriminalRecord;
  constructor(private html: RtpCriminalRecordMetadata) { 
    this.selectData = JSON.parse(localStorage.getItem('rtp-criminal-record'));
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
