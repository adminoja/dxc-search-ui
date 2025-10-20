import { Component, OnInit, Input } from '@angular/core';
import { DopaMoiPassportsMetadata, IReportDopaMoiPassports } from './dxc-model-dopa-moi-passports.interface';
import { IDxc_Model_Moi_Dopa_Passports } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Passports';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'app-dxc-model-dopa-moi-passports',
  templateUrl: './dxc-model-dopa-moi-passports.component.html',
  styleUrls: ['./dxc-model-dopa-moi-passports.component.css'],
  providers: [
    DopaMoiPassportsMetadata
  ]
})
export class DxcModelDopaMoiPassportsComponent implements OnInit {

  selectData: IDxc_Model_Moi_Dopa_Passports;
  dataSourceName: any;
  dataModelName: any = 'ข้อมูลรายการประวัติหนังสือเดินทาง กรมการกงสุล';
  id: any;
  dataHtml: IReportDopaMoiPassports;
  constructor(private html: DopaMoiPassportsMetadata) {
    this.selectData = JSON.parse(localStorage.getItem('dopa-moi-dopa-passports'));
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
    pdfReactor.convertAsync(config, function (id) {
      console.log(id);
      pdfReactor.getProgress(id, function (progress) {
        setTimeout(function () {
          if (!progress.finished) {
            pdfReactor.getDocument(id, function (Result) {
              console.log(Result.document);
              const iframe = document.getElementById('result')
              iframe.src = 'data:application/pdf;base64,' + Result.document;
            });
          }
        }, 3000);
      });
    });
  }
}





