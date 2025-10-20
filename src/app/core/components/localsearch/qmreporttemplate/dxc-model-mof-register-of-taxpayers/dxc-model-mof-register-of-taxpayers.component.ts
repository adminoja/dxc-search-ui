import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Mof_register_Of_Taxpayers } from 'src/app/core/shared/models/Dxc_Model_Mof_register_Of_Taxpayers';
import { environment } from 'src/environments/environment';
import { IReportMofRegisterOfTaxpayers, MofRegisterOfTaxpayersMetadata } from './dxc-model-mof-register-of-taxpayers.interface';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'app-dxc-model-mof-register-of-taxpayers',
  templateUrl: './dxc-model-mof-register-of-taxpayers.component.html',
  styleUrls: ['./dxc-model-mof-register-of-taxpayers.component.scss'],
  providers: [  MofRegisterOfTaxpayersMetadata ]
})
export class DxcModelMofRegisterOfTaxpayersComponent implements OnInit {

  selectData: IDxc_Model_Mof_register_Of_Taxpayers;
  dataSourceName: any;
  dataModelName: any = 'ฐานข้อมูลทะเบียนผู้เสียภาษี (Linkage)';
  id: any;
  dataHtml: IReportMofRegisterOfTaxpayers;
  constructor(private html: MofRegisterOfTaxpayersMetadata) {
    const schema = environment.qm.sub[0]['rd'].sub[0]['registeroftaxpayers'].schema;
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
