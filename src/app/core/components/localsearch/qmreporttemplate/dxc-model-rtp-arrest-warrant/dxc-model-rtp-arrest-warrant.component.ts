import { Component, OnInit, Input } from '@angular/core';
import { IDxc_Model_Rtp_ArrestWarrant } from 'src/app/core/shared/models/Dxc_Model_Rtp_ArrestWarrant';
import { IReportRtpArrestWarrant, RtpArrestWarrantMetadata } from './dxc-model-rtp-arrest-warrant.interface';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;

@Component({
  selector: 'app-dxc-model-rtp-arrest-warrant',
  templateUrl: './dxc-model-rtp-arrest-warrant.component.html',
  styleUrls: ['./dxc-model-rtp-arrest-warrant.component.css'],
  providers: [
    RtpArrestWarrantMetadata
  ]
})
export class DxcModelRtpArrestWarrantComponent implements OnInit {

  selectData: IDxc_Model_Rtp_ArrestWarrant;
  dataSourceName: any;
  dataModelName: any = 'หมายจับ';
  id: any;
  dataHtml: IReportRtpArrestWarrant;
  constructor(private html: RtpArrestWarrantMetadata) {
    this.selectData = JSON.parse(localStorage.getItem('rtp-arrest-warrant'));
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
