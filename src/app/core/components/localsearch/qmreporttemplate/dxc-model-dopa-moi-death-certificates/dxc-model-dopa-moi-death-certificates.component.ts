import { Component, OnInit, Input } from '@angular/core';
import { DopaMoiDeathCertificatesMetadata, IReportDopaMoiDeathCertificates } from './dxc-model-dopa-moi-death-certificates.interface';
import { IDxc_Model_Dopa_Moi_Death_Certificates } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Death_Certificates';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'app-dxc-model-dopa-moi-death-certificates',
  templateUrl: './dxc-model-dopa-moi-death-certificates.component.html',
  styleUrls: ['./dxc-model-dopa-moi-death-certificates.component.css'],
  providers: [
    DopaMoiDeathCertificatesMetadata
  ]
})
export class DxcModelDopaMoiDeathCertificatesComponent implements OnInit {

  selectData: IDxc_Model_Dopa_Moi_Death_Certificates;
  dataSourceName: any;
  dataModelName: any = "ข้อมูลใบมรณบัตร";
  id: any;
  dataHtml: IReportDopaMoiDeathCertificates;
  constructor(private html: DopaMoiDeathCertificatesMetadata) {
    this.selectData = JSON.parse(localStorage.getItem('dopa-moi-dopa-death-certificates'));
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
        "keyAlias": "le-9474320e-12b6-4d31-b5c2-96673e619c6b",
        "keystorePassword": "1234",
        "keystoreType": "PKCS12",
        "keystoreURL": "https://search.dxc.go.th/public/secur/keystore.pfx",
        "signingMode": "WINCER_SIGNED"
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
              iframe.src = "data:application/pdf;base64," + Result.document
            });
          }
        }, 3000);
      });
    });
  }
}

