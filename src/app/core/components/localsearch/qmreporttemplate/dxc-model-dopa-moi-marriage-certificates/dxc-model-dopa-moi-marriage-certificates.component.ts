import { Component, OnInit, Input } from '@angular/core';
import { DopaMoiMarriageCertificatesMetadata, IReportDopaMoiMarriageCertificates } from './dxc-model-dopa-moi-marriage-certificates.interface';
import { Dxc_Model_Moi_Dopa_Marriage_Certificates, IDxc_Model_Moi_Dopa_Marriage_Certificates } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Marriage_Certificates';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'app-dxc-model-dopa-moi-marriage-certificates',
  templateUrl: './dxc-model-dopa-moi-marriage-certificates.component.html',
  styleUrls: ['./dxc-model-dopa-moi-marriage-certificates.component.css'],
  providers: [
    DopaMoiMarriageCertificatesMetadata
  ]
})
export class DxcModelDopaMoiMarriageCertificatesComponent implements OnInit {

  selectData: IDxc_Model_Moi_Dopa_Marriage_Certificates;
  dataSourceName: any;
  dataModelName: any = 'ข้อมูลทะเบียนสมรส';
  id: any;
  dataHtml: IReportDopaMoiMarriageCertificates;
  constructor(private html: DopaMoiMarriageCertificatesMetadata) {
    this.selectData = JSON.parse(localStorage.getItem('dopa-moi-dopa-marriage-certificates'));
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
