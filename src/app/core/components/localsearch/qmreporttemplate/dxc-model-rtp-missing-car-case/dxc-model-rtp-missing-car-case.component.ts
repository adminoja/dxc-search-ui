import {RtpMissingCarCaseMetadata} from './dxc-model-rtp-missing-car-case.interface';
import { Component, OnInit, Input } from "@angular/core";

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'dxc-model-rtp-missing-car-case',
  templateUrl: './dxc-model-rtp-missing-car-case.component.html',
  styleUrls: ['./dxc-model-rtp-missing-car-case.component.css'],
  providers: [RtpMissingCarCaseMetadata]
})
export class DxcModelRtpMissingCarCaseComponent implements OnInit {
  @Input() selectData: any;
    dataSourceName: any;
    dataModelName: any = 'คดีรถหาย';
    id: any;
    prisonerId: any;
    eselectData: any;
  constructor(private html: RtpMissingCarCaseMetadata) {
      this.selectData = JSON.parse(localStorage.getItem('rtp-missing-car-case'));
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
