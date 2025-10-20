import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Msdhs_Moi_New_Born_Babies } from 'src/app/core/shared/models/Dxc_Model_Msdhs_Moi_New_Born_Babies';
import { MsdhsMoiNewBornBabiesMetadata, IReportMsdhsMoiNewBornBabies } from './dxc-model-msdhs-moi-new-born-babies.interface';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'app-dxc-model-msdhs-moi-new-born-babies',
  templateUrl: './dxc-model-msdhs-moi-new-born-babies.component.html',
  styleUrls: ['./dxc-model-msdhs-moi-new-born-babies.component.css'],
  providers: [MsdhsMoiNewBornBabiesMetadata]
})
export class DxcModelMsdhsMoiNewBornBabiesComponent implements OnInit {
  
  selectData: IDxc_Model_Msdhs_Moi_New_Born_Babies;
  dataSourceName: any;
  dataModelName: any = 'ข้อมูลทะบียนเด็กแรกเกิด';
  id: any;
  dataHtml: IReportMsdhsMoiNewBornBabies;
  constructor(private html: MsdhsMoiNewBornBabiesMetadata) {
    this.selectData = JSON.parse(localStorage.getItem('msdhs-moi-msdhs-new-born-babies'));
  }
  ngOnInit() {
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
