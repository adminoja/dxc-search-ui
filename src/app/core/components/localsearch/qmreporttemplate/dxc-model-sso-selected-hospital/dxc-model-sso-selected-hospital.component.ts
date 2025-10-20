import { Component, OnInit, Input } from '@angular/core';
import { SsolSsoSelectedHospitalMetaData } from './dxc-model-sso-selected-hospital.interface';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'dxc-model-sso-selected-hospital',
  templateUrl: './dxc-model-sso-selected-hospital.component.html',
  styleUrls: ['./dxc-model-sso-selected-hospital.component.css'],
  providers: [SsolSsoSelectedHospitalMetaData]
})
export class DxcModelSsoSelectedHospitalComponent implements OnInit {
  @Input() selectData:any;
  dataSourceName:any;
  dataModelName:any = 'ข้อมูลเลือกสถานพยาบาล';
  id:any;
  constructor(private html: SsolSsoSelectedHospitalMetaData) {
    this.selectData = JSON.parse(localStorage.getItem('sso-select-hospital'));
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
