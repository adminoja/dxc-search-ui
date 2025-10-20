import { Component, OnInit, Input } from '@angular/core';
import { IReportRtpCriminal, RtpCriminalMetadata } from './dxc-model-rtp-criminal.interface';
import { IDxc_Model_Rtp_Criminal } from 'src/app/core/shared/models/Dxc_Model_Rtp_Criminal';
declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dxc-model-rtp-criminal',
  templateUrl: './dxc-model-rtp-criminal.component.html',
  styleUrls: ['./dxc-model-rtp-criminal.component.css'],
  providers: [
    RtpCriminalMetadata
  ]
})
export class DxcModelRtpCriminalComponent implements OnInit {
  selectData: IDxc_Model_Rtp_Criminal;
  dataSourceName: any;
  dataModelName: any = 'ฐานข้อมูลผู้กระทำผิดกฎหมาย (ฐานข้อมูลเก่า ระบบ Police)';
  id: any;
  dataHtml: IReportRtpCriminal;
  constructor(private html: RtpCriminalMetadata) {
    this.selectData = JSON.parse(localStorage.getItem('rtp-criminal'));
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
