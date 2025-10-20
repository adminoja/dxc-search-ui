import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Dca_Moi_Thailand_Passport } from 'src/app/core/shared/models/Dxc_Model_Dca_Moi_Thailand_Passport';
import { environment } from 'src/environments/environment';
import { IReportMfaMoiThailandPassport, DcaMoiThailanfPassportMetadata} from './dxc-model-dca-moi-thailand-passport.interface';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'app-dxc-model-dca-moi-thailand-passport',
  templateUrl: './dxc-model-dca-moi-thailand-passport.component.html',
  styleUrls: ['./dxc-model-dca-moi-thailand-passport.component.scss'],
  providers: [  DcaMoiThailanfPassportMetadata ]
})

export class DxcModelMfaMoiThailandPassportComponent implements OnInit {

  selectData: IDxc_Model_Dca_Moi_Thailand_Passport;
  dataSourceName: any;
  dataModelName: any = 'ฐานข้อมูลหนังสือเดินทางประเทศไทย (Linkage)';
  id: any;
  dataHtml: IReportMfaMoiThailandPassport;
  constructor(private html: DcaMoiThailanfPassportMetadata) {
    const schema = environment.qm.sub[0]['dca'].sub[0]['thailandPassport'].schema;
    this.selectData = JSON.parse(localStorage.getItem(schema));
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
