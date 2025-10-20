import { Component, OnInit, Input } from '@angular/core';
import { DopaMoiDivorceCertificatesMetadata, IReportDopaMoiDivorceCertificates } from './dxc-model-dopa-moi-divorce-certificates.interface';
import { Dxc_Model_Dopa_Moi_Divorce_Certificates } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Divorce_Certificates';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'app-dxc-model-dopa-moi-divorce-certificates',
  templateUrl: './dxc-model-dopa-moi-divorce-certificates.component.html',
  styleUrls: ['./dxc-model-dopa-moi-divorce-certificates.component.css'],
  providers: [
    DopaMoiDivorceCertificatesMetadata
  ]
})
export class DxcModelDopaMoiDivorceCertificatesComponent implements OnInit {

  selectData: Dxc_Model_Dopa_Moi_Divorce_Certificates;
  dataSourceName: any;
  dataModelName: any = "ข้อมูลทะเบียนหย่า (Moi Linkage)";
  id: any;
  dataHtml: IReportDopaMoiDivorceCertificates;
  constructor(private html: DopaMoiDivorceCertificatesMetadata) {
    this.selectData = JSON.parse(localStorage.getItem("dopa-moi-dopa-divorce-certificates"));
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




