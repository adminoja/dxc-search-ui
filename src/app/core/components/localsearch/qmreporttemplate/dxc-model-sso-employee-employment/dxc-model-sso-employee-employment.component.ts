import { Component, OnInit, Input } from '@angular/core';
import { SsoEmployeeEmploymentMetaData } from './dxc-model-sso-employee-employment.interface';
declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'dxc-model-sso-employee-employment',
  templateUrl: './dxc-model-sso-employee-employment.component.html',
  styleUrls: ['./dxc-model-sso-employee-employment.component.css'],
  providers: [SsoEmployeeEmploymentMetaData]
})

export class DxcModelSsoEmployeeEmploymentComponent implements OnInit {
  @Input() selectData:any;
  dataSourceName: any;
    dataModelName: any = 'ผู้ประกันตน';
    id: any;
    prisonerId: any;
    eselectData: any;
  constructor(private html: SsoEmployeeEmploymentMetaData) {
    this.selectData = JSON.parse(localStorage.getItem('sso-employee-employment'));
   }

   ngOnInit(): void {
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
    }
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
