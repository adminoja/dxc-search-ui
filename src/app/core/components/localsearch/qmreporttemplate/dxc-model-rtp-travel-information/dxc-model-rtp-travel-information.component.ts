import { Component, Input, OnInit } from '@angular/core';
import { IDxc_Model_Rtp_TravelInformation } from 'src/app/core/shared/models/Dxc_Model_Rtp_TravelInformation';
import { RtpMissingPersonCaseMetadata } from '../dxc-model-rtp-missing-person-case/dxc-model-rtp-missing-person-case.interface';
import { IReportRtpTravelInformation, RtpTravelInformationMetadata } from './dxc-model-rtp-travel-information.interface';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;

@Component({
  selector: 'app-dxc-model-rtp-travel-information',
  templateUrl: './dxc-model-rtp-travel-information.component.html',
  styleUrls: ['./dxc-model-rtp-travel-information.component.scss'],
  providers: [RtpTravelInformationMetadata]
})
export class DxcModelRtpTravelInformationComponent implements OnInit {
  selectData: IDxc_Model_Rtp_TravelInformation;
  dataModelName: any = 'ฐานข้อมูลการเดินทางเข้าออกประเทศ';
  id: any;
  dataHtml: IReportRtpTravelInformation;
  constructor(private html: RtpTravelInformationMetadata) {
    this.selectData = JSON.parse(localStorage.getItem('rtp-thai-entry-exit'));
  }

  ngOnInit(): void {
    this.pdfPreview();
  }

  pdfPreview() {
    var pdfReactor = new PDFreactor();
    console.log(pdfReactor);
    var config = {
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
              console.log(Result.document)
              var iframe = document.getElementById('result')
              iframe.src = 'data:application/pdf;base64,' + Result.document
            });
          }
        }, 3000);
      });
    });
  }

}
